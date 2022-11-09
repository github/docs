---
title: Acerca de la autenticación con el inicio de sesión único de SAML
intro: 'Puedes acceder {% ifversion ghae %}{% data variables.location.product_location %}{% elsif ghec %}a una organización que utiliza el inicio de sesión único (SSO) de SAML{% endif %} autenticándote {% ifversion ghae %}con el inicio de sesión único (SSO) de SAML {% endif %}a través de un proveedor de identidades.'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: SAML single sign-on
ms.openlocfilehash: 827db3181f742916ba4fdeefd92f25c196c28188
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111517'
---
## Acerca de la autenticación con el SSO de SAML

{% ifversion ghae %}

El SSO de SAML permite que un propietario de empresa controle centralmente y asegure el acceso a {% data variables.product.product_name %} desde un IdP de SAML. Cuando visitas {% data variables.location.product_location %} en un buscador, {% data variables.product.product_name %} te redireccionará a tu IdP para autenticarte. Después de autenticarte correctamente con una cuenta en el IdP, este te redirigirá de vuelta a {% data variables.location.product_location %}. {% data variables.product.product_name %} valida la respuesta de tu IdP y luego te otorga el acceso.

{% data reusables.saml.you-must-periodically-authenticate %}

Si nopuedes acceder a {% data variables.product.product_name %}, contacta al propietario o al administrador local de tu empresa para {% data variables.product.product_name %}. Es posible que pueda encontrar la información de contacto de la empresa si hace clic en **Soporte** en la parte inferior de cualquier página de {% data variables.product.product_name %}. {% data variables.product.company_short %} y {% data variables.contact.github_support %} carecen de acceso a tu IdP y no pueden solucionar problemas de autenticación. 

{% endif %}

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Los propietarios de la organización pueden invitar a tu cuenta personal en {% data variables.product.prodname_dotcom %} a unirse a la organización que usa el SSO de SAML, lo que te permite colaborar con la organización y mantener tu identidad actual y tus contribuciones a {% data variables.product.prodname_dotcom %}.

Si eres miembro de {% data variables.enterprise.prodname_emu_enterprise %}, utilizarás una cuenta nueva que se aprovisionará automáticamente y que controlará tu empresa. {% data reusables.enterprise-accounts.emu-more-info-account %}

Cuando intentas acceder a la mayoría de recursos dentro de la organización que utiliza el SSO de SAML, {% data variables.product.prodname_dotcom %} te redirigirá al idP de SAML de la organización para autenticarte. Después de que te autentiques exitosamente con tu cuenta en el IdP, este te redirigirá de vuelta a {% data variables.product.prodname_dotcom %}, en donde podrás acceder a los recursos de la organización.

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Si te has autenticado recientemente con tu SAML IdP de la organización en tu navegador, estás autorizado automáticamente cuando accedas a la {% data variables.product.prodname_dotcom %} organización que utiliza SAML SSO. Si no te has autenticado recientemente con el SAML IdP de tu organización en tu navegador, debes hacerlo en el SAML IdP antes de acceder a la organización.

{% data reusables.saml.you-must-periodically-authenticate %}

## Identidades de SAML vinculadas

Al autenticarte con tu cuenta de IdP y volver a {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_dotcom %} registrará un vínculo en la organización o empresa entre tu cuenta personal de {% data variables.product.prodname_dotcom %} y la identidad de SAML en la que has iniciado sesión.  Esta identidad vinculada se usa para validar la pertenencia a esa organización y, en función de la configuración empresarial o de la organización, también se usa para determinar a qué organizaciones y equipos perteneces. Cada cuenta de {% data variables.product.prodname_dotcom %} puede vincularse exclusivamente a una identidad de SAML por organización. De igual manera, cada identidad de SAML puede vincularse exclusivamente a una cuenta de {% data variables.product.prodname_dotcom %} de una organización. 

Si inicias sesión con una identidad de SAML que ya está vinculada a otra cuenta de {% data variables.product.prodname_dotcom %}, recibirás un mensaje de error que indica que no puedes iniciar sesión con esa identidad de SAML. Esta situación puede producirse si estás intentando usar una cuenta nueva de {% data variables.product.prodname_dotcom %} para trabajar dentro de la organización. Si no tenías intención de usar esa identidad de SAML con esa cuenta de {% data variables.product.prodname_dotcom %}, tendrás que cerrar la sesión de esa identidad de SAML y, a continuación, repetir el inicio de sesión de SAML. Si deseas usar esa identidad de SAML con tu cuenta de {% data variables.product.prodname_dotcom %}, deberás pedir al administrador que desvincule la identidad de SAML de la cuenta para que puedas vincularla a la nueva cuenta.  En función de la configuración de la organización o la empresa, es posible que el administrador también tenga que reasignar tu identidad dentro del proveedor de SAML.  Para más información, vea "[Visualización y administración del acceso SAML de un miembro a la organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)".

Si la identidad de SAML con la que inicias sesión no coincide con la identidad de SAML que está vinculada actualmente a la cuenta de {% data variables.product.prodname_dotcom %}, recibirás una advertencia de que vas a volver a vincular la cuenta. Dado que la identidad de SAML se usa para controlar el acceso y la pertenencia al equipo, mantener la nueva identidad de SAML puede hacerte perder el acceso a equipos y organizaciones dentro de {% data variables.product.prodname_dotcom %}. Continúa tan solo si sabes que tienes que usar esa nueva identidad de SAML para la autenticación en el futuro. 

## Autorización de {% data variables.product.pat_generic %}}s y SSH con el inicio de sesión único de SAML

Para usar la API o Git en la línea de comandos para acceder a contenido protegido en una organización que usa el SSO de SAML, necesitarás usar un {% data variables.product.pat_generic %} autorizado a través de HTTPS o una clave SSH autorizada.

Si no tienes un {% data variables.product.pat_generic %} o una clave SSH, puedes crear un {% data variables.product.pat_generic %} para la línea de comandos o generar una nueva clave SSH. Para más información, consulta "[Creación de {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token)" o "[Generación de una nueva clave SSH y agregación al agente ssh](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

Para utilizar un {% data variables.product.pat_generic %} existente o nuevo o una clave SSH con la organización que utiliza o requiere el SSO de SAML, necesitarás autorizar el token o la clave SSH para que se utilicen con una organización que controle el SSO de SAML. Para más información, consulta "[Autorización de {% data variables.product.pat_generic %} para su uso con el inicio de sesión único de SAML](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" o "[Autorización de una clave SSH para su uso con el inicio de sesión único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".

## Acerca de {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %} y el SSO de SAML

Debes tener una sesión de SAML activa cada vez que autorices a una {% data variables.product.prodname_oauth_app %} o {% data variables.product.prodname_github_app %} a acceder a una organización que use o requiera el SSO de SAML. Para crear una sesión de SAML activa, ve a `https://github.com/orgs/ORGANIZATION-NAME/sso` en el explorador.

Después de que un propietario de la empresa o la organización habilite o exija el SSO de SAML para una organización y, después de autenticarte por primera vez, debes volver a autorizar a las {% data variables.product.prodname_oauth_apps %} o {% data variables.product.prodname_github_apps %} que hubieses autorizado previamente a acceder a la organización. 

Para ver qué {% data variables.product.prodname_oauth_apps %} has autorizado, visita la [página de {% data variables.product.prodname_oauth_apps %}](https://github.com/settings/applications). Para ver qué {% data variables.product.prodname_github_apps %} has autorizado, visita la [página de {% data variables.product.prodname_github_apps %}](https://github.com/settings/apps/authorizations).

{% endif %}

## Información adicional

{% ifversion ghec %}- "[Acerca de la administración de identidades y acceso con el inicio de sesión único de SAML](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)"{% endif %} {% ifversion ghae %}- "[Acerca de la administración de identidades y acceso para la empresa](/admin/authentication/about-identity-and-access-management-for-your-enterprise)"{% endif %}
