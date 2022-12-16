---
title: Gestion du nom de branche par défaut pour les dépôts de votre organisation
intro: 'Vous pouvez définir le nom de branche par défaut pour les dépôts que les membres créent dans votre organisation sur {% data variables.product.product_location %}.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-default-branch-name-for-repositories-in-your-organization
permissions: Organization owners can manage the default branch name for new repositories in the organization.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default branch name
ms.openlocfilehash: 38bd35506728f4437c9a1644235fe748c6a8a58a
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106249'
---
## À propos de la gestion du nom de branche par défaut

Quand un membre de votre organisation crée un dépôt dans votre organisation, ce dépôt contient une seule branche, qui correspond à la branche par défaut. Vous pouvez changer le nom que {% data variables.product.product_name %} utilise pour la branche par défaut dans les nouveaux dépôts que les membres de votre organisation créent. Pour plus d’informations sur la branche par défaut, consultez « [À propos des branches](/github/collaborating-with-issues-and-pull-requests/about-branches#about-the-default-branch) ».

{% data reusables.branches.change-default-branch %}

Si un propriétaire d’entreprise a appliqué une stratégie pour le nom de branche par défaut de votre entreprise, vous ne pouvez pas définir un nom de branche par défaut pour votre organisation. En revanche, vous pouvez changer la branche par défaut d’un dépôt individuel. Pour plus d’informations, consultez {% ifversion fpt %}« [Application de stratégies de gestion des dépôts dans votre entreprise](/enterprise-cloud@latest/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name) »{% else %}« [Application de stratégies de gestion des dépôts dans votre entreprise](/admin/policies/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-the-default-branch-name) »{% endif %} et « [Changement de la branche par défaut](/github/administering-a-repository/changing-the-default-branch) ».

## Définition du nom de branche par défaut

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}
3. Sous « Branche par défaut du dépôt », cliquez sur **Changer la branche par défaut du dépôt**.
    ![Bouton de remplacement](/assets/images/help/organizations/repo-default-name-button.png)
4. Tapez le nom par défaut que vous souhaitez utiliser pour les nouvelles branches.
    ![Zone de texte pour entrer le nom par défaut](/assets/images/help/organizations/repo-default-name-text.png)
5. Cliquez sur **Update**.
    ![Bouton Mettre à jour](/assets/images/help/organizations/repo-default-name-update.png)

## Pour aller plus loin

- « [Gestion du nom de branche par défaut pour vos dépôts](/github/setting-up-and-managing-your-github-user-account/managing-the-default-branch-name-for-your-repositories) »
