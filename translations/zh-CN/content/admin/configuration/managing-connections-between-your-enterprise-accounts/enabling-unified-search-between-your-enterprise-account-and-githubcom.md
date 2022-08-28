---
title: Enabling unified search between your enterprise account and GitHub.com
shortTitle: 启用统一搜索
intro: 'After enabling {% data variables.product.prodname_github_connect %}, you can allow search of {% data variables.product.prodname_dotcom_the_website %} for members of your enterprise on {% data variables.product.product_name %}.'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-search-between-github-enterprise-server-and-githubcom
permissions: 'Enterprise owners who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified search between {% data variables.product.product_name %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: next
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
---

{% data reusables.github-connect.beta %}

When you enable unified search, users can view search results from public and private content on {% data variables.product.prodname_dotcom_the_website %} when searching from {% data variables.product.product_location %}{% ifversion ghae %} on {% data variables.product.prodname_ghe_managed %}{% endif %}.

用户将无法从 {% data variables.product.prodname_dotcom_the_website %} 搜索 {% data variables.product.product_location %}，即使他们对这两个环境都具有访问权限。 用户只能搜索您已启用 {% data variables.product.prodname_unified_search %} 的私有仓库，并且他们可以在连接的 {% data variables.product.prodname_ghe_cloud %} 组织中访问。 For more information, see "[About searching on {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)" and "[Enabling private {% data variables.product.prodname_dotcom_the_website %} repository search in your enterprise account](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

通过 REST 和 GraphQL API 进行搜索不包含 {% data variables.product.prodname_dotcom_the_website %} 搜索结果。 不支持在 {% data variables.product.prodname_dotcom_the_website %} 中进行高级搜索和搜索 Wiki。

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. 登录到 {% data variables.product.product_location %} 和 {% data variables.product.prodname_dotcom_the_website %}。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. 在“Users can search {% data variables.product.prodname_dotcom_the_website %}”下，使用下拉菜单，然后单击 **Enabled**。 ![在搜索 GitHub.com 下拉菜单中启用搜索选项](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. （可选）在“用户可以在 {% data variables.product.prodname_dotcom_the_website %} 上搜索私有仓库”下，使用下拉菜单并单击 **Enabled（启用）**。 ![在搜索 GitHub.com 下拉菜单中启用私有仓库搜索选项](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

## 延伸阅读

- "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)"

