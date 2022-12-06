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
ms.openlocfilehash: 3f4ef139386e616d14ef9a9cc5b474c96983de91
ms.sourcegitcommit: 1a77ceb9e20c002173dda983db9405bcd5be254a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185181'
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

  ![Captura de pantalla del botón Actualizar](/assets/images/help/codespaces/jetbrains-plugin-icon-refresh.png)

  Actualiza los detalles de la ventana de herramientas de {% data variables.product.prodname_github_codespaces %}. Por ejemplo, si usaste la {% data variables.product.prodname_cli %} para cambiar el nombre para mostrar, podrías hacer clic en este botón para que aparezca el nuevo nombre.

* **Administrar los codespaces desde la web**

  ![Captura de pantalla del botón Lista](/assets/images/help/codespaces/jetbrains-plugin-icon-index.png)

  Abre la lista de codespaces en https://github.com/codespaces.

* **Ver el registro de creación de codespaces**

  ![Captura de pantalla del botón Registro](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

  Abre el registro de creación de codespaces en la ventana del editor. Para más información, consulta "[Registros de {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)".
