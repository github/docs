---
title: Clasificar resultados de búsqueda
intro: 'Puedes clasificar los resultados de búsqueda [{% data variables.product.product_name %} search](/articles/searching-on-github) utilizando el menú de Clasificación, o al agregar un calificador `sort` a tu consulta.'
redirect_from:
  - /articles/sorting-search-results
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Utiliza el menú Sort (Clasificar) para clasificar resultados por relevancia, cantidad de estrellas, cantidad de bifurcaciones y qué tan recientemente se actualizaron los elementos.

  ![Menú con opciones para clasificar resultados de búsqueda](/assets/images/help/search/repo-search-sort.png)

Para clasificar por interacciones, reacciones, fecha de autor, fecha de persona que confirma el cambio, o qué tan recientemente se actualizaron los elementos, puedes agregar un calificador `sort` a tu consulta de búsqueda.

### Clasificar por interacciones

El calificador `sort:interactions` clasifica según el mayor número combinado de reacciones y comentarios.

| Qualifier                                       | Ejemplo                                                                                                                                                                                                                                                                                                  |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:interactions` or `sort:interactions-desc` | [**org:github sort:interactions**](https://github.com/search?q=org%3Agithub+sort%3Ainteractions&type=Issues) encuentra propuestas en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por el mayor número combinado de reacciones y comentarios.                        |
| `sort:interactions-asc`                         | [**org:github sort:interactions-asc**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Ainteractions-asc&type=Issues) encuentra propuestas en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por el menor número combinado de reacciones y comentarios. |

### Clasificar por reacciones

El calificador `sort:reactions` clasifica por la cantidad o el tipo de reacciones.

| Qualifier                                 | Ejemplo                                                                                                                                                                                                                                                                                           |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:reactions` or `sort:reactions-desc` | [**org:github sort:reactions**](https://github.com/search?q=org%3Agithub+sort%3Areactions&type=Issues) encuentra propuestas en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por la mayor cantidad de reacciones.                                             |
| `sort:reactions-asc`                      | [**org:github sort:reactions-asc**](https://github.com/search?q=org%3Agithub+sort%3Areactions-asc&type=Issues) encuentra propuestas en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por la cantidad ascendente de reacciones (desde la menor a la mayor).    |
| <code>sort:reactions-<em>reaction</em></code>                 | [**org:github sort:reactions-+1**](https://github.com/search?q=org%3Agithub+sort%3Areactions-%2B1&type=Issues) encuentra propuestas en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por la mayor cantidad de reacciones positivas (:+1:).                    |
|                                           | [**org:github sort:reactions--1**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions--1&type=Issues) encuentra propuestas en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por la mayor cantidad de reacciones negativas (:-1:).       |
|                                           | [**org:github sort:reactions-smile**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-smile&type=Issues) encuentra propuestas en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por las mayores reacciones de risa (:smile:).         |
|                                           | [**org:github sort:reactions-tada**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-tada&type=Issues) encuentra propuestas en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por la mayor cantidad de reacciones buenas (:tada:).    |
|                                           | [**org:github sort:reactions-heart**](https://github.com/search?utf8=%E2%9C%93&q=org%3Agithub+sort%3Areactions-heart&type=Issues) encuentra propuestas en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por la mayor cantidad de reacciones corazón(:heart:). |

### Clasificar por fecha de autor

El calificador `sort:author-date` clasifica por fecha de autor descendente o ascendente.

| Qualifier                                     | Ejemplo                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:author-date` or `sort:author-date-desc` | [**feature org:github sort:author-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date&type=Commits) encuentra confirmaciones que contienen la palabra "feature" en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por fecha de autor descendente.        |
| `sort:author-date-asc`                        | [**feature org:github sort:author-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Aauthor-date-asc&type=Commits) encuentra confirmaciones que contienen la palabra "feature" en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por fecha de autor ascendente. |

### Clasificar por fecha de persona que confirma el cambio

El calificador `sort:committer-date` clasifica por fecha de persona que confirma el cambio descendente o ascendente.

| Qualifier                                           | Ejemplo                                                                                                                                                                                                                                                                                                                                                              |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:committer-date` or `sort:committer-date-desc` | [**feature org:github sort:committer-date**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date&type=Commits) encuentra confirmaciones que contienen la palabra "feature" en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por fecha de la persona que confirma el cambio descendente.        |
| `sort:committer-date-asc`                           | [**feature org:github sort:committer-date-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+org%3Agithub+sort%3Acommitter-date-asc&type=Commits) encuentra confirmaciones que contienen la palabra "feature" en repositorios propiedad de {% data variables.product.product_name %}, clasificadas por fecha ascendente de la persona que confirma el cambio. |

### Clasificar por fecha de actualización

El calificador `sort:updated` clasifica según qué tan recientemente se actualizaron los elementos.

| Qualifier                             | Ejemplo                                                                                                                                                                                                                                       |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sort:updated` or `sort:updated-desc` | [**feature sort:updated**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated&type=Repositories) encuentra repositorios que contienen la palabra "feature," clasificados por la fecha de actualización más reciente.           |
| `sort:updated-asc`                    | [**feature sort:updated-asc**](https://github.com/search?utf8=%E2%9C%93&q=feature+sort%3Aupdated-asc&type=Repositories) encuentra repositorios que contienen la palabra "feature," clasificados por la fecha de actualización menos reciente. |

### Further reading

- [Acerca de la búsqueda en GitHub](/articles/about-searching-on-github)
- [Clasificar propuestas y solicitudes de extracción](/articles/sorting-issues-and-pull-requests/)
