---
ms.openlocfilehash: a9030eae8492863ee750f2a02eeac584fd13513a
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: "145065872"
---

### 检查您的自托管运行器是否已成功添加

在完成添加自托管运行器的步骤后，运行器及其状态列在{% ifversion fpt or ghec %}“运行器”{% elsif ghae or ghes %}“自托管运行器”{% endif %}下。

必须激活自托管运行器应用程序，运行器才能接受作业。 当运行器应用程序连接到 {% data variables.product.product_name %} 并准备接收作业时，你将在机器的终端上看到以下消息。

{% data reusables.actions.self-hosted-runner-connected-output %}
