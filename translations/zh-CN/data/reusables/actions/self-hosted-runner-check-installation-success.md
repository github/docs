---
ms.openlocfilehash: a9030eae8492863ee750f2a02eeac584fd13513a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145065872"
---

### 检查您的自托管运行器是否已成功添加

在完成添加自托管运行器的步骤后，运行器及其状态列在{% ifversion fpt or ghec %}“运行器”{% elsif ghae or ghes %}“自托管运行器”{% endif %}下。

必须激活自托管运行器应用程序，运行器才能接受作业。 当运行器应用程序连接到 {% data variables.product.product_name %} 并准备接收作业时，你将在机器的终端上看到以下消息。

{% data reusables.actions.self-hosted-runner-connected-output %}
