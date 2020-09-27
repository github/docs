---
title: Setting a Markdown processor for your GitHub Pages site using Jekyll
intro: 'You can choose a Markdown processor to determine how Markdown is rendered on your {{ site.data.variables.product.prodname_pages }} site.'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku/
  - /articles/updating-your-markdown-processor-to-kramdown/
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{{ site.data.reusables.gated-features.pages }}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

People with write permissions for a repository can set the Markdown processor for a {{ site.data.variables.product.prodname_pages }} site.

{{ site.data.variables.product.prodname_pages }} supports two Markdown processors: [kramdown](http://kramdown.gettalong.org/) and {{ site.data.variables.product.prodname_dotcom }}'s own extended [CommonMark](https://commonmark.org/) processer, which is used to render {{ site.data.variables.product.prodname_dotcom }} Flavored Markdown throughout {{ site.data.variables.product.product_name }}. For more information, see "[About writing and formatting on {{ site.data.variables.product.prodname_dotcom }}](/articles/about-writing-and-formatting-on-github)."

You can use {{ site.data.variables.product.prodname_dotcom }} Flavored Markdown with either processor, but only our CommonMark processor will always match the results you see on {{ site.data.variables.product.product_name }}.

{{ site.data.reusables.pages.navigate-site-repo }}
2. In your repository, browse to the *_config.yml* file.
{{ site.data.reusables.repositories.edit-file }}
4. Find the line that starts with `markdown:` and change the value to `kramdown` or `GFM`.
  ![Markdown setting in config.yml](/assets/images/help/pages/config-markdown-value.png)
{{ site.data.reusables.files.write_commit_message }}
{{ site.data.reusables.files.choose-commit-email }}
{{ site.data.reusables.files.choose_commit_branch }}
{{ site.data.reusables.files.propose_new_file }}

### Further reading

- [kramdown Documentation](https://kramdown.gettalong.org/documentation.html)
- [{{ site.data.variables.product.prodname_dotcom }} Flavored Markdown Spec](https://github.github.com/gfm/)
