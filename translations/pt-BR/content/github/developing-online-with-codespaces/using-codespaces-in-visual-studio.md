---
title: Usar Codespaces no Visual Studio
intro: 'Você pode desenvolver seu código diretamente em {% data variables.product.prodname_vs %} conectando-se com sua conta no {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  free-pro-team: '*'
---

{% note %}

**Observação:** {% data variables.product.prodname_codespaces %} está atualmente em versão beta pública limitada e sujeito a alterações. Durante o período beta, {% data variables.product.prodname_dotcom %} não faz nenhuma garantia sobre a disponibilidade de {% data variables.product.prodname_codespaces %}. [Cadastre-se para o beta público limitado](https://github.com/features/codespaces/signup-vs). Para obter mais informações sobre fontes de publicação, consulte "[About {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces#joining-the-beta)."

{% endnote %}

### Sobre os espaços de código no {% data variables.product.prodname_vs %}

Você pode criar um código no {% data variables.product.prodname_vs %} para desenvolver aplicativos em um ambiente Windows. Ao usar um código em {% data variables.product.prodname_vs %}, você pode navegar pelo código-fonte, criar soluções e fazer commit de alterações no seu repositório.

Você deve criar um codespace em {% data variables.product.prodname_vs %} para usá-lo com o aplicativo. Os codespaces criados fora do {% data variables.product.prodname_vs %} não podem ser usados atualmente com {% data variables.product.prodname_vs %}.

### Pré-requisitos

Antes de configurar um código em {% data variables.product.prodname_vs %}, você deve fazer o download da última versão da pré-visualização de [{% data variables.product.prodname_vs %}](https://aka.ms/vspreview).

#### Habilitar a conexão entre {% data variables.product.prodname_vs %} e {% data variables.product.prodname_github_codespaces %}

A conexão ao {% data variables.product.prodname_github_codespaces %} com a pré-visualização de {% data variables.product.prodname_vs %} não está habilitado por padrão. Portanto, você primeiro deverá habilitar o recurso de pré-visualização.

1. Na visualização do {% data variables.product.prodname_vs %}, use o menu suspenso Ferramentas e, em seguida, clique em **Opções**.
2. Em **Ambiente**, selecione **Recursos de pré-visualização** e verifique o recurso de pré-visualização **Conectar a {% data variables.product.prodname_github_codespaces %}**. ![Verifique o recurso de pré-visualização conectar ao {% data variables.product.prodname_github_codespaces %}](/assets/images/help/codespaces/connect-to-github-codespaces-preview-feature.png)
3. Será necessário reiniciar o {% data variables.product.prodname_vs %} para que o recurso esteja disponível.

### Criar um codespace em {% data variables.product.prodname_vs %}

1. Quando você iniciar o {% data variables.product.prodname_vs %}, a Janela Inicial irá exibir um botão **Conectar-se a um codespace** em "Iniciar". ![Janela de início do Visual Studio com a conexão a um codespace](/assets/images/help/codespaces/visual-studio-start-window.png)
2. Clique em **Conectar-se a um codespace**.
3. Clique em **Efetuar login em {% data variables.product.prodname_dotcom %}** e siga as instruções ou clique em **Criar uma!** para criar uma nova conta de {% data variables.product.prodname_dotcom %} e entrar na conta. ![Login do Visual Studio em {% data variables.product.prodname_dotcom %}](/assets/images/help/codespaces/visual-studio-sign-in-to-github.png)
4. Em "Informações de codespace", digite a URL do repositório que você deseja que o {% data variables.product.prodname_github_codespaces %} clone no seu codespace.
5. Opcionalmente, use o tipo de instância e suspenda após os menus suspensos para configurar mais informações do codespace. ![Detalhes do codespace do Visual Studio](/assets/images/help/codespaces/visual-studio-codespace-details.png)
6. Clique em **Criar e conectar**. {% data variables.product.prodname_github_codespaces %} começará a preparar o codespace e abrirá {% data variables.product.prodname_vs %} depois que o codespace estiver pronto. O nome do codespace será exibido no indicador remoto no menu. ![Visual Studio conectado ao codespace do repositório do eShopOnWeb](/assets/images/help/codespaces/visual-studio-eshoponweb-codespace.png)

### Abrir um codespace em {% data variables.product.prodname_vs %}

1. Use o menu suspenso de arquivos e clique em **Conectar a um codespace**. ![Conexão do Arquivo do Visual Studio a um item de menu do codespace](/assets/images/help/codespaces/visual-studio-file-connect-to-codespace.png)
2. Em "{% data variables.product.prodname_github_codespaces %}", clique no codespace ao qual você deseja conectar-se e, em seguida, clique em **Conectar**. ![Visual Studio exibe codespaces e informações disponíveis](/assets/images/help/codespaces/visual-studio-connect-codespace.png)

### Configurar um codespace para {% data variables.product.prodname_vs %}

Um codespace, criado com {% data variables.product.prodname_vs %}, pode ser personalizado por meio de uma nova ferramenta denominada devinit, uma ferramenta de linha de comando incluída com {% data variables.product.prodname_vs %}.

#### devinit

[devinit](https://docs.microsoft.com/visualstudio/devinit/getting-started-with-devinit) permite que você instale estruturas e ferramentas adicionais nos seus codespaces de desenvolvimento do Windows, modificar as variáveis de ambiente e muito mais.

O devinit é compatível com um arquivo de configuração denominado [devinit.json](https://docs.microsoft.com/visualstudio/devinit/devinit-json). Você pode adicionar este arquivo ao seu projeto se você desejar criar um ambiente de desenvolvimento personalizado e reproduzível. Ao usar devinit com um arquivo [devcontainer.json](https://docs.microsoft.com/visualstudio/ide/codespaces/customize-codespaces#running-devinit-when-creating-a-codespace), seus codespaces serão configurados automaticamente na criação.

Para obter mais informações sobre a configuração do codespace do Windows e sobre a devinit, consulte [Personalizar um codespace](https://docs.microsoft.com/visualstudio/ide/codespaces/customize-codespaces) na documentação do {% data variables.product.prodname_vs %}. Para obter mais informações sobre devinit, consulte [Primeiros passos com devinit](https://docs.microsoft.com/visualstudio/devinit/getting-started-with-devinit).
