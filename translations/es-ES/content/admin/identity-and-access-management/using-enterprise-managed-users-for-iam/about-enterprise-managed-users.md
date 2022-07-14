---
title: Acerca de los Usuarios Administrados Empresariales
shortTitle: Acerca de los usuarios administrados
intro: 'Puedes administrar centralmente la identidad y el acceso para los miembros de tu empresa en {% data variables.product.prodname_dotcom %} desde tu proveedor de identidad.'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
---

## Acerca de {% data variables.product.prodname_emus %}

Con {% data variables.product.prodname_emus %}, puedes controlar las cuentas de usuario de los miembros de tu empresa a través de tu proveedor de identidad (IdP). Los usuarios que se asignen a la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu IdP se aprovisionarán como cuentas de usuario nuevas en {% data variables.product.prodname_dotcom %} y se agregarán a tu empresa. You control usernames, profile data, team membership, and repository access for the user accounts from your IdP.

En tu IdP, puedes dar a cada {% data variables.product.prodname_managed_user %} el rol de usuario, propietario de la empresa o gerente de facturación. {% data variables.product.prodname_managed_users_caps %} puede ser propietario de organizaciones dentro de tu empresa y puede agregar a otros {% data variables.product.prodname_managed_users %} a las organizaciones y equipos dentro de ella. Para obtener más información, consulta las secciones "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" y "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

Organization membership can be managed manually, or you can update membership automatically as {% data variables.product.prodname_managed_users %} are added to IdP groups that are connected to teams within the organization. Cuando se agrega un {% data variables.product.prodname_managed_user %} manualmente a una organización, el desasignarlo de la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu IdP suspenderá al usuario pero no lo eliminará de la organización. Para obtener más información sobre cómo administrar las membrecías de equipo y de organización automáticamente, consulta la sección "[Administrar las membrecías de equipo con los grupos de proveedor de identidad](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)".

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} For more information, see "[About support for your IdP's Conditional Access Policy](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)."

{% endif %}

Puedes otorgar acceso a los {% data variables.product.prodname_managed_users %}, así como la capacidad de contribuir con los repositorios dentro de tu empresa, pero los {% data variables.product.prodname_managed_users %} no pueden crear contenido público ni colaborar con otros usuarios, organizaciones y empresas en el resto de {% data variables.product.prodname_dotcom %}. For more information, see "[Abilities and restrictions of {% data variables.product.prodname_managed_users %}](#abilities-and-restrictions-of-enterprise-managed-users)."

El nombre de usuario de los {% data variables.product.prodname_managed_users %} de tu empresa y su información de perfil, tal como los nombres y direcciones de correo electrónico que se muestran, se configuran mediante tu IdP y no pueden cambiarlos los mismos usuarios. Para obtener más información, consulta la sección "[Nombres de usuario e información de perfil](#usernames-and-profile-information)".

{% data reusables.enterprise-accounts.emu-forks %}

Los propietarios de las empresas pueden auditar todas las acciones de los {% data variables.product.prodname_managed_users %} en {% data variables.product.prodname_dotcom %}. For more information, see "[Audit log events for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise)."

Para utilizar los {% data variables.product.prodname_emus %}, necesitas un tipo separado de cuenta empresarial con {% data variables.product.prodname_emus %} habilitados. Para obtener más información sobre cómo crear esta cuenta, consulta la sección "[Acerca de las empresas con usuarios administrados](#about-enterprises-with-managed-users)".

{% note %}

**Note:** There are multiple options for identity and access management with {% data variables.product.prodname_ghe_cloud %}, and {% data variables.product.prodname_emus %} is not the best solution for every customer. For more information about whether {% data variables.product.prodname_emus %} is right for your enterprise, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)."

{% endnote %}

## Soporte del proveedor de identidad

{% data variables.product.prodname_emus %} supports the following IdPs{% ifversion oidc-for-emu %} and authentication methods:

|                        | SAML                                          | OIDC (beta)                                   |
| ---------------------- | --------------------------------------------- | --------------------------------------------- |
| Azure Active Directory | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %}
| Okta                   | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## Habilidades y restricciones de los {% data variables.product.prodname_managed_users %}

Los {% data variables.product.prodname_managed_users_caps %} solo pueden colaborar en los repositorios privados e internos dentro de su empresa y con los repositorios que pertenecen a su cuenta de usuario. Los {% data variables.product.prodname_managed_users_caps %} tienen acceso de solo lectura al resto de la comunidad de {% data variables.product.prodname_dotcom %}. Estas restricciones de visibilidad y acceso para los usuarios, así como el contenido, aplican a todas las solicitudes, incluyendo a las de la API.

* {% data variables.product.prodname_managed_users %} cannot be invited to organizations or repositories outside of the enterprise, nor can the {% data variables.product.prodname_managed_users %} be invited to other enterprises.
* Los colaboradores externos no son compatibles con los {% data variables.product.prodname_emus %}.
* Los {% data variables.product.prodname_managed_users_caps %} no pueden crear propuestas ni solicitudes de cambios, comentar o agregar reacciones, ni marcar como favoritos u observar o bifurcar repositorios fuera de la empresa.
* {% data variables.product.prodname_managed_users_caps %} puede ver todos los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %} pero no puede subir código a los repositorios fuera de la empresa.
* Solo otros miembros de la empresa pueden ver a los {% data variables.product.prodname_managed_users_caps %} y al contenido que estos crean.
* Los {% data variables.product.prodname_managed_users_caps %} no pueden seguir a usuarios que estén fuera de la empresa.
* Los {% data variables.product.prodname_managed_users_caps %} no pueden crear gists o comentar en ellos.
* Los {% data variables.product.prodname_managed_users_caps %} no pueden instalar {% data variables.product.prodname_github_apps %} en sus cuentas de usuario.
* Otros usuarios de {% data variables.product.prodname_dotcom %} no pueden ver, mencionar o invitar a {% data variables.product.prodname_managed_user %} para colaborar.
* Los {% data variables.product.prodname_managed_users_caps %} solo pueden ser propietarios de repositorios privados y los {% data variables.product.prodname_managed_users %} solo pueden invitar a otros miembros de la empresa para que colaboren con sus propios repositorios.
* {% data reusables.enterprise-accounts.emu-forks %}
* Solo se pueden crear repositorios internos y privados en las organizaciones que pertenezcan a una {% data variables.product.prodname_emu_enterprise %}, dependiendo de los ajustes de visibilidad del repositorio o empresa.
* {% data variables.product.prodname_managed_users_caps %} are limited in their use of {% data variables.product.prodname_pages %}. Para obtener más información, consulta la sección "[Acerca de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)".

## Getting started with {% data variables.product.prodname_emus %}

Before your developers can use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}, you must follow a series of configuration steps.

1. Para utilizar los {% data variables.product.prodname_emus %}, necesitas un tipo separado de cuenta empresarial con {% data variables.product.prodname_emus %} habilitados. Para probar {% data variables.product.prodname_emus %} o para debatir sobre las opciones para migrarte desde tu empresa existente, por favor, contacta al [Equipo de ventas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

  Tu contacto en el equipo de ventas de GitHub trabajará contigo para crear tu {% data variables.product.prodname_emu_enterprise %} nueva. Necesitarás proporcionar la dirección de correo electrónico del usuario que configurará tu empresa y un código corto que se utilizará como el sufijo de los nombres de usuario de los miembros. {% data reusables.enterprise-accounts.emu-shortcode %} Para obtener más información, consulta la sección "[Nombres de usuario e información de perfil](#usernames-and-profile-information)".

2. Después de crear tu empresa, recibirás un mensaje de correo electrónico de {% data variables.product.prodname_dotcom %}, el cual te invitará a elegir una contraseña para tu usuario de configuración de la empresa, quien será el primer propietario de esta. Utiliza una ventana de búsqueda privada o en modo incógnito al configurar la contraseña. The setup user is only used to configure single sign-on and SCIM provisioning integration for the enterprise. It will no longer have access to administer the enterprise account once SSO is successfully enabled. El nombre de usuario del usuario de configuración es el código corto de tu empresa con el sufijo `_admin`.

  {% note %}

  {% data reusables.enterprise-accounts.emu-password-reset-session %}

  {% endnote %}

3. After you log in as the setup user, we recommend enabling two-factor authentication. Para obtener más información, consulta "[Configurar autenticación de dos factores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)".

1. To get started, configure {% ifversion oidc-for-emu %}how your members will authenticate. If you are using Azure Active Directory as your identity provider, you can choose between OpenID Connect (OIDC) and Security Assertion Markup Language (SAML). Both options provide a seamless sign-in experience for your members, but only OIDC includes support for Conditional Access Policies (CAP). If you are using Okta as your identity provider, you can use SAML to authenticate your members.{% else %}SAML SSO for your enterprise. For more information, see "[Configuring SAML single sign-on for Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."{% endif %}

  {% ifversion oidc-for-emu %}

  To get started, read the guide for your chosen authentication method.

    - "[Configuring OIDC for Enterprise Managed Users](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)."
    - "[Configuring SAML single sign-on for Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."

  {% endif %}

4. Once you have configured SSO, you can configure SCIM provisioning. SCIM is how your identity provider will provision and manage member accounts and teams on {% data variables.product.prodname_dotcom_the_website %}. For more information on configuring SCIM provisioning, see "[Configuring SCIM provisioning for enterprise managed users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)."

5. Once authentication and provisioning are configured, you can start provisioning members and managing teams. Para obtener más información, consulta la sección "[Administrar las membrecías de equipo con los grupos de proveedor de identidades](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)".

## Autenticarse como una {% data variables.product.prodname_managed_user %}

Los {% data variables.product.prodname_managed_users_caps %} se deben autenticar mediante su proveedor de identidad. Para autenticarse, un {% data variables.product.prodname_managed_user %} puede visitar su portal de aplicación IdP o utilizar una página de inicio de sesión en {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.about-recovery-codes %}Para obtener más información, consulta la sección "[Administrar los códigos de recuperación para tu empresa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)".

### Autenticarse como un {% data variables.product.prodname_managed_user %} a través de {% data variables.product.prodname_dotcom_the_website %}

1. Navega a [https://github.com/login](https://github.com/login).
1. En la caja de texto de "Nombre de usuario o dirección de correo electrónico", ingresa tu nombre de usuario incluyendo el guion bajo y código corto. ![Screenshot showing login form](/assets/images/help/enterprises/emu-login-username.png) Cuando el formato reconozca tu nombre de usuario, este se actualizará. No necesitas ingresar tu contraseña en este formato.
1. Para continuar hacia tu proveedor de identidad, haz clic en **Iniciar sesión con tu proveedor de identidad**. ![Captura de pantalla que muestra el botón "Iniciar sesión con tu proveedor de identidad"](/assets/images/help/enterprises/emu-login-submit.png)

## Nombres de usuario e información de perfil

{% data variables.product.product_name %} automatically creates a username for each person by normalizing an identifier provided by your IdP. Para obtener más información, consulta la sección "[Consideraciones de nombre de usuario para la autenticación externa](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)".

A conflict may occur when provisioning users if the unique parts of the identifier provided by your IdP are removed during normalization. If you're unable to provision a user due to a username conflict, you should modify the username provided by your IdP. For more information, see "[Resolving username conflicts](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-conflicts)."

El nombre de perfil y dirección de correo electrónico de un {% data variables.product.prodname_managed_user %} también lo proporciona el IdP. {% data variables.product.prodname_managed_users_caps %} cannot change their profile name or email address on {% data variables.product.prodname_dotcom %}, and the IdP can only provide a single email address.
