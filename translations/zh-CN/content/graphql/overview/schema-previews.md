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
ms.openlocfilehash: a4097cd792931fe33363229b24f0043b9b99a1cd
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147496594'
---
## 关于架构预览

在预览期间，我们可以根据开发者的反馈更改某些功能。 如果我们确实进行了更改，我们将在[开发者博客](https://developer.github.com/changes/)上公布这些更改，而不会事先通知。

若要访问架构预览，需要在请求的 `Accept` 标头中提供自定义[媒体类型](/rest/overview/media-types)。 每个预览的功能文档可指定要提供的自定义媒体类型。

{% note %}

注意：目前无法通过 Explorer 访问处于预览状态的 GraphQL 架构成员。

{% endnote %}
