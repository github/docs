---
title: ジョブの実行時間を表示する
intro: ジョブの実行時間 (ジョブの発生した支払対象の分を含む) を表示できます。
redirect_from:
  - /actions/managing-workflow-runs/viewing-job-execution-time
versions:
  fpt: '*'
  ghec: '*'
shortTitle: View job execution time
ms.openlocfilehash: 8293c36519dd727942d7cec0e1c1a2fa430ce112
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '145121221'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

請求可能なジョブ実行時間 (分) は、{% data variables.product.prodname_dotcom %} ホストランナーを使用するプライベートリポジトリで実行されるジョブに対してのみ表示され、次の分に切り上げられます。 パブリックリポジトリで {% data variables.product.prodname_actions %} を使用する場合、またはセルフホストランナーで実行されるジョブの場合、請求対象となる実行時間はありません。

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. ジョブの概要の下で、ジョブの実行時間を表示できます。 請求可能なジョブの実行時間に関する詳細を表示するには、 **[請求可能な時間]** の下の時間をクリックしてください。
   ![実行および支払請求可能な時間の詳細リンク](/assets/images/help/repository/view-run-billable-time.png)

   {% note %}
   
   **注:** 表示された課金対象時間には分乗数は含まれません。 分乗数を含む、{% data variables.product.prodname_actions %} 使用状況の合計を表示するには、「[{% data variables.product.prodname_actions %} 使用状況の表示](/billing/managing-billing-for-github-actions/viewing-your-github-actions-usage)」を参照してください。
   
   {% endnote %}
