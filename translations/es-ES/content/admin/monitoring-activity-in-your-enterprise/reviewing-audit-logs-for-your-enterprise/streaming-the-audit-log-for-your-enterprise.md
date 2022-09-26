---
title: Streaming del registro de auditoría de su empresa
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
shortTitle: Stream audit logs
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
  - /admin/user-management/managing-organizations-in-your-enterprise/streaming-the-audit-logs-for-organizations-in-your-enterprise-account
permissions: Enterprise owners can configure audit log streaming.
ms.openlocfilehash: 81eb88f760016390a321798589e7994542c9f312
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147710343'
---
{% ifversion ghes %} {% note %}

**Nota:** La transmisión de registros de auditoría se encuentra actualmente en beta para {% data variables.product.product_name %} y está sujeta a cambios.

{% endnote %} {% endif %}

## Acerca de la transmisión de bitácoras de auditoría

Para ayudar a proteger la propiedad intelectual y mantener el cumplimiento de su organización, puede usar streaming para conservar copias de los datos del registro de auditoría y supervisar: {% data reusables.audit_log.audited-data-list %}

Los beneficios de transmitir datos de auditoría incluyen:

* **Exploración de datos**. Puedes examinar los eventos transmitidos utilizando tu herramienta preferida para consultar cantidades grandes de datos. La transmisión contiene tanto los eventos de auditoría como los de Git a lo largo de toda la cuenta empresarial.{% ifversion pause-audit-log-stream %}
* **Continuidad de los datos**. Puedes poner en pausa la transmisión un máximo de siete días sin perder datos de auditoría.{% endif %}
* **Retención de datos**. Puede mantener los registros de auditoría exportados y los datos de eventos de Git siempre que sea necesario.

Los propietarios de la empresa pueden configurar{% ifversion pause-audit-log-stream %}, poner en pausa{% endif %} o eliminar una secuencia en cualquier momento. La transmisión exporta los datos de eventos de Git y auditoría de todas las organizaciones en tu empresa.

## Configurar la transmisión de bitácoras de auditoría

Puedes configurar la transmisión de bitácoras de auditoría en {% data variables.product.product_name %} si sigues las instrucciones para tu proveedor.

- [Amazon S3](#setting-up-streaming-to-amazon-s3)
- [Azure Blob Storage](#setting-up-streaming-to-azure-blob-storage)
- [Azure Event Hubs](#setting-up-streaming-to-azure-event-hubs){% ifversion streaming-datadog %}
- [Datadog](#setting-up-streaming-to-datadog){% endif %}
- [Google Cloud Storage](#setting-up-streaming-to-google-cloud-storage)
- [Splunk](#setting-up-streaming-to-splunk)

### Configurar la transmisión para Amazon S3

{% ifversion streaming-oidc-s3 %} Puedes configurar la transmisión a S3 con claves de acceso o bien, para evitar almacenar secretos de larga duración en {% data variables.product.product_name %}, con OpenID Connect (OIDC).

- [Configuración de la transmisión a S3 con claves de acceso](#setting-up-streaming-to-s3-with-access-keys)
- [Configuración de la transmisión a S3 con OpenID Connect](#setting-up-streaming-to-s3-with-openid-connect)
- [Deshabilitación de la transmisión a S3 con OpenID Connect](#disabling-streaming-to-s3-with-openid-connect)

#### Configuración de la transmisión a S3 con claves de acceso
{% endif %}

Para transmitir bitácoras de auditoría a la terminal de Amazon S3, debes tener un bucket y llaves de acceso. Para obtener más información, consulta [Creación, configuración y trabajo con buckets de Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) en la documentación de AWS. Asegúrate de bloquear el acceso público al bucket para proteger la información de tu bitácora de auditoría. 

Para configurar la transmisión de bitácora de auditoría desde {% data variables.product.prodname_dotcom %}, necesitarás:
* El nombrede tu bucket de Amazon S3
* Tu ID de llave de acceso de AWS
* Tu llave de secreto de AWS

Para obtener información sobre cómo crear o acceder al id. clave de acceso y la clave secreta, vea [Comprender y obtener las credenciales de AWS](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html) en la documentación de AWS.

{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}{% ifversion streaming-oidc-s3 %}
1. En "Autenticación", haz clic en **Claves de acceso**.

   ![Captura de pantalla de las opciones de autenticación para la transmisión a Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-access-keys.png){% endif %}
1. Configura los valores de transmisión.

   - En "Cubo", escribe el nombre del cubo al que quieres transmitir. Por ejemplo, `auditlog-streaming-test`.
   - En "Id. de clave de acceso", escribe el identificador de la clave de acceso. Por ejemplo, `ABCAIOSFODNN7EXAMPLE1`.
   - En "Clave secreta", escribe la clave secreta. Por ejemplo, `aBcJalrXUtnWXYZ/A1MDENG/zPxRfiCYEXAMPLEKEY`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-oidc-s3 %}
#### Configuración de la transmisión a S3 con OpenID Connect

{% note %}

**Nota:** El streaming a Amazon S3 con OpenID Connect está actualmente en versión beta y está sujeto a cambios.

{% endnote %}

1. En AWS, agrega el proveedor de OIDC de {% data variables.product.prodname_dotcom %} a IAM. Para obtener más información, consulta [Creación de proveedores de identidades de OpenID Connect (OIDC)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) en la documentación de AWS.

   - Para la dirección URL del proveedor, usa `https://oidc-configuration.audit-log.githubusercontent.com`.
   - Para "Audiencia", usa `sts.amazonaws.com`.
1. Crea un cubo y bloquea el acceso público a él. Para obtener más información, consulta [Creación, configuración y trabajo con buckets de Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/creating-buckets-s3.html) en la documentación de AWS.
1. Crea una directiva que permita que {% data variables.product.company_short %} escriba en el cubo. {% data variables.product.prodname_dotcom %} solo requiere los permisos siguientes.

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
   Para obtener más información, consulta [Crear políticas de IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_create.html) en la documentación de AWS.
1. Configura el rol y la directiva de confianza para el IdP de {% data variables.product.prodname_dotcom %}. Para obtener más información, consulta [Creación de un rol para identidades federadas web u OpenID Connect (consola)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html) en la documentación de AWS.
  
   - Agrega la directiva de permisos que creaste anteriormente para permitir operaciones de escritura en el cubo.
   - Edita la relación de confianza para agregar el campo `sub` a las condiciones de validación. Reemplaza `ENTERPRISE` por el nombre de la empresa.
     ```
     "Condition": {
        "StringEquals": {
           "oidc-configuration.audit-log.githubusercontent.com:aud": "sts.amazonaws.com",
           "oidc-configuration.audit-log.githubusercontent.com:sub": "https://github.com/ENTERPRISE"
         }
      }
      ```
   - Anota el nombre de recurso de Amazon (ARN) del rol creado.
{% data reusables.enterprise.navigate-to-log-streaming-tab %} {% data reusables.audit_log.streaming-choose-s3 %}
1. En "Autenticación", haz clic en **OpenID Connect**.

   ![Captura de pantalla de las opciones de autenticación para la transmisión a Amazon S3](/assets/images/help/enterprises/audit-log-streaming-s3-oidc.png)
1. Configura los valores de transmisión.

   - En "Cubo", escribe el nombre del cubo al que quieres transmitir. Por ejemplo, `auditlog-streaming-test`.
   - En "Rol de ARN", escribe el rol de ARN que anotaste anteriormente. Por ejemplo, `arn:aws::iam::1234567890:role/github-audit-log-streaming-role`.
{% data reusables.audit_log.streaming-check-s3-endpoint %} {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

#### Deshabilitación de la transmisión a S3 con OpenID Connect

Si deseas deshabilitar la transmisión a S3 con OIDC por cualquier motivo, como la detección de una vulnerabilidad de seguridad en OIDC, elimina el proveedor de OIDC {% data variables.product.prodname_dotcom %} que creaste en AWS al configurar la transmisión. Para obtener más información, consulta [Creación de proveedores de identidades de OpenID Connect (OIDC)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html) en la documentación de AWS.

A continuación, configura la transmisión con claves de acceso hasta que se resuelva la vulnerabilidad. Para obtener más información, consulta "[Configuración de la transmisión a S3 con claves de acceso](#setting-up-streaming-to-s3-with-access-keys)".

{% endif %}

### Configurar la transmisión hacia Azure Blob Storage

Antes de configurar una transmisión en {% data variables.product.prodname_dotcom %}, primero debes haber creado una cuenta de almacenamiento y un contenedor en Microsoft Azure. Para obtener más información, vea la documentación de Microsoft "[Introducción a Azure Blob Storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)". 

Para configurar la transmisión en {% data variables.product.prodname_dotcom %}, necesitarás la URL de un token SAS.

**En Microsoft Azure Portal**:
1. En la página principal, haga clic en **Cuentas de almacenamiento**.
2. Haga clic en el nombre de la cuenta de almacenamiento que quiere usar y, después, haga clic en **Contenedores**.
   
   ![El enlace de contenedores en Azure](/assets/images/azure/azure-storage-containers.png)

1. Haz clic en el nombre del contenedor que quieres utilizar.
1. Haga clic en **Shared access tokens** (Tokens de acceso compartido). 
   
   ![El enlace de token de acceso compartido en Azure](/assets/images/azure/azure-storage-shared-access-tokens.png)

1. En el menú desplegable **Permisos**, cambie los permisos para permitir únicamente `Create` y `Write`.
   
   ![El menú desplegable de permisos](/assets/images/azure/azure-storage-permissions.png)

1. Configura una fecha de vencimiento que cumpla con tu política de rotación de secretos.
1. Haga clic en **Generar URL y token de SAS**.
1. Copie el valor del campo **URL de SAS de blob** que se muestra. Utilizarás esta URL en {% data variables.product.prodname_dotcom %}.

**En {% data variables.product.prodname_dotcom %}** : {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haga clic en **Configurar secuencia** y seleccione **Azure Blob Storage**.
   
   ![Elige Azure Blob Storage en el menú desplegable](/assets/images/help/enterprises/audit-stream-choice-azureblob.png)

1. En la página de configuración, ingresa la URL de SAS del blob que copiaste en Azure. El campo **Contenedor** se rellena automáticamente en función de la dirección URL.

   ![Ingresar la configuración de transmisión](/assets/images/help/enterprises/audit-stream-add-azureblob.png)
  
1. Haga clic en **Check endpoint** (Comprobar punto de conexión) para comprobar que {% data variables.product.prodname_dotcom %} puede conectarse y escribir en el punto de conexión de Azure Blob Storage.
   
   ![Verificar la terminal](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Configurar la transmisión hacia Azure Event Hubs

Antes de configurar una transmisión en {% data variables.product.prodname_dotcom %}, primero debes tener un espacio designador de nombre para concentradores de eventos en Microsoft Azure. Posteriormente, debes crear una instancia de concentrador de eventos dentro del designador de nombre. Necesitarás los detalles de esta instancia de concentrador de eventos cuando configures la transmisión. Para obtener más información, vea la documentación de Microsoft "[Inicio rápido: Creación de un centro de eventos mediante Azure Portal](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-create)". 

Necesitas dos partes de información sobre tu concentrador de eventos: su nombre de instancia y la secuencia de conexión. 

**En Microsoft Azure Portal**:
1. Busque "Event Hubs".

   ![La caja de búsqueda del portal de Azure](/assets/images/azure/azure-resources-search.png )

1. Seleccione **Centro de eventos**. Se listarán los nombres de tus concentradores de eventos. 
   
   ![Una lista de concentradores de eventos](/assets/images/help/enterprises/azure-event-hubs-list.png)

1. Haz una nota del nombre del concentrador de eventos al cual quieras transmitir.
1. Haz clic en el concentrador de eventos requerido. En el menú de la izquierda, seleccione **Directivas de acceso compartido**.
1. Selecciona las políticas de acceso compartido de la lista de políticas o crea una nueva.
   
   ![Una lista de políticas de acceso compartidas](/assets/images/help/enterprises/azure-shared-access-policies.png)

1. Haga clic en el botón situado a la derecha del campo **Connection string-primary key** (Clave principal de cadena de conexión) para copiar la cadena de conexión.
   
   ![La secuencia de conexión del concentrador de eventos](/assets/images/help/enterprises/azure-connection-string.png)

**En {% data variables.product.prodname_dotcom %}** : {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haga clic en **Configurar secuencia** y seleccione **Azure Event Hubs**.
   
   ![Elige Azure Events hub del menú desplegable](/assets/images/help/enterprises/audit-stream-choice-azure.png)

1. En la página de configuración, ingresa:
   * El nombre de la instancia de Azure Event Hubs.
   * La cadena de conexión.
  
   ![Ingresar la configuración de transmisión](/assets/images/help/enterprises/audit-stream-add-azure.png)
   
1. Haga clic en **Check endpoint** (Comprobar punto de conexión) para comprobar que {% data variables.product.prodname_dotcom %} puede conectarse y escribir en el punto de conexión de Azure Event Hubs.
   
   ![Verificar la terminal](/assets/images/help/enterprises/audit-stream-check.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion streaming-datadog %}
### Configuración de la transmisión a Datadog

Para configurar la transmisión a Datadog, debes crear un token de cliente o una clave de API en Datadog y, a continuación, configurar la transmisión de registros de auditoría en {% data variables.product.product_name %} mediante el token para la autenticación. No es necesario crear un cubo u otro contenedor de almacenamiento en Datadog.

Después de configurar el streaming en Datadog, puedes ver los datos del registro de auditoría filtrando por "github.audit.streaming". Para más información, consulta [Administración de registros](https://docs.datadoghq.com/logs/).

1. Si aún no tienes una cuenta de Datadog, crea una.
1. En Datadog, genera un token de cliente o una clave de API y, a continuación, haz clic en **Copiar clave**. Para obtener más información, consulta [API y claves de aplicación](https://docs.datadoghq.com/account_management/api-app-keys/) en Datadog Docs. {% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Selecciona la lista desplegable **Configurar secuencia** y haz clic en **Datadog**.
   
   ![Captura de pantalla del menú desplegable "Configurar secuencia" con "Datadog" resaltado](/assets/images/help/enterprises/audit-stream-choice-datadog.png)
1. En "Token", pega el token que copiaste anteriormente.

   ![Captura de pantalla del campo "Token"](/assets/images/help/enterprises/audit-stream-datadog-token.png)
1. Selecciona el menú desplegable "Sitio" y haz clic en el sitio de Datadog. Para determinar el sitio de Datadog, compara la dirección URL de Datadog con la tabla de [sitios de Datadog](https://docs.datadoghq.com/getting_started/site/) en Datadog Docs.

   ![Captura de pantalla del menú desplegable "Desde"](/assets/images/help/enterprises/audit-stream-datadog-site.png)
1. Para comprobar que {% data variables.product.prodname_dotcom %} se puede conectar al punto de conexión de Datadog y puedes escribir en él, haz clic en **Comprobar punto de conexión**.
   
   ![Comprobar el punto de conexión](/assets/images/help/enterprises/audit-stream-check.png) {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}
1. Después de unos minutos, confirma que los datos del registro de auditoría aparecen en la pestaña **Registros** de Datadog. Si los datos del registro de auditoría no aparecen, confirma que el token y el sitio son correctos en {% data variables.product.prodname_dotcom %}.
{% endif %}

### Configurar la transmisión para Google Cloud Storage

Para configurar la transmisión al Almacenamiento de Google Cloud, debes crear una cuenta de servicio en Google Cloud con las credenciales y permisos adecuados y luego configurar la transmisión de bitácoras de auditoría en {% data variables.product.product_name %} utilizando las credenciales de la cuenta de servicio para la autenticación.

1. Crea una cuenta de servicio de Google Cloud. No necesitas configurar controles de acceso o roles de IAM para la cuenta de servicio. Para obtener más información, vea [Crear y administrar cuentas de servicio](https://cloud.google.com/iam/docs/creating-managing-service-accounts#creating) en la documentación de Google Cloud.
1. Crear una llave de JSON para la cuenta de servicio y almacenarla de forma segura. Para obtener más información, vea [Crear y administrar claves de cuentas de servicio](https://cloud.google.com/iam/docs/creating-managing-service-account-keys#creating) en la documentación de Google Cloud.
1. Si aún no has creado un bucket, házlo ahora. Para obtener más información, vea [Crear cubos de almacenamiento](https://cloud.google.com/storage/docs/creating-buckets) en la documentación de Google Cloud.
1. Dale a la cuenta de servicio el el rol de Credor de Objetos de Almacenamiento para el bucket. Para obtener más información, vea [Usar permisos de Cloud IAM](https://cloud.google.com/storage/docs/access-control/using-iam-permissions#bucket-add) en la documentación de Google Cloud.
{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Seleccione el menú desplegable Configurar secuencia y haga clic en **Google Cloud Storage**.

   ![Captura de pantalla del menú desplegable "Configurar secuencia"](/assets/images/help/enterprises/audit-stream-choice-google-cloud-storage.png)

1. Debajo de "Bucket", teclea el nombre de tu bucket de Google Cloud Storage.

   ![Captura de pantalla del campo de texto "Cubo"](/assets/images/help/enterprises/audit-stream-bucket-google-cloud-storage.png)

1. Debajo de "Credenciales de JSON", pega todo el contenido del archivo para tu llave JSON de la cuenta de servicio.

   ![Captura de pantalla del campo de texto "Credenciales JSON"](/assets/images/help/enterprises/audit-stream-json-credentials-google-cloud-storage.png)

1. Para comprobar que {% data variables.product.prodname_dotcom %} puede conectarse y escribir en el cubo de Google Cloud Storage, haga clic en **Check endpoint** (Comprobar punto de conexión). 

   ![Captura de pantalla del botón "Comprobar punto de conexión"](/assets/images/help/enterprises/audit-stream-check-endpoint-google-cloud-storage.png)

{% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

### Configurar la transmisión a Splunk

Para transmitir bitácoras de auditoría a la terminal del Recolector de Eventos HTTP (HEC) de Splunk, debes asegurarte de que la terminal se configure para aceptar conexiones HTTPS. Para obtener más información, vea [Configuración y uso del recopilador de eventos HTTP en Splunk Web](https://docs.splunk.com/Documentation/Splunk/latest/Data/UsetheHTTPEventCollector) en la documentación de Splunk.

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haga clic en **Configurar secuencia** y seleccione **Splunk**.
   
   ![Elige Splunk desde el menú desplegable](/assets/images/help/enterprises/audit-stream-choice-splunk.png)

1. En la página de configuración, ingresa:
   * El dominio en el cual se hospeda la aplicación que quieres transmitir.
  
     Si usa Splunk Cloud, `Domain` debe ser `http-inputs-<host>`, donde `host` es el dominio que usa en Splunk Cloud. Por ejemplo: `http-inputs-mycompany.splunkcloud.com`. 

   * El puerto mediante el cual la aplicación acepta datos.<br>

     Si usa Splunk Cloud, `Port` debe ser `443` si no ha cambiado la configuración del puerto. Si usa la versión de evaluación gratuita de Splunk Cloud, `Port` debe ser `8088`.

   * Un token que pueda utilizar {% data variables.product.prodname_dotcom %} para autenticarse a la aplicación de terceros.
  
   ![Ingresar la configuración de transmisión](/assets/images/help/enterprises/audit-stream-add-splunk.png)

1. Deje activada la casilla **Enable SSL verification** (Habilitar comprobación SSL).

    Las bitácoras de auditoría siempre se transmiten como datos cifrados, sin embargo, si seleccionas esta opción, {% data variables.product.prodname_dotcom %} verificará el certificado SSL de tu instancia de Splunk cuando entregue eventos. La verificación por SSL te ayuda a garantizar que los eventos se entreguen a tu terminal URL con seguridad. Puedes limpiar la selección de esta opción, pero te recomendamos que dejes habilitada la verificación por SSL.
1. Haga clic en **Check endpoint** (Comprobar punto de conexión) para comprobar que {% data variables.product.prodname_dotcom %} puede conectarse y escribir en el punto de conexión de Splunk.
   ![Comprobar el punto de conexión](/assets/images/help/enterprises/audit-stream-check-splunk.png) {% data reusables.enterprise.verify-audit-log-streaming-endpoint %}

{% ifversion pause-audit-log-stream %}
## Pausar la transmisión de bitácoras de auditoría

El pausar la transmisión te permite realizar el mantenimiento de la aplicación receptora sin perder datos de auditoría. Las bitácoras de auditoría se almacenan por hasta siete días en {% data variables.product.product_location %} y luego se exportan cuando dejas de pausar la transmisión.

{% ifversion streaming-datadog %} Datadog solo acepta registros de hasta 18 horas en el pasado. Si pausas una secuencia en un punto de conexión de Datadog durante más de 18 horas, corres el riesgo de perder los registros que Datadog no aceptará después de reanudar la transmisión.
{% endif %}

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haga clic en **Pause stream** (Pausar secuencia).
   
   ![Pausar la transmisión](/assets/images/help/enterprises/audit-stream-pause.png)

1. Se muestra un mensaje de confirmación. Haga clic en **Pause stream** (Pausar secuencia) para confirmar.

Cuando la aplicación esté lista para recibir registros de auditoría de nuevo, haga clic en **Resume stream** (Reanudar secuencia) para reiniciar los registros de auditoría de streaming.
{% endif %}

## Borrar la transmisión de bitácoras de auditoría

{% data reusables.enterprise.navigate-to-log-streaming-tab %}
1. Haga clic en **Delete stream** (Eliminar secuencia).
   
   ![Borrar la transmisión](/assets/images/help/enterprises/audit-stream-delete.png)

1. Se muestra un mensaje de confirmación. Haga clic en **Delete stream** (Eliminar secuencia) para confirmar.
