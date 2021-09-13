---
title: Setting a Markdown processor for your GitHub Pages site using Jekyll
intro: 'You can choose a Markdown processor to determine how Markdown is rendered on your {% data variables.product.prodname_pages %} site.'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku/
  - /articles/updating-your-markdown-processor-to-kramdown/
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - pages
---

People with write permissions for a repository can set the Markdown processor for a {% data variables.product.prodname_pages %} site.

{% data variables.product.prodname_pages %} supports two Markdown processors: [kramdown](http://kramdown.gettalong.org/) and {% data variables.product.prodname_dotcom %}'s own extended [CommonMark](https://commonmark.org/) processor, which is used to render {% data variables.product.prodname_dotcom %} Flavored Markdown throughout {% data variables.product.product_name %}. For more information, see "[About writing and formatting on {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github)."

You can use {% data variables.product.prodname_dotcom %} Flavored Markdown with either processor, but only our CommonMark processor will always match the results you see on {% data variables.product.product_name %}.

{% data reusables.pages.navigate-site-repo %}
2. In your repository, browse to the *_config.yml* file.
{% data reusables.repositories.edit-file %}
4. Find the line that starts with `markdown:` and change the value to `kramdown` or `GFM`. ![Markdown setting in config.yml](/assets/images/help/pages/config-markdown-value.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### 더 읽을거리

- [kramdown Documentation](https://kramdown.gettalong.org/documentation.html)
- [{% data variables.product.prodname_dotcom %} Flavored Markdown Spec](https://github.github.com/gfm/)
