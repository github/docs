---
ms.openlocfilehash: 0e815b78ccfa3c799c0558fca89fc84f0fccd2bf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145124050"
---
{% ifversion not ghec%}Predeterminadamente, una{% else %}Una{% endif %} cuenta de usuario se considera inactiva si no ha estado activa por 90 días. {% ifversion not ghec %}Puedes configurar el tiempo en el que un usuario puede estar inactivo antes de considerarlo como inactivo{% ifversion ghes%} y elegir suspender a los usuarios inactivos para liberar las licencias de usuario{% endif %}.{% endif %}
