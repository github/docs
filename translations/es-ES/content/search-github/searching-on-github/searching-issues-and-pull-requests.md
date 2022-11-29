---
title: Buscar propuestas y solicitudes de extracción
intro: 'Puedes buscar propuestas y solicitudes de extracción en {% data variables.product.product_name %} y acotar los resultados utilizando estos calificadores de búsqueda en cualquier combinación.'
redirect_from:
  - /articles/searching-issues
  - /articles/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-issues-and-pull-requests
  - /github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Search issues & PRs
ms.openlocfilehash: 8565d2d31c66291114da8ab4a95312a568d39ae3
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106465'
---
Puedes buscar propuestas y solicitudes de extracción globalmente a través de todos los {% data variables.product.product_name %}, o buscar propuestas y solicitudes de extracción dentro de una organización particular. Para más información, vea "[Acerca de la búsqueda en {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

{% tip %}

**Sugerencias:** {% ifversion ghes or ghae %}
  - Este artículo contiene búsquedas de ejemplo en el sitio web {% data variables.product.prodname_dotcom %}.com, pero puedes usar los mismos filtros de búsqueda en {% data variables.location.product_location %}.{% endif %}
  - Para obtener una lista de sintaxis de búsqueda que pueda agregar a cualquier calificador de búsqueda para mejorar aún más los resultados, vea "[Descripción de la sintaxis de búsqueda](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax)".
  - Utiliza comillas alrededor de los términos de búsqueda que contengan varias palabras. Por ejemplo, si quiere buscar incidencias con la etiqueta "En curso", tendría que buscar `label:"in progress"`. Buscar no distingue entre mayúsculas y minúsculas.
  - {% data reusables.search.search_issues_and_pull_requests_shortcut %}

  {% endtip %}

## Buscar únicamente propuestas o solicitudes de extracción

Por defecto, la búsqueda de {% data variables.product.product_name %} devolverá tanto propuestas como solicitudes de extracción. Pero puede restringir los resultados de la búsqueda solo a incidencias o solicitudes de incorporación de cambios mediante el calificador `type` o `is`.

| Calificador:  | Ejemplo
| ------------- | -------------
| `type:pr` | [**cat type:pr**](https://github.com/search?q=cat+type%3Apr&type=Issues) coincide con las solicitudes de incorporación de cambios con la palabra "cat".
| `type:issue` | [**github commenter:defunkt type:issue**](https://github.com/search?q=github+commenter%3Adefunkt+type%3Aissue&type=Issues) coincide con las incidencias que contienen la palabra "github" y tienen un comentario de @defunkt.
| `is:pr` | [**event is:pr**](https://github.com/search?utf8=%E2%9C%93&q=event+is%3Apr&type=) coincide con las solicitudes de incorporación de cambios con la palabra "event".
| `is:issue` | [**is:issue label:bug is:closed**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aissue+label%3Abug+is%3Aclosed&type=) coincide con incidencias cerradas con la etiqueta "bug".

## Buscar por título, cuerpo o comentarios

Con el calificador `in` puede restringir la búsqueda al título, cuerpo, comentarios o cualquier combinación de estos valores. Cuando omites este calificador, se buscan el título, el cuerpo y los comentarios, todos ellos.

| Calificador:     | Ejemplo
| ------------- | -------------
| `in:title` | [**warning in:title**](https://github.com/search?q=warning+in%3Atitle&type=Issues) coincide con incidencias que contienen "warning" en el título.
| `in:body` | [**error in:title,body**](https://github.com/search?q=error+in%3Atitle%2Cbody&type=Issues) coincide con incidencias que contienen "error" en el título o el cuerpo.
| `in:comments` | [**shipit in:comments**](https://github.com/search?q=shipit+in%3Acomment&type=Issues) coincide con incidencias que mencionan "shipit" en sus comentarios.

## Buscar dentro de los repositorios de un usuario u organización

Para buscar incidencias o solicitudes de incorporación de cambios en todos los repositorios que son propiedad de una determinada organización o usuario, puede usar el calificador `user` o `org`. Para buscar incidencias y solicitudes de incorporación de cambios en un repositorio concreto, puede usar el calificador `repo`.

{% data reusables.pull_requests.large-search-workaround %}

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**user:defunkt ubuntu**](https://github.com/search?q=user%3Adefunkt+ubuntu&type=Issues) coincide con las incidencias con la palabra "ubuntu" de repositorios propiedad de @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Issues&utf8=%E2%9C%93) coincide con las incidencias de repositorios que pertenecen a la organización de GitHub.
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:mozilla/shumway created:<2012-03-01**](https://github.com/search?q=repo%3Amozilla%2Fshumway+created%3A%3C2012-03-01&type=Issues) coincide con las incidencias del proyecto shumway de @mozilla creadas antes de marzo de 2012.

## Buscar por estado abierto o cerrado

Puede filtrar incidencias y solicitudes de incorporación de cambios en función de si están abiertas o cerradas mediante el calificador `state` o `is`.

| Calificador:        | Ejemplo
| ------------- | -------------
| `state:open` | [**libraries state:open mentions:vmg**](https://github.com/search?utf8=%E2%9C%93&q=libraries+state%3Aopen+mentions%3Avmg&type=Issues) coincide con las incidencias abiertas en las que se menciona @vmg con la palabra "libraries".
| `state:closed` | [**design state:closed in:body**](https://github.com/search?utf8=%E2%9C%93&q=design+state%3Aclosed+in%3Abody&type=Issues) coincide con incidencias cerradas que contienen la palabra "design" en el cuerpo.
| `is:open` | [**performance is:open is:issue**](https://github.com/search?q=performance+is%3Aopen+is%3Aissue&type=Issues) coincide con incidencias abiertas que contienen la palabra "performance".
| `is:closed` | [**android is:closed**](https://github.com/search?utf8=%E2%9C%93&q=android+is%3Aclosed&type=) coincide con incidencias cerradas y solicitudes de incorporación de cambios con la palabra "android".

{% ifversion issue-close-reasons %}
## Buscar por el motivo por el que se cerró una incidencia

Puedes filtrar las incidencias en función del motivo que se dio al cerrarlas mediante el calificador `reason`.

| Calificador:        | Ejemplo
| ------------- | -------------
| `reason:completed` | [**libraries is:closed reason:completed**](https://github.com/search?q=libraries+is%3Aclosed+reason%3Acompleted&type=Issues) coincide con las incidencias con la palabra "libraries" que se cerraron como "completed".
| `reason:"not planned"` | [**libraries is:closed reason:"not planned"**](https://github.com/search?q=libraries+is%3Aclosed+reason%3A%22not+planned%22&type=Issues) coincide con las incidencias con la palabra "libraries" que se cerraron como "not planned".
 
{% endif %}

## Filtrar por visibilidad de repositorio

Puede filtrar por la visibilidad del repositorio que contenga las incidencias y solicitudes de incorporación de cambios con el calificador `is`. Para más información, vea "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

| Calificador  | Ejemplo | ------------- | ------------- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Issues) coincide con incidencias y solicitudes de incorporación de cambios en repositorios públicos.{% endif %}{% ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Issues) coincide con incidencias y solicitudes de incorporación de cambios en repositorios internos.{% endif %} | `is:private` | [**is:private cupcake**](https://github.com/search?q=is%3Aprivate+cupcake&type=Issues) coincide con incidencias y solicitudes de incorporación de cambios que contienen la palabra "cupcake" en repositorios privados a los que puede acceder.

## Buscar por autor

El calificador `author` busca incidencias y solicitudes de incorporación de cambios creadas por un usuario o cuenta de integración determinados.

| Calificador:     | Ejemplo
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**cool author:gjtorikian**](https://github.com/search?q=cool+author%3Agjtorikian&type=Issues) coincide con incidencias y solicitudes de incorporación de cambios con la palabra "cool" creadas por @gjtorikian.
| | [**bootstrap in:body author:mdo**](https://github.com/search?q=bootstrap+in%3Abody+author%3Amdo&type=Issues) coincide con las incidencias escritas por @mdo que contienen la palabra "bootstrap" en el cuerpo.
| <code>author:app/<em>USERNAME</em></code> | [**author:app/robot**](https://github.com/search?q=author%3Aapp%2Frobot&type=Issues) coincide con las incidencias creadas por la cuenta de integración denominada "robot".

## Buscar por asignatario

El calificador `assignee` busca incidencias y solicitudes de incorporación de cambios que se han asignado a un usuario determinado. No puede buscar incidencias ni solicitudes de incorporación de cambios que tengan _usuarios asignados_, pero puede buscar [incidencias y solicitudes de incorporación de cambios que no tengan usuarios asignados](#search-by-missing-metadata).

| Calificador:     | Ejemplo
| ------------- | -------------
| <code>assignee:<em>USERNAME</em></code> | [**assignee:vmg repo:libgit2/libgit2**](https://github.com/search?utf8=%E2%9C%93&q=assignee%3Avmg+repo%3Alibgit2%2Flibgit2&type=Issues) coincide con las incidencias y solicitudes de incorporación de cambios en el proyecto libgit2 asignadas a @vmg.

## Buscar por mención

El calificador `mentions` busca incidencias en las que se menciona a un usuario determinado. Para más información, vea "[Mención de personas y equipos](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)".

| Calificador:     | Ejemplo
| ------------- | -------------
| <code>mentions:<em>USERNAME</em></code> | [ **`resque mentions:defunkt`**](https://github.com/search?q=resque+mentions%3Adefunkt&type=Issues) coincide con incidencias con la palabra "resque" en las que se menciona a @defunkt.

## Buscar por mención de equipo

Para las organizaciones y los equipos a los que pertenezca, puede usar el calificador `team` para buscar incidencias y solicitudes de incorporación de cambios en las que @mention a un equipo concreto dentro de esa organización. Reemplaza estos nombres de ejemplo con el nombre de tu organización y equipo para realizar una búsqueda.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>team:<em>ORGNAME/TEAMNAME</em></code> | **`team:jekyll/owners`** coincide con las incidencias en las que se menciona al equipo `@jekyll/owners`.
| | **team:myorg/ops is:open is:pr** coincide con las solicitudes de incorporación de cambios abiertas en las que se menciona al equipo `@myorg/ops`.

## Buscar por comentarista

El calificador `commenter` busca incidencias que contienen un comentario de un usuario concreto.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:defunkt org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Adefunkt+org%3Agithub&type=Issues) coincide con las incidencias de repositorios propiedad de GitHub, que contienen la palabra "github" y que tienen un comentario de @defunkt.

## Buscar por usuario que participa en una propuesta o solicitud de extracción

Puede usar el calificador `involves` para buscar incidencias que, de alguna manera, implican a un usuario concreto. El calificador `involves` es un OR lógico entre los calificadores `author`, `assignee`, `mentions` y `commenter` para un único usuario. En otras palabras, este calificador encuentra propuestas y solicitudes de extracción que fueron creadas por un determinado usuario, asignadas a ese usuario, que lo mencionan o que fueron comentadas por ese usuario.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>involves:<em>USERNAME</em></code> | **[involves:defunkt involves:jlord](https://github.com/search?q=involves%3Adefunkt+involves%3Ajlord&type=Issues)** coincide con incidencias en las que están implicados @defunkt o @jlord.
| | [**NOT bootstrap in:body involves:mdo**](https://github.com/search?q=NOT+bootstrap+in%3Abody+involves%3Amdo&type=Issues) coincide con incidencias en las que está implicado @mdo que no contienen la palabra "bootstrap" en el cuerpo.

## Buscar reportes de problemas y solicitudes de extracción enlazados
Puedes acotar tus resultados para que solo incluyan informes de problemas que se enlazaron con solicitudes de extracción con una referencia cerrada, o solicitudes de extracción que se enlazaron a un informe de problemas que se pueden cerrar con otra solicitud de extracción.

| Calificador: | Ejemplo |
| ------------- | ------------- |
| `linked:pr` | [**repo:desktop/desktop is:open linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+linked%3Apr) coincide con incidencias abiertas en el repositorio `desktop/desktop` que están vinculadas a una solicitud de incorporación de cambios mediante una referencia de cierre. |
| `linked:issue` | [**repo:desktop/desktop is:closed linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aclosed+linked%3Aissue) coincide con las solicitudes de incorporación de cambios cerradas en el repositorio `desktop/desktop` que estaban vinculadas a una incidencia que la solicitud de incorporación de cambios puede haber cerrado. |
| `-linked:pr` | [**repo:desktop/desktop is:open -linked:pr**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Apr) coincide con incidencias abiertas en el repositorio `desktop/desktop` que no están vinculadas a una solicitud de incorporación de cambios mediante una referencia de cierre. |
| `-linked:issue` | [**repo:desktop/desktop is:open -linked:issue**](https://github.com/search?q=repo%3Adesktop%2Fdesktop+is%3Aopen+-linked%3Aissue) coincide con las solicitudes de incorporación de cambios abiertas en el repositorio `desktop/desktop` que no están vinculadas a una incidencia que la solicitud de incorporación de cambios puede cerrar. |

## Buscar por etiqueta

Puede restringir los resultados por etiquetas, mediante el calificador `label`. Ya que las propuestas pueden tener múltiples etiquetas, puedes enumerar un calificador separado para cada propuesta.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>label:<em>LABEL</em></code> | [**label:"help wanted" language:ruby**](https://github.com/search?utf8=%E2%9C%93&q=label%3A%22help+wanted%22+language%3Aruby&type=Issues) coincide con las incidencias que tienen la etiqueta "help wanted" y que están en los repositorios de Ruby.
|  | [**broken in:body -label:bug label:priority**](https://github.com/search?q=broken+in%3Abody+-label%3Abug+label%3Apriority&type=Issues) coincide con incidencias que contienen la palabra "broken" en el cuerpo, que carecen de la etiqueta "bug", pero *tienen* la etiqueta "priority".
| | [**label:bug label:resolved**](https://github.com/search?l=&q=label%3Abug+label%3Aresolved&type=Issues) coincide con las incidencias con las etiquetas "bug" y "resolved".
| | [**label:bug,resolved**](https://github.com/search?q=label%3Abug%2Cresolved&type=Issues) coincide con incidencias con las etiquetas "bug" o "resolved".

## Buscar por hito

El calificador `milestone` busca incidencias o solicitudes de incorporación de cambios que forman parte de un [hito](/articles/about-milestones) dentro de un repositorio.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>milestone:<em>MILESTONE</em></code> | [**milestone:"overhaul"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22overhaul%22&type=Issues) coincide con las incidencias que se encuentran en un hito denominado "overhaul".
| | [**milestone:"bug fix"**](https://github.com/search?utf8=%E2%9C%93&q=milestone%3A%22bug+fix%22&type=Issues) coincide con las incidencias que se encuentran en un hito denominado "bug fix".

## Buscar por tablero de proyecto

Puede usar el calificador `project` para buscar incidencias asociadas a un [panel de proyecto](/articles/about-project-boards/) específico en un repositorio u organización. Debes buscar tableros de proyecto por el número del tablero de proyecto. Puedes encontrar el número del tablero de proyecto al final de la URL de cada tablero de proyecto.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>project:<em>PROJECT_BOARD</em></code> | **project:github/57** coincide con incidencias propiedad de GitHub que están asociadas con el panel de proyecto 57 de la organización.
| <code>project:<em>REPOSITORY/PROJECT_BOARD</em></code> | **project:github/linguist/1** coincide con las incidencias asociadas con el panel de proyecto 1 en el repositorio lingüista de @github.

## Buscar por estado de confirmación

Puedes filtrar solicitudes de extracción en base al estado de las confirmaciones. Esto es especialmente útil si usa [Status API](/rest/reference/commits#commit-statuses) o un servicio de CI.

| Calificador:        | Ejemplo
| ------------- | -------------
| `status:pending` | [**language:go status:pending**](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago+status%3Apending) coincide con las solicitudes de incorporación de cambios abiertas en repositorios de Go donde el estado está pendiente.
| `status:success` | [**is:open status:success finally in:body**](https://github.com/search?utf8=%E2%9C%93&q=is%3Aopen+status%3Asuccess+finally+in%3Abody&type=Issues) coincide con las solicitudes de incorporación de cambios abiertas que contienen la palabra "finally" en el cuerpo con un estado correcto.
| `status:failure` | [**created:2015-05-01..2015-05-30 status:failure**](https://github.com/search?utf8=%E2%9C%93&q=created%3A2015-05-01..2015-05-30+status%3Afailure&type=Issues) coincide con las solicitudes de incorporación de cambios abiertas en mayo de 2015 con un estado de error.

## Buscar por SHA de confirmación

Si sabes el hash SHA específico de una confirmación, puedes utilizarlo para buscar solicitudes de extracción que contienen ese SHA. La sintaxis SHA debe ser por lo menos de siete caracteres.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code><em>SHA</em></code> | [**e1109ab**](https://github.com/search?q=e1109ab&type=Issues) coincide con las solicitudes de incorporación de cambios con un SHA de confirmación que comienza por `e1109ab`.
| | [**0eff326d6213c is:merged**](https://github.com/search?q=0eff326d+is%3Amerged&type=Issues) coincide con las solicitudes de incorporación de cambios combinadas con un SHA de confirmación que comienza por `0eff326d6213c`.

## Buscar por nombre de la rama

Puedes filtrar solicitudes de extracción en base a la rama de la que provienen (la rama "head" [de encabezado]) o la rama en la que están fusionadas (en la rama "base" [base]).

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>head:<em>HEAD_BRANCH</em></code> | [**head:change is:closed is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=head%3Achange+is%3Aclosed+is%3Aunmerged) coincide con las solicitudes de incorporación de cambios abiertas desde nombres de rama que comienzan por la palabra "change" que están cerradas.
| <code>base:<em>BASE_BRANCH</em></code> | [**base:gh-pages**](https://github.com/search?utf8=%E2%9C%93&q=base%3Agh-pages) coincide con las solicitudes de incorporación de cambios que se combinan en la rama `gh-pages`.

## Buscar por lenguaje

Con el calificador `language` puede buscar incidencias y solicitudes de incorporación de cambios dentro de repositorios escritos en un lenguaje concreto.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>language:<em>LANGUAGE</em></code> | [**language:ruby state:open**](https://github.com/search?q=language%3Aruby+state%3Aopen&type=Issues) coincide con incidencias abiertas que se encuentran en repositorios de Ruby.

## Buscar por cantidad de comentarios

Puede usar el calificador `comments` junto con los [calificadores mayor que, menor que y de rango](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax) para buscar por número de comentarios.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>comments:<em>n</em></code> | [**state:closed comments:&gt;100**](https://github.com/search?q=state%3Aclosed+comments%3A%3E100&type=Issues) coincide con incidencias cerradas con más de 100 comentarios.
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Issues) coincide con incidencias con entre 500 y 1000 comentarios.

## Buscar por cantidad de interacciones

Puede filtrar las incidencias y solicitudes de incorporación de cambios por el número de interacciones con el calificador `interactions` junto con [calificadores mayor que, menor que y de rango](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax). El conteo de interacciones es la cantidad de reacciones y comentarios sobre una propuesta o solicitud de extracción.

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) coincide con solicitudes de incorporación de cambios o incidencias con más de 2000 interacciones.
| | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) coincide con solicitudes de incorporación de cambios o incidencias con interacciones que varían entre 500 y 1000.

## Buscar por cantidad de reacciones

Puede filtrar las incidencias y solicitudes de incorporación de cambios por el número de reacciones con el calificador `reactions` junto con [calificadores mayor que, menor que y de rango](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E1000&type=Issues) coincide con incidencias con más de 1000 reacciones.
| | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) coincide con incidencias con entre 500-1000 reacciones.

## Buscar solicitudes de extracción en borrador
Puedes filtrar por solicitudes de extracción en borrador. Para más información, vea "[Acerca de las solicitudes de incorporación de cambios](/articles/about-pull-requests#draft-pull-requests)".

| Calificador:        | Ejemplo
| ------------- | -------------
| `draft:true` | [**draft:true**](https://github.com/search?q=draft%3Atrue) coincide con las solicitudes de incorporación de cambios de borrador.
| `draft:false` | [**draft:false**](https://github.com/search?q=draft%3Afalse) coincide con las solicitudes de incorporación de cambios que están listas para su revisión.

## Buscar por estado de revisión de solicitud de extracción y revisor

Puede filtrar las solicitudes de incorporación de cambios en función de su [estado de revisión](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews) (_ninguno_, _obligatorio_, _aprobado_ o _cambios solicitados_), por revisor y por revisor solicitado.

| Calificador:        | Ejemplo
| ------------- | -------------
| `review:none` | [**type:pr review:none**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Anone&type=Issues) coincide con las solicitudes de incorporación de cambios que no se han revisado.
| `review:required` | [**type:pr review:required**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Arequired&type=Issues) coincide con las solicitudes de incorporación de cambios que necesitan una revisión para poder combinarlas.
| `review:approved` | [**type:pr review:approved**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Aapproved&type=Issues) coincide con las solicitudes de incorporación de cambios aprobadas por un revisor.
| `review:changes_requested` | [**type:pr review:changes_requested**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review%3Achanges_requested&type=Issues) coincide con las solicitudes de incorporación de cambios en las que un revisor ha solicitado cambios.
| <code>reviewed-by:<em>USERNAME</em></code> | [**type:pr reviewed-by:gjtorikian**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+reviewed-by%3Agjtorikian&type=Issues) coincide con las solicitudes de incorporación de cambios revisadas por una persona concreta.
| <code>review-requested:<em>USERNAME</em></code> | [**type:pr review-requested:benbalter**](https://github.com/search?utf8=%E2%9C%93&q=type%3Apr+review-requested%3Abenbalter&type=Issues) coincide con las solicitudes de incorporación de cambios en las que se solicita una persona específica para su revisión. Los revisores solicitados ya no se enumeran en los resultados de búsqueda después de que han revisado una solicitud de extracción. Si la persona solicitada está en un equipo al que se le solicita la revisión, las solicitudes de revisión de ese equipo también aparecerán en los resultados de búsqueda.
| <code>user-review-requested:@me</code> | [**type:pr user-review-requested:@me** ](https://github.com/search?q=is%3Apr+user-review-requested%3A%40me+) coincide con las solicitudes de incorporación de cambios que se te ha pedido directamente que revises.
| <code>team-review-requested:<em>TEAMNAME</em></code> | [**type:pr team-review-requested:github/docs**](https://github.com/search?q=type%3Apr+team-review-requested%3Agithub%2Fdocs&type=pullrequests) coincide con las solicitudes de incorporación de cambios que tienen solicitudes de revisión del equipo `github/docs`. Los revisores solicitados ya no se enumeran en los resultados de búsqueda después de que han revisado una solicitud de extracción.

## Buscar por cuándo una propuesta o solicitud de extracción fue creada o actualizada por última vez

Puedes filtrar propuestas en base al momento de creación o al momento de su última actualización. Para la creación de incidencias, puede usar el calificador `created`; para determinar cuándo se ha actualizado una incidencia por última vez, le interesará usar el calificador `updated`.

Ambos toman una fecha como su parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>created:<em>YYYY-MM-DD</em></code> | [**language:c# created:<2011-01-01 state:open**](https://github.com/search?q=language%3Ac%23+created%3A%3C2011-01-01+state%3Aopen&type=Issues) coincide con las incidencias abiertas creadas antes de 2011 en repositorios escritos en C#.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2013-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2013-02-01&type=Issues) coincide con incidencias que contienen la palabra "weird" en el cuerpo y que se han actualizado después de febrero de 2013.

## Buscar por cuándo una propuesta o solicitud de extracción fue cerrada

Puede filtrar incidencias y solicitudes de incorporación de cambios en función de cuán se hayan cerrado, con el calificador `closed`.

Este calificador toma una fecha como su parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>closed:<em>YYYY-MM-DD</em></code> | [**language:swift closed:>2014-06-11**](https://github.com/search?q=language%3Aswift+closed%3A%3E2014-06-11&type=Issues) coincide con incidencias y solicitudes de incorporación de cambios en Swift que se han cerrado después del 11 de junio de 2014.
| | [**data in:body closed:<2012-10-01**](https://github.com/search?utf8=%E2%9C%93&q=data+in%3Abody+closed%3A%3C2012-10-01+&type=Issues) coincide con incidencias y solicitudes de incorporación de cambios que contienen la palabra "data" en el cuerpo y que se han cerrado antes de octubre de 2012.

## Buscar por cuándo una solicitud de extracción fue fusionada

Puede filtrar las solicitudes de incorporación de cambios en función de cuándo se han combinado, con el calificador `merged`.

Este calificador toma una fecha como su parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Calificador:        | Ejemplo
| ------------- | -------------
| <code>merged:<em>YYYY-MM-DD</em></code> | [ **`language:javascript merged:<2011-01-01`**](https://github.com/search?q=language%3Ajavascript+merged%3A%3C2011-01-01+&type=Issues) coincide con las solicitudes de incorporación de cambios en repositorios de JavaScript que se han combinado antes de 2011.
| | [**fast in:title language:ruby merged:>=2014-05-01**](https://github.com/search?q=fast+in%3Atitle+language%3Aruby+merged%3A%3E%3D2014-05-01+&type=Issues) coincide con las solicitudes de incorporación de cambios en Ruby que contienen la palabra "fast" en el título y que se han combinado después de mayo de 2014.

## Buscar en base a si una solicitud de extracción se fusionó o se desagrupó

Puede filtrar las solicitudes de incorporación de cambios en función de cuándo se hayan combinado o de cuándo se haya anulado la combinación, con el calificador `is`.

| Calificador:        | Ejemplo
| ------------- | -------------
| `is:merged` | [**bug is:pr is:merged**](https://github.com/search?utf8=%E2%9C%93&q=bugfix+is%3Apr+is%3Amerged&type=) coincide con las solicitudes de incorporación de cambios combinadas con la palabra "bug".
| `is:unmerged` | [**error is:unmerged**](https://github.com/search?utf8=%E2%9C%93&q=error+is%3Aunmerged&type=) coincide con las solicitudes de incorporación de cambios con la palabra "error" que están abiertas o se cerraron sin combinarse.

## Buscar en base a si un repositorio está archivado

El calificador `archived` filtra los resultados en función de si una incidencia o una solicitud de extracción está en un repositorio archivado.

| Calificador:     | Ejemplo
| ------------- | -------------
| `archived:true` | [**archived:true GNOME**](https://github.com/search?q=archived%3Atrue+GNOME&type=) coincide con incidencias y solicitudes de incorporación de cambios que contienen la palabra "GNOME" en repositorios archivados a los que tiene acceso.
| `archived:false` | [**archived:false GNOME**](https://github.com/search?q=archived%3Afalse+GNOME&type=) coincide con incidencias y solicitudes de incorporación de cambios que contienen la palabra "GNOME" en repositorios sin archivar a los que tiene acceso.

## Buscar en base a si una conversación está bloqueada

Puede buscar una incidencia o solicitud de incorporación de cambios que tenga una conversación mediante el calificador `is`. Para más información, vea "[Bloqueo de conversaciones](/communities/moderating-comments-and-conversations/locking-conversations)".

| Calificador:        | Ejemplo
| ------------- | -------------
| `is:locked` | [**code of conduct is:locked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Alocked+is%3Aissue+archived%3Afalse) coincide con las incidencias o solicitudes de incorporación de cambios con las palabras "code of conduct" que tienen una conversación bloqueada en un repositorio que no está archivado.
| `is:unlocked` | [**code of conduct is:unlocked is:issue archived:false**](https://github.com/search?q=code+of+conduct+is%3Aunlocked+archived%3Afalse) coincide con las incidencias o solicitudes de incorporación de cambios con las palabras "code of conduct" que tienen una conversación sin bloquear en un repositorio que no está archivado.

## Buscar por metadatos faltantes

Puede limitar la búsqueda a incidencias y solicitudes de incorporación de cambios en las que falten determinados metadatos, con el calificador `no`. Esos metadatos incluyen:

* Etiquetas
* Hitos
* Asignados
* Proyectos

| Calificador:        | Ejemplo
| ------------- | -------------
| `no:label` | [**priority no:label**](https://github.com/search?q=priority+no%3Alabel&type=Issues) coincide con incidencias y solicitudes de incorporación de cambios con la palabra "priority" que tampoco tengan etiquetas.
| `no:milestone` | [**sprint no:milestone type:issue**](https://github.com/search?q=sprint+no%3Amilestone+type%3Aissue&type=Issues) coincide con incidencias no asociadas a un hito que contengan la palabra "sprint".
| `no:assignee` | [**important no:assignee language:java type:issue**](https://github.com/search?q=important+no%3Aassignee+language%3Ajava+type%3Aissue&type=Issues) coincide con incidencias no asociadas con un usuario asignado, que contienen la palabra "important" y que están en repositorios de Java.
| `no:project` | [**build no:project**](https://github.com/search?utf8=%E2%9C%93&q=build+no%3Aproject&type=Issues) coincide con incidencias no asociadas a un panel de proyecto, que contienen la palabra "build".

## Información adicional

- "[Ordenar los resultados de la búsqueda](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
