---
title: Criar webhooks
intro: 'Aprenda a criar um webhook, escolhendo os eventos que seu webhook irá ouvir em {% data variables.product.prodname_dotcom %} e como configurar um servidor para receber e gerenciar a carga de webhook.'
redirect_from:
  - /webhooks/creating
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---



Agora que entendemos [os conceitos básicos de webhooks][webhooks-overview], vamos analisar o processo de criação da nossa própria integração com o webhook. Neste tutorial, vamos criar um webhook de repositório que será responsável por listar quão popular é o nosso repositório, com base no número de problemas que recebe por dia.

Criar um webhook é um processo de duas etapas. Primeiro, você deverá configurar como deseja que seu webhook se comporte através do {% data variables.product.product_name %} - quais eventos devem ser ouvidos. Em seguida, você irá configurar seu servidor para receber e gerenciar a carga.


{% data reusables.webhooks.webhooks-rest-api-links %}

### Configurar um Webhook

É possível instalar webhooks em uma organização ou em um repositório específico.

Para configurar um webhook, vá para a página de configurações do seu repositório ou organização. Nessa página, clique em **Webhooks** e, em seguida, **Adicionar webhook**.

Como alternativa, você pode optar por criar e gerenciar um webhook [através da API de Webhooks][webhook-api].

Os webhooks exigem algumas opções de configuração antes de você poder usá-los. Iremos analisar cada uma destas configurações abaixo.

### URL de carga

{% data reusables.webhooks.payload_url %}

Já que estamos desenvolvendo localmente para nosso tutorial, vamos definir como `http://localhost:4567/payload`. Vamos explicar o porquê na documentação [Configurando seu servidor](/webhooks/configuring/).

### Tipo de conteúdo

{% data reusables.webhooks.content_type %} Para este tutorial, o tipo de conteúdo-padrão para `application/json` está certo.

### Segredo

{% data reusables.webhooks.secret %}

### Verificação de SSL

{% data reusables.webhooks.webhooks_ssl %}

### Ativo

Por padrão, as entregas de webhook estão "Ativas". Você pode optar por desativar a entrega das cargas de webhook, desmarcando "Ativo".

### Eventos

Os eventos encontram-se no núcleo dos webhooks. Esses webhooks são acionados sempre que uma determinada ação é tomada no repositório, a qual a URL da carga do seu servidor intercepta e e sobre a qual atua.

Uma lista completa de eventos de webhook e quando são executados pode ser encontrada na referência [da API de webhooks][hooks-api].

Como nosso webhook está gerenciando problemas em um repositório, clicaremos em **Deixe-me selecionar eventos individuais** e, em seguida, **problemas**. Certifique-se de selecionar **Ativo** para receber eventos de problemas para webhooks acionados. Você também pode selecionar todos os eventos usando a opção-padrão.

Ao terminar, clique em **Adicionar webhook**. Ufa! Agora que você criou o webhook, é hora de configurar nosso servidor local para testar o webhook. Vá até [Configurar seu servidor](/webhooks/configuring/) para aprender como fazê-lo.

#### Evento curinga

Para configurar um webhook para todos os eventos, use o caractere curinga (`*`) para especificar os eventos de webhook. Ao adicionar o evento curinga, substituiremos todos os eventos existentes que você tenha configurado pelo evento curinga e enviaremos todas as cargas para os eventos compatíveis. Você também obterá automaticamente todos os novos eventos que possamos adicionar no futuro.

[webhooks-overview]: /webhooks/
[webhook-api]: /v3/repos/hooks/
[hooks-api]: /webhooks/#events
