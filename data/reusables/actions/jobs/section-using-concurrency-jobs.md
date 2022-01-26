{% note %}

**Note:** When concurrency is specified at the job level, order is not guaranteed for jobs or runs that queue within 5 minutes of each other.

{% endnote %}

You can use `jobs.<job_id>.concurrency` to ensure that only a single job or workflow using the same concurrency group will run at a time. A concurrency group can be any string or expression. The expression can use any context except for the `secrets` context. For more information about expressions, see "[Expressions](/actions/learn-github-actions/expressions)."

You can also specify `concurrency` at the workflow level. For more information, see [`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency).

{% data reusables.actions.actions-group-concurrency %}
