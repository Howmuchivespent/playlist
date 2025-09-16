// assets/app.js

// 1) Colle ici TES ~60 URLs YouTube (watch/shorts/youtu.be/embed OK, même avec list=...).
const urls = [
  "https://www.youtube.com/watch?v=N2l2bp6bL2s&list=RDN2l2bp6bL2s&start_radio=1",
  "https://www.youtube.com/watch?v=wGWcimtfpX8&list=RDwGWcimtfpX8&start_radio=1",
  "https://www.youtube.com/watch?v=jHjUHKdoaqI&list=RDjHjUHKdoaqI&start_radio=1",
  "https://www.youtube.com/watch?v=SMCd5zrsFpE&list=RDSMCd5zrsFpE&start_radio=1",
  "https://www.youtube.com/watch?v=yz8lllwvVaU&list=RDyz8lllwvVaU&start_radio=1",
  // ... (garde la suite de tes liens)
];

const container = document.getElementById("links");
const searchInput = document.getElementById("search");
const refreshBtn = document.getElementById("refresh");

// ---------- Utils: extraction ID & URL canonique ----------
function extractYouTubeId(raw) {
  try {
    const u = new URL(raw);
    if (u.hostname.includes("youtu.be")) {
      const p = u.pathname.split("/").filter(Boolean);
      return p[0] || null;
    }
    if (u.pathname.startsWith("/shorts/")) {
      const p = u.pathname.split("/").filter(Boolean);
      return p[1] || p[0] || null;
    }
    const m = u.pathname.match(/\/embed\/([^/?#]+)/);
    if (m) return m[1];
    if (u.searchParams.has("v")) return u.searchParams.get("v");
    return null;
  } catch {
    return null;
  }
}
function canonicalWatchUrl(raw) {
  const id = extractYouTubeId(raw);
  return id ? `https://www.youtube.com/watch?v=${id}` : raw;
}
function cacheKey(raw) {
  const id = extractYouTubeId(raw);
  return id ? `ytTitle:id:${id}` : `ytTitle:url:${raw}`;
}

// ---------- Fetch helpers ----------
async function fetchJsonWithBackoff(url, tries = 3) {
  let lastErr;
  for (let attempt = 1; attempt <= tries; attempt++) {
    try {
      const resp = await fetch(url);
      if (resp.ok) return resp.json();
      if (resp.status === 429 || resp.status >= 500) {
        const delay = 400 * attempt + Math.random() * 300;
        await new Promise(r => setTimeout(r, delay));
        lastErr = new Error(`HTTP ${resp.status}`);
        continue;
      }
      throw new Error(`HTTP ${resp.status}`);
    } catch (e) {
      lastErr = e;
      const delay = 350 * attempt + Math.random() * 250;
      await new Promise(r => setTimeout(r, delay));
    }
  }
  throw lastErr;
}

async function fetchTitleFromProviders(rawUrl) {
  const key = cacheKey(rawUrl);
  const cached = localStorage.getItem(key);
  if (cached) return { title: cached, provider: "cache" };

  const canon = canonicalWatchUrl(rawUrl);
  const providers = [
    `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(canon)}`,
    `https://www.youtube-nocookie.com/oembed?format=json&url=${encodeURIComponent(canon)}`,
    `https://noembed.com/embed?url=${encodeURIComponent(canon)}`
  ];

  for (const p of providers) {
    try {
      const data = await fetchJsonWithBackoff(p, 3);
      const title = data && data.title ? String(data.title) : "";
      if (title) {
        localStorage.setItem(key, title);
        return { title, provider: p };
      }
    } catch {
      // try next
    }
  }
  throw new Error("All providers failed");
}

async function mapWithConcurrency(list, mapper, concurrency = 4) {
  const results = new Array(list.length);
  let idx = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (idx < list.length) {
      const i = idx++;
      try { results[i] = await mapper(list[i], i); }
      catch (e) { results[i] = null; }
    }
  });
  await Promise.all(workers);
  return results;
}

// ---------- UI build ----------
const anchors = urls.map((url, i) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.textContent = `Loading… (${i + 1})`;
  a.classList.add("loading");
  container.appendChild(a);
  return a;
});

// Remplir les titres + set dataset pour filtrage
(async () => {
  await mapWithConcurrency(urls, async (url, i) => {
    try {
      const { title, provider } = await fetchTitleFromProviders(url);
      const txt = title && title.trim() ? title : `Song ${i + 1}`;
      anchors[i].textContent = (provider && String(provider).includes("noembed.com")) ? `⚠️ ${txt}` : txt;
      anchors[i].title = txt;
      anchors[i].dataset.title = txt.toLowerCase();
    } catch {
      const fallback = `Song ${i + 1}`;
      anchors[i].textContent = fallback;
      anchors[i].title = fallback;
      anchors[i].dataset.title = fallback.toLowerCase();
    } finally {
      anchors[i].classList.remove("loading");
    }
  }, 4);
})();

// Recherche local (filtre live)
function applyFilter(q) {
  const needle = q.trim().toLowerCase();
  anchors.forEach(a => {
    const t = a.dataset.title || a.textContent.toLowerCase();
    a.classList.toggle("hidden", needle && !t.includes(needle));
  });
}
searchInput?.addEventListener("input", (e) => applyFilter(e.target.value));

// Bouton refresh (purge cache titres + reload)
refreshBtn?.addEventListener("click", () => {
  Object.keys(localStorage).forEach(k => { if (k.startsWith("ytTitle:")) localStorage.removeItem(k); });
  location.reload();
});
