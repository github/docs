---
title: Informationen zu GitHub Security Advisories für Repositorys
intro: Du kannst {% data variables.product.prodname_security_advisories %} verwenden, um auf privater Ebene Sicherheitslücken in Deinem Repository zu diskutieren, sie zu beheben und Informationen dazu zu veröffentlichen.
redirect_from:
- /articles/about-maintainer-security-advisories
- /github/managing-security-vulnerabilities/about-maintainer-security-advisories
- /github/managing-security-vulnerabilities/about-github-security-advisories
- /code-security/security-advisories/about-github-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
- Security advisories
- Vulnerabilities
- CVEs
shortTitle: Repository security advisories
ms.openlocfilehash: 5c8ad99a2bee30f52a185fa15421bc6b23429fbf
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: "145085459"
---
{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Informationen zu {% data variables.product.prodname_security_advisories %}

{% data reusables.security-advisory.disclosing-vulnerabilities %} Weitere Informationen findest du unter [Informationen zur koordinierten Offenlegung von Sicherheitsrisiken](/code-security/repository-security-advisories/about-coordinated-disclosure-of-security-vulnerabilities).

{% data reusables.security-advisory.security-advisory-overview %}

Mit {% data variables.product.prodname_security_advisories %} kannst Du:

1. Einen Entwurf für einen Sicherheitshinweis erstellen und den Entwurf benutzen, um die Auswirkung der Schwachstelle auf Dein Projekt privat zu diskutieren. Weitere Informationen findest du unter [Erstellen eines Repositorysicherheitshinweises](/code-security/repository-security-advisories/creating-a-repository-security-advisory).
2. Privat mit anderen zusammenarbeiten, um die Schwachstelle in einem temporären privaten Fork zu beheben.
3. Veröffentliche den Sicherheitshinweis, um deine Community auf das Sicherheitsrisiko aufmerksam zu machen, sobald ein Patch veröffentlicht wurde. Weitere Informationen findest du unter [Veröffentlichen eines Repositorysicherheitshinweises](/code-security/repository-security-advisories/publishing-a-repository-security-advisory).

{% data reusables.repositories.security-advisories-republishing %}

Du kannst Personen, die zu einem Sicherheitshinweis beigetragen haben, eine Gutschrift gewähren. Weitere Informationen findest du unter [Bearbeiten eines Repositorysicherheitshinweises](/code-security/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories).

{% data reusables.repositories.security-guidelines %}

Wenn du einen Sicherheitshinweis in deinem Repository erstellt hast, bleibt der Sicherheitshinweis in deinem Repository. Wir veröffentlichen Sicherheitshinweise für alle Ökosysteme, die von dem Abhängigkeitsdiagramm der {% data variables.product.prodname_advisory_database %} auf [github.com/advisories](https://github.com/advisories) unterstützt werden. Jeder kann eine Änderung an einem in der {% data variables.product.prodname_advisory_database %} veröffentlichten Hinweis vornehmen. Weitere Informationen findest du unter [Bearbeiten von Sicherheitsempfehlungen in {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database).

Spezielle Sicherheitshinweise für npm veröffentlichen wir auch in den npm-Sicherheitshinweisen. Weitere Informationen findest du unter [npmjs.com/advisories](https://www.npmjs.com/advisories).

{% data reusables.repositories.github-security-lab %}

## CVE-Identifikationsnummern

{% data variables.product.prodname_security_advisories %} basiert auf der Grundlage der 'Common Vulnerabilities and Exposures (CVE)'-Liste (Liste der häufigsten Schwachstellen und Gefährdungen). Das Formular für den Sicherheitshinweis auf {% data variables.product.prodname_dotcom %} ist ein standardisiertes, dem CVE-Beschreibungsformat entsprechendes Formular. 

{% data variables.product.prodname_dotcom %} ist eine 'CVE Numbering Authority (CNA)' (Nummerierungsautorität ) und ist berechtigt, CVE-Identifikationsnummern zuzuweisen. Weitere Informationen findest du auf der CVE-Website unter [Informationen zu CVE](https://www.cve.org/About/Overview) und [CVE-Nummerierungsstellen](https://www.cve.org/ProgramOrganization/CNAs).

Wenn Du einen Sicherheitshinweis für ein öffentliches Repository auf {% data variables.product.prodname_dotcom %} erstellst, hast Du die Möglichkeit, eine vorhandene CVE-Identifikationsnummer für die Sicherheitslücke beizufügen. {% data reusables.repositories.request-security-advisory-cve-id %}

Sobald du den Sicherheitshinweis veröffentlicht hast und {% data variables.product.prodname_dotcom %} dem Sicherheitsrisiko eine CVE-Identifikationsnummer zugewiesen hat, veröffentlicht {% data variables.product.prodname_dotcom %} die CVE-Nummer in der MITRE-Datenbank.
Weitere Informationen findest du unter [Veröffentlichen eines Repositorysicherheitshinweises](/code-security/repository-security-advisories/publishing-a-repository-security-advisory).

## {% data variables.product.prodname_dependabot_alerts %} für veröffentlichte Sicherheitshinweise

{% data reusables.repositories.github-reviews-security-advisories %}
