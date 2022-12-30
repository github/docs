---
title: Использование обозревателя
intro: 'Вы можете выполнять запросы к реальным данным {% data variables.product.prodname_dotcom %} с помощью обозревателя GraphQL, интегрированной среды разработки в браузере, которая включает документы, выделение синтаксиса и ошибки проверки.'
redirect_from:
  - /v4/guides/using-the-explorer
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 19c534dd0cdcacdfd0d96bb93d055ff3fca8690b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '146749492'
---
## Сведения об обозревателе GraphQL

{% ifversion fpt or ghec %}

[Обозреватель GraphQL](/graphql/overview/explorer) — это экземпляр [GraphiQL](https://github.com/graphql/graphiql), который представляет собой "графическую интерактивную IDE GraphQL в браузере".

{% else %}

[GraphiQL](https://github.com/graphql/graphiql), также упоминаемый в этой документации как обозреватель GraphQL, является "графической интерактивной IDE GraphQL в браузере".

{% endif %}

## Использование GraphiQL

Чтобы использовать приложение GraphiQL, скачайте и установите его с https://github.com/skevy/graphiql-app.

### Настройка GraphiQL

1. Получение [токена OAuth](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql).
1. Запустите GraphiQL.
1. В правом верхнем углу GraphiQL щелкните **Edit HTTP Headers** (Изменить заголовки HTTP).
1. В поле **Ключ** введите `Authorization`. В поле **Значение** введите `Bearer <token>`, где `<token>` — это созданный токен OAuth.
![Заголовки graphiql](/assets/images/developer/graphiql-headers.png)
1. Установите флажок справа от токена, чтобы его сохранить.
1. Чтобы вернуться в редактор, щелкните за пределами модального окна **Изменить заголовки HTTP**.
1. В поле **GraphQL Endpoint** (Конечная точка GraphQL) введите `{% data variables.product.graphql_url_pre %}`.
1. В раскрывающемся меню **Метод** выберите **POST**.

{% note %}

**Примечание**. Дополнительные сведения о том, почему `POST` является методом, см. в разделе [Взаимодействие с GraphQL](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql).

{% endnote %}

Можно проверить доступ, сделав запрос себе:

```graphql
query {
  viewer {
    login
  }
}
```

Если все сработало правильно, будет отображаться ваше имя для входа. Все готово для начала выполнения запросов.

## Доступ к документации на боковой панели

Все типы в схеме GraphQL включают поле `description`, скомпилированное в документацию. Свертываемая панель **Документация** справа на странице обозревателя позволяет просматривать документацию по системе типов. Документация автоматически обновляется, а нерекомендуемые поля удаляются.

{% note %}

Боковая панель **Документации** содержит то же содержимое, которое автоматически создается из схемы в разделе [Ссылка](/graphql), хотя местами оно отформатировано по-разному.

{% endnote %}

## Использование панели переменных

Некоторые примеры вызовов включают [переменные](/graphql/guides/forming-calls-with-graphql#working-with-variables), написанные так:

```graphql
query($number_of_repos:Int!){
  viewer {
    name
     repositories(last: $number_of_repos) {
       nodes {
         name
       }
     }
   }
}
variables {
   "number_of_repos": 3
}
```

Это правильный формат для отправки вызова через cURL `POST` (при условии, что вы [экранируете новые строки](/graphql/guides/forming-calls-with-graphql#communicating-with-graphql)).

Если вы хотите выполнить вызов в обозревателе, введите сегмент `query` на главной панели и переменные на панели **Переменные запроса** под ним. Опустите слово `variables` из обозревателя:

```graphql
{
   "number_of_repos": 3
}
```

## Запрос поддержки

{% data reusables.support.help_resources %}

## Устранение ошибок

Так как GraphQL является [интроспективным](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api), обозреватель поддерживает:

* Интеллектуальные опережающие вводы с учетом текущей схемы
* Предварительный просмотр ошибок проверки при вводе

Если вы вводите запрос с неправильным форматом или запрос, который не проходит [проверку схемы](/graphql/guides/introduction-to-graphql#schema), всплывающее окно предупредит вас об ошибке. При выполнении запроса ошибка возвращается в панель ответов.

Ответ GraphQL содержит несколько ключей: хэш `data` и массив `errors`.

```json
{
  "data": null,
  "errors": [
    {
      "message": "Objects must have selections (field 'nodes' returns Repository but has no selections)",
      "locations": [
        {
          "line": 5,
          "column": 8
        }
      ]
    }
  ]
}
```

Возможно, вы столкнулись с непредвиденной ошибкой, не связанной со схемой. В этом случае сообщение будет содержать справочный код, который можно использовать, сообщая о проблеме:

```json
{
  "data": null,
  "errors": [
    {
      "message": "Something went wrong while executing your query. This is most likely a GitHub bug. Please include \"7571:3FF6:552G94B:69F45B7:5913BBEQ\" when reporting this issue."
    }
  ]
}
```

{% note %}

**Примечание.** {% data variables.product.prodname_dotcom %} рекомендует проверять наличие ошибок перед использованием данных в рабочей среде. В GraphQL сбой не является общим: часть запросов GraphQL может быть выполнена успешно, а другая — завершиться сбоем.

{% endnote %}
