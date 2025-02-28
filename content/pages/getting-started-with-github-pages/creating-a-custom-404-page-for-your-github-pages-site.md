---
title: Creating a custom 404 page for your GitHub Pages site
intro: You can display a custom 404 error page when people try to access nonexistent pages on your site.
redirect_from:
  - /articles/custom-404-pages
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
  - /github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create custom 404 page
---

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
{% data reusables.files.add-file %}
1. In the file name field, type `404.html` or `404.md`.
1. If you named your file `404.md`, add the following YAML front matter to the beginning of the file:

   ```yaml
   ---
   permalink: /404.html
   ---
   ```

1. Below the YAML front matter, if present, add the content you want to display on your 404 page.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## Further reading

* [Front matter](https://jekyllrb.com/docs/frontmatter) in the Jekyll documentation
