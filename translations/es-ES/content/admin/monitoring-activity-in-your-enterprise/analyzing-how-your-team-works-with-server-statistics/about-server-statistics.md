---
title: Acerca de las estadísticas del servidor
intro: 'Puedes usar {% data variables.product.prodname_server_statistics %} para analizar tus propios datos agregados de {% data variables.product.prodname_ghe_server %} y ayudarnos a mejorar los productos de {% data variables.product.company_short %}.'
versions:
  feature: server-statistics
permissions: 'Enterprise owners can enable {% data variables.product.prodname_server_statistics %}.'
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/about-server-statistics
topics:
  - Enterprise
ms.openlocfilehash: c71cab38c096d5984a5136147b6dbc75e794c173
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147409327'
---
## Acerca de las ventajas de {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} puede ayudarte a prever las necesidades de la organización, comprender cómo trabaja el equipo y mostrar el valor que obtienes de {% data variables.product.prodname_ghe_server %}.

Una vez habilitadas, las {% data variables.product.prodname_server_statistics %} recopilan datos agregados sobre cuánto se utilizan determinadas características en la instancia a lo largo del tiempo. A diferencia de otros puntos de conexión de la [API Admin Stats](/rest/reference/enterprise-admin#admin-stats), que solo devuelven los datos del día anterior, {% data variables.product.prodname_server_statistics %} proporciona datos históricos de todas las métricas de {% data variables.product.prodname_server_statistics %} recopiladas desde el día que habilitaste la característica. Para más información, consulta "[Habilitación de {% data variables.product.prodname_server_statistics %} para la empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)".

Al habilitar {% data variables.product.prodname_server_statistics %}, ayudas a crear un {% data variables.product.prodname_dotcom %} mejor. Los datos agregados que nos proporciones nos brindarán información sobre cómo {% data variables.product.prodname_dotcom %} agrega valor a nuestros clientes. Esta información permite que {% data variables.product.company_short %} tome decisiones más fundamentadas y mejor informadas sobre los productos, lo que, en última instancia, te beneficia.

## Acerca de la seguridad de los datos

Respetamos tus datos. Nunca transmitiremos los datos de {% data variables.product.product_location %}, a menos que primero nos hayas dado permiso para hacerlo.

No recopilamos información personal. Tampoco recopilamos contenido de {% data variables.product.company_short %}, como código, incidencias, comentarios ni contenido de solicitud de incorporación de cambios.

Solo los propietarios de la cuenta empresarial conectada o la organización en {% data variables.product.prodname_ghe_cloud %} pueden acceder a los datos.

Solo determinadas métricas agregadas se recopilan en repositorios, incidencias, solicitudes de incorporación de cambios y otras características. Para ver la lista de métricas agregadas recopiladas, consulta "[Datos de {% data variables.product.prodname_server_statistics %} recopilados](#server-statistics-data-collected)". 

Las actualizaciones de las métricas recopiladas se producirán en versiones de características futuras de {% data variables.product.prodname_ghe_server %} y se describirán en las [notas de la versión de {% data variables.product.prodname_ghe_server %}](/admin/release-notes). Además, actualizaremos este artículo con todas las actualizaciones de métricas.

Para comprender mejor cómo almacenamos y protegemos los datos de {% data variables.product.prodname_server_statistics %}, consulta "[Seguridad de GitHub](https://github.com/security)".

### Acerca de la retención y eliminación de datos

{% data variables.product.company_short %} recopila datos de {% data variables.product.prodname_server_statistics %} siempre y cuando la licencia de {% data variables.product.prodname_ghe_server %} esté activa y la característica {% data variables.product.prodname_server_statistics %} esté habilitada.

Para eliminar los datos, ponte en contacto con el Soporte técnico de GitHub, el representante de tu cuenta de {% data variables.product.prodname_dotcom %} o el administrador de satisfacción del cliente.  Por lo general, eliminamos los datos en el período que se especifica en nuestra declaración de privacidad. Para más información, consulta la [declaración de privacidad de {% data variables.product.company_short %}](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement#data-retention-and-deletion-of-data) en la documentación de {% data variables.product.prodname_dotcom_the_website %}.

### Acerca de la portabilidad de los datos

Como propietario de una organización o propietario de una empresa en {% data variables.product.prodname_ghe_cloud %}, puedes acceder a los datos de {% data variables.product.prodname_server_statistics %} mediante la exportación de los datos en un archivo CSV o JSON o mediante la API REST de {% data variables.product.prodname_server_statistics %}. Para más información, consulta "[Solicitud de {% data variables.product.prodname_server_statistics %} mediante la API REST](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)" o "[Exportación de {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/exporting-server-statistics)".

## Acerca de la deshabilitación de la recopilación de datos

Puede deshabilitar la característica {% data variables.product.prodname_server_statistics %} en cualquier momento. Para más información, consulta "[Habilitación de {% data variables.product.prodname_server_statistics %} para la empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)".

## Datos de {% data variables.product.prodname_server_statistics %} recopilados

Después de habilitar {% data variables.product.prodname_server_statistics %}, las métricas se recopilan mediante un trabajo diario que se ejecuta en {% data variables.product.product_location %}. Las métricas agregadas se almacenan en la organización o en la cuenta empresarial en {% data variables.product.prodname_ghe_cloud %} y no se almacenan en {% data variables.product.product_location %}.

Las métricas siguiente se recopilarán y transmitirán diariamente y representarán el recuento total del día:
  - `active_hooks`
  - `admin_users`
  - `closed_issues`
  - `closed_milestones`
  - `collection_date`
  - `disabled_orgs`
  - `dormancy_threshold`
  - `fork_repos`
  - `ghes_version`
  - `github_connect_features_enabled`
  - `inactive_hooks`
  - `mergeable_pulls`
  - `merged_pulls`
  - `open_issues`
  - `open_milestones`
  - `org_repos`
  - `private_gists`
  - `public_gists`
  - `root_repos`
  - `schema_version`
  - `server_id`
  - `suspended_users`
  - `total_commit_comments`
  - `total_dormant_users`
  - `total_gist_comments`
  - `total_gists`
  - `total_hooks`
  - `total_issues`
  - `total_issue_comments`
  - `total_milestones`
  - `total_repos`
  - `total_orgs`
  - `total_pages`
  - `total_pull_request_comments`
  - `total_pulls`
  - `total_pushes`
  - `total_team_members`
  - `total_teams`
  - `total_users`
  - `total_wikis`
  - `unmergeable_pulls`

## Ejemplo de carga útil de {% data variables.product.prodname_server_statistics %}

Para ver un ejemplo de la carga útil de respuesta de la API {% data variables.product.prodname_server_statistics %}, consulta "[Solicitud de {% data variables.product.prodname_server_statistics %} mediante la API REST](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)".

Para ver una lista de los datos recopilados, consulta "[Datos de {% data variables.product.prodname_server_statistics %} recopilados](#server-statistics-data-collected)".
