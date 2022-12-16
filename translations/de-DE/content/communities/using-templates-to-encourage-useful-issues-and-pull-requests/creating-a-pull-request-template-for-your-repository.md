---
title: Eine Pull-Request-Vorlage für dein Repository erstellen
intro: 'Wenn du eine Pull-Request-Vorlage zu deinem Repository hinzufügst, sehen Projektmitarbeiter automatisch den Inhalt der Vorlage im Text des Pull Requests.'
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
  - /github/building-a-strong-community/creating-a-pull-request-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create a PR template
ms.openlocfilehash: fa4d3cf78b63af147c85b8f6d77d7cca74e3853a
ms.sourcegitcommit: 4daa156856e651cb3854ead40e35bd918e481ad6
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190408'
---
Weitere Informationen findest du unter [Informationen zu Vorlagen für Issues und Pull Requests](/articles/about-issue-and-pull-request-templates).

Du kannst in jedem beliebigen unterstützten Ordner ein Unterverzeichnis namens *PULL_REQUEST_TEMPLATE* erstellen, um mehrere Pull Request-Vorlagen zu speichern. Mit dem Abfrageparameter `template` kannst du die Vorlage angeben, mit der der Pull Request-Text ausgefüllt werden soll. Weitere Informationen findest du unter [Verwenden von Abfrageparametern zum Erstellen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request).

{% ifversion fpt or ghes or ghec %}

Du kannst Standardvorlagen für Pull Requests für dein Organisationskonto{% ifversion fpt or ghes or ghec %} oder dein persönliches Konto{% endif %} festlegen. Weitere Informationen findest du unter [Erstellen einer Standard-Communityintegritätsdatei](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file).

{% endif %}

## Eine Pull-Request-Vorlage hinzufügen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Gib Folgendes im Feld für den Dateinamen ein:
    -  Wenn die Pull Request-Vorlage im Stammverzeichnis des Repositorys sichtbar sein soll, benenne diese Vorlage `pull_request_template.md`.
  ![Name der neuen Pull Request-Vorlage im Stammverzeichnis](/assets/images/help/repository/pr-template-file-name.png)
    - Wenn die Pull Request-Vorlage im `docs/pull_request_template.md`-Verzeichnis des Repositorys sichtbar sein soll, benenne diese Vorlage `docs`.
  ![Neue Pull Request-Vorlage im docs-Verzeichnis](/assets/images/help/repository/pr-template-file-name-docs.png)
    - Um deine Datei in einem ausgeblendeten Verzeichnis zu speichern, benenne die Pull Request-Vorlage `.github/pull_request_template.md`.
  ![Neue Pull Request-Vorlage in ausgeblendetem Verzeichnis](/assets/images/help/repository/pr-template-hidden-directory.png)
    - Um mehrere Pull Request-Vorlagen zu erstellen und mithilfe des Abfrageparameters `template` eine Vorlage zum Ausfüllen des Pull Request-Texts anzugeben, gib *.github/PULL_REQUEST_TEMPLATE/* gefolgt vom Namen der Pull Request-Vorlage ein. Beispiel: `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. Du kannst auch mehrere Pull Request-Vorlagen in einem `PULL_REQUEST_TEMPLATE`-Unterverzeichnis innerhalb des Stammverzeichnisses oder des `docs/`-Verzeichnisses speichern. Weitere Informationen findest du unter [Verwenden von Abfrageparametern zum Erstellen eines Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request).
  ![Mehrere neue Pull Request-Vorlagen in ausgeblendetem Verzeichnis](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. Füge im Text der neuen Datei deine Pull-Request-Vorlage hinzu. Sie könnte beispielsweise Folgendes enthalten:
    - Ein [Verweis auf ein verwandtes Issue](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) in deinem Repository.
    - Eine Beschreibung der Änderungen, die im Pull Request vorgeschlagen werden.
    - [@mentions](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) der Person oder des Teams, die bzw. das für die Überprüfung vorgeschlagener Änderungen verantwortlich ist.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} Vorlagen sind für Mitarbeiter verfügbar, wenn sie in den Standardbranch des Repositorys gemergt wurden.
{% data reusables.files.propose_new_file %}

## Weiterführende Themen

- [Informationen zu Vorlagen für Issues und Pull Requests](/articles/about-issue-and-pull-request-templates)
- [Informationen zur Automatisierung für Issues und Pull Requests mit Abfrageparametern](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)
- [Erstellen eines Pull Requests](/articles/creating-a-pull-request)
