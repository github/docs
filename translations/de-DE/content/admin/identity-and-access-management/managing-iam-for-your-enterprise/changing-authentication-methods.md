---
title: Ändern der Authentifizierungsmethoden
intro: 'Du kannst jederzeit ändern, wie sich {% data variables.product.prodname_ghe_server %} mit deinen vorhandenen Konten authentifiziert.'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
  - /admin/authentication/changing-authentication-methods
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
versions:
  ghes: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Change authentication methods
ms.openlocfilehash: 074c4fe8784d3ea7b8ada6b532e680384571facf
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882691'
---
Wenn du die Authentifizierungsmethode änderst, werden Benutzerkonten in {% data variables.product.product_location %} beibehalten, und Benutzer*innen melden sich weiterhin beim selben Konto an, sofern ihr Benutzername nicht geändert wird.

Wenn bei der neuen Authentifizierungsmethode Benutzernamen geändert werden, werden neue Konten erstellt. Als Administrator*in kannst du Benutzer*innen über die Websiteadministratoreinstellungen oder die [API für die Benutzerverwaltung](/rest/reference/enterprise-admin#update-the-username-for-a-user) umbenennen.

Zudem solltest du die folgenden Issues in Betracht ziehen:

* **Kennwörter:** Wenn du zu einer integrierten Authentifizierungsmethode für deine Instanz wechselst, müssen Benutzer*innen nach Abschluss der Änderung [ein Kennwort festlegen](/enterprise/user/articles/how-can-i-reset-my-password/).

* **Websiteadministrator*innen:** Administratorberechtigungen werden [von deinem Identitätsanbieter gesteuert, wenn du SAML verwendest](/enterprise/admin/guides/user-management/using-saml/#saml-attributes). Zudem können sie [bei Verwendung von LDAP von einer Gruppenmitgliedschaft gesteuert werden](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance).

* **Teammitgliedschaft:** Nur LDAP ermöglicht das [Steuern der Teammitgliedschaft](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance) über deinen Verzeichnisserver.

* **Benutzersperre:** Wenn du LDAP für die Authentifizierung verwendest, kann der Zugriff auf {% data variables.product.prodname_ghe_server %} über _eingeschränkte Gruppen_ gesteuert werden. Nach dem Umstieg auf LDAP werden nach der Konfiguration von eingeschränkten Gruppen vorhandene Benutzer gesperrt, die sich in keiner dieser Gruppen befinden. Die Sperre erfolgt, wenn sie sich anmelden, oder während der nächsten LDAP-Synchronisierung.

* **Gruppenmitgliedschaft:** Wenn du LDAP für die Authentifizierung verwendest, werden Benutzer*innen basierend auf eingeschränkten Gruppenmitgliedschaften und Kontostatus mit Active Directory automatisch [gesperrt und entsperrt](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users).

* **Git-Authentifizierung:** SAML und CAS unterstützt nur die Git-Authentifizierung über das HTTP oder HTTPS mithilfe eines [persönlichen Zugriffstokens](/articles/creating-an-access-token-for-command-line-use). Die Passwortauthentifizierung über HTTP oder HTTPS wird nicht unterstützt. LDAP unterstützt standardmäßig die kennwortbasierte Git-Authentifizierung. Es wird jedoch empfohlen, [diese Methode zu deaktivieren](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations) und die Authentifizierung über ein persönliches Zugriffstoken oder einen SSH-Schlüssel zu erzwingen.

* **API-Authentifizierung:** SAML und CAS unterstützen nur die API-Authentifizierung mithilfe eines [persönlichen Zugriffstokens](/articles/creating-an-access-token-for-command-line-use). Die einfache Authentifizierung wird nicht unterstützt.

* **Zweistufige Authentifizierung:** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **Fallbackauthentifizierung für Benutzer*innen ohne Konto für deinen externen Authentifizierungsanbieter:** Du kannst Benutzer*innen einladen, sich bei {% data variables.product.product_location %} zu authentifizieren, ohne sie zu deinem Identitätsanbieter hinzuzufügen. Weitere Informationen findest du unter [Zulassen der integrierten Authentifizierung für Benutzer*innen außerhalb deines Anbieters](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider).
