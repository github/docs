---
ms.openlocfilehash: 8329f603d09f84f7167b53f88d9580733086fb42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: "147061291"
---
{% comment %}この再利用可能は、他のリポジトリ/Organization/Enterprise 設定の再利用可能でのみ使用できます。{%- endcomment -%}
1. 左側のサイドバーで、{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}{% octicon "play" aria-label="The {% data variables.product.prodname_actions %} icon" %} **[アクション]** 、 **[ランナー グループ]** の順にクリックします。{% else %} **[アクション]** をクリックします。{% ifversion ghes > 3.3 or ghae-issue-5091 %}
1. 左側のサイドバーの [アクション] で、 **[ランナー グループ]** をクリックします。
{%- elsif ghes or ghae %}
1. 左側のサイドバーの [アクション] で、 **[ランナー]** をクリックします。{% endif %}{% endif %}
