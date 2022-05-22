---
title: Eventos de webhook e cargas
intro: 'Para cada evento de webhook, você pode revisar quando o evento ocorrer, uma carga de exemplo, bem como as descrições sobre os parâmetros do objeto da carga.'
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks/
  - /v3/activity/events/types/
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Webhooks
---
{% if currentVersion == "free-pro-team@latest" %}

{% endif %}

{% data reusables.webhooks.webhooks_intro %}

Você pode criar webhooks que assinam os eventos listados nesta página. Cada evento de webhook inclui uma descrição das propriedades do webhook e uma carga de exemplo. Para obter mais informações, consulte "[Criar webhooks](/webhooks/creating/)."

### Propriedades comuns do objeto da carga do webhook

Cada carga do evento do webhook também contém propriedades únicas para o evento. Você pode encontrar as propriedades únicas nas seções individuais de tipos de evento.

| Tecla  | Tipo     | Descrição                                                                                                              |
| ------ | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| `Ação` | `string` | A maioria das cargas de webhook contém uma ação `` propriedade que contém a atividade específica que acionou o evento. |
{% data reusables.webhooks.sender_desc %} Esta propriedade está incluída em todas as cargas do webhook.
{% data reusables.webhooks.repo_desc %} As cargas do webhook contêm a propriedade `repository` quando ocorre o evento a partir da atividade em um repositório.
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %} Para obter mais informações, consulte "[Criar um {% data variables.product.prodname_github_app %}](/apps/building-github-apps/).

As propriedades únicas para um evento de webhook são as mesmas propriedades que você encontrará na propriedade `payload` ao usar a [Eventos API](/rest/reference/activity#events). Uma exceção é o evento de [`push`](#push). As propriedades únicas da carga do webhook do evento `push` e a propriedade `carga` na API de eventos são diferentes. A carga do webhook contém informações mais detalhadas.

{% tip %}

**Observação:** As cargas são limitados a 25 MB. Se o seu evento gerar uma carga maior, um webhook não será disparado. Isso pode acontecer, por exemplo, em um evento `criar`, caso muitos branches ou tags sejam carregados de uma só vez. Sugerimos monitorar o tamanho da sua carga para garantir a entrega.

{% endtip %}

#### Cabeçalhos de entrega

As cargas de HTTP POST que são entregues no ponto de extremidade da URL configurado do seu webhook conterão vários cabeçalhos especiais:

| Header                        | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `X-GitHub-Event`              | Nome do evento que ativou a entrega.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `X-GitHub-Delivery`           | Um [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier) para identificar a entrega.{% if enterpriseServerVersions contém currentVersion or currentVersion == "github-ae@latest" %}
| `X-GitHub-Enterprise-Version` | A versão da instância do {% data variables.product.prodname_ghe_server %} que enviou a carga do HTTP POST.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `X-GitHub-Enterprise-Host`    | O nome do host da instância de {% data variables.product.prodname_ghe_server %} que enviou a carga HTTP POST.{% endif %}{% if currentVersion != "github-ae@latest" %}
| `X-Hub-Signature`             | Este cabeçalho é enviado se o webhook for configurado com um [`secret`](/rest/reference/repos#create-hook-config-params). Este é o resumo hexadecimal de HMAC do texto da solicitação e é gerado usando a função hash SHA-1 e `segredo` como a `chave` de HMAC.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} `X-Hub-Signature` é fornecido para compatibilidade com integrações existentes, e recomendamos que você use um `X-Hub-Signature-256` mais seguro.{% endif %}{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
| `X-Hub-Signature-256`         | Este cabeçalho é enviado se o webhook for configurado com um [`secret`](/rest/reference/repos#create-hook-config-params). Este é o resumo hexadecimal HMAC do texto da solicitação e é gerado usando a função hash SHA-256 e a `segredo` como a `chave` HMAC.{% endif %}

Além disso, o `User-Agent` para as solicitações terá o prefixo `GitHub-Hookshot/`.

#### Exemplo de entrega

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% if currentVersion != "github-ae@latest" %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c{% endif %}
> User-Agent: GitHub-Hookshot/044aadd
> Content-Type: application/json
> Content-Length: 6615
> X-GitHub-Event: issues

> {
>   "action": "opened",
>   "issue": {
>     "url": "{% data variables.product.api_url_pre %}/repos/octocat/Hello-World/issues/1347",
>     "number": 1347,
>     ...
>   },
>   "repository" : {
>     "id": 1296269,
>     "full_name": "octocat/Hello-World",
>     "owner": {
>       "login": "octocat",
>       "id": 1,
>       ...
>     },
>     ...
>   },
>   "sender": {
>     "login": "octocat",
>     "id": 1,
>     ...
>   }
> }
```

### check_run

{% data reusables.webhooks.check_run_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

#### Disponibilidade

- Os webhooks de repositório só recebem cargas para os tipos de evento `criados` e `concluídos` em um repositório
- Os webhooks da organização só recebem cargas para os tipos de eventos `criados` e `concluídos` nos repositórios
- Os {% data variables.product.prodname_github_app %}s com a permissão `checks:read` recebem cargas para os tipos de evento `criados` e `concluídos` que ocorrem no repositório onde o aplicativo está instalado. O aplicativo deve ter a permissão `checks:write` para receber os tipos de eventos `solicitados` e `requested_action`. As cargas do tipo de evento `solicitadas` e `requested_action` são enviadas apenas para o {% data variables.product.prodname_github_app %} que está sendo solicitado. Os {% data variables.product.prodname_github_app %}s com `checks:write` são automaticamente inscritos neste evento webhook.

#### Objeto da carga do webhook

{% data reusables.webhooks.check_run_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.check_run.created }}

### check_suite

{% data reusables.webhooks.check_suite_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

#### Disponibilidade

- Os webhooks de repositório só recebem cargas para os tipos de evento `concluídos` em um repositório
- Os webhooks da organização só recebem cargas para os tipos de eventos `concluídos` nos repositórios
- Os {% data variables.product.prodname_github_app %}s com a permissão `checks:read` recebem cargas para os tipos de evento `criados` e `concluídos` que ocorrem no repositório onde o aplicativo está instalado. O aplicativo deve ter a permissão `checks:write` para receber os tipos de eventos `solicitados` e `ressolicitados.`. As cargas de evento `solicitadas` e `ressolicitadas` são enviadas apenas para {% data variables.product.prodname_github_app %} que está sendo solicitado. Os {% data variables.product.prodname_github_app %}s com `checks:write` são automaticamente inscritos neste evento webhook.

#### Objeto da carga do webhook

{% data reusables.webhooks.check_suite_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.check_suite.completed }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### code_scanning_alert

Os {% data variables.product.prodname_github_app %}s com a permissão `security_events`

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão de `conteúdo`

#### Objeto da carga do webhook

{% data reusables.webhooks.code_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
</code>remetente`| <code>objeto` | Se a </code> de ação ` for <code>reopened_by_user` ou `closed_by_user`, o objeto `remetente` será o usuário que ativou o evento. O objeto `remetente` é
{% if currentVersion == "free-pro-team@latest" %}`github` {% elsif currentVersion ver_gt "enterprise-server@3.0" %}`github-enterprise` {% else %}empty {% endif %}para todas as outras ações.

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.code_scanning_alert.reopened }}

### commit_comment

{% data reusables.webhooks.commit_comment_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão de ` conteúdo`

#### Objeto da carga do webhook

{% data reusables.webhooks.commit_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.commit_comment.created }}
{% endif %}

### content_reference

{% data reusables.webhooks.content_reference_short_desc %}

Os eventos de webhook são acionados com base na especificidade do domínio que você registra. Por exemplo, se você registrar um subdomínio (`https://subdomain.example.com`), apenas as URLs para o subdomínio irão ativar este evento. Se você registrar um domínio (`https://example.com`), as URLs para domínio e todos os subdomínios irão ativar este evento. Consulte "[Crie um anexo de conteúdo](/rest/reference/apps#create-a-content-attachment)" para criar um novo anexo de conteúdo.

#### Disponibilidade

- {% data variables.product.prodname_github_app %}s com a permissão `content_references:write`

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.content_reference.created }}

### create

{% data reusables.webhooks.create_short_desc %}

{% note %}

**Observação:** Você não receberá um webhook para este evento ao fazer push de mais de três tags de uma vez.

{% endnote %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão de ` conteúdo`

#### Objeto da carga do webhook

{% data reusables.webhooks.create_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.create }}

### delete

{% data reusables.webhooks.delete_short_desc %}

{% note %}

**Observação:** Você não receberá um webhook para este evento ao excluir mais de três tags de uma só vez.

{% endnote %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão de ` conteúdo`

#### Objeto da carga do webhook

{% data reusables.webhooks.delete_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.delete }}

### deploy_key

{% data reusables.webhooks.deploy_key_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

#### Objeto da carga do webhook

{% data reusables.webhooks.deploy_key_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.deploy_key.created }}

### implantação

{% data reusables.webhooks.deployment_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão de `implantação`

#### Objeto da carga do webhook

| Tecla         | Tipo                                                                                                                                        | Descrição                                                  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `Ação`        | `string`                                                                                                                                    | A ação realizada. Pode ser `criado`.{% endif %}
| `implantação` | `objeto`                                                                                                                                    | The [implantação](/rest/reference/repos#list-deployments). |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.deployment }}

### implantação_status

{% data reusables.webhooks.deployment_status_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão de `implantação`

#### Objeto da carga do webhook

| Tecla                              | Tipo                                                                                                                                        | Descrição                                                                                  |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
| `Ação`                             | `string`                                                                                                                                    | A ação realizada. Pode ser `criado`.{% endif %}
| `implantação_status`               | `objeto`                                                                                                                                    | O [estado de implantação](/rest/reference/repos#list-deployment-statuses).                 |
| `deployment_status["state"]`       | `string`                                                                                                                                    | O novo estado. Pode ser `pendente`, `sucesso`, `falha` ou `erro`.                          |
| `deployment_status["target_url"]`  | `string`                                                                                                                                    | O link opcional adicionado ao status.                                                      |
| `deployment_status["description"]` | `string`                                                                                                                                    | A descrição opcional legível para pessoas adicionada ao status.                            |
| `implantação`                      | `objeto`                                                                                                                                    | A [implantação](/rest/reference/repos#list-deployments) à qual este status está associado. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.deployment_status }}

{% if currentVersion == "free-pro-team@latest" %}
### discussão

{% data reusables.webhooks.discussions-webhooks-beta %}

Atividade relacionada a uma discussão. Para obter mais informações, consulte "[Usar a API do GraphQL para discussões](/graphql/guides/using-the-graphql-api-for-discussions)".
#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_app %}s com a permissão de `discussões`

#### Objeto da carga do webhook

| Tecla  | Tipo     | Descrição                                                                                                                                                             |
| ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ação` | `string` | A ação realizada. Pode ser `created`, `edited`, `deleted`, `pinned`, `unpinned`, `locked`, `unlocked`, `transferred`, `category_changed`, `answered` ou `unanswered`. |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.discussion.created }}

### discussion_comment

{% data reusables.webhooks.discussions-webhooks-beta %}

Atividade relacionada a um comentário em uma discussão. Para obter mais informações, consulte "[Usar a API do GraphQL para discussões](/graphql/guides/using-the-graphql-api-for-discussions)".

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_app %}s com a permissão de `discussões`

#### Objeto da carga do webhook

| Tecla        | Tipo     | Descrição                                                                                                       |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------- |
| `Ação`       | `string` | A ação realizada. Pode ser `criado`, `editado` ou `excluído`.                                                   |
| `comentário` | `objeto` | O recurso [`comentário de discussão`](/graphql/guides/using-the-graphql-api-for-discussions#discussioncomment). |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.discussion_comment.created }}
{% endif %}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

### enterprise

{% data reusables.webhooks.enterprise_short_desc %}

#### Disponibilidade

- Webhooks do GitHub Enterprise. Para mais informações, consulte "[Webhooks globais](/rest/reference/enterprise-admin#global-webhooks/)."

#### Objeto da carga do webhook

| Tecla  | Tipo     | Descrição                                                                             |
| ------ | -------- | ------------------------------------------------------------------------------------- |
| `Ação` | `string` | A ação realizada. Pode ser `anonymous_access_enabled` ou `anonymous_access_disabled`. |

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.enterprise.anonymous_access_enabled }}

{% endif %}

### bifurcação

{% data reusables.webhooks.fork_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão de ` conteúdo`

#### Objeto da carga do webhook

{% data reusables.webhooks.fork_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.fork }}

### github_app_authorization

Este evento ocorre quando alguém revoga a autorização de um {% data variables.product.prodname_github_app %}. Um {% data variables.product.prodname_github_app %} recebe este webhook por padrão e não pode cancelar a assinatura deste evento.

{% data reusables.webhooks.authorization_event %} Para obter informações sobre solicitações de usuário para servidor, que exigem autorização do {% data variables.product.prodname_github_app %}, consulte "[Identificando e autorizando usuários para os {% data variables.product.prodname_github_app %}s](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

#### Disponibilidade

- {% data variables.product.prodname_github_app %}s

#### Objeto da carga do webhook

| Tecla  | Tipo     | Descrição                              |
| ------ | -------- | -------------------------------------- |
| `Ação` | `string` | A ação realizada. Pode ser `revogada`. |
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.github_app_authorization.revoked }}

### gollum

{% data reusables.webhooks.gollum_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão de ` conteúdo`

#### Objeto da carga do webhook

{% data reusables.webhooks.gollum_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.gollum }}

### instalação

{% data reusables.webhooks.installation_short_desc %}

{% note %}

**Observação:** Este evento substitui o evento `integration_installation` obsoleto.

{% endnote %}

#### Disponibilidade

- {% data variables.product.prodname_github_app %}s

#### Objeto da carga do webhook

{% data reusables.webhooks.installation_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.installation.deleted }}

### installation_repositories

{% data reusables.webhooks.installation_repositories_short_desc %}

{% note %}

**Observação:** Este evento substitui o evento obsoleto `integration_installation_repositories`.

{% endnote %}

#### Disponibilidade

- {% data variables.product.prodname_github_app %}s

#### Objeto da carga do webhook

{% data reusables.webhooks.installation_repositories_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.installation_repositories.added }}

### issue_comment

{% data reusables.webhooks.issue_comment_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão </code>problemas`</li>
</ul>

<h4 spaces-before="0">Objeto da carga do webhook</h4>

<p spaces-before="0">{% data reusables.webhooks.issue_comment_webhook_properties %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.issue_comment_properties %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.repo_desc %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.org_desc %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.app_desc %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.sender_desc %}</p>

<h4 spaces-before="0">Exemplo de carga de webhook</h4>

<p spaces-before="0">{{ webhookPayloadsForCurrentVersion.issue_comment.created }}</p>

<h3 spaces-before="0">Problemas</h3>

<p spaces-before="0">{% data reusables.webhooks.issues_short_desc %}</p>

<h4 spaces-before="0">Disponibilidade</h4>

<ul>
<li>Webhooks do repositório</li>
<li>Webhooks da organização</li>
<li>Os {% data variables.product.prodname_github_app %}s com a permissão `problemas`</li>
</ul>

<h4 spaces-before="0">Objeto da carga do webhook</h4>

<p spaces-before="0">{% data reusables.webhooks.issue_webhook_properties %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.issue_properties %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.repo_desc %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.org_desc %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.app_desc %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.sender_desc %}</p>

<h4 spaces-before="0">Exemplo de carga de webhook quando alguém editar um problema</h4>

<p spaces-before="0">{{ webhookPayloadsForCurrentVersion.issues.edited }}</p>

<h3 spaces-before="0">etiqueta</h3>

<p spaces-before="0">{% data reusables.webhooks.label_short_desc %}</p>

<h4 spaces-before="0">Disponibilidade</h4>

<ul>
<li>Webhooks do repositório</li>
<li>Webhooks da organização</li>
<li>Os {% data variables.product.prodname_github_app %}s com a permissão <code>metadados`

#### Objeto da carga do webhook

| Tecla                  | Tipo     | Descrição                                                             |
| ---------------------- | -------- | --------------------------------------------------------------------- |
| `Ação`                 | `string` | A ação que foi executada. Pode ser `criado`, `editado` ou `excluído`. |
| `etiqueta`             | `objeto` | A etiqueta que foi adicionada.                                        |
| `alterações`           | `objeto` | As alterações na etiqueta se a ação foi `editada`.                    |
| `changes[name][from]`  | `string` | A versão anterior do nome se a ação foi `editada`.                    |
| `changes[color][from]` | `string` | A versão anterior da cor se a ação foi `editada`.                     |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.label.deleted }}

{% if currentVersion == "free-pro-team@latest" %}
### marketplace_purchase

Atividade relacionada a uma compra do GitHub Marketplace. {% data reusables.webhooks.action_type_desc %} Para obter mais informações, consulte o "[GitHub Marketplace](/marketplace/)".

#### Disponibilidade

- {% data variables.product.prodname_github_app %}s

#### Objeto da carga do webhook

| Tecla  | Tipo     | Descrição                                                                                                                                         |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ação` | `string` | A ação realizada para um plano do [GitHub Marketplace](https://github.com/marketplace). Pode ser uma das ações a seguir:<ul><li>`comprado` - Alguém comprou um plano do GitHub Marketplace. A mudança deve entrar em vigor na conta imediatamente.</li><li>`pending_change` - Você receberá o evento `pending_change` quando alguém tiver feito o downgrade ou cancelado um plano do GitHub Marketplace para indicar que uma alteração ocorrerá na conta. O novo plano ou cancelamento entra em vigor no final do ciclo de cobrança.  O tipo de evento `cancelado` ou `alterado` será enviado quando o ciclo de cobrança terminar e o cancelamento ou o novo plano entrarem em vigor.</li><li>`pending_change_cancelled` - Alguém cancelou uma alteração pendente. Alterações pendentes incluem planos de cancelamento e downgrades que entrarão em vigor ao fim de um ciclo de cobrança. </li><li>`alterado` - Alguém fez o upgrade ou downgrade de um plano do GitHub Marketplace e a alteração entrará em vigor na conta imediatamente.</li><li>`cancelado` - Alguém cancelou um plano do GitHub Marketplace e o último ciclo de cobrança foi finalizado. A mudança deve entrar em vigor na conta imediatamente.</li></ul> |

Para obter uma descrição detalhada desta carga e da carga para cada tipo de `ação`, consulte [eventos do webhook de {% data variables.product.prodname_marketplace %} ](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

#### Exemplo de carga de webhook quando alguém compra o plano

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

{% endif %}

### integrante

{% data reusables.webhooks.member_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão </code>membros`</li>
</ul>

<h4 spaces-before="0">Objeto da carga do webhook</h4>

<p spaces-before="0">{% data reusables.webhooks.member_webhook_properties %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.member_properties %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.repo_desc %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.org_desc %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.app_desc %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.sender_desc %}</p>

<h4 spaces-before="0">Exemplo de carga de webhook</h4>

<p spaces-before="0">{{ webhookPayloadsForCurrentVersion.member.added }}</p>

<h3 spaces-before="0">filiação</h3>

<p spaces-before="0">{% data reusables.webhooks.membership_short_desc %}</p>

<h4 spaces-before="0">Disponibilidade</h4>

<ul>
<li>Webhooks da organização</li>
<li>Os {% data variables.product.prodname_github_app %}s com a permissão `membros`</li>
</ul>

<h4 spaces-before="0">Objeto da carga do webhook</h4>

<p spaces-before="0">{% data reusables.webhooks.membership_properties %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.org_desc %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.app_desc %}</p>

<p spaces-before="0">
</p>

<p spaces-before="0">{% data reusables.webhooks.sender_desc %}</p>

<h4 spaces-before="0">Exemplo de carga de webhook</h4>

<p spaces-before="0">{{ webhookPayloadsForCurrentVersion.membership.removed }}</p>

<h3 spaces-before="0">meta</h3>

<p spaces-before="0">O webhook em que este evento está configurado em foi excluído. Este evento só ouvirá alterações no hook em que o evento está instalado. Portanto, deve ser selecionado para cada hook para o qual você gostaria de receber metaeventos.</p>

<h4 spaces-before="0">Disponibilidade</h4>

<ul>
<li>Webhooks do repositório</li>
<li>Webhooks da organização</li>
</ul>

<h4 spaces-before="0">Objeto da carga do webhook</h4>

<p spaces-before="0"><table spaces-before="0">
<thead>
<tr>
  <th>Tecla</th>
  <th>Tipo</th>
  <th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Ação`</td> 
  </tr> 
  </tbody> </table> </p>
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.meta.deleted }}

### marco

{% data reusables.webhooks.milestone_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `pull_requests`

#### Objeto da carga do webhook

{% data reusables.webhooks.milestone_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.milestone.created }}

### organização

{% data reusables.webhooks.organization_short_desc %}

#### Disponibilidade

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- Os webhooks do GitHub Enterprise recebem apenas eventos `criados` e `excluídos`. Para mais informações, consulte "[Webhooks globais](/rest/reference/enterprise-admin#global-webhooks/).{% endif %}
- Os webhooks da organização recebem apenas os eventos `excluídos`, `adicionados`, `removidos`, `renomeado` e `convidados`
- Os {% data variables.product.prodname_github_app %}s com a permissão </code>membros`</li>
</ul>

<h4 spaces-before="0">Objeto da carga do webhook</h4>

<p spaces-before="0"><table spaces-before="0">
<thead>
<tr>
  <th>Tecla</th>
  <th>Tipo</th>
  <th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Ação`</td> 
  </tr> 
  </tbody> </table> </p>
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.organization.member_added }}

{% if currentVersion == "free-pro-team@latest" %}

### org_block

{% data reusables.webhooks.org_block_short_desc %}

#### Disponibilidade

- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `organization_administration`

#### Objeto da carga do webhook

| Tecla          | Tipo     | Descrição                                                 |
| -------------- | -------- | --------------------------------------------------------- |
| `Ação`         | `string` | A ação realizada. Pode ser `bloqueado` ou `desbloqueado`. |
| `blocked_user` | `objeto` | Informações sobre o usuário bloqueado ou desbloqueado.    |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.org_block.blocked }}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" %}

### pacote

Atividade relacionada a {% data variables.product.prodname_registry %}. {% data reusables.webhooks.action_type_desc %} Para obter mais informações, consulte "[Gerenciar pacotes com {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages)" para saber mais sobre {% data variables.product.prodname_registry %}.

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

#### Objeto da carga do webhook

{% data reusables.webhooks.package_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.package.published }}
{% endif %}

### page_build

{% data reusables.webhooks.page_build_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `páginas`

#### Objeto da carga do webhook

| Tecla   | Tipo      | Descrição                                                                               |
| ------- | --------- | --------------------------------------------------------------------------------------- |
| `id`    | `inteiro` | O identificador exclusivo da criação de páginas.                                        |
| `build` | `objeto`  | A [Listar as criações do GitHub Pages](/rest/reference/repos#list-github-pages-builds). |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.page_build }}

### ping

{% data reusables.webhooks.ping_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s recebem um evento de ping com um `app_id` usado para registrar o aplicativo

#### Objeto da carga do webhook

| Tecla          | Tipo      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `zen`          | `string`  | String aleatória do Github zen.                                                                                                                                                                                                                                                                                                                                                                                         |
| `hook_id`      | `inteiro` | O ID do webhook que acionou o ping.                                                                                                                                                                                                                                                                                                                                                                                     |
| `hook`         | `objeto`  | A [configuração do webhook](/rest/reference/repos#get-a-repository-webhook).                                                                                                                                                                                                                                                                                                                                            |
| `hook[app_id]` | `inteiro` | Ao registrar um novo {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} envia um evento de ping para a **URL do webhook** que você especificou no registro. O evento contém o `app_id`, que é necessário para a [efetuar a autenticação](/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/) em um aplicativo. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.ping }}

### project_card

{% data reusables.webhooks.project_card_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `repository_projects` ou `organization_projects`

#### Objeto da carga do webhook

{% data reusables.webhooks.project_card_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.project_card.created }}

### project_column

{% data reusables.webhooks.project_column_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `repository_projects` ou `organization_projects`

#### Objeto da carga do webhook

{% data reusables.webhooks.project_column_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.project_column.created }}

### project

{% data reusables.webhooks.project_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `repository_projects` ou `organization_projects`

#### Objeto da carga do webhook

{% data reusables.webhooks.project_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.project.created }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### público

{% data reusables.webhooks.public_short_desc %}
#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `metadados`

#### Objeto da carga do webhook

| Tecla | Tipo | Descrição |
| ----- | ---- | --------- |
|       |      |           |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.public }}
{% endif %}
### pull_request

{% data reusables.webhooks.pull_request_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `pull_requests`

#### Objeto da carga do webhook

{% data reusables.webhooks.pull_request_webhook_properties %}
{% data reusables.webhooks.pull_request_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

As entregas para eventos `review_requested` e `review_request_removed` terão um campo adicional denominado `requested_reviewer`.

{{ webhookPayloadsForCurrentVersion.pull_request.opened }}

### pull_request_review

{% data reusables.webhooks.pull_request_review_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `pull_requests`

#### Objeto da carga do webhook

{% data reusables.webhooks.pull_request_review_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review.submitted }}

### pull_request_review_comment

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `pull_requests`

#### Objeto da carga do webhook

{% data reusables.webhooks.pull_request_review_comment_webhook_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review_comment.created }}

### push

{% data reusables.webhooks.push_short_desc %}

{% note %}

**Observação:** Você não receberá um webhook para este evento ao fazer push de mais de três tags de uma vez.

{% endnote %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão de ` conteúdo`

#### Objeto da carga do webhook

| Tecla                      | Tipo      | Descrição                                                                                                                                                                                                                                                                                                                        |
| -------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`                      | `string`  | O [`git ref completo`](/rest/reference/git#refs) que foi empurrado. Exemplo: `refs/heads/master`.                                                                                                                                                                                                                                |
| `antes`                    | `string`  | O SHA do último commit em `ref` antes do push.                                                                                                                                                                                                                                                                                   |
| `depois`                   | `string`  | O SHA do último commit no `ref` após o push.                                                                                                                                                                                                                                                                                     |
| `commits`                  | `array`   | Um array de objetos de commit, que descreve os commits carregados. (O array inclui um máximo de 20 commits. Se necessário, você pode usar a [API de Commits](/rest/reference/repos#commits) para obter commits adicionais. Este limite é aplicado apenas aos eventos da linha do tempo e não é aplicado às entregas do webhook.) |
| `commits[][id]`            | `string`  | O SHA do commit.                                                                                                                                                                                                                                                                                                                 |
| `commits[][timestamp]`     | `string`  | O carimbo de tempo ISO 8601 do commit.                                                                                                                                                                                                                                                                                           |
| `commits[][message]`       | `string`  | A mensagem do commit.                                                                                                                                                                                                                                                                                                            |
| `commits[][author]`        | `objeto`  | O autor do git do commit.                                                                                                                                                                                                                                                                                                        |
| `commits[][author][name]`  | `string`  | O nome do autor do git.                                                                                                                                                                                                                                                                                                          |
| `commits[][author][email]` | `string`  | O endereço de e-mail do autor do git.                                                                                                                                                                                                                                                                                            |
| `commits[][url]`           | `url`     | URL que aponta para o recurso de commit de API.                                                                                                                                                                                                                                                                                  |
| `commits[][distinct]`      | `boolean` | Se este compromisso é diferente de qualquer outro que tenha sido carregado anteriormente.                                                                                                                                                                                                                                        |
| `commits[][added]`         | `array`   | Um array de arquivos adicionados no commit.                                                                                                                                                                                                                                                                                      |
| `commits[][modified]`      | `array`   | Um array de arquivos modificados pelo commit.                                                                                                                                                                                                                                                                                    |
| `commits[][removed]`       | `array`   | Um array de arquivos removidos no commit.                                                                                                                                                                                                                                                                                        |
| `pusher`                   | `objeto`  | O usuário que fez o push dos commits.                                                                                                                                                                                                                                                                                            |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.push }}

### versão

{% data reusables.webhooks.release_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão de ` conteúdo`

#### Objeto da carga do webhook

{% data reusables.webhooks.release_webhook_properties %}
{% data reusables.webhooks.release_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.release.published }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
### repository_dispatch

Este evento ocorre quando um {% data variables.product.prodname_github_app %} envia uma solicitação de `POST` para o "[Crie um evento de envio de repositório](/rest/reference/repos#create-a-repository-dispatch-event)" endpoint.

#### Disponibilidade

- Os {% data variables.product.prodname_github_app %}s devem ter a permissão de `conteúdo` para receber este webhook.

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.repository_dispatch }}
{% endif %}

### repositório

{% data reusables.webhooks.repository_short_desc %}

#### Disponibilidade

- Os webhooks do repositório recebem todos os tipos de eventos, exceto `excluído`
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão de `metadados` recebem todos os tipos de eventos, exceto `excluídos`

#### Objeto da carga do webhook

| Tecla  | Tipo     | Descrição                                                                          |
| ------ | -------- | ---------------------------------------------------------------------------------- |
| `Ação` | `string` | A ação que foi executada. Este pode ser um dos seguintes:<ul><li>`created` - Um repositório foi criado.</li><li>`deleted` - Um repositório foi excluído.</li><li>`archived` - Um repositório está arquivado.</li><li>`unarchived` - Um repositório não está arquivado.</li>{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}<li>`anonymous_access_enabled` - Um repositório está [habilitado para acesso anônimo ao Git](/rest/overview/api-previews#anonymous-git-access-to-repositories), `anonymous_access_disabled` - Um repositório está [desativado para acesso anônimo ao Git](/rest/overview/api-previews#anonymous-git-access-to-repositories)</li>{% endif %}<li>`edited` - As informações de um repositório são editadas.</li><li>`renamed` - Um repositório é renomeado.</li><li>`transferred` - Um repositório é transferido.</li><li>`publicized` - Um repositório é publicado.</li><li> `privatizado` - Um repositório é privatizado.</li></ul> |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.repository.publicized }}

{% if currentVersion == "free-pro-team@latest"%}
### repository_import

{% data reusables.webhooks.repository_import_short_desc %} Para receber este evento para um repositório pessoal, você deve criar um repositório vazio antes da importação. Este evento pode ser acionado usando o [Importador do GitHub](/articles/importing-a-repository-with-github-importer/) ou a API [Api de Importação de Fonte](/rest/reference/migrations#source-imports).

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

#### Objeto da carga do webhook

{% data reusables.webhooks.repository_import_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.repository_import }}

### repository_vulnerability_alert

{% data reusables.webhooks.repository_vulnerability_alert_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

#### Objeto da carga do webhook

{% data reusables.webhooks.repository_vulnerability_alert_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.repository_vulnerability_alert.create }}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}

### secret_scanning_alert

{% data reusables.webhooks.secret_scanning_alert_event_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_app %}s com a permissão `secret_scanning_alerts:read`

#### Objeto da carga do webhook

{% data reusables.webhooks.secret_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | Se a `action` is `resolved` ou `reopened`, o objeto de `sender` será o usuário que acionou o evento. O objeto `remetente` está vazio para todas as outras ações.

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert.reopened }}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@1.19" %}
### security_advisory

Atividade relacionada a uma consultora de segurança. Uma consultoria de segurança fornece informações sobre vulnerabilidades relacionadas à segurança em softwares no GitHub. O conjunto de dados da consultoria de segurança também promove os alertas de segurança do GitHub, consulte "[Sobre os alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/)."
{% endif %}

#### Disponibilidade

- Os {% data variables.product.prodname_github_app %}s com a permissão `security_events`

#### Objeto da carga do webhook

| Tecla               | Tipo     | Descrição                                                                                                           |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `Ação`              | `string` | A ação que foi executada. A ação pode ser `publicadas`, `atualizadas`, ou `executadas` para todos os novos eventos. |
| `security_advisory` | `objeto` | As informações da consultoria de segurança, incluindo resumo, descrição e gravidade.                                |

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.security_advisory.published }}

{% if currentVersion == "free-pro-team@latest" %}
### patrocínio

{% data reusables.webhooks.sponsorship_short_desc %}

Você só pode criar um webhook de patrocínio em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Configurar webhooks para eventos na sua conta patrocinada](/sponsors/integrating-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)".

#### Disponibilidade

- Contas patrocinadas

#### Objeto da carga do webhook

{% data reusables.webhooks.sponsorship_webhook_properties %}
{% data reusables.webhooks.sponsorship_properties %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook quando alguém cria um patrocínio

{{ webhookPayloadsForCurrentVersion.sponsorship.created }}

#### Exemplo de carga de webhook quando alguém faz o downgrade de um patrocínio

{{ webhookPayloadsForCurrentVersion.sponsorship.downgraded }}

{% endif %}

### estrela

{% data reusables.webhooks.star_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

#### Objeto da carga do webhook

{% data reusables.webhooks.star_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.star.created }}

### status

{% data reusables.webhooks.status_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `status`

#### Objeto da carga do webhook

| Tecla         | Tipo      | Descrição                                                                                                                                                                              |
| ------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`          | `inteiro` | O identificador exclusivo do status.                                                                                                                                                   |
| `sha`         | `string`  | O SHA do commit.                                                                                                                                                                       |
| `estado`      | `string`  | O novo estado. Pode ser `pendente`, `sucesso`, `falha` ou `erro`.                                                                                                                      |
| `descrição`   | `string`  | A descrição opcional legível para pessoas adicionada ao status.                                                                                                                        |
| `url_destino` | `string`  | O link opcional adicionado ao status.                                                                                                                                                  |
| `branches`    | `array`   | Um array de objetos de branch que contém o SHA do status. Cada branch contém o SHA fornecido, mas o SHA pode ou não ser o cabeçalho do branch. O array inclui, no máximo, 10 branches. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.status }}

### equipe

{% data reusables.webhooks.team_short_desc %}

#### Disponibilidade

- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão </code>membros`</li>
</ul>

<h4 spaces-before="0">Objeto da carga do webhook</h4>

<p spaces-before="0"><table spaces-before="0">
<thead>
<tr>
  <th>Tecla</th>
  <th>Tipo</th>
  <th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>Ação`</td> 
  </tr> 
  </tbody> </table> </p>
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.team.added_to_repository }}

### team_add

{% data reusables.webhooks.team_add_short_desc %}

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão </code>membros`</li>
</ul>

<h4 spaces-before="0">Objeto da carga do webhook</h4>

<p spaces-before="0"><table spaces-before="0">
<thead>
<tr>
  <th>Tecla</th>
  <th>Tipo</th>
  <th>Descrição</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>equipe`</td> 
  </tr> </tbody> </table> </p>
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.team_add }}

{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}

### usuário

Quando um usuário é `criado` ou `excluído`.

#### Disponibilidade
- Webhooks do GitHub Enterprise. Para mais informações, consulte "[Webhooks globais](/rest/reference/enterprise-admin#global-webhooks/)."

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.user.created }}

{% endif %}

### inspecionar

{% data reusables.webhooks.watch_short_desc %}

O ator do evento é o [usuário](/rest/reference/users) que favoritou um repositório, e o repositório do evento é [repositório](/rest/reference/repos) que foi marcado com estrela.

#### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_app %}s com a permissão `metadados`

#### Objeto da carga do webhook

{% data reusables.webhooks.watch_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.watch.started }}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
### workflow_dispatch

Esse evento ocorre quando alguém aciona a execução de um fluxo de trabalho no GitHub ou envia uma solicitação de `POST` para o ponto de extremidade "[Criar um evento de envio de fluxo de trabalho](/rest/reference/actions/#create-a-workflow-dispatch-event)". Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

#### Disponibilidade

- Os {% data variables.product.prodname_github_app %}s devem ter a permissão de `conteúdo` para receber este webhook.

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.workflow_dispatch }}
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
### workflow_run

Quando uma execução do fluxo de trabalho de {% data variables.product.prodname_actions %} for solicitada ou concluída. Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#workflow_run)".

#### Disponibilidade

- {% data variables.product.prodname_github_app %} com as `ações` ou permissões de `conteúdo`.

#### Objeto da carga do webhook

{% data reusables.webhooks.workflow_run_properties %}
{% data reusables.webhooks.workflow_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.sender_desc %}

#### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.workflow_run }}
{% endif %}
