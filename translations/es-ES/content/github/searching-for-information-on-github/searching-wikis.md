---
title: Buscar wikis
intro: 'Puedes buscar wikis en {% data variables.product.product_name %} y acotar los resultados utilizando estos calificadores de búsqueda de wiki en cualquier combinación.'
redirect_from:
  - /articles/searching-wikis
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - búsqueda de github
---

Puedes buscar wikis globalmente a través de todos los {% data variables.product.product_name %}, o buscar wikis dentro de un repositorio u organización particular. Para obtener más información, consulta "[Acerca de buscar en {% data variables.product.company_short %}](/articles/about-searching-on-github)".

{% data reusables.search.syntax_tips %}

### Buscar dentro de los repositorios de un usuario u organización

Para encontrar páginas wiki de todos los repositorios propiedad de un determinado usuario u organización, utiliza el calificador `user` u `org`. Para buscar páginas wiki en un repositorio específico, utiliza el calificador `repo`.

| Qualifier                 | Ejemplo                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>user:<em>USERNAME</em></code> | [**user:defunkt**](https://github.com/search?q=user%3Adefunkt&type=Wikis) encuentra páginas wiki de los repositorios propiedad de @defunkt.                  |
| <code>org:<em>ORGNAME</em></code> | [**org:github**](https://github.com/search?q=org%3Agithub&type=Wikis&utf8=%E2%9C%93) encuentra wikis en repositorios propiedad de la organización de GitHub. |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | [**repo:defunkt/gibberish**](https://github.com/search?q=user%3Adefunkt&type=Wikis) encuentra páginas wiki del repositorio "gibberish" de @defunkt.          |

### Buscar dentro del título o el texto del cuerpo de una página wiki

El calificador `in` acota la búsqueda al título o al texto del cuerpo de la página wiki. Sin el calificador, se busca tanto en el título como en el texto del cuerpo.

| Qualifier  | Ejemplo                                                                                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `in:title` | [**usage in:title**](https://github.com/search?q=usage+in%3Atitle&type=Wikis) encuentra títulos de página wiki con la palabra "usage."                                             |
| `in:body`  | [**installation in:body**](https://github.com/search?q=installation+in%3Abody&type=Wikis) encuentra páginas wiki con la palabra "installation" en el texto de su cuerpo principal. |

### Buscar por la última fecha de actualización

El calificador `updated` (actualizada) empareja páginas wiki que fueron actualizadas por última vez dentro de un rango específico de fechas.

{% data reusables.search.date_gt_lt %}

| Qualifier                 | Ejemplo                                                                                                                                                                                                                |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>updated:<em>YYYY-MM-DD</em></code> | [**usage updated:>2016-01-01**](https://github.com/search?q=usage+updated%3A>2016-01-01&type=Wikis) coincidirá con las páginas de wiki con la palabra "uso" que se actualizaron por última vez después del 2016-01-01. |

### Leer más

- "[Clasificar los resultados de la búsqueda](/articles/sorting-search-results/)"
