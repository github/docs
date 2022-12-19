---
ms.openlocfilehash: 7193be487b701029df5604b7253f683b5675c086
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145113741"
---
### ユーザーに基づく検索

`actor` 修飾子は、アクションを実行した人に基づいてイベントの範囲を指定できます。 たとえば次のような点です。

  * `actor:octocat` は `octocat` によって実行されたすべてのイベントを検索します。
  * `actor:octocat actor:hubot` は `octocat` および `hubot` によって実行されたすべてのイベントを検索します。
  * `-actor:hubot` は `hubot` によって実行されたすべてのイベントを除外します。

使用できるのは {% data variables.product.product_name %} のユーザー名のみであり、個人の実名ではないことに注意してください。
