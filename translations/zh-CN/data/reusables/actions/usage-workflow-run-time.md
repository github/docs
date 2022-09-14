---
ms.openlocfilehash: 559b84346de36e6fb6e3a3ce9f92edf9420ded34
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: "147875976"
---
- **工作流运行时** - {% ifversion fpt or ghec or ghes > 3.2 or ghae-issue-6469 %}每个工作流的运行时间限制为 35 天。 如果工作流程运行时间达到此限制，其运行将被取消。 此时间段包括执行持续时间以及等待和审批所用的时间。{% else %}每个工作流的运行时间限制为 72 小时。 如果工作流运行时间达到此限制，该工作流运行将被取消。{% endif %}
