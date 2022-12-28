---
title: Como abrir um codespace existente
intro: Você pode reabrir um codespace que fechou ou parou e retornar ao trabalho.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Open an existing codespace
ms.openlocfilehash: b139b7f4e8a696416c97b3c400d09a9f26371b9c
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188293'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

Você pode reabrir um dos codespaces ativos ou interrompidos no {% data variables.product.prodname_dotcom_the_website %} em um IDE JetBrains, no {% data variables.product.prodname_vscode %} ou usando a {% data variables.product.prodname_cli %}. Você não pode reabrir um codespace que foi excluído. Para obter mais informações, confira "[O ciclo de vida do codespace](/codespaces/getting-started/the-codespace-lifecycle)".

Você pode exibir todos os seus codespaces na página "Seus codespaces" em [github.com/codespaces](https://github.com/codespaces). Nesta página, você pode:

- Abra, interrompa ou exclua seus codespaces.
- Veja quem possui (e pode ser cobrado por) seus codespaces: sua conta pessoal ou organizações às quais você pertence. Para obter mais informações, confira "[Sobre a cobrança do {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)".
- Crie um codespace escolhendo um dos modelos de {% data variables.product.company_short %} ou clicando em **Novo codespace**. Para obter mais informações, confira "[Como criar um codespace com base em um modelo](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)" e "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".

## Como abrir um codespace existente

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Para abrir um codespace no editor padrão, clique no nome do codespace. {% data reusables.codespaces.about-changing-default-editor %} Para obter mais informações, confira "[Como configurar o editor padrão dos {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".
   
   Para abrir o codespace em um editor diferente do padrão:
   
   1. Clique nas reticências ( **…** ) à direita do codespace que você deseja abrir.
   1. Clique em **Abrir em**.
   1. Clique em **Abrir no APLICATIVO**.

   ![Captura de tela da página "Abrir em", com a opção "Abrir no Visual Studio Code" realçada](/assets/images/help/codespaces/open-codespace-in-another-editor.png)

   Você pode abrir o codespace no:
   * Seu navegador
   * {% data variables.product.prodname_vscode %}
   * JetBrains Gateway
   * JupyterLab

   {% data reusables.codespaces.application-installed-locally %}

   Se você escolher **JupyterLab**, o aplicativo JupyterLab deverá ser instalado no codespace. {% data reusables.codespaces.jupyterlab-in-default-image %}

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
     
     {% note %}

     **Observação**: é necessário ter o {% data variables.product.prodname_vscode_shortname %} instalado no computador local. Para obter mais informações, confira "[Como configurar o Visual Studio Code](https://code.visualstudio.com/docs/setup/setup-overview)" na documentação do {% data variables.product.prodname_vscode_shortname %}.

     {% endnote %}
     
   - Para abrir um codespace no navegador, insira:
  
     ```shell{:copy}
     gh codespace code --web
     ```

   - Para abrir um codespace no JupyterLab, insira:
  
     ```shell{:copy}
     gh codespace code --jupyter
     ```
     
     {% note %}

     **Observação**: {% data reusables.codespaces.jupyterlab-installed-in-codespace %}

     {% endnote %}
     
1. Usando as teclas de direção, navegue até o codespace que deseja abrir.
1. Para abrir o codespace, pressione <kbd>Enter</kbd>.

Para obter mais informações, confira [`gh codespace code`](https://cli.github.com/manual/gh_codespace_code) no manual da {% data variables.product.prodname_cli %}.

{% endcli %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}
