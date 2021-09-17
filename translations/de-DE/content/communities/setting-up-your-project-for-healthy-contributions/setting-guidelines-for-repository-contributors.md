---
title: Richtlinien für Repository-Mitarbeiter festlegen
intro: 'Du kannst Richtlinien erstellen, wie Personen zu Deinem Projekt beitragen sollten.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors/
  - /articles/setting-guidelines-for-repository-contributors
  - /github/building-a-strong-community/setting-guidelines-for-repository-contributors
topics:
  - Community
---

### About contributing guidelines
Um die Beiträge Deiner Projektmitarbeiter zu optimieren, kannst Du ein Dokument mit Beitragsrichtlinien in das Stammverzeichnis, in das Verzeichnis `docs` oder in das Verzeichnis `.github` Deines Projekt-Repositorys hinzufügen. Bei der Eröffnung eines Pull-Requests oder der Erstellung eines Issues wird dem betreffenden Mitarbeiter dann ein Link zu dieser Datei angezeigt. The link to the contributing guidelines also appears on your repository's `contribute` page. For an example of a `contribute` page, see [github/docs/contribute](https://github.com/github/docs/contribute).

![Beitragsrichtlinien](/assets/images/help/pull_requests/contributing-guidelines.png)

Für den Repositoryinhaber stellen Beitragsrichtlinien eine Möglichkeit dar, Mitarbeitern die Regeln für Beiträge zu kommunizieren.

Mitarbeitern helfen die Richtlinien, korrekt formulierte Pull Requests einzureichen und sinnvolle Issues zu eröffnen.

Sowohl Inhaber als auch Mitarbeiter sparen dank Beitragsrichtlinien Zeit und Mühen, die durch fehlerhaft formulierte Pull Requests oder Issues entstehen, die abgelehnt und erneut eingereicht werden müssen.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

You can create default contribution guidelines for your organization{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} or user account{% endif %}. Weitere Informationen findest Du unter „[Eine Standard-Community-Unterstützungsdatei erstellen](//communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% endif %}

{% tip %}

**Tipp:** Repository-Betreuer können mit Vorlagen für Issues oder Pull Requests spezifische Richtlinien für ihr Repository einrichten. Weitere Informationen findest Du unter „[Informationen zu Vorlagen für Issues und Pull Requests](/articles/about-issue-and-pull-request-templates)“

{% endtip %}

### *CONTRIBUTING*-Datei hinzufügen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. Entscheide, ob die Beitragsrichtlinien im Stammverzeichnis, im Verzeichnis `docs` oder im Verzeichnis `.github` Deines Repositorys gespeichert werden sollen. Gib danach im Feld „Filename“ (Dateiname) den Namen und die Erweiterung der Datei ein. Contributing guidelines filenames are not case sensitive. Files are rendered in rich text format if the file extension is in a supported format. For more information, see "[Rendering differences in prose documents](/github/managing-files-in-a-repository/rendering-differences-in-prose-documents)." ![Neuer Dateiname](/assets/images/help/repository/new-file-name.png)
    - Wenn Deine Beitragsrichtlinien im Stammverzeichnis Deines Repositorys erscheinen sollen, gib *CONTRIBUTING* ein.
    - Wenn Deine Beitragsrichtlinien im Verzeichnis `docs` Deines Repositorys erscheinen sollen, gib zur Erstellung des neuen Verzeichnisses *docs/* ein und anschließend *CONTRIBUTING*.
    - If a repository contains more than one *CONTRIBUTING* file, then the file shown in links is chosen from locations in the following order: the `.github` directory, then the repository's root directory, and finally the `docs` directory.
4. Füge der neuen Datei Beitragsrichtlinien hinzu. Diese könnten beinhalten:
    - Schritte zur Erstellung korrekt formulierter Issues oder Pull Requests.
    - Links zu externer Dokumentation, zu Verteilerlisten oder zu einem Verhaltenskodex.
    - Erwartungen der Community und Verhaltensregeln
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Beispiele für Beitragsrichtlinien

Wenn Sie nun nicht wissen, was Sie hier festlegen sollen, finden Sie nachfolgend einige gute Beispiele für Beitragsrichtlinien:

- [Beitragsrichtlinien](https://github.com/atom/atom/blob/master/CONTRIBUTING.md) für den Editor Atom
- [Beitragsrichtlinien](https://github.com/rails/rails/blob/master/CONTRIBUTING.md) für Ruby on Rails
- [Beitragsrichtlinien](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md) des Open Government.

### Weiterführende Informationen
- The Open Source Guides' section "[Starting an Open Source Project](https://opensource.guide/starting-a-project/)"{% if currentVersion == "free-pro-team@latest" %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
- "[Adding a license to a repository](/articles/adding-a-license-to-a-repository)"{% endif %}
