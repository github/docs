---
title: エンタープライズの統合コントリビューションを有効にする
shortTitle: Unified contributions
intro: '{% data variables.product.product_location %} での作業の匿名のコントリビューション数を、{% data variables.product.prodname_dotcom_the_website %} でのコントリビューション グラフに含めることをユーザーに許可できます。'
redirect_from:
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-and-github-com
  - /enterprise/admin/guides/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-github-com
  - /enterprise/admin/developer-workflow/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/installation/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /enterprise/admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-unified-contributions-between-github-enterprise-server-and-githubcom
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-unified-contributions-between-your-enterprise-account-and-githubcom
permissions: 'Enterprise owners can enable unified contributions between {% data variables.product.product_location %} and {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
ms.openlocfilehash: af07f30a8f164f6bec3d3c0f44c77181f1e8db7b
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878336'
---
{% data reusables.github-connect.beta %}

## 統合コントリビューションについて

エンタープライズ所有者は、作業の匿名のコントリビューション数を{% data variables.product.product_location %}から {% data variables.product.prodname_dotcom_the_website %} コントリビューション グラフに送信することをエンド ユーザーに許可できます。

{% data variables.product.prodname_unified_contributions %} を有効にした後で、個々のユーザーがコントリビューション数を {% data variables.product.product_location %} から {% data variables.product.prodname_dotcom_the_website %} に送信できるようにするには、事前に各ユーザーが {% data variables.product.product_name %} 上の個人アカウントを {% data variables.product.prodname_dotcom_the_website %} 上の個人アカウントに接続する必要があります。 詳細については、「[{% data variables.product.prodname_dotcom_the_website %} プロファイルへのエンタープライズ コントリビューションの送信](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)」を参照してください。

{% data reusables.github-connect.sync-frequency %}

エンタープライズ所有者がこの機能を無効にするか、個々のユーザーが接続をオプトアウトすると、{% data variables.product.product_name %} のコントリビューション数は {% data variables.product.prodname_dotcom_the_website %} 上で削除されます。 ユーザーがプロファイルを無効にした後で再接続すると、過去 90 日間のコントリビューション数が復元されます。

{% data variables.product.product_name %} は、接続しているユーザーについて **のみ** コントリビューション数とソース ({% data variables.product.product_name %}) を送信します。 コントリビューションまたはその作成方法に関する情報は送信されません。

## 統合コントリビューションの有効化

{% data variables.product.product_location %}で{% data variables.product.prodname_unified_contributions %}を有効化する前に、{% data variables.product.prodname_github_connect %} を有効化する必要があります。 詳細については、「[{% data variables.product.prodname_github_connect %} の管理](/admin/configuration/configuring-github-connect/managing-github-connect)」を参照してください。

{% ifversion ghes %} {% data reusables.github-connect.access-dotcom-and-enterprise %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.business %} {% data reusables.enterprise-accounts.github-connect-tab %}{% else %}
1. {% data variables.product.product_location %}と {% data variables.product.prodname_dotcom_the_website %} にサインインします。
{% data reusables.enterprise-accounts.access-enterprise %}{% data reusables.enterprise-accounts.github-connect-tab %}{% endif %}
1. ユーザーは {% data variables.product.prodname_dotcom_the_website %} に投稿数を共有できます で、 **アクセスの要求** をクリックします。
  ![統合コントリビューションへのアクセスを要求するオプション](/assets/images/enterprise/site-admin-settings/dotcom-ghe-connection-request-access.png){% ifversion ghes %}
2. {% data variables.product.prodname_ghe_server %} サイトに[サインイン](https://enterprise.github.com/login)して、その後の指示を確認します。

アクセスを要求すると、{% data variables.product.prodname_ghe_server %} サイトにリダイレクトされます。そこで現在のサービス使用条件をお読みください。
{% endif %}
