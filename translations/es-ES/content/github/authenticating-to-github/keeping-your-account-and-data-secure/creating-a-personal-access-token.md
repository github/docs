---
title: Crear un token de acceso personal
intro: Debes crear un token de acceso personal para utilizar como contraseña con la línea de comandos o con la API.
redirect_from:
  - /articles/creating-an-oauth-token-for-command-line-use/
  - /articles/creating-an-access-token-for-command-line-use/
  - /articles/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
  - /github/authenticating-to-github/creating-a-personal-access-token
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---

Los tokens de acceso personal (PAT) son una alternativa al uso de contraseñas para la autenticación en {% data variables.product.product_name %} cuando utilizas la [API de GitHub](/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) o la [línea de comandos](#using-a-token-on-the-command-line).

{% if currentVersion == "free-pro-team@latest" %}Si quieres utilizar un PAT para acceder a los recursos que pertenecen a una organización que utiliza el SSO de SAML, debes autorizarlo. Para obtener más información, consulta las secciónes "[Acerca de la autenticación, con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)" y "[Autorizar un token de acceso personal para su uso con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".{% endif %}

{% if currentVersion == "free-pro-team@latest" %}{% data reusables.user_settings.removes-personal-access-tokens %}{% endif %}

### Crear un token

{% if currentVersion == "free-pro-team@latest" %}1. [Verifica tu dirección de correo electrónico](/github/getting-started-with-github/verifying-your-email-address), si aún no ha sido verificada.{% endif %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.developer_settings %}
{% data reusables.user_settings.personal_access_tokens %}
4. Haz clic en **Generar un nuevo token**. ![Generar el botón para el nuevo token](/assets/images/help/settings/generate_new_token.png)
5. Asígnale a tu token un nombre descriptivo. ![Campo para la descripción del token](/assets/images/help/settings/token_description.png)
6. Selecciona los alcances o permisos que deseas otorgarle a este token. Para usar tu token para acceder a repositorios desde la línea de comando, selecciona **repo**.
   {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
   ![Seleccionar los alcances del token](/assets/images/help/settings/token_scopes.gif)
   {% elsif currentVersion == "github-ae@latest" %}
   ![Seleccionar los alcances del token](/assets/images/enterprise/github-ae/settings/access-token-scopes-for-ghae.png)
   {% endif %}
7. Haz clic en **Generar token**. ![Generar un botón para el token](/assets/images/help/settings/generate_token.png)
8. Haz clic en {% octicon "clippy" aria-label="The copy to clipboard icon" %} para copiar el token en tu portapapeles. Por razones de seguridad, después de navegar fuera de la págna, no podrás ver el token nuevamente.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Token recién creado](/assets/images/help/settings/personal_access_tokens.png)
   {% elsif currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}
   ![Token recién creado](/assets/images/help/settings/personal_access_tokens_ghe.png)
   {% else %}
   ![Token recién creado](/assets/images/help/settings/personal_access_tokens_ghe_legacy.png)
   {% endif %}
   {% warning %}

   **Advertencia:**Preserva tus tokens de la misma manera que tus contraseñas y no se las reveles a nadie. Cuando trabajes con la API, usa tokens como variables del entorno en lugar de codificarlos de forma rígida en tus programas.

   {% endwarning %}

{% if currentVersion == "free-pro-team@latest" %}9. Para usar tu token para autenticar a una organización que usa SAML SSO, [autoriza el token para el uso con una organización con inicio de sesión único SAML.](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% endif %}

### Usar un token en la línea de comando

{% data reusables.command_line.providing-token-as-password %}

Los tokens de acceso personal solo se pueden usar para operaciones HTTPS Git. Si tu repositorio usa una URL SSH remota, necesitarás [pasar de la URL SSH remota a HTTPS](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-ssh-to-https).

Si no se te solicita tu nombre de usuario y contraseña, tus credenciales pueden estar almacenadas en la caché de tu computadora. Puedes [actualizar tus credenciales en la keychain](/github/getting-started-with-github/updating-credentials-from-the-macos-keychain) para reemplazar tu contraseña anterior con el token.

En vez de ingresar tu PAT manualmente para cada operación de HTTPS de Git, puedes almacenarlo en caché con un cliente de Git. Git almacenará tus credenciales temporalmente en la memoria hasta que haya pasado un intervalo de vencimiento. También puedes almacenar el token en un archivo de texto simple que pueda leer Git antes de cada solicitud. Para obtener más información, consulta la sección "[ Almacenar tus credencialesde {% data variables.product.prodname_dotcom %} en el caché dentro de Git](/github/getting-started-with-github/caching-your-github-credentials-in-git)".

### Leer más

- "[Acerca de la autenticación en GitHub](/github/authenticating-to-github/about-authentication-to-github)"
