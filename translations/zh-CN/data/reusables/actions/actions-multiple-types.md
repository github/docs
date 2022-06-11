如果为事件指定活动类型或筛选器，并且工作流程触发多个事件，则必须单独配置每个事件。 您必须为所有事件附加冒号 (`:`)，包括没有配置的事件。

例如，使用以下 `on` 值的工作流程将在以下情况下运行：

- 创建标签
- 推送到存储库中的 `main` 分支
- 推送到启用了 {% data variables.product.prodname_pages %} 的分支

```yaml
on:
  label:
    types:
      - created
  push:
    branches:
      - main
  page_build:
```
