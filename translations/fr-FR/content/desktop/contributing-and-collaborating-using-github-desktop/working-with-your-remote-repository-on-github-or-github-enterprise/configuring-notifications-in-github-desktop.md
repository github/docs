---
title: Configuration des notifications dans GitHub Desktop
shortTitle: Configuring notifications
intro: '{% data variables.product.prodname_desktop %} vous tient informé grâce à des notifications sur les événements qui se produisent dans votre branche de demande de tirage (pull request).'
versions:
  fpt: '*'
ms.openlocfilehash: e7d99c4c81b64facae41b7697cde9d454e15e96a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060433'
---
## À propos des notifications dans {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} affiche une notification système pour les événements qui se produisent dans le référentiel actuellement sélectionné. Les notifications s’affichent lorsque :

- Les vérifications des demandes de tirage ont échoué.
- Une révision de demande de tirage est laissée avec un commentaire, une approbation ou des modifications demandées.

Cliquez sur la notification pour basculer la focalisation de l’application sur {% data variables.product.prodname_desktop %} et recevoir des informations plus détaillées.

## Notifications sur les échecs de vérification des demandes de tirage

Lorsque des modifications sont apportées à une branche de demande de tirage, vous recevez une notification si les vérifications échouent.

![Notification d’échec des vérifications des demandes de tirage](/assets/images/help/desktop/pull-request-checks-failed-notification.png)

Le fait de cliquer sur la notification affiche une boîte de dialogue contenant des détails sur les vérifications. Une fois que vous avez examiné la raison pour laquelle les vérifications ont échoué, vous pouvez réexécuter les vérifications ou basculer rapidement vers la branche de demande de tirage pour commencer à corriger les erreurs. Pour plus d’informations, consultez « [Affichage et réécriture des vérifications dans GitHub Desktop](/desktop/contributing-and-collaborating-using-github-desktop/working-with-your-remote-repository-on-github-or-github-enterprise/viewing-and-re-running-checks-in-github-desktop) ».

![Boîte de dialogue d’échec des vérifications](/assets/images/help/desktop/checks-failed-dialog.png)
## Notifications pour les révisions de demande de tirage

{% data variables.product.prodname_desktop %} affiche une notification système lorsqu’un collègue a approuvé, commenté ou demandé des modifications dans votre demande de tirage. Pour plus d’informations sur les révisions de demande de tirage, consultez « [À propos des révisions de demande de tirage](/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews) ».

![Notification de révision de demande de tirage](/assets/images/help/desktop/pull-request-review-notification.png)

Si vous cliquez sur la notification, la focalisation de l’application bascule vers {% data variables.product.prodname_desktop %} et fournit davantage de contexte pour le commentaire de révision de demande de tirage.

![Boîte de dialogue pull request review](/assets/images/help/desktop/pull-request-review-dialog.png)
## Activation des notifications

Si les notifications système sont désactivées pour {% data variables.product.prodname_desktop %}, vous pouvez suivre les étapes ci-dessous pour les activer.

{% mac %}

1. Cliquez sur le menu **Apple**, puis sélectionnez **Préférences système**.
2. Sélectionnez **Notifications et focalisation**.
3. Sélectionnez **{% data variables.product.prodname_desktop %}** dans la liste des applications.
4. Cliquez sur **Autoriser les notifications**.

![Notifications et focalisation macOS](/assets/images/help/desktop/mac-enable-notifications.png)

Pour plus d’informations sur les notifications système macOS, consultez « [Utiliser des notifications sur votre Mac](https://support.apple.com/en-us/HT204079) ».

{% endmac %}

{% windows %}

1. Ouvrez le menu **Démarrer** et sélectionnez **Paramètres**.
2. Sélectionnez **Système**, puis cliquez sur **Notifications**.
3. Recherchez **{% data variables.product.prodname_desktop %}** dans la liste des applications, puis cliquez sur **Activé**.

![Activer les notifications Windows](/assets/images/help/desktop/windows-enable-notifications.png)

Pour plus d’informations sur les notifications système Windows, consultez « [Modifier les paramètres de notification dans Windows](https://support.microsoft.com/en-us/windows/change-notification-settings-in-windows-8942c744-6198-fe56-4639-34320cf9444e) ».

{% endwindows %}
