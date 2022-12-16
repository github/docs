---
title: Personnalisation de l’affichage des fichiers modifiés sur GitHub
intro: 'Pour empêcher certains fichiers de s’afficher dans les différences par défaut ou d’être pris en compte dans la langue du dépôt, vous pouvez les marquer avec l’attribut `linguist-generated` dans un fichier *.gitattributes*.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131990'
---
Utilisez un fichier *.gitattributes* pour marquer les fichiers qui correspondent à un « modèle » donné avec les attributs spécifiés. Un fichier *.gitattributes* utilise les mêmes règles de correspondance que les fichiers _.gitignore_. Pour plus d’informations, consultez [PATTERN FORMAT](https://www.git-scm.com/docs/gitignore#_pattern_format) dans la documentation Git.

1. Sauf si le fichier *.gitattributes* existe déjà, créez un fichier *.gitattributes* à la racine du dépôt.
2. Utilisez l’attribut `linguist-generated` pour marquer les chemins que vous souhaitez ignorer dans les statistiques linguistiques du dépôt et masquer par défaut dans les différences (ou annuler le marquage).

  Par exemple, pour marquer `search/index.json` comme fichier généré, ajoutez cette ligne à *.gitattributes* :

  ```
search/index.json linguist-generated=true
  ```

## Pour aller plus loin
- « [Code généré](https://github.com/github/linguist/blob/master/docs/overrides.md#generated-code) » dans la documentation Linguist
- « [Création de fichiers](/articles/creating-new-files/) »
