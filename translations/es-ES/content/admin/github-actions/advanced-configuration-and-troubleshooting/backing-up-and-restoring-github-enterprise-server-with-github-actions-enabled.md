---
title: Respaldar y restablecer GitHub Enterprise Server con GitHub Actions habilitadas
shortTitle: Backing up and restoring
intro: 'Para restaurar una copia de seguridad de {% data variables.location.product_location %} cuando {% data variables.product.prodname_actions %} está habilitado, debes configurar {% data variables.product.prodname_actions %} antes de restaurar la copia de seguridad con {% data variables.product.prodname_enterprise_backup_utilities %}.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107313'
---
## Acerca de las copias de seguridad de {% data variables.product.product_name %} al usar {% data variables.product.prodname_actions %}

Puedes usar {% data variables.product.prodname_enterprise_backup_utilities %} para realizar copias de seguridad y restaurar los datos y la configuración de {% data variables.location.product_location %} en una nueva instancia. Para más información, vea "[Configuración de copias de seguridad en el dispositivo](/admin/configuration/configuring-backups-on-your-appliance)".

Pero no todos los datos de {% data variables.product.prodname_actions %} se incluyen en estas copias de seguridad. {% data reusables.actions.enterprise-storage-ha-backups %}

## Restauración de una copia de seguridad de {% data variables.product.product_name %} cuando {% data variables.product.prodname_actions %} está habilitado

Para restaurar una copia de seguridad de {% data variables.location.product_location %} con {% data variables.product.prodname_actions %}, debes configurar manualmente la configuración de red y el almacenamiento externo en la instancia de destino antes de restaurar la copia de seguridad desde {% data variables.product.prodname_enterprise_backup_utilities %}. 

1. Confirma que la instancia de origen está sin conexión.
1. Configura manualmente los ajustes de red en la instancia de reemplazo de {% data variables.product.prodname_ghe_server %}. La configuración de red se excluye de la instantánea de copia de seguridad y no se sobrescribe mediante `ghe-restore`. Para más información, vea "[Definición de la configuración de red](/admin/configuration/configuring-network-settings)".
1. SSH en la instancia de destino. Para obtener más información, consulte"[Acceso al shell administrativo (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh)".

   ```shell{:copy}
   $ ssh -p 122 admin@HOSTNAME
   ```
1. Configura la instancia de destino para usar el mismo servicio de almacenamiento externo para {% data variables.product.prodname_actions %} que la instancia de origen escribiendo uno de los comandos siguientes.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. Para preparar la habilitación de {% data variables.product.prodname_actions %} en la instancia de destino, escriba el comando siguiente.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```
{% data reusables.actions.apply-configuration-and-enable %}
1. Después de configurar y habilitar {% data variables.product.prodname_actions %}, usa el comando `ghe-restore` para restaurar el resto de los datos desde la copia de seguridad. Para más información, vea "[Restauración de una copia de seguridad](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)".
1. Vuelve a registrar tus ejecutores autohospedados en la instancia de destino. Para más información, vea "[Adición de ejecutores autohospedados](/actions/hosting-your-own-runners/adding-self-hosted-runners)".
