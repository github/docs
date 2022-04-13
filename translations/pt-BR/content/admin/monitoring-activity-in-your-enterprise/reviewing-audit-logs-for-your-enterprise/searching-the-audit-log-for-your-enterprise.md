---
title: Pesquisando o log de auditoria para a sua empresa
intro: Você pode pesquisar uma extensa lista de ações auditadas em sua empresa.
shortTitle: Pesquisar logs de auditoria
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
---

## Sobre a pesquisa do log de auditoria da empresa

Você pode pesquisar o log de auditoria da empresa diretamente a partir da interface do usuário, usando o menu suspenso **Filtros** ou digitando uma consulta de pesquisa.

  ![Consulta de pesquisa](/assets/images/enterprise/site-admin-settings/search-query.png)

Para obter mais informações sobre como visualizar o seu log de auditoria corporativa, consulte[Acessando o log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/accessing-the-audit-log-for-your-enterprise)".

Você também pode usar a API para recuperar os eventos de log de auditoria. Para obter mais informações, consulte[Usando a API do log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)".

Observe que não é possível pesquisar as entradas usando texto. No entanto, é possível criar consultas de pesquisa usando diversos filtros. Muitos operadores usados ao consultar o log de auditoria, como `-`, `>`, ou `<`, correspondem ao mesmo formato de pesquisa no {% data variables.product.product_name %}. Para obter mais informações, consulte "[Searching on {% data variables.product.prodname_dotcom %}](/search-github/getting-started-with-searching-on-github/about-searching-on-github)."

{% note %}

**Observação**: {% data reusables.audit_log.retention-periods %}

{% endnote %}

## Filtros de consulta de pesquisa

|                        Filtrar | Descrição                                                                                                                                                                                                                                                                 |
| ------------------------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|          `Actividade de ontem` | Todas as ações criadas no dia anterior.                                                                                                                                                                                                                                   |
|  `Gestão de conta corporativa` | Todas as ações na categoria `negócios`.                                                                                                                                                                                                                                   |
|     `Associação à organização` | Todas as ações para quando um novo usuário foi convidado a participar de uma organização.                                                                                                                                                                                 |
|             `Gestão de equipe` | Todas as ações relacionadas ao gerenciamento de equipe.<br/>- Quando a conta de um usuário ou repositório foi adicionads ou removids de uma equipe<br/>- Quando um mantenedor de equipe foi promovido ou rebaixado<br/>- Quando uma equipe foi excluída |
| `Gerenciamento do repositório` | Todas as ações para o gerenciamento de repositório.<br/>- Quando um repositório foi criado ou excluído<br/>- Quando a visibilidade do repositório foi alterada<br/>- Quando uma equipe foi adicionada ou removida de um repositório{% ifversion ghec %}
|     `Atualizações de cobrança` | Todas as ações sobre como sua empresa paga por {% data variables.product.prodname_dotcom %} e quando seu endereço de e-mail de cobrança foi alterado.{% endif %}
|            `Atividade do hook` | Todas as ações para webhooks e hooks pre-receive.                                                                                                                                                                                                                         |
|   `Gerenciamento de segurança` | Todas as ações referentes a chaves SSH, chaves de implantação, chaves de segurança, 2FA e logon único SAML e alertas de vulnerabilidade para repositórios.                                                                                                                |

## Sintaxe de consulta de pesquisa

Você pode compor uma consulta de pesquisa a partir de um ou mais pares de `key:value`, separados pelos operadores lógicos e/ou. Por exemplo, para ver todas as ações que afetaram o repositório `octocat/Spoon-Knife` desde o início de 2017:

  `repo:"octocat/Spoon-Knife" AND created:>=2017-01-01`

Os pares `key:value` que podem ser usados em uma consulta de pesquisa são:

|          Tecla | Valor                                                                                                                                           |
| --------------:| ----------------------------------------------------------------------------------------------------------------------------------------------- |
|     `actor_id` | ID da conta do usuário que iniciou a ação.                                                                                                      |
|        `actor` | Nome da conta do usuário que iniciou a ação.                                                                                                    |
| `oauth_app_id` | ID do aplicativo OAuth associado à ação.                                                                                                        |
|         `Ação` | Nome da ação auditada                                                                                                                           |
|      `user_id` | ID do usuário afetado pela ação.                                                                                                                |
|      `usuário` | Nome do usuário afetado pela ação.                                                                                                              |
|      `repo_id` | ID do repositório afetado pela ação (se aplicável).                                                                                             |
|         `repo` | Nome do repositório afetado pela ação (se aplicável).                                                                                           |
|     `actor_ip` | Endereço IP do qual a ação foi iniciada.                                                                                                        |
|      `created` | Hora em que a ação ocorreu{% ifversion ghes %}. Se consultar o log de auditoria do painel de administração do site, use `created_at`{% endif %}
|         `from` | Exibição da qual a ação foi iniciada.                                                                                                           |
|         `note` | Informações diversas sobre eventos específicos (em texto sem formatação ou formato JSON).                                                       |
|          `org` | Nome da organização afetada pela ação (se aplicável).                                                                                           |
|       `org_id` | ID da organização afetada pela ação (se aplicável).                                                                                             |
|     `negócios` | Nome da empresa afetada pela ação (se aplicável)                                                                                                |
|  `business_id` | ID da empresa afetada pela ação (se aplicável)                                                                                                  |

Para ver as ações agrupadas por categoria, você também pode usar o qualificador da ação como um par de `key:value`. Para obter mais informações, consulte "[Pesquisa com base na ação executada](#search-based-on-the-action-performed). "

Para obter uma lista completa de ações no log de auditoria da empresa, consulte "[Ações de logs de auditoria para a sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise)".

## Pesquisar no log de auditoria

{% data reusables.audit_log.audit-log-search-by-operation %}

{% data reusables.audit_log.audit-log-search-by-repo %}

{% data reusables.audit_log.audit-log-search-by-user %}

### Pesquisar com base na ação

Para pesquisar eventos específicos, use o qualificador `action` na consulta. Por exemplo:

  * `action:team` localiza todos os eventos agrupados na categoria da equipe;
  * `-action:hook` exclui todos os eventos na categoria de webhook.

Cada categoria tem um conjunto de ações associadas que você pode filtrar. Por exemplo:

  * `action:team.create` localiza todos os eventos em que uma equipe foi criada;
  * `-action:hook.events_changed` exclui todos os eventos nos quais os eventos em um webhook foram alterados.

As ações que podem ser encontradas no log de auditoria da empresa estão agrupadas nas seguintes categorias:

{% data reusables.audit_log.audit-log-action-categories %}
### Pesquisar com base na hora da ação

Use o qualificador `created` para filtrar eventos no log de auditoria com base na hora que elas ocorreram.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

Por exemplo:

  * `created:2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014;
  * `created:>=2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014 ou depois dessa data;
  * `created:<=2014-07-08` localiza todos os eventos ocorridos em 8 de julho de 2014 ou antes dessa data;
  * `created:2014-07-01..2014-07-31`  localiza todos os eventos ocorridos em julho de 2014.

### Pesquisar com base no local

Ao usar o qualificador `país`, você pode filtrar eventos no log de auditoria com base no país de origem. Você pode usar o código curto de duas letras de um país ou o nome completo. Os países com espaços no seu nome terão de ser escritos entre aspas. Por exemplo:

  * `country:de` localiza todos os eventos ocorridos na Alemanha;
  * `country:Mexico` localiza todos os eventos ocorridos no México;
  * `country:"United States"` localiza todos os eventos ocorridos nos Estados Unidos.
