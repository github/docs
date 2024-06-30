---
title: Setting a Markdown processor for your GitHub Pages site using Jekyll
intro: 'You can choose a Markdown processor to determine how Markdown is rendered on your {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku
  - /articles/updating-your-markdown-processor-to-kramdown
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Set Markdown processor
---

People with write permissions for a repository can set the Markdown processor for a {% data variables.product.prodname_pages %} site.

{% data variables.product.prodname_pages %} supports two Markdown processors: [kramdown](http://kramdown.gettalong.org/) and {% data variables.product.prodname_dotcom %}'s own Markdown processor, which is used to render [{% data variables.product.prodname_dotcom %} Flavored Markdown (GFM)](https://github.github.com/gfm/) throughout {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github)."

You can use {% data variables.product.prodname_dotcom %} Flavored Markdown with either processor, but only our GFM processor will always match the results you see on {% data variables.product.product_name %}.

{% data reusables.pages.navigate-site-repo %}
1. In your repository, browse to the __config.yml_ file.
{% data reusables.repositories.edit-file %}
1. Find the line that starts with `markdown:` and change the value to `kramdown` or `GFM`. The full line should read `markdown: kramdown` or `markdown: GFM`.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## Further reading

* [kramdown Documentation](https://kramdown.gettalong.org/documentation.html)
* [{% data variables.product.prodname_dotcom %} Flavored Markdown Spec](https://github.github.com/gfm/)
