---
title: Buscar temas
intro: 'Puedes buscar temas asociados con los repositorios en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/searching-topics
  - /github/searching-for-information-on-github/searching-topics
  - /github/searching-for-information-on-github/searching-on-github/searching-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: b409f8476fe4191bab22ba90e502f18470937f4d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145118858'
---
## Buscar temas en {% data variables.product.product_name %}

Puedes buscar temas en {% data variables.product.product_name %}, explorar temas relacionados y ver cuántos repositorios están asociados con un tema determinado.

1. Vaya a https://github.com/search.
2. Escribe una palabra clave del tema.
  ![Campo de búsqueda](/assets/images/help/search/search-field.png)
3. En la barra lateral izquierda, para restringir la búsqueda a temas, haga clic en **Temas**.
{% ifversion fpt or ghec %} ![Página de resultados de la búsqueda del repositorio de Jekyll con la opción del menú lateral Temas resaltada](/assets/images/help/search/topic-left-side-navigation-dotcom.png){% else %} ![Página de resultados de la búsqueda del repositorio de Jekyll en dotcom con la opción del menú lateral Temas resaltada](/assets/images/help/search/topic-left-side-navigation.png){% endif %}

## Acotar tu búsqueda con calificadores de búsqueda

Si quiere explorar repositorios sobre un tema concreto, buscar proyectos para contribuir o aprender qué temas son los más populares en {% data variables.product.product_name %}, puede buscar temas con los calificadores de búsqueda `is:featured`, `is:curated`, `repositories:n`y `created:YYYY-MM-DD`.

El calificador de búsqueda `is:featured` acotará los resultados de la búsqueda a los temas con mayor cantidad de repositorios en {% data variables.product.product_name %}. Estos temas también se destacan en https://github.com/topics/.

El calificador de búsqueda `is:curated` acotará los resultados de la búsqueda a los temas a los que los miembros de la comunidad han agregado información adicional. Para más información, vea el [repositorio explore](https://github.com/github/explore).

Puede filtrar los temas en función de cuándo se han creado mediante el parámetro date y `created:`, o en función del número de repositorios asociados a este tema mediante `repositories:n`. Los dos calificadores pueden usar los [calificadores de rango mayor que y menor que](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax).

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Calificador:  | Ejemplo |
| ------------- | -------------
| `is:curated`| [**is:curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Acurated&type=Topics) coincide con temas que se mantienen y contienen la palabra "javascript".
| `is:featured` | [**is:featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Afeatured&type=Topics) coincide con temas destacados en https://github.com/topics/ y que contienen la palabra "javascript".
|  `is:not-curated` | [**is:not-curated javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-curated&type=Topics) coincide con temas que no tienen información adicional, como una descripción o un logotipo, y contienen la palabra "javascript".
|  `is:not-featured`| [**is:not-featured javascript**](https://github.com/search?utf8=%E2%9C%93&q=javascript+is%3Anot-featured&type=Topics) coincide con temas no destacados en https://github.com/topics/ y que contienen la palabra "javascript".
| `repositories:n` | [**repositories:&gt;5000**](https://github.com/search?q=repositories%3A%3E5000) coincide con temas que tienen más de 5000 repositorios.
| <code>created:<em>YYYY-MM-DD</em></code> | [**Serverless created:&gt;2019-01-01**](https://github.com/search?q=Serverless+created%3A%3E2019-01-01&type=Topics) coincide con temas con la palabra "serverless" que se han creado después de 2018.

## Buscar repositorios por tema

Puede usar el calificador `topic:` para buscar todos los repositorios conectados a un tema concreto. Para más información, vea "[Búsqueda de repositorios](/search-github/searching-on-github/searching-for-repositories/#search-by-topic)".

## Información adicional
- "[Clasificación del repositorio con temas](/articles/classifying-your-repository-with-topics)"
