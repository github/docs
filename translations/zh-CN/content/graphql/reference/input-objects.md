---
title: 输入对象
redirect_from:
  - /v4/input_object
  - /v4/reference/input_object
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 10a84ad425b0c8b871b1c64f09bef4d8cf33d007
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108139'
---
## 关于输入对象

[输入对象](https://graphql.github.io/graphql-spec/June2018/#sec-Input-Objects)可描述为“可组合对象”，因为它们包含一组用于定义对象的输入字段。

例如，[`CommitAuthor`](/graphql/reference/input-objects#commitauthor) 采用 `emails` 字段。 为 `emails` 提供一个值后，可将 `CommitAuthor` 转换成包含电子邮件地址的 `User` 对象列表。 注意，[对象](/graphql/reference/objects)可能包含输入对象，然而，[变更](/graphql/reference/mutations)需要输入对象 。

有关详细信息，请参阅“[关于变更](/graphql/guides/forming-calls-with-graphql#about-mutations)”。

{% data reusables.projects.graphql-ghes %}

<!-- Content after this section is automatically generated -->
