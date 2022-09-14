---
title: Crear un pie de página o barra lateral para tu wiki
intro: Puedes agregar una barra lateral o un pie de página personalizados a tu wiki para dar a los lectores más información contextual.
redirect_from:
  - /articles/creating-a-footer
  - /articles/creating-a-sidebar
  - /articles/creating-a-footer-or-sidebar-for-your-wiki
  - /github/building-a-strong-community/creating-a-footer-or-sidebar-for-your-wiki
product: '{% data reusables.gated-features.wikis %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create footer or sidebar
ms.openlocfilehash: 0f65114a5258d312d5a81381a59149c589ee54a4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145092439'
---
## Crear una carpeta

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. En la parte inferior de la página, haga clic en **Add a custom footer** (Agregar un pie de página personalizado).
  ![Sección de la wiki para agregar un pie de página](/assets/images/help/wiki/wiki_add_footer.png)
4. Usa el editor de texto para escribir el contenido que deseas que tenga tu pie de página.
  ![Wiki WYSIWYG](/assets/images/help/wiki/wiki-footer.png)
5. Ingresa un mensaje de confirmación que describa el pie de página que agregaste.
  ![Mensaje de confirmación de la wiki](/assets/images/help/wiki/wiki_commit_message.png)
6. Para confirmar los cambios en la wiki, haga clic en **Save Page** (Guardar página).

## Crear una barra lateral

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. Haga clic en **Add a custom sidebar** (Agregar una barra lateral personalizada).
  ![Sección de la wiki para agregar una barra lateral](/assets/images/help/wiki/wiki_add_sidebar.png)
4. Usa el editor de texto para agregar el contenido de tu página.
  ![Wiki WYSIWYG](/assets/images/help/wiki/wiki-sidebar.png)
5. Ingresa un mensaje de confirmación que describa la barra lateral que agregaste.
  ![Mensaje de confirmación de la wiki](/assets/images/help/wiki/wiki_commit_message.png)
6. Para confirmar los cambios en la wiki, haga clic en **Save Page** (Guardar página).

## Crear un pie de página o barra lateral de manera local

Si crea un archivo denominado `_Footer.<extension>` o `_Sidebar.<extension>`, los usaremos para rellenar el pie de página y la barra lateral de la wiki, respectivamente. Al igual que cualquier otra página wiki, la extensión que elijas para estos archivos determina cómo los representaremos.
