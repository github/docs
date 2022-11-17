---
title: Filtrage des fichiers dans une demande de tirage
intro: 'Pour vous aider à examiner rapidement les modifications apportées à une grande demande de tirage (pull request), vous pouvez filtrer les fichiers modifiés{% ifversion pr-tree-view %} ou utiliser l’arborescence de fichiers pour naviguer entre les fichiers{% endif %}.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
  - /articles/filtering-files-in-a-pull-request-by-file-type
  - /articles/filtering-files-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/filtering-files-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Filter files
ms.openlocfilehash: 1ca50334e4329d40ee164cd01523abc69e127ab3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884172'
---
Vous pouvez filtrer des fichiers dans une demande de tirage par type d’extension de fichier, par exemple `.html` ou `.js`, absence d’extension, propriété du code ou dotfiles.{% ifversion pr-tree-view %} Vous pouvez également utiliser l’arborescence de fichiers pour filtrer par chemin d’accès au fichier, naviguer entre les fichiers ou afficher une vue de haut niveau des fichiers modifiés. {% endif %}

## Utilisation de la liste déroulante du filtre de fichiers

{% tip %}

**Conseil :** pour simplifier l’affichage des différences de votre demande de tirage, vous pouvez également masquer temporairement les fichiers ou fichiers supprimés que vous avez déjà affichés dans la différence de demande de tirage du menu déroulant du filtre de fichiers.

{% endtip %}

{% data reusables.repositories.sidebar-pr %}
2. Dans la liste des demandes de tirage, cliquez sur la demande de tirage que vous souhaitez filtrer.
{% data reusables.repositories.changed-files %}
4. Utilisez le menu déroulant Filtre de fichiers, puis sélectionnez, désélectionnez les filtres souhaités ou cliquez dessus.
  ![Option de filtrage de fichier au-dessus de la différence de demande de tirage](/assets/images/help/pull_requests/file-filter-option.png)
5. Si vous le souhaitez, pour effacer la sélection du filtre, sous l’onglet **Fichiers modifiés**, cliquez sur **Effacer**.
  ![Effacer la sélection du filtre de fichier](/assets/images/help/pull_requests/clear-file-filter.png)

{% ifversion pr-tree-view %}
## Utilisation de l’arborescence de fichiers

{% data reusables.repositories.sidebar-pr %}
1. Dans la liste des demandes de tirage, cliquez sur la demande de tirage que vous souhaitez filtrer.
{% data reusables.repositories.changed-files %}

1. Cliquez sur un fichier dans l’arborescence de fichiers pour afficher la différence de fichier correspondante. Si l’arborescence des fichiers est masquée, cliquez sur {% octicon "sidebar-collapse" aria-label="The sidebar collapse icon" %} pour afficher l’arborescence des fichiers.

   {% note %}

   **Remarque** : l’arborescence de fichiers ne s’affiche pas si la largeur de l’écran est trop étroite ou si la demande de tirage ne contient qu’un seul fichier.

   {% endnote %}
   
   ![Capture d’écran de la zone de recherche des fichiers modifiés et de l’arborescence des fichiers mis en évidence](/assets/images/help/repository/file-tree.png)
1. Pour filtrer par chemin d’accès au fichier, entrez une partie ou tout le chemin d’accès du fichier dans la zone de recherche **Filtrer les fichiers modifiés**. Vous pouvez également utiliser la liste déroulante du filtre de fichiers. Pour plus d’informations, consultez « [Utilisation de la liste déroulante du filtre de fichiers](#using-the-file-filter-dropdown) ».

{% endif %}

## Pour aller plus loin

- « [À propos de la comparaison des branches dans les demandes de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests) »
- « [Recherche des fonctions et méthodes modifiées dans une demande de tirage (pull request)](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/finding-changed-methods-and-functions-in-a-pull-request) »
