Utiliza `concurrency` para garantizar que únicamente un solo job o flujo de trabajo que utilizan el mismo grupo de concurrencia se ejecutará a la vez. Un grupo de concurrencia puede ser cualquier secuencia o expresión. La expresión solo puede utilizar el [contexto`github`](/actions/learn-github-actions/contexts#github-context). Para obtener más información sobre las expresiones, consulta la sección "[Expresiones](/actions/learn-github-actions/expressions)".

También puedes especificar la `concurrency` a nivel del job. Para obtener más información, consulta la [`jobs<job_id>concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idconcurrency).

{% data reusables.actions.actions-group-concurrency %}
