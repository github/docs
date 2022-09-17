---
title: Clasificar resultados de búsqueda
intro: 'Puedes clasificar los resultados de [búsqueda {% data variables.product.product_name %}](/articles/searching-on-github) utilizando el menú de Clasificación, o al agregar un calificador `sort` a tu consulta.'
redirect_from:
  - /articles/sorting-search-results
  - /github/searching-for-information-on-github/sorting-search-results
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/sorting-search-results
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b2c01cdb1bc1df9d4ae4247886b1471211b2714b
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118969'
---
Utiliza el menú Sort (Clasificar) para clasificar resultados por relevancia, cantidad de estrellas, cantidad de bifurcaciones y qué tan recientemente se actualizaron los elementos.

  ![Menú con opciones para clasificar resultados de búsqueda](/assets/images/help/search/repo-search-sort.png)

Para clasificar por interacciones, reacciones, fecha de creador, fecha de persona que confirma el cambio o las actualizaciones más recientes de los elementos, puede agregar un calificador `sort` a la consulta de búsqueda.

## Clasificar por interacciones

El calificador `sort:interactions` ordena por el mayor número combinado de reacciones y comentarios.

| Calificador:  | Ejemplo
| ------------- | -------------
| `sort:interactions` o `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) compara las incidencias de los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por el mayor número combinado de reacciones y comentarios.
| `sort:interactions-asc` | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) compara las incidencias de los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por el menor número combinado de reacciones y comentarios.

## Clasificar por reacciones

El calificador `sort:reactions` ordena por el número o tipo de reacciones.

| Calificador:  | Ejemplo
| ------------- | -------------
| `sort:reactions` o `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) compara las incidencias de los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por el mayor número de reacciones.
| `sort:reactions-asc` | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) compara las incidencias de los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por número de reacciones ascendente (de menos a más).
| <code>sort:reactions-<em>reaction</em></code> | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) compara las incidencias de los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por el mayor número de reacciones de pulgar hacia arriba (:+1:).
| | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) compara las incidencias de los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por el mayor número de reacciones de pulgar hacia abajo (:-1:).
| | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) compara las incidencias de los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por el mayor número de reacciones de cara sonriente (:smile:).
| | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) compara las incidencias de los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por el mayor número de reacciones de sorpresa (:tada:).
| | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) compara las incidencias de los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por el mayor número de reacciones de icono de corazón (:heart:).

## Clasificar por fecha de autor

El calificador `sort:author-date` ordena por fecha de creador descendente o ascendente.

| Calificador:  | Ejemplo
| ------------- | -------------
| `sort:author-date` o `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) compara las confirmaciones que contienen la palabra "feature" (característica) en los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por fecha de creador descendente.
| `sort:author-date-asc` | [ **`feature org:github sort:author-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) compara las confirmaciones que contienen la palabra "feature" (característica) en los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por fecha de creador ascendente.

## Clasificar por fecha de persona que confirma el cambio

El calificador `sort:committer-date` ordena por fecha de confirmación descendente o ascendente.

| Calificador:  | Ejemplo
| ------------- | -------------
| `sort:committer-date` o `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) compara las confirmaciones que contienen la palabra "feature" (característica) en los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por fecha descendente del responsable de la confirmación.
| `sort:committer-date-asc` | [ **`feature org:github sort:committer-date-asc`**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) compara las confirmaciones que contienen la palabra "feature" (característica) en los repositorios propiedad de {% data variables.product.product_name %}, ordenadas por fecha ascendente del responsable de la confirmación.

## Clasificar por fecha de actualización

El calificador `sort:updated` ordena por la fecha de actualización de los elementos.

| Calificador:  | Ejemplo
| ------------- | -------------
| `sort:updated` o `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) compara los repositorios que contienen la palabra "feature" (característica), ordenados por fecha de actualización más reciente.
| `sort:updated-asc` | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) compara los repositorios que contienen la palabra "feature" (característica), ordenados por fecha de actualización menos reciente.

## Información adicional

- "[Acerca de la búsqueda en {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)"
- "[Filtrado y búsqueda de incidencias y solicitudes de incorporación de cambios](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests)"
