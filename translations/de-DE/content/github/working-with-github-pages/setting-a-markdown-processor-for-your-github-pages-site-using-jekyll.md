---
title: Markdown-Prozessor für Deine GitHub Pages-Website mit Jekyll festlegen
intro: 'Mit einem Markdown-Prozessor legst Du fest, wie Markdown auf Deiner {% data variables.product.prodname_pages %}-Website dargestellt wird.'
redirect_from:
  - /articles/migrating-your-pages-site-from-maruku/
  - /articles/updating-your-markdown-processor-to-kramdown/
  - /articles/setting-a-markdown-processor-for-your-github-pages-site-using-jekyll
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Personen mit Schreibberechtigungen für ein Repository können den Markdown-Prozessor für eine {% data variables.product.prodname_pages %}-Website festlegen.

{% data variables.product.prodname_pages %} supports two Markdown processors: [kramdown](http://kramdown.gettalong.org/) and {% data variables.product.prodname_dotcom %}'s own extended [CommonMark](https://commonmark.org/) processor, which is used to render {% data variables.product.prodname_dotcom %} Flavored Markdown throughout {% data variables.product.product_name %}. Weitere Informationen findest Du unter „[Informationen zum Schreiben und Formatieren bei {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github).“

{% data variables.product.prodname_dotcom %} Flavored Markdown eignet sich für beide Prozessoren, wobei jedoch nur der CommonMark-Prozessor die Ergebnisse exakt wie in {% data variables.product.product_name %} darstellt.

{% data reusables.pages.navigate-site-repo %}
2. Suche in Deinem Repository die Datei *_config.yml*.
{% data reusables.repositories.edit-file %}
4. Suche die Zeile, die mit `markdown:` beginnt, und ändere deren Wert in `kramdown` oder `GFM`. ![Markdown-Einstellung in config.yml](/assets/images/help/pages/config-markdown-value.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Weiterführende Informationen

- [Dokumentation zu kramdown](https://kramdown.gettalong.org/documentation.html)
- [{% data variables.product.prodname_dotcom %} Flavored Markdown – Spezifikation](https://github.github.com/gfm/)
