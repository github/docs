---
title: Visualisation et gestion de vos sessions SAML actives
intro: Vous pouvez visualiser et révoquer vos sessions SAML actives dans vos paramètres.
redirect_from:
  - /articles/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/viewing-and-managing-your-active-saml-sessions
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/viewing-and-managing-your-active-saml-sessions
versions:
  ghec: '*'
topics:
  - SSO
type: how_to
shortTitle: Active SAML sessions
ms.openlocfilehash: e69ad366de7cdfb14b6a2a13ae3bdc134111616a
ms.sourcegitcommit: b2e5d14036a700b781e91158a552f8c0b1f04839
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/15/2022
ms.locfileid: '148165585'
---
Vous pouvez voir la liste des appareils qui se sont connectés à votre compte et révoquer toutes les sessions SAML que vous ne reconnaissez pas.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.sessions %}
1. Sous « Sessions web », vous pouvez voir vos sessions SAML actives.

   ![Capture d’écran de la liste des sessions SAML actives](/assets/images/help/settings/saml-active-sessions.png)

1. Pour voir les détails d’une session, cliquez sur **Voir plus**.
   ![Capture d’écran des sessions SAML actives avec le bouton permettant d’ouvrir les détails des sessions SAML mis en évidence](/assets/images/help/settings/saml-expand-session-details.png)

1. Pour révoquer une session, cliquez sur **Révoquer SAML**.

   ![Capture d’écran de la page Détails de la session avec le bouton pour révoquer une session SAML mis en évidence](/assets/images/help/settings/saml-revoke-session.png)

  {% note %}

  **Remarque :** Quand vous révoquez une session, vous supprimez votre authentification SAML auprès de cette organisation. Pour accéder de nouveau à l’organisation, vous devrez utiliser l’authentification unique par le biais de votre fournisseur d’identité. Pour plus d’informations, consultez « [À propos de l’authentification à l’aide de l’authentification unique SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on) ».

  {% endnote %}

## Pour aller plus loin

- « [À propos de l’authentification à l’aide de l’authentification unique SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on) »
