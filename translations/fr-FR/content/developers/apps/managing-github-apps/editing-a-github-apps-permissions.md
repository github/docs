---
title: Modification des autorisations d’une application GitHub
intro: '{% data reusables.shortdesc.editing_permissions_for_github_apps %}'
redirect_from:
  - /apps/building-integrations/managing-github-apps/editing-a-github-app-s-permissions
  - /apps/managing-github-apps/editing-a-github-app-s-permissions
  - /developers/apps/editing-a-github-apps-permissions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Edit permissions
ms.openlocfilehash: 1777a06a44c42a2b90351d2c7206e07cfc689882
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086416'
---
{% note %}

**Remarque :** les autorisations mises à jour ne prennent pas effet sur une installation tant que le propriétaire du compte ou de l’organisation n’approuve pas les modifications. Vous pouvez utiliser le [webhook InstallationEvent](/webhooks/event-payloads/#installation) pour savoir quand les utilisateurs acceptent de nouvelles autorisations pour votre application. Les [autorisations au niveau de l’utilisateur](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#user-level-permissions) constituent une exception, car elles ne nécessitent pas que le propriétaire du compte approuve les changements d’autorisation.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
4. Sélectionnez l’application GitHub dont vous souhaitez modifier les autorisations.
![Sélection d’application](/assets/images/github-apps/github_apps_select-app.png)
5. Dans la barre latérale gauche, cliquez sur **Autorisations & webhooks**.
![Autorisations et webhooks](/assets/images/github-apps/github_apps_permissions_and_webhooks.png)
6. Modifiez les autorisations de votre choix. Pour chaque type d’autorisation, sélectionnez « Lecture seule », « Lecture et écriture » ou « Aucun accès » dans la liste déroulante.
![Sélections d’autorisations pour votre application GitHub](/assets/images/github-apps/github_apps_permissions_post2dot13.png)
7. Dans « S’abonner à des événements », sélectionnez les événements auxquels vous souhaitez abonner votre application.
![Sélections d’autorisations pour l’abonnement de votre application GitHub à des événements](/assets/images/github-apps/github_apps_permissions_subscribe_to_events.png)
8. Si vous le souhaitez, dans « Ajouter une note aux utilisateurs », ajoutez une note indiquant à vos utilisateurs pourquoi vous modifiez les autorisations que votre application GitHub demande.
![Zone d’entrée pour ajouter une note à l’adresse des utilisateurs, expliquant pourquoi les autorisations de votre application GitHub ont changé](/assets/images/github-apps/github_apps_permissions_note_to_users.png)
9. Cliquez sur **Save changes**.
![Bouton pour enregistrer les modifications d’autorisations](/assets/images/github-apps/github_apps_save_changes.png)
