---
ms.openlocfilehash: 59e70683dad451b603d2d34286976bfaa8d1d9c8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881059"
---
パブリックリポジトリをフォークし、リポジトリの{% data variables.product.prodname_actions %}ワークフローへの変更を提案するPull Requestをサブミットすることは誰でもできます。 フォークからのワークフローはシークレットなどの機密データにアクセスできませんが、悪用目的で変更された場合、メンテナが迷惑を被る可能性があります。

これを防ぐために、外部コラボレータのパブリックリポジトリへのPull Requestではワークフローは自動的には動作せず、まず承認が必要になることがあります。 デフォルトでは、すべての初めてのコントリビューターは、ワークフローを実行するのに承認を必要とします。

{% note %}

**注:** `pull_request_target` イベントによってトリガーされるワークフローは、ベース ブランチのコンテキストで実行されます。 ベース ブランチは信頼済みと見なされるため、承認設定に関係なく、これらのイベントによってトリガーされるワークフローは常に実行されます。

{% endnote %}
