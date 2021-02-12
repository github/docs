---
title: Acerca de la autenticación con el inicio de sesión único de SAML
intro: 'You can access {% if currentVersion == "github-ae@latest" %}{% data variables.product.product_location %}{% elsif currentVersion == "free-pro-team@latest" %}an organization that uses SAML single sign-on (SSO){% endif %} by authenticating {% if currentVersion == "github-ae@latest" %}with SAML single sign-on (SSO) {% endif %}through an identity provider (IdP).{% if currentVersion == "free-pro-team@latest" %} After you authenticate with the IdP successfully from {% data variables.product.product_name %}, you must authorize any personal access token, SSH key, or {% data variables.product.prodname_oauth_app %} you would like to access the organization''s resources.{% endif %}'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
  github-ae: '*'
---

### About authentication with SAML SSO

{% if currentVersion == "github-ae@latest" %}

El SSO de SAML permite que un propietario de empresa controle centralmente y asegure el acceso a {% data variables.product.product_name %} desde un IdP de SAML. Cuando visitas {% data variables.product.product_location %} en un buscador, {% data variables.product.product_name %} te redireccionará a tu IdP para autenticarte. Después de que te autenticas exitosamente con una cuenta en el IdP, éste te redirigirá de vuelta a {% data variables.product.product_location %}. {% data variables.product.product_name %} valida la respuesta de tu IdP y luego te otorga el acceso.

{% data reusables.saml.you-must-periodically-authenticate %}

Si nopuedes acceder a {% data variables.product.product_name %}, contacta al propietario o al administrador local de tu empresa para {% data variables.product.product_name %}. Puede que seas capaz de ubicar la información de contacto para tu empresa dando clic en **Soporte** en la parte inferior de cualquier página en {% data variables.product.product_name %}. {% data variables.product.company_short %} y {% data variables.contact.github_support %} carecen de acceso a tu IdP y no pueden solucionar problemas de autenticación.

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.saml.dotcom-saml-explanation %} Los propietarios de la organización pueden invitar a tu cuenta de usuario en {% data variables.product.prodname_dotcom %} para unirse a la organización que utiliza SAML SSO, lo cual te permite contribuir con ella y mantener tu identidad actual y las contribuciones con {% data variables.product.prodname_dotcom %}.

Cuando accedes a recurso dentro de la organización que utiliza SAML SSO, , {% data variables.product.prodname_dotcom %} te redirigirá a el SAML IdP de la organización para autenticarte. Después de que te autentiques exitosamente con tu cuenta en el IdP, este te redirigirá de vuelta a {% data variables.product.prodname_dotcom %}, en donde podrás acceder a los recursos de la organización.

{% data reusables.saml.outside-collaborators-exemption %}

Si te has autenticado recientemente con tu SAML IdP de la organización en tu navegador, estás autorizado automáticamente cuando accedas a la {% data variables.product.prodname_dotcom %} organización que utiliza SAML SSO. Si no te has autenticado recientemente con el SAML IdP de tu organización en tu navegador, debes hacerlo en el SAML IdP antes de acceder a la organización.

{% data reusables.saml.you-must-periodically-authenticate %}

Para usar la API o Git en la línea de comandos para acceder a contenido protegido en una organización que usa SAML SSO, necesitarás usar un token de acceso personal autorizado a través de HTTPS o una clave SSH autorizada.

Si no tienes un token de acceso personal ni una clave SSH, puedes crear un token de acceso personal para la línea de comandos o generar una clave SSH nueva. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)" o "[Generar una nueva llave SSH y añadirla al agente de ssh](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

To use a new or existing personal access token or SSH key with an organization that uses or enforces SAML SSO, you will need to authorize the token or authorize the SSH key for use with a SAML SSO organization. Para obtener más información, consulta "[Autorizar un token de acceso personal para utilizarlo con el inicio de sesión único de SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" o "[Autorizar una llave SSH para su uso con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

### About {% data variables.product.prodname_oauth_apps %} and SAML SSO

You must have an active SAML session each time you authorize an {% data variables.product.prodname_oauth_app %} to access an organization that uses or enforces SAML SSO.

After an enterprise or organization owner enables or enforces SAML SSO for an organization, you must reauthorize any {% data variables.product.prodname_oauth_app %} that you previously authorized to access the organization. To see the {% data variables.product.prodname_oauth_apps %} you've authorized or reauthorize an {% data variables.product.prodname_oauth_app %}, visit your [{% data variables.product.prodname_oauth_apps %} page](https://github.com/settings/applications).

{% endif %}

### Leer más

{% if currentVersion == "free-pro-team@latest" %}- "[Acerca de la administración de identidad y de acceso con el inicio de sesión único de SAML](/github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% if currentVersion == "github-ae@latest" %}- "[Acerca de la administración de identidad y de acceso para tu empresa](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
