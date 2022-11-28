---
title: Issuevorlagen für Dein Repository konfigurieren
intro: 'Du kannst die Vorlagen anpassen, die für Mitarbeiter zur Verfügung stehen, wenn sie neue Issues in Deinem Repository eröffnen.'
redirect_from:
  - /github/building-a-strong-community/creating-issue-templates-for-your-repository
  - /articles/configuring-issue-templates-for-your-repository
  - /github/building-a-strong-community/configuring-issue-templates-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Configure
ms.openlocfilehash: d415d95f8aeab1b053663437b6dbf6dd637e3039
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147431992'
---
{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Issuevorlagen erstellen

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Klicke im Abschnitt „Features“ unter „Issues“ auf **Vorlagen einrichten**.
![Schaltfläche zum Starten der Vorlageneinrichtung](/assets/images/help/repository/set-up-templates.png)
4. Klicke im Dropdownmenü „Add template“ (Vorlage hinzufügen) auf den gewünschten Vorlagentyp, den Du erstellen möchtest.
![Dropdownmenü „Vorlage hinzufügen“](/assets/images/help/repository/add-template-drop-down-menu.png)
5. Um eine Vorschau der Vorlage anzuzeigen oder die Vorlage zu bearbeiten, bevor du sie an das Repository committest, klicke auf **Vorschau anzeigen und bearbeiten**.
![Schaltfläche „Vorschau anzeigen und bearbeiten“](/assets/images/help/repository/preview-and-edit-button.png)
6. Um die Vorlage zu bearbeiten, klicke auf {% octicon "pencil" aria-label="The edit icon" %}, und ändere die Inhalte der Felder.
![Schaltfläche „Issuevorlage bearbeiten“](/assets/images/help/repository/issue-template-edit-button.png)
7. Um automatisch einen standardmäßigen Issuetitel einzurichten, weise den Issue an Benutzern mit Lesezugriff auf das Repository zu. Du kannst auch Kennzeichnungen zur Issuevorlage hinzufügen und diese Details unter „Optional additional Information“ (Optionale zusätzliche Informationen) eingeben. Du kannst diese Details auch in der Issuevorlage mit `title`, `labels` oder `assignees` in einem YAML-Frontmatterformat hinzufügen.
![Zusätzliche Informationen zu Issuevorlagen](/assets/images/help/repository/additional-issue-template-info.png)
8. Wenn du mit der Vorschau und Bearbeitung der Vorlage fertig bist, klicke in der oberen rechten Ecke der Seite auf **Änderungen vorschlagen**.
![Schaltfläche „Änderungen vorschlagen“](/assets/images/help/repository/propose-changes-button.png)
9. Gib eine Commit-Mitteilung ein, in der Du Deine Änderungen beschreibst.
![Feld „Commit-Mitteilung für Issuevorlage“](/assets/images/help/repository/issue-template-commit-message-field.png)
10. Lege unterhalb der Commit-Mitteilungsfelder fest, ob Du Deine Vorlage direkt an den Standardbranch freigeben oder einen neuen Branch erstellen und einen Pull Request öffnen möchtest. Weitere Informationen zu Pull Requests findest du unter [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).
![Auswahl zwischen Commit der Issuevorlage an Mainbranch oder Öffnen eines Pull Requests](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. Klicke auf **Änderungen committen**. Sobald diese Änderungen in den Standardbranch zusammengeführt wurden, steht die Vorlage für Mitarbeiter zur Verfügung, wenn sie neue Issues im Repository erstellen.

{% ifversion fpt or ghec %}

## Erstellen von Issueformularen

{% data reusables.community.issue-forms-beta %}

Mit Issueformularen kannst du Problemvorlagen erstellen, die anpassbare Webformularfelder enthalten. Du kannst Mitwirkende ermutigen, bestimmte, strukturierte Informationen aufzunehmen, indem du Issueformulare in deinem Repository verwendest. Issueformulare werden mithilfe des {% data variables.product.prodname_dotcom %}-Formularschemas in YAML geschrieben. Weitere Informationen findest du unter [Syntax für das Formularschema von {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema). {% data reusables.actions.learn-more-about-yaml %}

Um ein Issueformular in deinem Repository zu verwenden, musst du eine neue Datei erstellen und dem Ordner `.github/ISSUE_TEMPLATE` im Repository hinzufügen.

Hier siehst du ein Beispiel für eine Konfigurationsdatei für Issueformulare:

{% data reusables.community.issue-forms-sample %}

Hier siehst du die gerenderte Version des Issueformulars:
  ![Gerendertes Issueformular](/assets/images/help/repository/sample-issue-form.png)

1. Wähle ein Repository aus, in dem du ein Issueformular erstellen möchtest. Du kannst ein vorhandenes Repository verwenden, auf das du Schreibzugriff hast, oder du kannst ein neues Repository erstellen. Weitere Informationen zum Erstellen eines Repositorys findest du unter [Erstellen eines neuen Repositorys](/articles/creating-a-new-repository).
2. Erstelle in deinem Repository eine Datei namens `.github/ISSUE_TEMPLATE/FORM-NAME.yml`. Ersetze dabei `FORM-NAME` durch den Namen für dein Issueformular. Weitere Informationen zum Erstellen neuer Dateien auf GitHub findest du unter [Erstellen neuer Dateien](/github/managing-files-in-a-repository/creating-new-files).
3. Gib im Textfeld der neuen Datei den Inhalt deines Issueformulars ein. Weitere Informationen findest du unter [Syntax für Issueformulare](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms).
4. Committe deine Workflowdatei in den Standardbranch deines Repositorys. Weitere Informationen findest du unter [Erstellen neuer Dateien](/github/managing-files-in-a-repository/creating-new-files).

{% endif %}

## Konfigurieren der Vorlagenauswahl

{% data reusables.repositories.issue-template-config %}

Du kannst Mitwirkende ermutigen, Issuevorlagen zu verwenden, indem du `blank_issues_enabled` auf `false` festlegst. Wenn du `blank_issues_enabled` auf `true` festlegst, haben Personen die Möglichkeit, ein leeres Issue zu öffnen.

{% note %}

**Hinweis:** Wenn du den Legacyworkflow zum manuellen Erstellen einer Datei vom Typ `issue_template.md` im Ordner `.github` und Aktivieren von leeren Issues in der Datei *config.yml* verwendet hast, wird die Vorlage in `issue_template.md` verwendet, wenn Personen ein leeres Issue öffnen möchten. Wenn Du leere Issues deaktivierst, wird diese Vorlage nie verwendet.

{% endnote %}

Wenn Du bestimmte Berichte außerhalb von {% data variables.product.product_name %} erhalten möchtest, kannst Du Personen mit `contact_links` auf externe Websites leiten.

Hier ist ein Beispiel für eine Datei vom Typ *config.yml*.

```yaml{:copy}
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.com/orgs/community/discussions
    about: Please ask and answer questions here.
  - name: {% data variables.product.prodname_dotcom %} Security Bug Bounty
    url: https://bounty.github.com/
    about: Please report security vulnerabilities here.
```

Deine Konfigurationsdatei wird die Vorlagenauswahl anpassen, wenn die Datei in den Standardbranch des Repository zusammengeführt wird.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Gib in das Feld für den Dateinamen `.github/ISSUE_TEMPLATE/config.yml` ein.
  ![Konfigurationsdateiname](/assets/images/help/repository/template-config-file-name.png)
4. Gib im Textfeld der neuen Datei den Inhalt Deiner Konfigurationsdatei ein.
  ![Inhalt der Konfigurationsdatei](/assets/images/help/repository/template-config-file-content.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Weiterführende Themen

- [Informationen zu Vorlagen für Issues und Pull Requests](/articles/about-issue-and-pull-request-templates)
- [Manuelles Erstellen einer einzelnen Issuevorlage für dein Repository](/articles/manually-creating-a-single-issue-template-for-your-repository)
