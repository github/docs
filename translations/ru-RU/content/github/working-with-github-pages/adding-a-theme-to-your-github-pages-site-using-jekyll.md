---
title: Adding a theme to your GitHub Pages site using Jekyll
intro: You can personalize your Jekyll site by adding and customizing a theme.
redirect_from:
  - /articles/customizing-css-and-html-in-your-jekyll-theme/
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site/
  - /articles/adding-a-theme-to-your-github-pages-site-using-jekyll
product: '{{ site.data.reusables.gated-features.pages }}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

People with write permissions for a repository can add a theme to a {{ site.data.variables.product.prodname_pages }} site using Jekyll.

{{ site.data.reusables.pages.test-locally }}

### Adding a theme

{{ site.data.reusables.pages.navigate-site-repo }}
{{ site.data.reusables.pages.navigate-publishing-source }}
2. Navigate to *_config.yml*.
{{ site.data.reusables.repositories.edit-file }}
4. Add a new line to the file for the theme name. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
   - To use a supported theme, t{% else %}T{% endif %}ype `theme: THEME-NAME`, replacing _THEME-NAME_ with the name of the theme as shown in the README of the theme's repository. For a list of supported themes, see "[Supported themes](https://pages.github.com/themes/)" on the {{ site.data.variables.product.prodname_pages }} site. ![Supported theme in config file](/assets/images/help/pages/add-theme-to-config-file.png){% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
   - To use any other Jekyll theme hosted on {{ site.data.variables.product.prodname_dotcom }}, type `remote_theme: THEME-NAME`, replacing THEME-NAME with the name of the theme as shown in the README of the theme's repository. ![Unsupported theme in config file](/assets/images/help/pages/add-remote-theme-to-config-file.png){% endif %}
{{ site.data.reusables.files.write_commit_message }}
{{ site.data.reusables.files.choose-commit-email }}
{{ site.data.reusables.files.choose_commit_branch }}
{{ site.data.reusables.files.propose_file_change }}

### Customizing your theme's CSS

{{ site.data.reusables.pages.best-with-supported-themes }}

{{ site.data.reusables.pages.theme-customization-help}}

{{ site.data.reusables.pages.navigate-site-repo }}
{{ site.data.reusables.pages.navigate-publishing-source }}
1. Create a new file called _/assets/css/style.scss_.
2. Add the following content to the top of the file:
  ```
  ---
  ---

  @import "{{ site.theme }}";
  ```
3. Add any custom CSS or Sass (including imports) you'd like immediately after the `@import` line.

### Customizing your theme's HTML layout

{{ site.data.reusables.pages.best-with-supported-themes }}

{{ site.data.reusables.pages.theme-customization-help}}

1. On {{ site.data.variables.product.prodname_dotcom }}, navigate to your theme's source repository. For example, the source repository for Minima is https://github.com/jekyll/minima.
2. In the *_layouts* folder, navigate to your theme's _default.html_ file.
3. Copy the contents of the file.
{{ site.data.reusables.pages.navigate-site-repo }}
{{ site.data.reusables.pages.navigate-publishing-source }}
6. Create a file called *_layouts/default.html*.
7. Paste the default layout content you copied earlier.
8. Customize the layout as you'd like.

### Дополнительная литература

- "[Creating new files](/articles/creating-new-files)"
