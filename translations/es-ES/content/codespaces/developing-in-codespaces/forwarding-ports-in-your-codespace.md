---
title: Reenviar puertos en tu codespace
intro: '{% data reusables.codespaces.about-port-forwarding %}'
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
ms.openlocfilehash: 320a2e42d647452056961d4f0f987c3c5db49476
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158913'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Acerca de los puertos reenviados

La redirección de puertos te otorga acceso a los puertos CRP dentro de tu codespace. Por ejemplo, si estás ejecutando una aplicación web en un puerto específico en tu codespace, puedes reenviar dicho puerto. Esto te permite acceder a la aplicación desde el buscador en tu máquina local para hacer pruebas y correcciones de errores.

{% webui %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. En la lista de puertos, haga clic en **Agregar puerto**.

   ![Botón de agregar puerto](/assets/images/help/codespaces/add-port-button.png)

1. Teclea el número de puerto o de dirección y luego presiona enter.

   ![Botón de caja de texto para teclear el puerto](/assets/images/help/codespaces/port-number-text-box.png)

## Utilizar el reenvío HTTPS

De manera predeterminada, {% data variables.product.prodname_github_codespaces %} reenvía los puertos mediante HTTP, pero puedes actualizar cualquier puerto para que utilice HTTPS según sea necesario. Si actualizas un puerto con visibilidad pública para usar HTTPS, la visibilidad del puerto cambiará automáticamente a privada.

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haga clic con el botón derecho en el puerto que quiera actualizar y, después, mantenga el mouse sobre **Cambiar protocolo de puerto**.
  ![Opción para cambiar el protocolo del puerto](/assets/images/help/codespaces/update-port-protocol.png)
1. Selecciona el protocolo necesario para este puerto. El protocolo que selecciones se recordará para este puerto durante toda la vida útil del codespace.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haga clic con el botón derecho en el puerto que quiere compartir, seleccione el menú "Visibilidad del puerto" y, después, haga clic en **Privado para la organización** o **Público**.
  ![Opción para seleccionar la visibilidad del puerto en el menú contextual](/assets/images/help/codespaces/make-public-option.png)
1. A la derecha de la dirección local del puerto, haz clic en el icono de copiar.
  ![Icono Copiar para la URL del puerto](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envía la URL copiada a la persona con la que quieras compartir el puerto.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.port-forwarding-intro-non-jetbrains %} {% data reusables.codespaces.navigate-to-ports-tab %}
1. En la lista de puertos, haga clic en **Agregar puerto**.

   ![Botón de agregar puerto](/assets/images/help/codespaces/add-port-button.png)

1. Teclea el número de puerto o de dirección y luego presiona enter.

   ![Botón de caja de texto para teclear el puerto](/assets/images/help/codespaces/port-number-text-box.png)

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

{% data reusables.codespaces.navigate-to-ports-tab %}
1. Haga clic con el botón derecho en el puerto que quiere compartir, seleccione el menú "Visibilidad del puerto" y, después, haga clic en **Privado para la organización** o **Público**.
  ![Opción para convertir el puerto en público en el menú contextual](/assets/images/help/codespaces/make-public-option.png)
1. A la derecha de la dirección local del puerto, haz clic en el icono de copiar.
  ![Icono Copiar para la URL del puerto](/assets/images/help/codespaces/copy-icon-port-url.png)
1. Envía la URL copiada a la persona con la que quieras compartir el puerto.

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %} {% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Para reenviar un puerto, use el subcomando `gh codespace ports forward`. Reemplace `codespace-port:local-port` por los puertos remotos y locales que quiera conectar. Después de ingresar el comando, elige de la lista de codespaces que se muestra.

```shell
gh codespace ports forward CODESPACE-PORT:LOCAL-PORT
```

Para más información sobre este comando, vea [el manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_forward).

Para ver detalles de los puertos reenviados, escriba `gh codespace ports` y elija un codespace.

{% data reusables.codespaces.port-forwarding-sharing-non-jetbrains %}

Para cambiar la visibilidad de un puerto reenviado, use el subcomando `gh codespace ports visibility`. {% data reusables.codespaces.port-visibility-settings %}

Reemplace `codespace-port` por el número de puerto reenviado. Reemplace `setting` por `private`, `org` o `public`. Después de ingresar el comando, elige de la lista de codespaces que se muestra.

```shell
gh codespace ports visibility CODESPACE-PORT:SETTINGS
```

Puedes configurar la visibilidad para varios puertos con un solo comando. Por ejemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org
```

Para más información sobre este comando, vea [el manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_ports_visibility).

{% data reusables.codespaces.port-forwarding-labeling-non-jetbrains %}

Puedes ver las etiquetas de puerto al enumerar los puertos reenviados de un codespace. Para ello, usa el comando `gh codespace ports` y, después, selecciona un codespace.

{% data reusables.codespaces.port-forwarding-adding-non-jetbrains %}

{% endcli %}

{% jetbrains %}

## Reenviar un puerto

Para obtener información sobre cómo reenviar un puerto en un codespace a un puerto en el equipo local, consulta la sección "Reenvío de puertos" del artículo "[Modelo de seguridad](https://www.jetbrains.com/help/idea/security-model.html#port_forwarding)" en la documentación de JetBrains.

Como alternativa, puedes usar {% data variables.product.prodname_cli %} para reenviar un puerto. Para obtener más información, haz clic en la pestaña "{% data variables.product.prodname_cli %}" que se encuentra cerca de la parte superior de esta página.

{% endjetbrains %}
