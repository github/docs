使用 `concurrency` 可确保一次只运行一个使用同一并发组的作业或工作流程。 并发组可以是任何字符串或表达式。 表达式只能使用 [`github` 上下文](/actions/learn-github-actions/contexts#github-context)。 有关表达式的详细信息，请参阅“[表达式](/actions/learn-github-actions/expressions)”。

您也可以在作业级别指定 `concurrency`。 更多信息请参阅 [`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency)。

{% data reusables.actions.actions-group-concurrency %}
