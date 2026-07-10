/*
  À PERSONNALISER :
  - "name" pour changer le prénom en haut de page
  - le tableau "tracks" ci-dessous : une ligne par chanson

  Deux types de piste possibles :

  1) "local"  -> le fichier audio est hébergé dans ton dossier /songs/
     { type: "local", title: "...", artist: "...", src: "songs/exemple.mp3" }

  2) "embed"  -> lecteur intégré (Spotify, YouTube, SoundCloud...)
     { type: "embed", title: "...", artist: "...", embedUrl: "https://open.spotify.com/embed/track/XXXX" }

  3) "link"   -> quand l'intégration n'est pas disponible (uploader l'a désactivée)
     { type: "link", title: "...", artist: "...", url: "https://soundcloud.com/artiste/morceau" }

  Pour SoundCloud précisément :
  1. Va sur la page du morceau sur soundcloud.com
  2. Clique sur "Partager" -> onglet "Intégrer"
  3. Dans le code fourni, récupère uniquement la valeur de l'attribut src="..." de l'iframe
  4. Colle-la telle quelle dans "embedUrl" (garde le &color=%23ff5500 pour matcher l'orange du site)

  Si l'onglet "Intégrer" est vide ou grisé -> l'artiste a désactivé l'embed pour ce morceau.
  Dans ce cas, utilise le type "link" avec l'URL normale de la page du morceau.
*/

const name = "Mish";

const tracks = [
  {
    type: "embed",
    title: "long way 2 go [slowed n reverb]",
    artist: "Cassie",
    embedUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1574252791&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  },
  {
    type: "local",
    title: "2. Gods Garden",
    artist: "Nom de l'artiste",
    src: "songs%20local/2.%20Gods%20Garden.mp3"
  },
  {
    type: "local",
    title: "Caught up (in circles)",
    artist: "Nom de l'artiste",
    src: "songs%20local/Caught%20up%20(in%20circles).mp3"
  },
  {
    type: "local",
    title: "VAMP MANSION",
    artist: "DJ YUNG VAMP",
    src: "songs%20local/DJ%20YUNG%20VAMP%20-%20VAMP%20MANSION.wav"
  },
  {
    type: "local",
    title: "GET OUT OF MY HEAD",
    artist: "Nom de l'artiste",
    src: "songs%20local/GET%20OUT%20OF%20MY%20HEAD.mp3"
  },
  {
    type: "local",
    title: "Falling In Love",
    artist: "Haunt",
    src: "songs%20local/Haunt%20-%20Falling%20In%20Love.mp3"
  },
  {
    type: "local",
    title: "Holy Smokes (feat. Lil Uzi Vert)",
    artist: "Nom de l'artiste",
    src: "songs%20local/Holy%20Smokes%20(feat.%20Lil%20Uzi%20Vert).mp3"
  },
  {
    type: "local",
    title: "I'm God",
    artist: "Lil B",
    src: "songs%20local/I'm%20God%20[Lil%20B].mp3"
  },
  {
    type: "local",
    title: "Light Again [Prod. Take A Daytrip]",
    artist: "Nom de l'artiste",
    src: "songs%20local/Light%20Again%20[Prod.%20Take%20A%20Daytrip].mp3"
  },
  {
    type: "local",
    title: "LIGHT THAT SPLIFF w／ LIL ROCKETMAN",
    artist: "Nom de l'artiste",
    src: "songs%20local/LIGHT%20THAT%20SPLIFF%20w／%20LIL%20ROCKETMAN.mp3"
  },
  {
    type: "local",
    title: "Need Me",
    artist: "Lil Tecca",
    src: "songs%20local/Lil%20Tecca%20-%20Need%20Me.mp3"
  },
  {
    type: "local",
    title: "Lonelymeds ft. Kindro",
    artist: "Nom de l'artiste",
    src: "songs%20local/Lonelymeds%20ft.%20Kindro.mp3"
  },
  {
    type: "local",
    title: "Miss The Rage but it's from an alternate timeline",
    artist: "Nom de l'artiste",
    src: "songs%20local/Miss%20The%20Rage%20but%20it's%20from%20an%20alternate%20timeline.mp3"
  },
  {
    type: "local",
    title: "More Than Ever prod. ChaseTheMoney",
    artist: "Nom de l'artiste",
    src: "songs%20local/More%20Than%20Ever%20prod.%20ChaseTheMoney.mp3"
  },
  {
    type: "local",
    title: "Starfish",
    artist: "Savant",
    src: "songs%20local/Savant%20-%20Starfish.mp3"
  },
  {
    type: "local",
    title: "104.5 Sky FM (Best Part Extended)",
    artist: "Skychaser",
    src: "songs%20local/Skychaser%20-%20104.5%20Sky%20FM%20(Best%20Part%20Extended).mp3"
  },
  {
    type: "local",
    title: "Slay (prod. newrvge)",
    artist: "Nom de l'artiste",
    src: "songs%20local/Slay%20(prod.%20newrvge).mp3"
  },
  {
    type: "local",
    title: "Taking A Walk (Prod. Scott Storch)",
    artist: "Nom de l'artiste",
    src: "songs%20local/Taking%20A%20Walk%20(Prod.%20Scott%20Storch).mp3"
  },
  {
    type: "local",
    title: "tesla (slowed electro mix)",
    artist: "Nom de l'artiste",
    src: "songs%20local/tesla%20(slowed%20electro%20mix).mp3"
  },
  {
    type: "local",
    title: "this was playing when liam crashed",
    artist: "Nom de l'artiste",
    src: "songs%20local/this%20was%20playing%20when%20liam%20crashed.mp3"
  },
  {
    type: "local",
    title: "tongue tied",
    artist: "Nom de l'artiste",
    src: "songs%20local/tongue%20tied.mp3"
  },
  {
    type: "local",
    title: "Too Soon",
    artist: "Nom de l'artiste",
    src: "songs%20local/Too%20Soon.mp3"
  }
];

document.getElementById("recipient-name").textContent = name;

const listEl = document.getElementById("tracklist");

function durationToSeconds(d) {
  if (!d) return 0;
  const [m, s] = d.split(":").map(Number);
  return (m || 0) * 60 + (s || 0);
}

function secondsToDuration(total) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function withAutoplay(url) {
  // Force le paramètre autoplay adapté à chaque plateforme, même s'il était
  // à "false" dans l'URL d'origine (ex: nos exemples SoundCloud).
  let result = url;

  if (result.includes("auto_play=")) {
    result = result.replace(/auto_play=(true|false)/, "auto_play=true");
  } else if (result.includes("soundcloud")) {
    result += (result.includes("?") ? "&" : "?") + "auto_play=true";
  }

  if (result.includes("spotify") || result.includes("youtube")) {
    result += (result.includes("?") ? "&" : "?") + "autoplay=1";
  }

  return result;
}

function buildPlayer(track) {
  if (track.type === "local") {
    const audio = document.createElement("audio");
    audio.controls = true;
    audio.src = track.src;
    audio.preload = "none";
    audio.autoplay = true;
    return audio;
  }

  const iframe = document.createElement("iframe");
  iframe.src = withAutoplay(track.embedUrl);

  if (track.embedUrl.includes("spotify")) {
    iframe.height = "80";
  } else if (track.embedUrl.includes("soundcloud")) {
    iframe.height = track.embedUrl.includes("visual=true") ? "300" : "166";
  } else {
    iframe.height = "160"; // YouTube et autres
  }

  iframe.loading = "lazy";
  iframe.allow = "autoplay; encrypted-media; picture-in-picture";
  return iframe;
}

// Garde une référence vers la piste actuellement ouverte, pour pouvoir la
// fermer (et couper le son) quand une autre piste est cliquée.
let currentlyOpen = null;

function closeTrack(entry) {
  entry.li.classList.remove("is-open");
  entry.row.setAttribute("aria-expanded", "false");

  const player = entry.playerWrap.firstElementChild;
  if (player) {
    if (player.tagName === "AUDIO") {
      player.pause();
    } else if (player.tagName === "IFRAME") {
      // Retirer puis vider le src coupe net la lecture (SoundCloud/YouTube/Spotify)
      player.src = "";
    }
    player.remove();
  }
  entry.loaded = false;
}

function renderTrack(track, index) {
  const li = document.createElement("li");
  li.className = "track";

  const row = document.createElement("button");
  row.className = "track-row";
  row.setAttribute("aria-expanded", "false");
  const durationLabel = track.type === "link" ? "↗ SoundCloud" : (track.duration || "--:--");

  row.innerHTML = `
    <span class="track-index">${String(index + 1).padStart(2, "0")}</span>
    <span class="track-info">
      <p class="track-title">${track.title}</p>
      <p class="track-artist">${track.artist}</p>
    </span>
    <span class="track-duration">${durationLabel}</span>
  `;

  const playerWrap = document.createElement("div");
  playerWrap.className = "track-player";

  const entry = { li, row, playerWrap, loaded: false };

  row.addEventListener("click", () => {
    if (track.type === "link") {
      window.open(track.url, "_blank", "noopener");
      return;
    }

    const wasOpen = li.classList.contains("is-open");

    // Si une autre piste joue, on la coupe avant d'ouvrir celle-ci
    if (currentlyOpen && currentlyOpen !== entry) {
      closeTrack(currentlyOpen);
    }

    if (wasOpen) {
      closeTrack(entry);
      currentlyOpen = null;
      return;
    }

    li.classList.add("is-open");
    row.setAttribute("aria-expanded", "true");
    if (!entry.loaded) {
      const player = buildPlayer(track);
      playerWrap.appendChild(player);
      if (player.tagName === "AUDIO") {
        player.play().catch(() => {
          // Lecture auto bloquée par le navigateur : les contrôles restent visibles,
          // il suffit de cliquer sur play manuellement.
        });
      }
      entry.loaded = true;
    }
    currentlyOpen = entry;
  });

  li.appendChild(row);
  li.appendChild(playerWrap);
  listEl.appendChild(li);
}

tracks.forEach((track, i) => renderTrack(track, i));

// Compteur façon cassette
document.getElementById("track-count").textContent = String(tracks.length).padStart(2, "0");
const totalSeconds = tracks.reduce((sum, t) => sum + durationToSeconds(t.duration), 0);
document.getElementById("total-time").textContent = secondsToDuration(totalSeconds);
