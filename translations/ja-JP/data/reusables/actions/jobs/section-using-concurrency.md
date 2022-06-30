`concurrency`を使って、同じ並行処理グループを使うジョブもしくはワークフローが一度に1つだけ実行されることを保証できます。 並行処理グループには、任意の文字列または式を使用できます。 この式は[`github` context](/actions/learn-github-actions/contexts#github-context)だけを使用します。 式に関する詳しい情報については「[式](/actions/learn-github-actions/expressions)」を参照してください。

ジョブレベルで `concurrency` を指定することもできます。 詳しい情報については、[`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency) を参照してください。

{% data reusables.actions.actions-group-concurrency %}
