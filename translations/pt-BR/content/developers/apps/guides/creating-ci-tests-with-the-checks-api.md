---
title: Criar testes de CI com a API de verificações
intro: 'Crie um servidor de integração contínua para executar testes usando um {% data variables.product.prodname_github_app %} e a API de verificações.'
redirect_from:
  - /apps/quickstart-guides/creating-ci-tests-with-the-checks-api
  - /developers/apps/creating-ci-tests-with-the-checks-api
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: CI tests using Checks API
ms.openlocfilehash: 0459714ae9ffb8094c70a714a60a66a19964424f
ms.sourcegitcommit: 06d16bf9a5c7f3e7107f4dcd4d06edae5971638b
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/21/2022
ms.locfileid: '148179674'
---
## Introdução

Este guia lhe apresentará os [Aplicativos do Github](/apps/) e a [API de Verificações](/rest/reference/checks), que você usará para criar um servidor de CI (integração contínua) que executa testes.

A CI é uma prática de software que exige o commit do código em um repositório compartilhado. Fazer commits de códigos com frequência detecta erros com mais antecedência e reduz a quantidade de código necessária para depuração quando os desenvolvedores chegam à origem de um erro. As atualizações frequentes de código também facilitam o merge de alterações dos integrantes de uma equipe de desenvolvimento de software. Assim, os desenvolvedores podem se dedicar mais à gravação de códigos e se preocupar menos com erros de depuração ou conflitos de merge. 🙌

Um código de host do servidor de CI que executa testes de CI, como, por exemplo, linters de código (que verificam formatação de estilo), verificações de segurança, cobertura de código e outras verificações de novos commits de códigos em um repositório. OS ervidores de CI podem até criar e implementar código para servidores de treinamento ou produção. Para ver alguns exemplos dos tipos de testes de CI que você pode criar com um Aplicativo do GitHub, confira os [aplicativos de integração contínua](https://github.com/marketplace/category/continuous-integration) disponíveis no Marketplace do GitHub.

{% data reusables.apps.app-ruby-guides %}

### Visão geral da API de verificação

A [API de Verificações](/rest/reference/checks) permite que você configure testes de CI que são executados automaticamente em cada commit de código em um repositório. A API de Verificações relata informações detalhadas sobre cada verificação no GitHub na guia **Verificações** da solicitação de pull. Com a API de Verificações, você pode criar anotações com detalhes adicionais para linhas de código específicas. As anotações ficam visíveis na guia **Verificações**. Quando você cria uma anotação para um arquivo que faz parte da solicitação de pull, as anotações também são mostradas na guia **Arquivos alterados**.

Um _conjunto de verificação_ é um grupo de _execuções de verificação_ (testes de CI individuais). O conjunto e as execuções contêm _status_ que ficam visíveis em uma solicitação de pull no GitHub. Você pode usar os status para determinar quando um commit de código introduz erros. O uso desses status com [branches protegidos](/rest/reference/repos#branches) pode impedir que as pessoas mesclem solicitações de pull prematuramente. Confira "[Sobre branches protegidos](/github/administering-a-repository/about-protected-branches#require-status-checks-before-merging)" para obter mais detalhes.

A API de Verificações envia o [evento webhook `check_suite`](/webhooks/event-payloads/#check_suite) para todos os Aplicativos do GitHub instalados em um repositório sempre que o novo código é enviado por push para o repositório. Para receber todas as ações de evento da API de Verificações, o aplicativo deve ter a permissão `checks:write`. O GitHub cria eventos `check_suite` automaticamente para novos commits de código em um repositório usando o fluxo padrão, embora [atualize as preferências do repositório para conjuntos de verificação](/rest/reference/checks#update-repository-preferences-for-check-suites), se você desejar. Veja como funciona o fluxo-padrão:

1. Sempre que alguém envia o código por push para o repositório, o GitHub envia o evento `check_suite` com uma ação de `requested` a todos os Aplicativos do GitHub instalados no repositório que têm a permissão `checks:write`. Este evento permite que os aplicativos saibam que o código foi enviado e que o GitHub criou um novo conjunto de verificações automaticamente.
1. Quando seu aplicativo recebe esse evento, ele pode [adicionar execuções de verificação](/rest/reference/checks#create-a-check-run) a esse conjunto.
1. As execuções de verificação podem incluir [anotações](/rest/reference/checks#annotations-object) exibidas em linhas de código específicas.

**Neste guia, você aprenderá:**

* Parte 1: Configurar a estrutura para um servidor de CI usando a API de verificações.
  * Configurar um aplicativo GitHub como um servidor que recebe eventos de API de verificações.
  * Criar novas execuções de verificação para testes de CI quando um repositório recebe commits recém enviados.
  * Reexecutar a verificação quando um usuário solicita que a ação seja executada no GitHub.
* Parte 2: Aproveitar a estrutura do servidor de CI que você criou adicionando um teste de CI de linter.
  * Atualizar uma execução de verificação com um `status`, `conclusion` e detalhes de `output`.
  * Criar anotações em linhas de código que são exibidas GitHub na guia **Verificações** e **Arquivos Alterados** de uma solicitação de pull.
  * Corrigir automaticamente as recomendações do linter expondo um botão "Corrigir isso" na guia **Verificações** da solicitação de pull.

Para ter uma ideia do que seu servidor de CI da API de verificações fará quando você concluir este início rápido, confira a demonstração abaixo:

![Demonstração do início rápido do servidor de CI da API de verificações](/assets/images/github-apps/github_apps_checks_api_ci_server.gif)

## Pré-requisitos

Para começar, familiarize-se com os [Aplicativos do GitHub](/apps/), [Webhooks](/webhooks) e a [API de Verificações](/rest/reference/checks), caso ainda não esteja familiarizado. Você encontrará mais APIs nos [documentos da API REST](/rest). A API de Verificações também está disponível para uso no [GraphQL](/graphql), mas este início rápido se concentra na REST. Confira os objetos [Conjunto de Verificações](/graphql/reference/objects#checksuite) e [Verificar Execução](/graphql/reference/objects#checkrun) da GraphQL para obter mais detalhes.

Você usará a [linguagem de programação Ruby](https://www.ruby-lang.org/en/), o serviço de entrega de conteúdo do webhook [Smee](https://smee.io/), a [biblioteca Octokit.rb do Ruby](http://octokit.github.io/octokit.rb/) para a API REST do GitHub e o [framework Web Sinatra](http://sinatrarb.com/) para criar seu aplicativo de servidor de CI da API de Verificações.

Não é necessário ser um especialista em nenhuma dessas ferramentas ou conceitos para concluir este projeto. Este guia irá orientá-lo em todas as etapas necessárias. Antes de começar a criar testes de CI com a API de verificações, você deverá fazer o seguinte:

1. Clone o repositório [Criação de testes de CI com a API de Verificações](https://github.com/github-developer/creating-ci-tests-with-the-checks-api).
  ```shell
    $ git clone https://github.com/github-developer/creating-ci-tests-with-the-checks-api.git
  ```

  Dentro do diretório, você encontrará um arquivo `template_server.rb` com o código de modelo que será usado neste guia de início rápido e um arquivo `server.rb` com o código do projeto concluído.

1. Siga as etapas descritas no guia de início rápido "[Como configurar seu ambiente de desenvolvimento](/apps/quickstart-guides/setting-up-your-development-environment/)" para configurar e executar o servidor de aplicativos. **Observação:** em vez de [clonar o repositório de modelo do Aplicativo do GitHub](/apps/quickstart-guides/setting-up-your-development-environment/#prerequisites), use o arquivo `template_server.rb` no repositório clonado na etapa anterior deste início rápido.

  Se você concluiu um início rápido de Aplicativo do GitHub anteriormente, registre um _novo_ aplicativo do GitHub e inicie um novo canal do Smee para usar com este início rápido.

  Confira a seção [Solução de problemas](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) se você estiver tendo problemas ao configurar seu modelo de Aplicativo do GitHub.

## Parte 1. Criar a interface da API de verificações

Nesta parte, você adicionará o código necessário para receber eventos de webhook `check_suite` e criar e atualizar as execuções de verificação. Você também aprenderá como criar uma execução de verificação quando solicitou-se a verificação novamente no GitHub. Ao final desta seção, você poderá visualizar a execução de verificação que você criou em um pull request do GitHub.

Sua execução de verificação não realizará nenhuma verificação no código nesta seção. Você adicionará essa funcionalidade na [Parte 2: Criando o teste de CI do Octo RuboCop](#part-2-creating-the-octo-rubocop-ci-test).

Você já deve ter um canal do Smee configurado que encaminha cargas do webhook para o seu servidor local. Seu servidor deve estar em execução e conectado ao aplicativo GitHub que você registrou e instalou em um repositório de teste. Se você ainda não concluiu as etapas em "[Configurando seu ambiente de desenvolvimento](/apps/quickstart-guides/setting-up-your-development-environment/)", faça isso antes de continuar.

Vamos começar! Estas são as etapas que você concluirá na Parte 1:

1. [Atualizar as permissões de aplicativo](#step-11-updating-app-permissions)
1. [Adicionar manipulação de evento](#step-12-adding-event-handling)
1. [Criar uma execução de verificação](#step-13-creating-a-check-run)
1. [Atualizar a execução de verificação](#step-14-updating-a-check-run)

## Etapa 1.1. Atualizar as permissões do aplicativo

Quando você [registrou seu aplicativo pela primeira vez](#prerequisites), aceitou as permissões padrão, o que significa que o aplicativo não tem acesso à maioria dos recursos. Para este exemplo, seu aplicativo precisará de permissão para ler e gravar verificações.

Para atualizar as permissões do aplicativo:

1. Selecione seu aplicativo na [página de configurações do aplicativo](https://github.com/settings/apps) e clique em **Permissões e Webhooks** na barra lateral.
1. Na seção "Permissões", localize "Verificações" e selecione **Leitura e gravação** na lista suspensa de Acesso que está ao lado.
1. Na seção "Assinar eventos", selecione **Verificar conjunto** e **Verificar execução** para assinar esses eventos.
{% data reusables.apps.accept_new_permissions_steps %}

Ótimo! Seu aplicativo tem permissão para realizar as tarefas que você deseja que ele realize. Agora você pode adicionar o código para gerenciar os eventos.

## Etapa 1.2. Adicionar manipulação de evento

Agora que o aplicativo está inscrito nos eventos **Verificar conjunto** e **Verificar execução**, ele começará a receber os webhooks [`check_suite`](/webhooks/event-payloads/#check_suite) e [`check_run`](/webhooks/event-payloads/#check_run). O GitHub envia as cargas de webhook como solicitações `POST`. Como você encaminhou o conteúdo do webhook do Smee para o `http://localhost/event_handler:3000`, o servidor receberá o conteúdo da solicitação `POST` na rota `post '/event_handler'`.

Uma rota `post '/event_handler'` vazia já está incluída no arquivo `template_server.rb`, que você baixou na seção [Pré-requisitos](#prerequisites). O encaminhamento vazio tem a seguinte forma:

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Use essa rota para tratar o evento `check_suite` adicionando o seguinte código:

``` ruby
# Get the event type from the HTTP_X_GITHUB_EVENT header
case request.env['HTTP_X_GITHUB_EVENT']
when 'check_suite'
  # A new check_suite has been created. Create a new check run with status queued
  if @payload['action'] == 'requested' || @payload['action'] == 'rerequested'
    create_check_run
  end
end
```

Cada evento enviado pelo GitHub inclui um cabeçalho de solicitação chamado `HTTP_X_GITHUB_EVENT`, que indica o tipo de evento na solicitação `POST`. Nesse momento, você só está interessado em eventos do tipo `check_suite`, que são emitidos quando um novo conjunto de verificação é criado. Cada evento tem um campo `action` adicional que indica o tipo de ação que disparou os eventos. Para `check_suite`, o campo `action` pode ser `requested`, `rerequested` ou `completed`.

A ação `requested` solicita uma execução de verificação sempre que o código é enviado por push para o repositório, e a ação `rerequested` solicita que você execute novamente uma verificação do código que já está no repositório. Como as ações `requested` e `rerequested` exigem a criação de uma execução de verificação, você chamará um auxiliar com o nome `create_check_run`. Vamos escrever esse método agora.

## Etapa 1.3. Criar uma execução de verificação

Você adicionará esse novo método como [auxiliar do Sinatra](https://github.com/sinatra/sinatra#helpers) caso queira que outras rotas também o usem. Em `helpers do`, adicione este método `create_check_run`:

``` ruby
# Create a new check run with the status queued
def create_check_run
  @installation_client.create_check_run(
    # [String, Integer, Hash, Octokit Repository object] A GitHub repository.
    @payload['repository']['full_name'],
    # [String] The name of your check run.
    'Octo RuboCop',
    # [String] The SHA of the commit to check 
    # The payload structure differs depending on whether a check run or a check suite event occurred.
    @payload['check_run'].nil? ? @payload['check_suite']['head_sha'] : @payload['check_run']['head_sha'],
    # [Hash] 'Accept' header option, to avoid a warning about the API not being ready for production use.
    accept: 'application/vnd.github+json'
  )
end
```

Esse código chama o ponto de extremidade "[Criar uma execução de verificação](/rest/reference/checks#create-a-check-run)" usando o [método create_check_run](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#create_check_run-instance_method).

Para criar uma execução de verificação, apenas dois parâmetros de entrada são necessários: `name` e `head_sha`. Usaremos o [RuboCop](https://rubocop.readthedocs.io/en/latest/) para implementar o teste de CI mais adiante neste início rápido e é por isso que o nome "Octo RuboCop" é usado aqui, mas você pode escolher qualquer nome que desejar para a execução de verificação.

Você só está fornecendo os parâmetros necessários agora para que a funcionalidade básica funcione, mas você irá atualizar a verificação de execução posteriormente enquanto coleta mais informações sobre a verificação de execução. Por padrão, o GitHub define `status` como `queued`.

O GitHub cria uma execução de verificação para uma SHA de commit específica e é por isso que `head_sha` é um parâmetro necessário. Você pode encontrar commit SHA na carga do webhook. Embora você esteja apenas criando uma execução de verificação para o evento `check_suite` no momento, é bom saber que o `head_sha` está incluído nos objetos `check_suite` e `check_run` na carga do evento.

No código acima, você está usando o [operador ternário](https://ruby-doc.org/core-2.3.0/doc/syntax/control_expressions_rdoc.html#label-Ternary+if), que funciona como uma instrução `if/else`, para verificar se o conteúdo contém um objeto `check_run`. Se isso acontecer, você lerá o `head_sha` do objeto `check_run`, caso contrário, você o lerá do objeto `check_suite`.

Para testar esse código, reinicie o servidor a partir do seu terminal:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

Agora abra um pull request no repositório em que você instalou seu aplicativo. Seu aplicativo deve responder, criando uma verificação executada em seu pull request. Clique na guia **Verificações** e você verá algo assim:

![Execução de verificação enfileirada](/assets/images/github-apps/github_apps_queued_check_run.png)

Se você vir outros aplicativos na guia Verificações, significa que você tem outros aplicativos instalados em seu repositório que têm acesso de **Leitura e gravação** às verificações e que estão inscritos nos eventos **Verificar conjunto** e **Verificar execução**.

Ótimo! Você disse ao GitHub para criar uma execução de verificação. Veja que o status de execução de verificação está definido como `queued` ao lado de um ícone amarelo. Em seguida, você irá aguardar que o GitHub crie a execução de verificação e atualize seu status.

## Etapa 1.4. Atualizar a execução de verificação

Quando o método `create_check_run` é executado, ele solicita que GitHub crie uma execução de verificação. Quando o GitHub terminar de criar a execução de verificação, você receberá o evento de webhook `check_run` com a ação `created`. Esse evento é o sinal para começar a executar a verificação.

É interessante atualizar o manipulador de eventos para procurar a ação `created`. Enquanto estiver atualizando o manipulador de eventos, você pode adicionar uma condição para a ação `rerequested`. Quando alguém executa novamente um único teste no GitHub clicando no botão "Executar novamente", o GitHub envia o evento de execução de verificação `rerequested` para seu aplicativo. Quando uma execução de verificação for `rerequested`, você reiniciará o processo e criará uma execução de verificação.

Para incluir uma condição para o evento `check_run` na rota `post '/event_handler'`, adicione o seguinte código em `case request.env['HTTP_X_GITHUB_EVENT']`:

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
    end
  end
```

O GitHub envia todos os eventos para execuções de verificação `created` para cada aplicativo instalado em um repositório que tenha as permissões de verificação necessárias. Isso significa que seu aplicativo receberá uma verificação que será executada por outros aplicativos. Uma execução de verificação `created` é um pouco diferente de um conjunto de verificação `requested` ou `rerequested`, que o GitHub envia apenas para aplicativos que estão sendo solicitados a executar uma verificação. O código acima procura o ID do aplicativo da execução de verificação. Isto filtra todas as execuções de verificação de outros aplicativos no repositório.

Em seguida, você escreverá o método `initiate_check_run`, que é o local em que você atualizará o status da execução de verificação e se preparará para iniciar o teste de CI.

Nesta seção, você ainda não iniciará o teste de CI, mas examinará como atualizar o status da execução de verificação de `queued` para `pending` e depois de `pending` para `completed` para ver o fluxo geral de uma execução de verificação. Na "[Parte 2: Criando o teste de CI do Octo RuboCop](#part-2-creating-the-octo-rubocop-ci-test)", você adicionará o código que realmente executará o teste de CI.

Vamos criar o método `initiate_check_run` e atualizar o status da execução de verificação. Adicione o seguinte código à seção auxiliar:

``` ruby
# Start the CI process
def initiate_check_run
  # Once the check run is created, you'll update the status of the check run
  # to 'in_progress' and run the CI process. When the CI finishes, you'll
  # update the check run status to 'completed' and add the CI results.

  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'in_progress',
    accept: 'application/vnd.github+json'
  )

  # ***** RUN A CI TEST *****

  # Mark the check run as complete!
  @installation_client.update_check_run(
    @payload['repository']['full_name'],
    @payload['check_run']['id'],
    status: 'completed',
    conclusion: 'success',
    accept: 'application/vnd.github+json'
  )
end
```

O código acima chama o ponto de extremidade da API "[Atualizar uma execução de verificação](/rest/reference/checks#update-a-check-run)" usando o [método Octokit `update_check_run`](https://msp-greg.github.io/octokit/Octokit/Client/Checks.html#update_check_run-instance_method) para atualizar a execução de verificação que você já criou.

Veja o que este código está fazendo. Primeiro, ele atualiza o status da execução de verificação para `in_progress` e define implicitamente a hora `started_at` com a hora atual. Na [Parte 2](#part-2-creating-the-octo-rubocop-ci-test) deste início rápido, você adicionará um código que inicia um teste de CI real em `***** RUN A CI TEST *****`. Por enquanto, você sairá da seção como um espaço reservado, para que o código que o segue apenas simule que o processo de CI seja bem-sucedido e todos os testes sejam aprovados. Por fim, o código atualiza o status da execução da verificação novamente para `completed`.

Você observará nos documentos de "[Atualizar uma execução de verificação](/rest/reference/checks#update-a-check-run)" que, quando você fornece um status `completed`, os parâmetros `conclusion` e `completed_at` são necessários. O `conclusion` resume o resultado de uma execução de verificação e pode ser `success`, `failure`, `neutral`, `cancelled`, `timed_out` ou `action_required`. Você definirá a conclusão como `success`, a hora `completed_at` com a hora atual, e o status como `completed`.

Você também pode fornecer mais informações sobre o que a sua verificação está fazendo, mas você poderá fazer isso na próxima seção. Vamos testar esse código executando `template_server.rb`novamente:

```shell
$ ruby template_server.rb
```

Vá até sua solicitação de pull aberta e clique na guia **Verificações**. Clique no botão "Executar tudo novamente" no canto superior esquerdo. Você verá a execução de verificação passar de `pending` para `in_progress` e terminar com `success`:

![Execução de verificação concluída](/assets/images/github-apps/github_apps_complete_check_run.png)

## Parte 2. Criar o teste de CI do Octo RuboCop

O [RuboCop](https://rubocop.readthedocs.io/en/latest/) é um formatador e um linter de código Ruby. Ele verifica o código Ruby para garantir que ele esteja em conformidade com o "[Guia de Estilo do Ruby](https://github.com/rubocop-hq/ruby-style-guide)". O RuboCop tem três funções principais:

* Linting para verificação do estilo do código
* Formatação de código
* Substitui os recursos nativos de linting do Ruby usando `ruby -w`

Agora que a interface foi criada para receber eventos da API de verificações e criar execuções de verificação, você pode criar uma execução de verificação que implemente um teste de CI.

Seu aplicativo irá executar o RuboCop no servidor de CI e irá criar uma execuções de verificação (neste caso, testes de CI), que relatarão os resultados que o RuboCop relata para o GitHub.

A API de verificações permite que você relate informações valiosas sobre cada execução de verificação, incluindo status, imagens, resumos, anotações e ações solicitadas.

As anotações são informações sobre linhas específicas de código em um repositório. Uma anotação permite que você identifique e visualize as partes exatas do código para as quais você gostaria de mostrar informações adicionais. Essas informações podem ser qualquer coisa: por exemplo, um comentário, um erro ou um aviso. Este início rápido usa anotações para visualizar erros no RuboCop.

Para aproveitar as ações solicitadas, os desenvolvedores de aplicativos podem criar botões na guia **Verificações** das solicitações de pull. Quando alguém clica em um desses botões, o clique envia um evento `requested_action` `check_run` para o Aplicativo do GitHub. A ação tomada pelo aplicativo é completamente configurável pelo desenvolvedor do aplicativo. Este início rápido irá orientá-lo no processo de adição de um botão que permite aos usuários solicitar que o RuboCop corrija os erros que encontrar. O RuboCop dá suporte à correção automática de erros usando uma opção de linha de comando e você configurará a opção `requested_action` para aproveitar essa opção.

Vamos começar! Estas são as etapas que você concluirá nesta seção:

1. [Adicionar um arquivo do Ruby](#step-21-adding-a-ruby-file)
1. [Clonagem de repositório](#step-22-cloning-the-repository)
1. [Executar o RuboCop](#step-23-running-rubocop)
1. [Coletar erros do RuboCop](#step-24-collecting-rubocop-errors)
1. [Atualizar a execução de verificação com resultados dos testes de CI](#step-25-updating-the-check-run-with-ci-test-results)
1. [Corrigir erros do RuboCop automaticamente](#step-26-automatically-fixing-rubocop-errors)
1. [Dicas de segurança](#step-27-security-tips)

## Etapa 2.1. Adicionar um arquivo do Ruby

Você pode passar arquivos específicos ou diretórios inteiros para o RuboCop verificar. Nesse início rápido, você irá executar o RuboCop em um diretório inteiro. Como RuboCop verifica apenas códigos Ruby, será necessário pelo menos um arquivo Ruby no seu repositório que contém erros. O arquivo de exemplo fornecido abaixo contém alguns erros. Adicione este arquivo do Ruby de exemplo ao repositório em que seu aplicativo está instalado (nomeie o arquivo com uma extensão `.rb`, como em `myfile.rb`):

```ruby
# The Octocat class tells you about different breeds of Octocat
class Octocat
  def initialize(name, *breeds)
    # Instance variables
    @name = name
    @breeds = breeds
  end

  def display
    breed = @breeds.join("-")

    puts "I am of #{breed} breed, and my name is #{@name}."
  end
end

m = Octocat.new("Mona", "cat", "octopus")
m.display
```

## Etapa 2.2. Clonagem de repositório

O RuboCop está disponível como um utilitário da linha de comando. Isso significa que o seu aplicativo GitHub deverá clonar uma cópia local do repositório no servidor da CI para que RuboCop possa analisar os arquivos. Para executar operações Git em seu aplicativo Ruby, use a gem [ruby-git](https://github.com/ruby-git/ruby-git).

O `Gemfile` no repositório `building-a-checks-api-ci-server` já inclui a gem ruby-git e você a instalou quando executou `bundle install` nas [etapas de pré-requisito](#prerequisites). Para usar a gem, adicione este código à parte superior do arquivo `template_server.rb`:

``` ruby
require 'git'
```

Seu aplicativo deve permissão de leitura para "Conteúdo do repositório" para clonar um repositório. Mais adiante neste início rápido, você deverá fazer push de conteúdo para o GitHub, o que exige permissão de gravação. Defina a permissão "Conteúdo do repositório" do seu aplicativo como **Leitura e gravação** agora para que você não precise atualizá-lo novamente mais tarde. Para atualizar as permissões do aplicativo:

1. Selecione seu aplicativo na [página de configurações do aplicativo](https://github.com/settings/apps) e clique em **Permissões e Webhooks** na barra lateral.
1. Na seção "Permissões", localize "Conteúdo do repositório" e selecione **Leitura e gravação** na lista suspensa "Acesso" ao lado.
{% data reusables.apps.accept_new_permissions_steps %}

Para clonar um repositório usando as permissões do Aplicativo do GitHub, você pode usar o token de instalação do aplicativo (`x-access-token:<token>`) mostrado no exemplo abaixo:

```shell
git clone https://x-access-token:<token>@github.com/<owner>/<repo>.git
```

O código acima clone um repositório por HTTP. Isto exige o nome completo do repositório, que inclui o proprietário do repositório (usuário ou organização) e o nome do repositório. Por exemplo, o repositório [octocat Hello-World](https://github.com/octocat/Hello-World) tem o nome completo `octocat/hello-world`.

Depois que seu aplicativo clonar o repositório, ele precisará efetuar pull das alterações de código mais recentes e fazer check-out de um ref do Git específico. O código para fazer tudo isso se ajustará perfeitamente ao seu próprio método. Para realizar essas operações, o método precisa do nome e nome completo do repositório e que o ref faça checkout. O ref pode ser um commit SHA, branch ou tag. Adicione o seguinte novo método à seção de método auxiliar em `template_server.rb`:

``` ruby
# Clones the repository to the current working directory, updates the
# contents using Git pull, and checks out the ref.
#
# full_repo_name  - The owner and repo. Ex: octocat/hello-world
# repository      - The repository name
# ref             - The branch, commit SHA, or tag to check out
def clone_repository(full_repo_name, repository, ref)
  @git = Git.clone("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", repository)
  pwd = Dir.getwd()
  Dir.chdir(repository)
  @git.pull
  @git.checkout(ref)
  Dir.chdir(pwd)
end
```

O código acima usa a gem `ruby-git` para clonar o repositório usando o token de instalação do aplicativo. Esse código clona o código no mesmo diretório que `template_server.rb`. Para executar comandos Git no repositório, o código deve alterar para o diretório do repositório. Antes de alterar os diretórios, o código armazena o diretório de trabalho atual em uma variável (`pwd`) para lembrar o local para retornar antes de sair do método `clone_repository`.

No diretório do repositório, esse código busca e mescla as alterações mais recentes (`@git.pull`), faz check-out do ref (`@git.checkout(ref)`) e altera o diretório de volta para o diretório de trabalho original (`pwd`).

Agora você tem um método que clona um repositório e faz check-out de um ref. Em seguida, você precisa adicionar código para obter os parâmetros de entrada necessários e chamar o novo método `clone_repository`. Adicione o seguinte código sob o comentário `***** RUN A CI TEST *****` em seu método auxiliar `initiate_check_run`:

``` ruby
# ***** RUN A CI TEST *****
full_repo_name = @payload['repository']['full_name']
repository     = @payload['repository']['name']
head_sha       = @payload['check_run']['head_sha']

clone_repository(full_repo_name, repository, head_sha)
```

O código acima obtém o nome completo do repositório e o SHA principal do commit do conteúdo do webhook `check_run`.

## Etapa 2.3. Executar o RuboCop

Ótimo! Você está clonando o repositório e criando execuções de verificação usando seu servidor de CI. Agora você entrará no âmago dos detalhes do [linter do RuboCop](https://docs.rubocop.org/rubocop/usage/basic_usage.html#code-style-checker) e das [anotações da API de Verificações](/rest/reference/checks#create-a-check-run).

O código a seguir executa RuboCop e salva os erros do código de estilo no formato JSON. Adicione este código abaixo da chamada ao `clone_repository` que você adicionou na [etapa anterior](#step-22-cloning-the-repository) e acima do código que atualiza a execução de verificação para concluir.

``` ruby
# Run RuboCop on all files in the repository
@report = `rubocop '#{repository}' --format json`
logger.debug @report
`rm -rf #{repository}`
@output = JSON.parse @report
```

O código acima executa o RuboCop em todos os arquivos no diretório do repositório. A opção `--format json` é uma forma útil de salvar uma cópia dos resultados do linting em um formato que possa ser analisado pelo computador. Confira os [documentos do RuboCop](https://docs.rubocop.org/rubocop/formatters.html#json-formatter) para obter detalhes e um exemplo do formato JSON.

Como esse código armazena os resultados do RuboCop em uma variável `@report`, ele pode remover com segurança o check-out do repositório. Esse código também analisa o JSON para que você possa acessar facilmente as chaves e os valores em seu Aplicativo do GitHub usando a variável `@output`.

{% note %}

**Observação:** o comando usado para remover o repositório (`rm -rf`) não pode ser desfeito. Confira [Etapa 2.7. Dicas de segurança](#step-27-security-tips) para saber como verificar webhooks de comandos maliciosos injetados que podem ser usados para remover um diretório diferente do que era pretendido pelo seu aplicativo. Por exemplo, se um ator malicioso enviasse um webhook com o nome de repositório `./`, seu aplicativo removeria o diretório raiz. 😱 Se por algum motivo você _não_ estiver usando o método `verify_webhook_signature` (que está incluído no `template_server.rb`) para validar o remetente do webhook, verifique se o nome do repositório é válido.

{% endnote %}

Você pode testar se este código funciona e ver os erros relatados pelo RuboCop na saída de depuração do seu servidor. Reinicie o servidor `template_server.rb` e crie uma solicitação de pull no repositório em que você está testando seu aplicativo:

```shell
$ ruby template_server.rb
```

Você deve ver os erros de linting na saída de depuração, embora não sejam impressos com a formatação. Você pode usar uma ferramenta da Web como o [formatador JSON](https://jsonformatter.org/) para formatar a saída JSON como esta saída de erro do linting formatada:

```json
{
  "metadata": {
    "rubocop_version": "0.60.0",
    "ruby_engine": "ruby",
    "ruby_version": "2.3.7",
    "ruby_patchlevel": "456",
    "ruby_platform": "universal.x86_64-darwin18"
  },
  "files": [
    {
      "path": "Octocat-breeds/octocat.rb",
      "offenses": [
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 17,
            "last_line": 17,
            "last_column": 22,
            "length": 6,
            "line": 17,
            "column": 17
          }
        },
        {
          "severity": "convention",
          "message": "Style/StringLiterals: Prefer single-quoted strings when you don't need string interpolation or special symbols.",
          "cop_name": "Style/StringLiterals",
          "corrected": false,
          "location": {
            "start_line": 17,
            "start_column": 25,
            "last_line": 17,
            "last_column": 29,
            "length": 5,
            "line": 17,
            "column": 25
          }
        }
      ]
    }
  ],
  "summary": {
    "offense_count": 2,
    "target_file_count": 1,
    "inspected_file_count": 1
  }
}
```

## Etapa 2.4. Coletar erros do RuboCop

A variável `@output` contém os resultados JSON analisados do relatório do RuboCop. Conforme mostrado acima, os resultados contêm uma seção `summary` que seu código pode usar para determinar rapidamente se há erros. O código a seguir definirá a conclusão da execução de verificação como `success` quando não houver erros relatados. O RuboCop relata erros para cada arquivo na matriz `files`, portanto, se houver erros, você precisará extrair alguns dados do objeto de arquivo.

A API de verificação permite que você crie anotações para linhas específicas do código. Ao criar ou atualizar uma execução de verificação, você pode adicionar anotações. Neste início rápido, você está [atualizando a execução de verificação](/rest/reference/checks#update-a-check-run) com anotações.

A API de verificação limita o número de anotações a um máximo de 50 por solicitação de API. Para criar mais de 50 anotações, você precisa fazer várias solicitações para o ponto de extremidade [Atualizar uma execução de verificação](/rest/reference/checks#update-a-check-run). Por exemplo, para criar 105 anotações, você precisará chamar o ponto de extremidade [Atualizar uma execução de verificação](/rest/reference/checks#update-a-check-run) três vezes. Cada uma das duas primeiras solicitações teria 50 anotações e a terceira solicitação incluiria as cinco anotações restantes. Cada vez que você atualizar a execução de verificação, as anotações são anexadas à lista de anotações que já existem para a execução de verificação.

Uma execução de verificação espera anotações como um array de objetos. Cada objeto de anotação deve incluir o `path`, `start_line`, `end_line`, `annotation_level` e `message`. O RuboCop também fornece o `start_column`e `end_column`, portanto, você pode incluir esses parâmetros opcionais na anotação. As anotações só dão suporte a `start_column` e `end_column` na mesma linha. Confira a documentação de referência do [objeto `annotations`](/rest/reference/checks#annotations-object-1) para obter detalhes.

Você irá extrair as informações necessárias do RuboCop para criar cada anotação. Acrescente o seguinte código ao código adicionado na [seção anterior](#step-23-running-rubocop):

``` ruby
annotations = []
# You can create a maximum of 50 annotations per request to the Checks
# API. To add more than 50 annotations, use the "Update a check run" API
# endpoint. This example code limits the number of annotations to 50.
# See /rest/reference/checks#update-a-check-run
# for details.
max_annotations = 50

# RuboCop reports the number of errors found in "offense_count"
if @output['summary']['offense_count'] == 0
  conclusion = 'success'
else
  conclusion = 'neutral'
  @output['files'].each do |file|

    # Only parse offenses for files in this app's repository
    file_path = file['path'].gsub(/#{repository}\//,'')
    annotation_level = 'notice'

    # Parse each offense to get details and location
    file['offenses'].each do |offense|
      # Limit the number of annotations to 50
      next if max_annotations == 0
      max_annotations -= 1

      start_line   = offense['location']['start_line']
      end_line     = offense['location']['last_line']
      start_column = offense['location']['start_column']
      end_column   = offense['location']['last_column']
      message      = offense['message']

      # Create a new annotation for each error
      annotation = {
        path: file_path,
        start_line: start_line,
        end_line: end_line,
        start_column: start_column,
        end_column: end_column,
        annotation_level: annotation_level,
        message: message
      }
      # Annotations only support start and end columns on the same line
      if start_line == end_line
        annotation.merge({start_column: start_column, end_column: end_column})
      end

      annotations.push(annotation)
    end
  end
end
```

Este código limita o número total de anotações a 50. Mas você pode modificar este código para atualizar a verificação de execução para cada lote de 50 anotações. O código acima inclui a variável `max_annotations` que define o limite como 50, que é usado no loop que itera nas ofensas.

Quando a `offense_count` é zero, o teste de CI é um `success`. Se houver erros, esse código definirá a conclusão como `neutral` para evitar a imposição estrita de erros de linters de código. Mas você pode alterar a conclusão para `failure` se quiser garantir que o conjunto de verificação falhe quando houver erros de linting.

Quando erros são relatados, o código acima itera na matriz `files` no relatório do RuboCop. Para cada arquivo, ele extrai o caminho do arquivo e define o nível de anotação como `notice`. Você pode ir ainda mais adiante e definir níveis de aviso específicos para cada tipo de [RuboCop Cop](https://docs.rubocop.org/rubocop/cops.html), mas para manter as coisas mais simples neste início rápido, todos os erros são definidos como um nível de `notice`.

Esse código também itera em cada erro na matriz de `offenses` e coleta o local da mensagem de erro e ofensa. Depois de extrair as informações necessárias, o código cria uma anotação para cada erro e as armazena na matriz `annotations`. Como as anotações só dão suporte a colunas de início e fim na mesma linha, `start_column`e `end_column` só são adicionadas ao objeto `annotation` se os valores de linha inicial e final forem os mesmos.

Esse código ainda não cria uma anotação para a execução de verificação. Você irá adicionar esse código na próxima seção.

## Etapa 2.5. Atualizar a execução de verificação com resultados dos testes de CI

Cada execução de verificação do GitHub contém um objeto `output` que inclui um `title`, `summary`, `text`, `annotations` e `images`. Os parâmetros `summary` e `title` são os únicos necessários para o `output`, mas estes sozinhos não oferecem muitos detalhes, portanto, este início rápido também adiciona o `text` e `annotations`. Aqui, o código não adiciona uma imagem, mas sinta-se à vontade para adicionar uma, se desejar!

Para o `summary`, este exemplo usa as informações de resumo do RuboCop e adiciona algumas linhas novas (`\n`) para formatar a saída. Você pode personalizar o que adicionar ao parâmetro `text`, mas este exemplo define o parâmetro `text` com a versão do RuboCop. Para definir `summary` e `text`, acrescente esse código ao código que você adicionou na [seção anterior](#step-24-collecting-rubocop-errors):

``` ruby
# Updated check run summary and text parameters
summary = "Octo RuboCop summary\n-Offense count: #{@output['summary']['offense_count']}\n-File count: #{@output['summary']['target_file_count']}\n-Target file count: #{@output['summary']['inspected_file_count']}"
text = "Octo RuboCop version: #{@output['metadata']['rubocop_version']}"
```

Agora você tem todas as informações de que precisa para atualizar sua execução de verificação. Na [primeira metade deste início rápido](#step-14-updating-a-check-run), você adicionou este código para definir o status da execução de verificação como `success`:

``` ruby
# Mark the check run as complete!
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: 'success',
  accept: 'application/vnd.github+json'
)
```

Você precisará atualizar esse código para usar a variável `conclusion` definida com base nos resultados do RuboCop (para `success` ou `neutral`). Você pode atualizar o código com o seguinte:

``` ruby
# Mark the check run as complete! And if there are warnings, share them.
@installation_client.update_check_run(
  @payload['repository']['full_name'],
  @payload['check_run']['id'],
  status: 'completed',
  conclusion: conclusion,
  output: {
    title: 'Octo RuboCop',
    summary: summary,
    text: text,
    annotations: annotations
  },
  actions: [{
    label: 'Fix this',
    description: 'Automatically fix all linter notices.',
    identifier: 'fix_rubocop_notices'
  }],
  accept: 'application/vnd.github+json'
)
```

Agora que você está definindo uma conclusão com base no status do teste CI e que você adicionou a saída dos resultados do RuboCop, você criou um teste de CI! Parabéns. 🙌

O código acima também adiciona um recurso ao servidor de CI chamado [ações solicitadas](https://developer.github.com/changes/2018-05-23-request-actions-on-checks/) por meio do objeto `actions`. {% ifversion fpt or ghec %}(Observe que isso não está relacionado ao [GitHub Actions](/actions)). {% endif %} As ações solicitadas adicionam um botão na guia **Verificações** no GitHub, que permite que alguém solicite que a execução de verificação realize uma ação adicional. A ação adicional é completamente configurável pelo seu aplicativo. Por exemplo, uma vez que o RuboCop tem um recurso para corrigir automaticamente os erros que encontra no código Ruby, seu servidor de CI pode usar um botão de ações solicitadas para permitir que as pessoas solicitem correções automáticas de erros. Quando alguém clica no botão, o aplicativo recebe o evento `check_run` com uma ação `requested_action`. Cada ação solicitada tem um `identifier` que o aplicativo usa para determinar qual botão foi clicado.

O código acima ainda não exige que o RuboCop corrija erros automaticamente. Você irá adicionar isso na próxima seção. Mas primeiro, dê uma olhada no teste de CI que você acabou de criar reiniciando o servidor `template_server.rb` e criando uma solicitação de pull:

```shell
$ ruby template_server.rb
```

As anotações aparecerão na guia **Verificações**.

![Anotações da execução de verificação na aba verificações](/assets/images/github-apps/github_apps_checks_annotations.png)

Observe o botão "Corrija isso" que você criou ao adicionar uma ação solicitada.

![Botão de ação solicitada de execução de verificação](/assets/images/github-apps/github_apps_checks_fix_this_button.png)

Se as anotações estiverem relacionadas a um arquivo já incluído na PR, as anotações também aparecerão na guia **Arquivos alterados**.

![Anotações da execução de verificação na aba Arquivos alterados](/assets/images/github-apps/github_apps_checks_annotation_diff.png)

## Etapa 2.6. Corrigir erros do RuboCop automaticamente

Se você chegou até aqui, parabéns! 👏 Você já criou um teste de CI. Nesta seção, você irá adicionar mais um recurso que usa RuboCop para corrigir automaticamente os erros que encontra. Você já adicionou o botão "Corrigir isso" na [seção anterior](#step-25-updating-the-check-run-with-ci-test-results). Agora você adicionará o código para manipular o evento de execução de verificação `requested_action` que é disparado quando alguém clicar no botão "Corrigir isso".

A ferramenta RuboCop [oferece](https://docs.rubocop.org/rubocop/usage/basic_usage.html#auto-correcting-offenses) a opção `--auto-correct` de linha de comando para corrigir automaticamente os erros encontrados. Quando você usa o recurso `--auto-correct`, as atualizações são aplicadas aos arquivos locais no servidor. Você deverá fazer push das alterações no GitHub depois que o RuboCop fizer sua mágica.

Para fazer push para um repositório, seu aplicativo deve ter permissões de "conteúdo do repositório". Você define essa permissão de volta na [Etapa 2.2. Clonando o repositório](#step-22-cloning-the-repository) para **Leitura e gravação**, para deixar tudo pronto.

Para fazer commit dos arquivos, o Git deve saber qual [nome de usuário](/github/getting-started-with-github/setting-your-username-in-git/) e [email](/articles/setting-your-commit-email-address-in-git/) associar ao commit. Adicione mais duas variáveis de ambiente em seu arquivo `.env` para armazenar as configurações de nome (`GITHUB_APP_USER_NAME`) e email (`GITHUB_APP_USER_EMAIL`). Seu nome pode ser o nome do seu aplicativo e o e-mail pode ser qualquer e-mail que desejar para este exemplo. Por exemplo:

```ini
GITHUB_APP_USER_NAME=Octoapp
GITHUB_APP_USER_EMAIL=octoapp@octo-org.com
```

Depois de atualizar o arquivo `.env` com o nome e o email do autor e do committer, você estará pronto para adicionar código para ler as variáveis de ambiente e definir a configuração do Git. Você irá adicionar esse código em breve.

Quando alguém clica no botão "Corrigir isso", seu aplicativo recebe o [webhook de execução de verificação](/webhooks/event-payloads/#check_run) com o tipo de ação `requested_action`.

Na [Etapa 1.4. Atualizando uma execução de verificação](#step-14-updating-a-check-run), você atualizou seu `event_handler` para lidar com a procura de ações no evento `check_run`. Você já tem uma instrução case para lidar com os tipos de ação `created` e `rerequested`:

``` ruby
when 'check_run'
  # Check that the event is being sent to this app
  if @payload['check_run']['app']['id'].to_s === APP_IDENTIFIER
    case @payload['action']
    when 'created'
      initiate_check_run
    when 'rerequested'
      create_check_run
  end
end
```

Adicione outra instrução `when` após o caso `rerequested` para manipular o evento `rerequested_action`:

``` ruby
when 'requested_action'
  take_requested_action
```

Esse código chama um novo método que manipulará todos os eventos `requested_action` para seu aplicativo. Adicione o seguinte método à seção de métodos auxiliares do seu código:

``` ruby
# Handles the check run `requested_action` event
# See /webhooks/event-payloads/#check_run
def take_requested_action
  full_repo_name = @payload['repository']['full_name']
  repository     = @payload['repository']['name']
  head_branch    = @payload['check_run']['check_suite']['head_branch']

  if (@payload['requested_action']['identifier'] == 'fix_rubocop_notices')
    clone_repository(full_repo_name, repository, head_branch)

    # Sets your commit username and email address
    @git.config('user.name', ENV['GITHUB_APP_USER_NAME'])
    @git.config('user.email', ENV['GITHUB_APP_USER_EMAIL'])

    # Automatically correct RuboCop style errors
    @report = `rubocop '#{repository}/*' --format json --auto-correct`

    pwd = Dir.getwd()
    Dir.chdir(repository)
    begin
      @git.commit_all('Automatically fix Octo RuboCop notices.')
      @git.push("https://x-access-token:#{@installation_token.to_s}@github.com/#{full_repo_name}.git", head_branch)
    rescue
      # Nothing to commit!
      puts 'Nothing to commit'
    end
    Dir.chdir(pwd)
    `rm -rf '#{repository}'`
  end
end
```

O código acima clona um repositório, assim como o código que você adicionou na [Etapa 2.2. Clonando o repositório](#step-22-cloning-the-repository). Uma instrução `if` verifica se o identificador da ação solicitada corresponde ao identificador do botão do RuboCop (`fix_rubocop_notices`). Quando eles correspondem, o código clona o repositório, define o nome de usuário e o email do Git e executa o RuboCop com a opção `--auto-correct`. A opção `--auto-correct` aplica as alterações aos arquivos do servidor de CI local automaticamente.

Os arquivos são alterados localmente, mas você ainda deverá enviá-los para o GitHub. Você usará a gem útil `ruby-git` novamente para fazer commit de todos os arquivos. O Git tem um único comando que prepara todos os arquivos modificados ou excluídos e faz o commit deles: `git commit -a`. Para fazer a mesma coisa usando `ruby-git`, o código acima usa o método `commit_all`. Em seguida, o código envia por push os arquivos do commit para o GitHub usando o token de instalação, usando o mesmo método de autenticação que o comando do Git `clone`. Por fim, ele remove o diretório do repositório para garantir que o diretório de trabalho seja preparado para o próximo evento.

É isso! O código que você escreveu agora conclui o servidor de CI da API de verificação. 💪 Reinicie o servidor `template_server.rb` e crie uma solicitação de pull:

```shell
$ ruby template_server.rb
```

{% data reusables.apps.sinatra_restart_instructions %}

Desta vez, clique no botão "Corrigir isso" para corrigir automaticamente os erros que o RuboCop encontrou na guia **Verificações**.

Na guia **Commits**, você verá um commit novinho feito pelo nome de usuário definido na configuração do Git. Talvez seja necessário atualizar seu navegador para ver a atualização.

![Um novo commit para corrigir as notificações do Octo RuboCop automaticamente](/assets/images/github-apps/github_apps_new_requested_action_commit.png)

Como um novo commit foi enviado por push para o repositório, você verá um novo conjunto de verificação para o Octo RuboCop na guia **Verificações**. Mas, desta vez, não há erros porque o RuboCop corrigiu todos eles. 🎉

![Nenhum erro de conjunto de verificação ou de execução de verificação](/assets/images/github-apps/github_apps_checks_api_success.png)

Encontre o código concluído para o aplicativo que acabou de criar no arquivo `server.rb` do repositório [Criar testes de CI com a API de Verificações](https://github.com/github-developer/creating-ci-tests-with-the-checks-api).

## Etapa 2.7. Dicas de segurança

O modelo de código do aplicativo GitHub já possui um método para verificar as cargas do webhook de entrada para garantir que sejam de uma fonte confiável. Se você não estiver validando as cargas do webhook, você deverá garantir que, quando nomes do repositório estiverem incluídos na carga do webhook, este não conterá comandos arbitrários que possam ser usados maliciosamente. O código abaixo valida que o nome do repositório contém apenas caracteres alfabéticos latinos, hifens e sublinhados. Para fornecer um exemplo completo, o código completo `server.rb` disponível no [repositório complementar](https://github.com/github-developer/creating-ci-tests-with-the-checks-api) deste início rápido inclui o método de validação de conteúdo de webhook de entrada e essa verificação para verificar o nome do repositório.

``` ruby
# This quickstart example uses the repository name in the webhook with
# command-line utilities. For security reasons, you should validate the
# repository name to ensure that a bad actor isn't attempting to execute
# arbitrary commands or inject false repository names. If a repository name
# is provided in the webhook, validate that it consists only of latin
# alphabetic characters, `-`, and `_`.
unless @payload['repository'].nil?
  halt 400 if (@payload['repository']['name'] =~ /[0-9A-Za-z\-\_]+/).nil?
end
```

## Solução de problemas

Aqui estão alguns problemas comuns e algumas soluções sugeridas. Se você tiver qualquer outro problema, poderá pedir ajuda ou orientação em {% data reusables.support.prodname_support_forum_with_url %}.

* **P:** Meu aplicativo não está enviando código por push para o GitHub. Eu não vejo as correções que o RuboCop faz automaticamente!

    **R:** Verifique se você tem permissões de **Leitura e gravação** para "Conteúdo do repositório" e se está clonando o repositório com o token de instalação. Confira a [Etapa 2.2. Clonando o repositório](#step-22-cloning-the-repository) para obter detalhes.

* **P:** Vejo um erro na saída de depuração `template_server.rb` relacionado à clonagem do meu repositório.

    **R:** Se você vir o seguinte erro, significa que você não excluiu o check-out do repositório de um ou ambos os métodos `initiate_check_run`e `take_requested_action`:

    ```shell
    2018-11-26 16:55:13 - Git::GitExecuteError - git  clone '--' 'https://x-access-token:ghs_9b2080277016f797074c4dEbD350745f4257@github.com/codertocat/octocat-breeds.git' 'Octocat-breeds'  2>&1:fatal: destination path 'Octocat-breeds' already exists and is not an empty directory.:
    ```

    Compare seu código com o arquivo `server.rb` para ter o mesmo código nos métodos `initiate_check_run` e `take_requested_action`.

* **P:** Novas execuções de verificação não aparecem na guia "Verificações" no GitHub.

    **R:** Reinicie o Smee e execute novamente o `template_server.rb` servidor.

* **P:** Não vejo o botão "Executar tudo novamente" na guia "Verificações" no GitHub.

    **R:** Reinicie o Smee e execute novamente o `template_server.rb` servidor.

## Conclusão

Depois ler este guia, você aprendeu os princípios básicos para usar a API de verificação para criar um servidor de CI! Para resumir, você:

* Configurou seu servidor para receber eventos de API de verificação e criar execuções de verificação.
* Usou o RuboCop para verificar códigos nos repositórios e criar anotações para os erros.
* Implementou uma ação solicitada que corrige os erros do linter automaticamente.

## Próximas etapas

Aqui estão algumas ideias do que você pode fazer a seguir:

* Atualmente, o botão "Corrija isso" sempre é exibido. Atualize o código que você escreveu para exibir o botão "Corrija isso" somente quando o RuboCop encontrar erros.
* Se preferir que o RuboCop não faça commit dos arquivos diretamente no branch principal, atualize o código para [criar uma solicitação de pull](/rest/reference/pulls#create-a-pull-request) com um novo branch com base no branch principal.
