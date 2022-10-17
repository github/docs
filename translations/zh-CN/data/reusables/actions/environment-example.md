---
ms.openlocfilehash: 4795fdc557dbb103d64f7b97d0fa58f445434bca
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: "145098496"
---
可以为工作流中的每个作业指定环境。 为此，请添加一个 `jobs.<job_id>.environment` 键，后跟环境的名称。

例如，此工作流将使用名为 `production` 的环境。

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

当上述工作流运行时，`deployment` 作业将受制于为 `production` 环境配置的任何规则。 例如，如果环境需要审阅者，该作业将在其中一个审阅者批准之前暂停。

还可以为环境指定 URL。 指定的 URL 将显示在存储库的部署页（通过单击存储库主页上的“环境”进行访问）和工作流运行的可视化图中。 如果拉取请求触发了工作流，则 URL 还会在拉取请求时间线中显示为“查看部署”按钮。

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: 
      name: production
      url: https://github.com
    steps:
      - name: deploy
        # ...deployment-specific steps
```

![带有 URL 的工作流图](/assets/images/help/images/deploy-graph.png)
