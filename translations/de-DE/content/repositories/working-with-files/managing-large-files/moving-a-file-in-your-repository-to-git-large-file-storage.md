---
title: Verschieben einer Datei in deinem Repository zu Git Large File Storage
intro: 'Wenn du {% data variables.large_files.product_name_short %} eingerichtet hast und eine bestehende Datei in deinem Repository in {% data variables.large_files.product_name_short %} nachverfolgt werden muss, musst du sie zunächst aus deinem Repository entfernen.'
redirect_from:
  - /articles/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
  - /github/managing-large-files/versioning-large-files/moving-a-file-in-your-repository-to-git-large-file-storage
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Move a file to Git LFS
ms.openlocfilehash: fc03edc2ef82be8d7edb106a8c4a2a0b8efbeedb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131920'
---
Nach der Installation von {% data variables.large_files.product_name_short %} und dem Konfigurieren von {% data variables.large_files.product_name_short %}-Tracking (Nachverfolgung), kannst du Dateien von Git's regulärer Nachverfolgung nach {% data variables.large_files.product_name_short %} verschieben. Weitere Informationen findest du unter [Installieren von {% data variables.large_files.product_name_long %}](/github/managing-large-files/installing-git-large-file-storage) und [Konfigurieren von {% data variables.large_files.product_name_long %}](/github/managing-large-files/configuring-git-large-file-storage).

{% data reusables.large_files.resolving-upload-failures %}

{% tip %}

**Tipp:** Wenn beim Pushen von Dateien zu Git die Fehlermeldung „Dies überschreitet den Grenzwert von {% data variables.large_files.product_name_short %} für die Dateigröße von {% data variables.large_files.max_github_size %}“ angezeigt wird, kannst du anstelle von `filter branch` oder dem BFG Repo-Cleaner `git lfs migrate` verwenden, um die große Datei zu {% data variables.large_files.product_name_long %} zu verschieben. Weitere Informationen zum Befehl `git lfs migrate` findest du in der Ankündigung zum Release [Git LFS 2.2.0](https://github.com/blog/2384-git-lfs-2-2-0-released).

{% endtip %}

1.  Entferne die Datei mit dem Befehl `filter-branch` oder mit BFG Repo-Cleaner aus dem Git-Verlauf des Repositorys. Ausführliche Informationen zur Verwendung dieser Befehle findest du unter [Entfernen vertraulicher Daten aus einem Repository](/articles/removing-sensitive-data-from-a-repository).
2. Konfiguriere die Nachverfolgung für die Datei, und pushe sie zu {% data variables.large_files.product_name_short %}. Weitere Informationen zu diesem Verfahren findest du unter [Konfigurieren von {% data variables.large_files.product_name_long %}](/articles/configuring-git-large-file-storage).

## Weiterführende Themen

- [Informationen zu {% data variables.large_files.product_name_long %}](/articles/about-git-large-file-storage)
- [Zusammenarbeit mit {% data variables.large_files.product_name_long %}](/articles/collaboration-with-git-large-file-storage/)
- [Installieren von {% data variables.large_files.product_name_long %}](/articles/installing-git-large-file-storage)
