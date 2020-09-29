---
title: 配置工作流
intro: 您可以创建自定义工作流来自动化项目的软件开发生命周期过程。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /文章/创建 github 行动/
  - /文章/创建工作流-与 github 操作/
  - /文章/配置工作流
  - /github/自动化工作流-使用 github 操作/配置工作流
  - /操作/自动化工作流-使用 github 操作/配置工作流
  - /操作/创建工作流/工作流配置选项
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

具有对存储库具有写入或管理员权限的用户可以创建、编辑或查看工作流。

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于工作流

工作流是自定义的自动化流程，您可以在存储库中设置这些流程，以便生成、测试、打包、发布或部署任何 {% data variables.product.prodname_dotcom %}。 借助工作流，您可以使用各种工具和服务实现软件开发生命周期的自动化。 有关详细信息，请参阅"[" {% data variables.product.prodname_actions %}](/articles/about-github-actions)。

您可以在存储库中创建多个工作流。 您必须将工作流存储在 `.github/工作流` 存储库根目录中。

工作流必须至少有一个作业，并且作业包含一组执行单个任务的步骤。 步骤可以运行命令或使用操作。 您可以创建自己的操作或使用社区共享的操作 {% data variables.product.prodname_dotcom %} 根据需要自定义它们。

您可以将工作流配置为在发生 {% data variables.product.prodname_dotcom %} 、计划或外部事件时启动。

您需要使用 YAML 语法配置工作流，并将其保存为存储库中的工作流文件。 成功创建 YAML 工作流文件并触发工作流后，将看到工作流的每个步骤的生成日志、测试结果、工件和状态。 有关详细信息，请参阅"[运行工作流](/articles/managing-a-workflow-run)。

 ![注释的工作流运行映像](/assets/images/help/repository/annotated-workflow.png)

您还可以接收工作流状态更新的通知。 有关通知选项的详细信息，请参阅"[通知](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#github-actions-notification-options)。

使用限制适用于各个工作流。 有关详细信息，请参阅"[工作流的使用](/articles/workflow-syntax-for-github-actions#usage-limits)。

### 创建工作流文件

在高级别上，这些是添加工作流文件的步骤。 您可以在以下各节中找到特定的配置示例。

1. 在存储库的根目录，创建一个名为 `.github/工作流` 以存储工作流文件。

1. 在 `.github/工作流`中， `为` 添加 `.yaml` 文件。 例如， `.github/工作流/连续集成工作流.yml`。

1. 使用"[工作流语法 {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions)"参考文档来选择事件以触发操作、添加操作和自定义工作流。

1. 将工作流文件中的更改提交到希望工作流运行的分支。

#### 工作流文件示例

{% raw %}
```yaml
名称： 问候
@ 此工作流在推送到存储库时触发。
上： [push]

工作：
  生成：
    = 作业名称是问候
    名称： 问候
    = 此作业在 Linux
    上运行： ubuntu 最新
    步骤：
      = 此步骤使用 Github 的 hello 世界 javascript 操作： https://github.com/actions/hello-world-javascript-action
      https://github.com/actions/hello-world-javascript-action  名称： 你好世界
        使用： 动作 / hello 世界 javascript - action@v1.1
        与：
          谁问候： '蒙娜的八角猫'
        id： hello
      = 此步骤打印输出 （时间） 从上一步的操作。
      - 名字： 回音问候的时间
        运行： 回声 '时间是 ${{ steps.hello.outputs.time }}。
```
{% endraw %}

{% data reusables.github-actions.invalid-workflow-files %}

### 使用事件触发工作流

您可以将工作流配置为启动一次：
- 发生一 {% data variables.product.prodname_dotcom %} 事件，例如，当某人将提交推送到存储库时，或者当创建问题或拉取请求时。
- 计划的事件开始。
- 发生外部事件。

若要在发生事件后触发工作流 {% data variables.product.prodname_dotcom %}，请 `：` 和工作流名称后的事件值。 例如，当将更改推送到存储库中的任何分支时，将触发此工作流。

```yaml
名称：描述性工作流名称
：推送
```

若要安排工作流，可以在工作流文件中使用 POSIX cron 语法。 可以运行计划工作流的最短间隔是每 5 分钟一次。 例如，此工作流每小时触发一次。

```yaml
上：
  时间表：
    - cron： '0]'
```

#### 手动运行工作流

若要手动运行工作流，必须首先配置工作流以使用 `workflow_dispatch` 事件。 您可以直接在工作流中配置自定义的输入属性、默认输入值和所需输入。 当工作流运行时，您可以在 github.event.输入 `中访问输入` 值。 有关详细信息，请参阅"[工作流的"](/actions/reference/events-that-trigger-workflows/#workflow_dispatch)"和"[ {% data variables.product.prodname_dotcom %} 操作的上下文](/actions/reference/context-and-expression-syntax-for-github-actions#github-context)"。

此示例定义 `和` `` 输入 `github.event.inputs.name` 和 `github.event.inputs.home` 上下文。 如果未 `提供` 名称，则打印默认值"Octocat Mona"。

{% raw %}
```yaml
名称： 手动触发的工作流
：
  workflow_dispatch：
    输入：
      名称：
        描述： "问候的人"
        ：
        默认： "Mona Octocat"
      "蒙娜 回家：
        ： 需要 "位置
        ： 假作业：


  say_hello：
    运行： ubuntu 最新
    步骤：
    - 运行：
        回音"你好 ${{ github.event.inputs.name }}！
        回声 "- 在 ${{ github.event.inputs.home }}！
```
{% endraw %}

您可以使用 REST API `workflow_dispatch` "操作"选项卡 {% data variables.product.prodname_dotcom %} 触发事件。 有关使用 REST API 的信息，请参阅"[创建工作流调度事件](/rest/reference/actions/#create-a-workflow-dispatch-event)。 使用 REST API 时，应配置 `输入` `引用` 作为请求正文参数。 如果省略输入，则使用工作流文件中定义的默认值。

若要在 `workflow_dispatch` 上 {% data variables.product.prodname_dotcom %}，工作流必须处于默认分支中。 按照以下步骤手动触发工作流运行。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
1. 在左侧栏中，单击要运行的工作流。 ![操作选择工作流](/assets/images/actions-select-workflow.png)
1. 在工作流运行列表的上方，选择 **运行工作流**。 ![操作工作流调度](/assets/images/actions-workflow-dispatch.png)
1. 选择工作流将运行的分支，并键入工作流使用的输入参数。 单击 **运行工作流**。 ![操作手动运行工作流](/assets/images/actions-manually-run-workflow.png)

#### 从外部事件触发工作流

若要在发生外部事件后触发工作流，可以通过调用"创建存储库调度事件"REST API 终结点来调用 `repository_dispatch` hook 事件。 有关详细信息，请参阅"[创建存储库调度事件](/v3/repos/#create-a-repository-dispatch-event)。

有关详细信息和示例，请参阅"[工作流的](/articles/events-that-trigger-workflows#webhook-events)。

### 筛选特定分支、标记和路径

您可以将工作流设置为仅在某些分支上运行。

例如，当在 `master` 分支上推送包含  测试  目录中的文件 `或推送到 <code>v1` 标记时，</code> 工作流将运行。

```yaml
上：
  ：
    分支：
      - 主
    标记：
      - v1
    _ 文件路径， 在事件中要考虑。 可选;默认值。
    路径：
      - "测试/*"
```

有关分支、标记和路径筛选器语法的信息，请参阅"[`。<push|pull_request>.<branches|tags>`](/articles/workflow-syntax-for-github-actions#onpushpull_requestbranchestags)" 和 "[`继续。<push|pull_request>.路径`](/articles/workflow-syntax-for-github-actions#onpushpull_requestpaths)。

### 选择跑步者

您可以在由托管的 {% data variables.product.prodname_dotcom %}运行程序或自托管运行程序上运行工作流。 作业可以直接在计算机或 Docker 容器中运行。

您可以使用运行或运行的运行 `中为每个作业`。 有关运行 `运行`有关[，请参阅" {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idruns-on)工作流 "

{% data reusables.actions.enterprise-github-hosted-runners %}

#### 使用 {% data variables.product.prodname_dotcom %}托管的运行程序

您可以选择不同类型和版本的虚拟主机，包括 Linux、Windows 和 macOS。 工作流中的每个作业在虚拟环境的新实例中执行，作业中的步骤可以使用文件系统共享信息。 有关详细信息，请参阅"[托管跑步者 {% data variables.product.prodname_actions %}的虚拟](/articles/virtual-environments-for-github-actions)。

例如，您可以使用 ubuntu  `的最新` 指定由托管运行程序 {% data variables.product.prodname_dotcom %}的最新版本。

```yaml
运行： ubuntu 最新
```

#### 使用自托管的运行程序

您可以使用标签将作业路由到特定类型的自托管流道。 所有自托管跑步者都 `自托管` 标签，每个自托管运行程序都有其操作系统和系统体系结构的标签。 有关详细信息，请参阅"[工作流中的自托管运行程序](/actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)。

例如，如果添加了具有 Linux 操作系统和 ARM32 体系结构的自托管运行程序，可以使用 `自托管`、 `linux`和 `ARM32` 标签选择该运行程序。

```yaml
运行： [自托管， linux， ARM32]
```

### 配置生成矩阵

若要同时跨多个操作系统、平台和语言版本进行测试，可以配置生成矩阵。

生成矩阵允许您使用不同的软件和操作系统配置测试代码。 例如，工作流可以运行语言、操作系统或工具的多个受支持版本的作业。 对于每个配置，作业的副本将运行并报告状态。

您可以在工作流文件中指定生成矩阵，其中数组在"配置"策略 `：`。 例如，此生成矩阵将运行具有不同版本的 Node.js 和 Ubuntu（Linux 操作系统）的作业。

{% data reusables.repositories.actions-matrix-builds-os %}

{% raw %}
```yaml
运行： ${{ matrix.os }}
：
  矩阵：
    os： [ubuntu-16.04， ubuntu-18.04]
    节点： [6， 8， 10]
```
{% endraw %}

有关详细信息，请参阅"[的工作流 {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstrategymatrix)。

### 使用签出操作

可以在工作流中使用多个标准操作。 签出操作是一个标准操作，在以下时间之前，您必须在工作流中包括该操作， 然后再执行其他操作：
- 您的工作流需要存储库代码的副本，例如在构建和测试存储库或使用持续集成时。
- 工作流中至少有一个操作在同一存储库中定义。 有关详细信息，请参阅"[工作流中的"引用操作](#referencing-actions-in-your-workflow)。

若要在没有进一步规范的情况下使用标准签出操作，请包括以下步骤：
```yaml
- 使用：操作/checkout@v2
```
在此示例中 `使用` v2，可确保使用签出操作的稳定版本。 有关详细信息，请参阅 [结帐操作](https://github.com/actions/checkout)。

### 选择工作流的操作类型

工作流中可以使用不同类型的操作来满足项目的需求：
- 码头容器操作
- JavaScript 操作
- 复合运行步骤操作

有关详细信息，请参阅"[操作](/articles/about-actions#types-of-actions)"。

在选择要在工作流中使用的操作类型时，我们建议在公共存储库或 Docker 中心上探索现有操作，并可能为项目自定义这些操作。

您可以浏览和使用由用户在 {% data variables.product.prodname_dotcom %} 中构建 [github.com/actions](https://github.com/actions) 操作。 若要访问 Docker 中心，请参阅 Docker[站点上的](https://www.docker.com/products/docker-hub)"。"

### 引用工作流中的操作

若要使用正确的语法引用工作流文件中的操作，必须考虑操作的定义位置。

工作流可以使用在以下项中定义的操作：
- 公共存储库
- 工作流文件引用操作的同一存储库
- Docker 集线器上已发布的 Docker 容器映像

若要使用在专用存储库中定义的操作，工作流文件和操作必须在同一个存储库中。 您的工作流不能使用在其他私有存储库中定义的操作，即使其他私有存储库位于同一组织中。

若要对操作进行更新时保持工作流稳定，可以通过在工作流文件中指定 Git ref 或 Docker 标记编号来引用正在使用的操作的版本。 有关示例，请参阅"[的工作流 {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses)。

{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.dependabot.version-updates-for-actions %}
{% endif %}

有关更详细的配置选项，请参阅"[的工作流 {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)。

#### 从公共存储库引用操作

如果在公共存储库中定义了操作，则必须使用语法 `{owner}/{repo}_{ref}` 或 `{owner}/{repo}/{path}@{ref}`引用操作。

```yaml
作业：
  my_first_job：
    名称： 我的作业名称
      步骤：
        - 使用： 操作 / 设置 - node@v1
          ：
            版本： 10.x
```

若要查看完整的工作流示例，请参阅 [模板存储库](https://github.com/actions/setup-node) 设置节点。

#### 引用工作流文件使用操作的同一存储库中的操作

如果在工作流文件使用该操作的同一存储库中定义了操作，则可以使用工作流文件中的`{owner}/{repo}@{ref}` 或 `./path/to/dir` 语法引用该操作。

存储库文件结构示例：

```
[- - 你好世界 （存储库）
]  [__. github
]      └ • 工作流
|          └ [我的第一工作流. yml
]      └[行动
]          [你好世界行动
]              └ = 行动. yml
```

工作流文件示例：

```yaml
作业：
  ：
    运行： ubuntu 最新
    步骤：
      # 此步骤签出存储库的副本。
      - 使用：操作/checkout@v2
      # 此步骤引用包含操作的目录。
      - 使用：..github/行动/你好世界行动
```

#### 在 Docker 集线器上引用容器

如果在 Docker Hub 上的已发布 Docker 容器映像中定义了操作，则必须在工作流文件中使用 `docker://{image}：{tag}` 语法引用该操作。 为了保护您的代码和数据，我们强烈建议您先在工作流中使用 Docker Hub 来验证 Docker 容器映像的完整性。

```yaml
工作：
  my_first_job：
    步：
      - 名称： 我的第一步
        使用： docker：： 3.8
```

有关 Docker 操作的一些示例，请参阅 [Docker-image.yml 工作流](https://github.com/actions/starter-workflows/blob/master/ci/docker-image.yml) "[创建 Docker 容器操作](/articles/creating-a-docker-container-action)。

有关详细信息，请参阅"[的工作流 {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses)。

### 向存储库添加工作流状态徽章

{% data reusables.repositories.actions-workflow-status-badge-into %}

如果工作流使用 `关键字` ，则必须按名称引用工作流。 如果工作流的名称包含空格，则需要将该空格替换为 URL 编码的字符串 `%20`。 有关关键字名称 `有关` ，请参阅"[的工作流 {% data variables.product.prodname_actions %}](/articles/workflow-syntax-for-github-actions#name)。

```
https://github.com/<OWNER>/<REPOSITORY>/ 工作流 /<WORKFLOW_NAME>/ badge. svg
```

或者，如果您的工作流没有 `名称`，则必须使用相对于存储库的根目录的文件路径引用工作流文件。

{% note %}

**注意：** 如果工作流具有一个包含名称的配置文件，则使用文件路径 `工作流`。

{% endnote %}

```
https://github.com/<OWNER>/<REPOSITORY>/ 工作流 /<WORKFLOW_FILE_PATH>/ badge. svg
```

#### 使用工作流名称的示例

此标记示例为工作流添加状态徽章，名称为"问候所有人"。 存储库 `所有者` 是 `组织` ， `名称` 是 `hello world`。

```
![示例工作流名称]（https://github.com/actions/hello-world/workflows/Greet%20E非常一/badge.svg）
```

#### 使用工作流文件路径的示例

此 Markdown 示例为具有文件路径的工作流添加了状态徽章 `.github/工作流/main.yml`。 存储库 `所有者` 是 `组织` ， `名称` 是 `hello world`。

```
![示例工作流文件路径]（https://github.com/actions/hello-world/workflows/.github/workflows/main.yml/badge.svg）
```

#### 使用分支 `` 示例

此标记示例为名称为功能-1 的分支添加 `标记`。

```
![示例分支参数]（https://github.com/actions/hello-world/workflows/Greet%20E非常一/badge.svg？branch=功能-1）
```

#### 使用事件 `` 示例

此 Markdown 示例添加了一个徽章，显示由事件触发的工作流 `pull_request` 状态。

```
![示例事件参数]（https://github.com/actions/hello-world/workflows/Greet%20E非常一/badge.svg？事件=pull_request）
```

{% if currentVersion == "free-pro-team@latest" %}
### 延伸阅读

- [[管理帐户的 {% data variables.product.prodname_actions %}](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)"
{% endif %}
