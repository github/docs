---
title: 自社で統合検索を有効にする
shortTitle: Unified search
intro: '{% data variables.product.product_location %} から検索するときに、ユーザーが検索結果に {% data variables.product.prodname_dotcom_the_website %} のリポジトリを含めることができるようにすることができます。'
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
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112958'
---
## {% data variables.product.prodname_unified_search %}について

{% data reusables.github-connect.beta %}

統合検索を有効化すると、ユーザーは{% data variables.product.product_location %}{% ifversion ghae %}から {% data variables.product.prodname_ghe_managed %} を検索をした際に、{% data variables.product.prodname_dotcom_the_website %} 上のコンテンツの検索結果を見ることができます{% endif %}。 

{% data variables.product.prodname_dotcom_the_website %} のパブリック リポジトリの検索結果の許可を選べます。また、別に {% data variables.product.prodname_ghe_cloud %} のプライベート リポジトリの検索結果の許可も選べます。 プライベート リポジトリで統合検索を有効にした場合、ユーザーはアクセス権がある、接続されている Organization またはエンタープライズ アカウントが所有するプライベート リポジトリのみを検索できます。 詳細については、「[{% data variables.product.prodname_dotcom %} での検索について](/search-github/getting-started-with-searching-on-github/about-searching-on-github/#searching-across-github-enterprise-and-githubcom-simultaneously)」を参照してください。

両方の環境にアクセスできる場合でも、ユーザーが {% data variables.product.prodname_dotcom_the_website %} から{% data variables.product.product_location %}}の検索はできません。

{% data variables.product.product_location %}で統合検索を有効にした場合、個々のユーザーが{% data variables.product.product_location %}で {% data variables.product.prodname_dotcom_the_website %} からプライベート リポジトリの検索結果を確認する前に、各ユーザーが {% data variables.product.product_name %} 上のユーザー アカウントを {% data variables.product.prodname_dotcom_the_website %} 上のユーザー アカウントと接続する必要があります。 詳しい情報については、「[プライベート エンタープライズ アカウントからの {% data variables.product.prodname_dotcom_the_website %} リポジトリ検索の有効化](/search-github/getting-started-with-searching-on-github/enabling-githubcom-repository-search-from-your-private-enterprise-environment)」を参照してください。

REST及びGraphQL APIでの検索には、{% data variables.product.prodname_dotcom_the_website %}の検索結果は含まれません。 {% data variables.product.prodname_dotcom_the_website %}の高度な検索及びwikiの検索はサポートされていません。

## {% data variables.product.prodname_unified_search %} の有効化

{% data variables.product.prodname_unified_search %} を有効にする前に、{% data variables.product.prodname_github_connect %} を有効にする必要があります。 詳細については、「[{% data variables.product.prodname_github_connect %} の管理](/admin/configuration/configuring-github-connect/managing-github-connect)」を参照してください。

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. {% data variables.product.product_location %} と {% data variables.product.prodname_dotcom_the_website %} にサインインします。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. [ユーザーは {% data variables.product.prodname_dotcom_the_website %} を検索可能] の下のドロップダウン メニューで **[有効]** をクリックします。
  ![GitHub.com を検索するドロップダウン メニューの [有効] 検索オプション](/assets/images/enterprise/site-admin-settings/github-dotcom-enable-search.png)
1. 必要に応じて [ユーザーは {% data variables.product.prodname_dotcom_the_website %} のプライベート リポジトリを検索可能] の下のドロップダウン メニューで **[有効]** をクリックします。
    ![GitHub.com を検索するドロップダウンメニューのプライベート リポジトリを検索するオプションの有効化](/assets/images/enterprise/site-admin-settings/enable-private-search.png)
