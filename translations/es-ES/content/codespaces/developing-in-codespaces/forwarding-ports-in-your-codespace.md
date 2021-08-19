---
title: Reenviar puertos en tu codespace
intro: '{% data reusables.codespaces.about-port-forwarding %}'
versions:
  free-pro-team: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
---

{% data reusables.codespaces.release-stage %}

### Acerca de los puertos reenviados

La redirección de puertos te otorga acceso a los puertos CRP dentro de tu codespace. Por ejemplo, si estás ejecutando una aplicación web en el puerto 4000, puedes acceder a esta desde tu buscador para probarla y depurarla.

Cuando una aplicación que se ejecuta en un codespace da salida a la consola a un puerto, el {% data variables.product.prodname_codespaces %} detecta el patrón de URL del host local y reenvía el puerto automáticamente. Puedes hacer clic en la URL de la terminal para abrir el puerto en un buscador. Por ejemplo, si una aplicación da como salida `http://127.0.0.1:4000` o `http://localhost:4000` en la consola, la bitácora convertirá la salida automáticamente en una URL para el puerto 4000 en la que se puede dar clic.

![Reenvío automático de puertos](/assets/images/help/codespaces/automatic-port-forwarding.png)

También puedes reenviar un puerto manualmente, etiquetar puertos reenviados, compartir puertos reenviados públicamente y agregar puertos reenviados a la configuración del codespace.

### Reenviar un puerto

Puedes reenviar manualmente a un puerto que no se haya reenviado automáticamente.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Debajo de la lista de puertos, haz clic en **Agregar puerto**. ![Botón de agregar puerto](/assets/images/help/codespaces/add-port-button.png)
1. Teclea el número de puerto o de dirección y luego presiona enter. ![Botón de caja de texto para teclear el puerto](/assets/images/help/codespaces/port-number-text-box.png)

### Etiquetar un puerto

Puedes etiquetar un puerto para hacerlo más fácil de identificar en una lista.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Pasa el mouse sobre el puerto que quieras etiquetar y luego haz clic en el icono de etiqueta. ![Icono de etiqueta para el puerto](/assets/images/help/codespaces/label-icon.png)
{% data reusables.codespaces.type-port-label %}

### Compartir un puerto

Si quieres compartir un puerto reenviado con otros, puedes hacerlo público. Después de que lo haces público, cualquiera con la URL del puerto puede ver la aplicación que se ejecuta sin necesidad de autenticarse.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haz clic derecho en el puerto que quieres compartir y luego en **Hacer público**. ![Opción para hacer el puerto público en el menú de clic derecho](/assets/images/help/codespaces/make-public-option.png)
1. A la derecha de la dirección local del puerto, haz clic en el icono de copiar. ![Copiar el icono para la URL del puerto](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envía la URL copiada a la persona con la que quieras compartir el puerto.

### Agregar el peurto a la configuración del codespace

Puedes agregar un puerto reenviado a la configuración de {% data variables.product.prodname_codespaces %} del repositorio para que este pueda reenviarse automáticamente a todos los codespaces que se crearon desde el repositorio. Después de que actualizas la configuración, cualquier codespace creado debe reconstruirse para que el cambio se aplique. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)".

Puedes configurar manualmente los puertos reenviados en un archivo `.devcontainer.json` utilizando la propiedad `forwardPorts` o puedes utilizar el panel "Puertos" en tu codespace.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haz clic derecho en el puerto que quieras agregar a la configuración del codespace y luego haz clic en **Configurar etiqueta y actualizar devcontainer.json**. ![Opción para configurar una etiqueta y agregar el puerto a devcntainer.json en el menú de clic derecho](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png)
{% data reusables.codespaces.type-port-label %}

