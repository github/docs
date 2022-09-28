---
title: GitHub Enterpriseのライセンスについて
intro: '{% data variables.product.prodname_ghe_cloud %} を使うだけではなく、{% ifversion ghec %}{% data variables.product.prodname_ghe_server %} をデプロイする場合は、{% else %}ライセンスの{% endif %}使用状況を{% ifversion ghes %} {% data variables.product.prodname_enterprise %}{% endif %} デプロイ間で同期し、ライセンス ファイルを使って、各 {% data variables.product.prodname_ghe_server %} インスタンスをロック解除できます。'
versions:
  ghec: '*'
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Licensing
shortTitle: About licenses
ms.openlocfilehash: eb904ed497df785cfefa25cee7a5cb1fe5acfaa0
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145910512'
---
## {% data variables.product.prodname_enterprise %} のライセンスについて

{% data reusables.enterprise.about-deployment-methods %}

{% data reusables.enterprise-licensing.unique-user-licensing-model %}

同じユーザーが複数の Enterprise デプロイで複数のライセンスを使わないようにするには、{% data variables.product.prodname_ghe_server %} デプロイと {% data variables.product.prodname_ghe_cloud %} デプロイの間でライセンスの使用状況を同期できます。

{% data variables.product.prodname_ghe_server %} インスタンスを使うには、ユーザー ライセンスを購入、更新、または {% data variables.product.prodname_enterprise %} に追加するときに {% data variables.product.company_short %} によって指定されるライセンス ファイルをアップロードする必要があります。

## {% data variables.product.prodname_enterprise %}ライセンス利用状況の同期について

{% data reusables.enterprise-licensing.about-license-sync %} 詳細については、「[{% data variables.product.prodname_ghe_server %} と {% data variables.product.prodname_ghe_cloud %} の間でのライセンスの使用状況の同期](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud)」を参照してください。

## {% data variables.product.prodname_enterprise %}のライセンスファイルについて

{% data variables.product.prodname_enterprise %}を購入あるいは更新すると、{% data variables.product.company_short %}は{% ifversion ghec %}{% data variables.product.prodname_ghe_server %}のデプロイメントの{% elsif ghes %}{% data variables.product.product_location_enterprise %}の{% endif %}ライセンスファイルを提供します。 ライセンスファイルには有効期限があり、{% data variables.product.product_location_enterprise %}を利用できる人数を制御します。 {% data variables.product.prodname_ghe_server %}をダウンロードしてインストールした後、アプリケーションを利用するためにアンロックしなければならないので、ライセンスファイルをアップロードしなければなりません。

ライセンス ファイルのダウンロードの詳細については、「[{% data variables.product.prodname_enterprise %} のライセンスのダウンロード](/billing/managing-your-license-for-github-enterprise/downloading-your-license-for-github-enterprise)」を参照してください。 

ライセンス ファイルのアップロードの詳細については、{% ifversion ghec %}{% data variables.product.prodname_ghe_server %} で「[{% data variables.product.prodname_ghe_server %} への新しいライセンスのアップロード](/enterprise-server/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)」{% elsif ghes %}「[{% data variables.product.prodname_ghe_server %} への新しいライセンスのアップロード](/billing/managing-your-license-for-github-enterprise/uploading-a-new-license-to-github-enterprise-server)」{% endif %}を参照してください。

ライセンスが期限切れになると、WebブラウザあるいはGitから{% data variables.product.prodname_ghe_server %}にアクセスできなくなります。 必要な場合は、コマンドラインユーティリティを使用してすべてのデータをバックアップできます。 詳細については、{% ifversion ghec %}{% data variables.product.prodname_ghe_server %} で「[アプライアンスでのバックアップの設定]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/guides/installation/configuring-backups-on-your-appliance)」を参照してください。{% elsif ghes %}「[アプライアンスでのバックアップの設定](/admin/guides/installation/configuring-backups-on-your-appliance)」を参照してください。 {% endif %}

ライセンスの更新についてご質問がある場合は、{% data variables.contact.contact_enterprise_sales %} にお問い合わせください。

## 参考資料

- 「[Enterprise の支払いについて](/billing/managing-billing-for-your-github-account/about-billing-for-your-enterprise)」
- [{% data variables.product.prodname_enterprise %} リリース](https://enterprise.github.com/releases/) Web サイト
- 「[{% data variables.product.prodname_ghe_server %} インスタンスの設定]({% ifversion ghec %}/enterprise-server@latest{% endif %}/admin/installation/setting-up-a-github-enterprise-server-instance)」
