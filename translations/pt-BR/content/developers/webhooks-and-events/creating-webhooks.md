---
title: Criar webhooks
intro: 'Aprenda a criar um webhook, escolhendo os eventos que seu webhook irá ouvir em {% data variables.product.prodname_dotcom %} e como configurar um servidor para receber e gerenciar a carga de webhook.'
redirect_from:
  - /webhooks/creating
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - webhooks
---



Now that we understand [the basics of webhooks][webhooks-overview], let's go through the process of building out our own webhook-powered integration. In this tutorial, we'll create a repository webhook that will be responsible for listing out how popular our repository is, based on the number of issues it receives per day.

Criar um webhook é um processo de duas etapas. You'll first need to set up how you want your webhook to behave through {% data variables.product.product_name %}: what events should it listen to. Em seguida, você irá configurar seu servidor para receber e gerenciar a carga.


{% data reusables.webhooks.webhooks-rest-api-links %}

### Exposing localhost to the internet

For the purposes of this tutorial, we're going to use a local server to receive messages from {% data variables.product.prodname_dotcom %}. So, first of all, we need to expose our local development environment to the internet. We'll use ngrok to do this. ngrok is available, free of charge, for all major operating systems. For more information, see [the ngrok download page](https://ngrok.com/download).

After installing ngrok, you can expose your localhost by running `./ngrok http 4567` on the command line. 4567 is the port number on which our server will listen for messages. Você deve ver uma linha parecida mais ou menos com isso:

```shell
$ Forwarding    http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

Make a note of the `*.ngrok.io` URL. We'll use it to set up our webhook.

### Setting up a webhook

É possível instalar webhooks em uma organização ou em um repositório específico.

Para configurar um webhook, vá para a página de configurações do seu repositório ou organização. Nessa página, clique em **Webhooks** e, em seguida, **Adicionar webhook**.

Como alternativa, você pode optar por criar e gerenciar um webhook [através da API de Webhooks][webhook-api].

Os webhooks exigem algumas opções de configuração antes de você poder usá-los. Iremos analisar cada uma destas configurações abaixo.

### URL de carga

{% data reusables.webhooks.payload_url %}

Since we're developing locally for our tutorial, we'll set it to the `*.ngrok.io` URL, followed by `/payload`. For example, `http://7e9ea9dc.ngrok.io/payload`.

### Tipo de conteúdo

{% data reusables.webhooks.content_type %} Para este tutorial, o tipo de conteúdo-padrão para `application/json` está certo.

### Segredo

{% data reusables.webhooks.secret %}

### SSL verification

{% data reusables.webhooks.webhooks_ssl %}

### Ativo

Por padrão, as entregas de webhook estão "Ativas". Você pode optar por desativar a entrega das cargas de webhook, desmarcando "Ativo".

### Eventos

Os eventos encontram-se no núcleo dos webhooks. Esses webhooks são acionados sempre que uma determinada ação é tomada no repositório, a qual a URL da carga do seu servidor intercepta e e sobre a qual atua.

Uma lista completa de eventos de webhook e quando são executados pode ser encontrada na referência [da API de webhooks][hooks-api].

Since our webhook is dealing with issues in a repository, we'll click **Let me select individual events** and then **Issues**. Certifique-se de selecionar **Ativo** para receber eventos de problemas para webhooks acionados. Você também pode selecionar todos os eventos usando a opção-padrão.

Ao terminar, clique em **Adicionar webhook**.

Now that you've created the webhook, it's time to set up our local server to test the webhook. Vá até [Configurar seu servidor](/webhooks/configuring/) para aprender como fazê-lo.

#### Wildcard event

Para configurar um webhook para todos os eventos, use o caractere curinga (`*`) para especificar os eventos de webhook. Ao adicionar o evento curinga, substituiremos todos os eventos existentes que você tenha configurado pelo evento curinga e enviaremos todas as cargas para os eventos compatíveis. Você também obterá automaticamente todos os novos eventos que possamos adicionar no futuro.

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
