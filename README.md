# MindTrack PWA

## Telepítés (GitHub Pages)

1. Menj: https://github.com/new → hozz létre egy `mindtrack` nevű repót (Public)
2. Töltsd fel az összes fájlt (drag & drop a GitHub webes felületén)
3. Settings → Pages → Source: main branch → Save
4. Az app elérhető lesz: https://FELHASZNÁLÓNÉV.github.io/mindtrack/

## Telepítés telefonra
1. Nyisd meg Chrome-ban a fenti URL-t
2. ⋮ menü → "Hozzáadás a kezdőképernyőhöz"
3. Kész — app ikonként jelenik meg!

## Fájlok
- index.html     → főoldal (dashboard)
- widget.html    → mini widget (4 gomb)
- manifest.json  → PWA konfig
- sw.js          → service worker (offline)
- storage.js     → adattárolás (localStorage)
- icons/         → app ikonok

## AI elemzés
Az AI elemzés az Anthropic API-t használja.
Jelenleg tesztkörnyezetben működik claude.ai-n belül.
Éles deployhoz kell egy backend proxy az API kulcs védelméhez.
