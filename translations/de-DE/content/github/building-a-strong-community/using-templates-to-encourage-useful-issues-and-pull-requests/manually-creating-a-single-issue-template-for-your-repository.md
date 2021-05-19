---
title: Eine einzelne Issue-Vorlage für Dein Repository manuell erstellen
intro: 'Wenn Du eine manuell erstellte Issuevorlage zu Deinem Repository hinzufügst, sehen Projektmitarbeiter automatisch den Inhalt der Vorlage im Text des Issues.'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository/
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - community
---
{% data reusables.repositories.legacy-issue-template-tip %}

Du kannst in einem der unterstützten Ordner ein Unterverzeichnis *ISSUE_TEMPLATE* erstellen, um mehrere Issuevorlagen zu speichern. Mit dem Abfrageparameter `template` kannst Du die Vorlage festlegen, mit der der Issue-Text ausgefüllt werden soll. Weitere Informationen findest Du unter „[Informationen zur Automatisierung für Issues und Pull Requests mit Abfrageparametern](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters).“

Du kannst YAML-Titelei zu jeder Issuevorlage hinzufügen, um den Issuetitel vorab auszufüllen, automatisch Kennzeichnungen und Bearbeiter hinzuzufügen und der Vorlage einen Namen und eine Beschreibung zu geben, die in der Vorlagenauswahl angezeigt wird, die Personen bei Erstellen von neuen Issues in Deinem Repository sehen.

Hier ist ein Beispiel für eine YAML-Titelei.

```yaml
---
name: Issue verfolgen
about: Benutzer diese Vorlage zum verfolgen neuer Funktionen.
title: "[DATE]: [FEATURE NAME]"
labels: Issue verfolgen, benötigt Bewertung
assignees: octocat
---
```
{% note %}

**Note:** If a front matter value includes a YAML-reserved character such as `:` , you must put the whole value in quotes. For example, `":bug: Bug"` or `":new: triage needed, :bug: bug"`.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

### Eine Issuevorlage hinzufügen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Gib Folgendes im Feld für den Dateinamen ein:
    -  Wenn die Issuevorlage im Stammverzeichnis des Repositorys sichtbar sein soll, gib den Namen Deiner *issue_template* ein. Beispiel: `issue_template.md`. ![Name der neuen Issuevorlage im Root-Verzeichnis](/assets/images/help/repository/issue-template-file-name.png)
    - Wenn die Issuevorlage im `docs`-Verzeichnis des Repositorys sichtbar sein soll, gib *docs/* ein, gefolgt vom Namen der *issue_template*. Beispiel: `docs/issue_template.md`, ![Neue Issuevorlage im docs-Verzeichnis](/assets/images/help/repository/issue-template-file-name-docs.png)
    - Um Deine Datei in einem ausgeblendeten Verzeichnis zu speichern, gib *.github* ein, gefolgt vom Namen der *issue_template*. Beispiel: `.github/issue_template.md`. ![Neue Issuevorlage in ausgeblendetem Verzeichnis](/assets/images/help/repository/issue-template-hidden-directory.png)
    - Um mehrere Issuevorlagen zu erstellen und mithilfe des Abfrageparameters `template` eine Vorlage zum Ausfüllen des Issue-Texts festzulegen, gib *.github/ISSUE_TEMPLATE/* ein, gefolgt vom Namen der Issuevorlage. Beispiel: `.github/ISSUE_TEMPLATE/issue_template.md`. Du kannst auch mehrere Issuevorlagen in einem Unterverzeichnis `ISSUE_TEMPLATE` innerhalb des Stammverzeichnisses oder in `docs/`-Verzeichnissen speichern. Weitere Informationen findest Du unter „[Informationen zur Automatisierung für Issues und Pull Requests mit Abfrageparametern](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters).“ ![Neue Mehrfach-Issue-Vorlage im ausgeblendeten Verzeichnis](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. Füge im Text der neuen Datei Deine Issuevorlage hinzu. Sie könnte beispielsweise Folgendes enthalten:
    - YAML-Titelei
    - Erwartetes und tatsächliches Verhalten
    - Schritte zum Reproduzieren des Problems
    - Spezifikationen wie die Version des Projektes, das Betriebssystem oder die Hardware
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} Vorlagen sind für Mitarbeiter verfügbar, wenn sie in den Standardbranch des Repositorys zusammengeführt wurden.
{% data reusables.files.propose_new_file %}

### Weiterführende Informationen

- „[Informationen zu Vorlagen für Issues und Pull-Requests](/articles/about-issue-and-pull-request-templates)“
- „[Issuevorlagen für Dein Repository konfigurieren](/articles/configuring-issue-templates-for-your-repository)"
- „[Informationen zur Automatisierung für Issues und Pull-Requests mit Abfrageparametern](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)“
- „[Einen Issue erstellen](/articles/creating-an-issue)“
