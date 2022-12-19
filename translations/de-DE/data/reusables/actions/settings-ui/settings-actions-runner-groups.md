---
ms.openlocfilehash: 8329f603d09f84f7167b53f88d9580733086fb42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "147061290"
---
{% comment %}Diese wiederverwendbare Einstellung ist nur in anderen wiederverwendbaren repo/org/enterprise-Einstellungen zu verwenden.{%- endcomment -%}
1. Klicke auf der linken Randleiste auf {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}{% octicon "play" aria-label="The {% data variables.product.prodname_actions %} icon" %} **Aktionen**, und klicke dann auf **Runner-Gruppen**.{% else %}**Aktionen**.{% ifversion ghes > 3.3 or ghae-issue-5091 %}
1. Klicke auf der linken Randleiste unter „Aktionen“ auf **Runner-Gruppen**.
{%- elsif ghes or ghae %}
1. Klicke auf der linken Randleiste unter „Aktionen“ auf **Runner**.{% endif %}{% endif %}
