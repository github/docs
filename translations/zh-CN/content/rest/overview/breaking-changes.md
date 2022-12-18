---
title: 重大更改
shortTitle: Breaking changes
intro: 了解每个 REST API 版本中引入的中断性变更。
versions:
  feature: api-date-versioning
ms.openlocfilehash: 674345b82c5da9b0804fe4a0f62450ff4fbbc3e9
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/29/2022
ms.locfileid: '148184392'
---
## 关于 REST API 中的中断性变更

{% data reusables.rest-api.about-api-versions %}

有关 API 版本的详细信息，请参阅“[API 版本](/rest/overview/api-versions)”。

## 升级到新的 API 版本

在升级到新 REST API 版本之前，应阅读本页上对应于新 API 版本的部分，以了解包含哪些中断性变更，并详细了解如何升级到该 API 版本。

更新集成以在 `X-GitHub-Api-Version` 标头中指定新的 API 版本时，还需要对集成进行任何所需的更改，以便与新 API 版本一起工作。

更新集成后，测试集成以验证它是否适用于新 API 版本。

## {{ initialRestVersioningReleaseDate }} 的中断性变更

版本 `{{ initialRestVersioningReleaseDate }}` 是引入基于日期的版本控制后 {% data variables.product.product_name %} REST API 的第一个版本。 此版本不包含任何中断性变更。
