# Development

This document describes the process for running this application on your local computer.

## Getting started

This site is powered by Node.js! :sparkles: :turtle: :rocket: :sparkles:

It runs on macOS, Windows, and Linux environments.

You'll need Node.js version 16 to run the site. To install Node.js, [download the "LTS" installer from nodejs.org](https://nodejs.org). If you're using [`nodenv`](https://github.com/nodenv/nodenv), read the [`nodenv` docs](#nodenv) for instructions on switching Node.js versions.

Once you've installed Node.js (which includes the popular `npm` package manager), open Terminal and run the following:

```sh
git clone https://github.com/github/docs
cd docs
npm ci
npm run build
npm start
```

You should now have a running server! Visit [localhost:4000](http://localhost:4000) in your browser. It will automatically restart as you make changes to site content.

When you're ready to stop your local server, type <kbd>CTRL</kbd><kbd>c</kbd> in your terminal window.

Note that `npm ci` and `npm run build` are steps that should typically only need to be run once each time you pull the latest for a branch.
 - `npm ci` does a clean install of dependencies, without updating the `package-lock.json` file
 - `npm run build` creates static assets, such as the `dist/index.js` and `dist/index.css` files

### Using GitHub Codespaces

As an alternative, you can simply use [GitHub Codespaces](https://github.com/features/codespaces).

In a matter of minutes, you will be ready to edit, preview and test your changes directly from the comfort of your browser.

### Debugging with VS Code

This repo has configuration for debugging with VS Code's built-in Node Debugger.

1. After running the build steps, start the app by running `npm run debug`.
2. In VS Code, click on the Debugging icon in the Activity Bar to bring up the Debug view.
3. In the Debug View, select the **'Node: Nodemon'** configuration, then press F5 or click the green play button. You should see all of your running node processes.
4. Select the node process that's started with the `--inspect` flag.
5. Debugger has now been attached. Enjoy!

For more detailed instructions, please see this [VS Code recipe](https://github.com/Microsoft/vscode-recipes/tree/master/nodemon). You can also learn more about debugging using VS Code [here](https://code.visualstudio.com/docs/editor/debugging).

### Viewing a top-level table of contents

While running the local server, you can visit [localhost:4000/dev-toc](http://localhost:4000/dev-toc) to view a top-level TOC of all the content in the site. This page is not available on https://docs.github.com. It was created for internal GitHub writers' use.

At the `/dev-toc` path, you'll see a list of available versions. Click a version, and a list of products will appear. Note that the TOC content is versioned. If you are viewing the `GitHub.com` version and you click the `Enterprise Admin` product, it will be empty, because there isn't any Admin content available on that version.

## Site structure

This site was originally a Ruby on Rails web application. Some time later it was converted into a static site powered by [Jekyll](https://jekyllrb.com/). A few years after that it was migrated to [Nanoc](https://nanoc.ws/), another Ruby static site generator.

Today it's a dynamic Node.js webserver powered by Express, using [middleware](../middleware/README.md) to support proper HTTP redirects, language header detection, and dynamic content generation to support the various flavors of GitHub's product documentation, like GitHub.com and GitHub Enterprise Server.

The tooling for this site has changed over the years, but many of the tried-and-true authoring conventions of the original Jekyll site have been preserved:

- Content is written in Markdown files, which live in the `content` directory.
- Content can use the [Liquid templating language](liquid-helpers.md).
- Files in the `data` directory are available to templates via the `{% data %}` tag.
- Markdown files can contain [frontmatter](https://jekyllrb.com/docs/front-matter).
- The [`redirect_from`](https://github.com/jekyll/jekyll-redirect-from) Jekyll plugin behavior is supported.

For more info about working with this site, check out these READMEs:

- [content/README.md](../content/README.md)
- [contributing/README.md](../contributing/README.md)
- [data/README.md](../data/README.md)
- [data/reusables/README.md](../data/reusables/README.md)
- [data/variables/README.md](../data/variables/README.md)
- [includes/liquid-tags/README.md](../includes/liquid-tags/README.md)
- [includes/README.md](../includes/README.md)
- [javascripts/README.md](../javascripts/README.md)
- [layouts/README.md](../layouts/README.md)
- [lib/liquid-tags/README.md](../lib/liquid-tags/README.md)
- [middleware/README.md](../middleware/README.md)
- [script/README.md](../script/README.md)
- [stylesheets/README.md](../stylesheets/README.md)
- [tests/README.md](../tests/README.md)
