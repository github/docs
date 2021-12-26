---
title: 关于在 GitHub 上搜索
intro: '我们的集成搜索涵盖了 {% data variables.product.product_name %} 上的许多仓库、用户和代码行。'
redirect_from:
  - /articles/using-the-command-bar/
  - /articles/github-search-basics/
  - /articles/search-basics/
  - /articles/searching-github/
  - /articles/advanced-search/
  - /articles/about-searching-on-github
  - /github/searching-for-information-on-github/about-searching-on-github
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

{% data reusables.search.you-can-search-globally %}

- 要全局搜索所有 {% data variables.product.product_name %}，请在页面顶部的搜索字段中输入您要查找的内容，然后在搜索下拉菜单中选择“所有{% data variables.product.prodname_dotcom %}”。
- 要在特定仓库或组织中搜索，请导航到该仓库或组织页面，在页面顶部的搜索字段中输入要查找的内容，然后按 **Enter**。

{% note %}

**注意：**

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %} 网站在 {% data variables.product.product_name %} 上不可搜索。 但如果源代码内容存在于仓库的默认分支中，您可以使用代码搜索来搜索。 更多信息请参阅“[搜索代码](/articles/searching-code)”。 有关 {% data variables.product.prodname_pages %} 的更多信息，请参阅“[什么是 GitHub Pages？ ](/articles/what-is-github-pages/)”
- 目前我们的搜索不支持精确匹配。
- 每当您在代码文件中搜索时，将仅返回每个文件中的前两个结果。

{% endnote %}

在 {% data variables.product.product_name %} 上搜索后，您可以对结果排序，或者单击侧栏中的任一语言进一步改进搜索。 更多信息请参阅“[对搜索结果排序](/articles/sorting-search-results)”。

每次推送更改到 {% data variables.product.product_name %} 时，{% data variables.product.product_name %} 搜索都会使用 ElasticSearch 群集对项目编制索引。 议题和拉取请求在创建或修改时都会编制索引。

### {% data variables.product.prodname_dotcom %} 上的搜索类型

您可以在 {% data variables.product.product_location %} 上可以访问的所有仓库中搜索以下信息。

- [仓库](/articles/searching-for-repositories)
- [主题](/articles/searching-topics)
- [议题和拉取请求](/articles/searching-issues-and-pull-requests){% if currentVersion == "free-pro-team@latest" %}
- [讨论](/github/searching-for-information-on-github/searching-discussions){% endif %}
- [代码](/articles/searching-code)
- [提交](/articles/searching-commits)
- [用户](/articles/searching-users){% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest"  or currentVersion ver_gt "enterprise-server@2.21" %}
- [包](/github/searching-for-information-on-github/searching-for-packages){% endif %}
- [Wikis](/articles/searching-wikis)

### 使用可视界面搜索

或者，您也可以使用 {% data variables.search.search_page_url %} 或 {% data variables.search.advanced_url %} 搜索 {% data variables.product.product_name %}。

{% data variables.search.advanced_url %} 提供用于构建搜索查询的可视界面。 您可以按各种因素过滤搜索，例如仓库具有的星标数或复刻数。 在填写高级搜索字段时，您的查询将在顶部搜索栏中自动构建。

![高级搜索](/assets/images/help/search/advanced_search_demo.gif)

{% if currentVersion != "github-ae@latest" %}
### 同时搜索 {% data variables.product.prodname_enterprise %} 和 {% data variables.product.prodname_dotcom_the_website %}

如果使用 {% data variables.product.prodname_enterprise %}，并且您是使用 {% data variables.product.prodname_ghe_cloud %} 的 {% data variables.product.prodname_dotcom_the_website %} 组织的成员，则 {% data variables.product.prodname_enterprise %} 网站管理员可以启用 {% data variables.product.prodname_github_connect %}，让您同时搜索两个环境。 更多信息请参阅“[在 {% data variables.product.prodname_enterprise %} 与 {% data variables.product.prodname_dotcom_the_website %}](/enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com) 之间启用 {% data variables.product.prodname_unified_search %}”。

只能从 {% data variables.product.prodname_enterprise %} 搜索这两个环境。 要按环境限制搜索范围，可以使用 {% data variables.search.advanced_url %} 上的过滤选项，或者使用 `environment:` 搜索前缀。 若只搜索 {% data variables.product.prodname_enterprise %} 上的内容，请使用搜索语法 `environment:local`。 若只搜索 {% data variables.product.prodname_dotcom_the_website %} 上的内容，则使用 `environment:github`。

{% data variables.product.prodname_enterprise %} 网站管理员可对连接的 {% data variables.product.prodname_ghe_cloud %} 组织中的所有公共仓库、私有仓库或特定私有仓库启用 {% data variables.product.prodname_unified_search %}。

如果网站管理员在私有仓库中启用 {% data variables.product.prodname_unified_search %}，您只能在连接的 {% data variables.product.prodname_dotcom_the_website %} 组织中搜索管理员启用了 {% data variables.product.prodname_unified_search %} 并且您具有访问权限的私有仓库。 {% data variables.product.prodname_dotcom_the_website %} 上的 {% data variables.product.prodname_enterprise %} 管理员和组织所有者无法搜索您的帐户所拥有的私有仓库。 要搜索相关的私有仓库，必须在 {% data variables.product.prodname_dotcom_the_website %} 和 {% data variables.product.prodname_enterprise %} 上对您的个人帐户启用私有仓库搜索。 更多信息请参阅“[在 {% data variables.product.prodname_enterprise %} 帐户中启用私有 {% data variables.product.prodname_dotcom_the_website %} 仓库搜索](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account)”。
{% endif %}

### 延伸阅读

- "[了解搜索语法](/articles/understanding-the-search-syntax)"
- "[在 GitHub 上搜索](/articles/searching-on-github)"
