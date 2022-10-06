---
title: Auditar a los usuarios a lo largo de tu empresa
intro: 'El tablero de bitácoras de auditoría muestra a los administradores de sitio las acciones que llevan a cabo todos los usuarios y organizaciones a lo largo de tu empresa dentro del mes actual y los seis meses anteriores. La bitácora de auditoría incluye detalles tales como quién realizó la acción, qué fue esa acción y cuándo se llevó a cabo.'
redirect_from:
  - /enterprise/admin/guides/user-management/auditing-users-across-an-organization
  - /enterprise/admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-instance
  - /admin/user-management/auditing-users-across-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Organizations
  - Security
  - User account
shortTitle: Audit users
ms.openlocfilehash: 18ea00b69f452ff496670fbd31e41bb8038cc46d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331692'
---
## Acceder al registro de auditoría

El tablero de bitácoras de auditoría te proporciona una presentación visual de los datos de auditoría a lo largo de tu empresa.

![Tablero de registro de auditoría en toda la instancia](/assets/images/enterprise/site-admin-settings/audit-log-dashboard-admin-center.png)

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}

Dentro del mapa, puedes usar panorámica y zoom para ver eventos en todo el mundo. Mantén el puntero sobre un país para ver un recuento rápido de los eventos de ese país.

## Buscar eventos a través de tu empresa

La bitácora de auditoría lista la siguiente información sobre las acciones que se llevan a cabo dentro de tu empresa:

* [Repositorio](#search-based-on-the-repository) en el que se ha realizado la acción
* [Usuario](#search-based-on-the-user) que ha realizado la acción
* [Organización](#search-based-on-the-organization) a la que pertenece una acción
* [Acción](#search-based-on-the-action-performed) que se ha realizado
* [País](#search-based-on-the-location) en el que se ha realizado la acción
* [Fecha y hora](#search-based-on-the-time-of-action) a la que se ha producido la acción

{% warning %}

**Notas:**

- Si bien no puedes utilizar texto para buscar entradas de auditoría, puedes crear consultas de búsqueda usando una variedad de filtros. {% data variables.product.product_name %} es compatible con muchos operadores para hacer búsquedas a través de {% data variables.product.product_name %}. Para más información, vea "[Acerca de la investigación en {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github)".
- Los registros de auditoría se encuentran disponibles para el mes actual y para cada día de los seis meses anteriores.

{% endwarning %}

### Búsqueda basada en el repositorio

El calificador `repo` limita las acciones a un repositorio específico propiedad de la organización. Por ejemplo:

* `repo:my-org/our-repo` busca todos los eventos que se han producido para el repositorio `our-repo` de la organización `my-org`.
* `repo:my-org/our-repo repo:my-org/another-repo` busca todos los eventos que se han producido para los repositorios `our-repo` y `another-repo` de la organización `my-org`.
* `-repo:my-org/not-this-repo` excluye todos los eventos que se han producido para el repositorio `not-this-repo` de la organización `my-org`.

Debe incluir el nombre de la organización en el calificador `repo`; la búsqueda de solo `repo:our-repo` no funcionará.

### Búsqueda basada en el usuario

El calificador `actor` examina eventos basados en el miembro de la organización que ha realizado la acción. Por ejemplo:

* `actor:octocat` busca todos los eventos realizados por `octocat`.
* `actor:octocat actor:hubot` busca todos los eventos realizados por `octocat` y `hubot`.
* `-actor:hubot` excluye todos los eventos realizados por `hubot`.

Solo puede utilizar un nombre de usuario de {% data variables.product.product_name %}, no el nombre real de una persona.

### Búsqueda basada en la organización

El calificador `org` limita las acciones a una organización específica. Por ejemplo:

* `org:my-org` busca todos los eventos que se han producido para la organización `my-org`.
* `org:my-org action:team` busca todos los eventos de equipo realizados en la organización `my-org`.
* `-org:my-org` excluye todos los eventos que se han producido para la organización `my-org`.

### Búsqueda basada en la acción realizada

El calificador `action` busca eventos específicos, agrupados dentro de categorías. Para obtener información sobre los eventos asociados a estas categorías, vea "[Eventos de registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

| Nombre de la categoría | Descripción
|------------------|-------------------
| `hook` | Contiene todas las actividades relacionadas con los webhooks.
| `org` | Contiene todas las actividades relacionadas con los miembros de la organización.
| `repo` | Contiene todas las actividades relacionadas con los repositorios que le pertenecen a tu organización.
| `team` | Contiene todas las actividades relacionadas con los equipos en tu organización.

Puedes buscar conjuntos específicos de acciones utilizando estos términos. Por ejemplo:

* `action:team` busca todos los eventos agrupados dentro de la categoría de equipo.
* `-action:billing` excluye todos los eventos de la categoría de facturación.

Cada categoría tiene un conjunto de eventos asociados con los que puedes filtrar. Por ejemplo:

* `action:team.create` busca todos los eventos en los que se ha creado un equipo.
* `-action:billing.change_email` excluye todos los eventos en los que se ha cambiado el correo electrónico de facturación.

### Búsqueda basada en la ubicación

El calificador `country` filtra las acciones por el país de origen.
- Puedes utilizar un código corto de dos letras del país o el nombre completo.
- Los países con espacios en sus nombres deben encerrarse entre comillas. Por ejemplo:
  * `country:de` busca todos los eventos que se han producido en Alemania.
  * `country:Mexico` busca todos los eventos que se han producido en México.
  * `country:"United States"` todos buscan eventos que se han producido en Estados Unidos.

### Búsqueda basada en la fecha de acción

El calificador `created` filtra las acciones por la hora a la que se han producido.
- Defina las fechas con el formato `YYYY-MM-DD`: el año, seguido del mes, seguido del día.
- Las fechas admiten los [calificadores mayor que, menor que y de rango](/enterprise/user/articles/search-syntax). Por ejemplo:
  * `created:2014-07-08` busca todos los eventos que se han producido el 8 de julio de 2014.
  * `created:>=2014-07-01` busca todos los eventos que se han producido el 8 de julio de 2014 o después.
  * `created:<=2014-07-01` busca todos los eventos que se han producido el 8 de julio de 2014 o antes.
  * `created:2014-07-01..2014-07-31` busca todos los eventos que se han producido durante el mes de julio de 2014.
