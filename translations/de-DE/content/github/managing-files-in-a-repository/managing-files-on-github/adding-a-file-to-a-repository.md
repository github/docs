---
title: Eine Datei zu einem Repository hinzufügen
intro: 'Sie können eine vorhandene Datei in ein {% data variables.product.product_name %}-Repository hochladen und committen. Ziehe eine Datei per Drag-and-Drop in ein beliebiges Verzeichnis in der Dateistruktur, oder lade Dateien von der Hauptseite des Repositorys hoch.'
redirect_from:
  - /articles/adding-a-file-to-a-repository
  - /github/managing-files-in-a-repository/adding-a-file-to-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
Für Dateien, die Sie über einen Browser zu einem Repository hinzufügen, gilt eine Beschränkung von {% data variables.large_files.max_github_browser_size %} pro Datei. Größere Dateien mit bis zu jeweils {% data variables.large_files.max_github_size %} können Sie über die Befehlszeile hinzufügen. Weitere Informationen findest Du unter „[Eine Datei über die Befehlszeile zu einem Repository hinzufügen](/articles/adding-a-file-to-a-repository-using-the-command-line).“

{% tip %}

**Tipps:**
- Sie können mehrere Dateien gleichzeitig zu {% data variables.product.product_name %} hochladen.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
2. Klicke unter dem Namen des Repositorys auf **Upload files** (Dateien hochladen). ![Schaltfläche „Upload files“ (Dateien hochladen)](/assets/images/help/repository/upload-files-button.png)
{% else %}
2. Above the list of files, using the **Add file** drop-down, click **Upload files**. !["Upload files" in the "Add file" dropdown](/assets/images/help/repository/upload-files-button.png)
{% endif %}
3. Ziehe die Datei respektive den Ordner, den/die Du in das Repository hochladen möchtest, per Drag-and-Drop in die Dateistruktur. ![Drag-und-Drop-Bereich](/assets/images/help/repository/upload-files-drag-and-drop.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
6. Klicke auf **Commit changes** (Änderungen freigeben). ![Schaltfläche „Commit changes“ (Änderungen freigeben)](/assets/images/help/repository/commit-changes-button.png)
