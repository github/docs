---
title: Informationen zu GitHub Importer
intro: 'Wenn Du Quellcode in Subversion, Mercurial, Team Foundation Server oder einem anderen Git-Repository hast, kannst Du ihn mit dem GitHub Importer nach GitHub verschieben.'
redirect_from:
  - /articles/about-github-importer
versions:
  free-pro-team: '*'
---

GitHub Importer ist ein Tool, das Quellcode-Repositorys, einschließlich Commits und Revisionsverlauf, für Dich schnell in GitHub importiert.

![GIF zum Import eines Repositorys](/assets/images/help/importer/github-importer.gif)

Während eines Imports kannst Du je nach dem Versionskontrollsystem, aus dem Du importierst, mit Deinem Remote-Repository authentifizieren, die Zuordnung von Commit-Autoren aktualisieren und Repositorys mit großen Dateien importieren (oder große Dateien entfernen, wenn du Git Large File Storage (Git Große Dateien Speicher) nicht verwenden möchtest).

| Importaktion                                                                                                    | Subversion | Mercurial | Team Foundation Server |  Git  |
|:--------------------------------------------------------------------------------------------------------------- |:----------:|:---------:|:----------------------:|:-----:|
| Mit Remote-Repository authentifizieren                                                                          |   **X**    |   **X**   |         **X**          | **X** |
| [Zuordnung von Commit-Autoren aktualisieren](/articles/updating-commit-author-attribution-with-github-importer) |   **X**    |   **X**   |         **X**          |       |
| Große Dateien in [Git Large File Storage](/articles/about-git-large-file-storage) verschieben                   |   **X**    |   **X**   |         **X**          |       |
| Große Dateien aus Deinem Repository entfernen                                                                   |   **X**    |   **X**   |         **X**          |       |

### Weiterführende Informationen

- „[Ein Repository mit GitHub Importer importieren](/articles/importing-a-repository-with-github-importer)“
- „[Die Zuordnung von Commit-Autoren mit dem GitHub Importer aktualisieren](/articles/updating-commit-author-attribution-with-github-importer)“
- „[Ein Git-Repository über die Befehlszeile importieren](/articles/importing-a-git-repository-using-the-command-line)“
- „[Tools für die Quellcode-Migration](/articles/source-code-migration-tools)“
