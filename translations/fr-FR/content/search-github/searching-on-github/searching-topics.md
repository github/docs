---
title: Recherche de rubriques
intro: 'Vous pouvez rechercher des rubriques associées à des dépôts sur {% data variables.product.product_name %}.'
redirect_from:
  - /articles/searching-topics
  - /github/searching-for-information-on-github/searching-topics
  - /github/searching-for-information-on-github/searching-on-github/searching-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b409f8476fe4191bab22ba90e502f18470937f4d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145106025'
---
## Rechercher des rubriques dans {% data variables.product.product_name %}

Vous pouvez rechercher des rubriques sur {% data variables.product.product_name %}, explorer des rubriques connexes et voir le nombre de dépôts associés à une certaine rubrique.

1. Accédez à https://github.com/search.
2. Tapez un mot clé de rubrique.
  ![champ de recherche](/assets/images/help/search/search-field.png)
3. Dans la barre latérale gauche, pour affiner votre recherche de rubriques, cliquez sur **Rubriques**.
{% ifversion fpt or ghec %} ![Page des résultats de recherche du dépôt Jekyll avec l’option de menu latéral Rubriques en évidence](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %} ![Page des résultats de recherche du dépôt Jekyll sur dotcom avec l’option de menu latéral Rubriques en évidence](/assets/images/help/search/topic-left-side-navigation.png){% endif %}

## Limitation de votre recherche avec des qualificateurs de recherche

Si vous souhaitez explorer des dépôts sur une rubrique, rechercher des projets auxquels contribuer, ou découvrir les rubriques les plus populaires sur {% data variables.product.product_name %}, vous pouvez rechercher dans les rubriques avec les qualificateurs de recherche `is:featured`, `is:curated`, `repositories:n` et `created:YYYY-MM-DD`.

Le qualificateur de recherche `is:featured` limite les résultats de la recherche aux rubriques contenant le plus de dépôts sur {% data variables.product.product_name %}. Ces rubriques sont également présentées à l’adresse https://github.com/topics/.

Le qualificateur de recherche `is:curated` limite les résultats de la recherche aux rubriques auxquelles les membres de la communauté ont ajouté des informations. Pour plus d’informations, consultez [Explorer un dépôt](https://github.com/github/explore).

Vous pouvez filtrer des rubriques en fonction de leur date de création en utilisant le paramètre date et `created:`, ou en fonction du nombre de dépôts associés à cette rubrique à l’aide de `repositories:n`. Ces deux qualificateurs peuvent utiliser les [qualificateurs de plage supérieur à et inférieur à](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificateur  | Exemple |
| ------------- | -------------
| `is:curated`| [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) correspond à des rubriques qui sont organisées et contiennent le mot « javascript ».
| `is:featured` | [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) correspond à des rubriques qui sont mises en vedette sur https://github.com/topics/ et contiennent le mot « javascript ».
|  `is:not-curated` | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) correspond à des rubriques qui ne contiennent pas d’informations supplémentaires, telles qu’une description ou un logo, et contiennent le mot « javascript ».
|  `is:not-featured`| [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) correspond à des rubriques qui ne sont pas mises en vedette sur https://github.com/topics/ et contiennent le mot « javascript ».
| `repositories:n` | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) correspond à des rubriques qui comptent plus de 5 000 référentiels.
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) correspond à des rubriques contenant le mot « serverless », qui ont été créées après 2018.

## Rechercher dans des dépôts par rubrique

Vous pouvez utiliser le qualificateur `topic:` pour rechercher chaque référentiel connecté à une rubrique particulière. Pour plus d’informations, consultez « [Recherche de dépôts](/search-github/searching-on-github/searching-for-repositories/#search-by-topic) ».

## Pour aller plus loin
- « [Classer votre dépôt avec des rubriques](/articles/classifying-your-repository-with-topics) »
