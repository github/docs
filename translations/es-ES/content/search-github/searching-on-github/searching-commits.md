---
title: Buscar confirmaciones de cambios
intro: 'Puedes buscar confirmaciones de cambios en {% data variables.product.product_name %} y acotar los resultados utilizando estos calificadores de búsqueda de confirmaciones con cualquier combinación.'
redirect_from:
  - /articles/searching-commits
  - /github/searching-for-information-on-github/searching-commits
  - /github/searching-for-information-on-github/searching-on-github/searching-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 2dc35c96805e175bef1ed1ec1898d48e50de6042
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118905'
---
Puedes buscar confirmaciones de cambios globalmente a través de todos los {% data variables.product.product_name %}, o buscar confirmaciones de cambios dentro de un repositorio particular u organización. Para obtener más información, consulte "[Acerca de la búsqueda en {% data variables.product.company_short %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

Al buscar confirmaciones, solo se busca la [rama predeterminada](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) de un repositorio.

{% data reusables.search.syntax_tips %}

## Buscar dentro de los mensajes de confirmación

Puedes encontrar confirmaciones que contengan determinadas palabras en el mensaje. Por ejemplo, [**fix typo**](https://github.com/search?q=fix+typo&type=Commits) busca confirmaciones que contienen las palabras "fix" y "typo".

## Buscar por el autor o la persona que confirma el cambio

Puede buscar confirmaciones por parte de un usuario determinado con los calificadores `author` o `committer`.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits) busca confirmaciones creadas por @defunkt.
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits) busca confirmaciones confirmadas por @defunkt.

Los calificadores `author-name` y `committer-name` buscan confirmaciones por el nombre del autor o confirmador.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>author-name:<em>NAME</em></code> | [**author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits) busca confirmaciones con "wanstrath" en el nombre de autor.
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) busca confirmaciones con "wanstrath" en el nombre del confirmador.

Los calificadores `author-email` y `committer-email` buscan confirmaciones según la dirección de correo electrónico completa del autor o confirmador.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>author-email:<em>EMAIL</em></code> | [ **author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) busca confirmaciones creadas por chris@github.com.
| <code>committer-email:<em>EMAIL</em></code> | [ **committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) busca confirmaciones confirmadas por chris@github.com.

## Buscar por fecha de autoría o de confirmación

Use los calificadores `author-date` y `committer-date` para buscar confirmaciones creadas o confirmadas dentro del intervalo de fechas especificado.

{% data reusables.search.date_gt_lt %}

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) busca confirmaciones creadas antes del 01-01-2016.
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A>2016-01-01&type=Commits) busca confirmaciones confirmadas después de 01-01-2016.

## Filtrar confirmaciones de fusión

El calificador `merge` filtra confirmaciones de combinación.

| Calificador:  | Ejemplo
| ------------- | -------------
| `merge:true` | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits) busca confirmaciones de combinación.
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) busca confirmaciones de no combinación.

## Filtrar por hash

El calificador `hash` busca confirmaciones con el hash SHA-1 especificado.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) busca confirmaciones con el hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

## Filtrar por padre

El calificador `parent` coincide con confirmaciones cuyo elemento primario tiene el hash SHA-1 especificado.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) busca elementos secundarios de confirmaciones con el hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`.

## Filtrar por árbol

El calificador `tree` busca confirmaciones con el hash de árbol de Git SHA-1 especificado.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) busca confirmaciones que hacen referencia al hash de árbol `99ca967`.

## Buscar dentro de los repositorios de un usuario u organización

Para buscar confirmaciones en todos los repositorios que son propiedad de una determinada organización o un determinado usuario, puede utilizar el calificador `user` o `org`. Para buscar confirmaciones en un repositorio específico, use el calificador `repo`.

| Calificador:  | Ejemplo
| ------------- | -------------
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) busca mensajes de confirmación con la palabra "gibberish" en los repositorios que pertenecen a @defunkt.
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) busca mensajes de confirmación con la palabra "test" en los repositorios que pertenecen a @github.
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) busca mensajes de confirmación con la palabra "language" en el repositorio "gibberish" de @defunkt.

## Filtrar por visibilidad de repositorio

El calificador `is` busca confirmaciones de los repositorios con la visibilidad especificada. Para más información, vea "[Acerca de los repositorios](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)".

| Calificador:  | Ejemplo
| ------------- | ------------- |
{%- ifversion fpt or ghes or ghec %} | `is:public` | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) busca confirmaciones en repositorios públicos.
{%- endif %} {%- ifversion ghes or ghec or ghae %} | `is:internal` | [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Commits) busca confirmaciones en repositorios internos.
{%- endif %} | `is:private` | [**is:private**](https://github.com/search?q=is%3Aprivate&type=Commits) busca confirmaciones en repositorios privados.

## Información adicional

- "[Ordenar los resultados de la búsqueda](/search-github/getting-started-with-searching-on-github/sorting-search-results/)"
