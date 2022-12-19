---
ms.openlocfilehash: dfdccdbe5c96cf63fc38b14cc164a98769ecded6
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: "147065053"
---
{% comment %}Этот многократно используемый компонент можно использовать только в других многократно используемых компонентах для параметров репозитория, организации, предприятия.{%- endcomment -%}
1. На левой боковой панели щелкните {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}{% octicon "play" aria-label="The {% data variables.product.prodname_actions %} icon" %} **Действия**, а затем щелкните **Средства выполнения тестов**.{% else %}**Действия**.{% ifversion ghes or ghae %}
1. На левой боковой панели в разделе "Действия" щелкните **Средства выполнения**.{% endif %}{% endif %}
