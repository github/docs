---
title: Uso del complemento de GitHub Codespaces para JetBrains
shortTitle: Plugin for JetBrains
intro: 'Puedes usar el complemento de {% data variables.product.prodname_github_codespaces %} para la aplicación cliente JetBrains con el fin de obtener información sobre el codespace o detenerlo cuando acabes de trabajar.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: 8ffd48856a2653f3db3c871122d3acd23c246d7a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159939'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## Acerca del complemento de {% data variables.product.prodname_github_codespaces %}

La aplicación cliente JetBrains se inicia cuando te conectas a un codespace desde la aplicación JetBrains Gateway. Te ofrece la posibilidad de usar {% data variables.product.prodname_github_codespaces %} con tu IDE de JetBrains favorito. Para obtener más información, consulta "[Uso de {% data variables.product.prodname_github_codespaces %} en el IDE de JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)".

El complemento de {% data variables.product.prodname_github_codespaces %} ya está instalado en el cliente JetBrains cuando te conectas a un codespace desde JetBrains Gateway. El complemento agrega la ventana de herramientas de {% data variables.product.prodname_github_codespaces %} a la interfaz de usuario.

Haz clic en **{% data variables.product.prodname_github_codespaces %}** en la parte inferior izquierda de la ventana de la aplicación cliente JetBrains para abrir la ventana de herramientas de {% data variables.product.prodname_github_codespaces %}.

![Captura de pantalla de la ventana de herramientas de {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/jetbrains-codespaces-tool-window.png)

## Uso de la ventana de herramientas de {% data variables.product.prodname_github_codespaces %}

En la ventana de herramientas de {% data variables.product.prodname_github_codespaces %} se muestra lo siguiente:
* El repositorio desde el que creaste este codespace.
* El nombre para mostrar del codespace.
* La rama actual.
* Las especificaciones de la máquina.
* El tiempo durante el cual este codespace puede permanecer inactivo antes de que se detenga automáticamente.
* La antigüedad del codespace.
* El período durante el cual se conservará un codespace detenido antes de que se elimine automáticamente.

Los iconos de la parte superior de la ventana de herramientas de {% data variables.product.prodname_github_codespaces %} proporcionan las funciones que se indican a continuación.

* **Actualizar codespace activo**

  ![Captura de pantalla del botón Actualizar](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh-BAK.png)

  Actualiza los detalles de la ventana de herramientas de {% data variables.product.prodname_github_codespaces %}. Por ejemplo, si usaste la {% data variables.product.prodname_cli %} para cambiar el nombre para mostrar, podrías hacer clic en este botón para que aparezca el nuevo nombre.

* **Desconectar y detener**

  ![Captura de pantalla del botón Detener](/assets/images/help/codespaces/jetbrains-plugin-icon-stop.png)

  Detén el codespace, detén el IDE de back-end de la máquina remota y cierra el cliente JetBrains local.

* **Administrar los codespaces desde la web**

  ![Captura de pantalla del botón Lista](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  Abre la lista de codespaces en https://github.com/codespaces.

* **Ver el registro de creación de codespaces**

  ![Captura de pantalla del botón Registro](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  Abre el registro de creación de codespaces en la ventana del editor. Para más información, consulta "[Registros de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)".

* **Recompilar el contenedor de desarrollo**

  ![Captura de pantalla del botón Recompilar](/assets/images/help/codespaces/jetbrains-plugin-icon-rebuild.png)

  Recompile el codespace para aplicar los cambios que has realizado en la configuración del contenedor de desarrollo. El cliente JetBrains se cerrará y deberás volver a abrir el codespace. Para obtener más información, consulta "[Ciclo de vida de un codespace](/codespaces/developing-in-codespaces/the-codespace-lifecycle#rebuilding-a-codespace)".

