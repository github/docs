---
title: Guardar repositorios con estrellas
intro: 'Puedes marcar los repositorios y temas como favoritos para llevar el seguimiento de los proyectos que te parezcan interesantes{% ifversion fpt or ghec %} y descubrir el contenido relacionado en tu sección de noticias{% endif %}.'
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
shortTitle: Guardar repositorios marcados como favoritos
---

Puedes buscar, clasificar y filtrar tus repositorios y temas marcados con estrella en tu {% data variables.explore.your_stars_page %}.

## Acerca de las estrellas

Marcar con estrellas tus repositorios y temas favoritos te facilitará encontrarlos posteriormente. Puedes ver todos los repositorios y temas que has marcado con estrellas visitando tu {% data variables.explore.your_stars_page %}.

{% ifversion fpt or ghec %}
Puedes seleccionar los repositorios y temas como favoritos para descubrir proyectos similares en {% data variables.product.product_name %}. Cuando marcas los repositorios o temas con una estrella, {% data variables.product.product_name %} podría recomendarte contenido relacionado en tu tablero personal. Para obtener más información, consulta las secciones "[Encontrar formas de contribuir con el código abierto en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)" y "[Acerca de tu tablero personal](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community)".
{% endif %}

Marcar un repositorio con estrella también muestra reconocimiento al mantenedor del repositorio por su trabajo. Muchas de las clasificaciones de los repositorios de {% data variables.product.prodname_dotcom %} dependen de la cantidad de estrellas que tiene un repositorio. Además, [Explore](https://github.com/explore) muestra repositorios populares en base a la cantidad de estrellas que tienen.

## Marcar un repositorio como favorito

Marcar un repositorio como favorito es un proceso simple de dos pasos.

{% data reusables.repositories.navigate-to-repo %}
1. En la esquina superior derecha de la página, haz clic en **Favorito**. ![Marcar un repositorio como favorito](/assets/images/help/stars/starring-a-repository.png)
1. Opcionalmente, para dejar de marcar un repositorio como favorito, haz clic en **Desmarcar como favorito**. ![Dejar de marcar a un repositorio como favorito](/assets/images/help/stars/unstarring-a-repository.png)

{% ifversion fpt or ghec %}

## Visualizar quién marcó un repositorio como favorito


Puedes ver a cualquiera que haya marcado como favorito a un repositorio público o a uno privado al cual tengas acceso.


Para ver a todo aquél que haya marcado un repositorio como favorito, agrega `/stargazers` al final de la URL de un repositorio. Por ejemplo, para ver a los seguidores de github/docs repository, visita https://github.com/github/docs/stargazers.


## Organizar los repositorios marcados como favoritos con las listas

{% note %}

**Nota:** Las listas se encuentran actualmente en beta público y están sujetas a cambios.

{% endnote %}

Organiza los repositorios que marcaste como favoritos con las listas públicas. Puedes crear listas públicas que aparecen en tu página de favoritos en `https://github.com/USERNAME?tab=stars`.

So agregas un repositorio privado a una lista, entonces este solo aparecerá en tu lista para las personas que tengan acceso de `read` en el repositorio.

![Captura de pantalla de las listas en la página de favoritos](/assets/images/help/stars/lists-overview-on-stars-page.png)

Puedes agregar un repositorio a una lista nueva o existente donde sea que veas una **Estrella** en un repositorio o un menú desplegable de **Marca de favorito**, ya sea en una página de repositorio o en una lista de repositorios marcados como favoritos.

![Captura de pantalla del menú desplegable de "Estrella" con opciones de lista que se presentan desde la página del repositorio](/assets/images/help/stars/stars-dropdown-on-repo.png)

![Captura de pantalla del menú desplegable con "Marca de favorito" con las opciones de lista que se presentan desde una lista de repositorio marcado como favorito](/assets/images/help/stars/add-repo-to-list.png)

### Crear una lista

{% data reusables.stars.stars-page-navigation %}
2. Junto a "Listas", haz clic en **Crear lista**. ![Captura de pantalla del botón "Crear lista"](/assets/images/help/stars/create-list.png)
3. Ingresa un nombre y descripción para tu lista y haz clic en **Crear**. ![Captura de pantalla de un modal que muestra dónde ingresaste un nombre y descripción con el botón "Crear".](/assets/images/help/stars/create-list-with-description.png)

### Agregar un repositorio a una lista

{% data reusables.stars.stars-page-navigation %}
2. Encuentra el repositorio que quieras agregar a tu lista. ![Captura de pantalla de la barra de búsqueda de los repositorios marcados como favoritos](/assets/images/help/stars/search-bar-for-starred-repos.png)
3. Junto al repositorio que quieras agregar, utiliza el menú desplegable **Marcado como favorito** y selecciona tu lista. ![Captura de pantalla del menú desplegable que muestra una lista de casillas de verificación](/assets/images/help/stars/add-repo-to-list.png)

### Eliminar a un repositorio de tu lista

{% data reusables.stars.stars-page-navigation %}
2. Selecciona tu lista.
3. Junto al repositorio que quieras eliminar, utiliza el menú desplegable **Marcado como favorito** y deselecciona tu lista. ![Captura de pantalla del menú desplegable que muestra la lista de casillas de verificación](/assets/images/help/stars/add-repo-to-list.png)

### Editar un nombre de lista o descripción

{% data reusables.stars.stars-page-navigation %}
1. Selecciona la lista que quieras editar.
2. Haz clic en **Editar lista**.
3. Actualiza el nombre o descripción y haz clic en **Guardar lista**. ![Captura de pantalla del modal que muestra el botón "Guardar lista"](/assets/images/help/stars/edit-list-options.png)

### Borrar una lista

{% data reusables.stars.stars-page-navigation %}
2. Selecciona la lista que quieras borrar.
3. Haz clic en **Borrar lista**. ![Captura de pantalla del modal que muestra el botón "Borrar lista"](/assets/images/help/stars/edit-list-options.png)
4. Para confirmar, haz clic en **Borrar**.

{% endif %}

## Buscar los repositorios y temas marcados como favoritos

Puedes utilizar la barra de búsqueda en tu {% data variables.explore.your_stars_page %} para encontrar rápidamente los repositorios y temas que marcaste como favoritos.

1. Dirígete a tu {% data variables.explore.your_stars_page %}.
1. Utiliza la barra de búsqueda para encontrar tus repositorios marcados como favoritos o temas por su nombre. ![Buscar a través de las estrellas](/assets/images/help/stars/stars_search_bar.png)

La barra de búsqueda únicamente busca en los nombres de los temas y repositorios, y no en cualquier otro calificador (tal como el tamaño del repositorio o la fecha en la que se actualizó la última vez).

## Clasificar y filtrar las marcas de favoritos en tu página de favoritos

Puedes utilizar la clasificación o el filtrado para personalizar como ves los repositorios marcados como favoritos y los temas en tu página de favoritos.

1. Dirígete a tu {% data variables.explore.your_stars_page %}.
1. Para clasificar las estrellas, selecciona el menú desplegable de **Clasificar** y luego **Marcados recientemente como favoritos**, **Recientemente activos** o **Con más estrellas**. ![Clasificar estrellas](/assets/images/help/stars/stars_sort_menu.png)
1. Para filtrar tu lista de favoritos con base en su lenguaje de programación, haz clic en el que quieras bajo **Filtrar por lenguaje**. ![Filtrar estrellas por lenguaje](/assets/images/help/stars/stars_filter_language.png)
1. Para filtrar tu lista de favoritos según el repositorio o tema, haz clic en la opción deseada. ![Filtrar favoritos por tema](/assets/images/help/stars/stars_filter_topic.png)

## Leer más

- "[Clasificar tu repositorio con temas](/articles/classifying-your-repository-with-topics)"
