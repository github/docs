---
title: Crear una confirmación con distintos autores
intro: 'Puedes atribuir una confirmación a más de un autor agregando una o más introducciones `Co-authored-by` al mensaje de la confirmación. Las confirmaciones conjuntas se pueden ver en {% data variables.product.product_name %} y se pueden incluir en el gráfico de contribuciones del perfil y en las estadísticas del repositorio.'
redirect_from:
  - /articles/creating-a-commit-with-multiple-authors
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Información del coautor requerida

Antes de agregar un coautor a una confirmación, debes saber el correo electrónico correcto para usar con cada coautor. Para que la confirmación del coautor se considere como una contribución, debes usar el correo electrónico asociado con su cuenta {% data variables.product.product_name %}.

{% if currentVersion == "free-pro-team@latest" %}

Si una persona elige mantener la privacidad de su dirección de correo electrónico, debes usar su correo electrónico `no-reply` proporcionado por {% data variables.product.product_name %} para proteger su privacidad. Si no lo haces, el correo electrónico del coautor estará disponible para el público en el mensaje de confirmación. Si deseas mantener la privacidad de tu correo electrónico, puedes optar por usar un correo electrónico `no-reply` proporcionado por {% data variables.product.product_name %} para las operaciones Git y solicitar a los otros coautores que incluyan tu correo electrónico `no-reply` en las introducciones de cada confirmación.

Para obtener más información, consulta "[Establecer tu dirección de correo electrónico de confirmación](/articles/setting-your-commit-email-address)".

  {% tip %}

  **Sugerencia:** Puedes ayudar a un coautor a encontrar una dirección de correo electrónico de su preferencia compartiendo esta información:
  - Para encontrar tu correo electrónico `no-reply` proporcionado por {% data variables.product.product_name %} dirígete a la página de configuración de tu correo electrónico en "Mantener la privacidad de mi dirección de correo electrónico".
  - Para encontrar el correo electrónico que usaste para configurar Git en tu computadora, ejecuta `git config user.email` en la línea de comando.

  {% endtip %}

{% endif %}

### Crear confirmaciones conjuntas usando {% data variables.product.prodname_desktop %}

Puedes usar {% data variables.product.prodname_desktop %} para crear una confirmación con un coautor. Para obtener más información, consulta "[Escribe un mensaje de confirmación y sube tus cambios](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#3-write-a-commit-message-and-push-your-changes)" y [{% data variables.product.prodname_desktop %}](https://desktop.github.com).

![Agregar un coautor al mensaje de confirmación](/assets/images/help/desktop/co-authors-demo-hq.gif)

### Crear confirmaciones conjuntas en la línea de comando

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}

{% data reusables.pull_requests.commit-message-with-trailer-beginning %}

3. En la línea siguiente del mensaje de confirmación, escribe `Co-authored-by:name <name@example.com>` con información específica para cada coautor. Luego de la información del coautor, agrega comillas de cierre.

  Si estás agregando distintos coautores, asigna una línea y una introducción de la confirmación `Co-authored-by` a cada coautor.
  ```shell
  $ git commit -m "Refactor usability tests.
  >
  >
  Co-authored-by: <em>name</em> &lt;<em>name@example.com</em>&gt;
  Co-authored-by: <em>another-name</em> &lt;<em>another-name@example.com</em>&gt;"
  ```

El nuevo mensaje y la confirmación aparecerán en {% data variables.product.product_location %} la próxima vez que subas un cambio. Para obtener más información, consulta "[Subir cambios a un repositorio remoto](/articles/pushing-commits-to-a-remote-repository/)."

### Crear confirmaciones conjuntas en {% data variables.product.product_name %}

Una vez que hayas realizado los cambios en un archivo usando el editor web en {% data variables.product.product_name %}, puedes crear una confirmación conjunta agregando una introducción `Co-authored-by:` al mensaje de confirmación.

{% data reusables.pull_requests.collect-co-author-commit-git-config-info %}
2. Luego de hacer tus cambios de forma conjunta, en la parte inferior de la página, escribe un mensaje de confirmación breve y significativo que describa los cambios que realizaste. ![Mensaje de confirmación de tu cambio](/assets/images/help/repository/write-commit-message-quick-pull.png)
3. En el cuadro de texto que aparece debajo de tu mensaje de confirmación, agrega `Co-authored-by:name <name@example.com>` con información específica para cada coautor. Si estás agregando distintos coautores, asigna una línea y una introducción de la confirmación `Co-authored-by` a cada coautor.

  ![Ejemplo de introducción de coautor del mensaje de confirmación en el cuadro de texto para el mensaje de confirmación](/assets/images/help/repository/write-commit-message-co-author-trailer.png)
4. Haz clic en **Confirmar cambios** o **Proponer cambios**.

La confirmación y el mensaje nuevos aparecerán en {% data variables.product.product_location %}.

### Leer más
{% if currentVersion != "free-pro-team@latest" %}
- "[Ver las contribuciones en tu perfil](/articles/viewing-contributions-on-your-profile)"
- "[¿Por qué mis contribuciones no se ven en mi perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"{% endif %}
- "[Ver un resumen de la actividad del repositorio](/articles/viewing-a-summary-of-repository-activity)"
- "[Ver los colaboradores de un proyecto](/articles/viewing-a-projects-contributors)"
- "[Cambiar un mensaje de confirmación](/articles/changing-a-commit-message)"
- "[Confirmar y revisar los cambios en tu proyecto](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project#3-write-a-commit-message-and-push-your-changes)" en la documentación de {% data variables.product.prodname_desktop %}
