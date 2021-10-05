---
title: Administração do GitHub Enterprise
intro: 'You can use these {% data variables.product.prodname_ghe_cloud %} endpoints to administer your enterprise account. Among the tasks you can perform with this API are many relating to GitHub Actions.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/enterprise-admin
  - /v3/enterprise
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
shortTitle: Administração de empresas
---

{% ifversion fpt %}

{% note %}

**Observação:** Este artigo aplica-se a {% data variables.product.prodname_ghe_cloud %}. Para visualizar a versão de {% data variables.product.prodname_ghe_managed %} ou de {% data variables.product.prodname_ghe_server %}, use o menu suspenso **{% data ui.pages.article_version %}**.

{% endnote %}

{% endif %}

### URLs do ponto de extremidade

Pontos de extremidade da API REST{% ifversion ghes %}—exceto os pontos de extremidades da API REST do [Console de gerenciamento](#management-console) -{% endif %} são prefixados com a seguinte URL:

```shell
{% data variables.product.api_url_pre %}
```

{% ifversion ghes %}
Os endpoints de API [Console de gerenciamento](#management-console)  somente são prefixados com um nome de host:

```shell
http(s)://<em>hostname</em>/
```
{% endif %}
{% ifversion ghae or ghes %}
### Autenticação

Os endpoints de API da sua instalação do {% data variables.product.product_name %} aceitam [os mesmos métodos de autenticação](/rest/overview/resources-in-the-rest-api#authentication) da API do GitHub.com. Você pode efetuar a autenticação com **[tokens do OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** {% ifversion ghes %}(que podem ser criado usando a [API de Autorizações](/rest/reference/oauth-authorizations#create-a-new-authorization)) {% endif %}ou **[autenticação básica](/rest/overview/resources-in-the-rest-api#basic-authentication)**. {% ifversion ghes %} Os tokens OAuth devem ter o `site_admin` [escopo OAuth](/developers/apps/scopes-for-oauth-apps#available-scopes) quando usados com endpoints específicos da Enterprise.{% endif %}

Os pontos de extremidade da API da administração da empresa podem ser acessados por administradores do site de {% data variables.product.product_name %}autenticados{% ifversion ghes %}, exceto a API do [Console de Gerenciamento](#management-console), que exige a [senha do console de gerenciamento](/enterprise/admin/articles/accessing-the-management-console/){% endif %}.

{% endif %}

{% ifversion ghae or ghes %}
### Informações da versão

A versão atual da sua empresa é retornada no cabeçalho de resposta de cada API: `X-GitHub-Enterprise-Version: {{currentVersion}}.0` Você também pode ler a versão atual chamando o [ponto de extremidade de meta](/rest/reference/meta/).

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% endif %}

{% ifversion fpt %}

## Log de auditoria

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'audit-log' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion fpt %}
## Cobrança

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'billing' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

## GitHub Actions

{% data reusables.actions.ae-beta %}

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'actions' %}{% include rest_operation %}{% endif %}
{% endfor %}


{% ifversion ghae or ghes %}
## Estatísticas de admin

A API de Estatísticas Administrativas fornece uma variedade de métricas sobre sua instalação. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'admin-stats' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes > 2.22 %}

## Anúncios

A API de anúncios permite que você gerencie o banner de anúncio global na sua empresa. Para obter mais informações, consulte "[Personalizar mensagens de usuários para a sua empresa](/admin/user-management/customizing-user-messages-for-your-enterprise#creating-a-global-announcement-banner)".

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'announcement' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}

## Webhooks globais

Webhooks globais são instalados na sua empresa. Você pode usar webhooks globais para monitorar, responder ou aplicar regras automaticamente para usuários, organizações, equipes e repositórios na sua empresa. Webhooks globais podem se inscrever para os tipos de eventos  [organização](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [usuário](/developers/webhooks-and-events/webhook-events-and-payloads#user), [repositório](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [equipe](/developers/webhooks-and-events/webhook-events-and-payloads#team), [integrante](/developers/webhooks-and-events/webhook-events-and-payloads#member), [filiação](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [bifurcação](/developers/webhooks-and-events/webhook-events-and-payloads#fork)e [ping](/developers/webhooks-and-events/about-webhooks#ping-event).

*Esta API está disponível somente para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la. Para aprender como configurar webhooks globais, consulte [Sobre webhooks globais](/enterprise/admin/user-management/about-global-webhooks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'global-webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## LDAP

Você pode usar a API LDAP para atualizar as relações de conta entre um usuário ou equipe {% data variables.product.product_name %} e sua entrada LDAP vinculada ou enfileirar uma nova sincronização.

Com os endpoints de mapeamento LDAP, você é capaz de atualizar o Nome Distinto (DN) para o qual um usuário ou uma equipe mapeia. Note que os endpoints LDAP são geralmente eficazes apenas se o seu aplicativo de {% data variables.product.product_name %} tiver [Sincronização LDAP habilitada](/enterprise/admin/authentication/using-ldap). O endpoint [mapeamento LDAP de atualização para um usuário](#update-ldap-mapping-for-a-user) pode ser usado quando o LDAP é habilitado, mesmo que a sincronização LDAP esteja desativada.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'ldap' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}
## Licença

A API de Licença fornece informações sobre sua licença empresarial. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'license' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## Console de gerenciamento

A API do Console de Gerenciamento ajuda você a gerenciar sua instalação do {% data variables.product.product_name %}.

{% tip %}

Você deve definir explicitamente o número da porta ao fazer chamadas de API para o Console de Gerenciamento. Se o TLS estiver habilitado na sua empresa, o número da porta será `8443`; caso contrário, o número da porta será `8080`.

Se não quiser fornecer um número da porta, você precisará configurar sua ferramenta para seguir os redirecionamentos automaticamente.

Talvez você também precise adicionar o [`sinalizador`-k](http://curl.haxx.se/docs/manpage.html#-k) quando estiver usando `cURL`, pois {% data variables.product.product_name %} usa um certificado autoassinado antes de você [adicionar seu próprio certificado TLS](/enterprise/admin/guides/installation/configuring-tls/).

{% endtip %}

### Autenticação

Você precisa passar a sua [senha do Console de Gerenciamento](/enterprise/admin/articles/accessing-the-management-console/) como token de autenticação para cada endpoint de API do Console de Gerenciamento, exceto [`/setup/api/start`](#create-a-github-enterprise-server-license).

Use o parâmetro `api_key` para enviar este token com cada solicitação. Por exemplo:

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

Você também pode usar a autenticação HTTP padrão para enviar esse token. Por exemplo:

```shell
$ curl -L 'https://api_key:<em>your-amazing-password</em>@<em>hostname</em>:<em>admin_port</em>/setup/api'
```

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'management-console' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}
## Organizações

A API de administração da organização permite a criação de organizações na sua empresa. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}
## Hooks pre-receive da organização

A API de Hooks pre-receive da Organização permite que você veja e modifique a aplicação dos hooks pre-receive disponíveis para uma organização.

### Atributos do objeto

| Nome                             | Tipo      | Descrição                                                      |
| -------------------------------- | --------- | -------------------------------------------------------------- |
| `name`                           | `string`  | O nome do hook.                                                |
| `enforcement`                    | `string`  | O estado de aplicação para o hook neste repositório.           |
| `allow_downstream_configuration` | `boolean` | Se os repositórios podem substituir a imposição.               |
| `configuration_url`              | `string`  | URL para o ponto de extremidade em que a aplicação é definida. |

Os valores possíveis para *aplicação* são `habilitado`, `desabilitado` e`testando`. `desabilitado` indica que o hook pre-receive não será executado. `habilitado` indica que será executado e rejeitará quaisquer pushes que resultem em um status diferente de zero. `testando` significa que o script será executado, mas não fará com que quaisquer pushes sejam rejeitados.

`configuration_url` pode ser um link para este endpoint ou configuração global deste hook. Apenas administradores do site podem acessar a configuração global.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'org-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## Ambientes pre-receive

A API de Ambientes Pre-receive permite que você crie, liste, atualize e apague ambientes para hooks pre-receive. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

### Atributos do objeto

#### Ambiente pre-receive

| Nome                  | Tipo      | Descrição                                                                          |
| --------------------- | --------- | ---------------------------------------------------------------------------------- |
| `name`                | `string`  | O nome do ambiente conforme exibido na interface do usuário.                       |
| `image_url`           | `string`  | URL do tarball que será baixado e extraído.                                        |
| `default_environment` | `boolean` | Se este é o ambiente-padrão que vem com {% data variables.product.product_name %}. |
| `download`            | `objeto`  | Status do download deste ambiente.                                                 |
| `hooks_count`         | `inteiro` | O número de hooks de pre-receive que usam este ambiente.                           |

#### Download do ambiente pre-receive

| Nome            | Tipo     | Descrição                                             |
| --------------- | -------- | ----------------------------------------------------- |
| `estado`        | `string` | O estado do download mais recente.                    |
| `downloaded_at` | `string` | A hora em que o download mais recente começou.        |
| `mensagem`      | `string` | Em caso de falha, serão produzidas mensagens de erro. |

Os valores possíveis para o `estado` são `not_started,` `in_progress,` `sucesso` `falho`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-environments' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}
## Hooks pre-receive

A API de hooks pre-receive permite que você crie, liste, atualize e apague hooks pre-receive. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

### Atributos do objeto

#### Hook pre-receive

| Nome                             | Tipo      | Descrição                                                                      |
| -------------------------------- | --------- | ------------------------------------------------------------------------------ |
| `name`                           | `string`  | O nome do hook.                                                                |
| `script`                         | `string`  | O script que o hook executa.                                                   |
| `script_repository`              | `objeto`  | O repositório do GitHub onde o script é mantido.                               |
| `ambiente`                       | `objeto`  | O ambiente de pre-receive onde o script é executado.                           |
| `enforcement`                    | `string`  | O estado de aplicação para este hook.                                          |
| `allow_downstream_configuration` | `boolean` | Se a aplicação pode ser substituída no nível da organização ou do repositório. |

Os valores possíveis para *aplicação* são `habilitado`, `desabilitado` e`testando`. `desabilitado` indica que o hook pre-receive não será executado. `habilitado` indica que será executado e rejeitará quaisquer pushes que resultem em um status diferente de zero. `testando` significa que o script será executado, mas não fará com que quaisquer pushes sejam rejeitados.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghes %}

## Hooks pre-receive do repositório

A API de Hooks pre-receive do Repositório permite que você veja e modifique a aplicação dos hooks pre-receive disponíveis para um repositório.

### Atributos do objeto

| Nome                | Tipo     | Descrição                                                      |
| ------------------- | -------- | -------------------------------------------------------------- |
| `name`              | `string` | O nome do hook.                                                |
| `enforcement`       | `string` | O estado de aplicação para o hook neste repositório.           |
| `configuration_url` | `string` | URL para o ponto de extremidade em que a aplicação é definida. |

Os valores possíveis para *aplicação* são `habilitado`, `desabilitado` e`testando`. `desabilitado` indica que o hook pre-receive não será executado. `habilitado` indica que será executado e rejeitará quaisquer pushes que resultem em um estado diferente de zero. `testando` significa que o script será executado, mas não fará com que quaisquer pushes sejam rejeitados.

`configuration_url` pode ser um link para este repositório, seu proprietário da organização ou configuração global. A autorização para acessar o ponto de extremidade no `configuration_url` é determinada no nível de proprietário ou administrador do site.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repo-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% ifversion ghae or ghes %}
## Usuários

A API de Administração do Usuário permite que você suspenda{% ifversion ghes %}, cancele a suspensão, promova e rebaixe{% endif %}{% ifversion ghae %} e cancele a suspensão{% endif %} dos usuários da sua empresa. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `403` se tentarem acessá-la.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'users' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
