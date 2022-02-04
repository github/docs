Use `jobs.<job_id>.needs` to identify any jobs that must complete successfully before this job will run. Puede ser una cadena o matriz de cadenas. Si un job falla, se saltarán todos los jobs que lo necesiten a menos de que éstos utilicen una expresión condicional que ocasione que el job continúe.

#### Example: Requiring successful dependent jobs

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    needs: [job1, job2]
```

En este ejemplo, `job1` debe completarse con éxito antes de que `job2` comience, y `job3` espera a que`job1` y `job2` se completen.

En este ejemplo, los trabajos se ejecutan de manera secuencial:

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

En este ejemplo, `job3` utiliza la expresión condicional `always()` para que siempre se ejecute después de que el `job1` y el `job2` se hayan completado, sin importar si tuvieron éxito o no. Para obtener más información, consulta la sección "[Expresiones](/actions/learn-github-actions/expressions#job-status-check-functions)".
