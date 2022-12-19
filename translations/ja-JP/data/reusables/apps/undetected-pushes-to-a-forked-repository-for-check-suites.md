---
ms.openlocfilehash: b6dfc33713afc09930569825ced59238fcede851
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: "147881861"
---
{% note %}

**注:** Checks API は、チェック スイートもしくはチェック実行が作成されたリポジトリ内のプッシュのみを探します。 フォークされたリポジトリ内のブランチへのプッシュは検出せず、空の `pull_requests` 配列と `null` 値の `head_branch` が返されます。

{% endnote %}
