---
title: Fazer backup e restaurar o GitHub Enterprise Server com o GitHub Actions habilitado
shortTitle: Backup e restauração
intro: 'Os dados de {% data variables.product.prodname_actions %} no seu provedor de armazenamento externo não estão incluídos em backups regulares de {% data variables.product.prodname_ghe_server %} e precisam ser salvos separadamente.'
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

Se você usar {% data variables.product.prodname_enterprise_backup_utilities %} para fazer backup de {% data variables.product.product_location %}, é importante observar que os dados de {% data variables.product.prodname_actions %} armazenados no seu provedor de armazenamento externo não serão incluídos no backup.

Esta é uma visão geral das etapas necessárias para restaurar {% data variables.product.product_location %} com {% data variables.product.prodname_actions %} para um novo dispositivo:

1. Confirme se o dispositivo original está off-line.
1. Defina manualmente as configurações de rede no dispositivo de {% data variables.product.prodname_ghe_server %}. As configurações de rede são excluídas do instantâneo de backup e não são substituídas por `ghe-restore`.
1. Para configurar o appliance de substituição para usar a mesma configuração de armazenamento externo de {% data variables.product.prodname_actions %} que o appliance original, a partir do novo appliance, defina os parâmetros necessários com o comando `ghe-config`.

    - Armazenamento do Azure Blob
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
    - Opcionalmente, para habilitar o estilo de caminho S3, digite o comando a seguir:
    ```shell
    ghe-config secrets.actions.storage.s3.force-path-style true
    ```


1. Habilite {% data variables.product.prodname_actions %} no dispositivo de substituição. Isto conectará o dispositivo de substituição ao mesmo armazenamento externo para {% data variables.product.prodname_actions %}.

    ```shell
    ghe-config app.actions.enabled true
    ghe-config-apply
    ```

1. Depois que {% data variables.product.prodname_actions %} estiver configurado e habilitado, use o comando `ghe-restore` para restaurar o restante dos dados do backup. Para obter mais informações, consulte "[Restaurar um backup](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)".
1. Registre novamente seus executores auto-hospedados no dispositivo de substituição. Para obter mais informações, consulte [Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners).

Para obter mais informações sobre backup e restauração de {% data variables.product.prodname_ghe_server %}, consulte "[Configurar backups no seu dispositivo](/admin/configuration/configuring-backups-on-your-appliance)".
