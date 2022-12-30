---
title: Unions
redirect_from:
  - /v4/union
  - /v4/reference/union
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 13c5fdf292a58d73b93ff13a9de8840456d16d75
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108083'
---
## 关于并集

[联合](https://graphql.github.io/graphql-spec/June2018/#sec-Unions)是表示多个对象的对象类型。

例如，标记为 [`ProjectCardItem`](/graphql/reference/unions#projectcarditem) 的字段可以是 [`Issue`](/graphql/reference/objects#issue) 或 [`PullRequest`](/graphql/reference/objects#pullrequest)，因为所有这些对象都可以位于一个项目卡中。 使用并集代替对象可以带来灵活性。

有关详细信息，请参阅“[GraphQL 简介](/graphql/guides/introduction-to-graphql)”。

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
