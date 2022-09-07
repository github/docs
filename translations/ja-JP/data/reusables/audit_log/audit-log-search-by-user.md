---
ms.openlocfilehash: 7193be487b701029df5604b7253f683b5675c086
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145113741"
---
### ユーザーに基づく検索

`actor` 修飾子は、アクションを実行した人に基づいてイベントの範囲を指定できます。 たとえば次のような点です。

  * `actor:octocat` は `octocat` によって実行されたすべてのイベントを検索します。
  * `actor:octocat actor:hubot` は `octocat` および `hubot` によって実行されたすべてのイベントを検索します。
  * `-actor:hubot` は `hubot` によって実行されたすべてのイベントを除外します。

使用できるのは {% data variables.product.product_name %} のユーザー名のみであり、個人の実名ではないことに注意してください。
