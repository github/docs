---
title: Configurando o GitHub Copilot no Visual Studio
intro: 'Você pode habilitar, configurar e desabilitar {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vs %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio
topics:
  - Copilot
---

## Sobre {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vs %}

Se você usar {% data variables.product.prodname_vs %}, {% data variables.product.prodname_copilot %} pode preencher automaticamente o código conforme você digita. Após a instalação, você pode habilitar ou desabilitar {% data variables.product.prodname_copilot %}, e você pode configurar configurações avançadas dentro de {% data variables.product.prodname_vs %} ou em {% data variables.product.prodname_dotcom_the_website %}.

## Pré-requisitos

Para configurar {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vs %}, você deve instalar o plugin de {% data variables.product.prodname_copilot %}. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vs %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio)".

## Atalhos de teclado para {% data variables.product.prodname_copilot %}

Você pode usar os atalhos de teclado padrão em {% data variables.product.prodname_vs %} quando usar {% data variables.product.prodname_copilot %}. Como alternativa, você pode vincular novamente os atalhos nas configurações das Ferramentas para {% data variables.product.prodname_vs %} usando seus atalhos de teclado preferidos para cada comando específico. Você pode procurar cada atalho de teclado pelo nome de seu comando no editor de atalhos do teclado.

| Ação                             | Atalho                                       | Nome do comando                      |
|:-------------------------------- |:-------------------------------------------- |:------------------------------------ |
| Mostrar próxima sugestão inline  | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>]</kbd>  | Tools.Nextsuggestion                 |
| Mostrar sugestão inline anterior | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>[</kbd>  | Tools.Previoussuggestion             |
| Acionar sugestão inline          | <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>\</kbd> | Edit.Copilot.TriggerInlineSuggestion |

## Vinculando novamente os atalhos de teclado

Se você não quiser usar os atalhos de teclado padrão em {% data variables.product.prodname_vs %} ao usar {% data variables.product.prodname_copilot %}, você pode vincular novamente os atalhos no editor de teclado usando seus atalhos de teclado preferidos para cada comando específico.

1. Na barra de ferramentas de {% data variables.product.prodname_vs %}, em **Ferramentas**, clique em **Opções**. ![Captura de tela da opção Opções na barra de ferramentas de {% data variables.product.prodname_vs %}.](/assets/images/help/copilot/vs-toolbar-options.png)
1. Na caixa de diálogo "Opções", em **Ambiente**, clique em **Teclado**. ![Captura de tela da opção do teclado no diálogo "Opções"](/assets/images/help/copilot/vs-options-dialogue.png)
1. Em "Exibir comandos que contêm:", procure o comando que você deseja vincular novamente. ![Captura de tela de mostrar comandos que contém a barra de pesquisa](/assets/images/help/copilot/vs-show-commands-containing.png)
1. Em "Pressione as teclas de atalho", digite o atalho que você deseja atribuir ao comando e, em seguida, clique em **Atribuir**. ![Captura de tela do atalho de teclado](/assets/images/help/copilot/vs-rebind-shortcut.png)

{% data reusables.copilot.enabling-or-disabling-vs %}

## Configurando o ReSharper para {% data variables.product.prodname_copilot %}

Se você usar o ReSharper, {% data variables.product.prodname_copilot %} pode funcionar melhor quando você configurar o ReSharper para usar o IntelliSense nativo de {% data variables.product.prodname_copilot %}. Para obter mais informações sobre ReSharper, consulte a [documentação do ReSharper](https://www.jetbrains.com/resharper/documentation/documentation.html)

1. Na barra de ferramentas de {% data variables.product.prodname_vs %}, em **Ferramentas**, clique em **Opções**. ![Captura de tela da opção Opções na barra de ferramentas de {% data variables.product.prodname_vs %}.](/assets/images/help/copilot/vs-toolbar-options.png)
1. Na caixa de diálogo "Opções", em **Ambiente**, clique em **IntelliSense** e, em seguida, clique em **Geral**. ![Captura de tela da opção do IntelliSense no diálogo de "Opções"](/assets/images/help/copilot/vs-options-intellisense.png)
1. Em "Geral" selecione **Visual Studio** e, em seguida, clique em **Salvar**.

{% data reusables.copilot.dotcom-settings %}
