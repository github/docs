---
ms.openlocfilehash: b7f16729209b711d9ea95d059f5868ae867fa040
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "147419885"
---
1. Seleccione el menú desplegable **Cuenta u organización** y haga clic en el nombre de la cuenta relacionada con la incidencia de soporte técnico.
![Captura de pantalla del menú desplegable "Cuenta u organización".](/assets/images/help/support/account-field.png)
1. En el menú desplegable **Desde**, haga clic en la dirección de correo electrónico a la que quiere que contacte {% data variables.contact.github_support %}.
![Captura de pantalla del menú desplegable "Desde".](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. Seleccione el menú desplegable **Producto** y haga clic en {% ifversion ghes %}**GitHub Enterprise Server (autohospedado)** {% else %}**GitHub Enterprise Cloud**{% endif %}.
{% ifversion ghec %}![Captura de pantalla del menú desplegable "Producto".](/assets/images/help/support/product-field-ghec.png){% else %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field.png){% endif %} {%- endif %} {%- ifversion ghes %}
1. Si se le solicita, selecciona el menú desplegable **Instalación del servidor** y haga clic en la instalación relacionada con la incidencia de soporte técnico. Si la instalación no aparece en la lista, haga clic en **Otros**.
![Captura de pantalla del menú desplegable "Instalación del servidor"](/assets/images/help/support/installation-field.png) {%- endif %} {%- ifversion ghes %}
1. Seleccione el menú desplegable **Serie de versión** y haga clic en la versión que ejecute {% data variables.product.product_location_enterprise %}.
![Captura de pantalla del menú desplegable "Serie de versión"](/assets/images/help/support/release-field.png) {%- endif %} {%- ifversion ghes or ghec %}
1. Seleccione el menú desplegable **Prioridad** y haga clic en la urgencia adecuada. Para más información, vea "[Acerca de la prioridad de las incidencia de soporte técnico](/support/learning-about-github-support/about-ticket-priority)".
  ![Captura de pantalla del menú desplegable "Prioridad".](/assets/images/help/support/priority-field.png)
{%- endif %} {%- ifversion ghes %}
    - Seleccione **{% data variables.product.support_ticket_priority_urgent %}** para notificar un {% ifversion fpt or ghec %}fallo crítico del sistema{% else %}fallos del sistema, interrupciones que afecten a operaciones críticas del sistema, incidentes de seguridad y licencias expiradas{% endif %}.
    - Seleccione **{% data variables.product.support_ticket_priority_high %}** para notificar incidencias que afectan a las operaciones de la empresa, incluida {% ifversion fpt or ghec %}la eliminación de datos confidenciales (confirmaciones, incidencias, solicitudes de incorporación de cambios, datos adjuntos cargados) de restauraciones propias de la cuenta y la organización{% else %}problemas de rendimiento del sistema{% endif %}, o bien para notificar errores críticos.
    - Seleccione **{% data variables.product.support_ticket_priority_normal %}** para {% ifversion fpt or ghec %}solicitar la recuperación de una cuenta o quitar marcas de spam, notificar incidencias de inicio de sesión de los usuarios{% else %}realizar solicitudes técnicas como cambios de configuración e integraciones de terceros{% endif %}, y para notificar errores que no sean críticos.
    - Seleccione **{% data variables.product.support_ticket_priority_low %}** para formular preguntas generales y enviar solicitudes de nuevas características, compras, entrenamiento o comprobaciones de estado.
{%- endif %} {%- ifversion ghes or ghec %}
1. Opcionalmente, si tu cuenta incluye {% data variables.contact.premium_support %} y tu ticket es de prioridad {% ifversion ghes %}urgente o alta{% elsif ghec %}alta{% endif %}, puedes solicitar una llamada de vuelta en inglés. Seleccione **Solicitar una llamada al soporte técnico de GitHub**, seleccione el menú desplegable de código de país para elegir el suyo y escriba el número de teléfono.
![Captura de pantalla de la casilla "Solicitar una llamada al soporte técnico de GitHub", menú desplegable "Código de país" y cuadro de texto "Número de teléfono".](/assets/images/help/support/request-callback.png)
{%- endif %}
1. Debajo de "Asunto", teclea un título descriptivo para el problema que estás teniendo.
![Captura de pantalla del cuadro de texto ""Asunto".](/assets/images/help/support/subject-field.png)
1. Debajo de "Cómo podemos ayudar", proporciona cualquier tipo de información adicional que ayudará al equipo de soporte a solucionar el problema. Puedes utilizar lenguaje de marcado para formatear tu mensaje.
  ![Captura de pantalla del área de texto "How can we help".](/assets/images/help/support/how-can-we-help-field.png)
   La información adicional podría incluir:
    - Pasos para reproducir el problema.
    - Cualquier circunstancia especial para la detección del problema (por ejemplo, la primera vez que aparece o la aparición después de un evento específico, la frecuencia con la que aparece, el impacto empresarial del problema y la urgencia sugerida).
    - Redacción exacta de mensajes de error {% indented_data_reference reusables.repositories.anyone-can-view-anonymized-url spaces=3 %}

{%- ifversion ghes %}
1. Opcionalmente, adjunta archivos de diagnóstico y de otros tipos arrastrándolos y soltándolos, cargándolos o copiándolos desde el portapapeles.
{%- endif %}
1. Haga clic en **Enviar solicitud**.
![Captura de pantalla del botón "Enviar solicitud".](/assets/images/help/support/send-request-button.png)
