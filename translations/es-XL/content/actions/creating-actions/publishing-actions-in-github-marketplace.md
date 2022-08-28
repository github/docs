---
title: Publicar acciones en GitHub Marketplace
intro: 'Puedes publicar acciones en {% data variables.product.prodname_marketplace %} y compartir acciones que has creado con la comunidad de {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  free-pro-team: '*'
type: how_to
---

Debes aceptar los términos de servicio para publicar acciones en {% data variables.product.prodname_marketplace %}.

### Acerca de la publicación de acciones

Antes de que puedas publicar una acción, deberás crear una acción en tu repositorio. Para obtener más información, consulta la sección "[Crear acciones](/actions/creating-actions)".

Cuando planeas publicar tu acción en {% data variables.product.prodname_marketplace %}, necesitarás asegurarte de que el repositorio solo incluya el archivo de metadatos, el código y los archivos necesarios para la acción. Crear un repositorio único para la acción te permite etiquetar, lanzar y empaquetar el código en una sola unidad. {% data variables.product.prodname_dotcom %} también usa los metadatos de la acción en tu página de {% data variables.product.prodname_marketplace %}.

Las acciones se publican en {% data variables.product.prodname_marketplace %} inmediatamente y no son revisadas por {% data variables.product.prodname_dotcom %} siempre que cumplan con estos requisitos:

- La acción debe estar en un repositorio público.
- Cada repositorio debe contener una única acción.
- El archivo de metadatos de la acción (`action.yml` o `action.yaml`) debe estar en el directorio raíz del repositorio.
- El `Nombre` en el archivo de metadatos de la acción debe ser único.
  - El `Nombre` no debe coincidir con el nombre de una acción existente publicada en {% data variables.product.prodname_marketplace %}.
  - El `Nombre` no debe coincidir con un usuario u organización en {% data variables.product.prodname_dotcom %}, excepto que el usuario o el propietario de la organización publique la acción. Por ejemplo, solo la organización {% data variables.product.prodname_dotcom %} puede publicar una acción denominada `Github`.
  - El `Nombre` no debe coincidir con una categoría existente de {% data variables.product.prodname_marketplace %}.
  - {% data variables.product.prodname_dotcom %} reserva los nombres de las funciones de {% data variables.product.prodname_dotcom %}.

### Publicar una acción

Puedes agregar la acción que has creado para {% data variables.product.prodname_marketplace %} etiquetándola como un lanzamiento nuevo y publicándola.

Para preparar un nuevo lanzamiento y publicar la acción en {% data variables.product.prodname_marketplace %}, sigue estas instrucciones:

{% data reusables.repositories.navigate-to-repo %}
1. Cuando un repositorio contiene un archivo de metadatos de acción (`action.yml` o `action.yaml`), verás un mensaje emergente para publicar la acción en {% data variables.product.prodname_marketplace %}. Haz clic en **Draft a release (Crear el borrador de un lanzamiento)**. ![Publicar esta acción en el botón de Marketplace](/assets/images/help/repository/publish-github-action-to-markeplace-button.png)
1. Selecciona **Publish this action to the (Publicar esta acción en) {% data variables.product.prodname_marketplace %}**. Si no puedes seleccionar la casilla de verificación **Publish this action to the (Publicar esta acción en) {% data variables.product.prodname_marketplace %}**, deberás leer y aceptar el acuerdo primero {% data variables.product.prodname_marketplace %}. ![Selecciona publicar en Marketplace](/assets/images/help/repository/marketplace_actions_publish.png)
1. Si las etiquetas en tu archivo de metadatos contienen algún problema, verás un mensaje de error. ![Ver notificación](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. Si ves alguna sugerencia en pantalla, la solucionas actualizando tu archivo de metadatos. Una vez que esté completo, verás un mensaje "Everything looks Good" (Todo se ve bien). ![Corregir errores](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. Elige una "Primary Category" (Categoría principal) y, de manera opcional, "Another Category" (Otra categoría) que ayudará a las personas a encontrar tu acción en {% data variables.product.prodname_marketplace %}. ![Elegir categoría](/assets/images/help/repository/marketplace_actions_categories.png)
1. Etiqueta tu acción con una versión y agrega un título de lanzamiento. Esto permite que las personas conozcan qué cambios o características incluye el lanzamiento. Las personas verán la versión en la página dedicada a la acción de {% data variables.product.prodname_marketplace %}. ![Etiquetar una versión](/assets/images/help/repository/marketplace_actions_version.png)
1. Completa todos los demás campos y haz clic en **Publish release (Publicar versión)**. La publicación requiere que uses la autenticación de dos factores. Para obtener más información, consulta "[Configurar autenticación de dos factores](/articles/configuring-two-factor-authentication/)". ![Publica el lanzamiento](/assets/images/help/repository/marketplace_actions_publishrelease.png)

### Eliminar una acción de {% data variables.product.prodname_marketplace %}

Para eliminar una acción publicada del {% data variables.product.prodname_marketplace %}, necesitarás actualizar cada lanzamiento publicado. Realiza los siguientes pasos para cada lanzamiento de la acción que has publicado en {% data variables.product.prodname_marketplace %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. En la página Lanzamientos, a la derecha del lanzamiento que deseas editar, haz clic en **Editar**. ![Botón Editar lanzamiento](/assets/images/help/releases/release-edit-btn.png)
4. Selecciona **Publish this action to the (Publicar esta acción en) {% data variables.product.prodname_marketplace %}** para eliminar el tilde de la casilla. ![Botón para publicar esta acción](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. Haz clic en **Update release (Actualizar versión)** en la parte inferior de la página. ![Botón para actualizar el lanzamiento](/assets/images/help/repository/actions-marketplace-update-release.png)
