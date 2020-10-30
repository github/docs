---
title: Eine Pull-Request-Vorlage für Dein Repository erstellen
intro: 'Wenn Sie eine Pull-Request-Vorlage zu Ihrem Repository hinzufügen, sehen Projektmitarbeiter automatisch den Inhalt der Vorlage im Text des Pull Requests.'
redirect_from:
  - /articles/creating-a-pull-request-template-for-your-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Weitere Informationen findest Du unter „[Informationen zu Vorlagen für Issues und Pull Requests](/articles/about-issue-and-pull-request-templates)“

Du kannst in einem der unterstützten Ordner ein Unterverzeichnis *PULL_REQUEST_TEMPLATE* erstellen, um mehrere Pull-Request-Vorlagen zu speichern. Mit dem Abfrageparameter `template` kannst Du die Vorlage wählen, mit der der Pull-Request-Text ausgefüllt werden soll. Weitere Informationen findest Du unter „[Informationen zur Automatisierung für Issues und Pull Requests mit Abfrageparametern](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters).“

You can create default pull request templates for your organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}. Weitere Informationen findest Du unter „[Eine Standard Community-Unterstützungsdatei erstellen](/github/building-a-strong-community/creating-a-default-community-health-file)."

### Eine Pull-Request-Vorlage hinzufügen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Gib Folgendes im Feld für den Dateinamen ein:
    -  Um Deine Pull-Request-Vorlage im Root-Verzeichnis des Repositorys sichtbar zu machen, benenne diese Vorlage `pull_request_template.md`. ![Root-VerzeichnisName der neuen Pull-Request-Vorlage im Root-Verzeichnis](/assets/images/help/repository/pr-template-file-name.png)
    - Um Deine Pull-Request-Vorlage im `docs`-Verzeichnis des Repositorys sichtbar zu machen, benenne diese Vorlage `docs/pull_request_template.md`. ![Neue Pull-Request-Vorlage im docs-Verzeichnis](/assets/images/help/repository/pr-template-file-name-docs.png)
    - Um Deine Datei in einem versteckten Verzeichnis zu speichern, benenne die Pull-Request-Vorlage `.github/pull_request_template.md`. ![Neue Pull-Request-Vorlage im ausgeblendeten Verzeichnis](/assets/images/help/repository/pr-template-hidden-directory.png)
    - Um mehrere Pull-Request-Vorlagen zu erstellen und mithilfe des Abfrageparameters `template` eine Vorlage zum Ausfüllen des Pull-Request-Textes festzulegen, gib *.github/PULL_REQUEST_TEMPLATE/* ein, gefolgt vom Namen der Pull-Request-Vorlage. Beispiel: `.github/PULL_REQUEST_TEMPLATE/pull_request_template.md`. Du kannst auch mehrere Pull-Request-Vorlagen in einem Unterverzeichnis `PULL_REQUEST_TEMPLATE` innerhalb des Root-Verzeichnisses oder in `docs/`-Verzeichnissen speichern. Weitere Informationen findest Du unter „[Informationen zur Automatisierung für Issues und Pull Requests mit Abfrageparametern](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters).“ ![Neue Mehrfach-Pull-Request-Vorlage im ausgeblendeten Verzeichnis](/assets/images/help/repository/pr-template-multiple-hidden-directory.png)
4. Füge im Text der neuen Datei Deine Pull-Request-Vorlage hinzu. Sie könnte beispielsweise Folgendes enthalten:
    - Einen [Verweis auf einen ähnlichen Issue](/articles/basic-writing-and-formatting-syntax/#referencing-issues-and-pull-requests) in Deinem Repository.
    - Eine Beschreibung der Änderungen, die im Pull Request vorgeschlagen werden.
    - [@Erwähnung](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) der Person oder des Teams, die bzw. das für den Review der vorgeschlagenen Änderungen zuständig ist.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %} Vorlagen sind für Mitarbeiter verfügbar, wenn sie in den Standardbranch des Repositorys zusammengeführt wurden.
{% data reusables.files.propose_new_file %}

### Weiterführende Informationen

- „[Informationen zu Vorlagen für Issues und Pull-Requests](/articles/about-issue-and-pull-request-templates)“
- „[Informationen zur Automatisierung für Issues und Pull-Requests mit Abfrageparametern](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)“
- „[Einen Pull Request erstellen](/articles/creating-a-pull-request)“
