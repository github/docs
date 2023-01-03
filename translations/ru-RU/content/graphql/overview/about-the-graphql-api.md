---
title: "Сведения API\_GraphQL"
intro: 'API GraphQL {% data variables.product.prodname_dotcom %} обеспечивает гибкость и возможность точно определить данные, которые необходимо получить.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 9b447925609425157d5d965370c09fdd12d30b56
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069709'
---
## Обзор

Ниже приведены быстрые ссылки, перейдя по которым, вы можете приступить к работе с API GraphQL:

* [Аутентификация](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [Корневая конечная точка](/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [Интроспекция схемы](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [Пределы скорости](/graphql/overview/resource-limitations)
* [Миграция из REST](/graphql/guides/migrating-from-rest-to-graphql)

## Сведения о GraphQL

Язык запросов данных [GraphQL](https://graphql.github.io/):

* **[Спецификация](https://graphql.github.io/graphql-spec/June2018/).** Спецификация определяет допустимость [схемы](/graphql/guides/introduction-to-graphql#schema) на сервере API. Схема определяет допустимость вызовов клиентов.

* **[Строго типизированный](#about-the-graphql-schema-reference).** Схема определяет систему типов API и все отношения объектов.

* **[Интроспективный](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api).** Клиент может запросить схему для получения сведений о схеме.

* **[Иерархический](/graphql/guides/forming-calls-with-graphql).** Фигура вызова GraphQL отражает фигуру возвращаемых данных JSON. [Вложенные поля](/graphql/guides/migrating-from-rest-to-graphql#example-nesting) позволяют запрашивать и получать только данные, указанные в одном круговом пути.

* **Слой приложения.** GraphQL не является моделью хранилища или языком запросов к базе данных. _Граф_ ссылается на структуры графов, определенные в схеме, где [узлы](/graphql/guides/introduction-to-graphql#node) определяют объекты, а [края](/graphql/guides/introduction-to-graphql#edge) определяют отношения между объектами. API обходит и возвращает данные приложения на основе определений схемы, независимо от способа хранения данных.

## Почему GitHub использует GraphQL

GitHub использует GraphQL, так как он предлагает значительно большую гибкость для наших интеграторов. Возможность точно определить нужные данные&mdash;и _только_ данные, которые вам нужны&mdash;, является значительным преимуществом по сравнению с традиционными конечными точками REST API. GraphQL позволяет заменить несколько запросов REST с помощью _одного вызова_ для получения указанных данных.

Дополнительные сведения о том, почему GitHub инвестирует в GraphQL, см. в исходной [записи блога с объявлением](https://github.blog/2016-09-14-the-github-graphql-api/).

## Сведения о ссылке на схему GraphQL

Документы на боковой панели создаются на основе [схемы](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api) GraphQL {% data variables.product.prodname_dotcom %}. Все вызовы проверяются и выполняются согласно схеме. Используйте эти документы, чтобы узнать, какие данные можно вызвать:

* Разрешенные операции: [запросы](/graphql/reference/queries) и [изменения](/graphql/reference/mutations).

* Типы, определяемые схемой: [скаляры](/graphql/reference/scalars), [объекты](/graphql/reference/objects), [перечисления](/graphql/reference/enums), [интерфейсы](/graphql/reference/interfaces), [объединения](/graphql/reference/unions) и [входные объекты](/graphql/reference/input-objects).

Доступ к этому содержимому можно получить на [боковой панели документации обозревателя](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs). Обратите внимание, что для успешного вызова API GraphQL может потребоваться использовать как документы, так и проверку схемы.

Другие сведения, например о проверке подлинности и ограничении скорости, см. в [руководствах](/graphql/guides).

## Запрос поддержки

{% data reusables.support.help_resources %}
