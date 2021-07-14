---
title: Crear una confirmación en nombre de una organización
intro: 'Puedes crear confirmaciones en nombre de una organización agregando una introducción al mensaje de la confirmación. Las confirmaciones atribuidas a una organización incluyen un distintivo `on-behalf-of` (en nombre de) en {% data variables.product.product_name %}.'
redirect_from:
  - /articles/creating-a-commit-on-behalf-of-an-organization
  - /github/committing-changes-to-your-project/creating-a-commit-on-behalf-of-an-organization
versions:
  free-pro-team: '*'
---

{% note %}

**Nota:** La capacidad de crear una confirmación en nombre de una organización se encuentra actualmente en la versión beta de acceso público y está sujeta a modificaciones.

{% endnote %}

Para crear confirmaciones en nombre de una organización:

- debes ser miembro de la organización indicada en la introducción
- debes firmar la confirmación
- tu correo electrónico de confirmación y el correo electrónico de la organización debe estar dentro de un dominio verificado por la organización
- tu mensaje de confirmación debe finalizar con la introducción de la confirmación `on-behalf-of: @org <name@organization.com>`
  - `org` es el inicio de sesión de la organización
  - `name@organization.com` se encuentra en el dominio de la organización

Las organizaciones pueden usar el correo electrónico `name@organization.com` como punto de contacto público para los esfuerzos de código abierto que se hagan.

### Crear confirmaciones con un distintivo `on-behalf-of` en la línea de comando

1. Teclea tu mensaje de confirmación y una descripción corta y significativa sobre tus cambios. Después de tu descripción de la confirmación, en vez de cerrar las comillas, agrega dos líneas vacías.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  ```
  {% tip %}

  **Tip:** Si utilizas un editor de texto en la línea de comandos para teclear tu mensaje de confirmación, asegúrate de que existen dos líneas nuevas entre el final de la descripción de tu confirmación y el indicador `on-behalf-of:`.

  {% endtip %}

2. En la línea siguiente del mensaje de confirmación, escriba `on-behalf-of: @org <name@organization.com>` y luego coloque comillas de cierre.

  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  on-behalf-of: <em>@org</em> &lt;<em>name@organization.com</em>&gt;"
  ```

El nuevo mensaje de confirmación y el distintivo aparecerán en {% data variables.product.product_location %} la próxima vez que subas un cambio. Para obtener más información, consulta "[Subir cambios a un repositorio remoto](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/)."

### Crear confirmaciones con un distintivo `on-behalf-of` en {% data variables.product.product_name %}

Una vez que hayas realizado los cambios en un archivo usando el editor web en {% data variables.product.product_name %}, puedes crear una confirmación en nombre de tu organización agregando una introducción `on-behalf-of:` al mensaje de confirmación.

1. Luego de hacer tus cambios, en la parte inferior de la página, escribe un mensaje de confirmación breve y significativo que describa tus cambios. ![Mensaje de confirmación de tu cambio](/assets/images/help/repository/write-commit-message-quick-pull.png)

2. En el cuadro de texto que aparece debajo de tu mensaje de confirmación, agrega `on-behalf-of: @org <name@organization.com>`.

  ![Ejemplo de introducción de mensaje de confirmación on-behalf-of en el segundo cuadro de texto para el mensaje de confirmación](/assets/images/help/repository/write-commit-message-on-behalf-of-trailer.png)
4. Haz clic en **Confirmar cambios** o **Proponer cambios**.

La confirmación, el mensaje y el distintivo nuevos aparecerán en {% data variables.product.product_location %}.

### Leer más

- "[Ver las contribuciones en tu perfil](/articles/viewing-contributions-on-your-profile)"
- "[¿Por qué mis contribuciones no se ven en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
- "[Ver un resumen de la actividad del repositorio](/articles/viewing-a-summary-of-repository-activity)"
- "[Ver los colaboradores de un proyecto](/articles/viewing-a-projects-contributors)"
- "[Cambiar un mensaje de confirmación](/articles/changing-a-commit-message)"
