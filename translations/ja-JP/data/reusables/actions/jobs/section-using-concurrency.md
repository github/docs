Use `concurrency` to ensure that only a single job or workflow using the same concurrency group will run at a time. 並行処理グループには、任意の文字列または式を使用できます。 並行処理グループには、任意の文字列または式を使用できます。 The expression can only use the [`github` context](/actions/learn-github-actions/contexts#github-context). For more information about expressions, see "[Expressions](/actions/learn-github-actions/expressions)."

ジョブレベルで `concurrency` を指定することもできます。 詳しい情報については、[`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency) を参照してください。

{% data reusables.actions.actions-group-concurrency %}
