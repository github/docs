---
title: 'Guia de início rápido do {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Quickstart for {% data variables.product.prodname_codespaces %}'
intro: 'Experimente o {% data variables.product.prodname_github_codespaces %} em 5 minutos.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
ms.openlocfilehash: f35fa87711ff3a7c33ed252d0d1e87865af619bc
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148158650'
---
## Introdução

Neste guia, você vai criar um codespace por meio de um repositório de modelos e explorar alguns dos recursos essenciais disponíveis no codespace. Você trabalhará na versão do navegador do {% data variables.product.prodname_vscode %}, que inicialmente é o editor padrão do {% data variables.product.prodname_github_codespaces %}. Depois de experimentar este guia de início rápido, você poderá usar os {% data variables.product.prodname_codespaces %} em outros editores e alterar o editor padrão. Os links são fornecidos no final deste guia.

Neste guia de início rápido, você aprenderá a criar um codespace, se conectar a uma porta encaminhada para ver o aplicativo em execução, publicar o codespace em um novo repositório e personalizar a configuração com extensões.

Para obter mais informações sobre como o {% data variables.product.prodname_github_codespaces %} funciona exatamente, confira o guia complementar "[Aprofundamento no {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive)".

## Criando seu codespace

1. Navegue até o repositório de modelos [github/haikus-for-codespaces](https://github.com/github/haikus-for-codespaces).
{% data reusables.codespaces.open-template-in-codespace-step %}

## Executando o aplicativo

Após a criação do codespace, o repositório de modelos será clonado nele automaticamente. Agora você pode executar o aplicativo e iniciá-lo em um navegador.

1. Quando o terminal ficar disponível, insira o comando `npm run dev`. Esse exemplo usa um projeto Node.js e esse comando executa o script rotulado como "dev" no arquivo `package.json`, que inicia o aplicativo Web definido no repositório de exemplo.
   
   ![npm run dev no terminal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   Se você estiver acompanhando com um tipo diferente de aplicativo, digite o comando inicial correspondente para esse projeto.

2. Quando o aplicativo for iniciado, o codespace reconhecerá a porta na qual o aplicativo está sendo executado e exibirá um prompt para informar você de que ela foi encaminhada. 

   ![Notificação do sistema de encaminhamento de porta](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Clique em **Abrir no Navegador** para ver seu aplicativo em execução em uma nova guia.

## Edite o aplicativo e veja as alterações

1. Volte ao codespace e abra o arquivo `haikus.json` clicando duas vezes nele no Gerenciador.

2. Edite o campo `text` do primeiro haiku para personalizar o aplicativo com seu haiku.

3. Volte à aba do aplicativo em execução no seu navegador e atualize para visualizar as suas alterações.
   
   {% octicon "light-bulb" aria-label="The lightbulb icon" %} Se você fechou a guia, abra o painel Portas e clique no ícone **Abrir no navegador** da porta em execução.

   ![Painel Encaminhamento de Porta](/assets/images/help/codespaces/quickstart-forward-port.png)

## Enviando e fazendo push das suas alterações

Agora que você fez algumas alterações, use o terminal integrado ou a exibição de origem para publicar o trabalho em um novo repositório.

{% data reusables.codespaces.source-control-display-dark %}
1. Para preparar as alterações, clique em **+** ao lado do arquivo `haikus.json` ou ao lado de **Alterações** se tiver alterado vários arquivos e quiser preparar todos eles.

   ![Barra lateral do controle do código-fonte com o botão de preparo realçado](/assets/images/help/codespaces/codespaces-commit-stage.png)

2. Para fazer commit das alterações preparadas, digite uma mensagem de commit descrevendo a alteração que você fez e clique em **Fazer commit**.

   ![Barra lateral do controle do código-fonte com uma mensagem de commit](/assets/images/help/codespaces/vscode-commit-button.png)

3. Clique em **Publicar Branch**.
   
   ![Captura de tela do botão "Publicar Branch" no VS Code](/assets/images/help/codespaces/vscode-publish-branch-button.png)

4. Na lista suspensa "Nome do Repositório", digite um nome para o novo repositório e selecione **Publicar no repositório privado do {% data variables.product.company_short %}** ou **Publicar no repositório público do {% data variables.product.company_short %}** .
   
   ![Captura de tela da lista suspensa "Nome do Repositório" no VS Code](/assets/images/help/codespaces/choose-new-repository.png)

   O proprietário do novo repositório será a conta do {% data variables.product.prodname_dotcom %} com a qual você criou o codespace.
5. No pop-up exibido no canto inferior direito do editor, clique em **Abrir no {% data variables.product.company_short %}** para ver o novo repositório no {% data variables.product.prodname_dotcom_the_website %}. No novo repositório, veja o arquivo `haikus.json` e verifique se a alteração feita no codespace foi enviada com êxito para o repositório.
   
   ![Captura de tela do pop-up "Abrir no GitHub" no VS Code](/assets/images/help/codespaces/open-on-github.png)

## Personalizando com uma extensão

Ao se conectar com um codespace usando o navegador ou o aplicativo da área de trabalho do {% data variables.product.prodname_vscode %}, você pode acessar o Visual Studio Code Marketplace diretamente no editor. Neste exemplo, você instalará uma extensão do {% data variables.product.prodname_vscode_shortname %} que altera o tema, mas você pode instalar qualquer extensão que seja útil para seu fluxo de trabalho.

1. Na barra lateral esquerda, clique no ícone Extensões.
1. Na barra de pesquisa, digite `fairyfloss` e clique em **Instalar**.

   ![Adicionar extensão](/assets/images/help/codespaces/add-extension.png)

1. Selecione o tema `fairyfloss` escolhendo-o na lista.

   ![Selecionar tema fairyfloss](/assets/images/help/codespaces/fairyfloss.png)

Se você estiver usando um codespace no navegador ou no aplicativo da área de trabalho do {% data variables.product.prodname_vscode %} e tiver a [Sincronização de Configurações](https://code.visualstudio.com/docs/editor/settings-sync) ativada, todas as alterações feitas na configuração do editor no codespace atual, como alteração do tema ou as associações de teclado, serão sincronizadas automaticamente com todas as instâncias do {% data variables.product.prodname_vscode %} que estiverem conectadas à conta do {% data variables.product.prodname_dotcom %} e a todos os outros codespaces que você criar.

## Próximas etapas

Você criou com sucesso, personalizou e executou seu primeiro aplicativo em um codespace, mas há muito mais para explorar! Veja alguns recursos úteis para aprimorar o uso dos {% data variables.product.prodname_github_codespaces %}.

* "[Aprofundamento](/codespaces/getting-started/deep-dive)": esse guia de início rápido apresentou alguns dos recursos do {% data variables.product.prodname_github_codespaces %}. O guia de aprofundamento analisa estas áreas a partir de um ponto de vista técnico.
* "[Adicionar uma configuração de contêiner de desenvolvimento ao repositório](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)": esses guias fornecem informações de como configurar o repositório para usar os {% data variables.product.prodname_github_codespaces %} com linguagens específicas.
* "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)": este guia fornece detalhes de como criar uma configuração personalizada dos {% data variables.product.prodname_codespaces %} para seu projeto.

## Leitura adicional

* "[Como habilitar os {% data variables.product.prodname_github_codespaces %} na organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)"
* "[Como usar os {% data variables.product.prodname_github_codespaces %} no {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)"
* "[Como usar os {% data variables.product.prodname_github_codespaces %} no IDE do JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)"
* "[Como usar os {% data variables.product.prodname_github_codespaces %} com a {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)"
* "[Como configurar o editor padrão dos {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/setting-your-default-editor-for-github-codespaces)".
* "[Como gerenciar o custo dos {% data variables.product.prodname_github_codespaces %} na organização](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
