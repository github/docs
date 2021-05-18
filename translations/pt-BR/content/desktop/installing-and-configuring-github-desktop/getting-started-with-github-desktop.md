---
title: Introdução ao GitHub Desktop
intro: 'Saiba como definir, autenticar e configurar o {% data variables.product.prodname_desktop %} para permitir que você contribua para projetos diretamente a partir da sua máquina.'
miniTocMaxHeadingLevel: 4
versions:
  free-pro-team: '*'
---

### Introdução
O {% data variables.product.prodname_desktop %} é um aplicativo que permite que você interaja com o {% data variables.product.prodname_dotcom %} usando uma GUI em vez da linha de comando ou de um navegador web. {% data variables.product.prodname_desktop %} incentiva você e sua equipe a colaborar usando as melhores práticas com Git e {% data variables.product.prodname_dotcom %}. Você pode usar {% data variables.product.prodname_desktop %} para realizar a maioria dos comandos do Git a partir de seu computador com a confirmação visual das mudanças. Você pode fazer subir, extrair e clonar repositórios remotos com o {% data variables.product.prodname_desktop %} e usar ferramentas colaborativas como atribuir commits e criar pull requests.

Este guia ajudará você a dar os primeiros passos com {% data variables.product.prodname_desktop %} criando o aplicativo, autenticando sua conta, configurando as configurações básicas e introduzindo os fundamentos do gerenciamento de projetos com {% data variables.product.prodname_desktop %}. Você poderá usar o {% data variables.product.prodname_desktop %} para colaborar em projetos e conectar-se a repositórios remotos depois de trabalhar neste guia.

Você pode achar útil ter um entendimento básico do Git e do {% data variables.product.prodname_dotcom %} antes de começar a usar o {% data variables.product.prodname_desktop %}. Para obter mais informações, consulte os seguintes artigos.

- "[Usar o Git](/github/getting-started-with-github/using-git)"
- "[Aprender sobre {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Começar com {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"

{% data variables.product.prodname_desktop %} é um projeto de código aberto. Você pode ver o itinerário, contribuir com o projeto ou abrir um problema para dar feedback ou solicitações de recursos. Para obter mais informações, consulte o repositório [`desktop/desktop`](https://github.com/desktop/desktop).

### Parte 1: Instalar e autenticar
Você pode instalar o {% data variables.product.prodname_desktop %} em qualquer sistema operacional compatível. Para obter mais informações, consulte "[Sistemas operacionais compatíveis](/desktop/getting-started-with-github-desktop/supported-operating-systems)".

Para instalar o {% data variables.product.prodname_desktop %}, acesse a página de download para o [{% data variables.product.prodname_desktop %}](https://desktop.github.com/). Para obter mais informações, consulte "[Installing {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/installing-github-desktop)."

Depois de ter instalado o {% data variables.product.prodname_desktop %}, você pode autenticar o aplicativo com sua conta no {% data variables.product.prodname_dotcom %} ou no {% data variables.product.prodname_enterprise %}. A autenticação permite que você se conecte a repositórios remotos no {% data variables.product.prodname_dotcom %} ou no {% data variables.product.prodname_enterprise %}.

{% mac %}

1. Antes de poder efetuar a autenticação em {% data variables.product.prodname_dotcom %} ou em {% data variables.product.prodname_enterprise %}, você precisará de uma conta. Para obter mais informações sobre criar uma conta, consulte "[Inscrever-se em uma nova conta do {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-a-new-github-account)" ou entre em contato com o administrador de seu site {% data variables.product.prodname_enterprise %}.

2. No menu suspenso {% data variables.product.prodname_desktop %}, clique em **Preferências**. Na janela de preferências, clique em **Contas** e siga os passos para fazer o login. Para obter mais informações sobre a autenticação, consulte "[Efetuar a autenticação no {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)". ![Botão Sign In (Entrar) do GitHub](/assets/images/help/desktop/mac-sign-in-github.png)

{% endmac %}

{% windows %}

1. Antes de poder efetuar a autenticação em {% data variables.product.prodname_dotcom %} ou em {% data variables.product.prodname_enterprise %}, você precisará de uma conta. Para obter mais informações sobre criar uma conta, consulte "[Inscrever-se em uma nova conta do {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/signing-up-for-a-new-github-account)" ou entre em contato com o administrador de seu site {% data variables.product.prodname_enterprise %}.

2. No menu suspenso do arquivo, clique em **Opções**. Na janela de opções, clique em **Contas** e siga as etapas para fazer o login. Para obter mais informações sobre a autenticação, consulte "[Efetuar a autenticação no {% data variables.product.prodname_dotcom %}](/desktop/getting-started-with-github-desktop/authenticating-to-github)". ![Botão Sign In (Entrar) do GitHub](/assets/images/help/desktop/windows-sign-in-github.png)

{% endwindows %}

### Parte 2: Configurar e personalizar o {% data variables.product.prodname_desktop %}
Depois de instalar o {% data variables.product.prodname_desktop %}, você pode configurar e personalizar o aplicativo para melhor atender às suas necessidades.

{% mac %}

Você pode conectar ou remover contas no {% data variables.product.prodname_dotcom %} ou no {% data variables.product.prodname_enterprise %}, escolher um editor de texto padrão ou shell, editar a sua configuração do Git, alterar a aparência de {% data variables.product.prodname_desktop %}, personalizar caixas de diálogo do sistema e configurar preferências de privacidade na janela Preferências do {% data variables.product.prodname_desktop %}. Para obter mais informações, consulte "[Definindo as configurações básicas](/desktop/getting-started-with-github-desktop/configuring-basic-settings)".

  ![As configurações básicas na janela de Preferências](/assets/images/help/desktop/mac-appearance-tab-themes.png)

{% endmac %}

{% windows %}

Você pode conectar ou remover contas no {% data variables.product.prodname_dotcom %} ou no {% data variables.product.prodname_enterprise %}, escolher um editor de texto padrão ou shell, editar a sua configuração do Git, alterar a aparência de {% data variables.product.prodname_desktop %}, personalizar as caixas de diálogo do sistema e configurar preferências de privacidade na janela de Opções do {% data variables.product.prodname_desktop %}. Para obter mais informações, consulte "[Definindo as configurações básicas](/desktop/getting-started-with-github-desktop/configuring-basic-settings)".

  ![As configurações básicas na janela de Opções](/assets/images/help/desktop/windows-appearance-tab-themes.png)

{% endwindows %}

### Parte 3: Contribuir com projetos com {% data variables.product.prodname_desktop %}
Após instalar, efetuar a autenticação e configurar o aplicativo, você está pronto para começar a usar o {% data variables.product.prodname_desktop %}. Você pode criar, adicionar ou clonar repositórios e usar o {% data variables.product.prodname_desktop %} para gerenciar as contribuições dos seus repositórios.

#### Criar, adicionando e clonar repositórios
É possível criar um novo repositório selecionando o menu Arquivo e clicando em **Novo repositório...**. Para obter mais informações, consulte "[Criar seu primeiro repositório usando o {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop)".

Você pode adicionar um repositório a partir do seu computador local selecionando o menu Arquivo e clicando em **Adicionar Repositório Local...**. Para obter mais informações, consulte "[Adicionar um repositório a partir do seu computador local ao {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/adding-a-repository-from-your-local-computer-to-github-desktop)".

Você pode clonar um repositório a partir do {% data variables.product.prodname_dotcom %} selecionando o menu Arquivos e clicando em **Clonar Repositório...**. Para obter mais informações, consulte "[Clonar e bifurcar repositórios do {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop)".

{% mac %}

  ![Opções do menu Arquivo para criar, adicionar e clonar repositórios](/assets/images/help/desktop/mac-file-menu.png)

{% endmac %}

{% windows %}

  ![Opções do menu Arquivo para criar, adicionar e clonar repositórios](/assets/images/help/desktop/windows-file-menu.png)

{% endwindows %}

#### Fazer alterações em um branch
Você pode usar {% data variables.product.prodname_desktop %} para criar um branch de um projeto. Os branches isolam o seu trabalho de desenvolvimento de outros branches no repositório, para que você possa experimentar com segurança as alterações. Para obter mais informações, consulte "[Gerenciar branches](/desktop/contributing-and-collaborating-using-github-desktop/managing-branches)".

  ![O botão do Novo Branch](/assets/images/help/desktop/new-branch-button-mac.png)

Após fazer alterações em um branch, você poderá revisá-las em {% data variables.product.prodname_desktop %} e fazer um commit para acompanhar suas alterações. Para obter mais informações, consulte "[Fazer o commit e revisar as alterações no seu projeto](/desktop/contributing-and-collaborating-using-github-desktop/committing-and-reviewing-changes-to-your-project)".

  ![Visualizar e fazer commits](/assets/images/help/desktop/commit-button.png)

Se você desejar acessar as suas alterações remotamente ou compartilhá-las com outras pessoas, você poderá fazer push dos seus commits para o {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Enviar alterações para o {% data variables.product.prodname_dotcom %}](/desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github)".

#### Colaborar com {% data variables.product.prodname_desktop %}
Você pode usar o {% data variables.product.prodname_desktop %} para criar problemas ou pull requests para colaborar em projetos com outras pessoas. Os problemas ajudam você a monitorar as ideias e a discutir possíveis mudanças nos projetos. Os pull requests permitem que você compartilhe as suas alterações propostas com outras pessoas, receba feedback e mescle as alterações em um projeto. Para obter mais informações, consulte "[Criando um problema ou um pull request](/desktop/contributing-and-collaborating-using-github-desktop/creating-an-issue-or-pull-request)."''

Você poderá visualizar os pull requests do seu próprio colaborador em {% data variables.product.prodname_desktop %}. Visualizar um pull request no {% data variables.product.prodname_desktop %} permite que você veja todas as alterações propostas e faça alterações adicionais abrindo os arquivos e repositórios do projeto no editor de texto padrão. Para obter mais informações, consulte "[Visualizar um pull request no {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop/viewing-a-pull-request-in-github-desktop)".

#### Manter o seu repositório local em sincronia
Ao fazer as alterações nos seus repositórios locais ou quando outras pessoas fizerem alterações nos repositórios remotos, você precisará sincronizar sua cópia local do projeto com o repositório remoto. O {% data variables.product.prodname_desktop %} pode manter sua cópia local de um projeto sincronizada com a versão remota, fazendo push e pull de commits. Para obter mais informações, consulte "[Sincronizando seu branch](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch)".

### Leia mais
- "[Instalar e efetuar a autenticação no {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/installing-and-authenticating-to-github-desktop)"
- "[Contribuir e colaborar usando {% data variables.product.prodname_desktop %}](/desktop/contributing-and-collaborating-using-github-desktop)"
