---
title: 'Aprofundamento de {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Deep dive into {% data variables.product.prodname_codespaces %}'
intro: 'Entenda o funcionamento do {% data variables.product.prodname_github_codespaces %}.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
ms.openlocfilehash: d64aa32db633a14c1cc8d36b3204cab2c9982f93
ms.sourcegitcommit: 505b84dc7227e8a5d518a71eb5c7eaa65b38ce0e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147875547'
---
O {% data variables.product.prodname_github_codespaces %} é um ambiente de desenvolvimento instantâneo e baseado na nuvem que usa um contêiner para fornecer linguagens, ferramentas e utilitários de desenvolvimento comuns. {% data variables.product.prodname_codespaces %} também é configurável, o que permite que você crie um ambiente de desenvolvimento personalizado para o seu projeto. Ao configurar um ambiente de desenvolvimento personalizado para seu projeto, você pode ter uma configuração de código reproduzível para todos os usuários do seu projeto.

## Criando seu codespace

Há uma série de pontos de entrada para criar um codespace.

- Do seu repositório para um novo recurso funcionar.
- De um pull request aberto para explorar o trabalho em andamento.
- De um commit no histórico do repositório para investigar um erro em um momento específico.
- De {% data variables.product.prodname_vscode %}.
  
Seu codespace pode ser efêmero se você tiver de fazer algum teste ou você pode retornar ao mesmo codespace para fazer um trabalho de recurso de longo prazo. Para obter mais informações, confira "[Como criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".

Depois de selecionar a opção para criar um novo codespace e, opcionalmente, selecionar entre as várias opções de configuração do seu codespace, algumas etapas ocorrerão em segundo plano antes que o codespace esteja disponível para você.

![Botão de abrir com codespaces](/assets/images/help/codespaces/new-codespace-button.png)

### Etapa 1: A VM e o armazenamento são atribuídos ao seu codespace

Quando você cria um codespace, um [clone superficial](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) do repositório é feito em uma máquina virtual do Linux dedicada e privada para você. Ter uma VM dedicada garante que você tenha todo o conjunto de recursos de computação daquela máquina disponível para você. Se necessário, isso também permite que você tenha acesso total à raiz do seu contêiner.

### Etapa 2: O contêiner foi criado

{% data variables.product.prodname_codespaces %} usa um contêiner como ambiente de desenvolvimento. Este contêiner foi criado com base nas configurações que você pode definir em um arquivo `devcontainer.json` e/ou em um Dockerfile no seu repositório. Se você não [configurar um contêiner](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project), o {% data variables.product.prodname_codespaces %} usará uma [imagem padrão](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#using-the-default-configuration), que tem uma variedade de linguagens e runtimes disponíveis. Para obter informações sobre o que a imagem padrão contém, confira o repositório [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

{% note %}

**Observação:** se você quiser usar ganchos do Git no seu codespace e aplicar qualquer item no [diretório de modelos do Git](https://git-scm.com/docs/git-init#_template_directory) ao codespace, configure ganchos durante a etapa 4 após a criação do contêiner.

Como o repositório é clonado na VM do host antes de o contêiner ser criado, qualquer item contido no [diretório de modelos do Git](https://git-scm.com/docs/git-init#_template_directory) não será aplicado ao seu codespace, a menos que você configure ganchos no arquivo de configuração `devcontainer.json` usando `postCreateCommand` na etapa 4. Para obter mais informações, confira "[Etapa 4: Configuração pós-criação](#step-4-post-creation-setup)".

{% endnote %}

### Etapa 3: Conectando-se ao codespace

Quando seu contêiner for criado e qualquer outra inicialização for executada, você estará conectado ao seu codespace. Você pode se conectar a ele por meio da Web ou por meio do [{% data variables.product.prodname_vscode_shortname %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code), ou ambos, se necessário.

### Passo 4: Configuração de pós-criação

Depois que você estiver conectado ao codespace, a configuração automatizada poderá continuar sendo compilada com base na configuração que você especificou no arquivo `devcontainer.json`. Você poderá ver `postCreateCommand` e `postAttachCommand` serem executados.

Caso você deseje usar ganchos do Git no codespace, configure ganchos usando os [scripts de ciclo de vida `devcontainer.json`](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts), como `postCreateCommand`. Para obter mais informações, consulte a [`devcontainer.json` referência](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) na documentação do {% data variables.product.prodname_vscode_shortname %}.

Se tiver um repositório público de dotfiles para o {% data variables.product.prodname_github_codespaces %}, você poderá habilitá-lo para uso com novos codespaces. Quando habilitado, seus dotfiles serão clonados para o contêiner e o script de instalação será invocado. Para obter mais informações, confira "[Como personalizar o {% data variables.product.prodname_github_codespaces %} para sua conta](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles)". 

Por fim, toda a história do repositório é copiada com um clone completo.

Durante a configuração de pós-criação, você ainda poderá usar o terminal integrado e fazer edições nos seus arquivos, mas tenha cuidado para evitar quaisquer condições de corrida entre seu trabalho e os comandos que estão sendo executados.
## Ciclo de vida de {% data variables.product.prodname_codespaces %}

### Salvando arquivos no seu codespace

À medida que você desenvolve no seu codespace, ele salvará todas as alterações nos seus arquivos a cada poucos segundos. Seu codespace continuará em execução por 30 minutos após a última atividade. Depois desse tempo ele irá parar de executar, mas você poderá reiniciá-lo a partir da aba do navegador existente ou da lista de codespaces existentes. As mudanças de arquivo do editor e saída terminal são contadas como atividade. Portanto, o seu código não parará se a saída do terminal continuar.

{% note %}

**Observação:** as alterações feitas em um codespace no {% data variables.product.prodname_vscode_shortname %} não serão salvas automaticamente, a menos que você tenha habilitado o [Salvamento Automático](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save).
{% endnote %}

### Fechando ou interrompendo seu codespace

Para interromper seu codespace, você pode [usar a {% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace) (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> no Mac ou <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> no Windows/Linux). Se você sair do seu codespace sem executar o comando de interrupção (por exemplo, fechando a aba do navegador), ou se você sair do codespace em execução sem interação, o codespace e os seus processos em execução continuarão até que ocorra uma janela de inatividade, após a qual o código será interrompido.  Por padrão, a janela de inatividade é de 30 minutos. 

Ao fechar ou interromper o seu codespace, todas as alterações não autorizadas são preservadas até você conectar-se ao codespace novamente.


## Executando seu aplicativo

O redirecionamento de porta dá acesso a portas TCP que estão em execução no seu codespace. Por exemplo, se você estiver executando um aplicativo web na porta 4000 dentro do seu codespace, você poderá encaminhar automaticamente a porta para tornar o aplicativo acessível a partir do seu navegador.

O encaminhamento de portas determina quais portas podem ser acessadas por você a partir da máquina remota. Mesmo que você não encaminhe uma porta, esse porta ainda poderá ser acessada para outros processos em execução dentro do próprio codespace.

![Diagrama que mostra como funciona o encaminhamento de porta em um codespace](/assets/images/help/codespaces/port-forwarding.png)

Quando um aplicativo em execução dentro de {% data variables.product.prodname_codespaces %} produz uma porta para o console, {% data variables.product.prodname_codespaces %} detecta o padrão da URL do host local e encaminha a porta automaticamente. Você pode clicar na URL no terminal ou na mensagem de alerta para abrir a porta em um navegador. Por padrão, {% data variables.product.prodname_codespaces %} encaminha as portas que usam HTTP. Para obter mais informações sobre o encaminhamento de porta, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Embora as portas possam ser encaminhadas automaticamente, elas não podem ser acessadas pelo público na internet. Por padrão, todas as portas são privadas, mas você pode disponibilizar manualmente uma porta para sua organização ou público, e, em seguida, compartilhar o acesso por meio de uma URL. Para obter mais informações, confira "[Como compartilhar uma porta](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port)".

A execução do seu aplicativo ao chegar pela primeira vez no seu codespace pode fazer um loop de desenvolvimento rápido interno. À medida que você edita, as alterações são salvas automaticamente e ficam disponíveis na sua porta encaminhada. Para visualizar as alterações, volte para a aba do aplicativo em execução no seu navegador e atualize-as.

## Enviando e fazendo push das suas alterações

O Git está disponível por padrão no seu codespace. Portanto, você pode confiar no fluxo de trabalho do Git existente. Você pode trabalhar com o Git em seu codespace por meio do Terminal ou usando a interface do usuário do controle do código-fonte do [{% data variables.product.prodname_vscode_shortname %}](https://code.visualstudio.com/docs/editor/versioncontrol). Para obter mais informações, confira "[Como usar o controle do código-fonte no seu codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)".

![Executando o status do git no terminal do codespaces](/assets/images/help/codespaces/git-status.png)

Você pode criar um codespace a partir de qualquer branch, commit ou pull request no seu projeto, ou você pode mudar para branch novo branch ou branch existente de dentro do seu codespace ativo. Como o {% data variables.product.prodname_github_codespaces %} foi projetado para ser efêmero, você poderá usá-lo como um ambiente isolado para experimentar, verificar a solicitação de pull de um colega ou corrigir os conflitos de mesclagem. 

Você pode criar mais de um código de espaço por repositório ou até mesmo por branch. No entanto, há limites para o número de codespaces que você pode criar e o que você pode executar ao mesmo tempo. Se você atingir o número máximo de codespaces e tentar criar outro, uma mensagem será exibida informando que você deverá remover um codespace antes de criar um novo.

{% note %}

**Observação:** os commits do codespace serão atribuídos ao nome e ao email público configurados em https://github.com/settings/profile. Um token com escopo no repositório, incluído no ambiente como `GITHUB_TOKEN`, e as suas credenciais do GitHub serão usadas para realizar a autenticação.

{% endnote %}

## Personalizando seu codespace com extensões

Usar o {% data variables.product.prodname_vscode_shortname %} no seu codespace dá acesso ao {% data variables.product.prodname_vscode_marketplace %} para que você possa adicionar todas as extensões de que precisa. Para obter informações sobre como as extensões são executadas no {% data variables.product.prodname_codespaces %}, consulte [Suporte ao desenvolvimento remoto e ao GitHub Codespaces](https://code.visualstudio.com/api/advanced-topics/remote-extensions) na documentação do {% data variables.product.prodname_vscode_shortname %}. 

Se você já usa o {% data variables.product.prodname_vscode_shortname %}, use a [Sincronização de Configurações](https://code.visualstudio.com/docs/editor/settings-sync) para sincronizar automaticamente extensões, configurações, temas e atalhos de teclado entre a sua instância local e os {% data variables.product.prodname_codespaces %} que você criar.

## Leitura adicional

- "[Como habilitar {% data variables.product.prodname_codespaces %} para sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)"
- "[Como gerenciar a cobrança de {% data variables.product.prodname_codespaces %} na sua organização](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)"
- "[Como configurar seu projeto para o Codespaces](/codespaces/setting-up-your-project-for-codespaces)"
- "[Ciclo de vida dos codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)"
