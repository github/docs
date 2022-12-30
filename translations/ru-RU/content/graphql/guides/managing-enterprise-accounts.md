---
title: Управление корпоративными учетными записями
intro: 'Вы можете управлять корпоративной учетной записью и организациями, которыми она владеет, с помощью API GraphQL.'
redirect_from:
  - /v4/guides/managing-enterprise-accounts
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
shortTitle: Manage enterprise accounts
ms.openlocfilehash: c55a2b23ff88214739402f78f00c2682c97df93b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106784'
---
## Сведения об управлении корпоративными учетными записями с помощью GraphQL

Чтобы отслеживать отделы, вносить в них изменения и обеспечивать соответствие требованиям, можно использовать API корпоративных учетных записей и API журнала аудита, которые доступны только в виде API GraphQL.

Конечные точки корпоративной учетной записи работают как для облака GitHub Enterprise, так и для сервера GitHub Enterprise.

GraphQL позволяет вам запрашивать и возвращать только указанные данные. Например, вы можете создать запрос GraphQL или запросить сведения, чтобы увидеть всех новых участников, добавленных в вашу организацию. Вы также можете внести изменения, чтобы пригласить администратора в вашу корпоративную учетную запись.

С помощью API журнала аудита вы можете отслеживать, когда кто-то:
- Обращается к параметрам вашей организации или репозитория.
- Изменяет разрешения.
- Добавляет или удаляет пользователей в организации, репозитории или команде.
- Повышает уровень пользователей до администраторов.
- Изменяет разрешения приложения GitHub.

API журнала аудита позволяет сохранять копии данных вашего журнала аудита. Для запросов, выполненных с помощью API журнала аудита, ответ GraphQL может содержать данные давностью до 90–120 дней. Список полей, доступных при использовании API журнала аудита, см. в разделе [Интерфейс AuditEntry](/graphql/reference/interfaces#auditentry/).

API корпоративных учетных записей обеспечивает следующие возможности:
- вывод списка и просмотр всех отделов и репозиториев, принадлежащих вашей корпоративной учетной записи;
- изменение параметров корпоративной учетной записи;
- настройка политик для параметров корпоративной учетной записи и ее отделов;
- приглашение администраторов в корпоративную учетную запись;
- создание отделов в корпоративной учетной записи.

Список полей, доступных при использовании API корпоративных учетных записей, см. в разделе [Поля и типы GraphQL для API корпоративных учетных записей](/graphql/guides/managing-enterprise-accounts#graphql-fields-and-types-for-the-enterprise-accounts-api).

## Начало работы с GraphQL для корпоративных учетных записей

Чтобы приступить к использованию GraphQL для управления корпоративными учетными записями, выполните указанные ниже действия.
 - Проверка подлинности с помощью {% data variables.product.pat_generic %}
 - Выберите клиент GraphQL или используйте обозреватель GraphQL.
 - Настройте Insomnia для использования API GraphQL.

Примеры запросов см. в разделе [Пример запроса с использованием API корпоративных учетных записей](#an-example-query-using-the-enterprise-accounts-api).

### 1. Проверка подлинности с помощью {% data variables.product.pat_generic %}

{% data reusables.user-settings.graphql-classic-pat-only %}

1. Для проверки подлинности с помощью GraphQL необходимо создать {% data variables.product.pat_generic %} из параметров разработчика. Дополнительные сведения см. в разделе [Создание {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token).

2. Предоставьте разрешения администратора и полный доступ к {% data variables.product.pat_generic %} для областей GHES, к которым вы хотите получить доступ. Для получения полного разрешения на доступ к частным репозиториям, организациям, командам, данным пользователей и доступу к корпоративным данным выставления счетов и профилям рекомендуется выбрать следующие области для {% data variables.product.pat_generic %}:
    - `repo`
    - `admin:org`
    - `user`
    - `admin:enterprise`

  Области, относящиеся к корпоративной учетной записи:
    - `admin:enterprise`: предоставляет полный контроль над предприятиями (включая `manage_runners:enterprise`и `manage_billing:enterprise` `read:enterprise`).
    - `manage_billing:enterprise`: чтение и запись корпоративных данных выставления счетов. {% ifversion ghes or ghae %}
    - `manage_runners:enterprise`: доступ к управлению корпоративными средствами выполнения GitHub Actions и их группами;{% endif %}
    - `read:enterprise`: чтение данных профиля организации.

3. Скопируйте {% data variables.product.pat_generic %} и храните его в безопасном месте, пока вы не добавите его в клиент GraphQL.

### 2. Выбор клиента GraphQL

Мы рекомендуем использовать GraphiQL или другой автономный клиент GraphQL, который позволяет настроить базовый URL-адрес.

Возможные варианты клиентов GraphQL:
  - [Insomnia](https://support.insomnia.rest/article/176-graphql-queries)
  - [GraphiQL](https://www.gatsbyjs.org/docs/running-queries-with-graphiql/)
  - [Postman](https://learning.getpostman.com/docs/postman/sending_api_requests/graphql/)

Далее будет использоваться клиент Insomnia.

### 3. Настройка Insomnia для использования API GraphQL для GitHub с корпоративными учетными записями

1. Добавьте базовый URL-адрес и метод `POST` в клиент GraphQL. При использовании GraphQL для запроса сведений, изменения сведений или передачи данных с помощью API GitHub методом HTTP по умолчанию является `POST`, а базовый URL-адрес соответствует следующему синтаксису:
    - Для экземпляра Enterprise: `https://<HOST>/api/graphql`
    - Для облака GitHub Enterprise: `https://api.github.com/graphql`

2. Чтобы пройти проверку подлинности, откройте меню параметров проверки подлинности и выберите пункт **Маркер носителя**. Затем добавьте скопированный ранее {% data variables.product.pat_generic %}.

 ![Параметры разрешений для {% data variables.product.pat_generic %}](/assets/images/developer/graphql/insomnia-base-url-and-pat.png)

 ![Параметры разрешений для {% data variables.product.pat_generic %}](/assets/images/developer/graphql/insomnia-bearer-token-option.png)

3. Включите сведения о заголовке.
   - Добавьте заголовок `Content-Type` со значением `application/json`.
   ![Стандартный заголовок](/assets/images/developer/graphql/json-content-type-header.png)
   ![Заголовок со значением предварительного просмотра для API журнала аудита](/assets/images/developer/graphql/preview-header-for-2.18.png)

Теперь все готово для выполнения запросов.

## Пример запроса с использованием API корпоративных учетных записей

Этот запрос GraphQL должен вернуть общее количество репозиториев {% ifversion not ghae %}`public`{% else %}`private`{% endif %} в каждом отделе организации с помощью API корпоративных учетных записей. Чтобы настроить запрос, замените `<enterprise-account-name>` на дескриптор вашей корпоративной учетной записи. Например, если ваша корпоративная учетная запись находится по адресу `https://github.com/enterprises/octo-enterprise`, замените `<enterprise-account-name>` на `octo-enterprise`.

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PUBLIC){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization($slug: String!) {
  enterprise(slug: $slug) {
    ...enterpriseFragment
  }
}

fragment enterpriseFragment on Enterprise {
  ... on Enterprise{
    name
    organizations(first: 100){
      nodes{
        name
        ... on Organization{
          name
          repositories(privacy: PRIVATE){
            totalCount
          }
        }
      }
    }
  }
}

# Passing our Enterprise Account as a variable
variables {
  "slug": "<enterprise-account-name>"
}
```
{% endif %}

В следующем примере запроса GraphQL показано, насколько сложно получить количество репозиториев {% ifversion not ghae %}`public`{% else %}`private`{% endif %} в каждом отделе без использования API корпоративных учетных записей.  Обратите внимание, что API корпоративных учетных записей GraphQL упрощает эту задачу для организаций, так как нужно настроить лишь одну переменную. Чтобы настроить этот запрос, замените `<name-of-organization-one>`, `<name-of-organization-two>` и т. д. на названия отделов в вашем экземпляре.

{% ifversion not ghae %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "nameOfOrganizationOne") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "nameOfOrganizationTwo") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```
{% else %}
```graphql
# Each organization is queried separately
{
  organizationOneAlias: organization(login: "name-of-organization-one") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "name-of-organization-two") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}

## How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```
{% endif %}

## Запрос сведения о каждом отделе по отдельности

{% ifversion not ghae %}

```graphql
query publicRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PUBLIC){
    totalCount
  }
}
```

{% else %}

```graphql
query privateRepositoriesByOrganization {
  organizationOneAlias: organization(login: "<name-of-organization-one>") {
    # How to use a fragment
    ...repositories
  }
  organizationTwoAlias: organization(login: "<name-of-organization-two>") {
    ...repositories
  }
  # organizationThreeAlias ... and so on up-to lets say 100
}
# How to define a fragment
fragment repositories on Organization {
  name
  repositories(privacy: PRIVATE){
    totalCount
  }
}
```

{% endif %}

Этот запрос GraphQL должен вернуть последние пять записей журнала для отдела организации. Чтобы настроить этот запрос, замените `<org-name>` и `<user-name>`.

```graphql
{
  organization(login: "<org-name>") {
    auditLog(last: 5, query: "actor:<user-name>") {
      edges {
        node {
          ... on AuditEntry {
# Get Audit Log Entry by 'Action'
            action
            actorLogin
            createdAt
# User 'Action' was performed on
           user{
              name
                email
            }
          }
        }
      }
    }
  }
}
```

Дополнительные сведения о начале работы с GraphQL см. в разделах [Введение в GraphQL](/graphql/guides/introduction-to-graphql) и [Формирование вызовов с помощью GraphQL](/graphql/guides/forming-calls-with-graphql).

## Поля и типы GraphQL для API корпоративных учетных записей

Ниже приведен обзор новых запросов, изменений и определенных в схеме типов, доступных для использования с API корпоративных учетных записей.

Дополнительные сведения о новых запросах, изменениях и определенных в схеме типов, доступных для использования с API корпоративных учетных записей, см. на боковой панели с подробными определениями GraphQL на любой [странице справки по GraphQL](/graphql).

Справочная документация доступна из обозревателя GraphQL на GitHub. Дополнительные сведения см. в разделе [Использование обозревателя](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs).
Другие сведения, например о проверке подлинности и ограничении скорости, см. в [руководствах](/graphql/guides).
