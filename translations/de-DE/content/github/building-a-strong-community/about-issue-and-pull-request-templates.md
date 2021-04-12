---
title: Informationen zu Vorlagen für Issues und Pull-Requests
intro: 'Mit den Vorlagen für Issues und Pull Requests kannst Du die Informationen anpassen und standardisieren, die Mitarbeiter beim Öffnen von Issues und Pull Requests in Deinem Repository einschließen sollen.'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - community
---

Nachdem Du in Deinem Repository Vorlagen für Issues und Pull Requests erstellt hast, können Mitarbeiter die Vorlagen verwenden, um Issues zu öffnen oder vorgeschlagene Änderungen in ihren Pull Requests gemäß den Beitragsrichtlinien des Repositorys zu beschreiben. Weitere Informationen zum Hinzufügen von Beitragsrichtlinien zu einem Repository findest Du unter „[Richtlinien für Repository-Mitarbeiter festlegen](/articles/setting-guidelines-for-repository-contributors).“

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

You can create default issue and pull request templates for your organization or user account. Weitere Informationen findest Du unter „[Eine Standard Community-Unterstützungsdatei erstellen](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% endif %}

### Vorlagen für Issues

Wenn Du mit dem Issue-Vorlagengenerator neue Issuevorlagen für Dein Repository erstellst, stehen diese Mitarbeitern zur Verfügung, wenn sie neue Issues im Repository eröffnen.

![„Neuer Issue"-Seite mit Auswahlmöglichkeiten für Issuevorlagen](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

Mit dem Vorlagengenerator kannst Du für jede Vorlage einen Titel und eine Beschreibung angeben, den Vorlageninhalt hinzufügen und einen Commit der Vorlage auf dem Standardbranch durchführen oder einen Pull Request im Repository öffnen. Der Vorlagengenerator fügt automatisch das YAML-Titelei-Markup hinzu, das erforderlich ist, damit die Vorlage auf der „Neuer Issue"-Seite angezeigt wird. Weitere Informationen findest Du unter „[Issuevorlagen für Dein Repository konfigurieren](/articles/configuring-issue-templates-for-your-repository).“

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% data reusables.repositories.issue-template-config %} Weitere Informationen findest Du unter „[Issuevorlagen für Dein Repository konfigurieren](/github/building-a-strong-community/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)."
{% endif %}

Issue-Vorlagen werden auf dem Standardbranch des Repositorys in einem verborgenen `.github/ISSUE_TEMPLATE`-Verzeichnis gespeichert. Wenn Sie eine Vorlage in einem anderen Branch erstellen, steht sie Mitarbeitern nicht zur Verfügung. Bei den Dateinamen von Issuevorlagen wird nicht zwischen Groß- und Kleinschreibung unterschieden, und es wird eine *.md*-Erweiterung benötigt. {% data reusables.repositories.valid-community-issues %}

Es ist möglich, manuell eine einzelne Issue-Vorlage in Markdown mit dem Workflow für ältere Issue-Vorlagen zu erstellen, wobei die Projektmitarbeiter automatisch den Inhalt der Vorlage im Issue-Text sehen. Wir empfehlen jedoch, den aktualisierten Vorlagengenerator zum Erstellen mehrerer Issues zu verwenden, um Issue-Vorlagen zu erstellen. Weitere Informationen zum veralteten Workflow finden Sie unter „[Eine einzelne Issue-Vorlage für Ihr Repository manuell erstellen](/articles/manually-creating-a-single-issue-template-for-your-repository)“.

{% data reusables.repositories.security-guidelines %}

### Vorlagen für Pull-Requests

Wenn Sie eine Pull-Request-Vorlage zu Ihrem Repository hinzufügen, sehen Projektmitarbeiter automatisch den Inhalt der Vorlage im Text des Pull Requests.

![Beispiel für eine Pull-Request-Vorlage](/assets/images/help/pull_requests/pr-template-sample.png)

Vorlagen müssen Sie auf dem Standardbranch des Repositorys erstellen. Vorlagen, die in anderen Branches erstellt wurden, stehen Mitarbeitern nicht zur Verfügung. Sie können Ihre Vorlage für Pull Requests im sichtbaren Stammverzeichnis des Repositorys, im Ordner `docs` oder im verborgenen Verzeichnis `.github` speichern. Bei den Dateinamen von Pull-Request-Vorlagen wird nicht zwischen Groß- und Kleinschreibung unterschieden, und es kann eine *.md*- oder *.txt*-Erweiterung angefügt werden.

Weitere Informationen finden Sie unter „[Eine Pull-Request-Vorlage für Ihr Repository erstellen](/articles/creating-a-pull-request-template-for-your-repository)“.
