---
title: 'Aprofundamento de {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Deep dive into {% data variables.product.prodname_codespaces %}'
intro: 'Entenda o funcionamento do {% data variables.product.prodname_github_codespaces %}.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
ms.openlocfilehash: 01e4f3990cc47f61678811f7c4a77b86626fd8a5
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188261'
---
O {% data variables.product.prodname_github_codespaces %} é um ambiente de desenvolvimento instantâneo e baseado na nuvem que usa um contêiner para fornecer linguagens, ferramentas e utilitários de desenvolvimento comuns. Os {% data variables.product.prodname_github_codespaces %} também são configuráveis, o que permite criar um ambiente de desenvolvimento personalizado para o projeto. Ao configurar um ambiente de desenvolvimento personalizado para seu projeto, você pode ter uma configuração de código reproduzível para todos os usuários do seu projeto.

## Criando seu codespace

Há uma série de pontos de entrada para criar um codespace.

- Com base em um modelo do {% data variables.product.company_short %} ou em qualquer repositório de modelos no {% data variables.product.prodname_dotcom_the_website %} para iniciar um novo projeto
- Com base em um branch no repositório para um novo trabalho de recursos
- Com base em uma solicitação de pull aberta para explorar o trabalho em andamento
- Com base em um commit no histórico do repositório para investigar um bug em um momento específico

{% data reusables.codespaces.ways-to-create-a-codespace %}
  
Seu codespace pode ser efêmero se você tiver de fazer algum teste ou você pode retornar ao mesmo codespace para fazer um trabalho de recurso de longo prazo. 

Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)", "[Como criar um codespace com base em um modelo](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)" e "[Como abrir um codespace existente](/codespaces/developing-in-codespaces/opening-an-existing-codespace)".

{% note %}

**Observação**: você pode criar mais de um codespace por repositório ou até mesmo por branch. No entanto, há limites para o número de codespaces que você pode criar e o que você pode executar ao mesmo tempo. Se você atingir o número máximo de codespaces e tentar criar outro, uma mensagem será exibida informando que você deverá remover um codespace antes de criar um novo.

{% endnote %}

### O processo de criação do codespace

Quando você cria um codespace, várias etapas ocorrem em segundo plano até que o codespace fique disponível para uso.

### Etapa 1: A VM e o armazenamento são atribuídos ao seu codespace

Quando você cria um codespace, um [clone superficial](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) é feito do repositório ou do repositório de modelos quando a criação do codespace é feita com base em um modelo. O repositório é clonado para uma máquina virtual do Linux dedicada e privada para você. Ter uma VM dedicada garante que você tenha todo o conjunto de recursos de computação daquela máquina disponível para você. Se necessário, isso também permite que você tenha acesso total à raiz do seu contêiner.

### Etapa 2: O contêiner foi criado

Os {% data variables.product.prodname_github_codespaces %} usam um contêiner como ambiente de desenvolvimento. Este contêiner é criado com base nas configurações que você pode definir em um arquivo `devcontainer.json` ou em um Dockerfile. Se você criar um codespace com base em um modelo em branco do {% data variables.product.company_short %} ou em um repositório sem um arquivo `devcontainer.json`, os {% data variables.product.prodname_github_codespaces %} usarão uma imagem padrão que tenha várias linguagens e runtimes disponíveis. Para obter mais informações, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)". Para obter informações sobre o que a imagem padrão contém, confira o repositório [`microsoft/vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

{% note %}

**Observação:** se você quiser usar ganchos do Git no seu codespace e aplicar qualquer item no [diretório de modelos do Git](https://git-scm.com/docs/git-init#_template_directory) ao codespace, configure ganchos durante a etapa 4 após a criação do contêiner.

Como o repositório é clonado na VM do host antes de o contêiner ser criado, qualquer item contido no [diretório de modelos do Git](https://git-scm.com/docs/git-init#_template_directory) não será aplicado ao seu codespace, a menos que você configure ganchos no arquivo de configuração `devcontainer.json` usando `postCreateCommand` na etapa 4. Para obter mais informações, confira "[Etapa 4: Configuração pós-criação](#step-4-post-creation-setup)".

{% endnote %}

### Etapa 3: Conectando-se ao codespace

Quando seu contêiner for criado e qualquer outra inicialização for executada, você estará conectado ao seu codespace. Você pode se conectar a ele usando:

* O navegador da Web
* [Visual Studio Code](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)
* [Um IDE do JetBrains](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)
* [{% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli)

### Passo 4: Configuração de pós-criação

Depois que você estiver conectado ao codespace, a configuração automatizada poderá continuar sendo compilada com base na configuração especificada no arquivo `devcontainer.json`. Você poderá ver `postCreateCommand` e `postAttachCommand` serem executados.

Caso você queira usar ganchos do Git no codespace, configure os ganchos usando os [scripts de ciclo de vida `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), como `postCreateCommand`. Para obter mais informações, consulte a [`devcontainer.json` referência](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) na documentação do {% data variables.product.prodname_vscode_shortname %}.

Se tiver um repositório público de dotfiles para o {% data variables.product.prodname_github_codespaces %}, você poderá habilitá-lo para uso com novos codespaces. Quando habilitado, seus dotfiles serão clonados para o contêiner e o script de instalação será invocado. Para obter mais informações, confira "[Como personalizar o {% data variables.product.prodname_github_codespaces %} para sua conta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)". 

Por fim, se você criou o codespace com base em um repositório, todo o histórico do repositório será copiado com um clone completo. Se você criou o codespace com base em um modelo, o histórico completo do repositório de modelos não será preservado. Nesse caso, a menos que você esteja usando o modelo em branco, você começará com um commit inicial do conteúdo do repositório de modelos.

Durante a configuração de pós-criação, você ainda poderá usar o terminal integrado e fazer edições nos seus arquivos, mas tenha cuidado para evitar quaisquer condições de corrida entre seu trabalho e os comandos que estão sendo executados.
## Ciclo de vida de {% data variables.product.prodname_codespaces %}

### Salvando arquivos no seu codespace

Salve as alterações nos arquivos da maneira normal, dependendo do editor que você esteja usando.

Se você trabalha em codespaces no {% data variables.product.prodname_vscode %}, habilite o [Salvamento Automático](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) para garantir que as alterações sejam sempre salvas. 

### Fechando ou interrompendo seu codespace

O codespace continuará em execução enquanto você o estiver usando, mas atingirá o tempo limite após um período de inatividade. As mudanças no arquivo feitas no editor e a saída do terminal são contadas como atividade. Portanto, o código não atingirá o tempo limite se a saída do terminal continuar. O período de tempo limite de inatividade padrão é de 30 minutos. Você pode definir uma configuração pessoal de tempo limite para codespaces criados, mas isso pode ser anulado por uma política de tempo limite da organização. Para obter mais informações, confira "[Como definir o período de tempo limite para codespaces](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces)". 

Se um codespace atingir o tempo limite, ele deixará de ser executado, mas você poderá reiniciá-lo na guia do navegador (se estiver usando o codespace no navegador), de dentro do {% data variables.product.prodname_vscode_shortname %} ou na lista de codespaces em [https://github.com/codespaces](https://github.com/codespaces).

Para interromper o codespace, você pode

* No navegador: na lista de codespaces em [https://github.com/codespaces](https://github.com/codespaces), clicar nas reticências ( **...** ) à direita do codespace que deseja parar e clicar em **Parar codespace**.
* Em {% data variables.product.prodname_vscode_shortname %}: abra [a {% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace), por exemplo, pressionando <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Enter</kbd> (Windows/Linux) ou <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac), Digite `Codespaces: stop` e pressione <kbd>Enter</kbd>.
* No cliente JetBrains, clique no botão Parar na parte superior da janela de ferramentas do {% data variables.product.prodname_github_codespaces %}. Para obter mais informações, confira a guia "IDEs do JetBrains" de "[Como parar e iniciar um codespace](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace)".
* Em uma janela de terminal, use o comando `gh codespace stop` da {% data variables.product.prodname_cli %}. Para obter mais informações, confira "[Como usar os {% data variables.product.prodname_github_codespaces %} com a {% data variables.product.prodname_cli %}](/codespaces/developing-in-codespaces/using-github-codespaces-with-github-cli#gh-commands-for-github-codespaces)".

Se você sair do codespace sem executar o comando de interrupção (por exemplo, fechando a aba do navegador) ou se você sair do codespace em execução sem interação, o codespace e os processos em execução continuarão até o tempo limite de inatividade seja atingido. 

Ao fechar ou interromper o seu codespace, todas as alterações não autorizadas são preservadas até você conectar-se ao codespace novamente.

## Executando seu aplicativo

O redirecionamento de porta dá acesso a portas TCP que estão em execução no seu codespace. Por exemplo, se você estiver executando um aplicativo web na porta 4000 dentro do seu codespace, você poderá encaminhar automaticamente a porta para tornar o aplicativo acessível a partir do seu navegador.

O encaminhamento de portas determina quais portas podem ser acessadas por você a partir da máquina remota. Mesmo que você não encaminhe uma porta, esse porta ainda poderá ser acessada para outros processos em execução dentro do próprio codespace.

![Diagrama que mostra como funciona o encaminhamento de porta em um codespace](/assets/images/help/codespaces/port-forwarding.png)

Quando um aplicativo em execução dentro dos {% data variables.product.prodname_github_codespaces %} emite uma porta para o console, os {% data variables.product.prodname_github_codespaces %} detectam o padrão de URL do localhost e encaminham a porta automaticamente. Você pode clicar na URL no terminal ou no link na mensagem de notificação do sistema que aparece no canto inferior direito do {% data variables.product.prodname_vscode_shortname %} para abrir a porta em um navegador. Por padrão, os {% data variables.product.prodname_github_codespaces %} encaminham as portas que usam HTTP. Para obter mais informações sobre o encaminhamento de porta, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Embora as portas possam ser encaminhadas automaticamente, elas não podem ser acessadas pelo público na internet. Por padrão, todas as portas são privadas, mas você pode disponibilizar manualmente uma porta para sua organização ou público, e, em seguida, compartilhar o acesso por meio de uma URL. Para obter mais informações, confira "[Como compartilhar uma porta](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port)".

A execução do seu aplicativo ao chegar pela primeira vez no seu codespace pode fazer um loop de desenvolvimento rápido interno. À medida que você edita, as alterações são salvas automaticamente e ficam disponíveis na sua porta encaminhada. Para visualizar as alterações, volte para a aba do aplicativo em execução no seu navegador e atualize-as.

## Enviando e fazendo push das suas alterações

O Git é instalado por padrão no codespace. Portanto, você pode confiar no fluxo de trabalho do Git existente. Você pode trabalhar com o Git no codespace por meio do terminal ou usando os recursos de controle do código-fonte do {% data variables.product.prodname_vscode_shortname %} ou JetBrains.

Se você está trabalhando com um repositório existente, pode criar um codespace com base em qualquer branch, commit ou solicitação de pull no projeto ou mudar para um branch novo ou existente de dentro do codespace ativo. Como o {% data variables.product.prodname_github_codespaces %} foi projetado para ser efêmero, você poderá usá-lo como um ambiente isolado para experimentar, verificar a solicitação de pull de um colega ou corrigir os conflitos de mesclagem.

Se você estiver trabalhando em um codespace criado com base em um modelo, o Git estará instalado por padrão, mas você precisará publicar o codespace em um repositório remoto para persistir o trabalho e compartilhá-lo com outras pessoas. Se você começar com o modelo em branco do {% data variables.product.company_short %}, primeiro precisará inicializar o workspace como um repositório Git (por exemplo, inserindo `git init`) para começar a usar o controle do código-fonte no codespace.

Para obter mais informações, confira "[Como usar o controle do código-fonte no seu codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)".

{% note %}

**Observação:** os commits do codespace serão atribuídos ao nome e ao email público configurados em https://github.com/settings/profile. Um token com escopo no repositório, incluído no ambiente como `GITHUB_TOKEN`, e as suas credenciais do GitHub serão usadas para realizar a autenticação.

{% endnote %}

## Como personalizar o codespace com extensões ou plug-ins

Você pode adicionar plug-ins e extensões em um codespace para personalizar sua experiência no JetBrains e no {% data variables.product.prodname_vscode_shortname %} respectivamente.

### Extensões do {% data variables.product.prodname_vscode_shortname %}

Se você trabalhar nos codespaces no aplicativo da área de trabalho do {% data variables.product.prodname_vscode_shortname %} ou no cliente Web, poderá adicionar todas as extensões necessárias do {% data variables.product.prodname_vscode_marketplace %}. Para obter informações de como as extensões são executadas nos {% data variables.product.prodname_github_codespaces %}, confira [Suporte ao desenvolvimento remoto e ao {% data variables.product.prodname_github_codespaces %}](https://code.visualstudio.com/api/advanced-topics/remote-extensions) na documentação do {% data variables.product.prodname_vscode_shortname %}. 

Se você já usa o {% data variables.product.prodname_vscode_shortname %}, use a [Sincronização de Configurações](https://code.visualstudio.com/docs/editor/settings-sync) para sincronizar automaticamente extensões, configurações, temas e atalhos de teclado entre a instância local e os codespaces que você criar.

### Plug-ins do JetBrains

Se você trabalhar nos codespaces em um IDE do JetBrains, poderá adicionar plug-ins do JetBrains Marketplace.

1. Clique em **Cliente JetBrains** e depois em **Preferências**.
1. Na caixa de diálogo Preferências, clique em **Plug-ins no Host** para instalar um plug-in no IDE completo do JetBrains que está sendo executado remotamente ou em **Plug-ins** para instalar um plug-in no cliente local, por exemplo, para alterar o tema da interface do usuário. 
1. Clique na guia **Marketplace**.

   ![Captura de tela da guia Marketplace para 'Plug-ins no Host'](/assets/images/help/codespaces/jetbrains-preferences-plugins.png)

1. Clique em **Instalar** ao lado do plug-in necessário.

## Leitura adicional

- "[Como habilitar os {% data variables.product.prodname_github_codespaces %} na organização](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)"
- "[Como gerenciar o custo dos {% data variables.product.prodname_github_codespaces %} na organização](/codespaces/managing-codespaces-for-your-organization/managing-the-cost-of-github-codespaces-in-your-organization)"
- "[Adicionar uma configuração de contêiner de desenvolvimento ao repositório](/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces)"
- "[O ciclo de vida do codespace](/codespaces/getting-started/the-codespace-lifecycle)"
