---
ms.openlocfilehash: 038896fa537c7cc3ea3fa95e903900a9eb8f3db7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "145917062"
---
pull request で **Rebase と Merge** オプションを使用する場合は、ヘッド ブランチのコミットがコミット署名の検証なしでベース ブランチに追加されることに注意することが重要です。 このオプションを使用すると、元のコミットのデータとコンテンツを使用して、{% data variables.product.prodname_dotcom %} によって変更されたコミットが作成されます。 つまり、{% data variables.product.prodname_dotcom %} は、このコミットを本当に作成していないため、汎用システム ユーザーとして署名することはできません。 {% data variables.product.prodname_dotcom %} では、コミッターの秘密署名キーにアクセスできないため、ユーザーの代わりにコミットに署名できません。

これを回避するには、ローカルでリベースとマージを行い、変更を pull request のベース ブランチにプッシュします。
