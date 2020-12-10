---
title: Buscar temas
intro: 'Puedes buscar temas asociados con los repositorios en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/searching-topics
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Buscar temas en {% data variables.product.product_name %}

Puedes buscar temas en {% data variables.product.product_name %}, explorar temas relacionados y ver cuántos repositorios están asociados con un tema determinado.

1. Navega hasta https://github.com/search.
2. Escribe una palabra clave del tema. ![campo buscar](/assets/images/help/search/search-field.png)
3. En la barra lateral de la izquierda, para acotar tu búsqueda por temas, haz clic en **Topics (Temas)**.
{% if currentVersion == "free-pro-team@latest" %}
  ![La página de resultados de búsqueda de repositorios de Jekyll con la opción de menú lateral de temas resaltada](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %}
![Jekyll repository search results page on dotcom with topics side-menu option highlighted](/assets/images/help/search/topic-left-side-navigation.png){% endif %}

### Acotar tu búsqueda con calificadores de búsqueda

Si deseas explorar repositorios sobre un determinado tema, encontrar proyectos en los que contribuir, o conocer qué temas son más populares en {% data variables.product.product_name %}, puedes buscar temas con los calificadores de búsqueda `is:featured`, `is:curated`, `repositories:n` y `created:YYYY-MM-DD`.

El calificador de búsqueda `is:featured` acotará los resultados de búsqueda a los temas con la mayor cantidad de repositorios en {% data variables.product.product_name %}. Estos temas también se muestran en https://github.com/topics/.

El calificador de búsqueda de `is:curated` acotará los resultados de búsqueda en los temas a los que los miembros de la comunidad han agregado información adicional. Para obtener más información, consulta el repositorio explore en https://github.com/github/explore.

Puedes filtrar temas en base a cuándo se crearon utilizando el parámetro de fecha y `created:` o en base a cuántos repositorios están asociados con este tema utilizando `repositories:n`. Estos dos calificadores pueden utilizar los calificadores de rango mayor que y menor que [](/articles/understanding-the-search-syntax).

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier                 | Ejemplo                                                                                                                                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `is:curated`              | [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) encuentra temas que están conservados y contienen la palabra "javascript."                                                        |
| `is:featured`             | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) encuentra temas que se muestran en https://github.com/topics/ y contienen la palabra "javascript."                              |
| `is:not-curated`          | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) encuentra temas que no tienen información extra, como una descripción o un logo, y que contienen la palabra "javascript." |
| `is:not-featured`         | [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) encuentra temas que no se muestran en https://github.com/topics/ y contienen la palabra "javascript."                   |
| `repositories:n`          | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) encuentra temas que tienen más de 5000 repositorios.                                                                                                    |
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) encuentra temas con la palabra "serverless" que fueron creados después de 2018.                                     |

### Buscar repositorios por tema

Puedes utilizar el calificador `topic:` (tema) para encontrar cada repositorio conectado a un tema particular. Para obtener más información, consulta "[Buscar repositorios](/articles/searching-for-repositories/#search-by-topic)."

### Leer más
- "[Clasificar tu repositorio con temas](/articles/classifying-your-repository-with-topics)"
