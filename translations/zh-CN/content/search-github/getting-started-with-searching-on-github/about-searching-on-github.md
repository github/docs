---
title: 关于在 GitHub 上搜索
intro: '我们的集成搜索涵盖了 {% data variables.product.product_name %} 上的许多仓库、用户和代码行。'
redirect_from:
  - /articles/using-the-command-bar
  - /articles/github-search-basics
  - /articles/search-basics
  - /articles/searching-github
  - /articles/advanced-search
  - /articles/about-searching-on-github
  - /github/searching-for-information-on-github/about-searching-on-github
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 58ecec218d8f8f0ee3d11afbf65debf7df72e811
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159099'
---
{% ifversion github-code-search %} {% note %}

  注意：{% data reusables.search.classic-search-code-search-note %}

  {% endnote %} {% endif %}

{% data reusables.search.you-can-search-globally %}

- 要全局搜索所有 {% data variables.product.product_name %}，请在页面顶部的搜索字段中输入您要查找的内容，然后在搜索下拉菜单中选择“所有{% data variables.product.prodname_dotcom %}”。
- 要在特定存储库或组织中搜索，请导航到该存储库或组织页面，在页面顶部的搜索字段中输入要查找的内容，然后按 Enter。

{% note %}

**注意：**

{% ifversion fpt or ghes or ghec %}
- {% data reusables.search.required_login %}{% endif %}
- {% data variables.product.prodname_pages %} 网站在 {% data variables.product.product_name %} 上不可搜索。 但如果源代码内容存在于仓库的默认分支中，您可以使用代码搜索来搜索。 有关详细信息，请参阅“[搜索代码](/search-github/searching-on-github/searching-code)”。 有关 {% data variables.product.prodname_pages %} 的详细信息，请参阅“[什么是 GitHub 页面？](/articles/what-is-github-pages/)”
- 目前我们的搜索不支持精确匹配。
- 每当您在代码文件中搜索时，将仅返回每个文件中的前两个结果。

{% endnote %}

在 {% data variables.product.product_name %} 上搜索后，您可以对结果排序，或者单击侧栏中的任一语言进一步改进搜索。 有关详细信息，请参阅“[对搜索结果进行排序](/search-github/getting-started-with-searching-on-github/sorting-search-results)”。

每次推送更改到 {% data variables.product.product_name %} 时，{% data variables.product.product_name %} 搜索都会使用 ElasticSearch 群集对项目编制索引。 议题和拉取请求在创建或修改时都会编制索引。

## {% data variables.product.prodname_dotcom %} 上的搜索类型

可以在 {% data variables.location.product_location %} 上可以访问的所有存储库中搜索以下信息。

- [存储库](/search-github/searching-on-github/searching-for-repositories)
- [主题](/search-github/searching-on-github/searching-topics)
- [问题和拉取请求](/search-github/searching-on-github/searching-issues-and-pull-requests){% ifversion fpt or ghec %}
- [讨论](/search-github/searching-on-github/searching-discussions){% endif %}
- [代码](/search-github/searching-on-github/searching-code)
- [提交](/search-github/searching-on-github/searching-commits)
- [用户](/search-github/searching-on-github/searching-users)
- [包](/search-github/searching-on-github/searching-for-packages)
- [Wiki](/search-github/searching-on-github/searching-wikis)

## 使用可视界面搜索

您可以使用 {% data variables.search.search_page_url %} 或 {% data variables.search.advanced_url %} 搜索 {% data variables.product.product_name %}。 {% ifversion command-palette %}或者，可使用 {% data variables.product.prodname_command_palette %} 中的交互式搜索在 UI、特定用户、存储库或组织中搜索当前位置，并在所有 {% data variables.product.product_name %} 中全局搜索，而无需离开键盘。 有关详细信息，请参阅“[{% data variables.product.prodname_command_palette %}](/get-started/using-github/github-command-palette)”。{% endif %}

{% data variables.search.advanced_url %} 提供用于构建搜索查询的可视界面。 您可以按各种因素过滤搜索，例如仓库具有的星标数或复刻数。 在填写高级搜索字段时，您的查询将在顶部搜索栏中自动构建。

![高级搜索](/assets/images/help/search/advanced_search_demo.gif)

## 从您的私有企业环境中搜索 {% data variables.product.prodname_dotcom_the_website %} 上的存储库

{% ifversion fpt or ghec %}

如果你使用 {% data variables.product.prodname_dotcom_the_website %} 和 {% data variables.product.prodname_ghe_server %} 或 {% data variables.product.prodname_ghe_managed %}，并且企业所有者已启用 {% data variables.enterprise.prodname_unified_search %}，则可以从 {% data variables.product.prodname_ghe_server %} 或 {% data variables.product.prodname_ghe_managed %} 同时搜索这两个环境。 有关详细信息，请参阅 [{% data variables.product.prodname_ghe_server %} 文档](/enterprise-server@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)或 [{% data variables.product.prodname_ghe_managed %} 文档](/github-ae@latest/search-github/getting-started-with-searching-on-github/about-searching-on-github#searching-repositories-on-githubcom-from-your-private-enterprise-environment)。

{% else %}

如果你使用 {% data variables.product.prodname_dotcom_the_website %} 和 {% data variables.product.product_name %}，并且企业所有者已启用 {% data variables.enterprise.prodname_unified_search %}，则可以同时从 {% data variables.product.product_name %} 搜索这两个环境。 若要详细了解企业所有者如何启用 {% data variables.enterprise.prodname_unified_search %}，请参阅“[为企业启用 {% data variables.enterprise.prodname_unified_search %}](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)”。

{% data variables.product.product_name %} 上的企业所有者可以单独为 {% data variables.product.prodname_dotcom_the_website %} 上的所有公共存储库以及通过 {% data variables.product.prodname_github_connect %} 连接到 {% data variables.product.product_name %} 的 {% data variables.product.prodname_dotcom_the_website %} 上的组织或企业拥有的专用存储库启用 {% data variables.enterprise.prodname_unified_search %}。

在将 {% data variables.enterprise.prodname_unified_search %} 用于专用存储库之前，必须在 {% data variables.product.prodname_dotcom_the_website %} 和 {% data variables.product.product_name %} 上连接个人帐户。 有关详细信息，请参阅“[在专用企业环境中启用 {% data variables.product.prodname_dotcom_the_website %} 存储库搜索](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)”。

从 {% data variables.product.product_name %} 进行搜索时，只有你有权访问且由已连接的组织或企业帐户拥有的专用存储库才会包含在搜索结果中。 你和其他人都无法从 {% data variables.product.product_name %} 搜索 {% data variables.product.prodname_dotcom_the_website %} 上的个人帐户拥有的专用存储库。

若要将你的搜索限制到一个环境，可以使用 {% data variables.search.advanced_url %} 上的筛选器选项，或者使用 `environment:` 搜索前缀。 若要仅搜索 {% data variables.product.product_name %} 上的内容，请使用搜索语法 `environment:local`。 若要仅搜索 {% data variables.product.prodname_dotcom_the_website %} 上的内容，请使用 `environment:github`。
{% endif %}

## 延伸阅读

- [了解搜索语法](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)
- [在 GitHub 上搜索](/articles/searching-on-github)
