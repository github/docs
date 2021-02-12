---
title: Acerca de la administración de acceso e identidad con el inicio de sesión único de SAML
intro: 'Si administras centralmente las identidades y aplicaciones de tus usuarios con un provedor de identidad (IdP), puedes configurar el inicio de sesión único (SSO) del Lenguaje de Marcado para Confirmaciones de Seguridad (SAML) para proteger los recursos de tu organización en {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.saml-sso %}'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
versions:
  free-pro-team: '*'
---

### Acerca de SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

Después de configurar el SSO de SAML, los miembros de tu organización de {% data variables.product.prodname_dotcom %} continuarán ingresando en sus cuentas de usuario en {% data variables.product.prodname_dotcom %}. Cuando un miembro accede a recursos dentro de tu organización que utiliza el SSO de SAML, {% data variables.product.prodname_dotcom %} lo redirecciona a tu IdP para autenticarse. Después de autenticarse exitosamente, tu IdP redirecciona a este miembro a {% data variables.product.prodname_dotcom %}, en donde puede acceder a los recursos de tu organización.

Organization owners can enforce SAML SSO for an individual organization, or enterprise owners can enforce SAML SSO for all organizations in an enterprise account. Para obtener más información, consulta la sección "[Habilitar el inicio de sesión único de SAML para las organizaciones en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)".

{% data reusables.saml.outside-collaborators-exemption %}

Antes de habilitar el SSO de SAML para tu organización, necesitarás conectar tu IdP a la misma. Para obtener más información, consulta "[Conectar tu proveedor de identidad a tu organización](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)."

En una organización, el SSO de SAML puede inhabilitarse, habilitarse pero no requerirse, o habilitarse y requerirse. Después de habilitar exitosamente el SSO de SAML para tu organización y que sus miembros se autentiquen exitosamente con tu IdP, puedes requerir la configuración del SSO de SAML. Para obtener más información acerca de requerir el SSO de SAML para tu organización en {% data variables.product.prodname_dotcom %}, consulta la sección "[Requerir el inicio de sesión único de SAML para tu organización](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Los miembros deben autenticarse regularmente con tu IdP y obtener acceso a los recursos de tu organización. Tu IdP especifica la duración de este período de inicio de sesión y, generalmente, es de 24 horas. Este requisito de inicio de sesión periódico limita la duración del acceso y requiere que los usuarios se vuelvan a identificar para continuar.

Para acceder a los recursos protegidos de tu organización tulizando la API y Git en la línea de comando, los miembros deberán autorizar y autentificarse con un token de acceso personal o llave SSH. Para obtener más información, consulta la sección "[Autorizar un token de acceso personal para su uso con el inicio de sesión único de SAML](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)".

La primera vez que un miembro utilice el SSO de SAML para acceder a tu organización, {% data variables.product.prodname_dotcom %} creará automáticamente un registro que vinculará a tu organización, la cuenta de {% data variables.product.prodname_dotcom %} del miembro y la cuenta del miembro en tu IdP. Puedes ver y retirar la identidad de SAML que se ha vinculado, activar sesiones, y autorizar las credenciales para los miembros de tu organización o cuenta empresarial. Para obtener más información, consulta la sección "[Visualizar y administrar un acceso de SAML de un miembro a tu organización](/github/setting-up-and-managing-organizations-and-teams/viewing-and-managing-a-members-saml-access-to-your-organization)" y [Visualizar y administrar un acceso de SAML de un usuario a tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise-account)".

Si los miembros ingresan con una sesión de SSO de SAML cuando crean un nuevo repositorio, la visibilidad predeterminada de dicho repositorio será privada. De lo contrario, la visibilidad predeterminada es pública. Para obtener más información sobre los tipos de visibilidad para los repositorios, visita "[Acerca de la visibilidad de los repositorios](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)."

Los miembros de una organización también deben contar con una sesión activa de SAML para autorizar un {% data variables.product.prodname_oauth_app %}. Puedes decidir no llevar este requisito si contactas a {% data variables.contact.contact_support %}. {% data variables.product.product_name %} no recomienda que renuncies a este requisito, ya que expondrá a tu organización a un riesgo mayor de que se roben las cuentas y de que exista pérdida de datos.

{% data reusables.saml.saml-single-logout-not-supported %}

### Servicios SAML admitidos

{% data reusables.saml.saml-supported-idps %}

Algunos IdP admiten acceso de suministro a una organización de {% data variables.product.prodname_dotcom %} a través de SCIM. Para obtener más información, consulta la sección "[Acerca de SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)".

### Agregar miembros a una organización usando SAML SSO

Una vez que activas SAML SSO, hay varias maneras de poder agregar nuevos miembros a tu organización. Los propietarios de la organización pueden invitar a los miembros de forma manual en {% data variables.product.product_name %} o usando la API. Para obtener más información, consulta las secciones "[Invitar usuarios a unirse a tu organización](/articles/inviting-users-to-join-your-organization)" y "[Miembros](/rest/reference/orgs#add-or-update-organization-membership)".

Para aprovisionar nuevos usuarios sin una invitación de un propietario de la organización, puedes usar la URL `https://github.com/orgs/ORGANIZATION/sso/sign_up`, reemplazando _ORGANIZATION_ con el nombre de tu organización. Por ejemplo, puedes configurar tu IdP para que cualquiera con acceso al IdP pueda hacer clic en el tablero del IdP para unirse a tu organización de {% data variables.product.prodname_dotcom %}.

Si tu IdP admite SCIM, {% data variables.product.prodname_dotcom %} puede invitar automáticamente a los miembros para que se unan a tu organización cuando les otorgas acceso en tu IdP. Si eliminas el acceso de un miembro a tu organización de {% data variables.product.prodname_dotcom %} en tu IdP de SAML, éste se eliminará automáticamente de la organización de{% data variables.product.prodname_dotcom %}. Para obtener más información, consulta la sección "[Acerca de SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)".

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

### Further reading

- "[Acerca de la autenticación de dos factores y el inicio de sesión único de SAML ](/articles/about-two-factor-authentication-and-saml-single-sign-on)"
- "[Acerca de la autenticación con el inicio de sesión único de SAML](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)"
