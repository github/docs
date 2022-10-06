---
title: Configurar seu ambiente de desenvolvimento para criar um aplicativo GitHub
intro: 'Aprenda os princípios básicos para estender e criar um novo {% data variables.product.prodname_github_apps %}.'
redirect_from:
  - /apps/quickstart-guides/setting-up-your-development-environment
  - /developers/apps/setting-up-your-development-environment-to-create-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Development environment
ms.openlocfilehash: 61370cfa0643bcba91cfe78e077346cd40286e1e
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145084009'
---
## Introdução

Este guia irá analisar os passos necessários para configurar um aplicativo GitHub e executá-lo em um servidor. Os aplicativos GitHub exigem algumas etapas de configuração para gerenciar eventos do webhook e conectar o registro do aplicativo no GitHub ao seu código. O aplicativo neste guia serve como base que você pode usar para estender e criar novos aplicativos no GitHub.

Ao final deste guia, você aprenderá a registrar um aplicativo GitHub e configurar um servidor web para receber eventos de webhook. Você aprenderá a usar uma ferramenta denominada Smee para capturar cargas do webhook e encaminhá-las para seu ambiente de desenvolvimento local. O aplicativo de modelo que você vai configurar nesta seção não fará nada especial ainda, mas servirá como uma estrutura que você poderá usar para começar a escrever o código do aplicativo usando a API ou para concluir outros [guias de início rápido](/apps/quickstart-guides/). {% ifversion fpt or ghec %}Confira exemplos bem-sucedidos de aplicativos no [GitHub Marketplace](https://github.com/marketplace) e [Compatível com o GitHub](https://github.com/works-with).{% endif %}

Após concluir este projeto, você entenderá como efetuar a autenticação como um aplicativo GitHub e uma instalação, bem como e como esses métodos de autenticação são diferentes.

Aqui estão as etapas que você vai seguir para configurar o modelo do aplicativo GitHub:

1. [Iniciar um novo canal do Smee](#step-1-start-a-new-smee-channel)
1. [Registrar um novo Aplicativo do GitHub](#step-2-register-a-new-github-app)
1. [Salvar sua chave privada e a ID do Aplicativo](#step-3-save-your-private-key-and-app-id)
1. [Preparar o ambiente do runtime](#step-4-prepare-the-runtime-environment)
1. [Revisar o código do modelo do Aplicativo do GitHub](#step-5-review-the-github-app-template-code)
1. [Iniciar o servidor](#step-6-start-the-server)
1. [Instalar o aplicativo na sua conta](#step-7-install-the-app-on-your-account)

{% data reusables.apps.app-ruby-guides %}

## Pré-requisitos

Você pode achar útil ter um entendimento básico do seguinte:

* [Aplicativos GitHub](/apps/about-apps)
* [Webhooks](/webhooks)
* [A linguagem de programação Ruby](https://www.ruby-lang.org/en/)
* [APIs REST](/rest)
* [Sinatra](http://sinatrarb.com/)

Mas é possível acompanhar o processo em qualquer nível de experiência. Nós vamos nos conectar a informações de que você precisa ao longo do caminho!

Antes de começar, você precisa clonar o repositório com o código do modelo usado neste início rápido. Abra seu aplicativo de terminal e encontre um diretório em que você gostaria de armazenar o código. Execute este comando para clonar o repositório de [modelos de Aplicativos do GitHub](https://github.com/github-developer/github-app-template):

```shell
$ git clone https://github.com/github-developer/github-app-template.git
```

## Etapa 1. Inicie um novo canal da Smee

Para ajudar o GitHub a enviar webhooks para a sua máquina local sem expô-lo à internet, você pode usar uma ferramenta denominada Smee. Primeiro, acesse https://smee.io e clique em **Iniciar um novo canal**. Se já estiver familiarizado com outras ferramentas que expõem seu computador local à Internet, como [`ngrok`](https://dashboard.ngrok.com/get-started) e [`localtunnel`](https://localtunnel.github.io/www/), fique à vontade para usá-las.

![O botão do novo canal da Smee](/assets/images/smee-new-channel.png)

Iniciar um novo canal da Smee cria um domínio único em que o GitHub pode enviar cargas do webhook. Para a próxima etapa, você precisa conhecer este domínio. Veja um exemplo de um domínio exclusivo em `https://smee.io/qrfeVRbFbffd6vD`:

![Um canal único da Smee](/assets/images/smee-unique-domain.png)

Em seguida, volte ao Terminal e siga estes passos para executar o cliente da interface da linha de comando da Smee (CLI):

{% note %}

**Observação:** as etapas a seguir são ligeiramente diferentes das instruções descritas em "Usar a CLI" que você verá na página do seu canal do Smee. Você **não** precisa seguir as instruções descritas em "Usar o cliente Node.js" ou "Como usar o suporte interno do Probot".

{% endnote %}

1. Instale o cliente:

    ```shell
    $ npm install --global smee-client
    ```

2. Execute o cliente (substituindo `https://smee.io/qrfeVRbFbffd6vD` por um domínio próprio):

    ```shell
    $ smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000
    ```

    Você verá algo semelhante ao mostrado a seguir:

    ```shell
    Forwarding https://smee.io/qrfeVRbFbffd6vD to http://127.0.0.1:3000/event_handler
    Connected https://smee.io/qrfeVRbFbffd6vD
    ```

O comando `smee --url <unique_channel>` instrui o Smee a encaminhar todos os eventos de webhook recebidos pelo canal do Smee ao cliente do Smee em execução no computador. A opção `--path /event_handler` encaminha os eventos para a rota `/event_handler`, que abordaremos em uma [seção posterior](#step-5-review-the-github-app-template-code). A opção `--port 3000` especifica a porta 3000, que é a porta que o servidor ouvirá. Usando a Smee. A sua máquina não precisa estar conectada à internet pública para receber os webhooks do GitHub. Você também pode abrir a URL da Smee no seu navegador para inspecionar as cargas do webhook quando entrarem.

Recomendamos deixar esta janela de Terminal aberta e manter a Smee conectada enquanto você realiza as outras etapas deste guia. Embora você _possa_ desconectar e reconectar o cliente Smee sem perder seu domínio exclusivo (diferente do `ngrok`), talvez você ache mais fácil mantê-lo conectado e realizar outras tarefas de linha de comando em outra janela do terminal.

## Etapa 2. Registre um novo aplicativo GitHub

Se você ainda não tem uma conta do GitHub, agora é um [ótimo momento para começar](https://github.com/join). Não se esqueça de verificar seu e-mail antes de continuar! Para registrar um novo aplicativo, acesse a [página de configurações do aplicativo](https://github.com/settings/apps) no seu perfil do GitHub e clique em **Novo Aplicativo do GitHub**.

![Site do GitHub, que mostra o **Novo aplicativo**](/assets/images/new-app.png)

Você verá um formulário em que poderá inserir informações sobre o seu aplicativo. Confira "[Como criar um Aplicativo do GitHub](/apps/building-github-apps/creating-a-github-app/)" para obter informações gerais sobre os campos dessa página. Para os objetivos deste guia, você deverá inserir dados específicos em alguns campos:

{% note %}

**Observação:** você sempre poderá atualizar essas configurações mais tarde para apontá-las para um servidor hospedado.

{% endnote %}

* Para a "URL da página inicial", use o domínio emitido pela Smee. Por exemplo:

    ![Formulário com domínio da Smee preenchido para URL da página inicial](/assets/images/homepage-url.png)

* Para a "URL do Webhook", use novamente o domínio emitido pela Smee. Por exemplo:

    ![Formulário com domínio da Smee preenchido para URL do webhook](/assets/images/webhook-url.png)

* Para o "segredo do Webhook", crie uma senha para proteger seus pontos de extremidade do webhook. Isto deve ser algo que somente você (e o GitHub, por meio deste formulário) sabe. O segredo é importante porque você receberá cargas da internet pública, além de usar este segredo para verificar o remetente do webhook. Observe que as configurações do aplicativo GitHub informam que o segredo do webhook é opcional, o que é verdade na maioria dos casos, mas para que o código do aplicativo do modelo funcione, você deverá definir um segredo do webhook.

    ![Formulário com segredo do webhook preenchido](/assets/images/webhook-secret.png)

* Na página Permissões e Webhooks, você pode especificar um conjunto de permissões para seu aplicativo, que determina o volume de dados aos quais seu aplicativo tem acesso. Na seção "Permissões do repositório", role a página para baixo até "Metadados" e selecione `Access: Read-only`. Se você decidir estender este aplicativo do modelo, você pode atualizar essas permissões mais tarde.

* Na parte inferior da página Permissões e Webhooks, especifique se este é um aplicativo privado ou público. Isto se refere a quem pode instalá-lo: apenas você ou qualquer pessoa? Por enquanto, mantenha o aplicativo como privado selecionando **Somente nesta conta**.

    ![Privacidade do aplicativo GitHub](/assets/images/create_app.png)

Clique em **Criar um Aplicativo do GitHub** para criar seu aplicativo.

## Etapa 3. Salve sua chave privada e o ID do aplicativo

Depois de criar seu aplicativo, você será levado novamente para a [página de configurações do aplicativo](https://github.com/settings/apps). Você tem mais duas coisas para fazer aqui:

* **Gerar uma chave privada para seu aplicativo.** Isso é necessário para autenticar seu aplicativo posteriormente. Role a página para baixo e clique em **Gerar uma chave privada**. Salve o arquivo resultante `PEM` (chamado algo como _`app-name`_ - _`date`_ -`private-key.pem`) em um diretório em que você possa encontrá-lo novamente.

    ![A caixa de diálogo de geração de chaves privadas](/assets/images/private_key.png)

* **Anote a ID do aplicativo que o GitHub atribuiu ao aplicativo.** Você precisará disso para preparar seu ambiente de runtime.

    <img src="/assets/images/app_id.png" alt="Your app's ID number" width="200px"/>

## Etapa 4. Prepare o ambiente do tempo de execução

Para manter suas informações seguras, recomendamos colocar todos os segredos referentes ao aplicativo na memória do computador onde seu aplicativo poderá encontrá-los, em vez de colocá-los diretamente no seu código. Uma ferramenta de desenvolvimento útil chamada [dotenv](https://github.com/bkeepers/dotenv) carrega as variáveis de ambiente específicas do projeto de um arquivo `.env` em `ENV`. Nunca faça check-in do arquivo `.env` no GitHub. Este é um arquivo local que armazena informações confidenciais que você não deseja que estejam na internet pública. O arquivo `.env` já está incluído no arquivo [`.gitignore`](/github/getting-started-with-github/ignoring-files/) do repositório para evitar isso.

O código de modelo baixado na [seção Pré-requisitos](#prerequisites) já tem um arquivo de exemplo chamado `.env-example`. Renomeie o arquivo de exemplo de `.env-example` para `.env` ou crie uma cópia do arquivo `.env-example` chamado `.env`. Você ainda não instalou o dotenv, mas vai instalá-lo mais adiante neste guia de início rápido quando executar o `bundle install`. **Observação:** os guias de início rápido que referenciam as etapas deste guia podem incluir variáveis de ambiente adicionais no arquivo `.env-example`. Faça referência ao guia de início rápido para o projeto que você clonou no GitHub para orientação que define essas variáveis de ambiente adicionais.

Você precisa adicionar essas variáveis ao arquivo `.env`:

* _`GITHUB_PRIVATE_KEY`_ : adicione a chave privada [gerada e salva](#step-3-save-your-private-key-and-app-id). Abra o arquivo `.pem` com um editor de texto ou use a linha de comando para ver o conteúdo do arquivo: `cat path/to/your/private-key.pem`. Copie todo o conteúdo do arquivo como o valor de `GITHUB_PRIVATE_KEY` no arquivo `.env`. **Observação:** como o arquivo PEM tem mais de uma linha, você precisará colocar o valor entre aspas, conforme o exemplo abaixo.
* _`GITHUB_APP_IDENTIFIER`_ : use a ID do aplicativo que você anotou na seção anterior.
* _`GITHUB_WEBHOOK_SECRET`_ : adicione o segredo do webhook.

Veja aqui um exemplo de arquivo `.env`:

```
GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
...
HkVN9...
...
-----END DSA PRIVATE KEY-----"
GITHUB_APP_IDENTIFIER=12345
GITHUB_WEBHOOK_SECRET=your webhook secret
```

## Etapa 5. Revise o código do modelo do aplicativo GitHub

O código do aplicativo do modelo já contém algum código de que cada aplicativo GitHub vai precisar. Esta seção apresenta o código que já existe no modelo do aplicativo GitHub. Não há etapas que você precisa realizar para concluir esta seção. Se já estiver familiarizado com o código do modelo, vá para a "[Etapa 6. Iniciar o servidor](#step-6-start-the-server)".

Abra o arquivo `template_server.rb` no seu editor de texto favorito. Você verá comentários em todo este arquivo que fornecem um contexto adicional para o código do modelo. Recomendamos ler esses comentários com atenção e até mesmo adicionar seus próprios comentários para acompanhar o novo código que você escrever.

No início do arquivo, você verá `set :port 3000`, que define a porta usada ao iniciar o servidor Web para corresponder à porta à qual você redirecionou as cargas de webhook na "[Etapa 1. Iniciar um novo canal do Smee](#step-1-start-a-new-smee-channel)".

O próximo código que você verá é a declaração `class GHApp < Sinatra::Application`. Você irá escrever todo o código para o seu aplicativo GitHub dentro desta classe.

Fora desta caixa, a classe do modelo faz o seguinte:
* [Ler as variáveis de ambiente](#read-the-environment-variables)
* [Ativar o registro em log](#turn-on-logging)
* [Definir um pré-filtro](#define-a-before-filter)
* [Definir o manipulador de rotas](#define-a-route-handler)
* [Definir os métodos auxiliares](#define-the-helper-methods)

### Lê as variáveis de ambiente

A primeira coisa que essa classe faz é ler as três variáveis de ambiente definidas na "[Etapa 4. Preparar o ambiente de runtime](#step-4-prepare-the-runtime-environment)" e armazená-las em variáveis para uso posterior:

``` ruby
# Expects that the private key in PEM format. Converts the newlines
PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))

# Your registered app must have a secret set. The secret is used to verify
# that webhooks are sent by GitHub.
WEBHOOK_SECRET = ENV['GITHUB_WEBHOOK_SECRET']

# The GitHub App's identifier (type integer) set when registering an app.
APP_IDENTIFIER = ENV['GITHUB_APP_IDENTIFIER']
```

### Ativar o registro em log

Em seguida, um bloco do código que habilita o login durante o desenvolvimento, que é o ambiente-padrão np Sinatra. Este código ativa o log no nível `DEBUG` para mostrar uma saída útil no terminal durante o desenvolvimento do aplicativo:

``` ruby
# Turn on Sinatra's verbose logging during development
configure :development do
  set :logging, Logger::DEBUG
end
```

### Defina um pré-filtro

O Sinatra usa [pré-filtros](https://github.com/sinatra/sinatra#filters) que permitem executar o código antes do manipulador de rotas. O bloco `before` no modelo chama quatro [métodos auxiliares](https://github.com/sinatra/sinatra#helpers). O aplicativo de modelo definirá esses métodos auxiliares em uma [seção posterior](#define-the-helper-methods).

``` ruby
# Before each request to the `/event_handler` route
before '/event_handler' do
  get_payload_request(request)
  verify_webhook_signature
  authenticate_app
  # Authenticate the app installation in order to run API operations
  authenticate_installation(@payload)
end
```

### Defina um gerenciador de encaminhamento

Um encaminhamento vazio está incluído no código do modelo. Esse código processa todas as solicitações `POST` para a rota `/event_handler`. Você não escreverá esse manipulador de eventos neste guia de início rápido, mas confira os outros [guias de início rápido](/apps/quickstart-guides/) para ver exemplos de como estender este aplicativo de modelo.

``` ruby
post '/event_handler' do

end
```

### Definir os métodos auxiliares

Os métodos de ajuda neste modelo fazem a maior parte do trabalho pesado. Nesta seção do código, são definidos quatro métodos de ajuda.

#### Gerenciar a carga do webhook

O primeiro método `get_payload_request` captura a carga de webhook e a converte no formato JSON, o que facilita muito o acesso aos dados da carga.

#### Verificar a assinatura do webhook

O segundo método `verify_webhook_signature` faz a verificação da assinatura do webhook para garantir que o GitHub gerou o evento. Para saber mais sobre o código no método auxiliar `verify_webhook_signature`, confira "[Como proteger seus webhooks](/webhooks/securing/)". Se os webhooks estiverem seguros, este método registrará todos as cargas de entrada no seu Terminal. O código do registro é útil para verificar se o seu servidor web está funcionando, mas você sempre poderá removê-lo posteriormente.

#### Efetuar autenticação como um aplicativo GitHub

Para fazer chamadas à API, você usará a [biblioteca Octokit](http://octokit.github.io/octokit.rb/). Fazer qualquer coisa interessante com esta biblioteca irá exigir que você, ou melhor, seu aplicativo, efetue a autenticação. Os aplicativos GitHub têm dois métodos de autenticação:

- Autenticação como um Aplicativo do GitHub usando um [JWT (Token Web JSON)](https://jwt.io/introduction).
- Efetuar a autenticação como uma instalação específica de um aplicativo GitHub usando um token de acesso de instalação.

Você aprenderá a se autenticar como uma instalação na [próxima seção](#authenticating-as-an-installation).

A [autenticação como um Aplicativo do GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) permite que você realize algumas ações:

 * Você pode recuperar informações de gerenciamento de alto nível sobre seu aplicativo GitHub.
 * Você pode solicitar tokens de acesso para uma instalação do aplicativo.

Por exemplo, você irá efetuar a autenticação como um aplicativo GitHub para recuperar uma lista das contas (da organização e pessoal) que instalaram seu aplicativo. Mas esse método de autenticação não permite que você faça muitas coisas com a API. Para acessar os dados de um repositório e realizar operações em nome da instalação, você precisa efetuar a autenticação como uma instalação. Para fazer isso, você precisará efetuar a autenticação como um aplicativo GitHub primeiro para solicitar um token de acesso de instalação.

Para usar a biblioteca Octokit.rb a fim de fazer chamadas à API, você precisará inicializar um [cliente do Octokit](http://octokit.github.io/octokit.rb/Octokit/Client.html) autenticado como um Aplicativo do GitHub. O método auxiliar `authenticate_app` faz exatamente isso.

``` ruby
# Instantiate an Octokit client authenticated as a GitHub App.
# GitHub App authentication requires that you construct a
# JWT (https://jwt.io/introduction/) signed with the app's private key,
# so GitHub can be sure that it came from the app an not altered by
# a malicious third party.
def authenticate_app
  payload = {
      # The time that this JWT was issued, _i.e._ now.
      iat: Time.now.to_i,

      # JWT expiration time (10 minute maximum)
      exp: Time.now.to_i + (10 * 60),

      # Your GitHub App's identifier number
      iss: APP_IDENTIFIER
  }

  # Cryptographically sign the JWT
  jwt = JWT.encode(payload, PRIVATE_KEY, 'RS256')

  # Create the Octokit client, using the JWT as the auth token.
  @app_client ||= Octokit::Client.new(bearer_token: jwt)
end
```

O código acima gera um [JWT (JSON Web Token)](https://jwt.io/introduction) e o usa (com a chave privada do seu aplicativo) para inicializar o cliente do Octokit. GitHub verifica a autenticação de uma solicitação, verificando o token com a chave pública armazenada no aplicativo. Para saber mais sobre como esse código funciona, confira "[Como se autenticar como um Aplicativo do GitHub](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app)".

#### Autenticar como uma instalação

Uma _instalação_ refere-se a qualquer conta de usuário ou de organização que instalou o aplicativo. Mesmo que alguém instale o app em mais de um repositório, ele só conta como uma instalação porque está dentro da mesma conta. O último método auxiliar `authenticate_installation` inicializa um [cliente do Octokit](http://octokit.github.io/octokit.rb/Octokit/Client.html) autenticado como uma instalação. Este cliente Octokit é o que você usaria para fazer chamadas de API autenticada.

``` ruby
# Instantiate an Octokit client authenticated as an installation of a
# GitHub App to run API operations.
def authenticate_installation(payload)
  installation_id = payload['installation']['id']
  installation_token = @app_client.create_app_installation_access_token(installation_id)[:token]
  @installation_client = Octokit::Client.new(bearer_token: installation_token)
end
```

O método [`create_app_installation_access_token`](http://octokit.github.io/octokit.rb/Octokit/Client/Apps.html#create_app_installation_access_token-instance_method) do Octokit cria um token de instalação. Este método aceita dois argumentos:

* Instalação (inteiro): O ID de uma instalação do aplicativo GitHub
* Opções (hash, usa `{}` como padrão): um conjunto personalizável de opções

Sempre que um Aplicativo do GitHub recebe um webhook, ele inclui um objeto `installation` com uma `id`. Ao usar o cliente autenticado como um Aplicativo do GitHub, transmita essa ID para o método `create_app_installation_access_token` a fim de gerar um token de acesso para cada instalação. Uma vez que você não está passando nenhuma opção para o método, as opções-padrão para um hash vazio. Se você examinar [a documentação](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation), poderá ver que a resposta para `create_app_installation_access_token` inclui dois campos: `token` e `expired_at`. O código de modelo seleciona o token na resposta e inicializa um cliente de instalação.

Com este método em vigor, cada vez que seu aplicativo recebe uma nova carga de webhook, ele cria um cliente para a instalação que acionou o evento. Este processo de autenticação permite que seu aplicativo do GitHub funcione para todas as instalações de qualquer conta.

Agora você está pronto para começar a fazer chamadas de API!

## Etapa 6. Iniciar o servidor

Seu aplicativo ainda não _faz_ nada, mas, neste momento, você pode executá-lo no servidor.

Mantenha a Smee em execução na aba atual no seu Terminal. Abra uma nova guia e use `cd` no diretório em que [clonou o código do aplicativo de modelo](#prerequisites). O código do Ruby nesse repositório iniciará um servidor Web do [Sinatra](http://sinatrarb.com/). Este código tem algumas dependências. Você pode instalá-las, executando:

```shell
$ gem install bundler
```

Seguido por:

```shell
$ bundle install
```

Com as dependências instaladas, você pode iniciar o servidor:

```shell
$ bundle exec ruby template_server.rb
```

Você verá uma resposta semelhante a essa:

```shell
> == Sinatra (v2.0.3) has taken the stage on 3000 for development with backup from Puma
> Puma starting in single mode...
> * Version 3.11.2 (ruby 2.4.0-p0), codename: Love Song
> * Min threads: 0, max threads: 16
> * Environment: development
> * Listening on tcp://localhost:3000
> Use Ctrl-C to stop
```

Se você receber um erro, verifique se criou o arquivo `.env` no diretório que contém `template_server.rb`.

Depois que o servidor estiver em execução, teste-o acessando `http://localhost:3000` no navegador. Se o aplicativo funcionar como esperado, você verá uma página útil de erro:

<img src="/assets/images/sinatra-404.png" alt="Sinatra's 404 error page" width="500px"/>

Isto é bom! Mesmo sendo uma página de erro, é uma página de erro do _Sinatra_, o que significa que o seu aplicativo está conectado ao servidor, conforme esperado. Você está vendo essa mensagem porque você não deu ao aplicativo mais nada para mostrar.

## Etapa 7. Instale o aplicativo em sua conta

Você pode testar se o servidor está ouvindo seu aplicativo acionando um evento para receber. Um evento simples que você pode testar é instalar o aplicativo em sua conta do GitHub, que deverá enviar o evento [`installation`](/webhooks/event-payloads/#installation). Se o aplicativo o receber, você verá uma saída na guia Terminal, em que iniciou `template_server.rb`.

Para instalar o aplicativo, acesse a [página de configurações do aplicativo](https://github.com/settings/apps), escolha seu aplicativo e clique em **Instalar Aplicativo** na barra lateral. Ao lado do seu nome de usuário, clique em **Instalar**.

Será perguntado se você deseja instalar o aplicativo em todos os repositórios ou nos repositórios selecionados. Caso você não deseje instalar o aplicativo em _todos_ os repositórios, tudo bem! Você pode criar um repositório de sandbox para fins de teste e instalar seu aplicativo lá.

<img src="/assets/images/install_permissions.png" alt="App installation permissions" width="500px"/>

Depois de clicar em **Instalar**, dê uma olhada na saída no terminal. Você deverá ver algo como:

```shell
> D, [2018-06-29T15:45:43.773077 #30488] DEBUG -- : ---- received event integration_installation
> D, [2018-06-29T15:45:43.773141 #30488] DEBUG -- : ----         action created
> 192.30.252.44 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0067
> D, [2018-06-29T15:45:43.833016 #30488] DEBUG -- : ---- received event installation
> D, [2018-06-29T15:45:43.833062 #30488] DEBUG -- : ----         action created
> 192.30.252.39 - - [29/Jun/2018:15:45:43 -0400] "POST / HTTP/2" 200 2 0.0019
```

Isto é bom! Isso significa que seu aplicativo recebeu uma notificação de que foi instalado na sua conta do GitHub. Se você vir algo assim, seu aplicativo estará em execução no servidor, conforme esperado. 🙌

Se você não vir a saída, verifique se o Smee está sendo executado corretamente em outra guia Terminal. Se precisar reiniciar o Smee, também precisará _desinstalar_ e _reinstalar_ o aplicativo para enviar o evento `installation` para seu aplicativo novamente e ver a saída no terminal. Se o Smee não for o problema, confira a seção "[Solução de problemas](#troubleshooting)" para ter outras ideias.

Se você estiver se perguntando de onde vem a saída do terminal acima, ela será gravada no [código do modelo de aplicativo](#prerequisites) em `template_server.rb`.

## Solução de problemas

Aqui estão alguns problemas comuns e algumas soluções sugeridas. Se você tiver qualquer outro problema, poderá pedir ajuda ou orientação em {% data variables.product.prodname_support_forum_with_url %}.

* **P:** Quando tento instalar o cliente de linha de comando Smee, recebo o seguinte erro:

    ```shell
    > npm: command not found
    ```

    **R:** Parece que você não tem o npm instalado. A melhor maneira de instalá-lo é baixar o pacote Node.js em https://nodejs.org e seguir as instruções de instalação para o seu sistema. O npm será instalado juntamente com o Node.js.

* **P:** Quando executo o servidor, recebo o seguinte erro:

    ```shell
    > server.rb:38:in `initialize': Neither PUB key nor PRIV key: header too long (OpenSSL::PKey::RSAError)
    ```

    **R:** Provavelmente, você não configurou a variável de ambiente de chave privada da maneira correta. A variável `GITHUB_PRIVATE_KEY` deverá ficar assim:

    ```
    GITHUB_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----
    ...
    HkVN9...
    ...
    -----END RSA PRIVATE KEY-----"
    ```

    Verifique se você copiou a chave pública correta para o arquivo `.env`.

* **P:** Quando executo o servidor, ele falha com este erro:

    ```shell
    > Octokit::Unauthorized ... 401 - Bad credentials`
    ```

    **R:** Você pode estar autenticado como um Aplicativo do GitHub, mas não como uma instalação. Siga todas as etapas descritas em "[Autenticação como uma instalação](#authenticating-as-an-installation)" e use a variável de instância `@installation_client` (autenticada com um token de acesso de instalação) para suas operações de API, não a variável de instância `@app_client` (autenticada com um JWT). O `@app_client` só pode recuperar informações de alto nível sobre seu aplicativo e obter tokens de acesso da instalação. Ele não pode fazer muito mais na API.

* **P:** Meu servidor não está ouvindo eventos. O cliente da Smee está sendo executado em uma janela do Terminal, e eu estou instalando o aplicativo em um repositório no GitHub, mas não vejo nenhuma saída na janela do Terminal onde estou executando o servidor.

    **R:** Talvez você não esteja executando o cliente do Smee, executando o comando do Smee com os parâmetros incorretos ou não tenha o domínio correto do Smee nas configurações do Aplicativo do GitHub. Primeiro, verifique se o cliente Smee está em execução em uma guia do Terminal. Se esse não for o problema, acesse a [página de configurações do aplicativo](https://github.com/settings/apps) e verifique os campos mostrados na "[Etapa 2. Registrar um novo Aplicativo do GitHub](#step-2-register-a-new-github-app)". Verifique se o domínio nesses campos corresponde ao domínio usado no comando `smee -u <unique_channel>` na "[Etapa 1. Iniciar um novo canal do Smee](#step-1-start-a-new-smee-channel)". Se nenhuma das alternativas acima funcionar, verifique se você está executando o comando do Smee completo, incluindo as opções `--path` e `--port`, por exemplo: `smee --url https://smee.io/qrfeVRbFbffd6vD --path /event_handler --port 3000` (substituindo `https://smee.io/qrfeVRbFbffd6vD` pelo seu domínio do Smee).

* **P:** Estou recebendo um erro `Octokit::NotFound` 404 na saída de depuração:
    ```
    2018-12-06 15:00:56 - Octokit::NotFound - POST {% data variables.product.api_url_code %}/app/installations/500991/access_tokens: 404 - Not Found // See: /v3/apps/#create-a-new-installation-token:
    ```

    **R:** Verifique se as variáveis no arquivo `.env` estão corretas. Verifique se você não definiu variáveis idênticas em algum outro arquivo de variável de ambiente como `bash_profile`. Verifique as variáveis de ambiente que o seu aplicativo está usando adicionando instruções `puts` ao código do aplicativo e executando o código novamente. Por exemplo, para garantir que você tem a chave privada correta, adicione `puts PRIVATE_KEY` ao código do aplicativo:

    ```
    PRIVATE_KEY = OpenSSL::PKey::RSA.new(ENV['GITHUB_PRIVATE_KEY'].gsub('\n', "\n"))
    puts PRIVATE_KEY
    ```

## Conclusão

Depois de analisar este guia, você aprendeu os componentes básicos para o desenvolvimento dos aplicativos GitHub! Para resumir, você:

* Registrou um novo aplicativo GitHub
* Usou a Smee para receber cargas de webhook
* Executou um simples servidor web pelo Sinatra
* Efetuou a autenticação como um aplicativo GitHub
* Efetuou a autenticação como uma instalação

## Próximas etapas

Agora você tem um aplicativo GitHub em execução em um servidor. Ele ainda não faz nada de especial, mas confira algumas maneiras de personalizar seu modelo do Aplicativo do GitHub em outros [guias de início rápido](/apps/quickstart-guides/).
