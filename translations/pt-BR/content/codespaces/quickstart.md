---
title: Início rápido para o GitHub Codespaces
intro: 'Experimente {% data variables.product.prodname_codespaces %} em 5 minutos ou menos.'
allowTitleToDifferFromFilename: true
versions:
  free-pro-team: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
---

{% data reusables.codespaces.release-stage %}

### Introdução

Neste guia, você criará um codespace a partir do [repositório de amostra](https://github.com/2percentsilk/haikus-for-codespaces) e explorará algumas das funcionalidades essenciais disponíveis para você dentro do codespace.

O exemplo a seguir mostra como criar um codespace, conectar-se a uma porta encaminhada para visualizar o seu aplicativo de execução e personalizar sua configuração com extensões e dotfiles.

### Criando seu codespace

1. Acesse a página principal do [repositório de amostra](https://github.com/2percentsilk/haikus-for-codespaces).

2. No nome do repositório, use o menu suspenso do {% octicon "download" aria-label="The download icon" %} **Código** e selecione **Abrir com os espaços de código**.

  ![Botão de abrir com codespaces](/assets/images/help/codespaces/open-with-codespaces-button.png)

3. Para criar um codespace, clique em {% octicon "plus" aria-label="The plus icon" %} **Novo codespace**.

  ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

### Execute o aplicativo

Com o seu projeto aberto em um codespace, agora você pode executar o aplicativo e abri-lo em um navegador.

1. Inicie o aplicativo digitando `npm run dev` no terminal. Este comando executa o script `dev` no arquivo package.json e inicia o aplicativo web definido no repositório de exemplo.

   ![npm run dev no terminal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

2. Quando o seu projeto for iniciado, você deverá ver um alerta no canto inferior direito com uma instrução para conectar-se à porta que seu projeto usa.

  ![Notificação de encaminhamento de porta](/assets/images/help/codespaces/quickstart-port-toast.png)

3. Clique em **Abrir no navegador** para visualizar seu aplicativo em execução em uma nova aba.

### Personalize com uma extensão de tema

Dentro de um codespace, você tem acesso ao Marketplace do Visual Studio Code. Para este exemplo, você instalará uma extensão que altera o tema, mas você pode instalar qualquer extensão que seja útil para o seu fluxo de trabalho.

1. Na barra lateral esquerda, clique no ícone Extensões.

2.  Na barra de pesquisa, digite `fairyfloss` e instale a extensão fairyfloss.

  ![Adicionar extensão](/assets/images/help/codespaces/add-extension.png)

3. Selecione o tema `fairyfloss` selecionando-o na lista.

  ![Selecionar tema fairyfloss](/assets/images/help/codespaces/fairyfloss.png)

4. Alterações feitas na sua configuração de editor no espaço do código atual, como ligações de tema e teclado, são sincronizadas automaticamente em outros códigos por meio de [Sincronizar configurações](https://code.visualstudio.com/docs/editor/settings-sync).

### Personalizar com dotfiles

Se a sua conta de usuário no GitHub possuir um dotfiles com nome de repositório público, o GitHub usará automaticamente esse repositório para personalizar seu ambiente de código durante a criação de um codespace.

Este exemplo apresenta a você a criação de um repositório de dotfiles para os seus codespaces.

1. Acesse a amostra do [repositório de dotfiles](https://github.com/aw-test-93/dotfiles/).

2. Bifurque o repositório na sua conta e certifique-se de que seja público.

   Verifique se o repositório criado na sua conta tem o nome dotfiles, por exemplo `yourname/dotfiles`. Qualquer outro nome fará com que o {% data variables.product.prodname_codespaces %} ignore o repositório para personalização.

3. Crie um novo codespace a partir do [repositório do aplicativo de amostra](https://github.com/2percentsilk/haikus-for-codespaces) já que as atualizações do dotfile só serão aplicadas no momento da criação. Os arquivos de exemplo irão alterar o prompt de comando para texto roxo e azul em negrito.

  ![Instrução de comando personalizado](/assets/images/help/codespaces/custom-prompt.png)

### Próximos passos

Você criou com sucesso, personalizou e executou seu primeiro aplicativo em um codespace, mas há muito mais para explorar! Aqui estão alguns recursos úteis para dar seus próximos passos com {% data variables.product.prodname_codespaces %}.
  - "[Guias dos primeiros passos](/codespaces/getting-started-with-codespaces)" para usar {% data variables.product.prodname_codespaces %} com linguagens específicas
  - [Crie uma configuração personalizada](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project) para configurar {% data variables.product.prodname_codespaces %} para o seu projeto.
