---
title: Acerca de los Usuarios Administrados Empresariales
shortTitle: Acerca de los usuarios administrados
intro: 'Puedes administrar centralmente la identidad y el acceso para los miembros de tu empresa en {% data variables.product.prodname_dotcom %} desde tu proveedor de identidad.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
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

Con {% data variables.product.prodname_emus %}, puedes controlar las cuentas de usuario de los miembros de tu empresa a través de tu proveedor de identidad (IdP). Puedes simplificar la autenticación con el inicio de sesión único (SSO) de SAML y aprovisionar, actualizar y desaprovisionar las cuentas de usuario de tus miembros empresariales. Los usuarios que se asignen a la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu IdP se aprovisionarán como cuentas de usuario nuevas en {% data variables.product.prodname_dotcom %} y se agregarán a tu empresa. Tú controlas los nombres de usuario, datos de perfil, membrecía de equipo y acceso al repositorio desde tu IdP.

En tu IdP, puedes dar a cada {% data variables.product.prodname_managed_user %} el rol de usuario, propietario de la empresa o gerente de facturación. {% data variables.product.prodname_managed_users_caps %} puede ser propietario de organizaciones dentro de tu empresa y puede agregar a otros {% data variables.product.prodname_managed_users %} a las organizaciones y equipos dentro de ella. Para obtener más información, consulta las secciones "[Roles en una empresa](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" y "[Acerca de las organizaciones](/organizations/collaborating-with-groups-in-organizations/about-organizations)".

La membrecía de organización puede administrarse manualmente o actualizarse automáticamente conforme se agreguen usuarios de {% data variables.product.prodname_managed_users %} a los grupos de IdP que están conectados a los equipos dentro de la organización. Cuando se agrega un {% data variables.product.prodname_managed_user %} manualmente a una organización, el desasignarlo de la aplicación de {% data variables.product.prodname_emu_idp_application %} en tu IdP suspenderá al usuario pero no lo eliminará de la organización. Para obtener más información sobre cómo administrar las membrecías de equipo y de organización automáticamente, consulta la sección "[Administrar las membrecías de equipo con los grupos de proveedor de identidad](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)".

Puedes otorgar acceso a los {% data variables.product.prodname_managed_users %}, así como la habilidad de contribuir con los repositorios dentro de tu empresa, pero los {% data variables.product.prodname_managed_users %} no pueden crear contenido público ni colaborar con otros usuarios, organizaciones y empresas en el resto de {% data variables.product.prodname_dotcom %}. No se puede invitar a los {% data variables.product.prodname_managed_users %} que se aprovisionaron para tu empresa para que se unan a organizaciones o repositorios fuera de esta, ni se puede invitar a los {% data variables.product.prodname_managed_users %} a otras empresas. Los colaboradores externos no son compatibles con los {% data variables.product.prodname_emus %}.

El nombre de usuario de los {% data variables.product.prodname_managed_users %} de tu empresa y su información de perfil, tal como los nombres y direcciones de correo electrónico que se muestran, se configuran mediante tu IdP y no pueden cambiarlos los mismos usuarios. Para obtener más información, consulta la sección "[Nombres de usuario e información de perfil](#usernames-and-profile-information)".

{% data reusables.enterprise-accounts.emu-forks %}

Los propietarios de las empresas pueden auditar todas las acciones de los {% data variables.product.prodname_managed_users %} en {% data variables.product.prodname_dotcom %}.

Para utilizar los {% data variables.product.prodname_emus %}, necesitas un tipo separado de cuenta empresarial con {% data variables.product.prodname_emus %} habilitados. Para obtener más información sobre cómo crear esta cuenta, consulta la sección "[Acerca de las empresas con usuarios administrados](#about-enterprises-with-managed-users)".


## Soporte del proveedor de identidad

{% data variables.product.prodname_emus %} es compatible con los siguientes IdP:

{% data reusables.enterprise-accounts.emu-supported-idps %}

## Habilidades y restricciones de los {% data variables.product.prodname_managed_users %}

Los {% data variables.product.prodname_managed_users_caps %} solo pueden colaborar en los repositorios privados e internos dentro de su empresa y con los repositorios que pertenecen a su cuenta de usuario. Los {% data variables.product.prodname_managed_users_caps %} tienen acceso de solo lectura al resto de la comunidad de {% data variables.product.prodname_dotcom %}. Estas restricciones de visibilidad y acceso para los usuarios, así como el contenido, aplican a todas las solicitudes, incluyendo a las de la API.

* Los {% data variables.product.prodname_managed_users_caps %} no pueden crear propuestas ni solicitudes de cambios, comentar o agregar reacciones, ni marcar como favoritos u observar o bifurcar repositorios fuera de la empresa.
* {% data variables.product.prodname_managed_users_caps %} puede ver todos los repositorios públicos en {% data variables.product.prodname_dotcom_the_website %} pero no puede subir código a los repositorios fuera de la empresa.
* Solo otros miembros de la empresa pueden ver a los {% data variables.product.prodname_managed_users_caps %} y al contenido que estos crean.
* Los {% data variables.product.prodname_managed_users_caps %} no pueden seguir a usuarios que estén fuera de la empresa.
* Los {% data variables.product.prodname_managed_users_caps %} no pueden crear gists o comentar en ellos.
* Los {% data variables.product.prodname_managed_users_caps %} no pueden instalar {% data variables.product.prodname_github_apps %} en sus cuentas de usuario.
* Otros usuarios de {% data variables.product.prodname_dotcom %} no pueden ver, mencionar o invitar a {% data variables.product.prodname_managed_user %} para colaborar.
* Los {% data variables.product.prodname_managed_users_caps %} solo pueden ser propietarios de repositorios privados y los {% data variables.product.prodname_managed_users %} solo pueden invitar a otros miembros de la empresa para que colaboren con sus propios repositorios.
* Solo se pueden crear repositorios internos y privados en las organizaciones que pertenezcan a una {% data variables.product.prodname_emu_enterprise %}, dependiendo de los ajustes de visibilidad del repositorio o empresa.

## Acerca de las empresas con usuarios administrados

Para utilizar los {% data variables.product.prodname_emus %}, necesitas un tipo separado de cuenta empresarial con {% data variables.product.prodname_emus %} habilitados. Para probar {% data variables.product.prodname_emus %} o para debatir sobre las opciones para migrarte desde tu empresa existente, por favor, contacta al [Equipo de ventas de {% data variables.product.prodname_dotcom %}](https://enterprise.github.com/contact).

Tu contacto en el equipo de ventas de GitHub trabajará contigo para crear tu {% data variables.product.prodname_emu_enterprise %} nueva. Necesitarás proporcionar la dirección de correo electrónico del usuario que configurará tu empresa y un código corto que se utilizará como el sufijo de los nombres de usuario de los miembros. {% data reusables.enterprise-accounts.emu-shortcode %} Para obtener más información, consulta la sección "[Nombres de usuario e información de perfil](#usernames-and-profile-information)".

Después de crear tu empresa, recibirás un mensaje de correo electrónico de {% data variables.product.prodname_dotcom %}, el cual te invitará a elegir una contraseña para tu usuario de configuración de la empresa, quien será el primer propietario de esta. Utiliza una ventana de búsqueda privada o en modo incógnito al configurar la contraseña. El usuario de configuración solo se utiliza para configurar el inicio de sesión único de SAML y la integración de aprovisionamiento de SCIM para la empresa. Ya no tendrá acceso para administrar la cuenta empresarial una vez que se habilite SAML con éxito.

El nombre de usuario del usuario de configuración es el código corto de tu empresa con el sufijo `_admin`. Después de que inicies sesión en tu usuario de configuración, puedes comenzar a configurar el SSO de SAML para tu empresa. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML para los Usuarios Administrados Empresariales](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)".

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

## Autenticarse como una {% data variables.product.prodname_managed_user %}

Los {% data variables.product.prodname_managed_users_caps %} se deben autenticar mediante su proveedor de identidad. Para autenticarse, un {% data variables.product.prodname_managed_user %} puede visitar su portal de aplicación IdP o utilizar una página de inicio de sesión en {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.about-recovery-codes %}Para obtener más información, consulta la sección "[Administrar los códigos de recuperación para tu empresa](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)".

### Autenticarse como un {% data variables.product.prodname_managed_user %} a través de {% data variables.product.prodname_dotcom_the_website %}

1. Navega a [https://github.com/login](https://github.com/login).
1. En la caja de texto de "Nombre de usuario o dirección de correo electrónico", ingresa tu nombre de usuario incluyendo el guion bajo y código corto. ![Screenshot showing login form](/assets/images/help/enterprises/emu-login-username.png) Cuando el formato reconozca tu nombre de usuario, este se actualizará. No necesitas ingresar tu contraseña en este formato.
1. Para continuar hacia tu proveedor de identidad, haz clic en **Iniciar sesión con tu proveedor de identidad**. ![Captura de pantalla que muestra el botón "Iniciar sesión con tu proveedor de identidad"](/assets/images/help/enterprises/emu-login-submit.png)

## Nombres de usuario e información de perfil

Cuando se cree tu {% data variables.product.prodname_emu_enterprise %}, elegirás un código corto que se utilizará como el sufijo de los nombres de usuario de los miembros de tu empresa. {% data reusables.enterprise-accounts.emu-shortcode %} El usuario de configuración que configure el SSO de SAML tendrá un nombre de usuario en el formato **@<em>SHORT-CODE</em>_admin**.

Cuando aprovisionas un usuario nuevo desde tu proveedor de identidad, el {% data variables.product.prodname_managed_user %} nuevo tendrá un nombre de usuario de {% data variables.product.prodname_dotcom %} en el formato de **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>**.

| Proveedor de identidad            | Nombre de usuario de {% data variables.product.prodname_dotcom %}
| --------------------------------- | ----------------------------------------------------------------- |
| Azure Active Directory (Azure AD) | <ul><li>El _IDP-USERNAME_ se conforma con la normalización de caracteres que preceden a `@` en el UPN (Nombre Principal del Usuario).</li><li>A las cuentas de invitado se les quita `#EXT` del UPN.</li></ul>                                         |
| Okta                              | <ul><li>El _IDP-USERNAME_ es el atributo de nombre de usuario normalizado que proporciona el IdP.</li></ul>                                         |

Es posible que ocurra algún conflicto al aprovisionar los usuarios si las partes únicas del nombre de usuario que proporciona tu IdP se eliminan cuando esto se normaliza. Si no puedes aprovisionar a un usuario debido a un conflicto de nombres de usuario, deberías modificar el nombre de usuario que proporcionó tu IdP.

El nombre de usuario de la cuenta nueva que se aprovisionó en {% data variables.product.prodname_dotcom %}, incluyendo el guion bajo y código corto, no debe exceder los 39 caracteres.

El nombre de perfil y dirección de correo electrónico de un {% data variables.product.prodname_managed_user %} también lo proporciona el IdP. Los {% data variables.product.prodname_managed_users_caps %} no pueden cambiar su nombre de perfil ni dirección de correo electrónico en {% data variables.product.prodname_dotcom %}.
