---
title: 创建 Gist
intro: '您可以创建两种 Gist：公开和机密 Gist。 如果您准备与世界分享您的想法，请创建公开 Gist，否则请创建机密 Gist。'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于 gists

每个 gist 都是一个 Git 仓库，意即可以复刻和克隆。 如果您在创建 Gist 时登录了 {% data variables.product.product_name %}，则该 Gist 将与您的帐户相关联， 当您导航到 {% data variables.gists.gist_homepage %} 时，您会在 Gist 列表中看到它。

Gist 可为公共或秘密。 公共 gists 显示在 {% data variables.gists.discover_url %} 中，人们可在其中浏览新建的 gists。 它们也可供搜索，因此，如果您希望其他人查找和查看您的工作，便可使用公共 gists。 {% data reusables.gist.cannot-convert-public-gists-to-secret %}

Secret gists don't show up in {% data variables.gists.discover_url %}{% if currentVersion != "free-pro-team@latest" %},{% endif %} and are not searchable. {% data reusables.gist.cannot-convert-public-gists-to-secret %} 秘密 gists 不是私人的。 如果将秘密 gist 的 URL 发送给朋友，他们可以查看。 但是，如果您不认识的人发现该 URL，也能看到您的 gist。 如果需要让您的代码不被偷窥，可能要改为[创建私有仓库](/articles/creating-a-new-repository)。

{% if currentVersion != "free-pro-team@latest" %}

如果您的站点管理员禁用了私有模式，您也可以使用匿名 gists，可以是公共 gists 或秘密 gists。

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

您在以下情况下会收到通知：
- 您是新 gist 的作者。
- 有人在 gist 中提及您。
- 您单击任何 gist 顶部的 **Subscribe（订阅）**订阅了 gist。

您可以在个人资料中置顶 Gist，使其他人更容易看到它们。 更多信息请参阅“[将项目嵌入到个人资料](/articles/pinning-items-to-your-profile)”。

您可以到 {% data variables.gists.gist_homepage %} 单击 **All Gists（所有 Gists）**发现其他人创建的 gists。 将会显示所有 gists 存储的页面，gist 按创建或更新时间显示。 您也可以通过 {% data variables.gists.gist_search_url %} 按语言搜索 gist。 Gist 搜索使用的搜索语法与[代码搜索](/articles/searching-code)相同。

由于 gists 是 Git 仓库，因此您可以查看其整个提交历史记录，包括差异。 您也可以复刻或克隆 gists。 更多信息请参阅[“复刻和克隆 gists”](/articles/forking-and-cloning-gists)。

您可以单击 gist 顶部的 **Download ZIP（下载 ZIP）**按钮下载 gist 的 ZIP 文件。 您可以将 gist 嵌入到支持 Javascript 的任何文本字段中，如博文。 要获取嵌入的代码，请单击 gist 的**嵌入** URL 旁边的剪贴板图标。 要嵌入特定的 gist 文件，请使用 `?file=FILENAME` 附加**嵌入** URL。

{% if currentVersion == "free-pro-team@latest" %}

Gist 支持地图 GeoJSON 文件。 这些地图显示在嵌入的 Gist 中，因此您可以轻松分享和嵌入地图。 更多信息请参阅“[{% data variables.product.product_name %} 上的地图 GeoJSON 文件](/articles/mapping-geojson-files-on-github)”。

{% endif %}

### 创建 Gist

也可以将桌面上的文本文件直接拖放到 Gist 编辑器中。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% note %}

您也可以使用 {% data variables.product.prodname_cli %} 创建 Gist。 更多信息请参阅 {% data variables.product.prodname_cli %} 文档中的“[`gh Gist 创建`](https://cli.github.com/manual/gh_gist_create)”。

{% endnote %}
{% endif %}

1. 登录 {% data variables.product.product_name %}。
2. 导航到 {% data variables.gists.gist_homepage %}。
3. 键入 Gist 的说明（可选）和名称。 ![Gist 名称说明](/assets/images/help/gist/gist_name_description.png)

4. 在 Gist 文本框中键入 Gist 的文本内容。 ![Gist 文本框](/assets/images/help/gist/gist_text_box.png)

5. 执行以下操作之一：
    - 要创建公开 gist，请单击 **Create public gist（创建公开 gist）**。
    - 要创建机密 gist，请单击 **Create public Gist（创建机密 Gist）**。 ![Gist 创建按钮](/assets/images/help/gist/gist_create_btn.png)

  {% note %}

  **注：**{% data reusables.gist.cannot-convert-public-gists-to-secret %}

  {% endnote %}
