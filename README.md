# Virginia Lee — Music Teacher Portfolio

Personal portfolio and landing page for Virginia Lee, private music teacher.

**Live site:** [virginia-lee.com](https://virginia-lee.com)

---

## Project Structure

```
Virginia Website/
├── index.html   # Main landing page
├── style.css    # All styles
└── README.md    # This file
```

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen intro with call-to-action buttons |
| **About** | Bio, photo, and credentials |

## Setup & Deployment

### Local preview
Open `index.html` directly in a browser — no build step needed.
   ```

### Deployment options
- **GitHub Pages** — push the repo and enable Pages in repository settings
- **Netlify** — drag and drop the project folder into [netlify.com/drop](https://app.netlify.com/drop)
- **Vercel** — connect the GitHub repo or use `vercel deploy`

### Custom domain (virginia-lee.com)
After deploying, point your domain's DNS to your host:
- **Netlify/Vercel:** add the domain in your project's domain settings, then update your registrar's nameservers or add a CNAME record as instructed.
- **GitHub Pages:** add a `CNAME` file containing `virginia-lee.com` at the repo root, then update your DNS.

## Customization

### Replace placeholder images
The site currently uses Unsplash photos. Swap them for real photos by replacing the `src` attributes in `index.html`:
- **Hero background** — search for `photo-1520523839897` in `style.css`
- **About photo** — search for `photo-1598387993281` in `index.html`

### Update contact email
Find `hello@virginia-lee.com` in `index.html` and replace with Virginia's real address.

### Fonts
The site uses [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (headings) and [Lato](https://fonts.google.com/specimen/Lato) (body) via Google Fonts. Both load from the `<head>` of `index.html`.

## Tech

- Plain HTML5, CSS3, and vanilla JavaScript — no frameworks or build tools
- Responsive down to mobile via CSS Grid and `clamp()`
- Sticky nav with scroll-shadow effect
- Contact form via Formspree (free tier: 50 submissions/month)
