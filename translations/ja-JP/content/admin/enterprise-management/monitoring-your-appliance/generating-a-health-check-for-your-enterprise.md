---
title: 企業に関する正常性チェックの生成
intro: '正常性チェックを生成することで、{% data variables.product.product_location %} の全般的な正常性と Git および API 要求に関する分析情報を得ることができます。'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
product: '{% data reusables.gated-features.generated-health-checks %}'
ms.openlocfilehash: f02fc61f050fc01a69f9fafe2dcdc95d91322dfa
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146460022'
---
{% note %}

**注:** {% data variables.product.prodname_ghe_server %} の正常性チェックの生成は現在ベータ版であり、変更される可能性があります。

{% endnote %}

## 生成される正常性チェックについて

診断やログ ファイルなど、多くのデータを含む {% data variables.product.product_location %} のサポート バンドルを作成できます。 このデータの分析と解釈を支援するため、正常性チェックを生成できます。 サポート バンドルの詳細については、「[{% data variables.contact.github_support %} へのデータ提供](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)」を参照してください。

正常性チェックでは、{% data variables.product.product_location %} に関する次の情報が提供されます。
- アップグレードの状態、ストレージ、ライセンス シートの使用量など、{% data variables.product.product_location %} の全般的な正常性に関する分析情報
- サブドメインの分離とユーザー認証に焦点を当てたセキュリティ セクション
- Git 要求の分析と、最も使用量の多いリポジトリと Git ユーザーに関する詳細 
- 最も処理量の多い時間帯、最も頻繁に要求されるエンドポイント、最もアクティブな呼び出し元など、API 要求の分析

{% data variables.product.prodname_ghe_cloud %} の正常性チェックを生成したい場合は、{% data variables.contact.github_support %} にお問い合わせください。 詳細については、「[サポート チケットの作成](/support/contacting-github-support/creating-a-support-ticket)」を参照してください。

## 正常性チェックの生成

正常性チェックを生成する前に、サポート バンドルを作成する必要があります。 詳細については、「[{% data variables.contact.github_support %} へのデータ提供](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles)」を参照してください。

1. [{% data variables.contact.support_portal %}](https://support.github.com/) に移動します。
2. ページの右上隅にある **[プレミアム]** をクリックします

   ![GitHub サポート ポータル ヘッダーの [プレミアム] リンクのスクリーンショット。](/assets/images/enterprise/support/support-portal-header-premium.png)
   
3. **[正常性チェック]** の右側にある **[正常性チェックの要求]** をクリックします。

   ![[正常性チェックの要求] ボタンのスクリーンショット。](/assets/images/enterprise/support/support-portal-request-health-check.png)
   
4. [エンタープライズ アカウントの選択] の下のドロップダウン メニューを選択し、エンタープライズ アカウントをクリックします。

   !["エンタープライズ アカウント" のドロップダウン メニューのスクリーンショット。](/assets/images/enterprise/support/health-check-dialog-ea.png)
   
5. [サポート バンドルのアップロード] で **[ファイルの選択]** をクリックして、アップロードするファイルを選択します。 次に、 **[正常性チェックの要求]** をクリックします。

   ![[ファイルの選択] ボタンと [正常性チェックの要求] ボタンのスクリーンショット。](/assets/images/enterprise/support/health-check-dialog-choose-file.png)
   

正常性チェックを要求すると、正常性チェックを生成するジョブがスケジュールされます。 数時間から 1 日後に、生成された正常性チェックが {% data variables.contact.support_portal %} の [正常性チェック] セクションに表示されます。

![{% data variables.contact.support_portal %} の [正常性チェック] セクションのスクリーンショット。](/assets/images/enterprise/support/support-portal-health-checks-section.png)
