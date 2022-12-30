---
ms.openlocfilehash: fec57b88af5ef5b7227d88a8c70e5a4b4bb9c769
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163826"
---
リポジトリへの書き込みアクセスを持つ保守担当者は、次の手順を使用して、承認を必要とする共同作成者からの pull request でワークフローをレビューして実行できます。

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}
1. プルリクエストで提案された変更を調べて、プルリクエストブランチでワークフローを快適に実行できることを確認します。 ワークフロー ファイルに影響を与える `.github/workflows/` ディレクトリで提案された変更には特に注意する必要があります。
1. pull request ブランチでワークフローを実行することに慣れている場合は、{% octicon "comment-discussion" aria-label="The discussion icon" %} **[会話]** タブに戻り、[承認を待っているワークフロー] で **[承認して実行]** をクリックします。

   ![ワークフローを承認して実行する](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)