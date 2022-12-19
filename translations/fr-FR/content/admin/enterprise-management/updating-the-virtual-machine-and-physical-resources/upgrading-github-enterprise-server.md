---
title: Mise à niveau de GitHub Enterprise Server
intro: 'Mettez à niveau {% data variables.product.prodname_ghe_server %} pour bénéficier des dernières fonctionnalités et mises à jour de sécurité.'
redirect_from:
  - /enterprise/admin/installation/upgrading-github-enterprise-server
  - /enterprise/admin/articles/upgrading-to-the-latest-release
  - /enterprise/admin/articles/migrations-and-upgrades
  - /enterprise/admin/guides/installation/upgrading-the-github-enterprise-virtual-machine
  - /enterprise/admin/guides/installation/upgrade-packages-for-older-releases
  - /enterprise/admin/articles/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-older-installations
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch-early-access-program
  - /enterprise/admin/hidden/upgrading-github-enterprise-using-a-hotpatch
  - /enterprise/admin/guides/installation/upgrading-github-enterprise
  - /enterprise/admin/enterprise-management/upgrading-github-enterprise-server
  - /admin/enterprise-management/upgrading-github-enterprise-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Upgrades
shortTitle: Upgrading GHES
ms.openlocfilehash: cbbeff601bfbbdf828ed4c5fc019c5e3bf849614
ms.sourcegitcommit: 30b0931723b704e219c736e0de7afe0fa799da29
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/30/2022
ms.locfileid: '148186426'
---
## Préparation à une mise à niveau

1. Établissez une stratégie de mise à niveau et choisissez la version cible de la mise à niveau. Pour plus d’informations, consultez « [Conditions à remplir pour la mise à niveau](/enterprise/{{ currentVersion }}/admin/guides/installation/upgrade-requirements/) » et [{% data variables.enterprise.upgrade_assistant %}](https://support.github.com/enterprise/server-upgrade) pour connaître le chemin de mise à niveau à partir de votre version actuelle.
1. Créez une nouvelle sauvegarde de votre instance principale avec {% data variables.product.prodname_enterprise_backup_utilities %}. Pour plus d’informations, consultez le [fichier README.md](https://github.com/github/backup-utils#readme) dans la documentation du projet {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% note %}

  **Remarque :** Votre version de {% data variables.product.prodname_enterprise_backup_utilities %} doit être identique à, ou au plus deux versions ultérieures à, {% data variables.location.product_location %}. Pour plus d’informations, consultez « [Mise à niveau de GitHub Enterprise Server Backup Utilities](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance#upgrading-github-enterprise-server-backup-utilities) ».

  {% endnote %}

1. Si {% data variables.location.product_location %} utilise des exécuteurs auto-hébergés éphémères pour {% data variables.product.prodname_actions %} et que vous avez désactivé les mises à jour automatiques, mettez à niveau vos exécuteurs vers la version de l’application d’exécuteur que votre instance mise à niveau exécutera.
1. Si vous effectuez une mise à niveau à partir d’un package de mise à niveau, planifiez une fenêtre de maintenance pour les utilisateurs finaux de {% data variables.product.prodname_ghe_server %}. Si vous utilisez un patch à chaud, le mode maintenance n’est pas obligatoire.

  {% note %}

  **Remarque :** La fenêtre de maintenance dépend du type de mise à niveau que vous effectuez. Les mises à niveau utilisant un patch à chaud ne nécessitent généralement pas de fenêtre de maintenance. Parfois, un redémarrage est exigé, ce que vous pouvez faire ultérieurement. Suivant le schéma de contrôle de version de MAJOR.FEATURE.PATCH, les versions correctives utilisant un package de mise à niveau demandent généralement un temps d’arrêt de moins de cinq minutes. Les mises en production de fonctionnalités qui incluent des migrations de données prennent plus de temps, selon le niveau de performance du stockage et la quantité de données à migrer. Pour plus d’informations, consultez « [Activation et planification du mode maintenance](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode) ».

  {% endnote %}

## Capture d’un instantané

Un instantané est un point de contrôle d’une machine virtuelle à un moment donné. Nous vous recommandons vivement de capturer un instantané avant de mettre à niveau votre machine virtuelle. En cas d’échec de la mise à niveau, vous pourrez ainsi restaurer l’instantané de votre machine virtuelle. Veillez à effectuer la capture d’instantané de la machine virtuelle une fois l’appliance hors tension ou en mode maintenance et après que tous les travaux en arrière-plan ont abouti.

Si vous effectuez une mise à niveau vers une nouvelle mise en production de fonctionnalité, vous devez capturer un instantané de machine virtuelle. Si vous effectuez une mise à niveau vers une version corrective, vous pouvez joindre le disque de données existant. 

Il existe deux types d’instantanés :

- Les **instantanés de machine virtuelle** enregistrent l’état complet de la machine virtuelle, avec les données utilisateur et les données de configuration. Cette méthode de capture d’instantané demande une grande quantité d’espace disque et s’avère fastidieuse.
- Les **instantanés de disque de données** enregistrent uniquement vos données utilisateur.

  {% note %}

  **Remarques :**
  - Certaines plateformes ne vous permettent pas de capturer seulement un instantané de votre disque de données. Pour ces plateformes, vous devez capturer un instantané de l’ensemble de la machine virtuelle.
  - Si votre hyperviseur ne prend pas en charge les instantanés complets de machines virtuelles, vous devez capturer un instantané du disque racine et du disque de données de manière successive et rapide.

  {% endnote %}

| Plateforme | Snapshot (méthode) | URL de la documentation sur la capture d’instantanés |
|---|---|---|
| Amazon AWS | Disque | <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-creating-snapshot.html>
| Azure | Machine virtuelle | <https://docs.microsoft.com/azure/backup/backup-azure-vms-first-look-arm>
| Hyper-V | Machine virtuelle | <https://docs.microsoft.com/windows-server/virtualization/hyper-v/manage/enable-or-disable-checkpoints-in-hyper-v>
| Google Compute Engine | Disque | <https://cloud.google.com/compute/docs/disks/create-snapshots>
| VMware | Machine virtuelle | <https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-64B866EF-7636-401C-A8FF-2B4584D9CA72.html>

## Mise à niveau avec un patch à chaud

{% data reusables.enterprise_installation.hotpatching-explanation %} 

La {% data variables.enterprise.management_console %} vous permet d’installer un patch à chaud immédiatement ou de planifier une installation ultérieure. Vous pouvez utiliser l’interpréteur de commandes d’administration pour installer un patch à chaud avec l’utilitaire `ghe-upgrade`. Pour plus d’informations, consultez « [Conditions à remplir pour la mise à niveau](/enterprise/admin/guides/installation/upgrade-requirements/) ».

{% note %}

**{% ifversion ghes %}Notes{% else %}Note{% endif %}** :

{% ifversion ghes %}
- Si {% data variables.location.product_location %} exécute une build de version finale (RC), vous ne pouvez pas effectuer de mise à niveau avec un patch à chaud.

- {% endif %}Il n’est pas possible d’installer un patch à chaud à l’aide de la {% data variables.enterprise.management_console %} dans les environnements en cluster. Pour installer un patch à chaud dans un environnement en cluster, consultez « [Mise à niveau d’un cluster](/enterprise/admin/clustering/upgrading-a-cluster#upgrading-with-a-hotpatch) ».

{% endnote %}

### Mise à niveau d’une seule appliance avec un patch à chaud

#### Installation d’un patch à chaud à l’aide de la {% data variables.enterprise.management_console %}

Vous pouvez utiliser la {% data variables.enterprise.management_console %} pour effectuer une mise à niveau avec un patch à chaud en activant les mises à jour automatiques. La dernière version disponible de {% data variables.product.prodname_ghe_server %} vers laquelle effectuer une mise à niveau vous sera alors présentée.

Si la cible de mise à niveau qui vous êtes présentée est une mise en production de fonctionnalité et non une version corrective, vous ne pourrez pas utiliser vous servir de la {% data variables.enterprise.management_console %} pour installer un patch à chaud. Au lieu de cela, vous devrez installer le patch à chaud à l’aide de l’interpréteur de commandes d’administration. Pour plus d’informations, consultez « [Installation d’un patch à chaud à l’aide de l’interpréteur de commandes d’administration](#installing-a-hotpatch-using-the-administrative-shell) ».

1. Activer les mises à jour automatiques. Pour plus d’informations, consultez « [Activation des mises à jour automatiques](/enterprise/admin/guides/installation/enabling-automatic-update-checks/) ».
{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.updates-tab %}
4. Après avoir téléchargé un nouveau patch à chaud, utilisez le menu déroulant Installer le package :
    - Pour une installation immédiate, sélectionnez **Maintenant** :
    - Pour une installation ultérieure, sélectionnez une date ultérieure.
  ![Liste déroulante des dates d’installation de patch à chaud](/assets/images/enterprise/management-console/hotpatch-installation-date-dropdown.png)
5. Cliquez sur **Installer**.
  ![Bouton d’installation de patch à chaud](/assets/images/enterprise/management-console/hotpatch-installation-install-button.png)

#### Installation d’un patch à chaud à l’aide de l’interpréteur de commandes d’administration

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Copiez l’URL du package à chaud de mise à niveau (fichier *.hpkg*).
{% data reusables.enterprise_installation.download-package %}
4. Exécutez la commande `ghe-upgrade` en utilisant le nom de fichier du package :
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.hpkg
  *** verifying upgrade package signature...
  ```
5. Si un redémarrage est nécessaire pour les mises à jour du noyau, de MySQL, d’Elasticsearch ou d’autres programmes, le script de mise à niveau corrective à chaud vous le notifie.

### Mise à niveau d’une appliance qui possède des instances réplicas à l’aide d’un patch à chaud

{% note %}

**Remarque** : Si vous installez un patch à chaud, vous n’avez pas besoin de passer en mode maintenance ou d’arrêter la réplication.

{% endnote %}

Les appliances configurées pour la haute disponibilité et la géoréplication utilisent des instances réplicas en plus des instances principales. Pour mettre à niveau ces appliances, vous devez mettre à niveau l’instance principale et toutes les instances réplicas, l’une après l’autre.

#### Mise à niveau de l’instance principale

1. Mettez à niveau l’instance principale en suivant les instructions qui se trouvent dans la section « [Installation d’un patch à chaud à l’aide de l’interpréteur de commandes d’administration](#installing-a-hotpatch-using-the-administrative-shell) ».

#### Mise à niveau d’instances réplicas

{% note %}

**Remarque :** Si vous exécutez plusieurs instances réplicas dans le cadre de la géoréplication, répétez cette procédure pour chaque instance réplica, l’une après l’autre.

{% endnote %}

1. Mettez à niveau l’instance réplica en suivant les instructions qui se trouvent dans la section « [Installation d’un patch à chaud à l’aide de l’interpréteur de commandes d’administration](#installing-a-hotpatch-using-the-administrative-shell) ». Si vous utilisez plusieurs réplicas pour la géoréplication, vous devez répéter cette procédure pour mettre à niveau chaque réplica, l’un après l’autre.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

## Mise à niveau avec un package de mise à niveau

Bien que vous puissiez utiliser un patch à chaud pour effectuer une mise à niveau vers la dernière mise en production de fonctionnalité d’une série de fonctionnalités, vous devez utiliser un package de mise à niveau pour effectuer une mise à niveau vers une mise en production de fonctionnalité plus récente. Par exemple, pour effectuer une mise à niveau de `2.11.10` vers `2.12.4`, vous devez utiliser un package de mise à niveau, car il ne s’agit pas de la même séries de fonctionnalités. Pour plus d’informations, consultez « [Conditions à remplir pour la mise à niveau](/enterprise/admin/guides/installation/upgrade-requirements/) ».

### Mise à niveau d’une seule appliance avec un package de mise à niveau

{% data reusables.enterprise_installation.download-note %}

{% data reusables.enterprise_installation.ssh-into-instance %}
2. {% data reusables.enterprise_installation.enterprise-download-upgrade-pkg %} Sélectionnez la plateforme appropriée et copiez l’URL du package de mise à niveau (fichier *.pkg*).
{% data reusables.enterprise_installation.download-package %}
4. Activez le mode maintenance et attendez que tous les processus actifs se terminent sur l’instance {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [Activation et planification du mode maintenance](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode) ».

  {% note %}

  **Remarque** : Si vous mettez à niveau de l’appliance principale dans une configuration à haute disponibilité, l’appliance doit déjà être en mode maintenance si vous suivez les instructions qui se trouvent dans la section « [Mise à niveau de l’instance principale](#upgrading-the-primary-instance) ».

  {% endnote %}

5. Exécutez la commande `ghe-upgrade` en utilisant le nom de fichier du package :
  ```shell
  admin@HOSTNAME:~$ ghe-upgrade GITHUB-UPGRADE.pkg
  *** verifying upgrade package signature...
  ```
6. Confirmez votre volonté de poursuivre la mise à niveau et de redémarrer une fois la signature du package vérifiée. Le nouveau système de fichiers racine écrit dans la partition secondaire et l’instance redémarre automatiquement en mode maintenance :
  ```shell
  *** applying update...
  This package will upgrade your installation to version VERSION-NUMBER
  Current root partition: /dev/xvda1 [VERSION-NUMBER]
  Target root partition:  /dev/xvda2
  Proceed with installation? [y/N]
  ```
{% ifversion ip-exception-list %}
1. Si vous le souhaitez, pour valider la mise à niveau, configurez une liste d’exceptions d’IP pour autoriser l’accès à une liste d’adresses IP spécifiée. Pour plus d’informations, consultez « [Validation des modifications en mode maintenance à l’aide de la liste des exceptions d’IP](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list) ».
{% endif %}
7. Pour les mises à niveau d’appliance unique, désactivez le mode maintenance pour permettre aux utilisateurs d’utiliser {% data variables.location.product_location %}.

  {% note %}

  **Remarque** : Si vous mettez à niveau des appliances dans une configuration à haute disponibilité, vous devez rester en mode maintenance tant que vous n’avez pas mis à niveau tous les réplicas et que la réplication est en cours. Pour plus d’informations, consultez « [Mise à niveau d’une instance réplica](#upgrading-a-replica-instance) ».

  {% endnote %}

### Mise à niveau d’une appliance qui possède des instances réplicas à l’aide d’un package de mise à niveau

Les appliances configurées pour la haute disponibilité et la géoréplication utilisent des instances réplicas en plus des instances principales. Pour mettre à niveau ces appliances, vous devez mettre à niveau l’instance principale et toutes les instances réplicas, l’une après l’autre.

#### Mise à niveau de l’instance principale

{% warning %}

**Avertissement :** Quand la réplication est arrêtée, une défaillance de l’instance principale fait perdre tout travail effectué avant la mise à niveau du réplica et le redémarrage de la réplication.

{% endwarning %}

1. Sur l’instance principale, activez le mode maintenance et attendez que tous les processus actifs se terminent. Pour plus d’informations, consultez « [Activation du mode maintenance](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/) ».
{% data reusables.enterprise_installation.replica-ssh %}
3. Sur l’instance réplica, ou sur toutes les instances réplicas si vous exécutez plusieurs instances réplicas dans le cadre de la géoréplication, exécutez `ghe-repl-stop` pour arrêter la réplication.
4. Mettez à niveau l’instance principale en suivant les instructions de la section « [Mise à niveau d’une seule appliance avec un package de mise à niveau](#upgrading-a-single-appliance-with-an-upgrade-package) ».

#### Mise à niveau d’instances réplicas

{% note %}

**Remarque :** Si vous exécutez plusieurs instances réplicas dans le cadre de la géoréplication, répétez cette procédure pour chaque instance réplica, l’une après l’autre.

{% endnote %}

1. Mettez à niveau l’instance réplica en suivant les instructions de la section « [Mise à niveau d’une seule appliance avec un package de mise à niveau](#upgrading-a-single-appliance-with-an-upgrade-package) ». Si vous utilisez plusieurs réplicas pour la géoréplication, vous devez répéter cette procédure pour mettre à niveau chaque réplica, l’un après l’autre.
{% data reusables.enterprise_installation.replica-ssh %} {% data reusables.enterprise_installation.replica-verify %}

{% data reusables.enterprise_installation.start-replication %}

{% data reusables.enterprise_installation.replication-status %} Si la commande retourne `Replication is not running`, la réplication peut encore démarrer. Attendez environ une minute avant de réexécuter `ghe-repl-status`.

   {% note %}

   **Remarque :** Pendant la resynchronisation, `ghe-repl-status` peut indiquer que la réplication est en retard. Par exemple, vous pouvez voir le message d’erreur suivant.
   
   ```
   CRITICAL: git replication is behind the primary by more than 1007 repositories and/or gists
   ```
   {% endnote %}

   {%- ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}

   - Si vous avez mis à niveau chaque nœud vers {% data variables.product.product_name %} 3.6.0 ou ultérieur et que vous avez démarré la réplication, mais que `git replication is behind the primary` continue à apparaître après 45 minutes, contactez {% data variables.contact.enterprise_support %}. Pour plus d’informations, consultez « [Obtention d’aide auprès du {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support) ».
   {%- endif %}

   - {% ifversion ghes = 3.4 or ghes = 3.5 or ghes = 3.6 %}Sinon, si{% else %}Si{% endif %} `ghe-repl-status` ne retourne pas `OK`, contactez {% data variables.contact.enterprise_support %}. Pour plus d’informations, consultez « [Obtention d’aide auprès du {% data variables.contact.github_support %}](/admin/enterprise-support/receiving-help-from-github-support) ».
6. Une fois que la mise à niveau du dernier réplica a abouti et que la resynchronisation est terminée, désactivez le mode maintenance pour permettre aux utilisateurs de se servir de {% data variables.location.product_location %}.

## Restauration à partir d’une mise à niveau avortée

En cas d’échec ou d’interruption d’une mise à niveau, vous devez restaurer votre instance dans son état précédent. La procédure permettant d’effectuer cette opération dépend du type de mise à niveau.

### Annulation d’une version corrective

Pour annuler une version corrective, utilisez la commande `ghe-upgrade` avec le commutateur `--allow-patch-rollback`. Avant cela, la réplication doit être temporairement arrêtée en exécutant `ghe-repl-stop` sur toutes les instances réplicas. {% data reusables.enterprise_installation.command-line-utilities-ghe-upgrade-rollback %}

Une fois l’opération terminée, redémarrez la réplication en exécutant `ghe-repl-start` sur tous les réplicas. 

Pour plus d’informations, consultez « [Utilitaires en ligne de commande](/enterprise/admin/guides/installation/command-line-utilities/#ghe-upgrade) ».

### Annulation d’une mise en production de fonctionnalité

Pour une restauration à partir d’une mise en production de fonctionnalité, restaurez l’instantané d’une machine virtuelle de sorte que les partitions racine et de données se trouvent dans un état cohérent. Pour plus d’informations, consultez « [Capture d’un instantané](#taking-a-snapshot) ».

{% ifversion ghes %}
## Pour aller plus loin

- « [À propos des mises à niveau vers de nouvelles mises en production](/admin/overview/about-upgrades-to-new-releases) » {% endif %}
