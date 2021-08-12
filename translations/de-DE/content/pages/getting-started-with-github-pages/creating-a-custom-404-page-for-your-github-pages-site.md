---
title: Eine benutzerdefinierte 404-Seite für Deine GitHub Pages-Website erstellen
intro: 'Du kannst eine benutzerdefinierte 404-Fehler-Seite anzeigen lassen, wenn Benutzer versuchen, nicht vorhandene Seiten auf Deiner Website aufzurufen.'
redirect_from:
  - /articles/custom-404-pages/
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
  - /github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Pages
---

{% data reusables.pages.navigate-site-repo %}
{% data reusables.pages.navigate-publishing-source %}
{% data reusables.files.add-file %}
3. Gib im Feld für den Dateinamen `404.html` oder `404.md` ein. ![Feld für den Dateinamen](/assets/images/help/pages/404-file-name.png)
4. Wenn Du die Datei `404.md` genannt hast, füge den folgenden YAML-Frontmatter am Anfang der Datei hinzu:
  ```yaml
  ---
  permalink: /404.html
  ---
  ```
5. Füge unter dem YAML-Frontmatter, so vorhanden, den Inhalt ein, der auf Deiner 404-Seite angezeigt werden soll.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Weiterführende Informationen

- [Front matter](http://jekyllrb.com/docs/frontmatter) (Frontmatter) in der Jekyll-Dokumentation
