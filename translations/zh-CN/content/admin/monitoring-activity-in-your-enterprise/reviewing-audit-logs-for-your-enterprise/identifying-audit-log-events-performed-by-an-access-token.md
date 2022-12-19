---
title: 标识由访问令牌执行的审核日志事件
shortTitle: Identify events by token
intro: '可以在企业中标识由特定 {% data variables.product.pat_generic %} 或 OAuth 令牌执行的操作。'
versions:
  feature: token-audit-log
ms.openlocfilehash: 4452e740e611ea3f903c5d122222b3cb575ba37d
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159496'
---
## 关于审核日志中的令牌数据

在企业的审核日志中，对于使用 {% data variables.product.pat_generic %} 或 OAuth 应用程序进行身份验证所执行的任何操作，事件数据将显示所使用的身份验证方法和令牌的 SHA-256 哈希值。

如果得知某个令牌已被盗用，可以通过在企业的审核日志中搜索与该令牌相关联的所有事件，来了解由被盗用的令牌执行的操作。

导出审核日志时不包括经过哈希处理的令牌值。

## 搜索与令牌关联的事件

在搜索与特定令牌关联的事件时，可以使用 UI 或 REST API。 在任一情况下，都需要先了解令牌的 SHA-256 哈希值。

### 为令牌生成 SHA-256 哈希值

如果只有原始令牌值，则需要先生成 SHA-256 哈希值，然后才能搜索令牌。

对于 MacOS 和 Linux，可使用 `echo -n TOKEN | openssl dgst -sha256 -binary | base64` 并将 TOKEN 替换为令牌值。

对于 Powershell，可以使用以下脚本返回给定字符串的 SHA-256 哈希值。

```shell{:copy}
Param (
    [Parameter(Mandatory=$true)]
    [string]
    $ClearString
)

$hasher = [System.Security.Cryptography.HashAlgorithm]::Create('sha256')
$hash = $hasher.ComputeHash([System.Text.Encoding]::UTF8.GetBytes($ClearString))

$hashString = [System.BitConverter]::ToString($hash)
$hashString.Replace('-', '')
```

### 在 {% data variables.product.prodname_dotcom %} 上进行搜索

在 {% data variables.product.prodname_dotcom %} 上搜索审核日志时，在搜索查询中添加 `hashed_token:"VALUE"`，并将 `VALUE` 替换为令牌的 SHA-256 哈希值。 

{% note %}

注意：确保将经过哈希处理的令牌值用引号括起来。

{% endnote %}

### 使用 REST API 进行搜索

在生成 SHA-256 哈希值后，还需要对该哈希值进行 URI 转义，然后才能使用 REST API 搜索令牌。 大多数主要的编程语言都提供了用于 URI 转义的实用工具。 例如，[encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) 会对 JavaScript 字符串进行编码。

然后，在搜索短语中添加 `hashed_token:"VALUE"`，并将 VALUE 替换为 URI 转义的哈希。 

例如，如果企业帐户的名称为 `octo-corp`，则以下 curl 命令将在 @octo-corp 的审核日志中搜索与令牌相关联的所有事件，该令牌的 URI 编码的 SHA-256 哈希值为 `EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8`。

```
curl --location --request GET 'https://api.github.com/enterprises/octo-corp/audit-log?phrase=hashed_token:"EH4L8o6PfCqipALbL%2BQT62lyqUtnI7ql0SPbkaQnjv8"' \
--header 'Authorization: Basic TOKEN' \ 
```

## 延伸阅读

- [在企业中使用审核日志 API](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)
