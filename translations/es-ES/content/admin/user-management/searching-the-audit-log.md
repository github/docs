---
title: Buscar el registro de auditoría
intro: 'Los administradores de sitio pueden buscar en una lista extensa de acciones auditadas en la empresa.'
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log/
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### Buscar sintaxis de consultas

Redacta una consulta de búsqueda de uno o más pares de clave-valor separados por operadores lógicos y/o.

|                    Clave | Valor                                                                        |
| ------------------------:| ---------------------------------------------------------------------------- |
|               `actor_id` | ID de la cuenta de usuario que inició la acción                              |
|          `actor (actor)` | Nombre de la cuenta de usuario que inició la acción                          |
|           `oauth_app_id` | ID de la aplicación OAuth asociada con la acción                             |
|                 `Acción` | Nombre de la acción auditada                                                 |
|                `user_id` | ID del usuario afectado por la acción                                        |
|                `usuario` | Nombre del usuario afectado por la acción                                    |
|                `repo_id` | ID del repositorio afectado por la acción (si corresponde)                   |
|                   `repo` | Nombre del repositorio afectado por la acción (si corresponde)               |
|               `actor_ip` | Dirección IP desde donde se inició la acción                                 |
| `created_at (creado en)` | Momento en el cual ocurrió la acción                                         |
|                   `from` | Vista desde donde se inició la acción                                        |
|                   `note` | Información variada de evento específico (en texto simple o en formato JSON) |
|                    `org` | Nombre de la organización afectada por la acción (si corresponde)            |
|                 `org_id` | ID de la organización afectada por la acción (si corresponde)                |

Por ejemplo, para ver todas las acciones que afectaron el repositorio `octocat/Spoon-Knife` desde el inicio de 2017:

  `repo:"octocat/Spoon-Knife" AND created_at:[2017-01-01 TO *]`

Para encontrar una lista completa de acciones, consulta la sección "[Acciones auditadas](/admin/user-management/audited-actions)".

### Buscar el registro de auditoría

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
4. Escribe una consulta de búsqueda. ![Consulta de búsqueda](/assets/images/enterprise/site-admin-settings/search-query.png)
