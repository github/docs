---
title: Adding a theme to your GitHub Pages site using Jekyll
intro: You can personalize your Jekyll site by adding and customizing a theme.
redirect_from:
  - /articles/customizing-css-and-html-in-your-jekyll-theme
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site
  - /articles/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-using-jekyll
  - /pages/getting-started-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Add theme to Pages site
---

People with write permissions for a repository can add a theme to a {% data variables.product.prodname_pages %} site using Jekyll.

{% data reusables.pages.test-locally %}

## Adding a theme

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
1. Navigate to __config.yml_.
{% data reusables.repositories.edit-file %}
1. Add a new line to the file for the theme name.
   * To use a supported theme, type `theme: THEME-NAME`, replacing _THEME-NAME_ with the name of the theme as shown in the `_config.yml` of the theme's repository (most themes follow a `jekyll-theme-NAME` naming convention). For a list of supported themes, see "[Supported themes](https://pages.github.com/themes/)" on the {% data variables.product.prodname_pages %} site. For example, to select the Minimal theme, type `theme: jekyll-theme-minimal`.
   * To use any other Jekyll theme hosted on {% data variables.product.prodname_dotcom %}, type `remote_theme: THEME-NAME`, replacing THEME-NAME with the name of the theme as shown in the README of the theme's repository.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}

## Customizing your theme's CSS

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
1. Create a new file called _/assets/css/style.scss_.
1. Add the following content to the top of the file:

   ```scss
   ---
   ---

   @import "{% raw %}{{ site.theme }}{% endraw %}";
   ```

1. Add any custom CSS or Sass (including imports) you'd like immediately after the `@import` line.

## Customizing your theme's HTML layout

{% data reusables.pages.best-with-supported-themes %}

{% data reusables.pages.theme-customization-help %}

1. On {% data variables.product.prodname_dotcom %}, navigate to your theme's source repository. For example, the source repository for Minimal is https://github.com/pages-themes/minimal.
1. In the __layouts_ folder, navigate to your theme's _default.html_ file.
1. Copy the contents of the file.
{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
1. Create a file called __layouts/default.html_.
1. Paste the default layout content you copied earlier.
1. Customize the layout as you'd like.

## Further reading

* "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)"
