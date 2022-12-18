---
title: Como adicionar recursos a um arquivo devcontainer.json
shortTitle: Adding features
intro: 'Com os recursos, você pode adicionar rapidamente ferramentas, runtimes ou bibliotecas à configuração do contêiner de desenvolvimento.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
ms.openlocfilehash: 7e72739e93e83995d86baf19d62f7bf2e1c5b6bc
ms.sourcegitcommit: 3ff64a8c8cf70e868c10105aa6bbf6cd4f78e4d3
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180824'
---
{% data reusables.codespaces.about-features %} Use as guias deste artigo para ver instruções de cada uma dessas maneiras de adicionar recursos.

## Com adicionar recursos para um arquivo `devcontainer.json`

{% webui %}

1. Navegue até o repositório em {% data variables.product.prodname_dotcom_the_website %}, localize o arquivo `devcontainer.json` e clique em {% octicon "pencil" aria-label="The edit icon" %} para editar o arquivo.
   
   Se você ainda não tiver o arquivo `devcontainer.json`, crie-o agora. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)".
1. À direita do editor de arquivos, na guia **Marketplace**, procure ou pesquise o recurso que deseja adicionar e clique no nome do recurso.

   ![Captura de tela do recurso Terraform na guia Marketplace, com "Terra" na barra de pesquisa](/assets/images/help/codespaces/feature-marketplace.png)
3. Em "Instalação", clique no snippet de código para copiá-lo na área de transferência e cole o snippet no objeto `features` no arquivo `devcontainer.json`.

   ![Captura de tela de um bloco de código na seção Instalação da guia Marketplace](/assets/images/help/codespaces/feature-installation-code.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {},
        ...
    }
    ```
1. Por padrão, a versão mais recente do recurso será usada. Para escolher uma versão diferente ou configurar outras opções para o recurso, expanda as propriedades listadas em "Opções" para exibir os valores disponíveis e adicione as opções editando manualmente o objeto no arquivo `devcontainer.json`.

   ![Captura de tela da seção Opções da guia Marketplace, com "version" e "tflint" expandidos](/assets/images/help/codespaces/feature-options.png)

   ```JSON
   "features": {
        ...
        "ghcr.io/devcontainers/features/terraform:1": {
            "version": "1.1",
            "tflint": "latest"
        },
        ...
    }
    ```
1. Faça commit das alterações no arquivo `devcontainer.json`.

As alterações de configuração entrarão em vigor nos novos codespaces criados por meio do repositório. Para fazer com que as alterações entrem em vigor nos codespaces existentes, você precisará efetuar pull das atualizações para o arquivo `devcontainer.json` no codespace e depois recompilar o contêiner para o codespace. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers#applying-configuration-changes-to-a-codespace)".

{% endwebui %}

{% vscode %}

{% note %}

Para adicionar recursos no {% data variables.product.prodname_vscode_shortname %} enquanto você está trabalhando localmente e não está conectado a um codespace, a extensão "Contêineres de Desenvolvimento" precisa estar instalada e habilitada. Para obter mais informações sobre essa extensão, confira [{% data variables.product.prodname_vs_marketplace_shortname %}](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

{% endnote %}

{% data reusables.codespaces.command-pallette %}
2. Comece a digitar "Configurar" e selecione **Codespaces: configurar recursos do Contêiner de Desenvolvimento**.

   ![O comando Configurar Recursos do Devcontainer na paleta de comandos](/assets/images/help/codespaces/codespaces-configure-features.png)

3. Atualize suas seleções de recursos e clique em **OK**.

   ![O menu de seleção de recursos adicionais durante a configuração do contêiner.](/assets/images/help/codespaces/select-additional-features.png)

4. Se você estiver trabalhando em um codespace, um prompt será exibido no canto inferior direito. Para recompilar o contêiner e aplicar as alterações ao codespace no qual você está trabalhando, clique em **Recompilar Agora**.

   !["Codespaces: recriar contêiner" na paleta de comandos](/assets/images/help/codespaces/rebuild-prompt.png)

{% endvscode %}
