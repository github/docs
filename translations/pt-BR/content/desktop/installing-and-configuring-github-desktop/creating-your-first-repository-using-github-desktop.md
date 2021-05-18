---
title: Criar o primeiro repositório usando o GitHub Desktop
shortTitle: Criar o seu primeiro repositório
intro: 'Você pode usar o {% data variables.product.prodname_desktop %} para criar e gerenciar um repositório do Git sem usar a linha de comando.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/creating-your-first-repository-using-github-desktop
versions:
  free-pro-team: '*'
---

### Introdução
O {% data variables.product.prodname_desktop %} amplia e simplifica o fluxo de trabalho no {% data variables.product.prodname_dotcom_the_website %} com uma interface visual, em vez de comandos de texto na linha de comando. Ao fim da leitura deste guia, você usará o {% data variables.product.prodname_desktop %} para criar um repositório, alterá-lo e publicar as alterações no {% data variables.product.product_name %}.

Depois de instalar o {% data variables.product.prodname_desktop %} e entrar no {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}, você pode criar e clonar um repositório de tutorial. O tutorial apresentará os conceitos básicos de trabalho com o Git e o {% data variables.product.prodname_dotcom %}, incluindo a instalação de um editor de texto, criando um branch, fazendo um commit, fazendo push para {% data variables.product.prodname_dotcom_the_website %} e abrindo um pull request. O tutorial está disponível caso você ainda não tenha nenhum repositório no {% data variables.product.prodname_desktop %}.

Recomendamos concluir o tutorial, mas se você desejar explorar o {% data variables.product.prodname_desktop %} criando um novo repositório, este guia irá orientar você a usar o {% data variables.product.prodname_desktop %} para funcionar em um repositório do Git.

### Parte 1: Instalando {% data variables.product.prodname_desktop %} e autenticando sua conta
Você pode instalar o {% data variables.product.prodname_desktop %} em qualquer sistema operacional compatível. Depois de instalar o app, você deverá entrar e autenticar sua conta no {% data variables.product.prodname_dotcom %} ou no {% data variables.product.prodname_enterprise %} antes de criar e clonar um repositório de tutorial.

Para obter mais informações sobre instalação e autenticação, consulte "[Configurando o {% data variables.product.prodname_desktop %}](/desktop/installing-and-configuring-github-desktop/setting-up-github-desktop)".

### Parte 2: Criando um novo repositório
Se você não tiver nenhum repositório associado ao {% data variables.product.prodname_desktop %}, você verá a frase "Vamos começar!", em que você pode optar por criar e clonar um repositório de tutorial, clonar um repositório da Internet existente, criar um novo repositório ou adicionar um repositório existente a partir do seu disco rígido. ![Vamos começar! screen](/assets/images/help/desktop/lets-get-started.png)

#### Criar e clonar um repositório de tutorial
Recomendamos que você crie e clone um repositório de tutorial como seu primeiro projeto a ser praticado usando o {% data variables.product.prodname_desktop %}.

1. Clique em **Create a tutorial repository and clone it** (Criar um repositório de tutorial e cloná-lo). ![Botão Create and clone a tutorial repository (Criar e clonar um repositório de tutorial)](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Siga as instruções no tutorial para instalar um editor de texto, criar um branch, editar um arquivo, fazer um commit, publicar em {% data variables.product.prodname_dotcom %} e abrir um pull request.

#### Criar um repositório
Se você não desejar criar e clonar um repositório de tutorial, é possível criar um novo repositório.

1. Clique em **Create a New Repository on your hard drive** (Criar um repositório no disco rígido). ![Criar um repositório](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Preencha os campos e selecione as suas opções preferidas. ![Opções de criar um repositório](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - "Name" (Nome) define o nome do repositório no local e no {% data variables.product.product_name %}.
   - "Description" (Descrição) é um campo opcional com mais informações sobre o propósito do repositório.
   - "Local path" (Caminho local) define o local do repositório no computador. Por padrão, o {% data variables.product.prodname_desktop %} cria uma pasta _GitHub_ dentro da pasta _Documents_ (Documentos) para armazenar seus repositórios, mas é possível escolher qualquer local no computador. O novo repositório será uma pasta dentro do local escolhido. Por exemplo, se você nomear o repositório como `Tutorial`, será criada uma pasta de nome _Tutorial_ dentro da pasta no caminho selecionado. O {% data variables.product.prodname_desktop %} registra o local escolhido para as próximas vezes que você criar ou clonar repositórios.
   - A opção **Initialize this repository with a README** (Inicializar este repositório com um README) cria o commit com um arquivo _README.md_. Arquivos README ajudam as pessoas a entenderem o objetivo do seu projeto. Portanto, é recomendável usar esse item e adicionar informações úteis a ele. Quando alguém acessar seu repositório no {% data variables.product.product_name %}, a primeira informação exibida será o README. Para obter mais informações, consulte "[Sobre README](/articles/about-readmes)".
   - O menu suspenso **Git ignore** (Git para ignorar) permite incluir um arquivo personalizado para ignorar determinados arquivos no repositório local, isto é, informações que você não quer armazenar no controle de versão. Se houver uma linguagem ou framework específico para uso, você poderá selecionar uma opção na lista disponível. Se você estiver começando agora, fique à vontade para ignorar essa opção. Para obter mais informações, consulte "[Ignorar arquivos](/github/getting-started-with-github/ignoring-files)".
   - O menu suspenso **License** (Licença) permite adicionar uma licença de código aberto a um arquivo _LICENSE_ no repositório. Não se preocupe em adicionar uma licença de imediato. Para obter mais informações sobre as licenças de código aberto disponíveis e sobre como adicioná-las ao repositório, consulte "[Criar a licença de um repositório](/articles/licensing-a-repository)."
3. Clique em **Create Repository** (Criar repositório).

### Parte 3: Explorando o {% data variables.product.prodname_desktop %}
No menu de arquivos na parte superior da tela, você pode acessar as configurações e ações que pode executar no {% data variables.product.prodname_desktop %}. A maioria das ações tem atalhos de teclado para aumentar a eficiência do seu trabalho. Para obter uma lista completa de atalhos de teclado, consulte "[Atalhos de teclado](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)".

#### A barra de menu do {% data variables.product.prodname_desktop %}
Na parte superior do aplicativo {% data variables.product.prodname_desktop %}, você verá uma barra que mostra o estado atual do seu repositório.
  - **Current repository** (Repositório atual) mostra o nome do repositório em que você está trabalhando. Você pode clicar em **Current repository** (Repositório atual) para alternar entre repositórios no {% data variables.product.prodname_desktop %}.
  - **Current branch** (Branch atual) mostra o nome do branch em que você está trabalhando. Você pode clicar em **Current branch** (Branch atual) para exibir todos os branches do repositório, alternar entre branches ou criar um branch. Depois de criar pull requests no repositório, você também poderá exibi-las clicando em **Current branch** (Branch atual).
  - A opção **Publish repository** (Publicar repositório) aparece porque você ainda não publicou o repositório no {% data variables.product.product_name %}. A publicação será feita depois, em outra etapa. Esta seção da barra mudará com base no status de seu branch atual e repositório. Diferentes ações dependentes de contextos estarão disponíveis para o intercâmbio de dados entre repositórios locais e remotos.

  ![Explorar o GitHub Desktop](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

#### Alterações e histórico
Na barra lateral à esquerda, você verá **Changes** (Alterações) e **History** (Histórico). ![Abas Alterações e Histórico](/assets/images/help/desktop/changes-and-history.png)

  - A opção **Changes** (Alterações) mostra as mudanças que você fez nos arquivos do branch atual, mas que ainda estão sem commit no repositório local. Na parte inferior, há uma caixa com caixas de texto "Resumo" e "Descrição" e um botão **Commit para BRANCH**. É nessa área que você fará o commit das novas alterações. O botão **Commit para BRANCH** é dinâmico e irá exibir em qual branch você está fazendo o commit das suas alterações. ![Área do commit](/assets/images/help/desktop/getting-started-guide/commit-area.png)

  - A opção **History** (Histórico) mostra os commits anteriores no branch atual do repositório. Provavelmente você verá um "Initial commit" (Commit inicial) criado pelo {% data variables.product.prodname_desktop %} quando você criou o repositório. À direita do commit, dependendo das opções escolhidas durante a criação do repositório, você poderá ver arquivos _.gitattributes_, _.gitignore_, _LICENÇA_ ou _README_. Ao clicar em cada arquivo você verá o diff, que consiste no registro das alterações feitas no arquivo do commit em questão. O diff não mostra todo o conteúdo do arquivo, mas somente as partes que foram alteradas. ![Exibição de histórico](/assets/images/help/desktop/getting-started-guide/history-view.png)

### Parte 4: Publicando seu repositório no {% data variables.product.product_name %}
Ao criar um novo repositório, ele existe apenas no seu computador e você é o único que pode acessar o repositório. Você pode publicar seu repositório no {% data variables.product.product_name %} para mantê-lo sincronizado em vários computadores e permitir que outras pessoas o acessem. Para publicar seu repositório, faça push de suas alterações locais no {% data variables.product.product_name %}.

1. Clique em **Publicar repositório** na barra de menu. ![Publicar repositório](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
    - O {% data variables.product.prodname_desktop %} preenche automaticamente os campos "Nome" e "Descrição" com as informações inseridas quando você criou o repositório.
    - A opção de **Manter este código privado** permite que você controle quem pode visualizar o seu projeto. Se você deixar esta opção desmarcada, outros usuários em {% data variables.product.product_name %} poderão visualizar o seu código. Se você selecionar esta opção, o seu código não ficará disponível publicamente.
    - Se estiver presente, o menu suspenso da **Organização** permite que você publique o seu repositório em uma organização específica à qual você pertence no {% data variables.product.product_name %}.

    ![Etapas para publicar repositório](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
  2. Clique no botão **Publish Repository** (Publicar repositório).
  3. É possível acessar o repositório no {% data variables.product.prodname_dotcom %} pelo {% data variables.product.prodname_desktop %}. No menu do arquivo, clique em **Repository** (Repositório) e em **View on GitHub** (Exibir no GitHub). Fazer isso levará você diretamente para o repositório no seu navegador padrão.

### Parte 5: Fazer commit e carregar as alterações
Agora que você criou e publicou seu repositório, você está pronto para fazer alterações no seu projeto e começar a criar seu primeiro commit no seu repositório.

1. Para abrir o editor externo dentro de {% data variables.product.prodname_desktop %}, clique em **Repositório** e, em seguida, clique em **Abrir no <em>EDITOR</em>**. Para obter mais informações, consulte "[Configurar um editor padrão](/desktop/getting-started-with-github-desktop/configuring-a-default-editor)". ![Abrir no editor](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Faça algumas alterações no arquivo _README.md_ que você criou anteriormente. Você pode adicionar informações que descrevem o seu projeto, como o que ele faz e por que ele é útil. Quando estiver satisfeito com suas alterações, salve-as no editor de texto.
3. Em {% data variables.product.prodname_desktop %}, acesse a vista **Alterações**. Na lista de arquivos, você verá o _README.md_ alterado. A marca de verificação à esquerda do arquivo _README.md_ indica que as alterações feitas no arquivo serão parte do commit que você fez. Talvez você queira fazer alterações em vários arquivos no futuro, mas sem fazer o commit das alterações de todos eles. Se você clicar na marca de seleção ao lado de um arquivo, esse arquivo não será incluído no commit. ![Exibir alterações](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. Na parte inferior da lista **Changes** (Alterações), adicione uma mensagem ao commit. À direita da sua foto de perfil, digite uma breve descrição do commit. Já que estamos alterando o arquivo _README.md_, algo como "Adicionar informações sobre o propósito do projeto" seria um bom resumo. Abaixo do resumo, o campo de texto "Descrição" permite digitar uma descrição mais longa das alterações feitas no commit. Essa descrição pode ser útil para analisar o histórico de um projeto e entender o motivo das alterações. Como estamos fazendo uma atualização básica do arquivo _README.md_, fique à vontade para ignorar a descrição. ![Mensagem do commit](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. Clique em **Fazer commit do NOME DO BRANCH**. O botão do commit mostra o seu branch atual. Dessa forma, você pode ter certeza de que deseja fazer o commit no branch desejado. ![Fazer commit de um branch](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. Para fazer push das alterações no repositório remote no {% data variables.product.product_name %}, clique em **Push origin** (Fazer push da origem). ![Fazer push de origem](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
  - O botão **Subir origem** é o mesmo que você clicou para publicar o seu repositório no {% data variables.product.product_name %}. Este botão muda contextualmente de acordo com o local em que você está no fluxo de trabalho do Git. Agora, ele deve mostrar `Fazer push da origem` com um número `1` ao lado, indicando que ainda não foi feito o push de um commit para o {% data variables.product.product_name %}.
  - O termo "origem" na opção **Fazer push da origem** indica que estamos fazendo push das alterações para o repositório remoto denominado `origem` que, neste caso, é o repositório do seu projeto no {% data variables.product.prodname_dotcom_the_website %}. Até você fazer o push de qualquer commit para o {% data variables.product.product_name %}, haverá diferenças entre o repositório do seu projeto no computador e o repositório do seu projeto no {% data variables.product.prodname_dotcom_the_website %}. Assim, você pode trabalhar no local e deixar para fazer push das suas alterações no {% data variables.product.prodname_dotcom_the_website %} quando estiver tudo pronto.
7. Na janela à direita da vista de **Alterações**, você verá sugestões de ações que podem ser feitas a seguir. Para abrir o repositório no {% data variables.product.product_name %} no seu navegador, clique em **Visualizar no {% data variables.product.product_name %}**. ![Ações disponíveis](/assets/images/help/desktop/available-actions.png)
8. No navegador, clique em **2 commits**. Você verá uma lista dos commits neste repositório no {% data variables.product.product_name %}. O primeiro commit deve ser o que você acabou de fazer no {% data variables.product.prodname_desktop %}. ![Clicar em dois commits](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### Conclusão
Agora você criou um repositório, publicou o repositório no {% data variables.product.product_name %}, fez um commit e fez push das suas alterações no {% data variables.product.product_name %}. Você pode seguir esse mesmo fluxo de trabalho ao contribuir para outros projetos os quais você cria ou nos quais você colabora.

### Leia mais
- "[Primeiros passos com o Git](/github/getting-started-with-github/getting-started-with-git)"
- "[Aprender sobre {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/learning-about-github)"
- "[Começar com {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github)"
