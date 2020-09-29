---
title: Ein Design mit dem Theme Chooser zu Deiner GitHub Pages-Website hinzufügen
intro: 'Du kannst zu Deiner {% data variables.product.prodname_pages %}-Website ein Design hinzufügen, um das Aussehen der Website anzupassen.'
redirect_from:
  - /articles/creating-a-github-pages-site-with-the-jekyll-theme-chooser/
  - /articles/adding-a-jekyll-theme-to-your-github-pages-site-with-the-jekyll-theme-chooser/
  - /articles/adding-a-theme-to-your-github-pages-site-with-the-theme-chooser
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
---

Personen mit Administratorberechtigungen für ein Repository können mit dem Theme Chooser ein Design zu einer {% data variables.product.prodname_pages %}-Website hinzufügen.

### Informationen zum Theme Chooser

Der Theme Chooser fügt ein Jekyll-Design zu Deinem Repository hinzu. Weitere Informationen zu Jekyll findest Du unter „[Informationen zu {% data variables.product.prodname_pages %} und Jekyll](/articles/about-github-pages-and-jekyll).“

Wie der Theme Chooser funktioniert, hängt davon ab, ob Dein Repository öffentlich oder privat ist.
  - Wenn {% data variables.product.prodname_pages %} bereits für Dein Repository aktiviert ist, fügt der Theme Chooser Dein Design zur aktuellen Veröffentlichungsquelle hinzu.
  - If your repository is public and {% data variables.product.prodname_pages %} is disabled for your repository, using the theme chooser will enable {% data variables.product.prodname_pages %} and configure the default branch as your publishing source.
  - Wenn Dein Repository privat und {% data variables.product.prodname_pages %} für Dein Repository deaktiviert ist, musst Du {% data variables.product.prodname_pages %} durch die Konfiguration einer Veröffentlichungsquelle erst aktivieren, bevor Du den Theme Chooser verwenden kannst.

Weitere Informationen zu Veröffentlichungsquellen finden Sie unter „[Informationen zu {% data variables.product.prodname_pages %}](/articles/about-github-pages#publishing-sources-for-github-pages-sites)“.

Wenn Du in der Vergangenheit manuell ein Jekyll-Design zu Deinem Repository hinzugefügt hast, werden diese Dateien möglicherweise auch nach der Verwendung des Theme Chooser noch angewendet. Um Konflikte zu vermeiden, solltest Du alle manuell hinzugefügten Design-Ordner und -Dateien entfernen, bevor Du den Theme Chooser verwendest. Weitere Informationen findest Du unter „[Ein Design zur {% data variables.product.prodname_pages %}-Website mit Jekyll hinzufügen](/articles/adding-a-theme-to-your-github-pages-site-using-jekyll).“

### Ein Design mit dem Theme Chooser hinzufügen

{% data reusables.pages.navigate-site-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Klicke unter „{% data variables.product.prodname_pages %}“ auf **Choose a theme** (Ein Design auswählen) oder **Change theme** (Design ändern). ![Schaltfläche „Choose a theme“ (Ein Design auswählen)](/assets/images/help/pages/choose-a-theme.png)
4. Klicke oben auf der Seite auf das gewünschte Design und anschließend auf **Select theme** (Design auswählen). ![Designoptionen und Schaltfläche „Select theme“ (Design auswählen)](/assets/images/help/pages/select-theme.png)
5. Möglicherweise wirst Du dazu aufgefordert, die *README.md*-Datei Deiner Website zu bearbeiten.
   - Um die Datei zu einem späteren Zeitpunkt zu bearbeiten, klicke auf **Cancel** (Abbrechen). ![Link „Cancel“ (Abbrechen) beim Bearbeiten einer Datei](/assets/images/help/pages/cancel-edit.png)
   - Wenn Du die Datei jetzt bearbeiten möchtest, findest Du Informationen hierzu unter „[Dateien in Deinem Repository bearbeiten](/articles/editing-files-in-your-repository/).“

Das ausgewählte Design wird automatisch auf Markdown-Dateien in Deinem Repository angewendet. Um Dein Design auf die HTML-Dateien in Deinem Repository anzuwenden, musst Du YAML-Frontmatter hinzufügen, um ein Layout für jede Datei festzulegen. Weitere Informationen findest Du unter „[Frontmatter](https://jekyllrb.com/docs/front-matter/)“ auf der Jekyll-Website.

### Weiterführende Informationen

- [Designs](https://jekyllrb.com/docs/themes/) auf der Jekyll-Website
