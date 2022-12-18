---
title: Использование API журнала аудита для предприятия
intro: Вы можете программно получить корпоративные события с помощью REST или API GraphQL.
shortTitle: Audit log API
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
ms.openlocfilehash: f5dd0a3dcca1e7fd60361f0cb7c8ecf84296e036
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192660'
---
## Использование API журнала аудита

Вы можете взаимодействовать с журналом аудита с помощью API GraphQL или REST API. {% ifversion read-audit-scope %} Область можно использовать для `read:audit_log` доступа к журналу аудита через API.{ % endif %}

Метки времени и поля даты в ответе API измеряются в [миллисекундах эпохи UTC](http://en.wikipedia.org/wiki/Unix_time).

## Запрос API GraphQL журнала аудита

Чтобы защитить интеллектуальную собственность и обеспечить соответствие требованиям вашего предприятия, можно использовать API GraphQL журнала аудита для хранения копий мониторинга и данных журнала аудита: {% data reusables.audit_log.audit-log-api-info %}

Обратите внимание, что события Git невозможно получить с помощью API журнала аудита {% ifversion not ghec %}. API GraphQL{% else %}. Чтобы получить события Git, используйте REST API. Дополнительные сведения см. в действиях категории `git` в разделах [Действия журнала аудита для предприятия](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions), а также [Администрирование предприятия](/rest/reference/enterprise-admin#audit-log) и Конечные точки журнала аудита [организаций](/rest/reference/orgs#get-the-audit-log-for-an-organization) в документации по REST API.{% endif %}

Ответ GraphQL может содержать данные за 90–120 дней.

### Пример 1. Участники, добавленные в организации в предприятии или удаленные из них

Приведенный ниже запрос получает журналы аудита для предприятия `avocado-corp` и возвращает первые 10 организаций в предприятии, где выполнялось только добавление участников в организацию или удаление их из нее. Возвращаются первые 20 записей журнала аудита для каждой организации. 

Этот запрос использует поле [auditlog](/graphql/reference/objects) объекта Organization, а также объектов [OrgAddMemberAuditEntry](/graphql/reference/objects#orgaddmemberauditentry) и [OrgRemoveMemberAuditEntry](/graphql/reference/objects#orgremovememberauditentry). Учетной записи {% data variables.product.prodname_dotcom %}, запрашивающей журнал аудита предприятия, должна принадлежать каждая организация в пределах предприятия.

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

API GraphQL возвращает не более 100 узлов для одного запроса. Чтобы получить дополнительные результаты, необходимо выполнить разбиение на страницы. Дополнительные сведения см. в разделе [Ограничения ресурсов](/graphql/overview/resource-limitations#node-limit) в документации по API GraphQL и в разделе о [разбиении на страницы](https://graphql.org/learn/pagination/) в официальной документации по GraphQL.
### Пример 2. События в организации для определенной даты и субъекта

Можно указать несколько фраз для поиска, например `created` или `actor`, разделив их в строке запроса пробелом.

Приведенный ниже запрос извлекает все журналы аудита для предприятия`avocado-corp`, связанного с организацией `octo-org`, где действия были выполнены пользователем `octocat` 1 января 2022 г. или после этой даты. Возвращаются первые 20 записей журнала аудита. Первой в списке появляется последняя запись журнала. 

Для этого запроса используется интерфейс [AuditEntry](/graphql/reference/interfaces#auditentry). Учетной записи {% data variables.product.prodname_dotcom %}, запрашивающей журнал аудита предприятия, должна принадлежать организация `octo-org`.

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

Дополнительные примеры запросов см. в [репозитории примеров платформы](https://github.com/github/platform-samples/blob/master/graphql/queries).

## Запрос REST API журнала аудита

Чтобы защитить интеллектуальную собственность и обеспечить соответствие требованиям вашего предприятия, можно использовать REST API журнала аудита для хранения копий мониторинга и данных журнала аудита: {% data reusables.audit_log.audited-data-list %}

{% data reusables.audit_log.retention-periods %}

Дополнительные сведения о REST API журнала аудита см. в разделах [Администрирование предприятия](/rest/reference/enterprise-admin#audit-log) и [Организации](/rest/reference/orgs#get-the-audit-log-for-an-organization).

### Пример 1. Все события предприятия для определенной даты с разбиением на страницы

Можно использовать разбиение на страницы или разбиение на страницы на основе курсоров. Дополнительные сведения о разбиении на страницы см. [в разделе Использование разбиения на страницы в REST API](/rest/guides/using-pagination-in-the-rest-api).

#### Пример с разбивкой на страницы

Приведенный ниже запрос ищет события журнала аудита, созданные 1 января 2022 г. на `avocado-corp` предприятии, и возвращает первую страницу с не более чем 100 элементами на страницу с помощью разбиения на страницы. Дополнительные сведения о разбиении на страницы см. [в разделе Использование разбиения на страницы в REST API](/rest/guides/using-pagination-in-the-rest-api).

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&page=1&per_page=100"
```

#### Пример разбиения на страницы на основе курсора

Приведенный ниже запрос ищет события журнала аудита, созданные 1 января 2022 г. на `avocado-corp` предприятии, и возвращает первую страницу с не более чем 100 элементами на страницу с использованием разбиения на страницы. Дополнительные сведения о разбиении на страницы см. [в разделе Использование разбиения на страницы в REST API](/rest/guides/using-pagination-in-the-rest-api). Флаг `--include` вызывает возврат заголовков вместе с ответом.

```
curl --include -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=created:2022-01-01&per_page=100"
```

При наличии более 100 результатов заголовок `link` будет содержать URL-адреса для получения следующей, первой и предыдущей страниц результатов.

```
link: <https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42NjQzODMzNTk5MjdlKzEyfDloQzBxdURzaFdVbVlLWjkxRU9mNXc%3D&before=>; rel="next", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=>; rel="first", 
<https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=&before=MS42Njc4NDA2MjM4MzNlKzEyfExqeG5sUElvNEZMbG1XZHA5akdKTVE%3D>; rel="prev"
```

Скопируйте соответствующую ссылку на страницы в следующий запрос. Пример:

```shell
curl -I -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/13827/audit-log?%3A2022-11-01=&per_page=100&after=MS42Njc4NDA2MjM5NDFlKzEyfHRYa3AwSkxUd2xyRjA5bWxfOS1RbFE%3D&before="
```

### Пример 2. События для запросов на вытягивание в предприятии для определенной даты и субъекта

Можно указать несколько фраз для поиска, например `created` или `actor`, разделив их в сформированном URL-адресе символом `+` или кодом `%20` символа ASCII.

Приведенный ниже запрос выполняет поиск событий журнала аудита для запросов на вытягивание, где событие произошло 1 января 2022 г. или после этой даты в предприятии `avocado-corp`, а действие выполнил пользователь `octocat`:

```shell
curl -H "Authorization: Bearer TOKEN" \
--request GET \
"https://api.github.com/enterprises/avocado-corp/audit-log?phrase=action:pull_request+created:>=2022-01-01+actor:octocat"
```






