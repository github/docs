---
title: Administrar la sincronización de equipos para tu organización
intro: 'Puedes habilitar e inhabilitar la sincronización entre tu Proveedor de Identidad (IdP) y tu organización en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/synchronizing-teams-between-your-identity-provider-and-github
  - /github/setting-up-and-managing-organizations-and-teams/synchronizing-teams-between-your-identity-provider-and-github
  - /github/articles/synchronizing-teams-between-okta-and-github
  - /github/setting-up-and-managing-organizations-and-teams/managing-team-synchronization-for-your-organization
permissions: Organization owners can manage team synchronization for an organization.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Administrar la sincronización de equipos
---

{% data reusables.enterprise-accounts.emu-scim-note %}

## Acerca de la sincronización de equipo

Puedes habilitar la sincronización de equipos entre tu IdP y {% data variables.product.product_name %} para permitir a los propietarios de la organización y a los mantenedores de equipo conectar equipos en tu organización con grupos de IdP.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.saml.ghec-only %}

{% data reusables.identity-and-permissions.supported-idps-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

También puedes habilitar la sincronización de equipos para las organizaciones que pertenezcan a tu cuenta empresarial. Para obtener más información, consulta la sección "[Administrar la sincronización de equipos para las organizaciones de tu empresa](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/managing-team-synchronization-for-organizations-in-your-enterprise).

{% data reusables.enterprise-accounts.team-sync-override %}

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Habilitar la sincronización de equipo

Los pasos para habilitar la sincronización de equipos dependen del IdP que quieras utilizar. Existen prerrequisitos aplicables a cada IdP para habilitar la sincronización de equipos. Cada IdP individual tiene prerrequisitos adicionales.

### Prerrequisitos

{% data reusables.identity-and-permissions.team-sync-required-permissions %}

Debes habilitar el inicio de sesión único de SAML para tu organización y tu IdP compatible. Para obtener más información, consulta la sección "[Requerir el inicio de sesión único de SAML en tu organización](/articles/enforcing-saml-single-sign-on-for-your-organization)".

Debes tener una identidad de SAML vinculada. Para crear una identidad vinculada, debes autenticarte a tu organización utilizando el SSO de SAML y el IdP compatible por lo menos una vez. Para obtener más información, consulta "[Acerca de la autenticación con el inicio de sesión único de SAML](/articles/about-authentication-with-saml-single-sign-on)".

Tus ajustes de SAML **deben** contener una URL de IdP válida para el campo **emisor**.

![Campo de emisor de SAML](/assets/images/help/saml/saml_issuer.png)



### Habilitar la sincronización de equipos para Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.enable-team-sync-azure %}
{% data reusables.identity-and-permissions.team-sync-confirm %}
6. Revisa la información de locatario del proveedor de identidad que deseas conectar a tu organización, después haz clic en **Approve (Aprobar)**. ![Solicitud pendiente para habilitar la sincronización de equipo a un locatario IdP específico con la opción de aprobar o cancelar la solicitud](/assets/images/help/teams/approve-team-synchronization.png)

### Habilitar la sincronización de equipos para Okta

La sincronización de equipos de Okta requiere que ya se hayan configurado el SAML y SCIM con Okta en tu organización.

Para evitar los errores potenciales de sincronización de equipos, de recomendamos que confirmes que las entidades de SCIM enlazadas se hayan configurado correctamente para los miembros de la organización que son miembros de tus grupos selectos de Okta antes de habilitar la sincronización de equipos en {% data variables.product.prodname_dotcom %}.

Si un miembro de la organización no tiene una identidad de SCIM enlazada, entonces la sincronización de equipos no funcionará como lo esperas y el usuario podría no agregarse o eliminarse de los equipos de acuerdo con lo esperado. Si cualquiera de estos usuarios no se encuentran en la identidad enlazada de SCIM, necesitarás volver a aprovisionarlos.

Para obtener ayuda para aprovisionar usuarios que no tengan una identidad de SCIM enlazada, consulta la sección "[Solución de problemas para la administración de identidad y acceso](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management)".

{% data reusables.identity-and-permissions.team-sync-okta-requirements %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.identity-and-permissions.team-sync-confirm-saml %}
{% data reusables.identity-and-permissions.team-sync-confirm-scim %}
1. Considera requerir SAML en tu organización para garantizar que los miembros de ella enlacen sus identidades de SAML y de SCIM. Para obtener más información, consulta la sección "[Requerir el inicio de sesión único de SAML en tu organización](/organizations/managing-saml-single-sign-on-for-your-organization/enforcing-saml-single-sign-on-for-your-organization)".
{% data reusables.identity-and-permissions.enable-team-sync-okta %}
7. Debajo del nombre de tu organización, teclea un token SSWS válido y la URL de tu instancia de Okta. ![Formulario organizacional de Okta para habilitar la sincronización de equipos](/assets/images/help/teams/confirm-team-synchronization-okta-organization.png)
6. Revisa la información de locatario del proveedor de identidad que deseas conectar a tu organización, después da clic en **Crear**. ![Botón de crear en habilitar la sincronización de equipos](/assets/images/help/teams/confirm-team-synchronization-okta.png)

## Inhabilitar la sincronización de equipo

{% data reusables.identity-and-permissions.team-sync-disable %}

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
5. Dentro de "Team synchronization" (Sincronización de equipo), haz clic en **Disable team synchronization (Inhabilitar la sincronización de equipo)**. ![Inhabilita la sincronización de equipo](/assets/images/help/teams/disable-team-synchronization.png)
