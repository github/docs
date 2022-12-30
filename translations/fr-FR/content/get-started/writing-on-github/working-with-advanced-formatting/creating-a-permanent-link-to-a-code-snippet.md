---
title: Création d’un lien permanent vers un extrait de code
intro: Vous pouvez créer un lien permanent vers une ligne ou une plage de lignes de code spécifique dans une version spécifique d’un fichier ou d’une demande de tirage (pull request).
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/creating-a-permanent-link-to-a-code-snippet
  - /articles/creating-a-permanent-link-to-a-code-snippet
  - /github/managing-your-work-on-github/creating-a-permanent-link-to-a-code-snippet
  - /github/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Permanent links to code
ms.openlocfilehash: d1c363eba2a45558f3fdc9b55025309544ef677b
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145066773'
---
## Liaison à du code

Ce type de lien permanent s’affichera en tant qu’extrait de code uniquement dans le dépôt d’où il provient. Dans d’autres dépôts, l’extrait de code de lien permanent s’affichera en tant qu’URL.

![Extrait de code affiché dans un commentaire](/assets/images/help/repository/rendered-code-snippet.png)

{% tip %}

**Astuce :** pour créer un lien permanent pour un fichier entier, consultez « [Obtention de liens permanents vers des fichiers](/articles/getting-permanent-links-to-files) ».

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
2. Localisez le code avec lequel que vous établir le lien :
    - Pour établir un lien à un code à partir d’un fichier, accédez à celui-ci.
    - Pour établir un lien à un code à partir d’une demande de tirage, accédez à celle-ci, puis cliquez sur {% octicon "diff" aria-label="The file diff icon" %} **Fichiers modifiés**. Ensuite, accédez au fichier contenant le code que vous souhaitez inclure dans votre commentaire, puis cliquez sur **Afficher**.
{% data reusables.repositories.choose-line-or-range %}
4. À gauche de la ligne ou de la plage de lignes, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab octicon" %}. Dans le menu déroulant, cliquez sur **Copier le lien permanent**.
  ![Menu Kebab avec une option permettant de copier un lien permanent pour une ligne sélectionnée](/assets/images/help/repository/copy-permalink-specific-line.png)
5. Accédez à la conversation dans laquelle vous souhaitez établir un lien à l’extrait de code.
6. Collez votre lien permanent dans un commentaire, puis cliquez sur **Commentaire**.
  ![Lien permanent collé dans un commentaire dans le même dépôt](/assets/images/help/repository/code-snippet-permalink-in-comment.png)

## Liaison à Markdown

Vous pouvez lier des lignes spécifiques dans des fichiers Markdown en chargeant le fichier Markdown sans rendu Markdown. Pour charger un fichier Markdown sans rendu, vous pouvez utiliser le paramètre `?plain=1` à la fin de l’URL du fichier. Par exemple : `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1`.

Vous pouvez créer un lien à une ligne spécifique dans le fichier Markdown de la même façon que dans du code. Ajoutez `#L` avec le numéro de ligne ou les chiffres à la fin de l’URL. Par exemple, `github.com/<organization>/<repository>/blob/<branch_name>/README.md?plain=1#L14` mettra en évidence la ligne 14 dans le fichier README.md brut.

## Pour aller plus loin

- « [Création d’un problème](/articles/creating-an-issue/) »
- « [Ouverture d’un problème à partir d’un code](/articles/opening-an-issue-from-code/) »
- « [Revue des modifications apportées dans les demandes de tirage](/articles/reviewing-changes-in-pull-requests/) »
