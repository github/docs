---
title: Verwalten der Teamsynchronisierung für Organisationen in deinem Unternehmen
intro: 'Du kannst die Teamsynchronisierung zwischen Azure AD und {% data variables.product.product_name %} aktivieren, sodass Organisationen im Besitz deines Unternehmenskontos Teammitgliedschaften über IdP-Gruppen verwalten können.'
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147076935'
---
{% data reusables.enterprise-accounts.emu-scim-note %}

## Informationen zur Teamsynchronisierung für Unternehmenskonten

Wenn du SAML auf Unternehmensebene mit Azure AD als IdP verwendest, kannst du die Teamsynchronisierung für dein Unternehmenskonto aktivieren, damit Organisationsbesitzer*innen und Teambetreuer*innen Teams in den Organisationen synchronisieren können, die sich im Besitz deiner Unternehmenskonten mit IdP-Gruppen befinden.

{% data reusables.identity-and-permissions.about-team-sync %}

{% data reusables.identity-and-permissions.sync-team-with-idp-group %}

{% data reusables.identity-and-permissions.team-sync-disable %}

Du kannst auch die Teamsynchronisation für eine einzelne Organisation konfigurieren und verwalten. Weitere Informationen findest du unter [Verwalten der Teamsynchronisierung für deine Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization).

{% data reusables.identity-and-permissions.team-sync-usage-limits %}

## Voraussetzungen

müssen du oder dein Azure AD-Administrator ein Global-Administrator oder ein Privileged Role-Administrator in Azure AD sein.
 
Du musst SAML-SSO für Organisationen in deinem Unternehmenskonto mit deinem unterstützten IdP erzwingen. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

musst du mit SAML SSO und der unterstützten IdP zu deinem Enterprise-Konto authentifizieren. Weitere Informationen findest du unter [Authentifizieren mit einmaligem Anmelden mit SAML](/articles/authenticating-with-saml-single-sign-on).

## Teamsynchronisation für Azure AD verwalten

{% data reusables.identity-and-permissions.team-sync-azure-permissions %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %} {% data reusables.identity-and-permissions.team-sync-confirm-saml %} {% data reusables.identity-and-permissions.enable-team-sync-azure %} {% data reusables.identity-and-permissions.team-sync-confirm %}
7. Überprüfe die Details für den IdP-Mandanten, der eine Verbindung mit deinem Unternehmenskonto herstellen soll, und klicke dann auf **Genehmigen**.
  ![Ausstehende Anforderung zum Aktivieren der Teamsynchronisierung für einen bestimmten IdP-Mandanten mit der Option zum Genehmigen oder Ablehnen der Anforderung](/assets/images/help/teams/approve-team-synchronization.png)
8. Um die Teamsynchronisierung zu deaktivieren, klicke auf **Teamsynchronisierung deaktivieren**.
  ![Deaktivieren von Teamsynchronisierung](/assets/images/help/teams/disable-team-synchronization.png)
