---
title: 查看仓库的发行版和标记
intro: 您可以按发行版名称或标记版本号查看仓库的时间记录。
redirect_from:
  - /articles/working-with-tags/
  - /articles/viewing-your-repositorys-tags
  - /github/administering-a-repository/viewing-your-repositorys-tags
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also view a release using the {% data variables.product.prodname_cli %}. For more information, see "[`gh release view`](https://cli.github.com/manual/gh_release_view)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

### 查看发行版

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. 在 Releases（发行版）页面的顶部，单击 **Releases（发行版）**。

### 查看标记

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
2. 在 Releases（版本）页面的顶部，单击 **Tags（标记）**。 ![标记页面](/assets/images/help/releases/tags-list.png)

### 延伸阅读

- "[对标记签名](/articles/signing-tags)"
