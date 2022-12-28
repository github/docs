---
title: "Migration de GitHub Enterprise\_11.10.x vers 2.1.23"
redirect_from:
  - /enterprise/admin/installation/migrating-from-github-enterprise-1110x-to-2123
  - /enterprise/admin-guide/migrating
  - /enterprise/admin/articles/migrating-github-enterprise
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-v11-10-34x
  - /enterprise/admin/articles/upgrading-to-a-newer-release
  - /enterprise/admin/guides/installation/migrating-to-a-different-platform-or-from-github-enterprise-11-10-34x
  - /enterprise/admin/guides/installation/migrating-from-github-enterprise-11-10-x-to-2-1-23
  - /enterprise/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
  - /admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123
intro: "Pour effectuer une migration de {% data variables.product.prodname_enterprise %} 11.10.x vers\_2.1.23, vous devez configurer une nouvelle instance de l’appliance et migrer les données à partir de l’instance précédente."
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Migration
  - Upgrades
shortTitle: Migrate from 11.10.x to 2.1.23
ms.openlocfilehash: 4dcd93b41d8edc75388d34785c4c149d6627cc5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332599'
---
Les migrations à partir de {% data variables.product.prodname_enterprise %} version 11.10.348 et ultérieures sont prises en charge. Les migrations à partir de {% data variables.product.prodname_enterprise %} version 11.10.348 et antérieures ne sont pas prises en charge. Vous devez d’abord effectuer une mise à niveau vers la version 11.10.348 en plusieurs mises à niveau. Pour plus d’informations, consultez la procédure de mise à niveau 11.10.348, « [Mise à niveau vers la dernière version](/enterprise/11.10.340/admin/articles/upgrading-to-the-latest-release/) ».

Pour effectuer une mise à niveau vers la dernière version de {% data variables.product.prodname_enterprise %}, vous devez d’abord migrer vers {% data variables.product.prodname_ghe_server %} 2.1, puis suivre le processus de mise à niveau normal. Pour plus d’informations, consultez « [Mise à niveau de {% data variables.product.prodname_enterprise %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/) ».

## Se préparer à la migration

1. Consultez le guide de provisionnement et d’installation et vérifiez que tous les prérequis nécessaires au provisionnement et à la configuration de {% data variables.product.prodname_enterprise %} 2.1.23 dans votre environnement sont respectés. Pour plus d’informations, consultez « [Provisionnement et installation](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/) ».
2. Vérifiez que l’instance active exécute une version de mise à niveau prise en charge.
3. Configurez la dernière version de {% data variables.product.prodname_enterprise_backup_utilities %}. Pour plus d’informations, consultez [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils).
    - Si vous avez déjà configuré des sauvegardes planifiées à l’aide de {% data variables.product.prodname_enterprise_backup_utilities %}, vérifiez que vous avez procédé à une mise à jour vers la dernière version.
    - Si vous n’exécutez pas actuellement de sauvegardes planifiées, configurez {% data variables.product.prodname_enterprise_backup_utilities %}.
4. Capturez un instantané initial de sauvegarde complète de l’instance active à l’aide de la commande `ghe-backup`. Si vous avez déjà configuré des sauvegardes planifiées pour votre instance active, vous n’avez pas besoin de capturer un instantané de votre instance.

   {% tip %}

   **Conseil :** Vous pouvez laisser l’instance en ligne et en activité pendant la capture de l’instantané. Vous capturerez un autre instantané durant la phase de maintenance de la migration. Sachant que les sauvegardes sont incrémentielles, cet instantané initial limite la quantité de données transférées dans l’instantané final, ce qui peut raccourcir la fenêtre de maintenance.

   {% endtip %}

5. Déterminez la méthode pour aiguiller le trafic réseau utilisateur vers la nouvelle instance. Après avoir effectué la migration, l’ensemble du trafic réseau HTTP et Git est dirigé vers la nouvelle instance.
    - **DNS** – Nous recommandons cette méthode pour tous les environnements, car elle est simple et fonctionne bien même quand il s’agit de migrer d’un centre de données vers un autre. Avant de commencer la migration, réduisez la durée de vie TTL de l’enregistrement DNS existant à cinq minutes ou moins et autorisez que la modification se propage. Une fois la migration terminée, mettez à jour les enregistrements DNS pour les faire pointer vers l’adresse IP de la nouvelle instance.
    - **Attribution d’adresse IP** – Cette méthode est disponible uniquement dans le cadre d’une migration de VMware vers VMware et n’est pas recommandée, sauf si la méthode DNS n’est pas disponible. Avant de commencer la migration, vous devez arrêter l’ancienne instance et affecter son adresse IP à la nouvelle instance.
6. Planifiez une fenêtre de maintenance. La fenêtre de maintenance doit être suffisamment longue pour permettre le transfert de données de l’hôte de sauvegarde vers la nouvelle instance, qui variera en fonction de la taille de l’instantané de sauvegarde et de la bande passante réseau disponible. Pendant la migration vers la nouvelle instance, votre instance active sera indisponible et en mode maintenance.

## Effectuer la migration

1. Provisionnez une nouvelle instance {% data variables.product.prodname_enterprise %} 2.1. Pour plus d’informations, consultez le guide « [Provisionnement et installation](/enterprise/2.1/admin/guides/installation/provisioning-and-installation/) » pour votre plateforme cible.
2. Dans un navigateur, accédez à l’adresse IP de la nouvelle appliance réplica et chargez votre licence {% data variables.product.prodname_enterprise %}.
3. Définissez un mot de passe d’administrateur.
5. Cliquez sur **Migrer**.
![Choix du type d’installation](/assets/images/enterprise/migration/migration-choose-install-type.png)
6. Collez votre clé SSH d’accès à l’hôte de sauvegarde dans « Ajouter une nouvelle clé SSH ».
![Autorisation de la sauvegarde](/assets/images/enterprise/migration/migration-authorize-backup-host.png)
7. Cliquez sur **Ajouter la clé**, puis sur **Continuer**.
8. Copiez la commande `ghe-restore` que vous allez exécuter sur l’hôte de sauvegarde pour migrer les données vers la nouvelle instance.
![Démarrage d’une migration](/assets/images/enterprise/migration/migration-restore-start.png)
9. Activez le mode maintenance sur l’ancienne instance et attendez que tous les processus actifs se terminent. Pour plus d’informations, consultez « [Activation et planification du mode maintenance](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode) ».

  {% note %}

  **Remarque :** L’instance ne pourra pas être utilisée normalement à partir de cet instant.

  {% endnote %}

10. Sur l’hôte de sauvegarde, exécutez la commande `ghe-backup` pour capturer un instantané de sauvegarde final. Vous serez ainsi assuré que toutes les données de l’ancienne instance seront capturées.
11. Sur l’hôte de sauvegarde, exécutez la commande `ghe-restore` que vous avez copiée dans l’écran d’état de restauration de la nouvelle instance pour restaurer le dernier instantané.
  ```shell
  $ ghe-restore 169.254.1.1
  The authenticity of host '169.254.1.1:122' can't be established.
  RSA key fingerprint is fe:96:9e:ac:d0:22:7c:cf:22:68:f2:c3:c9:81:53:d1.
  Are you sure you want to continue connecting (yes/no)? yes
  Connect 169.254.1.1:122 OK (v2.0.0)
  Starting restore of 169.254.1.1:122 from snapshot 20141014T141425
  Restoring Git repositories ...
  Restoring GitHub Pages ...
  Restoring asset attachments ...
  Restoring hook deliveries ...
  Restoring MySQL database ...
  Restoring Redis database ...
  Restoring SSH authorized keys ...
  Restoring Elasticsearch indices ...
  Restoring SSH host keys ...
  Completed restore of 169.254.1.1:122 from snapshot 20141014T141425
  Visit https://169.254.1.1/setup/settings to review appliance configuration.
  ```

12. Revenez à l’écran d’état de restauration de la nouvelle instance pour vérifier que la restauration a bien abouti.
![Écran indiquant la fin de la restauration](/assets/images/enterprise/migration/migration-status-complete.png)
13. Cliquez sur **Continuer vers les paramètres** pour examiner et ajuster les informations et les paramètres de configuration importés à partir de l’instance précédente.
![Vérification des paramètres importés](/assets/images/enterprise/migration/migration-status-complete.png)
14. Cliquez sur **Enregistrer les paramètres**.

  {% note %}

  **Remarque :** Vous pouvez utiliser la nouvelle instance après avoir appliqué les paramètres de configuration et redémarré le serveur.

  {% endnote %}

15. Aiguillez le trafic réseau utilisateur de l’ancienne instance vers la nouvelle instance via l’affectation DNS ou d’adresse IP.
16. Effectuez une mise à niveau vers la dernière version corrective de {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [Mise à niveau de {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/upgrading-github-enterprise-server/) ».
