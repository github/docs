---
title: Acerca de la administración de acceso e identidad con el inicio de sesión único de SAML
intro: 'Si administras centralmente las identidades y aplicaciones de tus usuarios con un provedor de identidad (IdP), puedes configurar el inicio de sesión único (SSO) del Lenguaje de Marcado para Confirmaciones de Seguridad (SAML) para proteger los recursos de tu organización en {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: IAM con el SSO de SAML
---

{% data reusables.enterprise-accounts.emu-saml-note %}

## Acerca de SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.ghec-only %}

{% data reusables.saml.saml-accounts %}

Los propietarios de las organizaciones pueden requerir el SSO de SAML para una organización individual o para todas las organizaciones en una cuenta empresarial. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

{% data reusables.saml.outside-collaborators-exemption %}

Antes de habilitar el SSO de SAML para tu organización, necesitarás conectar tu IdP a la misma. Para obtener más información, consulta "[Conectar tu proveedor de identidad a tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization)."

En una organización, el SSO de SAML puede inhabilitarse, habilitarse pero no requerirse, o habilitarse y requerirse. Después de habilitar exitosamente el SSO de SAML para tu organización y que sus miembros se autentiquen exitosamente con tu IdP, puedes requerir la configuración del SSO de SAML. Para obtener más información acerca de requerir el SSO de SAML para tu organización en {% data variables.product.prodname_dotcom %}, consulta la sección "[Requerir el inicio de sesión único de SAML para tu organización](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Los miembros deben autenticarse regularmente con tu IdP y obtener acceso a los recursos de tu organización. Tu IdP especifica la duración de este período de inicio de sesión y, generalmente, es de 24 horas. Este requisito de inicio de sesión periódico limita la duración del acceso y requiere que los usuarios se vuelvan a identificar para continuar.

Para acceder a los recursos protegidos de tu organización tulizando la API y Git en la línea de comando, los miembros deberán autorizar y autentificarse con un token de acceso personal o llave SSH. Para obtener más información, consulta las secciones "[Autorizar que un token de acceso personal se utilice con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)" y "[Autorizar a una llave SSH para que se utilice con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)".

La primera vez que un miembro utiliza el SSO de SAML para acceder a tu organización, {% data variables.product.prodname_dotcom %} crea un registro automáticamente, el cual vincula tu organización, la cuenta del miembro en {% data variables.product.product_location %} y la cuenta del miembro en tu IdP. Puedes ver y retirar la identidad de SAML que se ha vinculado, activar sesiones, y autorizar las credenciales para los miembros de tu organización o cuenta empresarial. Para obtener más información, consulta la sección "[Visualizar y administrar un acceso de SAML de un miembro a tu organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization)" y [Visualizar y administrar un acceso de SAML de un usuario a tu cuenta empresarial](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise)".

Si los miembros ingresan con una sesión de SSO de SAML cuando crean un nuevo repositorio, la visibilidad predeterminada de dicho repositorio será privada. De lo contrario, la visibilidad predeterminada es pública. Para obtener más información sobre la visibilidad de los repositorios, consulta la sección "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

Los miembros de una organización también deben contar con una sesión activa de SAML para autorizar un {% data variables.product.prodname_oauth_app %}. Puedes decidir no llevar este requisito si contactas a {% data variables.contact.contact_support %}. {% data variables.product.product_name %} no recomienda que renuncies a este requisito, ya que expondrá a tu organización a un riesgo mayor de que se roben las cuentas y de que exista pérdida de datos.

{% data reusables.saml.saml-single-logout-not-supported %}

## Servicios SAML admitidos

{% data reusables.saml.saml-supported-idps %}

Algunos IdP admiten acceso de suministro a una organización de {% data variables.product.prodname_dotcom %} a través de SCIM. Para obtener más información, consulta la sección "[SCIM para las organizaciones](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% data reusables.scim.enterprise-account-scim %}

## Agregar miembros a una organización usando SAML SSO

Una vez que activas SAML SSO, hay varias maneras de poder agregar nuevos miembros a tu organización. Los propietarios de la organización pueden invitar a los miembros de forma manual en {% data variables.product.product_name %} o usando la API. Para obtener más información, consulta las secciones "[Invitar usuarios a unirse a tu organización](/articles/inviting-users-to-join-your-organization)" y "[Miembros](/rest/reference/orgs#add-or-update-organization-membership)".

Para aprovisionar nuevos usuarios sin una invitación de un propietario de la organización, puedes usar la URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`, reemplazando _ORGANIZATION_ con el nombre de tu organización. Por ejemplo, puedes configurar tu IdP para que cualquiera con acceso al IdP pueda hacer clic en el tablero del IdP para unirse a tu organización de {% data variables.product.prodname_dotcom %}.

Si tu IdP admite SCIM, {% data variables.product.prodname_dotcom %} puede invitar automáticamente a los miembros para que se unan a tu organización cuando les otorgas acceso en tu IdP. Si eliminas el acceso de un miembro a tu organización de {% data variables.product.prodname_dotcom %} en tu IdP de SAML, éste se eliminará automáticamente de la organización de{% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[SCIM para las organizaciones](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations)".

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## Leer más

- "[Referencia de configuración de SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)"
- "[Acerca de la autenticación de dos factores y el inicio de sesión único de SAML ](/articles/about-two-factor-authentication-and-saml-single-sign-on)"
- "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
