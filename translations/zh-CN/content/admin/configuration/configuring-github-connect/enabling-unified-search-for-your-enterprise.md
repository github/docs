---
title: 为企业启用统一搜索
shortTitle: Unified search
intro: '从 {% data variables.product.product_location %} 搜索时，你可以允许用户在搜索结果中包含 {% data variables.product.prodname_dotcom_the_website %} 上的存储库。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-search-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified search between {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
ms.openlocfilehash: 0270600113cb3b341b38e6f55d7108798d523ebb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145098132'
---
## 关于 {% data variables.product.prodname_unified_search %}

{% data reusables.github-connect.beta %}

启用统一搜索后，用户从 {% data variables.product.prodname_ghe_managed %}{% endif %} 上的 {% data variables.product.product_location %}{% ifversion ghae %} 中搜索时，可以查看来自 {% data variables.product.prodname_dotcom_the_website %} 内容的搜索结果。 

可以选择允许 {% data variables.product.prodname_dotcom_the_website %} 上的公共存储库的搜索结果，可以单独选择允许 {% data variables.product.prodname_ghe_cloud %} 上的专用存储库的搜索结果。 如果你启用专用存储库的统一搜索，则用户只能搜索他们有权访问且由连接的组织或企业帐户拥有的专用存储库。 有关详细信息，请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)”。

用户将永远无法从 {% data variables.product.prodname_dotcom_the_website %} 搜索 {% data variables.product.product_location %}，即使他们可以访问这两个环境。

在为 {% data variables.product.product_location %} 启用统一搜索后，每个用户还必须将他们在 {% data variables.product.product_name %} 上的用户帐户与 {% data variables.product.prodname_dotcom_the_website %} 上的用户帐户相关联，这样才能在 {% data variables.product.product_location %} 看到 {% data variables.product.prodname_dotcom_the_website %} 的专用存储库中的搜索结果。 有关详细信息，请参阅“[在私有企业帐户中启用 {% data variables.product.prodname_dotcom_the_website %} 存储库搜索](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)”。

通过 REST 和 GraphQL API 进行搜索不包含 {% data variables.product.prodname_dotcom_the_website %} 搜索结果。 不支持在 {% data variables.product.prodname_dotcom_the_website %} 中进行高级搜索和搜索 Wiki。

## 启用 {% data variables.product.prodname_unified_search %}

在启用 {% data variables.product.prodname_unified_search %} 之前，必须启用 {% data variables.product.prodname_github_connect %}。 有关详细信息，请参阅“[管理 {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)”。

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. 登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. 在“用户可以搜索 {% data variables.product.prodname_dotcom_the_website %}”下，使用下拉菜单并单击“启用”。
  ![在搜索 GitHub.com 下拉菜单中启用搜索选项](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. 或者，在“用户可以在 {% data variables.product.prodname_dotcom_the_website %} 上搜索专用存储库”下，使用下拉菜单并单击“启用”。
    ![在搜索 GitHub.com 下拉菜单中启用专用存储库搜索选项](/assets/images/enterprise/site-admin-settings/enable-private-search.png)
