---
title: Problembehandlung bei der Identitäts- und Zugriffsverwaltung deines Unternehmens
shortTitle: Troubleshoot IAM
intro: Überprüfe häufige Probleme und Lösungen bei der Identitäts- und Zugriffsverwaltung deines Unternehmens.
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - Security
  - SSO
  - Troubleshooting
ms.openlocfilehash: 7b8c42a1012e91268f4315d99934a4f38c52a529
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107533'
---
## Benutzernamenkonflikte

{% ifversion ghec %}Wenn dein Unternehmen {% data variables.product.prodname_emus %} verwendet, normalisiert {% endif %}{% data variables.product.product_name %} einen von deinem Identitätsanbieter (IdP) bereitgestellten Bezeichner zum Erstellen der Benutzernamen aller Personen auf {% data variables.product.prodname_dotcom %}. Wenn mehrere Konten zum selben Benutzernamen auf {% data variables.product.prodname_dotcom %} normalisiert werden, ergibt sich ein Benutzernamenkonflikt, und nur das erste Benutzerkonto wird erstellt. Weitere Informationen findest du unter [Überlegungen zu Benutzernamen zur externen Authentifizierung](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

{% ifversion ghec %}
## Fehler beim Wechseln von Authentifizierungskonfigurationen

Wenn beim Wechseln zwischen verschiedenen Authentifizierungskonfigurationen Probleme auftreten, z. B. wenn du deine SAML-SSO-Konfiguration von einer Organisation zu einem Enterprise-Konto änderst oder für {% data variables.product.prodname_emus %} von SAML zu OIDC migrierst, stelle sicher, dass du die bewährten Methoden anwendest.

- [Wechseln deiner SAML-Konfiguration von einer Organisation zu einem Enterprise-Konto](/admin/identity-and-access-management/using-saml-for-enterprise-iam/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account)
- [Migrieren von SAML zu OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc)
- [Migrieren deines Unternehmens zu einem neuen Identitätsanbieter oder Mandanten](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-your-enterprise-to-a-new-identity-provider-or-tenant)

## Zugreifen auf Ihr Unternehmen, wenn SSO nicht verfügbar ist

Wenn ein Konfigurationsfehler oder ein Problem mit deinem Identitätsanbieter (IdP) das Verwenden von SSO verhindert, kannst du einen Wiederherstellungscode zum Zugreifen auf dein Unternehmen verwenden. Weitere Informationen finden Sie unter [Zugreifen auf dein Enterprise-Konto, wenn dein Identitätsanbieter nicht verfügbar ist](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable).
{% endif %}

## SAML-Authentifizierungsfehler

Treten Fehler auf, wenn Benutzer*innen sich mit SAML authentifizieren möchten, lies den Artikel [Problembehandlung bei der SAML-Authentifizierung](/admin/identity-and-access-management/using-saml-for-enterprise-iam/troubleshooting-saml-authentication).

{% ifversion ghec %}
## Weitere Informationsquellen

- [Problembehandlung bei der Identitäts- und Zugriffsverwaltung deiner Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/troubleshooting-identity-and-access-management-for-your-organization) {% endif %}
