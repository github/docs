---
title: 重大更改
intro: '了解最近和即将发生的 {% data variables.product.prodname_dotcom %} GraphQL API 重大变更。'
redirect_from:
  - /v4/breaking_changes
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: c76520b1f9dc806659373771b42501e072319937
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108226'
---
## 关于重大变更

重大变更是指可能需要集成商采取行动的任何变更。 我们将这些变更分为两类：

- 中断性变更：会改变对 GraphQL API 的现有查询的变更。 例如，删除字段就是重大变更。
- 危险变更：不会改变现有查询，但会影响客户端运行时的行为的变更。 添加枚举值就是一个危险变更示例。

我们努力为集成商提供稳定的 API。 当某项新功能还处于完善阶段时，我们将在[架构预览](/graphql/overview/schema-previews)模式下发布此功能。

我们将在更改 GraphQL 架构前至少三个月宣布即将发生的重大变更，以便给集成商预留进行必要调整的时间。 变更在季度第一天（1 月 1 日、4 月 1 日、7 月 1 日或 10 月 1 日）生效。 例如，如果我们在 1 月 15 日宣布变更，将在 7 月 1 日执行。
