// Javascript.js
// ✅ Tes 60 URLs (watch/shorts/youtu.be/embed OK, même avec list=...).
const urls = [
  "https://www.youtube.com/watch?v=N2l2bp6bL2s&list=RDN2l2bp6bL2s&start_radio=1",
  "https://www.youtube.com/watch?v=wGWcimtfpX8&list=RDwGWcimtfpX8&start_radio=1",
  "https://www.youtube.com/watch?v=jHjUHKdoaqI&list=RDjHjUHKdoaqI&start_radio=1",
  "https://www.youtube.com/watch?v=SMCd5zrsFpE&list=RDSMCd5zrsFpE&start_radio=1",
  "https://www.youtube.com/watch?v=yz8lllwvVaU&list=RDyz8lllwvVaU&start_radio=1",
  "https://www.youtube.com/watch?v=BNV1rm16zhE&list=RDBNV1rm16zhE&start_radio=1",
  "https://www.youtube.com/watch?v=r7TYA7UcQlE&list=RDr7TYA7UcQlE&start_radio=1",
  "https://www.youtube.com/watch?v=mj4yh7YrwfE&list=RDmj4yh7YrwfE&start_radio=1",
  "https://www.youtube.com/watch?v=CjAk_ut6nW0&list=RDCjAk_ut6nW0&start_radio=1",
  "https://www.youtube.com/watch?v=_uu_izpVSEc&list=RD_uu_izpVSEc&start_radio=1",
  "https://www.youtube.com/watch?v=sP0us82q1ck&list=RDsP0us82q1ck&start_radio=1",
  "https://www.youtube.com/watch?v=nkGixIT4HdM&list=RDnkGixIT4HdM&start_radio=1",
  "https://www.youtube.com/watch?v=14PLRhIEAy8&list=RD14PLRhIEAy8&start_radio=1",
  "https://www.youtube.com/watch?v=X7d6Dt17yHk&list=RDX7d6Dt17yHk&start_radio=1",
  "https://www.youtube.com/watch?v=VVRXyZ6B0Qw&list=RDVVRXyZ6B0Qw&start_radio=1",
  "https://www.youtube.com/watch?v=cSlTR0ZVjGI&list=RDcSlTR0ZVjGI&start_radio=1",
  "https://www.youtube.com/watch?v=L8gGHqPBuZM&list=RDL8gGHqPBuZM&start_radio=1",
  "https://www.youtube.com/watch?v=9LEG2UNarP0&list=RD9LEG2UNarP0&start_radio=1",
  "https://www.youtube.com/watch?v=-oMZw8DQbaI&list=RD-oMZw8DQbaI&start_radio=1",
  "https://www.youtube.com/watch?v=lukT_WB5IB0&list=RDlukT_WB5IB0&start_radio=1",
  "https://www.youtube.com/watch?v=Rkt2OCOjVbA&list=RDRkt2OCOjVbA&start_radio=1",
  "https://www.youtube.com/watch?v=0rFZYeoB8Uw&list=RD0rFZYeoB8Uw&start_radio=1",
  "https://www.youtube.com/watch?v=HjYLY3BGDY4&list=RDHjYLY3BGDY4&start_radio=1",
  "https://www.youtube.com/watch?v=zLrOS5oz6IQ&list=RDzLrOS5oz6IQ&start_radio=1",
  "https://www.youtube.com/watch?v=Do1WeQd5Sk4&list=RDDo1WeQd5Sk4&start_radio=1",
  "https://www.youtube.com/watch?v=0jv17p9DF6I&list=RD0jv17p9DF6I&start_radio=1",
  "https://www.youtube.com/watch?v=x8RIixqumUc&list=RDx8RIixqumUc&start_radio=1",
  "https://www.youtube.com/watch?v=3gOHvDP_vCs&list=RD3gOHvDP_vCs&start_radio=1",
  "https://www.youtube.com/watch?v=GoLJJRIWCLU&list=RDGoLJJRIWCLU&start_radio=1",
  "https://www.youtube.com/watch?v=Qb926yclzHg&list=RDQb926yclzHg&start_radio=1",
  "https://www.youtube.com/watch?v=yziY689TBis&list=RDyziY689TBis&start_radio=1",
  "https://www.youtube.com/watch?v=izToCCeLnNA&list=RDizToCCeLnNA&start_radio=1",
  "https://www.youtube.com/watch?v=NTrm_idbhUk&list=RDNTrm_idbhUk&start_radio=1",
  "https://www.youtube.com/watch?v=9DhnfLk7nwQ&list=RD9DhnfLk7nwQ&start_radio=1",
  "https://www.youtube.com/watch?v=6lXMkqjJTNs&list=RD6lXMkqjJTNs&start_radio=1",
  "https://www.youtube.com/watch?v=P-F7AS-Xhus&list=RDP-F7AS-Xhus&start_radio=1",
  "https://www.youtube.com/watch?v=dYGKxxTXqSs&list=RDdYGKxxTXqSs&start_radio=1",
  "https://www.youtube.com/watch?v=iJomDM9SNEM&list=RDiJomDM9SNEM&start_radio=1",
  "https://www.youtube.com/watch?v=wmWdiebyHlY&list=RDwmWdiebyHlY&start_radio=1",
  "https://www.youtube.com/watch?v=DY0wJiIuduM&list=RDDY0wJiIuduM&start_radio=1",
  "https://www.youtube.com/watch?v=_ruxnfq7FC8&list=RD_ruxnfq7FC8&start_radio=1",
  "https://www.youtube.com/watch?v=cT5GghQwhFw&list=RDcT5GghQwhFw&start_radio=1",
  "https://www.youtube.com/watch?v=wAjHQXrIj9o&list=RDwAjHQXrIj9o&start_radio=1",
  "https://www.youtube.com/watch?v=KyDov-QJFGE&list=RDKyDov-QJFGE&start_radio=1",
  "https://www.youtube.com/watch?v=htk6MRjmcnQ&list=RDhtk6MRjmcnQ&start_radio=1",
  "https://www.youtube.com/watch?v=vn7iOhMNUCs&list=RDvn7iOhMNUCs&start_radio=1",
  "https://www.youtube.com/watch?v=aF93xhi2kqg&list=RDaF93xhi2kqg&start_radio=1",
  "https://www.youtube.com/watch?v=aEvbBFV3zB4&list=RDaEvbBFV3zB4&start_radio=1",
  "https://www.youtube.com/watch?v=2o5H8wIR8Go&list=RD2o5H8wIR8Go&start_radio=1",
  "https://www.youtube.com/watch?v=2SUwOgmvzK4&list=RD2SUwOgmvzK4&start_radio=1",
  "https://www.youtube.com/watch?v=gPDcwjJ8pLg&list=RDgPDcwjJ8pLg&start_radio=1",
  "https://www.youtube.com/watch?v=v9V5aByfeCM&list=RDv9V5aByfeCM&start_radio=1",
  "https://www.youtube.com/watch?v=Jnq9wPDoDKg&list=RDJnq9wPDoDKg&start_radio=1",
  "https://www.youtube.com/watch?v=aCyGvGEtOwc&list=RDaCyGvGEtOwc&start_radio=1",
  "https://www.youtube.com/watch?v=jyuRrNBtJIw&list=RDjyuRrNBtJIw&start_radio=1",
  "https://www.youtube.com/watch?v=qv96yJYhk3M&list=RDqv96yJYhk3M&start_radio=1",
  "https://www.youtube.com/watch?v=HEGRwUuWn64&list=RDHEGRwUuWn64&start_radio=1",
  "https://www.youtube.com/watch?v=z41-ebanhB0&list=RDz41-ebanhB0&start_radio=1",
  "https://www.youtube.com/watch?v=sEetXo3R-aM&list=RDsEetXo3R-aM&start_radio=1",
  "https://www.youtube.com/watch?v=Oextk-If8HQ&list=RDOextk-If8HQ&start_radio=1"
];

const container   = document.getElementById("links");
const searchInput = document.getElementById("search");
const refreshBtn  = document.getElementById("refresh");

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
  } catch { return null; }
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

// Remplir les titres + dataset pour filtrage
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

// Recherche live
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
