---
title: Desenvolver em um codespace
intro: 'Você pode trabalhar em um codespace usando seu navegador, {% data variables.product.prodname_vscode %}, um IDE JetBrains ou um shell de comando.'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: e941373ade8c2f8365e7b654733b7ee029a6a7dd
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159066'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Sobre o desenvolvimento com os {% data variables.product.prodname_github_codespaces %}

Você pode desenvolver código em um codespace usando a ferramenta de sua preferência: 

* Um shell de comando, por meio de uma conexão SSH iniciada usando {% data variables.product.prodname_cli %}.
* Um dos IDEs do JetBrains, por meio do JetBrains Gateway.
* O aplicativo da área de trabalho {% data variables.product.prodname_vscode %}.
* Uma versão baseada em navegador do {% data variables.product.prodname_vscode %}.

{% webui %}

As guias neste artigo permitem alternar entre informações para cada uma dessas maneiras de trabalhar. No momento, você está na guia da versão do navegador da Web do {% data variables.product.prodname_vscode %}.

## Como trabalhar em um codespace no navegador

O uso de {% data variables.product.prodname_codespaces %} no navegador fornece uma experiência de desenvolvimento completa. Você pode editar código, depurar, usar comandos Git e executar seu aplicativo.

![Captura de tela anotada de um codespace no navegador](/assets/images/help/codespaces/codespace-overview-annotated.png)

{% data reusables.codespaces.vscode-interface-annotation %} {% data reusables.codespaces.use-chrome %} Para obter mais informações, confira "[Solução de problemas de clientes dos {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)".
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endwebui %}

{% vscode %}

As guias neste artigo permitem alternar entre informações para cada uma dessas maneiras de trabalhar. No momento, você está na guia para {% data variables.product.prodname_vscode %}.

## Como trabalhar em um codespace no {% data variables.product.prodname_vscode_shortname %}

Os {% data variables.product.prodname_github_codespaces %} oferecem a experiência completa de desenvolvimento do {% data variables.product.prodname_vscode %}. {% data reusables.codespaces.use-visual-studio-features %}

![Captura de tela anotada de um codespace no VS Code](/assets/images/help/codespaces/codespace-annotated-vscode.png)

{% data reusables.codespaces.vscode-interface-annotation %}

Para obter mais informações sobre como usar o {% data variables.product.prodname_vscode_shortname %}, consulte o [guia da Interface do Usuário](https://code.visualstudio.com/docs/getstarted/userinterface) na documentação do {% data variables.product.prodname_vscode_shortname %}.

{% data reusables.codespaces.connect-to-codespace-from-vscode %} 

Para obter informações sobre solução de problemas, confira "[Solução de problemas de clientes Codespace](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)".
{% data reusables.codespaces.developing-in-vscode %} {% data reusables.codespaces.navigating-to-a-codespace %}

{% endvscode %}

{% jetbrains %}

As guias neste artigo permitem alternar entre informações para cada uma dessas maneiras de trabalhar. No momento, você está na guia para IDEs JetBrains.

## Como trabalhar em um codespace em um IDE JetBrains

Para usar {% data variables.product.prodname_github_codespaces %} com um IDE JetBrains, você precisa já ter instalado o JetBrains Gateway. Para obter informações sobre como instalar o JetBrains Gateway, consulte o [site da JetBrains](https://www.jetbrains.com/remote-development/gateway/).

Você pode trabalhar em um codespace usando o IDE JetBrains de sua escolha. Depois de criar um codespace, você pode usar o aplicativo JetBrains Gateway para abrir o codespace no IDE de sua preferência.

Você pode editar código, depurar e usar comandos do Git ao mesmo tempo que faz o desenvolvimento em um codespace com o seu IDE JetBrains. Para obter mais informações sobre os vários IDEs JetBrains, consulte a [documentação do JetBrains](https://www.jetbrains.com/help/).

### Interface do usuário do IntelliJ IDEA

Na documentação do {% data variables.product.prodname_github_codespaces %}, usamos o IntelliJ IDEA como representante do IDE JetBrains. Diferentes IDEs JetBrains podem ter layouts diferentes.

![Captura de tela anotada de um codespace no JetBrains IntelliJ IDEA](/assets/images/help/codespaces/jetbrains-gui-with-callouts.png)

1. **Barra de navegação** – exibe o caminho para o arquivo ou diretório selecionado no momento. Use os botões à direita da barra de navegação para executar várias ações, incluindo compilar, executar ou depurar o projeto ou executar comandos do Git para confirmar e efetuar push das alterações.
2. **Janela de ferramentas do projeto** – mostra a estrutura do projeto e permite que você abra arquivos no editor.
3. **Janela de ferramentas do {% data variables.product.prodname_github_codespaces %}** – isso é exibido clicando no plug-in {% data variables.product.prodname_github_codespaces %} na barra à esquerda da janela de ferramentas. Ela exibe informações sobre seu codespace, incluindo o nome de exibição e o tipo de computador. Os botões na parte superior dessa janela de ferramentas permitem a você:
   * Interromper o codespace e desconectar-se
   * Exibir a página da Web "Seus codespaces"
   * Exibir o log de criação do codespace
   * Recompilar o contêiner de desenvolvimento
4. **Editor** – É aqui que você edita os arquivos. Você pode clicar com o botão direito do mouse na guia de um arquivo para acessar opções como mover a guia para uma nova janela.
5. **Terminal** – isso é exibido clicando em **Terminal** na barra de janelas de ferramentas na parte inferior da janela principal (logo acima da barra de status). O terminal integrado permite que você execute tarefas de linha de comando sem precisar alternar para um aplicativo de terminal dedicado.
6. **Barra de status** – passe o mouse sobre o ícone à esquerda da barra de status para ver uma lista de ferramentas. Clique no ícone para ocultar ou mostrar as barras de janela de ferramentas. O lado direito da barra de status mostra informações sobre o projeto, incluindo o GIT branch atual.

Para obter mais informações sobre a interface do usuário do IntelliJ IDEA, confira a [documentação do JetBrains para IntelliJ IDEA](https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html).

### Como personalizar os codespaces de um repositório

Você pode personalizar os codespaces criados para um repositório criando ou atualizando a configuração do contêiner de desenvolvimento do repositório. Você pode fazer isso de dentro de um codespace. Depois de alterar a configuração do contêiner de desenvolvimento, você pode aplicar as alterações ao codespace atual recriando o contêiner do Docker para o codespace. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

### Personalizando seu codespace

Use um repositório [dotfiles](https://dotfiles.github.io/tutorials/) para personalizar os aspectos do ambiente de qualquer codespace criado. Para obter mais informações, confira "[Como personalizar o {% data variables.product.prodname_github_codespaces %} para sua conta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)".

### Fazendo commit das suas alterações

Depois de realizar alterações no seu código, tanto novo código como de configuração, você deverá fazer commit das suas alterações e enviá-las por push. Efetuar push das alterações para um repositório garante que qualquer pessoa que crie um codespace deste repositório tenha a mesma configuração. Isso também significa que qualquer personalização que você fizer, para modificar a configuração de codespaces criados para um repositório, estará disponível para todos que usam o repositório.

Para obter mais informações, confira "[Como usar o controle do código-fonte no seu codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace#committing-your-changes)".

## Leitura adicional

* "[Como usar os {% data variables.product.prodname_github_codespaces %} no IDE do JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)"
* "[Usar o plug-in do {% data variables.product.prodname_github_codespaces %} para JetBrains](/codespaces/codespaces-reference/using-the-github-codespaces-plugin-for-jetbrains)"
* "[Solucionar problemas de clientes do {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-github-codespaces-clients)"

{% endjetbrains %}

{% cli %}

As guias neste artigo permitem alternar entre informações para cada uma dessas maneiras de trabalhar. No momento, você está na guia para {% data variables.product.prodname_cli %}.

## Como trabalhar em um codespace em um shell de comando

{% data reusables.cli.cli-learn-more %}

Você pode usar {% data variables.product.prodname_cli %} para criar um novo codespace ou iniciar um codespace existente e, em seguida, conectar-se a ele por SSH. Uma vez conectado, você pode trabalhar na linha de comando usando suas ferramentas de linha de comando preferidas.

Depois de instalar o {% data variables.product.prodname_cli %} e autenticar com sua conta do {% data variables.product.prodname_dotcom %}, você pode usar o comando `gh codespace [<SUBCOMMAND>...] --help` para procurar as informações de ajuda. Como alternativa, você pode exibir as mesmas informações de referência em [https://cli.github.com/manual/gh_codespace](https://cli.github.com/manual/gh_codespace).

Para obter mais informações, confira "[Usando o {% data variables.product.prodname_github_codespaces %} com a CLI do GitHub](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)".

{% endcli %}
