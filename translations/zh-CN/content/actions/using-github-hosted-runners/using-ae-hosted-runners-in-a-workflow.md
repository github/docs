---
title: 在工作流程中使用 AE 托管的运行器
intro: '您可以使用标签将作业发送到 {% data variables.actions.hosted_runner %} 池。'
versions:
  github-ae: '*'
---

{% data reusables.actions.ae-beta %}

### 在工作流程中使用 {% data variables.actions.hosted_runner %}

标签允许您向包含该标签的任何 {% data variables.actions.hosted_runner %} 发送工作流程作业。 您可以使用默认标签，也可以创建自定义标签。

### 使用默认标签路由作业

{% data variables.actions.hosted_runner %} 在添加到 {% data variables.product.prodname_actions %} 时会获得一个标签。 该标签用于指示其分配位置。

您可以使用工作流程的 YAML 将作业发送到特定的 {% data variables.actions.hosted_runner %} 池。 此示例演示如何配置工作流程以在称为 `AE-runner-for-CI` 的标签上运行：

```yaml
runs-on: [AE-runner-for-CI]
```

更多信息请参阅“[{% data variables.product.prodname_actions %} 的工作流程语法](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on)”。

### 使用自定义标签路由作业

您可以随时创建自定义标签并将其分配给您的 {% data variables.actions.hosted_runner %}。 自定义标签允许您根据其标签将作业发送给特定类型的运行器。

例如，如果您的某个作业需要特定的软件包，则可以创建名为 `octocat` 的自定义标签，并将其分配给安装了该软件包的运行器。 与所有已分配的标签匹配的 {% data variables.actions.hosted_runner %} 将有资格运行该作业。

此示例显示一个使用多个标签的作业：

```yaml
runs-on: [AE-runner-for-CI, octocat, linux]
```

这些标签累计运行，所以 {% data variables.actions.hosted_runner %} 的标签必须匹配所有标签才能处理该作业。
