---
title: Configuring GitHub Copilot in a JetBrains IDE
intro: 'You can enable, configure, and disable {% data variables.product.prodname_copilot %} in a JetBrains IDE.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
versions:
  feature: copilot
shortTitle: JetBrains
---

## About {% data variables.product.prodname_copilot %} in JetBrains IDEs

If you use a Jetbrains IDE, {% data variables.product.prodname_copilot %} can autocomplete code as you type. After installation, you can enable or disable {% data variables.product.prodname_copilot %}, and you can configure advanced settings within your IDE or on {% data variables.product.prodname_dotcom_the_website %}.

## Prerrequisitos

To configure {% data variables.product.prodname_copilot %} in a JetBrains IDE, you must install the {% data variables.product.prodname_copilot %} plugin. For more information, see "[Getting started with {% data variables.product.prodname_copilot %} in a JetBrains IDE](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)."

## Atajos de teclado para el {% data variables.product.prodname_copilot %}

You can use the default keyboard shortcuts for inline suggestions in your JetBrains IDE when using {% data variables.product.prodname_copilot %}. Alternatively, you can rebind the shortcuts to your preferred keyboard shortcuts for each specific command. For more information on rebinding keyboard shortcuts in your JetBrains IDE, see the JetBrains documentation. For example, you can view the [IntelliJ IDEA](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html#choose-keymap) documentation.

{% mac %}

| Acción                                                                                                   | Atajo                                          |
|:-------------------------------------------------------------------------------------------------------- |:---------------------------------------------- |
| Aceptar una sugerencia en una línea                                                                      | <kbd>Tab</kbd>                                 |
| Descartar una sugerencia dentro de una línea                                                             | <kbd>Esc</kbd>                                 |
| Mostrar la siguiente sugerencia dentro de una línea                                                      | <kbd>Opción(⌥) or Alt</kbd>+<kbd>]</kbd>       |
| Mostrar la sugerencia anterior en la línea                                                               | <kbd>Opción(⌥) or Alt</kbd>+<kbd>[</kbd>       |
| Activar las sugerencias dentro de las líneas                                                             | <kbd>Opción (⌥)</kbd>+<kbd>\</kbd>            |
| Abre el {% data variables.product.prodname_copilot %} (sugerencias adicionales en un panel por separado) | <kbd>Option (⌥) or Alt</kbd>+<kbd>Return</kbd> |

{% endmac %}

{% windows %}

| Acción                                                                                                   | Atajo                           |
|:-------------------------------------------------------------------------------------------------------- |:------------------------------- |
| Aceptar una sugerencia en una línea                                                                      | <kbd>Tab</kbd>                  |
| Descartar una sugerencia dentro de una línea                                                             | <kbd>Esc</kbd>                  |
| Mostrar la siguiente sugerencia dentro de una línea                                                      | <kbd>Alt</kbd>+<kbd>]</kbd>     |
| Mostrar la sugerencia anterior en la línea                                                               | <kbd>Alt</kbd>+<kbd>[</kbd>     |
| Activar las sugerencias dentro de las líneas                                                             | <kbd>Alt</kbd>+<kbd>\</kbd>    |
| Abre el {% data variables.product.prodname_copilot %} (sugerencias adicionales en un panel por separado) | <kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endwindows %}

{% linux %}

| Acción                                                                                                   | Atajo                           |
|:-------------------------------------------------------------------------------------------------------- |:------------------------------- |
| Aceptar una sugerencia en una línea                                                                      | <kbd>Tab</kbd>                  |
| Descartar una sugerencia en la línea                                                                     | <kbd>Esc</kbd>                  |
| Mostrar la siguiente sugerencia dentro de una línea                                                      | <kbd>Alt</kbd>+<kbd>]</kbd>     |
| Mostrar la sugerencia anterior en la línea                                                               | <kbd>Alt</kbd>+<kbd>[</kbd>     |
| Activar las sugerencias dentro de las líneas                                                             | <kbd>Alt</kbd>+<kbd>\</kbd>    |
| Abre el {% data variables.product.prodname_copilot %} (sugerencias adicionales en un panel por separado) | <kbd>Alt</kbd>+<kbd>Enter</kbd> |

{% endlinux %}

## Habilitar o inhabilitar {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} from within your JetBrains IDE. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of the JetBrains window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. Cuando se inhabilita, el icono se resalta. Cuando se inhabilita, el icono se pone gris.

1. Para habilitar o inhabilitar el {% data variables.product.prodname_copilot %}, haz clic en el icono de estado en el panel inferior de la ventana de JetBrains. ![Status icon in JetBrains](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Si estás inhabilitando el {% data variables.product.prodname_copilot %}, se te preguntará si quieres inhabilitarlo globalmente o solo para el lenguaje del archivo que estás editando actualmente. To disable globally, click **Disable Completions**. Alternatively, click the language-specific button to disable {% data variables.product.prodname_copilot %} for the specified language. ![Disable {% data variables.product.prodname_copilot %} globally or for the current language](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)

## Configuring advanced settings for {% data variables.product.prodname_copilot %}

You can manage advanced settings for {% data variables.product.prodname_copilot %} in your JetBrains IDE, such as how your IDE displays code completions, and which languages you want to enable or disable for {% data variables.product.prodname_copilot %}.

1. In your JetBrains IDE, click the **File** menu, then click **Settings**.
1. Under **Languages & Frameworks**, click **{% data variables.product.prodname_copilot %}**.
1. Edit the settings according to your personal preferences.
   - To adjust the behaviour and appearance of code suggestions, and whether to automatically check for updates, select or deselect the corresponding checkboxes.
   - If you have selected to receive automatic updates, you can choose whether to receive stable, but less frequent updates, or nightly updates, which may be less stable. Click the **Update channel** dropdown and select **Stable** for stable updates, or **Nightly** for nightly updates.
   - Under "Disabled languages", use the checkboxes to select or deselect the languages you want to disable {% data variables.product.prodname_copilot %} for.

{% data reusables.copilot.dotcom-settings %}
