# Virginia Lee — Teaching Portfolio

A static HTML/CSS/JS teaching portfolio for Virginia Lee, PYP Music Teacher & Educational Leader at ISNS Shenzhen.

## Getting Started

No build tools or server required. Open `index.html` in any modern browser:

```
teaching-portfolio/
└── index.html   ← open this
```

All pages use relative links, so the entire folder must stay together. Works from `file://` on disk or served from any static host (GitHub Pages, Netlify, etc.).

---

## File Structure

```
teaching-portfolio/
├── index.html              — Homepage: hero, bio, credentials, CV link
├── teaching.html           — Teaching philosophy, unit posters, IB standards widget
├── leadership.html         — Leadership roles and responsibilities
├── blog.html               — Blog / reflections
├── student-tools.html      — Hub page linking to student-facing tools
├── grade3.html             — Grade 3: World Music Explorer (full-viewport map)
├── grade5.html             — Grade 5: PYPX Songwriting tools & student voices
├── exhibition-mindmap.html — Standalone Exhibition Mind Map (embedded in grade5)
│
├── style.css               — Global custom styles (complements Tailwind CDN)
│
├── js/
│   └── nav.js              — Shared navigation bar (injected into all pages)
│
├── images/
│   ├── grade3_p1.jpg       — Grade 3 unit poster, page 1
│   ├── grade3_p2.jpg       — Grade 3 unit poster, page 2
│   ├── grade3_p3.jpg       — Grade 3 unit poster, page 3
│   ├── grade4_p1.jpg       — Grade 4 unit poster, page 1
│   ├── grade4_p2.jpg       — Grade 4 unit poster, page 2
│   ├── grade4_p3.jpg       — Grade 4 unit poster, page 3
│   ├── grade5_p1.jpg       — Grade 5 unit poster, page 1
│   └── grade5_p2.jpg       — Grade 5 unit poster, page 2
│
└── world-music-explorer/
    ├── world-music-explorer.html
    ├── app.js
    ├── style.css
    └── world-map.jpg
```

---

## Pages

### Home (`index.html`)
Hero section with Virginia's name and title, two-column about section with photo and bio, credential pills (degrees, certifications, years of experience), CV download button, and footer with contact email.

### Teaching (`teaching.html`)
- Teaching Philosophy card
- ISTE Standards link (opens Padlet)
- Featured Units: poster images grouped by Grade 3, 4, and 5
- IB Teaching and Learning Standards widget (AT1–AT5) with editable evidence fields and Save/Reset toolbar

### Leadership (`leadership.html`)
Leadership roles, responsibilities, and professional contributions.

### Blog (`blog.html`)
Reflections and professional writing.

### Student Tools (`student-tools.html`)
Landing page for student-facing resources with cards linking to Grade 3 and Grade 5 tools.

### Grade 3 — World Music Explorer (`grade3.html`)
Full-viewport iframe embedding the interactive World Music Explorer map.

### Grade 5 — PYPX Songwriting (`grade5.html`)
- Songwriting Toolbox: Chord Progressions and Rhyme Generator
- Student Voices: Exhibition Mind Map embedded via iframe
- Links to the standalone `exhibition-mindmap.html`

---

## Tech Stack

| Layer | Tool |
|---|---|
| Styling | [Tailwind CSS](https://tailwindcss.com/) via CDN + `style.css` |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter), [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) via Google Fonts |
| JavaScript | Vanilla JS (no frameworks) |
| Navigation | Shared IIFE in `js/nav.js`, injected via `innerHTML` |
| Hosting | Static files — no server required |

---

## Customisation

### Updating Navigation
Edit the `pages` array at the top of `js/nav.js`. Active page highlighting is automatic based on the current filename.

### Updating Unit Poster Images
Replace the JPG files in `images/`. File names must match what's referenced in `teaching.html` (`grade3_p1.jpg`, etc.). Original PDFs were converted using [PyMuPDF](https://pymupdf.readthedocs.io/) at 2× resolution.

### Updating the IB Standards Widget
All evidence text is editable directly in the browser on `teaching.html`. Click any evidence field to type, then use the **Save** button to download the page as an HTML file with your entries preserved.

### Updating Personal Info
- **Bio and photo**: `index.html` — look for the About section
- **Email**: Footer in `index.html` and `style.css`
- **CV link**: `index.html` — the "Download CV" button href

### Adding a Blog Post
Add a new card or entry inside `blog.html`.

---

## External Links

| Resource | URL |
|---|---|
| CV (Canva) | https://canva.link/dme7769k2qfzswd |
| ISTE Standards Padlet | https://padlet.com/virginialee2/virginia-lee-iste-standards-c2hdxqahy223gjsh |
| Profile photo | https://virginia-lee.com/virginiaprofile.jpg |
| Contact email | virginia.lee@isnsz.com |
| Personal site | https://virginia-lee.com |
