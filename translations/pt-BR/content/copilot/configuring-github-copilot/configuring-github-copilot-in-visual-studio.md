---
title: Como configurar o GitHub Copilot no Visual Studio
intro: 'Você pode habilitar, configurar e desabilitar o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vs %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio
topics:
  - Copilot
ms.openlocfilehash: 05ac86405caadf3085b15a2aed9b54acb84f91f1
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193162'
---
## Sobre o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vs %}

Se você usar o {% data variables.product.prodname_vs %}, o {% data variables.product.prodname_copilot %} poderá fazer o preenchimento automático de código conforme você digitar. Após a instalação, você poderá habilitar ou desabilitar o {% data variables.product.prodname_copilot %} e definir configurações avançadas no {% data variables.product.prodname_vs %} ou no {% data variables.product.prodname_dotcom_the_website %}.

## Pré-requisitos

Para configurar o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vs %}, instale o plug-in do {% data variables.product.prodname_copilot %}. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vs %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio)".

## Atalhos de teclado do {% data variables.product.prodname_copilot %}

Você pode usar os atalhos de teclado padrão no {% data variables.product.prodname_vs %} ao usar o {% data variables.product.prodname_copilot %}. Como alternativa, você pode reassociar os atalhos nas configurações de Ferramentas do {% data variables.product.prodname_vs %} usando seus atalhos de teclado preferidos para cada comando específico. Você pode procurar cada atalho de teclado pelo nome do comando no editor de Atalhos de Teclado.

| Ação | Atalho | Nome de comando |
|:---|:---|:---|
|Mostrar a próxima sugestão embutida|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>]</kbd>|Tools.Nextsuggestion|
|Mostrar a sugestão embutida anterior|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>[</kbd>|Tools.Previoussuggestion|
|Disparar a sugestão embutida|<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>\</kbd>|Edit.Copilot.TriggerInlineSuggestion|

## Como reassociar atalhos de teclado

Se você não quiser usar os atalhos de teclado padrão no {% data variables.product.prodname_vs %} ao usar o {% data variables.product.prodname_copilot %}, reassocie os atalhos no editor de teclado usando seus atalhos de teclado preferidos para cada comando específico.

1. Na barra de ferramentas do {% data variables.product.prodname_vs %}, em **Ferramentas**, clique em **Opções**.
   
   ![Captura de tela da opção Opções na barra de ferramentas do {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-toolbar-options.png)

1. Na caixa de diálogo "Opções", em **Ambiente**, clique em **Teclado**.
   
   ![Captura de tela da opção Teclado na caixa de diálogo "Opções"](/assets/images/help/copilot/vs-options-dialogue.png)

1. Em "Mostrar comandos que contêm:", procure o comando que você deseja reassociar.
   
   ![Captura de tela de Mostrar comandos, que contêm a barra de pesquisa](/assets/images/help/copilot/vs-show-commands-containing.png)

1. Em "Pressione as teclas de atalho", digite o atalho que você quer atribuir ao comando e clique em **Atribuir**.

   ![Captura de tela da atribuição de atalho de teclado](/assets/images/help/copilot/vs-rebind-shortcut.png)```

{% data reusables.copilot.enabling-or-disabling-vs %}

## Como configurar o ReSharper para o {% data variables.product.prodname_copilot %}

Se você usar o ReSharper, o {% data variables.product.prodname_copilot %} poderá funcionar melhor se você configurar o ReSharper para usar o IntelliSense nativo do {% data variables.product.prodname_copilot %}. Para obter mais informações sobre o ReSharper, confira a [documentação do ReSharper](https://www.jetbrains.com/resharper/documentation/documentation.html)

1. Na barra de ferramentas do {% data variables.product.prodname_vs %}, em **Ferramentas**, clique em **Opções**.
   ![Captura de tela da opção Opções na barra de ferramentas do {% data variables.product.prodname_vs %}](/assets/images/help/copilot/vs-toolbar-options.png)
1. Na caixa de diálogo "Opções", em **Ambiente**, clique em **IntelliSense** e depois em **Geral**.
    ![Captura de tela da opção IntelliSense na caixa de diálogo "Opções"](/assets/images/help/copilot/vs-options-intellisense.png)
1. Em "Geral", selecione **Visual Studio** e clique em **Salvar**.

{% data reusables.copilot.dotcom-settings %}
