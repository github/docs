---
title: Outils de migration de code source
intro: Vous pouvez utiliser des outils externes pour déplacer vos projets vers GitHub.
redirect_from:
  - /articles/importing-from-subversion
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
  - /github/importing-your-projects-to-github/importing-source-code-to-github/source-code-migration-tools
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Code migration tools
ms.openlocfilehash: 7877d435e7971f669d9d49a70d2d2450371b5159
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882166'
---
{% ifversion fpt or ghec %}

Nous vous recommandons d’utiliser [GitHub Importer](/articles/about-github-importer) pour importer des projets à partir de Subversion, Mercurial, Team Foundation Version Control (TFVC) ou d’un autre dépôt Git. Vous pouvez également utiliser ces outils externes pour convertir votre projet en Git.

{% endif %}

## Importation à partir de Subversion

Dans un environnement Subversion classique, plusieurs projets sont stockés dans un seul dépôt racine. Sur GitHub, chacun de ces projets est généralement mappé à un dépôt Git distinct pour un compte personnel ou une organisation. Nous vous suggérons d’importer chaque partie de votre dépôt Subversion dans un dépôt GitHub distinct si :

* Les collaborateurs doivent vérifier ou commiter cette partie du projet séparément
* Vous voulez que différentes parties aient leurs propres autorisations d’accès

Nous vous recommandons ces outils pour convertir des dépôts Subversion en Git :

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## Importation à partir de Mercurial

Nous vous recommandons [hg-fast-export](https://github.com/frej/fast-export) pour convertir des dépôts Mercurial en Git.

## Importation à partir de TFVC

Nous vous recommandons [git-tfs](https://github.com/git-tfs/git-tfs) pour déplacer des changements entre TFVC et Git.

Pour plus d’informations sur le déplacement de TFVC (système de gestion de versions centralisé) vers Git, consultez « [Planifier votre migration vers Git](https://docs.microsoft.com/devops/develop/git/centralized-to-git) » sur le site de la documentation Microsoft.

{% tip %}

**Astuce :** Après avoir converti votre projet en Git, vous pouvez le [pousser sur {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}

{% ifversion fpt or ghec %}

## Pour aller plus loin

- « [À propos de GitHub Importer](/articles/about-github-importer) »
- « [Importation d’un dépôt avec GitHub Importer](/articles/importing-a-repository-with-github-importer) »
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
