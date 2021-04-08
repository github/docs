---
title: Neue Dateien erstellen
intro: 'Sie können neue Dateien direkt auf {% data variables.product.product_name %} in jedem Repository erstellen, auf das Sie Schreibzugriff haben.'
redirect_from:
  - /articles/creating-new-files
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

Wenn Sie eine Datei auf {% data variables.product.product_name %} erstellen, beachten Sie Folgendes:

- Wenn Du versuchst, eine neue Datei in einem Repository zu erstellen, auf das Du keinen Zugriff hast, erstellen wir einen Fork des Projekts unter Deinem Benutzerkonto und helfen Dir nach dem Commit Deiner Änderung, einen [Pull Request](/articles/about-pull-requests) an das ursprüngliche Repository zu senden.
- Dateinamen, die in der Weboberfläche erstellt werden, dürfen nur alphanumerische Zeichen und Bindestriche (`-`) enthalten. Um andere Zeichen zu verwenden, [erstellen und committen Sie die Dateien lokal und pushen Sie sie zum Repository auf {% data variables.product.product_name %}](/articles/adding-a-file-to-a-repository-using-the-command-line).

{% data reusables.repositories.sensitive-info-warning %}

{% data reusables.repositories.navigate-to-repo %}
2. Navigiere in Deinem Repository zu dem Ordner, in dem Du eine Datei erstellen möchtest.
{% data reusables.files.add-file %}
4. Gib im Feld für den Dateinamen den Namen und die Erweiterung für die Datei ein. Um Unterverzeichnisse zu erstellen, gib das Verzeichnis-Trennzeichen `/` ein. ![Neuer Dateiname](/assets/images/help/repository/new-file-name.png)
5. Füge auf der Registerkarte **Edit new file** (Neue Datei bearbeiten) die Inhalte für die Datei hinzu. ![Inhalt in neuer Datei](/assets/images/help/repository/new-file-content.png)
6. Um den neuen Inhalt zu überprüfen, klicke auf **Preview** (Vorschau). ![Schaltfläche „New file preview" (Vorschau der neuen Datei)](/assets/images/help/repository/new-file-preview.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose-commit-email %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Weiterführende Informationen

- „[Eine Datei zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository)“
- „[Eine Datei über die Befehlszeile zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository-using-the-command-line)“
