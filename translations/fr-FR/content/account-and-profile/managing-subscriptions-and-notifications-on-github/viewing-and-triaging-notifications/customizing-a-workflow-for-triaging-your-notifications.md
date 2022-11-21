---
title: Personnalisation d’un flux de travail pour trier vos notifications
intro: 'Pour créer le workflow idéal de triage de vos notifications, vous pouvez adapter et personnaliser ces exemples de workflows.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications
  - /github/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/customizing-a-workflow-for-triaging-your-notifications
shortTitle: Triage your notifications
ms.openlocfilehash: 9e5771dff52408a1b6967a3792eb36eefebefd72
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145104558'
---
## Démarrage du tri de votre boîte de réception

Avant de commencer à trier votre boîte de réception, déterminez si vous préférez d’abord rechercher et répondre aux mises à jour les plus importantes ou bien nettoyer votre boîte de réception des mises à jour inutiles et faciles à supprimer ou à trier.

Vous pouvez décider d’adopter une combinaison des deux approches à différents moments en fonction du volume de notifications que vous avez.

Pour obtenir un exemple de flux de travail de recherche et de réponse aux notifications les plus importantes, consultez « [Vérification de vos notifications aux priorités les plus élevées](#checking-your-highest-notification-priorities) ».

Pour obtenir un exemple de flux de travail de suppression des notifications faciles à supprimer ou à trier, consultez « [Effacement de vos notifications les moins importantes](#clearing-your-least-important-notifications) ».

## Vérification de vos notifications aux priorités les plus élevées

Choisissez le type de notification qu’il est le plus urgent de réviser, et sélectionnez l’horaire pour les passer en revue qui vous convient le mieux. Vous pouvez vous poser la question « Qui vais-je bloquer ? ».

Par exemple, vous pouvez décider de vérifier vos notifications dans cet ordre le matin pendant votre temps de planification quotidien :
  - Demandes de tirage (pull requests) où votre révision est demandée. (filtrez par `reason:review-requested`)
  - Événements où votre nom d’utilisateur est @mentioned, également appelé mentions directes. (filtrez par `reason:mention`)
  - Événements où une équipe dont vous êtes membre est @mentioned, également appelé mention d’équipe. (filtrez par `reason:team-mention`)
  - Échecs de flux de travail CI pour un dépôt spécifique. (filtrez par `reason:ci-activity` et `repo:owner/repo-name` et vérifiez que vous avez activé les notifications d’activité CI pour les échecs de flux de travail dans vos paramètres de notification)

  {% tip %}

  **Astuce :** Pour passer en revue rapidement vos priorités les plus élevées, configurez des filtres personnalisés dans l’ordre de leur priorité de révision. Pour plus d’informations, consultez « [Gestion des notifications à partir de votre boîte de réception](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#customizing-your-inbox-with-custom-filters) ».

  {% endtip %}

## Suivi des mises à jour de notifications continues

Pour le suivi des notifications, vous pouvez vous poser la question « Sur quoi étais-je bloqué et ne le suis-je plus ? ». Choisissez vos priorités de suivi des notifications.

Par exemple, vous pouvez décider de procéder à un suivi dans cet ordre :
  - Problèmes et demandes de tirage auxquels vous êtes affecté. Fermez immédiatement tous les problèmes ou demandes de tirage que vous pouvez, et ajoutez des mises à jour. Si nécessaire, enregistrez les notifications afin de les réviser ultérieurement.
  - Révisez les notifications dans la boîte de réception enregistrée, en particulier les mises à jour non lues. Si le thread n’est plus pertinent, désélectionnez {% octicon "bookmark" aria-label="The bookmark icon" %} pour supprimer la notification de la boîte de réception enregistrée et annuler son enregistrement.

## Gestion des notifications de priorité inférieure

Après avoir trié les notifications de priorité élevée, révisez les notifications restantes, telles que les notifications de participation. Prenez en compte les questions suivantes :
  - Pouvez-vous vous désabonner de cette notification ? Cette notification est-elle terminée et prête à être marquée comme **Terminé** ?
  {% tip %}

  **Astuce :** Lorsque vous vous désabonnez d’une notification, vous ne recevrez pas de nouvelles mises à jour, sauf si vous commencez à participer au thread, si vous êtes @mentioned ou si une équipe dont vous êtes membre est @mentioned. Lorsque vous marquez une notification comme **Terminé**, elle est supprimée de votre affichage de boîte de réception principal et peut être consultée avec la requête `is:read`. Pour plus d’informations, consultez « [Gestion des notifications à partir de votre boîte de réception](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-options) ».

  {% endtip %}
  - Souhaitez-vous recevoir des mises à jour ultérieures lorsque ce problème ou cette demande de tirage est fermé ou rouvert, ou lorsqu’une demande de tirage est fusionnée ? Pour plus d’informations sur ces options, consultez « [Tri d’une notification unique](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request) ».
  - Voulez-vous éviter de recevoir des notifications comme celle-ci à l’avenir ? Si c’est le cas, pensez à vous désabonner. Pour plus d’informations, consultez « [Gestion des abonnements pour l’activité sur GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github) ».

## Effacement de vos notifications les moins importantes

Choisissez le type de notification qui est pour vous le plus rapide et le plus facile à trier et à supprimer de votre boîte de réception, idéalement en triant plusieurs notifications à la fois.

Par exemple, vous pouvez décider d’effacer les notifications dans cet ordre :
  - Notifications de participation auxquelles vous pouvez vous désabonner.
  - Mises à jour de dépôt dont la conservation ou le suivi n’est plus pertinent.

Pour plus d’informations sur la gestion simultanée de plusieurs notifications dans votre boîte de réception, consultez « [Gestion des notifications à partir de votre boîte de réception](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time) ».

Vous pouvez également envisager de modifier vos paramètres de notification ou de vous désabonner de ces mises à jour si possible. Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications) » ou « [Gestion des abonnements pour l’activité sur GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github) ».
