Use `concurrency` to ensure that only a single job or workflow using the same concurrency group will run at a time. 并发组可以是任何字符串或表达式。 并发组可以是任何字符串或表达式。 The expression can only use the [`github` context](/actions/learn-github-actions/contexts#github-context). For more information about expressions, see "[Expressions](/actions/learn-github-actions/expressions)."

您也可以在作业级别指定 `concurrency`。 更多信息请参阅 [`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency)。

{% data reusables.actions.actions-group-concurrency %}
