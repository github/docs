---
title: Informationen zu Vorlagen für Issues und Pull Requests
intro: 'Mit den Vorlagen für Issues und Pull Requests kannst du die Informationen anpassen und standardisieren, die Mitarbeiter*innen beim Öffnen von Issues und Pull Requests in deinem Repository angeben sollen.'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
  - /github/building-a-strong-community/about-issue-and-pull-request-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: About templates
ms.openlocfilehash: b95b31ae4171a54d9261fab6cbe93c43361296ab
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145105391'
---
Nachdem du in deinem Repository Vorlagen für Issues und Pull Requests erstellt hast, können Mitarbeiter die Vorlagen verwenden, um Issues zu öffnen oder vorgeschlagene Änderungen in ihren Pull Requests gemäß den Beitragsrichtlinien des Repositorys zu beschreiben. Weitere Informationen zum Hinzufügen von Richtlinien zu einem Repository findest du unter [Festlegen von Richtlinien für Mitwirkende von Repositorys](/articles/setting-guidelines-for-repository-contributors).

{% ifversion fpt or ghes or ghec %}

Du kannst für deine Organisation oder dein persönliches Konto Standardvorlagen für Issues und Pull Requests erstellen. Weitere Informationen findest du unter [Erstellen einer Datei mit Standardbeitragsrichtlinien](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

{% endif %}

## Vorlagen für Issues

Wenn du Issuevorlagen für dein Repository mithilfe des Vorlagen-Generators für Issues{% ifversion fpt or ghec %} oder mit Issueformularen{% endif %} erstellst, können Mitwirkende die entsprechende Vorlage auswählen, wenn sie neue Issues im Repository erstellen.

![„Neuer Issue"-Seite mit Auswahlmöglichkeiten für Issuevorlagen](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

Mit Issuevorlagen kannst du Anleitungen zum Erstellen von Issues bereitstellen, wobei Mitwirkende den Inhalt der Issues angeben können. {% ifversion fpt or ghec %} Wenn Mitwirkende beim Erstellen von Issues spezifische, strukturierte Informationen angeben sollen, kannst du mit Issueformularen sicherstellen, dass du die gewünschten Informationen erhältst.{% endif %}

Mit dem Vorlagengenerator kannst du für jede Vorlage einen Titel und eine Beschreibung angeben, den Vorlageninhalt hinzufügen und einen Commit der Vorlage auf dem Standardbranch durchführen oder einen Pull Request im Repository öffnen. Der Vorlagengenerator fügt automatisch das YAML-Titelei-Markup hinzu, das erforderlich ist, damit die Vorlage auf der „Neuer Issue"-Seite angezeigt wird. Weitere Informationen findest du unter [Konfigurieren von Issuevorlagen für dein Repository](/articles/configuring-issue-templates-for-your-repository).

{% ifversion fpt or ghec %} Mit Issueformularen kannst du Vorlagen erstellen, die Webformularfelder enthalten, die dem {% data variables.product.prodname_dotcom %}-Formschema entsprechen. Wenn ein*e Mitwirkende*r ein Issue mithilfe des Issueformulars erstellt, werden die Formulareingaben in einen Standardkommentar zum Markdownissue konvertiert. Du kannst unterschiedliche Eingabetypen angeben und Eingaben nach Bedarf so festlegen, dass Mitwirkende Issues in deinem Repository erstellen können. Weitere Informationen findest du unter [Konfigurieren von Issuevorlagen für dein Repository](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms) und [Syntax für Issueformulare](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms).
{% endif %}

{% data reusables.repositories.issue-template-config %} Weitere Informationen findest du unter [Issuevorlagen für dein Repository konfigurieren](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser).

Issuevorlagen werden im Standardbranch des Repositorys im ausgeblendeten Verzeichnis `.github/ISSUE_TEMPLATE` gespeichert. Wenn du eine Vorlage in einem anderen Branch erstellst, steht sie Mitarbeitern nicht zur Verfügung. Bei Dateinamen von Issuevorlagen wird die Groß- und Kleinschreibung nicht beachtet, und sie müssen die Erweiterung *.md* aufweisen.{% ifversion fpt or ghec %} Issuevorlagen, die mit Issueformularen erstellt wurden, müssen die Erweiterung *.yml* aufweisen.{% endif %} {% data reusables.repositories.valid-community-issues %}

Es ist möglich, manuell eine einzelne Issuevorlage in Markdown mit dem Workflow für ältere Issuevorlagen zu erstellen, und Projektmitarbeiter werden automatisch den Inhalt der Vorlage im Issue-Text sehen. Es wird jedoch empfohlen, den aktualisierten Generator für mehrere Vorlagen{% ifversion fpt or ghec %} oder Issueformulare{% endif %} zum Erstellen von Issuevorlagen zu verwenden. Weitere Informationen zum Legacyworkflow findest du unter [Manuelles Erstellen einer einzelnen Issuevorlage für dein Repository](/articles/manually-creating-a-single-issue-template-for-your-repository).

{% data reusables.repositories.security-guidelines %}

## Pull Request-Vorlagen

Wenn du eine Pull-Request-Vorlage zu deinem Repository hinzufügst, sehen Projektmitarbeiter automatisch den Inhalt der Vorlage im Text des Pull Requests.

![Beispiel für eine Pull-Request-Vorlage](/assets/images/help/pull_requests/pr-template-sample.png)

Du musst Vorlagen auf dem Standardbranch des Repositorys erstellen. Vorlagen, die in anderen Branches erstellt wurden, stehen Mitarbeitern nicht zur Verfügung. Du kannst deine Pull Request-Vorlage im sichtbaren Stammverzeichnis des Repositorys (dem Ordner `docs`) oder im ausgeblendeten Verzeichnis `.github` speichern. Bei Dateinamen von Pull Request-Vorlagen wird nicht nach Groß- und Kleinschreibung unterschieden, und sie können Erweiterungen wie *.md* oder *.txt* aufweisen.

Weitere Informationen findest du unter [Erstellen einer Pull Request-Vorlage für dein Repository](/articles/creating-a-pull-request-template-for-your-repository).
