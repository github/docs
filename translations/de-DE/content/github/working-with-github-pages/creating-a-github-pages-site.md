---
title: Creating a GitHub Pages site
intro: 'Sie können eine {% data variables.product.prodname_pages %}-Website in einem neuen oder vorhandenen Repository erstellen.'
redirect_from:
  - /articles/creating-pages-manually/
  - /articles/creating-project-pages-manually/
  - /articles/creating-project-pages-from-the-command-line/
  - /articles/creating-project-pages-using-the-command-line/
  - /articles/creating-a-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% data reusables.pages.org-owners-can-restrict-pages-creation %}

### Ein Repository für eine Website erstellen

{% data reusables.pages.new-or-existing-repo %}

{% data reusables.repositories.create_new %}
{% data reusables.repositories.owner-drop-down %}
{% data reusables.pages.create-repo-name %}
{% data reusables.repositories.choose-repo-visibility %}
{% data reusables.repositories.initialize-with-readme %}
{% data reusables.repositories.create-repo %}

### Eine Website erstellen

{% data reusables.pages.must-have-repo-first %}

{% data reusables.pages.private_pages_are_public_warning %}

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.decide-publishing-source %}
3. Wenn Deine ausgewählte Veröffentlichungsquelle bereits vorhanden ist, navigiere zu dieser Quelle. Wenn Deine ausgewählte Veröffentlichungsquelle nicht vorhanden ist, erstelle die Veröffentlichungsquelle.
4. Erstelle im Root der Veröffentlichungsquelle eine neue Datei mit dem Namen `index.md`, die den Inhalt enthält, der auf der Hauptseite Deiner Website angezeigt werden soll.
{% data reusables.pages.configure-publishing-source %}
{% data reusables.repositories.sidebar-settings %}{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.pages.choose-visibility %}{% endif %}
{% data reusables.pages.visit-site %}

{% data reusables.pages.admin-must-push %}

### Nächste Schritte:

Du kannst Deiner Website weitere Seiten hinzufügen, indem Du zusätzliche neue Dateien erstellst. Jede Datei wird auf Deiner Website im selben Verzeichnis verfügbar sein wie Deine Veröffentlichungsquelle. For example, if the publishing source for your project site is the `gh-pages` branch, and you create a new file called `/about/contact-us.md` on the `gh-pages` branch, the file will be available at {% if currentVersion == "free-pro-team@latest" %}`https://<user>.github.io/<repository>/{% else %}`http(s)://<hostname>/pages/<username>/<repository>/{% endif %}about/contact-us.html` verfügbar.

Du kannst auch ein Design hinzufügen, um das Aussehen der Website anzupassen. For more information, see {% if currentVersion == "free-pro-team@latest" %}"[Adding a theme to your {% data variables.product.prodname_pages %} site with the theme chooser](/articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser){% else %}"[Adding a theme to your {% data variables.product.prodname_pages %} site using Jekyll](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll){% endif %}."

Um Ihre Website noch weiter anzupassen, können Sie Jekyll verwenden, einen Generator für statische Websites mit integrierter Unterstützung von {% data variables.product.prodname_pages %}. Weitere Informationen finden Sie unter „[Informationen zu {% data variables.product.prodname_pages %} und Jekyll](/articles/about-github-pages-and-jekyll)“.

### Weiterführende Informationen

- „[Jekyll-Build-Fehler für {% data variables.product.prodname_pages %}-Websites beheben](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)“
- „[Branches in Ihrem Repository erstellen und löschen](/articles/creating-and-deleting-branches-within-your-repository)“
- „[Neue Dateien erstellen](/articles/creating-new-files)“
