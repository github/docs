---
title: Gestion des rappels planifiés pour votre organisation
intro: Vous pouvez recevoir des rappels dans Slack pour toutes les demandes de tirage (pull request) que les équipes de votre organisation ont été invitées à examiner.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-scheduled-reminders-for-your-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 870e22581488689a72cc70f317b6d97fdc4f5ed5
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145109453'
---
## À propos des rappels planifiés pour les demandes de tirage

{% data reusables.reminders.about-scheduled-reminders-teams-orgs %}

Les propriétaires d’organisation peuvent planifier un rappel pour une ou plusieurs équipes de leur organisation, pour toutes les demandes de tirage que l’équipe ou les équipes ont été invitées à réviser.

{% data reusables.reminders.scheduled-reminders-limitations %}

## Création d’un rappel planifié pour une organisation
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.slack-channel %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %} {% data reusables.reminders.tracked-repos %}
1.  Sous « Filtrer par équipe attribuée à la révision du code », cliquez sur la liste déroulante **Ajouter une équipe** et choisissez une ou plusieurs équipes. Vous pouvez ajouter jusqu’à 100 équipes. Si l’équipe que vous sélectionnez n’a pas accès aux « Dépôts suivis » sélectionnés ci-dessus, vous ne pouvez pas créer le rappel planifié.
![Liste déroulante Ajouter une équipe](/assets/images/help/organizations/scheduled-reminders-add-teams.png) {% data reusables.reminders.ignore-drafts %} {% data reusables.reminders.no-review-requests %} {% data reusables.reminders.author-reviews %} {% data reusables.reminders.approved-prs %} {% data reusables.reminders.min-age %} {% data reusables.reminders.min-staleness %} {% data reusables.reminders.ignored-terms %} {% data reusables.reminders.ignored-labels %} {% data reusables.reminders.required-labels %} {% data reusables.reminders.create-reminder %}

## Gestion d’un rappel planifié pour une organisation
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.edit-existing %} {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## Suppression d’un rappel planifié pour une organisation
{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.reminders.scheduled-reminders %} {% data reusables.reminders.delete %}

## Pour aller plus loin

- « [Gestion de vos rappels planifiés](/github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders) »
- « [Gestion des rappels planifiés pour votre équipe](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team) »
