---
title: Reenviar puertos en tu codespace
intro: '{% data reusables.codespaces.about-port-forwarding %}'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/developing-online-with-codespaces/forwarding-ports-in-your-codespace
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Reenviar puertos
---

## Acerca de los puertos reenviados

La redirección de puertos te otorga acceso a los puertos CRP dentro de tu codespace. For example, if you're running a web application on a particular port in your codespace, you can forward that port. This allows you to access the application from the browser on your local machine for testing and debugging.

When an application running inside a codespace prints output to the terminal that contains a localhost URL, such as `http://localhost:PORT` or `http://127.0.0.1:PORT`, the port is automatically forwarded. If you're using {% data variables.product.prodname_github_codespaces %} in the browser or in {% data variable.product.prodname_vscode %}, the URL string in the terminal is converted into a link that you can click to view the web page on your local machine. By default, {% data variables.product.prodname_codespaces %} forwards ports using HTTP.

![Reenvío automático de puertos](/assets/images/help/codespaces/automatic-port-forwarding.png)

You can also forward a port manually, label forwarded ports, share forwarded ports with members of your organization, share forwarded ports publicly, and add forwarded ports to the codespace configuration.

## Reenviar un puerto

Puedes reenviar manualmente a un puerto que no se haya reenviado automáticamente.

{% include tool-switcher %}

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Debajo de la lista de puertos, haz clic en **Agregar puerto**.

   ![Botón de agregar puerto](/assets/images/help/codespaces/add-port-button.png)

1. Teclea el número de puerto o de dirección y luego presiona enter.

   ![Botón de caja de texto para teclear el puerto](/assets/images/help/codespaces/port-number-text-box.png)

## Using HTTPS forwarding

By default, {% data variables.product.prodname_codespaces %} forwards ports using HTTP but you can update any port to use HTTPS, as needed.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port you want to update, then hover over **Change Port Protocol**. ![Option to change port protocol](/assets/images/help/codespaces/update-port-protocol.png)
1. Select the protocol needed for this port. The protocol that you select will be remembered for this port for the lifetime of the codespace.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Debajo de la lista de puertos, haz clic en **Agregar puerto**.

   ![Botón de agregar puerto](/assets/images/help/codespaces/add-port-button.png)

1. Teclea el número de puerto o de dirección y luego presiona enter.

   ![Botón de caja de texto para teclear el puerto](/assets/images/help/codespaces/port-number-text-box.png)

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

To forward a port use the `gh codespace ports forward` subcommand. Replace `codespace-port:local-port` with the remote and local ports that you want to connect. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace ports forward <em>codespace-port</em>:<em>local-port</em> 
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_ports_forward).

To see details of forwarded ports enter `gh codespace ports` and then choose a codespace.

{% endcli %}

## Compartir un puerto

{% note %}

**Note:** You can only make a port private to an organization if your organization uses {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}. This feature is not currently available in the beta version of {% data variables.product.prodname_codespaces %}.

{% endnote %}

If you want to share a forwarded port with others, you can either make the port private to your organization or make the port public. After you make a port private to your organization, anyone in the organization with the port's URL can view the running application. After you make a port public, anyone who knows the URL and port number can view the running application without needing to authenticate.

{% include tool-switcher %}

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Right click the port that you want to share, select the "Port Visibility" menu, then click **Private to Organization** or **Public**. ![Option to select port visibility in right-click menu](/assets/images/help/codespaces/make-public-option.png)
1. A la derecha de la dirección local del puerto, haz clic en el icono de copiar. ![Copiar el icono para la URL del puerto](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envía la URL copiada a la persona con la que quieras compartir el puerto.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haz clic derecho en el puerto que quieres compartir y luego en **Hacer público**. ![Opción para hacer el puerto público en el menú de clic derecho](/assets/images/help/codespaces/make-public-option.png)
1. A la derecha de la dirección local del puerto, haz clic en el icono de copiar. ![Copiar el icono para la URL del puerto](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envía la URL copiada a la persona con la que quieras compartir el puerto.

{% endvscode %}

{% cli %}

To change the visibility of a forwarded port, use the `gh codespace ports visibility` subcommand. {% data reusables.codespaces.port-visibility-settings %}

Replace `codespace-port` with the forwarded port number. Replace `setting` with `private`, `org`, or `public`. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>setting</em> 
```

You can set the visibility for multiple ports with one command. Por ejemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_ports_visibility).

{% endcli %}

## Etiquetar un puerto

Puedes etiquetar un puerto para hacerlo más fácil de identificar en una lista.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Pasa el mouse sobre el puerto que quieras etiquetar y luego haz clic en el icono de etiqueta. ![Icono de etiqueta para el puerto](/assets/images/help/codespaces/label-icon.png)
{% data reusables.codespaces.type-port-label %}

## Agregar el peurto a la configuración del codespace

Puedes agregar un puerto reenviado a la configuración de {% data variables.product.prodname_codespaces %} del repositorio para que este pueda reenviarse automáticamente a todos los codespaces que se crearon desde el repositorio. Después de que actualizas la configuración, cualquier codespace creado debe reconstruirse para que el cambio se aplique. Para obtener más información, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-changes-to-your-configuration)".

Puedes configurar manualmente los puertos reenviados en un archivo `.devcontainer.json` utilizando la propiedad `forwardPorts` o puedes utilizar el panel "Puertos" en tu codespace.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haz clic derecho en el puerto que quieras agregar a la configuración del codespace y luego haz clic en **Configurar etiqueta y actualizar devcontainer.json**. ![Opción para configurar una etiqueta y agregar el puerto a devcntainer.json en el menú de clic derecho](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png)
{% data reusables.codespaces.type-port-label %}
