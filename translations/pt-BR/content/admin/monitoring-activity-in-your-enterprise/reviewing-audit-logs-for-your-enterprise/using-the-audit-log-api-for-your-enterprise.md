---
title: Usando a API do log de auditoria para a sua empresa
intro: 'Você pode recuperar programaticamente eventos corporativos com a API REST{% ifversion ghec or ghes > 3.2 %} ou{% endif %} API do GraphQL.'
shortTitle: API do log de auditoria
permissions: 'Enterprise owners {% ifversion ghes %}and site administrators {% endif %}can use the audit log API.'
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
  - API
---

## Usando a API do log de auditoria

Você pode interagir com o log de auditoria usando a API GraphQL{% ifversion ghec or ghes > 3.2 or ghae-issue-6648 %} ou a API REST{% endif %}.

Timestamps and date fields in the API response are measured in [UTC epoch milliseconds](http://en.wikipedia.org/wiki/Unix_time).

## Consultando o log auditoria da API do GraphQL

Para garantir que a sua propriedade intelectual esteja protegida e que você mantenha a conformidade para a sua empresa, você pode usar a API do GraphQL do log de auditoria para guardar cópias dos seus dados de log de auditoria e para monitorar:
{% data reusables.audit_log.audit-log-api-info %}

Observe que você não pode recuperar eventos do Git usando a API de registro de auditoria {% ifversion not ghec %}.{% else %}API GraphQL. Para recuperar eventos do Git, use a API REST. Para obter mais informações, consulte as ações da categoria do `git` em[Ações do log de auditoria para a sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)" e também a "[Administração da empresa](/rest/reference/enterprise-admin#audit-log)" e os pontos de extremidade das "[Organizações](/rest/reference/orgs#get-the-audit-log-for-an-organization) do log de auditoria na documentação da API REST.{% endif %}

A resposta do GraphQL pode incluir dados por até 90 a 120 dias.

### Exemplo 1: Integrantes adicionados ou removidos das organizações de uma empresa

A consulta abaixo busca os logs de auditoria da empresa `avocado-corp` e retorna as primeiras 10 organizações da empresa, em que as únicas ações realizadas estavam adicionando ou removendo um integrante de uma organização. As primeiras 20 entradas de logs de auditoria para cada organização são devolvidas.

Esta consulta usa o campo [auditlog](/graphql/reference/objects) do objeto Organização, e os objetos [OrgAddMemberAuditEntry](/graphql/reference/objects#orgaddmemberauditentry) e [OrgRemoveMemberAuditEntry](/graphql/reference/objects#orgremovememberauditentry). A conta de {% data variables.product.prodname_dotcom %} que consultou o log de auditoria corporativa deve ser o proprietário de uma organização para cada organização dentro da empresa.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 10, orderBy: {field: LOGIN, direction: DESC}) {
      nodes {
        name
        auditLog(first: 20) {
          edges {
            node {
              ... on OrgAddMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
              ... on OrgRemoveMemberAuditEntry {
                action
                actorLogin
                createdAt
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
}
```

A API do GraphQL retornará, no máximo, 100 nós por consulta. Para recuperar resultados adicionais, você deve implementar a paginação. Para obter mais informações, consulte "[limitações de recursos](/graphql/overview/resource-limitations#node-limit)" na documentação da API do GraphQL e [Paginação](https://graphql.org/learn/pagination/) na documentação oficial do GraphQL.
### Exemplo 2: Eventos de uma organização, para uma data e ator específicos

Você pode especificar várias frases de pesquisa, como `criado` e `ator`, separando-as na sua string de consulta com um espaço.

A consulta abaixo busca todos os logs de auditoria para o projeto `avocado-corp` que estão relacionados à organização `octo-org`, em que as ações foram realizadas pelo usuário do `octocat` em ou após 1 de janeiro de 2022. As primeiras 20 entradas do log de auditoria são retornadas, com a entrada de log mais recente aparecendo primeiro.

Essa consulta usa a interface [AuditEntry](/graphql/reference/interfaces#auditentry). A conta de {% data variables.product.prodname_dotcom %} que consulta o log de auditoria corporativa deve ser um proprietário da organização `octo-org`.

```shell
{
  enterprise(slug: "avocado-corp") {
    organizations(first: 1, query: "octo-org") {
      nodes {
        name
        auditLog(first: 20, query: "actor:octocat created:>=2022-01-01T00:00:00.000Z", orderBy: {field: CREATED_AT, direction: DESC}) {
          edges {
            node {
              ... on AuditEntry {
                action
                actorLogin
                createdAt
                user {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
}
```

Para obter mais exemplos de consulta, veja [o repositporio das amostras da plataforma](https://github.com/github/platform-samples/blob/master/graphql/queries).

{% ifversion ghec or ghes > 3.2 or ghae-issue-6648 %}
## Consultando o log de auditoria da API REST

Para garantir que a sua propriedade intelectual esteja protegida e que você mantenha a conformidade para a sua empresa, você pode usar a API REST do log de auditoria para guardar cópias dos seus dados de log de auditoria e para monitorar:
{% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

Para obter mais informações sobre a REST API do log de auditoria, consulte "[Administração empresarial](/rest/reference/enterprise-admin#audit-log)" e "[Organizações](/rest/reference/orgs#get-the-audit-log-for-an-organization)".

### Exemplo 1: Todos os eventos de uma empresa, para uma data específica, com paginação

A consulta abaixo procura eventos de log de auditoria criados em 1 de janeiro de 2022 na empresa `avocado-corp` e retorna a primeira página com um máximo de 100 itens por página usando a [Paginação da API REST](/rest/overview/resources-in-the-rest-api#pagination):

```shell
curl -H "Authorization: token <em>TOKEN</em>" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

### Exemplo 2: Eventos para pull requests em uma empresa, para uma data ou ator específico

Você pode especificar várias frases de pesquisa, como `criado` e `ator`, separando-os no seu URL formado com o símbolo `+` ou código de carctere ASCII `%20`.

A consulta abaixo pesquisa eventos de log de auditoria para pull requests, em que o evento ocorreu em ou depois de 1 de janeiro de 2022 na empresa `avocado-corp` e a ação foi realizada pelo usuário do `octocat`:

```shell
curl -H "Authorization: token <em>TOKEN</em>" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```

{% endif %}
