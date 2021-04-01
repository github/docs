---
title: Atividade
redirect_from:
  - /v3/activity
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - api
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Eventos

A API de eventos é uma API somente leitura para os eventos de {% data variables.product.prodname_dotcom %}. Esses eventos alimentam os vários fluxos de atividades no site.

A API de eventos pode retornar diferentes tipos de eventos acionados por atividade em {% data variables.product.product_name %}. The Events API can return different types of events triggered by activity on {% data variables.product.product_name %}. For more information about the specific events that you can receive from the Events API, see "[{{ site.data.variables.product.prodname_dotcom }} Event types](/developers/webhooks-and-events/github-event-types)." Para obter mais informações, consulte a "[API de Eventos de problema](/rest/reference/issues#events)".

Os eventos são otimizados para sondagem a com o cabeçalho "ETag". Se nenhum novo evento for iniciado, você verá uma resposta "304 Not Modified" e seu limite de taxa atual não será alterado. Há também um cabeçalho "X-Poll-Interval" que especifica quantas vezes (em segundos) você pode fazer uma sondagem. Em tempos de alta carga do servidor, o tempo pode aumentar. Obedeça o cabeçalho.

``` shell
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events
> HTTP/1.1 200 OK
> X-Poll-Interval: 60
> ETag: "a18c3bded88eb5dbb5c849a489412bf3"

# The quotes around the ETag value are important
$ curl -I {% data variables.product.api_url_pre %}/users/tater/events \
$    -H 'If-None-Match: "a18c3bded88eb5dbb5c849a489412bf3"'
> HTTP/1.1 304 Not Modified
> X-Poll-Interval: 60
```

Apenas eventos criados nos últimos 90 dias serão incluídos nas linhas de tempo. Eventos mais antigos que 90 dias não serão incluídos (mesmo que o número total de eventos na linha do tempo seja inferior a 300).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'events' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Feeds

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'feeds' %}{% include rest_operation %}{% endif %}
{% endfor %}

### Exemplo de como obter um feed do Atom

Para obter um feed no formato Atom você deve especificar o tipo `application/atom+xml` no cabeçalho `Aceitar`. Por exemplo, para obter o feed do Atom para consultorias de segurança do GitHub:

    curl -H "Accept: application/atom+xml" https://github.com/security-advisories

#### Resposta

```shell
Status: 200 OK
```

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/" xml:lang="en-US">
  <id>tag:github.com,2008:/security-advisories</id>
  <link rel="self" type="application/atom+xml" href="https://github.com/security-advisories.atom"/>
  <title>GitHub Security Advisory Feed</title>
  <author>
    <name>GitHub</name>
  </author>
  <updated>2019-01-14T19:34:52Z</updated>
     <entry>
      <id>tag:github.com,2008:GHSA-abcd-12ab-23cd</id>
      <published>2018-07-26T15:14:52Z</published>
      <updated>2019-01-14T19:34:52Z</updated>
      <title type="html">[GHSA-abcd-12ab-23cd] Moderate severity vulnerability that affects Octoapp</title>
        <category term="NPM"/>
      <content type="html">
        &lt;p&gt;Octoapp node module before 4.17.5 suffers from a Modification of Assumed-Immutable Data (MAID) vulnerability via defaultsDeep, merge, and mergeWith functions, which allows a malicious user to modify the prototype of &quot;Object&quot; via &lt;strong&gt;proto&lt;/strong&gt;, causing the addition or modification of an existing property that will exist on all objects.&lt;/p&gt;
          &lt;p&gt;&lt;strong&gt;Affected Packages&lt;/strong&gt;&lt;/p&gt;

  &lt;dl&gt;
      &lt;dt&gt;Octoapp&lt;/dt&gt;
      &lt;dd&gt;Ecosystem: npm&lt;/dd&gt;
      &lt;dd&gt;Severity: moderate&lt;/dd&gt;
      &lt;dd&gt;Versions: &amp;lt; 4.17.5&lt;/dd&gt;
        &lt;dd&gt;Fixed in: 4.17.5&lt;/dd&gt;
  &lt;/dl&gt;

          &lt;p&gt;&lt;strong&gt;References&lt;/strong&gt;&lt;/p&gt;

  &lt;ul&gt;
      &lt;li&gt;https://nvd.nist.gov/vuln/detail/CVE-2018-123&lt;/li&gt;
  &lt;/ul&gt;

      </content>
    </entry>
</feed>
```

## Notificações

Os usuários recebem notificações de conversas em repositórios que inspecionam, incluindo:

* Problemas e seus comentários
* Pull Requests e seus comentários
* Comentários em quaisquer commits

As notificações também são enviadas para conversas em repositórios não inspecionados quando o usuário está envolvido, incluindo:

* **@mentions**
* Tarefas de problemas
* Commits que o usuário cria ou faz commit
* Qualquer discussão de que o usuário participa ativamente

Todas as chamadas de notificação da API requerem escopos da API para `notificações` ou `repositórios`.  Fazer isto dará acesso somente-leitura a algum problema e fará commit do conteúdo. Você ainda precisará do escopo de `repositório` para acessar problemas e commits de seus respectivos pontos de extremidade.

Notificações retornam como "correntes".  Uma corrente contém informações sobre a discussão atual de um problema, pull request ou commit.

As notificações são otimizadas para sondagem com o cabeçalho `Last-Modified`.  Se não houver novas notificações, você verá uma resposta `304 Not Modified`, deixando a sua taxa de limite atual inalterada.  Há um cabeçalho `X-Poll-Interval` que especifica com que frequência (em segundos) que você pode fazer a sondagem.  Em tempos de alta carga do servidor, o tempo pode aumentar.  Obedeça o cabeçalho.

``` shell
# Add authentication to your requests
$ curl -I {% data variables.product.api_url_pre %}/notifications
HTTP/1.1 200 OK
Last-Modified: Thu, 25 Oct 2012 15:16:27 GMT
X-Poll-Interval: 60

# Pass the Last-Modified header exactly
$ curl -I {% data variables.product.api_url_pre %}/notifications
$    -H "If-Modified-Since: Thu, 25 Oct 2012 15:16:27 GMT"
> HTTP/1.1 304 Not Modified
> X-Poll-Interval: 60
```

### Motivos de notificação

Ao recuperar respostas da API de Notificações, cada carga tem uma carga denominada `drazão`. Estas correspondem a eventos que ativam uma notificação.

Aqui está uma lista da potencial `razão` para receber uma notificação:

| Nome da razão      | Descrição                                                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `assign`           | O problema foi atribuído a você.                                                                                                                                                                               |
| `autor`            | Você criou a corrente.                                                                                                                                                                                         |
| `comentário`       | Você comentou na corrente.                                                                                                                                                                                     |
| `convite`          | Você aceitou um convite para contribuir com o repositório.                                                                                                                                                     |
| `manual`           | Você assinou a corrente (por meio de um problema ou pull request).                                                                                                                                             |
| `menção`           | Você foi especificamente **@mentioned** no conteúdo.                                                                                                                                                           |
| `review_requested` | Foi solicitado que você ou uma equipe da qual você é integrante revise um pull request.{% if currentVersion == "free-pro-team@latest" %}
| `security_alert`   | O {% data variables.product.prodname_dotcom %} descobriu uma [vulnerabilidade de segurança](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) no seu repositório.{% endif %}
| `state_change`     | Você alterou o estado da corrente (por exemplo, fechando um problema ou mesclando um pull request).                                                                                                            |
| `assinado`         | Você está inspecionando o repositório.                                                                                                                                                                         |
| `team_mention`     | Você estava em uma equipe que foi mencionada.                                                                                                                                                                  |

Observe que a `razão` é modificada em uma base de corrente e pode mudar se a `razão` em uma notificação posterior for diferente.

Por exemplo, se você é o autor de um problema, as notificações subsequentes sobre essa problema terão uma `razão` do `autor`. Portanto, se você for  **@mentioned** no mesmo problema, as notificações que você buscar subsequentemente terão uma `razão` a `mencionar`. A `razão` permanece como `menção`, independentemente se você já foi mencionado novamente.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'notifications' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Marcar com uma estrela

Marcar o repositório como uma estrela é uma funcionalidade que permite aos usuários favoritar os repositórios. As estrelas são exibidas ao lado dos repositórios para mostrar um nível de interesse aproximado. As estrelas não têm efeito nas notificações ou no feed da atividade.

### Marcar como estrela vs. Inspecionar

Em agosto de 2012, [mudamos a forma como a inspeção funciona](https://github.com/blog/1204-notifications-stars) em {% data variables.product.prodname_dotcom %}. Muitas aplicações de cliente da API podem estar usando os pontos de extremidade originais de "inspetor" para acessar estes dados. Agora você pode começar a usar os pontos de extremidade "estrela" (descritos abaixo). Para obter mais informações, consulte a [Post de alteração da API de Inspeção](https://developer.github.com/changes/2012-09-05-watcher-api/) e a [API de Inspeção do repositório](/rest/reference/activity#watching)".

### Tipos de mídia personalizados para marcar como estrela

Existe um tipo de mídia personalizado com suporte para a API REST estrelada. Ao usar este tipo de mídia personalizada, você receberá uma resposta com a propriedade do registro de tempo `starred_at`, que indica o tempo que a estrela foi criada. A resposta também tem uma segunda propriedade que inclui o recurso retornado quando o tipo de mídia personalizado não está incluído. A propriedade que contém o recurso será `usuário` ou `repositório`.

    application/vnd.github.v3.star+json

Para obter mais informações sobre os tipos de mídia, consulte "[Tipos de mídia personalizados](/rest/overview/media-types)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'starring' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Inspecionando

Inspecionar um repositório registra o usuário para receber notificações de novas discussões, bem como eventos no feed de atividade do usuário. Para favoritar um repositório de forma simples, consulte "[Marcar repositórios com uma estrela](/rest/reference/activity#starring)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'watching' %}{% include rest_operation %}{% endif %}
{% endfor %}
