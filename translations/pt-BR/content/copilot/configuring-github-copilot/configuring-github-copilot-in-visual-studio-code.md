---
title: Como configurar o GitHub Copilot no Visual Studio Code
intro: 'Você pode habilitar, configurar e desabilitar o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: 0c91f9c11f98669ba6bcbf84113a629ae6d53044
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079485'
---
## Sobre o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vscode %}

Se você usa o {% data variables.product.prodname_vscode %}, o {% data variables.product.prodname_copilot %} pode fazer o preenchimento automático de código conforme você digita. Após a instalação, você poderá habilitar ou desabilitar o {% data variables.product.prodname_copilot %} e definir configurações avançadas no {% data variables.product.prodname_vscode %} ou no {% data variables.product.prodname_dotcom_the_website %}.

## Pré-requisitos

Para configurar o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vscode %}, instale o plug-in do {% data variables.product.prodname_copilot %}. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vscode %}](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-visual-studio-code)".

## Atalhos de teclado do {% data variables.product.prodname_copilot %}

Você pode usar os atalhos de teclado padrão no {% data variables.product.prodname_vscode %} ao usar o {% data variables.product.prodname_copilot %}. Como alternativa, você pode reassociar os atalhos no editor de Atalhos de Teclado usando os atalhos de teclado preferidos de cada comando específico. Você pode procurar cada atalho de teclado pelo nome do comando no editor de Atalhos de Teclado.

{% mac %}

| Ação | Atalho | Nome de comando |
|:---|:---|:---|
|Aceitar uma sugestão embutida|<kbd>Guia</kbd>|editor.action.inlineSuggest.commit|
|Ignorar uma sugestão embutida|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Mostrar a próxima sugestão embutida| <kbd>Opção (⌥)</kbd>+<kbd>]</kbd><br> |editor.action.inlineSuggest.showNext|
|Mostrar a sugestão embutida anterior| <kbd>Opção (⌥)</kbd>+<kbd>[</kbd><br> |editor.action.inlineSuggest.showPrevious|
|Disparar a sugestão embutida| <kbd>Opção (⌥)</kbd>+<kbd>\</kbd><br> |editor.action.inlineSuggest.trigger|
|Abrir o {% data variables.product.prodname_copilot %} (sugestões adicionais no painel separado)|<kbd>Ctrl</kbd>+<kbd>Return</kbd>|github.copilot.generate|
|Ligar e desligar o {% data variables.product.prodname_copilot %}|_Sem atalho padrão_|github.copilot.toggleCopilot|

{% endmac %}

{% windows %}

| Ação | Atalho | Nome de comando |
|:---|:---|:---|
|Aceitar uma sugestão embutida|<kbd>Guia</kbd>|editor.action.inlineSuggest.commit|
|Ignorar uma sugestão embutida|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Mostrar a próxima sugestão embutida|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Mostrar a sugestão embutida anterior|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Disparar a sugestão embutida|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Abrir o {% data variables.product.prodname_copilot %} (sugestões adicionais no painel separado)|<kbd>CTRL</kbd>+<kbd>ENTER</kbd>|github.copilot.generate|
|Ligar e desligar o {% data variables.product.prodname_copilot %}|_Sem atalho padrão_|github.copilot.toggleCopilot|

{% endwindows %}


{% linux %}

| Ação | Atalho | Nome de comando |
|:---|:---|:---|
|Aceitar uma sugestão embutida|<kbd>Guia</kbd>|editor.action.inlineSuggest.commit|
|Ignorar uma sugestão embutida|<kbd>Esc</kbd>|editor.action.inlineSuggest.hide|
|Mostrar a próxima sugestão embutida|<kbd>Alt</kbd>+<kbd>]</kbd> |editor.action.inlineSuggest.showNext|
|Mostrar a sugestão embutida anterior|<kbd>Alt</kbd>+<kbd>[</kbd>|editor.action.inlineSuggest.showPrevious|
|Disparar a sugestão embutida|<kbd>Alt</kbd>+<kbd>\</kbd>|editor.action.inlineSuggest.trigger|
|Abrir o {% data variables.product.prodname_copilot %} (sugestões adicionais no painel separado)|<kbd>CTRL</kbd>+<kbd>ENTER</kbd>|github.copilot.generate|
|Ligar e desligar o {% data variables.product.prodname_copilot %}|_Sem atalho padrão_|github.copilot.toggleCopilot|

{% endlinux %}

## Como reassociar atalhos de teclado

Se você não quiser usar os atalhos de teclado padrão no {% data variables.product.prodname_vscode %} ao usar o {% data variables.product.prodname_copilot %}, reassocie os atalhos no editor de Atalhos de Teclado usando seus atalhos de teclado preferidos de cada comando específico.

1. Clique no menu **Arquivo**, clique em **Preferências** e depois em **Atalhos de Teclado**.
![Captura de tela de atalhos de teclado do Visual Studio Code](/assets/images/help/copilot/vsc-keyboard-shortcuts.png)
1. No editor de "Atalhos de Teclado", procure o nome do comando do atalho de teclado que deseja alterar.
![Captura de tela da barra de pesquisa de Atalho de teclado](/assets/images/help/copilot/vsc-shortcut-search-bar.png)
1. Ao lado do comando que você deseja alterar, clique no ícone de lápis.
![Captura de tela do editor de atalho de teclado](/assets/images/help/copilot/vsc-edit-shortcuts.png)
1. Digite os pressionamentos de tecla que você deseja usar para o comando e pressione <kbd>Enter</kbd>/<kbd>Return</kbd>.
![Captura de tela da caixa de texto Editar atalho de teclado](/assets/images/help/copilot/vsc-edit-shortcuts-textbox.png)

{% data reusables.copilot.enabling-or-disabling-in-vsc %}

## Como habilitar ou desabilitar sugestões embutidas

Você pode habilitar ou desabilitar as sugestões embutidas do {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vscode %}. 

1. No menu **Arquivo**, acesse **Preferências** e clique em **Configurações**.
![Captura de tela das configurações de {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/vsc-settings.png)
1. No painel esquerdo da guia Configurações, clique em **Extensões** e selecione **Copilot**.
1. Em "Inline Suggest:Enable", marque ou desmarque a caixa de seleção para habilitar ou desabilitar sugestões embutidas.

## Como habilitar ou desabilitar o {% data variables.product.prodname_copilot %} para linguagens específicas

Você pode especificar para quais linguagens deseja habilitar ou desabilitar o {% data variables.product.prodname_copilot %}.

1. No {% data variables.product.prodname_vscode %}, clique na guia **Extensões** e acesse a seção **Copilot**. Para obter mais informações, confira "[Como habilitar e desabilitar sugestões embutidas](#enabling-and-disabling-inline-suggestions)".
1. Em "Como habilitar ou desabilitar o Copilot para linguagens especificadas", clique em **Editar no settings.json**.
1. No arquivo _settings.json_, adicione ou remova as linguagens para as quais deseja habilitar ou desabilitar o {% data variables.product.prodname_copilot %}. Por exemplo, para habilitar o Python no {% data variables.product.prodname_copilot %}, adicione `"python": true` à lista, garantindo que haja uma vírgula à direita antes do último item de lista.

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
