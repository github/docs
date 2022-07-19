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

1. In your JetBrains IDE, under the **File** menu for Windows or under the name of your IDE for Mac (for example, **PyCharm** or **IntelliJ**), click **Settings** for Windows or **Preferences** for Mac.
2. In the left-side menu of the **Settings/Preferences** dialog box, click **Plugins**.
3. At the top of the **Settings/Preferences** dialog box, click **Marketplace**. In the search bar, search for **{% data variables.product.prodname_copilot %}**, then click **Install**. ![Captura de tela da pesquisa do Marketplace](/assets/images/help/copilot/jetbrains-marketplace.png)
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
1. Para solicitar que {% data variables.product.prodname_copilot %} para sugira o texto de uma função, digite a seguinte linha abaixo da linha da função `principal`. A sugestão exata pode variar.
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

## Visualizando várias sugestões em uma nova aba

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. Para solicitar que {% data variables.product.prodname_copilot %} moestre uma sugestão, digite a seguinte linha no arquivo Java.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. Abra uma nova aba com várias sugestões adicionais.
    - No macOS, pressione <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd> e, em seguida, clique em **Abrir o GitHub Copilot**, ou pressione <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> para abrir a nova aba imediatamente.
    - No Windows ou Linux, pressione <kbd>Ctrl</kbd>+<kbd>Enter</kbd>, em seguida, clique em **Abrir o GitHub Copilot**. ![Captura de tela do diálogo para abrir o Copilot](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. Para aceitar uma sugestão, acima da sugestão, clique em **Aceitar a solução**. Para rejeitar todas as sugestões, feche a aba.

## Gerando sugestões de código a partir dos comentários

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. Para solicitar que {% data variables.product.prodname_copilot %} sugira uma implementação de uma função no arquivo Java, digite as seguintes linhas.
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Captura de tela da sugestão do texto da função do Java](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## Habilitando e desabilitando {% data variables.product.prodname_copilot %}

Você pode habilitar ou desabilitar {% data variables.product.prodname_copilot %} para todss as linguagens ou para linguagens individuais. O ícone de status {% data variables.product.prodname_copilot %} na parte inferior do painel da sua janela do JetBrains IDE indica se o {% data variables.product.prodname_copilot %} está habilitado ou desabilitado. Quando habilitado, o ícone é destacado. Quando desabilitado, o ícone fica inativo.

1. Para habilitar ou desabilitar {% data variables.product.prodname_copilot %}, clique no ícone de status no painel inferior da janela do JetBrains. ![Captura de tela do ícone de status no IntelliJ IDEA](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Se você estiver desabilitando {% data variables.product.prodname_copilot %}, será perguntado se deseja desativá-lo globalmente ou para a linguagem do arquivo que você está editando atualmente.

   - Para desabilitar as sugestões de {% data variables.product.prodname_copilot %} globalmente, clique em **Desabilitar preenchimentos**.
   - Para desabilitar as sugestões de {% data variables.product.prodname_copilot %} para a linguagem especificada, clique em **Desabilitar os preenchimentos para _LINGUAGEM_**. ![Captura de tela da opção de desabilitar {% data variables.product.prodname_copilot %} globalmente ou para a linguagem atual](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## Leia mais

- [Site do {% data variables.product.prodname_copilot %}](https://copilot.github.com/)
- [Sobre {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
