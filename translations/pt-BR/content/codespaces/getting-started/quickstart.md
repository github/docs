---
title: 'Início rápido para {% data variables.product.prodname_github_codespaces %}'
shortTitle: 'Início rápido para {% data variables.product.prodname_codespaces %}'
intro: 'Experimente {% data variables.product.prodname_github_codespaces %} em 5 minutos.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: quick_start
topics:
  - Codespaces
redirect_from:
  - /codespaces/codespaces-quickstart
---

## Introdução

Neste guia, você irá criar um codespace a partir de um repositório modelo e explorar algumas das funcionalidades essenciais disponíveis para você dentro do codespace.

Neste início rápido, você aprenderá a criar um codespace, conectar-se a uma porta encaminhada para ver seu aplicativo em execução, usar o controle de versões em um codespace e personalizar a sua configuração com extensões.

Para obter mais informações sobre exatamente como {% data variables.product.prodname_github_codespaces %} funciona, consulte o guia "[Aprofundamento em {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive)."

## Criando seu codespace

1. Acesse o r[repositório do modelo](https://github.com/github/haikus-for-codespaces) e selecione **Usar este modelo**.

1. Escolha um proprietário para o novo repositório, insira um nome de repositório, selecione sua configuração de privacidade preferida e clique em **Criar repositório a partir do modelo**.

1. Acesse a página principal do repositório recém-criado. No nome do repositório, use o menu suspenso **Código de {% octicon "code" aria-label="The code icon" %}** e na guia **Codespaces**, clique em **Criar codespace no principal**.

  ![Botão de codespace novo](/assets/images/help/codespaces/new-codespace-button.png)

## Executando o aplicativo

Uma vez criado o seu codespace, seu repositório será automaticamente clonado. Agora você pode executar o aplicativo e iniciá-lo em um navegador.

1. Quando o terminal estiver disponível, digite o comando `npm run dev`. Este exemplo usa um projeto Node.js e esse comando executa o script etiquetado como "dev" no arquivo _package.json_, que inicia o aplicativo web definido no repositório de exemplo.

   ![npm run dev no terminal](/assets/images/help/codespaces/codespaces-npm-run-dev.png)

   Se você estiver acompanhando com um tipo diferente de aplicativo, digite o comando inicial correspondente para esse projeto.

1. Quando o aplicativo for iniciado, o codespace irá reconhecer a porta na qual o aplicativo está sendo executado e irá exibir uma instrução para informar que ele foi encaminhado.

  ![Notificação de encaminhamento de porta](/assets/images/help/codespaces/quickstart-port-toast.png)

1. Clique em **Abrir no navegador** para visualizar seu aplicativo em execução em uma nova aba.

## Edite o aplicativo e veja as alterações

1. Volte para o seu codespace e abra o arquivo _haikus.json_ clicando duas vezes no botão no Explorador.

1. Edite o campo `de` do primeiro haiku para personalizar o aplicativo com o seu próprio haiku.

1. Volte à aba do aplicativo em execução no seu navegador e atualize para visualizar as suas alterações.

  {% octicon "light-bulb" aria-label="The lightbulb icon" %}  Se você fechou a aba, abra o painel de portas e clique no ícone **Abrir no navegador** para a porta em execução.

  ![Painel de Encaminhamento de Portas](/assets/images/help/codespaces/quickstart-forward-port.png)

## Enviando e fazendo push das suas alterações

Agora que você fez algumas alterações, você poderá usar o terminal integrado ou a visão de origem para commit e fazer push das alterações de volta para remoto.

{% data reusables.codespaces.source-control-display-dark %}
1. Para testar suas alterações, clique  **+** ao lado do arquivo que você alterou, ou ao lado de **Alterações** se você mudou vários arquivos e quiser testar todos.

   ![Barra lateral de controle de origem com botão de staging destacado](/assets/images/help/codespaces/codespaces-commit-stage.png)

1. Digite uma mensagem do commit que descreve a alteração que você fez.

   ![Barra lateral do controle de origem com uma mensagem de commit](/assets/images/help/codespaces/codespaces-commit-commit-message.png)

1. Para fazer commit das alterações em fase de preparação, clique na marca de seleção na parte superior da barra lateral de controle de origem.

   ![Clique no ícone da marca de verificação](/assets/images/help/codespaces/codespaces-commit-checkmark-icon.png)

   Você pode fazer push das alterações que fez. Isso aplica essas alterações ao branch upstream no repositório remoto. Você pode querer fazer isso se ainda não estiver pronto para criar um pull request, ou se você preferir criar um pull request em {% data variables.product.prodname_dotcom %}.
1. Na parte superior da barra lateral, clique na elipse (**...**).

   ![Botão Elipsis para visualizar e mais ações](/assets/images/help/codespaces/source-control-ellipsis-button-nochanges.png)

1. No menu suspenso, clique em **Push**.
1. Volte para o novo repositório em {% data variables.product.prodname_dotcom %} e veja o arquivo _haikus.json_. Verifique se a alteração que você fez no seu codespace foi enviada para o repositório com sucesso.

## Personalizando com uma extensão

Dentro de um codespace, você tem acesso ao {% data variables.product.prodname_vscode_marketplace %}. Para este exemplo, você instalará uma extensão que altera o tema, mas você pode instalar qualquer extensão que seja útil para o seu fluxo de trabalho.

{% note %}

**Observação**: Se você tiver habilitado as [Configurações de sincronização](https://code.visualstudio.com/docs/editor/settings-sync), todas as alterações que você fizer na configuração do seu editor no codespace atual como, por exemplo, alterar o seu tema ou definições de teclado, serão sincronizadas automaticamente em qualquer codespace que você abrir e quaisquer instâncias de {% data variables.product.prodname_vscode %} que estão conectadas na sua conta de {% data variables.product.prodname_dotcom %}.

{% endnote %}

1. Na barra lateral esquerda, clique no ícone Extensões.

1. Na barra de pesquisa, digite `fairyfloss` e instale a extensão fairyfloss.

   ![Adicionar extensão](/assets/images/help/codespaces/add-extension.png)

1. Clique em **Instalar em Codespaces**.
1. Selecione o tema `fairyfloss` selecionando-o na lista.

   ![Selecionar tema fairyfloss](/assets/images/help/codespaces/fairyfloss.png)

## Próximos passos

Você criou com sucesso, personalizou e executou seu primeiro aplicativo em um codespace, mas há muito mais para explorar! Aqui estão alguns recursos úteis para dar seus próximos passos com {% data variables.product.prodname_codespaces %}.
  - [Aprofundamento](/codespaces/getting-started/deep-dive): Este início rápido apresentou algumas das funcionalidades de {% data variables.product.prodname_codespaces %}. O guia de aprofundamento analisa estas áreas a partir de um ponto de vista técnico.
  - [Configurando seu projeto para {% data variables.product.prodname_codespaces %}](/codespaces/getting-started-with-codespaces): Estes guias fornecem informações sobre a configuração do seu projeto para usar {% data variables.product.prodname_codespaces %} com linguagens específicas.
  - [Configurar {% data variables.product.prodname_codespaces %} para o seu projeto](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project): Este guia fornece informações sobre a criação de uma configuração personalizada para {% data variables.product.prodname_codespaces %} para o seu projeto.

## Leia mais

- [Habilitando {% data variables.product.prodname_codespaces %} para a sua organização](/codespaces/managing-codespaces-for-your-organization/enabling-codespaces-for-your-organization)
- [Gerenciando a cobrança para {% data variables.product.prodname_codespaces %} na sua organização](/codespaces/managing-codespaces-for-your-organization/managing-billing-for-codespaces-in-your-organization)
