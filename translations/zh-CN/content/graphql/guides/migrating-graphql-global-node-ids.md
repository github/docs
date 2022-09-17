---
title: 迁移 GraphQL 全局节点 ID
intro: 了解两种全局节点 ID 格式以及如何从旧格式迁移到新格式。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
shortTitle: Migrating global node IDs
ms.openlocfilehash: 7d62d81e52b848e4fb8b5f6b2bae9997e0ac1209
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147717851'
---
## 背景

{% data variables.product.product_name %} GraphQL API 目前支持两种类型的全局节点 ID 格式。 旧格式将被弃用，并替换为新格式。  本指南介绍如何在必要时迁移到新格式。 

通过迁移到新格式，可以确保请求的响应时间保持一致且较短。 您还可以确保在完全弃用旧 ID 后，应用程序继续工作。

若要详细了解为何将弃用旧版全局节点 ID 格式，请参阅“[即将推出 GraphQL 的新全局 ID 格式](https://github.blog/2021-02-10-new-global-id-format-coming-to-graphql)”。

## 确定是否需要采取措施

仅在存储对 GraphQL 全局节点 ID 的引用时，才需要遵循迁移步骤。  这些 ID 对应于架构中任何对象的 `id` 字段。  如果不存储任何全局节点 ID，则可以继续与 API 交互，而不会发生任何更改。

此外，如果当前对旧 ID 进行解码以提取类型信息（例如，如果使用 `PR_kwDOAHz1OX4uYAah` 的前两个字符来确定对象是否为拉取请求），则由于 ID 的格式已更改，你的服务将中断。  应迁移服务以将这些 ID 视为不透明字符串进行处理。  这些 ID 将是唯一的，因此您可以直接依赖它们作为引用。


## 迁移到新的全局 ID

为方便迁移到新 ID 格式，你可以在 GraphQL API 请求中使用 `X-Github-Next-Global-ID` 标头。 `X-Github-Next-Global-ID` 标头的值可以是 `1` 或 `0`。  将该值设置为 `1` 将强制响应有效负载始终对为其请求 `id` 字段的任何对象使用新的 ID 格式。  将值设置为 `0` 将恢复为默认行为，即根据对象创建日期显示旧 ID 或新 ID。 

下面是一个使用 cURL 的示例请求：

```
$ curl \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-Github-Next-Global-ID: 1" \
  https://api.github.com/graphql \
  -d '{ "query": "{ node(id: \"MDQ6VXNlcjM0MDczMDM=\") { id } }" }'
```

即使查询中使用了旧 ID `MDQ6VXNlcjM0MDczMDM=`，响应也将包含新的 ID 格式：
```
{"data":{"node":{"id":"U_kgDOADP9xw"}}}
```
使用 `X-Github-Next-Global-ID` 标头，你可以找到在应用程序中引用的旧 ID 的新 ID 格式。 然后，您可以使用响应中收到的 ID 更新这些引用。 您应更新对旧版 ID 的所有引用，并对 API 的任何后续请求使用新的 ID 格式。 要执行批量操作，您可以使用别名在一次 API 调用中提交多个节点查询。 有关详细信息，请参阅“[GraphQL 文档](https://graphql.org/learn/queries/#aliases)”。

您还可以为项目集合获取新 ID。 例如，如果要获取组织中最后 10 个存储库的新 ID，则可以使用如下所示的查询：
```
{
  organization(login: "github") {
    repositories(last: 10) {
      edges {
        cursor
        node {
          name
          id
        }
      }
    }
  }
}
```

请注意，将 `X-Github-Next-Global-ID` 设置为 `1` 将影响查询中每个 `id` 字段的返回值。  这意味着，即使你提交了非 `node` 查询，只要请求了 `id` 字段便会获得新的格式 ID。

## 分享反馈

如果你对推出可影响应用的这一更改有任何顾虑，请[联系 {% data variables.product.product_name %}](https://support.github.com/contact) 并包含应用名称等信息，以便我们更好地帮助你。
