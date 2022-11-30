---
title: Como usar o GitHub Copilot no GitHub Codespaces
intro: 'Você pode usar o {% data variables.product.prodname_copilot %} em {% data variables.product.prodname_github_codespaces %} adicionando a extensão.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
shortTitle: Copilot in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-codespaces
ms.openlocfilehash: 6615df6930fa8f27dd8f50c4588d8182b8602549
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158722'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

{% webui %}

## Usando {% data variables.product.prodname_copilot %} no cliente Web do {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.copilot-in-vscode %}

{% endwebui %}

{% vscode %}

## Usando o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_vscode %}

{% data reusables.codespaces.copilot-in-vscode %}

{% endvscode %}

{% jetbrains %}

## Instalando {% data variables.product.prodname_copilot %} nos IDEs do JetBrains

O [{% data variables.product.prodname_copilot %}](https://copilot.github.com/), um programador de par de IA, pode ser usado em qualquer codespace. Para obter mais informações, confira "[Sobre o GitHub Copilot](/copilot/overview-of-github-copilot/about-github-copilot)".

Para usar o {% data variables.product.prodname_copilot %} em um codespace no IDE do JetBrains, instale o [plug-in {% data variables.product.prodname_copilot %}](https://plugins.jetbrains.com/plugin/17718-github-copilot) de dentro do seu codespace.

{% note %}

**Observação**: você precisará instalar o plug-in {% data variables.product.prodname_copilot %} sempre que criar um codespace.

{% endnote %}

1. No aplicativo cliente JetBrains, abra a caixa de diálogo Configurações (Windows/Linux) ou Preferências (Mac):

   - **Windows/Linux**: clique em **Arquivo** e em **Configurações** (ou pressione <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>S</kbd>)
   - **Mac**: clique em **Cliente JetBrains** na barra de menus do MacOS e clique em **Preferências** (ou pressione <kbd>command</kbd>+<kbd>,</kbd>)

1. No menu esquerdo da caixa de diálogo Configurações/Preferências, clique em **Plug-ins no Host**. Em seguida, clique na guia **Marketplace**.

   ![Captura de tela da guia Marketplace para 'Plug-ins no Host'](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. Na caixa de pesquisa, digite "copilot" e clique no botão **Instalar** para o plug-in {% data variables.product.prodname_copilot %}.

   ![Captura de tela do plug-in {% data variables.product.prodname_copilot %}](/assets/images/help/codespaces/jetbrains-copilot-plugin.png)

1. Clique em **Aceitar** na caixa de diálogo "Nota de Privacidade de Plug-ins de Terceiros".
1. Clique em **Reiniciar IDE**.

   ![Captura de tela do plug-in {% data variables.product.prodname_copilot %}](/assets/images/help/codespaces/jetbrains-copilot-restart.png)
 
1. Clique em **Reiniciar** quando solicitado a confirmar que você deseja reiniciar o IDE de back-end que está sendo executado remotamente. Quando você fizer isso, o aplicativo cliente JetBrains será fechado.
1. Abra o codespace novamente no aplicativo JetBrains Gateway. Para obter mais informações, confira "[Como usar {% data variables.product.prodname_github_codespaces %} no IDE JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide#opening-a-codespace-in-your-jetbrains-ide)".
1. Depois que o IDE JetBrains for reiniciado, clique no menu **Ferramentas**. Clique em **{% data variables.product.prodname_copilot %}** e clique **Logon no {% data variables.product.prodname_dotcom %}** . 

    ![Captura de tela do menu Ferramentas do JetBrains](/assets/images/help/codespaces/jetbrains-tools-menu.png)

1. Na caixa de diálogo "Entrar no {% data variables.product.prodname_dotcom %}", para copiar o código do dispositivo e abrir a janela de ativação do dispositivo, clique em **Copiar e Abrir**.

    ![Captura de tela da cópia e abertura do código do dispositivo](/assets/images/help/copilot/device-code-copy-and-open.png)

1. Uma janela de ativação do dispositivo será aberta no navegador. Cole o código do dispositivo e clique em **Continuar**.

   - Para colar o código no Windows ou Linux, pressione <kbd>Ctrl</kbd>+<kbd>v</kbd>.
   - Pra colar o código no macOS, pressione <kbd>comando</kbd>+<kbd>v</kbd>.
1. O {% data variables.product.prodname_dotcom %} solicitará as permissões necessárias para o {% data variables.product.prodname_copilot %}. Para aprovar essas permissões, clique em **Autorizar o plug-in do {% data variables.product.prodname_copilot %}** .
1. Depois que as permissões forem aprovadas, o IDE JetBrains mostrará uma confirmação. Para começar a usar o {% data variables.product.prodname_copilot %}, clique em **OK**.

   ![Captura de tela da confirmação de permissões do IDE JetBrains](/assets/images/help/copilot/jetbrains-ide-confirmation.png)

## Leitura adicional

- "[Introdução ao GitHub Copilot em um IDE JetBrains](/copilot/getting-started-with-github-copilot/getting-started-with-github-copilot-in-a-jetbrains-ide)"

{% endjetbrains %}
