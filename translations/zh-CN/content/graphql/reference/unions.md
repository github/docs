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
ms.openlocfilehash: 550085d5cf8d9e3f9918b0e8e9c837a2ff85d9d1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496483'
---
## 关于并集

[联合](https://graphql.github.io/graphql-spec/June2018/#sec-Unions)是表示多个对象的对象类型。

例如，标记为 [`ProjectCardItem`](/graphql/reference/unions#projectcarditem) 的字段可以是 [`Issue`](/graphql/reference/objects#issue) 或 [`PullRequest`](/graphql/reference/objects#pullrequest)，因为所有这些对象都可以位于一个项目卡中。 使用并集代替对象可以带来灵活性。

有关详细信息，请参阅“[GraphQL 简介](/graphql/guides/introduction-to-graphql)”。

<!-- Content after this section is automatically generated -->
