---
title: GitHub Enterprise administration
allowTitleToDifferFromFilename: true
redirect_from:
  - /v3/enterprise-admin
  - /v3/enterprise
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

You can use these {% data variables.product.prodname_ghe_cloud %} endpoints to administer your enterprise account.

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Note:** This article applies to {% data variables.product.prodname_ghe_cloud %}. To see the {% data variables.product.prodname_ghe_server %} version, use the **{% data ui.pages.article_version %}** drop-down menu.

{% endnote %}

{% endif %}

{% if currentVersion != "free-pro-team@latest" %}

### Endpoint URLs

Os endpoints da API REST — exceto endpoints da API [Console de Gerenciamento](#management-console) — são prefixados com a seguinte URL:

```shell
http(s)://<em>hostname</em>/api/v3/
```

Os endpoints de API [Console de gerenciamento](#management-console)  somente são prefixados com um nome de host:

```shell
http(s)://<em>hostname</em>/
```

### Autenticação

Os endpoints de API da sua instalação do {% data variables.product.product_name %} aceitam [os mesmos métodos de autenticação](/rest/overview/resources-in-the-rest-api#authentication) da API do GitHub.com. Você pode se autenticar com **[tokens OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/)** (que podem ser criados usando a [API de Autorizações](/rest/reference/oauth-authorizations#create-a-new-authorization)) ou **[autenticação básica](/rest/overview/resources-in-the-rest-api#basic-authentication)**. {% if currentVersion != "free-pro-team@latest" %} Os tokens OAuth devem ter o `site_admin` [escopo OAuth](/developers/apps/scopes-for-oauth-apps#available-scopes) quando usados com endpoints específicos da Enterprise.{% endif %}

Os endpoints da API de administração da empresa somente são acessíveis para administradores do site autenticados pelo {% data variables.product.product_name %}, exceto a API [Console de gerenciamento](#management-console), que requer a [senha do Console de Gerenciamento](/enterprise/admin/articles/accessing-the-management-console/).

### Version information

A versão atual de uma instância do {% data variables.product.product_name %} é retornada no cabeçalho de resposta de cada API: `X-GitHub-Enterprise-Versão: {{currentVersion}}.0` Você também pode ler a versão atual chamando o [meta endpoint](/rest/reference/meta/).

{% for operation in currentRestOperations %}
  {% unless operation.subcategory %}{% include rest_operation %}{% endunless %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

## Cobrança

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'billing' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
## GitHub Actions

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'actions' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
## SCIM

### SCIM Provisioning for Enterprises

Os provedores de identidade (IdPs) habilitados pelo SCIM podem usar a API do SCIM para automatizar o provisionamento de filiação à empresa. A API {% data variables.product.product_name %} é baseada na versão 2.0 do [padrão SCIM](http://www.simplecloud.info/).

O IdP deve usar `{% data variables.product.api_url_code %}/scim/v2/enterprises/{enterprise}/` como desfecho do SCIM.

{% note %}

**Nota:** A API corporativa SCIM está disponível apenas para empresas em [{% data variables.product.prodname_ghe_cloud %}](/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-accounts) com [SAML SSO](/v3/auth/#authenticating-for-saml-sso) habilitado. Para obter mais informações sobre o SCIM, consulte "[Sobre o SCIM](/github/setting-up-and-managing-organizations-and-teams/about-scim)."

{% endnote %}

### Authenticating calls to the SCIM API

Você deve se autenticar como proprietário de uma empresa do {% data variables.product.product_name %} para usar sua API do SCIM. A API espera que um token [OAuth 2.0](/developers/apps/authenticating-with-github-apps) seja incluído no cabeçalho da `Autorização`. Você também pode usar um token de acesso pessoal, mas primeiro deve [autorizá-lo para uso em sua SAML SSO corporativa](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on).

### Mapping of SAML and SCIM data

O SAML IdP e o cliente SCIM devem usar valores correspondentes ao `NameID` e `userName` para cada usuário. Isso permite que um usuário que faz autenticação através do SAML seja vinculado à sua identidade SCIM provisionada.

Os grupos SCIM são combinados com organizações {% data variables.product.product_name %} que têm exatamente o mesmo nome e pertencem à conta corporativa.

O cliente SAML IdP e SCIM deve ser configurado de forma que haja correspondência exata do `displayName` do grupo SCIM com o nome da organização {% data variables.product.product_name %} correspondente. Isso permite que o {% data variables.product.product_name %} associe o grupo SCIM à associação da organização {% data variables.product.product_name %}.

### Supported SCIM User attributes

| Nome             | Tipo      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `userName`       | `string`  | The username for the user.                                                                                                                                                                                                                                                                                                                                                                                                           |
| `name.givenName` | `string`  | The first name of the user.                                                                                                                                                                                                                                                                                                                                                                                                          |
| `name.lastName`  | `string`  | The last name of the user.                                                                                                                                                                                                                                                                                                                                                                                                           |
| `emails`         | `array`   | List of user emails.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `externalId`     | `string`  | This identifier is generated by the SAML provider, and is used as a unique ID by the SAML provider to match against a GitHub user. You can find the `externalID` for a user either at the SAML provider, or using the [List SCIM provisioned identities for an enterprise](#list-scim-provisioned-identities-for-an-enterprise) endpoint and filtering on other known attributes, such as a user's GitHub username or email address. |
| `id`             | `string`  | Identifier generated by the GitHub SCIM endpoint.                                                                                                                                                                                                                                                                                                                                                                                    |
| `ativo`          | `boolean` | Used to indicate whether the identity is active (true) or should be deprovisioned (false).                                                                                                                                                                                                                                                                                                                                           |
| `groups`         | `array`   | Optional list of SCIM group IDs the user is a member of.                                                                                                                                                                                                                                                                                                                                                                             |

{% note %}

**Observação:** As URLs de Endpoint para a API SCIM são sensíveis a maiúsculas e minúsculas. Por exemplo, a primeira letra no endpoint `Usuários` deve ser maiúscula:

```shell
GET /scim/v2/enterprises/{enterprise}/Users/{scim_user_id}
```

{% endnote %}

### Supported SCIM Group attributes

| Nome          | Tipo     | Descrição                                                                                                                                                                                                                                                        |
| ------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayName` | `string` | The name of the SCIM group, which must exactly match the name of the corresponding {% data variables.product.product_name %} organization. For example, if the URL of the organization is `https://github.com/octo-org`, the group name must be `octo-org`. |
| `members`     | `array`  | List of SCIM user IDs that are members of the group.                                                                                                                                                                                                             |


{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'scim' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}

{% if currentVersion != "free-pro-team@latest" %}

## Estatísticas de admin

A API de Estatísticas Administrativas fornece uma variedade de métricas sobre sua instalação. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'admin-stats' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Webhooks globais

Webhooks globais são instalados em uma instância do {% data variables.product.prodname_enterprise %}. Você pode usar webhooks globais para monitorar, responder ou impor regras automaticamente para usuários, organizações, equipes e repositórios em sua instância. Webhooks globais podem se inscrever para os tipos de eventos  [organização](/developers/webhooks-and-events/webhook-events-and-payloads#organization), [usuário](/developers/webhooks-and-events/webhook-events-and-payloads#user), [repositório](/developers/webhooks-and-events/webhook-events-and-payloads#repository), [equipe](/developers/webhooks-and-events/webhook-events-and-payloads#team), [integrante](/developers/webhooks-and-events/webhook-events-and-payloads#member), [filiação](/developers/webhooks-and-events/webhook-events-and-payloads#membership), [bifurcação](/developers/webhooks-and-events/webhook-events-and-payloads#fork)e [ping](/developers/webhooks-and-events/about-webhooks#ping-event).

*Esta API está disponível somente para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la. Para aprender como configurar webhooks globais, consulte [Sobre webhooks globais](/enterprise/admin/user-management/about-global-webhooks).

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'global-webhooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## LDAP

Você pode usar a API LDAP para atualizar as relações de conta entre um usuário ou equipe {% data variables.product.prodname_ghe_server %} e sua entrada LDAP vinculada ou enfileirar uma nova sincronização.

Com os endpoints de mapeamento LDAP, você é capaz de atualizar o Nome Distinto (DN) para o qual um usuário ou uma equipe mapeia. Note que os endpoints LDAP são geralmente eficazes apenas se o seu appliance {% data variables.product.prodname_ghe_server %} tiver [Sincronização LDAP habilitada](/enterprise/admin/authentication/using-ldap). O endpoint [mapeamento LDAP de atualização para um usuário](#update-ldap-mapping-for-a-user) pode ser usado quando o LDAP é habilitado, mesmo que a sincronização LDAP esteja desativada.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'ldap' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Licença

A API de Licença fornece informações sobre sua licença empresarial. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'license' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Console de gerenciamento

A API do Console de Gerenciamento ajuda você a gerenciar sua instalação do {% data variables.product.prodname_ghe_server %}.

{% tip %}

Você deve definir explicitamente o número da porta ao fazer chamadas de API para o Console de Gerenciamento. Se o TLS estiver ativado na sua instância empresarial, o número da porta é `8443`; caso contrário, o número da porta é `8080`.

Se não quiser fornecer um número da porta, você precisará configurar sua ferramenta para seguir os redirecionamentos automaticamente.

Talvez você também precise adicionar o [`sinalizador`-k](http://curl.haxx.se/docs/manpage.html#-k) quando estiver usando `cURL`, pois {% data variables.product.prodname_ghe_server %} usa um certificado autoassinado antes de você [adicionar seu próprio certificado TLS](/enterprise/admin/guides/installation/configuring-tls/).

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

## Organizações

A API de administração da organização permite criar organizações em um appliance do {% data variables.product.prodname_ghe_server %}. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'orgs' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Hooks pre-receive da organização

A API de Hooks pre-receive da Organização permite que você veja e modifique a aplicação dos hooks pre-receive disponíveis para uma organização.

### Object attributes

| Nome                             | Tipo      | Descrição                                                 |
| -------------------------------- | --------- | --------------------------------------------------------- |
| `name`                           | `string`  | O nome do hook.                                           |
| `enforcement`                    | `string`  | The state of enforcement for the hook on this repository. |
| `allow_downstream_configuration` | `boolean` | Whether repositories can override enforcement.            |
| `configuration_url`              | `string`  | URL for the endpoint where enforcement is set.            |

Os valores possíveis para *aplicação* são `habilitado`, `desabilitado` e`testando`. `desabilitado` indica que o hook pre-receive não será executado. `habilitado` indica que será executado e rejeitará quaisquer pushes que resultem em um status diferente de zero. `testando` significa que o script será executado, mas não fará com que quaisquer pushes sejam rejeitados.

`configuration_url` pode ser um link para este endpoint ou configuração global deste hook. Apenas administradores do site podem acessar a configuração global.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'org-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Ambientes pre-receive

A API de Ambientes Pre-receive permite que você crie, liste, atualize e apague ambientes para hooks pre-receive. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

### Object attributes

#### Pre-receive Environment

| Nome                  | Tipo      | Descrição                                                                                                        |
| --------------------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| `name`                | `string`  | The name of the environment as displayed in the UI.                                                              |
| `image_url`           | `string`  | URL to the tarball that will be downloaded and extracted.                                                        |
| `default_environment` | `boolean` | Whether this is the default environment that ships with {% data variables.product.prodname_ghe_server %}. |
| `download`            | `objeto`  | This environment's download status.                                                                              |
| `hooks_count`         | `inteiro` | The number of pre-receive hooks that use this environment.                                                       |

#### Pre-receive Environment Download

| Nome            | Tipo     | Descrição                                               |
| --------------- | -------- | ------------------------------------------------------- |
| `estado`        | `string` | The state of the most recent download.                  |
| `downloaded_at` | `string` | The time when the most recent download started.         |
| `mensagem`      | `string` | On failure, this will have any error messages produced. |

Os valores possíveis para o `estado` são `not_started,` `in_progress,` `sucesso` `falho`.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'pre-receive-environments' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Hooks pre-receive

A API de hooks pre-receive permite que você crie, liste, atualize e apague hooks pre-receive. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

### Object attributes

#### Pre-receive Hook

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

## Hooks pre-receive do repositório

A API de Hooks pre-receive do Repositório permite que você veja e modifique a aplicação dos hooks pre-receive disponíveis para um repositório.

### Object attributes

| Nome                | Tipo     | Descrição                                                 |
| ------------------- | -------- | --------------------------------------------------------- |
| `name`              | `string` | O nome do hook.                                           |
| `enforcement`       | `string` | The state of enforcement for the hook on this repository. |
| `configuration_url` | `string` | URL for the endpoint where enforcement is set.            |

Os valores possíveis para *aplicação* são `habilitado`, `desabilitado` e`testando`. `desabilitado` indica que o hook pre-receive não será executado. `enabled` indicates it will run and reject any pushes that result in a non-zero status. `testando` significa que o script será executado, mas não fará com que quaisquer pushes sejam rejeitados.

`configuration_url` may be a link to this repository, it's organization owner or global configuration. Authorization to access the endpoint at `configuration_url` is determined at the owner or site admin level.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'repo-pre-receive-hooks' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Search indexing

The Search Indexing API allows you to queue up a variety of search indexing tasks. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `404` se tentarem acessá-la.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'search-indexing' %}{% include rest_operation %}{% endif %}
{% endfor %}

## Usuários

The User Administration API allows you to promote, demote, suspend, and unsuspend users on a {% data variables.product.prodname_ghe_server %} appliance. *Só está disponível para [administradores do site](/rest/overview/resources-in-the-rest-api#authentication) autenticados.* Usuários normais receberão uma mensagem `403` se tentarem acessá-la.

{% for operation in currentRestOperations %}
  {% if operation.subcategory == 'users' %}{% include rest_operation %}{% endif %}
{% endfor %}

{% endif %}
