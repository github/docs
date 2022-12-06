---
title: Planen und Nachverfolgen von Arbeiten für dein Team oder Projekt
intro: 'Die Grundlagen für die Verwendung der Planungs- und Nachverfolgungstools von {% data variables.product.prodname_dotcom %} zum Verwalten von Arbeiten in einem Team oder Projekt.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Project management
  - Projects
ms.openlocfilehash: 782351c80164c90d479120996edf25329d20078c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147423612'
---
## Einführung
Du kannst {% data variables.product.prodname_dotcom %}-Repositorys, -Issues, -Projektboards und andere Tools verwenden, um deine Arbeit zu planen und nachzuverfolgen, unabhängig davon, ob du an einem einzelnen Projekt oder in einem funktionsübergreifenden Team arbeitest.

In diesem Leitfaden erfährst du, wie du ein Repository für die Zusammenarbeit mit einer Gruppe von Personen erstellst und einrichtest, Issuevorlagen{% ifversion fpt or ghec %} und -formulare{% endif %} erstellst, Issues öffnest und Aufgabenlisten verwendest, um Arbeit aufzugliedern, und ein Projektboard zum Organisieren und Nachverfolgen von Issues einrichtest.

## Repository erstellen
Beim Starten neuer Projekte, Initiativen oder Features besteht der erste Schritt darin, ein Repository zu erstellen. Repositorys enthalten alle Dateien deines Projekts und machen einen Ort verfügbar, an dem du mit anderen zusammenarbeiten und deine Arbeit verwalten kannst. Weitere Informationen findest du unter [Erstellen eines neuen Repositorys](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-new-repository).

Du kannst Repositorys für verschiedene Zwecke basierend auf deinen Anforderungen einrichten. Im Folgenden sind ein paar gängige Anwendungsfälle aufgeführt:

- **Produktrepositorys**: Größere Organisationen, die Arbeit und Ziele im Zusammenhang mit bestimmten Produkten nachverfolgen, verfügen gegebenenfalls über mindestens ein Repository, das den Code und andere Dateien enthält. Diese Repositorys können auch für Dokumentation, Berichterstellung hinsichtlich der Produktintegrität oder zukünftige Pläne für das Produkt verwendet werden. 
- **Projektrepositorys**: Du kannst ein Repository für ein einzelnes Projekt erstellen, an dem du arbeitest, oder für ein Projekt, an dem du mit anderen zusammenarbeitest. Eine Organisation, die die Arbeit für kurzlebige Initiativen oder Projekte nachverfolgt, z. B. ein Beratungsunternehmen, muss über den Sachstand eines Projekts berichten und Projektbeteiligte basierend auf Qualifikationen und Bedürfnissen auf verschiedene Projekten verteilen. Code für das Projekt ist häufig in einem einzigen Repository enthalten.
- **Teamrepositorys**: Bei einer Organisation, die Personen in Teams gruppiert und diesen Projekte zuteilt, z. B. im Fall eines Teams für Entwicklertools, kann Code auf viele Repositorys für die verschiedenen nachzuverfolgenden Arbeiten verteilt sein. Hier kann es hilfreich sein, ein teamspezifisches Repository als zentralen Ort zu nutzen, an dem alle Arbeiten nachverfolgt werden, an denen das Team beteiligt ist.
- **Persönliche Repositorys**: Du kannst ein persönliches Repository erstellen, um all deine Arbeit an einem zentralen Ort nachzuverfolgen, zukünftige Aufgaben zu planen oder sogar Notizen oder Informationen hinzuzufügen, die du speichern möchtest. Du kannst auch Projektmitarbeiter hinzufügen, wenn du diese Informationen für andere Personen freigeben möchtest. 

Du kannst mehrere, separate Repositorys erstellen, wenn du unterschiedliche Zugriffsberechtigungen für den Quellcode und zum Nachverfolgen von Issues und Diskussionen benötigst. Weitere Informationen findest du unter [Erstellen eines Repositorys ausschließlich für Issues](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository).

In den folgenden Beispielen in diesem Leitfaden wird ein Beispielrepository mit der Bezeichnung „Project Octocat“ verwendet.
## Vermitteln von Repositoryinformationen
Du kannst eine README.md-Datei für dein Repository erstellen, um dein Team oder Projekt einzuführen und wichtige Informationen darüber zu vermitteln. Eine README-Datei ist häufig das erste Element, das ein Benutzer deines Repositorys sehen wird, sodass du auch Informationen darüber bereitstellen kannst, wie Benutzer oder Mitwirkende mit dem Projekt beginnen und wie du dich an das Team wenden kannst. Weitere Informationen findest du unter [Informationen zu README-Dateien](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes).

Du kannst auch eine CONTRIBUTING.md-Datei erstellen, die eigens dafür vorgesehen ist, Richtlinien vorzugeben, wie Benutzer oder Mitwirkende Arbeit zum Team oder Projekt beitragen und mit diesem interagieren können, z. B. wie sie ein Issue zur Fehlerkorrektur öffnen oder eine Verbesserung anfordern können. Weitere Informationen findest du unter [Festlegen von Richtlinien für Repositorymitwirkende](/communities/setting-up-your-project-for-healthy-contributions/setting-guidelines-for-repository-contributors).
### README-Beispiel
Zum Einführen des neuen Projekts – „Project Octocat“ – kann eine README.md-Datei erstellt werden. 

![Erstellen eines README-Beispiels](/assets/images/help/issues/quickstart-creating-readme.png)
## Issuevorlagen erstellen

Du kannst Issues verwenden, um die verschiedenen Arten von Arbeit nachzuverfolgen, die dein funktionsübergreifendes Team oder Projekt abdeckt, sowie Informationen von Beteiligten außerhalb deines Projekts zu sammeln. Im Folgenden findest du ein paar gängige Anwendungsfälle für Issues.

- Releasenachverfolgung: Du kannst ein Issue verwenden, um den Fortschritt für ein Release oder die Schritte zum Abschließen eines Starttags nachzuverfolgen.
- Große Initiativen: Du kannst ein Issue verwenden, um den Fortschritt großer Initiativen oder Projekte nachzuverfolgen und dann eine Verknüpfung zu den kleineren Issues herzustellen.
- Featureanforderungen: Teams oder Benutzer können Issues erstellen, um eine Verbesserung deines Produkts oder Projekts anzufordern.
- Fehler: Teams oder Benutzer können Issues erstellen, um einen Fehler zu melden. 

Je nach Typ des Repositorys und Projekts, an dem du arbeitest, kannst du bestimmte Arten von Issues gegenüber anderen Arten priorisieren. Nachdem du die häufigsten Issuetypen für dein Team identifiziert hast, kannst du Issuevorlagen {% ifversion fpt or ghec %}und -formulare{% endif %} für dein Repository erstellen. Issuevorlagen {% ifversion fpt or ghec %}und -formulare{% endif %} ermöglichen es dir, eine standardisierte Liste von Vorlagen zu erstellen, die Mitwirkende auswählen können, wenn sie ein Issue in deinem Repository öffnen. Weitere Informationen findest du unter [Konfigurieren von Issuevorlagen für dein Repository](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository).

### Beispiel für eine Issuevorlage
Nachfolgend wird eine Issuevorlage zum Melden eines Fehlers im Projekt „Octocat“ erstellt.

![Beispiel für die Erstellung einer Issuevorlage](/assets/images/help/issues/quickstart-creating-issue-template.png)

Nachdem du nun die Issuevorlage für den Fehlerbericht erstellt hast, kannst du diese beim Erstellen eines neuen Issues im Projekt „Octocat“ auswählen.

![Beispiel für die Auswahl einer Issuevorlage](/assets/images/help/issues/quickstart-issue-creation-menu-with-template.png)

## Öffnen von Issues und Verwenden von Aufgabenlisten zum Nachverfolgen der Arbeit
Du kannst deine Arbeit organisieren und nachverfolgen, indem du Issues erstellst. Weitere Informationen findest du unter [Erstellen eines Issues](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue).
### Beispiel für ein Issue
Hier ist ein Beispiel für ein Issue, das für eine große Initiative, Front-End-Arbeit, im Projekt „Octocat“ erstellt wurde.

![Beispiel für die Erstellung eines Issues für eine große Initiative](/assets/images/help/issues/quickstart-create-large-initiative-issue.png)
### Beispiel für eine Aufgabenliste

Du kannst Aufgabenlisten verwenden, um größere Issues in kleinere Aufgaben aufzuteilen und Issues als Teil eines größeren Ziels nachzuverfolgen. {% ifversion fpt or ghec %} Aufgabenlisten verfügen über zusätzliche Funktionen, wenn sie dem Text eines Issues hinzugefügt werden. Du kannst die Anzahl der Aufgaben sehen, die aus der Gesamtzahl der am Anfang des Issues aufgeführten Aufgaben abgeschlossen wurden. Wenn jemand ein Issue schließt, das in der Aufgabenliste verknüpft ist, wird das Kontrollkästchen automatisch als abgeschlossen markiert.{% endif %} Weitere Informationen findest du unter [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists).

Nachfolgend wurde dem Issue des Projekts „Octocat“ eine Aufgabenliste hinzugefügt, in der das Issue in kleinere Issues unterteilt wurde.

![Beispiel für das Hinzufügen einer Aufgabenliste zu einem Issue](/assets/images/help/issues/quickstart-add-task-list-to-issue.png)

## Treffen von Entscheidungen als Team
Du kannst Issues und Diskussionen verwenden, um im Team zu kommunizieren und als Team Entscheidungen zu geplanten Verbesserungen oder Prioritäten für dein Projekt zu treffen. Issues sind nützlich, wenn du sie zur Diskussion bestimmter Details erstellst, z. B. für Fehler- oder Leistungsberichte, die Planung für das nächste Quartal oder das Design für eine neue Initiative. Diskussionen sind nützlich für offenes Brainstorming oder Feedback außerhalb der Codebasis und repositoryübergreifend. Weitere Informationen findest du unter [Welches Diskussionstool sollte ich verwenden?](/github/getting-started-with-github/quickstart/communicating-on-github#which-discussion-tool-should-i-use)

Als Team kannst du auch den aktuellen Stand täglicher Aufgaben innerhalb von Issues kommunizieren, damit jeder den Sachstand der Arbeit kennt. Du kannst z. B. ein Issue für ein großes Feature erstellen, an dem mehrere Personen arbeiten, und jedes Teammitglied kann Updates jeweils mit Status oder offenen Fragen in diesem Issue hinzufügen.
### Issuebeispiel mit Projektmitarbeitern
Hier ist ein Beispiel für Projektmitarbeiter, die den aktuellen Sachstand ihrer Arbeit an dem Problem des Projekts „Octocat“ mitteilen.

![Beispiel für die Zusammenarbeit an einem Issue](/assets/images/help/issues/quickstart-collaborating-on-issue.png)
## Verwenden von Bezeichnungen zum Hervorheben von Projektzielen und -status
Du kannst Bezeichnungen für ein Repository erstellen, um Issues, Pull Requests und Diskussionen zu kategorisieren. {% data variables.product.prodname_dotcom %} bietet auch Standardbezeichnungen für jedes neue Repository, die du bearbeiten oder löschen kannst. Bezeichnungen sind nützlich zum Nachverfolgen von Projektzielen, Fehlern, Arbeitstypen und Issuestatus.

Weitere Informationen findest du unter [Erstellen einer Bezeichnung](/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label).

Nachdem du eine Bezeichnung in einem Repository erstellt hast, kannst du diese auf beliebige Issues, Pull Requests oder Diskussionen im Repository anwenden. Anschließend kannst du Issues und Pull Requests nach Bezeichnung filtern, um alle zugeordneten Arbeiten zu ermitteln. Suche beispielsweise nach allen Front-End-Fehlern in deinem Projekt, indem du nach Issues mit den Bezeichnungen `front-end` und `bug` filterst. Weitere Informationen findest du unter [Filtern und Suchen von Issues und Pull Requests](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests).
### Beispiel für Beschriftungen
Nachfolgend findest du ein Beispiel für eine `front-end`-Bezeichnung, die erstellt und dem Issue hinzugefügt wurde.

![Beispiel für das Hinzufügen einer Bezeichnung zu einem Issue](/assets/images/help/issues/quickstart-add-label-to-issue.png)

## Hinzufügen von Issues zu einem Projektboard

{% ifversion projects-v2 %}

Du kannst {% data variables.projects.projects_v2 %} auf {% data variables.product.prodname_dotcom %} verwenden, um die Arbeit für dein Team zu planen und nachzuverfolgen. Ein Projekt ist eine anpassbare Kalkulationstabelle, die mit den Issues und Pull Requests in {% data variables.product.prodname_dotcom %} integriert ist und automatisch auf dem neuesten Stand der Informationen in {% data variables.product.prodname_dotcom %} gehalten wird. Du kannst das Layout anpassen, indem du die Issues und Pull Requests filterst, sortierst und gruppierst. Informationen zu den ersten Schritten mit Projekten findest du unter [Schnellstart für Projekte](/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects).
### Beispielprojekt
Hier ist das Tabellenlayout eines Beispielprojekts abgebildet, das mit den erstellten Issues des Projekts „Oktocat“ gefüllt ist.

![Beispiel für das Tabellenlayout eines Projekts](/assets/images/help/issues/quickstart-projects-table-view.png)

Dasselbe Projekt kann auch als Board angezeigt werden.

![Beispiel für das Layout eines Projektboards](/assets/images/help/issues/quickstart-projects-board-view.png)

{% endif %} {% ifversion projects-v1 %}

Du kannst {% ifversion projects-v2 %} auch die vorhandenen{% else %} {% endif %} die {% data variables.product.prodname_projects_v1 %} auf {% data variables.product.prodname_dotcom %} verwenden, um die Arbeit deines Teams zu planen und nachzuverfolgen. Projektboards bestehen aus Issues, Pull Requests und Notizen, die als Karten in Spalten deiner Wahl kategorisiert werden. Du kannst Projektboards für die Arbeit an Features, allgemeine Roadmaps oder sogar Releaseprüflisten erstellen. Weitere Informationen findest du unter [Informationen zu Projektboards](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards).
### Beispiel für ein Projektboard
Nachfolgend findest du ein Projektboard für das Beispielprojekt „Octocat“ mit dem erstellten Issue und den hinzugefügten kleineren Issues, in die es untergliedert wurde.

![Beispiel für ein Projektboard](/assets/images/help/issues/quickstart-project-board.png)

{% endif %}

## Nächste Schritte

Du hast jetzt mehr über die Tools erfahren, die {% data variables.product.prodname_dotcom %} zum Planen und Nachverfolgen deiner Arbeit bietet. Außerdem hast du die ersten Schritte der Einrichtung deines funktionsübergreifenden Team- oder Projektrepositorys ausgeführt. Hier findest du einige hilfreiche Ressourcen, die du nutzen kannst, um das Repository weiter anzupassen und deine Arbeit zu organisieren.

- [Informationen zu Repositorys](/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repositories) mit weiteren Informationen zum Erstellen von Repositorys
- [Nachverfolgen der Arbeit mit Issues](/issues/tracking-your-work-with-issues) mit weiteren Informationen zu verschiedenen Möglichkeiten zum Erstellen und Verwalten von Issues
- [Informationen zu Vorlagen für Issues und Pull Requests](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates) mit weiteren Informationen zu Issuevorlagen
- [Verwalten von Bezeichnungen](/issues/using-labels-and-milestones-to-track-work/managing-labels) mit weiteren Informationen zum Erstellen, Bearbeiten und Löschen von Bezeichnungen
- [Informationen zu Aufgabenlisten](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists) mit weiteren Informationen zu Aufgabenlisten {% ifversion projects-v2 %} – [Informationen zu Projekten](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) mit weiteren Informationen zu Projekten
- [Anpassen einer Ansicht](/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/customizing-a-view) mit Informationen zum Anpassen von Ansichten für Projekte{% endif %} {% ifversion projects-v1 %}– [Informationen zu {% data variables.product.prodname_projects_v1 %}](/issues/organizing-your-work-with-project-boards/managing-project-boards/about-project-boards) mit Informationen zum Verwalten Projektboards{% endif %}
