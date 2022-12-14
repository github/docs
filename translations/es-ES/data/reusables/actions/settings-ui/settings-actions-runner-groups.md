---
ms.openlocfilehash: 8329f603d09f84f7167b53f88d9580733086fb42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147061294"
---
{% comment %} Esta opción reutilizable solo se usará en otras configuraciones reutilizables de repositorio, organización o empresa.{%- endcomment -%}
1. En la barra lateral izquierda, haga clic en {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}{% octicon "play" aria-label="The {% data variables.product.prodname_actions %} icon" %} **Actions** (Acciones) y, después, en **Runner groups** (Grupos de ejecutores). {% else %} **Actions** (Acciones).{% ifversion ghes > 3.3 or ghae-issue-5091 %}
1. En la barra lateral izquierda, en "Actions" (Acciones), haga clic en **Runner groups** (Grupos de ejecutores).
{%- elsif ghes or ghae %}
1. En la barra lateral izquierda, en "Acciones", haga clic en **Ejecutores**.{% endif %}{% endif %}
