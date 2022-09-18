---
title: Publicar acciones en GitHub Marketplace
intro: 'Puedes publicar acciones en {% data variables.product.prodname_marketplace %} y compartir acciones que has creado con la comunidad de {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/automating-your-workflow-with-github-actions/publishing-actions-in-github-marketplace
  - /actions/building-actions/publishing-actions-in-github-marketplace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
shortTitle: Publish in GitHub Marketplace
ms.openlocfilehash: e16f65116d7aa7c327e937dc2eba8964195e547d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884305'
---
Debes aceptar los términos de servicio para publicar acciones en {% data variables.product.prodname_marketplace %}.

## Acerca de la publicación de acciones

Antes de que puedas publicar una acción, deberás crear una acción en tu repositorio. Para más información, vea "[Creación de acciones](/actions/creating-actions)".

Cuando planeas publicar tu acción en {% data variables.product.prodname_marketplace %}, necesitarás asegurarte de que el repositorio solo incluya el archivo de metadatos, el código y los archivos necesarios para la acción. Crear un repositorio único para la acción te permite etiquetar, lanzar y empaquetar el código en una sola unidad. {% data variables.product.prodname_dotcom %} también usa los metadatos de la acción en tu página de {% data variables.product.prodname_marketplace %}.

Las acciones se publican en {% data variables.product.prodname_marketplace %} inmediatamente y no son revisadas por {% data variables.product.prodname_dotcom %} siempre que cumplan con estos requisitos:

- La acción debe estar en un repositorio público.
- Cada repositorio debe contener una sola acción.
- El archivo de metadatos de la acción (`action.yml` o `action.yaml`) debe estar en el directorio raíz del repositorio.
- El elemento `name` en el archivo de metadatos de la acción debe ser único.
  - El elemento `name` no debe coincidir con el nombre de una acción existente publicada en {% data variables.product.prodname_marketplace %}.
  - El elemento `name` no debe coincidir con un usuario u organización en {% data variables.product.prodname_dotcom %}, a menos que el usuario o el propietario de la organización publique la acción. Por ejemplo, solo la organización {% data variables.product.prodname_dotcom %} puede publicar una acción denominada `github`.
  - El elemento `name` no debe coincidir con una categoría existente de {% data variables.product.prodname_marketplace %}.
  - {% data variables.product.prodname_dotcom %} reserva los nombres de las funciones de {% data variables.product.prodname_dotcom %}.

## Publicación de una acción

Puedes agregar la acción que has creado para {% data variables.product.prodname_marketplace %} etiquetándola como un lanzamiento nuevo y publicándola.

Para preparar un nuevo lanzamiento y publicar la acción en {% data variables.product.prodname_marketplace %}, sigue estas instrucciones:

{% data reusables.repositories.navigate-to-repo %}
1. Navega al archivo de metadatos de acción en el repositorio (`action.yml` o `action.yaml`), verás un banner para publicar la acción en {% data variables.product.prodname_marketplace %}. Haz clic en **Borrador de una versión**.

   ![Publicación de esta acción en el botón marketplace](/assets/images/help/repository/publish-github-action-to-marketplace-button.png)
1. En "Acción de lanzamiento", activa la casilla para publicar la acción en {% data variables.product.prodname_marketplace %}. Si no puedes activar la casilla, en primer lugar debes hacer clic en el vínculo para leer y aceptar el Acuerdo para desarrolladores de {% data variables.product.prodname_marketplace %}.
![Selecciona publicar en Marketplace](/assets/images/help/repository/marketplace_actions_publish.png)
1. Si las etiquetas en tu archivo de metadatos contienen algún problema, verás un mensaje de error.
![Ver notificación](/assets/images/help/repository/marketplace_actions_fixerrors.png)
1. Si ves alguna sugerencia en pantalla, la solucionas actualizando tu archivo de metadatos. Una vez que esté completo, verás un mensaje "Everything looks Good!" (Todo se ve bien). "Hola mundo".
![Corregir errores](/assets/images/help/repository/marketplace_actions_looksgood.png)
1. Elige una "Primary Category" (Categoría principal) y, de manera opcional, "Another Category" (Otra categoría) que ayudará a las personas a encontrar tu acción en {% data variables.product.prodname_marketplace %}.
![Elegir una categoría](/assets/images/help/repository/marketplace_actions_categories.png)
1. Etiqueta tu acción con una versión y agrega un título de lanzamiento. Esto permite que las personas conozcan qué cambios o características incluye el lanzamiento. Las personas verán la versión en la página dedicada a la acción de {% data variables.product.prodname_marketplace %}.
![Etiquetar una versión](/assets/images/help/repository/marketplace_actions_version.png)
1. Completa todos los demás campos y haz clic en **Publicar versión**. La publicación requiere que uses la autenticación de dos factores. Para obtener más información, vea "[Configuración de autenticación en dos fases](/articles/configuring-two-factor-authentication/)".
![Publicación de la versión](/assets/images/help/repository/marketplace_actions_publishrelease.png)

## Eliminando una acción de {% data variables.product.prodname_marketplace %}

Para eliminar una acción publicada del {% data variables.product.prodname_marketplace %}, necesitarás actualizar cada lanzamiento publicado. Realiza los siguientes pasos para cada lanzamiento de la acción que has publicado en {% data variables.product.prodname_marketplace %}.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
3. En la página Versiones, a la derecha de la versión que quieres editar, haz clic en **Editar**.
![Botón Editar versión](/assets/images/help/releases/release-edit-btn.png)
4. Selecciona **Publicar esta acción en {% data variables.product.prodname_marketplace %}** para quitar la marca del cuadro.
![Botón Publicar esta acción](/assets/images/help/repository/actions-marketplace-unpublish.png)
5. En la parte inferior de la página, haz clic en **Actualizar versión**.
![Botón Actualizar versión](/assets/images/help/repository/actions-marketplace-update-release.png)
