---
ms.openlocfilehash: 86e470a2557996f90def0d7ab84e17e646642e0a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "145118058"
---
{% ifversion not ghae %} Si el repositorio tiene un manifiesto de dependencia compatible{% ifversion fpt or ghec %} (y si ha configurado el gráfico de dependencias si es un repositorio privado){% endif %}, siempre que {% data variables.product.product_name %} detecte una dependencia vulnerable en el repositorio, recibirá un correo electrónico con un resumen semanal. También puedes configurar tus alertas de seguridad y notificaciones web, notificaciones individuales por correo electrónico, resúmenes diarios por correo electrónico o alertas en la interfaz de {% data variables.product.product_name %}. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".
{% endif %}
