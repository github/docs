---
title: Tableau de bord d’administration de site
intro: '{% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %}'
redirect_from:
  - /enterprise/admin/articles/site-admin-dashboard
  - /enterprise/admin/installation/site-admin-dashboard
  - /enterprise/admin/configuration/site-admin-dashboard
  - /admin/configuration/site-admin-dashboard
versions:
  ghes: '*'
  ghae: '*'
type: reference
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: 5e845824a5216e43f1e4e8f7b73f08963ce1d71b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147763707'
---
Pour accéder au tableau de bord, dans l’angle supérieur droit de n’importe quelle page, cliquez sur {% octicon "rocket" aria-label="The rocket ship" %}.
![Icône de fusée donnant accès aux paramètres d’administration de site](/assets/images/enterprise/site-admin-settings/access-new-settings.png)

{% ifversion ghes or ghae %}

## Rechercher

Consultez cette section du tableau de bord d’administration de site pour rechercher des utilisateurs et des dépôts et pour interroger le [journal d’audit](#audit-log).

{% else %}

## Informations de licence et recherche

Consultez cette section du tableau de bord d’administration de site pour vérifier votre licence {% data variables.product.prodname_enterprise %} actuelle ; pour rechercher des utilisateurs et des dépôts ; et pour interroger le [journal d’audit](#audit-log).

{% endif %} {% ifversion ghes %}
## {% data variables.enterprise.management_console %}

Ici, vous pouvez lancer la {% data variables.enterprise.management_console %} pour gérer les paramètres de l’appliance virtuelle comme le domaine, l’authentification et SSL.
{% endif %}
## Explorer

Les données relatives à la [page des tendances][] de GitHub sont calculées pour des périodes d’une journée, d’une semaine et d’un mois pour les dépôts et les développeurs. Vous pouvez voir à quel moment ces données ont été mises en cache pour la dernière fois et mettre en file d’attente de nouveaux travaux de calcul de tendances à partir de la section **Explorer**.

  [page des tendances]: https://github.com/blog/1585-explore-what-is-trending-on-github

## Journal d’audit

{% data variables.product.product_name %} tient à jour un journal des actions auditées que vous pouvez interroger.

Par défaut, le journal d’audit affiche une liste de toutes les actions auditées dans un ordre chronologique inversé. Vous pouvez filtrer cette liste en entrant des paires clé-valeur dans la zone de texte **Requête**, puis en cliquant sur **Rechercher**, comme expliqué dans « [Recherche dans le journal d’audit de votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise) ».

Pour plus d’informations sur la journalisation d’audit en général, consultez « [À propos du journal d’audit de votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise) ». Pour obtenir la liste complète des actions auditées, consultez « [Événements du journal d’audit pour votre entreprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise) ».

## Rapports

Si vous avez besoin d’obtenir des informations sur les utilisateurs, les organisations et les dépôts de {% data variables.product.product_location %}, vous pouvez être tenté d’extraire des données JSON via l’[API GitHub](/rest). Malheureusement, vous n’êtes pas assuré d’en tirer toutes les données souhaitées et elle demande un certain bagage technique. Le tableau de bord d’administration de site propose une alternative avec sa section **Rapports**, d’où vous pouvez facilement télécharger des rapports CSV contenant la plupart des informations dont vous pouvez avoir besoin à propos des utilisateurs, des organisations et des dépôts.

Plus précisément, vous pouvez télécharger des rapports CSV qui listent

- tous les utilisateurs
- tous les utilisateurs actifs
- tous les [utilisateurs dormants](/admin/user-management/managing-dormant-users)
- tous les utilisateurs qui ont été suspendus
- toutes les organisations
- tous les dépôts

Vous pouvez aussi accéder à ces rapports par programmation via l’authentification HTTP standard avec un compte d’administrateur de site. Vous devez utiliser un jeton d’accès personnel avec l’étendue `site_admin`. Pour plus d’informations, consultez « [Création d’un jeton d’accès personnel](/github/authenticating-to-github/creating-a-personal-access-token) ».

Par exemple, voici comment télécharger le rapport « tous les utilisateurs » à l’aide de cURL :

```shell
curl -L -u <em>username</em>:<em>token</em> http(s)://<em>hostname</em>/stafftools/reports/all_users.csv
```

Pour accéder aux autres rapports par programmation, remplacez `all_users` par `active_users`, `dormant_users`, `suspended_users`, `all_organizations` ou `all_repositories`.

{% note %}

**Remarque :** La demande initiale `curl` retourne une réponse HTTP 202 si aucun rapport mis en cache n’est disponible ; un rapport est généré en arrière-plan. Vous pouvez envoyer une deuxième demande pour télécharger le rapport. Vous pouvez utiliser un mot de passe ou un jeton OAuth avec l’étendue `site_admin` à la place d’un mot de passe.

{% endnote %}

### Rapports utilisateur

Clé               | Description
-----------------:| ------------------------------------------------------------
`created_at`      | Date/heure de création du compte d’utilisateur (horodatage ISO 8601)
`id`              | ID de compte de l’utilisateur ou de l’organisation
`login`           | Nom de connexion du compte
`email`           | Adresse e-mail principale du compte
`role`            | Indique si le compte est de type administrateur ou utilisateur ordinaire
`suspended?`      | Indique si le compte a été suspendu
`last_logged_ip`  | Dernière adresse IP à s’être connectée au compte
`repos`           | Nombre de dépôts dont le compte est propriétaire
`ssh_keys`        | Nombre de clés SSH inscrites au niveau du compte
`org_memberships` | Nombre d’organisations auxquelles le compte appartient
`dormant?`        | Indique si le compte est dormant
`last_active`     | Date/heure auxquelles le compte a été actif pour la dernière fois (horodatage ISO 8601)
`raw_login`       | Informations de connexion brutes (au format JSON)
`2fa_enabled?`    | Indique si l’utilisateur a activé l’authentification à 2 facteurs

### Rapports d’organisation

Clé            | Description
--------------:| ------------------------------------
`id`           | ID d’organisation
`created_at`   | Date/heure de création de l’organisation
`login`        | Nom de connexion de l’organisation
`email`        | Adresse e-mail principale de l’organisation
`owners`       | Nombre de propriétaires de l’organisation
`members`      | Nombre de membres de l’organisation
`teams`        | Nombre d’équipes de l’organisation
`repos`        | Nombre de dépôts de l’organisation
`2fa_required?`| Indique si l’organisation exige une authentification à 2 facteurs

### Rapports de dépôt

Clé             | Description
---------------:| ------------------------------------------------------------
`created_at`    | Date/heure de création du dépôt
`owner_id`      | ID du propriétaire du dépôt
`owner_type`    | Indique si le dépôt est la propriété d’un utilisateur ou d’une organisation
`owner_name`    | Nom du propriétaire du dépôt
`id`            | ID du dépôt
`name`          | Nom du dépôt
`visibility`    | Indique si le dépôt est public ou privé
`readable_size` | Taille du dépôt dans un format compréhensible
`raw_size`      | Taille du dépôt sous forme de nombre
`collaborators` | Nombre de collaborateurs dans le dépôt
`fork?`         | Indique si le dépôt est une duplication (fork)
`deleted?`      | Indique si le dépôt a été supprimé

{% ifversion ghes %}
## Indexation

Les fonctionnalités de recherche de GitHub sont basées sur la technologie Elasticsearch. Cette section du tableau de bord d’administration de site vous montre l’état actuel de votre cluster Elasticsearch et vous propose plusieurs outils permettant de contrôler le comportement de la recherche et de l’indexation.

Pour plus d’informations sur la recherche de code, consultez « [Recherche d’informations sur {% data variables.product.prodname_dotcom %}](/search-github) ». Pour plus d’informations sur Elasticsearch, consultez le [site web d’Elasticsearch](https://elastic.co).

{% note %}

**Remarque** : Dans le cadre d’une utilisation normale, les administrateurs de site n’ont pas besoin de créer de nouveaux index ni de planifier des travaux de réparation. Dans le cadre d’une assistance, {% data variables.contact.github_support %} peut vous demander d’exécuter un travail de réparation.

{% endnote %}

### Gestion des index

{% data variables.product.product_name %} rapproche l’état de l’index de recherche et les données de l’instance automatiquement et régulièrement.

- Problèmes, demandes de tirage, dépôts et utilisateurs dans la base de données
- Dépôts Git (code source) sur disque

Votre instance utilise des travaux de réparation pour rapprocher les données et planifier un travail de réparation en arrière-plan lorsque les événements suivants se produisent.

- Un index de recherche est créé.
- Des données manquantes doivent être provisionnées.
- D’anciennes données de recherche doivent être mises à jour.

Vous pouvez créer un index ou cliquer sur un index existant dans la liste afin de le gérer. Vous pouvez effectuer les opérations suivantes sur un index.

- Rendre l’index recherchable.
- Rendre l’index accessible en écriture.
- Mettre à jour l’index.
- Supprimer l’index.
- Réinitialiser l’état de réparation de l’index.
- Démarrer un nouveau travail de réparation d’index.
- Activer ou désactiver les travaux de réparation d’index.

Une barre de progression affiche l’état actuel d’un travail de réparation pour l’ensemble des Workers en arrière-plan. Cette barre correspond à la différence en pourcentage du décalage de réparation avec l’ID d’enregistrement le plus élevé dans la base de données. Vous pouvez ignorer la valeur affichée dans la barre de progression une fois que la tâche de réparation est terminée. La barre de progression montre la différence entre le décalage de réparation et l’ID d’enregistrement le plus élevé dans la base de données. Elle diminuera à mesure que d’autres dépôts seront ajoutés à {% data variables.product.product_location %}, même si ces dépôts sont réellement indexés.

Pour limiter les effets sur le niveau de performance en E/S et réduire les risques d’expiration des opérations, exécutez un travail de réparation pendant les heures creuses. Un seul processeur est utilisé pendant que le travail rapproche l’index de recherche et les données de la base de données et du dépôt Git. Monitorez les moyennes de charge et l’utilisation processeur de votre système avec un utilitaire comme `top`. Si vous ne remarquez aucune augmentation significative de la consommation des ressources, cela signifie que vous pouvez sans problème exécuter un travail de réparation d’index pendant les heures de pointe.

Les travaux de réparation utilisent un « décalage de réparation » pour la parallélisation. Il s’agit d’un décalage dans la table de base de données pour l’enregistrement faisant l’objet d’un rapprochement. Plusieurs travaux en arrière-plan peuvent synchroniser le travail en fonction de ce décalage.

### Recherche de code

L’objectif est ici de vous permettre d’activer ou de désactiver les opérations de recherche et d’indexation dans le code source.

{% endif %}
## Connexions réservées

Certains mots sont réservés à une utilisation interne dans {% data variables.product.product_location %}, ce qui signifie que ces mots ne peuvent pas être utilisés comme noms d’utilisateurs.

Voici quelques exemples de mots réservés :

- `admin`
- `enterprise`
- `login`
- `staff`
- `support`

Pour obtenir la liste complète des mots réservés, accédez à « Connexions réservées » dans le tableau de bord d’administration de site.

{% ifversion ghas-committers-calculator %}
## {% data variables.product.prodname_advanced_security %} Committers

Vous pouvez voir le nombre de validateurs actifs qui utilisent actuellement des sièges pour {% data variables.product.prodname_GH_advanced_security %}, et vous pouvez calculer le nombre de sièges supplémentaires qui seraient utilisés si vous activiez {% data variables.product.prodname_GH_advanced_security %} pour d’autres organisations et dépôts.

Sous « Nombre actuel de validateurs actifs », vous pouvez voir le nombre de validateurs actifs des dépôts sur lesquels {% data variables.product.prodname_GH_advanced_security %} est activée. Il s’agit du nombre de sièges sous licence qui sont actuellement utilisés.

Sous « Nombre maximum de validateurs sur l’ensemble de l’instance », vous pouvez voir le nombre de validateurs actifs utilisés dans tous les dépôts de votre entreprise. Il s’agit du nombre de sièges qui seraient utilisés si vous activiez {% data variables.product.prodname_GH_advanced_security %} pour chaque dépôt de votre entreprise.

Sous « Calculer les validateurs avancés supplémentaires », vous pouvez calculer le nombre de sièges supplémentaires qui seront utilisés si vous activez {% data variables.product.prodname_GH_advanced_security %} pour des organisations et des dépôts spécifiques. Sous « Organisations et dépôts », entrez ou collez une liste d’organisations et de dépôts, avec une organisation ou un dépôt par ligne. 

```
example-org
octo-org/octo-repo
```

Le résultat indique le nombre de sièges supplémentaires qui seraient utilisés si vous activiez {% data variables.product.prodname_GH_advanced_security %} pour ces organisations et dépôts.

Pour plus d’informations sur la facturation de la {% data variables.product.prodname_advanced_security %}, consultez « [À propos de la {% data variables.product.prodname_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security) ».
{% endif %}

## Vue d’ensemble de l’entreprise

Consultez cette section du tableau de bord d’administration de site pour gérer les organisations, les personnes, les stratégies et les paramètres.

## Référentiels

Il s’agit de la liste des dépôts de {% data variables.product.product_location %}. Vous pouvez cliquer sur un nom de dépôt et accéder à des fonctions permettant d’administrer le dépôt.

- [Blocage des envois (push) forcés vers un dépôt](/enterprise/admin/guides/developer-workflow/blocking-force-pushes-to-a-repository/)
- [Configuration de {% data variables.large_files.product_name_long %}](/enterprise/admin/guides/installation/configuring-git-large-file-storage/#configuring-git-large-file-storage-for-an-individual-repository)
- [Archivage et désarchivage des dépôts](/enterprise/admin/guides/user-management/archiving-and-unarchiving-repositories/)

## tous les utilisateurs

Ici, vous pouvez voir tous les utilisateurs de {% data variables.product.product_location %} et [lancer un audit de clé SSH](/enterprise/admin/guides/user-management/auditing-ssh-keys).

## Administrateurs de site

Ici, vous pouvez voir tous les administrateurs de {% data variables.product.product_location %} et [lancer un audit de clé SSH](/enterprise/admin/guides/user-management/auditing-ssh-keys).

## Utilisateurs dormants
{% ifversion ghes %} Ici, vous pouvez voir et [suspendre](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) tous les utilisateurs inactifs de {% data variables.product.product_location %}. Un compte d’utilisateur est considéré comme inactif (« dormant ») dans les cas suivants : {% endif %} {% ifversion ghae %} Ici, vous pouvez voir et suspendre tous les utilisateurs inactifs de {% data variables.product.product_location %}. Un compte d’utilisateur est considéré comme inactif (« dormant ») dans les cas suivants : {% endif %}

- Il a dépassé le seuil de dormance défini pour {% data variables.product.product_location %}.
- Il n’a généré aucune activité au cours de cette période.
- Il n’est pas administrateur de site.

{% data reusables.enterprise_site_admin_settings.dormancy-threshold %} Pour plus d’informations, consultez « [Gestion des utilisateurs dormants](/enterprise/admin/guides/user-management/managing-dormant-users/#configuring-the-dormancy-threshold) ».

## Utilisateurs suspendus

Ici, vous pouvez voir tous les utilisateurs qui ont été suspendus dans {% data variables.product.product_location %} et [lancer un audit de clé SSH](/enterprise/admin/guides/user-management/auditing-ssh-keys).
