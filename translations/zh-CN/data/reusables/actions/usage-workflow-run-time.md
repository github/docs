---
ms.openlocfilehash: 559b84346de36e6fb6e3a3ce9f92edf9420ded34
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098410"
---
- **工作流运行时** - {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-6469 %}每个工作流的运行时间限制为 35 天。 如果工作流程运行时间达到此限制，其运行将被取消。 此时间段包括执行持续时间以及等待和审批所用的时间。{% else %}每个工作流的运行时间限制为 72 小时。 如果工作流运行时间达到此限制，该工作流运行将被取消。{% endif %}
