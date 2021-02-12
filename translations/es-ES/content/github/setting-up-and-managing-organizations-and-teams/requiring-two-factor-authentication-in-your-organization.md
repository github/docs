---
title: Solicitar autenticación de dos factores en tu organización
intro: 'Los propietarios de la organización pueden requerir que los {% if currentVersion == "free-pro-team@latest" %}miembros de la organización, colaboradores externos y gerentes de facturación{% else %}miembros de la organización y colaboradores externos{% endif %} habiliten la autenticación bifactorial para sus cuentas personales, lo cual hará más difícil que los actores malintencionados accedan a los repositorios y configuración de una organización.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de la autenticación bifactorial para las organizaciones

{% data reusables.two_fa.about-2fa %} Puedes requerir que todos los {% if currentVersion == "free-pro-team@latest" %}miembros, colaboradores externos y gerentes de facturación{% else %}miembros y colaboradores externos{% endif %} en tu organización habiliten la autenticación bifactorial en {% data variables.product.product_name %}. Para obtener más información acerca de la autenticación bifactorial, consulta la sección "[Asegurar tu cuenta con la autenticación bifactorial (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)".

{% if currentVersion == "free-pro-team@latest" %}

También puedes requerir autenticación bifactorial para las organizaciones en una empresa. Para obtener más información, consulta la sección "[Requerir los parámetros de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#requiring-two-factor-authentication-for-organizations-in-your-enterprise-account)".

{% endif %}

{% warning %}

**Advertencias:**

- Cuando requieres que se utilice la autenticación bifactorial en tu organización, {% if currentVersion == "free-pro-team@latest" %}los miembros, colaboradores externos y gerentes de facturación{% else %}los miembros y colaboradores externos{% endif %} (incluyendo las cuentas bot) que no utilicen 2FA se eliminarán de la misma y perderán el acceso a sus repositorios. También perderán acceso a las bifurcaciones de sus repositorios privados de la organización. Puedes [reinstalar sus privilegios y parámetros de acceso](/articles/reinstating-a-former-member-of-your-organization) si habilitan la autenticación de dos factores para su cuenta personal en el transcurso de los tres meses posteriores a la eliminación desde tu organización.
- Si un propietario, miembro,{% if currentVersion == "free-pro-team@latest" %} gerente de facturación,{% endif %} o colaborador externo de la organización inhabilita la 2FA para su cuenta personal después de que hayas habilitado que ésta se requiera, automáticamente se eliminarán de dicha organización.
- Si eres el único propietario de una organización que requiere autenticación de dos factores, no podrás inhabilitar la 2FA de tu cuenta personal sin inhabilitar la autenticación de dos factores para la organización.

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

### Prerrequisitos

Antes de que requieras que los {% if currentVersion == "free-pro-team@latest" %}miembros de la organización, colaboradores externos y gerentes de facturación{% else %}miembros de la organización y colaboradores externos{% endif %} utilicen la autenticación bifactorial, debes habilitarla para tu cuenta en {% data variables.product.product_name %}. Para obtener más información, consulta "[Proteger tu cuenta con la autenticación de dos factores (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)".

Antes de que requieras que se utilice la autenticación bifactorial, te recomendamos notificar a los {% if currentVersion == "free-pro-team@latest" %}miembros de la organización, colaboradores externos y gerentes de facturación{% else %}miembros de la organización y colaboradores externos{% endif %} y pedirles que configuren la 2FA en sus cuentas. Puedes ver si los miembros y colaboradores externos ya utilizan la 2FA. Para obtener más información, consulta "[Ver si los usuarios en tu organización tienen la 2FA habilitada](/github/setting-up-and-managing-organizations-and-teams/viewing-whether-users-in-your-organization-have-2fa-enabled)".

### Solicitar autenticación de dos factores en tu organización

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}
{% if currentVersion == "free-pro-team@latest" %}
8. Si algún miembro o colaborador externo se elimina de tu organización, te recomendamos enviarle una invitación para reinstalar sus privilegios antiguos y el acceso a tu organización. Deben habilitar la autenticación de dos factores para poder aceptar la invitación.
{% endif %}

### Ver las personas que se eliminaron de tu organización

Para ver las personas que se eliminaron automáticamente de tu organización por no cumplir cuando les requeriste la autenticación de dos factores, puedes [buscar el registro de auditoría de tu organización](/articles/reviewing-the-audit-log-for-your-organization/#accessing-the-audit-log) para las personas eliminadas de tu organización. El evento de registro de auditoría mostrará si se eliminó a una persona por no cumplir con la 2FA.

![Evento de registro de auditoría que muestra un usuario eliminado por no cumplir con la 2FA](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. Ingresa tu consulta de búsqueda. Para buscar por:
    - Miembros de la organización eliminados, utiliza `action:org.remove_member` en tu consulta de búsqueda
    - Colaboradores externos eliminados, utiliza `action:org.remove_outside_collaborator` en tu consulta de búsqueda{% if currentVersion == "free-pro-team@latest" %}
    - Gerentes de facturación eliminados, utiliza `action:org.remove_billing_manager`en tu consulta de búsqueda{% endif %}

 También puedes ver las personas que se eliminaron de tu organización utilizando un [período de tiempo](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action) en tu búsqueda.

### Ayudar a que los miembros y colaboradores externos eliminados se vuelvan a unir a tu organización

Si algún miembro o colaborador externo se eliminó de la organización cuando habilitaste el uso requerido de autenticación de dos factores, recibirá un correo electrónico que le notifique que ha sido eliminado. Debe entonces habilitar la 2FA para su cuenta personal y contactarse con un propietario de la organización para solicitar acceso a tu organización.

### Further reading

- "[Ver si los usuarios de tu organización tienen la 2FA habilitada](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"
- "[Proteger tu cuenta con autenticación de dos factores (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa)"
- "[Reinstalar un miembro antiguo de tu organización](/articles/reinstating-a-former-member-of-your-organization)"
- "[Reinstalar el acceso a tu organización de un colaborador externo antiguo](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"
