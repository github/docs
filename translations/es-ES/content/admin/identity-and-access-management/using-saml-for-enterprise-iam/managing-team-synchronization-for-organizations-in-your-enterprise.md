---
title: Managing team synchronization for organizations in your enterprise
intro: 'Puedes habilitar la sincronización de equipos entre un proveedor de identidad (IdP) y {% data variables.product.product_name %} para permitir que las organizaciones que pertenezcan a tu cuenta empresarial administren la membrecía de equipo a través de grupos de IdP.'
permissions: Enterprise owners can manage team synchronization for an enterprise account.
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
  - SSO
  - Teams
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/managing-team-synchronization-for-organizations-in-your-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise
shortTitle: Administrar la sincronización de equipos
---

{% data reusables.enterprise-accounts.emu-scim-note %}

## Acerca de la sincronización de equipos para las cuentas empresariales

Si utilizas Azure AD como tu IdP, puedes habilitar la sincronización de equipos para tu cuenta empresarial para permitir que los propietarios de la organización y mantenedores de equipo sincronicen equipos en las organizaciones que pertenezcan a tus cuentas empresariales con grupos de IdP.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

También puedes configurar y administrar la sincronización de equipos para una organización individual. Para obtener más información, consulta la sección [Administrar la sincronización de equipos para tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Prerrequisitos

Tú o tu administrador de Azure AD debe ser un administrador global o un administrador de Rol Privilegiado en Azure AD.

Debes requerir el inicio de sesión único de SAML para las organizaciones en tu cuenta empresarial con tu IdP compatible. Para obtener más información, consulta la sección "[Configurar el inicio de sesión único de SAML para tu empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Debes autenticarte en tu cuenta empresarial utilizando el SSO de SAML y el IdP compatible. Para obtener más información, consulta "[Acerca de la autenticación con el inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)".

## Administrar la sincronización de equipos para Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
7. Revisa los detalles del organismo de IdP que quieres conectar a tu cuenta empresarial y luego da clic en **Aprovar**. ![Solicitud pendiente para habilitar la sincronización de equipo a un locatario IdP específico con la opción de aprobar o cancelar la solicitud](/assets/images/help/teams/approve-team-synchronization.png)
8. Para inhabilitar la sincronización de equipos, da clic en **Inhabilitar la sincronización de equipos**. ![Inhabilita la sincronización de equipo](/assets/images/help/teams/disable-team-synchronization.png)
