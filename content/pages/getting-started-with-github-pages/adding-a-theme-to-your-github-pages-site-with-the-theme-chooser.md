---
title: Adding a theme to your GitHub Pages site with the theme chooser
intro: 'You can add a theme to your {% data variables.product.prodname_pages %} site to customize your site’s look and feel.'
redirect_from:
  - /articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser/
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser/
  - /articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
  - /github/working-with-github-pages/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
topics:
  - Pages
---

People with admin permissions for a repository can use the theme chooser to add a theme to a {% data variables.product.prodname_pages %} site.

### About the theme chooser

The theme chooser adds a Jekyll theme to your repository. For more information about Jekyll, see "[About {% data variables.product.prodname_pages %} and Jekyll](/articles/about-github-pages-and-jekyll)."

How the theme chooser works depends on whether your repository is public or private.
  - If {% data variables.product.prodname_pages %} is already enabled for your repository, the theme chooser will add your theme to the current publishing source.
  - If your repository is public and {% data variables.product.prodname_pages %} is disabled for your repository, using the theme chooser will enable {% data variables.product.prodname_pages %} and configure the default branch as your publishing source.
  - If your repository is private and {% data variables.product.prodname_pages %} is disabled for your repository, you must enable {% data variables.product.prodname_pages %} by configuring a publishing source before you can use the theme chooser.

For more information about publishing sources, see "[About {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)."

If you manually added a Jekyll theme to your repository in the past, those files may be applied even after you use the theme chooser. To avoid conflicts, remove all manually added theme folders and files before using the theme chooser. For more information, see "[Adding a theme to your {% data variables.product.prodname_pages %} site using Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll)."

### Adding a theme with the theme chooser

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.pages.sidebar-pages %}
3. Under "{% data variables.product.prodname_pages %}," click **Choose a theme** or **Change theme**.
  ![Choose a theme button](/assets/images/help/pages/choose-a-theme.png)
4. On the top of the page, click the theme you want, then click **Select theme**.
  ![Theme options and Select theme button](/assets/images/help/pages/select-theme.png)
5. You may be prompted to edit your site's *README.md* file.
   - To edit the file later, click **Cancel**.
   ![Cancel link when editing a file](/assets/images/help/pages/cancel-edit.png)
   - To edit the file now, see "[Editing files in your repository](/articles/editing-files-in-your-repository/)."

Your chosen theme will automatically apply to markdown files in your repository. To apply your theme to HTML files in your repository, you need to add YAML front matter that specifies a layout to each file. For more information, see "[Front Matter](https://jekyllrb.com/docs/front-matter/)" on the Jekyll site.

### Further reading

- [Themes](https://jekyllrb.com/docs/themes/) on the Jekyll site
