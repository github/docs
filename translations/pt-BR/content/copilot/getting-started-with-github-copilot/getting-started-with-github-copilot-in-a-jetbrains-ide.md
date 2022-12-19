---
title: Introdução ao GitHub Copilot em um IDE JetBrains
shortTitle: JetBrains IDE
intro: 'Saiba como instalar o {% data variables.product.prodname_copilot %} em um IDE JetBrains e começar a ver sugestões enquanto você escreve comentários e código.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
topics:
  - Copilot
ms.openlocfilehash: f5b90fb18645b69f86e9e45e08ba47e534678ae4
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192775'
---
{% data reusables.copilot.copilot-cta-button %}

## Sobre o {% data variables.product.prodname_copilot %} e IDEs JetBrains

{% data reusables.copilot.procedural-intro %}

Se você usar um IDE JetBrains, poderá exibir e incorporar sugestões do {% data variables.product.prodname_copilot %} diretamente no editor. Este guia demonstra como usar o {% data variables.product.prodname_copilot %} dentro de um IDE JetBrains para macOS, Windows ou Linux.

## Pré-requisitos

{% data reusables.copilot.subscription-prerequisite %}

{% data reusables.copilot.jetbrains-ides %}

## Instalar a extensão do {% data variables.product.prodname_copilot %} no seu IDE JetBrains

Para usar o {% data variables.product.prodname_copilot %} em um IDE JetBrains, você deverá instalar a extensão do {% data variables.product.prodname_copilot %}. O procedimento a seguir guiará você pela instalação do plug-in do {% data variables.product.prodname_copilot %} no IntelliJ IDEA. As etapas para instalar o plug-in em outro IDE com suporte podem ser diferentes.

1. No IDE JetBrains, no menu **Arquivo** do Windows, ou sob o nome do IDE para Mac (por exemplo, **PyCharm** ou **IntelliJ**), clique em **Configurações** para o Windows ou em **Preferências** para o Mac.
2. No menu esquerdo da caixa de diálogo **Configurações/Preferências**, clique em **Plug-ins**.
3. Na parte superior da caixa de diálogo **Configurações/Preferências**, clique em **Marketplace**. Na barra de pesquisa, pesquise **{% data variables.product.prodname_copilot %}** e clique em **Instalar**.
   ![Captura de tela da pesquisa do Marketplace](/assets/images/help/copilot/jetbrains-marketplace.png)
1. Depois que o {% data variables.product.prodname_copilot %} estiver instalado, clique em **Reiniciar IDE**.
1. Depois que o IDE JetBrains for reiniciado, clique no menu **Ferramentas**. Clique em **{% data variables.product.prodname_copilot %}** e clique **Logon no {% data variables.product.prodname_dotcom %}** . 
    ![Captura de tela do menu de ferramentas do JetBrains](/assets/images/help/copilot/jetbrains-tools-menu.png)
1. Na caixa de diálogo "Entrar no {% data variables.product.prodname_dotcom %}", para copiar o código do dispositivo e abrir a janela de ativação do dispositivo, clique em **Copiar e Abrir**.
    ![Captura de tela da cópia e abertura do código do dispositivo](/assets/images/help/copilot/device-code-copy-and-open.png)
1. Uma janela de ativação do dispositivo será aberta no navegador. Cole o código do dispositivo e clique em **Continuar**.

   - Para colar o código no Windows ou Linux, pressione <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Pra colar o código no macOS, pressione <kbd>comando</kbd>+<kbd>v</kbd>.
1. O {% data variables.product.prodname_dotcom %} solicitará as permissões necessárias para o {% data variables.product.prodname_copilot %}. Para aprovar essas permissões, clique em **Autorizar o plug-in do {% data variables.product.prodname_copilot %}** .
1. Depois que as permissões forem aprovadas, o IDE JetBrains mostrará uma confirmação. Para começar a usar o {% data variables.product.prodname_copilot %}, clique em **OK**.
   ![Captura de tela da confirmação de permissões do IDE JetBrains](/assets/images/help/copilot/jetbrains-ide-confirmation.png)
   

## Como ver a primeira sugestão

{% data reusables.copilot.code-examples-limitations %}

{% data reusables.copilot.supported-languages %} Os exemplos a seguir estão em Java, mas outras linguagens funcionarão da mesma forma.

{% data reusables.copilot.create-java-file %}
1. No arquivo Java, crie uma classe digitando `class Test`.
   O {% data variables.product.prodname_copilot %} sugerirá automaticamente um corpo de classe em texto esmaecido, conforme mostrado abaixo. A sugestão exata pode variar.
   ![Captura de tela da sugestão do corpo da classe Java](/assets/images/help/copilot/java-class-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}
1. Para solicitar que o {% data variables.product.prodname_copilot %} sugira um corpo de função, digite a linha a seguir abaixo do colchete da função `main`. A sugestão exata pode variar.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}

   ![Captura de tela da sugestão do corpo da função Java](/assets/images/help/copilot/java-function-body-suggestion-jetbrains.png) {% data reusables.copilot.accept-suggestion %}

O {% data variables.product.prodname_copilot %} tentará fazer a correspondência entre o contexto e o estilo do seu código. Você sempre poderá editar o código sugerido.

## Como ver sugestões alternativas

{% data reusables.copilot.alternative-suggestions %}

{% data reusables.copilot.create-java-file %}
1. Para solicitar que o {% data variables.product.prodname_copilot %} mostre uma sugestão, digite a linha a seguir no arquivo Java.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %} {% data reusables.copilot.see-alternative-suggestions %}

   | Sistema operacional | Ver a próxima sugestão | Ver a sugestão anterior |
   | :- | :- | :- |
   | macOS | <kbd>Opção</kbd>+<kbd>]</kbd> | <kbd>Opção</kbd>+<kbd>[</kbd> |
   | Windows | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
   | Linux | <kbd>Alt</kbd>+<kbd>]</kbd> | <kbd>Alt</kbd>+<kbd>[</kbd> |
{% data reusables.copilot.accept-or-reject-suggestion %}

## Como ver várias sugestões em uma nova guia

{% data reusables.copilot.suggestions-new-tab %}

{% data reusables.copilot.create-java-file %}
1. Para solicitar que o {% data variables.product.prodname_copilot %} mostre uma sugestão, digite a linha a seguir no arquivo Java.
{% indented_data_reference reusables.copilot.java-int-snippet spaces=3 %}
1. Abra uma nova guia com várias sugestões adicionais.
    - No macOS, pressione <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd> e clique em **Abrir o GitHub Copilot** ou pressione <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>\</kbd> para abrir a nova guia imediatamente.
    - No Windows ou Linux, pressione <kbd>Ctrl</kbd>+<kbd>Enter</kbd> e clique em **Abrir o GitHub Copilot**.
  ![Captura de tela do diálogo para abrir o Copilot](/assets/images/help/copilot/open-copilot-tab-jetbrains.png)
1. Para aceitar uma sugestão, acima da sugestão, clique em **Aceitar Solução**. Para rejeitar todas as sugestões, feche a guia.

## Como gerar sugestões de código por meio de comentários

{% data reusables.copilot.generating-suggestions-from-comments %}

{% data reusables.copilot.create-java-file %}
1. Para solicitar que o {% data variables.product.prodname_copilot %} sugira uma implementação de uma função no arquivo Java, digite as linhas a seguir.
    ```java{:copy}
    // find all images without alternate text
    // and give them a red border
    void process () {
    ```
  ![Captura de tela da sugestão do corpo da função Java](/assets/images/help/copilot/comment-suggestion-jetbrains.png)

## Como habilitar e desabilitar o {% data variables.product.prodname_copilot %}

Você pode habilitar ou desabilitar o {% data variables.product.prodname_copilot %} para todas as linguagens ou para linguagens individuais. O ícone de status do {% data variables.product.prodname_copilot %} no painel inferior da janela do IDE JetBrains indica se o {% data variables.product.prodname_copilot %} está habilitado ou desabilitado. Quando habilitado, o ícone fica realçado. Quando desabilitado, o ícone fica esmaecido.

1. Para habilitar ou desabilitar o {% data variables.product.prodname_copilot %}, clique no ícone de status no painel inferior da janela JetBrains.
   ![Captura de tela do ícone de status no IntelliJ IDEA](/assets/images/help/copilot/status-icon-jetbrains.png)
2. Se você estiver desabilitando o {% data variables.product.prodname_copilot %}, será perguntado se deseja desabilitá-lo globalmente ou para a linguagem do arquivo que está editando no momento.

   - Para desabilitar as sugestões do {% data variables.product.prodname_copilot %} globalmente, clique em **Desabilitar Preenchimentos**.
   - Para desabilitar as sugestões do {% data variables.product.prodname_copilot %} para a linguagem especificada, clique em **Desabilitar Preenchimentos para _LINGUAGEM_**.
   ![Captura de tela da opção para desabilitar o {% data variables.product.prodname_copilot %} globalmente ou para a linguagem atual](/assets/images/help/copilot/disable-copilot-global-or-langugage-jetbrains.png)


## Leitura adicional

- [O site do {% data variables.product.prodname_copilot %}](https://copilot.github.com/)
- [Sobre o {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot#about-the-license-for-the-github-copilot-plugin-in-jetbrains-ides)
