---
title: Affichage des contributeurs d’un projet
intro: 'Vous pouvez voir qui a contribué aux commits dans un dépôt{% ifversion fpt or ghec %} et ses dépendances{% endif %}.'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph
  - /articles/viewing-contribution-activity-in-a-repository
  - /articles/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View project contributors
ms.openlocfilehash: a5c3c5e1cb83039003b42a0526a49cb1db039888
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369160'
---
## À propos des contributeurs

Vous pouvez afficher les 100 principaux contributeurs dans un référentiel{% ifversion ghes or ghae %}, y compris les co-auteurs de validation,{% endif %} dans le graphique des contributeurs. Les validations de fusion et les validations vides ne sont pas comptabilisées comme contributions pour ce graphique.

{% ifversion fpt or ghec %} Vous pouvez également voir la liste des personnes qui ont contribué aux dépendances Python du projet. Pour accéder à cette liste de contributeurs de la communauté, visitez `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`.
{% endif %}

## Accès au graphique des contributeurs

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Dans la barre latérale gauche, cliquez sur **Contributeurs**.
  ![Onglet Contributeurs](/assets/images/help/graphs/contributors_tab.png)
4. Si vous le souhaitez, pour afficher les contributeurs pendant une période spécifique, cliquez, puis faites glisser jusqu’à ce que la période soit sélectionnée. Le graphique des contributeurs additionne les nombres de validations hebdomadaires jusqu’à chaque dimanche, votre période doit donc inclure un dimanche.
  ![Intervalle de temps sélectionné dans le graphique des contributeurs](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

## Résolution des problèmes des contributeurs

Si vous n’apparaissez pas dans le graphique des contributeurs d’un référentiel, cela peut être dû au fait que :
- Vous n’êtes pas l’un des 100 principaux contributeurs.
- Vos validations n’ont pas été fusionnées dans la branche par défaut.
- L’adresse e-mail que vous avez utilisée pour créer les validations n’est pas connectée à votre compte sur {% data variables.product.product_name %}.

{% tip %}

**Conseil :** Pour lister tous les contributeurs de commit dans un dépôt, consultez « [Lister les contributeurs du dépôt](/rest/repos/repos#list-repository-contributors) ».

{% endtip %}

Si toutes vos validations dans le référentiel se trouvent sur des branches qui ne sont pas celle par défaut, vous ne serez pas dans le graphique des contributeurs. Par exemple, les validations sur la branche `gh-pages` ne sont pas incluses dans le graphique, sauf si `gh-pages` est la branche par défaut du référentiel. Pour que vos validations soient fusionnées dans la branche par défaut, vous pouvez créer une demande de tirage. Pour plus d’informations, consultez « [À propos des demandes de tirage (pull requests)](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) ».

Si l’adresse e-mail que vous avez utilisée pour créer les validations n’est pas connectée à votre compte sur {% data variables.product.product_name %}, vos validations ne seront pas liées à votre compte et vous n’apparaîtrez pas dans le graphique des contributeurs. Pour plus d’informations, consultez « [Définition de votre adresse e-mail de validation](/articles/setting-your-commit-email-address){% ifversion not ghae %} » et « [Ajout d’une adresse e-mail à votre compte {% data variables.product.prodname_dotcom %}](/articles/adding-an-email-address-to-your-github-account){% endif %} ».
