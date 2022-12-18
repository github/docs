---
title: Dateien aus dem Large File Storage (LFS) von Git entfernen
intro: 'Wenn du für dein Repository {% data variables.large_files.product_name_short %} eingerichtet hast, kannst du alle oder einen Teil der Dateien aus {% data variables.large_files.product_name_short %} entfernen.'
redirect_from:
  - /articles/removing-files-from-git-large-file-storage
  - /github/managing-large-files/removing-files-from-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/removing-files-from-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Remove files
ms.openlocfilehash: 4aa8b6789a916616b43b2b995174e64e25856ed4
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131919'
---
## Einzelne Datei entfernen

1.  Entferne die Datei mit dem Befehl `filter-branch` oder mit BFG Repo-Cleaner aus dem Git-Verlauf des Repositorys. Ausführliche Informationen zur Verwendung dieser Befehle findest du unter [Entfernen vertraulicher Daten aus einem Repository](/articles/removing-sensitive-data-from-a-repository).
2. Navigiere zur Datei *.gitattributes*.

  {% note %}

  **Hinweis:** Die Datei *.gitattributes* wird im Allgemeinen im lokalen Repository gespeichert. Eventuell hast du aber auch eine globale Datei vom Typ *.gitattributes* mit allen {% data variables.large_files.product_name_short %}-Zuordnungen erstellt.

  {% endnote %}
3. Suche und entferne die zugeordnete {% data variables.large_files.product_name_short %}-Tracking-Regel in der Datei *.gitattributes*.
4. Speichere und schließe die Datei *.gitattributes*.

## Alle Dateien eines {% data variables.large_files.product_name_short %}-Repositorys entfernen

1. Entferne die Dateien mit dem Befehl `filter-branch` oder mit BFG Repo-Cleaner aus dem Git-Verlauf des Repositorys. Ausführliche Informationen zur Verwendung dieser Befehle findest du unter [Entfernen vertraulicher Daten aus einem Repository](/articles/removing-sensitive-data-from-a-repository).
2. Führe optional folgenden Befehl aus, um {% data variables.large_files.product_name_short %} im Repository zu deinstallieren:
  ```shell
  $ git lfs uninstall
  ```
  Führe bei {% data variables.large_files.product_name_short %}-Versionen vor 1.1.0 folgenden Befehl aus:
  ```shell
  $ git lfs uninit
  ```

## {% data variables.large_files.product_name_short %}-Objekte in Ihrem Repository

Die {% data variables.large_files.product_name_short %}-Objekte von Dateien, die du aus {% data variables.large_files.product_name_short %} entfernt hast, sind nach wie vor im Remotespeicher {% ifversion fpt or ghec %} vorhanden und werden weiterhin auf dein {% data variables.large_files.product_name_short %}-Speicherkontingent angerechnet{% endif %}.

Um {% data variables.large_files.product_name_short %}-Objekte aus einem Repository zu entfernen, {% ifversion fpt or ghec %}lösche das Repository, und erstelle es neu. Wenn Du ein Repository löschst, werden alle zugehörigen Issues, Sterne und Forks ebenfalls gelöscht. Weitere Informationen findest du unter [Löschen eines Repositorys](/github/administering-a-repository/deleting-a-repository). Wenn du ein entferntes Objekt endgültig löschen musst und das Repository nicht löschen kannst, [wende dich an den Support](/github/working-with-github-support), um Hilfe zu erhalten.{% else %}Wende dich an deinen {% data variables.product.prodname_enterprise %}-Administrator, um die Objekte zu archivieren. Archivierte Objekte werden nach drei Monaten gelöscht.{% endif %}

{% note %}

**Hinweis:** Wenn du eine einzelne Datei entfernt hast und andere {% data variables.large_files.product_name_short %}-Objekte hast, die du in deinem Repository behalten möchtest, konfiguriere deine {% data variables.large_files.product_name_short %} zugeordneten Dateien neu,nachdem du dein Repository gelöscht und neu erstellt hast. Weitere Informationen findest du unter [Entfernen einer einzelnen Datei](#removing-a-single-file) und [Konfigurieren von {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage).

{% endnote %}

## Weitere Informationsquellen

- [Informationen zu {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)
- [Zusammenarbeit mit {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)
- [Installieren von {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)
