---
title: Darstellung geänderter Dateien auf GitHub anpassen
intro: 'Damit bestimmte Dateien nicht standardmäßig als Diffs angezeigt oder zur Sprache des Repositorys hinzugezählt werden, kannst du sie in einer *.gitattributes*-Datei mit dem Attribut `linguist-generated` markieren.'
redirect_from:
  - /articles/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/customizing-how-changed-files-appear-on-github
  - /github/administering-a-repository/managing-repository-settings/customizing-how-changed-files-appear-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: How changed files appear
ms.openlocfilehash: 2ba6dc8286cab0ef493289d8ae39283209dae8b4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131991'
---
Mit einer *.gitattributes*-Datei kannst du Dateien markieren, die einem bestimmten „Muster“ mit den angegebenen Attributen entsprechen. Eine *.gitattributes*-Datei verwendet für den Abgleich dieselben Regeln wie _.gitignore_-Dateien. Weitere Informationen findest du in der Git-Dokumentation unter [PATTERN FORMAT](https://www.git-scm.com/docs/gitignore#_pattern_format).

1. Falls die *.gitattributes*-Datei nicht schon vorhanden ist, erstellst du eine *.gitattributes*-Datei im Stammverzeichnis des Repositorys.
2. Mit dem Attribut `linguist-generated` kannst du Pfade markieren (bzw. deren Markierung aufheben), die bei der Sprachstatistik des Repositorys nicht berücksichtigt und in Diffs standardmäßig ausgeblendet werden sollen.

  Um z. B. `search/index.json` als generierte Datei zu markieren, fügst du der *.gitattributes*-Datei die folgende Zeile hinzu:

  ```
search/index.json linguist-generated=true
  ```

## Weiterführende Themen
- [Generierter Code](https://github.com/github/linguist/blob/master/docs/overrides.md#generated-code) in der Linguist-Dokumentation
- [Erstellen neuer Dateien](/articles/creating-new-files/)
