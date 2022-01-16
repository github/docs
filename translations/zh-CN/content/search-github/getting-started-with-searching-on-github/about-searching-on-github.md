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
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - GitHub search
---

{% data reusables.search.you-can-search-globally %}

- 要全局搜索所有 {% data variables.product.product_name %}，请在页面顶部的搜索字段中输入您要查找的内容，然后在搜索下拉菜单中选择“所有{% data variables.product.prodname_dotcom %}”。
- 要在特定仓库或组织中搜索，请导航到该仓库或组织页面，在页面顶部的搜索字段中输入要查找的内容，然后按 **Enter**。

{% note %}

**注意：**

{% ifversion fpt or ghes %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %} 网站在 {% data variables.product.product_name %} 上不可搜索。 但如果源代码内容存在于仓库的默认分支中，您可以使用代码搜索来搜索。 更多信息请参阅“[搜索代码](/search-github/searching-on-github/searching-code)”。 有关 {% data variables.product.prodname_pages %} 的更多信息，请参阅“[什么是 GitHub Pages？ ](/articles/what-is-github-pages/)”
- 目前我们的搜索不支持精确匹配。
- 每当您在代码文件中搜索时，将仅返回每个文件中的前两个结果。

{% endnote %}

在 {% data variables.product.product_name %} 上搜索后，您可以对结果排序，或者单击侧栏中的任一语言进一步改进搜索。 更多信息请参阅“[对搜索结果排序](/search-github/getting-started-with-searching-on-github/sorting-search-results)”。

每次推送更改到 {% data variables.product.product_name %} 时，{% data variables.product.product_name %} 搜索都会使用 ElasticSearch 群集对项目编制索引。 议题和拉取请求在创建或修改时都会编制索引。

## {% data variables.product.prodname_dotcom %} 上的搜索类型

您可以在 {% data variables.product.product_location %} 上可以访问的所有仓库中搜索以下信息。

- [仓库](/search-github/searching-on-github/searching-for-repositories)
- [主题](/search-github/searching-on-github/searching-topics)
- [议题和拉取请求](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt %}
- [讨论](/search-github/searching-on-github/searching-discussions){% endif %}
- [代码](/search-github/searching-on-github/searching-code)
- [提交](/search-github/searching-on-github/searching-commits)
- [用户](/search-github/searching-on-github/searching-users)
- [包](/search-github/searching-on-github/searching-for-packages)
- [Wikis](/search-github/searching-on-github/searching-wikis)

## 使用可视界面搜索

或者，您也可以使用 {% data variables.search.search_page_url %} 或 {% data variables.search.advanced_url %} 搜索 {% data variables.product.product_name %}。

{% data variables.search.advanced_url %} 提供用于构建搜索查询的可视界面。 您可以按各种因素过滤搜索，例如仓库具有的星标数或复刻数。 在填写高级搜索字段时，您的查询将在顶部搜索栏中自动构建。

![高级搜索](/assets/images/help/search/advanced_search_demo.gif)

{% ifversion fpt or ghes or ghae-next %}

## Searching repositories on {% data variables.product.prodname_dotcom_the_website %} from your private enterprise environment

If you use {% ifversion fpt %}{% data variables.product.prodname_ghe_server %}{% ifversion ghae-next %}<!-- Remove ghae-next condition entirely when toggling feature flag --> or {% data variables.product.prodname_ghe_managed %}{% endif %}{% else %}{% data variables.product.product_name %}{% endif %} and you're a member of a {% data variables.product.prodname_dotcom_the_website %} organization using {% data variables.product.prodname_ghe_cloud %}, an enterprise owner for your {% data variables.product.prodname_enterprise %} environment can enable {% data variables.product.prodname_github_connect %} so that you can search across both environments at the same time{% ifversion ghes or ghae %} from {% data variables.product.product_name %}{% endif %}. For more information, see the following.

{% ifversion fpt or ghes %}
- "[Enabling {% data variables.product.prodname_unified_search %} between your enterprise account and {% data variables.product.prodname_dotcom_the_website %}](/{% ifversion ghes %}{{ currentVersion }}{% else %}github-enterprise@latest{% endif %}/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)" in the {% data variables.product.prodname_ghe_server %} documentation{% endif %}{% ifversion ghae-next %}<!-- Remove ghae-next condition entirely when toggling feature flag -->
- "[Enabling {% data variables.product.prodname_unified_search %} between your enterprise account and {% data variables.product.prodname_dotcom_the_website %}](/github-ae@latest/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom)" in the {% data variables.product.prodname_ghe_managed %} documentation
{% endif %}

{% ifversion ghes or ghae-next %}

要按环境限制搜索范围，可以使用 {% data variables.search.advanced_url %} 上的过滤选项，或者使用 `environment:` 搜索前缀。 若只搜索 {% data variables.product.product_name %} 上的内容，请使用搜索语法 `environment:local`。 若只搜索 {% data variables.product.prodname_dotcom_the_website %} 上的内容，则使用 `environment:github`。

Your enterprise owner on {% data variables.product.product_name %} can enable {% data variables.product.prodname_unified_search %} for all public repositories, all private repositories, or only certain private repositories in the connected {% data variables.product.prodname_ghe_cloud %} organization.

When you search from {% data variables.product.product_name %}, you can only search in the private repositories that you have access to in the connected {% data variables.product.prodname_dotcom_the_website %} organization. Enterprise owners for {% data variables.product.product_name %} and organization owners on {% data variables.product.prodname_dotcom_the_website %} cannot search private repositories owned by your account on {% data variables.product.prodname_dotcom_the_website %}. To search the applicable private repositories, you must enable private repository search for your personal accounts on {% data variables.product.product_name %}. For more information, see "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search from your private enterprise environment](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

{% endif %}

{% endif %}

## 延伸阅读

- "[了解搜索语法](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)"
- "[在 GitHub 上搜索](/articles/searching-on-github)"
