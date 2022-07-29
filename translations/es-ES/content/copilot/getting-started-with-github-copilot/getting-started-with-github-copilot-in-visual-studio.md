---
title: Getting started with GitHub Copilot in Visual Studio
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: 'Learn how to install {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}, and start seeing suggestions as you write comments and code.'
versions:
  feature: copilot
topics:
  - Copilot
---

## About {% data variables.product.prodname_copilot %} and Visual Studio

{% data reusables.copilot.procedural-intro %}

If you use {% data variables.product.prodname_vs %}, you can view and incorporate suggestions from {% data variables.product.prodname_copilot %} directly within the editor. This guide demonstrates how to use {% data variables.product.prodname_copilot %} within {% data variables.product.prodname_vs %} for Windows.

## Prerrequisitos

To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vs %}, you must have {% data variables.product.prodname_vs %} 2022 17.2 or later installed. For more information, see the [Visual Studio IDE](https://visualstudio.microsoft.com/vs/) documentation.

{% note %}

**Note**: {% data variables.product.prodname_copilot %} is not currently available for use with Visual Studio for Mac.

{% endnote %}

## Installing the {% data variables.product.prodname_vs %} extension

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_vs %} extension.
1. In the Visual Studio toolbar, click **Extensions**, then click **Manage Extensions**. ![Screenshot of the Visual Studio toolbar](/assets/images/help/copilot/visual-studio-toolbar.png)
1. In the "Manage Extensions" window, click **Visual Studio Marketplace**, search for the {% data variables.product.prodname_copilot %} extension, then click **Download**. ![Screenshot of GitHub Copilot extension for Visual Studio with the download button emphasized](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. Close the "Manage Extensions" window, then exit and relaunch {% data variables.product.prodname_vs %}.
1. Opcionalmente, para verificar que el {% data variables.product.prodname_copilot %} se instale y habilite, regresa a **Administrar extensiones**, haz clic en **Instaladas** para ver las extensiones que tienes instaladas actualmente y luego haz clic en **{% data variables.product.prodname_copilot %}** para ver la información de estado. ![Screenshot of installed extensions in Visual Studio with GitHub Copilot emphasized](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. Open or create a new project in {% data variables.product.prodname_vs %}.
1. In the "Microsoft {% data variables.product.prodname_vs %}" dialog box, to copy your device activation code, click **OK**. ![Screenshot of the Microsoft {% data variables.product.prodname_vs %} dialogue box](/assets/images/help/copilot/vs-auth-dialogue.png)
1. Una ventana de activación de dispositivo se abrirá en un buscador. Pega el código de dispositivo y luego haz clic en **Continuar**.

   - Para pegar el código en Windows o en Linux, presiona <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Para pegar el código en macOS, presiona <kbd>command</kbd>+<kbd>v</kbd>.
1. {% data variables.product.prodname_dotcom %} solicitará los permisos necesarios para el {% data variables.product.prodname_copilot %}. Para aprobar estos permisos, haz clic en **Autorizar el plugin del {% data variables.product.prodname_copilot %}**.
1. After you approve the permissions, {% data variables.product.prodname_vs %} will show a confirmation. ![Screenshot of {% data variables.product.prodname_vs %} permissions confirmation](/assets/images/help/copilot/vs-confirmation.png)

## Ver tu primera sugerencia
{% data reusables.copilot.supported-languages %} The following samples are in C#, but other languages will work similarly.

{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following function signature. {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text, as shown below. La sugerencia exacta podría variar.
  ```csharp{:copy}
  int CalculateDaysBetweenDates(
  ```
  ![Screenshot of a first suggestion Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio.png)
{% data reusables.copilot.accept-suggestion %}

## Ver sugerencias alternativas
{% data reusables.copilot.alternative-suggestions %}
{% data reusables.copilot.create-c-file %}
1. En el archivo de C#, escribe la siguiente firma de función. {% data variables.product.prodname_copilot %} will show you a suggestion.

   ```csharp{:copy}
   int CalculateDaysBetweenDates(
   ```
1. If alternative suggestions are available, you can see these alternatives by pressing <kbd>Alt</kbd>+<kbd>]</kbd> (or <kbd>Alt</kbd>+<kbd>[</kbd>).
1. Optionally, you can hover over the suggestion to see the {% data variables.product.prodname_copilot %} command palette for choosing suggestions.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Generar sugerencias de código desde los comentarios

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following comment. {% data variables.product.prodname_copilot %} will suggest an implementation of the function.
   ```csharp{:copy}
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");

   // find all images
   ```
{% data reusables.copilot.accept-suggestion %}


{% data reusables.copilot.enabling-or-disabling-vs %}

## Leer más

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
