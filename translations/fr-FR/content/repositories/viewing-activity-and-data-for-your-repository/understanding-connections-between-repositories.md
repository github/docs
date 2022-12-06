---
title: Compréhension des connexions entre dépôts
intro: Vous pouvez mieux comprendre les connexions qui existent entre les dépôts en consultant le réseau et les duplication (fork) d’un dépôt et les projets qui dépendent de ce dernier.
product: '{% data reusables.gated-features.repository-insights %}'
redirect_from:
  - /articles/viewing-a-repository-s-network
  - /articles/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/viewing-a-repositorys-network
  - /articles/understanding-connections-between-repositories
  - /articles/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-the-dependencies-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-a-repositorys-network
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/listing-the-forks-of-a-repository
  - /github/visualizing-repository-data-with-graphs/understanding-connections-between-repositories/viewing-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Connections between repositories
ms.openlocfilehash: f1b92a62d0acf9f31a16ce1b7c57850b87c1bf9c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060065'
---
## Affichage du réseau d’un dépôt

Le graphique du réseau affiche l’historique des branches de tout le réseau du dépôt, y compris les branches du dépôt racine et celles des duplications qui contiennent des validations propres au réseau.

![Graphique du réseau du dépôt](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

**Astuce :** pour afficher des branches plus anciennes, cliquez et faites glisser à l’intérieur du graphique.

{% endtip %}

## Accès au graphique du réseau

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Dans la barre latérale gauche, cliquez sur **Réseau**.
![Onglet Réseau](/assets/images/help/graphs/network_tab.png)

## Affichage de la liste des duplications d’un dépôt

Le graphique Membres affiche toutes les duplications d’un dépôt.

Les duplications sont présentées dans l’ordre alphabétique du nom d’utilisateur de la personne qui a dupliqué le dépôt. Vous pouvez cliquer sur le nom d’utilisateur afin d’être redirigé vers la page de profil {% data variables.product.product_name %} de l’utilisateur, ou cliquer sur le nom de duplication afin d’être redirigé vers la duplication spécifique du dépôt.

{% ifversion fpt or ghec %}

![Graphique des membres du dépôt](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![Graphique des membres du dépôt](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### Accès au graphique Membres

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Dans la barre latérale de gauche, cliquez sur **Duplications**.
![Onglet Duplications](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

## Affichage des dépendances d’un dépôt

Vous pouvez utiliser le graphique de dépendance pour explorer le code dont dépend votre dépôt.

Presque tous les logiciels dépendent d’un code développé et géré par d’autres développeurs, souvent appelés chaîne d’approvisionnement. C’est le cas, par exemple, des utilitaires, des bibliothèques et des infrastructures. Ces dépendances font partie intégrante de votre code, et les bogues ou vulnérabilités qu’elles contiennent peuvent affecter votre code. Il est important d’examiner et gérer ces dépendances.

Le graphique de dépendance offre un excellent moyen de visualiser et d’explorer les dépendances d’un dépôt. Pour plus d’informations, consultez « [À propos du graphe de dépendances](/code-security/supply-chain-security/about-the-dependency-graph) » et « [Exploration des dépendances d’un dépôt](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository) ».

Vous pouvez également configurer votre dépôt de façon à ce que {% data variables.product.company_short %} vous alerte automatiquement chaque fois qu’une vulnérabilité de sécurité est trouvée dans l’une de vos dépendances. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) ».
