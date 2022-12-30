---
title: Recherche de fichiers sur GitHub
intro: 'Vous pouvez rechercher un fichier dans un dépôt à l’aide de la fonctionnalité de recherche de fichiers. Pour rechercher un fichier dans plusieurs dépôts sur {% data variables.product.product_name %}, utilisez le [qualificateur de recherche de code `filename`](/search-github/searching-on-github/searching-code#search-by-filename).'
redirect_from:
  - /articles/finding-files-on-github
  - /github/searching-for-information-on-github/finding-files-on-github
  - /github/searching-for-information-on-github/searching-on-github/finding-files-on-github
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 7cecdfd58ecf56cac251bd77af3a4e1a7fcfd607
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880195'
---
{% tip %}

**Conseils :**

- Par défaut, les résultats du localisateur de fichiers excluent certains répertoires comme `build`, `log`, `tmp` et `vendor`. Pour rechercher des fichiers dans ces répertoires, utilisez le [qualificateur de recherche de code `filename`](/search-github/searching-on-github/searching-code#search-by-filename).{% ifversion file-finder-exclusion-controls %} Vous pouvez aussi personnaliser les répertoires exclus par défaut [en utilisant un fichier `.gitattributes`](#customizing-excluded-files).{% endif %}
- Vous pouvez également ouvrir le localisateur de fichiers en appuyant sur `t` sur votre clavier. Pour plus d’informations, consultez « [Raccourcis clavier](/articles/keyboard-shortcuts) ».

{% endtip %}

## Utilisation du localisateur de fichiers

{% data reusables.repositories.navigate-to-repo %}
2. Au-dessus de la liste des fichiers, cliquez sur **Accéder au fichier**.
![Bouton Rechercher un fichier](/assets/images/help/search/find-file-button.png)
3. Dans le champ de recherche, tapez le nom du fichier que vous souhaitez trouver.
![Champ de recherche Rechercher un fichier](/assets/images/help/search/find-file-search-field.png)
4. Dans la liste des résultats, cliquez sur le fichier que vous souhaitiez trouver.

{% ifversion file-finder-exclusion-controls %}

## Personnalisation des fichiers exclus

Par défaut, les résultats du localisateur de fichiers n’incluent pas de fichiers dans les répertoires suivants s’ils existent à la racine de votre dépôt :

 - `.git`
 - `.hg`
 - `.sass-cache`
 - `.svn`
 - `build`
 - `dot_git`
 - `log`
 - `tmp`
 - `vendor`

Vous pouvez remplacer ces exclusions par défaut en utilisant un fichier `.gitattributes`.

Pour ce faire, créez ou mettez à jour un fichier appelé `.gitattributes` à la racine de votre dépôt en définissant l’attribut [`linguist-generated`](https://github.com/github/linguist/blob/master/docs/overrides.md) avec la valeur `false` pour chaque répertoire qui doit être inclus dans les résultats du localisateur de fichiers.

Par exemple, le fichier `.gitattributes` suivant permettrait au localisateur de fichier d’avoir les fichiers du répertoire `build/` disponibles :

```
build/** linguist-generated=false
```

Notez que ce remplacement demande d’utiliser le modèle Glob récursif (`**`). Pour plus d’informations, consultez « [PATTERN FORMAT](https://git-scm.com/docs/gitignore#_pattern_format) » dans la documentation Git. Les remplacements plus complexes de sous-répertoires dans les répertoires exclus par défaut ne sont pas pris en charge.

{% endif %}

## Pour aller plus loin

- « [À propos de la recherche sur GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github) »{% ifversion file-finder-exclusion-controls %}
- « [Personnalisation de l’affichage des fichiers modifiés sur GitHub](/repositories/working-with-files/managing-files/customizing-how-changed-files-appear-on-github) »
- [`.gitattributes`](https://git-scm.com/docs/gitattributes) dans la documentation Git{% endif %}
