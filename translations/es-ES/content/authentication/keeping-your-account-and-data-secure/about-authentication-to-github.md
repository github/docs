---
title: Acerca de la autenticación en GitHub
intro: 'Puedes acceder de manera segura a los recursos de tu cuenta si te atutenticas en {% data variables.product.product_name %}, utilizando diferentes credenciales dependiendo de en donde te autenticas.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/about-authentication-to-github
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/about-authentication-to-github
shortTitle: Authentication to GitHub
ms.openlocfilehash: d40d3e18c75c2e5d8f16ebbb4fd9b6fdf03e2a73
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718097'
---
## Acerca de la autenticación en {% data variables.product.prodname_dotcom %}

A fin de proteger la cuenta, debe autenticarse para poder acceder a{% ifversion not ghae %} determinados{% endif %} recursos en {% data variables.product.product_name %}. Cuando te autenticas en {% data variables.product.product_name %}, proporcionas o confirmas las credenciales que son específicas para ti y así compruebas de que eres exactamente quien estás declarando ser.

Puedes acceder a tus recursos en {% data variables.product.product_name %} de muchas maneras: en el buscador, a través de {% data variables.product.prodname_desktop %} o de alguna otra aplicación de escritorio, con la API o a través de la línea de comandos. Cada forma de acceder a {% data variables.product.product_name %} es compatible con diferentes modalidades de autenticación.
{%- ifversion not fpt %}
- Tu proveedor de identidades (IdP){% endif %}{% ifversion not ghae %}
- Nombre de usuario y contraseña con autenticación en dos fases{% endif %}
- Token de acceso personal
- Llave SSH

## Autenticarte en tu buscador

{% ifversion ghae %}

Puedes autenticarte en {% data variables.product.product_name %} en el explorador mediante el IdP. Para más información, vea "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)".

{% else %}

{% ifversion fpt or ghec %}

Si eres miembro de una {% data variables.product.prodname_emu_enterprise %}, te autenticarás en {% data variables.product.product_name %} en tu buscador utilizando tu IdP. Para obtener más información, consulta "[Autenticarse como usuario administrado](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users#authenticating-as-a-managed-user){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %} 

Si no eres miembro de una {% data variables.product.prodname_emu_enterprise %}, te autenticarás utilizando tu nombre de usuario y contraseña de {% data variables.product.prodname_dotcom_the_website %}. También puedes usar la autenticación en dos fases y el inicio de sesión único de SAML, que los propietarios de la organización y de la empresa pueden requerir.

{% else %}

Puedes autenticarte en {% data variables.product.product_name %} desde el explorador de diversas formas.

{% endif %}

- **Solo nombre de usuario y contraseña**
    - Crearás una contraseña cuando crees tu cuenta en {% data variables.product.product_name %}. Te recomendamos que utilices un administrador de contraseñas para generar una contraseña aleatoria y única. Para obtener más información, consulta "[Creación de una contraseña segura](/github/authenticating-to-github/creating-a-strong-password)".{% ifversion fpt or ghec %}
  - Si no has habilitado la autenticación en dos fases, {% data variables.product.product_name %} solicitará una verificación adicional cuando inicies sesión por primera vez desde un dispositivo no reconocido, como un nuevo perfil de explorador, un explorador en el que se hayan eliminado las cookies o un equipo nuevo.

   Después de proporcionar tu nombre de usuario y contraseña, se te pedirá que proporciones un código de verificación que te enviaremos por correo electrónico. Si tienes instalada la aplicación {% data variables.product.prodname_mobile %}, recibirás una notificación allí. Para obtener más información, consulta "[{% data variables.product.prodname_mobile %}](/get-started/using-github/github-mobile)."{% endif %}
- **Autenticación en dos fases(2FA)** (recomendada)
    - Si habilitas la autenticación en dos fases, después de escribir correctamente el nombre de usuario y la contraseña, también te pediremos que proporciones un código generado por una aplicación de contraseñas de un solo uso y duración definida (TOTP) en el dispositivo móvil{% ifversion fpt or ghec %} o enviado en un mensaje de texto (SMS){% endif %}. Para más información, vea "[Acceder a {% data variables.product.prodname_dotcom %} mediante la autenticación en dos fases](/github/authenticating-to-github/accessing-github-using-two-factor-authentication#providing-a-2fa-code-when-signing-in-to-the-website)".
    - Además de la autenticación con una aplicación TOTP{% ifversion fpt or ghec %} o un mensaje de texto{% endif %}, opcionalmente puedes agregar un método alternativo de autenticación con {% ifversion fpt or ghec %}{% data variables.product.prodname_mobile %} o{% endif %} una clave de seguridad mediante WebAuthn. Para obtener más información, consulta {% ifversion fpt or ghec %}"[Configuración de la autenticación en dos fases con {% data variables.product.prodname_mobile %}](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication#configuring-two-factor-authentication-using-github-mobile)" and {% endif %}"[Configuración de la autenticación en dos fases con una clave de seguridad](/github/authenticating-to-github/configuring-two-factor-authentication#configuring-two-factor-authentication-using-a-security-key)".{% ifversion ghes %}
- **Autenticación externa**
  - El administrador del sitio puede configurar {% data variables.product.product_location %} para usar la autenticación externa en lugar de un nombre de usuario y una contraseña. Para obtener más información, consulta "[Métodos de autenticación externos](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#external-authentication)". {% endif %} {% ifversion fpt or ghec %}
- **Inicio de sesión único de SAML**
  - Para poder acceder a los recursos que pertenecen a una organización o una cuenta empresarial que usa el inicio de sesión único de SAML, es posible que tengas que autenticarte también a través de un IdP. Para obtener más información, consulta "[Acerca de la autenticación con el inicio de sesión único de SAML](/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}{% endif %}

{% endif %}

## Autenticarte con {% data variables.product.prodname_desktop %}
Puedes autenticarte con {% data variables.product.prodname_desktop %} utilizando tu buscador. Para más información, vea "[Autenticación en {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)".

## Autenticarte con la API

Puedes autenticarte con la API de varias formas.

- **Tokens de acceso personal**
    - En situaciones limitadas, tales como cuando se hacen pruebas, puedes utilizar un token de acceso personal para acceder a la API. El utilizar un token de acceso personal te habilita para revocarle el acceso en cualquier momento. Para más información, vea "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)".
- **Flujo de aplicaciones web**
    - Para las Apps de OAuth productivas, debes autenticarte utilizando el flujo de las aplicaciones web. Para más información, vea "[Autorización de aplicaciones de OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow)".
- **Aplicaciones de GitHub**
    - Para las Github Apps productivas, debes autenticarte en nombre de la instalación de la app. Para más información, vea "[Autenticación con {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/authenticating-with-github-apps/)".

## Autenticarte con la línea de comandos

Puedes acceder a los repositorios en {% data variables.product.product_name %} desde la línea de comandos en dos formas, HTTPS y SSH, y ambas tienen una forma diferente para autenticarte. El método para autenticarte se determina con base en si escoges una URL remota de HTTPS o SSH cuando clonas el repositorio. Para más información sobre la forma de acceder, vea "[Acerca de los repositorios remotos](/github/getting-started-with-github/about-remote-repositories)".

### HTTPS

Puedes trabajar con todos los repositorios en {% data variables.product.product_name %} a través de HTTPS, aún si estás detrás de un cortafuegos o de un proxy.

Si te autenticas con el {% data variables.product.prodname_cli %}, puedes ya sea autenticarte con un token de acceso personal o a través del buscador web. Para más información sobre la autenticación con {% data variables.product.prodname_cli %}, vea [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

Si te autenticas sin el {% data variables.product.prodname_cli %}, debes autenticarte con un token de acceso personal. {% data reusables.user-settings.password-authentication-deprecation %} Cada vez que uses Git para autenticarte con {% data variables.product.product_name %}, se te pedirá que escribas las credenciales para autenticarte con {% data variables.product.product_name %}, a menos que las almacene en caché con un [asistente de credenciales](/github/getting-started-with-github/caching-your-github-credentials-in-git).

### SSH

Puedes trabajar con todos los repositorios de {% data variables.product.product_name %} a través de SSH, aunque los cortafuegos y proxies podrían rehusarse a permitir conexiones SSH.

Si te autenticas con el{% data variables.product.prodname_cli %}, este encontrará llaves SSH públicas en tu máquina y te pedirá seleccionar una para cargar. Si el {% data variables.product.prodname_cli %} no encuentra una llave pública SSH para cargar, este puede generar un par de llaves SSH pública/privada y cargar la llave pública a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Entonces podrás ya sea autenticarte con un token de acceso personal o a través del buscador web. Para más información sobre la autenticación con {% data variables.product.prodname_cli %}, vea [`gh auth login`](https://cli.github.com/manual/gh_auth_login).

Si te autenticas sin el {% data variables.product.prodname_cli %}, necesitarás generar un par de llaves pública/privada en tu máquina local y agregar la llave pública a tu cuenta de {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}. Para más información, vea "[Generación de una nueva clave SSH y adición a ssh-agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)". Cada vez que use Git para autenticarse con {% data variables.product.product_name %}, se le pedirá que escriba la frase de contraseña de la clave SSH, a menos que haya [almacenado la clave](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent).

{% ifversion fpt or ghec %}
### Autorizar para el inicio de sesión única de SAML

Para usar un token de acceso personal o una clave SSH para acceder a los recursos propiedad de una organización que usa el inicio de sesión único de SAML, también tendrás que autorizar el token personal o la clave SSH. Para más información, vea "[Autorización de un token de acceso personal para su uso con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" y "[Autorización de una clave SSH para su uso con el inicio de sesión único de SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on){% ifversion fpt %}" en la documentación de {% data variables.product.prodname_ghe_cloud %}.{% else %}".{% endif %}{% endif %}

## Formatos de los tokens de {% data variables.product.company_short %}

{% data variables.product.company_short %} emite tokens que inician con un prefijo para indicar el tipo de los mismos.

| Tipo de token | Prefijo | Más información |
| :- | :- | :- |
| Token de acceso personal | `ghp_` | "[Creación de un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)" |
| Token de acceso OAuth | `gho_` | "[Autorización de {% data variables.product.prodname_oauth_apps %}](/developers/apps/authorizing-oauth-apps)" |
| Token de usuario a servidor para una {% data variables.product.prodname_github_app %} | `ghu_` | "[Identificación y autorización de usuarios para {% data variables.product.prodname_github_apps %}](/developers/apps/identifying-and-authorizing-users-for-github-apps)" |
| Token de servidor a servidor para una {% data variables.product.prodname_github_app %} | `ghs_` | "[Autenticación con {% data variables.product.prodname_github_apps %}](/developers/apps/authenticating-with-github-apps#authenticating-as-an-installation)" |
| Actualizar un token para una {% data variables.product.prodname_github_app %} | `ghr_` | "[Actualización de tokens de acceso de usuario a servidor](/developers/apps/refreshing-user-to-server-access-tokens)" |

