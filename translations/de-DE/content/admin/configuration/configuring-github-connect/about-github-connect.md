---
title: Informationen zu GitHub Verbinden
intro: '{% data variables.product.prodname_github_connect %} optimiert {% data variables.product.product_name %}, indem du Zugriff auf zusätzliche Features und Workflows erhältst, die auf der Leistungsfähigkeit von {% data variables.product.prodname_dotcom_the_website %} basiert.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - GitHub Connect
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ac4ec1d8b619e56c38013f5ae38d5782b6faec88
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160816'
---
## Informationen zu {% data variables.product.prodname_github_connect %}

{% data variables.product.prodname_github_connect %} verbessert {% data variables.product.product_name %}, indem {% data variables.location.product_location %} erlaubt wird, begrenzt von der Leistungsfähigkeit von {% data variables.product.prodname_dotcom_the_website %} profitieren zu können. Nachdem du {% data variables.product.prodname_github_connect %} aktiviert hast, kannst du zusätzliche Features und Workflows aktivieren, die auf {% data variables.product.prodname_dotcom_the_website %} basieren, zum Beispiel {% data variables.product.prodname_dependabot_alerts %} für Sicherheitsrisiken, die in {% data variables.product.prodname_advisory_database %} nachverfolgt werden.

{% data variables.product.prodname_github_connect %} kann {% data variables.location.product_location %} im öffentlichen Internet nicht öffnen. Keine der privaten Daten deines Unternehmens wird für {% data variables.product.prodname_dotcom_the_website %}-Benutzer*innen verfügbar gemacht. Stattdessen übermittelt {% data variables.product.prodname_github_connect %} nur die begrenzten Daten, die für die einzelnen Funktionen erforderlich sind, die du aktivieren möchtest. Sofern du die Lizenzsynchronisierung nicht aktivierst, werden keine personenbezogenen Daten von {% data variables.product.prodname_github_connect %} übermittelt. Weitere Informationen dazu, welche Daten von {% data variables.product.prodname_github_connect %} übertragen werden, findest du unter [Datenübertragung für {% data variables.product.prodname_github_connect %}](#data-transmission-for-github-connect).

Wenn {% data variables.product.prodname_github_connect %} aktiviert wird, können {% data variables.product.prodname_dotcom_the_website %}-Benutzer keine Änderungen an {% data variables.product.product_name %} vornehmen.

Um {% data variables.product.prodname_github_connect %} zu aktivieren, konfiguriere eine Verbindung zwischen {% data variables.location.product_location %} und einem Unternehmenskonto für {% data variables.product.prodname_dotcom_the_website %}, die {% data variables.product.prodname_ghe_cloud %} verwendet. {% data reusables.github-connect.connection-port-protocol %} Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect).

Nachdem du {% data variables.product.prodname_github_connect %} aktiviert hast, kannst du Funktionen wie {% ifversion ghes %}automatische Benutzerlizenzsynchronisierung und {% endif %}{% data variables.product.prodname_dependabot_alerts %} aktivieren. Weitere Informationen zu allen verfügbaren Funktionen findest du unter [{% data variables.product.prodname_github_connect %}-Funktionen](#github-connect-features).

## {% data variables.product.prodname_github_connect %}-Funktionen

Nachdem du die Verbindung zwischen {% data variables.location.product_location %} und {% data variables.product.prodname_ghe_cloud %} konfiguriert hast, kannst du einzelne Funktionen von {% data variables.product.prodname_github_connect %} für dein Unternehmen aktivieren.

Funktion | Beschreibung | Weitere Informationen | ------- | ----------- | ---------------- | {% ifversion ghes %} Automatische Benutzerlizenzsynchronisierung | Verwalte die Lizenznutzung in deinen {% data variables.product.prodname_enterprise %}-Bereitstellungen, indem du Benutzerlizenzen automatisch von {% data variables.location.product_location %} mit {% data variables.product.prodname_ghe_cloud %} synchronisierst. | [Aktivieren der automatischen Benutzerlizenzsynchronisierung für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise){% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot %} | Lasse zu, dass Benutzer*innen Sicherheitsrisiken in Codeabhängigkeiten finden und beheben können. | [Aktivieren von {% data variables.product.prodname_dependabot %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise){% endif %} {% data variables.product.prodname_dotcom_the_website %}-Aktionen | Lasse zu, dass Benutzer*innen Aktionen aus {% data variables.product.prodname_dotcom_the_website %} in Workflowdateien verwenden können. | [Aktivieren des automatischen Zugriffs auf {% data variables.product.prodname_dotcom_the_website %}-Aktionen unter Verwendung von {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect){% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | Analysiere deine eigenen aggregierten Daten von GitHub Enterprise Server und hilf uns, GitHub Produkte zu verbessern. | „[Aktivieren von {% data variables.product.prodname_server_statistics %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)"{% endif %} Einheitliche Suche | Lasse zu, dass Benutzer Repositorys für {% data variables.product.prodname_dotcom_the_website %} in ihre Suchergebnisse einschließen können, wenn diese nach {% data variables.location.product_location %} suchen. | [Aktivieren von {% data variables.enterprise.prodname_unified_search %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise) Einheitliche Beiträge | Lasse, dass Benutzer*innen anonymisierte Beiträge für ihre Arbeit an {% data variables.location.product_location %} in ihre Beitrags-Graphen auf {% data variables.product.prodname_dotcom_the_website %} einfügen können. | [Aktivieren von {% data variables.enterprise.prodname_unified_contributions %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-unified-contributions-for-your-enterprise)

## Datenübertragung für {% data variables.product.prodname_github_connect %} 

Wenn {% data variables.product.prodname_github_connect %} aktiviert ist, werden in einem Datensatz auf {% data variables.product.prodname_ghe_cloud %} Informationen zur Verbindung gespeichert. Wenn du einzelne Features von {% data variables.product.prodname_github_connect %} aktivierst, werden zusätzliche Daten übertragen.

{% note %}

**Hinweis:** Es werden keine Repositorys, Probleme oder Pull Request von {% data variables.product.product_name %} an {% data variables.product.prodname_dotcom_the_website %} von {% data variables.product.prodname_github_connect %} übertragen.

{% endnote %}

### Bei Aktivierung von {% data variables.product.prodname_github_connect %} übertragene Daten

Wenn du {% data variables.product.prodname_github_connect %} oder bestimmte {% data variables.product.prodname_github_connect %}-Funktionen aktivierst, speichert ein Datensatz in {% data variables.product.prodname_ghe_cloud %} die folgenden Informationen zur Verbindung.
{% ifversion ghes %}
- Der Teil des öffentlichen Schlüssels deiner {% data variables.product.prodname_ghe_server %}-Lizenz
- Ein Hash deiner {% data variables.product.prodname_ghe_server %}-Lizenz
- Der Kundenname auf deiner {% data variables.product.prodname_ghe_server %}-Lizenz
- Die Version von {% data variables.location.product_location_enterprise %}{% endif %}
- Der Hostname von {% data variables.location.product_location %}
- Die Organisation oder das Unternehmenskonto auf {% data variables.product.prodname_ghe_cloud %}, verbunden mit {% data variables.location.product_location %}
- Das Authentifizierungs-Token, das von {% data variables.location.product_location %} verwendet wird, um Anforderungen an {% data variables.product.prodname_ghe_cloud %} zu senden
- Wenn Transport Layer Security (TLS) aktiviert und für {% data variables.location.product_location %}{% ifversion ghes %} konfiguriert ist
- Die {% data variables.product.prodname_github_connect %}-Funktionen, die für {% data variables.location.product_location %} aktiviert sind, und das Datum und die Uhrzeit der Aktivierung{% endif %}
- Die Inaktivitätsschwelle für dein Unternehmen
- Die Anzahl der ruhenden Benutzer*innen für dein Unternehmen
- Anzahl der Lizenzen aufbrauchenden Arbeitsplätze, die keine gesperrten Benutzer enthalten

{% data variables.product.prodname_github_connect %} synchronisiert die oben genannten Verbindungsdaten zwischen {% data variables.location.product_location %} und {% data variables.product.prodname_ghe_cloud %} wöchentlich, ab dem Tag und der ungefähren Zeit, zu der {% data variables.product.prodname_github_connect %} aktiviert wurde.

### Von einzelnen Features von {% data variables.product.prodname_github_connect %} übertragene Daten

Zusätzliche Daten werden übertragen, wenn du einzelne Funktionen von {% data variables.product.prodname_github_connect %} aktivierst.

Funktion | Daten | Wohin fließen die Daten? | Wo befinden sich die verwendeten Daten? | ------- | ---- | --------- | ------ | {% ifversion ghes %} Automatische Benutzerlizenzsynchronisierung | Jede {% data variables.product.product_name %}-Benutzer-ID und E-Mail-Adressen | Von {% data variables.product.product_name %} zu {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot_alerts %} | Sicherheitsrisiken | Von {% data variables.product.prodname_dotcom_the_website %} bis {% data variables.product.product_name %} | {% data variables.product.product_name %} |{% endif %}{% ifversion dependabot-updates-github-connect %} {% data variables.product.prodname_dependabot_updates %} | Abhängigkeiten und die Metadaten für das Repository jeder Abhängigkeit<br><br>Wenn eine Abhängigkeit in einem privaten Repository für {% data variables.product.prodname_dotcom_the_website %}gespeichert wird, werden Daten nur übertragen, wenn {% data variables.product.prodname_dependabot %} konfiguriert und für den Zugriff auf dieses Repository autorisiert sind. | Von {% data variables.product.prodname_dotcom_the_website %} bis {% data variables.product.product_name %} | {% data variables.product.product_name %} {% endif %} {% data variables.product.prodname_dotcom_the_website %}-Aktionen | Name der Aktion, Aktion (YAML-Datei aus {% data variables.product.prodname_marketplace %}) | Von {% data variables.product.prodname_dotcom_the_website %} zu {% data variables.product.product_name %}<br><br>Von {% data variables.product.product_name %} zu {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %}{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | Aggregierte Metriken zu deiner Nutzung von {% data variables.product.prodname_ghe_server %} Eine vollständige Liste der Metriken findest du unter [Informationen zu {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected). | Von {% data variables.product.product_name %} zu {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %}{% endif %} Einheitliche Suche | Suchbegriffe, Suchergebnisse | Von {% data variables.product.prodname_dotcom_the_website %} zu {% data variables.product.product_name %}<br><br>Von {% data variables.product.product_name %} zu {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %} | Einheitliche Beiträge | Beitragsanzahl | Von {% data variables.product.product_name %} zu {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.prodname_dotcom_the_website %} |

## Weiterführende Themen

- „[Unternehmenskonten](/graphql/guides/managing-enterprise-accounts)“ in der Dokumentation zur GraphQL-API
