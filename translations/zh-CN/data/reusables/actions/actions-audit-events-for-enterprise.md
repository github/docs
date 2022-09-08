---
ms.openlocfilehash: ed7e94a18edf6d5c55ba6fb12c5f09236a9f2fe5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145098591"
---
| 操作 | 说明
|------------------|-------------------
| `remove_self_hosted_runner` | 当自托管运行器被移除时触发。
| `register_self_hosted_runner` | 在注册新的自托管运行器时触发。 有关详细信息，请参阅“[添加自承载运行器](/actions/hosting-your-own-runners/adding-self-hosted-runners)”。
| `runner_group_created` | 在创建自托管运行器组时触发。 有关详细信息，请参阅“[关于自承载运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#about-self-hosted-runner-groups)”。
| `runner_group_removed` | 当自托管运行器组被移除时触发。 有关详细信息，请参阅“[删除自托管运行器组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#removing-a-self-hosted-runner-group)”。
| `runner_group_runner_removed` | 当 REST API 用于从组中删除自托管运行器时触发。
| `runner_group_runners_added` | 当自托管运行器添加到组时触发。 有关详细信息，请参阅“[将自承载运行器移动到组](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#moving-a-self-hosted-runner-to-a-group)”。
| `runner_group_runners_updated` | 当运行器组成员列表更新时触发。 有关详细信息，请参阅“[为组织设置自托管运行器](/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization)”。
| `runner_group_updated` | 当自托管运行器组的配置改变时触发。 有关详细信息，请参阅“[更改自托管运行器组的访问策略](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups#changing-the-access-policy-of-a-self-hosted-runner-group)”。
| `self_hosted_runner_updated` | 当运行器应用程序更新时触发。 可以使用 REST API 和 UI 查看；在 JSON /CSV 导出中不可见。 有关详细信息，请参阅“[有关自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#about-self-hosted-runners)”。{% ifversion fpt or ghec %}
| `self_hosted_runner_online` | 当运行器应用程序启动时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。
| `self_hosted_runner_offline` | 当运行器应用程序停止时触发。 只能使用 REST API 查看；在 UI 或 JSON/CSV 导出中不可见。 有关详细信息，请参阅“[检查自托管运行器的状态](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-the-status-of-a-self-hosted-runner)”。{% endif %}
