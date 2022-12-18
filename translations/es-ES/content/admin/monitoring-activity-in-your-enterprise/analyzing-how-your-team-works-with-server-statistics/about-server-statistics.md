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
ms.openlocfilehash: 3d17df54cd5dcf9ad102ab5079794a9bcb3e664b
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185189'
---
## Acerca de las ventajas de {% data variables.product.prodname_server_statistics %}

{% data variables.product.prodname_server_statistics %} puede ayudarte a prever las necesidades de la organización, comprender cómo trabaja el equipo y mostrar el valor que obtienes de {% data variables.product.prodname_ghe_server %}.

Una vez habilitadas, las {% data variables.product.prodname_server_statistics %} recopilan datos agregados sobre cuánto se utilizan determinadas características en la instancia a lo largo del tiempo. A diferencia de otros puntos de conexión de la [API Admin Stats](/rest/reference/enterprise-admin#admin-stats), que solo devuelven los datos del día anterior, {% data variables.product.prodname_server_statistics %} proporciona datos históricos de todas las métricas de {% data variables.product.prodname_server_statistics %} recopiladas desde el día que habilitaste la característica. Para más información, consulta "[Habilitación de {% data variables.product.prodname_server_statistics %} para la empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)".

Al habilitar {% data variables.product.prodname_server_statistics %}, ayudas a crear un {% data variables.product.prodname_dotcom %} mejor. Los datos agregados que nos proporciones nos brindarán información sobre cómo {% data variables.product.prodname_dotcom %} agrega valor a nuestros clientes. Esta información permite que {% data variables.product.company_short %} tome decisiones más fundamentadas y mejor informadas sobre los productos, lo que, en última instancia, te beneficia.

## Acerca de la seguridad de los datos

Respetamos tus datos. Nunca transmitiremos los datos de {% data variables.location.product_location %}, a menos que primero nos hayas dado permiso para hacerlo.

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

Después de habilitar {% data variables.product.prodname_server_statistics %}, las métricas se recopilan mediante un trabajo diario que se ejecuta en {% data variables.location.product_location %}. Las métricas agregadas se almacenan en la organización o en la cuenta empresarial en {% data variables.product.prodname_ghe_cloud %} y no se almacenan en {% data variables.location.product_location %}.

Las métricas siguiente se recopilarán y transmitirán diariamente y representarán el recuento total del día.

Columna CSV | Nombre | Descripción |
---------- | ---- | ----------- |
Un   | `github_connect.features_enabled` | Matriz de características de {% data variables.product.prodname_github_connect %} que están habilitadas para la instancia (consulta "[Acerca de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect#github-connect-features)") |
B   | `host_name` | El nombre de host de la instancia |
C   | `dormant_users.dormancy_threshold` | La cantidad de tiempo que debe estar inactivo un usuario para considerarse como inactivo |
D   | `dormant_users.total_dormant_users` | Número de cuentas de usuario inactivas |
E   | `ghes_version` | La versión de {% data variables.product.product_name %} que la instancia está ejecutando |
F   | `server_id` | El UUID generado para la instancia
G   | `collection_date` | La fecha en que se recopilaron las métricas |
H   | `schema_version` | La versión del esquema de base de datos que se usa para almacenar estos datos |
I   | `ghe_stats.comments.total_commit_comments` | Número de comentarios sobre confirmaciones |
J   | `ghe_stats.comments.total_gist_comments` | Número de comentarios sobre gists |
K   | `ghe_stats.comments.total_issue_comments` | Número de comentarios sobre incidencias | 
L   | `ghe_stats.comments.total_pull_request_comments` | Número de comentarios sobre las solicitudes de incorporación de cambios |
M   | `ghe_stats.gists.total_gists` | Número de gists (tanto secretos como públicos) |
No   | `ghe_stats.gists.private_gists` | Número de gists secretos |
O   | `ghe_stats.gists.public_gists` | Número de gists públicos |
P   | `ghe_stats.hooks.total_hooks` | Número de enlaces de recepción previa (activos e inactivos) |
Q   | `ghe_stats.hooks.active_hooks` | Número de enlaces de recepción previa activos |
R   | `ghe_stats.hooks.inactive_hooks` | Número de enlaces de recepción previa inactivos |
S   | `ghe_stats.issues.total_issues` | Número de incidencias (abiertas y cerradas) |
T   | `ghe_stats.issues.open_issues` | Número de incidencias abiertas |
U   | `ghe_stats.issues.closed_issues` | Número de incidencias cerradas |
V   | `ghe_stats.milestones.total_milestones` | Número de hitos (abiertos y cerrados) |
W   | `ghe_stats.milestones.open_milestones` | Número de hitos abiertos |
X   | `ghe_stats.milestones.closed_milestones` | Número de hitos cerrados |
Y   | `ghe_stats.orgs.total_orgs` | Número de organizaciones (habilitadas y deshabilitadas) |
Z   | `ghe_stats.orgs.disabled_orgs` | Número de organizaciones deshabilitadas |
AA | `ghe_stats.orgs.total_teams` | Número de equipos |
AB | `ghe_stats.orgs.total_team_members` | Número de miembros del equipo |
AC | `ghe_stats.pages.total_pages` | Número de sitios de {% data variables.product.prodname_pages %} |
AD | `ghe_stats.pulls.total_pulls` | Número de solicitudes de incorporación de cambios |
AE | `ghe_stats.pulls.merged_pulls` | Número de solicitudes de incorporación de cambios combinadas |
AF | `ghe_stats.pulls.mergeable_pulls` | Número de solicitudes de incorporación de cambios que se pueden combinar actualmente |
AG | `ghe_stats.pulls.unmergeable_pulls` | Número de solicitudes de incorporación de cambios que no se pueden combinar actualmente |
AH | `ghe_stats.repos.total_repos` | Número de repositorios (repositorios ascendentes y bifurcaciones) |
INTELIGENCIA ARTIFICIAL | `ghe_stats.repos.root_repos` | Número de repositorios ascendentes |
AJ | `ghe_stats.repos.fork_repos` | Número de bifurcaciones |
AK | `ghe_stats.repos.org_repos` | Cantidad de repositorios que poseen las organizaciones |
AL | `ghe_stats.repos.total_pushes` | Número de inserciones en repositorios |
AM | `ghe_stats.repos.total_wikis` | Número de wikis |
AN | `ghe_stats.users.total_users` | Número de cuentas de usuario |
AO | `ghe_stats.users.admin_users` | Número de cuentas de usuario que son administradores de sitio |
AP | `ghe_stats.users.suspended_users` | Número de cuentas de usuario suspendidas |

## Ejemplos de datos de {% data variables.product.prodname_server_statistics %}

Para ver un ejemplo de los encabezados incluidos en la exportación de CSV para {% data variables.product.prodname_server_statistics %}, descargue el [ejemplo CSV de {% data variables.product.prodname_server_statistics %}](/assets/server-statistics-csv-example.csv).

Para ver un ejemplo de la carga útil de respuesta de la API {% data variables.product.prodname_server_statistics %}, consulta "[Solicitud de {% data variables.product.prodname_server_statistics %} mediante la API REST](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/requesting-server-statistics-using-the-rest-api)".
