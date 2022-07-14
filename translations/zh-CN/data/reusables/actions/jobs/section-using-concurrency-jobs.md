{% note %}

**注意：** 在作业级别指定并发时，无法保证在 5 分钟内排队的作业或运行的互相顺序。

{% endnote %}

使用 `jobs.<job_id>.concurrency` 可确保一次只运行一个使用同一并发组的作业或工作流程。 并发组可以是任何字符串或表达式。 表达式可以使用除 `secrets` 上下文以外的任何上下文。 有关表达式的详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。

您也可以在工作流程级别指定 `concurrency`。 更多信息请参阅 [`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency)。

{% data reusables.actions.actions-group-concurrency %}
