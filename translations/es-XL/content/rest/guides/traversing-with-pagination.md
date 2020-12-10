---
title: Desplazarse con la paginación
intro: Explora las formas para utilizar la paginación en la administración de tus respuestas con algunos ejemplos de cómo utilizar la API de Búsqueda.
redirect_from:
  - /guides/traversing-with-pagination/
  - /v3/guides/traversing-with-pagination
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



La API de {% data variables.product.product_name %} proporciona una gran cantidad de información para el consumo de los desarrolladores. La mayoría de las veces incluso podrías encontrar que estás pidiendo _demasiada_ información y, para mantener felices a nuestros servidores, la API [paginará los elementos solicitados][pagination] automáticamente.

En esta guía haremos algunos llamados a la API de Búsqueda de {% data variables.product.product_name %} e iteraremos sobre los resultados utilizando la paginación. Puedes encontrar todo el código fuente de este proyecto en el repositorio [platform-samples][platform samples].

### Fundamentos de la Paginación

Para empezar, es importante saber algunos hechos acerca de recibir elementos paginados:

1. Las diferentes llamadas a la API responden con predeterminados diferentes también. Por ejemplo, una llamada a [Listar repositorios públicos](/v3/repos/#list-public-repositories) proporciona elementos paginados en conjuntos de 30, mientras que una llamada a la API de Búsqueda de GitHub proporciona elementos en conjuntos de 100
2. Puedes especificar cuantos elementos quieres recibir (hasta llegar a 100 como máxmo); pero,
3. Por razones técnicas, no todas las terminales se comportan igual. Por ejemplo, los [eventos](/v3/activity/events/) no te dejarán usar un máximo de elementos a recibir. Asegúrate de leer la documentación sobre cómo gestionar los resultados paginados para terminales específicas.

Te proporcionamos la información sobre la paginación en [el encabezado de enlace](http://tools.ietf.org/html/rfc5988) de una llamada a la API. Por ejemplo, vamos a hacer una solicitud de curl a la API de búsqueda para saber cuántas veces se utiliza la frase `addClass` en los proyectos de Mozilla:

```shell
$ curl -I "{% data variables.product.api_url_pre %}/search/code?q=addClass+user:mozilla"
```

El parámetro `-I` indica que solo nos interesan los encabezados y no el contenido en sí. Al examinar el resultado, notarás alguna información en el encabezado de enlace, la cual se ve así:

    Link: <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=2>; rel="next",
      <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=34>; rel="last"

Vamos a explicarlo. `rel="next"` dice que la siguiente página es la `page=2`. Esto tiene sentido ya que, predeterminadamente, todas las consultas paginadas inician en la página `1.` y `rel="last"` proporciona más información, lo cual nos dice que la última página de los resultados es la `34`. Por lo tanto, tenemos otras 33 páginas de información que podemos consumir acerca de `addClass`. ¡Excelente!

Confía **siempre** en estas relaciones de enlace que se te proporcionan. No intentes adivinar o construir tu propia URL.

#### Navegar a través de las páginas

Ahora que sabescuántas páginas hay para recibir, puedes comenzar a navegar a través de ellas para consumir los resultados. Esto se hace pasando un parámetro de `page`. Predeterminadamente, la `page` siempre comienza en `1`. Vamos a saltar a la página 14 para ver qué pasa:

```shell
$ curl -I "{% data variables.product.api_url_pre %}/search/code?q=addClass+user:mozilla&page=14"
```

Aquí está el encabezado de enlace una vez más:

    Link: <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",
      <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",
      <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",
      <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"

Como era de esperarse, la `rel="next"` está en 15, y la `rel="last"` es aún 34. Pero ahora tenemos más información: `rel="first"` indica la URL de la _primera_ página, y lo que es más importante, `rel="prev"` te dice el número de página de la página anterior. Al utilizar esta información, puedes construir alguna IU que le permita a los usuarios saltar entre la lista de resultados principal, previa o siguiente en una llamada a la API.

#### Cambiar la cantidad de elementos recibidos

Al pasar el parámetro `per_page`, puedes especificar cuantos elementos quieres que devuelva cada página, hasta un máximo de 100 de ellos. Vamos a comenzar pidiendo 50 elementos acerca de `addClass`:

```shell
$ curl -I "{% data variables.product.api_url_pre %}/search/code?q=addClass+user:mozilla&per_page=50"
```

Nota lo que hace en la respuesta del encabezado:

    Link: <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&per_page=50&page=2>; rel="next",
      <{% data variables.product.api_url_code %}/search/code?q=addClass+user%3Amozilla&per_page=50&page=20>; rel="last"

Como habrás adivinado, la información de la `rel="last"` dice que la última página ahora es la 20. Esto es porque estamos pidiendo más información por página acerca de nuestros resultados.

### Consumir la información

No debes estar haciendo llamadas de curl de bajo nivel para poder trabajar con la paginación, así que escribamos un script de Ruby sencillo que haga todo lo que acabamos de describir anteriormente.

Como siempre, primero solicitaremos la biblioteca de Ruby [Octokit.rb de GitHub][octokit.rb] y pasaremos nuestro [token de acceso personal][personal token]:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']
```

Después, ejecutaremos la búsqueda utilizando el método `search_code` de Octokit. A diferencia de cuando se utiliza `curl`, también podemos recuperar de inmediato la cantidad de resultados, así que hagámoslo:

``` ruby
results = client.search_code('addClass user:mozilla')
total_count = results.total_count
```

Ahora tomemos el número de la última página de forma similar a la información de `page=34>; rel="last"` en el encabezado de enlace. Octokit.rb es compatible con información de paginación a través de una implementación llamada "[Relaciones de enlace de hipermedios][hypermedia-relations]." No entraremos en detalles sobre lo que es, pero basta con decir que cada elemento en la variable de `results` tiene un hash que se llama `rels`, el cual contiene información sobre `:next`, `:last`, `:first`, y `:prev`, dependiendo del resultado en el que estés. Estas relaciones también contienen información sobre la URL resultante llamando a `rels[:last].href`.

Ahora que sabemos esto, vamos a tomar el número de página del último resultado y a presentar toda esta información al usuario:

``` ruby
last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Por último, vamos a iterar entre los resultados. Puedes hacerlo con un bucle como `for i in 1..number_of_pages.to_i`, pero mejor vamos a seguir los encabezados de `rels[:next]` para recuperar la información de cada página. Para mantener la simplicidad, solo vamos a tomar la ruta del archivo del primer resultado de cada página. Para hacerlo, vamos a necesitar un bucle; y al final de cada bucle, vamos a recuperar los datos que se configuraron para la siguiente página siguiendo la información de `rels[:next]`. El bucle terminará cuando ya no haya información de `rels[:next]` que consumir (es decir, cuando estemos en `rels[:last]`). Se verá más o menos así:

``` ruby
puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

Cambiar la cantidad de elementos por página es extremadamente simple con Octokit.rb. Simplemente pasa un hash de opciones de `per_page` a la construcción del cliente inicial. Después de ésto, tu código debería permanecer intacto:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla', :per_page => 100)
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"

puts "And here's the first path for every set"

puts last_response.data.items.first.path
until last_response.rels[:next].nil?
  last_response = last_response.rels[:next].get
  puts last_response.data.items.first.path
end
```

### Construir enlaces de paginación

Habitualmente, con la paginación, tu meta no es concentrar todos los resultados posibles, sino más bien producir un conjunto de navegación, como éste:

![Muestra de los enlaces de paginación](/assets/images/pagination_sample.png)

Vamos a modelar una micro versión de lo que esto podría implicar.

Desde el código anterior, ya sabemos que podemos obtener el `number_of_pages` en los resultados paginados desde la primera llamada:

``` ruby
require 'octokit'

# !!! DO NOT EVER USE HARD-CODED VALUES IN A REAL APP !!!
# Instead, set and test environment variables, like below
client = Octokit::Client.new :access_token => ENV['MY_PERSONAL_TOKEN']

results = client.search_code('addClass user:mozilla')
total_count = results.total_count

last_response = client.last_response
number_of_pages = last_response.rels[:last].href.match(/page=(\d+).*$/)[1]

puts last_response.rels[:last].href
puts "There are #{total_count} results, on #{number_of_pages} pages!"
```

Desde aquí, podemos construir una hermosa representación en ASCII de las cajas de número:
``` ruby
numbers = ""
for i in 1..number_of_pages.to_i
  numbers << "[#{i}] "
end
puts numbers
```

Vamos a simular que un usuario da clic en alguna de estas cajas mediante la construcción de un número aleatorio:

``` ruby
random_page = Random.new
random_page = random_page.rand(1..number_of_pages.to_i)

puts "A User appeared, and clicked number #{random_page}!"
```

Ahora que tenemos un número de página, podemos usar el Octokit para recuperar explícitamente dicha página individual si pasamos la opción `:page`:

``` ruby
clicked_results = client.search_code('addClass user:mozilla', :page => random_page)
```

Si quisiéramos ponernos elegantes, podríamos también tomar la página anterior y posterior para generar los enlaces de los elementos anterior (`<<`) y posterior (`>>`):

``` ruby
prev_page_href = client.last_response.rels[:prev] ? client.last_response.rels[:prev].href : "(none)"
next_page_href = client.last_response.rels[:next] ? client.last_response.rels[:next].href : "(none)"

puts "The prev page link is #{prev_page_href}"
puts "The next page link is #{next_page_href}"
```

[pagination]: /v3/#pagination
[platform samples]: https://github.com/github/platform-samples/tree/master/api/ruby/traversing-with-pagination
[octokit.rb]: https://github.com/octokit/octokit.rb
[personal token]: /articles/creating-an-access-token-for-command-line-use
[hypermedia-relations]: https://github.com/octokit/octokit.rb#pagination
