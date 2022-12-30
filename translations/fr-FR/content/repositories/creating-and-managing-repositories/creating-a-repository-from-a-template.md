---
title: Création d’un dépôt à partir d’un modèle
intro: Vous pouvez générer un nouveau dépôt avec les mêmes structure de répertoires et fichiers qu’un dépôt existant.
redirect_from:
  - /articles/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-repository-from-a-template
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create from a template
ms.openlocfilehash: 16d124431426e19cf95c768e8a4cdaa5f4da2e17
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159763'
---
## À propos des modèles de dépôt

Toute personne disposant d’autorisations de lecture sur un modèle de dépôt peut créer un dépôt à partir de celui-ci. Pour plus d’informations, consultez « [Création d’un modèle de dépôt](/articles/creating-a-template-repository) ».

{% tip %}

**Astuce** : vous pouvez également créer un dépôt à partir d’un modèle à l’aide de la {% data variables.product.prodname_cli %}. Pour plus d’informations, consultez « [`gh repo create`](https://cli.github.com/manual/gh_repo_create) » dans la documentation {% data variables.product.prodname_cli %}.

{% endtip %}

Vous pouvez choisir d’inclure la structure et les fichiers de répertoire uniquement à partir de la branche par défaut du modèle de dépôt, ou d’inclure toutes les branches. Les branches créées à partir d’un modèle ont des historiques séparés, ce qui signifie que vous ne pouvez pas créer de demandes de tirage ou de fusion entre les branches.

La création d’un dépôt à partir d’un modèle est similaire à la duplication d’un dépôt, mais il existe des différences importantes :
- Une nouvelle duplication inclut tout l’historique de validation du dépôt parent, tandis qu’un dépôt créé à partir d’un modèle commence avec une validation unique.
- Les validations d’une duplication n’apparaissent pas dans votre graphique de contributions, tandis que les validations d’un dépôt créé à partir d’un modèle apparaissent dans votre graphique de contribution.
- Une duplication peut être un moyen temporaire de contribuer au code d’un projet existant, tandis que la création d’un dépôt à partir d’un modèle démarre un nouveau projet rapidement.

Pour plus d’informations sur les duplications, consultez « [À propos des duplications](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) ».

## Création d’un dépôt à partir d’un modèle

{% data reusables.repositories.navigate-to-repo %}
1. Au-dessus de la liste de fichiers, cliquez sur **Utiliser ce modèle**.
{% ifversion fpt or ghec %}
1. Sélectionnez **Créer un dépôt**.

   ![Bouton Utiliser ce modèle](/assets/images/help/repository/use-this-template-button.png)

   {% note %}

   **Remarque :** Vous pouvez également ouvrir le modèle dans un codespace et publier votre travail sur un nouveau dépôt plus tard. Pour plus d’informations, consultez « [Création d’un codespace à partir d’un modèle](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template) ».

   {% endnote %} {% endif %} {% data reusables.repositories.owner-drop-down %} {% data reusables.repositories.repo-name %} {% data reusables.repositories.choose-repo-visibility %}
1. Si vous le souhaitez, pour inclure la structure et les fichiers de répertoire de toutes les branches dans le modèle, et pas seulement de la branche par défaut, sélectionnez **Inclure toutes les branches**.
  ![Case à cocher Inclure toutes les branches](/assets/images/help/repository/include-all-branches.png) {% data reusables.repositories.select-marketplace-apps %}
8. Cliquez sur **Create repository from template** (Créer un référentiel à partir du modèle).
