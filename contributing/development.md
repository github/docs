# Development

This document describes the process for running this application on your local computer.

## Getting started

This site is powered by Node.js! :sparkles: :turtle: :rocket: :sparkles:

It runs on macOS, Windows, and Linux environments.

You'll need Node.js version 16 to run the site. To install Node.js, [download the "LTS" installer from nodejs.org](https://nodejs.org). If you're using [`nodenv`](https://github.com/nodenv/nodenv), read the [`nodenv` docs](https://github.com/nodenv/nodenv#readme) for instructions on switching Node.js versions.

You'll want to [install Git LFS](https://docs.github.com/en/github/managing-large-files/versioning-large-files/installing-git-large-file-storage).

Once you've installed Node.js (which includes the popular `npm` package manager) and Git LFS, open Terminal and run the following:

```sh
git clone https://github.com/github/docs
cd docs
npm ci
npm run build
npm start
```

You should now have a running server! Visit [localhost:4000](http://localhost:4000) in your browser. It will automatically restart as you make changes to site content.

When you're ready to stop your local server, type <kbd>Ctrl</kbd>+<kbd>C</kbd> in your terminal window.

Note that `npm ci` and `npm run build` are steps that should typically only need to be run once each time you pull the latest for a branch.
 - `npm ci` does a clean install of dependencies, without updating the `package-lock.json` file
 - `npm run build` creates static assets, such as JavaScript and CSS files

Power users may want to read more about [debugging the docs application](./debugging-the-docs-application.md) with VSCode.

### Using GitHub Codespaces

As an alternative, you can simply use [GitHub Codespaces](https://docs.github.com/en/codespaces/overview). For more information about using a codespace for working on GitHub documentation, see "[Working in a codespace](https://github.com/github/docs/blob/main/contributing/codespace.md)."

In a matter of minutes, you will be ready to edit, preview and test your changes directly from the comfort of your browser.

### Using browser shortcuts

The [`script/bookmarklets`](../script/bookmarklets) directory contains some browser shortcuts that can help with reviewing GitHub documentation. See [`script/bookmarklets/README.md`](../script/bookmarklets/README.md) for details.

### Enabling different languages

By default the local server won't run with all supported languages enabled.  If you need to run the server with a particular language, you can temporarily edit the `start` script in `package.json` and update the `ENABLED_LANGUAGES` variable.  For example, to enable Japanese and Portuguese, you can set it to `ENABLED_LANGUAGES='en,ja,pt'` and then you need to restart the server for the change to take effect.

The supported language codes are defined in [lib/languages.js](../lib/languages.js).

## Site structure

This site was originally a Ruby on Rails web application. Some time later it was converted into a static site powered by [Jekyll](https://jekyllrb.com/). A few years after that it was migrated to [Nanoc](https://nanoc.app/), another Ruby static site generator.

Today it's a dynamic Node.js webserver powered by Express, using [middleware](../middleware/README.md) to support proper HTTP redirects, language header detection, and dynamic content generation to support the various flavors of GitHub's product documentation, like GitHub.com and GitHub Enterprise Server.

The tooling for this site has changed over the years, but many of the tried-and-true authoring conventions of the original Jekyll site have been preserved:

- Content is written in Markdown files, which live in the `content` directory.
- Content can use the [Liquid templating language](liquid-helpers.md).
- Files in the `data` directory are available to templates via the `{% data %}` tag.
- Markdown files can contain [frontmatter](https://jekyllrb.com/docs/front-matter).
- The [`redirect_from`](https://github.com/jekyll/jekyll-redirect-from) Jekyll plugin behavior is supported.

## READMEs

For more info about working with this site, check out these READMEs:

- [content/README.md](../content/README.md)
- [contributing/README.md](../contributing/README.md)
- [data/README.md](../data/README.md)
- [data/reusables/README.md](../data/reusables/README.md)
- [data/variables/README.md](../data/variables/README.md)
- [includes/liquid-tags/README.md](../includes/liquid-tags/README.md)
- [includes/README.md](../includes/README.md)
- [components/README.md](../components/README.md)
- [lib/liquid-tags/README.md](../lib/liquid-tags/README.md)
- [middleware/README.md](../middleware/README.md)
- [script/README.md](../script/README.md)
- [stylesheets/README.md](../stylesheets/README.md)
- [tests/README.md](../tests/README.md)
