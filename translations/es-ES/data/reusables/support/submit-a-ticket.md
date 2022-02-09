1. Select the **Account or organization** dropdown menu and click the name of the account your support ticket is regarding. ![Screenshot of the "Account or organization" dropdown menu.](/assets/images/help/support/account-field.png)
1. Selecciona el menú desplegable de **Desde** y haz clic en la dirección de correo electrónico con la cual te gustaría que {% data variables.contact.github_support %} se comunique. ![Screenshot of the "From" dropdown menu.](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. Select the **Product** dropdown menu and click {% ifversion ghes %}**GitHub Enterprise Server (self-hosted)**{% else %}**GitHub Enterprise Cloud**{% endif %}.
{% ifversion ghec %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field-ghec.png){% else %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field.png){% endif %}
{%- endif %}
{%- ifversion ghes %}
1. If prompted, select the **Server installation** dropdown menu and click the installation your support ticket is regarding. If the installation is not listed, click **Other**. ![Screenshot of the "Server Installation" dropdown menu](/assets/images/help/support/installation-field.png)
{%- endif %}
{%- ifversion ghes %}
1. Select the **Release series** dropdown menu and click the release {% data variables.product.product_location_enterprise %} is running. ![Screenshot of the "Release series" dropdown menu](/assets/images/help/support/release-field.png)
{%- endif %}
{%- ifversion ghes or ghec %}
1. Select the **Priority** dropdown menu and click the appropriate urgency. For more information, see "[About ticket priority](/support/learning-about-github-support/about-ticket-priority)." ![Screenshot of the "Priority" dropdown menu.](/assets/images/help/support/priority-field.png)
{%- endif %}
{%- ifversion ghes %}
    - Elige **{% data variables.product.support_ticket_priority_urgent %}** para reportar una {% ifversion fpt or ghec %}falla crítica del sistema{% else %} fallas fatales del sistema, interrupciones que impactan las operaciones críticas del sistema, incidentes de seguridad, y licencias expiradas{% endif %}.
    - Elige **{% data variables.product.support_ticket_priority_high %}** para reportar incidentes que impactan las operaciones de negocios, incluyendo {% ifversion fpt or ghec %} eliminar datos sensibles (confirmaciones, incidentes, solicitudes de extracción, adjuntos cargados) de tus propias restauraciones de cuenta y de organización{% else %}, incidentes de rendimiento del sistema{% endif %}, o para reportar errores críticos.
    - Elige **{% data variables.product.support_ticket_priority_normal %}** para {% ifversion fpt or ghec %}solicitar una recuperación de cuenta o desmarcación de spam, reportar problemas de acceso de usuario{% else %}hacer solicitudes técnicas como cambios de configuración e integraciones de terceros{% endif %}, y reportar errores no críticos.
    - Elige**{% data variables.product.support_ticket_priority_low %}** para hacer preguntas generales y emitir solicitudes para nuevas características, compras, capacitación, o revisiones de estado.
{%- endif %}
{%- ifversion ghes or ghec %}
1. Optionally, if your account includes {% data variables.contact.premium_support %} and your ticket is {% ifversion ghes %}urgent or high{% elsif ghec %}high{% endif %} priority, you can request a callback in English. Select **Request a callback from GitHub Support**, select the country code dropdown menu to choose your country, and enter your phone number. ![Screenshot of the "Request callback" checkbox, "Country code" dropdown menu, and "Phone number" text box.](/assets/images/help/support/request-callback.png)
{%- endif %}
1. Debajo de "Tema", teclea un título descriptivo para el problema que estás experimentando. ![Screenshot of the "Subject" text box.](/assets/images/help/support/subject-field.png)
1. Debajo de "Cómo podemos ayudar", proporciona cualquier tipo de información adicional que ayudará al equipo de soporte a solucionar el problema. You can use markdown to format your message. ![Screenshot of the "How can we help" text area.](/assets/images/help/support/how-can-we-help-field.png) Helpful information may include:
    - Pasos para reproducir el incidente
    - Cualquier circunstancia especial relacionada con el descubrimiento del problema (por ejemplo, la primera vez que se suscitó, o su materialización después de cierto evento, frecuencia en la que se presenta, impacto al negocio, y urgencia sugerida)
    - Las palabras exactas de los mensajes de error
{%- ifversion ghes %}
1. Optionally, attach diagnostics files and other files by dragging and dropping, uploading, or pasting from the clipboard.
{%- endif %}
1. Da clic en **Enviar solicitud**. ![Screenshot of the "Send request" button.](/assets/images/help/support/send-request-button.png)