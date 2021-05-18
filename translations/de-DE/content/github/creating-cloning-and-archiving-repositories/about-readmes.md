---
title: Informationen zu README-Dateien
intro: 'Du kannst eine README-Datei zu Deinem Repository hinzufügen, um anderen Personen mitzuteilen, warum Dein Projekt nützlich ist, was sie mit Deinem Projekt machen können und wie sie es nutzen können.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages/
  - /articles/relative-links-in-readmes/
  - /articles/about-readmes
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### Informationen zu README-Dateien

You can add a README file to a repository to communicate important information about your project. A README, along with a repository license{% if currentVersion == "free-pro-team@latest" %}, contribution guidelines, and a code of conduct{% elsif enterpriseServerVersions contains currentVersion %} and contribution guidelines{% endif %}, communicates expectations for your project and helps you manage contributions.

For more information about providing guidelines for your project, see {% if currentVersion == "free-pro-team@latest" %}"[Adding a code of conduct to your project](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" and {% endif %}"[Setting up your project for healthy contributions](/communities/setting-up-your-project-for-healthy-contributions)."

Die README-Datei ist oft das erste Element, das ein Benutzer beim Besuch Deines Repositorys sieht. README-Dateien enthalten in der Regel folgende Informationen:
- Was ist die Aufgabe des Projekts?
- Warum ist das Projekt sinnvoll?
- Wie können Benutzer am Projekt mitwirken?
- Wo erhalten Benutzer Hilfe zu Ihrem Projekt?
- Wer verwaltet das Projekt und trägt dazu bei?

Wenn Sie Ihre README-Datei im Stammverzeichnis, im Ordner `docs` oder im verborgenen Verzeichnis `.github` Ihres Repositorys ablegen, erkennt {% data variables.product.product_name %} Ihre README-Datei und stellt sie automatisch den Besuchern des Repositorys zur Verfügung.

![Hauptseite des github/scientist-Repositorys und seiner README-Datei](/assets/images/help/repository/repo-with-readme.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21"%}

{% data reusables.profile.profile-readme %}

{% endif %}

![README file on your username/username repository](/assets/images/help/repository/username-repo-with-readme.png)

{% endif %}

### Auto-generated table of contents for README files

For the rendered view of any Markdown file in a repository, including README files, {% data variables.product.product_name %} will automatically generate a table of contents based on section headings. You can view the table of contents for a README file by clicking the {% octicon "list-unordered" aria-label="The unordered list icon" %}  menu icon at the top left of the rendered page.

![README with automatically generated TOC](/assets/images/help/repository/readme-automatic-toc.png)

The auto-generated table of contents is enabled by default for all Markdown files in a repository, but you can disable this feature for your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. Under "Features", deselect **Table of contents**. ![Automatic TOC setting for repositories](/assets/images/help/repository/readme-automatic-toc-setting.png)

### Links zu Abschnitten in README-Dateien und auf Blob-Seiten

{% data reusables.repositories.section-links %}

### Relative Links und Bildpfade in README-Dateien

{% data reusables.repositories.relative-links %}

### Weiterführende Informationen

- „[Eine Datei zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository)“
- „[README's lesbar machen](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)“ von 18F
