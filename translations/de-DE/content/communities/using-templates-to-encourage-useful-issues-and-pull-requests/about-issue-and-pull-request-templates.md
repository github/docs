---
title: Informationen zu Vorlagen für Issues und Pull-Requests
intro: 'Mit den Vorlagen für Issues und Pull Requests kannst Du die Informationen anpassen und standardisieren, die Mitarbeiter beim Öffnen von Issues und Pull Requests in Deinem Repository einschließen sollen.'
redirect_from:
  - /articles/about-issue-and-pull-request-templates
  - /github/building-a-strong-community/about-issue-and-pull-request-templates
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Community
shortTitle: About templates
---

Nachdem Du in Deinem Repository Vorlagen für Issues und Pull Requests erstellt hast, können Mitarbeiter die Vorlagen verwenden, um Issues zu öffnen oder vorgeschlagene Änderungen in ihren Pull Requests gemäß den Beitragsrichtlinien des Repositorys zu beschreiben. Weitere Informationen zum Hinzufügen von Beitragsrichtlinien zu einem Repository findest Du unter „[Richtlinien für Repository-Mitarbeiter festlegen](/articles/setting-guidelines-for-repository-contributors).“

{% ifversion fpt or ghes %}

You can create default issue and pull request templates for your organization or user account. Weitere Informationen findest Du unter „[Eine Standard-Community-Unterstützungsdatei erstellen](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

## Vorlagen für Issues

When you create issue templates for your repository using the issue template builder{% ifversion fpt %} or with issue forms{% endif %}, contributors can select the appropriate template when they open new issues in the repository.

![„Neuer Issue"-Seite mit Auswahlmöglichkeiten für Issuevorlagen](/assets/images/help/issues/new-issue-page-with-multiple-templates.png)

Issue templates are helpful when you want to provide guidance for opening issues while allowing contributors to specify the content of their issues. {% ifversion fpt %} If you want contributors to provide specific, structured information when they open issues, issue forms help ensure that you receive your desired information.{% endif %}

Mit dem Vorlagengenerator kannst Du für jede Vorlage einen Titel und eine Beschreibung angeben, den Vorlageninhalt hinzufügen und einen Commit der Vorlage auf dem Standardbranch durchführen oder einen Pull Request im Repository öffnen. Der Vorlagengenerator fügt automatisch das YAML-Titelei-Markup hinzu, das erforderlich ist, damit die Vorlage auf der „Neuer Issue"-Seite angezeigt wird. Weitere Informationen findest Du unter „[Issuevorlagen für Dein Repository konfigurieren](/articles/configuring-issue-templates-for-your-repository).“

{% ifversion fpt %}
With issue forms, you can create templates that have web form fields using the {% data variables.product.prodname_dotcom %} form schema. When a contributor opens an issue using an issue form, the form inputs are converted to a standard markdown issue comment. You can specify different input types and set inputs as required to help contributors open actionable issues in your repository. For more information, see "[Configuring issue templates for your repository](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#creating-issue-forms)" and "[Syntax for issue forms](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)."
{% endif %}

{% ifversion fpt or ghae or ghes %}
{% data reusables.repositories.issue-template-config %} Weitere Informationen findest Du unter „[Issuevorlagen für Dein Repository konfigurieren](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser)."
{% endif %}

Issue-Vorlagen werden auf dem Standardbranch des Repositorys in einem verborgenen `.github/ISSUE_TEMPLATE`-Verzeichnis gespeichert. Wenn Sie eine Vorlage in einem anderen Branch erstellen, steht sie Mitarbeitern nicht zur Verfügung. Issue template filenames are not case sensitive, and need a *.md* extension.{% ifversion fpt %} Issue templates created with issue forms need a *.yml* extension.{% endif %} {% data reusables.repositories.valid-community-issues %}

Es ist möglich, manuell eine einzelne Issue-Vorlage in Markdown mit dem Workflow für ältere Issue-Vorlagen zu erstellen, wobei die Projektmitarbeiter automatisch den Inhalt der Vorlage im Issue-Text sehen. However, we recommend using the upgraded multiple issue template builder{% ifversion fpt %} or issue forms{% endif %} to create issue templates. Weitere Informationen zum veralteten Workflow finden Sie unter „[Eine einzelne Issue-Vorlage für Ihr Repository manuell erstellen](/articles/manually-creating-a-single-issue-template-for-your-repository)“.

{% data reusables.repositories.security-guidelines %}

## Vorlagen für Pull-Requests

Wenn Sie eine Pull-Request-Vorlage zu Ihrem Repository hinzufügen, sehen Projektmitarbeiter automatisch den Inhalt der Vorlage im Text des Pull Requests.

![Beispiel für eine Pull-Request-Vorlage](/assets/images/help/pull_requests/pr-template-sample.png)

Vorlagen müssen Sie auf dem Standardbranch des Repositorys erstellen. Vorlagen, die in anderen Branches erstellt wurden, stehen Mitarbeitern nicht zur Verfügung. Sie können Ihre Vorlage für Pull Requests im sichtbaren Stammverzeichnis des Repositorys, im Ordner `docs` oder im verborgenen Verzeichnis `.github` speichern. Bei den Dateinamen von Pull-Request-Vorlagen wird nicht zwischen Groß- und Kleinschreibung unterschieden, und es kann eine *.md*- oder *.txt*-Erweiterung angefügt werden.

Weitere Informationen finden Sie unter „[Eine Pull-Request-Vorlage für Ihr Repository erstellen](/articles/creating-a-pull-request-template-for-your-repository)“.
