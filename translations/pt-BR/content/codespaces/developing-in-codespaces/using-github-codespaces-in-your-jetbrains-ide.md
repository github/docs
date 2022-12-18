---
title: Usar o GitHub Codespaces no IDE do JetBrains
shortTitle: JetBrains IDEs
intro: É possível usar o JetBrains Gateway para se conectar a um codespace e trabalhar no seu IDE do JetBrains preferencial.
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
ms.openlocfilehash: f522bf481e932f9735560ee4a1fec21944ced2e7
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159378'
---
{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

## Sobre o {% data variables.product.prodname_codespaces %} em IDEs do JetBrains

Se você usa um IDE do JetBrains para trabalhar com códigos, também pode aproveitá-lo para trabalhar em um codespace. Para isso, você usa o aplicativo JetBrains Gateway.

Depois de instalar o JetBrains Gateway, é possível definir o JetBrains como o editor padrão para que, sempre que um codespace do {% data variables.product.prodname_dotcom_the_website %} for aberto, o JetBrains Gateway seja iniciado a fim de permitir a escolha do IDE do JetBrains para conetar-se ao codespace.

{% note %}

**Observação**: somente os codespaces existentes estão disponíveis no JetBrains Gateway. É possível criar codespaces no {% data variables.product.prodname_dotcom_the_website %} ou usando a {% data variables.product.prodname_cli %}. Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".

{% endnote %}

### O processo de conexão de desenvolvimento remoto do JetBrains

Veja a seguir o processo básico por trás do uso de um codespace no IDE do JetBrains.

* No aplicativo JetBrains Gateway, você seleciona um dos codespaces ativos ou parados. 
* Em seguida, escolhe qual IDE do JetBrains será usado. 
* Depois disso, o IDE do JetBrains selecionado é baixado na máquina virtual remota que hospeda o codespace e o código-fonte.
* Em seguida, o aplicativo thin client do JetBrains é baixado no computador local e iniciado.
* Esse aplicativo cliente se conecta ao IDE de back-end completo.
* É possível trabalhar em seu código no aplicativo cliente da mesma maneira que você faria em um ambiente local.

## Pré-requisitos

Para trabalhar com um codespace em um IDE do JetBrains, o seguinte é necessário:

* Uma licença válida do JetBrains
* O aplicativo JetBrains Gateway.
* {% data variables.product.prodname_cli %} versão 2.18.0 ou mais recente 
* Um codespace existente que esteja executando um servidor SSH

### Licença do JetBrains

É necessário ter uma licença para pelo menos um dos IDEs do JetBrains compatíveis a fim de se conectar a um codespace do JetBrains Gateway.

### JetBrains Gateway

É possível instalar e atualizar o JetBrains Gateway por meio do aplicativo JetBrains Toolbox.

1. Baixe e instale o [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app).
1. Abra o JetBrains Toolbox.
1. Encontre **Gateway** na lista de ferramentas disponíveis e clique em **Instalar**.

   ![Captura de tela do JetBrains Toolbox](/assets/images/help/codespaces/jetbrains-toolbox.png)

### {% data variables.product.prodname_cli %}

O plug-in do {% data variables.product.prodname_github_codespaces %} para JetBrains Gateway requer a instalação e configuração da {% data variables.product.prodname_cli %} versão 2.18.0 ou mais recente para que seja possível abrir um codespace no JetBrains Gateway.

Use este comando para verificar a versão da {% data variables.product.prodname_cli %}:

```shell{:copy}
gh --version
```

Para saber mais, confira "[Sobre a CLI do GitHub](/github-cli/github-cli/about-github-cli)".

### Codespace executando um servidor SSH

É necessário que haja um codespace existente para se conectar. {% data reusables.codespaces.ways-to-create-a-codespace %} Para saber mais, confira "[Criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".

{% data reusables.codespaces.ssh-server-installed %}

Para saber mais sobre o arquivo `devcontainer.json` e a imagem de contêiner padrão, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

{% note %}

**Observação**: para obter ajuda e se conectar ao codespace por SSH, confira "[Solução de problemas de clientes do {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains#ssh-connection-issues)".

{% endnote %}

## Configurar o JetBrains Gateway

Ao usar o JetBrains Gateway para {% data variables.product.prodname_github_codespaces %} pela primeira vez, é necessário instalar o plug-in do {% data variables.product.prodname_codespaces %}. Também é necessário permitir que o JetBrains Gateway acesse o {% data variables.product.prodname_dotcom_the_website %} usando sua conta do {% data variables.product.prodname_dotcom %}. 

1. Abra o aplicativo JetBrains Gateway.
1. Em **Instalar mais provedores**, clique no link **Instalar** para o {% data variables.product.prodname_github_codespaces %}.

   ![Captura de tela da exibição inicial do JetBrains Gateway](/assets/images/help/codespaces/jetbrains-gateway-initial-view.png)

1. Clique em **Conectar-se a um codespace**.

   ![Captura de tela do Gateway com o botão “Conectar-se a um Codespace”](/assets/images/help/codespaces/jetbrains-gateway-connect.png)

1. Na caixa de diálogo "Bem-vindo ao JetBrains Gateway", clique em **Entrar com o {% data variables.product.prodname_dotcom %}** .

   ![Captura de tela do botão de entrada](/assets/images/help/codespaces/jetbrains-gateway-sign-in.png)

1. Clique no ícone ao lado do código de uso único para copiá-lo e, em seguida, clique no link de entrada.

   ![Captura de tela do código de entrada de uso único](/assets/images/help/codespaces/jetbrains-gateway-login-code.png)

1. Se você não estiver conectado ao {% data variables.product.prodname_dotcom %}, a página de entrada será exibida. 
   * Insira seus detalhes e clique em **Entrar**.
   * Verifique sua autenticação, por exemplo, inserindo um código de autenticação de dois fatores.
1. Na página "Ativação do dispositivo", cole o código copiado e clique em **Continuar**.
1. Se você pertencer a organizações, a página "Fazer logon único em suas organizações" será exibida. Clique em **Autorizar** ao lado das organizações que o JetBrains Gateway terá autorização para acessar e clique em **Continuar**.
1. Na página "Autorizar o {% data variables.product.prodname_github_codespaces %} para o JetBrains", clique em **Autorizar o {% data variables.product.prodname_dotcom %}** .
1. Retorne ao aplicativo JetBrains Gateway e abra um codespace na lista de codespaces atualmente ativos ou parados (veja a etapa 3 do procedimento a seguir).

## Abrir um codespace no IDE do JetBrains

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

   Na primeira vez que você se conectar a um codespace, o IDE de back-end será baixado no computador remoto. Isso pode levar alguns minutos. Na próxima vez que você se conectar ao mesmo codespace, essa etapa não será necessária, o que torna o processo de conexão mais rápido. 

   Em seguida, o IDE de back-end é iniciado. Lembre-se de que essa etapa não será necessária no futuro se você estiver se reconectando a um IDE de back-end que ficou em execução. 
   
   Depois disso, o aplicativo cliente é iniciado.

## Leitura adicional

- "[Desenvolvimento em um codespace](/codespaces/developing-in-codespaces/developing-in-a-codespace)"
- "[Usar o plug-in do {% data variables.product.prodname_github_codespaces %} para JetBrains](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)"
- "[Usar o {% data variables.product.prodname_copilot %} no {% data variables.product.prodname_github_codespaces %}](/codespaces/codespaces-reference/using-github-copilot-in-github-codespaces)"
- "[Solucionar problemas de clientes do {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients?tool=jetbrains)"
