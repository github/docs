---
title: Crear gists
intro: 'Puedes crear dos tipos de gists: públicos y secretos. Crea un gist público si estás preparado para compartir tus ideas con todo el mundo o crea un gist secreto si no estás listo para hacerlo.'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Acerca de los gists

Todo gist es un repositorio Git, lo que significa que se puede bifurcar y clonar. Si has iniciado sesión en {% data variables.product.product_name %}, cuando crees un gist, este se asociará con tu cuenta y lo verás en tu lista de gists cuando te dirijas a tu {% data variables.gists.gist_homepage %}.

Los gists pueden ser públicos o secretos. Los gists públicos se muestran en {% data variables.gists.discover_url %}, donde las personas pueden explorar los nuevos gists a medida que estos se crean. También se los puede buscar, para que puedas usarlos si deseas que otras personas encuentren tu trabajo y lo vean. {% data reusables.gist.cannot-convert-public-gists-to-secret %}

Los gists secretos no se muestran en {% data variables.gists.discover_url %}{% if currentVersion != "free-pro-team@latest" %}, {% endif %} y no se pueden buscar. {% data reusables.gist.cannot-convert-public-gists-to-secret %}Los gists secretos no son privados. Si envías la URL de un gist secreto a un amigo, este podrá verlo. Sin embargo, si alguien que no conoces descubre la URL, también podrá ver tu gist. Si deseas mantener tu código a salvo de las miradas curiosas, puedes optar por [crear un repositorio privado](/articles/creating-a-new-repository) en lugar de un gist.

{% if currentVersion != "free-pro-team@latest" %}

Si el administrador de tu sitio ha inhabilitado el modo privado, también puedes usar gists anónimos, que pueden ser públicos o privados.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}

Recibirás una notificación si:
- Seas el autor de un gist.
- Alguien te mencione en un gist.
- Puedes suscribirte a un gist haciendo clic en **Suscribir** en la parte superior de cualquier gist.
{% endif %}

You can pin gists to your profile so other people can see them easily. Para obtener más información, consulta "[A nclar elementos a tu perfil](/articles/pinning-items-to-your-profile)".

Puedes descubrir gists creados por otros usuarios si te diriges a la {% data variables.gists.gist_homepage %} y haces clic en **Todos los gists**. Esto te llevará a una página en la que aparecen todos los gists clasificados y presentados por fecha de creación o actualización. También puedes buscar los gists por idioma con {% data variables.gists.gist_search_url %}. La búsqueda de gists usa la misma sintaxis de búsqueda que la [búsqueda de código](/articles/searching-code).

Dado que los gists son repositorios Git, puedes ver su historial de confirmaciones completo, que incluye todas las diferencias que existan. También puedes bifurcar o clonar gists. Para obtener más información, consulta "[Bifurcar y clonar gists"](/articles/forking-and-cloning-gists).

Puedes descargar un archivo ZIP de un gist haciendo clic en el botón **Descargar ZIP** en la parte superior del gist. Puedes insertar un gist en cualquier campo de texto compatible con Javascript, como una publicación en un blog. Para insertar el código, haz clic en el icono del portapapeles junto a la URL **Insertar** de un gist. Para insertar un archivo de gist específico, anexa la URL **Insertar** con `?file=FILENAME`.

{% if currentVersion == "free-pro-team@latest" %}

Git admite la asignación de archivos GeoJSON. Estas asignaciones se muestran como gists insertos, para que las asignaciones se puedan compartir e insertar fácilmente. Para obtener más información, consulta "[Asignar archivos GeoJSON en {% data variables.product.product_name %}](/articles/mapping-geojson-files-on-github)".

{% endif %}

### Crear un gist

También puedes arrastrar y soltar un archivo de texto desde tu escritorio directamente en el editor de gist.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% note %}

You can also create a gist using the {% data variables.product.prodname_cli %}. For more information, see "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" in the {% data variables.product.prodname_cli %} documentation.

{% endnote %}
{% endif %}

1. Inicia sesión en {% data variables.product.product_name %}.
2. Dirígete a tu {% data variables.gists.gist_homepage %}.
3. Escribe una descripción opcional y un nombre para tu gist. ![Descripción del nombre del gist](/assets/images/help/gist/gist_name_description.png)

4. Escribe el texto de tu gist en el cuadro de texto para el gist. ![Cuadro de texto para el gist](/assets/images/help/gist/gist_text_box.png)

5. Realiza una de las siguientes acciones:
    - Para crear un gist público, da clic en **Crear un gist público**.
    - Para crear un gist secreto, da clic en **Crear un Gist secreto**. ![Botón para crear el gist](/assets/images/help/gist/gist_create_btn.png)

  {% note %}

  **Nota:{% data reusables.gist.cannot-convert-public-gists-to-secret %}**

  {% endnote %}
