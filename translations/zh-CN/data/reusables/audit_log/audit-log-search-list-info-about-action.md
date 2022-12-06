---
ms.openlocfilehash: e01273fe15058c00b11d380a3c50d4448cfb92b8
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180781"
---
每个审核日志条目的名称由 `action` 对象或类别限定符组成，后跟操作类型。 例如，`repo.create` 条目是指对 `repo` 类别的 `create` 操作。

每个审核日志条目都显示有关事件的适用信息，例如：

- 执行操作的{% ifversion ghec or ghes or ghae %}企业或{% endif %}组织
- 执行操作的用户（参与者）
- 受操作影响的用户
- 执行操作的仓库
- 执行的操作
- 发生操作的国家/地区
- 发生操作的日期和时间 {%- ifversion enterprise-audit-log-ip-addresses %}
- （可选）执行了操作的用户（执行者）的源 IP 地址 {%- endif %}
