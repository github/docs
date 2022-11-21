---
title: Classification de votre dépôt avec des rubriques
intro: 'Pour aider d’autres personnes à trouver votre projet et à y contribuer, vous pouvez ajouter des rubriques à votre dépôt en lien avec la finalité, le domaine, les groupes d’affinités ou d’autres qualités importantes de votre projet.'
redirect_from:
  - /articles/about-topics
  - /articles/classifying-your-repository-with-topics
  - /github/administering-a-repository/classifying-your-repository-with-topics
  - /github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Classify with topics
ms.openlocfilehash: 26f51423140c086bbea019666b8d569419da3b38
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108341'
---
## À propos des rubriques

Avec les rubriques, vous pouvez explorer les dépôts dans un domaine particulier, rechercher des projets auxquels contribuer, et découvrir de nouvelles solutions à un problème spécifique. Les rubriques s’affichent sur la page principale d’un dépôt. Vous pouvez cliquer sur un nom de rubrique pour {% ifversion fpt or ghec %}voir les rubriques connexes et une liste d’autres dépôts classifiés avec cette rubrique{% else %}rechercher d’autres dépôts avec cette rubrique{% endif %}.

![Page principale du dépôt de test montrant des rubriques](/assets/images/help/repository/os-repo-with-topics.png)

Pour parcourir les rubriques les plus utilisées, accédez à https://github.com/topics/.

{% ifversion fpt or ghec %}Vous pouvez contribuer à l’ensemble de rubriques suggérées de {% data variables.product.product_name %}dans le dépôt [github/explore](https://github.com/github/explore). {% endif %}

Les administrateurs de dépôt peuvent ajouter toutes les rubriques qu’ils souhaitent à un dépôt. Les rubriques utiles pour classifier un dépôt incluent l’objectif prévu, le domaine, la communauté ou le langage du dépôt.{% ifversion fpt or ghec %} En outre, {% data variables.product.product_name %} analyse le contenu des dépôts publics et génère des rubriques suggérées que les administrateurs de dépôt peuvent accepter ou rejeter. Le contenu des dépôts privés n’est pas analysé et ne reçoit pas de suggestions de rubriques.{% endif %}

{% ifversion fpt %}Les dépôts publics et privés{% elsif ghec or ghes %}Les dépôts publics, privés et internes{% elsif ghae %}Les dépôts privés et internes{% endif %} peuvent avoir des rubriques, mais vous verrez uniquement les dépôts privés auxquels vous avez accès dans les résultats de recherche de rubriques.

Vous pouvez rechercher des dépôts associés à une rubrique particulière. Pour plus d’informations, consultez « [Recherche de dépôts](/search-github/searching-on-github/searching-for-repositories#search-by-topic) ». Vous pouvez également rechercher une liste de rubriques sur {% data variables.product.product_name %}. Pour plus d’informations, consultez « [Recherche de rubriques](/search-github/searching-on-github/searching-topics) ».

## Ajout de rubriques à votre dépôt

{% note %}

**Remarque :** Les noms de rubriques sont toujours publics, même si vous créez la rubrique à partir d’un dépôt privé.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
2. À droite de « À propos », cliquez sur {% octicon "gear" aria-label="The Gear icon" %}.
  ![Icône d’engrenage dans la page principale d’un dépôt](/assets/images/help/repository/edit-repository-details-gear.png)
3. Sous « Rubriques », tapez la rubrique que vous souhaitez ajouter à votre dépôt, puis tapez un espace.
  ![Formulaire pour entrer des rubriques](/assets/images/help/repository/add-topic-form.png)
4. Une fois que vous avez terminé d’ajouter des rubriques, cliquez sur **Enregistrer les modifications**.
  ![Bouton « Enregistrer les modifications » dans « Modifier les détails du dépôt »](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
