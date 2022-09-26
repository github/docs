---
title: Respaldar y restablecer GitHub Enterprise Server con GitHub Actions habilitadas
shortTitle: Backing up and restoring
intro: 'Los datos de {% data variables.product.prodname_actions %} en tu proveedor de almacenamiento externo no se incluyen en los respaldos normales de {% data variables.product.prodname_ghe_server %} y deben respaldarse por separado.'
versions:
  ghes: '*'
type: how_to
topics:
  - Actions
  - Backups
  - Enterprise
  - Infrastructure
redirect_from:
  - /admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled
ms.openlocfilehash: def12b4e9e93a75ee1aa58f8290ca1b6e7d13cd5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145120465'
---
{% data reusables.actions.enterprise-storage-ha-backups %}

Si utilizas {% data variables.product.prodname_enterprise_backup_utilities %} para respaldar {% data variables.product.product_location %}, es importante que tomes en cuenta que los datos de las {% data variables.product.prodname_actions %} que se almacenan en tu proveedor de almacenamiento externo no se incluyen en el respaldo.

Esta es una vista general de los pasos que se requieren para restablecer {% data variables.product.product_location %} con {% data variables.product.prodname_actions %} para un aplicativo nuevo:

1. Confirmar que el aplicativo original esté fuera de línea.
1. Configurar manualmente los ajustes de red en el aplicativo de reemplazo de {% data variables.product.prodname_ghe_server %}. La configuración de red se excluye de la instantánea de copia de seguridad y no se sobrescribe mediante `ghe-restore`.
1. A fin de configurar el dispositivo de reemplazo para que use la misma configuración de almacenamiento externo de {% data variables.product.prodname_actions %} que el original, desde el dispositivo nuevo, configure los parámetros necesarios con el comando `ghe-config`.
    
    - Azure Blob Storage
    ```shell
    ghe-config secrets.actions.storage.blob-provider "azure"
    ghe-config secrets.actions.storage.azure.connection-string "_Connection_String_"
    ```
    - Amazon S3
    ```shell
    ghe-config secrets.actions.storage.blob-provider "s3"
    ghe-config secrets.actions.storage.s3.bucket-name "_S3_Bucket_Name"
    ghe-config secrets.actions.storage.s3.service-url "_S3_Service_URL_"
    ghe-config secrets.actions.storage.s3.access-key-id "_S3_Access_Key_ID_"
    ghe-config secrets.actions.storage.s3.access-secret "_S3_Access_Secret_"
    ```
    - Opcionalmente, para habilitar el estilo de ruta forzada de S3, ingresa el siguiente comando:
    ```shell
    ghe-config secrets.actions.storage.s3.force-path-style true
    ```
      

1. Habilita {% data variables.product.prodname_actions %} en el aplicativo de reemplazo. Esto conectará el aplicativo de reemplazo al mismo almacenamiento externo de {% data variables.product.prodname_actions %}.

    ```shell
    ghe-config app.actions.enabled true
    ghe-config-apply
    ```

1. Después de configurar y habilitar {% data variables.product.prodname_actions %}, use el comando `ghe-restore` para restaurar el resto de los datos desde la copia de seguridad. Para más información, vea "[Restauración de una copia de seguridad](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)".
1. Vuelve a registrar tus ejecutores auto-hospedados en el aplicativo de reemplazo. Para más información, consulte [Adición de ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners).

Para más información sobre cómo realizar copias de seguridad y restaurar {% data variables.product.prodname_ghe_server %}, vea "[Configuración de copias de seguridad en el dispositivo](/admin/configuration/configuring-backups-on-your-appliance)".
