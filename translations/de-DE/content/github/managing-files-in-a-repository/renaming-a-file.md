---
title: Datei umbenennen
intro: 'Sie können jede Datei Ihrer Repositorys direkt in {% data variables.product.product_name %} umbenennen. Dabei kannst Du die Datei nicht nur umbenennen, sondern auch [an einen anderen Speicherort verschieben](/articles/moving-a-file-to-a-new-location).'
redirect_from:
  - /articles/renaming-a-file
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositorys
---

{% tip %}

**Tips**:

- Wenn Du versuchst, eine Datei in einem Repository umzubenennen, zu dem Du keinen Zugriff hast, erstellen wir einen Fork des Projekts unter Deinem Benutzerkonto und helfen Dir nach dem Commit Deiner Änderung, einen [Pull Request](/articles/about-pull-requests) an das Original-Repository zu senden.
- Dateinamen, die in der Weboberfläche erstellt werden, dürfen nur alphanumerische Zeichen und Bindestriche (`-`) enthalten. Wenn Du andere Zeichen verwenden möchtest, musst Du die Dateien lokal erstellen und freigeben und sie anschließend per Push in das Repository übertragen.
- Einige Dateien, beispielsweise Bilder, kannst du nur über die Befehlszeile umbenennen. Weitere Informationen findest Du unter „[Datei über die Befehlszeile umbenennen](/articles/renaming-a-file-using-the-command-line).“

{% endtip %}

1. Navigiere innerhalb des Repositorys zu der Datei, die Du umbenennen möchtest.
2. Klicken Sie in der oberen rechten Ecke der Dateiansicht auf {% octicon "pencil" aria-label="The edit icon" %}, um den Datei-Editor zu öffnen. ![Symbol „Edit file" (Bearbeiten einer Datei)](/assets/images/help/repository/edit-file-icon.png)
3. Gib im Feld „Filename“ (Dateiname) den neuen Namen für die Datei ein. Gleichzeitig kannst Du auch den Inhalt der Datei ändern. ![Einen Dateinamen bearbeiten](/assets/images/help/repository/changing-file-name.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
