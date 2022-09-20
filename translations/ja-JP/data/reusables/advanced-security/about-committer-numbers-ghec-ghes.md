---
ms.openlocfilehash: 281a3a039c8a557c209e756d107ac1856a181017
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: "145089088"
---
{% data variables.product.product_location %} 上の {% data variables.product.prodname_GH_advanced_security %} のコミッターの 2 つの数値を記録して表示します。

- **コミッター** は、組織内の{% ifversion fpt or ghec %}プライベート {% endif %}リポジトリの少なくとも 1 つにコントリビュートし、エンタープライズ ライセンスのシートを使用するコミッターの数です。 つまり、Organization のメンバー、外部のコラボレータでもあるか、Enterprise 内の Organization に参加するための保留中の招待状を持っています。
- **このリポジトリ/組織に固有** は、このリポジトリまたはこの組織のリポジトリにのみコントリビュートしたコミッターの数です。 この数値は、そのリポジトリまたは Organization の {% data variables.product.prodname_GH_advanced_security %} を無効にすることで解放できるライセンスシートの数を示しています。

一意のコミッターがない場合、これは、すべてのアクティブなコミッターが {% data variables.product.prodname_GH_advanced_security %} を使用する他のリポジトリまたは Organization にもコントリビュートしているということです。 そのリポジトリまたは Organization の機能を無効にしても、ライセンスのシートは解放されません。

ユーザをEnterpriseアカウントから削除すると、そのユーザのライセンスは24時間以内に解放されます。

{% note %}

**注:** ユーザーは、複数のリポジトリまたは組織にコントリビュートできます。 使用状況はEnterpriseアカウント全体にわたって計測され、各ユーザがいくつのリポジトリあるいはOrganizationに貢献していても、1つのシートしか使わないことを保証します。

{% endnote %}
