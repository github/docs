---
ms.openlocfilehash: 955bbcc4f03b8a3a810f282c74230f220908f6b8
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: "148108116"
---
可以从可用选项列表中选择操作系统和硬件配置。 通过自动缩放部署此运行器的新实例时，它们会使用此处定义的相同操作系统和硬件配置。

还可以定义标识运行器的标签，即工作流如何能够将作业发送到运行器进行处理（使用 `runs-on`）。 新运行器会自动分配给默认组，也可以在运行器创建过程中选择运行器必须加入的组。 此外，可以在注册运行器后修改运行器组成员身份。 有关详细信息，请参阅“[控制对 {% data variables.actions.hosted_runner %} 的访问](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)”。
