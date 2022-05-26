---
title: Webhooks da organização
allowTitleToDifferFromFilename: true
shortTitle: Webhooks
intro: ''
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

## Sobre a API de webhooks da organização

Os webhooks da organização permitem que você receba cargas de HTTP do tipo `POST` sempre que certos eventos ocorrerem dentro da organização. {% data reusables.webhooks.webhooks-rest-api-links %}

Para obter mais informações sobre ações que você pode assinar, consulte "[ tipos de evento de {% data variables.product.prodname_dotcom %}](/developers/webhooks-and-events/github-event-types)".

### Escopos e restrições

Todas as ações contra webhooks da organização exigem que o usuário autenticado seja um administrador da organização que está sendo gerenciada. Além disso, os tokens do OAuth requerem o escopo `admin:org_hook`. Para obter mais informações, consulte "[Escopos para aplicativos OAuth](/developers/apps/scopes-for-oauth-apps)."

Para proteger dados sensíveis que podem estar presentes nas configurações do webhook, também aplicamos as seguintes regras de controle de acesso:

- Os aplicativos OAuth não podem listar, visualizar ou editar webhooks que não criaram.
- Os usuários não podem listar, visualizar ou editar webhooks que foram criados por aplicativos OAuth.

### Receber Webhooks

Para que {% data variables.product.product_name %} envie cargas de webhook, seu servidor deve ser acessível pela internet. É altamente recomendável o uso de SSL para que possamos enviar cargas criptografadas por HTTPS.

Para obter mais práticas recomendadas, [consulte nosso guia](/guides/best-practices-for-integrators/).

#### Cabeçalhos de webhook

{% data variables.product.product_name %} enviará ao longo de vários cabeçalhos de HTTP para diferenciar entre tipos de evento e identificadores de carga. Consulte [cabeçalhos de webhook](/webhooks/event-payloads/#delivery-headers) para obter informações.
