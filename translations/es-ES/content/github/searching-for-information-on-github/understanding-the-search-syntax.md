---
title: Entender la sintaxis de búsqueda
intro: 'Cuando buscas {% data variables.product.product_name %}, puedes construir consultas que coincidan con números y palabras específicas.'
redirect_from:
  - /articles/search-syntax/
  - /articles/understanding-the-search-syntax
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub search
---

### Consulta para valores mayores o menores que otro valor

Puedes utilizar `>`, `>=`, `<` y `<=` para buscar valores que sean mayores, mayores o iguales, menores y menores o iguales a otro valor.

| Consulta                  | Ejemplo                                                                                                                                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** coincidirá con los repositorios que tengan la palabra "cats" y tengan más de 1000 estrellas. |
| <code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** coincidirá con los repositorios que tengan la palabra "cats" y tengan 5 o más temas.         |
| <code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** coincidirá con el código que tenga la palabra "cats" en los archivos que sean menores a 10 KB.       |
| <code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** coincidirá con los repositorios que tengan la palabra "cats" y 50 estrellas o menos.         |

También puedes utilizar [consultas por rango](#query-for-values-between-a-range) para buscar valores que sean mayores o iguales, o menores o iguales a otro valor.

| Consulta                  | Ejemplo                                                                                                                                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <code><em>n</em>..*</code> | **[gatos estrellas:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** equivale a `estrellas:>=10` y busca repositorios con la palabra "gatos" que tengan 10 o más estrellas.         |
| <code>*..<em>n</em></code> | **[gatos estrellas:*..10](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories)** equivale a `estrellas:<=10` y busca repositorios con la palabra "gatos" que tengan 10 o menos estrellas. |

### Consulta para valores entre un rango

Puedes utilizar la sintaxis de rango <code><em>n</em>..<em>n</em></code> para buscar valores dentro de un rango, en los que el primer número _n_ sea el valor más bajo y el segundo sea el valor más alto.

| Consulta                  | Ejemplo                                                                                                                                                                                      |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><em>n</em>..<em>n</em></code> | **[gatos estrellas:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** busca repositorios con la palabra "gatos" que tengan entre 10 y 50 estrellas. |

### Consulta por fechas

Puedes buscar fechas que sean anteriores o posteriores a otra fecha o que entren en un rango de fechas, utilizando `>`, `>=`, `<`, `<=` y [consultas por rango](#query-for-values-between-a-range). {% data reusables.time_date.date_format %}

| Consulta                   | Ejemplo                                                                                                                                                                                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>><em>AAAA</em>-<em>MM</em>-<em>DD</em></code>  | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** coincidirá con informes de problemas que tengan la palabra "cats" y se hayan creado después del 29 de abril de 2016.                  |
| <code>>=<em>AAAA</em>-<em>MM</em>-<em>DD</em></code>  | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** coincidirá con informes de problemas que contengan la palabra "cats" y se hayan creado en o después del 1 de abril de 2017.       |
| <code><<em>AAAA</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** coincidirá con el código que contenga la palabra "cats" en los repositorios en los que se subió información antes del 5 de julio de 2012. |
| <code><=<em>AAAA</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** coincidirá con los informes de problemas que contengan la palabra "cats" y se hayan creado en o antes del 4 de julio de 2012.     |
| <code><em>AAAA</em>-<em>MM</em>-<em>DD</em>..<em>AAAA</em>-<em>MM</em>-<em>DD</em></code> | **[gatos subidos:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** busca repositorios con la palabra "gatos" que se hayan subido entre fines de abril y julio de 2016.         |
| <code><em>AAAA</em>-<em>MM</em>-<em>DD</em>..*</code> | **[gatos creados:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** busca propuestas que se hayan creado después del 30 de abril de 2012 y contengan la palabra "gatos".                               |
| <code>*..<em>AAAA</em>-<em>MM</em>-<em>DD</em></code> | **[gatos creados:*..2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** busca propuestas creadas antes del 4 de julio de 2012 que contengan la palabra "gatos".                                            |

{% data reusables.time_date.time_format %}

| Consulta                   | Ejemplo                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code><em>AAAA</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[gatos creados:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** busca propuestas creadas entre el 1 de enero de 2017 a la 1 a. m. con una compensación de UTC de `07:00` y el 1 de marzo de 2017 a las 3 p. Con un desplazamiento UTC de `07:00` y 1 de marzo de 2017 a las 3 p.m. m. con una compensación de UTC de `07:00`. |
| <code><em>AAAA</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code> | **[gatos creados:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** busca propuestas creadas entre el 21 de marzo de 2016 a las 2:11 p. m. y el 7 de abril de 2106 a las 8:45 p. m.                                                                                                                                                                           |

### Excluye determinados resultados

Puedes excluir resultados que contengan una determinada palabra utilizando la sintaxis `NOT` (NO). El operador `NOT` solo se puede utilizar para las palabras clave en cadena. No funciona para números o fechas.

| Consulta | Ejemplo                                                                                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NOT`    | **[hola NOT mundo](https://github.com/search?q=hello+NOT+world&type=Repositories)** busca repositorios que tengan la palabra "hola", pero no la palabra "mundo" |

Otra manera de reducir los resultados de búsqueda es excluir determinados subconjuntos. Puedes usar como prefijo de cualquier calificador de búsqueda un `-` para excluir todos los resultados que coincidan con ese calificador.

| Consulta                   | Ejemplo                                                                                                                                                                                                                                                             |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <code>-<em>CALIFICADOR</em></code> | **[cats stars:>10 -language:javascript](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** coincidirá con los repositorios que tengan la palabra "cats" y tengan más de 10 estrellas, pero no se hayan escrito en JavaScript. |
|                            | **[menciones:defunkt -org:github](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** busca propuestas que mencionan a @defunkt y no estén en repositorios de la organización de GitHub                                      |

### Utiliza comillas para las consultas con espacios en blanco

Si tu consulta de búsqueda contiene espacios en blanco, tendrás que encerrarla entre comillas. Por ejemplo:

* [gatos NOT "hola mundo"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories) busca repositorios con la palabra "gatos", pero sin las palabras "hola mundo".
* [construir etiqueta:"corrección de error"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues) busca propuestas con la palabra "construir" que tengan la etiqueta "corrección de error".

Algunos símbolos que no son alfanuméricos, como los espacios, se quitan de las consultas de búsqueda de código que van entre comillas; por lo tanto, los resultados pueden ser imprevistos.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### Consultas con nombres de usuario

Si tu consulta de búsqueda contiene un calificador que requiere un nombre de usuario, tal como `user`, `actor`, o `assignee`, puedes utilizar cualquier nombre de usuario de {% data variables.product.product_name %} para especificar una persona en concreto, o utilizar `@me`, para especificar el usuario actual.

| Consulta             | Ejemplo                                                                                                                                                                                       |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits) coincidirá con las confirmaciones del autor @nat                                                                        |
| `QUALIFIER:@me`      | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues) coincidirá con los informes de problemas asignados a la persona que está viendo los resultados |

Solo puedes utilizar `@me` con un calificador y no como un término de búsqueda, tal como `@me main.workflow`.
{% endif %}
