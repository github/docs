---
ms.openlocfilehash: 8329f603d09f84f7167b53f88d9580733086fb42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "147061287"
---
{% comment %}Esse reutilizável só deve ser usado em outros reutilizáveis de configuração de repo/org/enterprise.{%- endcomment -%}
1. Na barra lateral esquerda, clique em {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}{% octicon "play" aria-label="The {% data variables.product.prodname_actions %} icon" %} **Actions** e em **Grupos de executores**.{% else %}**Actions**.{% ifversion ghes > 3.3 or ghae-issue-5091 %}
1. Na barra lateral esquerda, em "Actions", clique em **Grupos de executores**.
{%- elsif ghes or ghae %}
1. Na barra lateral esquerda, em "Actions", clique em **Executores**.{% endif %}{% endif %}
