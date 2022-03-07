---
title: Enabling unified search for your enterprise
shortTitle: Unified search
intro: 'You can allow users to include repositories on {% data variables.product.prodname_dotcom_the_website %} in their search results when searching from {% data variables.product.product_location %}.'
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
---

## 关于 {% data variables.product.prodname_unified_search %}

{% data reusables.github-connect.beta %}

When you enable unified search, users can view search results from content on {% data variables.product.prodname_dotcom_the_website %} when searching from {% data variables.product.product_location %}{% ifversion ghae %} on {% data variables.product.prodname_ghe_managed %}{% endif %}.

You can choose to allow search results for public repositories on {% data variables.product.prodname_dotcom_the_website %}, and you can separately choose to allow search results for private repositories on {% data variables.product.prodname_ghe_cloud %}. If you enable unified search for private repositories, users can only search private repositories that they have access to and that are owned by the connected organization or enterprise account. 更多信息请参阅“[关于在 {% data variables.product.prodname_dotcom %} 上搜索](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)”。

Users will never be able to search {% data variables.product.product_location %} from {% data variables.product.prodname_dotcom_the_website %}, even if they have access to both environments.

After you enable unified search for {% data variables.product.product_location %}, before individual users can see search results from {% data variables.product.prodname_dotcom_the_website %} on {% data variables.product.product_location %}, each user must also connect their personal account on {% data variables.product.product_name %} with a personal account on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Enabling {% data variables.product.prodname_dotcom_the_website %} repository search in your private enterprise account](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

通过 REST 和 GraphQL API 进行搜索不包含 {% data variables.product.prodname_dotcom_the_website %} 搜索结果。 不支持在 {% data variables.product.prodname_dotcom_the_website %} 中进行高级搜索和搜索 Wiki。

## 启用 {% data variables.product.prodname_unified_search %}

Before you can enable {% data variables.product.prodname_unified_search %}, you must enable {% data variables.product.prodname_github_connect %}. For more information, see "[Managing {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)."

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. Sign into {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. 在“Users can search {% data variables.product.prodname_dotcom_the_website %}”下，使用下拉菜单，然后单击 **Enabled**。 ![在搜索 GitHub.com 下拉菜单中启用搜索选项](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. （可选）在“用户可以在 {% data variables.product.prodname_dotcom_the_website %} 上搜索私有仓库”下，使用下拉菜单并单击 **Enabled（启用）**。 ![在搜索 GitHub.com 下拉菜单中启用私有仓库搜索选项](/assets/images/enterprise/site-admin-settings/enable-private-search.png)
