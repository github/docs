---
title: Configurar una instancia de preparación
intro: 'Se puede configurar una instancia {% data variables.product.product_name %} en un entorno independiente y aislado, y usar la instancia para validar y probar los cambios.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Set up a staging instance
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ce7d9dde9f86ea5159657203e13d9d191b6b7466
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106865'
---
## Acerca de las instancias de ensayo

{% data variables.product.company_short %} recomienda configurar un entorno independiente para probar copias de seguridad, actualizaciones o cambios en la configuración de {% data variables.location.product_location %}. Este entorno, que debes aislar de los sistemas de producción, se llama entorno de ensayo.

Por ejemplo, para protegerte contra la pérdida de datos, puedes validar periódicamente la copia de seguridad de la instancia de producción. Puedes restaurar periódicamente la copia de seguridad de los datos de producción en una instancia independiente de {% data variables.product.product_name %} en un entorno de ensayo. En esta instancia de ensayo también puedes probar la actualización a la versión más reciente de características de {% data variables.product.product_name %}.

{% tip %}

**Sugerencia:** puedes reutilizar el archivo de licencia existente {% data variables.product.prodname_enterprise %} siempre que la instancia de ensayo no se use en una capacidad de producción.

{% endtip %}

## Consideraciones para un entorno de ensayo

Para probar exhaustivamente {% data variables.product.product_name %} y volver a crear un entorno que sea lo más parecido posible al entorno de producción, ten en cuenta los sistemas externos que interactúan con la instancia. Por ejemplo, puedes probar lo siguiente en el entorno de ensayo.

- Autenticación, especialmente si usas un proveedor de autenticación externo como SAML
- La integración con un sistema externo de vales
- La integración con un servidor de integración continua
- Los scripts externos o el software que usan {% data variables.product.prodname_enterprise_api %}
- El servidor externo SMTP para notificaciones por correo electrónico

## Configurar una instancia de preparación

Puedes preparar una instancia de almacenamiento provisional desde cero y configurarla instancia como quieras. Para obtener más información, consulta "[Configuración de una instancia de {% data variables.product.product_name %}](/admin/installation/setting-up-a-github-enterprise-server-instance) y "[Configuración de tu empresa](/admin/configuration/configuring-your-enterprise)".

Como alternativa, puedes crear una instancia de almacenamiento provisional que refleje la configuración de producción, restaurando ara ello una copia de seguridad de la instancia de producción en la instancia de pruebas.

1. [Hacer una copia de seguridad de la instancia de producción](#1-back-up-your-production-instance)
2. [Configurar una instancia de almacenamiento provisional](#2-set-up-a-staging-instance)
3. [Configurar {% data variables.product.prodname_actions %}](#3-configure-github-actions)
4. [Configurar {% data variables.product.prodname_registry %}](#4-configure-github-packages)
5. [Restaurar la copia de seguridad de producción](#5-restore-your-production-backup)
6. [Revisar la configuración de la instancia](#6-review-the-instances-configuration)
7. [Aplicar la configuración de la instancia](#7-apply-the-instances-configuration)

### 1. Hacer una copia de seguridad de la instancia de producción

Si quieres probar los cambios en una instancia que contiene los mismos datos y configuración que la instancia de producción, haz una copia de seguridad de los datos y la configuración de la instancia de producción mediante {% data variables.product.prodname_enterprise_backup_utilities %}. Para más información, vea "[Configuración de copias de seguridad en el dispositivo](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

{% warning %}

**Advertencia**: Si usas {% data variables.product.prodname_actions %} o {% data variables.product.prodname_registry %} en producción, la copia de seguridad incluirá la configuración de producción del almacenamiento externo. Para evitar una posible pérdida de datos al escribir en el almacenamiento de producción desde la instancia de almacenamiento provisional, debes configurar cada característica en los pasos 3 y 4 antes de restaurar la copia de seguridad.

{% endwarning %}

### 2. Configurar una instancia de almacenamiento provisional

Configura una nueva instancia para que actúe como tu entorno de preparación. Puedes utilizar las mismas guías para aprovisionar e instalar tu instancia de preparación como hiciste para tu instancia de producción. Para más información, vea "[Configuración de una instancia de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)".

Si tienes previsto restaurar una copia de seguridad de la instancia de producción, avanza al siguiente paso. También puedes configurar la instancia manualmente y omitir los pasos siguientes.

### 3. Configurar {% data variables.product.prodname_actions %}

Opcionalmente, si usas {% data variables.product.prodname_actions %} en la instancia de producción, configura la característica en la instancia de almacenamiento provisional antes de restaurar la copia de seguridad de producción. Si no usas {% data variables.product.prodname_actions %}, ve directamente a "[4. Configurar {% data variables.product.prodname_registry %}](#4-configure-github-packages)."

{% warning %}

**Advertencia**: Si no configuras {% data variables.product.prodname_actions %} en la instancia de almacenamiento provisional antes de restaurar la copia de seguridad de producción, la instancia de almacenamiento provisional usará el almacenamiento externo de la instancia de producción, lo que podría suponer una pérdida de datos. Se recomienda encarecidamente usar un almacenamiento externo distinto para la instancia de almacenamiento provisional. Para obtener más información, consulta «[Uso de un entorno de ensayo](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)».

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. Escribe uno de los siguientes comandos para configurar la instancia de almacenamiento provisional para que use un proveedor de almacenamiento externo de {% data variables.product.prodname_actions %}.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. Escribe el siguiente comando para prepararlo todo para habilitar {% data variables.product.prodname_actions %} en la instancia de almacenamiento provisional.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```

### 4. Configurar {% data variables.product.prodname_registry %}

Opcionalmente, si usas {% data variables.product.prodname_registry %} en la instancia de producción, configura la característica en la instancia de almacenamiento provisional antes de restaurar la copia de seguridad de producción. Si no usas {% data variables.product.prodname_registry %}, ve a "[5. Restaurar la copia de seguridad de producción](#5-restore-your-production-backup)".

{% warning %}

**Advertencia**: Si no configuras {% data variables.product.prodname_registry %} en la instancia de almacenamiento provisional antes de restaurar la copia de seguridad de producción, la instancia de almacenamiento provisional usará el almacenamiento externo de la instancia de producción, lo que podría suponer una pérdida de datos. Se recomienda encarecidamente usar un almacenamiento externo distinto para la instancia de almacenamiento provisional.

{% endwarning %}

1. Revisa la copia de seguridad que vas a restaurar en la instancia de almacenamiento provisional.
   - Si has hecho la copia de seguridad con {% data variables.product.prodname_enterprise_backup_utilities %} 3.5 o una versión posterior, la copia de seguridad incluye la configuración de {% data variables.product.prodname_registry %}. Continúe con el paso siguiente.
   - Si has hecho la copia de seguridad con {% data variables.product.prodname_enterprise_backup_utilities %} 3.4 o una versión anterior, configura {% data variables.product.prodname_registry %} en la instancia de almacenamiento provisional. Para obtener más información, consulta "[Introducción a {% data variables.product.prodname_registry %} para tu empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. Configura la conexión de almacenamiento externo con los comandos siguientes, reemplazando los valores de marcador de posición por los valores reales de la conexión.
   - Azure Blob Storage:

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "azure"
     ghe-config secrets.packages.azure-container-name "AZURE CONTAINER NAME"
     ghe-config secrets.packages.azure-connection-string "CONNECTION STRING"
     ```
   - Amazon S3:

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "s3"
     ghe-config secrets.packages.service-url "S3 SERVICE URL"
     ghe-config secrets.packages.s3-bucket "S3 BUCKET NAME"
     ghe-config secrets.packages.aws-access-key "S3 ACCESS KEY ID"
     ghe-config secrets.packages.aws-secret-key "S3 ACCESS SECRET"
     ```
1. Escribe el siguiente comando para prepararlo todo para habilitar {% data variables.product.prodname_registry %} en la instancia de almacenamiento provisional.

   ```shell{:copy}
   ghe-config app.packages.enabled true
   ```

### 5. Restaurar la copia de seguridad de producción

Usa el comando `ghe-restore` para restaurar el resto de los datos de la copia de seguridad. Para más información, vea "[Restauración de una copia de seguridad](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)".

Si la instancia de almacenamiento provisional ya está configurada y quieres sobrescribir la configuración, el certificado y los datos de licencia, agrega la opción `-c` al comando. Para obtener más información sobre esta opción, consulta [Uso de los comandos de copia de seguridad y restauración](https://github.com/github/backup-utils/blob/master/docs/usage.md#restoring-settings-tls-certificate-and-license) en la documentación de {% data variables.product.prodname_enterprise_backup_utilities %}.

### 6. Revisar la configuración de la instancia

Para acceder a la instancia de almacenamiento provisional con el mismo nombre de host, actualiza el archivo hosts local para resolver el nombre de host de la instancia de almacenamiento provisional mediante la dirección IP; para ello, edita el archivo `/etc/hosts` en macOS o Linux, o el archivo `C:\Windows\system32\drivers\etc` en Windows.

{% note %}

**Nota**: La instancia de almacenamiento provisional debe ser accesible desde el mismo nombre de host que la instancia de producción. El nombre de host de {% data variables.location.product_location %} no se puede cambiar. Para más información, vea "[Configuración de un nombre de host](/admin/configuration/configuring-network-settings/configuring-a-hostname)".

{% endnote %}

Tras ello, revisa la configuración de la instancia de almacenamiento provisional en la {% data variables.enterprise.management_console %}. Para obtener más información, consulta "[Acceso a la {% data variables.enterprise.management_console %}](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)."

{% warning %}

**Advertencia**: Si has configurado {% data variables.product.prodname_actions %} o {% data variables.product.prodname_registry %} para la instancia de almacenamiento provisional, si quieres evitar que los datos de producción se sobrescriban, asegúrate de que la configuración de almacenamiento externo en la {% data variables.enterprise.management_console %} no coincide con la de la instancia de producción.

{% endwarning %}

### 7. Aplicar la configuración de la instancia

Para aplicar la configuración desde la {% data variables.enterprise.management_console %}, haz clic en **Guardar configuración**.

## Información adicional

- «[Acerca de las actualizaciones a nuevas versiones](/admin/overview/about-upgrades-to-new-releases)»
