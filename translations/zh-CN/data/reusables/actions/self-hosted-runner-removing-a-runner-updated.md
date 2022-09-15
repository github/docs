---
ms.openlocfilehash: cf95e20b26e8fb29fbae23c0a5e9a913aa73c8b0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145065850"
---
1. 单击 **“删除”** 。
1. 您将看到删除自托管运行器的说明。 完成以下任一步骤来删除运行器，具体取决于它是否仍然可以访问：

    * 如果你可以访问运行器计算机：按照计算机操作系统的屏幕说明运行删除命令。 该说明包括必需的 URL 和一个自动生成的有时限的令牌。

        删除命令执行以下任务：

        * 从 {% data variables.product.product_name %} 删除运行器。
        * 删除机器上的任何自托管运行器应用程序配置文件。
        * 如果未在交互模式下运行，删除配置的任何服务。

    * 如果无权访问计算机：单击“强制删除此运行器”以强制 {% data variables.product.product_name %} 删除运行器 。
