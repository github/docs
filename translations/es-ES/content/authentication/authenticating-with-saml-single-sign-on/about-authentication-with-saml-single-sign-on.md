---
title: Acerca de la autenticación con el inicio de sesión único de SAML
intro: 'You can access {% ifversion ghae %}{% data variables.product.product_location %}{% elsif ghec %}an organization that uses SAML single sign-on (SSO){% endif %} by authenticating {% ifversion ghae %}with SAML single sign-on (SSO) {% endif %}through an identity provider (IdP).'
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

If you're a member of an {% data variables.product.prodname_emu_enterprise %}, you will instead use a new account that is provisioned for you and controlled by your enterprise. {% data reusables.enterprise-accounts.emu-more-info-account %}

When you access private resources within an organization that uses SAML SSO, {% data variables.product.prodname_dotcom %} will redirect you to the organization's SAML IdP to authenticate. Después de que te autentiques exitosamente con tu cuenta en el IdP, este te redirigirá de vuelta a {% data variables.product.prodname_dotcom %}, en donde podrás acceder a los recursos de la organización.

{% data reusables.saml.outside-collaborators-exemption %}

Si te has autenticado recientemente con tu SAML IdP de la organización en tu navegador, estás autorizado automáticamente cuando accedas a la {% data variables.product.prodname_dotcom %} organización que utiliza SAML SSO. Si no te has autenticado recientemente con el SAML IdP de tu organización en tu navegador, debes hacerlo en el SAML IdP antes de acceder a la organización.

{% data reusables.saml.you-must-periodically-authenticate %}

## Linked SAML identities

When you authenticate with your IdP account and return to {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_dotcom %} will record a link in the organization or enterprise between your {% data variables.product.prodname_dotcom %} personal account and the SAML identity you signed into.  This linked identity is used to validate your membership in that organization, and depending on your organization or enterprise setup, is also used to determine which organizations and teams you're a member of as well. Each {% data variables.product.prodname_dotcom %} account can be linked to exactly one SAML identity per organization. Likewise, each SAML identity can be linked to exactly one {% data variables.product.prodname_dotcom %} account in an organization.

If you sign in with a SAML identity that is already linked to another {% data variables.product.prodname_dotcom %} account, you will receive an error message indicating that you cannot sign in with that SAML identity. This situation can occur if you are attempting to use a new {% data variables.product.prodname_dotcom %} account to work inside of your organization. If you didn't intend to use that SAML identity with that {% data variables.product.prodname_dotcom %} account, then you'll need to sign out of that SAML identity and then repeat the SAML login. If you do want to use that SAML identity with your {% data variables.product.prodname_dotcom %} account, you'll need to ask your admin to unlink your SAML identity from your old account, so that you can link it to your new account.  Depending on the setup of your organization or enterprise, your admin may also need to reassign your identity within your SAML provider.  Para obtener más información, consulta la sección "[Visualizar y administrar el acceso de SAML de un miembro a tu organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".

If the SAML identity you sign in with does not match the SAML identity that is currently linked to your {% data variables.product.prodname_dotcom %} account, you'll receive a warning that you are about to relink your account. Because your SAML identity is used to govern access and team membership, continuing with the new SAML identity can cause you to lose access to teams and organizations inside of {% data variables.product.prodname_dotcom %}. Only continue if you know that you're supposed to use that new SAML identity for authentication in the future.

## Authorizing PATs and SSH keys with SAML SSO

Para usar la API o Git en la línea de comandos para acceder a contenido protegido en una organización que usa SAML SSO, necesitarás usar un token de acceso personal autorizado a través de HTTPS o una clave SSH autorizada.

Si no tienes un token de acceso personal ni una clave SSH, puedes crear un token de acceso personal para la línea de comandos o generar una clave SSH nueva. Para obtener más información, consulta la sección "[Crear un token de acceso personal](/github/authenticating-to-github/creating-a-personal-access-token)" o "[Generar una nueva llave SSH y añadirla al agente de ssh](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

Para utilizar un token de acceso personal existente o nuevo o una llave SSH con la organización que utiliza o requiere el SSO de SAML, necesitarás autorizar el token o la llave SSH para que se utilicen con una organización que maneje el SSO de SAML. Para obtener más información, consulta "[Autorizar un token de acceso personal para utilizarlo con el inicio de sesión único de SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" o "[Autorizar una llave SSH para su uso con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)."

## Acerca de las {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %} y el SSO de SAML

Debes tener una sesión activa de SAML cada que autorices a una {% data variables.product.prodname_oauth_app %} o {% data variables.product.prodname_github_app %} para que acceda a una organización que utilice o requiera el SSO de SAML. Puedes crear una sesión activa de SAML si navegas a `https://github.com/orgs/ORGANIZATION-NAME/sso` en tu buscador.

Después de que un propietario de empresa u organización habilita o requiere el SSO de SAML para una organización y después de que te autentiques a través del SAML por primera vez, debes volver a autorizar cualquier {% data variables.product.prodname_oauth_apps %} o {% data variables.product.prodname_github_apps %} que hayas autorizado anteriormente para que acceda a dicha organización.

Para ver las {% data variables.product.prodname_oauth_apps %} que hayas autorizado, visita tu [página de {% data variables.product.prodname_oauth_apps %}](https://github.com/settings/applications). Para ver las {% data variables.product.prodname_github_apps %} que autorizaste, visita nuestra [página de {% data variables.product.prodname_github_apps %}](https://github.com/settings/apps/authorizations).

{% endif %}

## Leer más

{% ifversion ghec %}- "[Acerca de la administración de identidad y acceso con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %}
{% ifversion ghae %}- "[Acerca de la identidad y administración de accesos para tu empresa](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
