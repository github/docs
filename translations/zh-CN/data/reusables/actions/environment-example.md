您可以为工作流程中的每个作业指定一个环境。 为此，请添加 `jobs.<job_id>.environment` 键，后跟环境的名称。

例如，此工作流程将使用名为 `production` 的环境。

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

运行上述工作流程时，`deployment` 作业将受为 `production` 环境配置的任何规则的约束。 例如，如果环境需要审查者，则作业将暂停，直到其中一个审查者批准该作业。

您还可以为环境指定 URL。 指定的 URL 将显示在存储库的部署页面上（通过单击存储库主页上的**环境**访问）以及工作流程运行的可视化图表中。 如果拉取请求触发了工作流程，则该 URL 还会在拉取请求时间线中显示为 **View deployment（查看部署）**按钮。

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

![带有 URL 的工作流程图](/assets/images/help/images/deploy-graph.png)
