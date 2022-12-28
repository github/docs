---
title: Examen de vos clés de déploiement
intro: Examinez les clés de déploiement pour vérifier qu’aucune des clés est non autorisée (voire compromise). Vous pouvez aussi approuver des clés de déploiement existantes qui sont valides.
redirect_from:
  - /articles/reviewing-your-deploy-keys
  - /github/authenticating-to-github/reviewing-your-deploy-keys
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/reviewing-your-deploy-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Deploy keys
ms.openlocfilehash: 964ec4cbc91745c041dd973e4e950b605c5c0233
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086013'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-5658 %}
3. Dans la section « Sécurité » de la barre latérale, cliquez sur Clés de déploiement en regard de **{% octicon "key" aria-label="The key icon" %}** .
{% else %}
3. Dans la barre latérale de gauche, cliquez sur **Clés de déploiement**.
![Paramétrage des clés de déploiement](/assets/images/help/settings/settings-sidebar-deploy-keys.png) {% endif %}
4. Dans la page Clés de déploiement, notez les clés de déploiement associées à votre compte. Pour celles que vous ne reconnaissez pas ou qui sont obsolètes, cliquez sur **Supprimer**. Si vous souhaitez conserver certaines clés de déploiement valides, cliquez sur **Approuver**.
    ![Liste des clés de déploiement](/assets/images/help/settings/settings-deploy-key-review.png)

Pour plus d’informations, consultez « [Gestion des clés de déploiement](/guides/managing-deploy-keys) ».

## Pour aller plus loin
- [Configuration des notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications#organization-alerts-notification-options)
