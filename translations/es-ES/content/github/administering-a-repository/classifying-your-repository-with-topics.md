---
title: Clasificar tu repositorio con temas
intro: 'Para ayudar a otras personas a buscar y contribuir en tu proyecto, puedes agregar temas a tu repositorio relacionados con el fin previsto de tu proyecto, área temática, grupos de afinidad u otras cualidades importantes.'
redirect_from:
  - /articles/about-topics/
  - /articles/classifying-your-repository-with-topics
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

### Acerca de los temas

En el caso de los temas, puedes explorar repositorios en un área temática particular, buscar proyectos a los cuales contribuir y descubrir nuevas soluciones para un problema específico. Los temas aparecen en la página principal de un repositorio. Puedes dar clic en el nombre de un tema para {% if currentVersion == "free-pro-team@latest" %}ver los temas relacionados y una lista de otros repositorios clasificados con ese tema{% else %}buscar otros repositorios con ese tema{% endif %}.

![Página principal del repositorio de prueba que muestra temas](/assets/images/help/repository/os-repo-with-topics.png)

Para explorar los temas más usados, visita https://github.com/topics/.

{% if currentVersion == "free-pro-team@latest" %}Puedes colaborar con el set de temas destacados de {% data variables.product.product_name %} en el repositorio [github/explore](https://github.com/github/explore). {% endif %}

Los administradores del repositorio pueden agregar los temas que deseen a un repositorio. Entre los temas útiles para clasificar un repositorio se incluyen la función prevista del mismo, su área temática, comunidad o idioma.{% if currentVersion == "free-pro-team@latest" %} Adicionalmente, {% data variables.product.product_name %} analiza el contenido de los repositorios públicos y genera temas sugeridos que los administradores de éstos pueden aceptar o rechazar. El contenido del repositorio privado no se analiza y no recibe sugerencias de tema.{% endif %}

{% if currentVersion == "github-ae@latest" %}Los repositorios internos {% else %}Públicos, internos, {% endif %}y privados pueden tener temas, aunque solo verás los repositorios privados a los cuales tengas acceso en los resultados de búsqueda por tema.

Puedes buscar los repositorios que están asociados con un tema en particular. Para obtener más información, consulta "[Buscar repositorios](/articles/searching-for-repositories/#search-by-topic)". También puedes buscar un listado de temas en {% data variables.product.product_name %}. Para obtener más información, consulta "[Buscar temas](/articles/searching-topics)".

### Agregar temas a tu repositorio

{% data reusables.repositories.navigate-to-repo %}{% if currentVersion ver_lt "enterprise-server@2.22" %}
2. En la descripción de tu repositorio, haz clic en **Add topics** (Agregar temas). ![Enlace para agregar temas en la página principal de un repositorio](/assets/images/help/repository/add-topics-link.png)
3. Escribe el tema que deseas agregar a tu repositorio, luego escribe un espacio. ![Formulario para ingresar temas](/assets/images/help/repository/add-topic-form.png)
4. Cuando hayas finalizado de agregar temas, haz clic en **Done** (Listo). ![Formulario con una lista de temas y botón Done (Listo)](/assets/images/help/repository/add-topics-done-button.png)
{% else %}
2. A la derecha de "Acerca de", da clic en el {% octicon "gear" aria-label="The Gear icon" %}. ![Icono de engrane en la página principal del repositorio](/assets/images/help/repository/edit-repository-details-gear.png)
3. Debajo de "Temas", teclea el tema que quieras agregar a tu repositorio y después teclea un espacio. ![Formulario para ingresar temas](/assets/images/help/repository/add-topic-form.png)
4. Después de que termines de agregar los temas, da clic en **Guardar cambios**. ![Botón de "Guardar cambios" en "Editar los detalles del repositorio"](/assets/images/help/repository/edit-repository-details-save-changes-button.png)
{% endif %}
