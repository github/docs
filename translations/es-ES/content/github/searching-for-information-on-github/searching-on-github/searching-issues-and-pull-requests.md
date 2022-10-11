---
title: Buscar propuestas y solicitudes de extracción
intro: 'Puedes buscar propuestas y solicitudes de extracción en {% data variables.product.product_name %} y acotar los resultados utilizando estos calificadores de búsqueda en cualquier combinación.'
redirect_from:
  - /articles/searching-issues/
  - /articles/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-issues-and-pull-requests
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

Puedes buscar propuestas y solicitudes de extracción globalmente a través de todos los {% data variables.product.product_name %}, o buscar propuestas y solicitudes de extracción dentro de una organización particular. Para obtener más información, consulta "[Acerca de buscar en {% data variables.product.company_short %}](/articles/about-searching-on-github)".

{% tip %}

**Tips:**{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
  - Este artículo contiene búsquedas de ejemplo en el sitio web {% data variables.product.prodname_dotcom %}.com, pero puedes utilizar los mismos filtros de búsqueda en {% data variables.product.product_location %}.{% endif %}
  - Para obtener una lista de sintaxis de búsqueda que puedas agregar a cualquier calificador para mejorar aún más tus resultados, consulta "[Comprender la sintaxis de búsqueda](/articles/understanding-the-search-syntax)".
  - Utiliza comillas alrededor de los términos de búsqueda que contengan varias palabras. Por ejemplo, si deseas buscar propuestas con la etiqueta "In progress" (En curso), buscarías por la etiqueta `label:"in progress"`. Buscar no distingue entre mayúsculas y minúsculas.
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

### Buscar únicamente propuestas o solicitudes de extracción

Por defecto, la búsqueda de {% data variables.product.product_name %} devolverá tanto propuestas como solicitudes de extracción. Sin embargo, puedes restringir los resultados de la búsqueda a solo propuestas y solicitudes de extracción utilizando el calificador `type` o `is`.

| Qualifier    | Ejemplo                                                                                                                                                                                                                |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:pr`    | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) encuentra solicitudes de extracción con la palabra "cat."                                                                                     |
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) encuentra propuestas que contienen la palabra "github," y tienen un comentario de @defunkt. |
| `is:pr`      | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) encuentra solicitudes de extracción con la palabra "event."                                                                          |
| `is:issue`   | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) encuentra propuestas cerradas con la etiqueta "bug."                                           |

### Buscar por título, cuerpo o comentarios

Con el calificador `in` puedes restringir tu búsqueda por título, cuerpo, comentarios o cualquier combinación de estos. Cuando omites este calificador, se buscan el título, el cuerpo y los comentarios, todos ellos.

| Qualifier     | Ejemplo                                                                                                                                               |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:title`    | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues) encuentra propuestas con "warning" en su título.                   |
| `in:body`     | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) encuentra propuestas con "error" en su título o cuerpo.    |
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) encuentra propuestas que mencionan "shipit" en sus comentarios. |

### Buscar dentro de los repositorios de un usuario u organización

Para buscar propuestas y solicitudes de extracción en todos los repositorios que son propiedad de un determinado usuario u organización, puedes utilizar el calificador `user` o `org`. Para buscar propuestas y solicitudes de extracción en un repositorio específico, puedes utilizar el calificador `repo`.

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) encuentra propuestas con la palabra "ubuntu" de repositorios que son propiedad de @defunkt.                                                                         |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) encuentra propuestas en repositorios que son propiedad de la organización de GitHub.                                                                                   |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) coincidirá con informes de problemas del proyecto de shumway de @mozilla que fueron creados antes de marzo de 2012. |

### Buscar por estado abierto o cerrado

Puedes filtrar propuestas y solicitudes de extracción en base a si están abiertas o cerradas utilizando el calificador `state` o `is`.

| Qualifier      | Ejemplo                                                                                                                                                                                                              |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `state:open`   | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) encuentra propuestas abiertas que mencionan a @vmg con la palabra "libraries." |
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) encuentra propuestas cerradas con la palabra "design" en el cuerpo.                        |
| `is:open`      | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) encuentra propuestas abiertas con la palabra "performance."                                             |
| `is:closed`    | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) encuentra propuestas y solicitudes de extracción cerradas con la palabra "android."                                    |

### Filtrar por visibilidad de repositorio

Puedes filtrar por la visibilidad del repositorio que contenga las propuestas y solicitudes de cambios utilizando el calificador `is`. Para obtener más información, consulta la sección "[Acerca de la visibilidad de un repositorio](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)".

| Calificador| Ejemplo | ------------- | ------------- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) coincide con las propuestas y solicitudes de cambios en los repositorios públicos.{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues) coincide con las propuestas y solicitudes de cambios en los repositorios internos.{% endif %} | `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues) coincide con las propuestas y solicitudes de cambios que contienen la palabra "cupcake" en los repositorios privados a los que puedes acceder.

### Buscar por autor

El calificador `author` (autor) encuentra propuestas y solicitudes de extracción creadas por un determinado usuario o cuenta de integración.

| Qualifier                 | Ejemplo                                                                                                                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) coincide con las propeustas y solicitudes de cambios que contienen la palabra "cool" y que creó @gjtorikian.     |
|                           | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) coincide con las propuestas que escribió @mdo y que contienen la palabra "bootstrap" en el cuerpo. |
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) coincide con las propuestas que creó la cuenta de integración llamada "robot".                                             |

### Buscar por asignatario

El calificador `assignee` (asignatario) encuentra propuestas y solicitudes de extracción que están asignadas a un determinado usuario. No puedes buscar propuestas y solicitudes que tengan _algún_ asignado cualquiera, sin embargo, puedes buscar por [propuestas y solicitudes de cambios que no tengan asignados](#search-by-missing-metadata).

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                             |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) coincide con las propuestas y solicitudes de cambio en el proyecto de libgit2 que se hayan asignado a @vmg. |

### Buscar por mención

El calificador `mentions` (menciones) encuentra propuestas que mencionan a un determinado usuario. Para obtener más información, consulta [Mencionar personas y equipos](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)."

| Qualifier                 | Ejemplo                                                                                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>mentions:<em>USERNAME</em></code> | [**resque mentions:defunkt**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) coincide con las propuestas que tengan la palabra "resque" y que mencionen a @defunkt. |

### Buscar por mención de equipo

Para las organizaciones y los equipos a los que perteneces, puedes utilizar el calificador `team` (equipo) para encontrar propuestas y solicitudes de extracción que mencionan a un determinado equipo dentro de esa organización. Reemplaza estos nombres de ejemplo con el nombre de tu organización y equipo para realizar una búsqueda.

| Qualifier                 | Ejemplo                                                                                                               |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **team:jekyll/owners** coincide con las propeustas en donde se menciona al equipo `@jekyll/owners`.                   |
|                           | **team:myorg/ops is:open is:pr** coincide con las solicitudes de cambios en donde se menciona al equipo `@myorg/ops`. |

### Buscar por comentarista

El calificador `commenter` (comentarista) encuentra propuestas que contienen un comentario de un determinado usuario.

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                                                               |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) coincide con las propuestas en los repositorios que le pertenecen a GitHub y que contienen la palabra "github" y un comentario de @defunkt. |

### Buscar por usuario que participa en una propuesta o solicitud de extracción

Puedes utilizar el calificador `involves` para encontrar propuestas que de algún modo involucran a un determinado usuario. El calificador `involves` es un operador lógico OR (o) entre los calificadores `author`, `assignee`, `mentions` y `commenter` para un usuario único. En otras palabras, este calificador encuentra propuestas y solicitudes de extracción que fueron creadas por un determinado usuario, asignadas a ese usuario, que lo mencionan o que fueron comentadas por ese usuario.

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                   |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** coincide con las propeustas en donde estén involucrados ya sea @defunkt o @jlord.                                      |
|                           | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) coincide con las propuestas en donde se involucra a @mdo y que no contienen la palabra "bootstrap" en el cuerpo. |

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### Buscar reportes de problemas y solicitudes de extracción enlazados
Puedes acotar tus resultados para que solo incluyan informes de problemas que se enlazaron con solicitudes de extracción con una referencia cerrada, o solicitudes de extracción que se enlazaron a un informe de problemas que se pueden cerrar con otra solicitud de extracción.

| Qualifier       | Ejemplo                                                                                                                                                                                                                                                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `linked:pr`     | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) coincidirá con informes de problemas abiertos en el repositorio `desktop/desktop` que se enlazan a una solicitud de extracción con una referencia cerrada.                                                      |
| `linked:issue`  | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) coincidirá con las solicitudes de extracción cerradas en el repositorio `desktop/desktop` que se enlazaron a un informe de problemas que se pudo haber cerrado con una solicitud de extracción.       |
| `-linked:pr`    | [**repo:desktop/desktop is:open -linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) coincidirá con informes de problemas abiertos en el repositorio `desktop/desktop` que no estén enlazados a una solicitud de extracción por una referencia cerrada.                                            |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) Coincidirá con las solicitudes de extracción abiertas en el repositorio `desktop/desktop` que no se hayan enlazado con un informe de problemas que la solicitud de extracción haya creado. 
{% endif %}

### Buscar por etiqueta

Puedes acotar tus resultados por etiquetas, utilizando el calificador `label` (etiqueta). Ya que las propuestas pueden tener múltiples etiquetas, puedes enumerar un calificador separado para cada propuesta.

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) encuentra propuestas con la etiqueta "help wanted" (se necesita ayuda) que están en los repositorios Ruby.                                             |
|                            | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) encuentra propuestas con la palabra "broken" en el cuerpo, que no tienen la etiqueta "bug" (error), pero *que tienen* la etiqueta "priority" (prioridad). |
|                            | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) encuentra propuestas con las etiquetas "bug" (error) y "resolved" (solucionado).                                                                                                         |

### Buscar por hito

El calificador `milestone` (hito) encuentra propuestas o solicitudes de extracción que son parte de un [hito](/articles/about-milestones) dentro de un repositorio.

| Qualifier                  | Ejemplo                                                                                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) encuentra propuestas que son un hito con el nombre de "overhaul."   |
|                            | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) encuentra propuestas que están en un hito con el nombre de "bug fix." |

### Buscar por tablero de proyecto

Puedes utilizar el calificador `project` (proyecto) para encontrar propuestas que están asociadas con un [tablero de proyecto](/articles/about-project-boards/) específico en un repositorio u organización. Debes buscar tableros de proyecto por el número del tablero de proyecto. Puedes encontrar el número del tablero de proyecto al final de la URL de cada tablero de proyecto.

| Qualifier                  | Ejemplo                                                                                                                                       |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** encuentra propuestas propiedad de GitHub que están asociadas con el tablero de proyecto de la organización número 57.   |
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** encuentra propuestas que están asociadas con el tablero de proyecto 1 en el repositorio lingüístico de @github. |

### Buscar por estado de confirmación

Puedes filtrar solicitudes de extracción en base al estado de las confirmaciones. Esto es particularmente útil si estás utilizando [el estado API](/rest/reference/repos#statuses) o un servicio CI.

| Qualifier        | Ejemplo                                                                                                                                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) encuentra solicitudes de extracción abiertas en repositorios Go donde el estado es pendiente.                                                   |
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) encuentra solicitudes de extracción abiertas con la palabra "finally" en el cuerpo con un estado exitoso. |
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) encuentra solicitudes de extracción abiertas en mayo de 2015 con un estado falló.             |

### Buscar por SHA de confirmación

Si sabes el hash SHA específico de una confirmación, puedes utilizarlo para buscar solicitudes de extracción que contienen ese SHA. La sintaxis SHA debe ser por lo menos de siete caracteres.

| Qualifier                  | Ejemplo                                                                                                                                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) encuentra solicitudes de extracción con una confirmación SHA que comience con `e1109ab`.                                               |
|                            | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) encuentra solicitudes de extracción fusionadas con una confirmación SHA que comience con `0eff326d6213c`. |

### Buscar por nombre de la rama

Puedes filtrar solicitudes de extracción en base a la rama de la que provienen (la rama "head" [de encabezado]) o la rama en la que están fusionadas (en la rama "base" [base]).

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                                           |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) encuentra solicitudes de extracción abiertas desde los nombres de las ramas que comienzan con la palabra "change" que están cerradas. |
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) encuentra solicitudes de extracción que se están fusionando dentro de la rama `gh-pages`.                                                                                         |

### Buscar por lenguaje

Con el calificador `language` (lenguaje) puedes buscar propuestas y solicitudes de extracción dentro de repositorios que están escritos en un determinado lenguaje.

| Qualifier                  | Ejemplo                                                                                                                                                                |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) encuentra propuestas abiertas que están en los repositorios Ruby. |

### Buscar por cantidad de comentarios

Puedes utilizar el calificador `comments` (comentarios) junto con los calificadores [mayor que, menor que y rango ](/articles/understanding-the-search-syntax) para buscar por cantidad de comentarios.

| Qualifier                  | Ejemplo                                                                                                                                                                       |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3E100&type=Issues) encuentra propuestas cerradas con más de 100 comentarios. |
|                            | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) encuentra propuestas con comentarios que van desde 500 a 1000.                         |

### Buscar por cantidad de interacciones

Puedes filtrar propuestas y solicitudes de extracción en base a la cantidad de interacciones, utilizando el calificador `interactions` (interacciones) y junto con [los calificadores mayor que, menor que y rango](/articles/understanding-the-search-syntax). El conteo de interacciones es la cantidad de reacciones y comentarios sobre una propuesta o solicitud de extracción.

| Qualifier                  | Ejemplo                                                                                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) encuentra solicitudes de extracción o propuestas con más de 2000 interacciones.          |
|                            | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) encuentra solicitudes de extracción o propuestas con un rango de interacciones entre 500 a 1000. |

### Buscar por cantidad de reacciones

Puedes filtrar propuestas y solicitudes de extracción en base a la cantidad de reacciones, utilizando el calificador `reactions` (reacciones) y junto con [los calificadores mayor que, menor que y rango](/articles/understanding-the-search-syntax).

| Qualifier                  | Ejemplo                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) encuentra propuestas con más de 1000 reacciones.  |
|                            | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) encuentra propuestas con reacciones con un rango de entre 500 a 1000. |

### Buscar solicitudes de extracción en borrador
Puedes filtrar por solicitudes de extracción en borrador. Para obtener más información, consulta "[Acerca de las solicitudes de extracción](/articles/about-pull-requests#draft-pull-requests)."

| Calificador        | Ejemplo | ------------- | -------------{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %} | `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue) coincide con los borradores de las solicitudes de cambios. | `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) coincidirá con las solicitudes de extracción listas para revisión.{% else %} | `is:draft` | [**is:draft**](https://github.com/search?q=is%3Adraft) coincidirá con las solicitudes de extracción en estado de borrador.{% endif %}

### Buscar por estado de revisión de solicitud de extracción y revisor

Puedes filtrar las solicitudes de extracción en función de su [estado de revisión](/articles/about-pull-request-reviews) (_ninguno_, _requerido_, _aprobado_ o _cambios solicitados_), por revisor y por revisor solicitado.

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `review:none`              | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) encuentra solicitudes de extracción que no han sido revisadas.                                                                                                                                                                                                                                                                                                                                                                               |
| `review:required`          | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) encuentra solicitudes de extracción que requieren una revisión antes de poder ser fusionadas.                                                                                                                                                                                                                                                                                                                                        |
| `review:approved`          | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) encuentra solicitudes de extracción que un revisor ha aprobado.                                                                                                                                                                                                                                                                                                                                                                      |
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) encuentra solicitudes de extracción en las cuales un revisor ha solicitado cambios.                                                                                                                                                                                                                                                                                                                                |
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) encuentra revisión de solicitudes de extracción por una persona particular.                                                                                                                                                                                                                                                                                                                                            |
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) encuentra solicitudes de extracción donde una persona específica solicitó una revisión. Los revisores solicitados ya no se enumeran en los resultados de búsqueda después de que han revisado una solicitud de extracción. Si la persona solicitada es sobre un equipo al que se lo solicita la revisión, entonces las solicitudes de revisión de ese equipo también aparecerán en los resultados de búsqueda. |
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:atom/design**](https://github.com/search?q=type%3Apr+team-review-requested%3Aatom%2Fdesign&type=Issues) encuentra solicitudes de extracción que tienen solicitudes de revisión de un equipo `atom/design`. Los revisores solicitados ya no se enumeran en los resultados de búsqueda después de que han revisado una solicitud de extracción.                                                                                                                                                                         |

### Buscar por cuándo una propuesta o solicitud de extracción fue creada o actualizada por última vez

Puedes filtrar propuestas en base al momento de creación o al momento de su última actualización. Para la creación de una propuesta, puedes usar el calificador `created` (creado); para encontrar cuándo se actualizó por última vez un repositorio, querrás utilizar el calificador `pushed` (subido).

Ambos toman una fecha como su parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) encuentra las propuestas que se crearon antes de 2011 en los repositorios que están escritos en C#. |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) encuentra las propuestas con la palabra "weird" en el cuerpo, las cuales se actualizaron después de febrero del 2013. |

### Buscar por cuándo una propuesta o solicitud de extracción fue cerrada

Puedes filtrar propuestas y solicitudes de extracción en base a su momento de cierre, utilizando el calificador `closed` (cerrada).

Este calificador toma una fecha como su parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) encuentra las propuestas y solicitudes de cambios en Swift que se cerraron después del 11 de junio de 2014.                                      |
|                            | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) encuentra las propuestas y solicitudes de cambio con la palabra "data" en el cuerpo, las cuales se cerrron antes de octubre de 2012. |

### Buscar por cuándo una solicitud de extracción fue fusionada

Puedes filtrar solicitudes de extracción en base a cuándo fueron fusionadas, utilizando el calificador `merged` (fusionada).

Este calificador toma una fecha como su parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                                                                          |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>merged:<em>YYYY-MM-DD</em></code> | [**language:javascript merged:<2011-01-01**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) encuntra las solicitudes de cambio en los repositorios de JavaScript que se fusionaron antes de 2011.                                                        |
|                            | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues) encuentra las solicitudes de cambiosen Ruby con la palabra "fast" en el título, los cuales se hayan fusionado después de mayo de 2014. |

### Buscar en base a si una solicitud de extracción se fusionó o se desagrupó

Puedes filtrar solicitudes de extracción en base a cuándo fueron fusionadas o desagrupadas, utilizando el calificador `is`.

| Qualifier     | Ejemplo                                                                                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:merged`   | [**bugfix is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) encuentra solicitudes de extracción fusionadas con la palabra "bugfix." |
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) encuentra propuestas y solicitudes de extracción cerradas con la palabra "error."   |

### Buscar en base a si un repositorio está archivado

El calificador `archived` (archivado) filtra tus resultados en base a si una propuesta o una solicitud de extracción está en un repositorio archivado.

| Qualifier        | Ejemplo                                                                                                                                                                                                                       |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `archived:true`  | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) encuentra propuestas y solicitudes de extracción que contienen la palabra "GNOME" en repositorios archivados a los que tienes acceso.      |
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) encuentra propuestas y solicitudes de extracción que contienen la palabra "GNOME" en repositorios no archivados a los que tienes acceso. |

### Buscar en base a si una conversación está bloqueada

Puedes buscar por una propuesta o solicitud de extracción que tiene una conversación utilizando el calificador `is`. Para obtener más información, consulta "[Bloquear conversaciones](/communities/moderating-comments-and-conversations/locking-conversations)."

| Qualifier     | Ejemplo                                                                                                                                                                                                                                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:locked`   | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) encuentra propuestas o solicitudes de extracción con las palabras "code of conduct" que tienen una conversación bloqueada en un repositorio que no se ha archivado. |
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) encuentra propuestas o solicitudes de extracción con las palabras "code of conduct" que tienen una conversación desbloqueada en un repositorio que no se ha archivado.     |

### Buscar por metadatos faltantes

Puedes acotar tu búsqueda a propuestas y solicitudes de extracción que tienen determinados metadatos faltantes, utilizando el calificador `no`. Esos metadatos incluyen:

* Etiquetas
* Hitos
* Asignatarios
* Proyectos

| Qualifier      | Ejemplo                                                                                                                                                                                                                                                                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `no:label`     | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) encuentra propuestas y solicitudes de extracción con la palabra "priority" que tampoco tienen ninguna etiqueta.                                                                   |
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) encuentra propuestas no asociadas con un hito que contienen la palabra "sprint."                                                                      |
| `no:assignee`  | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) encuentra propuestas no asociadas con un asignatario, que contienen la palabra "important," y en repositorios Java. |
| `no:project`   | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) encuentra propuestas no asociadas con un tablero de proyecto, que contienen la palabra "build."                                                                      |

### Leer más

- "[Clasificar los resultados de la búsqueda](/articles/sorting-search-results/)"
