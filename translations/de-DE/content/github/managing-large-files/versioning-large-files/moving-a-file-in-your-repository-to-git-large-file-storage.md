---
title: Eine Datei in Deinem Repository zu Git Large File Storage verschieben
intro: 'Wenn Sie {% data variables.large_files.product_name_short %} eingerichtet haben und eine vorhandene Datei in Ihrem Repository in {% data variables.large_files.product_name_short %} nachverfolgt werden muss, müssen Sie sie zunächst aus Ihrem Repository entfernen.'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---
Nach der Installation von {% data variables.large_files.product_name_short %} und dem Konfigurieren von {% data variables.large_files.product_name_short %}-Tracking (Nachverfolgung), kannst Du Dateien von Git's regulärer Nachverfolgung nach {% data variables.large_files.product_name_short %} verschieben. Weitere Informationen findest Du unter "[Installation von {% data variables.large_files.product_name_long %}](/github/managing-large-files/installing-git-large-file-storage)" und "[Konfiguration von {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)."

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**Tipp:** Wenn beim Pushen von Dateien zu Git die Fehlermeldung „this exceeds {% data variables.large_files.product_name_short %}'s file size limit of {% data variables.large_files.max_github_size %}“ (Dies überschreitet die Produkt-Limite für die maximale Dateigröße) angezeigt wird, kannst Du statt `filter branch` oder dem BFG Repo-Cleaner den Befehl `git lfs migrate` verwenden, um die große Datei zu {% data variables.large_files.product_name_long %} zu verschieben. Weitere Informationen zum Befehl `git lfs migrate` findest Du in der Release-Ankündigung zu [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released).

{% endtip %}

1.  Entferne die Datei mit dem Befehl `filter-branch` oder mit BFG Repo-Cleaner aus dem Git-Verlauf des Repositorys. Weitere Informationen zur Verwendung dieser Werkzeuge findest Du unter „[Vertrauliche Daten aus einem Repository entfernen](/articles/removing-sensitive-data-from-a-repository).“
2. Konfigurieren Sie die Nachverfolgung für die Datei, und pushen Sie sie zu {% data variables.large_files.product_name_short %}. Weitere Informationen zu diesem Vorgang findest Du unter „[{% data variables.large_files.product_name_long %} konfigurieren](/articles/configuring-git-large-file-storage).“

### Weiterführende Informationen

- „[Informationen zu {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)“
- „[Mit {% data variables.large_files.product_name_long %} zusammenarbeiten](/articles/collaboration-with-git-large-file-storage/)“
- „[{% data variables.large_files.product_name_long %} installieren](/articles/installing-git-large-file-storage)“
