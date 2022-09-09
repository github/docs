---
ms.openlocfilehash: 142794535bf66481cbdf5ec8430ed18ff9a0034d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147079528"
---
可使用 SHA、发布标记或分支名称引用公共存储库中的可重用工作流。 有关详细信息，请参阅[“调用可重用工作流”](/actions/using-workflows/reusing-workflows#calling-a-reusable-workflow)。 

重新运行使用可重用工作流且引用不是 SHA 的工作流时，有一些行为需要注意：

* 重新运行工作流中的所有作业时将使用指定引用中的可重用工作流。 有关重新运行工作流中的所有作业的详细信息，请参阅[“重新运行工作流中的所有作业”](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-all-the-jobs-in-a-workflow)。
* 重新运行失败的作业或工作流中的特定作业时将使用第一次尝试的同一提交 SHA 中的可重用工作流。 有关重新运行工作流中失败的作业的详细信息，请参阅[“重新运行工作流中失败的作业”](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-failed-jobs-in-a-workflow)。 有关重新运行工作流中的特定作业的详细信息，请参阅[“重新运行工作流中的特定作业”](/actions/managing-workflow-runs/re-running-workflows-and-jobs#re-running-a-specific-job-in-a-workflow)。
