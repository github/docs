---
title: Introdução ao GitHub Copilot no Visual Studio
shortTitle: Visual Studio
product: '{% data reusables.gated-features.copilot %}'
intro: 'Saiba como instalar o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vs %},e passar a ver sugestões enquanto escreve comentários e códigos.'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: 65384a5cafae1c739b52847d1a826c0138e91fd9
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193014'
---
{% data reusables.copilot.copilot-cta-button %}

## Sobre o {% data variables.product.prodname_copilot %} e o Visual Studio

{% data reusables.copilot.procedural-intro %}

Usando o {% data variables.product.prodname_vs %}, você pode ver e incorporar sugestões do {% data variables.product.prodname_copilot %} diretamente no editor. Este guia demonstra como usar o {% data variables.product.prodname_copilot %} dentro do {% data variables.product.prodname_vs %} para Windows.

## Pré-requisitos

{% data reusables.copilot.subscription-prerequisite %}

- Para usar o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vs %}, você deverá ter o {% data variables.product.prodname_vs %} 2022 17.2 ou posterior instalado. Para obter mais informações, confira a documentação do [IDE do Visual Studio](https://visualstudio.microsoft.com/vs/).

{% note %}

**Observação**: o {% data variables.product.prodname_copilot %} não está disponível no momento para uso com Visual Studio para Mac.

{% endnote %}

## Como instalar a extensão {% data variables.product.prodname_vs %}

Para usar o {% data variables.product.prodname_copilot %}, você primeiro deve instalar a extensão {% data variables.product.prodname_vs %}.
1. Na barra de ferramentas do Visual Studio, clique em **Extensões** e em **Gerenciar Extensões**.
   ![Captura de tela da barra de ferramentas do Visual Studio](/assets/images/help/copilot/visual-studio-toolbar.png)
1. Na janela "Gerenciar Extensões", clique no **Visual Studio Marketplace**, pesquise a extensão do {% data variables.product.prodname_copilot %} e clique em **Baixar**.
   ![Captura de tela da extensão do GitHub Copilot para Visual Studio com o botão de download enfatizado](/assets/images/help/copilot/install-copilot-extension-visual-studio.png)
1. Feche a janela "Gerenciar Extensões", saia e inicie {% data variables.product.prodname_vs %}.
1. Opcionalmente, para verificar se o {% data variables.product.prodname_copilot %} está instalado e habilitado, volte para **Gerenciar Extensões**, clique em **Instalado** para exibir suas extensões instaladas no momento e clique em **{% data variables.product.prodname_copilot %}** para ver informações de status.
  ![Captura de tela das extensões instaladas no Visual Studio com o GitHub Copilot destacado](/assets/images/help/copilot/installed-copilot-extension-visual-studio.png)
1. Abra ou crie um novo projeto no {% data variables.product.prodname_vs %}. 
1. Na caixa de diálogo "Microsoft {% data variables.product.prodname_vs %}", para copiar o código de ativação do dispositivo, clique em **OK**.
   ![Captura de tela da caixa de diálogo Microsoft {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-auth-dialogue.png)
1. Uma janela de ativação do dispositivo será aberta no navegador. Cole o código do dispositivo e clique em **Continuar**.

   - Para colar o código no Windows ou Linux, pressione <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Pra colar o código no macOS, pressione <kbd>comando</kbd>+<kbd>v</kbd>.
1. O {% data variables.product.prodname_dotcom %} solicitará as permissões necessárias para o {% data variables.product.prodname_copilot %}. Para aprovar essas permissões, clique em **Autorizar o plugin do {% data variables.product.prodname_copilot %}** .
1. Depois de aprovar as permissões, o {% data variables.product.prodname_vs %} mostrará uma confirmação.
   ![Captura de tela da confirmação de permissões do {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-confirmation.png)

## Como ver a primeira sugestão

{% data reusables.copilot.code-examples-limitations %} {% data reusables.copilot.supported-languages %} Os exemplos a seguir estão em C#, mas as outras linguagens funcionarão da mesma forma.

{% data reusables.copilot.create-c-file %}
1. No arquivo #C, digite a seguinte assinatura de função. O {% data variables.product.prodname_copilot %} sugerirá automaticamente um corpo inteiro da função em texto esmaecido, como é mostrado abaixo. A sugestão exata pode variar.
  ```csharp{:copy}
  int CalculateDaysBetweenDates(
  ```
  ![Captura de tela de uma primeira sugestão do Visual Studio Code](/assets/images/help/copilot/first-suggestion-visual-studio.png) {% data reusables.copilot.accept-suggestion %}
 
## Como ver sugestões alternativas
{% data reusables.copilot.alternative-suggestions %} {% data reusables.copilot.create-c-file %}
1. No arquivo #C, digite a seguinte assinatura de função. {% data variables.product.prodname_copilot %} will show you a suggestion.

   ```csharp{:copy}
   int CalculateDaysBetweenDates(
   ```
1. Se sugestões alternativas estiverem disponíveis, você poderá ver essas alternativas pressionando <kbd>Alt</kbd>+<kbd>]</kbd> (ou <kbd>Alt</kbd>+<kbd>[</kbd>).
1. Como opção, você pode focalizar a sugestão para ver a paleta de comandos do {% data variables.product.prodname_copilot %} e escolher sugestões.
{% data reusables.copilot.accept-or-reject-suggestion %}

## Gerar sugestões de código por meio de comentários

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-c-file %}
1. No arquivo C#, digite o comentário a seguir. O {% data variables.product.prodname_copilot %} sugerirá uma implementação da função.
   ```csharp{:copy}
   using System.Xml.Linq;

   var doc = XDocument.Load("index.xhml");
   
   // find all images
   ```
{% data reusables.copilot.accept-suggestion %}


{% data reusables.copilot.enabling-or-disabling-vs %}

## Leitura adicional

- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/)
