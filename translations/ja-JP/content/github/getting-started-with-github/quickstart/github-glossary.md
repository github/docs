---
title: GitHub 用語集
intro: '弊社のサイトおよびドキュメンテーションで使用する、Git および {% data variables.product.prodname_dotcom %} に固有の用語の一部を以下に挙げます。'
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

### 参考リンク

- [公式 Git 用語集](https://www.kernel.org/pub/software/scm/git/docs/gitglossary.html)
- [Git リファレンス](http://gitref.org/)
- [Git SCM](https://git-scm.com/doc)
