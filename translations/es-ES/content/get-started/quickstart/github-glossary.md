---
title: Glosario de GitHub
intro: 'Este glosario te presenta la terminología común de Git y de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/github-glossary
  - /github/getting-started-with-github/github-glossary
  - /github/getting-started-with-github/quickstart/github-glossary
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% for term in site.data.glossaries.external %}
  ### {% data glossaries.external[forloop.index0].term %}
  {% data glossaries.external[forloop.index0].description %}
  ---
{% endfor %}

---

## Leer más

- [El glosario oficial de Git](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Git documentation](https://git-scm.com/doc)
- [Git command list](https://git-scm.com/docs)
