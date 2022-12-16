---
title: Usar a API do GitHub no seu aplicativo
intro: Aprenda como configurar seu aplicativo para ouvir eventos e usar a biblioteca do Octokit para realizar operações da API REST.
redirect_from:
  - /apps/building-your-first-github-app
  - /apps/quickstart-guides/using-the-github-api-in-your-app
  - /developers/apps/using-the-github-api-in-your-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Build an app with the REST API
ms.openlocfilehash: 93679e41fe145406ed1eb99e2daaba6bf8e10e76
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084001'
---
## Introdução

Este guia irá ajudá-lo a criar um aplicativo GitHub e executá-lo em um servidor. O aplicativo que você criar adicionará uma etiqueta a todos os novos problemas abertos no repositório onde o aplicativo está instalado.

Este projeto orientará você no seguinte:

* Programar seu aplicativo para ouvir eventos
* Usar a biblioteca do Octokit.rb para realizar operações da API REST

{% data reusables.apps.app-ruby-guides %}

Uma concluídas as etapas, você estará pronto para desenvolver outros tipos de integrações usando o conjunto completo das APIS do GitHub. {% ifversion fpt or ghec %}Confira exemplos bem-sucedidos de aplicativos no [GitHub Marketplace](https://github.com/marketplace) e [Compatível com o GitHub](https://github.com/works-with).{% endif %}

## Pré-requisitos

Você pode achar útil ter um entendimento básico do seguinte:

* [Aplicativos GitHub](/apps/about-apps)
* [Webhooks](/webhooks)
* [A linguagem de programação Ruby](https://www.ruby-lang.org/en/)
* [APIs REST](/rest)
* [Sinatra](http://sinatrarb.com/)

Mas é possível acompanhar o processo em qualquer nível de experiência. Nós vamos nos conectar a informações de que você precisa ao longo do caminho!

Antes de começar, você precisará fazer o seguinte:

1. Clone o repositório [Como usar a API do GitHub no seu aplicativo](https://github.com/github-developer/using-the-github-api-in-your-app).
  ```shell
    $ git clone https://github.com/github-developer/using-the-github-api-in-your-app.git
  ```

  Dentro do diretório, você encontrará um arquivo `template_server.rb` com o código de modelo que será usado neste guia de início rápido e um arquivo `server.rb` com o código do projeto concluído.

1. Siga as etapas descritas no guia de início rápido [Como configurar seu ambiente de desenvolvimento](/apps/quickstart-guides/setting-up-your-development-environment/) para configurar e executar o servidor de aplicativos `template_server.rb`. Se você já concluiu um guia de início rápido do Aplicativo do GitHub além do guia [Como configurar seu ambiente de desenvolvimento](/apps/quickstart-guides/setting-up-your-development-environment/), registre um _novo_ Aplicativo do GitHub e inicie um novo canal do Smee para usá-lo com este guia de início rápido.

  Este guia de início rápido inclui o mesmo código `template_server.rb` do guia de início rápido [Como configurar seu ambiente de desenvolvimento](/apps/quickstart-guides/setting-up-your-development-environment/). **Observação:** ao acompanhar o guia de início rápido [Como configurar seu ambiente de desenvolvimento](/apps/quickstart-guides/setting-up-your-development-environment/), use os arquivos de projeto incluídos no repositório [Como usar a API do GitHub no seu aplicativo](https://github.com/github-developer/using-the-github-api-in-your-app).

  Confira a seção [Solução de problemas](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) se você estiver tendo problemas ao configurar seu modelo de Aplicativo do GitHub.

## Criar o aplicativo

Agora que você está familiarizado com o código `template_server.rb`, crie um código que adiciona automaticamente o rótulo `needs-response` a todos os problemas em aberto no repositório no qual o aplicativo está instalado.

O arquivo `template_server.rb` contém o código do modelo de aplicativo que ainda não foi personalizado. Neste arquivo, você verá um espaço reservado para manipular eventos de webhook e outro código para inicializar um cliente Octokit.rb.

{% note %}

**Observação:** `template_server.rb` contém muitos comentários sobre o código que complementam este guia e explicam detalhes técnicos adicionais. Você pode considerar útil ler os comentários do arquivo antes de seguir com esta seção, para obter uma visão geral de como o código funciona.

O código personalizado final que você criará até o final deste guia é fornecido em [`server.rb`](https://github.com/github-developer/using-the-github-api-in-your-app/blob/master/server.rb). Mas espere até o final para olhar isso!

{% endnote %}

Estas são as etapas que você concluirá para criar seu primeiro aplicativo GitHub:

1. [Atualizar as permissões do aplicativo](#step-1-update-app-permissions)
2. [Adicionar um tratamento de evento](#step-2-add-event-handling)
3. [Criar um novo rótulo](#step-3-create-a-new-label)
4. [Adicionar um tratamento de rótulo](#step-4-add-label-handling)

## Etapa 1. Atualizar as permissões do aplicativo

Quando você [registrou seu aplicativo pela primeira vez](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app), aceitou as permissões padrão, o que significa que o aplicativo não tem acesso à maioria dos recursos. Para este exemplo, seu aplicativo precisará de permissão para ler problemas e escrever etiquetas.

Para atualizar as permissões do aplicativo:

1. Selecione seu aplicativo na [página de configurações do aplicativo](https://github.com/settings/apps) e clique em **Permissões e Webhooks** na barra lateral.
1. Na seção "Permissões", encontre "Problemas" e selecione **Leitura e Gravação** na lista suspensa "Acesso" ao lado. A descrição diz que esta opção concede acesso a problemas e etiquetas, o que é exatamente o que você precisa.
1. Na seção "Inscrever-se em eventos", selecione **Problemas** para se inscrever no evento.
{% data reusables.apps.accept_new_permissions_steps %}

Ótimo! Seu aplicativo tem permissão para realizar as tarefas que você deseja que ele realize. Agora você pode adicionar o código para que ele funcione.

## Etapa 2. Adicionar gerenciamento de evento

A primeira coisa que seu aplicativo precisa fazer é ouvir novos problemas que estão abertos. Agora que você se inscreveu no evento **Problemas**, começará a receber o webhook [`issues`](/webhooks/event-payloads/#issues), que é disparado quando determinadas ações relacionadas a problemas ocorrem. Você pode filtrar este tipo de evento para a ação específica que você deseja no seu código.

O GitHub envia as cargas de webhook como solicitações `POST`. Como você encaminhou as cargas do webhook do Smee para o `http://localhost/event_handler:3000`, o servidor receberá as cargas da solicitação `POST` na rota `post '/event_handler'`.

Uma rota `post '/event_handler'` vazia já está incluída no arquivo `template_server.rb`, que você baixou na seção [Pré-requisitos](#prerequisites). O encaminhamento vazio tem a seguinte forma:

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Use essa rota para tratar o evento `issues` adicionando o seguinte código:

``` ruby
case request.env['HTTP_X_GITHUB_EVENT']
when 'issues'
  if @payload['action'] === 'opened'
    handle_issue_opened_event(@payload)
  end
end
```

Cada evento enviado pelo GitHub inclui um cabeçalho de solicitação chamado `HTTP_X_GITHUB_EVENT`, que indica o tipo de evento na solicitação `POST`. Por enquanto, você só está interessado nos tipos de eventos `issues`. Cada evento tem um campo `action` adicional que indica o tipo de ação que disparou os eventos. Para `issues`, o campo `action` pode ser `assigned`, `unassigned`, `labeled`, `unlabeled`, `opened`, `edited`, `milestoned`, `demilestoned`, `closed` ou `reopened`.

Para testar seu gerenciador de eventos, tente adicionar um método auxiliar temporário. Você atualizará isso mais tarde quando [Adicionar um tratamento de rótulo](#step-4-add-label-handling). Por enquanto, adicione o código a seguir na seção `helpers do` do código. Você pode colocar o novo método acima ou abaixo de qualquer outro método de ajuda. A ordem não importa.

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

Este método recebe uma carga de eventos formatada em JSON como argumento. Isso significa que você pode analisar a carga no método e detalhar os dados específicos de que você precisa. Você pode achar útil inspecionar a carga completa em algum momento: experimente alterar `logger.debug 'An issue was opened!` para `logger.debug payload`. A estrutura da carga observada deve corresponder ao que é [mostrado na documentação do evento de webhook `issues`](/webhooks/event-payloads/#issues).

Ótimo! É hora de testar as alterações.

{% data reusables.apps.sinatra_restart_instructions %}

No seu navegador, acesse o repositório onde você instalou seu aplicativo. Abra um novo problema neste repositório. O problema pode dizer o que você quiser. É apenas para teste.

Ao olhar novamente para o terminal, na saída, você verá a mensagem "`An issue was opened!` Parabéns! Você adicionou um gerenciador de eventos ao seu aplicativo. 💪

## Etapa 3. Criar um novo rótulo

Ok, seu aplicativo pode dizer quando os problemas estão abertos. Agora você deseja que ele adicione o rótulo `needs-response` a qualquer problema recém-aberto em um repositório no qual o aplicativo está instalado.

Para que o rótulo seja _adicionado_ em qualquer lugar, você precisará _criar_ o rótulo personalizado no seu repositório. Você só terá de fazer isso uma vez. Para fins deste guia, crie a etiqueta manualmente no GitHub. No repositório, clique em **Problemas**, em **Rótulos** e clique em **Novo rótulo**. Dê ao novo rótulo o nome `needs-response`.

{% tip %}

**Dica**: não seria ótimo se o aplicativo pudesse criar o rótulo por meio de programação? [Ele pode](/rest/reference/issues#create-a-label)! Adicione o código para fazer isso por conta própria depois de concluir as etapas deste guia.

{% endtip %}

Agora que o rótulo existe, você pode programar seu aplicativo para usar a API REST a fim de [adicionar o rótulo a qualquer problema recém-aberto](/rest/reference/issues#add-labels-to-an-issue).

## Etapa 4. Adicionar gerenciamento de etiqueta

Parabéns! Você chegou à etapa final: adicionando o gerenciamento de etiquetas ao seu aplicativo. Para essa tarefa, o ideal será usar a [biblioteca Octokit.rb do Ruby](http://octokit.github.io/octokit.rb/).

Na documentação do Octokit.rb, encontre a lista de [métodos de rótulos](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html). O método que recomendamos usar é o [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method).

De volta a `template_server.rb`, localize o método que você definiu anteriormente:

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

A documentação de [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method) mostra que você precisará transmitir três argumentos para este método:

* Repositório (cadeia de caracteres no formato `"owner/name"`)
* Número do problema (inteiro)
* Etiquetas (array)

Você pode analisar a carga para obter o repositório e o número do problema. Como o nome do rótulo será sempre o mesmo (`needs-response`) você pode transmiti-lo como uma cadeia de caracteres embutida em código na matriz de rótulos. Ao juntar essas peças, seu método atualizado pode parecer com isto:

``` ruby
# When an issue is opened, add a label
def handle_issue_opened_event(payload)
  repo = payload['repository']['full_name']
  issue_number = payload['issue']['number']
  @installation_client.add_labels_to_an_issue(repo, issue_number, ['needs-response'])
end
```

Tente abrir um novo problema no seu repositório de teste e veja o que acontece! Se nada acontecer imediatamente, tente atualizar.

Você não verá muitas coisas no terminal, _mas_ verá que um usuário bot adicionou um rótulo ao problema.

{% note %}

**Observação:** quando os Aplicativos do GitHub executam ações pela API, como adicionar rótulos, o GitHub mostra essas ações como sendo realizadas pelas contas do _bot_. Para obter mais informações, confira "[Comparação entre contas de computador e contas de bot](/apps/differences-between-apps/#machine-vs-bot-accounts)".

{% endnote %}

Se for assim, parabéns! Você construiu um aplicativo funcional com sucesso! 🎉

Você poderá ver o código final em `server.rb` no [repositório de modelo de aplicativo](https://github.com/github-developer/using-the-github-api-in-your-app).

Confira "[Próximas etapas](#next-steps)" para descobrir ideias sobre o que você pode fazer em seguida.

## Solução de problemas

Aqui estão alguns problemas comuns e algumas soluções sugeridas. Se você tiver qualquer outro problema, poderá pedir ajuda ou orientação em {% data variables.product.prodname_support_forum_with_url %}.

* **P:** Meu servidor não está ouvindo eventos. O cliente da Smee está sendo executado em uma janela de Terminal, e eu estou enviando eventos para o github.com. abrindo novos problemas, mas não vejo nenhuma saída na janela do Terminal onde estou executando o servidor.

    **R:** Talvez você não tenha o domínio correto do Smee nas configurações do aplicativo. Acesse a [página de configurações do aplicativo](https://github.com/settings/apps) e verifique os campos mostrados em "[Registrar um novo aplicativo no GitHub](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)". Verifique se o domínio nesses campos corresponde ao domínio usado no comando `smee -u <unique_channel>` em "[Iniciar um novo canal do Smee](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)".

* **P:** Meu aplicativo não funciona. Eu abri um novo problema, mas mesmo depois de atualizado, nenhuma etiqueta foi adicionado a ele.

    **R:** Verifique se todos os seguintes itens são verdadeiros:

    * Você [instalou o aplicativo](/apps/quickstart-guides/setting-up-your-development-environment/#step-7-install-the-app-on-your-account) no repositório em que está abrindo o problema.
    * O [cliente do Smee está em execução](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel) em uma janela do terminal.
    * O [servidor Web está em execução](/apps/quickstart-guides/setting-up-your-development-environment/#step-6-start-the-server) sem erros em outra janela do terminal.
    * Seu aplicativo tem [permissões de leitura e gravação em problemas e está inscrito para emitir eventos](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel).
    * Você [verificou seu email](#step-1-update-app-permissions) depois de atualizar as permissões e aceitou as novas permissões.

## Conclusão

Depois de analisar este guia, você aprendeu os componentes básicos para o desenvolvimento dos aplicativos GitHub! Para resumir, você:

* Programou seu aplicativo para ouvir eventos
* Usou a biblioteca do Octokit.rb para fazer operações da API REST

## Próximas etapas

Aqui estão algumas ideias do que você pode fazer a seguir:

* [Reescreva seu aplicativo usando o GraphQL](https://developer.github.com/changes/2018-04-30-graphql-supports-github-apps/).
* Reescreva seu aplicativo em Node.js usando [o Probot](https://github.com/probot/probot).
* Faça o aplicativo verificar se o rótulo `needs-response` já existe no problema e, em caso negativo, adicione-o.
* Quando o bot adiciona a etiqueta com sucesso, é exibida uma mensagem no Terminal. (Dica: compare a ID do rótulo `needs-response` com a ID do rótulo na carga como uma condição para a mensagem, de modo que ela só seja exibida quando o rótulo relevante for adicionado e não qualquer outro rótulo).
* Adicione uma página de aterrissagem ao aplicativo e conecte uma [rota do Sinatra](https://github.com/sinatra/sinatra#routes) a ele.
* Mova o seu código para um servidor hospedado (como o Heroku). Não se esqueça de atualizar as configurações do seu aplicativo com o novo domínio.
* Compartilhe seu projeto ou receba orientações no {% data variables.product.prodname_support_forum_with_url %}{% ifversion fpt or ghec %}
* Você construiu um aplicativo novo brilhante que você considera que outras pessoas podem achar útil? [Adicione-o ao GitHub Marketplace](/apps/marketplace/creating-and-submitting-your-app-for-approval/).{% endif %}
