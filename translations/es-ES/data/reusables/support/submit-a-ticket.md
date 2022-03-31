1. Selecciona el menú desplegable **Cuenta u organización** y haz clic en el nombre de la cuenta de la cual trata tu ticket de soporte. ![Captura de pantalla del menú desplegable "Cuenta u organización".](/assets/images/help/support/account-field.png)
1. Selecciona el menú desplegable de **Desde** y haz clic en la dirección de correo electrónico con la cual te gustaría que {% data variables.contact.github_support %} se comunique. ![Captura de pantalla del menú desplegable "Desde".](/assets/images/help/support/from-field.png)
{%- ifversion ghec or ghes %}
1. Selecciona el menú desplegable **Producto** y haz clic en {% ifversion ghes %}**GitHub Enterprise Server (auto-hospedado)**{% else %}**GitHub Enterprise Cloud**{% endif %}.
{% ifversion ghec %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field-ghec.png){% else %}![Screenshot of the "Product" dropdown menu.](/assets/images/help/support/product-field.png){% endif %}
{%- endif %}
{%- ifversion ghes %}
1. En caso de que se te solicite, selecciona el menú desplegable de **Instalación de servidor** y haz clic en la instalación de la cual trata tu ticket de soporte. Si la instalación no está listada, haz clic en **Otra**. ![Captura de pantalla del menú desplegable de "Instalación del servidor"](/assets/images/help/support/installation-field.png)
{%- endif %}
{%- ifversion ghes %}
1. Selecciona el menú desplegable de **Serie de lanzamiento** y haz clic en el lanzamiento de {% data variables.product.product_location_enterprise %} que se esté ejecutando. ![Captura de pantalla del menú desplegable de "Serie de lanzamiento"](/assets/images/help/support/release-field.png)
{%- endif %}
{%- ifversion ghes or ghec %}
1. Selecciona el menú desplegable de **Prioridad** y haz clic en la urgencia adecuada. Para obtener más información, consulta la sección "[Acerca de la prioridad de los tickets](/support/learning-about-github-support/about-ticket-priority)". ![Captura de pantalla del menú desplegable "Prioridad".](/assets/images/help/support/priority-field.png)
{%- endif %}
{%- ifversion ghes %}
    - Elige **{% data variables.product.support_ticket_priority_urgent %}** para reportar una {% ifversion fpt or ghec %}falla crítica del sistema{% else %} fallas fatales del sistema, interrupciones que impactan las operaciones críticas del sistema, incidentes de seguridad, y licencias expiradas{% endif %}.
    - Elige **{% data variables.product.support_ticket_priority_high %}** para reportar incidentes que impactan las operaciones de negocios, incluyendo {% ifversion fpt or ghec %} eliminar datos sensibles (confirmaciones, incidentes, solicitudes de extracción, adjuntos cargados) de tus propias restauraciones de cuenta y de organización{% else %}, incidentes de rendimiento del sistema{% endif %}, o para reportar errores críticos.
    - Elige **{% data variables.product.support_ticket_priority_normal %}** para {% ifversion fpt or ghec %}solicitar una recuperación de cuenta o desmarcación de spam, reportar problemas de acceso de usuario{% else %}hacer solicitudes técnicas como cambios de configuración e integraciones de terceros{% endif %}, y reportar errores no críticos.
    - Elige**{% data variables.product.support_ticket_priority_low %}** para hacer preguntas generales y emitir solicitudes para nuevas características, compras, capacitación, o revisiones de estado.
{%- endif %}
{%- ifversion ghes or ghec %}
1. Opcionalmente, si tu cuenta incluye {% data variables.contact.premium_support %} y tu ticket es de prioridad {% ifversion ghes %}urgente o alta{% elsif ghec %}alta{% endif %}, puedes solicitar una llamada de vuelta en inglés. Selecciona **Solicitar una llamada de vuelta del Soporte de GitHub**, selecciona el menú desplegable de código de país para elegir el tuyo e ingrésalo. ![Captura de pantalla de la casilla de verificación de "Solicitar rellamado", menú desplegable de "Código de país" y caja de texto de "número telefónico".](/assets/images/help/support/request-callback.png)
{%- endif %}
1. Debajo de "Tema", teclea un título descriptivo para el problema que estás experimentando. ![Captura de pantalla de la caja de texto de "Asunto".](/assets/images/help/support/subject-field.png)
1. Debajo de "Cómo podemos ayudar", proporciona cualquier tipo de información adicional que ayudará al equipo de soporte a solucionar el problema. Puedes utilizar lenguaje de marcado para formatear tu mensaje. ![Screenshot of the "How can we help" text area.](/assets/images/help/support/how-can-we-help-field.png) La información útil podría incluir:
    - Pasos para reproducir el incidente
    - Cualquier circunstancia especial relacionada con el descubrimiento del problema (por ejemplo, la primera vez que se suscitó, o su materialización después de cierto evento, frecuencia en la que se presenta, impacto al negocio, y urgencia sugerida)
    - Las palabras exactas de los mensajes de error
{%- ifversion ghes %}
1. Opcionalmente, adjunta archivos de diagnóstico y de otros tipos arrastrándolos y soltándolos, cargándolos o copiándolos desde el portapapeles.
{%- endif %}
1. Da clic en **Enviar solicitud**. ![Captura de pantalla del botón "Enviar solicitud".](/assets/images/help/support/send-request-button.png)
