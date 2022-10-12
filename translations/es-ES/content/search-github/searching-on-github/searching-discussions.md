---
title: Buscar debates
intro: 'Puedes buscar debates en {% data variables.product.product_name %} y reducir los resultados utilizando calificadores.'
versions:
  feature: discussions
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-discussions
  - /github/searching-for-information-on-github/searching-on-github/searching-discussions
ms.openlocfilehash: 4a1224d05cd78a0b701e7bc2a9e93a1c5a837bcd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410455'
---
## Acerca de buscar debates

Puedes buscar debates globalmente a través de todo {% data variables.product.product_name %}, o buscar debates dentro de una organización o repositorio específicos. Para más información, vea "[Acerca de la investigación en {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github)".

{% data reusables.search.syntax_tips %}

## Buscar por título, cuerpo o comentarios

Puede restringir la búsqueda de debates al título, el cuerpo o los comentarios mediante el calificador `in`. También puedes combinar los calificadores para buscar una combinación de título, cuerpo o comentarios. Cuando omite el calificador `in`, {% data variables.product.product_name %} busca el título, el cuerpo y los comentarios.

| Calificador: | Ejemplo |
| :- | :- |
| `in:title` | [**welcome in:title**](https://github.com/search?q=welcome+in%3Atitle&type=Discussions) busca debates con "welcome" en el título. |
| `in:body` | [**onboard in:title,body**](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions) busca debates con "onboard" en el título o el cuerpo. |
| `in:comments` | [**thanks in:comments**](https://github.com/search?q=thanks+in%3Acomment&type=Discussions) busca debates con "thanks" en los comentarios. |

## Buscar dentro de los repositorios de un usuario u organización

Para buscar debates en todos los repositorios que son propiedad de una determinada organización o un determinado usuario, puede utilizar el calificador `user` o `org`. Para buscar debates en un repositorio específico, puede utilizar el calificador `repo`.

| Calificador: | Ejemplo |
| :- | :- |
| <code>user:<em>USERNAME</em></code> | [**user:octocat feedback**](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions) busca debates con la palabra "feedback" en los repositorios propiedad de @octocat. |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93) busca debates en repositorios propiedad de la organización de GitHub. |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:nodejs/node created:<2021-01-01**](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions) busca debates del proyecto de runtime Node.js de @nodejs creados antes de enero de 2021. |

## Filtrar por visibilidad de repositorio

Puede filtrar los resultados por la visibilidad del repositorio que contenga los debates con el calificador `is`. Para más información, vea "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

| Calificador | Ejemplo | :- | :- |{% ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Discussions) busca debates en repositorios públicos.{% endif %}{% ifversion ghec %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Discussions) busca debates en repositorios internos.{% endif %} | `is:private` | [**is:private tiramisu**](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions) busca debates que contienen la palabra "tiramisu" en repositorios privados a los que puede acceder.

## Buscar por autor

El calificador `author` busca debates creados por un usuario determinado.

| Calificador: | Ejemplo |
| :- | :- |
| <code>author:<em>USERNAME</em></code> | [**cool author:octocat**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) busca debates con la palabra "cool" creados por @octocat. |
| | [**bootstrap in:body author:octocat**](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions) busca debates creados por @octocat que contienen la palabra "bootstrap" en el cuerpo. |

## Buscar por comentarista

El calificador `commenter` busca debates que contienen un comentario de un usuario concreto.

| Calificador: | Ejemplo |
| :- | :- |
| <code>commenter:<em>USERNAME</em></code> | [**github commenter:becca org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions) busca debates en repositorios propiedad de GitHub que contienen la palabra "github," y tienen un comentario de @becca.

## Buscar por un usuario que está involucrado en un debate

Puede usar el calificador `involves` para buscar debates que impliquen a un usuario determinado. El calificador devuelve los debates que un usuario haya creado, que mencionen al usuario, o que contengan sus comentarios. El calificador `involves` es un OR lógico entre los calificadores `author`, `mentions` y `commenter` para un único usuario.

| Calificador: | Ejemplo |
| :- | :- |
| <code>involves:<em>USERNAME</em></code> | **[involves:becca involves:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions)** busca debates en los que participan @becca o @octocat.
| | [**NOT beta in:body involves:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions) busca debates en los que participa @becca que no contienen la palabra "beta" en el cuerpo.

## Buscar por cantidad de comentarios

Puede usar el calificador `comments` junto con los calificadores mayor que, menor que y rango para buscar por número de comentarios. Para más información, vea "[Descripción de la sintaxis de búsqueda](/github/searching-for-information-on-github/understanding-the-search-syntax)".

| Calificador: | Ejemplo |
| :- | :- |
| <code>comments:<em>n</em></code> | [**comments:&gt;100**](https://github.com/search?q=comments%3A%3E100&type=Discussions) busca debates con más de 100 comentarios.
| | [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Discussions) busca debates con entre 500 y 1000 comentarios.

## Buscar por cuándo se creó o actualizó por última vez un debate

Puedes filtrar los debates con base en las fechas de creación o por cuándo se actualizaron por última vez. Para crear debates, puede usar el calificador `created`; para averiguar cuándo se actualizó por última vez un debate, use el calificador `updated`.

Ambos calificadores toman la fecha como parámetro. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Calificador: | Ejemplo |
| :- | :- |
| <code>created:<em>YYYY-MM-DD</em></code> | [**created:>2020-11-15**](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions) busca debates creados después del 15 de noviembre de 2020.
| <code>updated:<em>YYYY-MM-DD</em></code> | [**weird in:body updated:>=2020-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions) busca debates con la palabra "weird" en el cuerpo actualizados después de diciembre de 2020.

## Información adicional

- "[Ordenar los resultados de la búsqueda](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
