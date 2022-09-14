---
title: "Configuración de GitHub\_Copilot en Visual\_Studio"
intro: 'Puede habilitar, configurar y deshabilitar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vs %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio
topics:
  - Copilot
ms.openlocfilehash: cb24557b15eafd4a5be8ef1a991ae3c43f376c67
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147786033'
---
## Sobre {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vs %}

Si usas {% data variables.product.prodname_vs %}, {% data variables.product.prodname_copilot %} puede autocompletar el código mientras escribes. Después de la instalación, puede habilitar o deshabilitar {% data variables.product.prodname_copilot %}, y configurar opciones avanzadas en {% data variables.product.prodname_vs %} o en {% data variables.product.prodname_dotcom_the_website %}.

## Prerrequisitos

Para configurar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vs %}, hay que instalar el complemento {% data variables.product.prodname_copilot %}. Para más información, ve "[Introducción a {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vs %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio)".

## Métodos abreviados de teclado para {% data variables.product.prodname_copilot %}

Puedes usar los métodos abreviados de teclado predeterminados en {% data variables.product.prodname_vs %} al usar {% data variables.product.prodname_copilot %}. Como alternativa, puedes volver a enlazar los accesos directos en la configuración herramientas de {% data variables.product.prodname_vs %} mediante los métodos abreviados de teclado preferidos para cada comando específico. Puedes buscar cada método abreviado de teclado por su nombre de comando en el editor de Métodos abreviados de teclado.

| Acción | Acceso directo | Nombre de comando |
|:---|:---|:---|
|Mostrar la sugerencia insertada siguiente|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>]</kbd>|Tools.Nextsuggestion|
|Mostrar sugerencia insertada anterior|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>[</kbd>|Tools.Previoussuggestion|
|Desencadenar sugerencia insertada|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

## Reenlazamiento de métodos abreviados de teclado

Si no quieres usar los métodos abreviados de teclado predeterminados en {% data variables.product.prodname_vs %} al usar datos {% data variables.product.prodname_copilot %}, puedes volver a enlazar los métodos abreviados de teclado en el editor de Teclado y usar tus preferidos para cada comando específico.

1. En la barra de herramientas de {% data variables.product.prodname_vs %}, en **Herramientas**, haz clic en **Opciones**.
   ![Captura de pantalla de la opción Opciones en la barra de herramientas de {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-toolbar-options.png)
1. En el cuadro de diálogo "Opciones", en **Entorno**, haz clic en **Teclado**.
   ![Captura de pantalla de la opción Teclado en el cuadro de diálogo "Opciones"](/assets/images/help/copilot/vs-options-dialogue.png)
1. En "Mostrar los comandos que contengan:", busca el comando que quieres volver a enlazar.
   ![Captura de pantalla de la barra de búsqueda Mostrar los comandos que contengan](/assets/images/help/copilot/vs-show-commands-containing.png)
1. En "Presionar las teclas de método abreviado", escribe el método abreviado que quieres asignar al comando y, después, haz clic en **Asignar**.
   ![Captura de pantalla de la asignación de método abreviado de teclado](/assets/images/help/copilot/vs-rebind-shortcut.png)

{% data reusables.copilot.enabling-or-disabling-vs %}

## Configuración de ReSharper para {% data variables.product.prodname_copilot %}

Si se usa ReSharper, {% data variables.product.prodname_copilot %} puede funcionar mejor al configurar ReSharper para usar IntelliSense nativo de {% data variables.product.prodname_copilot %}. Para más información sobre ReSharper, consulta la [documentación de ReSharper](https://www.jetbrains.com/resharper/documentation/documentation.html)

1. En la barra de herramientas de {% data variables.product.prodname_vs %}, en **Herramientas**, haz clic en **Opciones**.
   ![Captura de pantalla de la opción Opciones en la barra de herramientas de {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-toolbar-options.png)
1. En el cuadro de diálogo "Opciones", en **Entorno**, haz clic en **IntelliSense** y, después, en **General**.
    ![Captura de pantalla de la opción IntelliSense en el cuadro de diálogo "Opciones"](/assets/images/help/copilot/vs-options-intellisense.png)
1. En "General", selecciona **Visual Studio** y, después, **Guardar**.

{% data reusables.copilot.dotcom-settings %}
