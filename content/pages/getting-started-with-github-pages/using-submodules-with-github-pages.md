---
title: Using submodules with GitHub Pages
intro: 'You can use submodules with {% data variables.product.prodname_pages %} to include other projects in your site''s code.'
redirect_from:
  - /articles/using-submodules-with-pages
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Use submodules with Pages
---

If the repository for your {% data variables.product.prodname_pages %} site contains submodules, their contents will automatically be pulled in when your site is built.

You can only use submodules that point to public repositories, because the {% data variables.product.prodname_pages %} server cannot access private repositories.

Use the `https://` read-only URL for your submodules, including nested submodules. You can make this change in your _.gitmodules_ file.

## Further reading

* "[Git Tools - Submodules](https://git-scm.com/book/en/Git-Tools-Submodules)" from the _Pro Git_ book
* "[AUTOTITLE](/pages/setting-up-a-github-pages-site-with-jekyll/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
