---
title: Gestion des rôles de référentiel personnalisés pour une organisation
intro: 'Vous pouvez créer, modifier ou supprimer des rôles de dépôt personnalisés pour votre organisation.'
permissions: Organization owners can manage custom repository roles.
versions:
  feature: custom-repository-roles
topics:
  - Organizations
  - Teams
shortTitle: Manage custom roles
redirect_from:
  - /early-access/github/articles/managing-custom-repository-roles-for-an-organization
ms.openlocfilehash: f7f8be4eda3ecf62a1b587a509881f9fee1a463f
ms.sourcegitcommit: ca040a1871ab5e929b596686ef955b02c5afa051
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/02/2022
ms.locfileid: '148131003'
---
{% data reusables.organizations.custom-repo-roles-ghec-only %}

## À propos des rôles de référentiel personnalisés

{% data reusables.organizations.about-custom-repo-roles %} Pour plus d’informations, consultez « [À propos des rôles de dépôt personnalisés](/organizations/managing-peoples-access-to-your-organization-with-roles/about-custom-repository-roles) ».

## Création d’un rôle de référentiel

Pour créer un rôle de référentiel, vous ajoutez des autorisations à un rôle hérité et donnez un nom au rôle personnalisé.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
5. Cliquez sur **Créer un rôle**.
  ![Capture d’écran du bouton « Créer un rôle »](/assets/images/help/organizations/repository-role-create-role.png)
4. Sous « Nom », tapez le nom de votre rôle de référentiel.
  ![Champ pour taper un nom pour le rôle de référentiel](/assets/images/help/organizations/repository-role-name.png)
5. Sous « Description », tapez une description de votre rôle de référentiel.
  ![Champ pour taper une description pour le rôle de référentiel](/assets/images/help/organizations/repository-role-description.png)
6. Sous « Choisir un rôle à hériter », sélectionnez le rôle à hériter.
  ![Sélection de l’option de rôle de base du référentiel](/assets/images/help/organizations/repository-role-base-role-option.png)
7. Sous « Ajouter des autorisations », utilisez le menu déroulant pour sélectionner les autorisations que votre rôle personnalisé doit inclure.
  ![Sélection des niveaux d’autorisation dans la liste déroulante des rôles de référentiel](/assets/images/help/organizations/repository-role-drop-down.png)
7. Cliquez sur **Créer un rôle**.
  ![Confirmer la création d’un rôle de référentiel](/assets/images/help/organizations/repository-role-creation-confirm.png)

## Modification d’un rôle de référentiel

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. À droite du rôle à modifier, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Modifier**.
  ![Option Modifier dans le menu déroulant pour les rôles de référentiel](/assets/images/help/organizations/repository-role-edit-setting.png)
4. Modifiez, puis cliquez sur **Mettre à jour le rôle**.
  ![Modifier les champs et mettre à jour les rôles de référentiel](/assets/images/help/organizations/repository-role-update.png)

## Suppression d’un rôle de référentiel

Si vous supprimez un rôle de référentiel existant, l’ensemble des invitations, équipes et utilisateurs en attente avec le rôle personnalisé seront réaffectés aux autorisations de base de l’organisation.

{% data reusables.profile.access_profile %} {% data reusables.profile.access_org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.org-list %} {% data reusables.organizations.org-settings-repository-roles %}
3. À droite du rôle à supprimer, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}, puis sur **Supprimer**.
  ![Option Modifier dans le menu déroulant pour les rôles de référentiel](/assets/images/help/organizations/repository-role-delete-setting.png)
4. Passez en revue les modifications du rôle à supprimer, puis cliquez sur **Supprimer le rôle**.
  ![Confirmer la suppression d’un rôle de référentiel](/assets/images/help/organizations/repository-role-delete-confirm.png)
