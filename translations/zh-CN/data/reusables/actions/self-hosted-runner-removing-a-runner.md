---
ms.openlocfilehash: 0d73e17e61dc0848a42a18a7e1811b43e541b6a4
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: "147061296"
---
1. 在“运行器”下的列表中找到运行器。 如果您的运行器在一个组中，请单击 {% octicon "chevron-down" aria-label="The downwards chevron" %} 以展开列表。
1. 单击要删除的运行器旁边的 {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}，然后单击“删除”。

    ![删除自托管运行器设置](/assets/images/help/settings/actions-runner-remove.png)
1. 您将看到删除自托管运行器的说明。 完成以下任一步骤来删除运行器，具体取决于它是否仍然可以访问：

    * 如果你可以访问运行器计算机：按照计算机操作系统的屏幕说明运行删除命令。 该说明包括必需的 URL 和一个自动生成的有时限的令牌。

        删除命令执行以下任务：

        * 从 {% data variables.product.product_name %} 删除运行器。
        * 删除机器上的任何自托管运行器应用程序配置文件。
        * 如果未在交互模式下运行，删除配置的任何服务。

    * 如果你无权访问计算机：单击“是，强制删除此运行器”以强制 {% data variables.product.product_name %} 删除运行器 。
