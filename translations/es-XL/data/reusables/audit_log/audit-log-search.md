El registro lista la siguiente información sobre cada acción:

* En qué repositorio se realizó una acción
* El usuario que realizó la acción
* La acción que se realizó
* En qué país se realizó la acción
* La fecha y hora en que se produjo la acción

Nota que no puedes buscar entradas utilizando texto. Sin embargo, puedes construir consultas de búsqueda utilizando una variedad de filtros. Muchos operadores que se utilizan cuando se busca el registro por queries, tales como `-`, `>`, o `<`, empatan con el mismo formato que si se busca con {% data variables.product.product_name %}. Para obtener más información, consulta la sección "[Buscar en {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}
#### Búsqueda basada en la operación

Utiliza el calificador `operation` para limitar las acciones en tipos específicos de operaciones. Por ejemplo:

  * `operation:access` encuentra todos los eventos en donde se accedió a un recurso.
  * `operation:authentication` encuentra todos los eventos en donde se realizó un evento de autenticación.
  * `operation:create` encuentra todos los eventos en donde se creó un recurso.
  * `operation:modify` encuentra todos los eventos en donde se modificó un recurso existente.
  * `operation:remove` encuentra todos los eventos en donde se eliminó un recurso existente.
  * `operation:restore` encuentra todos los eventos en donde se restauró un recurso existente.
  * `operation:transfer` encuentra todos los eventos en donde se transfirió un recurso existente.
{% endif %}

#### Búsqueda basada en el repositorio

Utiliza el calificador `repo` para limitar las acciones a un repositorio específico. Por ejemplo:

  * `repo:my-org/our-repo` encuentra todos los eventos que ocurrieron para el repositorio `our-repo` en la organización `my-org`.
  * `repo:my-org/our-repo repo:my-org/another-repo` encuentra todos los eventos que ocurrieron tanto para los repositorios `our-repo` como `another-repo` en la organización `my-org`.
  * `-repo:my-org/not-this-repo` excluye todos los eventos que ocurrieron para el repositorio `not-this-repo` en la organización `my-org`.

Nota que debes incluir el nombre de cuenta dentro del calificador `repo`; no funcionará si buscas únicamente `repo:our-repo`.

#### Búsqueda basada en el usuario

El calificador `actor` puede incluir eventos que se basen en quién realizó la acción. Por ejemplo:

  * `actor:octocat` encuentra todos los eventos realizados por `octocat`.
  * `actor:octocat actor:hubot` encuentra todos los eventos realizados tanto por `octocat` como por `hubot`.
  * `-actor:hubot` excluye todos los eventos realizados por `hubot`.

Ten en cuenta que solo puedes utilizar un nombre de usuario {% data variables.product.product_name %}, no el nombre real de una persona.
