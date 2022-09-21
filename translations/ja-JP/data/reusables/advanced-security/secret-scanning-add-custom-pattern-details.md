---
ms.openlocfilehash: 53ead6c394e757a67d36fde9c73c74eec7e963bc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089056"
---
1. 新しいカスタムパターンの詳細を入力します。
   1. 少なくともパターンの名前と、シークレットパターンのフォーマットとして正規表現を提供しなければなりません。
   1. **[その他のオプション {% octicon "chevron-down" aria-label="down" %}]** をクリックして、シークレットのフォーマットのその他の周辺コンテンツあるいは追加のマッチ要件を指定できます。
   1. サンプルのテスト文字列を指定し、設定内容が期待するパターンにマッチすることを確認できます。
   {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5499 %} ![カスタム {% data variables.product.prodname_secret_scanning %} パターン形式を作成する](/assets/images/help/repository/secret-scanning-create-custom-pattern.png) {% else %} ![カスタム {% data variables.product.prodname_secret_scanning %} パターン形式を作成する](/assets/images/enterprise/3.2/repository/secret-scanning-create-custom-pattern.png) {% endif %}
