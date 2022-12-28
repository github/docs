---
title: Como fazer pesquisas no log de auditoria para sua empresa
intro: Você pode pesquisar uma extensa lista de ações auditadas em sua empresa.
shortTitle: Search audit logs
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can search the audit log.'
redirect_from:
  - /enterprise/admin/articles/searching-the-audit-log
  - /enterprise/admin/installation/searching-the-audit-log
  - /enterprise/admin/user-management/searching-the-audit-log
  - /admin/user-management/searching-the-audit-log
  - /admin/user-management/monitoring-activity-in-your-enterprise/searching-the-audit-log
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 12bc44b7d81df55366f8b839261cf8899a53729d
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/28/2022
ms.locfileid: '148183993'
---
## Sobre a pesquisa no log de auditoria da empresa

Você pode pesquisar o log de auditoria da empresa diretamente na interface do usuário usando o menu suspenso **Filtros** ou digitando uma consulta de pesquisa.

  ![Consulta de pesquisa](/assets/images/enterprise/site-admin-settings/search-query.png)

Para obter mais informações sobre como ver o log de auditoria da sua empresa, confira "[Como acessar o log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)". 

{% data reusables.audit_log.git-events-not-in-search-results %}

Use também a API para recuperar eventos de log de auditoria. Para obter mais informações, confira "[Como usar a API do log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)".

Observe que não é possível pesquisar entradas usando texto. No entanto, é possível criar consultas de pesquisa usando diversos filtros. Muitos operadores usados na consultar do log, como `-`, `>` ou `<`, correspondem ao mesmo formato que a pesquisa no {% data variables.product.product_name %}. Para obter mais informações, confira "[Como fazer pesquisas no {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)".

{% note %}

**Observação**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Pesquisar filtros de consulta

Filtrar| Descrição
--------------:| -----------
`Yesterday's activity` | Todas as ações criadas no último dia.
`Enterprise account management` | Todas as ações na categoria `business`.
`Organization membership` | Todas as ações de quando um novo usuário foi convidado a ingressar em uma organização.
`Team management` | Todas as ações relacionadas ao gerenciamento da equipe.<br/>– Quando uma conta de usuário ou um repositório foi adicionado a uma equipe ou removido dela<br/>– Quando um mantenedor da equipe foi promovido ou rebaixado<br/>– Quando uma equipe foi excluída
`Repository management` | Todas as ações do gerenciamento do repositório.<br/>– Quando um repositório foi criado ou excluído<br/>– Quando a visibilidade do repositório foi alterada<br/>– Quando uma equipe foi adicionada ou removida de um repositório{% ifversion ghec %}
`Billing updates` | Todas as ações referentes à forma de pagamento do {% data variables.product.prodname_dotcom %} pela sua empresa e à data de alteração do seu endereço de email de cobrança.{% endif %}
`Hook activity` | Todas as ações de webhooks e ganchos de pré-recebimento.
`Security management` | Todas as ações referentes a chaves SSH, chaves de implantação, chaves de segurança, 2FA e autorização de credencial de logon único do SAML e alertas de vulnerabilidade para repositórios.

## Sintaxe de consulta de pesquisa

Você pode redigir uma consulta de pesquisa de um ou mais pares `key:value`, separados por operadores lógicos AND/OR. Por exemplo, para ver todas as ações que afetaram o repositório `octocat/Spoon-Knife` desde o início de 2017:

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

Os pares `key:value`que podem ser usados em uma consulta de pesquisa são:

Chave            | Valor
--------------:| --------------------------------------------------------
`actor_id`     | ID da conta do usuário que iniciou a ação.
`actor`        | Nome da conta do usuário que iniciou a ação.
`oauth_app_id` | ID do aplicativo OAuth associado à ação.
`action`       | Nome da ação auditada
`user_id`      | ID do usuário afetado pela ação.
`user`         | Nome do usuário afetado pela ação.
`repo_id`      | ID do repositório afetado pela ação (se aplicável).
`repo`         | Nome do repositório afetado pela ação (se aplicável).
`actor_ip`     | Endereço IP do qual a ação foi iniciada.
`created`      | Hora em que a ação ocorreu{% ifversion ghes %}. Se estiver consultando o log de auditoria no painel de administração do site, use `created_at` {% endif %}
`from`         | Exibição da qual a ação foi iniciada.
`note`         | Informações diversas sobre eventos específicos (em texto sem formatação ou formato JSON).
`org`          | Nome da organização afetada pela ação (se aplicável).
`org_id`       | ID da organização afetada pela ação (se aplicável).
`business` | Nome da empresa afetada pela ação (se aplicável)
`business_id` | ID da empresa afetada pela ação (se aplicável)
{%- ifversion token-audit-log %} `hashed_token` | O token usado para autenticação na ação (se aplicável, confira "[Como identificar eventos de log de auditoria executados por um token de acesso](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)") {%- endif %}

Para ver as ações agrupadas por categoria, use também o qualificador de ação como um par `key:value`. Para obter mais informações, confira "[Pesquisa com base na ação executada](#search-based-on-the-action-performed)".

Para ver uma lista completa das ações no log de auditoria da sua empresa, confira "[Ações de log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

## Pesquisar no log de auditoria

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### Pesquisar com base na ação

Para pesquisar eventos específicos, use o qualificador `action` na consulta. Por exemplo:

  * `action:team` localiza todos os eventos agrupados na categoria da equipe.
  * `-action:hook` exclui todos os eventos na categoria do webhook.

Cada categoria tem um conjunto de ações associadas que você pode filtrar. Por exemplo:

  * `action:team.create` localiza todos os eventos em que uma equipe foi criada.
  * `-action:hook.events_changed` exclui todos os eventos em que os eventos em um webhook foram alterados.

As ações que podem ser encontradas no log de auditoria da sua empresa são agrupadas nas seguintes categorias:

{% data reusables.audit_log.audit-log-action-categories %}

### Pesquisar com base na hora da ação

Use o qualificador `created` para filtrar eventos no log de auditoria com base na data em que eles ocorreram.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Por exemplo:

  * `created:2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014.
  * `created:>=2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014 ou após essa data.
  * `created:<=2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014 ou antes dessa data.
  * `created:2014-07-01..2014-07-31` localiza todos os eventos ocorridos no mês de julho de 2014.

### Pesquisar com base no local

Usando o qualificador `country`, você pode filtrar eventos no log de auditoria com base no país de origem. Use o código curto de duas letras ou o nome completo de um país. Os países com espaços no nome precisarão ser colocados entre aspas. Por exemplo:

  * `country:de` localiza todos os eventos ocorridos na Alemanha.
  * `country:Mexico` localiza todos os eventos ocorridos no México.
  * `country:"United States"` localiza todos os eventos ocorridos nos Estados Unidos.

{% ifversion token-audit-log %}
### Pesquisar com base no token que executou a ação

Use o qualificador `hashed_token` para pesquisar com base no token que executou a ação. Antes de procurar um token, gere um hash SHA-256. Para obter mais informações, confira "[Como identificar eventos de log de auditoria executados por um token de acesso](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)".
{% endif %}
