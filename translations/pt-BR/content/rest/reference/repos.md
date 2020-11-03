---
title: Repositórios
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/repos
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Branches

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'branches' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Colaboradores

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Comentários

### Tipos de mídia personalizados para comentários de commit

Estes são os tipos de mídia compatíveis com os comentários do commit. Você pode ler mais sobre o uso de tipos de mídia na API [aqui](/v3/media/).

    application/vnd.github-commitcomment.raw+json
    application/vnd.github-commitcomment.text+json
    application/vnd.github-commitcomment.html+json
    application/vnd.github-commitcomment.full+json

Para obter mais informações, consulte "[tipos de mídia personalizados](/rest/overview/media-types)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'comments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Commits

A API de Commits do repositório é compatível com a listagem, visualização e comparação de commits em um repositório.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'commits' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Comunidade

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'community' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## Conteúdo

Estes pontos de extremidade da API permitem criar, modificar e excluir conteúdo codificado em Base64 em um repositório. Para solicitar o formato sem processar ou HTML interpretado (quando compatível), use os tipos de mídia personalizados para o conteúdo do repositório.

### Tipos de mídia personalizados para conteúdo do repositório

Os [LEIAMEs](/v3/repos/contents/#get-a-repository-readme), [arquivos](/v3/repos/contents/#get-repository-content) e [links simbólicos](/v3/repos/contents/#get-repository-content) são compatíveis com os seguintes tipos de mídia personalizados:

    application/vnd.github.VERSION.raw
    application/vnd.github.VERSION.html

Use o tipo de mídia `.raw` para recuperar o conteúdo do arquivo.

Para arquivos de markup, como Markdown ou AsciiDoc, você pode recuperar o HTML interpretado usando o tipo de mídia `.html`. As linguagens de markup são processadas em HTML usando nossa [biblioteca de markup](https://github.com/github/markup) de código aberto.

[Todos os objetos](/v3/repos/contents/#get-repository-content) são compatíveis com o seguinte tipo de mídia personalizado:

    application/vnd.github.VERSION.object

Use o parâmetro do tipo de mídia do `objeto` para recuperar o conteúdo em um formato de objeto consistente independentemente do tipo de conteúdo. Por exemplo, em vez de um array de objetos para um diretório, a resposta será um objeto com um atributo de `entrada` contendo o array de objetos.

You can read more about the use of media types in the API [here](/v3/media/).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'contents' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Chaves de implantação

{% data reusables.repositories.deploy-keys %}

Chaves de implantação podem ser configuradas usando os seguintes pontos de extremidades da API ou usando o GitHub. Para saber como configurar as chaves de implantação no GitHub, consulte "[Gerenciar chaves de implantação](/developers/overview/managing-deploy-keys)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'keys' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Implantações

As implantações são solicitações para implantar um ref específico (branch, SHA, tag). O GitHub envia um [ evento de `implantação`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment) pelo qual os serviços externos podem ouvir e atuar quando novas implantações são criadas. As implantações permitem que os desenvolvedores e as organizações construam ferramentas associadas em torno de implantações sem ter que se preocupar com os detalhes de implementação da entrega de diferentes tipos de aplicativos (p. ex., web, nativo).

Os status de implantação externos permitem marcar implantações com `error`, `failure`, `pending`, `in_progress`, `queued` ou `success` afirmar que os sistemas que estão escutando os eventos [`deployment_status`](/developers/webhooks-and-events/webhook-events-and-payloads#deployment_status) podem consumir.

Os status de implantação também podem incluir uma `descrição` opcional e `log_url`, que são altamente recomendados porque tornam o status de implantação mais útil. O `log_url` é a URL completa para a saída de implantação e a `descrição` é um resumo de alto nível do que aconteceu com a implantação.

O GitHub envia os eventos de `implantação` e `deployment_status` quando novas implantações de status de implantação são criadas. Esses eventos permitem que as integrações de terceiros recebam resposta para solicitações de implantação e atualizem o status de implantação conforme o progresso é feito.

Abaixo está um diagrama de sequência sobre para como essas interações funcionariam.

```
+---------+             +--------+            +-----------+        +-------------+
| Tooling |             | GitHub |            | 3rd Party |        | Your Server |
+---------+             +--------+            +-----------+        +-------------+
     |                      |                       |                     |
     |  Create Deployment   |                       |                     |
     |--------------------->|                       |                     |
     |                      |                       |                     |
     |  Deployment Created  |                       |                     |
     |<---------------------|                       |                     |
     |                      |                       |                     |
     |                      |   Deployment Event    |                     |
     |                      |---------------------->|                     |
     |                      |                       |     SSH+Deploys     |
     |                      |                       |-------------------->|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
     |                      |                       |   Deploy Completed  |
     |                      |                       |<--------------------|
     |                      |                       |                     |
     |                      |   Deployment Status   |                     |
     |                      |<----------------------|                     |
     |                      |                       |                     |
```

Tenha em mente que o GitHub nunca terá acesso aos seus servidores. Cabe à sua integração de terceiros interagir com os eventos de implantação. Vários sistemas podem ouvir eventos de implantação, e cabe a cada um desses sistemas decidir se serão responsáveis por retirar o código dos seus servidores, criar código nativo, etc.

Observe que o `escopo do OAuth` [repo_deployment](/developers/apps/scopes-for-oauth-apps) concede acesso direcionado a implantações e status de implantações **sem** conceder acesso ao código do repositório, enquanto os escopos `public_repo` e `repo` também concedem permissão para o código.

### Implantações inativas

Ao definir o estado de uma implantação como `sucesso`, todas as implantações de ambiente de não produção e não transitórias no mesmo repositório irão tornar-se `inativas`. Para evitar isso, você pode definir `auto_inactive` como `falso` ao criar o status de implantação.

Você pode informar que um ambiente transitório não existe mais definindo seu `estado` como `inativo`.  Definir o `estado` como `inativo` mostra a implantação como `destruída` em {% data variables.product.prodname_dotcom %} e remove o acesso a ela.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'deployments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Bifurcações

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'forks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Convites

A API de Convites do Repositório permite que usuários ou serviços externos convidem outros usuários para colaborar em um repositório. Os usuários convidados (ou serviços externos em nome dos usuários convidados) podem optar por aceitar ou recusar os convites.

Observe que o [Escopo OAuth](/developers/apps/scopes-for-oauth-apps) `repo:invite` concede acesso direcionado aos convites **sem** conceder também acesso ao código do repositório. enquanto o escopo `repo` concede permissão ao código e aos convites convites.

### Convidar um usuário para um repositório

Use o ponto de extremidade da API para adicionar um colaborador. Para obter mais informações, consulte "[Adicionar um colaborador de repositório](/rest/reference/repos#add-a-repository-collaborator)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'invitations' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Mesclar

A API de merge do repositório é compatível com o merge de branches em um repositório. Isso realiza, essencialmente, a mesma coisa que mesclar um branch em outro em um repositório local e, em seguida, fazer push para {% data variables.product.product_name %}. O benefício é que o merge é realizado no lado do servidor e não é necessário um repositório local. Isso o torna mais apropriado para automação e outras ferramentas em que a manutenção de repositórios locais seria pesada e ineficiente.

O usuário autenticado será o autor de qualquer merge feito por meio deste ponto de extremidade.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'merging' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Pages

A API de {% data variables.product.prodname_pages %} recupera informações sobre a sua configuração do {% data variables.product.prodname_pages %} e os status das suas criações. As informações sobre o site e as criações só podem ser acessadas por proprietários autenticados, mesmo que os sites sejam públicos. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_pages %}](/github/working-with-github-pages/about-github-pages)".

Nos pontos de extremidade da API de {% data variables.product.prodname_pages %} com uma chave de `status` na sua resposta, o valor pode ser:
* `null`: O site ainda não foi criado.
* `queued`: A criação foi solicitada, mas ainda não começou.
* `building`:A criaçãoestá em andamento.
* `built`: O site foi criado.
* `errored`: Indica que ocorreu um erro durante a criação.

Nos pontos de extremidade da API de {% data variables.product.prodname_pages %} que devolvem as informações do site do GitHub Pages, as respostas do JSON incluem esses campos:
* `html_url`: A URL absoluta (incluindo o esquema) do site de páginas interpretadas. Por exemplo, `https://username.github.io`.
* `source`: Um objeto que contém o branch de origem e o diretório do site de páginas interpretadas. Isto inclui:
   - `branch`: O branch do repositório utilizado para publicar os [arquivos de origem do site](/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site). Por exemplo, _principal_ ou _gh-pages_.
   - `path`: O diretório do repositório a partir do qual o site é publicado. Será `/` ou `/docs`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pages' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Versões

{% note %}

**Observação:** A API de versões substitui a API de Downloads. Você pode recuperar a contagem de download e a URL de download do navegador a partir dos pontos de extremidades nesta API que retornam versões e liberam ativos.

{% endnote %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'releases' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Estatísticas

A API de Estatísticas do Repositório permite que você recupere os dados que o {% data variables.product.product_name %} usa para visualizar diferentes tipos de atividade do repositório.

### Umas palavras sobre o armazenamento em cache

Computar as estatísticas do repositório é uma operação cara. Por esse motivo, tentamos retornar dados armazenados em cache sempre que possível.  Se os dados não forem armazenados em cache nas estatísticas de um repositório, você receberá uma resposta de `202`; um trabalho em segundo plano também é acionado para começar a compilar estas estatísticas. Dê ao trabalho alguns instantes para que seja concluído e, em seguida, envie a solicitação novamente. Se o trabalho foi concluído, essa solicitação receberá uma resposta de `200` com as estatísticas no texto da resposta.

As estatísticas do repositório são armazenadas em cache pelo SHA do branch-padrão do repositório; fazer push para o branch-padrão redefine o armazenamento em cache de estatísticas.

### As estatísticas excluem alguns tipos de commits

As estatísticas expostas pela API correspondem às estatísticas mostradas pelos [diferentes gráficos de repositórios](/github/visualizing-repository-data-with-graphs/about-repository-graphs).

Resumo:
- Todas as estatísticas excluem commits de merge.
- As estatísticas do contribuidor também excluem commits vazios.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statistics' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Status

A API de status permite que serviços externos marquem commits com status de `erro`, `falha`, `pendente` ou `sucesso`, o que é refletido em pull requests que envolvem esses commits.

Os status também podem incluir uma `descrição` opcional e `target_url`, e é altamente recomendável fornecê-los, pois tornam o status muito mais útil na interface de usuário do GitHub.

Como exemplo, um uso comum é para serviços de integração contínua para marcar commits como criações que passam ou que falham usando o status.  O `target_url` seria a URL completa para a saída da criação, e a `descrição` seria o resumo de alto nível do que aconteceu com a criação.

Os status podem incluir um `contexto` para indicar qual serviço está fornecendo esse status. Por exemplo, você pode fazer com que o seu serviço de integração contínua faça push status com um contexto de `ci`, e uma ferramenta de auditoria de segurança faça push dos status com um contexto de `segurança`.  Você pode usar [Obter o status combinado para uma referência específica](/rest/reference/repos#get-the-combined-status-for-a-specific-reference) para recuperar todo o status de um commit.

Observe que o `escopo do OAuth` [repo:status](/developers/apps/scopes-for-oauth-apps) concede acesso direcionado a status **sem** conceder acesso ao código do repositório, enquanto o escopo `repo` concede permissão para o código e para status.

Se você está desenvolvendo um aplicativo GitHub e deseja fornecer informações mais detalhadas sobre um serviço externo, você deverá usar a [API de verificação](/rest/reference/checks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'statuses' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% if currentVersion == "free-pro-team@latest" %}
## Tráfego

Para repositórios aos quais você tem acesso de push, a API de tráfego fornece acesso às informações fornecidas no seu gráfico de repositório. Para obter mais informações, consulte "<a href="/github/visualizing-repository-data-with-graphs/viewing-traffic-to-a-repository" class="dotcom-only">Visualizar tráfego para um repositório</a>. "

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'traffic' %}{% include rest_operation %}{% endif %}
{% endfor %}
{% endif %}

## Webhooks

A API de Webhooks do Repositório permite que os administradores do repositório gerenciem os hooks post-receive de um repositório. Os webhooks podem ser gerenciados usando a API de HTTP do JSON ou a API de [SubHubbub](#PubSubHubbub).

Se você deseja configurar um único webhook para receber eventos de todos os repositórios da organização, consulte nossa documentação de API para [Webhooks de organização](/rest/reference/orgs#webhooks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

### Receber Webhooks

Para que {% data variables.product.product_name %} envie cargas de webhook, seu servidor deve ser acessível pela internet. É altamente recomendável o uso de SSL para que possamos enviar cargas criptografadas por HTTPS.

#### Cabeçalhos de webhook

{% data variables.product.product_name %} enviará ao longo de vários cabeçalhos de HTTP para diferenciar entre tipos de evento e identificadores de carga. Consulte [cabeçalhos de webhook](/developers/webhooks-and-events/webhook-events-and-payloads#delivery-headers) para obter informações.

### PubSubHubbub

O GitHub também pode servir como um centro de [PubSubHubbub](https://github.com/pubsubhubbub/PubSubHubbub) para todos os repositórios. O PSHB é um simples protocolo de publicação/assinatura que permite o registro de servidores para receber atualizações quando um tópico é atualizado. As atualizações são enviadas com uma solicitação HTTP do tipo POST para uma URL de chamada de retorno. As URLs dos tópicos dos pushes de um repositório do GitHub estão neste formato:

`https://github.com/{owner}/{repo}/events/{event}`

O evento pode ser qualquer evento de webhook disponível. Para obter mais informações, consulte "[Eventos e cargas de Webhook](/developers/webhooks-and-events/webhook-events-and-payloads)".

#### Formato de resposta

O formato padrão é o que [os hooks post-receive existentes devem esperar](/post-receive-hooks/): Um texto JSON enviado como parâmetro `payload` em um POST.  Você também pode especificar para receber o texto do JSON sem processar com um cabeçalho `Aceitar` ou uma extensão `.json`.

    Accept: application/json
    https://github.com/{owner}/{repo}/events/push.json

#### URLs de chamada de retorno
As URLs de chamada de retorno podem usar o protocolo `http://`.

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}You can also `github://` callbacks to specify a GitHub service.
{% data reusables.apps.deprecating_github_services_ghe %}
{% endif %}

    # Send updates to postbin.org
    http://postbin.org/123

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.20" %}
    # Send updates to Campfire github://campfire?subdomain=github&room=Commits&token=abc123
{% endif %}

#### Assinar

O ponto de extremidade do GitHub PubSubHubbub é: `{% data variables.product.api_url_code %}/hub`. Uma solicitação bem-sucedida com o curl parece como:

``` shell
curl -u "user" -i \
  {% data variables.product.api_url_pre %}/hub \
  -F "hub.mode=subscribe" \
  -F "hub.topic=https://github.com/{owner}/{repo}/events/push" \
  -F "hub.callback=http://postbin.org/123"
```

Solicitações do PubSubHubbub podem ser enviadas várias vezes. Se o hook já existe, ele será modificado de acordo com a solicitação.

##### Parâmetros

| Nome           | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                   |
| -------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hub.mode`     | `string` | **Obrigatório**. `Assine` ou `cancele a assinatura`.                                                                                                                                                                                                                                                                                                                                                        |
| `hub.topic`    | `string` | **Obrigatório**.  A URI do repositório do GitHub a ser assinada.  O caminho deve estar no formato `/{owner}/{repo}/events/{event}`.                                                                                                                                                                                                                                                                         |
| `hub.callback` | `string` | A URI para receber as atualizações do tópico.                                                                                                                                                                                                                                                                                                                                                               |
| `hub.secret`   | `string` | Uma chave secreta compartilhada que gera um HMAC de SHA1 do conteúdo do texto de saída.  Você pode verificar se um push veio do GitHub, comparando o texto da solicitação sem processamento com o conteúdo do cabeçalho `X-Hub-Signature`. Você pode ver [a documentação do PubSubHubbub](https://pubsubhubbub.github.io/PubSubHubbub/pubsubhubbub-core-0.4.html#authednotify) para obter mais informações. |
