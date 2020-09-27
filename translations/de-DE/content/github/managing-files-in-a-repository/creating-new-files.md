---
title: Neue Dateien erstellen
intro: 'Du kannst neue Dateien direkt auf {{ site.data.variables.product.product_name }} in jedem Repository erstellen, auf das Du Schreibzugriff hast.'
redirect_from:
  - /articles/creating-new-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Wenn Du eine Datei auf {{ site.data.variables.product.product_name }} erstellst, beachte Folgendes:

- Wenn Du versuchst, eine neue Datei in einem Repository zu erstellen, auf das Du keinen Zugriff hast, erstellen wir einen Fork des Projekts unter Deinem Benutzerkonto und helfen Dir nach dem Commit Deiner Änderung, einen [Pull Request](/articles/about-pull-requests) an das ursprüngliche Repository zu senden.
- Dateinamen, die in der Weboberfläche erstellt werden, dürfen nur alphanumerische Zeichen und Bindestriche (`-`) enthalten. Um andere Zeichen zu verwenden, [erstelle die Dateien lokal, gib sie mit Commit frei und übertrage sie mit Push zum Repository auf {{ site.data.variables.product.product_name }}](/articles/adding-a-file-to-a-repository-using-the-command-line).

{{ site.data.reusables.repositories.sensitive-info-warning }}

{{ site.data.reusables.repositories.navigate-to-repo }}
2. Navigiere in Deinem Repository zu dem Ordner, in dem Du eine Datei erstellen möchtest.
{{ site.data.reusables.files.add-file }}
4. Gib im Feld für den Dateinamen den Namen und die Erweiterung für die Datei ein. Um Unterverzeichnisse zu erstellen, gib das Verzeichnis-Trennzeichen `/` ein. ![Neuer Dateiname](/assets/images/help/repository/new-file-name.png)
5. Füge auf der Registerkarte **Edit new file** (Neue Datei bearbeiten) die Inhalte für die Datei hinzu. ![Inhalt in neuer Datei](/assets/images/help/repository/new-file-content.png)
6. Um den neuen Inhalt zu überprüfen, klicke auf **Preview** (Vorschau). ![Schaltfläche „New file preview" (Vorschau der neuen Datei)](/assets/images/help/repository/new-file-preview.png)
{{ site.data.reusables.files.write_commit_message }}
{{ site.data.reusables.files.choose-commit-email }}
{{ site.data.reusables.files.choose_commit_branch }}
{{ site.data.reusables.files.propose_new_file }}

### Weiterführende Informationen

- „[Eine Datei zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository)“
- „[Eine Datei über die Befehlszeile zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository-using-the-command-line)“
