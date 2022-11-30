---
title: Fazer backup e restaurar o GitHub Enterprise Server com o GitHub Actions habilitado
shortTitle: Backing up and restoring
intro: 'Para restaurar um backup de {% data variables.location.product_location %} quando o {% data variables.product.prodname_actions %} estiver habilitado, configure o {% data variables.product.prodname_actions %} antes de restaurar o backup com o {% data variables.product.prodname_enterprise_backup_utilities %}.'
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
ms.openlocfilehash: 43279c6b99cce6618de9253c5d0451c0a661b095
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107306'
---
## Sobre backups do {% data variables.product.product_name %} ao usar o {% data variables.product.prodname_actions %}

Você pode usar o {% data variables.product.prodname_enterprise_backup_utilities %} para fazer backup e restaurar os dados e a configuração de {% data variables.location.product_location %} para uma nova instância. Para obter mais informações, confira "[Como configurar backups no seu dispositivo](/admin/configuration/configuring-backups-on-your-appliance)".

No entanto, nem todos os dados do {% data variables.product.prodname_actions %} estão incluídos nesses backups. {% data reusables.actions.enterprise-storage-ha-backups %}

## Restauração de um backup do {% data variables.product.product_name %} quando o {% data variables.product.prodname_actions %} está habilitado

Para restaurar um backup de {% data variables.location.product_location %} com o {% data variables.product.prodname_actions %}, defina manualmente as configurações de rede e o armazenamento externo na instância de destino antes de restaurar o backup do {% data variables.product.prodname_enterprise_backup_utilities %}. 

1. Confirme se a instância de origem está offline.
1. Defina manualmente as configurações de rede na instância do {% data variables.product.prodname_ghe_server %} substituta. As configurações de rede são excluídas do instantâneo de backup e não são substituídas por `ghe-restore`. Para obter mais informações, confira "[Como definir as configurações de rede](/admin/configuration/configuring-network-settings)".
1. Acesse com SSH a instância de destino. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".

   ```shell{:copy}
   $ ssh -p 122 admin@HOSTNAME
   ```
1. Configure a instância de destino para usar o mesmo serviço de armazenamento externo para o {% data variables.product.prodname_actions %} que a instância de origem inserindo um dos comandos a seguir.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. Como preparação para habilitar o {% data variables.product.prodname_actions %} na instância de destino, insira o comando a seguir.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```
{% data reusables.actions.apply-configuration-and-enable %}
1. Depois que o {% data variables.product.prodname_actions %} estiver configurado e habilitado, use o comando `ghe-restore` para restaurar o restante dos dados do backup. Para obter mais informações, confira "[Como restaurar um backup](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)".
1. Registre novamente os executores auto-hospedados na instância de destino. Para obter mais informações, confira "[Como adicionar executores auto-hospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".
