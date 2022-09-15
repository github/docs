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
shortTitle: Forward ports
ms.openlocfilehash: b7309a1f2f878860bd9faf34b5516bd10ef80887
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/12/2022
ms.locfileid: '147110694'
---
## Acerca de los puertos reenviados

La redirección de puertos te otorga acceso a los puertos CRP dentro de tu codespace. Por ejemplo, si estás ejecutando una aplicación web en un puerto específico en tu codespace, puedes reenviar dicho puerto. Esto te permite acceder a la aplicación desde el buscador en tu máquina local para hacer pruebas y correcciones de errores.

Cuando una aplicación que se ejecuta dentro de un codespace imprime la salida en el terminal que contiene una dirección URL de localhost, como `http://localhost:PORT` o `http://127.0.0.1:PORT`, el puerto se reenvía de forma automática. Si estás utilizando {% data variables.product.prodname_github_codespaces %} en el explorador o en {% data variables.product.prodname_vscode %}, la secuencia de URL en la terminal se convertirá en un vínculo en el que puedes hacer clic para ver la página web en tu máquina local. Predeterminadamente, {% data variables.product.prodname_codespaces %} reenvía los puertos utilizando HTTP.

![Reenvío automático de puertos](/assets/images/help/codespaces/automatic-port-forwarding.png)

También puedes reenviar un puerto de forma manual, etiquetar los puertos reenviados, compartir los puertos reenviados con los miembros de tu organización, compartir los puertos reenviados de forma pública y agregar puertos reenviados a la configuración del codespace.

{% note %}

**Nota**: {% data reusables.codespaces.restrict-port-visibility %}

{% endnote %}

## Reenviar un puerto

Puedes reenviar manualmente a un puerto que no se haya reenviado automáticamente.

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. En la lista de puertos, haga clic en **Agregar puerto**.

   ![Botón de agregar puerto](/assets/images/help/codespaces/add-port-button.png)

1. Teclea el número de puerto o de dirección y luego presiona enter.

   ![Botón de caja de texto para teclear el puerto](/assets/images/help/codespaces/port-number-text-box.png)

## Utilizar el reenvío HTTPS

Predeterminadamente, {% data variables.product.prodname_codespaces %} reenvía los puertos utilizando HTTP, pero puedes actualizar cualquier puerto para que utilice HTTPS conforme lo requiera.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haga clic con el botón derecho en el puerto que quiera actualizar y, después, mantenga el mouse sobre **Cambiar protocolo de puerto**.
  ![Opción para cambiar el protocolo del puerto](/assets/images/help/codespaces/update-port-protocol.png)
1. Selecciona el protocolo necesario para este puerto. El protocolo que selecciones se recordará para este puerto durante toda la vida útil del codespace.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. En la lista de puertos, haga clic en **Agregar puerto**.

   ![Botón de agregar puerto](/assets/images/help/codespaces/add-port-button.png)

1. Teclea el número de puerto o de dirección y luego presiona enter.

   ![Botón de caja de texto para teclear el puerto](/assets/images/help/codespaces/port-number-text-box.png)

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Para reenviar un puerto, use el subcomando `gh codespace ports forward`. Reemplace `codespace-port:local-port` por los puertos remotos y locales que quiera conectar. Después de ingresar el comando, elige de la lista de codespaces que se muestra.

```shell
gh codespace ports forward <em>codespace-port</em>:<em>local-port</em>
```

Para más información sobre este comando, vea [el manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_forward).

Para ver detalles de los puertos reenviados, escriba `gh codespace ports` y elija un codespace.

{% endcli %}

## Compartir un puerto

{% note %}

**Nota:** Solo puede hacer que un puerto sea privado para una organización si en la organización se usa {% data variables.product.prodname_team %} o {% data variables.product.prodname_ghe_cloud %}.

{% endnote %}

Si quieres compartir un puerto reenviado con otros, puedes ya sea hacerlo privado para tu organización o hacerlo público. Después de hacer un puerto privado para tu organización, cualquier miembro de esta que tenga la URL de dicho puerto podrá ver la aplicación que se está ejecutando. Después de hacer un puerto público, cualquiera que sepa la URL y el número de puerto podrá ver la aplicación que se está ejecutando sin necesidad de autenticarse.

{% note %}

**Nota:** La elección de las opciones de visibilidad del puerto puede estar limitada por una directiva configurada para la organización. Para más información, vea "[Restricción de la visibilidad de los puertos reenviados](/codespaces/managing-codespaces-for-your-organization/restricting-the-visibility-of-forwarded-ports)".

{% endnote %}

{% webui %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haga clic con el botón derecho en el puerto que quiere compartir, seleccione el menú "Visibilidad del puerto" y, después, haga clic en **Privado para la organización** o **Público**.
  ![Opción para seleccionar la visibilidad del puerto en el menú contextual](/assets/images/help/codespaces/make-public-option.png)
1. A la derecha de la dirección local del puerto, haz clic en el icono de copiar.
  ![Icono Copiar para la URL del puerto](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envía la URL copiada a la persona con la que quieras compartir el puerto.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haga clic con el botón derecho en el puerto que quiere compartir, seleccione el menú "Visibilidad del puerto" y, después, haga clic en **Privado para la organización** o **Público**.
  ![Opción para convertir el puerto en público en el menú contextual](/assets/images/help/codespaces/make-public-option.png)
1. A la derecha de la dirección local del puerto, haz clic en el icono de copiar.
  ![Icono Copiar para la URL del puerto](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envía la URL copiada a la persona con la que quieras compartir el puerto.

{% endvscode %}

{% cli %}

Para cambiar la visibilidad de un puerto reenviado, use el subcomando `gh codespace ports visibility`. {% data reusables.codespaces.port-visibility-settings %}

Reemplace `codespace-port` por el número de puerto reenviado. Reemplace `setting` por `private`, `org` o `public`. Después de ingresar el comando, elige de la lista de codespaces que se muestra.

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>setting</em>
```

Puedes configurar la visibilidad para varios puertos con un solo comando. Por ejemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

Para más información sobre este comando, vea [el manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_visibility).

{% endcli %}

## Etiquetar un puerto

Puedes etiquetar un puerto para hacerlo más fácil de identificar en una lista.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Pasa el mouse sobre el puerto que quieras etiquetar y luego haz clic en el icono de etiqueta.
  ![Icono de etiqueta para el puerto](/assets/images/help/codespaces/label-icon.png) {% data reusables.codespaces.type-port-label %}

## Agregar el peurto a la configuración del codespace

Puedes agregar un puerto reenviado a la configuración de {% data variables.product.prodname_github_codespaces %} del repositorio para que este pueda reenviarse automáticamente a todos los codespaces que se crearon desde el repositorio. Después de que actualizas la configuración, cualquier codespace creado debe reconstruirse para que el cambio se aplique. Para más información, vea "[Configuración de {% data variables.product.prodname_codespaces %} para el proyecto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project#applying-configuration-changes-to-a-codespace)".

Puede configurar manualmente los puertos reenviados en un archivo `.devcontainer.json` mediante la propiedad `forwardPorts`, o bien puede usar el panel "Puertos" del codespace.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haga clic con el botón derecho en el puerto que quiera agregar a la configuración del codespace y, después, haga clic en **Configurar etiqueta y actualizar devcontainer.json**.
  ![Opción para establecer la etiqueta y agregar un puerto a devcontainer.json en el menú contextual](/assets/images/help/codespaces/update-devcontainer-to-add-port-option.png) {% data reusables.codespaces.type-port-label %}
