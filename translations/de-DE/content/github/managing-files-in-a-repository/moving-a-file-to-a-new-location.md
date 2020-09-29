---
title: Datei an einen neuen Speicherort verschieben
intro: 'Wenn Du eine Datei bearbeitest, kannst Du sie innerhalb Deines Repositorys überall hin verschieben, selbst wenn das Verzeichnis nicht vorhanden ist.'
redirect_from:
  - /articles/moving-a-file-to-a-new-location
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Du kannst nicht nur den Speicherort der Datei ändern, sondern im selben Commit auch [den Inhalt Deiner Datei aktualisieren](/articles/editing-files-in-your-repository) oder [den Namen der Datei ändern](/articles/renaming-a-file).

{% tip %}

**Tips**:

- Wenn Du versuchst, eine Datei in einem Repository zu verschieben, zu dem Du keinen Zugriff hast, erstellen wir einen Fork des Projekts unter Deinem Benutzerkonto und helfen Dir nach dem Commit Deiner Änderung, einen [Pull Request](/articles/about-pull-requests) an das Original-Repository zu senden.
- Einige Dateien, beispielsweise Bilder, kannst Du nur über die Befehlszeile verschieben. Weitere Informationen findest Du unter „[Datei über die Befehlszeile an einen neuen Speicherort verschieben](/articles/moving-a-file-to-a-new-location-using-the-command-line)“.
- {% data reusables.repositories.protected-branches-block-web-edits-uploads %}

{% endtip %}

1. Navigiere in Deinem Repository zu der Datei, die Du verschieben möchtest.
2. Klicken Sie in der oberen rechten Ecke der Dateiansicht auf {% octicon "pencil" aria-label="The edit icon" %}, um den Datei-Editor zu öffnen. ![Symbol „Edit file" (Bearbeiten einer Datei)](/assets/images/help/repository/move-file-edit-file-icon.png)
3. Gib im Feld „Filename“ (Dateiname) den neuen Namen für die Datei ein. Beachte dabei die folgenden Richtlinien: ![Einen Dateinamen bearbeiten](/assets/images/help/repository/moving_files.gif)
    - Um die Datei **in einen Unterordner** zu verschieben, gib den gewünschten Ordnernamen ein, gefolgt von einem Schrägstrich (`/`). Dein neuer Ordnername wird ein neues Element in den Navigations-Breadcrumbs.
    - Um die Datei in ein Verzeichnis zu verschieben, das **oberhalb des aktuellen Speicherorts der Datei** liegt, platziere den Mauszeiger am Anfang des Dateinamen-Felds. Gib dann entweder `../` ein, um ein ganzes Verzeichnis nach oben zu wechseln, oder drücke auf die `backspace`-Taste (Rücktaste), um den Namen des übergeordneten Ordners zu bearbeiten.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_file_change %}
