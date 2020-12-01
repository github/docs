---
title: GitHub-Glossar
intro: 'In diesem Artikel findest Du eine Liste einiger Git- und {% data variables.product.prodname_dotcom %}-spezifischer Begriffe, die wir übergreifend auf unseren Websites und in unseren Dokumentationen verwenden.'
redirect_from:
  - /articles/github-glossary
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% for term in site.data.glossaries.external %}
  ### {{term.term}}
  {{term.description}}
  ---
{% endfor %}

---

### Weiterführende Informationen

- [Das offizielle Git-Glossar](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Git-Referenz](http://gitref.org/)
- [Git-SCM](https://git-scm.com/doc)
