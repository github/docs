---
title: Crear gists
intro: 'You can create two kinds of gists: {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} and secret. Create {% if currentVersion == "github-ae@latest" %}an internal{% else %}a public{% endif %} gist if you''re ready to share your ideas with {% if currentVersion == "github-ae@latest" %}enterprise members{% else %}the world{% endif %} or a secret gist if you''re not.'
redirect_from:
  - /articles/about-gists/
  - /articles/cannot-delete-an-anonymous-gist/
  - /articles/deleting-an-anonymous-gist/
  - /articles/creating-gists
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Acerca de los gists

Todo gist es un repositorio Git, lo que significa que se puede bifurcar y clonar. {% if currentVersion != "github-ae@latest" %}If you are signed in to {% data variables.product.product_name %} when{% else %}When{% endif %} you create a gist, the gist will be associated with your account and you will see it in your list of gists when you navigate to your {% data variables.gists.gist_homepage %}.

Gists can be {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} or secret. {% if currentVersion == "github-ae@latest" %}Internal{% else %}Public{% endif %} gists show up in {% data variables.gists.discover_url %}, where {% if currentVersion == "github-ae@latest" %}enterprise members{% else %}people{% endif %} can browse new gists as they're created. También se los puede buscar, para que puedas usarlos si deseas que otras personas encuentren tu trabajo y lo vean.

Los gists secretos no se muestran en {% data variables.gists.discover_url %} y no se pueden buscar. Secret gists aren't private. If you send the URL of a secret gist to {% if currentVersion == "github-ae@latest" %}another enterprise member{% else %}a friend {% endif %}, they'll be able to see it. However, if {% if currentVersion == "github-ae@latest" %}any other enterpise member{% else %}someone you don't know{% endif %} discovers the URL, they'll also be able to see your gist. Si deseas mantener tu código a salvo de las miradas curiosas, puedes optar por [crear un repositorio privado](/articles/creating-a-new-repository) en lugar de un gist.

{% data reusables.gist.cannot-convert-public-gists-to-secret %}

{% if enterpriseServerVersions contains currentVersion %}

Si el administrador de tu sitio ha inhabilitado el modo privado, también puedes usar gists anónimos, que pueden ser públicos o privados.

{% data reusables.gist.anonymous-gists-cannot-be-deleted %}

{% endif %}

Recibirás una notificación si:
- Seas el autor de un gist.
- Alguien te mencione en un gist.
- Puedes suscribirte a un gist haciendo clic en **Suscribir** en la parte superior de cualquier gist.

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

Puedes fijar los gists a tu perfil para que otras personas los puedan ver fácilmente. Para obtener más información, consulta "[A nclar elementos a tu perfil](/articles/pinning-items-to-your-profile)".

{% endif %}

You can discover {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gists others have created by going to the {% data variables.gists.gist_homepage %} and clicking **All Gists**. Esto te llevará a una página en la que aparecen todos los gists clasificados y presentados por fecha de creación o actualización. También puedes buscar los gists por idioma con {% data variables.gists.gist_search_url %}. La búsqueda de gists usa la misma sintaxis de búsqueda que la [búsqueda de código](/articles/searching-code).

Dado que los gists son repositorios Git, puedes ver su historial de confirmaciones completo, que incluye todas las diferencias que existan. También puedes bifurcar o clonar gists. Para obtener más información, consulta "[Bifurcar y clonar gists"](/articles/forking-and-cloning-gists).

Puedes descargar un archivo ZIP de un gist haciendo clic en el botón **Descargar ZIP** en la parte superior del gist. Puedes insertar un gist en cualquier campo de texto compatible con Javascript, como una publicación en un blog. Para insertar el código, haz clic en el icono del portapapeles junto a la URL **Insertar** de un gist. Para insertar un archivo de gist específico, anexa la URL **Insertar** con `?file=FILENAME`.

{% if currentVersion == "free-pro-team@latest" %}

Git admite la asignación de archivos GeoJSON. Estas asignaciones se muestran como gists insertos, para que las asignaciones se puedan compartir e insertar fácilmente. Para obtener más información, consulta "[Asignar archivos GeoJSON en {% data variables.product.product_name %}](/articles/mapping-geojson-files-on-github)".

{% endif %}

### Crear un gist

También puedes arrastrar y soltar un archivo de texto desde tu escritorio directamente en el editor de gist.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
{% note %}

También puedes crear un gist si utilizas el {% data variables.product.prodname_cli %}. Para obtener más información, consulta "[`gh gist create`](https://cli.github.com/manual/gh_gist_create)" en el {% data variables.product.prodname_cli %}.

{% endnote %}
{% endif %}

1. Inicia sesión en {% data variables.product.product_name %}.
2. Dirígete a tu {% data variables.gists.gist_homepage %}.
3. Escribe una descripción opcional y un nombre para tu gist. ![Descripción del nombre del gist](/assets/images/help/gist/gist_name_description.png)

4. Escribe el texto de tu gist en el cuadro de texto para el gist. ![Cuadro de texto para el gist](/assets/images/help/gist/gist_text_box.png)

5. Optionally, to create {% if currentVersion == "github-ae@latest" %}an internal{% else %}a public{% endif %} gist, click {% octicon "triangle-down" aria-label="The downwards triangle icon" %}, then click **Create {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gist**. ![Drop-down menu to select gist visibility]{% if currentVersion == "github-ae@latest" %}(/assets/images/help/gist/gist-visibility-drop-down-ae.png){% else %}(/assets/images/help/gist/gist-visibility-drop-down.png){% endif %}

6. Click **Create secret Gist** or **Create {% if currentVersion == "github-ae@latest" %}internal{% else %}public{% endif %} gist**. ![Button to create gist](/assets/images/help/gist/create-secret-gist-button.png)
