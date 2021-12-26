---
title: Configurar la autenticación y el aprovisionamiento para tu empresa utilizando Azure AD
shortTitle: Configurar con Azure AD
intro: 'Puedes utilizar un inquilino en Azure Active Directory (Azure AD) como proveedor de identidad (IdP) para administrar centralmente la autenticación y el aprovisionamiento de usuarios para {% data variables.product.product_location %}.'
permissions: 'Enterprise owners can configure authentication and provisioning for an enterprise on {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.saml-sso %}'
versions:
  github-ae: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

### Acerca de la autenticación y el aprovisionamiento de usuarios con Azure AD

Azure Active Directory (Azure AD) es un servicio de Microsoft que te permite administrar centralmente las cuentas de usuario y el acceso a las aplicaciones web. Para obtener más información, consult ala sección [¿Qué es Azure Active Directory?](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) en los Documentos de Microsoft.

Para administrar la identidad y el acceso para {% data variables.product.product_name %}, puedes utilizar un inquilino en Azure AD como un IdP de SAML para la autenticación. También puedes configurar a Azure AD para que automáticamente aprovisione las cuentas y acceda a las membrecías con SCIM, lo cual te permite crear usuarios de {% data variables.product.prodname_ghe_managed %} y administrar las membrecías de equipo y de organización desde tu inquilino de Azure AD.

Después de que habilitas el SSO de SAML y de SCIM para {% data variables.product.prodname_ghe_managed %} utilizando Azure AD, puedes lograr lo siguiente desde tu inquilino de Azure AD.

* Asignar la aplicación de {% data variables.product.prodname_ghe_managed %} en Azure AD a una cuenta de usuario para que cree y otorgue acceso automáticamente a una cuenta de usuario correspondiente en {% data variables.product.product_name %}.
* Desasignar la aplicación de {% data variables.product.prodname_ghe_managed %} a una cuenta de usuario en Azure AD para desactivar la cuenta de usuario correspondiente en {% data variables.product.product_name %}.
* Asignar la aplicación de {% data variables.product.prodname_ghe_managed %} a un grupo de IdP en Azure AD para que cree y otorgue acceso automáticamente a las cuentas de usuario en {% data variables.product.product_name %} para todos los miembros del grupo de IdP. Adicionalmente, el grupo de IdP estará disponible en {% data variables.product.prodname_ghe_managed %} para que se conecte a un equipo y a sus organizaciones padre.
* Desasignar la aplicación de {% data variables.product.prodname_ghe_managed %} desde un grupo de IdP para desactivar las cuentas de usuario de {% data variables.product.product_name %} de todos los usuarios de IdP que tuvieron acceso únicamente a través de este grupo de IdP y eliminar a los usuarios de la organización padre. El grupo de IdP se desconectará de cualquier equipo en {% data variables.product.product_name %}.

Para obtener más información acerca de la administración de identidades y de accesos para tu empresa en {% data variables.product.product_location %}, consulta la sección "[Administrar la identidad y el acceso para tu empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise)". Para obtener más información sobre cómo sincronizar equipos con grupos de IdP, consulta la sección "[Sincronizar a un equipo con un grupo de proveedor de identidad](/organizations/organizing-members-into-teams/synchronizing-a-team-with-an-identity-provider-group)".

### Prerrequisitos

Para configurar la autenticación y el aprovisionamiento de usuarios para {% data variables.product.product_name %} utilizando Azure AD, debes tener una cuenta y un inquilino en Azure AD. Para obtener más información, consulta el [Sitio Web de Azure AD](https://azure.microsoft.com/free/active-directory) y el [Inicio rápido: Creación de un inquilino en Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/quickstart-create-new-tenant) en los Documentos de Microsoft.

{% data reusables.saml.assert-the-administrator-attribute %} Para obtener más información acerca de cómo incluir el atributo `administrator` en la solicitud de SAML desde Azure AD, consulta la sección [Cómo: personalizar las notificaciones emitidas en el token SAML para aplicaciones empresariales](https://docs.microsoft.com/azure/active-directory/develop/active-directory-saml-claims-customization) en los Documentos de Microsoft.

{% data reusables.saml.create-a-machine-user %}

### Configurar la autenticación y el aprovisionamiento de usuarios con Azure AD

{% if currentVersion == "github-ae@latest" %}

1. En Azure AD, agrega {% data variables.product.ae_azure_ad_app_link %} a tu inquilino y configura el inicio de sesión único. Para obtener más información, consulta la sección [Tutorial: Integración del inicio de sesión único (SSO) de Active Directory con {% data variables.product.prodname_ghe_managed %}](https://docs.microsoft.com/azure/active-directory/saas-apps/github-ae-tutorial) en los documentos de Microsoft.

1. En {% data variables.product.prodname_ghe_managed %}, ingresa los detalles para tu inquilino de Azure AD.

    - {% data reusables.saml.ae-enable-saml-sso-during-bootstrapping %}

    - Si ya configuraste el SSO de SAML para {% data variables.product.product_location %} utilizando otro IdP y quieres utilizar Azure AD en vez de este, puedes editar tu configuración. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/admin/authentication/configuring-saml-single-sign-on-for-your-enterprise#editing-the-saml-sso-configuration)".

1. Habilita el aprovisionamiento de usuarios en {% data variables.product.product_name %} y configura el aprovisionamiento de usurios en Azure AD. Para obtener más información, consulta la sección "[Configurar el aprovisionamiento de usuarios para tu empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise#enabling-user-provisioning-for-your-enterprise)".

{% endif %}
