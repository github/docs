---
title: Acerca de la autenticación con el inicio de sesión único de SAML
intro: 'Puedes acceder a {% ifversion ghae %}{% data variables.product.product_location %}{% elsif ghec %} una organización que utilice el inicio de sesión único (SSO) de SAML{% endif %} si te autenticas {% ifversion ghae %}con el inicio de sesión único (SSO) de SAML {% endif %}mediante un proveedor de identidad (IdP).'
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

Si eres miembro de una {% data variables.product.prodname_emu_enterprise %}, necesitarás utilizar una cuenta nueva en su lugar, la cual se aprovisione para ti y la controle tu empresa. {% data reusables.enterprise-accounts.emu-more-info-account %}

Cuando accedes a los recursos privados dentro de una organización que utiliza el SSO de SAML, {% data variables.product.prodname_dotcom %} te redireccionará al IdP de SAML de la organización para que te autentiques. Después de que te autentiques exitosamente con tu cuenta en el IdP, este te redirigirá de vuelta a {% data variables.product.prodname_dotcom %}, en donde podrás acceder a los recursos de la organización.

{% data reusables.saml.outside-collaborators-exemption %}

Si te has autenticado recientemente con tu SAML IdP de la organización en tu navegador, estás autorizado automáticamente cuando accedas a la {% data variables.product.prodname_dotcom %} organización que utiliza SAML SSO. Si no te has autenticado recientemente con el SAML IdP de tu organización en tu navegador, debes hacerlo en el SAML IdP antes de acceder a la organización.

{% data reusables.saml.you-must-periodically-authenticate %}

## Identidades de SAML enlazadas

Cuando te autenticas con tu cuetna de IdP y regresas a {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_dotcom %} registrará un enlace en la organización o empresa entre tu cuenta personal de {% data variables.product.prodname_dotcom %} y la identidad de SAML en la cual iniciaste sesión.  Esta identidad enlazada se utiliza para validar tu membrecía en dicha organización y, dependiendo de tu configuración de empresa u organización, también se utiliza para determinar de qué equipos y organizaciones eres miembro. Cada cuenta de {% data variables.product.prodname_dotcom %} puede enlazarse a exactamente una identidad de SAML por organización. Del mismo modo, cada identidad de SAML puede vincularse a exactamente una cuenta de {% data variables.product.prodname_dotcom %} en una organización.

Si inicias sesión con una identidad de SAML que ya esté vinculada a otra cuenta de {% data variables.product.prodname_dotcom %}, recibirás un mensaje de error que indicará que no puedes iniciar sesión con esa identidad de SAML. Esta situación puede ocurrir si estás intentando utilizar una cuenta nueva de {% data variables.product.prodname_dotcom %} para trabajar dentro de tu organización. Si no pretendes utilizar esa identidad de SAML con esa cuenta de {% data variables.product.prodname_dotcom %}, entonces necesitarás salir de sesión en esa identidad de SAML y luego repetir el inicio de sesión de SAML. Si no quieres utilizar esa identidad de SAML con tu cuenta de {% data variables.product.prodname_dotcom %}, necesitarás pedirle a tu administrador que desvincule tu identidad de SAML de tu cuenta anterior, para que puedas vincularla a tu cuenta nueva.  Dependiendo de la configuración de tu organización o empresa, tu administrador también podría necesitar volver a asignar tu identidad dentro de tu proveedor de SAML.  Para obtener más información, consulta la sección "[Visualizar y administrar el acceso de SAML de un miembro a tu organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".

Si la identidad de SAML con la que iniciaste sesión no coincide con la identidad de SAML que está vinculada actualmente a tu cuenta de {% data variables.product.prodname_dotcom %}, recibirás una advertencia de que estás por volver a vincular tu cuenta. Ya que tu identidad de SAML se utiliza para regir el acceso y la membrecía de equipo, el seguir con la nueva identidad de SAML puede ocasionar que pierdas acceso a los equipos y organizaciones dentro de {% data variables.product.prodname_dotcom %}. Procede solo si sabes que debes utilizar la nueva identidad de SAML para la autenticación en el futuro.

## Autorizar llaves SSH y PAT con el SSO de SAML

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
