---
title: Enabling unified search between your enterprise account and GitHub.com
shortTitle: Enable unified search
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
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
---

{% data reusables.github-connect.beta %}

When you enable unified search, users can view search results from public and private content on {% data variables.product.prodname_dotcom_the_website %} when searching from {% data variables.product.product_location %}{% ifversion ghae %} on {% data variables.product.prodname_ghe_managed %}{% endif %}.

両方の環境にアクセスできる場合でも、ユーザは{% data variables.product.prodname_dotcom_the_website %}から{% data variables.product.product_location %}を検索することはできません。 ユーザが検索できるのは、あなたが{% data variables.product.prodname_unified_search %}を有効化したプライベートリポジトリと、接続された{% data variables.product.prodname_ghe_cloud %} Organizationでユーザがアクセスできるプライベートリポジトリだけです。 For more information, see "[About searching on {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)" and "[Enabling private {% data variables.product.prodname_dotcom_the_website %} repository search in your enterprise account](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)."

REST及びGraphQL APIでの検索には、{% data variables.product.prodname_dotcom_the_website %}の検索結果は含まれません。 {% data variables.product.prodname_dotcom_the_website %}の高度な検索及びwikiの検索はサポートされていません。

{% ifversion ghes %}
{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% ifversion ghes < 3.1 %}{% data reusables.enterprise-accounts.settings-tab %}{% endif %}{% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. {% data variables.product.product_location %}と{% data variables.product.prodname_dotcom_the_website %}にサインインしてください。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. \[Users can search {% data variables.product.prodname_dotcom_the_website %}\] (ユーザは {% data variables.product.prodname_dotcom_the_website %} を検索可能) の下で、ドロップダウンメニューを使って [**Enabled**] をクリックします。 ![Enable search option in the [search GitHub.com] ドロップダウンメニューの [Enable search] オプション](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. \[Users can search private repositories on {% data variables.product.prodname_dotcom_the_website %}\] (ユーザは {% data variables.product.prodname_dotcom_the_website %} のプライベートリポジトリを検索可能) の下でドロップダウンメニューを使い、[**Enabled**] (有効) をクリックすることもできます。 ![[search GitHub.com] ドロップダウンメニューの [Enable private repositories search] オプション](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

## 参考リンク

- "[Connecting your enterprise account to {% data variables.product.prodname_ghe_cloud %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud)"

