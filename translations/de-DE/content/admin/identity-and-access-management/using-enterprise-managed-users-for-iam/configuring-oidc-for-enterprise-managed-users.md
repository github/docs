---
title: Konfigurieren von OIDC für Enterprise Managed Users
shortTitle: OIDC for managed users
intro: 'Du kannst den Zugriff auf dein Unternehmenskonto auf {% data variables.product.prodname_dotcom %} automatisch verwalten, indem du OpenID Connect (OIDC) Single Sign-On (SSO) konfigurierst und die Unterstützung für die Richtlinie für bedingten Zugriff (Conditional Access Policy, CAP) deines IdP aktivierst.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: caa557cb976fb60a59572e1623db6be87efeee54
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179989'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## Informationen zu OIDC für Enterprise Managed Users

Mit {% data variables.product.prodname_emus %} verwendet dein Unternehmen deinen Identitätsanbieter (IdP) für die Authentifizierung aller Mitglieder. Du kannst mit OpenID Connect (OIDC) die Authentifizierung für dein {% data variables.enterprise.prodname_emu_enterprise %} verwalten. Das Aktivieren von OIDC SSO ist ein One-Klick-Einrichtungsprozess mit Zertifikaten, die von {% data variables.product.prodname_dotcom %} und deinem IdP verwaltet werden.

{% data reusables.enterprise-accounts.emu-cap-validates %} Weitere Informationen findest du unter [Informationen zur Unterstützung der Richtlinie für bedingten Zugriff deines IdP](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy).

Du kannst die Lebensdauer einer Sitzung und die Häufigkeit, mit der sich ein {% data variables.enterprise.prodname_managed_user %} bei deinem Identitätsanbieter neu authentifizieren muss, anpassen, indem du die Lebensdauerrichtlinien-Eigenschaft der für {% data variables.product.prodname_dotcom %} von deinem Identitätsanbieter ausgestellten ID-Tokens änderst. Die Standardlebensdauer beträgt eine Stunde. Weitere Informationen findest du unter [Konfigurierbare Tokengültigkeitsdauer in Microsoft Identity Platform](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-configurable-token-lifetimes) in der Azure AD-Dokumentation.

{% data reusables.enterprise_user_management.SAML-to-OIDC-migration-for-EMU %}

{% data reusables.enterprise-accounts.oidc-gei-warning %}

## Unterstützung für Identitätsanbieter

Die Unterstützung für OIDC ist für Kundschaft verfügbar, die Azure Active Directory (Azure AD) verwendet. 

Jeder Azure AD-Mandant kann nur eine OIDC-Integration mit {% data variables.product.prodname_emus %} unterstützen. Wenn du Azure AD auf {% data variables.product.prodname_dotcom %} mit mehreren Unternehmen verbinden möchtest, verwende stattdessen SAML. Weitere Informationen findest du unter [Konfigurieren von SAML Single Sign-On für {% data variables.product.prodname_emus %}](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users).

## Konfigurieren von OIDC für Enterprise Managed Users

1. Melde dich auf {% data variables.product.prodname_dotcom_the_website %} als Setupbenutzer für dein neues Unternehmen mit dem Namen **@<em>KURZCODE</em>_admin** an.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Wähle **Einmaliges Anmelden für OIDC anfordern** aus.  
   ![Screenshot des Kontrollkästchens „Einmaliges Anmelden für OIDC anfordern“](/assets/images/help/enterprises/require-oidc.png)
1. Um die Einrichtung fortzusetzen und zu Azure AD umgeleitet zu werden, klicke auf **Speichern**.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %} {% data reusables.enterprise-accounts.download-recovery-codes %}

## Aktivieren der Bereitstellung

Nach der OIDC SSO-Aktivierung kannst du die Bereitstellung aktivieren. Weitere Informationen findest du unter [Konfigurieren der SCIM-Bereitstellung für verwaltete Unternehmensbenutzer](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users).
