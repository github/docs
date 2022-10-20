---
title: Administración de la sincronización de equipos para organizaciones de su empresa
intro: "Puedes habilitar la sincronización de equipos entre Azure\_AD y {% data variables.product.product_name %} para permitir que las organizaciones que pertenezcan a tu cuenta empresarial administren la pertenencia a un equipo mediante grupos de IdP."
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
shortTitle: Manage team synchronization
ms.openlocfilehash: 1e29d70b0b8fcf78a8b03834e9436112634c636f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076939'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## Acerca de la sincronización de equipos para las cuentas empresariales

Si utilizas SAML en el nivel de empresa con Azure AD como tu IdP, puedes habilitar la sincronización de equipos para tu cuenta empresarial a fin de permitir que los propietarios de la organización y los responsables de mantener al equipo sincronicen equipos en las organizaciones que pertenezcan a tus cuentas empresariales con grupos de IdP.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

También puedes configurar y administrar la sincronización de equipos para una organización individual. Para más información, vea "[Administración de la sincronización de equipos para la organización](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)".

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Prerrequisitos

Tú o tu administrador de Azure AD debe ser un administrador global o un administrador de Rol Privilegiado en Azure AD.
 
Debes requerir el inicio de sesión único de SAML para las organizaciones en tu cuenta empresarial con tu IdP compatible. Para obtener más información, vea "[Configuración del inicio de sesión único de SAML para la empresa](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise)".

Debes autenticarte en tu cuenta empresarial utilizando el SSO de SAML y el IdP compatible. Para más información, vea "[Autenticación con el inicio de sesión único de SAML](/articles/authenticating-with-saml-single-sign-on)".

## Administrar la sincronización de equipos para Azure AD

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
7. Revise los detalles del inquilino de IdP que quiere conectar a su cuenta de empresa y, después, haga clic en **Approve** (Aprobar).
  ![Solicitud pendiente para habilitar la sincronización de equipo a un locatario IdP específico con la opción de aprobar o cancelar la solicitud](/assets/images/help/teams/approve-team-synchronization.png)
8. Para deshabilitar la sincronización de equipos, haga clic en **Disable team synchronization** (Deshabilitar sincronización de equipos).
  ![Deshabilitación de la sincronización de equipos](/assets/images/help/teams/disable-team-synchronization.png)
