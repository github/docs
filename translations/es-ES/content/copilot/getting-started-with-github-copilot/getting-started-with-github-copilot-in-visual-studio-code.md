---
title: "Introducción a GitHub\_Copilot en Visual Studio\_Code"
shortTitle: Visual Studio Code
intro: 'Aprende a instalar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %} y a empezar a ver sugerencias a medida que escribes comentarios y codificas.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: ec117cce02fab8917aef958c69077c521d9c1974
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192773'
---
{% data reusables.copilot.copilot-cta-button %}

## Acerca de {% data variables.product.prodname_copilot %} y {% data variables.product.prodname_vscode %}

{% data reusables.copilot.procedural-intro %}

Si usas {% data variables.product.prodname_vscode %}, puedes ver e incorporar sugerencias de {% data variables.product.prodname_copilot %} directamente en el editor. En esta guía, se muestra cómo usar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %} para macOS, Windows o Linux.

## Prerrequisitos

{% data reusables.copilot.subscription-prerequisite %}

- Para usar {% data variables.product.prodname_copilot %} en {% data variables.product.prodname_vscode %}, debes tener instalado {% data variables.product.prodname_vscode %}. Para más información, consulta la [página de descarga de {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/Download).

## Instalación de la extensión de {% data variables.product.prodname_vscode %}

Para usar {% data variables.product.prodname_copilot %}, primero debes instalar la extensión de {% data variables.product.prodname_vscode %}.

1. En {% data variables.product.prodname_vscode %} Marketplace, ve a la página [Extensión de {% data variables.product.prodname_copilot %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) y haz clic en **Instalar**.
   ![Instalación de la extensión de {% data variables.product.prodname_copilot %} {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. Aparecerá una ventana emergente que te pedirá que abras {% data variables.product.prodname_vscode %}. Haz clic en **Abrir {% data variables.product.prodname_vscode %}** .
1. En la pestaña "Extensión: {% data variables.product.prodname_copilot %}" de {% data variables.product.prodname_vscode %}, haz clic en **Instalar**.
   ![Botón Instalar de {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. Si no autorizaste previamente a {% data variables.product.prodname_vscode %} en tu cuenta de {% data variables.product.prodname_dotcom %}, se te pedirá que inicies sesión en {% data variables.product.prodname_dotcom %} en {% data variables.product.prodname_vscode %}.
   - Si autorizaste previamente a {% data variables.product.prodname_vscode %} para tu cuenta en {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_copilot %} se autorizará automáticamente.
   ![Captura de pantalla de la autorización de {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. En el explorador, {% data variables.product.prodname_dotcom %} solicitará los permisos necesarios para {% data variables.product.prodname_copilot %}. Para aprobar estos permisos, haz clic en **Autorizar {% data variables.product.prodname_vscode %}** .
1. En {% data variables.product.prodname_vscode %}, en el cuadro de diálogo "{% data variables.product.prodname_vscode %}", haz clic en **Abrir** para confirmar la autenticación.
   

## Visualización de tu primera sugerencia

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Los ejemplos siguientes están en JavaScript, pero otros lenguajes funcionarán de manera similar.

{% data reusables.copilot.create-js-file %}
1. En el archivo de JavaScript, escriba el encabezado de función siguiente. {% data variables.product.prodname_copilot %} sugerirá automáticamente un cuerpo de función completo en texto atenuado, como se muestra a continuación. La sugerencia exacta puede variar.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
   ![Captura de pantalla de una primera sugerencia {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png) {% data reusables.copilot.accept-suggestion %}

## Visualización de sugerencias alternativas

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-js-file %}
1. En el archivo de JavaScript, escriba el encabezado de función siguiente. {% data variables.product.prodname_copilot %} mostrará una sugerencia.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
{% data reusables.copilot.see-alternative-suggestions %}

   | SO | Ver la siguiente sugerencia | Ver la sugerencia anterior |
   | :- | :- | :- |
   |macOS|<kbd>Opción (⌥) o Alt</kbd>+<kbd>]</kbd>|<kbd>Opción (⌥) o Alt</kbd>+<kbd>[</kbd>|
   |Windows|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
   |Linux|<kbd>Alt</kbd>+<kbd>]</kbd>|<kbd>Alt</kbd>+<kbd>[</kbd>|
1. De manera alternativa, puedes mantener el puntero sobre la sugerencia para ver la paleta de comandos de {% data variables.product.prodname_copilot %} para elegir sugerencias.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Visualización de varias sugerencias en una pestaña nueva

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-js-file %}
1. En el archivo de JavaScript, escriba el encabezado de función siguiente. {% data variables.product.prodname_copilot %} mostrará una sugerencia.
  ```javascript{:copy}
  function calculateDaysBetweenDates(begin, end) {
  ```
1. Si quieres abrir una pestaña nueva con varias opciones adicionales, presiona <kbd>Ctrl</kbd>+<kbd>Entrar</kbd>.
1. Si quieres aceptar una sugerencia, haz clic en **Aceptar solución** encima de la sugerencia. Si quieres rechazar todas las sugerencias, cierra la pestaña.

## Generación de sugerencias de código a partir de comentarios

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-js-file %}
1. En el archivo de JavaScript, escribe el comentario siguiente. {% data variables.product.prodname_copilot %} sugerirá una implementación de la función.
   ```javascript{:copy}
   // find all images without alternate text
   // and give them a red border
   function process() {
   ```

## Uso de un marco

También puedes usar {% data variables.product.prodname_copilot %} para generar sugerencias para API y marcos. En el ejemplo siguiente, se usa {% data variables.product.prodname_copilot %} para crear un servidor Express sencillo que devuelve la hora actual.

{% data reusables.copilot.create-js-file %}
1. En el archivo de JavaScript, escribe el comentario siguiente y, luego, presiona <kbd>Entrar</kbd>. {% data variables.product.prodname_copilot %} sugerirá una implementación de la aplicación Express.
   ```javascript{:copy}
   // Express server on port 3000
1. To accept each line, press <kbd>Tab</kbd>, then <kbd>Enter</kbd>.
1. Type the following comment and then press <kbd>Enter</kbd>. {% data variables.product.prodname_copilot %} will suggest an implementation for the default handler. 
   ```javascript{:copy}
   // Return the current time
   ```
1. Para aceptar cada línea, presiona <kbd>Tab</kbd>.

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Información adicional

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
