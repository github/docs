---
title: Administrar la sincronización de equipos para tu organización
intro: 'Puedes habilitar e inhabilitar la sincronización entre tu Proveedor de Identidad (IdP) y tu organización en {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.team-synchronization %}'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
topics:
  - Organizations
  - Teams
---

{% data reusables.gated-features.okta-team-sync %}

### Acerca de la sincronización de equipo

Puedes habilitar la sincronización de equipos entre tu IdP y {% data variables.product.product_name %} para permitir a los propietarios de la organización y a los mantenedores de equipo conectar equipos en tu organización con grupos de IdP.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

También puedes habilitar la sincronización de equipos para las organizaciones que pertenezcan a tu cuenta empresarial. Para obtener más información, consulta la sección "[Requerir los parámetros de seguridad en tu cuenta empresarial](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account)".

### Habilitar la sincronización de equipo

Los pasos para habilitar la sincronización de equipos dependen del IdP que quieras utilizar. Existen prerrequisitos aplicables a cada IdP para habilitar la sincronización de equipos. Cada IdP individual tiene prerrequisitos adicionales.

#### Prerrequisitos

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

Debes habilitar el inicio de sesión único de SAML para tu organización y tu IdP compatible. Para obtener más información, consulta la sección "[Requerir el inicio de sesión único de SAML en tu organización](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Debes autenticarte con tu organización utilizando el SSO de SAML y el IdP compatible. Para obtener más información, consulta "[Acerca de la autenticación con el inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)".

#### Habilitar la sincronización de equipos para Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
6. Revisa la información de locatario del proveedor de identidad que deseas conectar a tu organización, después haz clic en **Approve (Aprobar)**. ![Solicitud pendiente para habilitar la sincronización de equipo a un locatario IdP específico con la opción de aprobar o cancelar la solicitud](/assets/images/help/teams/approve-team-synchronization.png)

#### Habilitar la sincronización de equipos para Okta

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. Debajo del nombre de tu organización, teclea un token SSWS válido y la URL de tu instancia de Okta. ![Formulario organizacional de Okta para habilitar la sincronización de equipos](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. Revisa la información de locatario del proveedor de identidad que deseas conectar a tu organización, después da clic en **Crear**. ![Botón de crear en habilitar la sincronización de equipos](/assets/images/help/teams/confirm-team-synchronization-okta.png)

### Inhabilitar la sincronización de equipo

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.security %}
5. Dentro de "Team synchronization" (Sincronización de equipo), haz clic en **Disable team synchronization (Inhabilitar la sincronización de equipo)**. ![Inhabilita la sincronización de equipo](/assets/images/help/teams/disable-team-synchronization.png)
