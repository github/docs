---
title: À propos de GitHub Importer
intro: 'Si vous avez du code source dans Subversion, Mercurial, TFVC (Team Foundation Version Control) ou un autre dépôt Git, vous pouvez le déplacer vers GitHub à l’aide de GitHub Importer.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128970'
---
GitHub Importer est un outil qui importe rapidement des référentiels de code source, y compris les validations et l’historique des révisions, sur GitHub pour vous.

![Importation d’un gif de référentiel](/assets/images/help/importer/github-importer.gif)

Lors d’une importation, selon le système de contrôle de version à partir duquel vous importez, vous pouvez vous authentifier auprès de votre référentiel distant, mettre à jour l’attribution de l’auteur de validation et importer des référentiels avec des fichiers volumineux (ou supprimer des fichiers volumineux si vous ne souhaitez pas utiliser le stockage de grands fichiers Git).

| Action d’importation | Subversion | Mercurial | TFVC | Git |
|:--------------|:----------:|:---------:|:----------------------:|:---:|
| S’authentifier avec un référentiel distant | **X** | **X** | **X** | **X** |
| [Mettre à jour l’attribution de l’auteur de validation](/articles/updating-commit-author-attribution-with-github-importer) | **X** | **X** | **X** | |
| Déplacer des fichiers volumineux vers le [stockage de grands fichiers Git](/articles/about-git-large-file-storage) | **X** | **X** | **X** | |
| Supprimer des fichiers volumineux de votre référentiel | **X** | **X** | **X** | |

## Pour aller plus loin

- « [Importation d’un dépôt avec GitHub Importer](/articles/importing-a-repository-with-github-importer) »
- « [Mise à jour de l’attribution de l’auteur de validation avec GitHub Importer](/articles/updating-commit-author-attribution-with-github-importer) »
- « [Importation d’un référentiel Git à l’aide de la ligne de commande](/articles/importing-a-git-repository-using-the-command-line) »
- "[Outils de migration de code source](/articles/source-code-migration-tools)"
