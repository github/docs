---
title: Problembehandlung bei der Lizenznutzung für GitHub Enterprise
intro: 'Du kannst die Problembehandlung bei der Lizenznutzung für dein Unternehmen durchführen, indem du Lizenzberichte überwachst.'
permissions: 'Enterprise owners can review license usage for {% data variables.product.prodname_enterprise %}.'
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Troubleshoot license usage
ms.openlocfilehash: 8595aaad929e534ebbd474270f3e01f87113b5ec
ms.sourcegitcommit: aded2711e14a0c2473049d3d7e05c82a74e4c634
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179941'
---
## Informationen zur unerwarteter Lizenznutzung

Bei einer unerwarteten Anzahl für dein Unternehmen genutzter Lizenzen kannst du deine Lizenznutzung anhand des Berichts über genutzte Lizenzen in allen deinen Unternehmensbereitstellungen und Abonnements überwachen. Weitere Informationen findest du unter [Anzeigen der Lizenznutzung für GitHub Enterprise](/billing/managing-your-license-for-github-enterprise/viewing-license-usage-for-github-enterprise) und [Anzeigen des Abonnements und der Nutzung deines Unternehmenskontos](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account).

Wenn du Fehler findest, kannst du die Schritte zur Problembehandlung ausprobieren.

Aus Datenschutzgründen können Unternehmensbesitzer*innen nicht direkt auf die Details von Benutzerkonten zugreifen, es sei denn, du verwendest {% data variables.product.prodname_emus %}.

## Informationen zur Berechnung der verbrauchten Lizenzen

Wenn Benutzer*innen mindestens eine der folgenden Bedingungen erfüllen, wird {% data variables.product.company_short %} für diese Benutzer*innen in Rechnung gestellt.

- Die Benutzer*innen verwenden Bereitstellungen von {% data variables.product.prodname_ghe_server %}.
- Die Benutzer*innen sind Mitglieder einer deiner Organisationen in {% data variables.product.prodname_ghe_cloud %}.
- Die Benutzer*innen haben Schreibzugriff auf eines der privaten Repositorys deiner Organisation.
- Die Benutzer*innen sind {% data variables.visual_studio.prodname_vs_subscriber %}.

Einladungen für diese Rollen verbrauchen eine Lizenz, bis die Einladung akzeptiert wird oder abläuft. Weitere Informationen zu den Personen in deinem Unternehmen, die eine Lizenz nutzen, findest du unter [Informationen zur benutzerabhängigen Preisgestaltung](/billing/managing-billing-for-your-github-account/about-per-user-pricing).

Für jede*n Benutzer*in, der bzw. die einen einzelnen Arbeitsplatz verwendet, musst du unabhängig von der jeweils genutzten Anzahl von Bereitstellungen die Lizenznutzung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %} synchronisieren. Weitere Informationen findest du unter [Synchronisieren der Lizenznutzung zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %}](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

Nachdem du die Lizenznutzung synchronisiert hast, ordnet {% data variables.product.prodname_dotcom %} Benutzerkonten auf {% data variables.product.prodname_ghe_server %} Benutzerkonten auf {% data variables.product.prodname_ghe_cloud %} nach E-Mail-Adresse zu.

Zunächst überprüfen wir die primäre E-Mail-Adresse der einzelnen Benutzer*innen auf {% data variables.product.prodname_ghe_server %}. Anschließend versuchen wir, diese Adresse der E-Mail-Adresse für ein Benutzerkonto auf {% data variables.product.prodname_ghe_cloud %} zuzuordnen. Wenn dein Unternehmen SAML SSO verwendet, überprüfen wir zuerst die folgenden SAML-Attribute für E-Mail-Adressen.

- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name`
- `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`
- `username`
- `NameID`
- `emails`

Wenn keine in diesen Attributen gefundenen E-Mail-Adressen der primären E-Mail-Adresse auf {% data variables.product.prodname_ghe_server %} entspricht oder dein Unternehmen kein SAML SSO verwendet, überprüfen wir anschließend jede der verifizierten E-Mail-Adressen der betreffenden Benutzer*innen auf {% data variables.product.prodname_ghe_cloud %}. Weitere Informationen zur Überprüfung von E-Mail-Adressen auf {% data variables.product.prodname_dotcom_the_website %} findest du unter [Überprüfen deiner E-Mail-Adresse](/enterprise-cloud@latest/get-started/signing-up-for-github/verifying-your-email-address){% ifversion not ghec %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}

## Felder in den Dateien mit genutzten Lizenzen

Der {% data variables.product.prodname_dotcom_the_website %}-Lizenznutzungsbericht und die exportierte {% data variables.product.prodname_ghe_server %}-Lizenznutzungsdatei umfassen eine Vielzahl von Feldern zur Problembehandlung bei der Lizenznutzung für dein Unternehmen. 

### {% data variables.product.prodname_dotcom_the_website %}-Lizenznutzungsbericht (CSV-Datei)

Der Lizenznutzungsbericht für dein Unternehmen ist eine CSV-Datei, die die folgenden Informationen zu Mitgliedern deines Unternehmens enthält. Einige Felder sind spezifisch für deine {% data variables.product.prodname_ghe_cloud %}-Bereitstellung (GHEC), verbundenen {% data variables.product.prodname_ghe_server %}-Umgebungen (GHES) oder deine {% data variables.product.prodname_vs %}-Abonnements (VSS) mit GitHub Enterprise.

| Feld | Beschreibung
| ----- | -----------
| github_com_login | Der Benutzername für das GHEC-Konto des Benutzers bzw. der Benutzerin
| github_com_name | Der Anzeigename für das GHEC-Konto des Benutzers bzw. der Benutzerin
| github_com_profile | Die URL für die Profilseite des Benutzers bzw. der Benutzerin auf GHEC
| github_com_user   | Ob der Benutzer bzw. die Benutzerin über ein Konto auf GHEC verfügt |
| github_com_member_roles | Der Name der Organisation und die Rolle des Benutzers bzw. der Benutzerin in dieser Organisation (`Owner` oder `Member`), getrennt durch einen Doppelpunkt (für jede der Organisationen, denen der Benutzer bzw. die Benutzerin auf GHEC angehört)<br><br>Durch Kommas getrennte Organisationen |
| github_com_enterprise_role | Mögliche Werte: `Owner`, `Member` oder `Outside collaborator`
| github_com_verified_domain_emails | Alle dem GHEC-Konto des Benutzers bzw. der Benutzerin zugeordneten E-Mail-Adressen, die den verifizierten Domänen deines Unternehmens entsprechen |
| github_com_saml_name_id | Der SAML-Benutzername |
| github_com_orgs_with_pending_invites | Alle ausstehenden Einladungen für das GHEC-Konto des Benutzers bzw. der Benutzerin zur Teilnahme an Organisationen innerhalb deines Unternehmens |
| license_type | Mögliche Werte: `Visual Studio subscription` oder `Enterprise`
| enterprise_server_user| Ob der Benutzer mindestens ein Konto auf GHES hat oder nicht |
| enterprise_server_primary_emails | Die primären E-Mail-Adressen, die jedem der GHES-Konten des Benutzers bzw. der Benutzerin zugeordnet sind |
| enterprise_server_user_ids | Die Benutzer-ID des Kontos (für jedes der GHES-Konten des Benutzers bzw. der Benutzerin)
| total_user_accounts | Die Gesamtzahl der Konten, über die die Person sowohl auf GHEC als auch auf GHES verfügt
| visual_studio_subscription_user | Ob der Benutzer ein {% data variables.visual_studio.prodname_vs_subscriber %} ist oder nicht |
| visual_studio_subscription_email | Die E-Mail-Adresse, die dem VSS des Benutzers bzw. der Benutzerin zugeordnet ist |
| visual_studio_license_status | Ob die Visual Studio-Lizenz einem bzw. einer {% data variables.product.company_short %}-Benutzer*in entspricht. |

{% data variables.visual_studio.prodname_vs_subscriber %}, die noch keine Mitglieder mindestens einer Organisation in deinem Unternehmen sind, sind im Bericht mit einem ausstehenden Einladungsstatus enthalten, und für sie fehlen Werte in den Feldern „Name“ oder „Profillink“.

### Exportierte {% data variables.product.prodname_ghe_server %}-Lizenznutzung (JSON-Datei)

Deine {% data variables.product.prodname_ghe_server %}-Lizenznutzung ist eine JSON-Datei, die in der Regel beim Ausführen einer manuellen Synchronisierung von Benutzerlizenzen zwischen {% data variables.product.prodname_ghe_server %} und {% data variables.product.prodname_ghe_cloud %}-Bereitstellungen verwendet wird. Die Datei enthält die folgenden Informationen, die für deine {% data variables.product.prodname_ghe_server %}-Umgebung spezifisch sind.

| Feld | BESCHREIBUNG
| ----- | -----------
| Features | Das Datum und die Uhrzeit der Aktivierung sind die auf deiner {% data variables.product.prodname_ghe_server %}-Instanz aktivierten {% data variables.product.prodname_github_connect %}-Features.
| Hostname | Der Hostname deiner {% data variables.product.prodname_ghe_server %}-Instanz.
| Nur HTTP | Ob Transport Layer Security (TLS) aktiviert und für deine {% data variables.product.prodname_ghe_server %}-Instanz konfiguriert ist. Kann `True` oder `False` sein. 
| Lizenz | Ein Hash deiner {% data variables.product.prodname_ghe_server %}-Lizenz.
| Öffentlicher Schlüssel | Der Teil deiner {% data variables.product.prodname_ghe_server %}-Lizenz, der ein öffentlicher Schlüssel ist.
| Server-ID | UUID, die für deine {% data variables.product.prodname_ghe_server %}-Instanz generiert wurde.
| Version | Die Version deiner {% data variables.product.prodname_ghe_server %}-Instanz.

## Problembehandlung bei genutzten Lizenzen

Um sicherzustellen, dass jeder Benutzer bzw. jede Benutzerin nur einen Arbeitsplatz für verschiedene Bereitstellungen und Abonnements verwendet, probiere die folgenden Schritte zur Problembehandlung aus.

1. Wenn dein Unternehmen verifizierte Domänen für {% data variables.product.prodname_ghe_cloud %} verwendet, überprüfe die Liste der Unternehmensmitglieder, die keine E-Mail-Adresse aus einer verifizierten Domäne haben, welche mit ihrem Konto auf {% data variables.product.prodname_dotcom_the_website %} verknüpft ist, um Benutzer*innen zu ermitteln, die mehrere Arbeitsplätze verbrauchen. Häufig sind dies die Benutzer, die versehentlich mehr als eine Arbeitsplatzlizenz nutzen. Weitere Informationen findest du unter [Anzeigen von Mitgliedern ohne E-Mail-Adresse aus einer überprüften Domäne](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#viewing-members-without-an-email-address-from-a-verified-domain).

   {% note %}

  **Hinweis:** Zur Erleichterung der Problembehandlung empfehlen wir die Verwendung verifizierter Domänen mit deinem Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %}. Weitere Informationen findest du unter [Überprüfen oder Genehmigen einer Domäne für dein Unternehmen](/enterprise-cloud@latest/admin/configuration/configuring-your-enterprise/verifying-or-approving-a-domain-for-your-enterprise).

  {% endnote %}
1. Nachdem du Benutzer*innen identifiziert hast, die mehrere Arbeitsplätze verwenden, stelle sicher, dass die gleiche E-Mail-Adresse allen Konten des Benutzers bzw. der Benutzerin zugeordnet ist. Weitere Informationen dazu, welche E-Mail-Adressen übereinstimmen müssen, findest du unter [Informationen zur Berechnung der verbrauchten Lizenzen](#about-the-calculation-of-consumed-licenses).
1. Wenn eine E-Mail-Adresse kürzlich aktualisiert oder überprüft wurde, um eine Übereinstimmung zu korrigieren, zeige den Zeitstempel des letzten Lizenzsynchronisierungsauftrags an. Wenn ein Auftrag seit der Korrektur nicht ausgeführt wurde, löse manuell einen neuen Auftrag aus. Weitere Informationen findest du unter [Synchronisieren der Lizenzverwendung zwischen GitHub Enterprise Server und GitHub Enterprise Cloud](/billing/managing-your-license-for-github-enterprise/syncing-license-usage-between-github-enterprise-server-and-github-enterprise-cloud).

Wenn du nach der Einsicht der oben genannten Problembehandlungsinformationen noch Fragen zu deinen genutzten Lizenzen hast, kannst du dich über das {% data variables.contact.contact_enterprise_portal %} an den {% data variables.contact.github_support %} wenden.
