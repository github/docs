---
title: Autorizar una clave SSH para usar con un inicio único de SAML
intro: 'Para usar una clave SSH con una organización que usa un inicio de sesión único (SSO) de SAML, primero debes autorizar la clave.'
redirect_from:
  - /articles/authorizing-an-ssh-key-for-use-with-a-saml-single-sign-on-organization
  - /articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - SSO
shortTitle: SSH Key with SAML
ms.openlocfilehash: f4b11c123c01d56263de883cbdd0f87c48eee04b
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147854287'
---
Puedes autorizar una clave SSH existente, o crear una nueva clave SSH, y luego autorizarla. Para más información sobre cómo crear una nueva clave SSH, consulte "[Generación de una nueva clave SSH y adición al agente de SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

{% data reusables.saml.must-authorize-linked-identity %}

{% data reusables.saml.authorized-creds-info %}

{% note %}

**Nota:** Si una organización revoca su autorización de clave SSH, no podrá volver a autorizar la misma clave. Deberás crear una nueva clave SSH y autorizarla. Para más información sobre cómo crear una nueva clave SSH, consulte "[Generación de una nueva clave SSH y adición al agente de SSH](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
1. A la derecha de la clave SSH que deseas autorizar, haz clic en **Configurar SSO**.

   ![Captura de pantalla del botón autorización del token de SSO](/assets/images/help/settings/ssh-sso-button.png)
1. A la derecha de la organización para la que te gustaría autorizar el token, haz clic en **Autorizar**.

   ![Captura de pantalla del botón autorización del token](/assets/images/help/settings/ssh-sso-authorize.png)

## Información adicional

- "[Búsqueda de claves SSH existentes](/articles/checking-for-existing-ssh-keys)"
- "[Acerca de la autenticación con el inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)"
