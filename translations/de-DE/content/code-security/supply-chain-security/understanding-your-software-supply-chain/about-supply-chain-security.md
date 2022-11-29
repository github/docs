---
title: Informationen zur Lieferkettensicherheit
intro: 'Mit {% data variables.product.product_name %} kannst du deine Lieferkette absichern, indem du Informationen über die Abhängigkeiten in deiner Umgebung bis zu den Sicherheitsrisiken dieser Abhängigkeiten erhältst{% ifversion fpt or ghec or ghes %} und diese patchen kannst{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Supply chain security
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Dependency graph
  - Vulnerabilities
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: d0f743db7d1f5a054a3eb8c7b4dbf81052aca50f
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181236'
---
## Informationen zur Lieferkettensicherheit auf GitHub

Aufgrund der zunehmenden Verwendung von Open-Source-Lösungen hängen die meisten Projekte von Hunderten von Open-Source-Abhängigkeiten ab. Dies stellt ein Sicherheitsproblem dar: Was ist, wenn die von Ihnen verwendeten Abhängigkeiten Sicherheitsrisiken aufweisen? Du könntest deine Benutzer*innen dem Risiko eines Lieferkettenangriffs aussetzen. Eine der wichtigsten Maßnahmen zum Schutz deiner Lieferkette besteht darin, deine anfälligen Abhängigkeiten zu patchen{% ifversion GH-advisory-db-supports-malware %} und jegliche Schadsoftware zu ersetzen{% endif %}.

Du fügst Abhängigkeiten direkt deiner Lieferkette hinzu, wenn du sie in einer Manifest- oder Sperrdatei angibst. Abhängigkeiten können aber auch transitiv eingeschlossen werden. Dies bedeutet, dass, auch wenn du eine bestimmte Abhängigkeit nicht angibst, eine deiner Abhängigkeiten diese jedoch verwendet, du ebenfalls von dieser Abhängigkeit abhängig bist.

{% data variables.product.product_name %} bietet eine Reihe von Features, die dir dabei helfen, die Abhängigkeiten in deiner Umgebung{% ifversion ghae %} und die Sicherheitsrisiken dieser Abhängigkeiten zu verstehen{% endif %}{% ifversion fpt or ghec or ghes %}und die Sicherheitsrisiken dieser Abhängigkeiten zu verstehen und diese zu patchen{% endif %}. 

Die Lieferkettenfeatures auf {% data variables.product.product_name %} sind:
- **Abhängigkeitsdiagramm**
- **Abhängigkeitsüberprüfung**
- **{% data variables.product.prodname_dependabot_alerts %} ** {% ifversion fpt or ghec or ghes %} – **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}**{% endif %}

Das Abhängigkeitsdiagramm ist von zentraler Bedeutung für die Lieferkettensicherheit. Es zeigt alle Upstreamabhängigkeiten eines Repositorys oder Pakets sowie alle öffentlichen Downstreamelemente, die von diesem Repository bzw. Paket abhängig sind. Im Abhängigkeitsdiagramm für das Repository kannst du die Abhängigkeiten deines Repositorys sowie einige der Eigenschaften dieser Abhängigkeiten sehen, z. B. Informationen zu Sicherheitsrisiken. 

Andere Lieferkettenfeatures auf {% data variables.product.prodname_dotcom %} nutzen die Informationen aus dem Abhängigkeitsdiagramm.

- Die Abhängigkeitsüberprüfung verwendet das Abhängigkeitsdiagramm, um Änderungen bei Abhängigkeiten zu erkennen und Ihnen dabei zu helfen, beim Überprüfen von Pull Requests die Auswirkungen dieser Änderungen auf die Sicherheit zu verstehen.
- {% data variables.product.prodname_dependabot %} gleicht die vom Abhängigkeitsdiagramm bereitgestellten Abhängigkeitsdaten mit der in {% data variables.product.prodname_advisory_database %} veröffentlichten Empfehlungsliste ab, überprüft deine Abhängigkeiten und generiert {% data variables.product.prodname_dependabot_alerts %}, wenn ein potenzielles Sicherheitsrisiko {% ifversion GH-advisory-db-supports-malware %}oder Schadsoftware{% endif %} erkannt wurde.
{% ifversion fpt or ghec or ghes %} – {% data variables.product.prodname_dependabot_security_updates %} verwenden das Abhängigkeitsdiagramm und {% data variables.product.prodname_dependabot_alerts %}, um dich beim Aktualisieren von Abhängigkeiten mit bekannten Sicherheitsrisiken in deinem Repository zu unterstützen.

{% data variables.product.prodname_dependabot_version_updates %} verwenden nicht das Abhängigkeitsdiagramm, sondern die semantische Versionierung von Abhängigkeiten. {% data variables.product.prodname_dependabot_version_updates %} hilft dir dabei, deine Abhängigkeiten auf dem jeweils aktuellen Stand zu halten, auch wenn keine Sicherheitsrisiken vorliegen.
{% endif %}

{% ifversion fpt or ghec or ghes %} Leitlinien mit bewährten Methoden zur Sicherheit der gesamten Lieferkette, einschließlich des Schutzes von persönlichen Konten, Code und Prozessen, findest du unter [Sichern einer End-to-End-Lieferkette](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview).
{% endif %}

## Funktionsübersicht

### Was ist das Abhängigkeitsdiagramm?

Zum Generieren des Abhängigkeitsdiagramms überprüft {% data variables.product.company_short %} die expliziten, im Manifest und in Sperrdateien deklarierten Abhängigkeiten eines Repositorys. Wenn das Abhängigkeitsdiagramm aktiviert ist, parst es automatisch alle bekannten Paketmanifestdateien im Repository und verwendet diese, um ein Diagramm mit den Namen und Versionen bekannter Abhängigkeiten zu erstellen.

- Das Abhängigkeitsdiagramm enthält Informationen zu deinen _direkten_ und _transitiven_ Abhängigkeiten. 
- Das Abhängigkeitsdiagramm wird automatisch aktualisiert, wenn du einen Commit an {% data variables.product.company_short %} pushst, der eine unterstützte Manifest- oder Sperrdatei für den Standardbranch ändert oder hinzufügt, und wenn jemand eine Änderung an das Repository einer deiner Abhängigkeiten pusht.
- Du kannst das Abhängigkeitsdiagramm anzeigen, indem du die Hauptseite des Repositorys auf {% data variables.product.product_name %} öffnest und zur Registerkarte **Erkenntnisse** navigierst.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

Weitere Informationen zum Abhängigkeitsdiagramm findest du unter [Informationen zum Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph).

### Was ist die Abhängigkeitsüberprüfung?

Die Abhängigkeitsüberprüfung hilft Reviewer*innen und Mitwirkenden dabei, Änderungen bei Abhängigkeiten und deren Auswirkungen auf die Sicherheit in allen Pull Requests zu verstehen. 

- Die Abhängigkeitsüberprüfung teilt Ihnen mit, welche Abhängigkeiten in einem Pull Request hinzugefügt, entfernt oder aktualisiert wurden. Du kannst das Veröffentlichungsdatum, die Beliebtheit von Abhängigkeiten und Informationen zu Sicherheitsrisiken verwenden, um zu entscheiden, ob du die Änderung annehmen möchtest.
- Du kannst die Abhängigkeitsüberprüfung für einen Pull Request einsehen, indem du auf der Registerkarte **Geänderte Dateien** das Rich-Diff anzeigst.

Weitere Informationen zur Abhängigkeitsüberprüfung findest du unter [Informationen zur Abhängigkeitsüberprüfung](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).

### Was ist Dependabot?

{% data variables.product.prodname_dependabot %} hält deine Abhängigkeiten auf dem jeweils aktuellen Stand, indem du über Sicherheitsrisiken bei deinen Abhängigkeiten informiert wirst{% ifversion fpt or ghec or ghes %} und automatisch Pull Requests zum Upgraden deiner Abhängigkeiten auf die nächste verfügbare sichere Version geöffnet werden, wenn eine {% data variables.product.prodname_dependabot %}-Warnung ausgelöst wird, oder zum Upgraden auf die aktuelle Version, wenn ein Release veröffentlicht wird{% else %}, damit du die betreffende Abhängigkeit aktualisieren kannst{% endif %}.

{% ifversion fpt or ghec or ghes %} Der Begriff „{% data variables.product.prodname_dependabot %}“ beschreibt die folgenden Features:
- {% data variables.product.prodname_dependabot_alerts %}: Hierbei handelt es sich um eine Benachrichtigung, die auf der Registerkarte **Sicherheit** für das Repository sowie im Abhängigkeitsdiagramm des Repositorys angezeigt wird. Die Warnung enthält einen Link zur betroffenen Datei im Projekt sowie Informationen zu einer Version, bei der das Problem behoben wurde.
- {% data variables.product.prodname_dependabot_updates %}:
   - {% data variables.product.prodname_dependabot_security_updates %}: Hierbei handelt es sich um Updates, die ausgelöst werden, damit deine Abhängigkeiten auf eine sichere Version upgegradet werden, sobald eine Warnung ausgelöst wird.
   - {% data variables.product.prodname_dependabot_version_updates %}: Hierbei handelt es sich um geplante Updates, mit denen deine Abhängigkeiten auf dem neuesten Stand (aktuelle Version) gehalten werden.

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dependabot_security_updates %} und {% data variables.product.prodname_dependabot_version_updates %} nutzen {% data variables.product.prodname_actions %} nicht, wenn sie auf {% data variables.product.product_name %} ausgeführt werden. Allerdings können Pull Requests, die von {% data variables.product.prodname_dependabot %} geöffnet werden, Workflows zum Ausführen von Aktionen auslösen. Weitere Informationen findest du unter [Automatisieren von {% data variables.product.prodname_dependabot %} mit {% data variables.product.prodname_actions %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions).

{% elsif ghes %}

{% data variables.product.prodname_dependabot_security_updates %} und {% data variables.product.prodname_dependabot_version_updates %} benötigen {% data variables.product.prodname_actions %}, um auf {% data variables.product.product_name %} ausgeführt zu werden. Für {% data variables.product.prodname_dependabot_alerts %} wird {% data variables.product.prodname_actions %} nicht benötigt. Weitere Informationen findest du unter [Aktivieren von {% data variables.product.prodname_dependabot %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).

{% elsif ghae %}

{% data variables.product.prodname_actions %} wird nicht benötigt, um {% data variables.product.prodname_dependabot_alerts %} auf {% data variables.product.product_name %} auszuführen.

{% endif %}

{% ifversion dependabot-actions-support %}

{% data reusables.dependabot.dependabot-actions-support %} Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates).

{% endif %}

#### Was sind Dependabot-Warnungen?

{% data variables.product.prodname_dependabot_alerts %} heben Repositorys hervor, die von einem neu entdeckten Sicherheitsrisiko betroffen sind, basierend auf dem Abhängigkeitsdiagramm sowie {% data variables.product.prodname_advisory_database %} hervor. Diese Datenbank enthält Empfehlungen für bekannte Sicherheitsrisiken{% ifversion GH-advisory-db-supports-malware %} und Schadsoftware{% endif %}. 

- {% data variables.product.prodname_dependabot %} führt eine Überprüfung zur Erkennung von unsicheren Abhängigkeiten durch und sendet {% data variables.product.prodname_dependabot_alerts %}, wenn: {% ifversion fpt or ghec %}
   - Ein neues Sicherheitsrisiko wird {% data variables.product.prodname_advisory_database %} hinzugefügt.{% else %}
   - Neue Empfehlungsdaten werden stündlich zwischen {% data variables.product.prodname_dotcom_the_website %} und {% data variables.location.product_location %} synchronisiert. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - Das Abhängigkeitsdiagramm für das Repository sich ändert 
- {% data variables.product.prodname_dependabot_alerts %} werden {% ifversion fpt or ghec or ghes %} auf der Registerkarte **Sicherheit** des Repositorys sowie{% endif %} im Abhängigkeitsdiagramm des Repositorys angezeigt. Die Warnung enthält {% ifversion fpt or ghec or ghes %} einen Link zur betroffenen Datei im Projekt sowie {% endif %}Informationen zu einer Version, bei der das Problem behoben wurde.

Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies).

{% ifversion fpt or ghec or ghes %}
#### Was sind Dependabot-Updates?

Es gibt zwei Arten von {% data variables.product.prodname_dependabot_updates %}: {% data variables.product.prodname_dependabot %}-_Sicherheitsupdates_ und -_Versionsupdates_. {% data variables.product.prodname_dependabot %} generiert zwar in beiden Fällen automatische Pull Requests zum Aktualisieren deiner Abhängigkeiten, es gibt jedoch einige Unterschiede.

{% data variables.product.prodname_dependabot_security_updates %}:
 - Werden durch eine {% data variables.product.prodname_dependabot %}-Warnung ausgelöst
 - Aktualisieren Abhängigkeiten auf die niedrigste Version, in der ein bekanntes Sicherheitsrisiko beseitigt wurde
 - Werden für die Ökosysteme unterstützt, die das Abhängigkeitsdiagramm unterstützt
 - Erfordert keine Konfigurationsdatei. Du kannst jedoch eine verwenden, um das Standardverhalten außer Kraft zu setzen.
 
{% data variables.product.prodname_dependabot_version_updates %}:
 - Erfordert eine Konfigurationsdatei
 - Werden basierend auf einem von Ihnen konfigurierten Zeitplan ausgeführt
 - Aktualisieren Abhängigkeiten auf die aktuellste Version für die Konfiguration
 - Werden für eine andere Gruppe von Ökosystemen unterstützt

Weitere Informationen zu {% data variables.product.prodname_dependabot_updates %} findest du unter [Informationen zu {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates) und [Informationen zu {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates).
{% endif %}

## Verfügbarkeit von Funktionen

{% ifversion fpt or ghec %}

Öffentliche Repositorys:
- **Abhängigkeitsdiagramm**: standardmäßig aktiviert und kann nicht deaktiviert werden
- **Abhängigkeitsüberprüfung**: standardmäßig aktiviert und kann nicht deaktiviert werden
- **{% data variables.product.prodname_dependabot_alerts %}**: nicht standardmäßig aktiviert. {% data variables.product.prodname_dotcom %} erkennt unsichere Abhängigkeiten und zeigt Informationen im Abhängigkeitsdiagramm an, generiert aber nicht standardmäßig {% data variables.product.prodname_dependabot_alerts %}. Repositorybesitzer*innen oder Personen mit Administratorzugriff können {% data variables.product.prodname_dependabot_alerts %} aktivieren. 
  Zudem kannst du Dependabot-Warnungen für alle Repositorys aktivieren oder deaktivieren, die deinem Benutzerkonto oder deiner Organisation gehören. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Benutzerkonto](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account) oder [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

Private Repositorys:
- **Abhängigkeitsdiagramm**: standardmäßig nicht aktiviert. Das Feature kann von Repositoryadministrator*innen aktiviert werden. Weitere Informationen findest du unter [Untersuchen der Abhängigkeiten eines Repositorys](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository).
{% ifversion fpt %}
- **Abhängigkeitsüberprüfung**: verfügbar in privaten Repositorys, die Organisationen gehören, die {% data variables.product.prodname_ghe_cloud %} verwenden und über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} verfügen. Weitere Informationen findest du unter [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
{% elsif ghec %}
- **Abhängigkeitsüberprüfung**: verfügbar in privaten Repositorys, die Organisationen gehören, vorausgesetzt, du verfügst über eine Lizenz für {% data variables.product.prodname_GH_advanced_security %} und das Abhängigkeitsdiagramm ist aktiviert. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) und [Untersuchen der Abhängigkeiten eines Repositorys](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository). {% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}**: nicht standardmäßig aktiviert. Besitzer*innen privater Repositorys oder Personen mit Administratorzugriff können {% data variables.product.prodname_dependabot_alerts %} aktivieren, indem sie das Abhängigkeitsdiagramm und {% data variables.product.prodname_dependabot_alerts %} für ihre Repositorys aktivieren.
  Zudem kannst du Dependabot-Warnungen für alle Repositorys aktivieren oder deaktivieren, die deinem Benutzerkonto oder deiner Organisation gehören. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Benutzerkonto](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account) oder [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization).

Alle Repositorytypen:
- **{% data variables.product.prodname_dependabot_security_updates %}**: nicht standardmäßig aktiviert. Du kannst {% data variables.product.prodname_dependabot_security_updates %} für jedes Repository aktivieren, das {% data variables.product.prodname_dependabot_alerts %} und das Abhängigkeitsdiagramm verwendet. Weitere Informationen zum Aktivieren von Sicherheitsupdates findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates).
- **{% data variables.product.prodname_dependabot_version_updates %}**: nicht standardmäßig aktiviert. Personen mit Schreibberechtigungen für ein Repository können {% data variables.product.prodname_dependabot_version_updates %} aktivieren. Weitere Informationen zum Aktivieren von Versionsupdates findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates).
{% endif %}

{% ifversion ghes or ghae %}
- **Abhängigkeitsdiagramm** und **{% data variables.product.prodname_dependabot_alerts %}**: nicht standardmäßig aktiviert. Beide Features werden auf Unternehmensebene vom Unternehmensinhaber bzw. von der Unternehmensinhaberin konfiguriert. Weitere Informationen findest du unter {% ifversion ghes %}[Aktivieren des Abhängigkeitsdiagramms für dein Unternehmen](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise) und {% endif %}[Aktivieren von {% data variables.product.prodname_dependabot %} für dein Unternehmen](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise).
- **Abhängigkeitsüberprüfung**: Verfügbar, wenn das Abhängigkeitsdiagramm für {% data variables.location.product_location %} und {% data variables.product.prodname_advanced_security %} für die Organisation oder das Repository aktiviert sind. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security).
{% endif %} {% ifversion ghes %}
- **{% data variables.product.prodname_dependabot_security_updates %}**: nicht standardmäßig aktiviert. Du kannst {% data variables.product.prodname_dependabot_security_updates %} für jedes Repository aktivieren, das {% data variables.product.prodname_dependabot_alerts %} und das Abhängigkeitsdiagramm verwendet. Weitere Informationen zum Aktivieren von Sicherheitsupdates findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates).
- **{% data variables.product.prodname_dependabot_version_updates %}**: nicht standardmäßig aktiviert. Personen mit Schreibberechtigungen für ein Repository können {% data variables.product.prodname_dependabot_version_updates %} aktivieren. Weitere Informationen zum Aktivieren von Versionsupdates findest du unter [Konfigurieren von {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates).
{% endif %}
