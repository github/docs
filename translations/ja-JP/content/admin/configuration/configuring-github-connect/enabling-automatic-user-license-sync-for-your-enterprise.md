---
title: エンタープライズの自動ユーザー ライセンス同期を有効にする
intro: 'ユーザー ライセンスを {% data variables.product.product_location %} から {% data variables.product.prodname_ghe_cloud %} に自動的に同期することで、{% data variables.product.prodname_enterprise %} 環境全体のライセンス使用量を管理できます。'
redirect_from:
  - /enterprise/admin/installation/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /enterprise/admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-automatic-user-license-sync-between-github-enterprise-server-and-github-enterprise-cloud
permissions: Enterprise owners can enable automatic user license synchronization.
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - GitHub Connect
  - Licensing
shortTitle: Automatic user license sync
ms.openlocfilehash: eb0216dcdb629e96ef83de2eea8a7d7b6660a171
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910560'
---
## 自動ライセンスの同期について

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %}詳細については、「[{% data variables.product.prodname_github_connect %} について](/admin/configuration/configuring-github-connect/about-github-connect#data-transmission-for-github-connect)」を参照してください。

エンタープライズの自動ユーザー ライセンス同期を有効にすると、{% data variables.product.prodname_github_connect %} は {% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} 間のライセンスの使用状況を毎週自動的に同期します。{% ifversion ghes > 3.4 %}また、毎週の自動同期以外の時間帯でも、手動でライセンス同期ジョブをトリガーすることで、ライセンス データを同期できます。 詳細については、「[ランドスケープ同期ジョブのトリガー](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud#triggering-a-license-sync-job)」を参照してください。{% endif %}

複数の {% data variables.product.prodname_ghe_server %} インスタンスを使っている場合、各インスタンスと {% data variables.product.prodname_ghe_cloud %} 上の同じ組織またはエンタープライズ アカウントとの間で自動ライセンス同期を有効にすることができます。

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data variables.product.prodname_ghe_server %}ユーザライセンス情報を手動で{% data variables.product.prodname_ghe_cloud %}にアップロードすることもできます。 詳細については、「[{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} の間でユーザー ライセンスの使用状況を手動で同期する](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)」を参照してください。

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## ライセンス同期の有効化

{% data variables.product.product_location %} でライセンス同期を有効にする前に、{% data variables.product.prodname_github_connect %} を有効にする必要があります。 詳細については、「[{% data variables.product.prodname_github_connect %} の管理](/admin/configuration/configuring-github-connect/managing-github-connect)」を参照してください。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. [Server can sync user license count and usage]\(サーバーはユーザー ライセンス数と使用状況を同期できる\) の下にあるドロップダウン メニューを使って **[Enabled]\(有効\)** 選びます。
  ![自動ユーザー ライセンス同期を有効にするドロップダウン メニュー](/assets/images/enterprise/site-admin-settings/enable-user-license-drop-down.png)
