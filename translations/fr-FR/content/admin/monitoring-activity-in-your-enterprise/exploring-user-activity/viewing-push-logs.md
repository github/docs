---
title: Visualisation des journaux de poussées
intro: Les administrateurs de site peuvent afficher la liste des opérations Push Git pour n’importe quel référentiel de l’entreprise.
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
  - /admin/user-management/viewing-push-logs
  - /admin/user-management/monitoring-activity-in-your-enterprise/viewing-push-logs
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
ms.openlocfilehash: c759d380b7cbc54918e87ed354c8264bc533c31b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104830'
---
Les entrées des journaux de poussées (push) indiquent :

- Qui a initié la poussée
- S’il s’agit d’une poussée forcée ou non
- La branche sur laquelle la poussée a été effectuée
- Le protocole utilisé pour la poussée
- L’adresse IP d’origine
- Le client Git utilisé pour la poussée
- Les codes de hachage SHA avant et après l’opération

## Visualisation des journaux de poussées d’un dépôt

1. Connectez-vous à {% data variables.product.prodname_ghe_server %} en tant qu’administrateur de site.
1. Accédez à un dépôt.
1. Dans le coin supérieur droit de la page du dépôt, cliquez sur {% octicon "rocket" aria-label="The rocket ship" %}.
    ![Icône de fusée pour l’accès aux paramètres d’administration de site](/assets/images/enterprise/site-admin-settings/access-new-settings.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
4. Dans le volet gauche, cliquez sur **Journal de poussées**.
![Onglet Journal de poussées](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% ifversion ghes %}
## Visualisation des journaux de poussées d’un dépôt sur la ligne de commande

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Dans le dépôt Git concerné, ouvrez le fichier journal d’audit :
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "cat audit_log"
  ```
{% endif %}
