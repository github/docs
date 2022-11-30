---
title: Ver los colaboradores de un proyecto
intro: 'Puedes ver quién ha aportado confirmaciones en un repositorio{% ifversion fpt or ghec %} y sus dependencias{% endif %}.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369165'
---
## Acerca de los colaboradores

Puede ver hasta 100 colaboradores de un repositorio{% ifversion ghes or ghae %}, incluidos los coautores de las confirmaciones,{% endif %} en el gráfico de colaboradores. Las confirmaciones de fusión y las confirmaciones vacías no se cuentan en las contribuciones para este gráfico.

{% ifversion fpt or ghec %} También puede ver una lista de personas que han contribuido a las dependencias Python del proyecto. Para acceder a esta lista de colaboradores de la comunidad, visite `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`.
{% endif %}

## Acceder al gráfico de colaboradores

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.accessing-repository-graphs %}
3. En la barra lateral de la izquierda, haga clic en **Colaboradores**.
  ![Pestaña de colaboradores](/assets/images/help/graphs/contributors_tab.png)
4. Como alternativa, para ver colaboradores durante un período de tiempo específico, haz clic, después arrastra hasta que se selecciona el período de tiempo. La gráfica de contribuyentes suma las cantidades de confirmaciones semanales cada domingo, así que tu periodo de tiempo debe incluir un domingo.
  ![Intervalo de tiempo seleccionado en el gráfico de colaboradores](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

## Resolución de problemas con colaboradores

Si no apareces en el gráfico de colaboradores de un repositorio, puede deberse a que:
- No eres uno de los 100 colaboradores principales.
- Tus confirmaciones no se han fusionado en la rama por defecto.
- La dirección de correo electrónico que utilizaste para crear las confirmaciones no está conectada a tu cuenta en {% data variables.product.product_name %}.

{% tip %}

**Sugerencia:** Para enumerar todos los colaboradores de confirmación de un repositorio, consulta "[Lista de colaboradores de un repositorio](/rest/repos/repos#list-repository-contributors)".

{% endtip %}

Si todas tus confirmaciones en el repositorio están en ramas que no son por defecto, no estarás en el gráfico de colaboradores. Por ejemplo, las confirmaciones en la rama `gh-pages` no se incluyen en el gráfico a menos que `gh-pages` sea la rama predeterminada del repositorio. Para que tus confirmaciones se fusionen en la rama por defecto, puedes crear una solicitud de extracción. Para más información, vea "[Acerca de las solicitudes de incorporación de cambios](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)".

Si la dirección de correo electrónico que utilizaste para crear las confirmaciones no está conectada a tu cuenta en {% data variables.product.product_name %}, tus confirmaciones no se enlazarán a ésta, y no aparecerás en la gráfica de colaboradores. Para más información, vea "[Establecimiento de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address){% ifversion not ghae %}" y "[Adición de una dirección de correo electrónico a la cuenta de {% data variables.product.prodname_dotcom %}](/articles/adding-an-email-address-to-your-github-account){% endif %}".
