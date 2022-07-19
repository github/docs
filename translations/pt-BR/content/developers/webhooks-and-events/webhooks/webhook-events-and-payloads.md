---
title: Eventos de webhook e cargas
intro: 'Para cada evento de webhook, você pode revisar quando o evento ocorrer, uma carga de exemplo, bem como as descrições sobre os parâmetros do objeto da carga.'
product: '{% data reusables.gated-features.enterprise_account_webhooks %}'
redirect_from:
  - /early-access/integrations/webhooks
  - /v3/activity/events/types
  - /webhooks/event-payloads
  - /developers/webhooks-and-events/webhook-events-and-payloads
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Webhooks
shortTitle: Eventos webhook & cargas
---

{% ifversion fpt or ghec %}

{% endif %}

{% data reusables.webhooks.webhooks_intro %}

Você pode criar webhooks que assinam os eventos listados nesta página. Cada evento de webhook inclui uma descrição das propriedades do webhook e uma carga de exemplo. Para obter mais informações, consulte "[Criar webhooks](/webhooks/creating/)."

## Propriedades comuns do objeto da carga do webhook

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

### Cabeçalhos de entrega

As cargas de HTTP POST que são entregues no ponto de extremidade da URL configurado do seu webhook conterão vários cabeçalhos especiais:

| Header                        | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `X-GitHub-Event`              | Nome do evento que ativou a entrega.                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `X-GitHub-Delivery`           | Um [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier) para identificar a entrega.{% ifversion ghes or ghae %}
| `X-GitHub-Enterprise-Version` | A versão da instância do {% data variables.product.prodname_ghe_server %} que enviou a carga do HTTP POST.                                                                                                                                                                                                                                                                                                                                                               |
| `X-GitHub-Enterprise-Host`    | O nome de host da instância do {% data variables.product.prodname_ghe_server %} que enviou a carga HTTP POST.{% endif %}{% ifversion not ghae %}
| `X-Hub-Signature`             | Este cabeçalho é enviado se o webhook for configurado com um [`secret`](/rest/reference/repos#create-hook-config-params). Este é o resumo hexadecimal doHMAC do texto da solicitação, e é gerada usando a função hash SHA-1 e o `segredo` como a `chave` do HMAC.{% ifversion fpt or ghes or ghec %} `X-Hub-Signature` é fornecido para compatibilidade com integrações existentes, e recomendamos que você use o `X-Hub-Signature-256` mais seguro.{% endif %}{% endif %}
| `X-Hub-Signature-256`         | Este cabeçalho é enviado se o webhook for configurado com um [`secret`](/rest/reference/repos#create-hook-config-params). Este é o resumo hexadecimal HMAC do texto da solicitação e é gerado usando a função hash SHA-256 e a `segredo` como a `chave` HMAC.                                                                                                                                                                                                              |

Além disso, o `User-Agent` para as solicitações terá o prefixo `GitHub-Hookshot/`.

### Exemplo de entrega

```shell
> POST /payload HTTP/2

> Host: localhost:4567
> X-GitHub-Delivery: 72d3162e-cc78-11e3-81ab-4c9367dc0958{% ifversion ghes or ghae %}
> X-GitHub-Enterprise-Version: 2.15.0
> X-GitHub-Enterprise-Host: example.com{% endif %}{% ifversion not ghae %}
> X-Hub-Signature: sha1=7d38cdd689735b008b3c702edd92eea23791c5f6{% endif %}
> X-Hub-Signature-256: sha256=d57c68ca6f92289e6987922ff26938930f6e66a2d161ef06abdf1859230aa23c
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

{% ifversion fpt or ghes > 3.2 or ghae or ghec %}
## branch_protection_rule

Atividade relacionada a uma regra de proteção do branch. Para obter mais informações, consulte[Sobre as regras de proteção do branch](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-rules)".

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com pelo menos acesso `somente leitura` na administração de repositórios

### Objeto da carga do webhook

| Tecla        | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ação`       | `string` | A ação realizada. Pode ser `criado`, `editado` ou `excluído`.                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `rule`       | `objeto` | A regra de proteção do branch. Inclui um `nome` e todas as [configurações de proteção de branch](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-settings) aplicadas a branches que correspondem ao nome. As configurações binárias são booleanas. As configurações de multi-nível tem um dos valores a seguir:`off`, `non_admins` ou `everyone`. As listas do criador e da criação são matrizes de strings. |
| `alterações` | `objeto` | Se a ação foi `editada`, as alterações para a regra.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.branch_protection_rule.edited }}
{% endif %}

{% ifversion ghes > 3.3 %}
## cache_sync

Um ref do Git foi sincronizado com sucesso para uma réplica de cache. Para obter mais informações, consulte "[Sobre o cache do repositório](/admin/enterprise-management/caching-repositories/about-repository-caching)".

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

| Tecla            | Tipo     | Descrição                                                 |
| ---------------- | -------- | --------------------------------------------------------- |
| `cache_location` | `string` | A localização do servidor de cache que foi atualizado.    |
| `ref`            | `string` | A ref que foi atualizada.                                 |
| `antes`          | `string` | O OID da ref na réplica do cache antes de ser atualizado. |
| `depois`         | `string` | O OID do ref na réplica do cache após a atualização.      |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.cache_sync.synced }}
{% endif %}

## check_run

{% data reusables.webhooks.check_run_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### Disponibilidade

- Os webhooks de repositório só recebem cargas para os tipos de evento `criados` e `concluídos` em um repositório
- Os webhooks da organização só recebem cargas para os tipos de eventos `criados` e `concluídos` nos repositórios
- {% data variables.product.prodname_github_apps %} com a permissão `checks:read` recebem cargas para os tipos de evento `criados` e `concluídos` que ocorrem no repositório onde o aplicativo está instalado. O aplicativo deve ter a permissão `checks:write` para receber os tipos de eventos `solicitados` e `requested_action`. As cargas do tipo de evento `solicitadas` e `requested_action` são enviadas apenas para o {% data variables.product.prodname_github_app %} que está sendo solicitado. {% data variables.product.prodname_github_apps %} com `checks:write` são automaticamente inscritos neste evento webhook.

### Objeto da carga do webhook

{% data reusables.webhooks.check_run_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.check_run.created }}

## check_suite

{% data reusables.webhooks.check_suite_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### Disponibilidade

- Os webhooks de repositório só recebem cargas para os tipos de evento `concluídos` em um repositório
- Os webhooks da organização só recebem cargas para os tipos de eventos `concluídos` nos repositórios
- {% data variables.product.prodname_github_apps %} com a permissão `checks:read` recebem cargas para os tipos de evento `criados` e `concluídos` que ocorrem no repositório onde o aplicativo está instalado. O aplicativo deve ter a permissão `checks:write` para receber os tipos de eventos `solicitados` e `ressolicitados.`. As cargas de evento `solicitadas` e `ressolicitadas` são enviadas apenas para {% data variables.product.prodname_github_app %} que está sendo solicitado. {% data variables.product.prodname_github_apps %} com `checks:write` são automaticamente inscritos neste evento webhook.

### Objeto da carga do webhook

{% data reusables.webhooks.check_suite_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.check_suite.completed }}

## code_scanning_alert

{% data reusables.webhooks.code_scanning_alert_event_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão de `security_events :read`

### Objeto da carga do webhook

{% data reusables.webhooks.code_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
</code>remetente`| <code>objeto` | Se a </code> de ação ` for <code>reopened_by_user` ou `closed_by_user`, o objeto `remetente` será o usuário que ativou o evento. O objeto `sender` está {% ifversion fpt or ghec %}`github`{% elsif ghes or ghae %}`github-enterprise`{% else %}vazio{% endif %} para todas as outras ações.

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.code_scanning_alert.reopened }}

## commit_comment

{% data reusables.webhooks.commit_comment_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `conteúdo`

### Objeto da carga do webhook

{% data reusables.webhooks.commit_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.commit_comment.created }}

{% ifversion ghes < 3.4 %}
## content_reference

{% data reusables.webhooks.content_reference_short_desc %}

Os eventos de webhook são acionados com base na especificidade do domínio que você registra. Por exemplo, se você registrar um subdomínio (`https://subdomain.example.com`), apenas as URLs para o subdomínio irão ativar este evento. Se você registrar um domínio (`https://example.com`), as URLs para domínio e todos os subdomínios irão ativar este evento. Consulte "[Crie um anexo de conteúdo](/rest/reference/apps#create-a-content-attachment)" para criar um novo anexo de conteúdo.

### Disponibilidade

- {% data variables.product.prodname_github_apps %} com a permissão `content_references:write`

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.content_reference.created }}

{% endif %}
## create

{% data reusables.webhooks.create_short_desc %}

{% note %}

**Observação:** Você não receberá um webhook para este evento ao criar mais de três tags de uma só vez.

{% endnote %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `conteúdo`

### Objeto da carga do webhook

{% data reusables.webhooks.create_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.create }}

## delete

{% data reusables.webhooks.delete_short_desc %}

{% note %}

**Observação:** Você não receberá um webhook para este evento ao excluir mais de três tags de uma só vez.

{% endnote %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `conteúdo`

### Objeto da carga do webhook

{% data reusables.webhooks.delete_properties %}
{% data reusables.webhooks.pusher_type_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.delete }}

## deploy_key

{% data reusables.webhooks.deploy_key_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

{% data reusables.webhooks.deploy_key_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.deploy_key.created }}

## implantação

{% data reusables.webhooks.deployment_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `implantações`

### Objeto da carga do webhook

| Tecla         | Tipo     | Descrição                                                      |
| ------------- | -------- | -------------------------------------------------------------- |
| `Ação`        | `string` | A ação realizada. Pode ser `criado`.                           |
| `implantação` | `objeto` | A [implantação](/rest/reference/deployments#list-deployments). |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.deployment }}

## implantação_status

{% data reusables.webhooks.deployment_status_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `implantações`

### Objeto da carga do webhook

| Tecla                              | Tipo     | Descrição                                                                                        |
| ---------------------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| `Ação`                             | `string` | A ação realizada. Pode ser `criado`.                                                             |
| `implantação_status`               | `objeto` | O [status da implantação](/rest/reference/deployments#list-deployment-statuses).                 |
| `deployment_status["state"]`       | `string` | O novo estado. Pode ser `pendente`, `sucesso`, `falha` ou `erro`.                                |
| `deployment_status["target_url"]`  | `string` | O link opcional adicionado ao status.                                                            |
| `deployment_status["description"]` | `string` | A descrição opcional legível para pessoas adicionada ao status.                                  |
| `implantação`                      | `objeto` | A [implantação](/rest/reference/deployments#list-deployments) à qual este status está associado. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.deployment_status }}

{% ifversion fpt or ghec %}
## discussão

{% data reusables.webhooks.discussions-webhooks-beta %}

Atividade relacionada a uma discussão. Para obter mais informações, consulte "[Usar a API do GraphQL para discussões](/graphql/guides/using-the-graphql-api-for-discussions)".
### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `discussões`

### Objeto da carga do webhook

| Tecla  | Tipo     | Descrição                                                                                                                                                                                     |
| ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ação` | `string` | A ação realizada. Pode ser `created`, `edited`, `deleted`, `pinned`, `unpinned`, `locked`, `unlocked`, `transferred`, `category_changed`, `answered`, `unanswered`, `labeled` ou `unlabeled`. |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.discussion.created }}

## discussion_comment

{% data reusables.webhooks.discussions-webhooks-beta %}

Atividade relacionada a um comentário em uma discussão. Para obter mais informações, consulte "[Usar a API do GraphQL para discussões](/graphql/guides/using-the-graphql-api-for-discussions)".

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `discussões`

### Objeto da carga do webhook

| Tecla        | Tipo     | Descrição                                                                                                       |
| ------------ | -------- | --------------------------------------------------------------------------------------------------------------- |
| `Ação`       | `string` | A ação realizada. Pode ser `criado`, `editado` ou `excluído`.                                                   |
| `comentário` | `objeto` | O recurso [`comentário de discussão`](/graphql/guides/using-the-graphql-api-for-discussions#discussioncomment). |
{% data reusables.webhooks.discussion_desc %}
{% data reusables.webhooks.repo_desc_graphql %}
{% data reusables.webhooks.org_desc_graphql %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.discussion_comment.created }}
{% endif %}

{% ifversion ghes or ghae %}

## enterprise

{% data reusables.webhooks.enterprise_short_desc %}

### Disponibilidade

- Webhooks do GitHub Enterprise. Para mais informações, consulte "[Webhooks globais](/rest/reference/enterprise-admin#global-webhooks/)."

### Objeto da carga do webhook

| Tecla  | Tipo     | Descrição                                                                             |
| ------ | -------- | ------------------------------------------------------------------------------------- |
| `Ação` | `string` | A ação realizada. Pode ser `anonymous_access_enabled` ou `anonymous_access_disabled`. |

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.enterprise.anonymous_access_enabled }}

{% endif %}

## bifurcação

{% data reusables.webhooks.fork_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `conteúdo`

### Objeto da carga do webhook

{% data reusables.webhooks.fork_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.fork }}

## github_app_authorization

Este evento ocorre quando alguém revoga a autorização de um {% data variables.product.prodname_github_app %}. Um {% data variables.product.prodname_github_app %} recebe este webhook por padrão e não pode cancelar a assinatura deste evento.

{% data reusables.webhooks.authorization_event %} Para obter informações sobre solicitações de usuário para servidor, que exigem autorização do {% data variables.product.prodname_github_app %}, consulte "[Identificando e autorizando usuários para {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

### Disponibilidade

- {% data variables.product.prodname_github_apps %}

### Objeto da carga do webhook

| Tecla  | Tipo     | Descrição                              |
| ------ | -------- | -------------------------------------- |
| `Ação` | `string` | A ação realizada. Pode ser `revogada`. |
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.github_app_authorization.revoked }}

## gollum

{% data reusables.webhooks.gollum_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `conteúdo`

### Objeto da carga do webhook

{% data reusables.webhooks.gollum_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.gollum }}

## instalação

{% data reusables.webhooks.installation_short_desc %}

### Disponibilidade

- {% data variables.product.prodname_github_apps %}

### Objeto da carga do webhook

{% data reusables.webhooks.installation_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.installation.deleted }}

## installation_repositories

{% data reusables.webhooks.installation_repositories_short_desc %}

### Disponibilidade

- {% data variables.product.prodname_github_apps %}

### Objeto da carga do webhook

{% data reusables.webhooks.installation_repositories_properties %}
{% data reusables.webhooks.app_always_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.installation_repositories.added }}

## issue_comment

{% data reusables.webhooks.issue_comment_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `problemas`

### Objeto da carga do webhook

{% data reusables.webhooks.issue_comment_webhook_properties %}
{% data reusables.webhooks.issue_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.issue_comment.created }}

## Problemas

{% data reusables.webhooks.issues_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `problemas`

### Objeto da carga do webhook

{% data reusables.webhooks.issue_webhook_properties %}
{% data reusables.webhooks.issue_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook quando alguém editar um problema

{{ webhookPayloadsForCurrentVersion.issues.edited }}

## etiqueta

{% data reusables.webhooks.label_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `metadados`

### Objeto da carga do webhook

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

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.label.deleted }}

{% ifversion fpt or ghec %}
## marketplace_purchase

Atividade relacionada a uma compra do GitHub Marketplace. {% data reusables.webhooks.action_type_desc %} Para obter mais informações, consulte o "[GitHub Marketplace](/marketplace/)".

### Disponibilidade

- {% data variables.product.prodname_github_apps %}

### Objeto da carga do webhook

| Tecla  | Tipo     | Descrição                                                                                                                                         |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ação` | `string` | A ação realizada para um plano do [GitHub Marketplace](https://github.com/marketplace). Pode ser uma das ações a seguir:<ul><li>`comprado` - Alguém comprou um plano do GitHub Marketplace. A mudança deve entrar em vigor na conta imediatamente.</li><li>`pending_change` - Você receberá o evento `pending_change` quando alguém tiver feito o downgrade ou cancelado um plano do GitHub Marketplace para indicar que uma alteração ocorrerá na conta. O novo plano ou cancelamento entra em vigor no final do ciclo de cobrança.  O tipo de evento `cancelado` ou `alterado` será enviado quando o ciclo de cobrança terminar e o cancelamento ou o novo plano entrarem em vigor.</li><li>`pending_change_cancelled` - Alguém cancelou uma alteração pendente. Alterações pendentes incluem planos de cancelamento e downgrades que entrarão em vigor ao fim de um ciclo de cobrança. </li><li>`alterado` - Alguém fez o upgrade ou downgrade de um plano do GitHub Marketplace e a alteração entrará em vigor na conta imediatamente.</li><li>`cancelado` - Alguém cancelou um plano do GitHub Marketplace e o último ciclo de cobrança foi finalizado. A mudança deve entrar em vigor na conta imediatamente.</li></ul> |

Para obter uma descrição detalhada desta carga e da carga para cada tipo de `ação`, consulte [eventos do webhook de {% data variables.product.prodname_marketplace %} ](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

### Exemplo de carga de webhook quando alguém compra o plano

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

{% endif %}

## integrante

{% data reusables.webhooks.member_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `integrantes`

### Objeto da carga do webhook

{% data reusables.webhooks.member_webhook_properties %}
{% data reusables.webhooks.member_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.member.added }}

## filiação

{% data reusables.webhooks.membership_short_desc %}

### Disponibilidade

- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `integrantes`

### Objeto da carga do webhook

{% data reusables.webhooks.membership_properties %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.membership.removed }}

## meta

O webhook em que este evento está configurado em foi excluído. Este evento só ouvirá alterações no hook em que o evento está instalado. Portanto, deve ser selecionado para cada hook para o qual você gostaria de receber metaeventos.

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

| Tecla     | Tipo      | Descrição                                                                                                                                                        |
| --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ação`    | `string`  | A ação realizada. Pode ser `excluído`.                                                                                                                           |
| `hook_id` | `inteiro` | O ID do webhook modificado.                                                                                                                                      |
| `hook`    | `objeto`  | O webhook modificado. Isto irá conter chaves diferentes com base no tipo de webhook que é: repositório, organização, negócios, aplicativo ou GitHub Marketplace. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.meta.deleted }}

## marco

{% data reusables.webhooks.milestone_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pull_requests`

### Objeto da carga do webhook

{% data reusables.webhooks.milestone_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.milestone.created }}

## organização

{% data reusables.webhooks.organization_short_desc %}

### Disponibilidade

{% ifversion ghes or ghae %}
- Os webhooks do GitHub Enterprise recebem apenas eventos `criados` e `excluídos`. Para mais informações, consulte "[Webhooks globais](/rest/reference/enterprise-admin#global-webhooks/).{% endif %}
- Os webhooks da organização recebem apenas os eventos `excluídos`, `adicionados`, `removidos`, `renomeado` e `convidados`
- {% data variables.product.prodname_github_apps %} com a permissão `integrantes`

### Objeto da carga do webhook

| Tecla      | Tipo     | Descrição                                                                                                                                                                                   |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ação`     | `string` | A ação que foi executada. Pode ser um dos valores a seguir:{% ifversion ghes or ghae %} `criado`,{% endif %} `excluído`, `renomeado`, `member_added`, `member_removed` ou `member_invited`. |
| `convite`  | `objeto` | O convite para o usuário ou e-mail se a ação for `member_invited`.                                                                                                                          |
| `filiação` | `objeto` | A associação entre o usuário e a organização.  Ausente quando a ação é `member_invited`.                                                                                                    |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.organization.member_added }}

{% ifversion fpt or ghec %}

## org_block

{% data reusables.webhooks.org_block_short_desc %}

### Disponibilidade

- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `organization_administration`

### Objeto da carga do webhook

| Tecla          | Tipo     | Descrição                                                 |
| -------------- | -------- | --------------------------------------------------------- |
| `Ação`         | `string` | A ação realizada. Pode ser `bloqueado` ou `desbloqueado`. |
| `blocked_user` | `objeto` | Informações sobre o usuário bloqueado ou desbloqueado.    |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.org_block.blocked }}

{% endif %}

## pacote

Atividade relacionada a {% data variables.product.prodname_registry %}. {% data reusables.webhooks.action_type_desc %} Para obter mais informações, consulte "[Gerenciar pacotes com {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages)" para saber mais sobre {% data variables.product.prodname_registry %}.

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

{% data reusables.webhooks.package_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.package.published }}

## page_build

{% data reusables.webhooks.page_build_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pages`

### Objeto da carga do webhook

| Tecla   | Tipo      | Descrição                                                                               |
| ------- | --------- | --------------------------------------------------------------------------------------- |
| `id`    | `inteiro` | O identificador exclusivo da criação de páginas.                                        |
| `build` | `objeto`  | A [Listar as criações do GitHub Pages](/rest/reference/pages#list-github-pages-builds). |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.page_build }}

## ping

{% data reusables.webhooks.ping_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} recebe um evento de ping com um `app_id` usado para registrar o aplicativo

### Objeto da carga do webhook

| Tecla          | Tipo      | Descrição                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `zen`          | `string`  | String aleatória do Github zen.                                                                                                                                                                                                                                                                                                                                                                                         |
| `hook_id`      | `inteiro` | O ID do webhook que acionou o ping.                                                                                                                                                                                                                                                                                                                                                                                     |
| `hook`         | `objeto`  | A [configuração do webhook](/rest/reference/webhooks#get-a-repository-webhook).                                                                                                                                                                                                                                                                                                                                         |
| `hook[app_id]` | `inteiro` | Ao registrar um novo {% data variables.product.prodname_github_app %}, {% data variables.product.product_name %} envia um evento de ping para a **URL do webhook** que você especificou no registro. O evento contém o `app_id`, que é necessário para a [efetuar a autenticação](/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/) em um aplicativo. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.ping }}

## project

{% data reusables.webhooks.project_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `repository_projects` ou `organization_projects`

{% ifversion fpt or ghec %}
{% note %}

**Observação**: Este evento não ocorre para Projetos (beta).

{% endnote %}
{% endif %}

### Objeto da carga do webhook

{% data reusables.webhooks.project_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.project.created }}

{% ifversion fpt or ghes or ghec %}

## project_card

{% data reusables.webhooks.project_card_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `repository_projects` ou `organization_projects`

{% ifversion fpt or ghec %}
{% note %}

**Observação**: Este evento não ocorre para Projetos (beta).

{% endnote %}
{% endif %}

### Objeto da carga do webhook

{% data reusables.webhooks.project_card_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.project_card.created }}

## project_column

{% data reusables.webhooks.project_column_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `repository_projects` ou `organization_projects`

### Objeto da carga do webhook

{% data reusables.webhooks.project_column_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.project_column.created }}

{% ifversion project-beta-webhooks %}

## projects_v2_item

{% note %}

**Observação:** Os eventos de Webhook para Projetos (beta) estão atualmente no beta e sujeitos a alterações. Para compartilhar feedback sobre webhooks de projetos (beta) com {% data variables.product.product_name %}, veja os [Webhooks de projetos (beta) de feedback](https://github.com/github/feedback/discussions/17405).

{% endnote %}

Atividade relacionada aos itens em um projeto (beta) {% data reusables.webhooks.action_type_desc %} Para obter mais informações, consulte "[Sobre projetos (beta)](/issues/trying-out-the-new-projects-experience/about-projects).

### Disponibilidade

- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão de `organization_projects`

### Objeto da carga do webhook

| Tecla              | Tipo     | Descrição                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ação`             | `string` | A ação que foi executada no item do projeto. Pode ser: `archived`, `converted`, `created`, `edited`, `restored`, `deleted` ou `reordered`.                                                                                                                                                                                                                                                   |
| `projects_v2_item` | `objeto` | O item do projeto em si. Para encontrar mais informações sobre o item do projeto, você pode usar `node_id` (o ID do nó do item do projeto) e `project_node_id` (o ID do nó do projeto) para consultar informações na API do GraphQL. For more information, see "[Using the API to manage projects (beta)](/issues/trying-out-the-new-projects-experience/using-the-api-to-manage-projects)." |
| `alterações`       | `objeto` | As alterações no item do projeto.                                                                                                                                                                                                                                                                                                                                                            |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.projects_v2_item.created }}

{% endif %}

## público

{% data reusables.webhooks.public_short_desc %}
### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `metadados`

### Objeto da carga do webhook

| Tecla | Tipo | Descrição |
| ----- | ---- | --------- |
|       |      |           |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.public }}
{% endif %}
## pull_request

{% data reusables.webhooks.pull_request_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pull_requests`

### Objeto da carga do webhook

{% data reusables.webhooks.pull_request_webhook_properties %}
{% data reusables.webhooks.pull_request_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

As entregas para eventos `review_requested` e `review_request_removed` terão um campo adicional denominado `requested_reviewer`.

{{ webhookPayloadsForCurrentVersion.pull_request.opened }}

## pull_request_review

{% data reusables.webhooks.pull_request_review_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pull_requests`

### Objeto da carga do webhook

{% data reusables.webhooks.pull_request_review_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review.submitted }}

## pull_request_review_comment

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pull_requests`

### Objeto da carga do webhook

{% data reusables.webhooks.pull_request_review_comment_webhook_properties %}
{% data reusables.webhooks.pull_request_review_comment_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review_comment.created }}

## pull_request_review_thread

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pull_requests`

### Objeto da carga do webhook

{% data reusables.webhooks.pull_request_thread_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review_thread.resolved }}

## push

{% data reusables.webhooks.push_short_desc %}

{% note %}

**Observação:** Você não receberá um webhook para este evento ao fazer push de mais de três tags de uma vez.

{% endnote %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `conteúdo`

### Objeto da carga do webhook

| Tecla                      | Tipo      | Descrição                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`                      | `string`  | O [`git ref completo`](/rest/reference/git#refs) que foi empurrado. Exemplo: `refs/heads/main` ou `refs/tags/v3.14.1`.                                                                                                                                                                                                    |
| `antes`                    | `string`  | O SHA do último commit em `ref` antes do push.                                                                                                                                                                                                                                                                            |
| `depois`                   | `string`  | O SHA do último commit no `ref` após o push.                                                                                                                                                                                                                                                                              |
| `created`                  | `boolean` | Se este push criou o `ref`.                                                                                                                                                                                                                                                                                               |
| `deleted`                  | `boolean` | Se este push excluiu o `ref`.                                                                                                                                                                                                                                                                                             |
| `forced`                   | `boolean` | Se este push foi um push forçado do `ref`.                                                                                                                                                                                                                                                                                |
| `head_commit`              | `objeto`  | Para pushes em que `after` é ou aponta para um objeto de commit, uma representação expandida desse commit. Para pushes em que `after` refere-se a um objeto de tag anotada, uma representação expandida do commit apontada pela tag anotada.                                                                              |
| `compare`                  | `string`  | A URL que mostra as alterações na atualização deste `ref`, do commit `before` para o commit `after`. Para um `ref` recém-criado que é diretamente baseado no branch padrão, esta é a comparação entre o cabeçalho do branch padrão e o commit `after`. Caso contrário, isso mostra todos os commits até o commit `after`. |
| `commits`                  | `array`   | Um array de objetos de commit, que descreve os commits carregados. (Os commits que sofreram push são todos commits incluídos no `compare` entre o commit `before` e o commit `after`.)                                                                                                                                    |
| `commits[][id]`            | `string`  | O SHA do commit.                                                                                                                                                                                                                                                                                                          |
| `commits[][timestamp]`     | `string`  | O carimbo de tempo ISO 8601 do commit.                                                                                                                                                                                                                                                                                    |
| `commits[][message]`       | `string`  | A mensagem do commit.                                                                                                                                                                                                                                                                                                     |
| `commits[][author]`        | `objeto`  | O autor do git do commit.                                                                                                                                                                                                                                                                                                 |
| `commits[][author][name]`  | `string`  | O nome do autor do git.                                                                                                                                                                                                                                                                                                   |
| `commits[][author][email]` | `string`  | O endereço de e-mail do autor do git.                                                                                                                                                                                                                                                                                     |
| `commits[][url]`           | `url`     | URL que aponta para o recurso de commit de API.                                                                                                                                                                                                                                                                           |
| `commits[][distinct]`      | `boolean` | Se este compromisso é diferente de qualquer outro que tenha sido carregado anteriormente.                                                                                                                                                                                                                                 |
| `commits[][added]`         | `array`   | Um array de arquivos adicionados no commit.                                                                                                                                                                                                                                                                               |
| `commits[][modified]`      | `array`   | Um array de arquivos modificados pelo commit.                                                                                                                                                                                                                                                                             |
| `commits[][removed]`       | `array`   | Um array de arquivos removidos no commit.                                                                                                                                                                                                                                                                                 |
| `pusher`                   | `objeto`  | O usuário que fez o push dos commits.                                                                                                                                                                                                                                                                                     |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.push }}

## versão

{% data reusables.webhooks.release_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `conteúdo`

### Objeto da carga do webhook

{% data reusables.webhooks.release_webhook_properties %}
{% data reusables.webhooks.release_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.release.published }}

## repository_dispatch

Este evento ocorre quando um {% data variables.product.prodname_github_app %} envia uma solicitação de `POST` para o "[Crie um evento de envio de repositório](/rest/reference/repos#create-a-repository-dispatch-event)" endpoint.

### Disponibilidade

- {% data variables.product.prodname_github_apps %} deve ter a permissão do conteúdo `` para receber este webhook.

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.repository_dispatch }}

## repositório

{% data reusables.webhooks.repository_short_desc %}

### Disponibilidade

- Os webhooks do repositório recebem todos os tipos de eventos, exceto `excluído`
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão de `metadados`, recebe todos os tipos de eventos, exceto `excluídos`

### Objeto da carga do webhook

| Tecla  | Tipo     | Descrição                                                                          |
| ------ | -------- | ---------------------------------------------------------------------------------- |
| `Ação` | `string` | A ação que foi executada. Este pode ser um dos seguintes:<ul><li>`created` - Um repositório foi criado.</li><li>`deleted` - Um repositório foi excluído.</li><li>`archived` - Um repositório está arquivado.</li><li>`unarchived` - Um repositório não está arquivado.</li>{% ifversion ghes or ghae %}<li>`anonymous_access_enabled` - Um repositório está [habilitado para acesso anônimo ao Git](/admin/policies/enforcing-policies-for-your-enterpris/enforcing-repository-management-policies-in-your-enterprise), `anonymous_access_disabled` - Um repositório está [desabilitado para acesso anônimo ao Git](/admin/policies/enforcing-policies-for-your-enterpris/enforcing-repository-management-polices-in-your-enterprise)</li>{% endif %}<li>`edited` - As informações de um repositório são editadas.</li><li>`renamed` - Um repositório é renomeado.</li><li>`transferred` - Um repositório é transferido.</li><li>`publicized` - Um repositório é publicado.</li><li> `privatizado` - Um repositório é privatizado.</li></ul> |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.repository.publicized }}

{% ifversion fpt or ghec %}
## repository_import

{% data reusables.webhooks.repository_import_short_desc %} Para receber este evento para um repositório pessoal, você deve criar um repositório vazio antes da importação. Este evento pode ser acionado usando o [Importador do GitHub](/articles/importing-a-repository-with-github-importer/) ou a API [Api de Importação de Fonte](/rest/reference/migrations#source-imports).

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

{% data reusables.webhooks.repository_import_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.repository_import }}

## repository_vulnerability_alert

{% data reusables.webhooks.repository_vulnerability_alert_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

{% data reusables.webhooks.repository_vulnerability_alert_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.repository_vulnerability_alert.create }}

{% endif %}

{% ifversion ghes or ghec %}

## secret_scanning_alert

{% data reusables.webhooks.secret_scanning_alert_event_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `secret_scanning_alerts:read`

### Objeto da carga do webhook

{% data reusables.webhooks.secret_scanning_alert_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
`sender` | `object` | Se a `action` is `resolved` ou `reopened`, o objeto de `sender` será o usuário que acionou o evento. O objeto `remetente` está vazio para todas as outras ações.

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert.reopened }}
{% endif %}

{% ifversion ghes > 3.4 or ghec or ghae-issue-6581 %}
## secret_scanning_alert_location

{% data reusables.webhooks.secret_scanning_alert_location_event_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `secret_scanning_alerts:read`

### Objeto da carga do webhook

{% data reusables.webhooks.secret_scanning_alert_location_event_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert_location.created }}
{% endif %}

{% ifversion fpt or ghes or ghec %}
## security_advisory

Atividade relacionada a uma consultoria de segurança que foi revisada por {% data variables.product.company_short %}. Uma consultoria de segurança revisada por {% data variables.product.company_short %} fornece informações sobre vulnerabilidades relacionadas à segurança no software em {% data variables.product.prodname_dotcom %}.

O conjunto de dados consultivos de segurança também alimentam o GitHub {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/)".

### Disponibilidade

- {% data variables.product.prodname_github_apps %} com a permissão `security_events`

### Objeto da carga do webhook

| Tecla               | Tipo     | Descrição                                                                                                                 |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `Ação`              | `string` | A ação que foi executada. A ação pode ser `published`, `updated`, `performed` ou `withdrawn` para todos os novos eventos. |
| `security_advisory` | `objeto` | As informações da consultoria de segurança, incluindo resumo, descrição e gravidade.                                      |

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.security_advisory.published }}

{% endif %}

{% ifversion ghas-enablement-webhook %}

## security_and_analysis

Atividade relacionada à habilitação ou desabilitação de recursos de segurança e análise de código para um repositório ou organização.

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com pelo menos acesso `somente leitura` na administração de repositórios

### Objeto da carga do webhook

| Tecla        | Tipo     | Descrição                                                                            |
| ------------ | -------- | ------------------------------------------------------------------------------------ |
| `alterações` | `objeto` | As alterações que foram feitas nas funcionalidades de segurança e análise do código. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.security_and_analysis }}

{% endif %}

{% ifversion fpt or ghec %}
## patrocínio

{% data reusables.webhooks.sponsorship_short_desc %}

Você só pode criar um webhook de patrocínio em {% data variables.product.prodname_dotcom %}. Para obter mais informações, consulte "[Configurar webhooks para eventos na sua conta patrocinada](/sponsors/integrating-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)".

### Disponibilidade

- Contas patrocinadas

### Objeto da carga do webhook

{% data reusables.webhooks.sponsorship_webhook_properties %}
{% data reusables.webhooks.sponsorship_properties %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook quando alguém cria um patrocínio

{{ webhookPayloadsForCurrentVersion.sponsorship.created }}

### Exemplo de carga de webhook quando alguém faz o downgrade de um patrocínio

{{ webhookPayloadsForCurrentVersion.sponsorship.downgraded }}

{% endif %}

## estrela

{% data reusables.webhooks.star_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

{% data reusables.webhooks.star_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.star.created }}

## status

{% data reusables.webhooks.status_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `status`

### Objeto da carga do webhook

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

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.status }}

## equipe

{% data reusables.webhooks.team_short_desc %}

### Disponibilidade

- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `integrantes`

### Objeto da carga do webhook

| Tecla                                           | Tipo      | Descrição                                                                                                                                                                                                                                             |
| ----------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Ação`                                          | `string`  | A ação que foi executada. Pode ser `criado`, `excluído`, `editados`, `added_to_repository`, ou `removed_from_repository`.                                                                                                                             |
| `equipe`                                        | `objeto`  | A própria equipe.                                                                                                                                                                                                                                     |
| `alterações`                                    | `objeto`  | As alterações para a equipe se a ação foi `editada`.                                                                                                                                                                                                  |
| `changes[description][from]`                    | `string`  | A versão anterior da descrição se a ação foi `editada`.                                                                                                                                                                                               |
| `changes[name][from]`                           | `string`  | A versão anterior do nome se a ação foi `editada`.                                                                                                                                                                                                    |
| `changes[privacy][from]`                        | `string`  | A versão anterior da equipe de privacidade se a ação foi `editada`.                                                                                                                                                                                   |
| `changes[repository][permissions][from][admin]` | `boolean` | A versão anterior da permissão `admin` do integrante da equipe no repositório, se a ação foi `editada`.                                                                                                                                               |
| `changes[repository][permissions][from][pull]`  | `boolean` | A versão anterior da permissão `pull` do integrante da equipe em um repositório, se a ação foi `editada`.                                                                                                                                             |
| `changes[repository][permissions][from][push]`  | `boolean` | A versão anterior da permissão `push` do integrante da equipe no repositório, se a ação foi `editada`.                                                                                                                                                |
| `repositório`                                   | `objeto`  | O repositório adicionado ou removido à função da equipe se a ação foi `added_to_repository`, `removed_from_repository`, ou `editada`. Para ações `editadas`, o `repositório` também contém os novos níveis de permissão da equipe para o repositório. |
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.team.added_to_repository }}

## team_add

{% data reusables.webhooks.team_add_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `integrantes`

### Objeto da carga do webhook

| Tecla    | Tipo     | Descrição                                                                                                                       |
| -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `equipe` | `objeto` | A [equipe](/rest/reference/teams) que foi modificada.  **Observação:** Os eventos mais antigos podem não incluir isso na carga. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.team_add }}

{% ifversion ghes or ghae %}

## usuário

Quando um usuário é `criado` ou `excluído`.

### Disponibilidade
- Webhooks do GitHub Enterprise. Para mais informações, consulte "[Webhooks globais](/rest/reference/enterprise-admin#global-webhooks/)."

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.user.created }}

{% endif %}

## inspecionar

{% data reusables.webhooks.watch_short_desc %}

O ator do evento é o [usuário](/rest/reference/users) que favoritou um repositório, e o repositório do evento é [repositório](/rest/reference/repos) que foi marcado com estrela.

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `metadados`

### Objeto da carga do webhook

{% data reusables.webhooks.watch_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.app_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.watch.started }}

{% ifversion fpt or ghes or ghec %}
## workflow_dispatch

Esse evento ocorre quando alguém aciona a execução de um fluxo de trabalho no GitHub ou envia uma solicitação de `POST` para o ponto de extremidade "[Criar um evento de envio de fluxo de trabalho](/rest/reference/actions/#create-a-workflow-dispatch-event)". Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

### Disponibilidade

- {% data variables.product.prodname_github_apps %} deve ter a permissão do conteúdo `` para receber este webhook.

### Objeto da carga do webhook

| Tecla    | Tipo     | Descrição                                                                                                                           |
| -------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `inputs` | `objeto` | Entradas para o fluxo de trabalho. Cada chave representa o nome do valor de entrada e o seu valor representa o valor dessa entrada. |
{% data reusables.webhooks.org_desc %}
| `ref` | `string` | O ref do branch a partir do qual o fluxo de trabalho foi executado. |
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.sender_desc %}
| `workflow` | `string` | Caminho relativo para o arquivo do fluxo de trabalho, que contém o fluxo de trabalho. |

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.workflow_dispatch }}
{% endif %}

{% ifversion fpt or ghes > 3.2 or ghec or ghae %}

## workflow_job

{% data reusables.webhooks.workflow_job_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Webhooks corporativos

### Objeto da carga do webhook

{% data reusables.webhooks.workflow_job_properties %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.workflow_job }}

{% endif %}
{% ifversion fpt or ghes or ghec %}
## workflow_run

Quando uma execução do fluxo de trabalho de {% data variables.product.prodname_actions %} for solicitada ou concluída. Para obter mais informações, consulte "[Eventos que acionam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#workflow_run)".

### Disponibilidade

- {% data variables.product.prodname_github_apps %} com as permissões `ações` ou `conteúdos`.

### Objeto da carga do webhook

{% data reusables.webhooks.workflow_run_properties %}
{% data reusables.webhooks.workflow_desc %}
{% data reusables.webhooks.org_desc %}
{% data reusables.webhooks.repo_desc %}
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.workflow_run }}
{% endif %}
