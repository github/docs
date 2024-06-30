---
title: Creating a local environment
shortTitle: Create a local environment
intro: 'You can run the {% data variables.product.prodname_docs %} application locally on your computer.'
versions:
  feature: 'contributing'
---

## About {% data variables.product.prodname_docs %} site structure

The {% data variables.product.prodname_docs %} site was originally a Ruby on Rails web application. Some time later it was converted into a static site powered by [Jekyll](https://jekyllrb.com/). A few years after that it was migrated to [Nanoc](https://nanoc.app/), another Ruby static site generator.

Today it's a dynamic Node.js webserver powered by Express, using middleware to support proper HTTP redirects, language header detection, and dynamic content generation to support the various flavors of {% data variables.product.company_short %}'s product documentation, like {% data variables.product.prodname_dotcom_the_website %} and {% data variables.product.prodname_ghe_server %}.

The tooling for this site has changed over the years, but many of the tried-and-true authoring conventions of the original Jekyll site have been preserved.

* Content is written in Markdown files, which live in the `content` directory.
<!-- - Content can use the [Liquid templating language](/contributing/syntax-and-versioning-for-github-docs/using-markdown-and-liquid-for-github-docs).-->
* Files in the `data` directory are available to templates via the {% raw %}`{% data %}`{% endraw %} tag.
* Markdown files can contain [frontmatter](https://jekyllrb.com/docs/front-matter).
* The [`redirect_from`](https://github.com/jekyll/jekyll-redirect-from) Jekyll plugin behavior is supported.

## Setting up your local environment

You can clone the {% data variables.product.prodname_docs %} repository and run the application locally on your computer, after some initial setup.

### Installing Node.js

The {% data variables.product.prodname_docs %} site is powered by Node.js. It runs on macOS, Windows, and Linux environments.

To run the site, you'll need Node.js. To install Node.js, [download the "LTS" installer from nodejs.org](https://nodejs.org). To check which Node version you need, you can see the `package.json` file in the {% data variables.product.prodname_docs %} repository. The Node version is listed in the `engine` field, similar to the following example, which indicates you can use Node major version 16 or Node major version 18.

```json
"engines": {
    "node": "^16 || ^18"
}
```

If you're using `nodenv`, see the [`nodenv` docs](https://github.com/nodenv/nodenv#readme) for instructions on switching Node.js versions.

### Starting a local {% data variables.product.prodname_docs %} server

Once you've installed Node.js (which includes the popular `npm` package manager), open your terminal and run the following commands.

```shell
git clone https://github.com/github/docs
cd docs
npm ci
npm start
```

You should now have a running server. To access your local preview environment, visit [localhost:4000](http://localhost:4000) in your browser.

When you're ready to stop your local server, type <kbd>Ctrl</kbd>+<kbd>C</kbd> in your terminal window.

{% note %}

**Note:** You should typically only need to run `npm ci` and `npm run build` each time you pull the latest version of a branch.
 * `npm ci` does a clean install of dependencies, without updating the `package-lock.json` file.
 * `npm run build` creates static assets, such as JavaScript and CSS files.

{% endnote %}

If you would like to read more about debugging and troubleshooting the {% data variables.product.prodname_docs %} application, see "[AUTOTITLE](/contributing/setting-up-your-environment-to-work-on-github-docs/troubleshooting-your-environment)" in the github/docs repository.

### Using browser shortcuts

The [`src/bookmarklets`](https://github.com/github/docs/tree/main/src/bookmarklets) directory in the {% data variables.product.prodname_docs %} repository contains browser shortcuts that can help with reviewing {% data variables.product.company_short %} documentation. For more information, see the directory's [`README`](https://github.com/github/docs/tree/main/src/bookmarklets/README.md).

### Enabling different languages

By default, the local server does not run with all supported languages enabled.  If you need to run a local server with a particular language, you can temporarily edit the `start` script in `package.json` and update the `ENABLED_LANGUAGES` variable.

For example, to enable Japanese and Portuguese in addition to English, you can edit `package.json` and set `ENABLED_LANGUAGES='en,ja,pt'` in the `start` script. Then restart the server for the change to take effect.

{% note %}

**Note:** Before you commit your changes, you should revert the `package.json` file to its original state.

{% endnote %}

The supported language codes are defined in [`src/languages/lib/languages.js`](https://github.com/github/docs/blob/main/src/languages/lib/languages.js).

## Using {% data variables.product.prodname_github_codespaces %}

As an alternative to running {% data variables.product.prodname_docs %} locally, you can use {% data variables.product.prodname_github_codespaces %}. {% data variables.product.prodname_github_codespaces %} enable you to edit, preview, and test your changes directly from your browser.

For more information about using a codespace for working on {% data variables.product.company_short %} documentation, see "[AUTOTITLE](/contributing/setting-up-your-environment-to-work-on-github-docs/working-on-github-docs-in-a-codespace)."

## Further reading

* [AUTOTITLE](/contributing/writing-for-github-docs/creating-reusable-content)
* [Components](https://github.com/github/docs/blob/main/src/frame/components/README.md)
* [Data](https://github.com/github/docs/blob/main/data/README.md)
* [Tests](https://github.com/github/docs/blob/main/src/tests/README.md)
