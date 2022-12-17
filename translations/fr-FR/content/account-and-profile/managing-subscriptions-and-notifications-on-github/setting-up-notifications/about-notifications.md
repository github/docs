---
title: À propos des notifications
intro: 'Les notifications fournissent des mises à jour sur l’activité dans l’{% data variables.product.product_location %} à laquelle vous êtes abonné. Vous pouvez utiliser la boîte de réception de notifications pour personnaliser, trier et gérer vos mises à jour.'
redirect_from:
  - /articles/notifications
  - /articles/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications-beta
  - /github/managing-subscriptions-and-notifications-on-github/about-notifications
  - /github/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Notifications
ms.openlocfilehash: 87034df88eb94c1d880806f01cb8748ed555a284
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147432023'
---
## Notifications et abonnements

Vous pouvez choisir de recevoir des mises à jour continues relatives à une activité spécifique sur {% data variables.product.product_location %} par le biais d’un abonnement. Les notifications sont des mises à jour que vous recevez pour une activité spécifique à laquelle vous êtes abonné.

### Options d'abonnement

Vous pouvez choisir de vous abonner aux notifications pour :
- Une conversation dans un problème, une demande de tirage (pull request) ou un gist spécifique.
- Toute l’activité d’un dépôt ou d’une discussion d’équipe.
- L’activité d’intégration continue (CI), telle que l’état des flux de travail dans les dépôts configurés avec {% data variables.product.prodname_actions %}. 
- Un dépôt {% data reusables.notifications-v2.custom-notification-types %} (si activé).

Vous pouvez également choisir de surveiller automatiquement tous les dépôts auxquels vous avez un accès Push, à l’exception des duplications (forks). Vous pouvez surveiller manuellement n’importe quel autre dépôt auquel vous avez accès en cliquant sur **Surveiller**.

Si vous n’êtes plus intéressé par une conversation, vous pouvez vous désabonner, annuler la surveillance ou personnaliser les types de notifications que vous recevrez à l’avenir. Par exemple, si vous ne souhaitez plus recevoir de notifications à partir d’un dépôt particulier, vous pouvez cliquer sur **Se désabonner**. Pour en savoir plus, consultez « [Gestion de vos abonnements](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions) ».

### Abonnements par défaut

En général, par défaut vous êtes automatiquement abonné aux conversations lorsque :
- Vous n’avez pas désactivé la surveillance automatique pour les dépôts ou les équipes que vous avez rejoints dans vos paramètres de notification. Ce paramètre est activé par défaut.
- Vous avez été affecté à un problème ou à une demande de tirage.
- Vous avez ouvert une demande de tirage, un problème ou un billet de discussion d’équipe.
- Vous avez commenté sur un thread.
- Vous vous êtes abonné à un thread manuellement en cliquant sur **Surveiller** ou **S’abonner**.
- Votre nom d’utilisateur a été @mentioned.
- Vous avez modifié l’état d’un thread, par exemple en fermant un problème ou en fusionnant une demande de tirage.
- Une équipe dont vous êtes membre a été @mentioned.

Par défaut, vous surveillez également automatiquement tous les dépôts que vous créez et qui appartiennent à votre compte personnel.

Pour vous désabonner des conversations auxquelles vous êtes automatiquement abonné, vous pouvez modifier vos paramètres de notification, annuler directement l’abonnement ou cesser la surveillance d’une activité sur {% data variables.product.product_location %}. Pour en savoir plus, consultez « [Gestion de vos abonnements](/github/managing-subscriptions-and-notifications-on-github/managing-your-subscriptions) ».

## Personnalisation des notifications et des abonnements

Vous pouvez choisir d’afficher vos notifications via la boîte de réception des notifications à [https://github.com/notifications](https://github.com/notifications){% ifversion fpt or ghes or ghec %} et dans l’application {% data variables.product.prodname_mobile %}{% endif %}, via votre e-mail, ou une combinaison de ces options.

Pour personnaliser les types de mises à jour que vous souhaitez recevoir et où recevoir ces mises à jour, configurez vos paramètres de notification. Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications) ».

Pour que vos abonnements restent gérables, passez en revue vos abonnements et vos dépôts surveillés et désabonnez-vous en fonction des besoins. Pour plus d’informations, consultez « [Gestion des abonnements pour l’activité sur GitHub](/github/managing-subscriptions-and-notifications-on-github/managing-subscriptions-for-activity-on-github) ».

Pour personnaliser la façon dont vous souhaitez recevoir des mises à jour pour des demandes de tirage ou des problèmes spécifiques, vous pouvez configurer vos préférences au sein du problème ou de la demande de tirage. Pour plus d’informations, consultez « [Triage d’une notification unique](/github/managing-subscriptions-and-notifications-on-github/triaging-a-single-notification#customizing-when-to-receive-future-updates-for-an-issue-or-pull-request) ».

{% ifversion fpt or ghes or ghec %} Vous pouvez personnaliser et planifier des notifications Push dans l’application {% data variables.product.prodname_mobile %}. Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#managing-your-notification-settings-with-github-mobile) ».
{% endif %}

## Raisons de la réception des notifications

Votre boîte de réception est configurée avec des filtres par défaut, qui représentent les raisons les plus courantes pour lesquelles les utilisateurs doivent suivre leurs notifications. Pour plus d’informations sur les filtres de boîte de réception, consultez « [Gestion des notifications à partir de votre boîte de réception](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#default-notification-filters) ».

Votre boîte de réception affiche les `reasons` pour lesquelles vous recevez des notifications sous forme d’étiquettes.

![Étiquettes de raisons dans la boîte de réception](/assets/images/help/notifications-v2/reasons-as-labels-in-inbox.png)

Vous pouvez filtrer votre boîte de réception en fonction de la raison pour laquelle vous êtes abonné aux notifications. Par exemple, pour voir uniquement les demandes de tirage où une personne a sollicité votre révision, vous pouvez utiliser le filtre de requête `review-requested`.

![Filtrer les notifications en fonction de la raison « révision demandée »](/assets/images/help/notifications-v2/review-requested-reason.png)

Si vous avez configuré l’envoi de notifications par e-mail et que vous pensez recevoir des notifications qui ne vous appartiennent pas, examinez les en-têtes d’e-mail, qui indiquent le destinataire prévu. Pour plus d’informations, consultez « [Configuration des notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications) ».

## Triage des notifications à partir de votre boîte de réception

Pour gérer efficacement vos notifications, vous pouvez trier votre boîte de réception avec des options pour :
- Supprimer une notification de la boîte de réception avec **Terminé**. Vous pouvez passer en revue les notifications **Terminé** regroupées en un même endroit en cliquant sur **Terminé** dans la barre latérale ou à l’aide de la requête `is:done`.
- Marquer une notification comme lue ou non lue.
- **Enregistrer** une notification pour une révision ultérieure. Les notifications **Enregistré** sont indiquées dans votre boîte de réception. Vous pouvez passer en revue les notifications **Enregistré** regroupées en un même endroit dans la barre latérale en cliquant sur **Enregistré** ou à l’aide de la requête `is:saved`.
- Vous désabonner automatiquement de cette notification et des mises à jour ultérieures de cette conversation. L’annulation de l’abonnement supprime également la notification de votre boîte de réception. Si vous vous désabonnez d’une conversation et qu’une personne mentionne votre nom d’utilisateur ou une équipe dont vous êtes membre et pour laquelle vous recevez des mises à jour, vous recommencerez à recevoir des notifications pour cette conversation.

À partir de votre boîte de réception, vous pouvez également trier plusieurs notifications à la fois. Pour plus d’informations, consultez « [Gestion des notifications à partir de votre boîte de réception](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox#triaging-multiple-notifications-at-the-same-time) ».

## Personnalisation de votre boîte de réception de notifications

Pour vous concentrer sur un groupe de notifications dans votre boîte de réception sur {% data variables.product.product_location %}{% ifversion fpt or ghes or ghec %} ou {% data variables.product.prodname_mobile %}{% endif %}, vous pouvez créer des filtres personnalisés. Par exemple, vous pouvez créer un filtre personnalisé pour un projet open source auquel vous contribuez, et voir uniquement les notifications pour ce dépôt dans lequel vous êtes mentionné. Pour plus d’informations, consultez « [Gestion des notifications à partir de votre boîte de réception](/github/managing-subscriptions-and-notifications-on-github/managing-notifications-from-your-inbox) ». Pour obtenir d’autres exemples de personnalisation de votre flux de travail de triage, consultez « [Personnalisation d’un flux de travail pour trier vos notifications](/github/managing-subscriptions-and-notifications-on-github/customizing-a-workflow-for-triaging-your-notifications) ».

## Stratégie de rétention des notifications

Les notifications qui ne sont pas marquées comme **Enregistré** sont conservées pendant cinq mois. Les notifications marquées comme **Enregistré** sont conservées indéfiniment. Si votre notification enregistrée est antérieure à cinq mois et que vous annulez son enregistrement, elle disparaîtra de votre boîte de réception dans les 24 heures qui suivent.

## Commentaires et support

Si vous avez des commentaires ou des demandes de fonctionnalités pour les notifications, utilisez une [discussion {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/general).
