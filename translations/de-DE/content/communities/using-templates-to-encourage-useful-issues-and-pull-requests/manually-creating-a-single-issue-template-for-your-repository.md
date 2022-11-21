---
title: Manuelles Erstellen einer einzelnen Issuevorlage für dein Repository
intro: 'Wenn du eine manuell erstellte Issuevorlage zu deinem Repository hinzufügst, sehen Projektmitwirkende automatisch den Inhalt der Vorlage im Text des Issues.'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create an issue template
ms.openlocfilehash: 0d10da9cc3be128744a7b0465c016d1c6346b6f3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090180'
---
{% data reusables.repositories.legacy-issue-template-tip %}

Du kannst in jedem beliebigen unterstützten Ordner ein Unterverzeichnis namens *ISSUE_TEMPLATE* erstellen, um mehrere Issuevorlagen zu speichern. Mit dem Abfrageparameter `template` kannst du die Vorlage angeben, mit der der Issuetext ausgefüllt werden soll. Weitere Informationen findest du unter [Informationen zur Automatisierung für Issues und Pull Requests mit Abfrageparametern](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters).

Du kannst YAML-Titelei zu jeder Issuevorlage hinzufügen, um den Issuetitel vorab auszufüllen, automatisch Kennzeichnungen und Bearbeiter hinzuzufügen und der Vorlage einen Namen und eine Beschreibung zu geben, die in der Vorlagenauswahl angezeigt wird, die Personen bei Erstellen von neuen Issues in deinem Repository sehen.

Hier ist ein Beispiel für eine YAML-Titelei.

```yaml
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

**Hinweis**: Wenn ein Titeleiwert ein in YAML reserviertes Zeichen wie z. B. `:` enthält, musst du den gesamten Wert in Anführungszeichen setzen. Zum Beispiel: `":bug: Bug"` oder `":new: triage needed, :bug: bug"`.

{% endnote %}

{% ifversion fpt or ghec %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Eine Issuevorlage hinzufügen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Gib Folgendes im Feld für den Dateinamen ein:
    -  Wenn die Issuevorlage im Stammverzeichnis des Repositorys sichtbar sein soll, gib den Namen deiner *issue_template* ein. Beispiel: `issue_template.md`.
  ![Name der neuen Issuevorlage im Stammverzeichnis](/assets/images/help/repository/issue-template-file-name.png)
    - Wenn die Issuevorlage im `docs`-Verzeichnis des Repositorys sichtbar sein soll, gib *docs/* gefolgt vom Namen deiner *issue_template* ein. Beispiel: `docs/issue_template.md`, ![Neue Issuevorlage im docs-Verzeichnis](/assets/images/help/repository/issue-template-file-name-docs.png)
    - Um deine Datei in einem ausgeblendeten Verzeichnis zu speichern, gib *.github/* gefolgt vom Namen der *issue_template* ein. Beispiel: `.github/issue_template.md`.
  ![Neue Issuevorlage in ausgeblendetem Verzeichnis](/assets/images/help/repository/issue-template-hidden-directory.png)
    - Um mehrere Issuevorlagen zu erstellen und mithilfe des Abfrageparameters `template` eine Vorlage zum Ausfüllen des Issuetexts anzugeben, gib *.github/ISSUE_TEMPLATE/* gefolgt vom Namen der Issuevorlage ein. Beispiel: `.github/ISSUE_TEMPLATE/issue_template.md`. Du kannst auch mehrere Issuevorlagen in einem `ISSUE_TEMPLATE`-Unterverzeichnis innerhalb des Stammverzeichnisses oder des `docs/`-Verzeichnisses speichern. Weitere Informationen findest du unter [Informationen zur Automatisierung für Issues und Pull Requests mit Abfrageparametern](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters).
  ![Mehrere neue Issuevorlagen in ausgeblendetem Verzeichnis](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. Füge im Text der neuen Datei deine Issuevorlage hinzu. Sie könnte Folgendes enthalten:
    - YAML-Titelei
    - Erwartetes und tatsächliches Verhalten
    - Schritte zum Reproduzieren des Problems
    - Spezifikationen wie die Version des Projekts, des Betriebssystems oder der Hardware {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} Vorlagen sind für Mitarbeiter beim Mergen in den Standardbranch des Repositorys verfügbar.
{% data reusables.files.propose_new_file %}

## Weiterführende Themen

- [Informationen zu Vorlagen für Issues und Pull Requests](/articles/about-issue-and-pull-request-templates)
- [Konfigurieren von Issuevorlagen für dein Repository](/articles/configuring-issue-templates-for-your-repository)
- [Informationen zur Automatisierung für Issues und Pull Requests mit Abfrageparametern](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)
- [Erstellen eines Issues](/articles/creating-an-issue)
