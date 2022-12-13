---
title: Bearbeiten von Sicherheitshinweisen in GitHub Advisory Database
intro: Du kannst Verbesserungen für jede in der {% data variables.product.prodname_advisory_database %} veröffentlichte Empfehlung übermitteln.
redirect_from:
- /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
- Security advisories
- Alerts
- Dependabot
- Vulnerabilities
- CVEs
shortTitle: Edit Advisory Database
ms.openlocfilehash: 053ef8d087cc3a34a9a975399f5f95115b373cc5
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: "148111545"
---
## Informationen zum Bearbeiten von Hinweisen in {% data variables.product.prodname_advisory_database %}
Sicherheitshinweise in {% data variables.product.prodname_advisory_database %} unter [github.com/advisories](https://github.com/advisories) gelten als globale Hinweise. Jeder kann für alle globalen Sicherheitshinweise in {% data variables.product.prodname_advisory_database %} Verbesserungen vorschlagen. Du kannst beliebige Details bearbeiten oder hinzufügen, u. a. zusätzlich betroffene Ökosysteme, Schweregrad oder Beschreibung der betroffenen Personen. Das {% data variables.product.prodname_security %}-Kuratorenteam überprüft die eingereichten Verbesserungsvorschläge und veröffentlicht sie in {% data variables.product.prodname_advisory_database %}, falls sie akzeptiert werden.
{% ifversion fpt or ghec %} Nur Repositorybesitzer und Administratoren können Sicherheitsempfehlungen auf Repositoryebene bearbeiten. Weitere Informationen findest du unter [Bearbeiten einer Sicherheitsempfehlung für ein Repository](/code-security/security-advisories/editing-a-security-advisory).{% endif %}

## Bearbeiten von Hinweisen in GitHub Advisory Database

1. Navigiere zu https://github.com/advisories.
1. Wähle den Sicherheitshinweis aus, zu dem du beitragen möchtest.
1. Klicke auf der rechten Seite der Seite auf den Link **Verbesserungen für dieses Sicherheitsrisiko vorschlagen**.
   
   ![Screenshot: Link „Verbesserungen vorschlagen“](/assets/images/help/security/suggest-improvements-to-advisory.png)

1. Nimm im Formular „Sicherheitsempfehlung verbessern“ die gewünschten Verbesserungen vor. Du kannst alle Details bearbeiten oder hinzufügen.{% ifversion fpt or ghec %} Weitere Informationen zur korrekten Angabe der Informationen im Formular findest du unter [Best Practices für das Schreiben von Sicherheitsempfehlungen für Repositorys](/code-security/repository-security-advisories/best-practices-for-writing-repository-security-advisories).{% endif %}{% ifversion security-advisories-reason-for-change %}
1. Erläutere unter **Änderungsgrund**, warum du diese Verbesserung vornehmen möchtest. Links zu unterstützenden Materialien helfen unseren Reviewer*innen.
   
   ![Screenshot: Feld „Änderungsgrund“](/assets/images/help/security/security-advisories-suggest-improvement-reason.png){% endif %}

1. Wenn die Bearbeitung des Hinweises abgeschlossen ist, klicke auf **Verbesserungen übermitteln**.
1. Nach dem Übermitteln der Verbesserungen wird ein Pull Request mit deinen Änderungen zur Überprüfung in [github/advisory-database](https://github.com/github/advisory-database) durch das {% data variables.product.prodname_security %}-Kuratorenteam erstellt. Wenn der Hinweis aus einem {% data variables.product.prodname_dotcom %}-Repository stammt, wird zudem der ursprüngliche Herausgeber für optionale Kommentare markiert. Du kannst den Pull Request anzeigen und Benachrichtigungen erhalten, wenn er aktualisiert oder geschlossen wird.

Du kannst einen Pull Request auch direkt für eine Hinweisdatei im Repository [github/advisory-database](https://github.com/github/advisory-database) öffnen. Weitere Informationen findest du in den [Beitragsrichtlinien](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md). 

{% ifversion security-advisories-ghes-ghae %}
## Bearbeiten von Empfehlungen von {% data variables.location.product_location %}

Wenn du {% data variables.product.prodname_github_connect %} für {% data variables.location.product_location %} aktiviert hast, kannst du Empfehlungen einsehen, indem du `/advisories` zur Instanz-URL hinzufügst. 

1. Navigiere zu `https://HOSTNAME/advisories`.
2. Wähle den Sicherheitshinweis aus, zu dem du beitragen möchtest.
3. Klicke rechts auf der Seite auf den Link **Verbesserungen für dieses Sicherheitsrisiko auf {% data variables.product.prodname_dotcom_the_website %} vorschlagen**. . Es öffnet sich eine neue Registerkarte mit derselben Sicherheitsempfehlung auf {% data variables.product.prodname_dotcom_the_website %}.
![Link „Verbesserungen vorschlagen“](/assets/images/help/security/suggest-improvements-to-advisory-on-github-com.png)
4. Bearbeite die Empfehlung, indem du die Schritte 4 bis 6 unter [Bearbeiten von Hinweisen in GitHub Advisory Database](#editing-advisories-in-the-github-advisory-database) befolgst.
{% endif %}
