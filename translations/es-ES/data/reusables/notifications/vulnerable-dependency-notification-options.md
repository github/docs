---
ms.openlocfilehash: 5120f840aab87ca243eed66c5bb6256e80aefeea
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147064182"
---
{% ifversion fpt or ghec %}De manera predeterminada, recibirás notificaciones:{% endif %}{% ifversion ghes or ghae %}De manera predeterminada, si el propietario de tu empresa ha configurado las notificaciones por correo electrónico en tu instancia, recibirás {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- por correo electrónico, se enviará un mensaje de correo electrónico cuando se habilite {% data variables.product.prodname_dependabot %} para un repositorio, cuando se confirme un archivo de manifiesto nuevo en el repositorio y cuando se encuentre una vulnerabilidad nueva de gravedad crítica o alta (la opción **Email each time a vulnerability is found**).
- en la interfaz de usuario, se muestra una advertencia en las vistas de archivos y código del repositorio si hay dependencias no seguras (opción **Alertas de la interfaz de usuario**).
- en la línea de comandos, las advertencias se muestran como devoluciones de llamada al insertar en repositorios con dependencias no seguras (opción **Línea de comandos**).
- en la bandeja de entrada, como notificaciones web. Se enviará una notificación web cuando se habilite {% data variables.product.prodname_dependabot %} en un repositorio, cuando se confirme un archivo de manifiesto nuevo en el repositorio y cuando se encuentre una vulnerabilidad nueva con gravedad crítica o alta (la opción **Web**).{% ifversion not ghae %}
- en {% data variables.product.prodname_mobile %}, como notificaciones web. Para más información, vea ["Habilitación de notificaciones de inserción con GitHub Mobile](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)".{% endif %}

{% note %}

**Nota:** Las notificaciones por correo electrónico y web{% ifversion not ghae %}/{% data variables.product.prodname_mobile %}{% endif %} son las siguientes:

- _por repositorio_ cuando {% data variables.product.prodname_dependabot %} se habilita en el repositorio o cuando se confirma un archivo de manifiesto nuevo en el repositorio.

- _por organización_ cuando se descubre una vulnerabilidad nueva.

{% endnote %}

Puede personalizar la forma en que recibe notificaciones sobre {% data variables.product.prodname_dependabot_alerts %}. Por ejemplo, puede recibir un correo electrónico semanal con el resumen de las alertas de hasta 10 de los repositorios mediante las opciones **Email a digest summary of vulnerabilities** y **Weekly security email digest**.
