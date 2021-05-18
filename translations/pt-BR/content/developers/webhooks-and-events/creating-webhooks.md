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
  - Webhooks
---



Agora que entendemos [os conceitos básicos de webhooks][webhooks-overview], vamos analisar o processo de criação da nossa própria integração com o webhook. Neste tutorial, vamos criar um webhook de repositório que será responsável por listar quão popular é o nosso repositório, com base no número de problemas que recebe por dia.

Criar um webhook é um processo de duas etapas. Primeiro, você deverá configurar como deseja que seu webhook se comporte através do {% data variables.product.product_name %}: quais eventos devem ser ouvidos. Em seguida, você irá configurar seu servidor para receber e gerenciar a carga.


{% data reusables.webhooks.webhooks-rest-api-links %}

### Expor o host local na internet

Para fins deste tutorial, vamos usar um servidor local para receber mensagens de {% data variables.product.prodname_dotcom %}. Portanto, em primeiro lugar, temos de expor o nosso ambiente de desenvolvimento local à internet. Nós usaremos ngrok para fazer isso. Ngrok está disponível, gratuitamente, para todos os principais sistemas operacionais. Para obter mais informações, consulte [a página de download do ngrok](https://ngrok.com/download).

Depois de instalar o ngrok, você poderá expor seu host local executando `./ngrok http 4567` na linha de comando. 4567 é o número da porta em que o nosso servidor ouvirá mensagens. Você deve ver uma linha parecida mais ou menos com isso:

```shell
$ Forwarding    http://7e9ea9dc.ngrok.io -> 127.0.0.1:4567
```

Faça uma anotação da URL `*.ngrok.io.`. Vamos usá-lo para configurar nosso webhook.

### Configurar um webhook

É possível instalar webhooks em uma organização ou em um repositório específico.

Para configurar um webhook, vá para a página de configurações do seu repositório ou organização. Nessa página, clique em **Webhooks** e, em seguida, **Adicionar webhook**.

Como alternativa, você pode optar por criar e gerenciar um webhook [através da API de Webhooks][webhook-api].

Os webhooks exigem algumas opções de configuração antes de você poder usá-los. Iremos analisar cada uma destas configurações abaixo.

### URL de carga

{% data reusables.webhooks.payload_url %}

Já que estamos estamos fazendo um desenvolvimento local para o nosso tutorial, vamos configurá-lo para a URL `*.ngrok.io`, seguida de `/payload`. Por exemplo, `http://7e9ea9dc.ngrok.io/payload`.

### Tipo de conteúdo

{% data reusables.webhooks.content_type %} Para este tutorial, o tipo de conteúdo-padrão para `application/json` está certo.

### Segredo

{% data reusables.webhooks.secret %}

### Verificação SSL

{% data reusables.webhooks.webhooks_ssl %}

### Ativo

Por padrão, as entregas de webhook estão "Ativas". Você pode optar por desativar a entrega das cargas de webhook, desmarcando "Ativo".

### Eventos

Os eventos encontram-se no núcleo dos webhooks. Esses webhooks são acionados sempre que uma determinada ação é tomada no repositório, a qual a URL da carga do seu servidor intercepta e e sobre a qual atua.

Uma lista completa de eventos de webhook e quando são executados pode ser encontrada na referência [da API de webhooks][hooks-api].

Como nosso webhook está lidando com problemas em um repositório, clicaremos em **Deixe-me selecionar eventos individuais** e, em seguida, **problemas**. Certifique-se de selecionar **Ativo** para receber eventos de problemas para webhooks acionados. Você também pode selecionar todos os eventos usando a opção-padrão.

Ao terminar, clique em **Adicionar webhook**.

Agora que você criou o webhook, é hora de configurar nosso servidor local para testar o webhook. Vá até [Configurar seu servidor](/webhooks/configuring/) para aprender como fazê-lo.

#### Evento curinga

Para configurar um webhook para todos os eventos, use o caractere curinga (`*`) para especificar os eventos de webhook. Ao adicionar o evento curinga, substituiremos todos os eventos existentes que você tenha configurado pelo evento curinga e enviaremos todas as cargas para os eventos compatíveis. Você também obterá automaticamente todos os novos eventos que possamos adicionar no futuro.

[webhooks-overview]: /webhooks/
[webhook-api]: /rest/reference/repos#hooks
[hooks-api]: /webhooks/#events
