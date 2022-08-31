---
title: Configurando o GitHub Copilot no Visual Studio Code
intro: 'Você pode habilitar, configurar e desabilitar {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
---

## Sobre {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vscode %}

Se você usar {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_copilot %} pode preencher automaticamente o código conforme você digita. Após a instalação, você pode habilitar ou desabilitar {% data variables.product.prodname_copilot %}, e você pode definir as configurações avançadas dentro de {% data variables.product.prodname_vscode %} ou em {% data variables.product.prodname_dotcom_the_website %}.

## Pré-requisitos

Para configurar {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vscode %}, você deve instalar o plugin {% data variables.product.prodname_copilot %}. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vscode %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code)".

## Atalhos de teclado para {% data variables.product.prodname_copilot %}

Você pode usar os atalhos de teclado padrão em {% data variables.product.prodname_vscode %} quando usar {% data variables.product.prodname_copilot %}. Como alternativa, você pode vincular novamente os atalhos no editor de atalhos do teclado usando seus atalhos preferidos para cada comando específico. Você pode pesquisar cada atalho de teclado pelo nome de comando no editor de atalhos do teclado.

{% mac %}

| Ação                                                                                          | Atalho                                        | Nome do comando                          |
|:--------------------------------------------------------------------------------------------- |:--------------------------------------------- |:---------------------------------------- |
| Aceite uma sugestão inline                                                                    | <kbd>Tab</kbd>                                | editor.action.inlineSuggest.commit       |
| Ignorar uma sugestão inline                                                                   | <kbd>Esc</kbd>                                | editor.action.inlineSuggest.hide         |
| Mostrar próxima sugestão inline                                                               | <kbd>Option (⌥)</kbd>+<kbd>]</kbd><br>  | editor.action.inlineSuggest.showNext     |
| Mostrar sugestão inline anterior                                                              | <kbd>Option (⌥)</kbd>+<kbd>[</kbd><br>  | editor.action.inlineSuggest.showPrevious |
| Acionar sugestão inline                                                                       | <kbd>Option (⌥)</kbd>+<kbd>\</kbd><br> | editor.action.inlineSuggest.trigger      |
| Abrir {% data variables.product.prodname_copilot %} (sugestões adicionais em painel separado) | <kbd>Ctrl</kbd>+<kbd>Return</kbd>             | github.copilot.generate                  |
| Ativar/desativar {% data variables.product.prodname_copilot %}                                | _Sem atalho padrão_                           | github.copilot.toggleCopilot             |

{% endmac %}

{% windows %}

| Ação                                                                                          | Atalho                           | Nome do comando                          |
|:--------------------------------------------------------------------------------------------- |:-------------------------------- |:---------------------------------------- |
| Aceite uma sugestão inline                                                                    | <kbd>Tab</kbd>                   | editor.action.inlineSuggest.commit       |
| Ignorar uma sugestão inline                                                                   | <kbd>Esc</kbd>                   | editor.action.inlineSuggest.hide         |
| Mostrar próxima sugestão inline                                                               | <kbd>Alt</kbd>+<kbd>]</kbd>      | editor.action.inlineSuggest.showNext     |
| Mostrar sugestão inline anterior                                                              | <kbd>Alt</kbd>+<kbd>[</kbd>      | editor.action.inlineSuggest.showPrevious |
| Acionar sugestão inline                                                                       | <kbd>Alt</kbd>+<kbd>\</kbd>     | editor.action.inlineSuggest.trigger      |
| Abrir {% data variables.product.prodname_copilot %} (sugestões adicionais em painel separado) | <kbd>Ctrl</kbd>+<kbd>Enter</kbd> | github.copilot.generate                  |
| Ativar/desativar {% data variables.product.prodname_copilot %}                                | _Sem atalho padrão_              | github.copilot.toggleCopilot             |

{% endwindows %}


{% linux %}

| Ação                                                                                          | Atalho                           | Nome do comando                          |
|:--------------------------------------------------------------------------------------------- |:-------------------------------- |:---------------------------------------- |
| Aceite uma sugestão inline                                                                    | <kbd>Tab</kbd>                   | editor.action.inlineSuggest.commit       |
| Ignorar uma sugestão inline                                                                   | <kbd>Esc</kbd>                   | editor.action.inlineSuggest.hide         |
| Mostrar próxima sugestão inline                                                               | <kbd>Alt</kbd>+<kbd>]</kbd>      | editor.action.inlineSuggest.showNext     |
| Mostrar sugestão inline anterior                                                              | <kbd>Alt</kbd>+<kbd>[</kbd>      | editor.action.inlineSuggest.showPrevious |
| Acionar sugestão inline                                                                       | <kbd>Alt</kbd>+<kbd>\</kbd>     | editor.action.inlineSuggest.trigger      |
| Abrir {% data variables.product.prodname_copilot %} (sugestões adicionais em painel separado) | <kbd>Ctrl</kbd>+<kbd>Enter</kbd> | github.copilot.generate                  |
| Ativar/desativar {% data variables.product.prodname_copilot %}                                | _Sem atalho padrão_              | github.copilot.toggleCopilot             |

{% endlinux %}

## Vinculando novamente os atalhos de teclado

Se você não quiser usar os atalhos de teclado padrão em {% data variables.product.prodname_vscode %} quando usar {% data variables.product.prodname_copilot %}, você poderá vincular novamente os atalhos no editor de atalhos do teclado usando seus atalhos de teclado preferidos para cada comando específico.

1. Clique no menu **Arquivo**, clique em **Preferências** e, em seguida, clique **Atalhos do teclado**. ![Captura de tela dos atalhos de teclado do Visual Studio Code](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)
1. No editor "Atalhos de teclado", procure o nome do comando do atalho de teclado que você deseja alterar. ![Captura de tela da barra de pesquisa de atalhos do teclado](/assets/images/help/copilot/vsc-shortcut-search-bar.png)
1. Ao lado do comando que você deseja alterar, clique no ícone do lápis. ![Screenshot do editor de atalhos do teclado](/assets/images/help/copilot/vsc-edit-shortcuts.png)
1. Digite os traços de tecla que você quer usar para o comando e, em seguida, pressione <kbd>Enter</kbd>/<kbd>Return</kbd>. ![Captura de tela da caixa de texto Editar do atalho de teclado](/assets/images/help/copilot/vsc-edit-shortcuts-textbox.png)

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Habilitando ou desabilitando sugestões inline

Você pode optar por habilitar ou desabilitar sugestões inline para {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_vscode %}.

1. No menu **Arquivo**, acesse para **Preferências** e clique em **Configurações**. ![Captura de tela das configurações de {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-settings.png)
1. No painel do lado esquerdo da guia de configurações, clique em **Extensões** e, em seguida, selecione **Copilot**.
1. Em "Inline Suggest:Enable", selecione ou desmarque a caixa de seleção para habilitar ou desabilitar sugestões inline.

## Habilitando ou desabilitando {% data variables.product.prodname_copilot %} para linguagens específicas

Você pode especificar para quais linguagens você deseja habilitar ou desabilitar {% data variables.product.prodname_copilot %}.

1. A partir do {% data variables.product.prodname_vscode %}, clique na guia **Extensões** e, em seguida, acesse a seção **Copilot**. Para obter mais informações, consulte "[Habilitando e desabilitando sugestões inline](#enabling-and-disabling-inline-suggestions)".
1. Em "Habilitar ou desabilitar o Copilot para linguagens especificadas", clique em **Editar em settings.json**.
1. No arquivo _settings.json_, adicione ou remova as linguagens para as quais você deseja habilitar ou desabilitar {% data variables.product.prodname_copilot %}. Por exemplo, para habilitar o Python em {% data variables.product.prodname_copilot %}, adicione `"python": verdadeiro` à lista, garantindo que haja uma vírgula depois de tudo menos o último item da lista.

    ```json
    {
        "editor.inlineSuggest.enabled": true,
        "github.copilot.enable": {
            "*": true,
            "yaml": false,
            "plaintext": false,
            "markdown": true,
            "javascript": true,
            "python": true
        }
    }
    ```

{% data reusables.copilot.dotcom-settings %}
