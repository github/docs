---
title: Primeiros passos com GitHub Copilot em um JetBrains IDE
shortTitle: JetBrains IDE
intro: 'Aprenda a instalar {% data variables.product.prodname_copilot %} em um JetBrains IDE, e comece a ver sugestões conforme você escreve comentários e código.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
---

## Sobre o {% data variables.product.prodname_copilot %} e o JetBrains IDEs

{% data reusables.copilot.procedural-intro %}

Se você usar um JetBrains IDE, você pode ver e incorporar sugestões de {% data variables.product.prodname_copilot %} diretamente dentro do editor. Este guia demonstra como usar {% data variables.product.prodname_copilot %} dentro de um Jetbrains IDE para macOS, Windows ou Linux.

## Pré-requisitos

{% data reusables.copilot.jetbrains-ides %}

## Instalando a extensão de vídeo do JetBrains

Para usar {% data variables.product.prodname_copilot %} em um JetBrains IDE, você deve instalar a extensão de {% data variables.product.prodname_copilot %}. O procedimento a seguir irá guiá-lo na instalação do plugin de {% data variables.product.prodname_copilot %} no IntelliJ IDEA. As etapas para instalar o plugin em outro IDE compatível podem ser diferentes.

1. No seu JetBrains IDE, no menu **Arquivo** clique em **Configurações**.
1. Na parte superior da caixa de diálogo "Configurações", clique em **Marketplace**. Na barra de pesquisa, pesquise **{% data variables.product.prodname_copilot %}** e clique em **Instalar**. ![Captura de tela da pesquisa do Marketplace](/assets/images/help/copilot/jetbrains-marketplace.png)
1. Depois que {% data variables.product.prodname_copilot %} for instalado, clique em **Reiniciar o IDE**.
1. Depois que seu JetBrains IDE tiver sido reiniciado, clique no menu **Ferramentas**. Clique em **{% data variables.product.prodname_copilot %}** e, em seguida, clique em **Efetuar login para {% data variables.product.prodname_dotcom %}**. ![Captura de tela do menu de ferramentas do JetBrains](/assets/images/help/copilot/jetbrains-tools-menu.png)
1. Na caixa de diálogo "Efetuar o login em {% data variables.product.prodname_dotcom %}", para copiar o código do dispositivo e abrir a janela de ativação do dispositivo, clique em **Copiar e abrir**. ![Captura de tela da cópia do código do dispositivo e aberta](/assets/images/help/copilot/device-code-copy-and-open.png)
1. Uma janela de ativação do dispositivo será aberta no seu navegador. Cole o código do dispositivo e clique em **Continuar**.

   - Para colar o código no Windows ou Linux, pressione <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Para colar o código no macOS, pressione <kbd>command</kbd>+<kbd>v</kbd>.
1. {% data variables.product.prodname_dotcom %} solicitará as permissões necessárias para {% data variables.product.prodname_copilot %}. Para aprovar essas permissões, clique em **Autorizar plugin de {% data variables.product.prodname_copilot %}**.
1. Após a aprovação das permissões, seu IDE JetBrains mostrará uma confirmação. Para começar a usar {% data variables.product.prodname_copilot %}, clique em **OK**. ![Captura de tela da confirmação de permissões JetBrains IDE](/assets/images/help/copilot/jetbrains-ide-confirmation.png)


## Vendo sua primeira sugestão

{% data reusables.copilot.supported-languages %} As seguintes amostras estão em Java, mas outras linguagens funcionarão da mesma forma.

{% data reusables.copilot.create-java-file %}
1. No arquivo Java, crie uma classe digitando `class Test`.
   {% data variables.product.prodname_copilot %} sugerirá automaticamente o texto de uma classe em texto cinza, conforme exibido abaixo. A sugestão exata pode variar.
   ![Captura de tela da sugestão do texto da classe do Java](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png)
{% data reusables.copilot.accept-suggestion %}
1. To prompt {% data variables.product.prodname_copilot %} to suggest a function body, type the following line below the bracket of the `main` function. A sugestão exata pode variar.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

   ![Captura de tela da sugestão do texto da função do Java](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png)
{% data reusables.copilot.accept-suggestion %}

{% data variables.product.prodname_copilot %} tentará combinar o contexto e o estilo do seu código. Você sempre pode editar o código sugerido.

## Vendo sugestões alternativas

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. Para solicitar que {% data variables.product.prodname_copilot %} moestre uma sugestão, digite a seguinte linha no arquivo Java.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
{% data reusables.copilot.see-alternative-suggestions %}

   | SO      | Veja a próxima sugestão        | Veja sugestão anterior         |
   |:------- |:------------------------------ |:------------------------------ |
   | macOS   | <kbd>Option</kbd>+<kbd>]</kbd> | <kbd>Option</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd>    | <kbd>Alt</kbd>+<kbd>[</kbd>    |
   | Linux   | <kbd>Alt</kbd>+<kbd>]</kbd>    | <kbd>Alt</kbd>+<kbd>[</kbd>    |
{% data reusables.copilot.accept-or-reject-suggestion %}

## Seeing multiple suggestions in a new tab

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. Para solicitar que {% data variables.product.prodname_copilot %} moestre uma sugestão, digite a seguinte linha no arquivo Java.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. Open a new tab with multiple additional suggestions.
    - On macOS, press <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>, then click **Open GitHub Copilot**, or press <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> to open the new tab immediately.
    - No Windows ou Linux, pressione <kbd>Ctrl</kbd>+<kbd>Enter</kbd>, em seguida, clique em **Abrir o GitHub Copilot**. ![Captura de tela do diálogo para abrir o Copilot](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. To accept a suggestion, above the suggestion, click **Accept Solution**. To reject all suggestions, close the tab.

## Generating code suggestions from comments

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. To prompt {% data variables.product.prodname_copilot %} to suggest an implementation of a function in the Java file, type the following lines.
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Captura de tela da sugestão do texto da função do Java](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## Enabling and disabling {% data variables.product.prodname_copilot %}

You can enable or disable {% data variables.product.prodname_copilot %} for all languages, or for individual languages. The {% data variables.product.prodname_copilot %} status icon in the bottom panel of your JetBrains IDE window indicates whether {% data variables.product.prodname_copilot %} is enabled or disabled. When enabled, the icon is highlighted. When disabled, the icon is grayed out.

1. To enable or disable {% data variables.product.prodname_copilot %}, click the status icon in the bottom panel of the JetBrains window. ![Screenshot of the status icon in IntelliJ IDEA](/assets/images/help/copilot/status-icon-jetbrains.png)
2. If you are disabling {% data variables.product.prodname_copilot %}, you will be asked whether you want to disable it globally, or for the language of the file you are currently editing.

   - To disable suggestions from {% data variables.product.prodname_copilot %} globally, click **Disable Completions**.
   - To disable suggestions from {% data variables.product.prodname_copilot %} for the specified language, click **Disable Completions for _LANGUAGE_**. ![Screenshot of option to disable {% data variables.product.prodname_copilot %} globally or for the current language](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## Leia mais

- [Site do {% data variables.product.prodname_copilot %}](https://copilot.github.com/)
- [{% data variables.product.prodname_copilot %} Licensing Information for JetBrains Plugin](/copilot/overview-of-github-copilot/about-github-copilot#github-copilot-licensing-information-for-jetbrains-plugin)
