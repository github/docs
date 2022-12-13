---
title: Creación de un token de acceso personal
intro: 'Puedes crear un {% data variables.product.pat_generic %} para usarlo en lugar de una contraseña con la línea de comandos o con la API.'
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
shortTitle: 'Create a {% data variables.product.pat_generic %}'
ms.openlocfilehash: 78928110c7a8861a9c13d093799454f945eaaf2c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107753'
---
{% warning %}

**Advertencia**: Trata los tokens de acceso como si fueran contraseñas.

Para acceder a {% data variables.product.company_short %} desde la línea de comandos, considera la posibilidad de usar la {% data variables.product.prodname_cli %} o el [Administrador de credenciales de Git](https://github.com/GitCredentialManager/git-credential-manager/blob/main/README.md), en lugar de crear un {% data variables.product.pat_generic %}.

Al usar un {% data variables.product.pat_generic %} en un script, considera la posibilidad de almacenar el token como un secreto y ejecutar el script a través de {% data variables.product.prodname_actions %}. Para obtener más información, consulta "[Secretos cifrados](/actions/security-guides/encrypted-secrets)".{%- ifversion ghec or fpt %} También puedes almacenar el token como un secreto de {% data variables.product.prodname_codespaces %} y ejecutar el script en {% data variables.product.prodname_codespaces %}. Para más información, consulta "[Administración de secretos cifrados para los codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}

Si estas opciones no son posibles, considera la posibilidad de usar otro servicio como [la CLI de 1Password](https://developer.1password.com/docs/cli/secret-references/) para almacenar el token de forma segura.

{% endwarning %}

## Acerca del {% data variables.product.pat_generic %}

Un {% data variables.product.pat_generic_caps %} es una alternativa al uso de contraseñas para la autenticación en {% data variables.product.product_name %} cuando se usa la [API de GitHub](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) o la [línea de comandos](#using-a-token-on-the-command-line). El {% data variables.product.pat_generic_caps %} está diseñado para acceder a los recursos de {% data variables.product.company_short %} en tu nombre. Para acceder a los recursos en nombre de una organización, o en el caso de las integraciones de larga duración, debes usar una {% data variables.product.prodname_github_app %}. Para más información, consulte "[Acerca de las actualizaciones](/developers/apps/getting-started-with-apps/about-apps)".

{% ifversion pat-v2 %}

{% data variables.product.company_short %} admite actualmente dos tipos de {% data variables.product.pat_generic %}: {% data variables.product.pat_v2 %} y {% data variables.product.pat_v1_plural %}. {% data variables.product.company_short %} recomienda usar un {% data variables.product.pat_v2 %} siempre que sea posible, en lugar de {% data variables.product.pat_v1_plural %}. El {% data variables.product.pat_v2_caps %} tiene varias ventajas de seguridad con respecto a los {% data variables.product.pat_v1_plural %}:

- Cada token solo puede acceder a los recursos que pertenecen a un único usuario u organización.
- Cada token solo puede acceder a repositorios específicos.
- A cada token se le conceden permisos específicos, que ofrecen más control que los ámbitos concedidos a los {% data variables.product.pat_v1_plural %}.
- Cada token debe tener una fecha de expiración.
- Los propietarios de la organización pueden requerir la aprobación de cualquier {% data variables.product.pat_v2 %} que pueda acceder a los recursos de la organización.{% ifversion ghec or ghes or ghae %}
- Los propietarios de la empresa pueden requerir la aprobación de cualquier {% data variables.product.pat_v2 %} que pueda acceder a los recursos de las organizaciones que pertenecen a la empresa.{% endif %}

Además, los propietarios de la organización pueden restringir el acceso del {% data variables.product.pat_v1 %} a su organización{% ifversion ghec or ghes or ghae %}, y los propietarios de la empresa pueden restringir el acceso del {% data variables.product.pat_v1 %} a la empresa u organizaciones propiedad de la empresa{% endif %}.

{% data reusables.user-settings.patv2-limitations %}

{% endif %}

{% ifversion fpt or ghec %}{% data reusables.user-settings.removes-personal-access-tokens %}{% endif %}

{% ifversion pat-v2 %}

## Creación de un {% data variables.product.pat_v2 %}

{% note %}

**Nota**: {% data reusables.user-settings.pat-v2-beta %}

{% endnote %}

{% ifversion fpt or ghec %}1. [Verifica tu dirección de correo electrónico](/github/getting-started-with-github/verifying-your-email-address), si todavía no lo has hecho.{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %}
1. En la barra lateral izquierda, en **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , haz clic en **Tokens específicos**.
1. Haga clic en **Generate new token** (Generar nuevo token).
1. Opcionalmente, en **Nombre del token**, escribe un nombre para el token.
1. En **Expiración**, selecciona cuándo expirará el token.
1. Opcionalmente, en **Descripción**, agrega una nota para describir el propósito del token.
1. En **Propietario del recurso**, selecciona un propietario del recurso. El token solo podrá acceder a los recursos que pertenecen al propietario del recurso seleccionado. Las organizaciones a las que pertenezcas no aparecerán a menos que hayan optado por el uso de un {% data variables.product.pat_v2 %}. Para obtener más información, consulta "[Establecimiento de una directiva de {% data variables.product.pat_generic %} para la organización](/organizations/managing-programmatic-access-to-your-organization/setting-a-personal-access-token-policy-for-your-organization)".{% ifversion ghec or ghae %} Es posible que tengas que realizar un inicio de sesión único (SSO) de SAML si la organización seleccionada lo requiere y aún no tienes una sesión de SAML activa.{% endif %}
1. Opcionalmente, si el propietario del recurso es una organización que requiere aprobación para el uso de un {% data variables.product.pat_v2 %}, escribe una justificación para la solicitud en el cuadro que aparece debajo del propietario del recurso.
1. En **Acceso al repositorio**, selecciona los repositorios a los que quieres que acceda el token. Debes elegir el acceso mínimo al repositorio que satisfaga tus necesidades. Los tokens siempre incluyen acceso de solo lectura a todos los repositorios públicos de GitHub.
1. Si elegiste **Solo repositorios seleccionados** en el paso anterior, en la lista desplegable **Repositorios seleccionados**, elige los repositorios a los que quieres que acceda el token.
1. En **Permisos**, selecciona los permisos que se concederán al token. En función del propietario del recurso y del acceso al repositorio que hayas especificado, hay permisos de repositorio, de organización y de cuenta. Debes elegir los permisos mínimos que necesites. Para obtener más información sobre los permisos necesarios para cada operación de la API REST, consulta "[Permisos necesarios para el {% data variables.product.pat_v2 %}](/rest/overview/permissions-required-for-fine-grained-personal-access-tokens)".
1. Haga clic en **Generar token**.

Si seleccionaste una organización como propietario del recurso y la organización requiere aprobación para el {% data variables.product.pat_v2 %}, el token se marcará como `pending` hasta que lo revise un administrador de la organización. El token solo podrá leer los recursos públicos hasta que se apruebe. Si eres propietario de la organización, tu solicitud se aprobará automáticamente. Para obtener más información, consulta "[Revisión y revocación de un {% data variables.product.pat_generic %} en la organización](/organizations/managing-programmatic-access-to-your-organization/reviewing-and-revoking-personal-access-tokens-in-your-organization)".

{% endif %}

## Creación de un {% data variables.product.pat_v1 %}

{% ifversion pat-v2 %}

{% note %}

**Nota**: Los propietarios de la organización pueden restringir el acceso del {% data variables.product.pat_v1 %} a la organización. Si intentas usar un {% data variables.product.pat_v1 %} para acceder a los recursos de una organización que ha deshabilitado el acceso del {% data variables.product.pat_v1 %}, se producirá un error en la solicitud con una respuesta 403. En su lugar, debes usar una {% data variables.product.prodname_github_app %}, una {% data variables.product.prodname_oauth_app %} o un {% data variables.product.pat_v2 %}.

{% endnote %}

{% endif %}

{% ifversion pat-v2 %}

{% warning %}

**Nota**: Tu {% data variables.product.pat_v1 %} puede acceder a todos los repositorios a los que tengas acceso. {% data variables.product.company_short %} recomienda usar en su lugar un {% data variables.product.pat_v2 %}, que puedes restringir a repositorios específicos. En un {% data variables.product.pat_v2_caps %} también puedes establecer permisos específicos, en lugar de ámbitos amplios.

{% endwarning %}

{% endif %}

{% ifversion fpt or ghec %}1. [Verifica tu dirección de correo electrónico](/github/getting-started-with-github/verifying-your-email-address), si todavía no lo has hecho.{% endif %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% ifversion pat-v2 %}1. En la barra lateral izquierda, en **{% octicon "key" aria-label="The key icon" %} {% data variables.product.pat_generic_caps %}** , haz clic en **Tokens (clásicos)** .{% else %}{% data reusables.user-settings.personal_access_tokens %}{% endif %} {% ifversion pat-v2%}1. Selecciona **Generar nuevo token** y, luego, haz clic en **Generar nuevo token (clásico)** .{% else %}{% data reusables.user-settings.generate_new_token %}{% endif %}
5. Asígnale a tu token un nombre descriptivo.
   ![Campo para la descripción del token](/assets/images/help/settings/token_description.png)
6. Para asignar una expiración al token, seleccione el menú desplegable **Expiración** y, después, haga clic en un valor predeterminado, o bien use el selector de calendario.
   ![Campo para la expiración del token](/assets/images/help/settings/token_expiration.png)
7. Selecciona los ámbitos que quieres concederle a este token. A fin de usar el token para acceder a repositorios desde la línea de comandos, seleccione **repo**. Un token sin alcances asignados solo puede acceder a información pública. Para más información, vea "[Ámbitos disponibles](/apps/building-oauth-apps/scopes-for-oauth-apps#available-scopes)".
   {% ifversion fpt or ghes or ghec %} ![Selección de ámbitos de token](/assets/images/help/settings/token_scopes.gif) {% elsif ghae %} ![Selecting token scopes](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png) {% endif %}
8. Haga clic en **Generar token**.
   ![Botón Generar token](/assets/images/help/settings/generate_token.png) {% ifversion fpt or ghec %} ![Token recién creado](/assets/images/help/settings/personal_access_tokens.png) {% elsif ghes or ghae %} ![Token recién creado](/assets/images/help/settings/personal_access_tokens_ghe.png) {% else %} ![Token recién creado](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png){% endif %}{% ifversion fpt or ghec %}
1. Para usar tu token para acceder a los recursos que pertenecen a una organización que usa el inicio de sesión único de SAML, autoriza el token. Para obtener más información, consulta "[Autorización de un {% data variables.product.pat_generic %} para usarlo con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}{% endif %}

## Usar un token en la línea de comando

{% data reusables.command_line.providing-token-as-password %}

El {% data variables.product.pat_generic_caps %} solo se puede usar para las operaciones HTTPS de Git. Si en el repositorio se usa una dirección URL remota SSH, tendrá que [cambiarlo de SSH a HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Si no se te solicita tu nombre de usuario y contraseña, tus credenciales pueden estar almacenadas en la caché de tu computadora. Puede [actualizar las credenciales en la cadena de claves](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain) para reemplazar la contraseña antigua por el token.

En lugar de escribir manualmente el {% data variables.product.pat_generic %} para cada operación HTTPS de Git, puedes almacenar en caché el {% data variables.product.pat_generic %} con un cliente de Git. Git almacenará tus credenciales temporalmente en la memoria hasta que haya pasado un intervalo de vencimiento. También puedes almacenar el token en un archivo de texto simple que pueda leer Git antes de cada solicitud. Para más información, vea "[Almacenamiento en caché de las credenciales de {% data variables.product.prodname_dotcom %} en Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".

## Información adicional

- "[Acerca de la autenticación en GitHub](/github/authenticating-to-github/about-authentication-to-github)"
- "[Expiración y revocación de tokens](/github/authenticating-to-github/keeping-your-account-and-data-secure/token-expiration-and-revocation)"
