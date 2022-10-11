---
title: Verbindungen zwischen Repositorys verstehen
intro: You can better understand the connections that exist between repositories by viewing a repository's network and forks and the projects that depend on the repository.
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
topics:
  - Repositories
shortTitle: Connections between repositories
---

## Netzwerk eines Repositorys anzeigen

'The network graph displays the branch history of the entire repository network, including branches of the root repository and branches of forks that contain commits unique to the network.' product: '{% data reusables.gated-features.repository-insights %}'

![Repository-Netzwerkdiagramm](/assets/images/help/graphs/repo_network_graph.png)

{% tip %}

**Tipp:** Klicke und ziehe zum Anzeigen älterer Branches im Diagramm.

{% endtip %}

## Auf das Netzwerkdiagramm zugreifen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Klicke auf der linken Seitenleiste auf **Network** (Netzwerk). ![Registerkarte „Network“ (Netzwerk)](/assets/images/help/graphs/network_tab.png)

## Die Forks eines Repositorys auflisten

Das Mitgliederdiagramm zeigt alle Forks eines Repositorys.

Die Forks sind alphabetisch nach dem Benutzernamen der Person geordnet, die das Repository geforkt hat. Sie können auf den Benutzernamen klicken, um zur {% data variables.product.product_name %}-Profilseite des Benutzers weitergeleitet zu werden, oder auf den Forknamen, um zum entsprechenden Fork des Repositorys weitergeleitet zu werden.

{% ifversion fpt %}

![Repository-Mitgliederdiagramm](/assets/images/help/graphs/repo_forks_graph_dotcom.png)

{% else %}

![Repository-Mitgliederdiagramm](/assets/images/help/graphs/repo_members_graph.png)

{% endif %}

### Auf das Mitgliederdiagramm zugreifen

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. Klicke in der linken Seitenleiste auf **Forks** (Forks). ![Registerkarte „Forks“ (Forks)](/assets/images/help/graphs/graphs-sidebar-forks-tab.png)

{% ifversion fpt or ghes > 2.22 %}
## Viewing the dependencies of a repository

You can use the dependency graph to explore the code your repository depends on.

Almost all software relies on code developed and maintained by other developers, often known as a supply chain. For example, utilities, libraries, and frameworks. These dependencies are an integral part of your code and any bugs or vulnerabilities in them may affect your code. It's important to review and maintain these dependencies.

The dependency graph provides a great way to visualize and explore the dependencies for a repository. For more information, see "[About the dependency graph](/code-security/supply-chain-security/about-the-dependency-graph)" and "[Exploring the dependencies of a repository](/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository)."

You can also set up your repository so that {% data variables.product.company_short %} alerts you automatically whenever a security vulnerability is found in one of your dependencies. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)." |
{% endif %}
