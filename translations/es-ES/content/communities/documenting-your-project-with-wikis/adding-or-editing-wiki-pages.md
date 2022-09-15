---
title: Agregar o eliminar páginas wiki
intro: 'Puedes agregar y editar páginas wiki directamente en {% data variables.product.product_name %} o localmente usando la línea de comando.'
redirect_from:
  - /articles/adding-wiki-pages-via-the-online-interface
  - /articles/editing-wiki-pages-via-the-online-interface
  - /articles/adding-and-editing-wik-pages-locally
  - /articles/adding-and-editing-wiki-pages-locally
  - /articles/adding-or-editing-wiki-pages
  - /github/building-a-strong-community/adding-or-editing-wiki-pages
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Manage wiki pages
ms.openlocfilehash: f163818a903d7c8261bd4c0b0268d748f578702f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147425268'
---
## Agregar páginas wiki

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. En la esquina superior derecha de la página, haga clic en **Nueva página**.
  ![Botón Nueva página de la wiki](/assets/images/help/wiki/wiki_new_page_button.png)
4. Opcionalmente, para escribir en otro formato diferente a Markdown, usa el menú desplegable del modo Edit (Editar) y haz clic en un formato diferente.
  ![Selección de marcado de wiki](/assets/images/help/wiki/wiki_dropdown_markup.gif)
5. Usa el editor de texto para agregar el contenido de tu página.
  ![WYSIWYG de Wiki](/assets/images/help/wiki/wiki_wysiwyg.png)
6. Escribe un mensaje de confirmación que describa el nuevo archivo que agregaste.
  ![Mensaje de confirmación de la wiki](/assets/images/help/wiki/wiki_commit_message.png)
7. Para confirmar los cambios en la wiki, haga clic en **Guardar página**.

## Editar páginas wiki

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
4. Desplázate hasta la página que deseas cambiar con la ayuda de la barra lateral wiki. En la esquina superior derecha de la página, haga clic en **Editar**.
   ![Botón de la página para editar wikis](/assets/images/help/wiki/wiki_edit_page_button.png)
5. Usa el editor de texto para modificar el contenido de la página.
   ![WYSIWYG de Wiki](/assets/images/help/wiki/wiki_wysiwyg.png)
6. Escribe un mensaje de confirmación que describa tus cambios.
   ![Mensaje de confirmación de la wiki](/assets/images/help/wiki/wiki_commit_message.png)
7. Para confirmar los cambios en la wiki, haga clic en **Guardar página**.

## Agregar o editar páginas wiki localmente

Las wikis son parte de los repositorios Gift, de manera que puedes hacer cambios localmente y subirlos a tu repositorio mediante un flujo de trabajo de Git.

### Clonar wikis en tu computadora

Cada wiki brinda una manera sencilla de clonar sus contenidos en tu computadora.
Una vez que hayas creado una página inicial en {% data variables.product.product_name %}, puedes clonar el repositorio en el equipo con la dirección URL proporcionada:

```shell
$ git clone https://github.com/<em>YOUR_USERNAME</em>/<em>YOUR_REPOSITORY</em>.wiki.git
# Clones the wiki locally
```

Una vez que has clonado la wiki, puedes agregar archivos nuevos, editar los existentes y confirmar tus cambios. Tus colaboradores y tú pueden crear ramas cuando trabajen en wikis, pero solo los cambios que se suban a la rama predeterminada estarán productivos y disponibles para tus lectores.

## Acerca de los nombres de archivo wiki

El nombre de archivo determina el título de tu página wiki, y la extensión del archivo determina cómo se presenta el contenido wiki.

Los wikis usan [nuestra biblioteca de marcado de código abierto](https://github.com/github/markup) para convertir el marcado y determina qué convertidor va a usar la extensión de un archivo. Por ejemplo, si asigna el nombre *foo.md* o *foo.markdown* a un archivo, la wiki usará el convertidor Markdown, mientras que en un archivo denominado *foo.textile* se usará el convertidor Textile.

No use los siguientes caracteres en los títulos de la página de la wiki: `\ / : * ? " < > |`. Los usuarios en determinados sistemas operativos no podrán trabajar con nombres de archivos que contienen estos caracteres. Asegúrate de escribir tu contenido mediante un idioma de Markup que coincida con la extensión, o tu contenido no se presentará de manera adecuada.
