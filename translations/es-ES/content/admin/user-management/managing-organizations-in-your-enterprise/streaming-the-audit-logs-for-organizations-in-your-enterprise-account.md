---
title: Transmitir las bitácoras de auditoría para las organizaciones de tu cuenta empresarial
intro: 'You can stream audit and Git events data from {% data variables.product.prodname_dotcom %} to an external data management system.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Transmitir bitácoras de auditoría de la organización
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
---

{% note %}

**Nota:** La transmisión de bitácoras de auditoría se encuentra actualmente en beta para {% data variables.product.prodname_ghe_cloud %} y está sujeta a cambios.

{% endnote %}

## Acerca de exportar los datos de auditoría

Puedes extraer datos de bitácoras de auditoría y de eventos de git desde {% data variables.product.prodname_dotcom %} en varias formas:

* Ve a la página de bitácoras de auditoría en {% data variables.product.prodname_dotcom %} y haz clic en **Exportar**. Para obtener más información, consulta las secciones "[Ver las bitácoras de auditoría para las organizaciones de tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/viewing-the-audit-logs-for-organizations-in-your-enterprise-account)" y "[Exportar la bitácora de auditoría](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#exporting-the-audit-log)".
* Utiliza la API para encuestar por eventos nuevos de bitácoras de auditoría. Para obtener más información, consulta la sección "[Utilizar la API de bitácoras de auditoría](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#using-the-audit-log-api)".
* Configurar {% data variables.product.product_name %} para transmitir datos de auditoría mientras se registran los eventos.

Currently, audit log streaming is supported for multiple storage providers.
- Amazon S3
- Azure Event Hubs
- Google Cloud Storage
- Splunk

## Acerca de la transmisión de bitácoras de auditoría

Para ayudarte a proteger tu propiedad intelectual y mantener el cumplimiento en tu organización, puedes utilizar la transmisión para mantener copias de tus datos de bitácoras de auditoría y monitorear:
{% data reusables.audit_log.audited-data-list %}

Los beneficios de transmitir datos de auditoría incluyen:

* **Exploración de datos**. Puedes examinar los eventos transmitidos utilizando tu herramienta preferida para consultar cantidades grandes de datos. La transmisión contiene tanto los eventos de auditoría como los de Git a lo largo de toda la cuenta empresarial.
* **Continuidad de datos**. Puedes pausar la transmisión por hasta siete días sin perder datos de auditoría.
* **Retención de datos**. Puedes mantener tus datos de bitácoras de auditoría y de Git exportados conforme los necesites.

Los propietrios de empresas pueden configurar, pausar o borrar una transmisión en cualquier momento. La transmisión exporta los datos de auditoría de todas las organizaciones en tu empresa.

## Configurar la transmisión de bitácoras de auditoría

You set up the audit log stream on {% data variables.product.product_name %} by following the instructions for your provider.

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Azure Event Hubs](#setting-up-streaming-to-splunk)
- [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### Setting up streaming to Amazon S3

To stream audit logs to Amazon's S3 endpoint, you must have a bucket and access keys. For more information, see [Creating, configuring, and working with Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) in the the AWS documentation. Make sure to block public access to the bucket to protect your audit log information.

To set up audit log streaming from {% data variables.product.prodname_dotcom %} you will need:
* El nombrede tu bucket de Amazon S3
* Tu ID de llave de acceso de AWS
* Tu llave de secreto de AWS

Para obtener más información sobre cómo crear o acceder a tu ID de llave de acceso y llave de secreto, consulta la sección [Entender y obtener tus credenciales de AWS](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) en la documentación de AWS.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haz clic en **Configurar transmisión** y selecciona **Amazon S3**. ![Elige Amazon S3 del menú desplegable](/assets/images/help/enterprises/audit-stream-choice-s3.png)
1. En la página de configuración, ingresa:
   * El nombre del bucket al cual quieres transmitir. Por ejemplo, `auditlog-streaming-test`.
   * Tu ID de llave de acceso. Por ejemplo, `ABCAIOSFODNN7EXAMPLE1`.
   * Tu llave secreta. Por ejemplo, `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`. ![Ingresar la configuración de transmisiones](/assets/images/help/enterprises/audit-stream-add-s3.png)
1. Haz clic en **Verificar terminal** para verificar que {% data variables.product.prodname_dotcom %} pueda conectarse a la terminal de Amazon S3. ![Verificar la terminal](/assets/images/help/enterprises/audit-stream-check.png)
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

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
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haz clic en **Configurar transmisión** y selecciona **Azure Event Hubs**. ![Elige Azure Events hub del menú desplegable](/assets/images/help/enterprises/audit-stream-choice-azure.png)
1. En la página de configuración, ingresa:
   * El nombre de la instancia de Azure Event Hubs.
   * La secuencia de conexión. ![Ingresar la configuración de transmisiones](/assets/images/help/enterprises/audit-stream-add-azure.png)
1. Haz clic en **Verificar terminal** para verificar que {% data variables.product.prodname_dotcom %} puede conectarse a la terminal de Azure. ![Verificar la terminal](/assets/images/help/enterprises/audit-stream-check.png)
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Configurar la transmisión para Google Cloud Storage

Para configurar la transmisión al Almacenamiento de Google Cloud, debes crear una cuenta de servicio en Google Cloud con las credenciales y permisos adecuados y luego configurar la transmisión de bitácoras de auditoría en {% data variables.product.product_name %} utilizando las credenciales de la cuenta de servicio para la autenticación.

1. Crea una cuenta de servicio de Google Cloud. No necesitas configurar controles de acceso o roles de IAM para la cuenta de servicio. Para obtener más información, consulta la sección [Crear y administrar cuentas de servicio](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating) en la documentación de Google Cloud.
1. Crear una llave de JSON para la cuenta de servicio y almacenarla de forma segura. Para obtener más información, consulta la sección [Crear y administrar llaves de cuenta de servicio](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating) en la documentación de Google Cloud.
1. Si aún no has creado un bucket, házlo ahora. Para obtener más información, consulta la sección [Crear buckets de almacenamiento](https://cloud.google.com/storage/docs/creating-buckets) en la documentación de Google Cloud.
1. Dale a la cuenta de servicio el el rol de Credor de Objetos de Almacenamiento para el bucket. Para obtener más información, consulta la sección [Utilizar los permisos de Cloud IAM](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add) en la documentación de Google Cloud.
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Selecciona el menú desplegable de configurar transmisión y haz clic en **Google Cloud Storage**.

   ![Captura de pantalla del menú desplegable de "Configurar transmisión"](/assets/images/help/enterprises/audit-stream-choice-google-cloud-storage.png)

1. Debajo de "Bucket", teclea el nombre de tu bucket de Google Cloud Storage.

   ![Caputra de pantalla del campo de texto de "Bucket"](/assets/images/help/enterprises/audit-stream-bucket-google-cloud-storage.png)

1. Debajo de "Credenciales de JSON", pega todo el contenido del archivo para tu llave JSON de la cuenta de servicio.

   ![Captura de pantalla del campo de texto de "Credenciales de JSON"](/assets/images/help/enterprises/audit-stream-json-credentials-google-cloud-storage.png)

1. Para verificar que {% data variables.product.prodname_dotcom %} pueda conectarse y escribir en el bucket de Google Cloud Storage, haz clic en **Verificar terminal**.

   ![Captura de pantalla del botón "Verificar terminal"](/assets/images/help/enterprises/audit-stream-check-endpoint-google-cloud-storage.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Configurar la transmisión a Splunk

Para transmitir bitácoras de auditoría a la terminal del Recolector de Eventos HTTP (HEC) de Splunk, debes asegurarte de que la terminal se configure para aceptar conexiones HTTPS. Para obtener más información, consulta la sección [Configurar y utilizar el Recolector de Eventos HTTP en Splunk Web](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector) en la documentación de Splunk.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haz clic en **Configurar transmisión** y selecciona **Splunk**. ![Elige Splunk desde el menú desplegable](/assets/images/help/enterprises/audit-stream-choice-splunk.png)
1. En la página de configuración, ingresa:
   * El dominio en el cual se hospeda la aplicación que quieres transmitir.

     Si estás utilizando Splunk Cloud, `Domain` debe ser `http-inputs-<host>`, en donde `host` es el dominio que utilizas en Splunk Cloud. Por ejemplo: `http-inputs-mycompany.splunkcloud.com`.

   * El puerto mediante el cual la aplicación acepta datos.<br>

     Si estás utilizando Splunk Cloud, `Port` debería ser `443` si no has cambiado la configuración del puerto. Si estás utilizando la versión de prueba gratis de Splunk Cloud, `Port` debe ser `8088`.

   * Un token que pueda utilizar {% data variables.product.prodname_dotcom %} para autenticarse a la aplicación de terceros. ![Ingresar la configuración de transmisiones](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. Deja seleccionada la casilla de **Habilitar la verificación por SSL**.

    Las bitácoras de auditoría siempre se transmiten como datos cifrados, sin embargo, si seleccionas esta opción, {% data variables.product.prodname_dotcom %} verificará el certificado SSL de tu instancia de Splunk cuando entregue eventos. La verificación por SSL te ayuda a garantizar que los eventos se entreguen a tu terminal URL con seguridad. Puedes limpiar la selección de esta opción, pero te recomendamos que dejes habilitada la verificación por SSL.
1. Haz clic en **Verificar terminal** para verificar que {% data variables.product.prodname_dotcom %} puede conectarse a la terminal de Splunk. ![Verificar la terminal](/assets/images/help/enterprises/audit-stream-check-splunk.png)
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

## Pausar la transmisión de bitácoras de auditoría

El pausar la transmisión te permite realizar el mantenimiento de la aplicación receptora sin perder datos de auditoría. Las bitácoras de auditoría se almacenan por hasta siete días en {% data variables.product.product_location %} y luego se exportan cuando dejas de pausar la transmisión.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haz clic en **Pausar transmisión**. ![Pausar la transmisión](/assets/images/help/enterprises/audit-stream-pause.png)
1. Se mostrará un mensaje de confirmación. Haz clic en **Pausar transmisión** para confirmar.

Cuando la aplicación esté lista para recibir bitácoras de auditoría nuevamente, haz clic en **Reanudar transmisión** para reiniciar la transmisión de bitácoras de auditoría.

## Borrar la transmisión de bitácoras de auditoría

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haz clic en **Borrar transmisión**. ![Borrar la transmisión](/assets/images/help/enterprises/audit-stream-delete.png)
2. Se mostrará un mensaje de confirmación. Haz clic en **Borrar transmisión** para confirmar.
