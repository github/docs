---
title: Administrar etiquetas
intro: 'Puedes utilizar {% data variables.product.prodname_desktop %} para crear, cargar y visualizar etiquetas.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-tags
versions:
  fpt: '*'
ms.openlocfilehash: 980e47f6e3300995f6312499b23768d6f0401f36
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145092303'
---
## Acerca de las etiquetas en {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} te permite crear etiquetas anotadas. Las etiquetas se asocian con confirmaciones, así que puedes utilizarlas para marcar un punto individual en el historial de tu repositorio, incluyendo los números de versión para un lanzamiento. Para más información sobre las etiquetas de versión, vea "[Acerca de las versiones](/github/administering-a-repository/about-releases)".

{% data reusables.desktop.tags-push-with-commits %}

## Crear una etiqueta

{% data reusables.desktop.history-tab %} {% data reusables.desktop.create-tag %} {% data reusables.desktop.name-tag %} {% data reusables.desktop.confirm-tag %}

## Visualizar etiquetas

{% data reusables.desktop.history-tab %}
2. Da clic en la confirmación.
  {% note %}

  **Nota**: {% data variables.product.prodname_desktop %} muestra una flecha {% octicon "arrow-up" aria-label="The up arrow icon" %} si la etiqueta no se ha insertado en el repositorio remoto.

  {% endnote %}

  ![Visualizar una etiqueta en el historial](/assets/images/help/desktop/viewing-tags-in-history.png)

3. Todas las etiquetas asociadas con la confirmación se pueden ver en los metadatos de dicha confirmación.
![Visualización de una etiqueta en la confirmación](/assets/images/help/desktop/viewing-tags-in-commit.png)

## Borrar las etiquetas

{% note %}

**Nota**: Solo puede borrar las etiquetas asociadas a las confirmaciones que todavía no se hayan insertado.

{% endnote %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.delete-tag %}

## Información adicional

- "[Aspectos básicos de Git: etiquetado](https://git-scm.com/book/en/v2/Git-Basics-Tagging)" en la documentación de Git
