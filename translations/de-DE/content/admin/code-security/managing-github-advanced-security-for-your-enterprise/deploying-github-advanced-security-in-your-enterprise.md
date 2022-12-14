---
title: Bereitstellen von GitHub Advanced Security in deinem Unternehmen
intro: Hier erfährst du, wie du einen gestuften Ansatz für den Rollout von {% data variables.product.prodname_GH_advanced_security %} (GHAS) in deinem Unternehmen planst, vorbereitest und implementierst.
product: '{% data reusables.gated-features.advanced-security %}'
redirect_from:
- /admin/advanced-security/deploying-github-advanced-security-in-your-enterprise
miniTocMaxHeadingLevel: 3
versions:
  ghes: '*'
  ghec: '*'
type: how_to
topics:
- Advanced Security
- Code scanning
- Enterprise
- Security
ms.openlocfilehash: 7990891fd4b90127ae5f32aa262d6c096d23acab
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "147060754"
---
## <a name="overview-of-the-deployment-process"></a>Übersicht über den Bereitstellungsprozess

{% data reusables.security.overview-of-phased-approach-for-ghas-rollout %}

Eine allgemeine Zusammenfassung dieser verschiedenen Phasen findest du unter [Übersicht über die {% data variables.product.prodname_GH_advanced_security %}-Bereitstellung](/admin/advanced-security/overview-of-github-advanced-security-deployment).

Bevor du deine Bereitstellung startest, empfehlen wir dir, die Voraussetzungen für die Installation von GHAS und bewährte Methoden für die GHAS-Bereitstellung in [Übersicht über die {% data variables.product.prodname_GH_advanced_security %}-Bereitstellung](/admin/advanced-security/overview-of-github-advanced-security-deployment) zu überprüfen.

## <a name="-octicon-milestone-aria-labelthe-milestone-icon--phase-0-planning--kickoff"></a>{% octicon "milestone" aria-label="The milestone icon" %} Phase 0: Planen und Kickoff

{% note %}

{% octicon "clock" aria-label="Clock" %} **Geschätzte Zeitdauer:** Wir schätzen, dass Phase 0 ungefähr zwischen 1 bis 4 Wochen dauern kann. Diese Spanne kann je nach deinen Releaseanforderungen und allen erforderlichen Genehmigungen, die dein Unternehmen möglicherweise für den Bereitstellungsplan benötigt, variieren.

{% endnote %}

Das Ziel der Planungs- und Kickoffphase besteht darin, sicherzustellen, dass du alle deine Mitarbeiter, Prozesse und Technologien eingerichtet hast und sie bereit für die Implementierung von GHAS sind.

Damit du die als Projektsponsor fungierende Führungskraft überzeugen kannst, empfehlen wir, einen Rolloutplan und Ziele vorzubereiten und dich darüber abzustimmen, bevor du GHAS in deinem Unternehmen veröffentlichst.

Als Teil einer Strategie für einen Rollout in Phasen empfehlen wir, dass du besonders betroffene und kritische Teams oder Anwendungen identifizierst, die vor dem Rest deines Unternehmens an GHAS teilnehmen sollen.

Wenn ein Rollout in Phasen für dein Unternehmen nicht funktioniert, kannst du zur [Pilotprojektphase](#--phase-1-pilot-projects) wechseln.

Wenn du mit {% data variables.product.prodname_professional_services %} arbeitest, erstelle in dieser Phase auch einen Plan für die Zusammenarbeit deiner Teams im gesamten Rollout- und Implementierungsprozess. Das {% data variables.product.prodname_professional_services_team %}-Team kann dich bei Bedarf bei der Erstellung des Plans für einen Rollout in Phasen und den Zielen unterstützen.

### <a name="step-1-kickoff-meeting-with--data-variablesproductprodname_professional_services--optional"></a>Schritt 1: Kickoffmeeting mit {% data variables.product.prodname_professional_services %} (optional)

Wenn du dich für {% data variables.product.prodname_professional_services %} registriert hast, beginne den Rollout- und Implementierungsprozess, indem du dich mit deinem Servicevertreter triffst.

Wenn du dich nicht für {% data variables.product.prodname_professional_services %} registriert hast, kannst du zum nächsten Schritt wechseln.

Das Ziel dieser Besprechung besteht darin, dass die beiden Teams sich im Hinblick auf die erforderlichen Informationen abstimmen, um mit dem Erstellen eines Rollout- und Implementierungsplans zu beginnen, der für dein Unternehmen am besten geeignet ist. Zur Vorbereitung dieser Besprechung haben wir eine Umfrage erstellt, die uns dabei hilft, uns besser auf die Diskussion vorzubereiten. Dein*e Servicevertreter*in sendet dir diese Umfrage.

Gehe zur Vorbereitung dieser ersten Besprechung diese Themen durch.

-  Sich abstimmen, wie dein Unternehmen und {% data variables.product.prodname_professional_services %} am besten zusammenarbeiten
  - Erwartungen klären, wie die erworbenen Servicestunden/-tage am besten genutzt werden
  - Kommunikationspläne/Häufigkeit von Besprechungen
  - Rollen und Zuständigkeiten
- Besprechen, wie GHAS innerhalb des Lebenszyklus der Softwareentwicklung funktioniert. Dein*e {% data variables.product.prodname_professional_services %}-Vertreter*in erläutert, wie GHAS funktioniert.
- Besprechen bewährter Methoden für die Bereitstellung von GHAS. Dies wird als Auffrischung angeboten, wenn es für dein Team nützlich erscheint oder wenn dein Unternehmen nicht an der Proof-of-Concept-Übung (POC) teilgenommen hat. In diesem Rahmen werden dein vorhandenes Anwendungssicherheitsprogramm und dessen Reifegrad zum Beispiel anhand des DevSecOps-Reifegradmodells besprochen.
-  Sich über die nächsten Schritte für deine GHAS-Bereitstellung abstimmen. Dein {% data variables.product.prodname_professional_services %}-Vertreter erläutert deine nächsten Schritte und den Support, den du von deiner Partnerschaft erwarten kannst.

Du kannst auch davon ausgehen, dass folgende Fragen besprochen werden, um dich bei der Planung deiner Rolloutstrategie zu unterstützen:
  - Wie viele Teams werden aktiviert?
  - Wie sind die Repositorys der Teams aufgebaut (Tech Stack, aktuelle Tools usw.)?
    - Einiges davon wurde möglicherweise bereits während der Proof-of-Concept-Übung behandelt, wenn dein Unternehmen teilgenommen hat. Wenn nicht, ist dies ein wichtiger Zeitpunkt, um es zu besprechen.
   - Von welcher Einführungsstufe erwarten wir, dass sie organisch, unterstützt oder anorganisch ist?
   - Wie sieht die unterstützte Einführung aus einer Resourcing- und Dokumentationsperspektive aus?
   - Wie wirst du die nachgelagerte anorganische Einführung verwalten (z. B. mit Richtlinienerzwingung oder zentral verwalteten Workflows)?

### <a name="step-2-internal-kickoff-at-your-company"></a>Schritt 2: Interner Kickoff in deinem Unternehmen

Unabhängig davon, ob dein Unternehmen sich für die Arbeit mit {% data variables.product.prodname_professional_services %} entscheidet, empfiehlt es sich immer, dein eigenes Kickoffmeeting durchzuführen, damit deine Teams sich abstimmen können.

Während dieses Kickoffmeetings ist es wichtig, sicherzustellen, dass es ein klares Verständnis von Zielen und Erwartungen gibt und dass ein Plan vorhanden ist, um mit deinem Rollout und deiner Implementierung fortzufahren.

Darüber hinaus ist dies ein guter Ausgangspunkt, um über Schulungen und Vorbereitungen für dein Team nachzudenken und so sicherzustellen, dass es über die richtigen Tools und Expertise verfügt, um den Rollout und die Implementierung von GHAS zu unterstützen.

#### <a name="topics-for-your-internal-kickoff-meeting"></a>Themen für dein internes Kickoffmeeting

Es wird empfohlen, diese Themen in deinem internen Kickoffmeeting in deinem Unternehmen zu behandeln, wenn du diese nicht bereits mit derselben Gruppe in deinem Kickoffmeeting mit {% data variables.product.prodname_professional_services %} behandelt hast.

- Was sind deine Geschäftserfolgsmetriken, und wie planst du, diese zu messen und Bericht darüber zu erstatten?
  - Wenn diese nicht definiert wurden, definiere du sie. Wenn sie definiert wurden, kommuniziere sie und sprich darüber, wie du datengesteuerte Fortschrittsupdates bereitstellen möchtest.
- Überprüfe, wie GHAS innerhalb des Lebenszyklus der Softwareentwicklung funktioniert und wie dies erwartungsgemäß für dein Unternehmen funktionieren wird.
- Überprüfen der bewährten Methoden, wenn dein Unternehmen nicht an der Proof-of-Concept-Übung teilgenommen hat (oder einer Auffrischung, wenn diese Überprüfung für dein Team nützlich erscheint)
  - Wie verhält sich dies im Vergleich/Kontrast mit deinem vorhandenen Anwendungssicherheitsprogramm?
- Bespreche und vereinbare, wie dein internes Team während des Rollouts und der Implementierung am besten zusammenarbeitet.
  - Stimme dich bei den Kommunikationsplänen und der Häufigkeit von Besprechungen für dein internes Team ab
  - Überprüfe Aufgaben für den Abschluss von Rollout und Implementierung, definiere Rollen und Verantwortlichkeiten. Wir haben in diesem Artikel die meisten Aufgaben beschrieben. Es kann jedoch zusätzliche, für dein Unternehmen erforderliche Aufgaben geben, die nicht aufgenommen wurden.
  - Erwäge, ein „Champions-Programm“ für die skalierte Aktivierung einzurichten.
  - Beginne mit der Besprechung der Zeitdauer für den Abschluss von Aufgaben.
- Beginne mit der Arbeit an idealen Rollout-Ansätzen, die für dein Unternehmen am besten geeignet sind. Dies umfasst das Verständnis einiger wichtiger Elemente:
  - Wie viele Teams werden aktiviert? Einiges davon wurde möglicherweise bereits während der Proof-of-Concept-Übung (POC) behandelt, wenn dein Unternehmen teilgenommen hat. Wenn nicht, ist dies ein wichtiger Zeitpunkt, um es zu besprechen.
  - Wie viele von den kritischen Anwendungen, die für den ersten Rollout identifiziert wurden, basieren auf einer Technologie, die von GHAS unterstützt wird?
  - Wie viel organisatorische Vorbereitung ist erforderlich? Weitere Informationen findest du unter [Phase 2](#--phase-2-organizational-buy-in--rollout-preparation).

### <a name="step-3-prepare-your-rollout--implementation-plan-and-goals"></a>Schritt 3: Vorbereiten des Rollout- und Implementierungsplans und Festlegen von Zielen

Bevor du mit Pilotprojekten für die erste Phase des Rollouts fortfahren kannst, ist es wichtig, sicherzustellen, dass ein Rolloutplan und Geschäftsziele für die Vorgehensweise deines Unternehmens festgelegt wurden.

Wenn du mit {% data variables.product.prodname_professional_services %} arbeitst, können sie eine wichtige Rolle bei der Erstellung dieses Plans spielen.

Wenn du unabhängig arbeitest, beschreibt dieser Abschnitt einiges, das in deinem Plan enthalten sein muss, während du die weitere Vorgehensweise vorbereitest.

Pläne für Prozessänderungen (falls erforderlich) und Schulungen für Teammitglieder bei Bedarf:
  - Dokumentierte Teamzuweisungen für Rollen und Zuständigkeiten. Weitere Informationen zu den für jedes Feature erforderlichen Berechtigungen findest du unter [Repositoryrollen für eine Organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features).
  - Dokumentierter Plan von Aufgaben und Zeitachsen/Zeitrahmen, sofern möglich. Dies sollte Infrastrukturänderungen, Prozessänderungen/Schulungen und alle nachfolgenden Phasen der Aktivierung von GHAS umfassen, sodass Zeitrahmen für Korrekturen und Konfigurationsanpassungen bei Bedarf möglich sind. Weitere Informationen findest du unter [Phase 1: Pilotprojekte](/admin/advanced-security/deploying-github-advanced-security-in-your-enterprise#--phase-1-pilot-projects) weiter unten.
  - Priorisierter Plan, aus dem hervorgeht, für welche Projekte/Teams GHAS zuerst aktiviert werden soll, und nachfolgende Pläne, die Projekte/Teams in folgenden Phasen angeben
  - Erfolgsmetriken basierend auf Geschäftszielen. Dies ist ein wichtiger Referenzpunkt nach den Pilotprojekten, um Unterstützung für den vollständigen Rollout zu gewinnen.

{% note %}

**Hinweis:** Damit sichergestellt ist, dass alle Gruppen in deinem Unternehmen mit dem entsprechenden Bewusstsein und überzeugt bei der Einführung mitarbeiten, ist es wichtig, realistische Erwartungen hinsichtlich der Rolloutzeit und der Auswirkungen auf die Infrastruktur, Prozesse und die allgemeinen täglichen Entwicklungsworkflows deines Unternehmens zu formulieren. Stelle für einen reibungsloseren und erfolgreicheren Rollout sicher, dass deine Sicherheits- und Entwicklungsteams die Auswirkungen von GHAS verstehen.

{% endnote %}

{% ifversion ghes %}

Damit für {% data variables.product.prodname_ghe_server %}-Kunden sichergestellt ist, dass die Instanz Rollout und Implementierung von GHAS unterstützen kann, überprüfe Folgendes:

- Während ein Upgrade auf GHES 3.0 nicht erforderlich ist, musst du ein Upgrade auf GHES 3.0 oder höher durchführen, um Featurekombinationen wie Codeüberprüfungen und {% data variables.product.prodname_actions %} zu nutzen. Weitere Informationen findest du unter [Upgrade von {% data variables.product.prodname_ghe_server %}](/admin/enterprise-management/updating-the-virtual-machine-and-physical-resources/upgrading-github-enterprise-server).

- In einer Hochverfügbarkeitskonfiguration bleibt eine voll redundante sekundäre {% data variables.product.prodname_ghe_server %}-Appliance mit der primären Appliance synchron. Dies erfolgt über die Replikation sämtlicher großer Datenspeicher. Weitere Informationen zum Einrichten von Hochverfügbarkeit findest du unter [Konfigurieren von Hochverfügbarkeit](/admin/enterprise-management/configuring-high-availability).

- Zur Unterstützung von Diskussionen zu potenziellen Änderungen an der Einrichtung deines Unternehmens kannst du die Übersicht zum {% data variables.product.prodname_ghe_server %}-System durchgehen. Weitere Informationen findest du unter [Systemübersicht](/admin/overview/system-overview).

{% endif %}

### <a name="step-4-establish-a-baseline-of-organizational-insights"></a>Schritt 4: Festlegen einer Baseline für Organisationseinblicke

Wenn Sich dein Unternehmen darauf vorbereitet, deine Pilotprojekte zu beginnen, ist es wichtig, sicherzustellen, dass du eine Baseline für den Punkt festgelegt hast, an dem sich dein Unternehmen heute befindet, und klare Erfolgsmetriken definiert hast, um mit ihnen den Fortschritt deines Pilotprojekts zu messen.

Es gibt wahrscheinlich wichtige Geschäftsziele deines Unternehmens, deren Fortschritt gemessen werden muss. Es gibt jedoch weitere Metriken, die wir identifizieren können, um den Erfolg deines Pilotprojekts erheben.

Als Ausgangspunkt können einige dieser Metriken Folgendes umfassen:
  - Die mittlere Zeit zur Behebung von GHAS-Sicherheitsrisiken im Vergleich zu den vorherigen Tools und Methoden, die in Pilotprojekten/von Teams eingesetzt wurden.
  - Die Ergebnisse der Integration der Codeüberprüfung für die x wichtigsten Anwendungen.
  - Die Anzahl der Anwendungen, die SAST (Statische Anwendungssicherheitstests) integriert haben, im Vergleich zu vor dem Einsatz.

Wenn du vor dem Kauf von GHAS an der POC-Übung teilgenommen hast, sind dir diese Ziele möglicherweise vertraut. Diese Erfolgskriterien umfassen mehrere Ziele für die folgenden allgemeinen Rollen:
  - Teams für Implementierung und Verwaltung
  - Sicherheit/CISO (Chief Information Security Officer)
  - Anwendungsentwicklungsteams

Wenn du weitere Schritte unternehmen möchtest, kannst du die Verwendung des DevSecOps Maturity Model (DSOMM) von OWASP in Betracht ziehen, um einen Reifegrad der Ebene 1 zu erreichen. Es gibt vier Hauptbewertungskriterien in DSOMM:

- **Statische Tiefe:** Wie umfassend ist die statische Codeüberprüfung, die du in der AppSec CI-Pipeline ausführst?
- **Dynamische Tiefe:** Wie umfassend ist die dynamische Überprüfung, die in der AppSec CI-Pipeline ausgeführt wird?
- **Intensität:** Dein Zeitplanhäufigkeit für die Sicherheitsüberprüfungen, die in der AppSec CI-Pipeline ausgeführt werden
- **Konsolidierung:** Dein Wartungsworkflow für die Behandlung von Ergebnissen und die Vollständigkeit von Prozessen

Weitere Informationen zu diesem Ansatz und zur Implementierung in GHAS findest du in unserem herunterladbaren Whitepaper [Achieving DevSecOps Maturity with GitHub](https://resources.github.com/whitepapers/achieving-devsecops-maturity-github/) (Erreichen der DevSecOps-Reife mit GitHub).

Basierend auf den weiter reichenden Zielen deines Unternehmens und den aktuellen Ebenen der DevSecOps-Reife können wir dir helfen, zu bestimmen, wie du den Fortschritt und den Erfolg deines Pilotprojekts am besten misst.

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-1-pilot-projects"></a>{% octicon "milestone" aria-label="The milestone icon" %} Phase 1: Pilotprojekte

{% note %}

{% octicon "clock" aria-label="Clock" %} **Geschätzte Zeitdauer:** Wir schätzen, dass Phase 1 ungefähr zwischen 2 Wochen bis über 3 Monate dauern kann. Dieses Spanne kann je nach Infrastruktur- oder Systemkomplexität deines Unternehmens, internen Prozessen zur Verwaltung/Genehmigung dieser Änderungen sowie der Frage, ob für die weitere Arbeit mit GHAS größere organisatorische Prozessänderungen erforderlich sind, stark variieren.

{% endnote %}

Für die Aktivierung von GHAS in deinem Unternehmen empfehlen wir, mit einigen besonders betroffenen Projekten oder Teams zu beginnen, um einen anfänglichen Rollout zu starten. Dies ermöglicht es einer ersten Gruppe in deinem Unternehmen, sich mit GHAS vertraut zu machen und eine solide Grundlage für GHAS zu erstellen, bevor du den Rollout für den Rest deines Unternehmens durchführst.

Bevor du mit deinen Pilotprojekten beginnst, empfehlen wir, einige Prüfpunktbesprechungen für deine Teams zu planen, z. B. eine erste Besprechung, eine Midpoint-Überprüfung und eine Abschlusssitzung, wenn der Pilot abgeschlossen ist. Diese Prüfpunktbesprechungen helfen euch allen, bei Bedarf Anpassungen vorzunehmen und sicherzustellen, dass deine Teams vorbereitet sind und unterstützt werden, um den Piloten erfolgreich abzuschließen.

Mit diesen Schritten kannst du GHAS in deinem Unternehmen aktivieren, die dazugehörigen Features verwenden und deine Ergebnisse überprüfen.

Wenn du mit {% data variables.product.prodname_professional_services %} arbeitest, können sie durch diesen Prozess zusätzliche Unterstützung durch Onboarding-Sitzungen, GHAS-Workshops und Problembehandlung bei Bedarf bereitstellen.

### <a name="step-1-ghas-set-up--installation"></a>Schritt 1: GHAS-Einrichtung und -Installation

{% ifversion ghes %}

Wenn du GHAS für deine {% data variables.product.prodname_ghe_server %}-Instanz noch nicht aktiviert hast, lies [Aktivieren von GitHub Advanced Security für dein Unternehmen](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise).

{% endif %}

Du musst GHAS für jedes Pilotprojekt aktivieren, entweder durch Aktivieren des GHAS-Features für jedes Repository oder für alle Repositorys in allen Organisationen, die an dem Projekt teilnehmen. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) oder [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

Der Großteil der GHAS-Einrichtung und -Installation dreht sich um das Aktivieren und Konfigurieren von Codeüberprüfungen in deinem Unternehmen und in deinen Repositorys.

Mit der Codeüberprüfung kannst du Code in einem {% data variables.product.prodname_dotcom %}-Repository analysieren, um Sicherheitsrisiken und Programmierfehler zu finden. Codeüberprüfungen können verwendet werden, um Korrekturen für vorhandene Probleme in deinem Code zu finden, zu selektieren und zu priorisieren. Sie können auch verhindern, dass Entwickler neue Probleme einführen, die andernfalls zur Produktion gelangen. Weitere Informationen findest du unter [Informationen zu Codeüberprüfungen](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning).

### <a name="step-2-set-up--data-variablesproductprodname_code_scanning_capc-"></a>Schritt 2: Einrichten von {% data variables.product.prodname_code_scanning_capc %}

{% ifversion ghes %}

Informationen zum Aktivieren von {% data variables.product.prodname_code_scanning %} für deine {% data variables.product.prodname_ghe_server %}-Instanz findest du unter [Konfigurieren der Codeüberprüfung für deine Appliance](/admin/advanced-security/configuring-code-scanning-for-your-appliance).

{% endif %}

Zum Einrichten der Codeüberprüfung musst du entscheiden, ob du sie mit [{% data variables.product.prodname_actions %}](#using-github-actions-for-code-scanning) oder deinem eigenen [CI-System von Drittanbietern](#using-a-third-party-ci-system-with-the-codeql-cli-for-code-scanning) ausführst.

#### <a name="using--data-variablesproductprodname_actions--for--data-variablesproductprodname_code_scanning-"></a>Verwenden von {% data variables.product.prodname_actions %} für {% data variables.product.prodname_code_scanning %}

{% ifversion ghes %}

Zum Einrichten der Codeüberprüfung mit {% data variables.product.prodname_actions %} für {% data variables.product.prodname_ghe_server %} musst du einen oder mehrere selbstgehostete {% data variables.product.prodname_actions %}-Runner in deiner Umgebung bereitstellen. Weitere Informationen findest du unter [Konfigurieren eines selbstgehosteten Runners](/admin/advanced-security/configuring-code-scanning-for-your-appliance#running-code-scanning-using-github-actions).

{% endif %}

Bei {% data variables.product.prodname_ghe_cloud %} kannst du mit der [CodeQL-Aktion](https://github.com/github/codeql-action/) einen {% data variables.product.prodname_actions %}-Workflow erstellen, um Codeüberprüfung in einem Repository auszuführen. {% data variables.product.prodname_code_scanning_capc %} verwendet standardmäßig [GitHub-gehostete Runner](/actions/using-github-hosted-runners/about-github-hosted-runners); dies kann jedoch angepasst werden, wenn du planst, deinen eigenen Runner mit deinen eigenen Hardwarespezifikationen zu hosten. Weitere Informationen findest du unter „[Informationen zu selbstgehosteten Runnern](/actions/hosting-your-own-runners)“.

Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter:
  - [Informationen zu GitHub Actions](/actions/learn-github-actions)
  - [Grundlegendes zu GitHub Actions](/actions/learn-github-actions/understanding-github-actions)
  - [Ereignisse, die Workflows auslösen](/actions/learn-github-actions/events-that-trigger-workflows)
  - [Spickzettel zu Filtermustern](/actions/learn-github-actions/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)

#### <a name="using-a-third-party-ci-system-with-the-codeql-cli-for--data-variablesproductprodname_code_scanning-"></a>Verwenden eines CI-Systems von Drittanbietern mit der CodeQL-CLI für {% data variables.product.prodname_code_scanning %}

Wenn du {% data variables.product.prodname_actions %} nicht verwendest und dein eigenes Continuous Integration-System besitzt, kannst du die CodeQL-CLI verwendest, um CodeQL-Codeüberprüfungen in einem CI-System eines Drittanbieters auszuführen.

Weitere Informationen findest du unter
  - [Informationen zur CodeQL-Codeüberprüfung in deinem CI-System](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)

### <a name="step-3-enable--data-variablesproductprodname_code_scanning_capc--in-repositories"></a>Schritt 3: Aktivieren von {% data variables.product.prodname_code_scanning_capc %} in Repositorys

Wenn du für den Rollout von GHAS einen Ansatz mit Phasen verfolgst, solltest du {% data variables.product.prodname_code_scanning %} im Rahmen deines Rolloutplans Repository für Repository aktivieren. Weitere Informationen findest du unter [Einrichten der Codeüberprüfung für ein Repository](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository).

Wenn du keinen Ansatz mit einem Rollout in Phasen planen und die Codeüberprüfung für viele Repositorys aktivieren möchtest, solltest du ein Skript für den Prozess verwenden.

Ein Beispiel für ein Skript, das Pull Requests öffnet, um einen {% data variables.product.prodname_actions %}-Workflow zu mehreren Repositorys hinzuzufügen, findest du im [`jhutchings1/Create-ActionsPRs`](https://github.com/jhutchings1/Create-ActionsPRs)-Repository für ein Beispiel mit PowerShell oder [`nickliffen/ghas-enablement`](https://github.com/NickLiffen/ghas-enablement) für Teams, die keine PowerShell haben und stattdessen NodeJS verwenden möchten.

### <a name="step-4-run-code-scans-and-review-your-results"></a>Schritt 4: Ausführen von Codeüberprüfungen und Überprüfen deiner Ergebnisse

Wenn die Codeüberprüfung in den erforderlichen Repositorys aktiviert ist, kannst du deinen Entwicklungsteams helfen, zu verstehen, wie Codeüberprüfungen und Berichte ausgeführt, Berichte angezeigt und Ergebnisse verarbeitet werden.

#### <a name="-data-variablesproductprodname_code_scanning_capc-"></a>{% data variables.product.prodname_code_scanning_capc %}

Mit der Codeüberprüfung findest du Sicherheitsrisiken und Fehler im Code deines Projekts auf GitHub und kannst zugehörige {% data variables.product.prodname_code_scanning %}-Warnungen anzeigen, selektieren, verstehen und beheben.

Wenn die Codeüberprüfung ein Problem in einem Pull Request identifiziert, kannst du den hervorgehobenen Code überprüfen und die Warnung beheben. Weitere Informationen findest du unter [Selektieren von {% data variables.product.prodname_code_scanning %}-Warnungen in Pull Requests](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/triaging-code-scanning-alerts-in-pull-requests).

Wenn du über Schreibberechtigungen für ein Repository verfügst, kannst du Warnungen der Codeüberprüfung für dieses Repository verwalten. Mit Schreibberechtigungen für ein Repository {% ifversion delete-code-scanning-alerts %}kannst du Warnungen anzeigen, korrigieren, schließen oder löschen {% else %}kannst du Warnungen{% endif %} für mögliche Sicherheitsrisiken oder Fehler im Code deines Repositorys anzeigen, beheben oder schließen. Weitere Informationen findest du unter [Verwalten von Codeüberprüfungswarnungen für dein Repository](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/managing-code-scanning-alerts-for-your-repository).

#### <a name="generate-reports-of--data-variablesproductprodname_code_scanning--alerts"></a>Generieren von Berichten von {% data variables.product.prodname_code_scanning %}-Warnungen

Wenn du einen Bericht deiner Codeüberprüfungswarnungen erstellen möchtest, kannst du die {% data variables.product.prodname_code_scanning_capc %}-API verwenden. Weitere Informationen findest du unter [{% data variables.product.prodname_code_scanning_capc %}-API](/rest/reference/code-scanning).

Ein Beispiel für die Verwendung der {% data variables.product.prodname_code_scanning_capc %}-API findest du im [`get-code-scanning-alerts-in-org-sample`](https://github.com/jhutchings1/get-code-scanning-alerts-in-org-sample)-Repository.

### <a name="step-5-configure--data-variablesproductprodname_code_scanning_capc--to-fine-tune-your-results"></a>Schritt 5: Konfigurieren von {% data variables.product.prodname_code_scanning_capc %}, um deine Ergebnisse zu optimieren

Beim Ausführen der ersten Codeüberprüfungen kannst du feststellen, dass keine Ergebnisse gefunden werden oder dass eine ungewöhnliche Anzahl von Ergebnissen zurückgegeben wird. Es kann ratsam sein, das anzupassen, was in zukünftigen Überprüfungen gekennzeichnet wird.

Weitere Informationen findest du unter [Konfigurieren der Codeüberprüfung](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning).

Wenn dein Unternehmen andere Tools für die Codeanalyse von Drittanbietern mit der GitHub-Codeüberprüfung verwenden möchte, kannst du Aktionen verwenden, um diese Tools innerhalb von GitHub auszuführen. Alternativ kannst du Ergebnisse, die von Drittanbietertools als SARIF-Dateien generiert werden, in die Codeüberprüfung hochladen. Weitere Informationen findest du unter [Integrieren der Codeüberprüfung](/code-security/code-scanning/integrating-with-code-scanning).

### <a name="step-6-set-up-secret-scanning"></a>Schritt 6: Einrichten der Überprüfung von Geheimnissen

GitHub durchsucht Repositorys nach bekannten Geheimnistypen, um die betrügerische Verwendung von Geheimnissen zu verhindern, die versehentlich committet wurden.

{% ifversion ghes %}

Informationen zum Aktivieren der Überprüfung von Geheimnissen für deine {% data variables.product.prodname_ghe_server %}-Instanz findest du unter [Konfigurieren von Geheimnisüberprüfung für deine Appliance](/admin/advanced-security/configuring-secret-scanning-for-your-appliance).

{% endif %}

Du musst die Überprüfung von Geheimnissen für jedes Pilotprojekt aktivieren, entweder durch Aktivieren des Features für jedes Repository oder für alle Repositorys in allen Organisationen, die an dem Projekt teilnehmen. Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository) oder [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

Informationen zum Anzeigen und Schließen von Warnungen für Geheimnisse, die in deinem Repository eingecheckt sind, findest du unter [Verwalten von Warnungen aus der Geheimnisüberprüfung](/code-security/secret-scanning/managing-alerts-from-secret-scanning).

### <a name="step-7-set-up-dependency-management"></a>Schritt 7: Einrichten der Abhängigkeitsverwaltung

GitHub hilft Ihnen, die Verwendung von Drittanbietersoftware zu vermeiden, die bekannte Sicherheitsrisiken enthält. Wir stellen die folgenden Tools zum Aktualisieren sicherheitsanfälliger Abhängigkeiten bereit{% ifversion GH-advisory-db-supports-malware %} und entfernen Schadsoftware{% endif %}.

| Abhängigkeitsverwaltungstool | BESCHREIBUNG |
|----|----|
| Dependabot-Warnungen | Du kannst die Abhängigkeiten deines Repositorys nachverfolgen und Dependabot-Warnungen erhalten, wenn dein Unternehmen unsichere Abhängigkeiten entdeckt. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies). |
| Abhängigkeitsdiagramm | Das Abhängigkeitsdiagramm ist eine Zusammenfassung der in einem Repository gespeicherten Manifest- und Sperrdateien. Es zeigt die Ökosysteme und Pakete, von denen deine Codebasis abhängig ist (ihre Abhängigkeiten), sowie die Repositorys und Pakete, die von deinem Projekt abhängen (seine abhängigen Elemente). Weitere Informationen findest du unter [Informationen zum Abhängigkeitsdiagramm](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph). |{% ifversion ghes or ghec %}
| Abhängigkeitsüberprüfung | Wenn ein Pull Request Änderungen an Abhängigkeiten enthält, kannst du eine Zusammenfassung dessen anzeigen, was geändert wurde,und ob bekannte Sicherheitsrisiken in einer der Abhängigkeiten vorhanden sind. Weitere Informationen findest du unter [Informationen zur Abhängigkeitsprüfung](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review) oder [Überprüfen von Abhängigkeitsänderungen in einem Pull Request](/github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request). | {% endif %} {% ifversion ghec or ghes > 3.2 %}
| Dependabot-Sicherheitsupdates | Dependabot kann anfällige Abhängigkeiten für dich beheben, indem Pull Requests mit Sicherheitsupdates ausgelöst werden. Weitere Informationen findest du unter [Informationen zu Dependabot-Sicherheitsupdates](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates). |
| Dependabot-Versionsupdates | Dependabot kann verwendet werden, um die von Ihnen verwendeten Pakete auf die jeweils neueste Version zu aktualisieren. Weitere Informationen findest du unter [Informationen zu Dependabot-Versionsupdates](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates). | {% endif %}

{% data reusables.dependabot.beta-security-and-version-updates-onboarding %}

### <a name="step-8-establish-a-remediation-process"></a>Schritt 8: Einrichten eines Wartungsprozesses

Sobald deine Teams in der Lage sind, Überprüfungen auszuführen, Schwachstellen und Abhängigkeiten zu identifizieren und die Ergebnisse jedes Sicherheitsfeatures zu nutzen, besteht der nächste Schritt darin, sicherzustellen, dass sie die in ihren normalen Entwicklungsprozessen identifizierten Sicherheitsrisiken beheben können, ohne dass dein Sicherheitsteam beteiligt ist.

Dies bedeutet, dass die Entwicklungsteams verstehen, wie sie die GHAS-Features während des gesamten Entwicklungsprozesses nutzen, Scans ausführen, Berichte lesen, die Ergebnisse nutzen und Sicherheitsrisiken innerhalb ihrer normalen Entwicklungsworkflows beheben können, ohne eine separate Sicherheitsphase am Ende der Entwicklung haben zu müssen oder ein Sicherheitsteam einbeziehen zu müssen, um Berichte/Ergebnisse zu verstehen.

### <a name="step-9-set-up-custom-analysis-if-needed"></a>Schritt 9: Einrichten einer benutzerdefinierten Analyse bei Bedarf

Die benutzerdefinierte Analyse ist eine optionale weitergehende Verwendung der Codeüberprüfung, wenn über die verfügbaren Standardabfragen (und die Community) hinaus benutzerdefinierte CodeQL-Abfragen benötigt werden. Benutzerdefinierte Abfragen werden nur selten benötigt.

Benutzerdefinierte Abfragen werden verwendet, um benutzerdefinierte Sicherheitswarnungen zu identifizieren oder Entwicklern zu helfen, Programmierstandards zu befolgen, indem bestimmte Codemuster erkannt werden.

Wenn du in deinem Unternehmen benutzerdefinierte CodeQL-Abfragen erstellen möchtest, gibt es bestimmte Anforderungen, die dein Unternehmen erfüllen sollte.

Wenn dein Team einige Beispiele für vorhandene Sicherheitsrisiken bereitstellen kann, die du über CodeQL finden möchtest, informiere das GitHub-Team, und wir können eine Einführungssitzung planen, um die Grundlagen der Sprache zu überprüfen und zu besprechen, wie du eines deiner Probleme beheben kannst. Wenn du CodeQL ausführlicher behandeln möchtest, bieten wir zusätzliche Einsatzoptionen, um weitere Themen zu behandeln, damit dein Team eigene Abfragen erstellen kann.

Weitere Informationen zu [CodeQL-Abfragen](https://codeql.github.com/docs/writing-codeql-queries/codeql-queries/) findest du in unserer [CodeQL-Dokumentation](https://codeql.github.com/docs/codeql-overview/), oder wende dich an dein {% data variables.product.prodname_professional_services %}-Team oder deinen Vertriebsmitarbeiter.

### <a name="step-10-create--maintain-documentation"></a>Schritt 10: Erstellen und Pflegen der Dokumentation

In der gesamten Pilotphase ist es wichtig, eine hochwertige interne Dokumentation der Infrastruktur und Prozessänderungen innerhalb deines Unternehmens sowie der Erkenntnisse aus dem Pilotprozess und den Konfigurationsänderungen zu erstellen und zu pflegen, die während des Rollouts und des Implementierungsprozesses vorgenommen wurden.

Wenn du eine gründliche und vollständige Dokumentation hast, kannst du die verbleibenden Phasen deines Rollouts mehr zu einem wiederholbaren Prozess machen.
Eine gute Dokumentation stellt außerdem sicher, dass neue Teams während des Rolloutprozesses konsistent integriert werden können. Das gleiche gilt, wenn neue Mitglieder zu den Teams stoßen.

Eine gute Dokumentation endet nicht, wenn Rollout und Implementierung abgeschlossen sind. Die hilfreichste Dokumentation wird aktiv aktualisiert und weiterentwickelt, während deine Teams mehr Erfahrung mit GHAS gewinnen und ihre Anforderungen wachsen.

Zusätzlich zu deiner Dokumentation empfehlen wir, dass dein Unternehmen deinen Teams klare Kanäle zur Unterstützung und Anleitung für den gesamten Rollout, die Implementierung und alle weiteren Phasen bietet. Abhängig vom Umfang der Änderungen, die dein Unternehmen vornehmen muss, um das Rollout und die Implementierung von GHAS zu unterstützen, trägt eine gute Unterstützung der Teams dazu bei, eine erfolgreiche Einführung in den täglichen Workflow deiner Entwicklungsteams sicherzustellen.

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-2-organizational-buy-in--rollout-preparation"></a>{% octicon "milestone" aria-label="The milestone icon" %} Phase 2: Akzeptanz in der Organisation und Vorbereitung des Rollouts

{% note %}

{% octicon "clock" aria-label="Clock" %} **Geschätzte Zeitdauer:** Wir schätzen, dass Phase 2 ungefähr zwischen 1 Woche bis über einen Monat dauern kann. Diese Spanne kann je nach internen Genehmigungsprozessen deines Unternehmens stark variieren.

{% endnote %}

Eines der Hauptziele dieser Phase besteht darin, sicherzustellen, dass du über die Akzeptanz in der Organisation verfügst, damit die vollständige Bereitstellung von GHAS erfolgreich verläuft.

In dieser Phase überprüft dein Unternehmen die Ergebnisse der Pilotprojekte, um festzustellen, ob der Pilot erfolgreich war, welche Anpassungen möglicherweise vorgenommen werden müssen und ob das Unternehmen bereit ist, mit dem Rollout fortzufahren.

Je nach Genehmigungsprozess deines Unternehmens ist möglicherweise die organisatorische Unterstützung von deinem oder deiner Executive Sponsor erforderlich, um fortzufahren. In den meisten Fällen ist die organisatorische Unterstützung deiner Teams erforderlich, damit dein Unternehmen von den Vorteilen von GHAS profitieren kann.

Bevor du mit der nächsten Phase, dem umfassenderen Rollout von GHAS in deinem Unternehmen, fortfährst, werden basierend auf den Erkenntnissen des Piloten häufig Änderungen am ursprünglichen Rolloutplan vorgenommen.

Alle Änderungen, die sich auf die Dokumentation auswirken können, sollten auch vorgenommen werden, um sicherzustellen, dass sie für den fortlaufenden Rollout aktuell ist.

Außerdem solltest du deinen Plan in Betracht ziehen, Teams oder Teammitglieder zu schulen, die in den nächsten Phasen deines Rollouts in GHAS eingeführt werden, wenn dies noch nicht geschehen ist.

### <a name="step-1-organize-results"></a>Schritt 1: Organisieren von Ergebnissen

Nach Abschluss der Phase 1 sollten deine Teams {% ifversion ghes %} GHAS für deine {% data variables.product.prodname_ghe_server %}-Instanz aktiviert haben und {% endif %} alle wichtigsten Features von GHAS erfolgreich nutzen können, möglicherweise mit einigen Konfigurationsänderungen, um Ergebnisse zu optimieren. Wenn dein Unternehmen Erfolgsmetriken in Phase 0 klar definiert hat, solltest du in der Lage sein, anhand dieser Metriken zu messen, um den Erfolg deines Piloten zu ermitteln.

Es ist wichtig, deine Baselinemetriken beim Vorbereiten der Ergebnisse zu überarbeiten, um sicherzustellen, dass der inkrementelle Fortschritt basierend auf Metriken, die aus dem Piloten für deine ursprünglichen Geschäftsziele gesammelt wurden, veranschaulicht werden kann. Wenn du Unterstützung zu diesen Informationen benötigst, kann GitHub helfen und sicherstellen, dass dein Unternehmen über die richtigen Metriken verfügt, um deinen Fortschritt zu messen. Weitere Informationen zur verfügbaren Hilfe findest du unter [GitHub-Dienste und -Support](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support).

### <a name="step-2-secure-organizational-buy-in"></a>Schritt 2: Sichern der Akzeptanz innerhalb der Organisation

Die Akzeptanz innerhalb der Organisation variiert in Abhängigkeit von verschiedenen Faktoren, einschließlich der Größe deines Unternehmens, des Genehmigungsprozesses oder sogar der Änderungsstufe, die für den GHAS-Rollout erforderlich ist, um nur einige zu nennen.

Für einige Unternehmen ist die Sicherung der Akzeptanz eine einmalige Besprechung, aber für andere kann dieser Prozess einige Zeit in Anspruch nehmen (möglicherweise Wochen oder Monate). Akzeptanz kann eine Genehmigung von deinem oder deiner Executive Sponsor erfordern oder die Einführung von GHAS in die täglichen Workflows deiner Teams.

Wie lange diese Phase dauert, hängt ganz von deinem Unternehmen und davon ab, wie schnell du fortfahren möchtest. Du solltest nach Möglichkeit Support oder Dienste von GitHub hinzuziehen, um Antworten und Empfehlungen zu erhalten, die erforderlich sein können, um diesen Prozess zu unterstützen. Weitere Informationen zur verfügbaren Hilfe findest du unter [GitHub-Dienste und -Support](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support).

### <a name="step-3-revise-and-update-documentation"></a>Schritt 3: Überarbeiten und Aktualisieren der Dokumentation

Überprüfe die Ergebnisse und Erkenntnisse aus deinen Pilotprojekten und die Anforderungen der restlichen Teams in deinem Unternehmen. Basierend auf deinen Erkenntnissen und Anforderungsanalysen aktualisierst/überarbeitest du deine Dokumentation.

Wir haben festgestellt, dass es wichtig ist, sicherzustellen, dass deine Dokumentation auf dem neuesten Stand ist, bevor du mit dem Rollout für den Rest des Unternehmens fortfährst.

### <a name="step-4-prepare-a-full-rollout-plan-for-your-company"></a>Schritt 4: Vorbereiten eines vollständigen Rolloutplans für dein Unternehmen

Basierend auf dem, was du aus deinen Pilotprojekten gelernt hast, aktualisiere den Rolloutplan, den du in Phase 0 aufgestellt hast. Ziehe für den Rollout in deinem Unternehmen alle Schulungen in Betracht, die deine Teams benötigen, z. B. Schulung zur Verwendung von GHAS, Prozessänderungen oder Migrationsschulung, wenn dein Unternehmen zu GitHub migriert.

## <a name="-octicon-milestone-aria-labelthe-milestone-icon---phase-3-full-organizational-rollout--change-management"></a>{% octicon "milestone" aria-label="The milestone icon" %} Phase 3: Vollständiger Rollout in der Organisation und Change Management

{% note %}

{% octicon "clock" aria-label="Clock" %} **Geschätzte Zeitdauer:** Wir schätzen, dass Phase 3 zwischen 2 Wochen bis mehrere Monate dauern kann. Diese Spanne kann je nach Größe deines Unternehmens, der Anzahl der Repositorys/Teams, dem Änderungsumfang, den der GHAS-Rollout für dein Unternehmen darstellt, usw. stark variieren.

{% endnote %}

Sobald dein Unternehmen sich anhand der Ergebnisse und Erkenntnisse deiner Pilotprojekte ausgerichtet hat und alle Rolloutvorbereitungsschritte aus Phase 2 abgeschlossen wurden, kannst du mit dem vollständigen Rollout für dein Unternehmen basierend auf deinem Plan fortfahren.

### <a name="step-1-evaluate-your-rollout-as-you-go"></a>Schritt 1: Bewerten des Rollouts während der Schritte

Wenn du für den Rollout von GHAS einen Ansatz mit Phasen verfolgst, solltest du nach dem GHAS-Rollout in einem anderen Segment deines Unternehmens eine kurze Pause einlegen und eine kurze Auswertung vornehmen, um sicherzustellen, dass der Rollout reibungslos verläuft. Deine Auswertung kann sicherstellen, dass Teams ordnungsgemäß unterstützt und geschult werden, dass alle eindeutigen GHAS-Konfigurationsanforderungen erfüllt sind und dass Pläne und Dokumentation bei Bedarf angepasst werden können.

### <a name="step-2-set-up-any-needed-training"></a>Schritt 2: Einrichten von erforderlicher Schulung

Bei der Einführung von GHAS für alle Teams, die über deine Pilotprojektteams hinausgehen, ist es wichtig, sicherzustellen, dass Teams entweder geschult sind oder Schulungsressourcen verfügbar sind, um bei Bedarf zusätzliche Unterstützung zu bieten.

Dies sind die wichtigsten Bereiche, in denen wir Bedarf an weiterer Unterstützung für Unternehmen sehen:
  - Schulung zu GHAS
  - Schulung für Kunden ohne GitHub-Vorkenntnisse
  - Schulung zum Migrieren zu GitHub

Unser {% data variables.product.prodname_professional_services_team %}-Team bietet eine Vielzahl von Schulungsdiensten, Bootcamps und allgemeine Ratschläge, um deine Teams während des Rollouts und der Implementierung zu unterstützen. Weitere Informationen findest du unter [GitHub-Dienste und -Support](/admin/advanced-security/overview-of-github-advanced-security-deployment#github-services-and-support).

Zur Unterstützung deiner Teams findest du hier eine Zusammenfassung relevanter GitHub-Dokumentation.

Dokumentation zur Aktivierung von GHAS findest du unter:
  - [Aktivieren erweiterter Sicherheitsfeatures](/get-started/learning-about-github/about-github-advanced-security)
  - [Verwalten von Sicherheits- und Analyseeinstellungen für deine Organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)
  - [Verwalten von Sicherheits- und Analyseeinstellungen für dein Repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)

Dokumentation zum Migrieren zu GitHub findest du unter:
  - [Importieren von Quellcode in GitHub](/github/importing-your-projects-to-github/importing-source-code-to-github)

Eine Dokumentation zu den ersten Schritten mit GitHub findest du unter:
  - [Erste Schritte](/get-started)

### <a name="step-3-help-your-company-manage-change"></a>Schritt 3: Unterstützen deines Unternehmens beim Change Management

In Schritt 4 der Phase 2 wird empfohlen, den anfänglichen Rolloutplan basierend auf deinen Erkenntnissen aus den Pilotprojekten zu aktualisieren. Stelle sicher, dass du deinen Plan weiterhin aktualisierst, während du alle erforderlichen Organisationsänderungen implementierst, damit der GHAS-Rollout für dein Unternehmen erfolgreich verläuft.

Erfolgreiche GHAS-Rollouts und die Einführung bewährter Methoden in tägliche Workflows hängen davon ab, dass deine Teams wissen, warum Sicherheit bei ihrer Arbeit berücksichtigt werden muss.

### <a name="step-4-continued-customization"></a>Schritt 4: Fortgesetzte Anpassung

Die Konfiguration und Anpassung von GHAS ist nicht abgeschlossen, nachdem der Rollout in deinem Unternehmen durchgeführt wurde. Weitere benutzerdefinierte Konfigurationsänderungen sollten im Laufe der Zeit vorgenommen werden, um sicherzustellen, dass GHAS die sich ändernden Anforderungen deines Unternehmens weiterhin unterstützt.

Da dein Team im Laufe der Zeit mit GHAS erfahrener und qualifizierter wird, wird dies zusätzliche Möglichkeiten für weitere Anpassungen schaffen.
