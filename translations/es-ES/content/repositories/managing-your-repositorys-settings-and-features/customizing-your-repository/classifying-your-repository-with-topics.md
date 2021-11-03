---
title: Clasificar tu repositorio con temas
intro: 'Para ayudar a otras personas a buscar y contribuir en tu proyecto, puedes agregar temas a tu repositorio relacionados con el fin previsto de tu proyecto, área temática, grupos de afinidad u otras cualidades importantes.'
redirect_from:
  - /articles/about-topics/
  - /articles/classifying-your-repository-with-topics
  - /github/administering-a-repository/classifying-your-repository-with-topics
  - /github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Clasificar con temas
---

## Acerca de los temas

En el caso de los temas, puedes explorar repositorios en un área temática particular, buscar proyectos a los cuales contribuir y descubrir nuevas soluciones para un problema específico. Los temas aparecen en la página principal de un repositorio. Puedes hacer clic en el nombre de un tema para {% ifversion fpt or ghec %}ver los temas relacionados y una lista de otros repositorios clasificados con ese tema{% else %}buscar otros repositorios con ese tema{% endif %}.

![Página principal del repositorio de prueba que muestra temas](/assets/images/help/repository/os-repo-with-topics.png)

Para explorar los temas más usados, visita https://github.com/topics/.

{% ifversion fpt or ghec %}También puedes contribuir al conjunto de temas presentados de {% data variables.product.product_name %} en el repositorio [github/explore](https://github.com/github/explore). {% endif %}

Los administradores del repositorio pueden agregar los temas que deseen a un repositorio. Entre los temas útiles para clasificar un repositorio se incluyen fines previstos, áreas temáticas, comunidad o idioma.{% ifversion fpt or ghec %}Además, {% data variables.product.product_name %} analiza el contenido de repositorios públicos y genera temas sugeridos que los administradores de los repositorios pueden aceptar o rechazar. El contenido del repositorio privado no se analiza y no recibe sugerencias de tema.{% endif %}

{% ifversion ghae %}Los repositorios internos {% else %}Públicos, internos, {% endif %}y privados pueden tener temas, aunque solo verás los repositorios privados a los cuales tengas acceso en los resultados de búsqueda por tema.

Puedes buscar los repositorios que están asociados con un tema en particular. Para obtener más información, consulta "[Buscar repositorios](/search-github/searching-on-github/searching-for-repositories#search-by-topic)." También puedes buscar un listado de temas en {% data variables.product.product_name %}. Para obtener más información, consulta "[Buscar temas](/search-github/searching-on-github/searching-topics)".

## Agregar temas a tu repositorio

{% data reusables.repositories.navigate-to-repo %}
2. A la derecha de "Acerca de", da clic en el {% octicon "gear" aria-label="The Gear icon" %}. ![Icono de engrane en la página principal del repositorio](/assets/images/help/repository/edit-repository-details-gear.png)
3. Debajo de "Temas", teclea el tema que quieras agregar a tu repositorio y después teclea un espacio. ![Formulario para ingresar temas](/assets/images/help/repository/add-topic-form.png)
4. Después de que termines de agregar los temas, da clic en **Guardar cambios**. ![Botón de "Guardar cambios" en "Editar los detalles del repositorio"](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
