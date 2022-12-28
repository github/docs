---
title: Navigation dans les fichiers avec le nouveau mode Code (bêta)
intro: 'Avec le nouveau mode Code (bêta), vous pouvez voir votre code en contexte à l’aide d’une arborescence des fichiers où il est facile de naviguer et qui dispose d’une recherche de symboles intégrée.'
allowTitleToDifferFromFilename: true
versions:
  feature: file-tree-view
topics:
  - Repositories
shortTitle: New code view (beta)
ms.openlocfilehash: 0c0fe588c92f67c92d7f3ffaa09716da39ac4551
ms.sourcegitcommit: 57bef7d45acfa987d82e320c7581c87df320a28a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/18/2022
ms.locfileid: '148172186'
---
{% note %}

**Remarque** : {% data reusables.search.code-search-code-view-beta-note %} 

{% data reusables.search.code-search-link %}

{% endnote %}

## À propos du nouveau mode Code (bêta)
La bêta du nouveau mode Code améliore la navigation à l’aide d’une arborescence des fichiers, simplifie la modification des fichiers, introduit un volet de symboles pour la recherche et la navigation basée sur les symboles, et met à jour le mode Responsabilité pour conserver le contexte des fichiers. Le nouveau mode Code est intégré à un nouveau moteur de recherche de code et une nouvelle interface de recherche dans une bêta publique limitée sur {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.search.code-search-link %}

Pour accéder au nouveau mode Code (bêta) ainsi qu’à la nouvelle recherche de code, vous pouvez vous inscrire sur la [liste d’attente](https://github.com/features/code-search-code-view/signup).

Pour envoyer des commentaires sur la bêta du nouveau mode Code, consultez le [forum de discussion](https://github.com/orgs/community/discussions/categories/repositories).

## Activation et désactivation de la nouvelle recherche de code et du nouveau mode Code (bêta)

{% data reusables.search.enabling-and-disabling-code-search-and-view-beta %}

## Utilisation de l’arborescence des fichiers
La nouvelle arborescence des fichiers est un panneau qui affiche les répertoires et les fichiers d’un dépôt au sein d’une arborescence où il est facile de naviguer. Vous pouvez vous déplacer rapidement entre les répertoires et les fichiers, et mieux comprendre le contexte de chaque élément que vous visualisez.

1. Sélectionnez un dépôt, puis cliquez sur un répertoire ou un fichier de ce dépôt pour ouvrir l’arborescence des fichiers.

  ![Capture d’écran du dépôt « github/docs » avec mise en évidence de l’arborescence des fichiers](/assets/images/help/repository/file-tree-view-directory-selected.png)

1. Pour rechercher un répertoire ou un fichier spécifique, cliquez sur la barre de recherche {% octicon "filter" aria-label="The filter icon" %} **Accéder au fichier**, tapez le nom du répertoire ou du fichier, puis sélectionnez le répertoire ou le fichier correspondant dans les résultats. Vous pouvez voir le chemin d’un répertoire ou d’un fichier sous chaque résultat de la recherche.

  ![Capture d’écran de l’arborescence des fichiers avec mise en évidence de la barre de recherche « Accéder au fichier »](/assets/images/help/repository/file-tree-view-jump-to-file.png)

     - Pour effectuer une recherche dans le dépôt à l’aide de la barre de recherche de {% data variables.product.prodname_dotcom %}, cliquez sur {% octicon "search" aria-label="The search icon" %}.

        ![Capture d’écran de l’arborescence des fichiers avec mise en évidence de l’icône Rechercher](/assets/images/help/repository/file-tree-view-search-icon.png)

1. Pour passer d’une branche à l’autre, sélectionnez le menu déroulant de branche {% octicon "git-branch" aria-label="The branch icon" %}, puis cliquez sur la branche souhaitée dans les résultats. Pour voir toutes les branches d’un dépôt, cliquez sur **Voir toutes les branches**.

  ![Capture d’écran de l’arborescence des fichiers avec mise en évidence de l’onglet « Branches » du menu déroulant de branche](/assets/images/help/repository/file-tree-view-branch-dropdown.png)

1. Pour passer d’une étiquette à l’autre, sélectionnez le menu déroulant de branche {% octicon "git-branch" aria-label="The branch icon" %}, cliquez sur l’onglet **Étiquettes**, puis cliquez sur l’étiquette souhaitée dans les résultats. Pour voir toutes les étiquettes d’un dépôt, cliquez sur **Voir toutes les étiquettes**.

  ![Capture d’écran de l’arborescence des fichiers avec mise en évidence de l’onglet « Étiquettes » du menu déroulant de branche](/assets/images/help/repository/file-tree-view-branch-dropdown-tags.png)

## Utilisation de fichiers
Le nouveau mode Code comprend également des mises à jour de la façon dont vous utilisez les fichiers. Les fonctionnalités existantes, par exemple la modification d’un fichier, la création ou le chargement d’un fichier ainsi que la suppression d’un fichier ou d’un répertoire ont été simplifiées. Vous disposez désormais d’un accès rapide à la modification de fichier dans github.dev ou {% data variables.product.prodname_desktop %} ainsi qu’à une fonction intégrée de recherche dans les fichiers. 

1. Sélectionnez un dépôt, puis cliquez sur un fichier de ce dépôt pour ouvrir le nouveau mode Code.

  ![Capture d’écran du dépôt « github/docs » avec mise en évidence d’un fichier sélectionné dans l’arborescence des fichiers](/assets/images/help/repository/file-tree-view-file-selected.png)

1. Pour modifier un fichier dans l’éditeur de fichiers intégré, cliquez sur {% octicon "pencil" aria-label="The pencil icon" %}.

  ![Capture d’écran de l’éditeur de fichiers dans le nouveau mode Code avec mise en évidence de l’icône de modification](/assets/images/help/repository/code-view-edit-icon.png)

1. Pour modifier un fichier sur github.dev {% data variables.codespaces.serverless %} or {% data variables.product.prodname_desktop %}, sélectionnez {% octicon "triangle-down" aria-label="The downwards-facing triangle icon" %} à côté de {% octicon "pencil" aria-label="The pencil icon" %}, puis cliquez sur **github.dev** ou **{% data variables.product.prodname_desktop %}** .

  {% note %}

  **Remarque :** le {% data variables.codespaces.serverless %} github.dev est actuellement en préversion bêta. Vous pouvez nous faire part de vos commentaires [dans nos discussions](https://github.com/community/community/discussions/categories/general).

  {% endnote %}

  ![Capture d’écran de l’éditeur de fichiers dans le nouveau mode Code avec mise en évidence du menu déroulant de modification](/assets/images/help/repository/code-view-edit-dropdown.png)

1. Pour rechercher des caractères spécifiques dans un fichier, visualisez son code brut en cliquant sur le bouton **Code**. Appuyez ensuite sur <kbd>Commande</kbd>+<kbd>F</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux), puis tapez les caractères à trouver. Vous pouvez naviguer parmi les résultats en appuyant sur <kbd>Retour</kbd> (Mac) ou sur <kbd>Entrée</kbd> (Windows/Linux), ou en cliquant sur {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} et {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}.

  {% note %}

  **Remarque :** Pour utiliser la fonction de recherche par défaut de votre navigateur, appuyez sur <kbd>Commande</kbd>+<kbd>F</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>F</kbd> (Windows/Linux) à deux reprises. Sachez que la fonction de recherche par défaut de votre navigateur ne peut pas effectuer de recherches dans l’intégralité d’un fichier volumineux, alors que la recherche intégrée au nouveau mode Code peut le faire.

  {% endnote %}

  ![Capture d’écran de la fonction « Rechercher dans un fichier » du nouveau mode Code](/assets/images/help/repository/code-view-find-in-file.png)

1. Pour ajouter un nouveau fichier à un répertoire spécifique, cliquez sur ce répertoire, puis cliquez sur {% octicon "plus" aria-label="The plus sign icon" %} **Nouveau fichier**, ou cliquez sur {% octicon "plus" aria-label="The plus sign icon" %} dans l’arborescence des fichiers.

  ![Capture d’écran de l’arborescence des fichiers avec mise en évidence de l’icône de signe plus](/assets/images/help/repository/file-tree-view-new-file-icon.png)

1. Pour supprimer un répertoire ou un fichier, accédez à celui-ci, puis cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}. Cliquez ensuite sur **Supprimer le répertoire** ou sur **Supprimer le fichier**.

  ![Capture d’écran du menu d’options dans le nouveau mode Code avec mise en évidence de l’option « Supprimer le répertoire »](/assets/images/help/repository/code-view-delete-directory.png)

1. Pour charger un fichier, accédez au répertoire choisi, puis cliquez sur {% octicon "upload" aria-label="The upload icon" %} **Charger des fichiers**, ou effectuez un glisser-déposer du fichier dans votre navigateur.

  ![Capture d’écran du bouton « Charger des fichiers » dans le nouveau mode Code](/assets/images/help/repository/code-view-upload-files.png)

## Utilisation du volet de symboles
Vous pouvez désormais voir et naviguer rapidement parmi les symboles tels que les fonctions ou les classes dans votre code avec le volet de symboles. Vous pouvez rechercher un symbole dans un seul fichier, dans tous les fichiers d’un dépôt ou même dans tous les dépôts publics sur {% data variables.product.prodname_dotcom %}.

La recherche de symboles est une fonctionnalité de la nouvelle recherche de code (bêta). Pour plus d’informations, consultez « [Présentation de la syntaxe de GitHub Code Search (bêta)](/search-github/github-code-search/understanding-github-code-search-syntax#symbol-qualifier) ».

1. Sélectionnez un dépôt, puis accédez à un fichier contenant des symboles.
2. Pour afficher le volet de symboles, cliquez sur {% octicon "code-square" aria-label="The code square icon" %}.

  ![Capture d’écran de l’icône du volet de symboles dans le nouveau mode Code](/assets/images/help/repository/code-view-symbols-pane-icon.png)

  Vous pouvez également ouvrir le volet de symboles en cliquant sur un symbole éligible dans votre fichier. Les symboles cliquables sont mis en surbrillance en jaune quand vous pointez sur eux.

  ![Capture d’écran d’un fichier dans le nouveau mode Code avec mise en évidence d’un symbole cliquable](/assets/images/help/repository/code-view-clickable-symbol.png)

1. Cliquez sur le symbole à rechercher dans le volet de symboles ou dans le fichier lui-même.

  ![Capture d’écran du volet de symboles avec mise en évidence d’un symbole rempli automatiquement](/assets/images/help/repository/code-view-symbols-pane-symbol.png)

   - Pour rechercher un symbole dans l’ensemble du dépôt, cliquez sur **Rechercher ce symbole dans ce dépôt**. Pour rechercher un symbole dans tous les dépôts de {% data variables.product.prodname_dotcom %}, cliquez sur **tous les dépôts**.

      ![Capture d’écran du volet de symboles avec mise en évidence des options permettant d’élargir l’étendue de la recherche d’un symbole](/assets/images/help/repository/code-view-symbols-pane-expand-search.png)

1. Pour naviguer parmi les références à un symbole, cliquez sur {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} ou sur {% octicon "chevron-up" aria-label="The upwards-facing chevron icon" %}.

  ![Capture d’écran du volet de symboles avec mise en évidence des chevrons de navigation de recherche](/assets/images/help/repository/code-view-symbol-result-navigation.png)

1. Pour accéder à une référence spécifique à un symbole, cliquez sur le résultat de la recherche de symboles sous {% octicon "chevron-down" aria-label="The downwards-facing chevron icon" %} **Dans ce fichier**.

  ![Capture d’écran du volet de symboles avec mise en évidence d’un résultat de la recherche de symboles](/assets/images/help/repository/code-view-symbol-search-result.png)

1. Pour quitter la recherche d’un symbole spécifique, cliquez sur {% octicon "arrow-left" aria-label="The left arrow icon" %} **Tous les symboles**.

  ![Capture d’écran du volet de symboles avec mise en évidence du bouton « Tous les symboles »](/assets/images/help/repository/code-view-symbols-pane-all-symbols.png)

## Utilisation du mode Responsabilité
Au lieu de perdre le contexte du fichier quand vous passez au mode Responsabilité, vous pouvez désormais utiliser le nouveau mode Code pour basculer rapidement entre le mode Responsabilité, le mode Code brut et l’aperçu d’un fichier (en fonction du type de fichier).

1. Sélectionnez un dépôt, puis cliquez sur un fichier de ce dépôt pour ouvrir le nouveau mode Code.

  ![Capture d’écran du dépôt « github/docs » avec mise en évidence d’un fichier sélectionné dans l’arborescence des fichiers](/assets/images/help/repository/file-tree-view-file-selected.png)

1. Pour voir l’historique des révisions du fichier, cliquez sur **Responsabilité**. Ce mode vous permet d’accéder à un historique des révisions ligne par ligne, où le code se trouve dans un fichier séparé par commit. Chaque commit liste l’auteur, la description et la date du commit.

  ![Capture d’écran du nouveau mode Code avec mise en évidence du bouton « Responsabilité »](/assets/images/help/repository/code-view-blame-button.png)

   - Pour voir les versions d’un fichier avant un commit particulier, cliquez sur {% octicon "versions" aria-label="The versions icon" %}.

      ![Capture d’écran d’un commit en mode Responsabilité avec mise en évidence de l’icône des versions](/assets/images/help/repository/code-view-blame-hide-commit.png)

   - Pour plus d’informations sur des commits particuliers, cliquez sur la description du commit.

      ![Capture d’écran d’un commit en mode Responsabilité avec mise en évidence de la description du commit](/assets/images/help/repository/code-view-blame-commit-description.png)

1. Pour retourner au mode Code brut, cliquez sur **Code**.

  ![Capture d’écran de la barre d’outils du mode Code avec mise en évidence du bouton de mode Code](/assets/images/help/repository/code-view-button.png)

   - Si vous visualisez un fichier Markdown, vous pouvez également cliquer sur **Aperçu** pour retourner à la vue où la mise en forme Markdown est appliquée.

      ![Capture d’écran de la barre d’outils du mode Code avec mise en évidence du bouton d’aperçu Markdown](/assets/images/help/repository/code-view-preview-button.png)

## Pour aller plus loin

- « [Déplacement d’un fichier](/repositories/working-with-files/managing-files/moving-a-file-to-a-new-location) »
- « [À propos de GitHub Code Search (bêta)](/search-github/github-code-search/about-github-code-search) »
