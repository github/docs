---
title: GitHub glossary
intro:  'When working with Git and GitHub, you may find Technical Terms that powers the {% data variables.product.prodname_dotcom %} sites and its documentation. We can find the definition or meaning of these words directly from the Glossary.'
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

### Further reading

- [The Official Git Glossary](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Git Reference](http://gitref.org/)
- [Git SCM](https://git-scm.com/doc)
