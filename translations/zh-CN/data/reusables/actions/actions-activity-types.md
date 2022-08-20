某些事件具有活动类型，可让您更好地控制工作流程应何时运行。 使用 `on.<event_name>.types` 定义将触发工作流程运行的事件活动类型。

例如，`issue_comment` 事件具有 `created`、`edited` 和 `deleted` 活动类型。 如果您的工作流程在发生 `label` 事件时触发，则每当创建、编辑或删除标签时，该工作流程都会运行。 如果为 `label` 事件指定 `created` 活动类型，则工作流程将在创建标签时运行，但在编辑或删除标签时不会运行。

```yaml
on:
  label:
    types:
      - created
```

如果指定多个活动类型，则只需发生其中一个事件活动类型即可触发工作流程。 如果工作流程的多个触发事件活动类型同时发生，则将触发多个工作流程运行。 例如，在打开或标记议题时会触发以下工作流程。 如果打开了具有两个标签的议题，则将启动三个工作流程运行：一个用于议题打开的事件，两个用于两个标记为议题的事件。

```yaml
on:
  issues:
    types:
      - opened
      - labeled
```

有关每个事件及其活动类型的更多信息，请参阅“[触发工作流程的事件](/actions/using-workflows/events-that-trigger-workflows)”。
