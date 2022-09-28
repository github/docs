---
title: Guardar repositorios con estrellas
intro: 'Puedes marcar con una estrella los repositorios y temas para llevar el seguimiento de los proyectos que te parezcan interesantes{% ifversion fpt or ghec %} y descubrir el contenido relacionado en tu sección de noticias{% endif %}.'
redirect_from:
  - /articles/stars
  - /articles/about-stars
  - /articles/browsing-friends-stars
  - /articles/managing-your-stars
  - /articles/saving-repositories-with-stars
  - /github/getting-started-with-github/saving-repositories-with-stars
  - /github/getting-started-with-github/exploring-projects-on-github/saving-repositories-with-stars
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Save repos with stars
ms.openlocfilehash: 2a5a167884e10f40d5501b3e84ebc158fe2487b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146374183'
---
Puede buscar, clasificar y filtrar los repositorios y temas marcados con estrella en {% data variables.explore.your_stars_page %}.

## Acerca de las estrellas

Marcar con estrellas tus repositorios y temas favoritos te facilitará encontrarlos posteriormente. Puedes ver todos los repositorios y temas que has marcado con estrellas visitando tu {% data variables.explore.your_stars_page %}.

{% ifversion fpt or ghec %} Puede marcar repositorios y temas con estrellas para descubrir proyectos similares en {% data variables.product.product_name %}. Cuando marcas los repositorios o temas con una estrella, {% data variables.product.product_name %} podría recomendarte contenido relacionado en tu tablero personal. Para más información, vea "[Búsqueda de formas de contribuir al código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)" y "[Acerca del panel personal](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community)".
{% endif %}

Marcar un repositorio con estrella también muestra reconocimiento al mantenedor del repositorio por su trabajo. Muchas de las clasificaciones de los repositorios de {% data variables.product.prodname_dotcom %} dependen de la cantidad de estrellas que tiene un repositorio. Además, en [Explorar](https://github.com/explore) se muestran repositorios populares basados en el número de estrellas que tienen.

## Marcar un repositorio como favorito

Marcar un repositorio como favorito es un proceso simple de dos pasos.

{% data reusables.repositories.navigate-to-repo %}
1. En la esquina superior derecha de la página, haga clic en **Estrella**.
![Marcar un repositorio con una estrella](/assets/images/help/stars/starring-a-repository.png)
1. Opcionalmente, para quitar una estrella de un repositorio, haga clic en **Quitar estrella**.
![Quitar una estrella a un repositorio](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}

## Visualización de quién ha marcado con una estrella un repositorio


Puedes ver todos los usuarios que han marcado con una estrella un repositorio público o un repositorio privado al que tienes acceso. 


Para ver todos los usuarios que han marcado con una estrella un repositorio, agrega `/stargazers` al final de la dirección URL de un repositorio. Por ejemplo, para ver las personas que han marcado con una estrella el repositorio de github/docs, visita https://github.com/github/docs/stargazers.


## Organizar los repositorios marcados como favoritos con las listas

{% note %}

**Nota:** Las listas están actualmente en versión beta pública y están sujetas a cambios.

{% endnote %}

Organiza los repositorios que marcaste como favoritos con las listas públicas. Puede crear listas públicas que aparezcan en la página de estrellas en `https://github.com/USERNAME?tab=stars`.

Si agrega un repositorio privado a una lista, el repositorio privado solo aparecerá en la lista para las personas que tengan acceso `read` al repositorio.

![Captura de pantalla de las listas en la página de favoritos](/assets/images/help/stars/lists-overview-on-stars-page.png)

Puede agregar un repositorio a una lista nueva o existente siempre que vea un menú desplegable **Estrella** o **Con estrellas** en un repositorio, ya sea en la página de un repositorio o en una lista de repositorios marcados con estrella. 

![Captura de pantalla del menú desplegable "Estrella" con opciones de lista destacadas en la página del repositorio](/assets/images/help/stars/stars-dropdown-on-repo.png)

![Captura de pantalla del menú desplegable "Con estrellas" con opciones de lista destacadas de una lista de repositorios con estrella](/assets/images/help/stars/add-repo-to-list.png)

### Crear una lista

{% data reusables.stars.stars-page-navigation %}
2. Junto a "Listas", haga clic en **Crear lista**.
  ![Captura de pantalla del botón "Crear lista"](/assets/images/help/stars/create-list.png)
3. Escriba un nombre y una descripción para la lista y haga clic en **Crear**.
  ![Captura de pantalla de un cuadro de diálogo modal en la que muestra dónde escribir un nombre y una descripción con el botón "Crear".](/assets/images/help/stars/create-list-with-description.png)

### Agregar un repositorio a una lista

{% data reusables.stars.stars-page-navigation %}
2. Encuentra el repositorio que quieras agregar a tu lista.
  ![Captura de pantalla de la barra de búsqueda de repositorios con estrella](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. Junto al repositorio que quiera agregar, use el menú desplegable **Con estrellas** y seleccione la lista.
  ![Captura de pantalla del menú desplegable en el que se muestra una lista de casillas](/assets/images/help/stars/add-repo-to-list.png)

### Eliminar a un repositorio de tu lista

{% data reusables.stars.stars-page-navigation %}
2. Selecciona tu lista.
3. Junto al repositorio que quiera quitar, use el menú desplegable **Con estrellas** y anule la selección de la lista.
  ![Captura de pantalla del menú desplegable en la que se muestra la lista de casillas](/assets/images/help/stars/add-repo-to-list.png)

### Editar un nombre de lista o descripción

{% data reusables.stars.stars-page-navigation %}
1. Selecciona la lista que quieras editar.
2. Haga clic en **Editar lista**.
3. Actualice el nombre o la descripción, y haga clic en **Guardar lista**.
  ![Captura de pantalla del cuadro de diálogo modal en el que se muestra el botón "Guardar lista"](/assets/images/help/stars/edit-list-options.png) 

### Borrar una lista

{% data reusables.stars.stars-page-navigation %}
2. Selecciona la lista que quieras borrar.
3. Haga clic en **Eliminar lista**.
  ![Captura de pantalla del cuadro de diálogo modal en el que se muestra el botón "Eliminar lista"](/assets/images/help/stars/edit-list-options.png)
4. Para confirmar, haga clic en **Eliminar**.

{% endif %}

## Buscar los repositorios y temas marcados como favoritos

Puedes utilizar la barra de búsqueda en tu {% data variables.explore.your_stars_page %} para encontrar rápidamente los repositorios y temas que marcaste como favoritos. 

1. Dirígete a tu {% data variables.explore.your_stars_page %}.
1. Utiliza la barra de búsqueda para encontrar tus repositorios marcados como favoritos o temas por su nombre.
![Búsqueda entre las estrellas](/assets/images/help/stars/stars_search_bar.png)

La barra de búsqueda únicamente busca en los nombres de los temas y repositorios, y no en cualquier otro calificador (tal como el tamaño del repositorio o la fecha en la que se actualizó la última vez).

## Clasificar y filtrar las marcas de favoritos en tu página de favoritos

Puedes utilizar la clasificación o el filtrado para personalizar como ves los repositorios marcados como favoritos y los temas en tu página de favoritos.

1. Dirígete a tu {% data variables.explore.your_stars_page %}.
1. Para ordenar las estrellas, seleccione el menú desplegable **Ordenar** y, después, seleccione **Con estrellas recientas**, **Activo recientemente** o **Con más estrellas**.
![Orden de las estrellas](/assets/images/help/stars/stars_sort_menu.png)
1. Para filtrar las lista de estrellas en función del lenguaje, haga clic en el lenguaje deseado en **Filtrar por lenguajes**.
![Filtro de las estrellas por lenguaje](/assets/images/help/stars/stars_filter_language.png)
1. Para filtrar tu lista de favoritos según el repositorio o tema, haz clic en la opción deseada.
![Filtro de las estrellas por tema](/assets/images/help/stars/stars_filter_topic.png)

## Información adicional

- "[Clasificación del repositorio con temas](/articles/classifying-your-repository-with-topics)"
