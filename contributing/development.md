```markdown
# 🚀 Development

Welcome to the development guide for running this application on your local computer.

## Getting Started

This site is powered by Node.js! :sparkles: :turtle: :rocket: :sparkles:

It runs seamlessly on macOS, Windows, and Linux environments.

### Prerequisites

Ensure you have Node.js installed. Check the version in `package.json`. If not installed, download the "LTS" installer from [nodejs.org](https://nodejs.org) or follow the [`nodenv` docs](https://github.com/nodenv/nodenv#readme) if you use `nodenv` for switching Node.js versions.

### Installation Steps

1. Clone the repository:

   ```shell
   git clone https://github.com/github/docs
   cd docs
   ```

2. Install dependencies:

   ```shell
   npm ci
   ```

3. Build the project:

   ```shell
   npm run build
   ```

4. Start the server:

   ```shell
   npm start
   ```

Now you should have a running server! Visit [localhost:4000](http://localhost:4000) in your browser.

When you're ready to stop the local server, type <kbd>Ctrl</kbd>+<kbd>C</kbd> in your terminal window.

Note:
- `npm ci` and `npm run build` typically only need to be run once each time you pull the latest for a branch.
  - `npm ci`: Clean install of dependencies without updating `package-lock.json`.
  - `npm run build`: Creates static assets such as JavaScript and CSS files.

Power users can explore [debugging the docs application](./debugging-the-docs-application.md) with VSCode.

### Using GitHub Codespaces

Alternatively, use [GitHub Codespaces](https://docs.github.com/en/codespaces/overview). For more details, check "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)."

In minutes, you'll be ready to edit, preview, and test your changes directly from your browser.

### Browser Shortcuts

Explore helpful browser shortcuts in the [`src/bookmarklets`](../src/bookmarklets) directory. Refer to [`src/bookmarklets/README.md`](../src/bookmarklets/README.md) for details.

### Enabling Different Languages

The local server might not run with all supported languages enabled by default. Temporarily edit the `start` script in `package.json` and update the `ENABLED_LANGUAGES` variable. For example, to enable Japanese and Portuguese, set `ENABLED_LANGUAGES='en,ja,pt'`, then restart the server for the change to take effect.

Supported language codes are defined in [lib/languages.js](#src/languages/lib/languages.js).

## Site Structure

This site evolved from a Ruby on Rails web application to a static site with [Jekyll](https://jekyllrb.com/), then to [Nanoc](https://nanoc.app/), and now to a dynamic Node.js web server powered by Express. The tooling may have changed, but many original Jekyll conventions are preserved:

- Content is written in Markdown files in the `content` directory.
- Liquid templating language is used for content.
- Data directory files are available to templates via the `{% data %}` tag.
- Markdown files can contain [frontmatter](https://jekyllrb.com/docs/front-matter).
- Supports [`redirect_from`](https://github.com/jekyll/jekyll-redirect-from) Jekyll plugin behavior.

## READMEs

For more information on working with this site, check out these READMEs:

- [content/README.md](../content/README.md)
- [contributing/README.md](../contributing/README.md)
- [data/README.md](../data/README.md)
- [data/reusables/README.md](../data/reusables/README.md)
- [data/variables/README.md](../data/variables/README.md)
- [src/content-render/README.md](src/content-render/README.md)
- [includes/README.md](../includes/README.md)
- [src/README.md](src/README.md)
```
Feel free to customize it further based on your preferences! 🌟
