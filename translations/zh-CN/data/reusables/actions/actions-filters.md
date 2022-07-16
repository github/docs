某些事件具有筛选器，可让您更好地控制工作流程应何时运行。

例如，`push` 事件具有 `branches` 筛选器，仅当推送到与筛选器 `branches` 匹配的分支时（而不是在发生任何推送时），工作流程才会运行。

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```
