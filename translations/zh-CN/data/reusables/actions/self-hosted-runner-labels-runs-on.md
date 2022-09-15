---
ms.openlocfilehash: e264eacc4226a90eb80980c2b19f48dc7c1889c7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147879541"
---
要为作业指定自托管运行器，请在工作流文件中使用自托管运行器标签配置 `runs-on`。

所有自托管运行器都有 `self-hosted` 标签。 仅使用此标签将选择任何自托管运行器。 选择符合特定条件的运行器，例如操作系统或体系结构，建议提供以 `self-hosted` 开头的标签数组（必须首先列出），然后根据需要包含其他标签。 指定标签数组时，作业将在具有你指定的所有标签的运行器上排队。

尽管 `self-hosted` 标签不是必需的，但强烈建议在使用自托管运行器时指定它，以确保作业不会无意中指定任何当前或将来的 {% data variables.product.prodname_dotcom %} 托管运行器。
