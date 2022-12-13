---
title: Usar espaços de código no Visual Studio Code
intro: Você pode desenvolver seu codespace diretamente em {% data variables.product.prodname_vscode %}, conectando a extensão de {% data variables.product.prodname_github_codespaces %} à sua conta no {% data variables.product.product_name %}.
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
- /github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code
- /github/developing-online-with-codespaces/connecting-to-your-codespace-from-visual-studio-code
- /github/developing-online-with-codespaces/using-codespaces-in-visual-studio
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Visual Studio Code
- Developer
shortTitle: Visual Studio Code
ms.openlocfilehash: b49a0504dd939a18c34073176e11359725cac7e9
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145148765"
---
## <a name="about--data-variablesproductprodname_codespaces--in--data-variablesproductprodname_vscode-"></a>Sobre {% data variables.product.prodname_codespaces %} em {% data variables.product.prodname_vscode %}

Você pode usar sua instalação local de {% data variables.product.prodname_vscode %} para criar, gerenciar, trabalhar e excluir codespaces. Para usar {% data variables.product.prodname_codespaces %} no {% data variables.product.prodname_vscode_shortname %}, você deverá instalar a extensão dos {% data variables.product.prodname_github_codespaces %}. Para obter mais informações sobre como configurar o Codespaces no {% data variables.product.prodname_vscode_shortname %}, confira "[Pré-requisitos](#prerequisites)".

Por padrão, se você criar um novo codespace em {% data variables.product.prodname_dotcom_the_website %}, ele será aberto no navegador. Se você preferir abrir qualquer codespace novo no {% data variables.product.prodname_vscode_shortname %} automaticamente, poderá definir seu editor padrão como {% data variables.product.prodname_vscode_shortname %}. Para obter mais informações, confira "[Como configurar o editor padrão do {% data variables.product.prodname_codespaces %}](/codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces)".

Se preferir trabalhar no navegador, mas quiser continuar usando as extensões do {% data variables.product.prodname_vscode_shortname %}, os temas e os atalhos existentes, ative a Sincronização de Configurações. Para obter mais informações, confira "[Como personalizar os {% data variables.product.prodname_codespaces %} para sua conta](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync)".

## <a name="prerequisites"></a>Pré-requisitos

Para desenvolver em um codespace diretamente no {% data variables.product.prodname_vscode_shortname %}, você deverá instalar e efetuar o login na extensão dos {% data variables.product.prodname_github_codespaces %} com as suas credenciais do {% data variables.product.product_name %}. A extensão dos {% data variables.product.prodname_github_codespaces %} exige a versão de outubro de 2020 1.51 ou posterior do {% data variables.product.prodname_vscode_shortname %}.

Use o {% data variables.product.prodname_vscode_marketplace %} para instalar a extensão dos [{% data variables.product.prodname_github_codespaces %}](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces). Para obter mais informações, confira o [Marketplace de Extensões](https://code.visualstudio.com/docs/editor/extension-gallery) na documentação do {% data variables.product.prodname_vscode_shortname %}.


{% mac %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Clique em **Entrar para ver o {% data variables.product.prodname_dotcom %}…** .

   ![Registrar-se para visualizar {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode-mac.png)

2. Para autorizar o {% data variables.product.prodname_vscode_shortname %} a acessar sua conta no {% data variables.product.product_name %}, clique em **Permitir**.
3. Registre-se e, {% data variables.product.product_name %} para aprovar a extensão.

{% endmac %}

{% windows %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Use o menu suspenso "GERENCIADOR REMOTO" e clique em **{% data variables.product.prodname_github_codespaces %}** .

   ![Cabeçalho do {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-header-vscode.png)

1. Clique em **Entrar para ver o {% data variables.product.prodname_codespaces %}…** .

   ![Registrar-se para visualizar {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/sign-in-to-view-codespaces-vscode.png)

1. Para autorizar o {% data variables.product.prodname_vscode_shortname %} a acessar sua conta no {% data variables.product.product_name %}, clique em **Permitir**.
1. Registre-se e, {% data variables.product.product_name %} para aprovar a extensão.

{% endwindows %}

## <a name="creating-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Criar um codespace no {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.creating-a-codespace-in-vscode %}

## <a name="opening-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Abrir um codespace no {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.click-remote-explorer-icon-vscode %}
1. Em "Codedespaces", clique no código que você deseja desenvolver.
1. Clique no ícone Conectar-se ao Codespace.

   ![O ícone de Conectar a um Codespace no {% data variables.product.prodname_vscode_shortname %}](/assets/images/help/codespaces/click-connect-to-codespace-icon-vscode.png)

## <a name="changing-the-machine-type-in--data-variablesproductprodname_vscode_shortname-"></a>Alterar o tipo da máquina no {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.codespaces-machine-types %} Você pode alterar o tipo de computador do seu codespace a qualquer momento.

1. No {% data variables.product.prodname_vscode_shortname %}, abra a Paleta de Comandos (`shift command P` / `shift control P`).
1. Pesquise e selecione "Codespaces: Alterar tipo de máquina."

   ![Pesquisar um branch para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-type-option.png)

1. Clique no codespace que você deseja alterar.

   ![Pesquisar um branch para criar um novo {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/vscode-change-machine-choose-repo.png)

1. Escolha o tipo de máquina que você quer usar. 

   {% note %}

   **Observação**: {% data reusables.codespaces.codespaces-machine-type-availability %}

   {% endnote %}

1. Se o codespace estiver sendo executado, será exibida uma mensagem perguntando se você deseja reiniciar e reconectar-se ao seu codespace agora.

   Clique em **Sim** se quiser alterar o tipo de computador usado para este codespace imediatamente.
   
   Se você clicar em **Não** ou se o codespace não estiver em execução no momento, a alteração entrará em vigor na próxima vez que o codespace for reiniciado.

## <a name="deleting-a-codespace-in--data-variablesproductprodname_vscode_shortname-"></a>Excluir um codespace no {% data variables.product.prodname_vscode_shortname %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

## <a name="switching-to-the-insiders-build-of--data-variablesproductprodname_vscode_shortname-"></a>Alternar para o build de Insiders do {% data variables.product.prodname_vscode_shortname %}

Você pode usar o [build de Insiders do {% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/setup/setup-overview#_insiders-nightly-build) nos {% data variables.product.prodname_codespaces %}.

1. No canto inferior esquerdo da janela do {% data variables.product.prodname_codespaces %}, selecione **{% octicon "gear" aria-label="The settings icon" %} Configurações**.
2. Na lista, selecione "Alternar para Versão de Insiders".

   ![Clique em "Build do Insiders" no {% data variables.product.prodname_codespaces %}](/assets/images/help/codespaces/codespaces-insiders-vscode.png)
3. Uma vez selecionado, {% data variables.product.prodname_codespaces %} continuará a abrir na Versão do Insiders.
