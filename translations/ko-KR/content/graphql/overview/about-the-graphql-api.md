---
title: GraphQL API 정보
intro: '{% data variables.product.prodname_dotcom %} GraphQL API는 유연성과 가져오려는 데이터를 정확하게 정의하는 기능을 제공합니다.'
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
ms.contentlocale: ko-KR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068420'
---
## 개요

다음은 GraphQL API로 시작하고 실행할 수 있는 몇 가지 빠른 링크입니다.

* [인증](/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
* [루트 엔드포인트](/graphql/guides/forming-calls-with-graphql#the-graphql-endpoint)
* [스키마 내적 검사](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)
* [속도 제한](/graphql/overview/resource-limitations)
* [REST에서 마이그레이션](/graphql/guides/migrating-from-rest-to-graphql)

## GraphQL 정보

[GraphQL](https://graphql.github.io/) 데이터 쿼리 언어의 특성은 다음과 같습니다.

* **[사양](https://graphql.github.io/graphql-spec/June2018/).** 사양은 API 서버에서 [스키마](/graphql/guides/introduction-to-graphql#schema)의 유효성을 결정합니다. 스키마는 클라이언트 호출의 유효성을 결정합니다.

* **[강력한 형식](#about-the-graphql-schema-reference).** 스키마는 API의 형식 시스템 및 모든 개체 관계를 정의합니다.

* **[내적](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api).** 클라이언트는 스키마에 대한 세부 정보를 쿼리할 수 있습니다.

* **[계층적](/graphql/guides/forming-calls-with-graphql).** GraphQL 호출의 모양은 반환되는 JSON 데이터의 모양을 반영합니다. [중첩된 필드](/graphql/guides/migrating-from-rest-to-graphql#example-nesting)를 사용하면 단일 왕복에서 지정한 데이터만 쿼리하고 받을 수 있습니다.

* **애플리케이션 레이어.** GraphQL은 스토리지 모델 또는 데이터베이스 쿼리 언어가 아닙니다. _그래프_ 는 스키마에 정의된 그래프 구조를 나타내며, 여기서 [노드](/graphql/guides/introduction-to-graphql#node)는 개체를 정의하고 [에지](/graphql/guides/introduction-to-graphql#edge)는 개체 간의 관계를 정의합니다. API는 데이터가 저장되는 방식과 관계없이 스키마 정의에 따라 애플리케이션 데이터를 트래버스하고 반환합니다.

## GitHub가 GraphQL을 사용하는 이유

통합자에게 훨씬 더 많은 유연성을 제공하므로 GitHub는 GraphQL을 선택했습니다. 원하는 데이터를(원하는 데이터만) 정확하게 정의하는 기능은 기존의 REST API 엔드포인트보다 강력한 이점을 제공합니다. GraphQL을 사용하면 여러 REST 요청을 _단일 호출_ 로 바꾸어 지정한 데이터를 가져올 수 있습니다.

GitHub가 GraphQL에 투자한 이유에 대한 자세한 내용은 원래 [공지 블로그 게시물](https://github.blog/2016-09-14-the-github-graphql-api/)을 참조하세요.

## GraphQL 스키마 참조 정보

사이드바의 문서는 {% data variables.product.prodname_dotcom %} GraphQL [스키마](/graphql/guides/introduction-to-graphql#discovering-the-graphql-api)에서 생성됩니다. 모든 호출은 스키마에 대해 유효성 검사를 마친 후 실행됩니다. 호출할 수 있는 데이터를 확인하려면 다음 문서를 사용합니다.

* 허용되는 작업: [쿼리](/graphql/reference/queries) 및 [변형](/graphql/reference/mutations).

* 스키마 정의 형식: [스칼라](/graphql/reference/scalars), [개체](/graphql/reference/objects), [열거형](/graphql/reference/enums), [인터페이스](/graphql/reference/interfaces), [공용 구조체](/graphql/reference/unions), [입력 개체](/graphql/reference/input-objects).

[Explorer 문서 사이드바](/graphql/guides/using-the-explorer#accessing-the-sidebar-docs)를 통해 이 동일한 콘텐츠에 액세스할 수 있습니다. GraphQL API를 성공적으로 호출하려면 문서와 스키마 유효성 검사를 모두 사용해야 할 수 있습니다.

인증 및 속도 제한 세부 정보와 같은 기타 정보는 [가이드](/graphql/guides)를 확인하세요.

## 지원 요청

{% data reusables.support.help_resources %}
