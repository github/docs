{% note %}

**注釈:** ジョブレベルで並行処理が指定されている場合、ジョブの順序は保証されないか、互いに 5 分以内にそのキューを実行します。

{% endnote %}

`jobs.<job_id>.concurrency`を使って、同じ並行処理グループを使う1つのジョブもしくはワークフローだけが実行されることを保証できます。 並行処理グループには、任意の文字列または式を使用できます。 式は、`secrets` コンテキストを除く任意のコンテキストを使用できます。 式に関する詳しい情報については「[式](/actions/learn-github-actions/expressions)」を参照してください。

ワークフローレベルで `concurrency` を指定することもできます。 詳しい情報については、[`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency) を参照してください。

{% data reusables.actions.actions-group-concurrency %}
