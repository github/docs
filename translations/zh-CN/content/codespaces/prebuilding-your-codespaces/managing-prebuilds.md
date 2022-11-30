---
title: 管理预生成
shortTitle: Manage prebuilds
intro: 你可以查看、修改和删除存储库的预生成配置。
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: f39c46d91193db4c1c44ab336d86024b40adcea4
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159514'
---
## 检查、更改和删除预生成配置

为存储库配置的预生成是使用 {% data variables.product.prodname_actions %} 工作流（由 {% data variables.product.prodname_github_codespaces %} 服务管理）创建和更新的。 

根据预生成配置中的设置，更新预生成的工作流可能会由以下事件触发：

* 创建或更新预生成配置
* 将提交或拉取请求推送到配置为具有预生成的分支
* 更改任何开发容器配置文件
* 在预生成配置中定义的计划
* 手动触发工作流

预生成配置中的设置确定哪些事件会自动触发预生成的更新。 有关详细信息，请参阅“[配置预生成](/codespaces/prebuilding-your-codespaces/configuring-prebuilds#configuring-prebuilds)”。 

具有存储库管理员访问权限的人员可以检查预生成的进度以及编辑和删除预生成配置。 

### 查看预生成的进度
可以在存储库设置的 {% data variables.product.prodname_github_codespaces %} 页上查看所设置的每个预生成配置的最新工作流运行的当前状态。 例如，“当前正在运行”或“1 小时前最后一次运行”。

若要查看最新预生成工作流运行的日志输出，请单击“查看输出”。

![“查看输出”按钮](/assets/images/help/codespaces/prebuilds-see-output.png) 

这会在“操作”选项卡中显示工作流的最近一次运行的输出。

![预生成工作流输出](/assets/images/help/codespaces/prebuilds-log-output.png) 

或者，若要查看与指定分支关联的所有预生成工作流运行，请单击省略号按钮，然后从下拉菜单中选择“查看运行”。

![下拉菜单中的“查看运行”选项](/assets/images/help/codespaces/prebuilds-view-runs.png) 

这将显示关联分支的预生成工作流运行历史记录。

![工作流运行历史记录](/assets/images/help/codespaces/prebuilds-workflow-runs.png) 

### 编辑预生成配置

1. 在存储库设置的 {% data variables.product.prodname_codespaces %} 页上，单击要编辑的预生成配置右侧的省略号。
1. 在下拉菜单中，单击“编辑”。
 
   ![下拉菜单中的“编辑”选项](/assets/images/help/codespaces/prebuilds-edit.png) 

1. 对预生成配置进行所需的更改，然后单击“更新”。 

   {% data reusables.codespaces.prebuilds-permission-authorization %}


### 禁用预生成配置

若要暂停更新配置的预生成，可以禁用配置的工作流运行。 为预生成配置禁用工作流运行不会删除以前为该配置创建的任何预生成，因此，codespace 将继续从现有预生成生成。

如果需要调查预生成创建失败，则禁用预生成配置的工作流运行非常有用。

1. 在存储库设置的 {% data variables.product.prodname_codespaces %} 页上，单击要禁用的预生成配置右侧的省略号。
1. 在下拉菜单中，单击“禁用运行”。

   ![下拉菜单中的“禁用运行”选项](/assets/images/help/codespaces/prebuilds-disable.png)

1. 若确认要禁用此配置，请单击“确定”。

### 删除预生成配置

删除预生成配置还会删除以前为该配置创建的所有预生成。 因此，删除配置后不久，在创建新 codespace 时，该配置生成的预生成将不再可用。

删除预生成配置后，该配置已排队或启动的工作流仍将运行。 它们将连同以前完成的工作流运行一起列在工作流运行历史记录中。

1. 在存储库设置的 {% data variables.product.prodname_codespaces %} 页上，单击要删除的预生成配置右侧的省略号。
1. 在下拉菜单中，单击“删除”。

   ![下拉菜单中的“删除”选项](/assets/images/help/codespaces/prebuilds-delete.png)

1. 单击“确定”确认删除操作。

### 手动触发预生成

手动触发预生成配置的工作流运行可能很有用。 通常，只有在调试预生成配置的工作流的问题时，才有必要这样做。

1. 在存储库设置的 {% data variables.product.prodname_codespaces %} 页上，单击要触发其工作流的预生成配置右侧的省略号。
1. 在下拉菜单中，单击“手动触发”。

   ![下拉菜单中的“手动触发”选项](/assets/images/help/codespaces/prebuilds-manually-trigger.png) 

## 延伸阅读

- [对预生成进行故障排除](/codespaces/troubleshooting/troubleshooting-prebuilds)
