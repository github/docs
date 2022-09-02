---
title: Respaldar y restablecer GitHub Enterprise Server con GitHub Actions habilitadas
shortTitle: Respaldar y restablecer
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
---

{% data reusables.actions.enterprise-storage-ha-backups %}

Si utilizas {% data variables.product.prodname_enterprise_backup_utilities %} para respaldar {% data variables.product.product_location %}, es importante que tomes en cuenta que los datos de las {% data variables.product.prodname_actions %} que se almacenan en tu proveedor de almacenamiento externo no se incluyen en el respaldo.

Esta es una vista general de los pasos que se requieren para restablecer {% data variables.product.product_location %} con {% data variables.product.prodname_actions %} para un aplicativo nuevo:

1. Confirmar que el aplicativo original esté fuera de línea.
1. Configurar manualmente los ajustes de red en el aplicativo de reemplazo de {% data variables.product.prodname_ghe_server %}. La configuración de red se excluye de la captura del respaldo y no los sobrescribe el `ghe-restore`.
1. Para configurar el aplicativo de reemplazo para que utilice la misma configuración de almacenamiento externo de {% data variables.product.prodname_actions %} que el aplicativo original, desde el aplicativo nuevo, configura los parámetros requeridos con el comando `ghe-config`.

    - Almacenamiento de Blobs de Azure
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

1. Después de configurar y habilitar las {% data variables.product.prodname_actions %}, utiliza el comando `ghe-restore` para restablecer el resto de los datos desde el respaldo. Para obtener más información, consulta la sección "[Restablecer un respaldo](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)".
1. Vuelve a registrar tus ejecutores auto-hospedados en el aplicativo de reemplazo. Para obtener más información, consulta la sección de [Agregar ejecutores autoalojados](/actions/hosting-your-own-runners/adding-self-hosted-runners).

Para obtener más información sobre respaldar y restablecer {% data variables.product.prodname_ghe_server %}, consulta la sección "[Configurar los respaldos en tu aplicativo](/admin/configuration/configuring-backups-on-your-appliance)".
