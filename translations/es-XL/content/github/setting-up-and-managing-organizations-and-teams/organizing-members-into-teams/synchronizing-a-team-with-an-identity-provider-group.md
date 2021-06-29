---
title: Sincronizar un equipo con un grupo de proveedor de identidad
intro: 'Puedes sincronizar un equipo de {% data variables.product.prodname_dotcom %} con un grupo de proveedor de identidad (IdP) para agregar y eliminar miembros del grupo automáticamente.'
product: '{% data reusables.gated-features.team-synchronization %}'
permissions: 'Los propietarios de la organización y mantenedores de equipo pueden sincronizar un equipo de {% data variables.product.prodname_dotcom %} con un grupo de IdP.'
versions:
  free-pro-team: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-a-team-with-an-identity-provider-group
---
{% data reusables.gated-features.okta-team-sync %}

### Acerca de la sincronización de equipo

{% data reusables.identity-and-permissions.about-team-sync %}

Puedes conectar hasta cinco grupos de IdP a un equipo de {% data variables.product.prodname_dotcom %}. Un grupo de IdP puede asignarse a varios equipos de {% data variables.product.prodname_dotcom %} sin restricción.

Una vez que un equipo de {% data variables.product.prodname_dotcom %} se conecta a un grupo de IdP, tu administrador de IdP debe hacer cambios en la membrecía del equipo a través del proveedor de identidad. No puedes administrar la membrecía del equipo en {% data variables.product.product_name %} ni utilizando la API.

Todos los cambios a la membrecía de equipo que se hagan con tu IdP aparecerán en la bitácora de auditoría en {% data variables.product.product_name %} como cambios que realiza el bot de sincronización de equipos. Tu IdP enviará datos de la membresía de equipo a {% data variables.product.prodname_dotcom %} una vez por hora. Conectar un equipo a un grupo IdP puede eliminar a algunos miembros del equipo. Para obtener más información, consulta "[Requisitos para los miembros de los equipos sincronizados](#requirements-for-members-of-synchronized-teams)."

Los equipos padre no pueden sincronizarse con los grupos de IdP. Si el equipo que quieres conectar a un grupo de IdP es un equipo padre, te recomendamos crear un equipo nuevo o eliminar las relaciones anidadas que hacen de tu equipo un equipo padre. Para obtener más información, consulta las secciónes "[Acerca de los equipos](/articles/about-teams#nested-teams)", "[Crear un equipo](/github/setting-up-and-managing-organizations-and-teams/creating-a-team)", y "[Mover un equipo en la jerarquía de tu organización](/articles/moving-a-team-in-your-organizations-hierarchy)".

Para administrar el acceso de un repositorio para cualquier equipo de {% data variables.product.prodname_dotcom %}, incluyendo los equipos conectados a un grupo de IdP debes hacer cambios con {% data variables.product.product_name %}. Para obtener más información, consulta "[Acerca de equipos](/articles/about-teams)" y "[Administrar el acceso de equipo a un repositorio de la organización](/articles/managing-team-access-to-an-organization-repository)."

También puedes administrar la sincronización de equipos con la API. Para obtener más información, consulta la sección "[Sincronización de equipos](/v3/teams/team_sync/)".

### Requisitos para los miembros de los equipos sincronizados

Después de conectar a un equipo al grupo de IdP, los datos de mebrecía para cada miembro del equipo se sincronizarán si la persona sigue autenticándose utilizando el SSO de SAML con la misma identidad de SSO en {% data variables.product.prodname_dotcom %}, y si la persona sigue siendo miembro del grupo de IdP conectado.

Los equipos o miembros de grupo existentes pueden eliminarse automáticamente del equipo en {% data variables.product.prodname_dotcom %}. Todo equipo o miembro de grupo existente que no se autentique en la organización o cuenta empresarial utilizando SSO podría perder acceso a los repositorios. Todo equipo o miembro de grupo existente que no se encuentre en el grupo de IdP conectado podría perder acceso a los repositorios potencialmente.

Puedes volver a agregar automáticamente a aquellos miembros del equipo que hayas eliminado una vez que se autentiquen en la cuenta empresarial u organizacional utilizando el SSO y así se migren al grupo de IdP conectado.

Para evitar eliminar miembros del equipo accidentalmente, te recomendamos requerir el SSO de SAML en tu cuenta organizacional o empresarial mediante la creación de nuevos equipos para sincronizar datos de membrecías y revisar la membrecía del grupo de IdP antes de que sincronices a los equipos existentes. Para obtener más información, consulta la sección "[Requerir el inicio de sesión único de SAML en tu organización](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Si tu organización pertenece a una cuenta empresarial, habilitar la sincronización de equipos para la cuenta empresarial anulará la configuración de sincronización de equipos a nivel organizacional. Para obtener más información, consulta la sección "[Requerir la configuración de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-team-synchronization-for-organizations-in-your-enterprise-account)".

### Prerrequisitos

Antes de poder conectar a un equipo con un grupo de proveedor de identidad, un propietario de organización o de empresa debe habilitar la sincronización de equipos para tu organización o cuenta empresarial. Para obtener más información, consulta las secciones "[Administrar la sincronización de equipos para tu organización](/github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization)" y "[Requerir la configuración de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account#managing-team-synchronization-for-organizations-in-your-enterprise-account)".

Para evitar el eliminar miembros del equipo accidentalmente, visita el protal administrativo para tu IdP y confirma que cada miembro actual del equipo también se encuentre en los grupos de IdP que quieras conectar a este equipo. Si no tienes este acceso a tu proveedor de identidad, puedes comunicarte con tu administrador de IdP.

Debes autenticarte utilizando el SSO de SAML. Para obtener más información, consulta "[Acerca de la autenticación con el inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)".

### Conectar un grupo de IdP a tu equipo

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
5. Debajo de "Grupos del Proveedor de Identidad", utiliza el menú desplegable y selecciona hasta 5 grupos del proveedor de identidad. ![Menú desplegable para elegir los grupos de proveedor de identidad](/assets/images/help/teams/choose-an-idp-group.png)
6. Haz clic en **Guardar cambios**.

### Desconectar un grupo de IdP de un equipo

Si desconectas un grupo de IdP de un equipo de {% data variables.product.prodname_dotcom %}, los miembros de este equipo que fueran asignados al equipo {% data variables.product.prodname_dotcom %} a través del grupo de IdP se eliminarán de dicho equipo.

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.specific_team %}
{% data reusables.organizations.team_settings %}
6. Debajo de "Grupos del Proveedor de Identidad", a la derecha del grupo de IdP que quieras desconectar, da clic en {% octicon "x" aria-label="X symbol" %}. ![Deselecciona un grupo IdP conectado desde el equipo de GitHub](/assets/images/help/teams/unselect-idp-group.png)
7. Haz clic en **Guardar cambios**.
