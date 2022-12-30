---
title: 接口
redirect_from:
  - /v4/interface
  - /v4/reference/interface
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: a6fed36ccd70557b8d88904f83840a7afacdfacb
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108138'
---
## 关于接口

[接口](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces)用作其他对象可以继承的父对象。

例如，[`Lockable`](/graphql/reference/interfaces#lockable) 是一个接口，因为 [`Issue`](/graphql/reference/objects#issue) 和 [`PullRequest`](/graphql/reference/objects#pullrequest) 对象都可以锁定。 接口拥有自己的指定字段列表，这些字段通过实现对象得以共享。

有关详细信息，请参阅“[实现](/graphql/guides/introduction-to-graphql#implementation)”。

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
