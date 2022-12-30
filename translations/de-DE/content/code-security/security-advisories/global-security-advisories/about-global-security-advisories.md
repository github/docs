---
title: Informationen zu globalen Sicherheitsempfehlungen
intro: 'Die globale Sicherheitsdatenbank in {% data variables.product.prodname_advisory_database %}, enthält CVEs und von GitHub stammende {% data variables.product.company_short %} Sicherheitsempfehlungen für Open-Source-Produkte. Du kannst zur Verbesserung der globalen Empfehlungen beitragen.'
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
ms.openlocfilehash: d28de180b9fee592dcba89d03ca537d4ffd2d9eb
ms.sourcegitcommit: 27882d9b3f19979c817c25952a2fb4dc4c6f0a65
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: '148114023'
---
## Informationen zu globalen Sicherheitsempfehlungen

{% ifversion fpt or ghec %}Es gibt zwei Arten von Empfehlungen: globale Sicherheitsempfehlungen und Sicherheitsempfehlungen für Repositorys. Weitere Informationen zu Sicherheitsempfehlungen für Repositorys findest du unter [Informationen zu Sicherheitsempfehlungen für Repositorys](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories).{% endif %}

Globale Sicherheitsempfehlungen sind in zwei Kategorien unterteilt: Von {% data variables.product.company_short %} geprüfte Empfehlungen und nicht geprüfte Empfehlungen.
- Von {% data variables.product.company_short %} überprüfte Empfehlungen beziehen sich auf Sicherheitsrisiken{% ifversion GH-advisory-db-supports-malware %} oder Malware{% endif %}, die Paketen in von uns unterstützten Ökosystemen zugeordnet wurden.
- Nicht überprüfte Empfehlungen sind Sicherheitsrisiken, die direkt aus dem Feed der National Vulnerability Database (Nationale Datenbank zu Sicherheitsrisiken) automatisch in {% data variables.product.prodname_advisory_database %} veröffentlicht werden. 

Weitere Informationen zur {% data variables.product.prodname_advisory_database %} findest du unter [Informationen zu {% data variables.product.prodname_advisory_database %}](/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database).

{% data reusables.security-advisory.global-advisories %}

Jede Repositoryempfehlung wird vom {% data variables.product.prodname_security %}-Kuratorenteam darauf geprüft, ob sie als globale Empfehlung infrage kommt. Wir veröffentlichen Sicherheitshinweise für alle Ökosysteme, die von dem Abhängigkeitsdiagramm der {% data variables.product.prodname_advisory_database %} auf [github.com/advisories](https://github.com/advisories) unterstützt werden.

Du kannst auf jede Empfehlung in {% data variables.product.prodname_advisory_database %} zugreifen. Weitere Informationen findest du unter [Durchsuchen von Sicherheitsempfehlungen in GitHub Advisory Database](/code-security/security-advisories/global-security-advisories/browsing-security-advisories-in-the-github-advisory-database).

Du kannst für alle Empfehlungen in {% data variables.product.prodname_advisory_database %} Verbesserungen vorschlagen. Weitere Informationen findest du unter [Bearbeiten von Sicherheitsempfehlungen in {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database).
