---
title: Configuration des sauvegardes sur votre appliance
shortTitle: Configuring backups
redirect_from:
  - /enterprise/admin/categories/backups-and-restores
  - /enterprise/admin/articles/backup-and-recovery
  - /enterprise/admin/articles/backing-up-github-enterprise
  - /enterprise/admin/articles/restoring-github-enterprise
  - /enterprise/admin/articles/backing-up-repository-data
  - /enterprise/admin/articles/restoring-enterprise-data
  - /enterprise/admin/articles/restoring-repository-data
  - /enterprise/admin/articles/backing-up-enterprise-data
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-backups-on-your-appliance
intro: 'Dans le cadre d’un plan de reprise d’activité après sinistre, vous pouvez protéger les données de production sur {% data variables.product.product_location %} en configurant des sauvegardes automatisées.'
versions:
  ghes: '*'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: 4403ec24aa3da63f6700ae4bfcd2392ec0cfd194
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147861651'
---
## À propos de {% data variables.product.prodname_enterprise_backup_utilities %}

{% data variables.product.prodname_enterprise_backup_utilities %} est un système de sauvegarde que vous installez sur un hôte distinct, qui effectue des captures instantanées de sauvegarde de {% data variables.product.product_location %} à intervalles réguliers via une connexion réseau SSH sécurisée. Vous pouvez utiliser un instantané pour restaurer une instance existante de {% data variables.product.prodname_ghe_server %} dans un état précédent à partir de l’hôte de sauvegarde.

Seules les données ajoutées depuis le dernier instantané sont transférées sur le réseau et occupent un espace de stockage physique supplémentaire. Pour réduire l’impact sur les performances, les sauvegardes sont effectuées en ligne selon la priorité processeur/entrées-sorties la plus faible. Vous n’avez pas besoin de planifier une fenêtre de maintenance pour effectuer une sauvegarde.

Les versions principales et les numéros de version pour {% data variables.product.prodname_enterprise_backup_utilities %} s’alignent sur les mises en production de fonctionnalités de {% data variables.product.product_name %}. Nous prenons en charge les quatre versions les plus récentes des deux produits. Pour plus d’informations, consultez « [{% data variables.product.product_name %} mises en production](/admin/all-releases) ».

Pour plus d’informations sur les fonctionnalités, les exigences et l’utilisation avancée, consultez le [fichier README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme) dans la documentation du projet {% data variables.product.prodname_enterprise_backup_utilities %}.

## Prérequis

Pour utiliser {% data variables.product.prodname_enterprise_backup_utilities %}, vous devez disposer d’un système hôte Linux ou Unix distinct de {% data variables.product.product_location %}.

Vous pouvez aussi intégrer {% data variables.product.prodname_enterprise_backup_utilities %} dans un environnement existant pour le stockage permanent à long terme des données critiques.

L’hôte de sauvegarde et {% data variables.product.product_location %} doivent de préférence être géographiquement distants l’un de l’autre. Ainsi, les sauvegardes seront disponibles pour une récupération si un sinistre ou une panne réseau de grande ampleur se produit sur le site principal.

Les besoins en stockage physique varieront en fonction de l’utilisation disque des dépôts Git et des modèles de croissance attendus :

| Matériel | Recommandation |
| -------- | --------- |
| **Processeurs virtuels**  | 2 |
| **Mémoire** | 2 Go |
| **Stockage** | Cinq fois le stockage alloué à l’instance principale |

Selon votre utilisation en termes par exemple d’activité des utilisateurs et d’intégrations sélectionnées, des ressources supplémentaires peuvent s’avérer nécessaires.

Pour plus d’informations, consultez [Exigences de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils/blob/master/docs/requirements.md) dans la documentation du projet {% data variables.product.prodname_enterprise_backup_utilities %}.

## Installation de {% data variables.product.prodname_enterprise_backup_utilities %}

Pour installer {% data variables.product.prodname_enterprise_backup_utilities %} sur votre hôte de sauvegarde, nous vous recommandons de cloner le dépôt Git du projet. Cette approche vous permet d’extraire les nouvelles mises en production directement à l’aide de Git, et votre fichier de configuration de sauvegarde existant, `backup.config`, sera conservé lors de l’installation d’une nouvelle version.

Sinon, si l’ordinateur hôte ne peut pas accéder à Internet, vous pouvez télécharger chaque mise en production de {% data variables.product.prodname_enterprise_backup_utilities %} en tant qu’archive compressée, puis extraire et installer le contenu. Pour plus d’informations, consultez [Bien démarrer](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) dans la documentation du projet {% data variables.product.prodname_enterprise_backup_utilities %}.

Les instantanés de sauvegarde sont écrits dans le chemin du disque défini par la variable de répertoire de données `GHE_DATA_DIR` dans votre fichier `backup.config`. Les instantanés doivent être stockés sur un système de fichiers qui prend en charge les liens symboliques et physiques.

{% note %}

**Remarque :** Nous vous recommandons de veiller à ce que vos instantanés ne soient pas conservés dans un sous-répertoire du répertoire d’installation {% data variables.product.prodname_enterprise_backup_utilities %}, pour éviter de remplacer par inadvertance votre répertoire de données lors de la mise à niveau des versions de {% data variables.product.prodname_enterprise_backup_utilities %}.

{% endnote %}

1. Pour cloner le dépôt de projet [{% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils/) dans un répertoire local sur votre hôte de sauvegarde, exécutez la commande suivante.

  ```
  $ git clone https://github.com/github/backup-utils.git /path/to/target/directory/backup-utils
  ```
1. Pour basculer vers le répertoire du dépôt local, exécutez la commande suivante.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. Pour copier le fichier `backup.config-example` inclus dans `backup.config`, exécutez la commande suivante.

   ```shell
   cp backup.config-example backup.config
   ```
1. Pour personnaliser votre configuration, modifiez `backup.config` dans un éditeur de texte.
   1. Définissez la valeur de `GHE_HOSTNAME` sur le nom d’hôte ou l’adresse IP de votre instance principale {% data variables.product.prodname_ghe_server %}.

     {% note %}

     **Remarque :** Si {% data variables.product.product_location %} est déployée en tant que cluster ou dans une configuration à haute disponibilité utilisant un équilibreur de charge, le `GHE_HOSTNAME` peut être le nom d’hôte de l’équilibreur de charge, dans la mesure où il autorise l’accès SSH (sur le port 122) à {% data variables.product.product_location %}.

     Pour faire en sorte qu’une appliance récupérée soit immédiatement disponible, effectuez des sauvegardes ciblant l’instance principale, même dans une configuration de géoréplication.

     {% endnote %}
   1. Définissez la valeur de `GHE_DATA_DIR` sur l’emplacement du système de fichiers où vous souhaitez stocker les instantanées de sauvegarde. Nous vous recommandons de choisir un emplacement sur le même système de fichiers que votre hôte de sauvegarde, mais en dehors de l’emplacement où vous avez cloné le dépôt Git à l’étape 1.
1. Pour accorder à votre hôte de sauvegarde l’accès à votre instance, ouvrez la page des paramètres de votre instance principale à `http(s)://HOSTNAME/setup/settings` et ajoutez la clé SSH de l’hôte de sauvegarde à la liste des clés SSH autorisées. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh) ».
1. Sur votre hôte de sauvegarde, vérifiez la connectivité SSH avec {% data variables.product.product_location %} avec la commande `ghe-host-check`.

  ```shell
  ./bin/ghe-host-check
  ```         
1. Pour créer une sauvegarde complète initiale, exécutez la commande suivante.

  ```shell
  ./bin/ghe-backup
  ```

Pour plus d’informations sur l’utilisation avancée, consultez le [fichier README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme) dans la documentation du projet {% data variables.product.prodname_enterprise_backup_utilities %}.

## Mise à niveau de {% data variables.product.prodname_enterprise_backup_utilities %}

Lors de la mise à niveau de {% data variables.product.prodname_enterprise_backup_utilities %}, vous devez choisir une mise en production qui fonctionnera avec votre version actuelle de {% data variables.product.product_name %}. Votre installation de {% data variables.product.prodname_enterprise_backup_utilities %} doit être au moins la même version que {% data variables.product.product_location %}, et ne peut pas avoir deux versions d’avance. Pour plus d’informations, consultez [Exigences de version {% data variables.product.prodname_ghe_server %}](https://github.com/github/backup-utils/blob/master/docs/requirements.md#github-enterprise-server-version-requirements) dans la documentation du projet {% data variables.product.prodname_enterprise_backup_utilities %}.
Vous pouvez mettre à niveau {% data variables.product.prodname_enterprise_backup_utilities %} dans un dépôt Git en récupérant et en extrayant les dernières modifications.

En guise d’alternative, si vous n’utilisez pas de dépôt Git pour votre installation, vous pouvez extraire une nouvelle archive en place ou changer votre approche de façon à utiliser un dépôt Git à la place.

### Vérification du type d’installation

Vous pouvez vérifier la méthode d’installation pour {% data variables.product.prodname_enterprise_backup_utilities %} et déterminer le meilleur moyen de mettre à niveau votre installation.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. Pour vérifier s’il existe un répertoire de travail valide dans un dépôt Git, exécutez la commande suivante.

   ```
   git rev-parse --is-inside-work-tree
   ```

   Si la sortie est `true`, {% data variables.product.prodname_enterprise_backup_utilities %} a été installé en clonant le dépôt Git du projet. Si la sortie inclut `fatal: not a git repository (or any of the parent directories)`, {% data variables.product.prodname_enterprise_backup_utilities %} a probablement été installé en extrayant un fichier d’archive compressé.
Si votre installation se trouve dans un dépôt Git, vous pouvez installer la dernière version à l’aide de Git. Si l’installation provient d’un fichier archive compressé, vous pouvez télécharger et extraire la dernière version, ou réinstaller {% data variables.product.prodname_enterprise_backup_utilities %} à l’aide de Git pour simplifier les mises à niveau futures.

- [Mise à niveau d’une installation dans un dépôt Git](#upgrading-an-installation-in-a-git-repository)
- [Utilisation de Git au lieu d’archives compressées pour les mises à niveau](#using-git-instead-of-compressed-archives-for-upgrades)

### Mise à niveau d’une installation dans un dépôt Git

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %} {% note %}

  **Remarque :** Nous vous recommandons de créer une copie de votre fichier `backup.config` existant dans un emplacement temporaire, comme `$HOME/backup.config`, avant de mettre à niveau {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% endnote %}

1. Téléchargez les dernières mises à jour du projet en exécutant la commande `git fetch`.

  ```shell
  git fetch
  ```

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %} {% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}

### Utilisation de Git au lieu d’archives compressées pour les mises à niveau

Si votre hôte de sauvegarde dispose d’une connectivité Internet et que vous avez déjà utilisé une archive compressée (`.tar.gz`) pour installer ou mettre à niveau {% data variables.product.prodname_enterprise_backup_utilities %}, nous vous recommandons d’utiliser plutôt un dépôt Git pour votre installation. La mise à niveau à l’aide de Git nécessite moins de travail et conserve votre configuration de sauvegarde.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. Pour sauvegarder votre configuration {% data variables.product.prodname_enterprise_backup_utilities %} existante, copiez votre fichier `backup.config` actuel dans un emplacement sécurisé, tel que votre répertoire d’accueil.

  ```
  $ cp backup.config $HOME/backup.config.saved-$(date +%Y%m%d-%H%M%S)
  ```

1. Basculez vers le répertoire local sur votre hôte de sauvegarde où vous souhaitez installer le dépôt Git {% data variables.product.prodname_enterprise_backup_utilities %} .
1. Pour cloner le [dépôt de projet](https://github.com/github/backup-utils/) dans le répertoire sur votre hôte de sauvegarde, exécutez la commande suivante.

  ```
  git clone https://github.com/github/backup-utils.git
  ```
1. Pour basculer vers le dépôt cloné, exécutez la commande suivante.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. Pour restaurer votre configuration de sauvegarde à partir d’une version antérieure, copiez votre fichier de configuration de sauvegarde existant dans le répertoire du dépôt local. Remplacez le chemin dans la commande par l’emplacement du fichier enregistré à l’étape 2.

  ```
  $ cp PATH/TO/BACKUP/FROM/STEP/2 backup.config
  ```
  
  {% note %}

  **Remarque :** Vous pouvez choisir où restaurer votre fichier de configuration de sauvegarde après le clonage. Pour plus d’informations sur l’emplacement des fichiers de configuration, consultez [Bien démarrer](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) dans la documentation du projet {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% endnote %}

1. Pour vérifier que les chemins des répertoires ou des scripts dans votre fichier de configuration de sauvegarde sont corrects, passez en revue le fichier dans un éditeur de texte.
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}
1. Supprimez votre ancien répertoire GitHub Enterprise Server Backup Utilities à l’étape 1 (où se trouvait l’installation d’archive compressée).

## Planification d'une sauvegarde

Vous pouvez planifier des sauvegardes régulières sur l’hôte de sauvegarde à l’aide de la commande `cron(8)` ou d’un service de planification de commandes similaire. La fréquence de sauvegarde configurée détermine l’objectif de point de récupération (RPO) dans le cas le plus défavorable dans votre plan de récupération. Par exemple, si vous avez planifié une exécution de la sauvegarde tous les jours à minuit, vous pouvez perdre jusqu’à 24 heures de données dans un scénario catastrophe. Nous vous recommandons de commencer avec une planification de sauvegarde horaire, garantissant ainsi dans le pire des cas une perte de données maximale d’une heure si les données du site principal sont détruites.

Si les tentatives de sauvegarde se chevauchent, la commande `ghe-backup` abandonne avec un message d’erreur indiquant l’existence d’une sauvegarde simultanée. En pareil cas, nous vous recommandons de diminuer la fréquence de vos sauvegardes planifiées. Pour plus d’informations, consultez la section « Planification des sauvegardes » du [fichier README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#scheduling-backups) dans la documentation du projet {% data variables.product.prodname_enterprise_backup_utilities %}.

## Restauration d’une sauvegarde

En cas de panne prolongée ou d’événement catastrophique sur le site principal, vous pouvez restaurer {% data variables.product.product_location %} en provisionnant une autre appliance {% data variables.product.prodname_enterprise %} et en effectuant une restauration à partir de l’hôte de sauvegarde. Vous devez ajouter la clé SSH de l’hôte de sauvegarde à l’appliance {% data variables.product.prodname_enterprise %} cible en tant que clé SSH autorisée avant de restaurer une appliance.

{% note %}

**Remarque :** Quand vous effectuez des restaurations de sauvegarde sur {% data variables.product.product_location %}, les mêmes règles de prise en charge des versions s’appliquent. Vous ne pouvez pas restaurer des données issues d’une mise en production de fonctionnalité antérieure de plus de deux versions.

Par exemple, si vous effectuez une sauvegarde à partir de {% data variables.product.product_name %} 3.0.x, vous pouvez restaurer la sauvegarde sur une instance {% data variables.product.product_name %} 3.2.x. Vous ne pouvez pas restaurer de données à partir d’une sauvegarde de {% data variables.product.product_name %} 2.22.x sur une instance exécutant 3.2.x, car il y aurait alors trois sauts entre les versions (2.22 à 3.0 à 3.1 à 3.2). Vous devrez d’abord restaurer sur une instance 3.1.x, puis effectuer une mise à niveau vers la version 3.2.x.

{% endnote %}

Pour restaurer {% data variables.product.product_location %} à partir de la dernière capture instantanée réussie, utilisez la commande `ghe-restore`.

{% note %}

**Remarque :** Avant de restaurer une sauvegarde, vérifiez ce qui suit :
- Le mode maintenance est activé sur l’instance principale et tous les processus actifs sont terminés. Pour plus d’informations, consultez « [Activation du mode maintenance](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/) ».
- La réplication est arrêtée sur tous les réplicas dans les configurations de haute disponibilité. Pour plus d’informations, consultez la commande `ghe-repl-stop` dans « [À propos de la configuration de haute disponibilité](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#ghe-repl-stop) ».
- Si {% data variables.product.prodname_actions %} est activé pour {% data variables.product.product_location %}, vous devez d’abord configurer le fournisseur de stockage externe {% data variables.product.prodname_actions %} sur l’appliance de remplacement. Pour plus d’informations, consultez « [Sauvegarde et restauration de {% data variables.product.prodname_ghe_server %} avec {% data variables.product.prodname_actions %} activé](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled) ».

{% endnote %}

Lors de l’exécution de la commande `ghe-restore`, une sortie similaire à celle-ci doit s’afficher :

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: <em>yes</em>

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% ifversion ip-exception-list %} Le cas échéant, pour valider la restauration, configurez une liste d’exceptions IP afin d’autoriser l’accès à une liste spécifique d’adresses IP. Pour plus d’informations, consultez « [Validation des modifications en mode maintenance à l’aide de la liste d’exceptions IP](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list) ».
{% endif %}

{% note %}

**Remarque :** Les paramètres réseau sont exclus de l’instantané de sauvegarde. Vous devez configurer manuellement le réseau sur l’appliance {% data variables.product.prodname_ghe_server %} cible comme l’exige votre environnement.

{% endnote %}

Voici les options supplémentaires que vous pouvez utiliser avec la commande `ghe-restore` :
- L’indicateur `-c` remplace les paramètres, le certificat et les données de licence sur l’hôte cible, même s’il est déjà configuré. Omettez cet indicateur si vous configurez une instance intermédiaire à des fins de test et que vous souhaitez conserver la configuration existante sur la cible. Pour plus d’informations, consultez la section « Utilisation de commandes de sauvegarde et de restauration » du [fichier README de {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#using-the-backup-and-restore-commands) dans la documentation du projet {% data variables.product.prodname_enterprise_backup_utilities %}.
- L’indicateur `-s` vous permet de sélectionner un autre instantané de sauvegarde.
