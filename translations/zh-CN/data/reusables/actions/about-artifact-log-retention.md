---
ms.openlocfilehash: 8a86f408128b56cc31c0e8876e962994edf7cdc4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145282831"
---
默认情况下，工作流程生成的构件和日志文件将保留 90 天，然后自动删除。

{%- ifversion fpt or ghec %} 可以根据存储库类型调整保持期：

- 对于公共仓库：您可以将此保留期更改为 1 至 90 天。
- 对于专用{% ifversion ghec %}和内部{% endif %}存储库：可以将此保持期更改为 1 天或 400 天之间的任何时长。
{%- else %} 可以将此保持期更改为 1 天或 400 天之间的任何时长。
{%- endif %}

自定义保留期时，它仅适用于新构件和日志文件，并且不追溯性地应用于现有对象。 对于托管的仓库和组织，最长保留期不能超过管理组织或企业设置的限制。
