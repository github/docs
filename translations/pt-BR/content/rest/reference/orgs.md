---
title: Organizações
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/orgs
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

## Bloquear usuários

O token usado para autenticar a chamada deve ter o escopo `admin:org` para fazer quaisquer chamadas de bloqueio para uma organização. Caso contrário, a resposta retornará `HTTP 404`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'blocking' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Integrantes

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'members' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Colaboradores externos

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'outside-collaborators' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Webhooks

Os webhooks da organização permitem que você receba cargas de HTTP do tipo `POST` sempre que certos eventos ocorrerem dentro da organização. Assinar esses eventos possibilita a construção de integrações que reajam às ações em {% data variables.product.prodname_dotcom %}.com. Para obter mais informações sobre ações que você pode assinar, consulte "[ tipos de evento de {% data variables.product.prodname_dotcom %}](/developers/webhooks-and-events/github-event-types)".

### Escopos & Restrições

Todas as ações contra webhooks da organização exigem que o usuário autenticado seja um administrador da organização que está sendo gerenciada. Além disso, os tokens do OAuth requerem o escopo `admin:org_hook`. Para obter mais informações, consulte "[Escopos para aplicativos OAuth](/developers/apps/scopes-for-oauth-apps)."

Para proteger dados sensíveis que podem estar presentes nas configurações do webhook, também aplicamos as seguintes regras de controle de acesso:

- Os aplicativos OAuth não podem listar, visualizar ou editar webhooks que não criaram.
- Os usuários não podem listar, visualizar ou editar webhooks que foram criados por aplicativos OAuth.

### Receber Webhooks

Para que {% data variables.product.product_name %} envie cargas de webhook, seu servidor deve ser acessível pela internet. É altamente recomendável o uso de SSL para que possamos enviar cargas criptografadas por HTTPS.

Para obter mais práticas recomendadas, [consulte nosso guia](/guides/best-practices-for-integrators/).

#### Cabeçalhos de webhook

{% data variables.product.product_name %} enviará ao longo de vários cabeçalhos de HTTP para diferenciar entre tipos de evento e identificadores de carga. Consulte [cabeçalhos de webhook](/webhooks/event-payloads/#delivery-headers) para obter informações.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}
