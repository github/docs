---
title: Ein Repository mit GitHub Importer importieren
intro: 'Wenn Du ein Projekt auf einem anderen Quellcode-Verwaltungssystem verwaltest, kannst Du es mit dem Tool GitHub Importer automatisch in GitHub importieren.'
redirect_from:
  - /articles/importing-from-other-version-control-systems-to-github/
  - /articles/importing-a-repository-with-github-importer
versions:
  free-pro-team: '*'
---

{% tip %}

**Tipp:** GitHub Importer eignet sich nicht für alle Importe. Wenn beispielsweise Dein existierender Code in einem privaten Netzwerk verwaltet wird, kann unser Tool nicht auf ihn zugreifen. In solchen Fällen empfehlen wir, Git-Repositorys [über die Befehlszeile](/articles/importing-a-git-repository-using-the-command-line) und Projekte aus anderen Quellcode-Verwaltungssystemen mit einem externen [Tool für die Quellcode-Migration](/articles/source-code-migration-tools) zu importieren.

{% endtip %}

Wenn Du die Commits in Deinem Repository beim importieren mit den GitHub-Benutzerkonten des Autors abgleichen möchtest, stelle sicher, dass jeder Mitwirkende Deines Repositorys vor dem Importieren ein GitHub-Konto besitzt.

{% data reusables.repositories.migrating-from-codeplex %}

{% data reusables.repositories.repo-size-limit %}

1. Klicke in der oberen rechten Ecke einer beliebigen Seite auf {% octicon "plus" aria-label="Plus symbol" %} und anschließend auf **Import repository** (Repository importieren). ![Option „Import repository“ (Repository importieren) im Menü für neue Repositorys](/assets/images/help/importer/import-repository.png)
2. Gib unter „Your old repository's clone URL“ (Klon-URL Deines alten Repositorys) die URL des Projekts ein, das Du importieren möchtest. ![Textfeld für die URL des importierten Repositorys](/assets/images/help/importer/import-url.png)
3. Wähle ein Benutzerkonto oder eine Organisation als Inhaber des Repositorys aus, und gib dann einen Namen für das Repository auf GitHub ein. ![Menü für Repository-Inhaber und Feld für den Repository-Namen](/assets/images/help/importer/import-repo-owner-name.png)
4. Lege fest, ob das neue Repository *öffentlich* oder *privat* sein soll. Weitere Informationen findest Du unter „[Sichtbarkeit eines Repositorys festlegen](/articles/setting-repository-visibility).“ ![Optionsfelder für öffentliches oder privates Repository](/assets/images/help/importer/import-public-or-private.png)
5. Überprüfe die eingegebenen Informationen, und klicke dann auf **Begin import** (Import starten). ![Schaltfläche „Begin import“ (Import starten)](/assets/images/help/importer/begin-import-button.png)
6. Wenn Dein altes Projekt mit einem Passwort geschützt ist, gib Deine Anmeldeinformationen für dieses Projekt ein und klicke dann auf **Submit** (Absenden). ![Passwortformular und Schaltfläche „Submit“ (Absenden) für passwortgeschützte Projekte](/assets/images/help/importer/submit-old-credentials-importer.png)
7. Wenn mehrere Projekte unter der Klon-URL Deines alten Projekts verwaltet werden, wähle das Projekt aus, das Du importieren möchtest, und klicke auf **Submit** (Absenden). ![Liste der zu importierenden Projekte und Schaltfläche „Submit“ (Absenden)](/assets/images/help/importer/choose-project-importer.png)
8. Wenn Dein Projekt Dateien mit mehr als 100 MB enthält, wähle aus, ob Du diese großen Dateien mit [Git Large File Storage](/articles/versioning-large-files) (Git Speicher für große Dateien) importieren möchtest, und klicke dann auf **Continue** (Fortfahren). ![Menü „Git Large File Storage" (Git Große Dateien Speicher) und Schaltfläche „Continue“ (Fortfahren)](/assets/images/help/importer/select-gitlfs-importer.png)

Du erhälst eine E-Mail, wenn das Repository vollständig importiert wurde.

### Weiterführende Informationen

- „[Die Zuordnung von Commit-Autoren mit dem GitHub Importer aktualisieren](/articles/updating-commit-author-attribution-with-github-importer)“
