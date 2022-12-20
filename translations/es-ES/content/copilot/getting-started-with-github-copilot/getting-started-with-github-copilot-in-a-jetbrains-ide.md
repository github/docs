---
title: Introducción a GitHub Copilot en IDE de JetBrains
shortTitle: JetBrains IDE
intro: 'Obtén información sobre cómo instalar {% data variables.product.prodname_copilot %} en IDE de JetBrains y empezar a ver sugerencias a medida que escribes comentarios y código.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: f5b90fb18645b69f86e9e45e08ba47e534678ae4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192789'
---
{% data reusables.copilot.copilot-cta-button %}

## Acerca de {% data variables.product.prodname_copilot %} en IDE de JetBrains

{% data reusables.copilot.procedural-intro %}

Si usas IDE de JetBrains, puedes ver e incorporar sugerencias de {% data variables.product.prodname_copilot %} directamente en el editor. En esta guía se muestra cómo usar {% data variables.product.prodname_copilot %} en un IDE de JetBrains para macOS, Windows o Linux.

## Requisitos previos

{% data reusables.copilot.subscription-prerequisite %}

{% data reusables.copilot.jetbrains-ides %}

## Instalación de la extensión {% data variables.product.prodname_copilot %} en el IDE de JetBrains

Para usar {% data variables.product.prodname_copilot %} en un IDE de JetBrains, hay que instalar la extensión {% data variables.product.prodname_copilot %}. El siguiente procedimiento te guiará a través de la instalación del complemento {% data variables.product.prodname_copilot %} en IntelliJ IDEA. Los pasos para instalar el complemento en otro IDE compatible pueden diferir.

1. En el IDE de JetBrains, en el menú **Archivo** para Windows o bajo el nombre del IDE para Mac (por ejemplo, **PyCharm** o **IntelliJ**), haz clic en **Configuración** para Windows o **Preferencias** para Mac.
2. En el menú izquierdo del cuadro de diálogo **Configuración/Preferencias**, haz clic en **Complementos**.
3. En la parte superior del cuadro de diálogo **Configuración/Preferencias**, haz clic en **Marketplace**. En la barra de búsqueda, busca **{% data variables.product.prodname_copilot %}** y haz clic en **Instalar**.
   ![Captura de pantalla de la búsqueda de Marketplace](/assets/images/help/copilot/jetbrains-marketplace.png)
1. Después de instalar {% data variables.product.prodname_copilot %}, haz clic en **Reiniciar IDE**.
1. Una vez reiniciado el IDE de JetBrains, haz clic en el menú **Herramientas**. Haz clic en **{% data variables.product.prodname_copilot %}** y, a continuación, haz clic en **Iniciar sesión en {% data variables.product.prodname_dotcom %}** . 
    ![Captura de pantalla del menú de herramientas de JetBrains](/assets/images/help/copilot/jetbrains-tools-menu.png)
1. En el cuadro de diálogo "Iniciar sesión en {% data variables.product.prodname_dotcom %}", para copiar el código del dispositivo y abrir la ventana de activación del dispositivo, haz clic en **Copiar y abrir**.
    ![Captura de pantalla de la copia y apertura del código del dispositivo](/assets/images/help/copilot/device-code-copy-and-open.png)
1. Se abrirá una ventana de activación del dispositivo en el explorador. Pega el código del dispositivo y haz clic en **Continuar**.

   - Para pegar el código en Windows o Linux, presiona <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Para pegar el código en macOS, presiona <kbd>command</kbd>+<kbd>v</kbd>.
1. {% data variables.product.prodname_dotcom %} solicitará los permisos necesarios para {% data variables.product.prodname_copilot %}. Para aprobar estos permisos, haz clic en **Autorizar complemento {% data variables.product.prodname_copilot %}** .
1. Una vez aprobados los permisos, el IDE de JetBrains mostrará una confirmación. Para empezar a usar {% data variables.product.prodname_copilot %}, haz clic en **Aceptar**.
   ![Captura de pantalla de la confirmación de permisos del IDE de JetBrains](/assets/images/help/copilot/jetbrains-ide-confirmation.png)
   

## Visualización de tu primera sugerencia

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Los ejemplos siguientes están en Java, pero otros lenguajes funcionarán de forma similar.

{% data reusables.copilot.create-java-file %}
1. En el archivo Java, crea una clase escribiendo `class Test`.
   {% data variables.product.prodname_copilot %} sugerirá automáticamente un cuerpo de clase en texto atenuado, como se muestra a continuación. La sugerencia exacta puede variar.
   ![Captura de pantalla de la sugerencia del cuerpo de la clase Java](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}
1. Para pedir a {% data variables.product.prodname_copilot %} que sugiera un cuerpo de función, escriba la siguiente línea debajo del corchete de la función `main`. La sugerencia exacta puede variar.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

   ![Captura de pantalla de la sugerencia del cuerpo de la función de Java](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} intentará coincidir con el contexto y el estilo del código. Siempre puede editar el código sugerido.

## Visualización de sugerencias alternativas

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. Para solicitar {% data variables.product.prodname_copilot %} para mostrar una sugerencia, escriba la siguiente línea en el archivo Java.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %} {% data reusables.copilot.see-alternative-suggestions %}

   | SO | Ver la siguiente sugerencia | Ver la sugerencia anterior |
   | :- | :- | :- |
   | macOS | <kbd>Opción</kbd>+<kbd>]</kbd> | <kbd>Opción</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
   | Linux | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
{% data reusables.copilot.accept-or-reject-suggestion %}

## Visualización de varias sugerencias en una pestaña nueva

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. Para solicitar que {% data variables.product.prodname_copilot %} muestre una sugerencia, escribe la siguiente línea en el archivo Java.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. Abre una nueva pestaña con varias sugerencias adicionales.
    - En macOS, presiona <kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>A</kbd> y, a continuación, haz clic en **Abrir GitHub Copilot** o presiona <kbd>Comando</kbd>+<kbd>Mayús</kbd>+<kbd>\</kbd> para abrir la nueva pestaña inmediatamente.
    - En Windows o Linux, presiona <kbd>Ctrl</kbd>+<kbd>Entrar</kbd> y haz clic en **Abrir GitHub Copilot**.
  ![Captura de pantalla del diálogo para abrir Copilot](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. Para aceptar una sugerencia, encima de la sugerencia, haz clic en **Aceptar solución**. Si quieres rechazar todas las sugerencias, cierra la pestaña.

## Generación de sugerencias de código a partir de comentarios

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. Para solicitar que {% data variables.product.prodname_copilot %} sugiera una implementación de una función en el archivo de Java, escribe las líneas siguientes.
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Captura de pantalla de la sugerencia del cuerpo de la función de Java](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## Habilitación y deshabilitación de {% data variables.product.prodname_copilot %}

Puedes habilitar o deshabilitar {% data variables.product.prodname_copilot %} para todos los lenguajes o para lenguajes individuales. El icono de estado de {% data variables.product.prodname_copilot %} en el panel inferior de la ventana del IDE de JetBrains indica si {% data variables.product.prodname_copilot %} está habilitado o deshabilitado. Cuando está habilitado, el icono está resaltado. Cuando está deshabilitado, el icono está atenuado.

1. Para habilitar o deshabilitar {% data variables.product.prodname_copilot %}, haz clic en el icono de estado en el panel inferior de la ventana JetBrains.
   ![Captura de pantalla del icono de estado en IntelliJ IDEA](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Si deshabilitas {% data variables.product.prodname_copilot %}, se te preguntará si quieres deshabilitarlo de forma global o para el lenguaje del archivo que estás editando actualmente.

   - Para deshabilitar las sugerencias de {% data variables.product.prodname_copilot %} de forma global, haz clic en **Deshabilitar finalizaciones**.
   - Para deshabilitar las sugerencias de {% data variables.product.prodname_copilot %} para el lenguaje especificado, haz clic en **Deshabilitar para _LENGUAEE_**.
   ![Captura de pantalla de la opción para deshabilitar {% data variables.product.prodname_copilot %} de forma global o para el lenguaje actual](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## Información adicional

- [Sitio web de {% data variables.product.prodname_copilot %}](https://copilot.github.com/)
- [Acerca de {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
