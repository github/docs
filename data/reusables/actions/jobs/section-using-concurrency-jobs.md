You can use `jobs.<job_id>.concurrency` to ensure that only a single job or workflow using the same concurrency group will run at a time. A concurrency group can be any string or expression. Allowed expression contexts: [`github`](/actions/learn-github-actions/contexts#github-context), [`inputs`](/actions/learn-github-actions/contexts#inputs-context), [`vars`](/actions/learn-github-actions/contexts#vars-context), [`needs`](/actions/learn-github-actions/contexts#needs-context), [`strategy`](/actions/learn-github-actions/contexts#strategy-context), and [`matrix`](/actions/learn-github-actions/contexts#matrix-context). For more information about expressions, see "[AUTOTITLE](/actions/learn-github-actions/expressions)."

You can also specify `concurrency` at the workflow level. For more information, see [`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency).

{% data reusables.actions.actions-group-concurrency %}
