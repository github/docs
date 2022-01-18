Use `jobs.<job_id>.needs` to identify any jobs that must complete successfully before this job will run. Esse código pode ser uma string ou array de strings. Se houver falha em um trabalho, todos os trabalhos que dependem dele serão ignorados, a menos que os trabalhos usem uma expressão condicional que faça o trabalho continuar.

#### Example: Requiring successful dependent jobs

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

Neste exemplo, `job1` deve ser concluído com êxito antes do início de `job2`, e `job3` aguarda a conclusão de `job1` e `job2`.

Os trabalhos neste exemplo são executados sequencialmente:

1. `job1`
2. `job2`
3. `job3`

#### Example: Not requiring successful dependent jobs

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

Neste exemplo, `job3` usa a expressão condicional `always()` para que ela sempre seja executada depois de `job1` e `job2` terem sido concluídos, independentemente de terem sido bem sucedidos. Para obter mais informações, consulte "[Expressões](/actions/learn-github-actions/expressions#job-status-check-functions)".
