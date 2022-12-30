---
title: Crear una confirmación con distintos autores
intro: 'Puedes atribuir una confirmación a más de un autor agregando uno o más finalizadores `Co-authored-by` al mensaje de la confirmación. Las confirmaciones conjuntas se pueden ver en {% data variables.product.product_name %}{% ifversion ghes or ghae %} y se pueden incluir en el gráfico de contribuciones del perfil y en las estadísticas del repositorio {% endif %}.'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-a-commit-with-multiple-authors
  - /github/committing-changes-to-your-project/creating-and-editing-commits/creating-a-commit-with-multiple-authors
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: With multiple authors
ms.openlocfilehash: 4aa5b707e75480ead830e680151064db5f278557
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '145137118'
---
## Información del coautor requerida

Antes de agregar un coautor a una confirmación, debes saber el correo electrónico correcto para usar con cada coautor. Para que la confirmación del coautor cuente como una contribución, debes utilizar el correo electrónico asociado con su cuenta en {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}.

{% ifversion fpt or ghec %}

Si una persona elige mantener la privacidad de su dirección de correo electrónico, debe usar su correo electrónico `no-reply` proporcionado por {% data variables.product.product_name %} para proteger su privacidad. Si no lo haces, el correo electrónico del coautor estará disponible para el público en el mensaje de confirmación. Si quiere mantener la privacidad del correo electrónico, puede optar por usar un correo electrónico `no-reply` proporcionado por {% data variables.product.product_name %} para las operaciones de Git y solicitar a los otros coautores que incluyan ese correo electrónico `no-reply` en las introducciones de cada confirmación.

Para más información, vea "[Configuración de la dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)".

  {% tip %}

  **Sugerencia:** Puede ayudar a un coautor a encontrar una dirección de correo electrónico de su preferencia si comparte esta información:
  - Para encontrar el correo electrónico `no-reply` proporcionado por {% data variables.product.product_name %} diríjase la página de configuración del correo electrónico en "Mantener la privacidad de mi dirección de correo electrónico".
  - Para encontrar el correo electrónico que ha usado para configurar Git en el equipo, ejecute `git config user.email` en la línea de comandos.

  {% endtip %}

{% endif %}

## Crear confirmaciones conjuntas usando {% data variables.product.prodname_desktop %}

Puedes usar {% data variables.product.prodname_desktop %} para crear una confirmación con un coautor. Para más información, vea "[Escritura de un mensaje de confirmación e inserción de los cambios](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)" y [{% data variables.product.prodname_desktop %}](https://desktop.github.com).

![Agregar un coautor al mensaje de confirmación](/assets/images/help/desktop/co-authors-demo-hq.gif)

## Crear confirmaciones conjuntas en la línea de comando

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

1. Teclea tu mensaje de confirmación y una descripción corta y significativa sobre tus cambios. Después de tu descripción de la confirmación, en vez de cerrar las comillas, agrega dos líneas vacías.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Sugerencia:** Si usa un editor de texto en la línea de comandos para escribir el mensaje de confirmación, asegúrese de que haya dos líneas nuevas entre el final de la descripción de la confirmación y el indicador `Co-authored-by:`.

  {% endtip %}

3. En la siguiente línea del mensaje de confirmación, escriba `Co-authored-by: name <name@example.com>` con información específica para cada coautor. Luego de la información del coautor, agrega comillas de cierre.

  Si va a agregar distintos coautores, asigne una línea y una introducción de la confirmación `Co-authored-by:` propias a cada uno.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: <em>name</em> &lt;<em>name@example.com</em>&gt;
  Co-authored-by: <em>another-name</em> &lt;<em>another-name@example.com</em>&gt;"
  ```

El nuevo mensaje y la confirmación aparecerán en {% data variables.product.product_location %} la próxima vez que subas un cambio. Para más información, vea "[Inserción de cambios en un repositorio remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)".

## Crear confirmaciones conjuntas en {% data variables.product.product_name %}

Una vez que haya realizado los cambios en un archivo con el editor web en {% data variables.product.product_name %}, puede crear una confirmación conjunta si agrega una introducción `Co-authored-by:` al mensaje de la confirmación.

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. Luego de hacer tus cambios de forma conjunta, en la parte inferior de la página, escribe un mensaje de confirmación breve y significativo que describa los cambios que realizaste.
  ![Mensaje de confirmación para el cambio](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. En el cuadro de texto debajo del mensaje de confirmación, agregue `Co-authored-by: name <name@example.com>` con información específica para cada coautor. Si va a agregar distintos coautores, asigne una línea y una introducción de la confirmación `Co-authored-by:` propias a cada uno.

  ![Ejemplo de introducción de coautor del mensaje de confirmación en el cuadro de texto para el mensaje de confirmación](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. Haga clic en **Confirmar cambios** o **Proponer cambios**.

La confirmación y el mensaje nuevos aparecerán en {% data variables.product.product_location %}.

## Información adicional
{% ifversion ghes or ghae %}
- "[Visualización de contribuciones en el perfil](/articles/viewing-contributions-on-your-profile)"
- "[¿Por qué mis contribuciones no aparecen en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"{% endif %}
- "[Visualización de los colaboradores de un proyecto](/articles/viewing-a-projects-contributors)"
- "[Cambio de un mensaje de confirmación](/pull-requests/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)"
- "[Confirmación y revisión de los cambios en el proyecto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#4-write-a-commit-message-and-push-your-changes)" en la documentación de {% data variables.product.prodname_desktop %}
