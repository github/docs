---
ms.openlocfilehash: 8329f603d09f84f7167b53f88d9580733086fb42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147061289"
---
{% comment %}Ce réutilisable doit uniquement être utilisé dans d’autres réutilisables de dépôt/organisation/entreprise.{%- endcomment -%}
1. Dans la barre latérale gauche, cliquez sur {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}{% octicon "play" aria-label="The {% data variables.product.prodname_actions %} icon" %} **Actions**, puis sur **Groupes d’exécuteurs**.{% else %}**Actions**.{% ifversion ghes > 3.3 or ghae-issue-5091 %}
1. Dans la barre latérale gauche, sous «  Actions », cliquez sur **Groupes d’exécuteurs**.
{%- elsif ghes or ghae %}
1. Dans la barre latérale gauche, sous « Actions », cliquez sur **Exécuteurs**.{% endif %}{% endif %}
