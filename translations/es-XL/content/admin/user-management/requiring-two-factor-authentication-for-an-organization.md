---
title: Solicitar autenticación de dos factores para una organización
intro: 'Le puedes solicitar a los miembros de la organización y a los colaboradores externos que activen la autenticación de dos factores para sus cuentas personales en una organización, para que sea más difícil para los actores maliciosos acceder a los parámetros y los repositorios de una organización.'
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

Al usar la autenticación integrada o LDAP, el aparato {% data variables.product.prodname_ghe_server %} admite la autenticación de dos factores. Los administradores de la organización le pueden solicitar a los miembros que tengan la autenticación de dos factores activada.

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

Para obtener más información, consulta [este cuadro sobre métodos de autenticación que admiten 2FA](/enterprise/{{ currentVersion }}/user/articles/about-two-factor-authentication/#authentication-methods-that-support-2fa).

### Requisitos para aplicar la autenticación de dos factores

Antes de poder solicitarle a los miembros de la organización y a los colaboradores externos que usen 2FA, debes [activar la autenticación de dos factores](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa/) para tu cuenta personal propia.

{% warning %}

**Advertencias:**

- Cuando solicitas la autenticación de dos factores, los miembros y los colaboradores externos (incluidas cuentas bot) que no usan la 2FA serán eliminados de la organización y perderán acceso a sus repositorios, incluidas sus bifurcaciones de los repositorios privados. Si activan la 2FA para su cuenta personal dentro de los tres meses de haber sido eliminados de la organización, puedes [reinstalar sus parámetros y sus privilegios de acceso](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization).
- Cuando se solicita la 2FA, los miembros de la organización o los colaboradores externos que desactiven la 2FA se eliminarán automáticamente de la organización.
- Si eres el único propietario de una organización que requiere autenticación de dos factores, no podrás inhabilitar la 2FA de tu cuenta personal sin inhabilitar la autenticación de dos factores para la organización.

{% endwarning %}

Antes de solicitar el uso de la autenticación de dos factores, te recomendamos notificar a los miembros de la organización y a los colaboradores externos y pedirles que configuren la 2FA para sus cuentas. Puedes [ ver si los miembros y los colaboradores externos ya usan 2FA](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled) en la pestaña Personas de una organización.

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}

### Ver las personas que se eliminaron de tu organización

Para ver las personas que fueron automáticamente eliminadas de tu organización por no cumplir cuando solicitaste la autenticación de dos factores, puedes [buscar el registro de auditoría](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log/) usando el campo de búsqueda `reason:two_factor_requirement_non_compliance`.

{% data reusables.audit_log.octicon_icon %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. Ingresa tu consulta de búsqueda usando `reason:two_factor_requirement_non_compliance`. ![Evento de registro de auditoría de herramientas de plantilla que muestra un usuario eliminado por no cumplir con la 2FA](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png) Para limitar tu búsqueda para:
    - Miembros de organizaciones eliminados, ingresa `action:org.remove_member AND reason:two_factor_requirement_non_compliance`
    - Colaboradores externos eliminados, ingresa `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance`

  También puedes ver las personas eliminadas de una organización en particular usando el nombre de la organización en tu búsqueda:
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. Click **Search**.

### Ayudar a que los miembros y colaboradores externos eliminados se vuelvan a unir a tu organización

Si algún miembro o colaborador externo se eliminó de la organización cuando habilitaste el uso requerido de autenticación de dos factores, recibirá un correo electrónico que le notifique que ha sido eliminado. Debe entonces habilitar la 2FA para su cuenta personal y contactarse con un propietario de la organización para solicitar acceso a tu organización.

### Leer más

- "[Ver si los usuarios de tu organización tienen la 2FA activada](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"
- "[Asegurar tu cuenta con autenticación de dos factores (2FA)](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa)"
- "[Reinstalar un miembro antiguo de tu organización](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization)"
- "[Reinstalar el acceso a tu organización para un colaborador externo antiguo](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"
