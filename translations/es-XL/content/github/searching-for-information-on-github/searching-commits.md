---
title: Buscar confirmaciones de cambios
intro: 'Puedes buscar confirmaciones de cambios en {% data variables.product.product_name %} y acotar los resultados utilizando estos calificadores de búsqueda de confirmaciones con cualquier combinación.'
redirect_from:
  - /articles/searching-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Puedes buscar confirmaciones de cambios globalmente a través de todos los {% data variables.product.product_name %}, o buscar confirmaciones de cambios dentro de un repositorio particular u organización. Para obtener más información, consulta "[Acerca de buscar en {% data variables.product.company_short %}](/articles/about-searching-on-github)".

Cuando buscas confirmaciones de cambios, se busca únicamente la [rama predeterminada](/articles/about-branches) de un repositorio.

{% data reusables.search.syntax_tips %}

### Buscar dentro de los mensajes de confirmación

Puedes encontrar confirmaciones que contengan determinadas palabras en el mensaje. Por ejemplo, [**fix typo**](https://github.com/search?q=fix+typo&type=Commits) encuentra las confirmaciones que contienen las palabras "fix" y "typo."

### Buscar por el autor o la persona que confirma el cambio

Puedes encontrar confirmaciones de cambios por un usuario particular con los calificadores `author` (autor) o `committer` (persona que confirma el cambio).

| Qualifier                 | Ejemplo                                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author:<em>USERNAME</em></code> | [**author:defunkt**](https://github.com/search?q=author%3Adefunkt&type=Commits) encuentra confirmaciones cuya autoría corresponde a @defunkt. |
| <code>committer:<em>USERNAME</em></code> | [**committer:defunkt**](https://github.com/search?q=committer%3Adefunkt&type=Commits) encuentra confirmaciones de @defunkt.                   |

Los calificadores `author-name` y `committer-name` encuentran confirmaciones por el nombre de su autor o de la persona que confirma el cambio.

| Qualifier                 | Ejemplo                                                                                                                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author-name:<em>NAME</em></code> | [**author-name:wanstrath**](https://github.com/search?q=author-name%3Awanstrath&type=Commits) encuentra confirmaciones con "wanstrath" en el nombre de autor.                                   |
| <code>committer-name:<em>NAME</em></code> | [**committer-name:wanstrath**](https://github.com/search?q=committer-name%3Awanstrath&type=Commits) encuentra confirmaciones con "wanstrath" en el nombre de la persona que confirma el cambio. |

Los calificadores `author-email` y `committer-email` encuentran confirmaciones por la dirección completa de correo electrónico del autor o de la persona que confirma el cambio.

| Qualifier                 | Ejemplo                                                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>author-email:<em>EMAIL</em></code> | [**author-email:chris@github.com**](https://github.com/search?q=author-email%3Achris%40github.com&type=Commits) encuentra confirmaciones cuyo autor es chris@github.com. |
| <code>committer-email:<em>EMAIL</em></code> | [**committer-email:chris@github.com**](https://github.com/search?q=committer-email%3Achris%40github.com&type=Commits) encuentra confirmaciones de chris@github.com.      |

### Buscar por fecha de autoría o de confirmación

Utiliza los calificadores `author-date` y `committer-date` para encontrar confirmaciones que fueron creadas o confirmadas dentro de un rango de fechas especificado.

{% data reusables.search.date_gt_lt %}

| Qualifier                 | Ejemplo                                                                                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>author-date:<em>YYYY-MM-DD</em></code> | [**author-date:&lt;2016-01-01**](https://github.com/search?q=author-date%3A<2016-01-01&type=Commits) encuentra confirmaciones creadas antes del 2016-01-01.         |
| <code>committer-date:<em>YYYY-MM-DD</em></code> | [**committer-date:&gt;2016-01-01**](https://github.com/search?q=committer-date%3A<2016-01-01&type=Commits) encuentra confirmaciones creadas después del 2016-01-01. |

### Filtrar confirmaciones de fusión

Los filtros del calificador `merge` de confirmación de fusión.

| Qualifier     | Ejemplo                                                                                                          |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `merge:true`  | [**merge:true**](https://github.com/search?q=merge%3Atrue&type=Commits) encuentra confirmaciones de fusión.      |
| `merge:false` | [**merge:false**](https://github.com/search?q=merge%3Afalse&type=Commits) encuentra confirmaciones de no fusión. |

### Filtrar por hash

El calificador `hash` encuentra confirmaciones con el hash SHA-1 especificado.

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>hash:<em>HASH</em></code> | [**hash:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=hash%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits) encuentra confirmaciones con el hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`. |

### Filtrar por padre

El calificador `parent` (padre) encuentra confirmaciones cuyo padre tiene el hash SHA-1 especificado.

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>parent:<em>HASH</em></code> | [**parent:124a9a0ee1d8f1e15e833aff432fbb3b02632105**](https://github.com/github/gitignore/search?q=parent%3A124a9a0ee1d8f1e15e833aff432fbb3b02632105&type=Commits&utf8=%E2%9C%93) encuentra el hijo de las confirmaciones con el hash `124a9a0ee1d8f1e15e833aff432fbb3b02632105`. |

### Filtrar por árbol

El calificador `tree` (árbol) encuentra confirmaciones con el hash de árbol de git SHA-1 especificado.

| Qualifier                  | Ejemplo                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>tree:<em>HASH</em></code> | [**tree:99ca967**](https://github.com/github/gitignore/search?q=tree%3A99ca967&type=Commits) encuentra confirmaciones que se refieren al hash del árbol `99ca967`. |

### Buscar dentro de los repositorios de un usuario u organización

Para buscar confirmaciones en todos los repositorios que son propiedad de una determinada organización o usuario, utiliza el calificador `user` (usuario) u `org` (organización). Para buscar confirmaciones en un repositorio específico, utiliza el calificador `repo`.

| Qualifier                  | Ejemplo                                                                                                                                                                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>user:<em>USERNAME</em></code> | [**gibberish user:defunkt**](https://github.com/search?q=gibberish+user%3Adefunkt&type=Commits&utf8=%E2%9C%93) encuentra mensajes de confirmación con la palabra "gibberish" en repositorios propiedad de @defunkt.                        |
| <code>org:<em>ORGNAME</em></code> | [**test org:github**](https://github.com/search?utf8=%E2%9C%93&q=test+org%3Agithub&type=Commits) encuentra mensajes de confirmación con la palabra "test" en repositorios propiedad de @github.                                            |
| <code>repo:<em>USERNAME/REPO</em></code> | [**language repo:defunkt/gibberish**](https://github.com/search?utf8=%E2%9C%93&q=language+repo%3Adefunkt%2Fgibberish&type=Commits) encuentra mensajes de confirmación con la palabra "language" en un repositorio "gibberish" de @defunkt. |

### Filtrar repositorios públicos o privados

El calificador `is` encuentra confirmaciones públicas o privadas.

| Qualifier    | Ejemplo                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------- |
| `is:public`  | [**is:public**](https://github.com/search?q=is%3Apublic&type=Commits) encuentra confirmaciones públicas.   |
| `is:private` | [**is:private**](https://github.com/search?q=is%3Aprivate&type=Commits) encuentra confirmaciones privadas. |

### Leer más

- "[Clasificar los resultados de la búsqueda](/articles/sorting-search-results/)"
