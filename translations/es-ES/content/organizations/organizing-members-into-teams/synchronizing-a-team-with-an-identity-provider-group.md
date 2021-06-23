---
title: Sincronizar un equipo con un grupo de proveedor de identidad
intro: 'Puedes sincronizar un equipo de {% data variables.product.product_name %} con un grupo de proveedor de identidad (IdP) para agregar y eliminar miembros del grupo automáticamente.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
product: '{% data reusables.gated-features.team-synchronization %}'
permissions: 'Organization owners and team maintainers can synchronize a {% data variables.product.prodname_dotcom %} team with an IdP group.'
versions:
  free-pro-team: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.gated-features.okta-team-sync %}

### Acerca de la sincronización de equipo

{% data reusables.identity-and-permissions.about-team-sync %}

{% if currentVersion == "free-pro-team@latest" %}Puedes conectar hasta cinco grupos de IdP a un equipo de {% data variables.product.product_name %}.{% elsif currentVersion == "github-ae@latest" %}Puedes conectar a un equipo de {% data variables.product.product_name %} a un grupo de IdP. Todos los usuarios en el grupo se agregan automáticamente al equipo y también a la organización padre como miembros. Cuando desconectas a un grupo de un equipo, los usuarios que se convirtieron en miembros de la organización a través de una membrecía de equipo se eliminan de dicha organización.{% endif %} Puedes asignar un grupo de IdP a varios equipos de {% data variables.product.product_name %}.

{% if currentVersion == "free-pro-team@latest" %}La sincronización de equipos no es compatible con grupos de IdP con más de 5000 miembros.{% endif %}

Una vez que un equipo de {% data variables.product.prodname_dotcom %} se conecta a un grupo de IdP, tu administrador de IdP debe hacer cambios en la membrecía del equipo a través del proveedor de identidad. No puedes administrar las membrecías de equipo en {% data variables.product.product_name %}{% if currentVersion == "free-pro-team@latest" %} ni utilizando la API{% endif %}.

{% if currentVersion == "free-pro-team@latest" %}
Todos los cambios a la membrecía de equipo que se hagan con tu IdP aparecerán en la bitácora de auditoría en {% data variables.product.product_name %} como cambios que realiza el bot de sincronización de equipos. Tu IdP enviará datos de la membresía de equipo a {% data variables.product.prodname_dotcom %} una vez por hora. Conectar un equipo a un grupo IdP puede eliminar a algunos miembros del equipo. Para obtener más información, consulta "[Requisitos para los miembros de los equipos sincronizados](#requirements-for-members-of-synchronized-teams)."
{% endif %}

{% if currentVersion == "github-ae@latest" %}
Cuando cambia la membrecía de grupo en tu IdP, este envía una solicitud de SCIM con los cambios a {% data variables.product.product_name %} de acuerdo con la programación que determinó tu IdP. Cualquier solicitud que cambie la membrecía de organización o equipo de {% data variables.product.prodname_dotcom %} se registrará en la bitácora de auditoría como cambios que realizó la cuenta que se utilizó para configurar el aprovisionamiento de usuarios. Para obtener más información sobre esta cuenta, consulta la sección "[Configurar el aprovisionamiento de usuarios para tu empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)". Para obtener más información acerca de los itinerarios de solicitudes de SCIM, consulta la sección "[Verificar el estado del aprovisionamiento de usuarios](https://docs.microsoft.com/en-us/azure/active-directory/app-provisioning/application-provisioning-when-will-provisioning-finish-specific-user)" en Microsoft Docs.
{% endif %}

Los equipos padre no pueden sincronizarse con los grupos de IdP. Si el equipo que quieres conectar a un grupo de IdP es un equipo padre, te recomendamos crear un equipo nuevo o eliminar las relaciones anidadas que hacen de tu equipo un equipo padre. Para obtener más información, consulta las secciónes "[Acerca de los equipos](/articles/about-teams#nested-teams)", "[Crear un equipo](/organizations/organizing-members-into-teams/creating-a-team)", y "[Mover un equipo en la jerarquía de tu organización](/articles/moving-a-team-in-your-organizations-hierarchy)".

Para administrar el acceso de un repositorio para cualquier equipo de {% data variables.product.prodname_dotcom %}, incluyendo los equipos conectados a un grupo de IdP debes hacer cambios con {% data variables.product.product_name %}. Para obtener más información, consulta "[Acerca de equipos](/articles/about-teams)" y "[Administrar el acceso de equipo a un repositorio de la organización](/articles/managing-team-access-to-an-organization-repository)."

{% if currentVersion == "free-pro-team@latest" %}También puedes administrar la sincronización de equipos con la API. Para obtener más información, consulta la sección "[Sincronización de equipos](/rest/reference/teams#team-sync)".{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Requisitos para los miembros de los equipos sincronizados

Después de que conectas un equipo a un grupo de IdP, la sincronización de equipos agregará a cada miembro del grupo de IdP al equipo correspondiente en {% data variables.product.product_name %} únicamente si:
- La persona es un miembro de la organización en {% data variables.product.product_name %}.
- La persona ya ingresó con su cuenta de usuario en {% data variables.product.product_name %} y se autenticó en la cuenta organizacional o empresarial a través del inicio de sesión único de SAML por lo menos una vez.
- La identidad de SSO de la persona es miembro del grupo de IdP.

Los equipos o miembros del grupo existentes que no cumplan con estos criterios se eliminarán automáticamente del equipo en {% data variables.product.product_name %} y perderán acceso a los repositorios. El revocar la identidad ligada a un usuario también eliminará a dicho usuario de cualquier equipo que se encuentre mapeado en los grupos de IdP. Para obtener más información, consulta las secciones "[Visualizar y administrar el acceso SAML de un miembro para tu organización](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity)" y "[Visualizar y administrar el acceso SAML de un usuario para tu empresa](/github/setting-up-and-managing-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise#viewing-and-revoking-a-linked-identity)".

Puedes volver a agregar automáticamente a aquellos miembros del equipo que hayas eliminado una vez que se autentiquen en la cuenta empresarial u organizacional utilizando el SSO y así se migren al grupo de IdP conectado.

Para evitar eliminar miembros del equipo accidentalmente, te recomendamos requerir el SSO de SAML en tu cuenta organizacional o empresarial mediante la creación de nuevos equipos para sincronizar datos de membrecías y revisar la membrecía del grupo de IdP antes de que sincronices a los equipos existentes. Para obtener más información, consulta las secciones "[Requerir el inicio de sesión único de SAML para tu organización](/articles/enforcing-saml-single-sign-on-for-your-organization)" y "[Habilitar el inicio de sesión único de SAML para las organizaciones en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enabling-saml-single-sign-on-for-organizations-in-your-enterprise-account)".

Si tu organización pertenece a una cuenta empresarial, habilitar la sincronización de equipos para la cuenta empresarial anulará la configuración de sincronización de equipos a nivel organizacional. Para obtener más información, consulta la sección "[Administrar la sincronización de equipos para las organizaciones en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)".

{% endif %}

### Prerrequisitos

{% if currentVersion == "free-pro-team@latest" %}
Antes de que puedas conectar a un equipo de {% data variables.product.product_name %} con un grupo de proveedores de identidad, un propietario de empresa u organización debe habilitar la sincronización de equipos para tu organización o cuenta empresarial. Para obtener más información, consulta las secciones "[Administrar la sincronización de equipos para tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)" y "[Administrar la sincronización de equipos para las orgnizaciones de tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account)".

Para evitar el eliminar miembros del equipo accidentalmente, visita el protal administrativo para tu IdP y confirma que cada miembro actual del equipo también se encuentre en los grupos de IdP que quieras conectar a este equipo. Si no tienes este acceso a tu proveedor de identidad, puedes comunicarte con tu administrador de IdP.

Debes autenticarte utilizando el SSO de SAML. Para obtener más información, consulta "[Acerca de la autenticación con el inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)".

{% elsif currentVersion == "github-ae@latest" %}
Antes de que puedas conectar a un equipo de {% data variables.product.product_name %} con un grupo de IdP, primero debes configurar el aprovisionamiento de usuarios para {% data variables.product.product_location %} utilizando un sistema compatible para la Administración de Identidad entre Dominios (SCIM). Para obtener más información, consulta la sección "[Configurar el aprovisionamiento de usuarios para tu empresa](/admin/authentication/configuring-user-provisioning-for-your-enterprise)".

Una vez que se configure el aprovisionamiento de usuarios para {% data variables.product.product_name %} utilizando SCIM, puedes asignar la aplicación de {% data variables.product.product_name %} a cada grupo de IdP que quieras utilizar en {% data variables.product.product_name %}. Para obtener más información, consulta la sección de [Configurar el aprovisionamiento automático de usuarios en GitHub AE](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-ae-provisioning-tutorial#step-5-configure-automatic-user-provisioning-to-github-ae) en los Microsoft Docs.
{% endif %}

### Conectar un grupo de IdP a tu equipo

Cuando conectas un grupo de IdP a un equipo de {% data variables.product.product_name %}, todos los usuarios en el grupo se agregan automáticamente al equipo. {% if currentVersion == "github-ae@latest" %}Cualquier usuario que no fuera un miembro de aquellos de la organización desde antes también se agregará a esta.{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% if currentVersion == "free-pro-team@latest" %}
6. Debajo de "Grupos del Proveedor de Identidad", utiliza el menú desplegable y selecciona hasta 5 grupos del proveedor de identidad. ![Drop-down menu to choose identity provider groups](/assets/images/help/teams/choose-an-idp-group.png){% elsif currentVersion == "github-ae@latest" %}
6. Debajo de "Grupo del Proveedor de Identidad", utiliza el menú desplegable y selecciona un grupo de proveedor de identidad de la lista. ![Drop-down menu to choose identity provider group](/assets/images/enterprise/github-ae/teams/choose-an-idp-group.png){% endif %}
7. Haz clic en **Guardar cambios**.

### Desconectar un grupo de IdP de un equipo

Si desconectas un grupo de IdP de un equipo de {% data variables.product.prodname_dotcom %}, los miembros de este equipo que fueran asignados al equipo {% data variables.product.prodname_dotcom %} a través del grupo de IdP se eliminarán de dicho equipo. {% if currentVersion == "github-ae@latest" %} Cualquier usuario que fuera miembro de la organización padre únicamente debido a esa conexión de equipo también se eliminará de la organización.{% endif %}

{% data reusables.profile.access_org %}
{% data reusables.user_settings.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
{% if currentVersion == "free-pro-team@latest" %}
6. Debajo de "Grupos del Proveedor de Identidad", a la derecha del grupo de IdP que quieras desconectar, da clic en {% octicon "x" aria-label="X symbol" %}. ![Unselect a connected IdP group from the GitHub team](/assets/images/help/teams/unselect-idp-group.png){% elsif currentVersion == "github-ae@latest" %}
6. Debajo de "Grupo del Proveedor de Identidad", a la derecha del grupo de IdP que quieras desconectar, da clic en {% octicon "x" aria-label="X symbol" %}. ![Unselect a connected IdP group from the GitHub team](/assets/images/enterprise/github-ae/teams/unselect-idp-group.png){% endif %}
7. Haz clic en **Guardar cambios**.
