---
title: Entender la sintaxis de búsqueda
intro: 'Cuando buscas {% data variables.product.product_name %}, puedes construir consultas que coincidan con números y palabras específicas.'
redirect_from:
  - /articles/search-syntax
  - /articles/understanding-the-search-syntax
  - /github/searching-for-information-on-github/understanding-the-search-syntax
  - /github/searching-for-information-on-github/getting-started-with-searching-on-github/understanding-the-search-syntax
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
shortTitle: Understand search syntax
ms.openlocfilehash: e233c32d01c53ca5e5aa815fffe4505b14696240
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118929'
---
## Consulta para valores mayores o menores que otro valor

Puedes usar `>`, `>=`, `<` y `<=` para buscar valores mayores que, mayores o iguales a, menores que y menores o iguales a otro valor.

Consultar  | Ejemplo
------------- | -------------
<code>><em>n</em></code> | **[cats stars:>1000](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3E1000&type=Repositories)** coincide con repositorios con la palabra "cats" que tienen más de 1000 estrellas.
<code>>=<em>n</em></code> | **[cats topics:>=5](https://github.com/search?utf8=%E2%9C%93&q=cats+topics%3A%3E%3D5&type=Repositories)** coincide con repositorios con la palabra "cats" que tienen 5 temas o más.
<code><<em>n</em></code> | **[cats size:<10000](https://github.com/search?utf8=%E2%9C%93&q=cats+size%3A%3C10000&type=Code)** coincide con el código con la palabra "cats" en los archivos que tienen menos de 10 KB.
<code><=<em>n</em></code> | **[cats stars:<=50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%3C%3D50&type=Repositories)** coincide con los repositorios con la palabra "cats" que tienen 50 estrellas o menos.

También puedes usar [consultas de intervalo](#query-for-values-between-a-range) para buscar valores mayores o iguales a, o menores o iguales a, otro valor.

Consultar  | Ejemplo
------------- | -------------
<code><em>n</em>..*</code> | **[cats stars:10..*](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..*&type=Repositories)** es equivalente a `stars:>=10` y coincide con los repositorios con la palabra "cats" que tienen 10 estrellas o más.
<code>*..<em>n</em></code> | **[cats stars:*..10](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A%22*..10%22&type=Repositories)** es equivalente a `stars:<=10` y coincide con los repositorios con la palabra "cats" que tienen 10 estrellas o menos.

## Consulta para valores entre un rango

Puedes usar la sintaxis de intervalo <code><em>n</em>..<em>n</em></code> para buscar valores dentro de un intervalo, en el que el primer número _n_ es el valor más bajo y el segundo es el valor más alto.

Consultar  | Ejemplo
------------- | -------------
<code><em>n</em>..<em>n</em></code>  | **[cats stars:10..50](https://github.com/search?utf8=%E2%9C%93&q=cats+stars%3A10..50&type=Repositories)** coincide con los repositorios con la palabra "cats" que tienen entre 10 y 50 estrellas.

## Consulta por fechas

Puedes buscar fechas anteriores o posteriores a otra fecha, o que se encuentran dentro de un intervalo de fechas, mediante `>`, `>=`, `<`, `<=` y las [consultas de intervalo](#query-for-values-between-a-range). {% data reusables.time_date.date_format %}

Consultar  | Ejemplo
------------- | -------------
<code>><em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>2016-04-29](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E2016-04-29&type=Issues)** coincide con las propuestas con la palabra "cats" creadas después del 29 de abril de 2016.
<code>>=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:>=2017-04-01](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3E%3D2017-04-01&type=Issues)** coincide con las propuestas con la palabra "cats" creadas el 1 de abril de 2017 o después.
<code><<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:<2012-07-05](https://github.com/search?q=cats+pushed%3A%3C2012-07-05&type=Code&utf8=%E2%9C%93)** coincide con el código con la palabra "cats" en los repositorios enviados antes del 5 de julio de 2012.
<code><=<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:<=2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A%3C%3D2012-07-04&type=Issues)** coincide con las propuestas con la palabra "cats" creadas el 4 de julio de 2012 o antes.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats pushed:2016-04-30..2016-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+pushed%3A2016-04-30..2016-07-04&type=Repositories)** coincide con los repositorios con la palabra "cats" enviados entre el último día de abril y julio de 2016.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>..*</code> | **[cats created:2012-04-30..*](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2012-04-30..*&type=Issues)** coincide con las propuestas creadas después del 30 de abril de 2012 que contienen la palabra "cats".
<code>*..<em>YYYY</em>-<em>MM</em>-<em>DD</em></code> | **[cats created:*..2012-07-04](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A*..2012-07-04&type=Issues)** coincide con las propuestas creadas antes del 4 de julio de 2012 que contienen la palabra "cats".

{% data reusables.time_date.time_format %}

Consultar  | Ejemplo
------------- | -------------
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>+<em>00</em>:<em>00</em></code> | **[cats created:2017-01-01T01:00:00+07:00..2017-03-01T15:30:15+07:00](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2017-01-01T01%3A00%3A00%2B07%3A00..2017-03-01T15%3A30%3A15%2B07%3A00&type=Issues)** coincide con las propuestas creadas entre el 1 de enero de 2017 a la 01:00 con un desplazamiento UTC de `07:00` y el 1 de marzo de 2017 a las 15:00 con un desplazamiento UTC de `07:00`.
<code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>Z</code>  | **[cats created:2016-03-21T14:11:00Z..2016-04-07T20:45:00Z](https://github.com/search?utf8=%E2%9C%93&q=cats+created%3A2016-03-21T14%3A11%3A00Z..2016-04-07T20%3A45%3A00Z&type=Issues)** coincide con las propuestas creadas entre el 21 de marzo de 2016 a las 14:11 y el 7 de abril de 2016 a las 20:45.

## Excluye determinados resultados

Puedes excluir los resultados que contengan una palabra determinada mediante la sintaxis `NOT`. El operador `NOT` solo se puede usar para palabras clave de cadena. No funciona para números o fechas.

Consultar  | Ejemplo
------------- | -------------
`NOT`  | **[hello NOT world](https://github.com/search?q=hello+NOT+world&type=Repositories)** coincide con los repositorios que tienen la palabra "hello" pero no la palabra "world".

Otra manera de reducir los resultados de búsqueda es excluir determinados subconjuntos. Puedes usar como prefijo cualquier calificador de búsqueda un `-` para excluir todos los resultados que coincidan con ese calificador.

Consultar  | Ejemplo
------------- | -------------
<code>-<em>QUALIFIER</em></code>  | **[`cats stars:>10 -language:javascript`](https://github.com/search?q=cats+stars%3A>10+-language%3Ajavascript&type=Repositories)** coincide con los repositorios que tienen la palabra "cats" y tienen más de 10 estrellas pero que no se han escrito en JavaScript.
 | **[`mentions:defunkt -org:github`](https://github.com/search?utf8=%E2%9C%93&q=mentions%3Adefunkt+-org%3Agithub&type=Issues)** coincide con las propuestas que mencionan a @defunkt que no están en repositorios en la organización de GitHub.

## Utiliza comillas para las consultas con espacios en blanco

Si tu consulta de búsqueda contiene espacios en blanco, tendrás que encerrarla entre comillas. Por ejemplo:

* [cats NOT "hello world"](https://github.com/search?utf8=✓&q=cats+NOT+"hello+world"&type=Repositories) coincide con los repositorios con la palabra "cats" que no tienen las palabras "hello world".
* [build label:"bug fix"](https://github.com/search?utf8=%E2%9C%93&q=build+label%3A%22bug+fix%22&type=Issues) coincide con las propuestas con la palabra "build" que tienen la etiqueta "bug fix".

Algunos símbolos que no son alfanuméricos, como los espacios, se quitan de las consultas de búsqueda de código que van entre comillas; por lo tanto, los resultados pueden ser imprevistos.

## Consultas con nombres de usuario

Si la consulta de búsqueda contiene un calificador que requiere un nombre de usuario, como `user`, `actor` o `assignee`, puedes usar cualquier nombre de usuario de {% data variables.product.product_name %} para especificar una persona concreta o `@me` para especificar el usuario actual.

Consultar  | Ejemplo
------------- | -------------
`QUALIFIER:USERNAME` | [`author:nat`](https://github.com/search?q=author%3Anat&type=Commits) coincide con las confirmaciones que ha hecho @nat
`QUALIFIER:@me` | [`is:issue assignee:@me`](https://github.com/search?q=is%3Aissue+assignee%3A%40me&type=Issues) coincide con las propuestas asignadas a la persona que ve los resultados

Solo puedes usar `@me` con un calificador y no como término de búsqueda, como `@me main.workflow`.
