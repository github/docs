---
title: 在 GitHub Enterprise Server 与 GitHub.com 之间启用统一搜索
intro: '启用 {{ site.data.variables.product.prodname_github_connect }} 后，您可以允许从 {{ site.data.variables.product.product_location_enterprise }} 搜索 {{ site.data.variables.product.prodname_dotcom_the_website }}。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
permissions: '{{ site.data.variables.product.prodname_ghe_server }} 的站点管理员（同时也是已连接 {{ site.data.variables.product.prodname_ghe_cloud }} 组织或企业帐户的所有者）可以在 {{ site.data.variables.product.prodname_ghe_server }} 与 {{ site.data.variables.product.prodname_dotcom_the_website }} 之间启用统一搜索。'
versions:
  enterprise-server: '*'
---

启用统一搜索后，用户可在从 {{ site.data.variables.product.product_location_enterprise }} 进行搜索时查看 {{ site.data.variables.product.prodname_dotcom_the_website }} 上公共和私有内容的搜索结果。

用户将无法从 {{ site.data.variables.product.prodname_dotcom_the_website }} 搜索 {{ site.data.variables.product.product_location_enterprise }}，即使他们对这两个环境都具有访问权限。 用户只能搜索您已启用 {{ site.data.variables.product.prodname_unified_search }} 的私有仓库，并且他们可以在连接的 {{ site.data.variables.product.prodname_ghe_cloud }} 组织中访问。 更多信息请参阅“[关于在 {{ site.data.variables.product.prodname_dotcom }} 上搜索](/articles/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)”和“[在 {{ site.data.variables.product.prodname_ghe_server }} 帐户中启用私有 {{ site.data.variables.product.prodname_dotcom_the_website }} 仓库搜索](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account)”。

通过 REST 和 GraphQL API 进行搜索不包含 {{ site.data.variables.product.prodname_dotcom_the_website }} 搜索结果。 不支持在 {{ site.data.variables.product.prodname_dotcom_the_website }} 中进行高级搜索和搜索 Wiki。

{{ site.data.reusables.github-connect.access-dotcom-and-enterprise }}
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
{{ site.data.reusables.enterprise-accounts.github-connect-tab }}
5. 在“Users can search {{ site.data.variables.product.prodname_dotcom_the_website }}”下，使用下拉菜单，然后单击 **Enabled**。 ![在搜索 GitHub.com 下拉菜单中启用搜索选项](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
6. （可选）在“用户可以在 {{ site.data.variables.product.prodname_dotcom_the_website }} 上搜索私有仓库”下，使用下拉菜单并单击 **Enabled（启用）**。 ![在搜索 GitHub.com 下拉菜单中启用私有仓库搜索选项](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

### 延伸阅读

- "[将 {{ site.data.variables.product.prodname_ghe_server }} 连接到 {{ site.data.variables.product.prodname_dotcom_the_website }}](/enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)"
