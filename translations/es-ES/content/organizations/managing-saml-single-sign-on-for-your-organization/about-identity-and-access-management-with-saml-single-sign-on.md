---
title: Acerca de la administración de identidades y acceso con el inicio de sesión único de SAML
intro: 'Si administras centralmente las identidades y aplicaciones de tus usuarios con un provedor de identidad (IdP), puedes configurar el inicio de sesión único (SSO) del Lenguaje de Marcado para Confirmaciones de Seguridad (SAML) para proteger los recursos de tu organización en {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: IAM with SAML SSO
ms.openlocfilehash: 63ed023c1ca5d52ea7b06f5fd485c5e0b34c9750
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120621'
---
{% data reusables.saml.ghec-only %}

## Acerca de SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Los propietarios de las organizaciones pueden requerir el SSO de SAML para una organización individual o para todas las organizaciones en una cuenta empresarial. Para más información, vea "[Configuración del inicio de sesión único de SAML para la empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Antes de habilitar el SSO de SAML para tu organización, necesitarás conectar tu IdP a la misma. Para más información, vea "[Conexión del proveedor de identidades a la organización](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)".

En una organización, el SSO de SAML puede inhabilitarse, habilitarse pero no requerirse, o habilitarse y requerirse. Después de habilitar exitosamente el SSO de SAML para tu organización y que sus miembros se autentiquen exitosamente con tu IdP, puedes requerir la configuración del SSO de SAML. Para más información sobre cómo aplicar el inicio de sesión único de SAML para la organización de {% data variables.product.prodname_dotcom %}, vea "[Aplicación del inicio de sesión único de SAML para la organización](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Los miembros deben autenticarse regularmente con tu IdP y obtener acceso a los recursos de tu organización. Tu IdP especifica la duración de este período de inicio de sesión y, generalmente, es de 24 horas. Este requisito de inicio de sesión periódico limita la duración del acceso y requiere que los usuarios se vuelvan a identificar para continuar.

Para acceder a los recursos protegidos de tu organización mediante la API y Git en la línea de comandos, los miembros deberán autorizar y autentificarse con un {% data variables.product.pat_generic %} o clave SSH. Para más información, consulta "[Autorización de {% data variables.product.pat_generic %} para su uso con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" y "[Autorización de una clave SSH para su uso con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".

La primera vez que un miembro utiliza el SSO de SAML para acceder a su organización, {% data variables.product.prodname_dotcom %} crea un registro automáticamente, el cual vincula la organización, la cuenta del miembro en {% data variables.location.product_location %} y la cuenta del miembro en el IdP. Puedes ver y retirar la identidad de SAML que se ha vinculado, activar sesiones, y autorizar las credenciales para los miembros de tu organización o cuenta empresarial. Para más información, vea "[Visualización y administración del acceso SAML de un miembro a la organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)" y "[Visualización y administración del acceso SAML de un usuario a la empresa](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)".

Si los miembros ingresan con una sesión de SSO de SAML cuando crean un nuevo repositorio, la visibilidad predeterminada de dicho repositorio será privada. De lo contrario, la visibilidad predeterminada es pública. Para más información sobre la visibilidad de los repositorios, vea "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

Los miembros de una organización también deben contar con una sesión activa de SAML para autorizar un {% data variables.product.prodname_oauth_app %}. Puedes decidir no llevar este requisito si contactas a {% data variables.contact.contact_support %}. {% data variables.product.product_name %} no recomienda que renuncies a este requisito, ya que expondrá a tu organización a un riesgo mayor de que se roben las cuentas y de que exista pérdida de datos.

{% data reusables.saml.saml-single-logout-not-supported %}

## Servicios SAML admitidos

{% data reusables.saml.saml-supported-idps %}

Algunos IdP admiten acceso de suministro a una organización de {% data variables.product.prodname_dotcom %} a través de SCIM. Para obtener más información, consulta "[Acerca de SCIM para las organizaciones](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% data reusables.scim.enterprise-account-scim %} 

## Agregar miembros a una organización usando SAML SSO

Después de habilitar el inicio de sesión único de SAML, hay varias maneras de agregar nuevos miembros a su organización. Los propietarios de la organización pueden invitar a los miembros de forma manual en {% data variables.product.product_name %} o usando la API. Para más información, vea "[Invitación a los usuarios a unirse a la organización](/articles/inviting-users-to-join-your-organization)" y "[Miembros](/rest/reference/orgs#add-or-update-organization-membership)".

Para aprovisionar nuevos usuarios sin una invitación de un propietario de la organización, puede usar la dirección URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`, reemplazando _ORGANIZATION_ por el nombre de su organización. Por ejemplo, puede configurar el IdP para que cualquiera con acceso al IdP pueda hacer clic en el tablero del IdP para unirse a la organización de {% data variables.product.prodname_dotcom %}.

{% note %}

**Nota:** El aprovisionamiento de nuevos usuarios a través `https://github.com/orgs/ORGANIZATION/sso/sign_up` de solo se admite cuando el inicio de sesión único de SAML está configurado en el nivel de organización, no cuando el inicio de sesión único de SAML está configurado en el nivel de cuenta empresarial. Para obtener más información sobre SSO de SAML para cuentas empresariales, consulta "[Acerca de SAML para IAM de empresa](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)".

{% endnote %}

Si tu IdP admite SCIM, {% data variables.product.prodname_dotcom %} puede invitar automáticamente a los miembros para que se unan a tu organización cuando les otorgas acceso en tu IdP. Si eliminas el acceso de un miembro a tu organización de {% data variables.product.prodname_dotcom %} en tu IdP de SAML, éste se eliminará automáticamente de la organización de{% data variables.product.prodname_dotcom %}. Para obtener más información, consulta "[Acerca de SCIM para las organizaciones](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## Información adicional

- "[Referencia de configuración de SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)"
- "[Acerca de la autenticación en dos fases y el inicio de sesión único de SAML](/articles/about-two-factor-authentication-and-saml-single-sign-on)"
- "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
