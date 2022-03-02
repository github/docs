{% note %}

**Nota:** Cuando se especifica la concurrencia a nivel del job, no se garantiza el orden para los jobs o ejecuciones que se ponen en fila a 5 minutos uno del otro.

{% endnote %}

You can use `jobs.<job_id>.concurrency` to ensure that only a single job or workflow using the same concurrency group will run at a time. Un grupo de concurrencia puede ser cualquier secuencia o expresión. La expresión puede utilizar cualquier contexto, con excepción del contexto `secrets`. Para obtener más información sobre las expresiones, consulta la sección "[Expresiones](/actions/learn-github-actions/expressions)".

También puedes especificar la `concurrency` a nivel del flujo de trabajo. Para obtener más información, consulta la [`concurrency`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency).

{% data reusables.actions.actions-group-concurrency %}
