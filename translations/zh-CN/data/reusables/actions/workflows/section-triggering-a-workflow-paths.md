
使用 `push` 和 `pull_request` 事件时，可以将工作流程配置为根据更改的文件路径运行。 路径过滤器不评估标签的推送。

如果要包括文件路径模式，或者要同时包含和排除文件路径模式，请使用 `paths` 筛选器。 当您只想排除文件路径模式时，请使用 `paths-ignore` 筛选器。 不能同时对工作流程中的同一事件使用 `paths` and `paths-ignore` 筛选器。

如果同时定义 `branches`/`branches-ignore` 和 `paths`，则工作流程仅在同时满足两个筛选器时才会运行。

`paths` 和 `paths-ignore` 关键词接受使用 `*` 和 `**` 通配符匹配多个路径名称的 glob 模式。 更多信息请参阅“[过滤器模式备忘清单](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

#### 示例：包括路径

如果至少有一个路径与 `paths` 过滤器中的模式匹配，工作流程将会运行。 例如，以下工作流程将在推送 JavaScript 文件 (`.js`) 时运行。

```yaml
on:
  push:
    paths:
      - '**.js'
```

{% note %}

**注意：**如果由于[路径过滤](/actions/using-workflows/workflow-syntax-for-github-actions#onpushpull_requestpull_request_targetpathspaths-ignore)、 [分支过滤](/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore)或[提交消息](/actions/managing-workflow-runs/skipping-workflow-runs)而跳过工作流程，则与该工作流程关联的检查将保持“挂起”状态。 需要这些检查成功的拉取请求将被阻止合并。 更多信息请参阅“[处理已跳过但必要的检查](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks#handling-skipped-but-required-checks)”。

{% endnote %}

#### 示例：排除路径

当所有路径名称匹配 `paths-ignore` 中的模式时，工作流程不会运行。 如果任何路径名与 `paths-ignore` 中的模式不匹配，则即使某些路径名与模式匹配，工作流程也将运行。

具有以下路径过滤器的工作流程仅在 `push` 事件上运行，这些事件包括至少一个位于仓库根目录的 `docs` 目录外的文件。

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### 示例：包括和排除路径

不能使用 `paths` 和 `paths-ignore` 来筛选单个工作流程中的同一事件。 如果要同时包含和排除单个事件的路径模式，请使用 `paths` 筛选器与 `!` 字符指示应排除哪些路径。

如果使用 `!` 字符定义路径，还必须定义至少一个不带 `!` 字符的路径。 如果只想排除路径，请改用 `paths-ignore`。

您定义模式事项的顺序：

- 肯定匹配后的匹配否定模式（前缀为 `!`）将排除路径。
- 否定匹配后的匹配肯定模式将再次包含路径。

只要 `push` 事件包括 `sub-project` 目录或其子目录中的文件，此示例就会运行，除非该文件在 `sub-project/docs` 目录中。 例如，更改了 `sub-project/index.js` 或 `sub-project/src/index.js` 的推送将会触发工作流程运行，但只更改 `sub-project/docs/readme.md` 的推送不会触发。

```yaml
on:
  push:
    paths:
      - 'sub-project/**'
      - '!sub-project/docs/**'
```

#### Git 差异比较

{% note %}

**注：** 如果您推送超过 1,000 项提交， 或者如果 {% data variables.product.prodname_dotcom %} 因超时未生成差异，工作流程将始终运行。

{% endnote %}

过滤器决定是否应通过评估已更改文件，并根据 `paths-ignore` or `paths` 列表运行它们，来运行一个工作流程。 如果没有更改文件，工作流程将不会运行。

{% data variables.product.prodname_dotcom %} 会针对推送使用双点差异，针对拉取请求使用三点差异，生成已更改文件列表：
- **拉取请求：** 三点差异比较主题分支的最近版本与其中使用基本分支最新同步主题分支的提交。
- **推送到现有分支：** 双点差异可以直接相互比较头部和基础 SHA。
- **推送到新分支：**根据已推送最深提交的前身父项的两点差异。

差异限制为 300 个文件。 如果更改的文件与过滤器返回的前 300 个文件不匹配，工作流程将不会运行。 您可能需要创建更多的特定过滤器，以便工作流程自动运行。

更多信息请参阅“[关于比较拉取请求中的分支](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests)”。
