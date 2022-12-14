---
title: Obtention de liens permanents vers des fichiers
intro: "Lors de l’affichage d’un fichier sur {% data variables.product.product_location %}, vous pouvez appuyer sur la touche «\_y\_» pour mettre à jour l’URL vers un permalien vers la version exacte du fichier que vous voyez."
redirect_from:
  - /articles/getting-a-permanent-link-to-a-file
  - /articles/how-do-i-get-a-permanent-link-from-file-view-to-permanent-blob-url
  - /articles/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/getting-permanent-links-to-files
  - /github/managing-files-in-a-repository/managing-files-on-github/getting-permanent-links-to-files
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Permanent links to files
ms.openlocfilehash: 4e3d5ec282f7f7ba820094240698c88e298cdb69
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131885'
---
{% tip %}

**Conseil** : Appuyez sur « ? » dans n’importe quelle page de {% data variables.product.product_name %} pour voir tous les raccourcis clavier disponibles.

{% endtip %}

## Les affichages de fichiers présentent la dernière version sur une branche

Quand un fichier est affiché sur {% data variables.product.product_location %}, vous voyez généralement la version à la tête actuelle d’une branche.  Par exemple :

* [https://github.com/github/codeql/blob/**main**/README.md](https://github.com/github/codeql/blob/main/README.md)

fait référence au dépôt `codeql` ​​de GitHub et affiche la version actuelle du fichier `README.md` de la branche `main`.

La version d’un fichier à la tête d’une branche peut changer au fur et à mesure que de nouveaux commits sont effectués. Ainsi, si vous copiez l’URL normale et la partagez, le contenu du fichier peut ne plus être le même quand quelqu’un le consulte.

## Appuyer sur <kbd>Y</kbd> pour créer un lien permanent vers un fichier dans un commit spécifique

Pour créer un lien permanent vers la version spécifique d’un fichier que vous voyez, au lieu d’utiliser un nom de branche dans l’URL (c’est-à-dire la partie `main` dans l’exemple ci-dessus), utilisez un ID de commit. Cela permet de créer un lien permanent vers la version exacte du fichier dans ce commit.  Par exemple :

* [https://github.com/github/codeql/blob/**b212af08a6cffbb434f3c8a2795a579e092792fd**/README.md](https://github.com/github/codeql/blob/b212af08a6cffbb434f3c8a2795a579e092792fd/README.md)

remplace `main` par un ID de commit spécifique (le contenu du fichier ne changera pas).

Cependant, la recherche manuelle du SHA de commit n’est pas pratique. En guise de raccourci, vous pouvez taper <kbd>y</kbd> pour mettre à jour automatiquement l’URL vers la version du lien permanent.  Vous pouvez ensuite copier l’URL et la partager avec quelqu’un qui verra exactement ce que vous avez vu.

{% tip %}

**Conseil** : Vous pouvez placer dans l’URL n’importe quel identificateur pouvant être résolu en commit, notamment des noms de branche, des SHA de commit spécifiques ou des balises.

{% endtip %}

## Création d’un lien permanent vers un extrait de code

Vous pouvez créer un lien permanent vers une ligne ou une plage de lignes de code spécifique dans une version spécifique d’un fichier ou d’une demande de tirage (pull request). Pour plus d’informations, consultez « [Création d’un lien permanent vers un extrait de code](/articles/creating-a-permanent-link-to-a-code-snippet/) ».

## Pour aller plus loin

- « [Archivage d’un dépôt GitHub](/articles/archiving-a-github-repository) »
