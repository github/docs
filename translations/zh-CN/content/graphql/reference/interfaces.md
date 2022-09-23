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
ms.openlocfilehash: de0a12e638a7f98f34b1704e272b040a6178eaeb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496610'
---
## 关于接口

[接口](https://graphql.github.io/graphql-spec/June2018/#sec-Interfaces)用作其他对象可以继承的父对象。

例如，[`Lockable`](/graphql/reference/interfaces#lockable) 是一个接口，因为 [`Issue`](/graphql/reference/objects#issue) 和 [`PullRequest`](/graphql/reference/objects#pullrequest) 对象都可以锁定。 接口拥有自己的指定字段列表，这些字段通过实现对象得以共享。

有关详细信息，请参阅“[实现](/graphql/guides/introduction-to-graphql#implementation)”。

<!-- Content after this section is automatically generated -->
