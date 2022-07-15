---
title: Introdução ao GitHub Copilot no Visual Studio
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: 'Aprenda a instalar {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vs %} e comece a ver sugestões conforme você escreve comentários e códigos.'
versions:
  feature: copilot
topics:
  - Copilot
---

## Sobre {% data variables.product.prodname_copilot %} e Visual Studio

{% data reusables.copilot.procedural-intro %}

Se você usar {% data variables.product.prodname_vs %}, você pode ver e incorporar sugestões de {% data variables.product.prodname_copilot %} diretamente no editor. Este guia demonstra como usar {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vs %} para Windows.

## Pré-requisitos

Para usar {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vs %}, você deve ter {% data variables.product.prodname_vs %} 2022 17.2 ou superior instalado. Para obter mais informações, consulte a documentação do [Visual Studio IDE](https://visualstudio.microsoft.com/vs/).

{% note %}

**Observação**: {% data variables.product.prodname_copilot %} não está disponível para uso com o Visual Studio para Mac.

{% endnote %}

## Instalando a extensão de {% data variables.product.prodname_vs %}

Para usar {% data variables.product.prodname_copilot %}, é preciso primeiro instalar a extensão de {% data variables.product.prodname_vs %}.
1. Na barra de ferramentas do Visual Studio, clique em **Extensões** e, em seguida, clique em **Gerenciar extensões**. ![Captura de tela da barra de ferramentas do Visual Studio](/assets/images/help/copilot/visual-studio-toolbar.png)
1. Na janela "Gerenciar extensões", clique em ****Marketplace do Visual Studio, pesquise a extensão {% data variables.product.prodname_copilot %} e clique em **Download**. ![Captura de tela da extensão GitHub Copilot para Visual Studio com o botão de download destacado](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. Feche a janela "Gerenciar extensões" e, em seguida, saia e abra novamente {% data variables.product.prodname_vs %}.
1. Opcionalmente, para verificar se {% data variables.product.prodname_copilot %} está instalado e habilitado, volte para **Gerenciar extensões**, clique em **Instalado** para visualizar suas extensões instaladas atualmente e clique em **{% data variables.product.prodname_copilot %}** para ver as informações de status. ![Captura de tela de extensões instaladas no Visual Studio com o GitHub Copiloto destacadi](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. Abra ou crie um novo projeto em {% data variables.product.prodname_vs %}.
1. Na caixa de diálogo "Microsoft {% data variables.product.prodname_vs %}", para copiar o código de ativação do dispositivo, clique **OK**. ![Captura de tela da caixa de diálogo da microsoft de {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-auth-dialogue.png)
1. Uma janela de ativação do dispositivo será aberta no seu navegador. Cole o código do dispositivo e clique em **Continuar**.

   - Para colar o código no Windows ou Linux, pressione <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Para colar o código no macOS, pressione <kbd>command</kbd>+<kbd>v</kbd>.
1. {% data variables.product.prodname_dotcom %} solicitará as permissões necessárias para {% data variables.product.prodname_copilot %}. Para aprovar essas permissões, clique em **Autorizar plugin de {% data variables.product.prodname_copilot %}**.
1. Depois de aprovar as permissões, {% data variables.product.prodname_vs %} mostrará uma confirmação. ![Captura de tela da confirmação de permissões de {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-confirmation.png)

## Vendo sua primeira sugestão
{% data reusables.copilot.supported-languages %} As seguintes amostras estão em C#, mas outras linguagens funcionarão da mesma forma.

{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following function signature. {% data variables.product.prodname_copilot %} sugerirá automaticamente o texto inteiro da função em texto cinza, como mostrado abaixo. A sugestão exata pode variar.
  ```csharp{:copy}
  int CalculateDaysBetweenDates(
  ```
  ![Captura de tela de uma primeira sugestão do Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio.png)
{% data reusables.copilot.accept-suggestion %}

## Vendo sugestões alternativas
{% data reusables.copilot.alternative-suggestions %}
{% data reusables.copilot.create-c-file %}
1. In the C# file, type the following function signature. {% data variables.product.prodname_copilot %} irá mostrar-lhe uma sugestão.

   ```csharp{:copy}
   int CalculateDaysBetweenDates(
   ```
1. Se sugestões alternativas estiverem disponíveis, você poderá vê-las pressionando <kbd>Alt</kbd>+<kbd>]</kbd> (ou <kbd>Alt</kbd>+<kbd>[</kbd>).
1. Opcionalmente, você pode passar o mouse sobre a sugestão para ver a paleta de comando de {% data variables.product.prodname_copilot %} para escolher sugestões.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Gerando sugestões de código a partir dos comentários

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. No arquivo C#, digite o comentário a seguir. {% data variables.product.prodname_copilot %} sugerirá uma implementação da função.
   ```csharp{:copy}
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");

   // find all images
   ```
{% data reusables.copilot.accept-suggestion %}


{% data reusables.copilot.enabling-or-disabling-vs %}

## Leia mais

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
