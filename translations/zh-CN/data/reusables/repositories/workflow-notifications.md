---
ms.openlocfilehash: 307a695e8a973c7b37a29ebbeb4606a8ed43d38d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145099345"
---
如果为 {% data variables.product.prodname_actions %} 启用电子邮件或 web 通知，则在触发的任何工作流程运行完成时，您将收到通知。 通知将包括工作流程运行的状态（包括成功、失败、中立和取消的运行）。 您也可以选择仅在工作流程运行失败时接收通知。 有关启用或禁用通知的详细信息，请参阅“[关于通知](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications)”。

计划工作流程的通知将发送给最初创建该工作流程的用户。 如果其他用户更新工作流文件中的 cron 语法，则后续通知将改为发送给该用户。{% ifversion fpt or ghes or ghec %} 如果计划的工作流被禁用然后重新启用，通知将发送给重新启用工作流的用户，而不是最后修改 cron 语法的用户。{% endif %}

还可以在存储库的“操作”选项卡上查看工作流运行的状态。有关详细信息，请参阅“[管理工作流运行](/actions/automating-your-workflow-with-github-actions/managing-a-workflow-run)”。
