---
title: Glossário do GitHub
intro: 'Este glossário apresenta a terminologia comum do Git e de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/github-glossary
  - /github/getting-started-with-github/github-glossary
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

### Leia mais

- [Glossário oficial do Git](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Referência do Git](http://gitref.org/)
- [Git SCM](https://git-scm.com/doc)
