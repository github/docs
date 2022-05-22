---
title: Auditar usuarios a través de tu instancia
intro: 'El tablero de registro de auditoría {% data variables.product.prodname_ghe_server %} le muestra a los administradores del sitio las acciones realizadas por todos los usuarios y organizaciones a través de {% data variables.product.product_location_enterprise %} dentro de los últimos 90 días. Incluye detalles como quién realizó la acción, de qué acción se trata y cuándo se realizó.'
redirect_from:
  - /enterprise/admin/guides/user-management/auditing-users-across-an-organization/
  - /enterprise/admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-instance
versions:
  enterprise-server: '*'
---
### Acceder al registro de auditoría {% data variables.product.prodname_ghe_server %}

El tablero de registro de auditoría te brinda una presentación visual de los datos de auditoría a través de {% data variables.product.product_location_enterprise %}.

![Tablero de registro de auditoría en toda la instancia](/assets/images/enterprise/site-admin-settings/audit-log-dashboard-admin-center.png)

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}

Dentro del mapa, puedes usar panorámica y zoom para ver eventos en todo el mundo. Mantén el puntero sobre un país para ver un recuento rápido de los eventos de ese país.

### Buscar eventos a través de tu instancia

El registro de auditoría detalla la siguiente información acerca de las acciones realizadas dentro de {% data variables.product.product_location_enterprise %}:

* [El repositorio](#search-based-on-the-repository) en el cual una acción fue realizada.
* [El usuario](#search-based-on-the-user) que realizó la acción.
* [La organización](#search-based-on-the-organization) a la cual pertenece la acción.
* [La acción](#search-based-on-the-action-performed) que fue realizada.
* [El país](#search-based-on-the-location) en el que la acción fue realizada.
* [La fecha y la hora](#search-based-on-the-time-of-action) en que ocurrió la acción.

{% warning %}

**Notas:**

- Si bien no puedes utilizar texto para buscar entradas de auditoría, puedes crear consultas de búsqueda usando una variedad de filtros. Se admiten muchos operadores para [buscar a través de {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/user/articles/searching-github).
- Para buscar eventos de más de 90 días, usa el calificador `created`.

{% endwarning %}

#### Búsqueda basada en el repositorio

El calificador `repo` limita las acciones a un repositorio específico que le pertenece a tu organización. Por ejemplo:

* `repo:my-org/our-repo` encuentra todos los eventos que ocurrieron para el repositorio `our-repo` en la organización `my-org`.
* `repo:my-org/our-repo repo:my-org/another-repo` encuentra todos los eventos que ocurrieron tanto para los repositorios `our-repo` como `another-repo` en la organización `my-org`.
* `-repo:my-org/not-this-repo` excluye todos los eventos que ocurrieron para el repositorio `not-this-repo` en la organización `my-org`.

Debes incluir el nombre de tu organización dentro del calificador `repo`; si buscas solo `repo:our-repo` no funcionará.

#### Búsqueda basada en el usuario

El calificador `actor` examina eventos basados en el miembro de tu organización que realizó la acción. Por ejemplo:

* `actor:octocat` encuentra todos los eventos realizados por `octocat`.
* `actor:octocat actor:hubot` encuentra todos los eventos realizados tanto por `octocat` como por `hubot`.
* `-actor:hubot` excluye todos los eventos realizados por `hubot`.

Solo puedes usar un nombre de usuario {% data variables.product.prodname_ghe_server %}, no el nombre real de un individuo.

#### Búsqueda basada en la organización

El calificador `org` limita las acciones a una organización específica. Por ejemplo:

* `org:my-org` encuentra todos los eventos que ocurrieron para la organización `my-org`.
* `org:my-org action:team` encuentra todos los eventos del equipo realizados dentro de la organización `my-org`.
* `-org:my-org` excluye todos los eventos que ocurrieron para la organizción `my-org`.

#### Búsqueda basada en la acción realizada

El calificador `action` busca los eventos específicos, agrupados dentro de categorías. Para obtener más información sobre los eventos asociados con estas categorías, consulta "[Acciones auditadas](/enterprise/{{ currentVersion }}/admin/guides/installation/audited-actions)".

| Nombre de la categoría | Descripción                                                                                           |
| ---------------------- | ----------------------------------------------------------------------------------------------------- |
| `gancho`               | Contiene todas las actividades relacionadas con los webhooks.                                         |
| `org`                  | Contiene todas las actividades relacionadas con los miembros de la organización.                      |
| `repo`                 | Contiene todas las actividades relacionadas con los repositorios que le pertenecen a tu organización. |
| `equipo`               | Contiene todas las actividades relacionadas con los equipos en tu organización.                       |

Puedes buscar conjuntos específicos de acciones utilizando estos términos. Por ejemplo:

* `action:team` encuentra todos los eventos agrupados dentro de la categoría de equipo.
* `-action:billing` excluye todos los eventos en la categoría de facturación.

Cada categoría tiene un conjunto de eventos asociados con los que puedes filtrar. Por ejemplo:

* `action:team.create` encuentra todos los eventos donde se creó un equipo.
* `-action:billing.change_email` excluye todos los eventos donde se modificó el correo electrónico de facturación.

#### Búsqueda basada en la ubicación

El calificador `country` filtra las acciones por el país de origen.
- Puedes utilizar un código corto de dos letras del país o el nombre completo.
- Los países con espacios en sus nombres deben encerrarse entre comillas. Por ejemplo:
  * `country:de` encuentra todos los eventos ocurridos en Alemania.
  * `country:Mexico` encuentra todos los eventos ocurridos en México.
  * `country:"United States"` encuentra todos los eventos que ocurrieron en Estados Unidos.

#### Búsqueda basada en la fecha de acción

El calificador `created` filtra las acciones por la fecha en la que ocurrieron.
- Define fechas usando el formato `YYYY-MM-DD`-- es decir, año, seguido del mes, seguido del día.
- Las fechas admiten [ calificadores mayor que, menor que y rango](/enterprise/{{ currentVersion }}/user/articles/search-syntax). Por ejemplo:
  * `created:2014-07-08` encuentra todos los eventos ocurridos el 8 de julio de 2014.
  * `created:>=2014-07-01` encuentra todos los eventos ocurridos el 8 de julio de 2014 o posteriormente.
  * `created:<=2014-07-01` encuentra todos los eventos ocurridos el 8 de julio de 2014 o anteriormente.
  * `created:2014-07-01..2014-07-31` encuentra todos los eventos ocurridos en el mes de julio de 2014.
