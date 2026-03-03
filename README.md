# aldenongjingyi.github.io

Personal portfolio — static HTML/CSS/JS on GitHub Pages.

## Local Development

Open `index.html` in a browser, or use a local server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

Push to `main` branch. GitHub Pages serves from root automatically.

```bash
git add . && git commit -m "update" && git push
```

Site: https://aldenongjingyi.github.io

## Adding a New Project

1. In `index.html`, find the `<!-- Projects -->` section
2. Copy an existing `.project-card` block
3. Update title, description, tech tags, links, and case-study detail
4. Push to deploy

## Adding a New Blog Post

1. Copy `blog/posts/example-post.html` to `blog/posts/your-post.html`
2. Update the title, date, meta tags, and article content
3. Add an entry to `blog/index.html` linking to the new post
4. Update `sitemap.xml` with the new URL
5. Push to deploy
