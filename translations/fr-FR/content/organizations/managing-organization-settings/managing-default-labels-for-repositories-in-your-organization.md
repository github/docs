---
title: Gestion des étiquettes par défaut pour les dépôts au sein de votre organisation
intro: Vous pouvez personnaliser les étiquettes incluses dans chaque nouveau dépôt de votre organisation.
redirect_from:
  - /articles/managing-default-labels-for-repositories-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-default-labels-for-repositories-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage default labels
ms.openlocfilehash: a2591c84d3844bfdadc3c7321d7ce8eec2adf293
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145109458'
---
Les propriétaires d’organisation peuvent gérer des étiquettes par défaut pour les dépôts au sein de l’organisation.

Des étiquettes par défaut sont incluses dans chaque nouveau dépôt au sein de votre organisation, mais toute personne disposant d’un accès en écriture au dépôt peut en modifier ou supprimer les étiquettes ultérieurement. L’ajout, la modification ou la suppression d’une étiquette par défaut n’a pas d’incidence sur les dépôts existants.

## Définition d’une étiquette par défaut

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

5. Sous « Étiquettes de dépôt », cliquez sur **Nouvelle étiquette**.
  ![Bouton Nouvelle étiquette](/assets/images/help/organizations/new-label-button.png) {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## Modification d’une étiquette par défaut

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## Suppression d’une étiquette par défaut

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.repository-defaults %}

{% data reusables.project-management.delete-label %} {% data reusables.project-management.confirm-label-deletion %}

## Pour aller plus loin

- « [À propos des étiquettes](/articles/about-labels) »
