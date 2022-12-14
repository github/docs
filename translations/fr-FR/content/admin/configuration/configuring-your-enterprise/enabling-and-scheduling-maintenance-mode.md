---
title: Activation et planification du mode de maintenance
intro: 'Certaines procédures de maintenance standard, par exemple la mise à niveau de {% data variables.product.product_location %} ou la restauration de sauvegardes, nécessitent la mise hors connexion de l’instance pour fonctionner normalement.'
redirect_from:
  - /enterprise/admin/maintenance-mode
  - /enterprise/admin/categories/maintenance-mode
  - /enterprise/admin/articles/maintenance-mode
  - /enterprise/admin/articles/enabling-maintenance-mode
  - /enterprise/admin/articles/disabling-maintenance-mode
  - /enterprise/admin/guides/installation/maintenance-mode
  - /enterprise/admin/installation/enabling-and-scheduling-maintenance-mode
  - /enterprise/admin/configuration/enabling-and-scheduling-maintenance-mode
  - /admin/configuration/enabling-and-scheduling-maintenance-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Maintenance
  - Upgrades
shortTitle: Configure maintenance mode
ms.openlocfilehash: 45ac412b1ae13e69d710c4dd93072143f6ffa502
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331767'
---
## À propos du mode de maintenance

Certains types d’opérations vous imposent de mettre {% data variables.product.product_location %} en mode hors connexion et de le passer en mode maintenance :
- Mise à niveau vers une nouvelle version de {% data variables.product.prodname_ghe_server %}
- Accroissement des ressources de processeur, de mémoire ou de stockage allouées à la machine virtuelle
- Migration de données d’une machine virtuelle vers une autre
- Restauration de données à partir d’un instantané {% data variables.product.prodname_enterprise_backup_utilities %}
- Résolution de certains types de problèmes d’application critiques

Nous vous recommandons dans l’avenir de planifier une fenêtre de maintenance d’au moins 30 minutes pour laisser le temps aux utilisateurs de se préparer. Quand une fenêtre de maintenance est planifiée, tous les utilisateurs voient une bannière au moment d’accéder au site.



![Bannière d’utilisateur final sur la maintenance planifiée](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

Quand l’instance est en mode maintenance, tous les accès HTTP et Git normaux sont refusés. Les opérations Git de récupération (fetch), de clonage et d’envoi (push) sont également rejetées avec un message d’erreur indiquant que le site est temporairement indisponible. Dans les configurations à haute disponibilité, la réplication Git est suspendue. Les travaux GitHub Actions ne sont pas exécutés. La visite du site dans un navigateur entraîne l’affichage d’une page de maintenance.

![Écran de démarrage du mode maintenance](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

{% ifversion ip-exception-list %}

Vous pouvez effectuer la validation initiale de votre opération de maintenance en configurant une liste d’exceptions IP pour autoriser l’accès à {% data variables.product.product_location %} uniquement à partir des adresses IP et des plages fournies. Les tentatives d’accès à {% data variables.product.product_location %} à partir d’adresses IP non spécifiées dans la liste d’exceptions IP reçoivent une réponse cohérente avec celles envoyées lorsque l’instance est en mode maintenance. 

{% endif %}

## Activation immédiate du mode maintenance ou planification d’une fenêtre de maintenance ultérieure

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Dans la partie supérieure de la {% data variables.enterprise.management_console %}, cliquez sur **Maintenance**.
  ![Onglet Maintenance](/assets/images/enterprise/management-console/maintenance-tab.png)
3. Sous « Activer et planifier », choisissez entre une activation immédiate du mode maintenance ou la planification d’une fenêtre de maintenance ultérieure.
    - Pour une activation immédiate du mode maintenance, utilisez le menu déroulant, puis cliquez sur **maintenant**.
    ![Menu déroulant avec l’option permettant d’activer le mode maintenance maintenant sélectionnée](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - Pour planifier une fenêtre de maintenance à un moment ultérieur, utilisez le menu déroulant et cliquez sur une heure de début.
    ![Menu déroulant avec l’option permettant de planifier une fenêtre de maintenance dans deux heures sélectionnée](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. Sélectionnez **Activer le mode maintenance**.
  ![Case à cocher permettant d’activer ou de planifier le mode maintenance](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ip-exception-list %}

## Validation des modifications en mode maintenance à l’aide de la liste d’exceptions IP

La liste des exceptions IP fournit un accès contrôlé et restreint à {% data variables.product.product_location %}, ce qui est idéal pour la validation initiale de l’intégrité du serveur après une opération de maintenance. Une fois activé,{% data variables.product.product_location %} sera supprimé du mode de maintenance et disponible uniquement pour les adresses IP configurées. La case à cocher du mode de maintenance est mise à jour pour refléter le changement d’état.

Si vous réactivez le mode de maintenance, la liste des exceptions IP est désactivée et {% data variables.product.product_location %} retourne en mode de maintenance. Si vous désactivez simplement la liste d’exceptions IP, {% data variables.product.product_location %} retrouve son fonctionnement normal.

Vous pouvez également utiliser un utilitaire en ligne de commande pour configurer la liste d’exceptions IP. Pour plus d’informations, consultez « [Utilitaires en ligne de commande](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-maintenance) » et « [Accès à l’interpréteur de commandes (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh) ».

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. En haut de {% data variables.enterprise.management_console %}, cliquez sur **Maintenance**, puis vérifiez que le mode de maintenance est déjà activé.
  ![Onglet Maintenance](/assets/images/enterprise/management-console/maintenance-tab.png)
1. Sélectionnez **Activer la liste des exceptions IP**.
 ![Case à cocher pour activer la liste des exceptions IP](/assets/images/enterprise/maintenance/enable-ip-exception-list.png)
1. Dans la zone de texte, entrez une liste valide d’adresses IP séparées par un espace ou de blocs CIDR qui doivent être autorisés à accéder à {% data variables.product.product_location %}.
 ![champ rempli pour les adresses IP](/assets/images/enterprise/maintenance/ip-exception-list-ip-addresses.png)
1. Cliquez sur **Enregistrer**.
![après enregistrement de la liste des exceptions IP](/assets/images/enterprise/maintenance/ip-exception-save.png)

{% endif %}

## Planification du mode maintenance avec les {% data variables.product.prodname_enterprise_api %}

Vous pouvez planifier la maintenance pour différentes heures ou dates avec les {% data variables.product.prodname_enterprise_api %}. Pour plus d’informations, consultez « [Console de gestion](/enterprise/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode) ».

## Activation ou désactivation du mode de maintenance pour tous les nœuds d’un cluster

Avec l’utilitaire `ghe-cluster-maintenance`, vous pouvez définir ou annuler le mode maintenance pour chaque nœud d’un cluster.

```shell
$ ghe-cluster-maintenance -h
# Shows options
$ ghe-cluster-maintenance -q
# Queries the current mode
$ ghe-cluster-maintenance -s
# Sets maintenance mode
$ ghe-cluster-maintenance -u
# Unsets maintenance mode
```
