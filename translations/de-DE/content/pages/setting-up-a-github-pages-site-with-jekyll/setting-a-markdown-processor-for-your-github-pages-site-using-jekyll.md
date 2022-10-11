---
title: Markdown-Prozessor für Deine GitHub Pages-Website mit Jekyll festlegen
intro: 'Mit einem Markdown-Prozessor legst Du fest, wie Markdown auf Deiner {% data variables.product.prodname_pages %}-Website dargestellt wird.'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku/
  - /articles/updating-your-markdown-processor-to-kramdown/
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
  - /github/working-with-github-pages/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Pages
shortTitle: Set Markdown processor
---

Personen mit Schreibberechtigungen für ein Repository können den Markdown-Prozessor für eine {% data variables.product.prodname_pages %}-Website festlegen.

{% data variables.product.prodname_pages %} supports two Markdown processors: [kramdown](http://kramdown.gettalong.org/) and {% data variables.product.prodname_dotcom %}'s own Markdown processor, which is used to render [{% data variables.product.prodname_dotcom %} Flavored Markdown (GFM)](https://github.github.com/gfm/) throughout {% data variables.product.product_name %}. Weitere Informationen findest Du unter „[Informationen zum Schreiben und Formatieren bei {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github).“

You can use {% data variables.product.prodname_dotcom %} Flavored Markdown with either processor, but only our GFM processor will always match the results you see on {% data variables.product.product_name %}.

{% data reusables.pages.navigate-site-repo %}
2. Suche in Deinem Repository die Datei *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Suche die Zeile, die mit `markdown:` beginnt, und ändere deren Wert in `kramdown` oder `GFM`. ![Markdown-Einstellung in config.yml](/assets/images/help/pages/config-markdown-value.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## Weiterführende Informationen

- [Dokumentation zu kramdown](https://kramdown.gettalong.org/documentation.html)
- [{% data variables.product.prodname_dotcom %} Flavored Markdown – Spezifikation](https://github.github.com/gfm/)
