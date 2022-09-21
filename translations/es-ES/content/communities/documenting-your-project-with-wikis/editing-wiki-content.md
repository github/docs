---
title: Editar el contenido de una wiki
intro: Puedes agregar imágenes y enlaces al contenido de tu wiki y usar algunos de los formatos que admite MediaWiki.
redirect_from:
  - /articles/adding-links-to-wikis
  - /articles/how-do-i-add-links-to-my-wiki
  - /articles/how-do-i-add-or-upload-images-to-the-wiki
  - /articles/needs-writing-review-how-do-i-add-or-upload-images-to-the-wiki
  - /articles/how-do-i-add-images-to-my-wiki
  - /articles/adding-images-to-wikis
  - /articles/supported-mediawiki-formats
  - /articles/editing-wiki-content
  - /github/building-a-strong-community/editing-wiki-content
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 0afae4335dbf6ff78c0b0e1a2bef4cebed637a5e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147578944'
---
## Agregar enlaces

Puedes crear enlaces en wikis usando el markup estándar admitido por tu página, o usando la sintaxis MediaWiki. Por ejemplo:

- Si las páginas se representan con Markdown, la sintaxis del vínculo es `[Link Text](full-URL-of-wiki-page)`.
- Con la sintaxis de MediaWiki, la sintaxis del vínculo es `[[nameofwikipage|Link Text]]`.

## Incorporación de imágenes

Las wikis pueden presentar imágenes PNG, JPEG y GIF.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Desplácese hasta la página que quiere cambiar con la ayuda de la barra lateral de la wiki y luego haga clic en **Edit** (Editar).
4. En la barra de herramientas de la wiki, haga clic en **Image** (Imagen).
   ![Botón de la wiki Agregar imagen](/assets/images/help/wiki/wiki_add_image.png)
5. En el cuadro de diálogo "Insertar imagen", escribe la URL de la imagen y el texto alternativo (el que usan los motores de búsqueda y los lectores de pantalla).
6. Haga clic en **OK**.

### Establecer enlaces a las imágenes en un repositorio

Puedes establecer un enlace a una imagen en un repositorio en {% data variables.product.product_name %} copiando la URL en tu navegador y usándola como la ruta que lleva a la imagen. Por ejemplo, cuando insertas una imagen en tu wiki usando Markdown, la imagen debe verse de la siguiente manera:

    [[https://github.com/USERNAME/REPOSITORY/blob/main/img/octocat.png|alt=octocat]]

{% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7647 %}
## Agregar expresiones matemáticas y diagramas{% endif %}

{% data reusables.getting-started.math-and-diagrams %}

## Formatos MediaWiki admitidos

Independientemente del lenguaje markup en que esté escrita tu página, siempre tendrás una determinada sintaxis MediaWiki disponible.
- Vínculos ([excepto AsciiDoc](https://github.com/gollum/gollum/commit/d1cf698b456cd6a35a54c6a8e7b41d3068acec3b))
- Reglas horizontales mediante `---`
- Entidades de símbolos abreviados (como `&delta;` o `&euro;`)

Por razones de seguridad y rendimiento, algunas sintaxis no son compatibles.
- [Transclusión](https://www.mediawiki.org/wiki/Transclusion)
- Listas de definiciones
- Sangría
- Tabla de contenido
