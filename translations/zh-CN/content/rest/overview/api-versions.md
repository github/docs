---
title: API 版本
shortTitle: API Versions
intro: 必须指定在向 REST API 发出请求时要使用的 REST API 版本。
versions:
  feature: api-date-versioning
ms.openlocfilehash: 6689d8c342930a44c7d243c3872cdc431007eb1c
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192863'
---
## 关于 API 版本控制

{% data reusables.rest-api.about-api-versions %}

{% ifversion ghes %}

## 关于 {% data variables.product.prodname_ghe_server %} 版本控制和 REST API 版本控制

{% data variables.product.prodname_ghe_server %} 版本与 REST API 版本分离。 您可以升级 {% data variables.product.prodname_ghe_server %} 版本，但保留相同的 REST API 版本，前提是该 API 版本包含在 {% data variables.product.prodname_ghe_server %} 版本中。 同样，只要所选的新 REST API 版本可用于 {% data variables.product.prodname_ghe_server %} 版本，则无需更新 {% data variables.product.prodname_ghe_server %} 版本即可升级 REST API 版本。

{% data variables.product.prodname_ghe_server %} 发行说明将指出何时 REST API 版本不再受支持。 有关详细信息，请参阅“[发行说明](/admin/release-notes)”。

{% endif %}

## 指定 API 版本

应使用 `X-GitHub-Api-Version` 标头指定 API 版本。 例如：

```shell
$ curl {% data reusables.rest-api.version-header %} https://api.github.com/zen
```

不带 `X-GitHub-Api-Version` 标头的请求将默认使用 `{{ initialRestVersioningReleaseDate }}` 版本。

如果指定不再受支持的 API 版本，将收到错误 `400`。

## 升级到新的 API 版本

在升级到新的 REST API 版本之前，应阅读新 API 版本的中断性变更日志，以了解包含哪些中断性变更，并详细了解如何升级到该特定 API 版本。 有关详细信息，请参阅“[中断性变更](/rest/overview/breaking-changes)”。

更新集成以在 `X-GitHub-Api-Version` 标头中指定新的 API 版本时，还需要对集成进行任何所需的更改，以便与新 API 版本一起工作。

更新集成后，测试集成以验证它是否适用于新 API 版本。

## 支持的 API 版本

当前支持以下 REST API 版本：

{% for apiVersion in allVersions[currentVersion].apiVersions %} {{ apiVersion }} {% endfor %}

还可以发出 API 请求以获取所有受支持的 API 版本。 有关详细信息，请参阅“[获取 API 版本](/rest/meta#get-all-api-versions)”。
