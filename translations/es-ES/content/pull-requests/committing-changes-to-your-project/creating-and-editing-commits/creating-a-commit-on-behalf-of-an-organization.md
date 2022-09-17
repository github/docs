---
title: Crear una confirmación en nombre de una organización
intro: 'Puedes crear confirmaciones en nombre de una organización agregando una introducción al mensaje de la confirmación. Las confirmaciones atribuidas a una organización incluyen una notificación `on-behalf-of` en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-on-behalf-of-an-organization
versions:
  fpt: '*'
  ghec: '*'
shortTitle: On behalf of an organization
ms.openlocfilehash: 31b8a6b8d1824fa960fb32fa5fd7b4c28625037c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145137125'
---
{% note %}

**Nota:** La capacidad de crear una confirmación en nombre de una organización se encuentra actualmente en la versión beta de acceso público y está sujeta a modificaciones.

{% endnote %}

Para crear confirmaciones en nombre de una organización:

- debes ser miembro de la organización indicada en la introducción
- debes firmar la confirmación
- tu correo electrónico de confirmación y el correo electrónico de la organización debe estar dentro de un dominio verificado por la organización
- el mensaje de confirmación debe terminar con el finalizador de confirmación `on-behalf-of: @org <name@organization.com>`
  - `org` es el inicio de sesión de la organización
  - `name@organization.com` es el dominio de la organización

Las organizaciones pueden usar el correo electrónico `name@organization.com` como punto de contacto público para sus actividades con código abierto.

## Creación de confirmaciones con un distintivo `on-behalf-of` en la línea de comandos

1. Teclea tu mensaje de confirmación y una descripción corta y significativa sobre tus cambios. Después de tu descripción de la confirmación, en vez de cerrar las comillas, agrega dos líneas vacías.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Sugerencia:** Si usa un editor de texto en la línea de comandos para escribir el mensaje de confirmación, asegúrese de que haya dos líneas nuevas entre el final de la descripción de la confirmación y el indicador `on-behalf-of:`.

  {% endtip %}

2. En la siguiente línea del mensaje de confirmación, escribe `on-behalf-of: @org <name@organization.com>` y, a continuación, una comilla de cierre.

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: <em>@org</em> &lt;<em>name@organization.com</em>&gt;"
  ```

El nuevo mensaje de confirmación y el distintivo aparecerán en {% data variables.product.product_location %} la próxima vez que subas un cambio. Para obtener más información, consulta "[Inserción de cambios en un repositorio remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)".

## Creación de confirmaciones con un distintivo `on-behalf-of` en {% data variables.product.product_name %}

Una vez que hayas realizado los cambios en un archivo con el editor web en {% data variables.product.product_name %}, puedes crear una confirmación en nombre de tu organización agregando un finalizador `on-behalf-of:` al mensaje de la confirmación.

1. Luego de hacer tus cambios, en la parte inferior de la página, escribe un mensaje de confirmación breve y significativo que describa tus cambios.
  ![Mensaje de confirmación para el cambio](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. En el cuadro de texto de debajo del mensaje de confirmación, agrega `on-behalf-of: @org <name@organization.com>`.

  ![Ejemplo de introducción de mensaje de confirmación on-behalf-of en el segundo cuadro de texto para el mensaje de confirmación](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. Haz clic en **Confirmar cambios** o **Proponer cambios**.

La confirmación, el mensaje y el distintivo nuevos aparecerán en {% data variables.product.product_location %}.

## Información adicional

- "[Visualización de contribuciones en el perfil](/articles/viewing-contributions-on-your-profile)"
- "[¿Por qué mis contribuciones no aparecen en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
- "[Visualización de los colaboradores de un proyecto](/articles/viewing-a-projects-contributors)"
- "[Cambio de un mensaje de confirmación](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)"
