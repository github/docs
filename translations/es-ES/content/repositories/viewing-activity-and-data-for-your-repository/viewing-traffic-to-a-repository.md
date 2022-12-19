---
title: Ver el tráfico de un repositorio
intro: 'Cualquier persona con acceso de escritura a un repositorio puede ver su tráfico, incluidos los clones completos (no recuperaciones), los visitantes de los últimos 14 días, sitios de referencia y contenido popular en el gráfico de tráfico.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145136585'
---
Puedes desplazarte a los sitios de referencia, excluidos los motores de búsqueda y {% data variables.product.product_name %} propiamente dicho, desde los vínculos donde se hizo la referencia a las rutas específicas. El contenido popular vincula al contenido específico que generó tráfico.

Los sitios de referencia y el contenido popular se ordenan por vistas y visitantes únicos. Los clones completos y la información del visitante se actualizan cada hora, mientras que las secciones de los sitios de referencia y del contenido popular se actualizan diariamente. Todos los datos en el gráfico de tráfico utiliza la zona horaria UTC+0, sin importar tu ubicación.

{% tip %}

**Sugerencia:** Puede desplazar el mouse sobre un día concreto en el gráfico de tráfico para ver los datos exactos de ese día.

{% endtip %}

![Gráficos de tráfico del repositorio con una información de herramienta](/assets/images/help/graphs/repo_traffic_graphs_tooltip_dotcom.png)

## Acceder al gráfico de tráfico

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. En la barra lateral de la izquierda, haga clic en **Tráfico**.
![Pestaña Tráfico](/assets/images/help/graphs/traffic_tab.png)
