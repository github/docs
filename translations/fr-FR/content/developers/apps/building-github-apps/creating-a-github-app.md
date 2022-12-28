---
title: Création d’une application GitHub
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps
  - /apps/building-github-apps/creating-a-github-app
  - /developers/apps/creating-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: bca6b800f8ea6042e4cbcdb95bd39b56f61433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179086'
---
{% ifversion fpt or ghec %}Pour découvrir comment utiliser les manifestes d’application GitHub, qui permettent de créer des applications GitHub préconfigurées, consultez « [Création d’applications GitHub à partir d’un manifeste](/apps/building-github-apps/creating-github-apps-from-a-manifest/) ».{% endif %}

{% ifversion fpt or ghec %} {% note %}

  **Remarque :** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. Cliquez sur **Nouvelle application GitHub**.
![Bouton de création d’une application GitHub](/assets/images/github-apps/github_apps_new.png)
1. Dans « Nom de l’application GitHub », tapez le nom de votre application.
![Champ du nom de votre application GitHub](/assets/images/github-apps/github_apps_app_name.png)

  Donnez un nom clair et succinct à votre application. Votre application ne peut pas avoir le même nom qu’un compte GitHub existant, sauf s’il s’agit de votre propre nom d’utilisateur ou d’organisation. Une version avec slug du nom de votre application s’affiche dans l’interface utilisateur quand votre intégration effectue une action.

1. Si vous le souhaitez, dans « Description », tapez une description de votre application qui sera visible par les utilisateurs.
![Champ de la description de votre application GitHub](/assets/images/github-apps/github_apps_description.png)
1. Dans « URL de la page d’accueil », tapez l’URL complète du site web de votre application.
![Champ de l’URL de la page d’accueil de votre application GitHub](/assets/images/github-apps/github_apps_homepage_url.png) {% ifversion fpt or ghes or ghec %}
1. Dans « URL de rappel », tapez l’URL complète vers laquelle la redirection doit être effectuée, une fois qu’un utilisateur a autorisé l’installation. Cette URL est utilisée si votre application doit identifier et autoriser les requêtes utilisateur à serveur.

  Vous pouvez utiliser **Ajouter une URL de rappel** pour fournir des URL de rappel supplémentaires, la limite maximale étant fixée à 10.

  ![Bouton « Ajouter une URL de rappel » et champ de l’URL de rappel](/assets/images/github-apps/github_apps_callback_url_multiple.png) {% else %}
1. Dans « URL de rappel d’autorisation utilisateur », tapez l’URL complète vers laquelle la redirection doit être effectuée, une fois qu’un utilisateur a autorisé une installation. Cette URL est utilisée si votre application doit identifier et autoriser les requêtes utilisateur à serveur.
![Champ de l’URL de rappel d’autorisation utilisateur de votre application GitHub](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
1. Par défaut, pour renforcer sa sécurité, votre application utilise des jetons d’autorisation utilisateur ayant un délai d’expiration. Pour refuser l’utilisation de jetons utilisateur ayant un délai d’expiration, vous devez désélectionner « Faire expirer les jetons d’autorisation utilisateur ». Pour en savoir plus sur la configuration d’un flux de jeton d’actualisation et les avantages liés aux jetons utilisateur ayant un délai d’expiration, consultez « [Actualisation des jetons d’accès utilisateur à serveur](/apps/building-github-apps/refreshing-user-to-server-access-tokens/) ».
  ![Option permettant d’accepter les jetons utilisateur ayant un délai d’expiration durant la configuration des applications GitHub](/assets/images/github-apps/expire-user-tokens-selection.png)
1. Si votre application autorise les utilisateurs à l’aide du flux OAuth, vous pouvez sélectionner **Demander l’autorisation utilisateur (OAuth) durant l’installation** pour permettre aux utilisateurs d’autoriser l’application quand ils l’installent, et ainsi de sauter une étape. Si vous sélectionnez cette option, l’« URL de configuration » cesse d’être disponible, et les utilisateurs sont redirigés vers votre « URL de rappel d’autorisation utilisateur » après l’installation de l’application. Pour plus d’informations, consultez « [Autorisation des utilisateurs durant l’installation](/apps/installing-github-apps/#authorizing-users-during-installation) ».
![Demander une autorisation utilisateur pendant l’installation](/assets/images/github-apps/github_apps_request_auth_upon_install.png){% ifversion device-flow-is-opt-in %}
1. Si votre application GitHub doit utiliser le flux d’appareil pour identifier et autoriser les utilisateurs, cliquez sur **Activer le flux d’appareil**. Pour plus d’informations sur le flux d’appareil, consultez « [Autorisation des applications OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow) ».
  ![Capture d’écran montrant le champ d’activation du flux d’appareil](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
1. Si une configuration supplémentaire est nécessaire après l’installation, ajoutez une « URL de configuration » vers laquelle les utilisateurs doivent être redirigés après l’installation de votre application.
![Champ de l’URL de configuration de votre application GitHub](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **Remarque :** Quand vous sélectionnez **Demander l’autorisation utilisateur (OAuth) durant l’installation** à l’étape précédente, ce champ cesse d’être disponible, et les utilisateurs sont redirigés vers l’« URL de rappel d’autorisation utilisateur » après l’installation de l’application.

  {% endnote %}

1. Dans « URL de webhook », tapez l’URL de destination des événements après l’exécution d’une requête POST. Chaque application reçoit son propre webhook, qui vous notifie chaque fois que l’application est installée ou modifiée, et qui vous informe également sur tous les autres événements auxquels l’application est abonnée.
![Champ de l’URL de webhook de votre application GitHub](/assets/images/github-apps/github_apps_webhook_url.png)

1. Si vous le souhaitez, dans « Secret de webhook », tapez un jeton secret facultatif pour sécuriser vos webhooks.
![Champ permettant d’ajouter un jeton secret pour votre webhook](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **Remarque :** Nous vous recommandons vivement de définir un jeton secret. Pour plus d’informations, consultez « [Sécurisation de vos webhooks](/webhooks/securing/) ».

  {% endnote %}

1. Dans « Autorisations », choisissez les autorisations que votre application doit demander. Pour chaque type d’autorisation, utilisez le menu déroulant, puis cliquez sur **Lecture seule**, **Lecture et écriture** ou **Aucun accès**.
![Diverses autorisations pour votre application GitHub](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
1. Dans « S’abonner aux événements », choisissez les événements que votre application doit recevoir.
1. Pour choisir l’emplacement d’installation de l’application, sélectionnez **Uniquement dans ce compte** ou **N’importe quel compte**. Pour plus d’informations sur les options d’installation, consultez « [Rendre une application GitHub publique ou privée](/apps/managing-github-apps/making-a-github-app-public-or-private/) ».
![Options d’installation de votre application GitHub](/assets/images/github-apps/github_apps_installation_options.png)
1. Cliquez sur **Créer une application GitHub**.
![Bouton de création d’une application GitHub](/assets/images/github-apps/github_apps_create_github_app.png)
