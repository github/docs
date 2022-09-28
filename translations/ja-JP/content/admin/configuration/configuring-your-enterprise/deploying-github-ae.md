---
title: GitHub AE のデプロイ
intro: '{% data variables.product.product_name %} を利用できる Azure リージョンにデプロイできます。'
versions:
  ghae: '*'
topics:
  - Accounts
  - Enterprise
type: how_to
shortTitle: Deploy GitHub AE
redirect_from:
  - /get-started/signing-up-for-github/setting-up-a-trial-of-github-ae
ms.openlocfilehash: af6def26a15a1ccad2625677d9db57b2a1907850
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147614368'
---
## {% data variables.product.product_name %} のデプロイについて

{% data reusables.github-ae.github-ae-enables-you %} 詳細については、「[{% data variables.product.prodname_ghe_managed %} について](/admin/overview/about-github-ae)」を参照してください。

{% data variables.product.product_name %} の試用版を購入または開始した後、利用可能な Azure リージョンに {% data variables.product.product_name %} をデプロイできます。 このガイドでは、{% data variables.product.product_name %} アカウントとして {% data variables.product.product_name %} のデプロイを含む Azure リソースについて説明します。 [https://portal.azure.com](https://portal.azure.com) の Azure portal を使用して、{% data variables.product.product_name %} アカウントをデプロイします。

## 前提条件

Azure でリソース プロバイダーの `/register/action` 操作を実行するためのアクセス許可が必要です。 アクセス許可は、`Contributor` および `Owner` ロールに含まれています。 詳細については、Microsoft のドキュメントの「[Azure リソース プロバイダーと種類](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/resource-providers-and-types#register-resource-provider)」を参照してください。

## {% data variables.actions.azure_portal %} を使用した {% data variables.product.product_name %} のデプロイ

{% data variables.actions.azure_portal %} を使用すると、Azure リソース グループに {% data variables.product.product_name %} アカウントをデプロイできます。

1. 次の 2 つのリンクのいずれかをクリックして、{% data variables.product.product_name %} のデプロイを開始します。 クリックする必要があるリンクは、{% data variables.product.product_name %} をデプロイする予定の Azure クラウドによって異なります。 Azure Government の詳細については、Microsoft ドキュメントの「[Azure Government とは](https://docs.microsoft.com/en-us/azure/azure-government/documentation-government-welcome)」を参照してください。
   
   - [{% data variables.product.product_name %} を Azure Commercial にデプロイする](https://aka.ms/create-github-ae-instance)
   - [{% data variables.product.product_name %} を Azure Government にデプロイする](https://aka.ms/create-github-ae-instance-gov)
1. 新しい {% data variables.product.product_name %} アカウントを追加するプロセスを開始するには、 **[GitHub AE アカウントの作成]** をクリックします。
1. [プロジェクトの詳細] フィールドと [インスタンスの詳細] フィールドに入力します。
    ![{% data variables.actions.azure_portal %} 検索結果](/assets/images/azure/github-ae-azure-portal-form.png)
    - **アカウント名:** エンタープライズのホスト名
    - **管理者のユーザー名:** {% data variables.product.product_name %} に作成される初期エンタープライズ所有者のユーザー名
    - **管理者のメール:** ログイン情報を受け取るメール アドレス
1. 提案された変更の概要を確認するには、 **[確認と作成]** をクリックします。
1. 検証プロセスが完了したら、 **[作成]** をクリックします。

上記で入力したメール アドレスには、エンタープライズへのアクセス方法に関する手順が記載されています。 アクセス権を取得したら、初期セットアップ手順に従って作業を開始できます。 詳細については、「[{% data variables.product.product_name %} の初期化](/admin/configuration/initializing-github-ae)」を参照してください。

{% note %}

**注意:** {% data variables.product.product_name %} デプロイ用のソフトウェア更新プログラムは、{% data variables.product.prodname_dotcom %} によって実行されます。 詳細については、「[新しいリリースへのアップグレードについて](/admin/overview/about-upgrades-to-new-releases)」を参照してください。

{% endnote %}

## エンタープライズへ移動

{% data variables.actions.azure_portal %} を使用して、{% data variables.product.product_name %} デプロイに移動できます。 結果の一覧には、Azure リージョン内のすべての {% data variables.product.product_name %} デプロイが含まれます。

1. {% data variables.actions.azure_portal %} の左側のパネルで、 **[すべてのリソース]** をクリックします。
1. 使用可能なフィルターから **[すべての種類]** をクリックし、 **[すべて選択]** の選択を解除し、 **[GitHub AE]** を選択します。![{% data variables.actions.azure_portal %} の検索結果](/assets/images/azure/github-ae-azure-portal-type-filter.png)

## 次のステップ

- デプロイがプロビジョニングされたら、次の手順として {% data variables.product.product_name %} を初期化します。 詳細については、「[{% data variables.product.product_name %} の初期化](/github-ae@latest/admin/configuration/configuring-your-enterprise/initializing-github-ae)」を参照してください。
- {% data variables.product.product_name %} を試している場合、{% data variables.contact.contact_enterprise_sales %} に問い合わせて、使用期間中はいつでもフル ライセンスにアップグレードできます。 試用期間の最終日までにアップグレードしていない場合、デプロイは自動的に削除されます。 {% data variables.product.product_name %} を評価するための時間がさらに必要な場合は、{% data variables.contact.contact_enterprise_sales %} に連絡して延長をリクエストしてください。

## 参考資料 

- "[{% data variables.product.product_name %} で {% data variables.product.prodname_advanced_security %} 機能を有効にする](/github/getting-started-with-github/about-github-advanced-security#enabling-advanced-security-features-on-github-ae)"
- "[{% data variables.product.product_name %} リリース ノート](/github-ae@latest/admin/overview/github-ae-release-notes)" 
