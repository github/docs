---
title: Informationen zu GitHub Importer
intro: 'Mithilfe von GitHub Importer kannst du Quellcode in Subversion, Mercurial, Team Foundation Version Control (TFVC) oder einem anderen Git-Repository zu GitHub verschieben.'
redirect_from:
  - /articles/about-github-importer
  - /github/importing-your-projects-to-github/about-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/about-github-importer
versions:
  fpt: '*'
  ghec: '*'
ms.openlocfilehash: 86fa3129982afcdf99da7879792881c522d4a6fc
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131258'
---
GitHub Importer ist ein Tool, das Quellcode-Repositorys, einschließlich Commits und Revisionsverlauf, für Dich schnell in GitHub importiert.

![GIF zum Import eines Repositorys](/assets/images/help/importer/github-importer.gif)

Während eines Imports kannst du je nach dem Versionskontrollsystem, aus dem du importierst, mit deinem Remote-Repository authentifizieren, die Zuordnung von Commit-Autoren aktualisieren und Repositorys mit großen Dateien importieren (oder große Dateien entfernen, wenn du Git Large File Storage (Git Große Dateien Speicher) nicht verwenden möchtest).

| Importaktion | Subversion | Mercurial | TFVC | Git |
|:--------------|:----------:|:---------:|:----------------------:|:---:|
| Mit Remote-Repository authentifizieren | **X** | **X** | **X** | **X** |
| [Zuordnung von Commit-Autoren aktualisieren](/articles/updating-commit-author-attribution-with-github-importer) | **X** | **X** | **X** | |
| Große Dateien in [Git Large File Storage](/articles/about-git-large-file-storage) verschieben | **X** | **X** | **X** | |
| Große Dateien aus deinem Repository entfernen | **X** | **X** | **X** | |

## Weitere Informationsquellen

- [Ein Repository mit GitHub Importer importieren](/articles/importing-a-repository-with-github-importer)
- [Aktualisieren der Zuordnung von Commit-Autoren mit GitHub Importer](/articles/updating-commit-author-attribution-with-github-importer)
- [Importieren eines Git-Repositorys über die Befehlszeile](/articles/importing-a-git-repository-using-the-command-line)
- [Tools für die Quellcodemigration](/articles/source-code-migration-tools)
