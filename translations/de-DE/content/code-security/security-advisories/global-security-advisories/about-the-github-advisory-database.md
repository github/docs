---
title: Informationen zu GitHub Advisory Database
intro: '{% data variables.product.prodname_advisory_database %} enthält eine Liste bekannter Sicherheitsrisiken {% ifversion GH-advisory-db-supports-malware %}und Malware, {% endif %}, die in die beiden Kategorien „Empfehlungen, die von {% data variables.product.company_short %} überprüft wurden“ und „nicht überprüfte Empfehlungen“ gruppiert sind.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 601fdd42050f112162898a255811c76aa23c6970
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159077'
---
## Informationen zu {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

Sicherheitsempfehlungen werden als JSON-Dateien im OSV-Format (Open Source Vulnerability) veröffentlicht. Weitere Informationen zum OSV-Format findest du unter [Format von Open Source-Sicherheitsrisiken](https://ossf.github.io/osv-schema/).

## Informationen zu Typen von Sicherheitsempfehlungen

{% data reusables.advisory-database.beta-malware-advisories %}

Jeder Hinweis in der {% data variables.product.prodname_advisory_database %} bezieht sich auf ein Sicherheitsrisiko in Open Source-Projekten{% ifversion GH-advisory-db-supports-malware %} oder böswillige Open Source-Software{% endif %}. 

{% data reusables.repositories.a-vulnerability-is %} Sicherheitsrisiken im Code entstehen in der Regel versehentlich und werden bald nach ihrer Entdeckung beseitigt. Du solltest deinen Code aktualisieren, um die korrigierte Version der Abhängigkeit zu verwenden, sobald sie verfügbar ist.

{% ifversion GH-advisory-db-supports-malware %}

Im Gegensatz dazu ist Schadsoftware oder Malware Code, der absichtlich für unerwünschte oder schädliche Funktionen konzipiert wird. Die Schadsoftware kann auf Hardware, Software, vertrauliche Daten oder Benutzer einer beliebigen Anwendung abzielen, die die Schadsoftware verwendet. Du musst die Schadsoftware aus deinem Projekt entfernen und einen alternativen, sichereren Ersatz für die Abhängigkeit finden.

{% endif %}

### Von {% data variables.product.company_short %} überprüfte Empfehlungen

Von {% data variables.product.company_short %} überprüfte Empfehlungen beziehen sich auf Sicherheitsrisiken{% ifversion GH-advisory-db-supports-malware %} oder Malware{% endif %}, die Paketen in von uns unterstützten Ökosystemen zugeordnet wurden. Wir überprüfen jede Empfehlung sorgfältig auf ihre Gültigkeit und stellen sicher, dass sie eine vollständige Beschreibung sowie Informationen zum Ökosystem und zum Paket enthält.

Im Allgemeinen benennen wir unsere unterstützten Ökosysteme nach der Paketregistrierung, die der Softwareprogrammiersprache zugeordnet ist. Wir überprüfen Empfehlungen, wenn sie sich auf ein Sicherheitsrisiko in einem Paket beziehen, das von einer unterstützten Registrierung stammt.

- Composer (Registrierung: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (Registrierung: https://hex.pm/){% endif %}
- Go (Registrierung: https://pkg.go.dev/) {%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (Registrierung: https://repo.maven.apache.org/maven2)
- npm (Registrierung: https://www.npmjs.com/)
- NuGet (Registrierung: https://www.nuget.org/)
- pip (Registrierung: https://pypi.org/){% ifversion dependency-graph-dart-support %}
- pub (Registrierung: https://pub.dev/packages/registry){% endif %}
- RubyGems (Registrierung: https://rubygems.org/)
- Rust (Registrierung: https://crates.io/)

Wenn du einen Vorschlag für ein neues Ökosystem hast, das wir unterstützen sollten, öffne bitte ein [Issue](https://github.com/github/advisory-database/issues) für die Diskussion.

Wenn du {% data variables.product.prodname_dependabot_alerts %} für deine Repositorys aktivierst, wirst du automatisch benachrichtigt, wenn eine neue, von {% data variables.product.company_short %} überprüfte Empfehlung ein Sicherheitsrisiko{% ifversion GH-advisory-db-supports-malware %} oder Malware{% endif %} für ein Paket meldet, von dem du abhängig bist. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies).

### Nicht überprüfte Empfehlungen

Nicht überprüfte Empfehlungen sind Sicherheitsrisiken, die direkt aus dem Feed der National Vulnerability Database (Nationale Datenbank zu Sicherheitsrisiken) automatisch in {% data variables.product.prodname_advisory_database %} veröffentlicht werden. 

{% data variables.product.prodname_dependabot %} erstellt keine {% data variables.product.prodname_dependabot_alerts %} für nicht überprüfte Empfehlungen, da diese nicht auf Gültigkeit oder Vollständigkeit überprüft werden.

## Informationen in Sicherheitsempfehlungen

Jede Sicherheitsempfehlung enthält Informationen zum jeweiligen Sicherheitsrisiko{% ifversion GH-advisory-db-supports-malware %} oder zur Malware{% endif %}, z. B. Beschreibung, Schweregrad, betroffenes Paket, Paketökosystem, betroffenen Versionen und Patchversionen, Auswirkungen sowie optionale Informationen wie Verweise, Problemumgehungen und Quellen. Zudem enthalten die Empfehlungen aus der Liste der National Vulnerability Database einen Link zum CVE-Eintrag mit weiteren Details zum Sicherheitsrisiko, der CVSS-Bewertung und dem qualitativen Schweregrad. Weitere Informationen findest du unter [National Vulnerability Database](https://nvd.nist.gov/) des National Institute of Standards and Technology (NIST).

Der Schweregrad ist eine von vier möglichen Ebenen, die in Abschnitt 5 des [Common Vulnerability Score System (CVSS)](https://www.first.org/cvss/specification-document) (Allgemeines Bewertungssystem für Schwachstellen) definiert sind.
- Niedrig
- Mittel/Moderat
- High
- Kritisch

{% data variables.product.prodname_advisory_database %} verwendet die oben beschriebenen CVSS-Ebenen. Ruft {% data variables.product.company_short %} einen CVE-Eintrag ab, verwendet {% data variables.product.prodname_advisory_database %} die CVSS-Version 3.1. Wird der CVE-Eintrag importiert, unterstützt {% data variables.product.prodname_advisory_database %} die CVSS-Versionen 3.0 und 3.1.

{% data reusables.repositories.github-security-lab %}

## Weitere Informationsquellen

- [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)
- [MITRE-Definition von „Sicherheitsrisiko“](https://www.cve.org/ResourcesSupport/Glossary#vulnerability)
