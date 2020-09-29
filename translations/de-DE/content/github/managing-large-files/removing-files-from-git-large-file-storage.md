---
title: Dateien aus dem Git Large File Storage entfernen
intro: 'Wenn Du für Dein Repository {% data variables.large_files.product_name_short %} eingerichtet hast, kannst Du alle oder einen Teil der Dateien aus {% data variables.large_files.product_name_short %} entfernen.'
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

  **Hinweis:** Die *.gitattributes*-Datei wird im Allgemeinen im lokalen Repository gespeichert. Eventuell hast Du aber auch eine globale *.gitattributes*-Datei mit allen Deinen {% data variables.large_files.product_name_short %}-Zuordnungen erstellt.

  {% endnote %}
3. Suche und entferne die zugeordnete {% data variables.large_files.product_name_short %}-Tracking-Regel (Nachverfolgungsregel) in der *.gitattributes*-Datei.
4. Speichere und schließe die *.gitattributes*-Datei.

### Alle Dateien eines {% data variables.large_files.product_name_short %}-Repositorys entfernen

1. Entferne die Dateien mit dem Befehl `filter-branch` oder mit BFG Repo-Cleaner aus dem Git-Verlauf des Repositorys. Weitere Informationen zur Verwendung dieser Werkzeuge findest Du unter „[Vertrauliche Daten aus einem Repository entfernen](/articles/removing-sensitive-data-from-a-repository).“
2. Führe optional folgenden Befehl aus, um {% data variables.large_files.product_name_short %} im Repository zu deinstallieren:
  ```shell
  $ git lfs uninstall
  ```
  Führe bei {% data variables.large_files.product_name_short %}-Versionen vor 1.1.0 folgenden Befehl aus:
  ```shell
  $ git lfs uninit
  ```

### {% data variables.large_files.product_name_short %}-Objekte in Deinem Repository

Die {% data variables.large_files.product_name_short %}-Objekte von Dateien, die Du aus {% data variables.large_files.product_name_short %} entfernt hast, sind nach wie vor im Remote-Speicher vorhanden{% if currentVersion == "free-pro-team@latest" %} und werden Deinem {% data variables.large_files.product_name_short %}-Speicher-Kontingent weiterhin angerechnet{% endif %}.

Um {% data variables.large_files.product_name_short %}-Objekte aus einem Repository zu entfernen, {% if currentVersion == "free-pro-team@latest" %}lösche und erstelle das Repository erneut. Wenn Du ein Repository löschst, werden alle zugehörigen Issues, Sterne und Forks ebenfalls gelöscht. Weitere Informationen findest Du unter "[Löschen eines Repositories](/github/administering-a-repository/deleting-a-repository)."{% else %}kontaktiere Deinen {% data variables.product.prodname_enterprise %}-Administrator, um die Objekte zu archivieren. Archivierte Objekte werden nach drei Monaten gelöscht.{% endif %}

{% note %}

**Hinweis:** Wenn Du eine einzelne Datei entfernt hast und andere {% data variables.large_files.product_name_short %}-Objekte hast, die Du in Deinem Repository behalten möchtest, rekonfiguriere Deine {% data variables.large_files.product_name_short %} zugeordneten Dateien,nachdem Du Dein Repository gelöscht und neu erstellt hast. Weitere Informationen findest Du unter "[Entferne eine einzelne Datei](#removing-a-single-file)" und "[Konfiguriere {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage)."

{% endnote %}

### Weiterführende Informationen

- „[Informationen zu {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)“
- „[Mit {% data variables.large_files.product_name_long %} zusammenarbeiten](/articles/collaboration-with-git-large-file-storage/)“
- „[{% data variables.large_files.product_name_long %} installieren](/articles/installing-git-large-file-storage)“
