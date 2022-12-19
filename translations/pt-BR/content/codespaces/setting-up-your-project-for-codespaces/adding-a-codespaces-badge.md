---
title: Como adicionar uma notificação "Abrir no GitHub Codespaces"
shortTitle: Add a Codespaces badge
intro: 'Você pode adicionar uma notificação em um arquivo markdown do seu repositório, no qual as pessoas podem clicar para criar um codespace.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: c69a815501f5943a56d32af3e58cd7850a69588b
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158778'
---
## Visão geral

Adicionar uma notificação "Abrir em {% data variables.product.prodname_github_codespaces %}" a um arquivo markdown oferece às pessoas uma forma fácil de criar um codespace para seu repositório.

![Captura de tela de uma notificação do Codespaces em uma página README](/assets/images/help/codespaces/codespaces-badge-on-readme.png)

Ao criar uma notificação, você poderá escolher opções de configuração específicas para o codespace que a notificação criará.

Ao clicarem na notificação, as pessoas serão direcionadas à página de opções avançadas para criar o codespace, com as opções escolhidas pré-selecionadas. Para obter mais informações sobre a página de opções avançadas, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)".

Na página de opções avançadas, os usuários podem alterar as configurações pré-selecionadas, se necessário, depois clicar em **Criar codespace**.

## Como criar uma notificação "Abrir em {% data variables.product.prodname_github_codespaces %}"

{% data reusables.repositories.navigate-to-repo %}
1. No nome do repositório, use o menu suspenso "Branch" e selecione o branch para o qual deseja criar a notificação.

   ![Captura de tela do menu suspenso Branch](/assets/images/help/codespaces/branch-drop-down.png)

1. Clique no botão **Código {% octicon "code" aria-label="The code icon" %}** e clique na guia **Codespaces**.

   ![Captura de tela do botão Novo codespace](/assets/images/help/codespaces/new-codespace-button.png)

1. Clique nas reticências ( **...** ) no canto superior direito da guia **Codespaces** e clique em **Novo com opções**.

   ![Captura de tela da opção "Configurar e criar codespace"](/assets/images/help/codespaces/default-machine-type.png)

1. Na página de opções avançadas para criação do codespace, selecione os valores que deseja pré-selecionar em cada campo.

   ![Captura de tela da página de opções avançadas](/assets/images/help/codespaces/advanced-options.png)

1. Copie a URL da barra de endereços do navegador.
1. Adicione o seguinte markdown, por exemplo, ao arquivo `README.md` do repositório:

   ```Markdown{:copy}
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](COPIED-URL)
   ```

   Por exemplo:

   ```Markdown
   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=0000000&machine=premiumLinux&devcontainer_path=.devcontainer%2Fdevcontainer.json&location=WestUs2)
   ```

   No exemplo acima, `0000000` será o número de referência do repositório. Os outros detalhes da URL são determinados pelos valores selecionados nos campos da página de opções avançadas.
