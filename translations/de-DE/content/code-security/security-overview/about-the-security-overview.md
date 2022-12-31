---
title: Informationen zur Sicherheitsübersicht
intro: 'Du kannst Sicherheitswarnungen für Repositorys im Besitz deiner Organisation oder deines Teams auf den Seiten der Sicherheitsübersicht anzeigen, filtern und sortieren.'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Dependabot
  - Dependencies
  - Organizations
  - Teams
shortTitle: About the security overview
ms.openlocfilehash: 0e634bafbb699d27588312b57084b557a3c82ca1
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163752'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Informationen zur Sicherheitsübersicht

{% data reusables.security-overview.about-the-security-overview %} {% ifversion fpt %}Weitere Informationen findest du in der [Dokumentation zu {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview).{% endif %}

{% ifversion ghec or ghes or ghae %} Die Sicherheitsübersicht zeigt, welche Sicherheitsfunktionen für Repositorys aktiviert sind und fasst Warnungen für jede Funktion zusammen. 

- Informationen zum Risiko und zur Abdeckung von {% data variables.product.prodname_dependabot %}-Features und -Warnungen werden für alle Repositorys angezeigt. 
- Informationen zum Risiko und zur Abdeckung von {% data variables.product.prodname_GH_advanced_security %}-Features, wie zum Beispiel {% data variables.product.prodname_code_scanning %} und {% data variables.product.prodname_secret_scanning %}, werden nur für Unternehmen angezeigt, die {% data variables.product.prodname_GH_advanced_security %} verwenden.

Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies) und [Informationen zu {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security).

## Informationen zum Filtern und Sortieren von Warnungen

Die Sicherheitsübersicht liefert einen guten Überblick über die Sicherheit einer Gruppe von Repositorys. Die Ansichten sind interaktiv und enthalten Filter, mit denen du Detailinformationen zu den aggregierten Daten anzeigen und Quellen mit hohem Risiko oder geringer Funktionsabdeckung identifizieren kannst. Wenn du mehrere Filter anwendest, um die für dich relevanten Bereiche näher einzugrenzen, ändern sich die Daten in der Ansicht entsprechend deiner Auswahl. Weitere Informationen findest du unter „[Filtern von Warnungen in der Sicherheitsübersicht](/code-security/security-overview/filtering-alerts-in-the-security-overview)“.

{% ifversion security-overview-alert-views %} Es stehen zudem dedizierte Ansichten für jede Art von Sicherheitswarnung zur Verfügung, mit denen du deine Analyse auf eine bestimmte Gruppe von Warnungen beschränken und die Ergebnisse mit einer Reihe von Filtern für jede Ansicht weiter eingrenzen kannst. Beispielsweise kannst du in der Warnungsansicht der {% data variables.product.prodname_secret_scanning %} den Filter `Secret type` verwenden, um nur Warnungen der {% data variables.product.prodname_secret_scanning %} für ein bestimmtes Geheimnis anzuzeigen, z. B. ein {% data variables.product.pat_generic %} in GitHub.
{% endif %}

{% note %}

**Hinweis**: Die Sicherheitsübersicht zeigt aktive Warnungen an, die von Sicherheitsfeatures ausgelöst werden. Wenn in der Sicherheitsübersicht für ein Repository keine Warnungen vorhanden sind, können dennoch noch nicht erkannte Sicherheitsrisiken oder Codefehler vorhanden sein.

{% endnote %}

## Informationen zur Sicherheitsübersicht auf Organisationsebene

{% data reusables.security-overview.beta-org-risk-coverage %}

Die Sicherheitsübersicht findest du auf der Registerkarte **Sicherheit** für jede Organisation, die sich im Besitz eines Unternehmens befindet. Jede Ansicht zeigt aggregierte Daten, für die du einen Drilldown ausführen kannst. Wenn du einen Filter hinzufügst, werden die Daten aktualisiert und spiegeln die von dir ausgewählten Repositorys oder Warnmeldungen wider.

Das Team für die Anwendungssicherheit in deinem Unternehmen kann die verschiedenen Ansichten sowohl für allgemeine als auch für spezifische Analysen des Sicherheitsstatus deiner Organisation nutzen. {% ifversion security-overview-org-risk-coverage %}Das Team kann zum Beispiel die Seite „Sicherheitsabdeckung“ verwenden, um die Einführung von Funktionen in der gesamten Organisation oder in einem bestimmten Team zu überwachen, während du ein Rollout von {% data variables.product.prodname_GH_advanced_security %} durchführst, oder über die Seite „Sicherheitsrisiko“ Repositorys mit mehr als fünf offenen Warnungen der {% data variables.product.prodname_secret_scanning %} identifizieren.{% else %}Du kannst zum Beispiel die Übersichtsseite nutzen, um die Einführung von Funktionen durch deine Organisation oder ein bestimmtes Team zu überwachen, während du ein Rollout von {% data variables.product.prodname_GH_advanced_security %} in deinem Unternehmen durchführst, oder um alle Warnungen eines bestimmten Typs und Schweregrads für alle Repositorys in deiner Organisation zu überprüfen.{% endif %}

Organisationsbesitzer und Sicherheitsmanager für Organisationen haben Zugriff auf die Sicherheitsübersicht für ihre Organisation. {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}Organisationsmitglieder können auch auf die Sicherheitsübersicht auf Organisationsebene zugreifen, um Ergebnisse für Repositorys anzuzeigen, für die sie über Administratorrechte verfügen oder Zugriff auf Sicherheitswarnungen erhalten haben. Weitere Informationen zum Verwalten des Zugriffs auf Sicherheitswarnungen findest du unter [Verwalten der Sicherheits- und Analyseeinstellungen für dein Repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository).{% endif %}

{% ifversion security-overview-org-risk-coverage %}
### Ansicht „Sicherheitsrisiko“

Diese Ansicht zeigt Daten zu den Repositorys an, die von verschiedenen Arten von Sicherheitswarnungen betroffen sind. 

- Verwende die Dropdownlisten **Typ** und **Teams**, um Repositorytyp und Teamfilter hinzuzufügen.
- Klicke auf **Warnungen öffnen** oder **Betroffene Repositorys**, um nur Repositorys mit einer bestimmten Art von Sicherheitswarnung anzuzeigen.

Wenn du auf das Suchfeld klickst, wird außerdem eine Liste mit allen verfügbaren Filtern angezeigt.

![Screenshot: Ansicht „Sicherheitsrisiko“ für eine Organisation](/assets/images/help/security-overview/security-risk-view.png)

### Ansicht „Sicherheitsabdeckung“

In dieser Ansicht werden Daten dazu angezeigt, welche Repositorys Sicherheitsfeatures verwenden. 

- Verwende die Dropdownlisten **Typ** und **Teams**, um Repositorytyp und Teamfilter hinzuzufügen.
- Klicke auf **Warnungen aktiviert** und andere in der Kopfzeile aufgeführte Funktionen, um nur Repositorys anzuzeigen, bei denen diese Funktionen aktiviert sind.
- Ändere einen beliebigen Filter `FEATURE:enabled` im Suchfeld in `FEATURE:not-enabled`, um Repositorys anzuzeigen, für die eine bestimmte Funktion nicht aktiviert ist.
- Klicke für ein beliebiges Repository auf die Auslassungspunkte ( **...** ) und dann auf **Sicherheitseinstellungen**, um zusätzliche Funktionen zu aktivieren.

Wenn du auf das Suchfeld klickst, wird außerdem eine Liste mit allen verfügbaren Filtern angezeigt.

![Screenshot: Ansicht „Sicherheitsabdeckung“ für eine Organisation](/assets/images/help/security-overview/security-coverage-view.png)

{% else %}

### Grundlegendes zur Sicherheitsübersicht

![Screenshot: Sicherheitsübersicht für eine Organisation](/assets/images/help/security-overview/security-overview-org-legacy.png)

Für jedes Repository in der Sicherheitsübersicht werden Symbole für jeden Sicherheitsfeaturetyp und die Anzahl der Warnungen angezeigt, die für jeden Typ vorhanden sind. Wenn ein Sicherheitsfeature für ein Repository nicht aktiviert ist, wird das Symbol für dieses Feature abgeblendet dargestellt. Darüber hinaus wird eine Risikobewertung für jedes Repository basierend auf Codescan, Dependabot und geheimen Geheimnisscanwarnungen berechnet. Diese Bewertung liegt in der Betaversion vor und sollte mit Vorsicht verwendet werden. Algorithmus und Ansatz können geändert werden.

![Symbole in der Sicherheitsübersicht](/assets/images/help/security-overview/security-overview-icons.png)

| Symbol | Bedeutung |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | {% data variables.product.prodname_code_scanning_capc %}-Warnungen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning). |
| {% octicon "key" aria-label="Secret scanning alerts" %} | {% data variables.product.prodname_secret_scanning_caps %}-Warnungen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning). |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies). |
| {% octicon "check" aria-label="Check" %} | Das Sicherheitsfeature ist aktiviert, löst jedoch keine Warnungen in diesem Repository aus. |
| {% octicon "x" aria-label="x" %} | Das Sicherheitsfeature wird in diesem Repository nicht unterstützt. |

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Informationen zur Sicherheitsübersicht auf Unternehmensebene

Die Sicherheitsübersicht findest du auf der Registerkarte **Codesicherheit** für dein Unternehmen. Jede Übersicht zeigt aggregierte und repositoryspezifische Sicherheitsinformationen für dein Unternehmen an. Du kannst Repositorys ihres Unternehmens anzeigen, für die Sicherheitswarnungen vorliegen, alle Sicherheitswarnungen anzeigen oder featurespezifische Warnungen aus deinem gesamten Unternehmen anzeigen.

Unternehmensbesitzer können Warnungen für Organisationen anzeigen, deren Besitzer oder Sicherheitsmanager sie sind.{% ifversion ghec or ghes > 3.5 or ghae > 3.5 %} Unternehmensbesitzer können einer Organisation als Organisationsbesitzer beitreten, um alle zugehörigen Warnungen in der Sicherheitsübersicht auf Unternehmensebene anzuzeigen. Weitere Informationen findest du unter [Verwalten deiner Rolle in einer Organisation im Besitz deines Unternehmens](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise).{% endif %}

Organisationsbesitzer und Sicherheitsmanager für Organisationen in einem Unternehmen haben Zugriff auf die Sicherheitsübersicht auf Unternehmensebene. Sie können Repositorys und Warnungen für die Organisationen anzeigen, auf die sie vollständigen Zugriff haben.
{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Informationen zur Sicherheitsübersicht auf Teamebene

Die Sicherheitsübersicht findest du auf der Registerkarte **Sicherheit** für jedes Team in einer Organisation, die sich im Besitz eines Unternehmens befindet.

Auf Teamebene zeigt die Sicherheitsübersicht repositoryspezifische Sicherheitsinformationen für Repositorys an, für die das Team über Administratorrechte verfügt. Weitere Informationen findest du unter [Verwalten des Teamzugriffs auf ein Organisationsrepository](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository).
{% endif %}

## Weiterführende Themen

- [Schützen deines Repositorys](/code-security/getting-started/securing-your-repository)
- [Schützen deiner Organisation](/code-security/getting-started/securing-your-organization)
- [Informationen zur Einführung von GitHub Advanced Security im großen Stil](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale) {% endif %}
