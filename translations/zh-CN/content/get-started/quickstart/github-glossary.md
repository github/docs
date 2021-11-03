---
title: GitHub 词汇表
intro: '此词汇表介绍了通用 Git 和 {% data variables.product.prodname_dotcom %} 术语。'
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

## 延伸阅读

- [官方 Git 术语表](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Git 参考](http://gitref.org/)
- [Git SCM](https://git-scm.com/doc)
