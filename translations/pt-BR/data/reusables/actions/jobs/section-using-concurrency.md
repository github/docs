Use `concorrência` para garantir que apenas um único trabalho ou fluxo de trabalho usando o mesmo grupo de concorrência seja executado de cada vez. Um grupo de concorrência pode ser qualquer string ou expressão. A expressão só pode usar o contexto [`github`](/actions/learn-github-actions/contexts#github-context). Para obter mais informações sobre expressões, consulte "[Expressões](/actions/learn-github-actions/expressions)".

Você também pode especificar `concorrência` no nível do trabalho. Para obter mais informações, consulte [`jobs.<job_id>.concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency).

{% data reusables.actions.actions-group-concurrency %}
