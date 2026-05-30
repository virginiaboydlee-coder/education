# Music Choice Board

An interactive music choice board for upper elementary students. Click a category, then click any
activity card to open it in a new tab. Works on Chromebooks, tablets, and phones.

This is a plain static website (HTML/CSS/JavaScript) — no accounts, no backend, no build step.

## Files

| File | What it is |
|------|------------|
| `index.html` | The page itself. Don't usually need to touch this. |
| `style.css` | Colors, fonts, layout. Edit to restyle. |
| `data.js` | **All your content** — every card title, description, link, and image. Edit this to change activities. |
| `images/` | The card pictures. |

## How to host it free on GitHub Pages

1. Go to <https://github.com> and sign in (create a free account if needed).
2. Click **New** to make a new repository. Name it something like `music-choice-board`.
   Set it to **Public** and click **Create repository**.
3. On the new repo page, click **uploading an existing file**.
4. Drag in **all** of these at once: `index.html`, `style.css`, `data.js`, and the **`images`** folder.
   Click **Commit changes**.
5. In the repo, go to **Settings → Pages** (left sidebar).
6. Under **Branch**, pick `main` and the `/ (root)` folder, then click **Save**.
7. Wait about a minute, refresh the page, and GitHub will show your live link, like:
   `https://yourusername.github.io/music-choice-board/`
8. Share that link with students. Each board also has its own link, e.g.
   `…/music-choice-board/#rhythm` or `…/#create` — handy for bookmarking a single page.

## How to edit the activities

Open `data.js` in any text editor. Each activity looks like this:

```js
{
  "title": "Groove Pizza",
  "desc": "Create your own beats using shapes and patterns",
  "img": "images/image3.png",
  "url": "https://apps.musedlab.org/groovepizza/"
}
```

- Change `title` or `desc` to rename or re-describe an activity.
- Change `url` to point to a different website.
- To **remove** an activity, delete its block (including the comma).
- To **add** one, copy an existing block, paste it, and update the fields. Put a new picture in the
  `images/` folder and point `img` at it.

The menu cards (Home and "Test your knowledge") use `"to"` instead of `"url"` — that's an internal
jump to another board, so leave those as they are unless you're rearranging the menu.

## Editing safely

- Keep every `"`, `,`, `{`, and `}` exactly as shown — JavaScript is picky about punctuation.
- After editing `data.js`, just re-upload it to GitHub (Add file → Upload, or edit it right in GitHub
  with the pencil icon). The site updates within a minute.

## Notes

- Images were resized for fast loading on school devices. If you swap in your own, keeping them around
  400px wide keeps the site quick.
- Links open in a new tab so students don't lose the board.
