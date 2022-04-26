---
title: Acerca de la autenticación con el inicio de sesión único de SAML
intro: 'Puedes acceder a {% ifversion ghae %}{% data variables.product.product_location %}{% elsif ghec %}una organización que utilice el inicio de sesión único (SSO) de SAML{% endif %}s si te autenticas {% ifversion ghae %} con el inicio de sesión único (SSO) de SAML {% endif %}a través de un proveedor de identidad (IdP).{% ifversion ghec %} Después de que te autentiques exitosamente con el IdP desde {% data variables.product.product_name %}, debes autorizar cualquier token de acceso personal, llave SSH o {% data variables.product.prodname_oauth_app %} a la que quieras acceder en los recursos de la organización.{% endif %}'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: Inicio de sesión único de SAML
---

## Acerca de la autenticación con el SSO de SAML

{% ifversion ghae %}

El SSO de SAML permite que un propietario de empresa controle centralmente y asegure el acceso a {% data variables.product.product_name %} desde un IdP de SAML. Cuando visitas {% data variables.product.product_location %} en un buscador, {% data variables.product.product_name %} te redireccionará a tu IdP para autenticarte. Después de que te autenticas exitosamente con una cuenta en el IdP, éste te redirigirá de vuelta a {% data variables.product.product_location %}. {% data variables.product.product_name %} valida la respuesta de tu IdP y luego te otorga el acceso.

{% data reusables.saml.you-must-periodically-authenticate %}

Si nopuedes acceder a {% data variables.product.product_name %}, contacta al propietario o al administrador local de tu empresa para {% data variables.product.product_name %}. Puede que seas capaz de ubicar la información de contacto para tu empresa dando clic en **Soporte** en la parte inferior de cualquier página en {% data variables.product.product_name %}. {% data variables.product.company_short %} y {% data variables.contact.github_support %} carecen de acceso a tu IdP y no pueden solucionar problemas de autenticación.

{% endif %}

{% ifversion fpt or ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Los propietarios de las organizaciones pueden invitar a tu cuenta personal de {% data variables.product.prodname_dotcom %} para que se una a sus organizaciones que utilicen el SSO de SAML, lo cual te permitirá contribuir con la organización y retener tu identidad existente y las contribuciones en {% data variables.product.prodname_dotcom %}.

Si eres miembro de una {% data variables.product.prodname_emu_enterprise %}, utilizarás una cuenta nueva que se aprovisionará para ti. {% data reusables.enterprise-accounts.emu-more-info-account %}


Cuando accedes a recurso dentro de la organización que utiliza SAML SSO, , {% data variables.product.prodname_dotcom %} te redirigirá a el SAML IdP de la organización para autenticarte. Después de que te autentiques exitosamente con tu cuenta en el IdP, este te redirigirá de vuelta a {% data variables.product.prodname_dotcom %}, en donde podrás acceder a los recursos de la organización.

{% data reusables.saml.outside-collaborators-exemption %}

Si te has autenticado recientemente con tu SAML IdP de la organización en tu navegador, estás autorizado automáticamente cuando accedas a la {% data variables.product.prodname_dotcom %} organización que utiliza SAML SSO. Si no te has autenticado recientemente con el SAML IdP de tu organización en tu navegador, debes hacerlo en el SAML IdP antes de acceder a la organización.

{% data reusables.saml.you-must-periodically-authenticate %}

Para usar la API o Git en la línea de comandos para acceder a contenido protegido en una organización que usa SAML SSO, necesitarás usar un token de acceso personal autorizado a través de HTTPS o una clave SSH autorizada.

Si no tienes un token de acceso personal ni una clave SSH, puedes crear un token de acceso personal para la línea de comandos o generar una clave SSH nueva. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)" o "[Generar una nueva llave SSH y añadirla al agente de ssh](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

Para utilizar un token de acceso personal existente o nuevo o una llave SSH con la organización que utiliza o requiere el SSO de SAML, necesitarás autorizar el token o la llave SSH para que se utilicen con una organización que maneje el SSO de SAML. Para obtener más información, consulta "[Autorizar un token de acceso personal para utilizarlo con el inicio de sesión único de SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" o "[Autorizar una llave SSH para su uso con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

## Acerca de las {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %} y el SSO de SAML

You must have an active SAML session each time you authorize an {% data variables.product.prodname_oauth_app %} or {% data variables.product.prodname_github_app %} to access an organization that uses or enforces SAML SSO. You can create an active SAML session by navigating to `https://github.com/orgs/ORGANIZATION-NAME/sso` in your browser.

Después de que un propietario de empresa u organización habilita o requiere el SSO de SAML para una organización y después de que te autentiques a través del SAML por primera vez, debes volver a autorizar cualquier {% data variables.product.prodname_oauth_apps %} o {% data variables.product.prodname_github_apps %} que hayas autorizado anteriormente para que acceda a dicha organización.

To see the {% data variables.product.prodname_oauth_apps %} you've authorized, visit your [{% data variables.product.prodname_oauth_apps %} page](https://github.com/settings/applications). To see the {% data variables.product.prodname_github_apps %} you've authorized, visit your [{% data variables.product.prodname_github_apps %} page](https://github.com/settings/apps/authorizations).

{% endif %}

## Leer más

{% ifversion ghec %}- "[Acerca de la administración de identidad y acceso con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% ifversion ghae %}- "[Acerca de la identidad y administración de accesos para tu empresa](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
