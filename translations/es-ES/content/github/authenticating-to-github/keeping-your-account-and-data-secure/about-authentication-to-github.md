---
title: Acerca de la autenticación en GitHub
intro: 'Puedes acceder de manera segura a los recursos de tu cuenta si te atutenticas en {% data variables.product.product_name %}, utilizando diferentes credenciales dependiendo de en donde te autenticas.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/about-authentication-to-github
---

### Acerca de la autenticación en {% data variables.product.prodname_dotcom %}

Para mantener tu cuenta segura, debes atutenticarte antes de poder acceder a{% if currentVersion != "github-ae@latest" %} algunos{% endif %} recursos en {% data variables.product.product_name %}. Cuando te autenticas en {% data variables.product.product_name %}, proporcionas o confirmas las credenciales que son específicas para ti y así compruebas de que eres exactamente quien estás declarando ser.

Puedes acceder a tus recursos en {% data variables.product.product_name %} de muchas maneras: en el buscador, a través de {% data variables.product.prodname_desktop %} o de alguna otra aplicación de escritorio, con la API o a través de la línea de comandos. Cada forma de acceder a {% data variables.product.product_name %} es compatible con diferentes modalidades de autenticación.

- {% if currentVersion == "github-ae@latest" %}Tu proveedor de identidad (IdP){% else %}Nombre de usuario y contraseña con autenticación bifactorial{% endif %}
- Token de acceso personal
- Llave SSH

### Autenticarte en tu buscador

Puedes autenticarte en {% data variables.product.product_name %} en tu buscador {% if currentVersion == "github-ae@latest" %} utilizando tu IdP. Para obtener más información, consulta la sección "[Acera de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".{% else %} de varias formas.

- **Nombre de usuario y contraseña únicamente**
    - Crearás una contraseña cuando crees tu cuenta de usuario en {% data variables.product.product_name %}. Te recomendamos que utilices un administrador de contraseñas para generar una contraseña aleatoria y única. Para obtener más información, consulta la sección "[Crear una contraseña fuerte](/github/authenticating-to-github/creating-a-strong-password)".
- **Autenticación de dos factores (2FA)** (recomendada)
    - Si habilitas la 2FA, también te pediremos que proporciones un código que genera una aplicación en tu dispositivo móvil o que mandes un mensaje de texto (SMS) después de que ingreses tu usuario y contraseña con éxito. Para obtener más información, consulta "[Acceder a {% data variables.product.prodname_dotcom %} utilizando autenticación de dos factores](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website)".
    - Adicionalmente a la autenticación con una aplicación móvil o con un mensaje de texto, puedes agregar opcionalmente un método secundario de autenticación con una llave de seguridad utilizando WebAuthn. Para obtener más información, consulta la sección "[Configurar la autenticación de dos factores utilizando una llave de seguridad](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".
{% endif %}

### Autenticarte con {% data variables.product.prodname_desktop %}

Puedes autenticarte con {% data variables.product.prodname_desktop %} utilizando tu buscador. Para obtener más información, consulta "[Autenticar a {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)."

### Autenticarte con la API

Puedes autenticarte con la API de varias formas.

- **Tokens de acceso personal**
    - En situaciones limitadas, tales como cuando se hacen pruebas, puedes utilizar un token de acceso personal para acceder a la API. El utilizar un token de acceso personal te habilita para revocarle el acceso en cualquier momento. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
- **Flujo de aplicaciones Web**
    - Para las Apps de OAuth productivas, debes autenticarte utilizando el flujo de las aplicaciones web. Para obtener más información, consulta la sección "[Autorizar las Apps de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)".
- **GitHub Apps**
    - Para las Github Apps productivas, debes autenticarte en nombre de la instalación de la app. Para obtener más información, consulta la sección "[Autenticarse con {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/authenticating-with-github-apps/)".

### Autenticarte con la línea de comandos

Puedes acceder a los repositorios en {% data variables.product.product_name %} desde la línea de comandos en dos formas, HTTPS y SSH, y ambas tienen una forma diferente para autenticarte. El método para autenticarte se determina con base en si escoges una URL remota de HTTPS o SSH cuando clonas el repositorio. Para obtener más información acerca de la forma en la que accedes, consulta la sección "[Acerca de los repositorios remotos](/github/getting-started-with-github/about-remote-repositories)".

* Puedes trabajar con todos los repositorios en {% data variables.product.product_name %} a través de HTTPS, aún si estás detrás de un cortafuegos o de un proxy. Cada vez que utilizas Git para autenticarte con {% data variables.product.product_name %}, se te pedirá que ingreses tus credenciales para autenticarte con {% data variables.product.product_name %} a menos de que las guardes en caché con un [asistente de credenciales](/github/getting-started-with-github/caching-your-github-credentials-in-git). {% data reusables.user_settings.password-authentication-deprecation %}

* Puedes trabajar con todos los repositorios en {% data variables.product.product_name %} a través de SSH, aunque los cortafuegos y los proxys podrían rehusarse a permitir las conexiones de SSH. Para utilizar SSH necesitas generar un par de llaves pública/privada de SSH en tu máquina local y agregar la llave pública a tu cuenta de {% data variables.product.product_name %}. Cada que utilizas Git para autenticarte con {% data variables.product.product_name %}, se te solicitará que ingreses tu frase de ingreso de la llave SSH, a menos de que hayas [almacenado la llave](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent). Para obtener más información, consulta "[Generar una nueva llave SSH y agregarla a ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)."

{% if currentVersion == "free-pro-team@latest" %}Para utilizar un token de acceso personal o llave SSH para acceder a los recursos que pertenecen a una organización que utilice el inicio de sesión único de SAML, también debes autorizar el token personal o llave SSH. Para obtener más información, consulta la sección "[Autorizar un token de acceso personal para utilizarlo con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" o la sección "[Autorizar una llave SSH para su uso con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}

### Formatos de los tokens de {% data variables.product.company_short %}

{% data variables.product.company_short %} emite tokens que inician con un prefijo para indicar el tipo de los mismos.

| Tipo de token                                                                            | Prefijo | Más información                                                                                                                                                             |
|:---------------------------------------------------------------------------------------- |:------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Token de acceso personal                                                                 | `ghp_`  | "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)"                                                                    |
| Token de acceso OAuth                                                                    | `gho_`  | "[Autorizar las {% data variables.product.prodname_oauth_apps %}](/developers/apps/authorizing-oauth-apps)"                                                               |
| Token de usuario a servidor para una {% data variables.product.prodname_github_app %}  | `ghu_`  | "[Identificar y autorizar a los usuarios para las {% data variables.product.prodname_github_apps %}](/developers/apps/identifying-and-authorizing-users-for-github-apps)" |
| Token de servidor a servidor para una {% data variables.product.prodname_github_app %} | `ghs_`  | "[Autenticarse con las {% data variables.product.prodname_github_apps %}](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)"            |
| Actualizar un token para una {% data variables.product.prodname_github_app %}          | `ghr_`  | "[Actualizar los tokens de acceso de usuario a servidor](/developers/apps/refreshing-user-to-server-access-tokens)"                                                         |

{% endif %}
