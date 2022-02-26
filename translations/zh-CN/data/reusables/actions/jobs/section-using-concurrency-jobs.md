{% note %}

**注意：** 在作业级别指定并发时，无法保证在 5 分钟内排队的作业或运行的互相顺序。

{% endnote %}

You can use `jobs.<job_id>.concurrency` to ensure that only a single job or workflow using the same concurrency group will run at a time. 并发组可以是任何字符串或表达式。 表达式可以使用除 `secrets` 上下文以外的任何上下文。 For more information about expressions, see "[Expressions](/actions/learn-github-actions/expressions)."

您也可以在工作流程级别指定 `concurrency`。 更多信息请参阅 [`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency)。

{% data reusables.actions.actions-group-concurrency %}
