---
title: Gestion de vos abonnements
intro: 'Pour que vous puissiez gérer efficacement vos notifications, il existe plusieurs façons de se désabonner.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
redirect_from:
  - /github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions
  - /github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github/managing-your-subscriptions
shortTitle: Manage your subscriptions
ms.openlocfilehash: 750a3a9ad87ff9aa709b84a98f548d85d53072ee
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145087362'
---
Pour vous aider à comprendre vos abonnements et à décider s’il faut vous désabonner, consultez « [Affichage de vos abonnements](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions) ».

{% note %}

**Remarque :** Au lieu de vous désabonner, vous avez la possibilité d’ignorer un dépôt. Si vous ignorez un dépôt, vous ne recevrez aucune notification. Nous vous déconseillons d’ignorer les dépôts, car vous ne serez pas averti si vous êtes @mentioned. {% ifversion fpt or ghec %}Si vous constatez des abus et souhaitez ignorer un dépôt, contactez {% data variables.contact.contact_support %} afin que nous puissions vous aider. {% data reusables.policies.abuse %}{% endif %}

{% endnote %}

## Choix de la façon de se désabonner

Pour annuler rapidement la surveillance (ou se désabonner) des dépôts, accédez à [github.com/watching](https://github.com/watching) pour voir tous les dépôts que vous suivez. Pour plus d’informations, consultez « [Annulation de la surveillance de dépôts](#unwatching-repositories) ».

Pour vous désabonner de plusieurs notifications en même temps, vous pouvez vous désabonner par le biais de votre boîte de réception ou de la page des abonnements. Ces deux options offrent davantage de contexte sur vos abonnements que la page « Dépôts surveillés ».

### Avantages offerts par l’annulation de la surveillance à partir de votre boîte de réception

Lorsque vous vous désabonnez des notifications dans votre boîte de réception, vous avez plusieurs autres options de triage et pouvez filtrer vos notifications par filtres personnalisés et types de discussion. Pour plus d’informations, consultez « [Gestion des notifications à partir de votre boîte de réception](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox) ».

### Avantages offerts par l’annulation de la surveillance à partir de la page des abonnements

Lorsque vous vous désabonnez des notifications dans la page des abonnements, vous pouvez voir plus de notifications auxquelles vous êtes abonné et les trier dans l’ordre « Abonnements les plus récents » ou « Abonnements les moins récents ».

La page des abonnements montre toutes les notifications auxquelles vous êtes actuellement abonné, y compris les notifications que vous avez marquées comme **Terminé** dans votre boîte de réception.

Vous pouvez uniquement filtrer vos abonnements par dépôt et par la raison pour laquelle vous recevez la notification.

## Annulation de l’abonnement aux notifications dans votre boîte de réception

Lorsque vous vous désabonnez à des notifications dans votre boîte de réception, elles disparaissent automatiquement de votre boîte de réception.

{% data reusables.notifications.access_notifications %}
1. Dans la boîte de réception des notifications, sélectionnez les notifications desquelles vous souhaitez vous désabonner.
2. Cliquez sur **Se désabonner.** 
  ![Option de désabonnement dans la boîte de réception principale](/assets/images/help/notifications-v2/unsubscribe-from-main-inbox.png)

## Annulation de l’abonnement à des notifications dans la page des abonnements

{% data reusables.notifications.access_notifications %}
1. Dans la barre latérale gauche, sous la liste des dépôts, utilisez la liste déroulante « Gérer les notifications » pour cliquer sur **Abonnements**.
  ![Options de menu déroulant Gérer les notifications](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Sélectionnez les notifications desquelles vous souhaitez vous désabonner. En haut à droite, cliquez sur **Se désabonner.** 
  ![ Page des abonnements](/assets/images/help/notifications-v2/unsubscribe-from-subscriptions-page.png)

## Annulation de la surveillance de dépôts

Lorsque vous ne surveillez plus un dépôt, vous vous désabonnez des futures mises à jour de ce dépôt, sauf si vous participez à une conversation ou si vous êtes @mentioned.

{% data reusables.notifications.access_notifications %}
1. Dans la barre latérale gauche, sous la liste des dépôts, utilisez la liste déroulante « Gérer les notifications » pour cliquer sur **Dépôts surveillés**.

  ![Options de menu déroulant Gérer les notifications](/assets/images/help/notifications-v2/manage-notifications-options.png)

2. Dans la page des dépôts surveillés, une fois que vous avez évalué les dépôts que vous surveillez, choisissez si vous souhaitez :
   
   - Annuler la surveillance d’un dépôt.
   - Ignorer toutes les notifications d’un dépôt.
   - Si cette option est activée, personnalisez les types d’événements pour lesquels vous recevez des notifications pour ({% data reusables.notifications-v2.custom-notification-types %})
   
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5819 %}
1. Si vous le souhaitez, pour vous désabonner de tous les dépôts appartenant à un utilisateur ou une organisation donné, sélectionnez la liste déroulante **Ne plus rien surveiller**, puis cliquez sur l’organisation dont vous souhaitez vous désabonner. Le bouton permettant d’annuler la surveillance de tous les dépôts n’est disponible que si vous surveillez toute l’activité ou les notifications personnalisées dans plus de 10 dépôts.

   ![Capture d’écran du bouton Ne plus rien surveiller.](/assets/images/help/notifications-v2/unsubscribe-from-all-repos.png)

   - Cliquez sur **Ne plus surveiller** pour confirmer que vous souhaitez annuler la surveillance des dépôts appartenant à l’utilisateur ou à l’organisation sélectionné, ou cliquez sur **Annuler** pour annuler.

   ![Capture d’écran de la boîte de dialogue de confirmation Ne plus rien surveiller.](/assets/images/help/notifications-v2/unwatch-repo-dialog.png)

{% endif %}
