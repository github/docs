---
title: À propos des langages d’un dépôt
intro: Les fichiers et répertoires d’un dépôt déterminent les langages qui le composent. Vous pouvez afficher les langages d’un dépôt pour obtenir une vue d’ensemble rapide de ce dernier.
redirect_from:
  - /articles/my-repository-is-marked-as-the-wrong-language
  - /articles/why-isn-t-my-favorite-language-recognized
  - /articles/my-repo-is-marked-as-the-wrong-language
  - /articles/why-isn-t-sql-recognized-as-a-language
  - /articles/why-isn-t-my-favorite-language-recognized-by-github
  - /articles/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/about-repository-languages
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-repository-languages
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository languages
ms.openlocfilehash: 3796ec1828bb8f64072f62255d76ca79c4467457
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132239'
---
{% data variables.product.product_name %} utilise la [bibliothèque Linguist](https://github.com/github/linguist) open source pour déterminer les langages des fichiers à des fins de mise en surbrillance de la syntaxe et pour les statistiques des dépôts. Les statistiques des langages sont mises à jour une fois que vous avez poussé (push) des changements dans votre branche par défaut.

Certains fichiers sont difficiles à identifier et parfois, les projets contiennent plus de fichiers de bibliothèque et de fournisseur que leur code principal. Si vous recevez des résultats incorrects, consultez le [guide de résolution des problèmes](https://github.com/github/linguist/blob/master/docs/troubleshooting.md) de Linguist pour obtenir de l’aide.

## Langages de balisage

Les langages de balisage sont rendus au format HTML et apparaissent inclus en utilisant notre [bibliothèque de balisage](https://github.com/github/markup) open source. Pour le moment, nous n’acceptons pas de nouveaux langages de balisage au sein de {% data variables.product.product_name %}. En revanche, nous assurons activement la maintenance de nos langages de balisage actuels. En cas de difficultés, [créez un problème](https://github.com/github/markup/issues/new).
