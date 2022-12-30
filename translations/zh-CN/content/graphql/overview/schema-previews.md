---
title: 架构预览
intro: '您可以在即将推出的功能和 {% data variables.product.prodname_dotcom %} GraphQL 架构变更添加至 {% data variables.product.prodname_dotcom %} GraphQL API 之前预览它们。'
redirect_from:
  - /v4/previews
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
ms.openlocfilehash: 038afd8cbdd60863213eae385ec9a26f707f62d8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108106'
---
## 关于架构预览

在预览期间，我们可以根据开发者的反馈更改某些功能。 如果我们确实进行了更改，我们将在[开发者博客](https://developer.github.com/changes/)上公布这些更改，而不会事先通知。

若要访问架构预览，需要在请求的 `Accept` 标头中提供自定义[媒体类型](/rest/overview/media-types)。 每个预览的功能文档可指定要提供的自定义媒体类型。

{% note %}

注意：目前无法通过 Explorer 访问处于预览状态的 GraphQL 架构成员。

{% endnote %}
