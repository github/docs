---
title: Fazer backup e restaurar o GitHub Enterprise Server com o GitHub Actions habilitado
shortTitle: Backup e restauração
intro: 'Os dados de {% data variables.product.prodname_actions %} no seu provedor de armazenamento externo não estão incluídos em backups regulares de {% data variables.product.prodname_ghe_server %} e precisam ser salvos separadamente.'
versions:
  enterprise-server: '>=3.0'
topics:
  - Enterprise
---

{% data reusables.actions.enterprise-storage-ha-backups %}

Se você usar {% data variables.product.prodname_enterprise_backup_utilities %} para fazer backup de {% data variables.product.product_location %}, é importante observar que os dados de {% data variables.product.prodname_actions %} armazenados no seu provedor de armazenamento externo não serão incluídos no backup.

Esta é uma visão geral das etapas necessárias para restaurar {% data variables.product.product_location %} com {% data variables.product.prodname_actions %} para um novo dispositivo:

1. Confirme se o dispositivo original está off-line.
1. Defina manualmente as configurações de rede no dispositivo de {% data variables.product.prodname_ghe_server %}. As configurações de rede são excluídas do instantâneo de backup e não são substituídas por `ghe-restore`.
1. Configurar o dispositivo de substituição para usar a mesma configuração de armazenamento externo de {% data variables.product.prodname_actions %} do dispositivo original.
1. Habilite {% data variables.product.prodname_actions %} no dispositivo de substituição. Isto conectará o dispositivo de substituição ao mesmo armazenamento externo para {% data variables.product.prodname_actions %}.
1. Depois que {% data variables.product.prodname_actions %} estiver configurado com o provedor de armazenamento externo, use o comando `ghe-restore` para restaurar o restante dos dados do backup. Para obter mais informações, consulte "[Restaurar um backup](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)".
1. Registre novamente seus executores auto-hospedados no dispositivo de substituição. Para obter mais informações, consulte [Adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners).

Para obter mais informações sobre backup e restauração de {% data variables.product.prodname_ghe_server %}, consulte "[Configurar backups no seu dispositivo](/admin/configuration/configuring-backups-on-your-appliance)".
