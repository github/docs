---
ms.openlocfilehash: 3cc118cb9748ada5efb83aad6c0fe3b86c76d9bb
ms.sourcegitcommit: 738c16f6fc6d56d939a80c832497c8bfa28d10c7
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/05/2022
ms.locfileid: "148134904"
---
{% ifversion fpt or ghec %}De manera predeterminada, recibirás notificaciones:{% endif %}{% ifversion ghes or ghae %}De manera predeterminada, si el propietario de tu empresa ha configurado las notificaciones por correo electrónico en tu instancia, recibirás {% data variables.product.prodname_dependabot_alerts %}:{% endif %}

- en la bandeja de entrada, como notificaciones web. Se enviará una notificación web cuando se habilite {% data variables.product.prodname_dependabot %} en un repositorio, cuando se confirme un archivo de manifiesto nuevo en el repositorio y cuando se encuentre una vulnerabilidad nueva con gravedad crítica o alta (**en la opción {% data variables.product.prodname_dotcom %}** ).
- por correo electrónico, se enviará un mensaje de correo electrónico cuando se habilite {% data variables.product.prodname_dependabot %} para un repositorio, cuando se confirme un archivo de manifiesto nuevo en el repositorio y cuando se encuentre una vulnerabilidad nueva de gravedad crítica o alta (la opción **Email**).{% ifversion ghes < 3.8 or ghae < 3.8 %}
- en la interfaz de usuario, se muestra una advertencia en las vistas de archivos y código del repositorio si hay dependencias no seguras (opción **Alertas de la interfaz de usuario**).{% endif %}
- en la línea de comandos, las advertencias se muestran como devoluciones de llamada al insertar en repositorios con dependencias no seguras (opción **CLI**).
{% ifversion not ghae %}
- en {% data variables.product.prodname_mobile %}, como notificaciones web. Para obtener más información, consulta "[Habilitación de las notificaciones de inserción con {% data variables.product.prodname_mobile %}](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#enabling-push-notifications-with-github-mobile)".{% endif %}

{% note %}

**Nota:** Las notificaciones por correo electrónico y web{% ifversion not ghae %}/{% data variables.product.prodname_mobile %}{% endif %} son las siguientes:

- _por repositorio_ cuando {% data variables.product.prodname_dependabot %} se habilita en el repositorio o cuando se confirma un archivo de manifiesto nuevo en el repositorio.

- _por organización_ cuando se descubre una vulnerabilidad nueva.

{% endnote %}

{% ifversion update-notification-settings-22 %} Puedes personalizar la forma en que recibes notificaciones sobre {% data variables.product.prodname_dependabot_alerts %}. Por ejemplo, puedes recibir un correo electrónico diario o semanal con el resumen de las alertas de hasta 10 de los repositorios mediante la opción **Email weekly digest**.
{% else %} Puedes personalizar la forma en que recibes notificaciones sobre {% data variables.product.prodname_dependabot_alerts %}. Por ejemplo, puedes recibir un correo electrónico semanal con el resumen de las alertas de hasta 10 de los repositorios mediante las opciones **Email a digest summary of vulnerabilities** y **Weekly security email digest**.{% endif %}
