---
title: Acerca de la autenticación con el inicio de sesión único de SAML
intro: 'Puedes acceder a {% if currentVersion == "github-ae@latest" %}{% data variables.product.product_location %}{% elsif currentVersion == "free-pro-team@latest" %}una organización que utilice el inicio de sesión único (SSO){% endif %} autenticándose {% if currentVersion == "github-ae@latest" %}con el inicio de sesión único (SSO) de SAML {% endif %}a través de un proveedor de identidad (IdP).{% if currentVersion == "free-pro-team@latest" %} Después de que te autentiques exitosamente con el IDP desde {% data variables.product.product_name %}, deberás autorizar cualquier token de acceso personal, llave SSH o {% data variables.product.prodname_oauth_app %} que quieras que acceda a los recursos organizacionales.{% endif %}'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - SSO
---

### Acerca de la autenticación con el SSO de SAML

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

Para utilizar un token de acceso personal existente o nuevo o una llave SSH con la organización que utiliza o requiere el SSO de SAML, necesitarás autorizar el token o la llave SSH para que se utilicen con una organización que maneje el SSO de SAML. Para obtener más información, consulta "[Autorizar un token de acceso personal para utilizarlo con el inicio de sesión único de SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" o "[Autorizar una llave SSH para su uso con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

### Acerca de {% data variables.product.prodname_oauth_apps %} y del SSO de SAML

Debes tener una sesión de SAML activa cada vez que autorices a una {% data variables.product.prodname_oauth_app %} para que acceda a una organización que utilice o requiera el SSO de SAML.

Después de que un propietario de empresa u organización habilite o requiera el SSO de SAML para su organización, debes volver a autorizar a cualquier {% data variables.product.prodname_oauth_app %} que hayas autorizado antes para que acceda a dicha organización. Para ver las {% data variables.product.prodname_oauth_apps %} que autorizaste o para volver a autorizar alguna {% data variables.product.prodname_oauth_app %}, visita tu [página de {% data variables.product.prodname_oauth_apps %}](https://github.com/settings/applications).

{% endif %}

### Leer más

{% if currentVersion == "free-pro-team@latest" %}- "[About identity and access management with SAML single sign-on](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% if currentVersion == "github-ae@latest" %}- "[Acerca de la administración de identidad y de acceso para tu empresa](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
