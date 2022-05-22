---
title: Usar a API do GitHub no seu aplicativo
intro: Aprenda como configurar seu aplicativo para ouvir eventos e usar a biblioteca do Octokit para realizar operações da API REST.
redirect_from:
  - /apps/building-your-first-github-app/
  - /apps/quickstart-guides/using-the-github-api-in-your-app
  - /developers/apps/using-the-github-api-in-your-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---
### Introdução

Este guia irá ajudá-lo a criar um aplicativo GitHub e executá-lo em um servidor. O aplicativo que você criar adicionará uma etiqueta a todos os novos problemas abertos no repositório onde o aplicativo está instalado.

Este projeto orientará você no seguinte:

* Programar seu aplicativo para ouvir eventos
* Usar a biblioteca do Octokit.rb para realizar operações da API REST

{% data reusables.apps.app-ruby-guides %}

Uma concluídas as etapas, você estará pronto para desenvolver outros tipos de integrações usando o conjunto completo das APIS do GitHub. {% if currentVersion == "free-pro-team@latest" %}Você pode conferir exemplos bem sucedidos de aplicativos no [GitHub Marketplace](https://github.com/marketplace) e em [Funciona com o GitHub](https://github.com/works-with).{% endif %}

### Pré-requisitos

Você pode achar útil ter um entendimento básico do seguinte:

* [Aplicativos do GitHub](/apps/about-apps)
* [Webhooks](/webhooks)
* [Linguagem de programação Ruby](https://www.ruby-lang.org/en/)
* [APIs REST](/rest)
* [Sinatra](http://sinatrarb.com/)

Mas é possível acompanhar o processo em qualquer nível de experiência. Nós vamos nos conectar a informações de que você precisa ao longo do caminho!

Antes de começar, você precisará fazer o seguinte:

1. Clone o repositório [Usando a API do GitHub no seu aplicativo](https://github.com/github-developer/using-the-github-api-in-your-app).
  ```shell
    $ git clone https://github.com/github-developer/using-the-github-api-in-your-app.git
  ```

  Dentro do diretório, você encontrará um arquivo `template_server.rb` com o código do template você usará neste início rápido e um arquivo `server.rb` arquivo com o código do projeto concluído.

1. Siga as etapas no início rápido [Configurando o seu ambiente de desenvolvimento](/apps/quickstart-guides/setting-up-your-development-environment/) para configurar e executar o servidor do aplicativo `template_server.rb`. Se você já concluiu um início rápido do aplicativo GitHub diferente de [Configurar seu ambiente de desenvolvimento](/apps/quickstart-guides/setting-up-your-development-environment/), você deverá registrar um _novo_ aplicativo GitHub e começar um novo canal da Smee para usar com este início rápido.

  Este início rápido inclui o mesmo código `template_server.rb` que o início rápido [Configurando o seu ambiente de desenvolvimento](/apps/quickstart-guides/setting-up-your-development-environment/). **Observação:** Conforme você segue com o início rápido [Configurando seu ambiente de desenvolvimento](/apps/quickstart-guides/setting-up-your-development-environment/), certifique-se de usar os arquivos do projeto incluídos no repositório [Usando a API do GitHub no seu aplicativo](https://github.com/github-developer/using-the-github-api-in-your-app).

  Consulte a seção [Solução de problemas](/apps/quickstart-guides/setting-up-your-development-environment/#troubleshooting) se você tiver problemas na configuração do seu aplicativo GitHub do modelo.

### Criar o aplicativo

Agora que você está familiarizado com o código `template_server.rb`, você irá criar um código que adiciona automaticamente a etiqueta `needs-response` para todos os problemas abertos no repositório onde o aplicativo está instalado.

O arquivo `template_server.rb` contém código do modelo do aplicativo que ainda não foi personalizado. Neste arquivo, você verá um espaço reservado para manipular eventos de webhook e outro código para inicializar um cliente Octokit.rb.

{% note %}

**Observação:** `template_server.rb` contém muitos comentários de código que complementam este guia e explicam detalhes técnicos adicionais. Você pode considerar útil ler os comentários do arquivo antes de seguir com esta seção, para obter uma visão geral de como o código funciona.

O código final personalizado que você criará no final deste guia é fornecido em [`server.rb`](https://github.com/github-developer/using-the-github-api-in-your-app/blob/master/server.rb). Mas espere até o final para olhar isso!

{% endnote %}

Estas são as etapas que você concluirá para criar seu primeiro aplicativo GitHub:

1. [Atualizar as permissões do aplicativo](#step-1-update-app-permissions)
2. [Adicionar gerenciamento de evento](#step-2-add-event-handling)
3. [Criar nova etiqueta](#step-3-create-a-new-label)
4. [Adicionar gerenciamento de etiqueta](#step-4-add-label-handling)

### Etapa 1. Atualizar as permissões do aplicativo

Quando você [registrou seu aplicativo pela primeira vez](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app), você aceitou as permissões-padrão, o que significa que seu aplicativo não tem acesso à maioria dos recursos. Para este exemplo, seu aplicativo precisará de permissão para ler problemas e escrever etiquetas.

Para atualizar as permissões do aplicativo:

1. Selecione seu aplicativo na [página de configurações do aplicativo](https://github.com/settings/apps) e clique em **Permissões & Webhooks** na barra lateral.
1. Na seção "Permissões", encontre "Problemas" e selecione **Leitura & Gravação** no menu "suspenso Acesso" ao lado. A descrição diz que esta opção concede acesso a problemas e etiquetas, o que é exatamente o que você precisa.
1. Na seção "Assinar eventos", selecione **Problemas** para assinar o evento.
{% data reusables.apps.accept_new_permissions_steps %}

Ótimo! Seu aplicativo tem permissão para realizar as tarefas que você deseja que ele realize. Agora você pode adicionar o código para que ele funcione.

### Etapa 2. Adicionar gerenciamento de evento

A primeira coisa que seu aplicativo precisa fazer é ouvir novos problemas que estão abertos. Agora que você se assinou o evento **Problemas**, você começará a receber o webhook dos [`problemas`](/webhooks/event-payloads/#issues), que é acionado quando ocorrem certas ações relacionadas a um problema. Você pode filtrar este tipo de evento para a ação específica que você deseja no seu código.

O GitHub envia cargas do webhook como solicitações de `POST`. Porque você encaminhou suas cargas de webhook da Smee para `http://localhost/event_handler:3000`, seu servidor receberá as cargas de solicitação de `POST` no rota `post '/event_handler'`.

Um encaminhamento vazio `post '/event_handler'` já está incluído no arquivo `template_server.rb`, que você baixou na seção [pré-requisitos](#prerequisites). O encaminhamento vazio tem a seguinte forma:

``` ruby
  post '/event_handler' do

    # # # # # # # # # # # #
    # ADD YOUR CODE HERE  #
    # # # # # # # # # # # #

    200 # success status
  end
```

Use essa encaminhamento para gerenciar o evento `problemas`, adicionando o seguinte código:

``` ruby
case request.env['HTTP_X_GITHUB_EVENT']
when 'issues'
  if @payload['action'] === 'opened'
    handle_issue_opened_event(@payload)
  end
end
```

Cada evento que o GitHub envia inclui um cabeçalho de solicitação denominado `HTTP_X_GITHUB_EVENT`, que indica o tipo de evento na solicitação de `POST`. No momento, você só está interessado nos tipos de evento de `problemas`. Cada evento tem um campo `ação` adicional que indica o tipo de ação que acionou os eventos. Para `problemas`, o campo `ação` pode ser `atribuído`, `não atribuído`, `etiquetado`, `não etiquetado`,, `abriu`, `editado`, `marcado`,, `desmarcado`, `fechado` ou `reaberto`.

Para testar seu gerenciador de eventos, tente adicionar um método auxiliar temporário. Você irá atualizar mais tarde ao [Adicionar o gerenciamento da etiqueta](#step-4-add-label-handling). Por enquanto, adicione o seguinte código na seção `Ajudantes fazem` do código. Você pode colocar o novo método acima ou abaixo de qualquer outro método de ajuda. A ordem não importa.

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

Este método recebe uma carga de eventos formatada em JSON como argumento. Isso significa que você pode analisar a carga no método e detalhar os dados específicos de que você precisa. Você pode achar útil inspecionar a carga completa em algum momento: tente alterar `logger.debug 'An issue was opened!` para `logger.debug payload`. A estrutura da carga que você vê deve corresponder ao que é [mostrado na documentação de evento de webhook dos `problemas`](/webhooks/event-payloads/#issues).

Ótimo! É hora de testar as alterações.

{% data reusables.apps.sinatra_restart_instructions %}

No seu navegador, acesse o repositório onde você instalou seu aplicativo. Abra um novo problema neste repositório. O problema pode dizer o que você quiser. É apenas para teste.

Ao olhar para o seu Terminal, você deve ver uma mensagem na saída que diz: `Um problema foi aberto!` Parabéns! Você adicionou um gerenciador de eventos ao seu aplicativo. 💪

### Etapa 3. Criar nova etiqueta

Ok, seu aplicativo pode dizer quando os problemas estão abertos. Agora você quer que ele adicione a etiqueta `needs-response` a qualquer problema recém-aberto em um repositório no qual o aplicativo está instalado.

Antes que a etiqueta possa ser _adicionada_ em qualquer lugar, você precisará _criar_ a etiqueta personalizada no seu repositório. Você só terá de fazer isso uma vez. Para fins deste guia, crie a etiqueta manualmente no GitHub. No seu repositório, clique em **Problemas** e, em seguida, em **Etiquetas** e depois clique em **Nova etiqueta**. Nomeie a nova etiqueta `needs-response`.

{% tip %}

**Dica**: Não seria ótimo se o aplicativo pudesse criar a etiqueta de forma programática? [Ele pode](/rest/reference/issues#create-a-label)! Adicione o código para fazer isso por conta própria depois de concluir as etapas deste guia.

{% endtip %}

Agora que o rótulo foi criado, você pode programar seu aplicativo para usar a API REST para [adicionar a etiqueta a qualquer problema recém-aberto](/rest/reference/issues#add-labels-to-an-issue).

### Etapa 4. Adicionar gerenciamento de etiqueta

Parabéns! Você chegou à etapa final: adicionando o gerenciamento de etiquetas ao seu aplicativo. Para esta tarefa, você vai irá usar a [biblioteca Octokit.rb do Ruby](http://octokit.github.io/octokit.rb/).

Na documentação do Octokit.rb, encontre a lista de [métodos da etiqueta](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html). O método que você vai querer usar será [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method).

Ao voltar para `template_server.rb`, encontre o método definido anteriormente:

``` ruby
def handle_issue_opened_event(payload)
  logger.debug 'An issue was opened!'
end
```

A documentação [`add_labels_to_an_issue`](http://octokit.github.io/octokit.rb/Octokit/Client/Labels.html#add_labels_to_an_issue-instance_method) mostra que você precisará passar três argumentos para este método:

* Repo (string em formato `"proprietário/nome"`)
* Número do problema (inteiro)
* Etiquetas (array)

Você pode analisar a carga para obter o repositório e o número do problema. Como o nome da etiqueta será sempre o mesmo (`needs-response`) você pode passá-lo como uma string de caracteres codificados no array de etiquetas. Ao juntar essas peças, seu método atualizado pode parecer com isto:

``` ruby
# When an issue is opened, add a label
def handle_issue_opened_event(payload)
  repo = payload['repository']['full_name']
  issue_number = payload['issue']['number']
  @installation_client.add_labels_to_an_issue(repo, issue_number, ['needs-response'])
end
```

Tente abrir um novo problema no seu repositório de teste e veja o que acontece! Se nada acontecer imediatamente, tente atualizar.

Você não verá muitos coisas no Terminal, _mas_ você deve ver que um usuário bot adicionou uma etiqueta ao problema.

{% note %}

**Observação:** Quando os aplicativos GitHub realizam ações pela API, como, por exemplo, adicionar etiquetas, o GitHub mostra essas ações como sendo realizadas por contas _do bot_. Para obter mais informações, consulte "[Máquina vs. contas de bot](/apps/differences-between-apps/#machine-vs-bot-accounts)".

{% endnote %}

Se for assim, parabéns! Você construiu um aplicativo funcional com sucesso! 🎉

Você pode ver o código final no `server.rb` no [repositório do modelo do aplicativo](https://github.com/github-developer/using-the-github-api-in-your-app).

Consulte "[Próximos passos](#next-steps)" para ter ideias sobre aonde você pode ir a partir daqui.

### Solução de Problemas

Aqui estão alguns problemas comuns e algumas soluções sugeridas. Se você tiver qualquer outro problema, poderá pedir ajuda ou orientação em {% data variables.product.prodname_support_forum_with_url %}.

* **P:** Meu servidor não está ouvindo eventos! O cliente da Smee está sendo executado em uma janela de Terminal, e eu estou enviando eventos para o github.com. abrindo novos problemas, mas não vejo nenhuma saída na janela do Terminal onde estou executando o servidor.

    **A:** Você pode não ter o domínio correto da Smee nas configurações do seu aplicativo. Visite a sua [página de configurações do aplicativo](https://github.com/settings/apps) e verifique novamente os campos exibidos em "[Registre um novo aplicativo com GitHub](/apps/quickstart-guides/setting-up-your-development-environment/#step-2-register-a-new-github-app)". Certifique-se de que o domínio nesses campos corresponde ao domínio que você usou no seu comando `smee -u <unique_channel>` em "[Iniciar um novo canal da Smee](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel)".

* **P:** Meu aplicativo não funciona! Eu abri um novo problema, mas mesmo depois de atualizado, nenhuma etiqueta foi adicionado a ele.

    **R:** Certifique-se de que todos os pontos a seguir sejam verdadeiros:

    * Você [instalou o aplicativo](/apps/quickstart-guides/setting-up-your-development-environment/#step-7-install-the-app-on-your-account) no repositório onde você está abrindo o problema.
    * Seu [Cliente da Smee em execução](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel) em uma janela do Terminal.
    * Seu [servidor web está em execução](/apps/quickstart-guides/setting-up-your-development-environment/#step-6-start-the-server) sem erros em outra janela do Terminal.
    * Seu aplicativo tem permissões de [leitura & e gravação permissões em problemas e está assinado a eventos do problema](/apps/quickstart-guides/setting-up-your-development-environment/#step-1-start-a-new-smee-channel).
    * Você [verificou seu e-mail](#step-1-update-app-permissions) depois de atualizar as permissões e aceitou as novas permissões.

### Conclusão

Depois de analisar este guia, você aprendeu os componentes básicos para o desenvolvimento dos aplicativos GitHub! Para resumir, você:

* Programou seu aplicativo para ouvir eventos
* Usou a biblioteca do Octokit.rb para fazer operações da API REST

### Próximas etapas

Aqui estão algumas ideias do que você pode fazer a seguir:

* [Reescreva seu aplicativo usando o GraphQL](https://developer.github.com/changes/2018-04-30-graphql-supports-github-apps/)!
* Reescreva seu aplicativo no Node.js usando o [Probot](https://github.com/probot/probot)!
* Faça o aplicativo verificar se a etiqueta `needs-response` já existe no problema, e, em caso negativo, adicione-a.
* Quando o bot adiciona a etiqueta com sucesso, é exibida uma mensagem no Terminal. (Dica: compare o ID da etiqueta `needs-response` com o ID da etiqueta na carga como uma condição para sua mensagem para que a mensagem seja exibida somente quando a etiqueta relevante for adicionada e não qualquer outra etiqueta.)
* Adicione uma página inicial ao seu aplicativo e conecte um [encaminhamento do Sinatra](https://github.com/sinatra/sinatra#routes) para isso.
* Mova o seu código para um servidor hospedado (como o Heroku). Não se esqueça de atualizar as configurações do seu aplicativo com o novo domínio.
* Compartilhe o seu projeto ou receba orientação em {% data variables.product.prodname_support_forum_with_url %}{% if currentVersion == "free-pro-team@latest" %}
* Você construiu um aplicativo novo brilhante que você considera que outras pessoas podem achar útil? [Adicione-o ao GitHub Marketplace](/apps/marketplace/creating-and-submitting-your-app-for-approval/)!{% endif %}
