{% note %}

**注釈:** ジョブレベルで並行処理が指定されている場合、ジョブの順序は保証されないか、互いに 5 分以内にそのキューを実行します。

{% endnote %}

You can use `jobs.<job_id>.concurrency` to ensure that only a single job or workflow using the same concurrency group will run at a time. 並行処理グループには、任意の文字列または式を使用できます。 式は、`secrets` コンテキストを除く任意のコンテキストを使用できます。 For more information about expressions, see "[Expressions](/actions/learn-github-actions/expressions)."

ワークフローレベルで `concurrency` を指定することもできます。 詳しい情報については、[`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency) を参照してください。

{% data reusables.actions.actions-group-concurrency %}
