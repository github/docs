---
title: 更改对 wiki 的访问权限
intro: '默认情况下，只有仓库协作者才能编辑{% ifversion fpt or ghec or ghes %}公共{% endif %}仓库的 wiki，但您可以允许拥有 {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} 帐户的任何人编辑您的 wiki。'
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/changing-access-permissions-for-wikis
  - /github/building-a-strong-community/changing-access-permissions-for-wikis
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: 更改访问权限
---

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在 Features（功能）下，取消选中 **Restrict edits to collaborators only（仅限于协作者编辑）**。 ![Wiki 编辑限制](/assets/images/help/wiki/wiki_restrict_editing.png)

## 延伸阅读

- “[禁用 wiki](/communities/documenting-your-project-with-wikis/disabling-wikis)”
