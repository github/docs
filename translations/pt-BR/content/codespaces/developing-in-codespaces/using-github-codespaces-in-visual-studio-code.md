---
title: Como usar o GitHub Codespaces no Visual Studio Code
shortTitle: Visual Studio Code
intro: 'Você pode desenvolver seu codespace diretamente no {% data variables.product.prodname_vscode %} ao conectar a extensão do {% data variables.product.prodname_github_codespaces %} à sua conta no {% data variables.product.product_name %}.'
redirect_from:
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
  - /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
  - /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
  - /codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Visual Studio Code
  - Developer
ms.openlocfilehash: c651620e2795fb29f2b995f745ad3880e99c0f4e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159314'
---
## Sobre o {% data variables.product.prodname_github_codespaces %} no {% data variables.product.prodname_vscode %}

Você pode usar sua instalação local de {% data variables.product.prodname_vscode %} para criar, gerenciar, trabalhar e excluir codespaces. {% data reusables.codespaces.using-codespaces-in-vscode %} Para obter mais informações sobre como configurar os {% data variables.product.prodname_github_codespaces %} no {% data variables.product.prodname_vscode_shortname %}, confira "[Pré-requisitos](#prerequisites)".

Por padrão, se você criar um novo codespace em {% data variables.product.prodname_dotcom_the_website %}, ele será aberto no navegador. Se você preferir abrir qualquer codespace novo no {% data variables.product.prodname_vscode_shortname %} automaticamente, poderá definir seu editor padrão como {% data variables.product.prodname_vscode_shortname %}. Para obter mais informações, confira "[Como configurar o editor padrão do {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".

Se preferir trabalhar no navegador, mas quiser continuar usando as extensões, os temas e os atalhos do {% data variables.product.prodname_vscode_shortname %}, ative a Sincronização de Configurações. Para obter mais informações, confira "[Como personalizar o {% data variables.product.prodname_github_codespaces %} para sua conta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)".

## Pré-requisitos

Para desenvolver em um codespace diretamente no {% data variables.product.prodname_vscode_shortname %}, você deverá instalar e efetuar o login na extensão dos {% data variables.product.prodname_github_codespaces %} com as suas credenciais do {% data variables.product.product_name %}. A extensão dos {% data variables.product.prodname_github_codespaces %} exige a versão de outubro de 2020 1.51 ou posterior do {% data variables.product.prodname_vscode_shortname %}.

Use o {% data variables.product.prodname_vscode_marketplace %} para instalar a extensão dos [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Para obter mais informações, confira o [Marketplace de Extensões](https://code.visualstudio.com/docs/editor/extension-gallery) na documentação do {% data variables.product.prodname_vscode_shortname %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Clique em **Entrar no {% data variables.product.prodname_dotcom %}...** .

   ![Como entrar nos {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. Para autorizar o {% data variables.product.prodname_vscode_shortname %} a acessar sua conta no {% data variables.product.product_name %}, clique em **Permitir**.
3. Registre-se e, {% data variables.product.product_name %} para aprovar a extensão.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Use o menu suspenso "GERENCIADOR REMOTO" e clique em **{% data variables.product.prodname_github_codespaces %}** .

   ![Sobre o cabeçalho dos {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Clique em **Entrar para ver os {% data variables.product.prodname_codespaces %}** .

   ![Como entrar para ver os {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. Para autorizar o {% data variables.product.prodname_vscode_shortname %} a acessar sua conta no {% data variables.product.product_name %}, clique em **Permitir**.
1. Registre-se e, {% data variables.product.product_name %} para aprovar a extensão.

{% endwindows %}

## Criar um codespace no {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## Abrir um codespace no {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Em "Codedespaces", clique no código que você deseja desenvolver.
1. Clique no ícone Conectar-se ao Codespace.

   ![O ícone de Conectar a um Codespace no {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## Alterar o tipo da máquina no {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} Você pode alterar o tipo de computador do seu codespace a qualquer momento.

{% note %}

**Observação**: {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% data reusables.codespaces.about-changing-storage-size %}

## Excluir um codespace no {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## Alternar para o build de Insiders do {% data variables.product.prodname_vscode_shortname %}

Você pode usar o [Build de Insiders do {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) nos {% data variables.product.prodname_github_codespaces %}.

1. No canto inferior esquerdo da janela dos {% data variables.product.prodname_github_codespaces %}, selecione **{% octicon "gear" aria-label="The settings icon" %} Configurações**.
2. Na lista, selecione "Alternar para Versão de Insiders".

   ![Clique em "Build do Insiders" nos {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)

3. Após a seleção, os {% data variables.product.prodname_github_codespaces %} continuarão a abrir na Versão Insiders.

## Leitura adicional

- "[Como usar a {% data variables.product.prodname_vscode_command_palette %} nos {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)"
- "[Como usar o {% data variables.product.prodname_copilot %} nos {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)"
