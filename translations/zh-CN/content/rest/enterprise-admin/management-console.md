---
title: 管理控制台
intro: '管理控制台 API 可帮助您管理 {% data variables.product.product_name %} 安装设施。'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: da38513a04525b858e041188eec6f691db9be1d9
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065536'
---
{% tip %}

在对管理控制台进行 API 调用时，必须明确设置端口号。 如果企业启用了 TLS，则端口号为 `8443`；否则，端口号为 `8080`。

如果您不想提供端口号，则需要将工具配置为自动遵循重定向。

使用 `curl` 时可能还需要添加 [`-k` 标志](http://curl.haxx.se/docs/manpage.html#-k)，因为在[添加自己的 TLS 证书](/enterprise/admin/guides/installation/configuring-tls/)之前，{% data variables.product.product_name %} 使用自签名证书。

{% endtip %}

### 身份验证

需要将[管理控制台密码](/enterprise/admin/articles/accessing-the-management-console/)作为身份验证令牌传递给除 [`/setup/api/start`](#create-a-github-enterprise-server-license) 之外的每个管理控制台 API 终结点。

使用 `api_key` 参数在每个请求中发送此令牌。 例如：

```shell
$ curl -L 'https://<em>hostname</em>:<em>admin_port</em>/setup/api?api_key=<em>your-amazing-password</em>'
```

还可以使用标准 HTTP 身份验证发送此令牌。 例如：

```shell
$ curl -L -u "api_key:<em>your-amazing-password</em>" 'https://<em>hostname</em>:<em>admin_port</em>/setup/api'
```
