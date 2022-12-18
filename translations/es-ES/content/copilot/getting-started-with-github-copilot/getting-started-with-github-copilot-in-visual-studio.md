---
title: "Introducción a GitHub Copilot en Visual\_Studio"
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: 'Obtén información sobre cómo instalar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vs %} y empezar a ver sugerencias a medida que escribe comentarios y código.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 65384a5cafae1c739b52847d1a826c0138e91fd9
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193021'
---
{% data reusables.copilot.copilot-cta-button %}

## Acerca de {% data variables.product.prodname_copilot %} y Visual Studio

{% data reusables.copilot.procedural-intro %}

Si usas {% data variables.product.prodname_vs %}, puedes ver e incorporar sugerencias de {% data variables.product.prodname_copilot %} directamente en el editor. En esta guía se muestra cómo usar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vs %} para Windows.

## Prerrequisitos

{% data reusables.copilot.subscription-prerequisite %}

- Para usar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vs %}, debes tener instalado {% data variables.product.prodname_vs %} 2022 17.2 o posterior. Para más información, consulta la documentación de [Visual Studio IDE](https://visualstudio.microsoft.com/vs/).

{% note %}

**Nota**: {% data variables.product.prodname_copilot %} no está disponible actualmente para su uso con Visual Studio para Mac.

{% endnote %}

## Instalación de la extensión {% data variables.product.prodname_vs %}

Para usar {% data variables.product.prodname_copilot %}, primero debes instalar la extensión {% data variables.product.prodname_vs %}.
1. En la barra de herramientas de Visual Studio, haz clic en **Extensiones** y, a continuación, haz clic en **Administrar extensiones**.
   ![Captura de pantalla de la barra de herramientas de Visual Studio](/assets/images/help/copilot/visual-studio-toolbar.png)
1. En la ventana "Administrar extensiones", haz clic en **Visual Studio Marketplace**, busca la extensión {% data variables.product.prodname_copilot %} y haz clic en **Descargar**.
   ![Captura de pantalla de la extensión GitHub Copilot para Visual Studio con el botón Descargar resaltado](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. Cierra la ventana "Administrar extensiones" y, a continuación, cierra y vuelve a iniciar {% data variables.product.prodname_vs %}.
1. Opcionalmente, para comprobar que {% data variables.product.prodname_copilot %} está instalado y habilitado, vuelve a **Administrar extensiones**, haz clic en **Instalado** para ver las extensiones instaladas actualmente y, a continuación, haz clic en **{% data variables.product.prodname_copilot %}** para ver la información de estado.
  ![Captura de pantalla de las extensiones instaladas en Visual Studio con GitHub Copilot resaltado](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. Abre o crea un proyecto en {% data variables.product.prodname_vs %}. 
1. En el cuadro de diálogo "Microsoft {% data variables.product.prodname_vs %}", para copiar el código de activación del dispositivo, haz clic en **Aceptar**.
   ![Captura de pantalla del cuadro de diálogo Microsoft {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-auth-dialogue.png)
1. Se abrirá una ventana de activación del dispositivo en el explorador. Pega el código del dispositivo y haz clic en **Continuar**.

   - Para pegar el código en Windows o Linux, presiona <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Para pegar el código en macOS, presiona <kbd>command</kbd>+<kbd>v</kbd>.
1. {% data variables.product.prodname_dotcom %} solicitará los permisos necesarios para {% data variables.product.prodname_copilot %}. Para aprobar estos permisos, haz clic en **Autorizar complemento {% data variables.product.prodname_copilot %}** .
1. Después de aprobar los permisos, {% data variables.product.prodname_vs %} mostrará una confirmación.
   ![Captura de pantalla de la confirmación de permisos de {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-confirmation.png)

## Visualización de tu primera sugerencia

{% data reusables.copilot.code-examples-limitations %} {% data reusables.copilot.supported-languages %} Los ejemplos siguientes están en C#, pero otros lenguajes funcionarán de forma similar.

{% data reusables.copilot.create-c-file %}
1. En el archivo de C#, escribe la siguiente signatura de función. {% data variables.product.prodname_copilot %} sugerirá automáticamente un cuerpo de función completo en texto atenuado, como se muestra a continuación. La sugerencia exacta puede variar.
  ```csharp{:copy}
  int CalculateDaysBetweenDates(
  ```
  ![Captura de pantalla de una primera sugerencia de Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio.png) {% data reusables.copilot.accept-suggestion %}
 
## Visualización de sugerencias alternativas
{% data reusables.copilot.alternative-suggestions %} {% data reusables.copilot.create-c-file %}
1. En el archivo de C#, escribe la siguiente signatura de función. {% data variables.product.prodname_copilot %} mostrará una sugerencia.

   ```csharp{:copy}
   int CalculateDaysBetweenDates(
   ```
1. Si hay sugerencias alternativas disponibles, puedes ver estas alternativas presionando <kbd>Alt</kbd>+<kbd>]</kbd> (o <kbd>Alt</kbd>+<kbd>[</kbd>).
1. Opcionalmente, puedes mantener el puntero sobre la sugerencia para ver la paleta de comandos{% data variables.product.prodname_copilot %} para elegir sugerencias.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Generación de sugerencias de código a partir de comentarios

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. En el archivo de C#, escribe el comentario siguiente. {% data variables.product.prodname_copilot %} sugerirá una implementación de la función.
   ```csharp{:copy}
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");
   
   // find all images
   ```
{% data reusables.copilot.accept-suggestion %}


{% data reusables.copilot.enabling-or-disabling-vs %}

## Información adicional

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
