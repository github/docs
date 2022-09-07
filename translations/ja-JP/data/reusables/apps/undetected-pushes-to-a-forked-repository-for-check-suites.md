---
ms.openlocfilehash: b6dfc33713afc09930569825ced59238fcede851
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113805"
---
{% note %}

**注:** Checks API は、チェック スイートもしくはチェック実行が作成されたリポジトリ内のプッシュのみを探します。 フォークされたリポジトリ内のブランチへのプッシュは検出せず、空の `pull_requests` 配列と `null` 値の `head_branch` が返されます。

{% endnote %}
