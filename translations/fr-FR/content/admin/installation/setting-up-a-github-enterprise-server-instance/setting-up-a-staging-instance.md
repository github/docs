---
title: Configuration d’une instance de préproduction
intro: 'Vous pouvez configurer une instance {% data variables.product.product_name %} dans un environnement séparé et isolé, et utiliser cette instance pour valider et tester les modifications.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106860'
---
## À propos des instances intermédiaires

{% data variables.product.company_short %} vous recommande de configurer un environnement distinct pour tester les sauvegardes, les mises à jour ou les changements apportés à la configuration de {% data variables.location.product_location %}. Cet environnement, que vous devez isoler de vos systèmes de production, est appelé environnement intermédiaire.

Par exemple, pour vous protéger contre la perte de données, vous pouvez régulièrement valider la sauvegarde de votre instance de production. Vous pouvez régulièrement restaurer la sauvegarde de vos données de production sur une instance distincte de {% data variables.product.product_name %} dans un environnement intermédiaire. Sur cette instance intermédiaire, vous pouvez également tester la mise à niveau vers la dernière mise en production de fonctionnalité de {% data variables.product.product_name %}.

{% tip %}

**Conseil :** vous pouvez réutiliser votre fichier de licence {% data variables.product.prodname_enterprise %} existant, à condition que l’instance intermédiaire ne soit pas utilisée dans une capacité de production.

{% endtip %}

## Considérations relatives à un environnement intermédiaire

Pour effectuer un test approfondi de {% data variables.product.product_name %} et recréer un environnement aussi proche que possible de votre environnement de production, vous devez tenir compte des systèmes externes qui interagissent avec votre instance. Par exemple, vous pouvez tester les éléments suivants dans votre environnement intermédiaire.

- Authentification, en particulier si vous utilisez un fournisseur d’authentification externe comme SAML
- Intégration à un système de gestion de tickets externe
- Intégration à un serveur d’intégration continue
- Scripts ou logiciels externes qui utilisent les {% data variables.product.prodname_enterprise_api %}
- Serveur SMTP externe pour les notifications par e-mail

## Configuration d’une instance de préproduction

Vous pouvez configurer une instance de préproduction à partir de zéro, comme vous le souhaitez. Pour plus d’informations, consultez « [Configuration d’une instance de {% data variables.product.product_name %}](/admin/installation/setting-up-a-github-enterprise-server-instance) » et « [Configuration de votre entreprise](/admin/configuration/configuring-your-enterprise) ».

Vous pouvez également créer une instance de préproduction qui reflète votre configuration de production en restaurant une sauvegarde de votre instance de production sur l’instance de préproduction.

1. [Sauvegarder votre instance de production](#1-back-up-your-production-instance).
2. [Configurer une instance de préproduction](#2-set-up-a-staging-instance).
3. [Configurer {% data variables.product.prodname_actions %}](#3-configure-github-actions).
4. [Configurer {% data variables.product.prodname_registry %}](#4-configure-github-packages).
5. [Restaurer votre sauvegarde de production](#5-restore-your-production-backup).
6. [Passer en revue la configuration de l’instance](#6-review-the-instances-configuration).
7. [Appliquer la configuration de l’instance](#7-apply-the-instances-configuration).

### 1. Sauvegarder votre instance de production

Si vous souhaitez tester des changements sur une instance qui contient les mêmes données et la même configuration que votre instance de production, sauvegardez les données et la configuration de l’instance de production en utilisant {% data variables.product.prodname_enterprise_backup_utilities %}. Pour plus d’informations, consultez « [Configuration des sauvegardes sur votre appliance](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance) ».

{% warning %}

**Avertissement** : Si vous utilisez {% data variables.product.prodname_actions %} ou {% data variables.product.prodname_registry %} en production, la sauvegarde inclut votre configuration de production pour le stockage externe. Pour éviter toute perte potentielle de données en écrivant sur votre stockage de production à partir de l’instance de préproduction, vous devez configurer chaque fonctionnalité aux étapes 3 et 4 avant de restaurer la sauvegarde.

{% endwarning %}

### 2. Configurer une instance de préproduction

Configurez une nouvelle instance qui jouera le rôle d’environnement de préproduction. Vous pouvez utiliser les mêmes guides pour le provisionnement et l’installation de votre instance de préproduction que ceux utilisés pour votre instance de production. Pour plus d’informations, consultez « [Configuration d’une instance {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/) ».

Si vous comptez restaurer une sauvegarde de votre instance de production, passez à l’étape suivante. Vous pouvez également configurer l’instance manuellement, et ignorer les étapes suivantes.

### 3. Configurer {% data variables.product.prodname_actions %}

Si vous utilisez {% data variables.product.prodname_actions %} sur votre instance de production, configurez éventuellement la fonctionnalité sur l’instance de préproduction avant de restaurer votre sauvegarde de production. Si vous n’utilisez pas {% data variables.product.prodname_actions %}, passez à « [4. Configurer {% data variables.product.prodname_registry %}](#4-configure-github-packages) ».

{% warning %}

**Avertissement** : Si vous ne configurez pas {% data variables.product.prodname_actions %} sur l’instance de préproduction avant de restaurer votre sauvegarde de production, votre instance de préproduction utilise le stockage externe de votre instance de production, ce qui peut entraîner une perte de données. Nous vous recommandons vivement d’utiliser un autre stockage externe pour votre instance de préproduction. Pour plus d’informations, consultez « [Utilisation d’un environnement intermédiaire](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment) ».

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. Pour configurer l’instance de préproduction afin d’utiliser un fournisseur de stockage externe pour {% data variables.product.prodname_actions %}, entrez l’une des commandes suivantes.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. Pour préparer l’activation de {% data variables.product.prodname_actions %} sur l’instance de préproduction, entrez la commande suivante.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```

### 4. Configurer {% data variables.product.prodname_registry %}

Si vous utilisez {% data variables.product.prodname_registry %} sur votre instance de production, configurez éventuellement la fonctionnalité sur l’instance de préproduction avant de restaurer votre sauvegarde de production. Si vous n’utilisez pas {% data variables.product.prodname_registry %}, passez à « [5. Restaurer votre sauvegarde de production](#5-restore-your-production-backup) ».

{% warning %}

**Avertissement** : Si vous ne configurez pas {% data variables.product.prodname_registry %} sur l’instance de préproduction avant de restaurer votre sauvegarde de production, votre instance de préproduction utilise le stockage externe de votre instance de production, ce qui peut entraîner une perte de données. Nous vous recommandons vivement d’utiliser un autre stockage externe pour votre instance de préproduction.

{% endwarning %}

1. Passez en revue la sauvegarde à restaurer sur l’instance de préproduction.
   - Si vous avez effectué la sauvegarde avec {% data variables.product.prodname_enterprise_backup_utilities %} 3.5 ou une version ultérieure, la sauvegarde inclut la configuration de {% data variables.product.prodname_registry %}. Passez à l’étape suivante.
   - Si vous avez effectué la sauvegarde avec {% data variables.product.prodname_enterprise_backup_utilities %} 3.4 ou une version antérieure, configurez {% data variables.product.prodname_registry %} sur l’instance de préproduction. Pour plus d’informations, consultez « [Bien démarrer avec {% data variables.product.prodname_registry %} pour votre entreprise](/admin/packages/getting-started-with-github-packages-for-your-enterprise) ».
{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. Configurez la connexion au stockage externe en entrant les commandes suivantes, et en remplaçant les valeurs d’espace réservé par les valeurs réelles de votre connexion.
   - Stockage Blob Azure :

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "azure"
     ghe-config secrets.packages.azure-container-name "AZURE CONTAINER NAME"
     ghe-config secrets.packages.azure-connection-string "CONNECTION STRING"
     ```
   - Amazon S3 :

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "s3"
     ghe-config secrets.packages.service-url "S3 SERVICE URL"
     ghe-config secrets.packages.s3-bucket "S3 BUCKET NAME"
     ghe-config secrets.packages.aws-access-key "S3 ACCESS KEY ID"
     ghe-config secrets.packages.aws-secret-key "S3 ACCESS SECRET"
     ```
1. Pour préparer l’activation de {% data variables.product.prodname_registry %} sur l’instance de préproduction, entrez la commande suivante.

   ```shell{:copy}
   ghe-config app.packages.enabled true
   ```

### 5. Restaurer votre sauvegarde de production

Utilisez la commande `ghe-restore` pour restaurer le reste des données à partir de la sauvegarde. Pour plus d’informations, consultez « [Restauration d’une sauvegarde](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup) ».

Si l’instance de préproduction est déjà configurée et si vous souhaitez remplacer les paramètres, le certificat et les données de licence, ajoutez l’option `-c` à la commande. Pour plus d’informations sur l’option, consultez [Utilisation des commandes de sauvegarde et de restauration](https://github.com/github/backup-utils/blob/master/docs/usage.md#restoring-settings-tls-certificate-and-license) dans la documentation de {% data variables.product.prodname_enterprise_backup_utilities %}.

### 6. Passer en revue la configuration de l’instance

Pour accéder à l’instance de préproduction à l’aide du même nom d’hôte, mettez à jour votre fichier d’hôtes local afin de résoudre le nom d’hôte de l’instance de préproduction en fonction de l’adresse IP en modifiant le fichier `/etc/hosts` sur macOS ou Linux, ou le fichier `C:\Windows\system32\drivers\etc` sur Windows.

{% note %}

**Remarque** : Votre instance de préproduction doit être accessible à partir du même nom d’hôte que votre instance de production. Le changement de nom d’hôte pour {% data variables.location.product_location %} n’est pas pris en charge. Pour plus d’informations, consultez « [Configuration d’un nom d’hôte](/admin/configuration/configuring-network-settings/configuring-a-hostname) ».

{% endnote %}

Passez ensuite en revue la configuration de l’instance de préproduction dans {% data variables.enterprise.management_console %}. Pour plus d’informations, consultez « [Accès à la {% data variables.enterprise.management_console %}](/admin/configuration/configuring-your-enterprise/accessing-the-management-console) ».

{% warning %}

**Avertissement** : Si vous avez configuré {% data variables.product.prodname_actions %} ou {% data variables.product.prodname_registry %} pour l’instance de préproduction, et si vous souhaitez éviter de remplacer les données de production, vérifiez que la configuration du stockage externe dans la {% data variables.enterprise.management_console %} ne correspond pas à votre instance de production.

{% endwarning %}

### 7. Appliquer la configuration de l’instance

Pour appliquer la configuration à partir de la {% data variables.enterprise.management_console %}, cliquez sur **Enregistrer les paramètres**.

## Pour aller plus loin

- « [À propos des mises à niveau vers de nouvelles mises en production](/admin/overview/about-upgrades-to-new-releases) »
