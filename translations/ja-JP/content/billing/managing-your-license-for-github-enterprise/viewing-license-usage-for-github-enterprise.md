---
title: GitHub Enterpriseのライセンス利用状況の表示
intro: '{% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}上のEnterpriseのライセンス利用状況を見ることができます。'
permissions: 'Enterprise owners can view license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: View license usage
ms.openlocfilehash: 7f3c3c6e65928601d01ac17139928af6ceedf354
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572617'
---
## {% data variables.product.prodname_enterprise %}のライセンス利用状況について

{% data variables.product.product_location %} 上の {% data variables.product.product_name %} のライセンスの利用状況を見ることができます。

{% data variables.product.prodname_ghe_cloud %} と {% data variables.product.prodname_ghe_server %} を両方使用する際に、製品間のライセンス利用状況を同期すると、{% data variables.product.prodname_dotcom_the_website %} で両方のライセンス利用状況を確認できます。 ライセンス同期について詳しくは、「[{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} の間でライセンス利用状況を同期する](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)」を参照してください。

{% ifversion ghes %}

{% data variables.product.prodname_dotcom_the_website %} でのライセンス利用状況の表示と、ライセンス同期が最後に実行されたタイミングの特定について詳しくは、{% data variables.product.prodname_ghe_cloud %} ドキュメントの「[{% data variables.product.prodname_enterprise %} のライセンス利用状況の表示](/enterprise-cloud@latest/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise)」を参照してください。

{% endif %}

また、REST API を使って、使用されたライセンス データとライセンス同期ジョブの状態を返すこともできます。 詳しくは、REST API ドキュメントで、[GitHub Enterprise の管理](/enterprise-cloud@latest/rest/enterprise-admin/license)に関するページを参照してください。

Enterprise アカウントに関連付けられているライセンス データと、使用されるユーザー シート数の計算方法について詳しくは、「[GitHub Enterprise のライセンス使用状況のトラブルシューティング](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)」をご覧ください。


## {% ifversion ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %}{% endif %}のライセンス利用状況の表示

Enterpriseのライセンス利用状況を見て、ライセンスの詳細を含むファイルをダウンロードできます。 このレポートに予想されるライセンス数が表示されない場合は、サブスクライバーが割り当てた {% data variables.product.prodname_vs %} サブスクリプションのメール アドレスと {% data variables.product.prodname_dotcom_the_website %} メール アドレスがまったく同じではない可能性があります。 詳しくは、「[GitHub Enterprise のライセンス使用状況のトラブルシューティング](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)」をご覧ください。

{% ifversion ghec %}

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. 左側のサイドバーで、 **[Enterprise ライセンス]** をクリックします。
  ![[Enterprise アカウント設定] サイドバーの [Enterprise ライセンス] タブ](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. 現在の {% data variables.product.prodname_enterprise %} ライセンスと、使用済みで利用可能なユーザライセンスを確認します。
    - 使用済みライセンス レポートを CSV ファイルとしてダウンロードするには、右上の {% octicon "download" aria-label="The download icon" %} をクリックします。 このレポートのデータの確認について詳しくは、「[GitHub Enterprise のライセンス使用状況のトラブルシューティング](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)」をご覧ください。
    - ライセンスに{% data variables.product.prodname_GH_advanced_security %}が含まれているなら、シートの使用総数を確認できます。 詳細については、「[{% data variables.product.prodname_GH_advanced_security %} 使用状況の表示](/billing/managing-billing-for-github-advanced-security/viewing-your-github-advanced-security-usage)」を参照してください。

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. 現在の{% data variables.product.prodname_enterprise %}ライセンスを、ユーザライセンスの消費数及び利用可能数とともに確認してください。{% ifversion ghes %}
    - 使用済みライセンス レポートを JSON ファイルとしてダウンロードするには、右上の [クイック リンク] で **[ライセンス使用状況のエクスポート]** を選択します。 このレポートのデータの確認について詳しくは、「[GitHub Enterprise のライセンス使用状況のトラブルシューティング](/billing/managing-your-license-for-github-enterprise/troubleshooting-license-usage-for-github-enterprise)」をご覧ください。
    - ライセンスに{% data variables.product.prodname_GH_advanced_security %}が含まれているなら、シートの利用総数とともにコミッターのOrganizationごとの内訳を確認できます。 詳細については、「[Enterprise での {% data variables.product.prodname_GH_advanced_security %} の管理](/admin/advanced-security)」を参照してください。{% endif %}

{% endif %} {% ifversion ghec %}
## 最後のライセンス同期日の表示

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
1. 左側のサイドバーで、 **[Enterprise ライセンス]** をクリックします。
  ![[Enterprise アカウント設定] サイドバーの [Enterprise ライセンス] タブ](/assets/images/help/enterprises/enterprise-licensing-tab.png)
1. 最後のライセンス同期が実行された日時を確認するには、[Enterprise Server インスタンス] で、アップロードまたは同期された使用状況イベントの横にあるタイムスタンプを探します。
   - [アップロードされたサーバー使用量] は、{% data variables.product.prodname_ghe_server %} ライセンス ファイルがアップロードされたときに、環境間のライセンス使用量が手動で更新されたことを示します。
   - [同期された {% data variables.product.prodname_github_connect %} サーバー使用量] は、環境間のライセンス使用量が自動的に更新されたことを示します。
   - [{% data variables.product.prodname_github_connect %} サーバー使用量は同期されません] は、{% data variables.product.prodname_github_connect %} が構成されていても、環境間のライセンス使用量が正常に更新されていないことを示します。

{% endif %}
