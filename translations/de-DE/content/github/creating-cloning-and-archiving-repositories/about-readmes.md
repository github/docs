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
---

Eine README-Datei zusammen mit {% if currentVersion == "free-pro-team@latest" %}einer [Repository-Lizenz](/articles/licensing-a-repository), [Beitragsrichtlinien](/articles/setting-guidelines-for-repository-contributors) und einem [Verhaltenskodex](/articles/adding-a-code-of-conduct-to-your-project){% else %}einer [Repository-Lizenz](/articles/licensing-a-repository) und [Beitragsrichtlinien](/articles/setting-guidelines-for-repository-contributors){% endif %} hilft Dir, die Erwartungen an Dein Projekt zu kommunizieren und die Beiträge zu Deinem Projekt zu verwalten.

Die README-Datei ist oft das erste Element, das ein Benutzer beim Besuch Deines Repositorys sieht. README-Dateien enthalten in der Regel folgende Informationen:
- Was ist die Aufgabe des Projekts?
- Warum ist das Projekt sinnvoll?
- Wie können Benutzer am Projekt mitwirken?
- Wo erhalten Benutzer Hilfe zu Ihrem Projekt?
- Wer verwaltet das Projekt und trägt dazu bei?

Wenn Du Deine README-Datei im root-, `docs`- oder im verborgenen `.github`-Verzeichnis Deines Repositorys ablegst, erkennt {% data variables.product.product_name %} Deine README-Datei und stellt sie automatisch den Besuchern des Repositorys zur Verfügung.

![Hauptseite des github/scientist-Repositorys und seiner README-Datei](/assets/images/help/repository/repo-with-readme.png)

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% data reusables.profile.profile-readme %}

![README file on your username/username repository](/assets/images/help/repository/username-repo-with-readme.png)

{% endif %}

### Links zu Abschnitten in README-Dateien und auf Blob-Seiten

Bei vielen Projekten gibt es zu Beginn einer README-Datei ein Inhaltsverzeichnis, mit dem Benutzer zu verschiedenen Abschnitten der Datei navigieren können. {% data reusables.repositories.section-links %}

### Relative Links und Bildpfade in README-Dateien

{% data reusables.repositories.relative-links %}

### Weiterführende Informationen

- „[Eine Datei zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository)“
- „[README's lesbar machen](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)“ von 18F
