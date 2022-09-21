---
title: Creación de un token de acceso personal
intro: Puedes crear un token de acceso personal para utilizar como contraseña con la línea de comandos o con la API.
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use
  - /articles/creating-an-access-token-for-command-line-use
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token
  - /github/extending-github/git-automation-with-oauth-tokens
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Create a PAT
ms.openlocfilehash: 437e06ba2fdf82252702106600ac6da73ee4c792
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064430'
---
{% note %}

**Notas:**

- Si usas la {% data variables.product.prodname_cli %} para autenticarte en {% data variables.product.product_name %} en la línea de comandos, puedes omitir la generación de un token de acceso personal y autenticarte mediante el explorador web. Para más información sobre la autenticación con {% data variables.product.prodname_cli %}, vea [`gh auth login`](https://cli.github.com/manual/gh_auth_login).
-  El [Administrador de credenciales de Git](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md) es una alternativa segura y multiplataforma al uso de tokens de acceso personal (PAT) y elimina la necesidad de administrar el ámbito y la expiración de PAT. Para obtener instrucciones de instalación, consulta [Descargar e instalar](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md#download-and-install) en el repositorio GitCredentialManager/git-credential-manager.

{% endnote %}

Los tokens de acceso personal (PAT) son una alternativa al uso de contraseñas para la autenticación en {% data variables.product.product_name %} cuando se usa la [API de GitHub](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) o la [línea de comandos](#using-a-token-on-the-command-line).

{% ifversion fpt or ghec %}Si quiere utilizar un PAT para acceder a los recursos que pertenecen a una organización que usa el SSO de SAML, tendrá que autorizarlo. Para más información, vea "[Acerca de la autenticación con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on)" y "[Autorización de un token de acceso personal para su uso con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

Un token sin alcances asignados solo puede acceder a información pública. A fin de usar el token para acceder a repositorios desde la línea de comandos, seleccione `repo`. Para más información, vea "[Ámbitos disponibles](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)".

## Creación de un token

{% ifversion fpt or ghec %}1. [Verifica la dirección de correo electrónico](/github/getting-started-with-github/verifying-your-email-address), si todavía no se ha verificado.{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
5. Asígnale a tu token un nombre descriptivo.
   ![Campo de descripción del token](/assets/images/help/settings/token_description.png){% ifversion fpt or ghes > 3.2 or ghae or ghec %}
6. Para asignar una expiración al token, seleccione el menú desplegable **Expiración** y, después, haga clic en un valor predeterminado, o bien use el selector de calendario.
   ![Campo de expiración del token](/assets/images/help/settings/token_expiration.png){% endif %}
7. Selecciona los alcances o permisos que deseas otorgarle a este token. A fin de usar el token para acceder a repositorios desde la línea de comandos, seleccione **repo**.
   {% ifversion fpt or ghes or ghec %} ![Selección de ámbitos de token](/assets/images/help/settings/token_scopes.gif) {% elsif ghae %} ![Selecting token scopes](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png) {% endif %}
8. Haga clic en **Generar token**.
   ![Botón Generar token](/assets/images/help/settings/generate_token.png) {% ifversion fpt or ghec %} ![Token recién creado](/assets/images/help/settings/personal_access_tokens.png) {% elsif ghes or ghae %} ![Token recién creado](/assets/images/help/settings/personal_access_tokens_ghe.png) {% else %} ![Token recién creado](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png) {% endif %} {% warning %}

   **Advertencia:** Trate los tokens como si fueran contraseñas y manténgalos en secreto. Cuando trabajes con la API, usa tokens como variables del entorno en lugar de codificarlos de forma rígida en tus programas. 

   {% endwarning %}

{% ifversion fpt or ghec %}9. Para utilizar tu token o autenticarte en una organización que utilice el inicio de sesión único de SAML, autoriza el token. Para más información, vea "[Autorización de un token de acceso personal para usarlo con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}

## Usar un token en la línea de comando

{% data reusables.command_line.providing-token-as-password %}

Los tokens de acceso personal solo se pueden usar para operaciones HTTPS Git. Si en el repositorio se usa una dirección URL remota SSH, tendrá que [cambiarlo de SSH a HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Si no se te solicita tu nombre de usuario y contraseña, tus credenciales pueden estar almacenadas en la caché de tu computadora. Puede [actualizar las credenciales en la cadena de claves](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain) para reemplazar la contraseña antigua por el token.

En vez de ingresar tu PAT manualmente para cada operación de HTTPS de Git, puedes almacenarlo en caché con un cliente de Git. Git almacenará tus credenciales temporalmente en la memoria hasta que haya pasado un intervalo de vencimiento. También puedes almacenar el token en un archivo de texto simple que pueda leer Git antes de cada solicitud. Para más información, vea "[Almacenamiento en caché de las credenciales de {% data variables.product.prodname_dotcom %} en Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".

## Información adicional

- "[Acerca de la autenticación en GitHub](/github/authenticating-to-github/about-authentication-to-github)"{% ifversion fpt or ghae or ghes > 3.2 or ghec %}
- "[Expiración y revocación de tokens](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"{% endif %}
