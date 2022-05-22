---
title: 在 GitHub Enterprise Server 中启用 GitHub.com 仓库搜索
intro: '您可以连接用于 {% data variables.product.prodname_dotcom_the_website %} 和 {% data variables.product.prodname_ghe_server %} 的个人帐户，从 {% data variables.product.prodname_ghe_server %} 搜索特定私有 {% data variables.product.prodname_dotcom_the_website %} 仓库中的内容。'
redirect_from:
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-account/
  - /articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account/
  - /articles/enabling-private-githubcom-repository-search-in-your-github-enterprise-server-account/
  - /articles/enabling-githubcom-repository-search-in-github-enterprise-server
  - /github/searching-for-information-on-github/enabling-githubcom-repository-search-in-github-enterprise-server
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - GitHub search
---
如果使用 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_dotcom_the_website %}，并且 {% data variables.product.prodname_ghe_server %} 站点管理员已启用私有仓库的 {% data variables.product.prodname_github_connect %} 和 {% data variables.product.prodname_unified_search %}，则可以在关联的组织中搜索指定的私有仓库。

如需在搜索结果中查看私有仓库，必须已拥有这些仓库的访问权限，并连接 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_dotcom_the_website %} 帐户。 有关可搜索仓库的更多信息，请参阅“[同时在 {% data variables.product.prodname_ghe_server %} 和 {% data variables.product.prodname_dotcom_the_website %} 中搜索](/articles/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)”。

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.github-connect.access-profile-settings %}
{% data reusables.github-connect.github-connect-tab-user-settings %}
{% data reusables.github-connect.connect-dotcom-and-enterprise %}
{% data reusables.github-connect.authorize-connection %}
