---
title: Affichage du trafic vers un référentiel
intro: 'Toute personne disposant d’un accès en poussée (push) à un dépôt peut afficher son trafic, y compris les clones complets (pas les récupérations (fetch)), les visiteurs des 14 derniers jours, les sites de référence et le contenu populaire dans le graphique de trafic.'
product: 'This repository insights graph is available in public repositories with {% data variables.product.prodname_free_user %} and {% data variables.product.prodname_free_team %} for organizations, and in public and private repositories with {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, and {% data variables.product.prodname_ghe_cloud %}.{% ifversion fpt %} For more information, see "[About repository graphs](/articles/about-repository-graphs)" and "[{% data variables.product.prodname_dotcom %}''s products](/articles/github-s-products)."{% endif %}'
redirect_from:
  - /articles/viewing-traffic-to-a-repository
  - /github/visualizing-repository-data-with-graphs/viewing-traffic-to-a-repository
  - /github/visualizing-repository-data-with-graphs/accessing-basic-repository-data/viewing-traffic-to-a-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View repository traffic
ms.openlocfilehash: 75b4900893a0874e42b076962d25babcb4c09233
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132008'
---
Vous pouvez accéder aux sites de référence, à l’exclusion des moteurs de recherche et de {% data variables.product.product_name %} lui-même, à partir des liens auxquels les chemins d’accès spécifiques ont été référencés. Les liens de contenu populaire menant au contenu spécifique qui a généré le trafic.

Les sites de référence et le contenu populaire sont classés en fonction du nombre de vues et de visiteurs uniques. Les clones complets et les informations sur les visiteurs sont mis à jour toutes les heures, tandis que les sites de référence et les sections à contenu populaire sont mis à jour quotidiennement. Toutes les données du graphique de trafic utilisent le fuseau horaire UTC+0, quel que soit l’endroit où vous vous trouvez.

{% tip %}

**Conseil :** survolez un jour spécifique du graphique de trafic pour afficher les données exactes correspondant à ce jour.

{% endtip %}

![Graphiques de trafic de référentiel avec info-bulle](/assets/images/help/graphs/repo_traffic_graphs_tooltip_dotcom.png)

## Accès au graphique de trafic

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. Dans la barre latérale gauche, cliquez sur **Trafic**.
![Onglet Trafic](/assets/images/help/graphs/traffic_tab.png)
