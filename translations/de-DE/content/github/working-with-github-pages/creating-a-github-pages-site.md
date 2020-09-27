---
title: Creating a GitHub Pages site
intro: 'Du kannst eine {{ site.data.variables.product.prodname_pages }}-Website in einem neuen oder vorhandenen Repository erstellen.'
redirect_from:
  - /articles/creating-project-pages-using-the-command-line/
  - /articles/creating-a-github-pages-site
product: '{{ site.data.reusables.gated-features.pages }}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Ein Repository für eine Website erstellen

{{ site.data.reusables.pages.new-or-existing-repo }}

{{ site.data.reusables.pages.private_pages_are_public_warning }}

{{ site.data.reusables.repositories.create_new }}
{{ site.data.reusables.repositories.owner-drop-down }}
{{ site.data.reusables.pages.create-repo-name }}
{{ site.data.reusables.repositories.choose-repo-visibility }}
{{ site.data.reusables.repositories.initialize-with-readme }}
{{ site.data.reusables.repositories.create-repo }}

### Eine Website erstellen

{{ site.data.reusables.pages.must-have-repo-first }}

{{ site.data.reusables.pages.navigate-site-repo }}
{{ site.data.reusables.pages.decide-publishing-source }}
3. Wenn Deine ausgewählte Veröffentlichungsquelle bereits vorhanden ist, navigiere zu dieser Quelle. Wenn Deine ausgewählte Veröffentlichungsquelle nicht vorhanden ist, erstelle die Veröffentlichungsquelle.
4. Erstelle im Root der Veröffentlichungsquelle eine neue Datei mit dem Namen `index.md`, die den Inhalt enthält, der auf der Hauptseite Deiner Website angezeigt werden soll.
{{ site.data.reusables.pages.configure-publishing-source }}
{{ site.data.reusables.repositories.sidebar-settings }}
{{ site.data.reusables.pages.visit-site }}

{{ site.data.reusables.pages.admin-must-push }}

### Nächste Schritte:

Du kannst Deiner Website weitere Seiten hinzufügen, indem Du zusätzliche neue Dateien erstellst. Jede Datei wird auf Deiner Website im selben Verzeichnis verfügbar sein wie Deine Veröffentlichungsquelle. Wenn beispielsweise die Veröffentlichungsquelle für Deine Projekt-Website der Branch `gh-pages` ist und Du eine neue Datei mit dem Namen `/about/contact-us.md` auf dem Branch `gh-pages` erstellst, ist die Datei unter {% if currentVersion == "free-pro-team@latest" %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.md` verfügbar.

Du kannst auch ein Design hinzufügen, um das Aussehen der Website anzupassen. Weitere Informationen findest Du unter {% if currentVersion == "free-pro-team@latest" %}„[Ein Design mit dem Theme Chooser zu Deiner {{ site.data.variables.product.prodname_pages }}-Website hinzufügen](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}„[Ein Design zu Deiner {{ site.data.variables.product.prodname_pages }}-Website mit Jekyll hinzufügen](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}.“

Um Deine Website noch weiter anzupassen, kannst Du Jekyll verwenden, einen Generator für statische Websites mit integrierter Unterstützung von {{ site.data.variables.product.prodname_pages }}. Weitere Informationen findest Du unter „[Informationen zu {{ site.data.variables.product.prodname_pages }} und Jekyll](/articles/about-github-pages-and-jekyll).“

### Weiterführende Informationen

- „[Jekyll-Build-Fehler für {{ site.data.variables.product.prodname_pages }}-Websites beheben](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)“
- „[Branches in Ihrem Repository erstellen und löschen](/articles/creating-and-deleting-branches-within-your-repository)“
- „[Neue Dateien erstellen](/articles/creating-new-files)“
