---
title: Buscar debates
intro: Puedes buscar debates en {% data variables.product.product_name %} y reducir los resultados utilizando calificadores.
versions:
  free-pro-team: '*'
---

{% data reusables.discussions.beta %}

### Acerca de buscar debates

Puedes buscar debates globalmente a través de todo {% data variables.product.product_name %}, o buscar debates dentro de una organización o repositorio específicos. Para obtener más información, consulta [Acerca de buscar en {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github)".

{% data reusables.search.syntax_tips %}

### Buscar por título, cuerpo o comentarios

Puedes restringir la búsqueda de debates al título, cuerpo o comentarios si utilizas el calificador `in`. También puedes combinar los calificadores para buscar una combinación de título, cuerpo o comentarios. Cuando omites el calificador `in`, {% data variables.product.product_name %} busca el título, cuerpo y comentarios.

| Qualifier     | Ejemplo                                                                                                                                                                        |
|:------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `in:title`    | [**welcome in:title**](https://github.com/search?q=welcome+in%3Atitle&type=Discussions) coincide con los debates que tengan "welcome" en el título.                            |
| `in:body`     | [**onboard in:title,body**](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions) coincide con los debates que tengan "onboard" en el título o en el cuerpo. |
| `in:comments` | [**thanks in:comments**](https://github.com/search?q=thanks+in%3Acomment&type=Discussions) coincide con los debates que tengan "thanks" en sus comentarios.                    |

### Buscar dentro de los repositorios de un usuario u organización

Para buscar los debates en todos los repositorios que pertenezcan a algún usuario u organización, puedes utilizar el calificador `user` o `org`. Para buscar los debates en un repositorio específico, puedes utilizar el calificador `repo`.

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                                         |
|:------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>user:<em>USERNAME</em></code> | [**user:octocat feedback**](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions) coincide con debates con la palabra "retroalimentación" de los repositorios que pertenezcan a @octocat.                                                       |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93) coincide con los debates en los repositorios que pertenezcan a la organización GitHub.                                                                               |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:nodejs/node created:<2021-01-01**](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions) coincide con los debates del proyecto de tiempo de ejecución de Node.js de @nodejs que se crearon antes de enero de 2021. |

### Filtrar por visibilidad de repositorio

Puedes filtrar los resultados por la visibilidad del repositorio que contenga los debates que utilicen el calificador `is`. Para obtener más información, consulta la sección "[Acerca de la visibilidad de un repositorio](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)".

| Calificador| Ejemplo | :- | :- |{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Discussions) coincide con los debates en los repositorios públicos.{% endif %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Discussions) coincide con los debates en los repositorios internos. | `is:private` | [**is:private tiramisu**](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions) coincide con los debates que contiene la palabra "tiramisu" en los repositorios privados a los que puedes acceder.

### Buscar por autor

El calificador `author` encuentra debates crean usuarios específicos.

| Qualifier                 | Ejemplo                                                                                                                                                                                                              |
|:------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author:<em>USERNAME</em></code> | [**cool author:octocat**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) coincide con debates que tienen la palabra "cool" y que creó @octocat.                                                 |
|                           | [**bootstrap in:body author:octocat**](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions) coincide con debates que creó @octocat y que contienen la palabra "bootstrap" enel cuerpo. |

### Buscar por comentarista

El calificador `commenter` encuentra debates que contienen un comentario de un usuario específico.

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                                                          |
|:------------------------- |:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:becca org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions) coincide con debates en los repositorios que pertenecen a GitHub, los cuales contengan la palabra "github" y un comentario de @becca. |

### Buscar por un usuario que está involucrado en un debate

Puedes utilizar el calificador `involves` para encontrar debates que involucren a algún usuario. El calificador devuelve los debates que un usuario haya creado, que mencionen al usuario, o que contengan sus comentarios. El calificador `involves` es un operador lógico OR (o) entre los calificadores `author`, `mentions`, y `commenter` para un usuario único.

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                          |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>involves:<em>USERNAME</em></code> | **[involves:becca involves:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions)** coincide con debates en los que se involucre ya sea a @becca o a @octocat.                                               |
|                           | [**NOT beta in:body involves:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions) coincide con debates en los que se involucre a @becca, en los cuales no se contenga la palabra "beta" dentro del cuerpo. |

### Buscar por cantidad de comentarios

Puedes utilizar el calificador `comments` junto con los calificadores de mayor que, menor que y de rango para buscar por cantidad de comentarios. Para obtener más información, consulta la sección "[Entender la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualifier                 | Ejemplo                                                                                                                                                    |
|:------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>comments:<em>n</em></code> | [**comments:&gt;100**](https://github.com/search?q=comments%3A%3E100&type=Discussions) coincide con debates de más de 100 comentarios.               |
|                           | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Discussions) coincide con debates que tengan entre 500 y 1,000 comentarios. |

### Buscar por cantidad de interacciones

Puedes filtrar debates por el número de interacciones con el calificador `interactions` junto con los calificadores de mayor qué, menor qué y de rango. El conteo de interacciones es la cantidad de reacciones y comentarios en un debate. Para obtener más información, consulta la sección "[Entender la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualifier                 | Ejemplo                                                                                                                                                 |
|:------------------------- |:------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>interactions:<em>n</em></code> | [** interactions:&gt;2000**](https://github.com/search?q=interactions%3A%3E2000) coincide con los debates de más de 2,000 interacciones.      |
|                           | [**interactions:500..1000**](https://github.com/search?q=interactions%3A500..1000) coincide con los debates que tengan entre 500 y 1,000 interacciones. |

### Buscar por cantidad de reacciones

Puedes filtrar los debates de acuerdo con la cantidad de reacciones si utilizas el calificador `reactions` junto con los calificadores de mayor qué, menor qué y rango. Para obtener más información, consulta la sección "[Entender la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Qualifier                 | Ejemplo                                                                                                                                       |
|:------------------------- |:--------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>reactions:<em>n</em></code> | [** reactions:&gt;1000**](https://github.com/search?q=reactions%3A%3E500) coincide con debates con más de 500 reacciones.           |
|                           | [**reactions:500..1000**](https://github.com/search?q=reactions%3A500..1000) coincide con los debtes que tengan entre 500 y 1,000 reacciones. |

### Buscar por cuándo se creó o actualizó por última vez un debate

Puedes filtrar los debates con base en las fechas de creación o por cuándo se actualizaron por última vez. Para la creación de debates, puedes utilizar el calificador `created`; para saber cuándo se actualizó por última vez el debate, utiliza el calificador `updated`.

Ambos calificadores toman la fecha como parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                                    |
|:-------------------------- |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>created:<em>YYYY-MM-DD</em></code>  | [**created:>2020-11-15**](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions) coincide con debates que se crearon después del 15 de noviembre de 2020.                                                                                |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2020-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions) coincide con debates que tengan la palabra "weird" en el cuerpo y que se hayan actualizado después de diciembre de 2020. |

### Leer más

- "[Clasificar los resultados de la búsqueda](/articles/sorting-search-results/)"
