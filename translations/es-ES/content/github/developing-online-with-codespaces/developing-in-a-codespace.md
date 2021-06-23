---
title: Desarrollar en un codespace
intro: 'Puedes abrir un codespace en {% data variables.product.product_name %} y después desarrollar utilizando las características de {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.codespaces %}'
permissions: Cualquiera puede desarrollar en un codespace que pertenezca a su cuenta de usuario.
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
versions:
  free-pro-team: '*'
topics:
  - codespaces
---

{% data reusables.codespaces.release-stage %}

{% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.use-chrome %} Para obtener más información, consulta la sección "[Solucionar problemas de tu codespace](/github/developing-online-with-codespaces/troubleshooting-your-codespace)".

### Conectarse a un codespace desde {% data variables.product.prodname_vscode %}
{% data reusables.codespaces.connect-to-codespace-from-vscode %}

### Navegar a tu codespace
{% data reusables.codespaces.navigate-to-codespaces %}
2. Da clic en el nombre del codespace en el cual quieras desarrollar. ![Nombre del codespace](/assets/images/help/codespaces/click-name-codespace.png)

### Puertos de redireccionamiento

La redirección de puertos te otorga acceso a los puertos CRP dentro de tu codespace. Por ejemplo, si estás ejecutando una aplicación web en el puerto 3000, puedes acceder a la aplicación desde tu buscador para probarla y depurarla.

Cuando una aplicación que se ejecuta dentro de un codespace tiene una salida en un puerto de la consola, {% data variables.product.prodname_codespaces %} detecta el patrón de la URL del localhost y redirecciona esos puertos automáticamente. Puedes dar clic en la URL dentro de la terminal para abrirla en un buscador. Por ejemplo, si una aplicación da como salida `http://127.0.0.1:3000` o `http://localhost:3000` en la consola, la bitácora convertirá la salida automáticamente en una URL para el puerto 3000 en la que se puede dar clic.

![Reenvío Automático de Puertos](/assets/images/help/codespaces/automatic-port-forwarding.png)

Como alternativa, también puedes utilizar cualquiera de las siguientes formas para redirigir un puerto.

* Puedes redirigir un puerto bajo demanda si activas la paleta de comandos (`shift command P` / `shift control P`) y tecleas "Codespaces: Forward Port". Entonces puedes ingresar el número del puerto que quieras redirigir.

    ![Paleta de Comandos para la Redirección de Puertos](/assets/images/help/codespaces/command-palette-port-forwarding.png)

* Puedes configurar automáticamente los puertos en un archivo de `.devcontainer.json` utilizando la propiedad `forwardPorts`.

* Puedes agregar o eliminar los puertos redirigidos dentro de la extensión de Explorador Remoto. Desde el Explorador Remoto, puedes copiar y pegar las URL para los puertos redirigidos, lo cual te permite acceder a ellos a través de tu buscador.

    ![Redirección de Puertos para el Explorador Remoto](/assets/images/help/codespaces/remote-explorer-port-forwarding.png)
