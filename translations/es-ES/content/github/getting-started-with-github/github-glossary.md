---
title: Glosario de GitHub
intro: 'A continuación aparece una lista de algunos términos específicos de Git y {% data variables.product.prodname_dotcom %} que usamos en nuestros sitios y en la documentación.'
redirect_from:
  - /articles/github-glossary
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% for term in site.data.glossaries.external %}
  ### {% data glossaries.external[forloop.index0].term %}
  {% data glossaries.external[forloop.index0].description %}
  ---
{% endfor %}

---

### Leer más

- [El glosario oficial de Git](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Referencia de Git](http://gitref.org/)
- [SCM de Git](https://git-scm.com/doc)
