---
title: Solicitar autenticación de dos factores en tu organización
intro: 'Los propietarios de la organización pueden requerir que los {% ifversion fpt or ghec %}miembros de la organización, colaboradores externos y gerentes de facturación{% else %}miembros de la organización y colaboradores externos{% endif %} habiliten la autenticación de dos factores para sus cuentas personales, lo que hace que sea más complicado para los actores maliciosos acceder a los repositorios y parámetros de una organización.'
redirect_from:
  - /articles/requiring-two-factor-authentication-in-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/requiring-two-factor-authentication-in-your-organization
  - /organizations/keeping-your-organization-secure/requiring-two-factor-authentication-in-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Requerir 2FA
---

## Acerca de la autenticación bifactorial para las organizaciones

{% data reusables.two_fa.about-2fa %} Puedes requerir que todos los {% ifversion fpt or ghec %}miembros, colaboradores externos y gerentes de facturación{% else %}miembros y colaboradores externos{% endif %} en tu organización habiliten la autenticación bifactorial en {% data variables.product.product_name %}. Para obtener más información acerca de la autenticación bifactorial, consulta la sección "[Asegurar tu cuenta con la autenticación bifactorial (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)".

{% ifversion fpt or ghec %}

También puedes requerir autenticación bifactorial para las organizaciones en una empresa. Para obtener más información, consulta la sección "[Requerir políticas para la configuración de seguridad en tu empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise)".

{% endif %}

{% warning %}

**Advertencias:**

- Cuando requieres el uso de autenticación de dos factores para tu organización, los {% ifversion fpt or ghec %}miembros, colaboradores externos y gerentes de facturación{% else %}miembros y colaboradores externos{% endif %} (incluidas las cuentas de bot) que no utilicen la 2FA se eliminarán de la organización y perderán el acceso a sus repositorios. También perderán acceso a las bifurcaciones de sus repositorios privados de la organización. Puedes [reinstalar sus privilegios y parámetros de acceso](/articles/reinstating-a-former-member-of-your-organization) si habilitan la autenticación de dos factores para su cuenta personal en el transcurso de los tres meses posteriores a la eliminación desde tu organización.
- Si un propietario de la organización, miembro,{% ifversion fpt or ghec %} gerente de facturación{% endif %} o colaborador externo inhabilita la 2FA para su cuenta personal después de que hayas habilitado la autenticación de dos factores requerida, se lo eliminará automáticamente de la organización.
- Si eres el único propietario de una organización que requiere autenticación de dos factores, no podrás inhabilitar la 2FA de tu cuenta personal sin inhabilitar la autenticación de dos factores para la organización.

{% endwarning %}

{% data reusables.two_fa.auth_methods_2fa %}

## Prerrequisitos

Antes de que requieras que los {% ifversion fpt or ghec %}miembros de la organización, colaboradores externos y gerentes de facturación{% else %}miembros de la organización y colaboradores externos{% endif %} utilicen la autenticación bifactorial, debes habilitarla para tu cuenta en {% data variables.product.product_name %}. Para obtener más información, consulta "[Proteger tu cuenta con la autenticación de dos factores (2FA)](/github/authenticating-to-github/securing-your-account-with-two-factor-authentication-2fa)".

Antes de que requieras el uso de autenticación de dos factores, recomendamos que se lo notifiques a los {% ifversion fpt or ghec %}miembros de la organización, colaboradores externos y gerentes de facturación{% else %}miembros de la organización y colaboradores externos{% endif %} y les solicites que configuren la 2FA para sus cuentas. Puedes ver si los miembros y colaboradores externos ya utilizan la 2FA. Para obtener más información, consulta "[Ver si los usuarios en tu organización tienen la 2FA habilitada](/organizations/keeping-your-organization-secure/viewing-whether-users-in-your-organization-have-2fa-enabled)".

## Solicitar autenticación de dos factores en tu organización

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}
{% ifversion fpt or ghec %}
8. Si algún miembro o colaborador externo se elimina de tu organización, te recomendamos enviarle una invitación para reinstalar sus privilegios antiguos y el acceso a tu organización. Deben habilitar la autenticación de dos factores para poder aceptar la invitación.
{% endif %}

## Ver las personas que se eliminaron de tu organización

Para ver las personas que se eliminaron automáticamente de tu organización por no cumplir cuando les requeriste la autenticación de dos factores, puedes [buscar el registro de auditoría de tu organización](/organizations/keeping-your-organization-secure/reviewing-the-audit-log-for-your-organization#accessing-the-audit-log) para las personas eliminadas de tu organización. El evento de registro de auditoría mostrará si se eliminó a una persona por no cumplir con la 2FA.

![Evento de registro de auditoría que muestra un usuario eliminado por no cumplir con la 2FA](/assets/images/help/2fa/2fa_noncompliance_audit_log_search.png)

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.audit_log.audit_log_sidebar_for_org_admins %}
4. Ingresa tu consulta de búsqueda. Para buscar por:
    - Miembros de la organización eliminados, utiliza `action:org.remove_member` en tu consulta de búsqueda
    - Colaboradores externos eliminados, utiliza `action:org.remove_outside_collaborator` en tu consulta de búsqueda{% ifversion fpt or ghec %}
    - Gerentes de facturación eliminados, utiliza `action:org.remove_billing_manager`en tu consulta de búsqueda{% endif %}

 También puedes ver las personas que se eliminaron de tu organización utilizando un [período de tiempo](/articles/reviewing-the-audit-log-for-your-organization/#search-based-on-time-of-action) en tu búsqueda.

## Ayudar a que los miembros y colaboradores externos eliminados se vuelvan a unir a tu organización

Si algún miembro o colaborador externo se eliminó de la organización cuando habilitaste el uso requerido de autenticación de dos factores, recibirá un correo electrónico que le notifique que ha sido eliminado. Debe entonces habilitar la 2FA para su cuenta personal y contactarse con un propietario de la organización para solicitar acceso a tu organización.

## Leer más

- "[Ver si los usuarios de tu organización tienen la 2FA habilitada](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"
- "[Proteger tu cuenta con autenticación de dos factores (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa)"
- "[Reinstalar un miembro antiguo de tu organización](/articles/reinstating-a-former-member-of-your-organization)"
- "[Reinstalar el acceso a tu organización de un colaborador externo antiguo](/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"
