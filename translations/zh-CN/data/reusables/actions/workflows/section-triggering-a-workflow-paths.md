
When using the `push` and `pull_request` events, you can configure a workflow to run based on what file paths are changed. Path filters are not evaluated for pushes of tags.

Use the `paths` filter when you want to include file path patterns or when you want to both include and exclude file path patterns. Use the `paths-ignore` filter when you only want to exclude file path patterns. You cannot use both the `paths` and `paths-ignore` filters for the same event in a workflow.

If you define both `branches`/`branches-ignore` and `paths`, the workflow will only run when both filters are satisfied.

The `paths` and `paths-ignore` keywords accept glob patterns that use the `*` and `**` wildcard characters to match more than one path name. 更多信息请参阅“[过滤器模式备忘清单](/actions/using-workflows/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet)”。

#### 示例：包括路径

如果至少有一个路径与 `paths` 过滤器中的模式匹配，工作流程将会运行。 For example, the following workflow would run anytime you push a JavaScript file (`.js`).

```yaml
on:
  push:
    paths:
      - '**.js'
```

#### Example: Excluding paths

当所有路径名称匹配 `paths-ignore` 中的模式时，工作流程不会运行。 If any path names do not match patterns in `paths-ignore`, even if some path names match the patterns, the workflow will run.

具有以下路径过滤器的工作流程仅在 `push` 事件上运行，这些事件包括至少一个位于仓库根目录的 `docs` 目录外的文件。

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```

#### Example: Including and excluding paths

You can not use `paths` and `paths-ignore` to filter the same event in a single workflow. If you want to both include and exclude path patterns for a single event, use the `paths` filter along with the `!` character to indicate which paths should be excluded.

If you define a path with the `!` character, you must also define at least one path without the `!` character. If you only want to exclude paths, use `paths-ignore` instead.

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

### Git 差异比较

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
