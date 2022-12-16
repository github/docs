---
title: Affichage de vos abonnements
intro: 'Pour comprendre d’où viennent vos notifications et connaître le volume de ces dernières, nous vous recommandons de passer en revue régulièrement vos abonnements et vos dépôts surveillés.'
redirect_from:
  - /articles/subscribing-to-conversations
  - /articles/unsubscribing-from-conversations
  - /articles/subscribing-to-and-unsubscribing-from-notifications
  - /articles/listing-the-issues-and-pull-requests-youre-subscribed-to
  - /articles/watching-repositories
  - /articles/unwatching-repositories
  - /articles/watching-and-unwatching-repositories
  - /articles/watching-and-unwatching-releases-for-a-repository
  - /articles/watching-and-unwatching-team-discussions
  - /articles/listing-watched-repositories
  - /articles/listing-the-repositories-you-re-watching
  - /articles/listing-the-repositories-youre-watching
  - /github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/viewing-your-subscriptions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
shortTitle: View subscriptions
ms.openlocfilehash: 34faad79004d34f5beb14e8992b9aff4e6a3ab39
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105214'
---
Vous recevez des notifications pour vos abonnements de l’activité continue sur {% data variables.product.product_name %}. Il existe de nombreuses raisons pour lesquelles vous pouvez être abonné à une conversation. Pour plus d’informations, consultez « [À propos des notifications »](/github/managing-subscriptions-and-notifications-on-github/about-notifications#notifications-and-subscriptions).

Nous vous recommandons d’auditer et d’annuler vos abonnements dans le cadre d’un flux de travail de notifications sain. Pour plus d’informations sur les options d’annulation d’abonnement, consultez « [Gestion des abonnements](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions) ».

## Diagnostic de la raison pour laquelle vous recevez trop de notifications

Lorsque votre boîte de réception a trop de notifications à gérer, vérifiez si vous ne vous êtes pas surabonné ou réfléchissez à la façon dont vous pourriez modifier vos paramètres de notification de façon à réduire vos abonnements et les types de notifications que vous recevez. Par exemple, vous pourriez envisager de désactiver les paramètres de surveillance automatique de tous les dépôts et toutes les discussions d’équipe chaque fois que vous avez rejoint une équipe ou un dépôt.

![Surveillance automatique](/assets/images/help/notifications-v2/automatic-watching-example.png)

Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#automatic-watching) ».

Pour voir une vue d’ensemble de vos abonnements aux dépôts, consultez « [Passage en revue des dépôts que vous surveillez](#reviewing-repositories-that-youre-watching) ». {% tip %}

**Astuce :** Vous pouvez sélectionner les types d’événements pour lesquels recevoir des notifications à l’aide de l’option **Personnalisé** de la liste déroulante **Surveiller/Ne plus surveiller** dans votre [page de surveillance](https://github.com/watching) ou dans n’importe quelle page de dépôt sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#configuring-your-watch-settings-for-an-individual-repository) ».

{% endtip %}

Beaucoup de gens oublient les dépôts qu’ils ont choisi de surveiller dans le passé. À partir de la page « Dépôts surveillés », vous pouvez rapidement annuler la surveillance de dépôts. Pour plus d’informations sur les façons de se désabonner, consultez « [Recommandations relatives à l’annulation de la surveillance](https://github.blog/changelog/2020-11-10-unwatch-recommendations/) » sur {% data variables.product.prodname_blog %} et « [Gestion de vos abonnements](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions) ». Vous pouvez également créer un flux de travail de triage pour vous aider à gérer les notifications que vous recevez. Pour obtenir des conseils sur les flux de travail de triage, consultez « [Personnalisation d’un flux de travail pour trier vos notifications](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications) ».

## Passage en revue de tous vos abonnements

{% data reusables.notifications.access_notifications %}
1. Dans la barre latérale gauche, sous la liste des dépôts pour lesquels vous recevez des notifications, utilisez la liste déroulante « Gérer les notifications » pour cliquer sur **Abonnements**.
  ![Options de menu déroulant Gérer les notifications](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Utilisez les filtres et options de tri pour affiner la liste des abonnements, et commencez à vous désabonner des conversations pour lesquelles vous ne souhaitez plus recevoir de notifications.

  ![Page des abonnements](/assets/images/help/notifications-v2/all-subscriptions.png)

{% tip %}

**Conseils :**
- Pour passer en revue les abonnements que vous avez peut-être oubliés, triez par « abonnements les moins récents ».

- Pour afficher une liste des dépôts pour lesquels vous pouvez toujours recevoir des notifications, consultez la liste des dépôts dans le menu déroulant « Filtrer par dépôt ».

{% endtip %}

## Passage en revue des dépôts que vous surveillez

1. Dans la barre latérale gauche, sous la liste des dépôts, utilisez le menu déroulant « Gérer les notifications » et cliquez sur **Dépôts surveillés**.
  ![Options de menu déroulant Gérer les notifications](/assets/images/help/notifications-v2/manage-notifications-options.png)
2. Évaluez les dépôts que vous surveillez et décidez si leurs mises à jour sont toujours pertinentes et utiles. Lorsque vous surveillez un dépôt, vous êtes informé de toutes les conversations pour ce dépôt.
![Page de notifications surveillées](/assets/images/help/notifications-v2/watched-notifications-custom.png)

  {% tip %}

  **Astuce :** Au lieu de surveiller un dépôt, vous pouvez recevoir uniquement des notifications lorsque des mises à jour sont apportées à des {% data reusables.notifications-v2.custom-notification-types %} (si c’est activé pour le dépôt), ou toute combinaison de ces options, ou bien annuler purement et simplement la surveillance d’un dépôt.
  
  Lorsque vous annulez la surveillance d’un dépôt, vous pouvez toujours être averti lorsque vous êtes @mentioned ou participez à un thread. Lorsque vous choisissez de recevoir des notifications pour certains types d’événements, vous n’êtes averti qu’en cas de mise à jour de ces types d’événements dans le dépôt, de participation à un thread, ou quand vous ou une équipe dont vous êtes membre est @mentioned.

  {% endtip %}
