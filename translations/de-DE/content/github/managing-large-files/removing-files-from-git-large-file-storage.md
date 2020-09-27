---
title: Dateien aus dem Git Large File Storage entfernen
intro: 'Wenn Du für Dein Repository {{ site.data.variables.large_files.product_name_short }} eingerichtet hast, kannst Du alle oder einen Teil der Dateien aus {{ site.data.variables.large_files.product_name_short }} entfernen.'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Einzelne Datei entfernen

1.  Entferne die Datei mit dem Befehl `filter-branch` oder mit BFG Repo-Cleaner aus dem Git-Verlauf des Repositorys. Weitere Informationen zur Verwendung dieser Werkzeuge findest Du unter „[Vertrauliche Daten aus einem Repository entfernen](/articles/removing-sensitive-data-from-a-repository).“
2. Navigiere zu Deiner *.gitattributes*-Datei.

  {% note %}

  **Hinweis:** Die *.gitattributes*-Datei wird im Allgemeinen im lokalen Repository gespeichert. Eventuell hast Du aber auch eine globale *.gitattributes*-Datei mit allen Deinen {{ site.data.variables.large_files.product_name_short }}-Zuordnungen erstellt.

  {% endnote %}
3. Suche und entferne die zugeordnete {{ site.data.variables.large_files.product_name_short }}-Tracking-Regel (Nachverfolgungsregel) in der *.gitattributes*-Datei.
4. Speichere und schließe die *.gitattributes*-Datei.

### Alle Dateien eines {{ site.data.variables.large_files.product_name_short }}-Repositorys entfernen

1. Entferne die Dateien mit dem Befehl `filter-branch` oder mit BFG Repo-Cleaner aus dem Git-Verlauf des Repositorys. Weitere Informationen zur Verwendung dieser Werkzeuge findest Du unter „[Vertrauliche Daten aus einem Repository entfernen](/articles/removing-sensitive-data-from-a-repository).“
2. Führe optional folgenden Befehl aus, um {{ site.data.variables.large_files.product_name_short }} im Repository zu deinstallieren:
  ```shell
  $ git lfs uninstall
  ```
  Führe bei {{ site.data.variables.large_files.product_name_short }}-Versionen vor 1.1.0 folgenden Befehl aus:
  ```shell
  $ git lfs uninit
  ```

### {{ site.data.variables.large_files.product_name_short }}-Objekte in Deinem Repository

Die {{ site.data.variables.large_files.product_name_short }}-Objekte von Dateien, die Du aus {{ site.data.variables.large_files.product_name_short }} entfernt hast, sind nach wie vor im Remote-Speicher vorhanden{% if currentVersion == "free-pro-team@latest" %} und werden Deinem {{ site.data.variables.large_files.product_name_short }}-Speicher-Kontingent weiterhin angerechnet{% endif %}.

Um {{ site.data.variables.large_files.product_name_short }}-Objekte aus einem Repository zu entfernen, {% if currentVersion == "free-pro-team@latest" %}lösche und erstelle das Repository erneut. Wenn Du ein Repository löschst, werden alle zugehörigen Issues, Sterne und Forks ebenfalls gelöscht. Weitere Informationen findest Du unter "[Löschen eines Repositories](/github/administering-a-repository/deleting-a-repository)."{% else %}kontaktiere Deinen {{ site.data.variables.product.prodname_enterprise }}-Administrator, um die Objekte zu archivieren. Archivierte Objekte werden nach drei Monaten gelöscht.{% endif %}

{% note %}

**Hinweis:** Wenn Du eine einzelne Datei entfernt hast und andere {{ site.data.variables.large_files.product_name_short }}-Objekte hast, die Du in Deinem Repository behalten möchtest, rekonfiguriere Deine {{ site.data.variables.large_files.product_name_short }} zugeordneten Dateien,nachdem Du Dein Repository gelöscht und neu erstellt hast. Weitere Informationen findest Du unter "[Entferne eine einzelne Datei](#removing-a-single-file)" und "[Konfiguriere {{ site.data.variables.large_files.product_name_long }}](/github/managing-large-files/configuring-git-large-file-storage)."

{% endnote %}

### Weiterführende Informationen

- „[Informationen zu {{ site.data.variables.large_files.product_name_long }}](/articles/about-git-large-file-storage)“
- „[Mit {{ site.data.variables.large_files.product_name_long }} zusammenarbeiten](/articles/collaboration-with-git-large-file-storage/)“
- „[{{ site.data.variables.large_files.product_name_long }} installieren](/articles/installing-git-large-file-storage)“
