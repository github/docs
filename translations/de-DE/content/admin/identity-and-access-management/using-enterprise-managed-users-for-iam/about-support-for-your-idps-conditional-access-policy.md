---
title: Informationen zur Unterstützung der IdP-Richtlinie für bedingten Zugriff
shortTitle: Conditional access policy
intro: 'Wenn dein Unternehmen OIDC-SSO verwendet, kann {% data variables.product.prodname_dotcom %} den Zugriff auf dein Unternehmen und seine Ressourcen mithilfe der Richtlinie für bedingten Zugriff (Conditional Access Policy, CAP) deines Identitätsanbieters überprüfen.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: aed7008bd008ccfd6303ccbb36f4d6f3bd7002ca
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148179997'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## Informationen zur Unterstützung der Richtlinien für bedingten Zugriff

{% data reusables.enterprise-accounts.emu-cap-validates %}

{% data variables.product.product_name %} unterstützt CAP für alle {% data variables.enterprise.prodname_emu_enterprise %} mit aktiviertem OIDC-SSO. {% data variables.product.product_name %} erzwingt die IP-Bedingungen deines Identitätsanbieters, kann aber nicht die Gerätekompatibilitätsbedingungen erzwingen. Unternehmensbesitzer*innen können diese Konfiguration für eine Liste zugelassener IP-Adressen anstelle der Liste zugelassener IP-Adressen von {% data variables.product.product_name %} verwenden. Dies ist nach der Konfiguration von OIDC-SSO möglich. Weitere Informationen zu Listen zugelassener IP-Adressen findest du unter [Einschränken des Netzwerkdatenverkehrs mit einer Liste zugelassener IP-Adressen](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list) und [Verwalten zulässiger IP-Adressen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization).


Weitere Informationen zur Verwendung von OIDC mit {% data variables.product.prodname_emus %} findest du unter [Konfigurieren von OIDC für verwaltete Benutzer im Unternehmen](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users) und [Migrieren von SAML zu OIDC](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/migrating-from-saml-to-oidc).

## Überlegungen zu Integrationen und Automatisierungen

{% data variables.product.prodname_dotcom %} sendet die IP-Quelladresse zur Überprüfung anhand deiner CAP an deinen IdP. Um sicherzustellen, dass Aktionen und Apps nicht von der CAP deines IdP blockiert werden, musst du Änderungen an deiner Konfiguration vornehmen.

{% data reusables.enterprise-accounts.oidc-gei-warning %}

### {% data variables.product.prodname_actions %}

Aktionen, die ein {% data variables.product.pat_generic %} verwenden, werden wahrscheinlich von der CAP deines Identitätsanbieters blockiert. {% data variables.product.pat_generic %} sollten von einem Dienstkonto erstellt werden, das dann von IP-Steuerungen in der CAP deines Identitätsanbieters ausgenommen ist. 

Wenn du kein Dienstkonto verwenden kannst, ist die Zulassung der von {% data variables.product.prodname_actions %} verwendeten IP-Bereiche eine weitere Option, Aktionen freizugeben, die {% data variables.product.pat_generic %} verwenden. Weitere Informationen findest du unter [Informationen zu den IP-Adressen von GitHub](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).

### {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %} 

Wenn {% data variables.product.prodname_github_apps %} und {% data variables.product.prodname_oauth_apps %} Anforderungen im Auftrag eines Mitglieds vornehmen, sendet {% data variables.product.prodname_dotcom %} die IP-Adresse des Servers der App zur Überprüfung an deinen IdP. Wenn die IP-Adresse des Servers der App von der CAP deines IdP nicht überprüft wird, tritt bei der Anforderung ein Fehler auf.

Du kannst die Besitzer der Apps, die du verwenden möchtest, nach ihren IP-Bereichen fragen und die CAP deines IDP konfigurieren, um den Zugriff von diesen IP-Bereichen aus zu ermöglichen. Wenn du dich nicht an die Besitzer wenden kannst, kannst du deinen IdP-Anmeldeprotokollen die in den Anforderungen angezeigten IP-Adressen entnehmen und dann diese Adressen auf die Zulassungsliste setzen. 

Wenn du nicht alle IP-Adressbereiche für alle Apps deines Unternehmens zulassen möchtest, kannst du auch installierte {% data variables.product.prodname_github_apps %} und autorisierte {% data variables.product.prodname_oauth_apps %} aus der Liste zugelassener IP-Adressen des Identitätsanbieters ausschließen. In diesem Fall funktionieren diese Apps weiterhin, unabhängig von der ursprünglichen IP-Adresse. Weitere Informationen findest du unter [Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#allowing-access-by-github-apps).
