{% note %}

**Observação:** Quando a concorrência é especificada no nível do trabalho, não se garante a ordem para trabalhos ou execuções que são enfileiradas em 5 minutos uma da outra.

{% endnote %}

Você pode usar `jobs.<job_id>.concurrency` para garantir que apenas um trabalho ou fluxo de trabalho que usa o mesmo grupo de concorrência será executado de cada vez. Um grupo de concorrência pode ser qualquer string ou expressão. A expressão pode usar qualquer contexto, exceto para o contexto de `segredos`. Para obter mais informações sobre expressões, consulte "[Expressões](/actions/learn-github-actions/expressions)".

Você também pode especificar `concorrência` no nível do fluxo de trabalho. Para obter mais informações, consulte [`concorrência`](/actions/using-workflows/workflow-syntax-for-github-actions#concurrency).

{% data reusables.actions.actions-group-concurrency %}
