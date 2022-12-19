---
title: Importer un dépôt Git en utilisant la ligne de commande
intro: '{% ifversion fpt %} Si [GitHub Importer](/articles/importing-a-repository-with-github-importer) n’est pas adapté à vos besoins, par exemple si votre code existant est hébergé sur un réseau privé, nous vous recommandons d’importer à l’aide de la ligne de commande. {% else %} L’importation de projets Git à l’aide de la ligne de commande convient lorsque votre code existant est hébergé sur un réseau privé. {% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Import repo locally
ms.openlocfilehash: bd3a5e5ffca38250a74851444f6cac4cbb06eb53
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145128966'
---
Avant de commencer, vérifiez que vous connaissez les éléments suivants :

- Votre nom d’utilisateur {% data variables.product.product_name %}
- L’URL de clonage du dépôt externe, par exemple `https://external-host.com/user/repo.git` ou `git://external-host.com/user/repo.git` (ou bien avec `user@` devant le nom de domaine `external-host.com`)

{% tip %}

À des fins de démonstration, nous allons utiliser :

- Un compte externe nommé **extuser**
- Un hôte Git externe nommé `https://external-host.com`
- Un compte personnel {% data variables.product.product_name %} nommé **ghuser**
- Un dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} nommé **repo.git**

{% endtip %}

1. [Créez un dépôt sur {% data variables.product.product_name %}](/articles/creating-a-new-repository). Vous allez importer votre dépôt Git externe dans ce nouveau dépôt.
2. Sur la ligne de commande, créez un clone « nu » du dépôt en utilisant l’URL de clonage externe. Cette opération crée une copie complète des données, mais sans répertoire de travail où modifier les fichiers. Elle garantit une exportation propre et actualisée de toutes les anciennes données.
  ```shell
  $ git clone --bare https://external-host.com/<em>extuser</em>/<em>repo.git</em>
  # Makes a bare clone of the external repository in a local directory
  ```
3. Poussez le dépôt cloné localement vers {% data variables.product.product_name %} avec l’option « miroir », ce qui garantit que toutes les références comme les branches et les étiquettes seront bien copiées dans le dépôt importé.
  ```shell
  $ cd <em>repo.git</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>ghuser</em>/<em>repo.git</em>
  # Pushes the mirror to the new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}
  ```
4. Supprimez le dépôt local temporaire.
  ```shell
  $ cd ..
  $ rm -rf <em>repo.git</em>
  ```
