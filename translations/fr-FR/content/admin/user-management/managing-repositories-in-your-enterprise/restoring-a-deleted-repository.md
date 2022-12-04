---
title: Restauration d’un dépôt supprimé
intro: Vous pouvez restaurer des dépôts supprimés pour en récupérer le contenu.
permissions: Enterprise owners can restore a deleted repository.
versions:
  ghes: '*'
  ghae: '*'
topics:
  - Enterprise
  - Privacy
  - Repositories
shortTitle: Restore a deleted repository
ms.openlocfilehash: 538521e865b6a59c1d143a9774d7a462f5e4ee42
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146199785'
---
## À propos de la restauration de dépôt

En règle générale, si quelqu’un supprime un dépôt, celui-ci reste disponible sur disque pendant 90 jours et peut être restauré par le biais du tableau de bord d’administrateur de site. Pour plus d’informations, consultez « [Tableau de bord d’administration de site](/admin/configuration/configuring-your-enterprise/site-admin-dashboard) ».

Sauf si un utilisateur ou une organisation fait actuellement l’objet d’un archivage juridique, le dépôt est vidé et définitivement supprimé au bout de 90 jours.

Si un dépôt faisait partie d’un réseau de duplications (fork) au moment de sa suppression, le dépôt restauré sera détaché du réseau de duplications d’origine.

Quand un dépôt est supprimé, il peut s’écouler jusqu’à une heure avant qu’il ne soit disponible pour restauration.

La restauration d’un dépôt ne restaure pas les pièces jointes de mise en production ni les autorisations d’équipe. Les problèmes restaurés ne seront pas étiquetés.

## Restauration d’un dépôt supprimé

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.search-user-or-org %} {% data reusables.enterprise_site_admin_settings.click-user-or-org %}
1. Dans la section **Dépôts** en regard de {% octicon "repo" aria-label="The repo icon" %}, cliquez sur le lien **Dépôts supprimés** en regard de {% octicon "trash" aria-label="The trash icon" %}.
1. Recherchez le dépôt que vous souhaitez restaurer dans la liste des dépôts supprimés, puis, à droite du nom du dépôt, cliquez sur **Restaurer**.
1. Pour confirmer que vous souhaitez restaurer le dépôt nommé, cliquez sur **Restaurer**.

## Pour aller plus loin

- « [Application d’un archivage juridique pour un utilisateur ou une organisation](/admin/user-management/managing-users-in-your-enterprise/placing-a-legal-hold-on-a-user-or-organization) »
