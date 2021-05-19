---
title: GitHub Enterprise Server と GitHub.com の間の Unified Search を有効化する
intro: '{% data variables.product.prodname_github_connect %} を有効化すると、{% data variables.product.product_location_enterprise %} からの {% data variables.product.prodname_dotcom_the_website %} の検索を許可できます。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-and-github-com/
  - /enterprise/admin/guides/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-github-com/
  - /enterprise/admin/developer-workflow/enabling-unified-search-between-github-enterprise-server-and-githubcom/
  - /enterprise/admin/installation/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-search-between-github-enterprise-server-and-githubcom
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} who are also owners of the connected {% data variables.product.prodname_ghe_cloud %} organization or enterprise account can enable unified search between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  enterprise-server: '*'
topics:
  - Enterprise
  - GitHub Connect
  - GitHub search
---
Unified Searchを有効化すると、ユーザは{% data variables.product.product_location_enterprise %}から検索をした際に、{% data variables.product.prodname_dotcom_the_website %}上のパブリックおよびプライベートコンテンツからの検索結果を見ることができます。

両方の環境にアクセスできる場合でも、ユーザは{% data variables.product.prodname_dotcom_the_website %}から{% data variables.product.product_location_enterprise %}を検索することはできません。 ユーザが検索できるのは、あなたが{% data variables.product.prodname_unified_search %}を有効化したプライベートリポジトリと、接続された{% data variables.product.prodname_ghe_cloud %} Organizationでユーザがアクセスできるプライベートリポジトリだけです。 詳細は、「[{% data variables.product.prodname_dotcom %}](/articles/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)での検索について」と「[{% data variables.product.prodname_ghe_server %}アカウントでのプライベートな{% data variables.product.prodname_dotcom_the_website %}リポジトリの検索を有効化する](/articles/enabling-private-github-com-repository-search-in-your-github-enterprise-server-account)」を参照してください。

REST及びGraphQL APIでの検索には、{% data variables.product.prodname_dotcom_the_website %}の検索結果は含まれません。 {% data variables.product.prodname_dotcom_the_website %}の高度な検索及びwikiの検索はサポートされていません。

{% data reusables.github-connect.access-dotcom-and-enterprise %}
{% data reusables.enterprise_site_admin_settings.access-settings %}{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.github-connect-tab %}
5. \[Users can search {% data variables.product.prodname_dotcom_the_website %}\] (ユーザは {% data variables.product.prodname_dotcom_the_website %} を検索可能) の下で、ドロップダウンメニューを使って [**Enabled**] をクリックします。 ![Enable search option in the [search GitHub.com] ドロップダウンメニューの [Enable search] オプション](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
6. \[Users can search private repositories on {% data variables.product.prodname_dotcom_the_website %}\] (ユーザは {% data variables.product.prodname_dotcom_the_website %} のプライベートリポジトリを検索可能) の下でドロップダウンメニューを使い、[**Enabled**] (有効) をクリックすることもできます。 ![[search GitHub.com] ドロップダウンメニューの [Enable private repositories search] オプション](/assets/images/enterprise/site-admin-settings/enable-private-search.png)

### 参考リンク

- 「[{% data variables.product.prodname_ghe_server %} を {% data variables.product.prodname_dotcom_the_website %} に接続する](/enterprise/admin/guides/developer-workflow/connecting-github-enterprise-server-to-github-com)」
