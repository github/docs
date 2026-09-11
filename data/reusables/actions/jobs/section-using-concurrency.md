Use `concurrency` to ensure that only a single job or workflow using the same concurrency group will run at a time. A concurrency group can be any string or expression. The expression can only use [`github`](/actions/reference/workflows-and-actions/contexts#github-context), [`inputs`](/actions/reference/workflows-and-actions/contexts#inputs-context) and [`vars`](/actions/reference/workflows-and-actions/contexts#vars-context) contexts. For more information about expressions, see [AUTOTITLE](/actions/reference/workflows-and-actions/expressions).

You can also specify `concurrency` at the job level. For more information, see [`jobs.<job_id>.concurrency`](/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idconcurrency).

{% data reusables.actions.actions-group-concurrency %}
