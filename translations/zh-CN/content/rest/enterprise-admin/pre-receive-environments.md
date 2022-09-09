---
title: 预接收环境
intro: 预接收环境 API 允许您创建、列出、更新和删除预接收挂钩的环境。
versions:
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 9db8635691ae2f8fcb8649b648948763168081ac
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060592'
---
它仅适用于[经过身份验证的](/rest/overview/resources-in-the-rest-api#authentication)网站管理员。 如果普通用户尝试访问它，他们将收到 `404` 响应。

### 对象属性

#### 预接收环境

| 名称                  | 类型      | 说明                                                                |
|-----------------------|-----------|----------------------------------------------------------------------------|
| `name`                | `string`  | UI 中显示的环境名称。                        |
| `image_url`           | `string`  | 将要下载并解压缩的 tarball 的 URL。                  |
| `default_environment` | `boolean` | 这是否是 {% data variables.product.product_name %} 附带的默认环境。 |
| `download`            | `object`  | 此环境的下载状态。                                        |
| `hooks_count`         | `integer` | 使用此环境的预接收挂钩数量。                 |

#### 预接收环境下载

| 名称            | 类型     | 说明                                             |
|-----------------|----------|---------------------------------------------------------|
| `state`         | `string` | 最近下载的状态。                  |
| `downloaded_at` | `string` | 最近下载开始的时间。         |
| `message`       | `string` | 在失败时生成任何错误消息。 |

`state` 的可能值为 `not_started`、`in_progress`、`success`、`failed`。
