---
title: Utilisation de GitHub Code Search (bêta)
intro: 'Vous pouvez utiliser des suggestions, des complétions et des recherches enregistrées dans l’interface de recherche mise à niveau pour trouver rapidement ce que vous cherchez sur {% data variables.product.prodname_dotcom_the_website %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: github-code-search
topics:
  - GitHub search
ms.openlocfilehash: 7578dd05f251b1df23fbd64c63d04e533f7fa9ef
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159750'
---
{% note %}

**Remarque :** {% data reusables.search.code-search-code-view-beta-note %}

{% data reusables.search.code-search-link %} {% data reusables.search.code-view-link %}

{% endnote %}

## À propos de l’utilisation de la nouvelle recherche de code (bêta)

Une fois que la bêta de la nouvelle recherche de code sera accessible, GitHub indexera tous les dépôts que vous détenez ainsi que ceux des organisations dont vous êtes membre, qu’ils soient publics, privés ou internes. Cela signifie que vous pouvez effectuer des recherches dans tous vos dépôts, en plus des dépôts publics déjà indexés sur {% data variables.product.prodname_dotcom_the_website %}. Seuls les utilisateurs autorisés à voir votre code sur {% data variables.product.prodname_dotcom_the_website %} pourront le voir dans les résultats de la recherche. Les duplications (forks) sont indexées et font l’objet de recherches de la même manière que les autres dépôts.

La totalité du code n’est pas indexée. Vous ne pouvez effectuer des recherches que dans les branches par défaut des dépôts. Pour plus d’informations sur les limitations connues, consultez « [À propos de GitHub Code Search (bêta)](/search-github/github-code-search/about-github-code-search#limitations) ».

La bêta de la nouvelle recherche de code est intégrée à la bêta du nouveau mode Code. {% data reusables.search.code-view-link %}

## Utilisation de la barre de recherche

En plus du nouveau moteur de recherche de code, la bêta comprend une interface de recherche mise à niveau sur {% data variables.product.prodname_dotcom_the_website %}. À l’aide des suggestions, des complétions et des recherches enregistrées, vous pouvez trouver rapidement ce que vous cherchez, bien souvent sans avoir à taper complètement une requête, ou sans avoir à afficher la page des résultats de la recherche.

Pour plus d’informations sur la syntaxe de recherche de la nouvelle recherche de code (bêta), consultez « [Présentation de la syntaxe de GitHub Code Search (bêta)](/search-github/github-code-search/understanding-github-code-search-syntax) ».

{% data reusables.search.non-code-search-explanation %}

1. Dans la zone de navigation supérieure de {% data variables.product.prodname_dotcom_the_website %}, cliquez dans la barre de recherche.
1. Sous la barre de recherche, vous pouvez voir une liste de suggestions organisées par catégorie, incluant notamment les recherches récentes et les dépôts suggérés ainsi que les équipes et les projets auxquels vous avez accès. Vous pouvez également voir une liste des recherches enregistrées que vous avez créées. Pour plus d’informations sur les recherches enregistrées, consultez « [Création et gestion des recherches enregistrées](#creating-and-managing-saved-searches) ».

    ![Barre de recherche avec suggestions et recherches enregistrées](/assets/images/help/search/code-search-beta-search-bar.png)

    Si vous cliquez sur l’une des suggestions spécifiques, vous êtes redirigé vers la page correspondant à cette suggestion (par exemple la page du dépôt ou du projet). Si vous cliquez sur une recherche récente ou enregistrée, en fonction du type de recherche, la requête de recherche apparaît dans la barre de recherche, ou vous êtes redirigé vers la page des résultats de la recherche correspondant au terme recherché.

1. Une fois que vous avez commencé à taper une requête de recherche, vous voyez s’afficher une liste de complétions et de suggestions correspondant à votre requête. Vous pouvez cliquer sur une suggestion pour accéder directement à un emplacement spécifique. Au fur et à mesure que vous tapez d’autres qualificateurs, vous voyez s’afficher des suggestions plus spécifiques, par exemple des fichiers de code auxquels vous pouvez accéder directement.
   
   ![Barre de recherche avec une requête et des suggestions de code](/assets/images/help/search/code-search-beta-search-bar-code-suggestions.png)

1.  Une fois que vous avez tapé votre requête, vous pouvez également appuyer sur Entrée pour accéder à l’affichage complet des résultats de la recherche, où vous pouvez voir chaque correspondance ainsi qu’une interface visuelle permettant d’appliquer des filtres. Pour plus d’informations, consultez « [Utilisation de l’affichage des résultats de la recherche](#using-the-search-results-view) ».

## Création et gestion des recherches enregistrées

1. Dans la zone de navigation supérieure de {% data variables.product.prodname_dotcom_the_website %}, cliquez sur la barre de recherche, puis commencez à taper une requête de recherche (ou n’importe quelle lettre).
1. Sous la barre de recherche, la section « Recherches enregistrées » doit s’afficher. Cliquez sur {% octicon "plus-circle" aria-label="The plus-circle icon" %} **Créer une recherche enregistrée**.

    ![Bouton « Créer une recherche enregistrée » dans la barre de recherche](/assets/images/help/search/code-search-beta-create-saved-search.png)

1. Dans la fenêtre indépendante, indiquez le nom souhaité pour votre requête ainsi que la requête à enregistrer. Cliquez sur **Créer une recherche enregistrée**.

    ![Fenêtre « Créer une recherche enregistrée »](/assets/images/help/search/code-search-beta-create-saved-search-window.png)

1. Si vous cliquez à nouveau dans la barre de recherche, vous pouvez désormais voir votre recherche enregistrée dans la section « Recherches enregistrées » sous la barre de recherche. Cliquez sur une entrée de recherche enregistrée pour ajouter la requête à la barre de recherche, et filtrer les suggestions de manière appropriée.

  ![Utiliser la recherche enregistrée dans la barre de recherche](/assets/images/help/search/code-search-beta-saved-search-in-search-bar.png)

    - Pour modifier une recherche enregistrée, dans la section « Recherches enregistrées », cliquez sur {% octicon "pencil" aria-label="The pencil icon" %} à droite de la recherche enregistrée. 
    - Pour supprimer une recherche enregistrée, cliquez sur {% octicon "trash" aria-label="The trash icon" %} à droite de la recherche enregistrée.

  ![Boutons permettant de modifier ou supprimer une recherche enregistrée](/assets/images/help/search/code-search-beta-edit-or-delete-saved-search.png)

## Utilisation de l’affichage des résultats de la recherche

L’affichage des résultats de la recherche existe déjà pour la recherche classique sur GitHub. Les fonctionnalités de la plupart des types de recherche, à l’exception du code, sont les mêmes. Une fois la bêta de la nouvelle recherche de code activée, la page des résultats de la recherche vous propose une IU repensée incluant des filtres pris en charge dans le nouveau moteur de recherche de code, par exemple les filtres de chemin et de symbole.

Pour construire une requête de recherche ainsi que pour voir et filtrer les résultats à l’aide d’une interface visuelle, vous pouvez utiliser {% data variables.search.search_page_url %} ou {% data variables.search.advanced_url %}. Si vous appuyez sur Entrée après avoir tapé une requête de recherche dans la barre de recherche, vous êtes également redirigé vers l’affichage des résultats de la recherche.

Dans l’affichage des résultats de la recherche, vous pouvez naviguer entre les différents types de résultat de la recherche, par exemple le code, les problèmes, les demandes de tirage, les dépôts, etc. Vous pouvez également voir et utiliser des filtres.

![Affichage des résultats de la recherche](/assets/images/help/search/code-search-beta-results-view.png)
