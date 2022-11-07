---
title: Como abrir um codespace existente
intro: Você pode reabrir um codespace que fechou ou parou e retornar ao trabalho.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
ms.openlocfilehash: 37eff72e5384ec5eda55708f7672cfe6832864c1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107992'
---
Você pode reabrir um dos codespaces ativos ou interrompidos no {% data variables.product.prodname_dotcom_the_website %}, no {% data variables.product.prodname_vscode %} ou usando a {% data variables.product.prodname_cli %}. Você não pode reabrir um codespace que foi excluído. Para obter mais informações, confira "[Ciclo de vida dos {% data variables.product.prodname_codespaces %}](/codespaces/developing-in-codespaces/codespaces-lifecycle)".

## Como abrir um codespace existente

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Para abrir um codespace no editor padrão, clique no nome do codespace. {% data reusables.codespaces.about-changing-default-editor %} Para obter mais informações, confira "[Como configurar o editor padrão dos {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".
   
   Para abrir o codespace em um editor diferente do padrão, selecione as reticências ( **...** ) à direita do codespace e clique em **Abrir no APLICATIVO**.

   ![Captura de tela da página "Seus codespaces", com a opção "Abrir no Visual Studio Code" realçada](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

{% endwebui %}

{% vscode %}

{% note %}

**Observação:** {% data reusables.codespaces.using-codespaces-in-vscode %} Para obter mais informações, confira "[Como usar {% data variables.product.prodname_github_codespaces %} no {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)".

{% endnote %}

1. No aplicativo da área de trabalho {% data variables.product.prodname_vscode_shortname %}, abra a Paleta de Comandos com <kbd>Command</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Mac) ou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux).
1. Digite "Codespaces" e selecione um dos comandos a seguir.
   - Para abrir um codespace em uma nova janela do {% data variables.product.prodname_vscode_shortname %}, selecione **Codespaces: Abrir Codespace em Nova Janela**
   - Para abrir um codespace no editor da Web, selecione **Codespaces: Abrir no Navegador**
1. Clique no codespace que deseja alterar.
   
   ![Captura de tela de uma lista de codespaces no Visual Studio Code](/assets/images/help/codespaces/open-codespace-from-vscode.png)

Você também pode acessar os comandos listados acima navegando até a exibição do Gerenciador Remoto no {% data variables.product.prodname_vscode_shortname %} e clicando com o botão direito do mouse no codespace que deseja abrir.

![Captura de tela de um codespace selecionado no Gerenciador Remoto, com a opção "Abrir no Navegador" realçada](/assets/images/help/codespaces/open-codespace-remote-explorer.png)

{% data reusables.codespaces.remote-explorer %} {% endvscode %}

{% cli %}

1. Em um terminal, insira um dos seguintes comandos da {% data variables.product.prodname_cli %}.
   - Para abrir um codespace no {% data variables.product.prodname_vscode_shortname %}, insira:

     ```shell{:copy}
     gh codespace code
     ```

   - Para abrir um codespace no navegador, insira:
  
     ```shell{:copy}
     gh codespace code --web
     ```

1. Usando as teclas de direção, navegue até o codespace que deseja abrir.
1. Para abrir o codespace, pressione <kbd>Enter</kbd>.

Para obter mais informações, confira [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) no manual da {% data variables.product.prodname_cli %}.

{% endcli %}
