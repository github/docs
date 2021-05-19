---
title: GitHub glossary
intro: 'Below are a list of some Git and {% data variables.product.prodname_dotcom %} specific terms we use across our sites and documentation.'
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
