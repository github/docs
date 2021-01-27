---
title: GitHub 词汇表
intro: '以下是我们在网站和文档中使用的一些 Git 和 {% data variables.product.prodname_dotcom %} 专用术语列表。'
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

### 延伸阅读

- [官方 Git 术语表](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Git 参考](http://gitref.org/)
- [Git SCM](https://git-scm.com/doc)
