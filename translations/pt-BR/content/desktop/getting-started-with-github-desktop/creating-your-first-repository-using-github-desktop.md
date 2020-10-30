---
title: Criar o primeiro repositório usando o GitHub Desktop
intro: 'Você pode usar o {% data variables.product.prodname_desktop %} para começar a trabalhar com um repositório Git sem depender da linha de comando.'
versions:
  free-pro-team: '*'
---

### Introdução

Este guia documenta o processo de uso do {% data variables.product.prodname_desktop %} para trabalhar em um repositório Git. O {% data variables.product.prodname_desktop %} amplia e simplifica o fluxo de trabalho no {% data variables.product.prodname_dotcom_the_website %} com uma interface visual, em vez de comandos de texto na linha de comando. Ao fim da leitura deste guia, você terá usado o {% data variables.product.prodname_desktop %} para criar um repositório, alterá-lo e publicar as alterações no {% data variables.product.prodname_dotcom_the_website %} ou no {% data variables.product.prodname_ghe_server %}.

Depois de baixar o {% data variables.product.prodname_desktop %} e entrar no {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}, você pode criar e clonar um repositório de tutorial. O tutorial apresentará os conceitos básicos de trabalhar com o Git e o {% data variables.product.prodname_dotcom %}, incluindo instalar um editor, criar um branch, fazer um commit, enviar para o {% data variables.product.prodname_dotcom_the_website %} e criar uma pull request. O tutorial será disponibilizado desde que você ainda não tenha repositórios no {% data variables.product.prodname_desktop %}.

### Etapa 1. Instalar e entrar no {% data variables.product.prodname_desktop %}

1. Baixe o {% data variables.product.prodname_desktop %} em {% data variables.product.desktop_link %}. O {% data variables.product.prodname_desktop %} dá suporte às versões mais recentes do Windows e do Mac. Para obter as instruções específicas de instalação no seu sistema operacional, consulte "[Instalar o {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/installing-github-desktop)."

2. Inicie o {% data variables.product.prodname_desktop %} e siga o fluxo inicial de boas-vindas para acessar sua conta do {% data variables.product.product_name %}. Na etapa "Configure Git" (Configurar Git), será possível definir seu nome e endereço de e-mail. Para garantir a atribuição adequada dos commits à sua conta do {% data variables.product.product_name %}, use o endereço de e-mail associado à conta do {% data variables.product.product_name %}. Para obter mais informações sobre a atribuição de commits, consulte "[Configurar o endereço de e-mail do commit](/articles/setting-your-commit-email-address)".

### Etapa 2. Criar um repositório

Você verá uma exibição "Let's get started!" (Vamos começar!), onde é possível optar por criar e clonar um repositório de tutorial, clonar um repositório existente, criar um repositório ou adicionar um repositório existente.

#### Criar e clonar um repositório de tutorial

1. Clique em **Create a tutorial repository and clone it** (Criar um repositório de tutorial e cloná-lo). ![Botão Create and clone a tutorial repository (Criar e clonar um repositório de tutorial)](/assets/images/help/desktop/getting-started-guide/create-and-clone-a-tutorial-repository.png)
2. Siga as solicitações no tutorial.

#### Criar um repositório

1. Clique em **Create a New Repository on your hard drive** (Criar um repositório no disco rígido). ![Criar um repositório](/assets/images/help/desktop/getting-started-guide/creating-a-repository.png)
2. Para criar um novo repositório, preencha os campos: ![Opções de criar um repositório](/assets/images/help/desktop/getting-started-guide/create-a-new-repository-options.png)
   - "Name" (Nome) define o nome do repositório no local e no {% data variables.product.product_name %}.
   - "Description" (Descrição) é um campo opcional com mais informações sobre o propósito do repositório.
   - "Local path" (Caminho local) define o local do repositório no computador. Por padrão, o {% data variables.product.prodname_desktop %} cria uma pasta _GitHub_ dentro da pasta _Documents_ (Documentos) para armazenar seus repositórios, mas é possível escolher qualquer local no computador. O novo repositório será uma pasta dentro do local escolhido. Por exemplo, se você nomear o repositório como `Tutorial`, será criada uma pasta de nome _Tutorial_ dentro da pasta no caminho selecionado. O {% data variables.product.prodname_desktop %} registra o local escolhido para as próximas vezes que você criar ou clonar repositórios.
   - A opção **Initialize this repository with a README** (Inicializar este repositório com um LEIAME) cria o commit com um arquivo _LEIAME.md_. Arquivos LEIAME ajudam as pessoas a entenderem o objetivo do seu projeto. Portanto, é recomendável usar esse item e adicionar informações úteis a ele. Quando alguém acessar seu repositório no {% data variables.product.product_name %}, a primeira informação exibida será o LEIAME. Para obter mais informações, consulte "[Sobre LEIAME](/articles/about-readmes)".
   - O menu suspenso **Git ignore** (Git para ignorar) permite incluir um arquivo personalizado para ignorar determinados arquivos no repositório local, isto é, informações que você não quer armazenar no controle de versão. Se houver uma linguagem ou framework específico para uso, você poderá selecionar uma opção na lista disponível. Se você estiver começando agora, fique à vontade para ignorar essa opção. Para obter mais informações, consulte "[Ignorar arquivos](/articles/ignoring-files)".
   - O menu suspenso **License** (Licença) permite adicionar uma licença de código aberto a um arquivo _LICENSE_ no repositório. Não se preocupe em adicionar uma licença de imediato. Para obter mais informações sobre as licenças de código aberto disponíveis e sobre como adicioná-las ao repositório, consulte "[Criar a licença de um repositório](/articles/licensing-a-repository)."
3. Clique em **Create Repository** (Criar repositório).

### Etapa 3. Explorar o {% data variables.product.prodname_desktop %}

Agora que você criou um repositório, o menu de arquivos aparecerá na parte superior da tela. É nele que você pode acessar as configurações e ações possíveis no {% data variables.product.prodname_desktop %}. A maioria das ações tem atalhos de teclado para aumentar a eficiência do seu trabalho. Para obter uma lista completa de atalhos de teclado, consulte "[Atalhos de teclado](/desktop/getting-started-with-github-desktop/keyboard-shortcuts)".

1. Abaixo do menu, uma barra mostra o estado atual do repositório no {% data variables.product.prodname_desktop %}:
    - **Current repository** (Repositório atual) mostra o nome do repositório em que você está trabalhando. Você pode clicar em **Current repository** (Repositório atual) para alternar entre repositórios no {% data variables.product.prodname_desktop %}.
    - **Current branch** (Branch atual) mostra o nome do branch em que você está trabalhando. Você pode clicar em **Current branch** (Branch atual) para exibir todos os branches do repositório, alternar entre branches ou criar um branch. Depois de criar pull requests no repositório, você também poderá exibi-las clicando em **Current branch** (Branch atual).
    - A opção **Publish repository** (Publicar repositório) aparece porque você ainda não publicou o repositório no {% data variables.product.product_name %}. A publicação será feita depois, em outra etapa.

  ![Explorar o GitHub Desktop](/assets/images/help/desktop/getting-started-guide/explore-github-desktop.png)

2. Na barra lateral à esquerda, você verá **Changes** (Alterações) e **History** (Histórico).

    - A opção **Changes** (Alterações) mostra as mudanças que você fez nos arquivos do branch atual, mas que ainda estão sem commit no repositório local. Na parte inferior, você verá as caixas "Summary" (Resumo) e "Description" (Descrição), além do botão **Commit to master** (Fazer commit para o mestre). É nessa área que você fará o commit das novas alterações. O botão **Commit** (Fazer commit) mostra para qual branch você fará o commit das alterações. ![Área do commit](/assets/images/help/desktop/getting-started-guide/commit-area.png)

    - A opção **History** (Histórico) mostra os commits anteriores no branch atual do repositório. Provavelmente você verá um "Initial commit" (Commit inicial) criado pelo {% data variables.product.prodname_desktop %} quando você criou o repositório. À direita do commit, dependendo das opções escolhidas durante a criação do repositório, você poderá ver arquivos _.gitattributes_, _.gitignore_, _LICENÇA_ ou _LEIAME_. Ao clicar em cada arquivo você verá o diff, que consiste no registro das alterações feitas no arquivo do commit em questão. O diff não mostra todo o conteúdo do arquivo, mas somente as partes que foram alteradas. ![Exibição de histórico](/assets/images/help/desktop/getting-started-guide/history-view.png)

### Etapa 4. Fazer push do repositório para o {% data variables.product.product_name %}

No momento, o repositório só existe no seu computador e somente você pode acessá-lo. Publicar o repositório no {% data variables.product.product_name %} vai mantê-lo sincronizado em vários computadores e para todos os integrantes das equipes do projeto em questão. Para publicar o repositório, você fará o "push" dele no {% data variables.product.product_name %}, o que também o deixará disponível no {% data variables.product.prodname_dotcom_the_website %}.

1. Clique em **Publish repository** (Publicar repositório). ![Publicar repositório](/assets/images/help/desktop/getting-started-guide/publish-repository.png)
   - Você verá alguns campos familiares. "Name" (Nome) e "Description" (Descrição) são os mesmos que você preencheu ao criar o repositório.
   - Você verá a opção **Keep this code private** (Manter este código privado). Selecione-a se não quiser compartilhar seu código publicamente com outros usuários no {% data variables.product.product_name %}.
   - A opção suspensa **Organization** (Organização), se houver, permite publicar o repositório em uma organização específica a que você pertença no {% data variables.product.product_name %}. Não tem problema se você ainda não for integrante de uma organização. ![Etapas para publicar repositório](/assets/images/help/desktop/getting-started-guide/publish-repository-steps.png)
2. Clique em **Publish repository** (Publicar repositório).
3. É possível acessar o repositório no {% data variables.product.prodname_dotcom %} pelo {% data variables.product.prodname_desktop %}. No menu do arquivo, clique em **Repository** (Repositório) e em **View on GitHub** (Exibir no GitHub). Fazer isso levará você diretamente para o repositório no seu navegador padrão.

Agora que o repositório foi publicado, vamos voltar ao {% data variables.product.prodname_desktop %} e fazer mais alterações no repositório local. Começaremos mostrando como configurar um editor de texto padrão.

### Etapa 5. Configurar um editor de texto

Para reduzir o tempo de configuração do ambiente de desenvolvimento, é possível iniciar vários editores de texto e ambientes de desenvolvimento integrado (IDE) diretamente no {% data variables.product.prodname_desktop %}. Em um repositório no {% data variables.product.prodname_desktop %}, você pode abrir a pasta do projeto no seu editor de texto favorito.

1. Clique em **File** (Arquivo), **Options** (Opções) e **Advanced** (Avançado).
2. Use o menu suspenso **External editor** (Editor externo) e selecione um editor. A lista mostrará todos os editores instalados. Se a lista estiver vazia, instale um editor compatível, como o [Atom](https://atom.io). Para obter uma lista dos editores compatíveis, consulte a integração ["Abrir editores externos" ](https://github.com/desktop/desktop/blob/development/docs/technical/editor-integration.md#windows) no repositório do {% data variables.product.prodname_desktop %}. ![Editor externo](/assets/images/help/desktop/mac-editor-menu.png)
3. Caso tenha instalado um editor, reinicie o {% data variables.product.prodname_desktop %} para fazê-lo aparecer na lista suspensa **External editor** (Editor externo).

### Etapa 6. Fazer commit e push das alterações

Agora que você configurou um editor padrão, será possível fazer alterações no projeto e começar a criar seu primeiro commit no repositório.

1. Para iniciar o editor externo pelo {% data variables.product.prodname_desktop %}, clique em **Repository** (Repositório) e em **Open in <em>EDITOR</em>** (Abrir no EDITOR). ![Abrir no editor](/assets/images/help/desktop/getting-started-guide/open-in-editor.png)

2. Comece fazendo algumas alterações no arquivo _README.md_ criado anteriormente. Adicione informações que descrevam o projeto, como a função, a relevância e a utilidade dele. Lembre-se de que esta será a primeira interação das pessoas com o seu projeto. Depois disso, estará tudo pronto para fazer o seu primeiro commit!
3. Saia do editor de texto, volte para o {% data variables.product.prodname_desktop %} e navegue até a guia **Changes** (Alterações). Na lista de arquivos, você verá o _README.md_ alterado. A marca de verificação no arquivo _README.md_ indica que as alterações feitas serão parte do seu commit. Talvez você queira fazer alterações em vários arquivos no futuro, mas sem fazer o commit das alterações de todos eles. O {% data variables.product.prodname_desktop %} permite selecionar somente as alterações que você pretende incluir no commit. ![Exibir alterações](/assets/images/help/desktop/getting-started-guide/viewing-changes.png)

4. Na parte inferior da lista **Changes** (Alterações), adicione uma mensagem ao commit. À direita da sua foto de perfil, digite uma breve descrição do commit. Já que estamos alterando o arquivo _README.md_, algo como "Adicionar informações sobre o propósito do projeto" seria um bom resumo. Abaixo do resumo, o campo de texto "Description" (Descrição) permite digitar uma descrição mais longa das alterações feitas no commit. Essa descrição pode ser útil para analisar o histórico de um projeto e entender o motivo das alterações. Como estamos fazendo uma atualização básica do arquivo _README.md_, fique à vontade para ignorar a descrição. ![Mensagem do commit](/assets/images/help/desktop/getting-started-guide/commit-message.png)
5. Clique em **Commit to master** (Fazer commit para o mestre). O botão do commit mostra o branch atual (`mestre`, neste caso) para que você tenha certeza de fazer commit para o branch desejado. ![Fazer commit para o mestre](/assets/images/help/desktop/getting-started-guide/click-commit-to-master.png)
6. Para fazer push das alterações no repositório remote no {% data variables.product.product_name %}, clique em **Push origin** (Fazer push da origem). ![Fazer push de origem](/assets/images/help/desktop/getting-started-guide/push-to-origin.png)
   - Você se lembra do botão **Publish** (Publicar) usado para publicar o repositório no {% data variables.product.product_name %}? Agora, ele deve mostrar `Push origin` (Fazer push da origem) com um número `1` ao lado, indicando que ainda não foi feito o push de um commit para o {% data variables.product.product_name %}.
   - O termo "origem" na opção **Push origin** (Fazer push da origem) indica que estamos fazendo push das alterações para o remote chamado `origem` que, neste caso, é o repositório do seu projeto no {% data variables.product.prodname_dotcom_the_website %}. Até você fazer o push de qualquer commit para o {% data variables.product.product_name %}, haverá diferenças entre o repositório do seu projeto no computador e o repositório do seu projeto no {% data variables.product.prodname_dotcom_the_website %}. Assim, você pode trabalhar no local e deixar para fazer push do seu trabalho no {% data variables.product.prodname_dotcom_the_website %} quando estiver tudo pronto.
7. Na área aberta ao lado da guia **Changes** (Alterações), você verá uma série de sugestões das suas próximas ações. Para abrir o repositório no {% data variables.product.product_name %} no navegador, clique em **View on GitHub** (Exibir no GitHub). ![Exibir no GitHub](/assets/images/help/desktop/getting-started-guide/view-on-github.png)
8. No navegador, clique em **2 commits**. Você verá uma lista dos commits neste repositório no {% data variables.product.product_name %}. O primeiro commit deve ser o que você acabou de fazer no {% data variables.product.prodname_desktop %}! ![Clicar em dois commits](/assets/images/help/desktop/getting-started-guide/click-two-commits.png)

### Conclusão

Parabéns! Você acabou de criar e publicar um repositório no {% data variables.product.product_name %}, e também fez um commit e fez push das alterações. Isso é apenas o começo! Você pode fazer muito mais com o {% data variables.product.product_name %} e o {% data variables.product.prodname_desktop %}. Esperamos que esse exercício estimule a sua vontade de conhecer ainda mais nossos recursos e possibilidades.
