---
title: Gestion de vos rappels planifiés
intro: Recevez des rappels dans Slack lorsque vous ou votre équipe avez des demandes de tirage en attente d’examen.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-your-scheduled-reminders
  - /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/managing-your-scheduled-reminders
shortTitle: Manage scheduled reminders
ms.openlocfilehash: 7dab3826b1791d3b06b3a2594c3ba132c6d675b4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145164898'
---
## À propos des rappels planifiés pour les utilisateurs

Les rappels planifiés servent à s’assurer que les utilisateurs se concentrent sur les demandes de révision les plus importantes qui nécessitent leur attention. Les rappels planifiés pour les demandes de tirage (pull requests) vous enverront un message dans Slack contenant les demandes de tirage ouvertes nécessitant votre révision à un moment spécifié. Par exemple, vous pouvez configurer des rappels planifiés de façon à recevoir dans Slack tous les matins à 10 heures un message contenant les demandes de tirage qui doivent être révisées par vous-même ou l’une de vos équipes.

Pour certains événements, vous pouvez également activer des alertes en temps réel pour les rappels planifiés. Les alertes en temps réel sont envoyées à votre canal Slack dès qu’un événement important a lieu (par exemple quand une révision vous est affectée).

Vous pouvez définir des rappels planifiés pour les demandes de révision au niveau personnel ou de l’équipe concernant les demandes de tirage dans les organisations dont vous êtes membre. Pour que vous puissiez créer un rappel planifié pour vous-même, un propriétaire de l’organisation doit d’abord autoriser votre espace de travail Slack. Pour plus d’informations, consultez « [Gestion des rappels planifiés pour votre organisation](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization) ».

{% data reusables.reminders.scheduled-reminders-limitations %}

## Création de rappels planifiés pour votre compte personnel

{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. En regard de l’organisation pour laquelle vous souhaitez planifier des rappels, cliquez sur **Modifier**.
![Bouton de modification de rappels planifiés](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.add-reminder %} {% data reusables.reminders.authorize-slack %} {% data reusables.reminders.days-dropdown %} {% data reusables.reminders.times-dropdowns %}
8. Si vous le souhaitez, pour recevoir des rappels planifiés pour les révisions auxquelles vous avez été affecté, sélectionnez **Demandes de révision qui vous sont affectées**.
![Case à cocher Demandes de révision qui vous sont affectées](/assets/images/help/profile/scheduled-reminders-your-requests.png)
9. Si vous le souhaitez, pour recevoir des rappels planifiés pour les révisions affectées à une équipe dont vous êtes membre, sélectionnez **Demandes de révision affectées à votre équipe**.
![Case à cocher Demandes de révision affectées à votre équipe](/assets/images/help/profile/scheduled-reminders-your-team-requests.png) {% data reusables.reminders.real-time-alerts %} ![Case à cocher Activer les alertes en temps réel](/assets/images/help/settings/scheduled-reminders-real-time-alerts-personal.png) {% data reusables.reminders.create-reminder %}

## Gestion des rappels planifiés pour votre compte personnel
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. En regard de l’organisation pour laquelle vous souhaitez modifier les rappels planifiés, cliquez sur **Modifier**.
![Bouton de modification de rappels planifiés](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.edit-page %} {% data reusables.reminders.update-buttons %}

## Suppression de rappels planifiés pour votre compte personnel
{% data reusables.user-settings.access_settings %} {% data reusables.reminders.scheduled-reminders %}
1. En regard de l’organisation pour laquelle vous souhaitez supprimer des rappels, cliquez sur **Modifier**.
![Bouton de modification de rappels planifiés](/assets/images/help/settings/scheduled-reminders-org-choice.png) {% data reusables.reminders.delete %}

## Pour aller plus loin

- « [Gestion des rappels planifiés pour votre organisation](/organizations/managing-organization-settings/managing-scheduled-reminders-for-your-organization) »
- « [Gestion des rappels planifiés pour votre équipe](/organizations/organizing-members-into-teams/managing-scheduled-reminders-for-your-team) »
