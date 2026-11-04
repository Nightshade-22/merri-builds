# Merri Builds

Open-source tools built with Claude, reviewed like an auditor, and released for anyone to use.

Live site: https://nightshade-22.github.io/merri-builds/

## Add a project

Each project is one Markdown file in `src/content/projects/`. The home page grid, the filters and the project's own page are all built from it.

1. Copy an existing file, for example `jarvis.md`, and rename it. The file name becomes the URL, so `home-dashboard.md` is served at `/projects/home-dashboard/`.
2. Fill in the front matter at the top. Only `name`, `pitch` and `status` are required.
3. Write the longer description and setup steps below the front matter in normal Markdown.
4. Put screenshots in `public/shots/<project>/` and list them under `screens`.
5. Open a pull request. When it merges into `main`, the site rebuilds and goes live in a minute or two.

### Front matter reference

| Field | Required | What it does |
|---|---|---|
| `name` | yes | Project name on the card and page |
| `pitch` | yes | One sentence for the card |
| `status` | yes | `idea`, `queued`, `in-build` or `released` |
| `subtitle` | no | Small line under the name |
| `version` | no | Shown next to the status, e.g. `v0.1.1` |
| `order` | no | Lower numbers show first (default 100) |
| `featured` | no | `true` puts this project's screenshots in the home page hero. Use it on one project at a time. |
| `tags` | no | List of short tags, e.g. `[home lab, security]` |
| `repo` | no | GitHub URL. Adds "View on GitHub" and "Latest release" buttons. |
| `youtube` | no | YouTube video ID (the part after `v=`), embedded on the project page |
| `facts` | no | List of `label` / `value` pairs for the side panel |
| `screens` | no | List of screenshots with `label`, `caption`, and `tablet` and/or `phone` paths under `public/` |
| `review` | no | Security review: `status` (`pending` or `done`), `summary`, `fixes` (title + detail), `link`, `linkLabel` |

The schema lives in `src/content.config.ts`. A typo in a field name or status fails the build with a clear message, so broken entries never reach the live site.

## Run it locally

```
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:4321/merri-builds/).

## Custom domain

When you buy a domain, set `site` to it and `base` to `'/'` in `astro.config.mjs`, add a `public/CNAME` file containing the domain, and point the domain's DNS at GitHub Pages.

## First-time GitHub setup

In the repo's Settings → Pages, set Source to **GitHub Actions**. After that, every push to `main` deploys.
