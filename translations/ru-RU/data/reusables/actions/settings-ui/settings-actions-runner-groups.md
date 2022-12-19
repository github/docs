---
ms.openlocfilehash: 8329f603d09f84f7167b53f88d9580733086fb42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147061293"
---
{% comment %}Этот многократно используемый компонент можно использовать только в других многократно используемых компонентах для параметров репозитория, организации, предприятия.{%- endcomment -%}
1. На левой боковой панели щелкните {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}{% octicon "play" aria-label="The {% data variables.product.prodname_actions %} icon" %} **Действия**, а затем щелкните **Группы средств выполнения**.{% else %}**Действия**.{% ifversion ghes > 3.3 or ghae-issue-5091 %}
1. На левой боковой панели в разделе "Действия" щелкните **Группы средств выполнения**.
{%- elsif ghes or ghae %}
1. На левой боковой панели в разделе "Действия" щелкните **Средства выполнения**.{% endif %}{% endif %}
