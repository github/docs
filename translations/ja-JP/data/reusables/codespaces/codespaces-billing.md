---
ms.openlocfilehash: 845c770a8a03c57a4c10a84d28fd4d3d78282042
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147111123"
---
{% data variables.product.prodname_codespaces %} は、コンピューティングとストレージの使用量に応じて米ドル (USD) で課金されます。

### コンピューティング使用量の計算
コンピューティング使用量は、{% data variables.product.prodname_github_codespaces %} インスタンスがアクティブであるアップタイム時間 (分) の合計として定義されます。 コンピューティング使用量は、すべての codespace で実際に使われた分数を合計することで計算されます。 これらの合計は、毎日課金サービスに報告され、毎月請求されます。

アップタイムを制御するには、codespace を停止します。これは、手動で行うか、開発者が指定した非アクティブ期間の後に自動的に行うことができます。 詳細については、「[codespace の終了または停止](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)」を参照してください。

### ストレージ使用量の計算
{% data variables.product.prodname_github_codespaces %} の課金目的の場合、アカウント内のすべての codespace で使用されるすべてのストレージが含まれます。 これには、codespace に使われるすべてのファイル (クローンされたリポジトリ、構成ファイル、拡張機能など) が含まれます。 これらの合計は、毎日課金サービスに報告され、毎月請求されます。 月末に、{% data variables.product.prodname_dotcom %}はストレージ使用量を最も近いGBに丸めます。 
