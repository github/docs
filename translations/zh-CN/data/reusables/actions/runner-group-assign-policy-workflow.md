---
ms.openlocfilehash: 115103621cb0b156ebb7a3c2c72f0f303c497cfb
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "146178605"
---
{%- ifversion restrict-groups-to-workflows %}
1. 分配用于工作流访问的策略。

   可以将运行器组配置为可供特定工作流列表或所有工作流访问。 如果是配置企业共享的组织运行器组，则不能覆盖此设置。 如果指定可以访问运行器组的工作流，则必须使用工作流的完整路径，包括存储库名称和所有者，并且必须将工作流固定到分支、标记或完整 SHA。 例如：`octo-org/octo-repo/.github/workflows/build.yml@v2, octo-org/octo-repo/.github/workflows/deploy.yml@d6dc6c96df4f32fa27b039f2084f576ed2c5c2a5, monalisa/octo-test/.github/workflows/test.yml@main`。 
   
   只有直接在所选工作流程中定义的作业才能访问运行器组。{%- endif %}
