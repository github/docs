---
title: Analyse des modifications apportées au contenu d’un dépôt
intro: 'Vous pouvez voir les modifications apportées au contenu d’un dépôt en analysant les commits, la fréquence de commits et les ajouts et suppressions de contenu du dépôt.'
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/visualizing-additions-and-deletions-to-content-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-additions-and-deletions-to-content-in-a-repository
  - /articles/viewing-commit-frequency-in-a-repository
  - /articles/analyzing-changes-to-a-repository-s-content
  - /articles/analyzing-changes-to-a-repositorys-content
  - /articles/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-commits-in-a-repository
  - /github/visualizing-repository-data-with-graphs/analyzing-changes-to-a-repositorys-content/visualizing-additions-and-deletions-to-content-in-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Analyze changes
ms.openlocfilehash: 7b6c9918b5d3de0fbae3b94fb8e90ece694a4076
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132050'
---
## Visualisation des commits dans un dépôt

Vous pouvez voir toutes les commits effectués dans un dépôt au cours de l’année écoulée (à l’exclusion des commits de fusion) dans le graphique Commit.

Le graphique du haut montre les commits pour l’année entière par semaine.

![Graphique des commits du dépôt sur une année](/assets/images/help/graphs/repo_commit_activity_year_graph.png)

Le graphique du bas montre le nombre moyen de commits par jour de la semaine pour la semaine sélectionnée.

![Graphique des commits du dépôt sur une semaine](/assets/images/help/graphs/repo_commit_activity_week_graph.png)

### Accès au graphique des commits

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Dans la barre latérale gauche, cliquez sur **Commits**.
![Onglet Commits](/assets/images/help/graphs/commits_tab.png)

## Visualisation des ajouts et suppressions de contenu dans un dépôt

Le graphique de fréquence de code montre les ajouts et suppressions de contenu pour chaque semaine dans l’historique d’un dépôt.

{% ifversion fpt or ghec %}

![Graphique de fréquence de code](/assets/images/help/graphs/repo_code_frequency_graph_dotcom.png)

{% endif %}

### Accès au graphique de fréquence de code

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Dans la barre latérale gauche, cliquez sur **Fréquence du code**.
![Onglet Fréquence du code](/assets/images/help/graphs/code_frequency_tab.png)
