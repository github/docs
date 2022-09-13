---
title: GitHub Enterprise ServerとGitHub Enterprise Cloudとのライセンス利用状況の同期
intro: '{% data variables.product.prodname_ghe_server %}から{% data variables.product.prodname_ghe_cloud %}までのライセンスの利用状況を同期して、Entepriseでのすべてのライセンス利用状況を一カ所で表示し、両方の環境でアカウントを持つ人が1つのユーザライセンスしか消費していないことを確認できます。'
permissions: 'Enterprise owners can sync license usage between enterprise accounts on {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_ghe_cloud %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Sync license usage
ms.openlocfilehash: 8434c6f76d4cd63f7c95e7b5971f795126be7066
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147572593'
---
## ライセンスの利用状況の同期について

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

{% data reusables.enterprise-licensing.about-license-sync %}

確実に{% data variables.product.prodname_dotcom_the_website %}上の最新のライセンスの詳細を見ているようにするには、{% data variables.product.prodname_github_connect %}を使って自動的に環境間でライセンスの利用状況を同期できます。 {% data variables.product.prodname_github_connect %} の詳細については、{% ifversion ghec %}{% data variables.product.prodname_ghe_server %} ドキュメントの{% elsif ghes %}{% endif %}「[{% data variables.product.prodname_github_connect %} について]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/about-github-connect)」を参照してください。

{% data variables.product.prodname_github_connect %}を有効化したくない場合は、{% data variables.product.prodname_ghe_server %}からファイルを{% data variables.product.prodname_dotcom_the_website %}にアップロードすることによって、手動でライセンスの利用状況を同期できます。

ライセンスの使用を同期するときは、{% data variables.product.prodname_ghe_server %} 上の各ユーザー アカウントのユーザー ID とメール アドレスのみが、{% data variables.product.prodname_ghe_cloud %} に送信されます。

{% data reusables.enterprise-licensing.view-consumed-licenses %}

{% data reusables.enterprise-licensing.verified-domains-license-sync %}

## 自動的なライセンス利用状況の同期

{% data variables.product.prodname_github_connect %} を使って、{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} 間で毎週自動的にライセンスの数と使用状況を同期できます。 詳細については、{% ifversion ghec %}{% data variables.product.prodname_ghe_server %} ドキュメントの{% elsif ghes %}{% endif %}「[エンタープライズの自動ユーザー ライセンス同期を有効にする]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise)」を参照してください。

{% ifversion ghec or ghes > 3.4 %}{% data variables.product.prodname_github_connect %} を有効にすると、ライセンス データは毎週自動的に同期されます。 また、ライセンス同期ジョブをトリガーすることで、ライセンス データをいつでも手動で同期することができます。

### ライセンス同期ジョブのトリガー

1. {% data variables.product.prodname_ghe_server %} インスタンスにサインインします。
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. [License sync]\(ライセンス同期\) の下にある {% octicon "sync" aria-label="The Sync icon" %} **[Sync now]\(今すぐ同期\)** をクリックします。
  ![[License sync]\(ライセンス同期\) セクションの [Sync now]\(今すぐ同期\) ボタンのスクリーンショット](/assets/images/help/enterprises/license-sync-now-ghes.png)

{% endif %}

## Manually uploading GitHub Enterprise Server ライセンスの使用状況を手動でアップロードする

{% data variables.product.prodname_ghe_server %} から JSON ファイルをダウンロードして {% data variables.product.prodname_ghe_cloud %} にそのファイルをアップロードし、2 つのデプロイメント間でユーザライセンスの使用状況を手動で同期できます。

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
5. [Quick links]\(クイック リンク\) で、{% data variables.product.prodname_ghe_server %} 上の現在のライセンス使用状況を含むファイルをダウンロードするには、 **[Export license usage]\(ライセンス使用状況のエクスポート\)** をクリックします。
  ![[Export license usage]\(ライセンス使用状況のエクスポート\) リンク](/assets/images/enterprise/business-accounts/export-license-usage-link.png) {% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
10. [Enterprise Server Instances]\(Enterprise Server インスタンス\) の下にある **[Add server usage]\(サーバー使用状況の追加\)** をクリックします。
  ![GitHub Enterprise Server 使用状況のアップロード リンク](/assets/images/help/business-accounts/upload-ghe-server-usage-link.png)
11. {% data variables.product.prodname_ghe_server %}からダウンロードしたJSONファイルをアップロードします。
  ![アップロードするファイルのドラッグ アンド ドロップまたは選択](/assets/images/help/business-accounts/upload-ghe-server-usage-file.png)
