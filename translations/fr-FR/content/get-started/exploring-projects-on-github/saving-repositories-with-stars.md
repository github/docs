---
title: Enregistrement de dépôts avec des étoiles
intro: 'Vous pouvez classer les référentiels et les rubriques par ordre d’importance pour suivre les projets qui vous intéressent{% ifversion fpt or ghec %} et découvrir du contenu connexe dans votre fil d’actualité{% endif %}.'
redirect_from:
  - /articles/stars
  - /articles/about-stars
  - /articles/browsing-friends-stars
  - /articles/managing-your-stars
  - /articles/saving-repositories-with-stars
  - /github/getting-started-with-github/saving-repositories-with-stars
  - /github/getting-started-with-github/exploring-projects-on-github/saving-repositories-with-stars
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Save repos with stars
ms.openlocfilehash: 2a5a167884e10f40d5501b3e84ebc158fe2487b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146374178'
---
Vous pouvez rechercher, trier et filtrer vos dépôts et rubriques marqués d’une étoile sur votre {% data variables.explore.your_stars_page %}.

## À propos des étoiles

Quand vous marquez d’une étoile un dépôt ou une rubrique, vous pouvez plus facilement le trouver par la suite. Vous pouvez voir tous les dépôts et rubriques que vous avez marqués d’une étoile en accédant à votre {% data variables.explore.your_stars_page %}.

{% ifversion fpt or ghec %} Vous pouvez marquer d’une étoile des dépôts et des rubriques pour découvrir les projets similaires sur {% data variables.product.product_name %}. Quand vous ajoutez une étoile à des dépôts ou des rubriques, {% data variables.product.product_name %} peut vous recommander du contenu associé sur votre tableau de bord personnel. Pour plus d’informations, consultez « [Trouver des moyens de contribuer à l’open source sur {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github) » et « [À propos de votre tableau de bord personnel](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community) ».
{% endif %}

Quand vous ajoutez une étoile à un dépôt, vous montrez également au chargé de maintenance du dépôt que vous appréciez son travail. La plupart des classements de dépôt sur {% data variables.product.prodname_dotcom %} dépendent du nombre d’étoiles du dépôt. Par ailleurs, [Explorer](https://github.com/explore) montre les dépôts populaires en fonction de leur nombre d’étoiles.

## Ajout d’une étoile à un dépôt

L’ajout d’une étoile à un dépôt est un processus simple en deux étapes.

{% data reusables.repositories.navigate-to-repo %}
1. En haut à droite de la page, cliquez sur **Ajouter une étoile**.
![Ajout d’une étoile à un dépôt](/assets/images/help/stars/starring-a-repository.png)
1. Pour retirer une étoile que vous avez ajoutée à un dépôt, cliquez sur **Retirer l’étoile**.
![Retrait d’une étoile sur un dépôt](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}

## Affichage des personnes qui ont mis un référentiel en favori


Vous pouvez afficher tous ceux qui ont mis en favori un référentiel public ou un référentiel privé auquel vous avez accès. 


Pour afficher tous ceux qui ont mis un référentiel en favori, ajoutez `/stargazers` à la fin de l’URL d’un référentiel. Par exemple, pour afficher les utilisateurs qui ont mis en favori le référentiel github/docs, visitez https://github.com/github/docs/stargazers.


## Organisation des dépôts marqués d’une étoile avec des listes

{% note %}

**Remarque :** Les listes sont actuellement en version bêta publique et susceptibles de changer.

{% endnote %}

Organisez les dépôts que vous avez marqués d’une étoile avec des listes publiques. Vous pouvez créer des listes publiques qui apparaissent dans votre page d’étoiles sur `https://github.com/USERNAME?tab=stars`.

Si vous ajoutez un dépôt privé à une liste, il s’affiche uniquement dans votre liste pour les personnes qui ont un accès `read` sur le dépôt.

![Capture d’écran des listes sur la page d’étoiles](/assets/images/help/stars/lists-overview-on-stars-page.png)

Vous pouvez ajouter un dépôt à une liste nouvelle ou existante partout où vous voyez un menu déroulant **Ajouter une étoile** ou **Marqué d’une étoile** pour un dépôt, que ce soit dans une page de dépôt ou dans une liste de dépôts marqués d’une étoile. 

![Capture d’écran du menu déroulant « Ajouter une étoile » avec les options de liste proposées dans la page du dépôt](/assets/images/help/stars/stars-dropdown-on-repo.png)

![Capture d’écran du menu déroulant « Marqué d’une étoile » avec les options de liste proposées dans une liste de dépôts marqués d’une étoile](/assets/images/help/stars/add-repo-to-list.png)

### Création d’une liste

{% data reusables.stars.stars-page-navigation %}
2. À côté de « Listes », cliquez sur **Créer une liste**.
  ![Capture d’écran du bouton « Créer une liste »](/assets/images/help/stars/create-list.png)
3. Entrez un nom et une description pour votre liste, puis cliquez sur **Créer**.
  ![Capture d’écran de la boîte de dialogue modale montrant où entrer le nom et la description, et le bouton « Créer ».](/assets/images/help/stars/create-list-with-description.png)

### Ajout d’un dépôt à une liste

{% data reusables.stars.stars-page-navigation %}
2. Recherchez le dépôt que vous voulez ajouter à votre liste.
  ![Capture d’écran de la barre de recherche des dépôts marqués d’une étoile](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. À côté du dépôt à ajouter, utilisez le menu déroulant **Marqué d’une étoile** et sélectionnez votre liste.
  ![Capture d’écran de la liste déroulante montrant des cases à cocher de liste](/assets/images/help/stars/add-repo-to-list.png)

### Suppression d’un dépôt dans votre liste

{% data reusables.stars.stars-page-navigation %}
2. Sélectionnez votre liste.
3. À côté du dépôt à supprimer, utilisez le menu déroulant **Marqué d’une étoile** et désélectionnez votre liste.
  ![Capture d’écran de la liste déroulante montrant des cases à cocher de liste](/assets/images/help/stars/add-repo-to-list.png)

### Modification d’un nom ou d’une description de liste

{% data reusables.stars.stars-page-navigation %}
1. Sélectionnez la liste que vous voulez modifier.
2. Cliquez sur **Modifier la liste**.
3. Mettez à jour le nom ou la description, puis cliquez sur **Enregistrer la liste**.
  ![Capture d’écran de la boîte de dialogue modale avec « Enregistrer la liste »](/assets/images/help/stars/edit-list-options.png) 

### Suppression d’une liste

{% data reusables.stars.stars-page-navigation %}
2. Sélectionnez la liste à supprimer.
3. Cliquez sur **Supprimer la liste**.
  ![Capture d’écran de la boîte de dialogue modale avec « Supprimer la liste »](/assets/images/help/stars/edit-list-options.png)
4. Pour confirmer, cliquez sur **Supprimer**.

{% endif %}

## Recherche de dépôts et de rubriques marqués d’une étoile

Vous pouvez utiliser la barre de recherche de votre {% data variables.explore.your_stars_page %} pour trouver rapidement les dépôts et les rubriques que vous avez marqués d’une étoile. 

1. Accédez à votre {% data variables.explore.your_stars_page %}.
1. Utilisez la barre de recherche pour rechercher vos dépôts ou rubriques marqués d’une étoile par leur nom.
![Recherche en utilisant les étoiles](/assets/images/help/stars/stars_search_bar.png)

La barre de recherche recherche uniquement le nom d’un dépôt ou d’une rubrique, elle ne recherche pas d’autres qualificateurs (par exemple, la taille du dépôt ou la date de dernière mise à jour).

## Tri et filtrage des étoiles dans votre page d’étoiles

Vous pouvez utiliser le tri ou le filtrage pour personnaliser la vue des dépôts et des rubriques marqués d’une étoile sur votre page d’étoiles.

1. Accédez à votre {% data variables.explore.your_stars_page %}.
1. Pour trier les étoiles, sélectionnez le menu déroulant **Trier**, puis sélectionnez **Étoiles récentes**, **Récemment actifs** ou **Le plus d’étoiles**.
![Tri des étoiles](/assets/images/help/stars/stars_sort_menu.png)
1. Pour filtrer votre liste d’étoiles en fonction de leur langage, cliquez sur le langage souhaité sous **Filtrer par langage**.
![Filtrer les étoiles par langage](/assets/images/help/stars/stars_filter_language.png)
1. Pour filtrer votre liste d’étoiles en fonction du dépôt ou de la rubrique, cliquez sur l’option souhaitée.
![Filtrer les étoiles par rubrique](/assets/images/help/stars/stars_filter_topic.png)

## Pour aller plus loin

- « [Classer votre dépôt avec des rubriques](/articles/classifying-your-repository-with-topics) »
