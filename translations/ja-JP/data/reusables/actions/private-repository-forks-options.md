---
ms.openlocfilehash: d9874c3884e3191a0296272fbead8f30b7630e5a
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/14/2022
ms.locfileid: "148163823"
---
- **フォーク pull request からワークフローを実行する** - 読み取り専用権限を持ち、シークレットへのアクセス権を持たない `GITHUB_TOKEN` を使用して、フォーク pull request からワークフローを実行できます。
- **pull request からワークフローに書き込みトークンを送信する** - フォークからの pull request で書き込み権限を持つ `GITHUB_TOKEN` を使用できます。
- **pull request からワークフローにシークレットを送信する** - すべてのシークレットを pull request で利用できるようにします。{% ifversion actions-private-fork-workflow-approvals %}
- **フォークの pull request ワークフローに対して承認を要求する** - 書き込みアクセス許可のないコラボレーターからの pull request に対するワークフロー実行には、実行する前に書き込みアクセス許可を持つ誰かからの承認が必要になります。{% endif %}
