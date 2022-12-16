---
title: Création d’une application OAuth
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 0bde9fbadc2005a67ecfc561b21cae48f768975e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180342'
---
{% ifversion fpt or ghec %} {% note %}

  **Remarque :** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
4. Cliquez sur **Nouvelle application OAuth**.
![Bouton de création d’une application OAuth](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **Remarque :** Si vous n’avez pas encore créé d’application, ce bouton indique **Inscrire une nouvelle application**.

  {% endnote %}
6. Dans « Nom de l’application », tapez le nom de votre application.
![Champ du nom de votre application](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **Avertissement** : Dans votre application OAuth, utilisez uniquement les informations que vous considérez publiques. Évitez d’utiliser des données sensibles, par exemple des URL internes, au moment de la création d’une application OAuth.

  {% endwarning %}

7. Dans « URL de la page d’accueil », tapez l’URL complète du site web de votre application.
![Champ de l’URL de la page d’accueil de votre application](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. Si vous le souhaitez, dans « Description de l’application », tapez une description de votre application qui sera visible par les utilisateurs.
![Champ de la description de votre application](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. Dans « URL de rappel d’autorisation », tapez l’URL de rappel de votre application.
![Champ de l’URL de rappel d’autorisation de votre application](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png) {% ifversion fpt or ghes or ghec %} {% note %}

   **Remarque :** Les applications OAuth ne peuvent pas avoir plusieurs URL de rappel, contrairement aux {% data variables.product.prodname_github_apps %}.

   {% endnote %} {% endif %}{% ifversion device-flow-is-opt-in %}
1. Si votre application OAuth doit utiliser le flux d’appareil pour identifier et autoriser les utilisateurs, cliquez sur **Activer le flux d’appareil**. Pour plus d’informations sur le flux d’appareil, consultez « [Autorisation des applications OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow) ».
  ![Capture d’écran montrant le champ d’activation du flux d’appareil](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
2.  Cliquez sur **Register application**.
![Bouton permettant d’inscrire une application](/assets/images/oauth-apps/oauth_apps_register_application.png)
