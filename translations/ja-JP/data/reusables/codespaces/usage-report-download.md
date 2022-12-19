---
ms.openlocfilehash: c03f2677064bae6362b21c172725d334a2b22994
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/09/2022
ms.locfileid: "148160144"
---
1. または、[今月の利用状況] の横にある **[利用レポートの取得]** をクリックして、{% data variables.product.prodname_actions %}、{% data variables.product.prodname_registry %}、{% data variables.product.prodname_github_codespaces %} のストレージ利用状況の CSV レポートをダウンロードするためのリンクを含むメールを受け取ることもできます。 メールはアカウントのプライマリ メール アドレスに送信されます。 レポートで過去 7 日間、30 日間、90 日間、または 180 日間のどれを対象にするかを選択できます。

   ![CSV レポートのダウンロード](/assets/images/help/billing/actions-packages-report-download.png)

   このレポートで使用されるデータは毎日更新されます。 

   {% data variables.product.prodname_github_codespaces %} コンピューティングの使用量とストレージのコストを確認するには、レポートをフィルター処理して、`Product` 列に "Codespaces" が示される行のみを表示します。

   ![{% data variables.product.prodname_codespaces %} でフィルター処理された使用状況レポートのスクリーンショット](/assets/images/help/codespaces/CSV-usage-report.png)

   プレビルドの作成、更新、および格納のコストのみを表示するには、レポートをフィルター処理して、`Actions Workflow` 列に "Codespaces プレビルドの作成" が示される行のみを表示します。

   ![プレビルド用にフィルター処理された使用状況レポートのスクリーンショット](/assets/images/help/codespaces/CSV-usage-report-prebuilds.png)
