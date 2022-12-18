---
title: Sauvegarde et restauration de GitHub Enterprise Server avec GitHub Actions activé
shortTitle: Backing up and restoring
intro: 'Pour restaurer une sauvegarde de {% data variables.location.product_location %} lorsque {% data variables.product.prodname_actions %} est activé, vous devez configurer {% data variables.product.prodname_actions %} avant de restaurer la sauvegarde avec {% data variables.product.prodname_enterprise_backup_utilities %}.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107308'
---
## À propos des sauvegardes de {% data variables.product.product_name %} lors de l’utilisation de {% data variables.product.prodname_actions %}

Vous pouvez utiliser {% data variables.product.prodname_enterprise_backup_utilities %} pour sauvegarder et restaurer les données et la configuration de {% data variables.location.product_location %} dans une nouvelle instance. Pour plus d’informations, consultez « [Configuration des sauvegardes sur votre appliance](/admin/configuration/configuring-backups-on-your-appliance) ».

Toutefois, les données de {% data variables.product.prodname_actions %} ne sont pas toutes incluses dans ces sauvegardes. {% data reusables.actions.enterprise-storage-ha-backups %}

## Restauration d’une sauvegarde de {% data variables.product.product_name %} lorsque {% data variables.product.prodname_actions %} est activé

Pour restaurer une sauvegarde de {% data variables.location.product_location %} avec {% data variables.product.prodname_actions %}, vous devez configurer manuellement les paramètres réseau et le stockage externe sur l’instance de destination avant de restaurer votre sauvegarde à partir de {% data variables.product.prodname_enterprise_backup_utilities %}. 

1. Vérifiez que l’instance source est hors connexion.
1. Configurez manuellement les paramètres réseau sur l’instance {% data variables.product.prodname_ghe_server %} de remplacement. Les paramètres réseau sont exclus de l’instantané de sauvegarde et ne sont pas remplacés par `ghe-restore`. Pour plus d’informations, consultez « [Configuration des paramètres réseau](/admin/configuration/configuring-network-settings) ».
1. SSH dans l’instance de destination. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh) ».

   ```shell{:copy}
   $ ssh -p 122 admin@HOSTNAME
   ```
1. Configurez l’instance de destination pour utiliser le même service de stockage externe pour {% data variables.product.prodname_actions %} que l’instance source en entrant l’une des commandes suivantes.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. Pour préparer l’activation de {% data variables.product.prodname_actions %} sur l’instance de destination, entrez la commande suivante.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```
{% data reusables.actions.apply-configuration-and-enable %}
1. Après avoir configuré et activé {% data variables.product.prodname_actions %}, utilisez la commande `ghe-restore` pour restaurer le reste des données de la sauvegarde. Pour plus d’informations, consultez « [Restauration d’une sauvegarde](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup) ».
1. Réinscrivez vos exécuteurs auto-hébergés sur l’instance de destination. Pour plus d’informations, consultez « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) ».
