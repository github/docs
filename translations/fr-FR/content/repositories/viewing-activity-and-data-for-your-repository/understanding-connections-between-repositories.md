---
title: Compréhension des connexions entre dépôts
intro: Utilisez le graphique réseau et la liste des duplications pour comprendre les réseaux de duplications.
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
ms.openlocfilehash: 46cc440093c3ca8dc0952933847a6f04b0446661
ms.sourcegitcommit: 468a0323fa636517985a3e08e2772dbb0545cab8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/03/2022
ms.locfileid: '148191357'
---
## Affichage du réseau d’un dépôt

Le graphique réseau affiche l’historique des branches de l’ensemble du réseau de référentiels, y compris les branches de duplication. Ce graphique est une chronologie des validations les plus récentes et affiche jusqu’à 100 des branches les plus récemment envoyées. La première ligne fait référence à la date et la première colonne fait référence au propriétaire de la branche. Utilisez des touches de direction ou d’autres raccourcis clavier pour naviguer plus facilement dans le graphique. Ils sont fournis dans la fenêtre contextuelle « Raccourcis clavier disponibles » sous le graphique.


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

Les duplications sont présentées dans l’ordre alphabétique de l’organisation ou du nom d’utilisateur de la personne qui a dupliqué le référentiel. Vous pouvez cliquer sur l’organisation ou le nom d’utilisateur afin d’être redirigé vers la page de profil {% data variables.product.product_name %} de l’organisation ou de l’utilisateur ou cliquer sur le nom de duplication afin d’être redirigé vers la duplication spécifique du référentiel.

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
