---
title: Transmitir las bitácoras de auditoría para las organizaciones de tu cuenta empresarial
intro: 'Los propietarios de las empresas pueden transmitir datos de eventos de Git y de auditorías desde {% data variables.product.prodname_dotcom %} a un sistema de administración de datos externo.'
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
topics:
  - Enterprise
shortTitle: Transmitir bitácoras de auditoría de la organización
---

{% note %}

**Nota:** La transmisión de bitácoras de auditoría se encuentra actualmente en beta para {% data variables.product.prodname_ghe_cloud %} y está sujeta a cambios.

{% endnote %}

## Acerca de exportar los datos de auditoría

Puedes extraer datos de bitácoras de auditoría y de eventos de git desde {% data variables.product.prodname_dotcom %} en varias formas:

* Ve a la página de bitácoras de auditoría en {% data variables.product.prodname_dotcom %} y haz clic en **Exportar**. <br/> Para obtener más información, consulta las secciones "[Ver las bitácoras de auditoría para las organizaciones de tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account)" y "[Exportar la bitácora de auditoría](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)".
* Utiliza la API para encuestar por eventos nuevos de bitácoras de auditoría. <br/> Para obtener más información, consulta la sección "[Utilizar la API de bitácoras de auditoría](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api)".
* Configurar {% data variables.product.product_name %} para transmitir datos de auditoría mientras se registran los eventos.

## Acerca de la transmisión de bitácoras de auditoría

Para ayudarte a proteger tu propiedad intelectual y mantener el cumplimiento en tu organización, puedes utilizar la transmisión para mantener copias de tus datos de bitácoras de auditoría y monitorear:
{% data reusables.audit_log.audited-data-list %}

Los beneficios de transmitir datos de auditoría incluyen:

* **Exploración de datos**. Puedes examinar los eventos transmitidos utilizando tu herramienta preferida para consultar cantidades grandes de datos. La transmisión contiene tanto los eventos de auditoría como los de Git a lo largo de toda la cuenta empresarial.
* **Continuidad de datos**. Puedes pausar la transmisión por hasta siete días sin perder datos de auditoría.
* **Retención de datos**. Puedes mantener tus datos de bitácoras de auditoría y de Git exportados conforme los necesites.

Los propietrios de empresas pueden configurar, pausar o borrar una transmisión en cualquier momento. La transmisión exporta los datos de auditoría de todas las organizaciones en tu empresa.

## Configurar la transmisión de bitácoras de auditoría

{% data variables.product.prodname_dotcom %} es compatible con la transmisión de datos de auditoría ya sea a los Concentradores de Eventos de Splunk o de Azure.
### Configurar la transmisión a Splunk

Para transmitir bitácoras de auditoría a la terminal del Recolector de Eventos HTTP (HEC) de Splunk, debes asegurarte de que la terminal se configure para aceptar conexiones HTTPS. Para obtener más información, consulta el artículo "[Configurar y utilizar el Recolector de Eventos HTTP en la Web de Splunk](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector)" en la documentación de Splunk.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Haz clic en la pestaña de **Transmisión de bitácoras**.
1. Haz clic en **Configurar transmisión** y selecciona **Splunk**. ![Elegir Splunk del menú desplegable](/assets/images/help/enterprises/audit-stream-choice-splunk.png)
1. En la página de configuración, ingresa:
   * El dominio en el cual se hospeda la aplicación que quieres transmitir.

     Si estás utilizando Splunk Cloud, `Domain` debe ser `http-inputs-<host>`, en donde `host` es el dominio que utilizas en Splunk Cloud. Por ejemplo: `http-inputs-mycompany.splunkcloud.com`.

   * El puerto mediante el cual la aplicación acepta datos.<br>

     Si estás utilizando Splunk Cloud, `Port` debería ser `443` si no has cambiado la configuración del puerto. Si estás utilizando la versión de prueba gratis de Splunk Cloud, `Port` debe ser `8088`.

   * Un token que pueda utilizar {% data variables.product.prodname_dotcom %} para autenticarse a la aplicación de terceros. ![Ingresar los ajustes de la transmisión](/assets/images/help/enterprises/audit-stream-add-splunk.png)

2. Deja seleccionada la casilla de **Habilitar la verificación por SSL**.

    Las bitácoras de auditoría siempre se transmiten como datos cifrados, sin embargo, si seleccionas esta opción, {% data variables.product.prodname_dotcom %} verificará el certificado SSL de tu instancia de Splunk cuando entregue eventos. La verificación por SSL te ayuda a garantizar que los eventos se entreguen a tu terminal URL con seguridad. Puedes limpiar la selección de esta opción, pero te recomendamos que dejes habilitada la verificación por SSL.
3. Haz clic en **Verificar terminal** para verificar que {% data variables.product.prodname_dotcom %} puede conectarse a la terminal de Splunk. ![Verificar la terminal](/assets/images/help/enterprises/audit-stream-check-splunk.png)
4. Después de que hayas verificado la terminal con éxito, haz clic en **Guardar**.

### Configurar la transmisión hacia Azure Event Hubs

Antes de configurar una transmisión en {% data variables.product.prodname_dotcom %}, primero debes tener un espacio designador de nombre para concentradores de eventos en Microsoft Azure. Posteriormente, debes crear una instancia de concentrador de eventos dentro del designador de nombre. Necesitarás los detalles de esta instancia de concentrador de eventos cuando configures la transmisión. Para encontrar los detalles, consulta la documentación de Microsoft, en la aprte de "[Inicio rápido: Crear un concentrador de eventos utilizando el portal de Azure](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)".

Necesitas dos partes de información sobre tu concentrador de eventos: su nombre de instancia y la secuencia de conexión.

**En el portal de Microsoft Azure**:
1. En el menú de la izquierda, selecciona **Entidades**. Posteriormente, selecciona **Concentradores de Eventos**. Se listarán los nombres de tus concentradores de eventos. ![Una lista de concentradores de eventos](/assets/images/help/enterprises/azure-event-hubs-list.png)
1. Haz una nota del nombre del concentrador de eventos al cual quieras transmitir.
1. Haz clic en el concentrador de eventos requerido. Posteriormente, en el menú de la izquierda, selecciona **Políticas de Acceso Compartido**.
1. Selecciona las políticas de acceso compartido de la lista de políticas o crea una nueva. ![Una lista de políticas de acceso compartidas](/assets/images/help/enterprises/azure-shared-access-policies.png)
1. Haz clic en el botón a la derecha del campo **Secuencia de conexión-llave primaria** para copiar la secuencia de conexión. ![La secuencia de conexión del concentrador de eventos](/assets/images/help/enterprises/azure-connection-string.png)

**En {% data variables.product.prodname_dotcom %}**:
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Haz clic en la pestaña de **Transmisión de bitácoras**.
1. Haz clic en **Configurar transmisión** y selecciona **Azure Event Hubs**. ![Elige Splunk desde el menú desplegable](/assets/images/help/enterprises/audit-stream-choice-azure.png)
1. En la página de configuración, ingresa:
   * El nombre de la instancia de Azure Event Hubs.
   * La secuencia de conexión. ![Ingresar la configuración de transmisiones](/assets/images/help/enterprises/audit-stream-add-azure.png)
2. Haz clic en **Verificar terminal** para verificar que {% data variables.product.prodname_dotcom %} puede conectarse a la terminal de Azure. ![Verificar la terminal](/assets/images/help/enterprises/audit-stream-check-azure.png)
3. Después de que hayas verificado la terminal con éxito, haz clic en **Guardar**.

## Pausar la transmisión de bitácoras de auditoría

El pausar la transmisión te permite realizar el mantenimiento de la aplicación receptora sin perder datos de auditoría. Las bitácoras de auditoría se almacenan por hasta siete días en {% data variables.product.product_location %} y luego se exportan cuando dejas de pausar la transmisión.

1. Muestra la pestaña "Transmisión de bitácoras" como se describe anteriormente.
1. Haz clic en **Pausar transmisión**. ![Pausar la transmisión](/assets/images/help/enterprises/audit-stream-pause.png)
1. Se mostrará un mensaje de confirmación. Haz clic en **Pausar transmisión** para confirmar.

Cuando la aplicación esté lista para recibir bitácoras de auditoría nuevamente, haz clic en **Reanudar transmisión** para reiniciar la transmisión de bitácoras de auditoría.

## Borrar la transmisión de bitácoras de auditoría

1. Muestra la pestaña de "Transmisión de bitácora", tal como se describe anteriormente.
1. Haz clic en **Borrar transmisión**. ![Borrar la transmisión](/assets/images/help/enterprises/audit-stream-delete.png)
2. Se muestra un mensaje de confirmación. Haz clic en **Borrar transmisión** para confirmar.
