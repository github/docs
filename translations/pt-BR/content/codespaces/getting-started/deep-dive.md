---
title: Aprofundamento nos codespaces
intro: 'Entender o funcionamento do {% data variables.product.prodname_codespaces %};'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
---

{% data variables.product.prodname_codespaces %} é um ambiente de desenvolvimento instantâneo e baseado na nuvem que usa um recipiente para fornecer linguagens, ferramentas e utilitários de desenvolvimento comuns. {% data variables.product.prodname_codespaces %} também é configurável, o que permite que você crie um ambiente de desenvolvimento personalizado para o seu projeto. Ao configurar um ambiente de desenvolvimento personalizado para seu projeto, você pode ter uma configuração de código reproduzível para todos os usuários do seu projeto.

## Criando seu codespace

Há uma série de pontos de entrada para criar um codespace.

- Do seu repositório para um novo recurso funcionar.
- De um pull request aberto para explorar o trabalho em andamento.
- De um commit no histórico do repositório para investigar um erro em um momento específico.
- De {% data variables.product.prodname_vscode %}.

Seu codespace pode ser efêmero se você tiver de fazer algum teste ou você pode retornar ao mesmo codespace para fazer um trabalho de recurso de longo prazo. Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".

Uma vez selecionada a opção de criar um novo codespace, e opcionalmente selecionada a partir das várias opções de configuração do seu codespace, algumas etapas acontecem em segundo plano antes que o codespace esteja disponível para você.

![Botão de abrir com codespaces](/assets/images/help/codespaces/new-codespace-button.png)

### Etapa 1: A VM e o armazenamento são atribuídos ao seu codespace

Ao criar um codespace, cria-se [clone superficial](https://github.blog/2020-12-21-get-up-to-speed-with-partial-clone-and-shallow-clone/) do seu repositório em uma máquina virtual Linux dedicada e exclusiva para você. Ter uma VM dedicada garante que você tenha todo o conjunto de recursos de computação daquela máquina disponível para você. Se necessário, isso também permite que você tenha acesso total à raiz do seu contêiner.

### Etapa 2: O contêiner foi criado

{% data variables.product.prodname_codespaces %} usa um contêiner como ambiente de desenvolvimento. Este contêiner foi criado com base nas configurações que você pode definir em um arquivo `devcontainer.json` e/ou arquivo Docker no seu repositório. Se você não [configurar um contêiner](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project), {% data variables.product.prodname_codespaces %} usará uma [imagem padrão](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#using-the-default-configuration), que tem muitas linguages e tempos de execução disponíveis. Para obter informações sobre o que a imagem padrão contém, consulte o repositório [`vscode-dev-containers`](https://github.com/microsoft/vscode-dev-containers/tree/main/containers/codespaces-linux).

{% note %}

**Observação:** Se você quiser usar hooks do Git no seu codespace e aplicar qualquer coisa no do [diretório do modelo do git](https://git-scm.com/docs/git-init#_template_directory) no seu codespace, você deverá configurar os hooks na etapa 4 depois que o contêiner for criado.

Uma vez que seu repositório é clonado na VM de host antes da criação do contêiner nada no [diretório do template do git](https://git-scm.com/docs/git-init#_template_directory) não será aplicado no seu codespace a menos que você configure hooksno seu arquivo de configuração `devcontainer.json` usando o `postCreateCommand` na etapa 4. Para obter mais informações, consulte "[Etapa 4: configuração de pós-criação](#step-4-post-creation-setup)".

{% endnote %}

### Etapa 3: Conectando-se ao codespace

Quando seu contêiner for criado e qualquer outra inicialização for executada, você estará conectado ao seu codespace. Você pode conectar-se por meio da web ou via [Visual Studio Code](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code), ou ambos, se necessário.

### Passo 4: Configuração de pós-criação

Uma vez que você estiver conectado ao seu codespace, a sua configuração automatizada poderá continuar compilando com base na configuração que você especificou no seu arquivo `devcontainer.json`. Você pode ver `postCreateCommand` e `postAttachCommand` serem executados.

Se vocÊ quiser usar os hooks do Git no seu codespace, configure os hooks usando os scripts do ciclo de vida do [`devcontainer.json` ](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_lifecycle-scripts) como, por exemplo, `postCreateCommand`. Para obter mais informações, consulte o [`devcontainer.json` referência](https://code.visualstudio.com/docs/remote/devcontainerjson-reference#_devcontainerjson-properties) na documentação do Visual Studio Code.

Se você tiver um repositório de dotfiles público para {% data variables.product.prodname_codespaces %}, você poderá habilitá-lo para uso com novos codespaces. Quando habilitado, seus dotfiles serão clonados para o contêiner e o script de instalação será invocado. Para obter mais informações, consulte "[Personalizar {% data variables.product.prodname_codespaces %} para sua conta](/github/developing-online-with-codespaces/personalizing-codespaces-for-your-account#dotfiles)".

Por fim, toda a história do repositório é copiada com um clone completo.

Durante a configuração de pós-criação, você ainda poderá usar o terminal integrado e fazer edições nos seus arquivos, mas tenha cuidado para evitar quaisquer condições de corrida entre seu trabalho e os comandos que estão sendo executados.
## Ciclo de vida de {% data variables.product.prodname_codespaces %}

### Salvando arquivos no seu codespace

À medida que você desenvolve no seu codespace, ele salvará todas as alterações nos seus arquivos a cada poucos segundos. Seu codespace continuará em execução por 30 minutos após a última atividade. Depois desse tempo ele irá parar de executar, mas você poderá reiniciá-lo a partir da aba do navegador existente ou da lista de codespaces existentes. As mudanças de arquivo do editor e saída terminal são contadas como atividade. Portanto, o seu código não parará se a saída do terminal continuar.

{% note %}

**Observação:** As mudanças em um codespace em {% data variables.product.prodname_vscode %} não são salvas automaticamente, a menos que você tenha habilitado o [Salvamento automático](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save).
{% endnote %}

### Fechando ou interrompendo seu codespace

Para interromper o seu codespace, você pode [usar o {% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces#suspending-or-stopping-a-codespace) (`Shift + Command + P` (Mac) / `Ctrl + Shift + P` (Windows)). Se você sair do seu codespace sem executar o comando de interrupção (por exemplo, fechando a aba do navegador), ou se você sair do codespace em execução sem interação, o codespace e os seus processos em execução continuarão até que ocorra uma janela de inatividade, após a qual o código será interrompido.  Por padrão, a janela de inatividade é de 30 minutos.

Ao fechar ou interromper o seu codespace, todas as alterações não autorizadas são preservadas até você conectar-se ao codespace novamente.


## Executando seu aplicativo

O redirecionamento de porta dá acesso a portas TCP que estão em execução no seu codespace. Por exemplo, se você estiver executando um aplicativo web na porta 4000 dentro do seu codespace, você poderá encaminhar automaticamente a porta para tornar o aplicativo acessível a partir do seu navegador.

O encaminhamento de portas determina quais portas podem ser acessadas por você a partir da máquina remota. Mesmo que você não encaminhe uma porta, esse porta ainda poderá ser acessada para outros processos em execução dentro do próprio codespace.

![Diagrama que mostra como funciona o encaminhamento de porta em um codespace](/assets/images/help/codespaces/port-forwarding.png)

Quando um aplicativo em execução dentro de {% data variables.product.prodname_codespaces %} produz uma porta para o console, {% data variables.product.prodname_codespaces %} detecta o padrão da URL do host local e encaminha a porta automaticamente. Você pode clicar na URL no terminal ou na mensagem de alerta para abrir a porta em um navegador. Por padrão, {% data variables.product.prodname_codespaces %} encaminha as portas que usam HTTP. Para obter mais informações sobre o encaminhamento de portas, consulte "[Encaminhando portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

Embora as portas possam ser encaminhadas automaticamente, elas não podem ser acessadas pelo público na internet. Por padrão, todas as portas são privadas, mas você pode disponibilizar manualmente uma porta para sua organização ou público, e, em seguida, compartilhar o acesso por meio de uma URL. Para obter mais informações, consulte "[Compartilhando uma porta](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace#sharing-a-port). "

A execução do seu aplicativo ao chegar pela primeira vez no seu codespace pode fazer um loop de desenvolvimento rápido interno. À medida que você edita, as alterações são salvas automaticamente e ficam disponíveis na sua porta encaminhada. Para visualizar as alterações, volte para a aba do aplicativo em execução no seu navegador e atualize-as.

## Enviando e fazendo push das suas alterações

O Git está disponível por padrão no seu codespace. Portanto, você pode confiar no fluxo de trabalho do Git existente. Você pode trabalhar com o Git no seu codespace por meio do Terminal ou usando a interface de usuário do controle de origem do [do Visual Studio Code](https://code.visualstudio.com/docs/editor/versioncontrol). Para obter mais informações, consulte "[Usando controle de origem no seu codespace](/codespaces/developing-in-codespaces/using-source-control-in-your-codespace)"

![Executando o status do git no terminal do codespaces](/assets/images/help/codespaces/git-status.png)

Você pode criar um codespace a partir de qualquer branch, commit ou pull request no seu projeto, ou você pode mudar para branch novo branch ou branch existente de dentro do seu codespace ativo. Uma vez que {% data variables.product.prodname_codespaces %} foi projetado para ser efêmero, você pode usá-lo como um ambiente isolado para experimentar, verificar o pull request de um amigo de equipe ou corrigir os conflitos de merge. Você pode criar mais de um código de espaço por repositório ou até mesmo por branch. No entanto, cada conta pessoal tem um limite de 10 codespaces. Se você atingiu o limite e deseja criar um novo espaço de código, você deve primeiro excluir um código.

{% note %}

**Observação:** Os commits do seu codespace serão atribuídos ao nome e ao e-mail público configurado em https://github.com/settings/profile. Um token com escopo no repositório, incluído no ambiente como `GITHUB_TOKEN`, e as suas credenciais do GitHub serão usadas para efetuar a autenticação.

{% endnote %}

## Personalizando seu codespace com extensões

Usar {% data variables.product.prodname_vscode %} no seu codespace dá acesso ao Marketplace de {% data variables.product.prodname_vscode %} para que você possa adicionar todas as extensões de que precisar. Para obter informações de como as extensões são executadas em {% data variables.product.prodname_codespaces %}, consulte [Suporte ao Desenvolvimento Remoto e aos codespaces do GitHub](https://code.visualstudio.com/api/advanced-topics/remote-extensions) na documentação de {% data variables.product.prodname_vscode %}.

Se você já usa o {% data variables.product.prodname_vscode %}, você pode usar as [Sincronização de configurações](https://code.visualstudio.com/docs/editor/settings-sync) para sincronizar automaticamente as extensões, configurações, temas, e atalhos de teclado entre sua instância local e todos {% data variables.product.prodname_codespaces %} que você criar.

## Leia mais

- [Habilitando {% data variables.product.prodname_codespaces %} para a sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)
- [Gerenciando a cobrança para {% data variables.product.prodname_codespaces %} na sua organização](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
- [Configurando seu projeto para os codespaces](/codespaces/setting-up-your-project-for-codespaces)
- [Ciclo de vida dos codespaces](/codespaces/developing-in-codespaces/codespaces-lifecycle)
