---
title: Eventos e cargas de webhook
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
shortTitle: Webhook events & payloads
ms.openlocfilehash: 38dfa09525a7c3cc914bc2cf130126ed9969e190
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147541979'
---
{% data reusables.webhooks.webhooks_intro %}

Você pode criar webhooks que assinam os eventos listados nesta página. Cada evento de webhook inclui uma descrição das propriedades do webhook e uma carga de exemplo. Para obter mais informações, confira "[Como criar webhooks](/webhooks/creating/)".

## Propriedades comuns do objeto da carga do webhook

Cada carga do evento do webhook também contém propriedades únicas para o evento. Você pode encontrar as propriedades únicas nas seções individuais de tipos de evento.

Chave | Tipo | Descrição
----|------|-------------
`action` | `string` | A maior parte da carga do webhook contém uma propriedade `action` que inclui a atividade específica que disparou o evento.
{% data reusables.webhooks.sender_desc %} Esta propriedade está incluída em todas as cargas do webhook.
{% data reusables.webhooks.repo_desc %} A carga do webhook contêm a propriedade `repository` quando o evento ocorre com base na atividade de um repositório.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} Para obter mais informações, confira "[Como criar um {% data variables.product.prodname_github_app %}](/apps/building-github-apps/)".

As propriedades exclusivas de um evento de webhook são as mesmas propriedades que você encontrará na propriedade `payload` ao usar a [API de Eventos](/rest/reference/activity#events). Uma exceção disso é o [ evento `push`](#push). As propriedades exclusivas da carga do webhook de evento `push` e da propriedade `payload`na API de Eventos são diferentes. A carga do webhook contém informações mais detalhadas.

{% tip %}

**Observação:** a carga é limitada a 25 MB. Se o seu evento gerar uma carga maior, um webhook não será disparado. Isso pode acontecer, por exemplo, em um evento `create`, caso muitos branches ou muitas marcas sejam enviados por push de uma só vez. Sugerimos monitorar o tamanho da sua carga para garantir a entrega.

{% endtip %}

### Cabeçalhos de entrega

As cargas de HTTP POST que são entregues no ponto de extremidade da URL configurado do seu webhook conterão vários cabeçalhos especiais:

parâmetro | Descrição
-------|-------------|
`X-GitHub-Event`| Nome do evento que ativou a entrega.
`X-GitHub-Delivery`| Um [GUID](http://en.wikipedia.org/wiki/Globally_unique_identifier) para identificar a entrega.{% ifversion ghes or ghae %}
`X-GitHub-Enterprise-Version` | A versão da instância do {% data variables.product.prodname_ghe_server %} que enviou a carga do HTTP POST.
`X-GitHub-Enterprise-Host` | O nome do host da instância do {% data variables.product.prodname_ghe_server %} que enviou o conteúdo HTTP POST.{% endif %}{% ifversion not ghae %}
`X-Hub-Signature`| Esse cabeçalho será enviado se o webhook estiver configurado com um [`secret`](/rest/reference/repos#create-hook-config-params). Este é o resumo hexadecimal HMAC do corpo da solicitação, e é gerado por meio da função hash SHA-1 e do `secret` como a `key` do HMAC.{% ifversion fpt or ghes or ghec %} `X-Hub-Signature` é fornecido para compatibilidade com as integrações existentes, e recomendamos que você use o `X-Hub-Signature-256` mais seguro.{% endif %}{% endif %}
`X-Hub-Signature-256`| Esse cabeçalho será enviado se o webhook estiver configurado com um [`secret`](/rest/reference/repos#create-hook-config-params). Este é o resumo hexadecimal HMAC do corpo da solicitação, e é gerado por meio da função hash SHA-256 e do `secret` como a `key` do HMAC.

Além disso, o `User-Agent` para as solicitações terão o prefixo `GitHub-Hookshot/`.

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

{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
## branch_protection_rule

Atividade relacionada a uma regra de proteção do branch. Para obter mais informações, confira "[Sobre as regras de proteção do branch](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-rules)".

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com, pelo menos, acesso `read-only` na administração de repositórios

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação executada. Pode ser `created`, `edited` ou `deleted`.
`rule` | `object` | A regra de proteção do branch. Inclui um `name` e todas as [configurações de proteção do branch](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches#about-branch-protection-settings) aplicadas aos branches que correspondem ao nome. As configurações binárias são booleanas. As configurações de vários níveis são de `off`, `non_admins` ou `everyone`. As listas do criador e da criação são matrizes de strings.
`changes` | `object` | Se a ação foi `edited`, as alterações na regra.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.branch_protection_rule.edited }} {% endif %}

{% ifversion ghes > 3.3 %}
## cache_sync

Um ref do Git foi sincronizado com sucesso para uma réplica de cache. Para obter mais informações, confira "[Sobre o cache do repositório](/admin/enterprise-management/caching-repositories/about-repository-caching)".

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`cache_location` |`string` | A localização do servidor de cache que foi atualizado.
`ref` | `string` | A ref que foi atualizada.
`before` | `string` | O OID da ref na réplica do cache antes de ser atualizado.
`after` | `string` | O OID do ref na réplica do cache após a atualização.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.cache_sync.synced }} {% endif %}

## check_run

{% data reusables.webhooks.check_run_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### Disponibilidade

- Os webhooks do repositório só recebem carga para os tipos de eventos `created` e `completed` em um repositório
- Os webhooks da organização só recebem carga para os tipos de eventos `created` e `completed` nos repositórios
- Os {% data variables.product.prodname_github_apps %} com a permissão `checks:read` recebem a carga dos eventos `created` e `completed` que ocorrem no repositório em que o aplicativo está instalado. O aplicativo precisa ter a permissão `checks:write` para receber os tipos de eventos `rerequested` e `requested_action`. A carga dos tipos de eventos `rerequested` e `requested_action` só são enviadas para o {% data variables.product.prodname_github_app %} que está sendo solicitado. Os {% data variables.product.prodname_github_apps %} com `checks:write` são automaticamente inscritos nesse evento de webhook.

### Objeto da carga do webhook

{% data reusables.webhooks.check_run_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.check_run.created }}

## check_suite

{% data reusables.webhooks.check_suite_short_desc %}

{% data reusables.apps.undetected-pushes-to-a-forked-repository-for-check-suites %}

### Disponibilidade

- Os webhooks do repositório só recebem carga para os tipos de eventos `completed` em um repositório
- Os webhooks da organização só recebem carga para os tipos de eventos `completed` nos repositórios
- Os {% data variables.product.prodname_github_apps %} com a permissão `checks:read` recebem a carga dos eventos `created` e `completed` que ocorrem no repositório em que o aplicativo está instalado. O aplicativo precisa ter a permissão `checks:write` para receber os tipos de eventos `requested` e `rerequested`. A carga dos tipos de eventos `requested` e `rerequested` só são enviadas para o {% data variables.product.prodname_github_app %} que está sendo solicitado. Os {% data variables.product.prodname_github_apps %} com `checks:write` são automaticamente inscritos nesse evento de webhook.

### Objeto da carga do webhook

{% data reusables.webhooks.check_suite_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.check_suite.completed }}

## code_scanning_alert

{% data reusables.webhooks.code_scanning_alert_event_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `security_events :read`

### Objeto da carga do webhook

{% data reusables.webhooks.code_scanning_alert_event_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} `sender` | `object` | Se a `action` for `reopened_by_user` ou `closed_by_user`, o objeto `sender` será o usuário que disparou o evento. O objeto `sender` é {% ifversion fpt or ghec %}`github`{% elsif ghes or ghae %}`github-enterprise`{% else %}vazio{% endif %} para todas as outras ações.

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.code_scanning_alert.reopened }}

## commit_comment

{% data reusables.webhooks.commit_comment_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `contents`

### Objeto da carga do webhook

{% data reusables.webhooks.commit_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.commit_comment.created }}

{% ifversion ghes < 3.4 %}
## content_reference

{% data reusables.webhooks.content_reference_short_desc %}

Os eventos de webhook são acionados com base na especificidade do domínio que você registra. Por exemplo, se você registrar um subdomínio (`https://subdomain.example.com`), somente as URLs do subdomínio vão disparar esse evento. Se você registrar um domínio (`https://example.com`), as URLs do domínio e todos os subdomínios vão disparar esse evento. Confira "[Criar um anexo de conteúdo](/rest/reference/apps#create-a-content-attachment)" para criar um anexo de conteúdo.

### Disponibilidade

- {% data variables.product.prodname_github_apps %} com a permissão `content_references:write`

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.content_reference.created }}

{% endif %}
## create

{% data reusables.webhooks.create_short_desc %}

{% note %}

**Observação:** você não receberá um webhook para este evento ao criar mais de três marcas de uma só vez.

{% endnote %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `contents`

### Objeto da carga do webhook

{% data reusables.webhooks.create_properties %} {% data reusables.webhooks.pusher_type_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.create }}

## excluir

{% data reusables.webhooks.delete_short_desc %}

{% note %}

**Observação:** você não receberá um webhook para este evento ao excluir mais de três marcas de uma só vez.

{% endnote %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `contents`

### Objeto da carga do webhook

{% data reusables.webhooks.delete_properties %} {% data reusables.webhooks.pusher_type_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.delete }}

## deploy_key

{% data reusables.webhooks.deploy_key_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

{% data reusables.webhooks.deploy_key_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.deploy_key.created }}

## implantação

{% data reusables.webhooks.deployment_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `deployments`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação executada. Pode ser `created`.
`deployment` |`object` | A [Implantação](/rest/reference/deployments#list-deployments).
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.deployment }}

## implantação_status

{% data reusables.webhooks.deployment_status_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `deployments`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação executada. Pode ser `created`.
`deployment_status` |`object` | O [status da implantação](/rest/reference/deployments#list-deployment-statuses).
`deployment_status["state"]` |`string` | O novo estado. Pode ser `pending`, `success`, `failure` ou `error`.
`deployment_status["target_url"]` |`string` | O link opcional adicionado ao status.
`deployment_status["description"]`|`string` | A descrição opcional legível para pessoas adicionada ao status.
`deployment` |`object` | A [implantação](/rest/reference/deployments#list-deployments) à qual esse status está associado.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.deployment_status }}

{% ifversion fpt or ghec %}
## discussão

{% data reusables.webhooks.discussions-webhooks-beta %}

Atividade relacionada a uma discussão. Para obter mais informações, confira "[Como usar a API do GraphQL para discussões](/graphql/guides/using-the-graphql-api-for-discussions)".
### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `discussions`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação executada. Pode ser `created`, `edited`, `deleted`, `pinned`, `unpinned`, `locked`, `unlocked`, `transferred`, `category_changed`, `answered`, `unanswered`, `labeled` ou `unlabeled`.
{% data reusables.webhooks.discussion_desc %} {% data reusables.webhooks.repo_desc_graphql %} {% data reusables.webhooks.org_desc_graphql %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.discussion.created }}

## discussion_comment

{% data reusables.webhooks.discussions-webhooks-beta %}

Atividade relacionada a um comentário em uma discussão. Para obter mais informações, confira "[Como usar a API do GraphQL para discussões](/graphql/guides/using-the-graphql-api-for-discussions)".

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `discussions`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação executada. Pode ser `created`, `edited` ou `deleted`.
`comment` | `object` | O recurso [`discussion comment`](/graphql/guides/using-the-graphql-api-for-discussions#discussioncomment).
{% data reusables.webhooks.discussion_desc %} {% data reusables.webhooks.repo_desc_graphql %} {% data reusables.webhooks.org_desc_graphql %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.discussion_comment.created }} {% endif %}

{% ifversion ghes or ghae %}

## corporativo

{% data reusables.webhooks.enterprise_short_desc %}

### Disponibilidade

- Webhooks do GitHub Enterprise. Para obter mais informações, confira "[Webhooks globais](/rest/reference/enterprise-admin#global-webhooks/)".

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação executada. Pode ser `anonymous_access_enabled` ou `anonymous_access_disabled`.

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.enterprise.anonymous_access_enabled }}

{% endif %}

## fork

{% data reusables.webhooks.fork_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `contents`

### Objeto da carga do webhook

{% data reusables.webhooks.fork_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.fork }}

## github_app_authorization

Este evento ocorre quando alguém revoga a autorização de um {% data variables.product.prodname_github_app %}. Um {% data variables.product.prodname_github_app %} recebe este webhook por padrão e não pode cancelar a assinatura deste evento.

{% data reusables.webhooks.authorization_event %} Para obter informações sobre as solicitações de usuário para servidor, que exigem a autorização do {% data variables.product.prodname_github_app %}, confira "[Como identificar e autorizar usuários nos {% data variables.product.prodname_github_apps %}](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

### Disponibilidade

- {% data variables.product.prodname_github_apps %}

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação executada. Pode ser `revoked`.
{% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.github_app_authorization.revoked }}

## gollum

{% data reusables.webhooks.gollum_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `contents`

### Objeto da carga do webhook

{% data reusables.webhooks.gollum_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.gollum }}

## instalação

{% data reusables.webhooks.installation_short_desc %}

### Disponibilidade

- {% data variables.product.prodname_github_apps %}

### Objeto da carga do webhook

{% data reusables.webhooks.installation_properties %} {% data reusables.webhooks.app_always_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.installation.deleted }}

## installation_repositories

{% data reusables.webhooks.installation_repositories_short_desc %}

### Disponibilidade

- {% data variables.product.prodname_github_apps %}

### Objeto da carga do webhook

{% data reusables.webhooks.installation_repositories_properties %} {% data reusables.webhooks.app_always_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.installation_repositories.added }}

## issue_comment

{% data reusables.webhooks.issue_comment_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `issues`

### Objeto da carga do webhook

{% data reusables.webhooks.issue_comment_webhook_properties %} {% data reusables.webhooks.issue_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.issue_comment.created }}

## issues

{% data reusables.webhooks.issues_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `issues`

### Objeto da carga do webhook

{% data reusables.webhooks.issue_webhook_properties %} {% data reusables.webhooks.issue_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook quando alguém editar um problema

{{ webhookPayloadsForCurrentVersion.issues.edited }}

## label

{% data reusables.webhooks.label_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `metadata`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A ação que foi executada. Pode ser `created`, `edited` ou `deleted`.
`label`|`object` | A etiqueta que foi adicionada.
`changes`|`object`| As alterações no rótulo se a ação foi `edited`.
`changes[name][from]`|`string` | A versão anterior do nome se a ação foi `edited`.
`changes[color][from]`|`string` | A versão anterior da cor se a ação foi `edited`.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.label.deleted }}

{% ifversion fpt or ghec %}
## marketplace_purchase

Atividade relacionada a uma compra do GitHub Marketplace. {% data reusables.webhooks.action_type_desc %} Para obter mais informações, confira o "[GitHub Marketplace](/marketplace/)".

### Disponibilidade

- {% data variables.product.prodname_github_apps %}

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` | `string` | A ação executada para um plano do [GitHub Marketplace](https://github.com/marketplace). Pode ser uma das ações a seguir:<ul><li>`purchased` – Alguém comprou um plano do GitHub Marketplace. A mudança deve entrar em vigor na conta imediatamente.</li><li>`pending_change` – Você receberá o evento `pending_change` quando alguém tiver feito o downgrade de um plano do GitHub Marketplace ou cancelado esse plano para indicar que uma alteração ocorrerá na conta. O novo plano ou cancelamento entra em vigor no final do ciclo de cobrança.  O tipo de evento `cancelled` ou `changed` será enviado quando o período de cobrança terminar e o cancelamento ou o novo plano entrar em vigor.</li><li>`pending_change_cancelled` – Alguém cancelou uma alteração pendente. Alterações pendentes incluem planos de cancelamento e downgrades que entrarão em vigor ao fim de um ciclo de cobrança. </li><li>`changed` – Alguém fez o upgrade ou o downgrade de um plano do GitHub Marketplace, e a alteração entrará em vigor na conta imediatamente.</li><li>`cancelled` – Alguém cancelou um plano do GitHub Marketplace, e o último período de cobrança foi encerrado. A mudança deve entrar em vigor na conta imediatamente.</li></ul>

Para obter uma descrição detalhada dessa carga e da carga de cada tipo de `action`, confira [Eventos de webhook do {% data variables.product.prodname_marketplace %}](/marketplace/integrating-with-the-github-marketplace-api/github-marketplace-webhook-events/).

### Exemplo de carga de webhook quando alguém compra o plano

{{ webhookPayloadsForCurrentVersion.marketplace_purchase.purchased }}

{% endif %}

## member

{% data reusables.webhooks.member_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `members`

### Objeto da carga do webhook

{% data reusables.webhooks.member_webhook_properties %} {% data reusables.webhooks.member_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.member.added }}

## filiação

{% data reusables.webhooks.membership_short_desc %}

### Disponibilidade

- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `members`

### Objeto da carga do webhook

{% data reusables.webhooks.membership_properties %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.membership.removed }}

{% ifversion fpt or ghec %}

## merge_group

{% data reusables.pull_requests.merge-queue-beta %}

Atividade relacionada a grupos de mesclagem em uma fila de mesclagem. O tipo de atividade é especificado na propriedade ação do objeto da carga.


### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `merge_queues`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A ação que foi executada. Atualmente, só pode ser `checks_requested`.
`merge_group`|`object` | O grupo de mesclagem.
`merge_group[head_sha]`|`string` | O SHA do grupo de mesclagem.
`merge_group[head_ref]`|`string` | A referência completa do grupo de mesclagem.
`merge_group[base_ref]`|`string` | A referência completa do branch no qual o grupo de mesclagem será mesclado.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.merge_group.checks_requested }}

{% endif %}

## meta

O webhook em que este evento está configurado em foi excluído. Este evento só ouvirá alterações no hook em que o evento está instalado. Portanto, deve ser selecionado para cada hook para o qual você gostaria de receber metaeventos.

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação executada. Pode ser `deleted`.
`hook_id`  |`integer` | O ID do webhook modificado.
`hook` |`object` | O webhook modificado. Isto irá conter chaves diferentes com base no tipo de webhook que é: repositório, organização, negócios, aplicativo ou GitHub Marketplace.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.meta.deleted }}

## milestone

{% data reusables.webhooks.milestone_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pull_requests`

### Objeto da carga do webhook

{% data reusables.webhooks.milestone_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.milestone.created }}

## organization

{% data reusables.webhooks.organization_short_desc %}

### Disponibilidade

{% ifversion ghes or ghae %}
- Os webhooks do GitHub Enterprise só recebem os eventos `created` e `deleted`. Para obter mais informações, "[Webhooks globais](/rest/reference/enterprise-admin#global-webhooks/).{% endif %}
- Os webhooks da organização só recebem os eventos `deleted`, `added`, `removed`, `renamed` e `invited`
- {% data variables.product.prodname_github_apps %} com a permissão `members`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação que foi executada. Pode ser:{% ifversion ghes or ghae %} `created`,{% endif %} `deleted`, `renamed`, `member_added`, `member_removed` ou `member_invited`.
`invitation` |`object` | O convite para o usuário ou email se a ação é `member_invited`.
`membership`  |`object` | A associação entre o usuário e a organização.  Não está presente quando a ação é `member_invited`.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.organization.member_added }}

{% ifversion fpt or ghec %}

## org_block

{% data reusables.webhooks.org_block_short_desc %}

### Disponibilidade

- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `organization_administration`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|------------
`action` | `string` | A ação executada. Pode ser `blocked` ou `unblocked`.
`blocked_user` | `object` | Informações sobre o usuário bloqueado ou desbloqueado.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.org_block.blocked }}

{% endif %}

## pacote

Atividade relacionada a {% data variables.product.prodname_registry %}. {% data reusables.webhooks.action_type_desc %} Para obter mais informações, confira "[Como gerenciar pacotes com o {% data variables.product.prodname_registry %}](/github/managing-packages-with-github-packages)" para saber mais sobre o {% data variables.product.prodname_registry %}.

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

{% data reusables.webhooks.package_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.package.published }}

## page_build

{% data reusables.webhooks.page_build_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pages`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|------------
`id` | `integer` | O identificador exclusivo da criação de páginas.
`build` | `object` | As [Páginas do GitHub de Lista são compiladas](/rest/reference/pages#list-github-pages-builds) automaticamente.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.page_build }}

## ping

{% data reusables.webhooks.ping_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Os {% data variables.product.prodname_github_apps %} recebem um evento de ping com uma `app_id` usada para registrar o aplicativo

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|------------
`zen` | `string` | String aleatória do Github zen.
`hook_id` | `integer` | O ID do webhook que acionou o ping.
`hook` | `object` | A [configuração do webhook](/rest/reference/webhooks#get-a-repository-webhook).
`hook[app_id]` | `integer` | Ao registrar um novo {% data variables.product.prodname_github_app %}, o {% data variables.product.product_name %} envia um evento de ping para a **URL do webhook** que você especificou durante o registro. O evento contém a `app_id`, que é necessário para [autenticar](/apps/building-integrations/setting-up-and-registering-github-apps/about-authentication-options-for-github-apps/) um aplicativo.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.ping }}

## project

{% data reusables.webhooks.project_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `repository_projects` ou `organization_projects`

{% ifversion projects-v2 %} {% note %}

**Observação**: esse evento ocorre apenas para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

### Objeto da carga do webhook

{% data reusables.webhooks.project_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.project.created }}

{% ifversion fpt or ghes or ghec %}

## project_card

{% data reusables.webhooks.project_card_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `repository_projects` ou `organization_projects`

{% ifversion projects-v2 %} {% note %}

**Observação**: esse evento ocorre apenas para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

### Objeto da carga do webhook

{% data reusables.webhooks.project_card_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.project_card.created }}

## project_column

{% data reusables.webhooks.project_column_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `repository_projects` ou `organization_projects`

{% ifversion projects-v2 %} {% note %}

**Observação**: esse evento ocorre apenas para {% data variables.product.prodname_projects_v1 %}.

{% endnote %} {% endif %}

### Objeto da carga do webhook

{% data reusables.webhooks.project_column_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.project_column.created }}

{% ifversion project-beta-webhooks %}

## projects_v2_item

{% note %}

**Observação:** eventos de webhook para {% data variables.projects.projects_v2 %} estão atualmente em versão beta e sujeitos a alterações. Para compartilhar comentários sobre webhooks {% data variables.projects.projects_v2 %} com {% data variables.product.product_name %}, confira [Discussão de comentários do webhook de projetos](https://github.com/orgs/community/discussions/17405).

{% endnote %}

Atividade relacionada a itens em um {% data variables.projects.project_v2 %}. {% data reusables.webhooks.action_type_desc %} Para mais informações, confira "[Sobre {% data variables.projects.projects_v2 %}](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)."

### Disponibilidade

- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `organization_projects`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action`|`string` | A ação que foi executada no item do projeto. Pode ser `archived`, `converted`, `created`, `edited`, `restored`, `deleted` ou`reordered`.
`projects_v2_item`|`object` | O item do projeto em si. Para encontrar mais informações sobre o item do projeto, você pode usar `node_id` (o ID do nó do item do projeto) e `project_node_id` (o ID do nó do projeto) para consultar informações na API do GraphQL. Para mais informações, confira "[Como usar a API para gerenciar projetos](/issues/planning-and-tracking-with-projects/automating-your-project/using-the-api-to-manage-projects)".
`changes`|`object` | As alterações no item do projeto.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.projects_v2_item.created }}

{% endif %}

## públicos

{% data reusables.webhooks.public_short_desc %}
### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `metadata`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.public }} {% endif %}
## pull_request

{% data reusables.webhooks.pull_request_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pull_requests`

### Objeto da carga do webhook

{% data reusables.webhooks.pull_request_webhook_properties %} {% data reusables.webhooks.pull_request_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

As entregas para os eventos `review_requested` e `review_request_removed` terão um campo adicional chamado `requested_reviewer`.

{{ webhookPayloadsForCurrentVersion.pull_request.opened }}

## pull_request_review

{% data reusables.webhooks.pull_request_review_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pull_requests`

### Objeto da carga do webhook

{% data reusables.webhooks.pull_request_review_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review.submitted }}

## pull_request_review_comment

{% data reusables.webhooks.pull_request_review_comment_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pull_requests`

### Objeto da carga do webhook

{% data reusables.webhooks.pull_request_review_comment_webhook_properties %} {% data reusables.webhooks.pull_request_review_comment_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review_comment.created }}

## pull_request_review_thread

{% data reusables.webhooks.pull_request_review_thread_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `pull_requests`

### Objeto da carga do webhook

{% data reusables.webhooks.pull_request_thread_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.pull_request_review_thread.resolved }}

## efetuar push

{% data reusables.webhooks.push_short_desc %}

{% note %}

**Observação:** você não receberá um webhook para este evento ao efetuar push de mais de três marcas de uma vez.

{% endnote %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `contents`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`ref`|`string` | A [`git ref`](/rest/reference/git#refs) completa que foi enviada por push. Exemplo: `refs/heads/main` ou `refs/tags/v3.14.1`.
`before`|`string` | O SHA do commit mais recente em `ref` antes do push.
`after`|`string` | O SHA do commit mais recente em `ref` após o push.
`created`|`boolean` | Indica se esse push criou a `ref`.
`deleted`|`boolean` | Indica se esse push excluiu a `ref`.
`forced`|`boolean` | Indica se esse push foi um push forçado da `ref`.
`head_commit`|`object` | Para os pushes em que `after` é ou aponta para um objeto de commit, uma representação expandida desse commit. Para os pushes em que `after` se refere a um objeto de tag anotada, uma representação expandida do commit apontada pela tag anotada.
`compare`|`string` | URL que mostra as alterações nesta atualização `ref`, do commit `before` ao commit `after`. Para uma `ref` recém-criada que é diretamente baseada no branch padrão, esta é a comparação entre o cabeçalho do branch padrão e o commit `after`. Caso contrário, isso mostra todos os commits até o commit `after`.
`commits`|`array` | Um array de objetos de commit, que descreve os commits carregados. (Os commits enviados por push são todos os commits incluídos em `compare` entre o commit `before` e o commit `after`.)
`commits[][id]`|`string` | O SHA do commit.
`commits[][timestamp]`|`string` | O carimbo de tempo ISO 8601 do commit.
`commits[][message]`|`string` | A mensagem do commit.
`commits[][author]`|`object` | O autor do git do commit.
`commits[][author][name]`|`string` | O nome do autor do git.
`commits[][author][email]`|`string` | O endereço de e-mail do autor do git.
`commits[][url]`|`url` | URL que aponta para o recurso de commit de API.
`commits[][distinct]`|`boolean` | Se este compromisso é diferente de qualquer outro que tenha sido carregado anteriormente.
`commits[][added]`|`array` | Um array de arquivos adicionados no commit. Para confirmações extremamente grandes em que {% data variables.product.product_name %} não consegue calcular essa lista em tempo hábil, isso pode estar vazio mesmo se os arquivos forem adicionados.
`commits[][modified]`|`array` | Um array de arquivos modificados pelo commit. Para confirmações extremamente grandes em que {% data variables.product.product_name %} não consegue calcular essa lista em tempo hábil, isso pode estar vazio mesmo se os arquivos forem modificados.
`commits[][removed]`|`array` | Um array de arquivos removidos no commit. Para confirmações extremamente grandes em que {% data variables.product.product_name %} não consegue calcular essa lista em tempo hábil, isso pode estar vazio mesmo se os arquivos forem removidos.
`pusher` | `object` | O usuário que fez o push dos commits.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.push }}

## release

{% data reusables.webhooks.release_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `contents`

### Objeto da carga do webhook

{% data reusables.webhooks.release_webhook_properties %} {% data reusables.webhooks.release_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.release.published }}

## repository_dispatch

Esse evento ocorre quando um {% data variables.product.prodname_github_app %} envia uma solicitação `POST` ao ponto de extremidade "[Criar um evento de expedição de repositório](/rest/reference/repos#create-a-repository-dispatch-event)".

### Disponibilidade

- Os {% data variables.product.prodname_github_apps %} precisam ter a permissão `contents` para receber esse webhook.

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.repository_dispatch }}

## repository

{% data reusables.webhooks.repository_short_desc %}

### Disponibilidade

- Os webhooks do repositório recebem todos os tipos de eventos, exceto `deleted`
- Webhooks da organização
- Os {% data variables.product.prodname_github_apps %} com a permissão `metadata` recebem todos os tipos de eventos, exceto `deleted`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação que foi executada. Este pode ser um dos seguintes:<ul><li>`created` – Um repositório foi criado.</li><li>`deleted` – Um repositório foi excluído.</li><li>`archived` – Um repositório foi arquivado.</li><li>`unarchived` – Um repositório teve o arquivamento cancelado.</li>{% ifversion ghes or ghae %}<li>`anonymous_access_enabled` – Um repositório está [habilitado para acesso anônimo do Git](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise), `anonymous_access_disabled` – Um repositório está [desabilitado para acesso anônimo do Git](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise)</li>{% endif %}<li>`edited` – As informações de um repositório foram editadas.</li><li>`renamed` – Um repositório foi renomeado.</li><li>`transferred` – Um repositório foi transferido.</li><li>`publicized` – Um repositório passou a ser público.</li><li> `privatized` – Um repositório passou a ser privado.</li></ul>
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.repository.publicized }}

{% ifversion fpt or ghec %}
## repository_import

{% data reusables.webhooks.repository_import_short_desc %} Para receber este evento para um repositório pessoal, você deve criar um repositório vazio antes da importação. Esse evento pode ser disparado por meio do [Importador do GitHub](/articles/importing-a-repository-with-github-importer/) ou da [API de importação de origem](/rest/reference/migrations#source-imports).

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

{% data reusables.webhooks.repository_import_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.repository_import }}

## repository_vulnerability_alert

{% data reusables.webhooks.repository_vulnerability_alert_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização

### Objeto da carga do webhook

{% data reusables.webhooks.repository_vulnerability_alert_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

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

{% data reusables.webhooks.secret_scanning_alert_event_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} `sender` | `object` | Se a `action` for `resolved` ou `reopened`, o objeto `sender` será o usuário que disparou o evento. O objeto `sender` fica vazio para todas as outras ações.

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert.reopened }} {% endif %}

{% ifversion ghes > 3.4 or ghec or ghae-issue-6581 %}
## secret_scanning_alert_location

{% data reusables.webhooks.secret_scanning_alert_location_event_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `secret_scanning_alerts:read`

### Objeto da carga do webhook

{% data reusables.webhooks.secret_scanning_alert_location_event_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.secret_scanning_alert_location.created }} {% endif %}

{% ifversion fpt or ghes or ghec %}
## security_advisory

Atividade relacionada a uma consultoria de segurança que foi revisada por {% data variables.product.company_short %}. Uma consultoria de segurança revisada por {% data variables.product.company_short %} fornece informações sobre vulnerabilidades relacionadas à segurança no software em {% data variables.product.prodname_dotcom %}.

O conjunto de dados consultivos de segurança também alimentam o GitHub {% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies/)".

### Disponibilidade

- {% data variables.product.prodname_github_apps %} com a permissão `security_events`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação que foi executada. A ação pode ser `published`, `updated`, `performed` ou `withdrawn` para todos os novos eventos.
`security_advisory` |`object` | As informações da consultoria de segurança, incluindo resumo, descrição e gravidade.

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.security_advisory.published }}

{% endif %}

{% ifversion ghas-enablement-webhook %}

## security_and_analysis

Atividade relacionada à habilitação ou desabilitação de recursos de segurança e análise de código para um repositório ou organização.

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com, pelo menos, acesso `read-only` na administração de repositórios

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`changes`|`object` | As alterações feitas nos recursos de segurança e análise de código.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.security_and_analysis }}

{% endif %}

{% ifversion fpt or ghec %}
## patrocínio

{% data reusables.webhooks.sponsorship_short_desc %}

Você só pode criar um webhook de patrocínio em {% data variables.product.prodname_dotcom %}. Para obter mais informações, confira "[Como configurar webhooks para eventos na sua conta patrocinada](/sponsors/integrating-with-github-sponsors/configuring-webhooks-for-events-in-your-sponsored-account)".

### Disponibilidade

- Contas patrocinadas

### Objeto da carga do webhook

{% data reusables.webhooks.sponsorship_webhook_properties %} {% data reusables.webhooks.sponsorship_properties %} {% data reusables.webhooks.sender_desc %}

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

{% data reusables.webhooks.star_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.star.created }}

## status

{% data reusables.webhooks.status_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `statuses`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`id` | `integer` | O identificador exclusivo do status.
`sha`|`string` | O SHA do commit.
`state`|`string` | O novo estado. Pode ser `pending`, `success`, `failure` ou `error`.
`description`|`string` | A descrição opcional legível para pessoas adicionada ao status.
`target_url`|`string` | O link opcional adicionado ao status.
`branches`|`array` | Um array de objetos de branch que contém o SHA do status. Cada branch contém o SHA fornecido, mas o SHA pode ou não ser o cabeçalho do branch. O array inclui, no máximo, 10 branches.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.status }}

## equipe

{% data reusables.webhooks.team_short_desc %}

### Disponibilidade

- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `members`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`action` |`string` | A ação que foi executada. Pode ser `created`, `deleted`, `edited`, `added_to_repository` ou `removed_from_repository`.
`team`  |`object` | A própria equipe.
`changes`|`object` | As alterações na equipe se a ação foi `edited`.
`changes[description][from]` |`string` | A versão anterior da descrição se a ação foi `edited`.
`changes[name][from]` |`string` | A versão anterior do nome se a ação foi `edited`.
`changes[privacy][from]` |`string` | A versão anterior da privacidade da equipe se a ação foi `edited`.
`changes[repository][permissions][from][admin]` | `boolean` | A versão anterior da permissão `admin` do membro da equipe em um repositório, se a ação foi `edited`.
`changes[repository][permissions][from][pull]` | `boolean` | A versão anterior da permissão `pull` do membro da equipe em um repositório, se a ação foi `edited`.
`changes[repository][permissions][from][push]` | `boolean` | A versão anterior da permissão `push` do membro da equipe em um repositório, se a ação foi `edited`.
`repository`|`object` | O repositório que foi adicionado ou removido do alcance da equipe se a ação foi `added_to_repository`, `removed_from_repository` ou `edited`. Para as ações `edited`, `repository` também contém os novos níveis de permissão da equipe no repositório.
{% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.team.added_to_repository }}

## team_add

{% data reusables.webhooks.team_add_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `members`

### Objeto da carga do webhook

Chave | Tipo | Descrição
----|------|-------------
`team`|`object` | A [equipe](/rest/reference/teams) que foi modificada.  **Observação:** os eventos mais antigos podem não incluir isso na carga.
{% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.team_add }}

{% ifversion ghes or ghae %}

## usuário

Quando um usuário é `created` ou `deleted`.

### Disponibilidade
- Webhooks do GitHub Enterprise. Para obter mais informações, confira "[Webhooks globais](/rest/reference/enterprise-admin#global-webhooks/)".

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.user.created }}

{% endif %}

## inspecionar

{% data reusables.webhooks.watch_short_desc %}

O ator do evento é o [usuário](/rest/reference/users) que adicionou um repositório aos favoritos, e o repositório do evento é o [repositório](/rest/reference/repos) que foi adicionado aos favoritos.

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- {% data variables.product.prodname_github_apps %} com a permissão `metadata`

### Objeto da carga do webhook

{% data reusables.webhooks.watch_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.app_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.watch.started }}

{% ifversion fpt or ghes or ghec %}
## workflow_dispatch

Esse evento ocorre quando alguém dispara uma execução de fluxo de trabalho no GitHub ou envia uma solicitação `POST` ao ponto de extremidade "[Criar um evento de expedição de fluxo de trabalho](/rest/reference/actions/#create-a-workflow-dispatch-event)". Para obter mais informações, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#workflow_dispatch)".

### Disponibilidade

- Os {% data variables.product.prodname_github_apps %} precisam ter a permissão `contents` para receber esse webhook.

### Objeto da carga do webhook

| Chave | Tipo | Descrição |
|-----|-----|-----|
| `inputs` | `object` | Entradas para o fluxo de trabalho. Cada chave representa o nome da entrada, enquanto seu valor representa o valor dessa entrada. |
{% data reusables.webhooks.org_desc %} | `ref` | `string` | A referência de branch a partir da qual o fluxo de trabalho foi executado. | {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.sender_desc %} | `workflow` | `string` | Caminho relativo para o arquivo de fluxo de trabalho que contém o fluxo de trabalho. |

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.workflow_dispatch }} {% endif %}

{% ifversion fpt or ghes > 3.2 or ghec or ghae %}

## workflow_job

{% data reusables.webhooks.workflow_job_short_desc %}

### Disponibilidade

- Webhooks do repositório
- Webhooks da organização
- Webhooks corporativos

### Objeto da carga do webhook

{% data reusables.webhooks.workflow_job_properties %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.workflow_job }}

{% endif %} {% ifversion fpt or ghes or ghec %}
## workflow_run

Quando uma execução do fluxo de trabalho de {% data variables.product.prodname_actions %} for solicitada ou concluída. Para obter mais informações, confira "[Eventos que disparam fluxos de trabalho](/actions/reference/events-that-trigger-workflows#workflow_run)".

### Disponibilidade

- {% data variables.product.prodname_github_apps %} com as permissões `actions` ou `contents`.

### Objeto da carga do webhook

{% data reusables.webhooks.workflow_run_properties %} {% data reusables.webhooks.workflow_desc %} {% data reusables.webhooks.org_desc %} {% data reusables.webhooks.repo_desc %} {% data reusables.webhooks.sender_desc %}

### Exemplo de carga de webhook

{{ webhookPayloadsForCurrentVersion.workflow_run }} {% endif %}
