---
ms.openlocfilehash: dd7c5f37ab5b2d699b47460195e02ae21fca1733
ms.sourcegitcommit: d2f0b59ed096b9e68ef8f6fa019cd925165762ec
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/29/2022
ms.locfileid: "148184387"
---
{% data variables.product.product_name %} REST API 已进行版本控制。 API 版本名称基于 API 版本的发布日期。 例如，API 版本 `{{ initialRestVersioningReleaseDate }}` 在 {{ initialRestVersioningReleaseDateLong }} 上发布。

任何中断性变更都将在新 API 版本中发布。 中断性变更是可能会中断集成的变更。 中断性变更包括：

- 删除整个操作
- 删除或重命名参数
- 删除或重命名响应字段
- 添加新的必需参数
- 使以前的可选参数成为必需参数
- 更改参数或响应字段的类型
- 删除枚举值
- 向现有参数添加新的验证规则
- 更改身份验证或授权要求

所有支持的 API 版本都将提供任何附加（非中断性）更改。 附加更改是不应中断集成的更改。 附加更改包括：

- 添加操作
- 添加可选参数
- 添加可选请求标头
- 添加响应字段
- 添加响应头
- 添加枚举值

当发布新 REST API 版本时，在发布新 API 版本后，以前的 API 版本将至少支持 24 个月。
