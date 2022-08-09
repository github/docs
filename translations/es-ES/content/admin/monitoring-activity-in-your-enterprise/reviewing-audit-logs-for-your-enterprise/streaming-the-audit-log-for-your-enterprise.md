---
title: Transmitir la bitácora de auditoría para tu empresa
intro: 'Puedes trasmitir datos de eventos de Git y de auditorías desde {% data variables.product.prodname_dotcom %} hacia un sistema externo de administración de datos.'
miniTocMaxHeadingLevel: 3
versions:
  feature: audit-log-streaming
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - Organizations
shortTitle: Transmitir bitácoras de auditoría
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
---

{% ifversion ghes %}
{% note %}

**Note:** Audit log streaming is currently in beta for {% data variables.product.product_name %} and is subject to change.

{% endnote %}
{% endif %}

## Acerca de la transmisión de bitácoras de auditoría

Para ayudarte a proteger tu propiedad intelectual y mantener el cumplimiento en tu organización, puedes utilizar la transmisión para mantener copias de tus datos de bitácoras de auditoría y monitorear:
{% data reusables.audit_log.audited-data-list %}

Los beneficios de transmitir datos de auditoría incluyen:

* **Exploración de datos**. Puedes examinar los eventos transmitidos utilizando tu herramienta preferida para consultar cantidades grandes de datos. The stream contains both audit events and Git events across the entire enterprise account.{% ifversion pause-audit-log-stream %}
* **Continuidad de datos**. You can pause the stream for up to seven days without losing any audit data.{% endif %}
* **Retención de datos**. Puedes mantener tus bitácoras de auditoría y datos de eventos de Git exportados siempre que lo necesites.

Enterprise owners can set up{% ifversion pause-audit-log-stream %}, pause,{% endif %} or delete a stream at any time. The stream exports the audit and Git events data for all of the organizations in your enterprise.

## Configurar la transmisión de bitácoras de auditoría

Puedes configurar la transmisión de bitácoras de auditoría en {% data variables.product.product_name %} si sigues las instrucciones para tu proveedor.

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Almacenamiento de Blobs de Azure](#setting-up-streaming-to-azure-blob-storage)
- [Azure Event Hubs](#setting-up-streaming-to-azure-event-hubs)
- [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### Configurar la transmisión para Amazon S3

{% ifversion streaming-oidc-s3 %}
Puedes configurar la transmisión de S3 con claves de acceso o, para evitar el almacenar secretos de vida larga en {% data variables.product.product_name %}, con OpenID Connect (OIDC).

- [Configurar la transmisión a S3 con llaves de acceso](#setting-up-streaming-to-s3-with-access-keys)
- [Configurar la transmisión a S3 con OpenID Connect](#setting-up-streaming-to-s3-with-openid-connect)
- [Inhabilitar la transmisión a S3 con OpenID Connect](#disabling-streaming-to-s3-with-openid-connect)

#### Configurar la transmisión a S3 con llaves de acceso
{% endif %}

Para transmitir bitácoras de auditoría a la terminal de Amazon S3, debes tener un bucket y llaves de acceso. Para obtener más información, consulta la sección [Crear, configurar y trabajar con los buckets de Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) en la documentación de AWS. Asegúrate de bloquear el acceso público al bucket para proteger la información de tu bitácora de auditoría.

Para configurar la transmisión de bitácora de auditoría desde {% data variables.product.prodname_dotcom %}, necesitarás:
* El nombrede tu bucket de Amazon S3
* Tu ID de llave de acceso de AWS
* Tu llave de secreto de AWS

Para obtener más información sobre cómo crear o acceder a tu ID de llave de acceso y llave de secreto, consulta la sección [Entender y obtener tus credenciales de AWS](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) en la documentación de AWS.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
{% data reusables.audit_log.streaming-choose-s3 %}{% ifversion streaming-oidc-s3 %}
1. Debajo de "Autenticación", haz clic en **Claves de acceso**.

   ![Captura de pantalla de las opciones de autenticación para la transmisión a Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-access-keys.png){% endif %}
1. Configurar los ajustes de transmisión.

   - Debajo de "Bucket", escribe el nombre del bucket al que quieras transmitir. Por ejemplo, `auditlog-streaming-test`.
   - Debajo de "ID de clave de acceso", escribe tu ID de clave de acceso. Por ejemplo, `ABCAIOSFODNN7EXAMPLE1`.
   - Debajo de "Clave secreta", escribe tu clave secreta. Por ejemplo, `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`.
{% data reusables.audit_log.streaming-check-s3-endpoint %}
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-oidc-s3 %}
#### Configurar la transmisión a S3 con OpenID Connect

1. En AWS, agrega el proveedor de OIDC de {% data variables.product.prodname_dotcom %} para IAM. Para obtener más información, consulta la sección [Crear proveedores de identidad de OpenID Connect (OIDC)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) en la documentación de AWS.

   - Para la URL de proveedor, utiliza `https://oidc-configuration.audit-log.githubusercontent.com`.
   - Para "Audiencia", utiliza `sts.amazonaws.com`.
1. Crea un bucket y bloquea el acceso público a este. Para obtener más información, consulta la sección "[Crear, configurar y trabajar con buckets de Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) en la documentación de AWS.
1. Crea una política que permita que {% data variables.product.company_short %} escriba en el bucket. {% data variables.product.prodname_dotcom %} solo requiere los siguientes permisos.

   ```
   {
      "Version": "2012-10-17",
      "Statement": [
         {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
               "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::example-bucket/*"
        }
      ]
   }
   ```
   Para obtener más información, consulta la sección [Crear políticas de IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) en la documentación de AWS.
1. Configura el rol y la política de confianza para el IdP de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección [Crear un rol para la identidad web o Federación de OpenID Connect (consola)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html) en la documentación de AWS.

   - Agrega la política de permisos que creaste anteriormente para permitir la escritura en el bucket.
   - Edita la relación d confianza para agregar el campo `sub` a las condiciones de validación, reemplazando `ENTERPRISE` con el nombre de tu empresa.
     ```
     "Condition": {
        "StringEquals": {
           "oidc-configuration.audit-log.githubusercontent.com:aud": "sts.amazonaws.com",
           "oidc-configuration.audit-log.githubusercontent.com:sub": "https://github.com/ENTERPRISE"
         }
      }
      ```
   - Anota el Nombre de Recurso de Amazon (ARN) del rol creado.
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
{% data reusables.audit_log.streaming-choose-s3 %}
1. Debajo de "Autenticación", haz clic en **OpenID Connect**.

   ![Captura de pantalla de las opciones de autenticación para la transmisión a Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-oidc.png)
1. Configurar los ajustes de transmisión.

   - Debajo de "Bucket", escribe el nombre del bucket al que quieras transmitir. Por ejemplo, `auditlog-streaming-test`.
   - Debajo de "Rol de ARN", escribe el rol de ARN que anotaste anteriormente. Por ejemplo, `arn:aws::iam::1234567890:role/github-audit-log-streaming-role`.
{% data reusables.audit_log.streaming-check-s3-endpoint %}
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

#### Inhabilitar la transmisión a S3 con OpenID Connect

Si quieres inhabilitar la transmisión a S3 con OIDC por cualquier razón, tal como el descubrimiento de una vulnerabilidad de seguridad en OIDC, borra el proveedor de OIDC de {% data variables.product.prodname_dotcom %} que creaste en AWS cuando configures la transmisión. Para obtener más información, consulta la sección [Crear proveedores de identidad de OpenID Connect (OIDC)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) en la documentación de AWS.

Posteriormente, configura la transmisión con las claves de acceso hasta que se resuelva la vulnerabilidad. Para obtener más información, consulta la sección [Configurar la transmisión hacia S3 con claves de acceso](#setting-up-streaming-to-s3-with-access-keys)".

{% endif %}

### Configurar la transmisión hacia Azure Blob Storage

Antes de configurar una transmisión en {% data variables.product.prodname_dotcom %}, primero debes haber creado una cuenta de almacenamiento y un contenedor en Microsoft Azure. Para obtener más detalles, consulta la sección de "[Introducción a Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)" em la documentación de Microsoft.

Para configurar la transmisión en {% data variables.product.prodname_dotcom %}, necesitarás la URL de un token SAS.

**En el portal de Microsoft Azure**:
1. En la página principal, haz clic en **Cuentas de almacenamiento**.
2. Haz clic en el nombre de la cuenta de almacenamiento que quieras utilizar y luego en **Contenedores**.

   ![El enlace de contenedores en Azure](/assets/images/azure/azure-storage-containers.png)

1. Haz clic en el nombre del contenedor que quieres utilizar.
1. Haz clic en **Tokens de acceso compartidos**.

   ![El enlace de token de acceso compartido en Azure](/assets/images/azure/azure-storage-shared-access-tokens.png)

1. En el menú desplegable de **Permisos**, cambia los permisos para solo permitir `Create` y `Write`.

   ![El menú desplegable de permisos](/assets/images/azure/azure-storage-permissions.png)

1. Configura una fecha de vencimiento que cumpla con tu política de rotación de secretos.
1. Haz clic en **Generar un token SAS y URL**.
1. Copia el valor del campo **Blob SAS URL** que se muestra. Utilizarás esta URL en {% data variables.product.prodname_dotcom %}.

**En {% data variables.product.prodname_dotcom %}**:
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haz clic en **Configurar transmisión** y selecciona **Azure Blob Storage**.

   ![Elige Azure Blob Storage en el menú desplegable](/assets/images/help/enterprises/audit-stream-choice-azureblob.png)

1. En la página de configuración, ingresa la URL de SAS del blob que copiaste en Azure. El campo **Contenedor** se llena automáticamente con base en la URL.

   ![Ingresar la configuración de transmisión](/assets/images/help/enterprises/audit-stream-add-azureblob.png)

1. Haz clic en **Verificar terminal** para verificar que {% data variables.product.prodname_dotcom %} pueda conectarse a la terminal de Azure Blob Storage.

   ![Verificar la terminal](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Configurar la transmisión hacia Azure Event Hubs

Antes de configurar una transmisión en {% data variables.product.prodname_dotcom %}, primero debes tener un espacio designador de nombre para concentradores de eventos en Microsoft Azure. Posteriormente, debes crear una instancia de concentrador de eventos dentro del designador de nombre. Necesitarás los detalles de esta instancia de concentrador de eventos cuando configures la transmisión. Para encontrar los detalles, consulta la documentación de Microsoft, en la aprte de "[Inicio rápido: Crear un concentrador de eventos utilizando el portal de Azure](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)".

Necesitas dos partes de información sobre tu concentrador de eventos: su nombre de instancia y la secuencia de conexión.

**En el portal de Microsoft Azure**:
1. Busca "Event Hubs".

   ![La caja de búsqueda del portal de Azure](/assets/images/azure/azure-resources-search.png)

1. Selecciona **Event Hubs**. Se listarán los nombres de tus concentradores de eventos.

   ![Una lista de concentradores de eventos](/assets/images/help/enterprises/azure-event-hubs-list.png)

1. Haz una nota del nombre del concentrador de eventos al cual quieras transmitir.
1. Haz clic en el concentrador de eventos requerido. Posteriormente, en el menú de la izquierda, selecciona **Políticas de Acceso Compartido**.
1. Selecciona las políticas de acceso compartido de la lista de políticas o crea una nueva.

   ![Una lista de políticas de acceso compartidas](/assets/images/help/enterprises/azure-shared-access-policies.png)

1. Haz clic en el botón a la derecha del campo **Secuencia de conexión-llave primaria** para copiar la secuencia de conexión.

   ![La secuencia de conexión del concentrador de eventos](/assets/images/help/enterprises/azure-connection-string.png)

**En {% data variables.product.prodname_dotcom %}**:
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haz clic en **Configurar transmisión** y selecciona **Azure Event Hubs**.

   ![Elige Azure Events hub del menú desplegable](/assets/images/help/enterprises/audit-stream-choice-azure.png)

1. En la página de configuración, ingresa:
   * El nombre de la instancia de Azure Event Hubs.
   * La secuencia de conexión.

   ![Ingresar la configuración de transmisión](/assets/images/help/enterprises/audit-stream-add-azure.png)

1. Haz clic en **Verificar terminal** para verificar que {% data variables.product.prodname_dotcom %} puede conectarse y escribir en la terminal de Azure Events Hub.

   ![Verificar la terminal](/assets/images/help/enterprises/audit-stream-check.png)

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
1. Haz clic en **Configurar transmisión** y selecciona **Splunk**.

   ![Elige Splunk desde el menú desplegable](/assets/images/help/enterprises/audit-stream-choice-splunk.png)

1. En la página de configuración, ingresa:
   * El dominio en el cual se hospeda la aplicación que quieres transmitir.

     Si estás utilizando Splunk Cloud, `Domain` debe ser `http-inputs-<host>`, en donde `host` es el dominio que utilizas en Splunk Cloud. Por ejemplo: `http-inputs-mycompany.splunkcloud.com`.

   * El puerto mediante el cual la aplicación acepta datos.<br>

     Si estás utilizando Splunk Cloud, `Port` debería ser `443` si no has cambiado la configuración del puerto. Si estás utilizando la versión de prueba gratis de Splunk Cloud, `Port` debe ser `8088`.

   * Un token que pueda utilizar {% data variables.product.prodname_dotcom %} para autenticarse a la aplicación de terceros.

   ![Ingresar la configuración de transmisión](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. Deja seleccionada la casilla de **Habilitar la verificación por SSL**.

    Las bitácoras de auditoría siempre se transmiten como datos cifrados, sin embargo, si seleccionas esta opción, {% data variables.product.prodname_dotcom %} verificará el certificado SSL de tu instancia de Splunk cuando entregue eventos. La verificación por SSL te ayuda a garantizar que los eventos se entreguen a tu terminal URL con seguridad. Puedes limpiar la selección de esta opción, pero te recomendamos que dejes habilitada la verificación por SSL.
1. Haz clic en **Verificar terminal** para verificar que {% data variables.product.prodname_dotcom %} puede conectarse y escribir en la terminal de Splunk. ![Verificar la terminal](/assets/images/help/enterprises/audit-stream-check-splunk.png)
{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion pause-audit-log-stream %}
## Pausar la transmisión de bitácoras de auditoría

El pausar la transmisión te permite realizar el mantenimiento de la aplicación receptora sin perder datos de auditoría. Las bitácoras de auditoría se almacenan por hasta siete días en {% data variables.product.product_location %} y luego se exportan cuando dejas de pausar la transmisión.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haz clic en **Pausar transmisión**.

   ![Pausar la transmisión](/assets/images/help/enterprises/audit-stream-pause.png)

1. Se mostrará un mensaje de confirmación. Haz clic en **Pausar transmisión** para confirmar.

Cuando la aplicación esté lista para recibir bitácoras de auditoría nuevamente, haz clic en **Reanudar transmisión** para reiniciar la transmisión de bitácoras de auditoría.
{% endif %}

## Borrar la transmisión de bitácoras de auditoría

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haz clic en **Borrar transmisión**.

   ![Borrar la transmisión](/assets/images/help/enterprises/audit-stream-delete.png)

1. Se mostrará un mensaje de confirmación. Haz clic en **Borrar transmisión** para confirmar.
