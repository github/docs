---
title: Como configurar o GitHub Copilot no Visual Studio Code
intro: 'Você pode habilitar, configurar e desabilitar o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.copilot %}'
versions:
  feature: copilot
shortTitle: Visual Studio Code
topics:
  - Copilot
ms.openlocfilehash: ab043d4eeca2003deaf77aa80be46fc79acf8649
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193187'
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

{% data reusables.copilot.vscode-settings %}
1. No painel esquerdo da guia de configurações, clique em **Extensões** e, em seguida, selecione **{% data variables.product.prodname_copilot_short %}** .
1. Em "Inline Suggest:Enable", marque ou desmarque a caixa de seleção para habilitar ou desabilitar sugestões embutidas.

## Como habilitar ou desabilitar o {% data variables.product.prodname_copilot %} para linguagens específicas

Você pode especificar para quais linguagens deseja habilitar ou desabilitar o {% data variables.product.prodname_copilot %}.

1. No {% data variables.product.prodname_vscode %}, clique na guia **Extensões** e acesse a seção **Copilot**. Para obter mais informações, confira "[Como habilitar e desabilitar sugestões embutidas](#enabling-and-disabling-inline-suggestions)".
1. Em "Habilitar ou desabilitar {% data variables.product.prodname_copilot_short %} para idiomas especificados", clique em **Editar em settings.json**.
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

## Como definir as configurações de proxy para o {% data variables.product.prodname_copilot %}

Você pode configurar o {% data variables.product.prodname_copilot %} para se conectar por meio de um servidor proxy HTTP no {% data variables.product.prodname_vscode %}. {% data variables.product.prodname_copilot %} oferece suporte a configurações básicas de proxy HTTP, com ou sem autenticação básica. 

{% data reusables.copilot.vscode-settings %}
1. No painel esquerdo da guia de configurações, clique em **Aplicativo** e, em seguida, selecione **Proxy**.
1. Na caixa de texto em "Proxy", digite o endereço do servidor proxy, por exemplo `http://localhost:3128`. Como alternativa, o {% data variables.product.prodname_copilot %} usará as variáveis `http_proxy` e `https_proxy` de seu ambiente.

   ![Captura de tela da caixa de texto de proxy do Visual Studio Code](/assets/images/help/copilot/proxy-textbox.png)

1. Opcionalmente, em "Http: Autorização de Proxy", clique em **Editar em settings.json** e adicione o valor necessário para enviar como o cabeçalho `Proxy-Authorization` para cada solicitação de rede.

   ![Captura de tela da caixa de texto de autorização de proxy do Visual Studio Code](/assets/images/help/copilot/proxy-authorization.png)

1. Opcionalmente, em "Http: SSL estrito do Proxy", marque ou desmarque a caixa de seleção para habilitar ou desabilitar o SSL estrito.

   ![Captura de tela da caixa de seleção SSL estrito do proxy Visual Studio Code](/assets/images/help/copilot/proxy-strict-ssl.png)

{% data reusables.copilot.dotcom-settings %}
