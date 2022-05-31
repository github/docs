Utiliza `jobs.<job_id>.needs` para identificar cualquier job que deba completarse con éxito antes de que este se ejecute. Puede ser una cadena o matriz de cadenas. Si un job falla, se saltarán todos los jobs que lo necesiten a menos de que éstos utilicen una expresión condicional que ocasione que el job continúe. Si una ejecución contiene una serie de jobs que se necesitan el uno al otro, una falla aplica a todos los jobs en la cadena de dependencias desde el punto de falla en adelante.

#### Ejemplo: Requerir jobs dependientes exitosos

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

#### Ejemplo: No requerir jobs dependientes exitosos

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

En este ejemplo, `job3` utiliza la expresión condicional `always()` para que siempre se ejecute después de que el `job1` y el `job2` se hayan completado, sin importar si tuvieron éxito o no. Para obtener más información, consulta la sección "[Expresiones](/actions/learn-github-actions/expressions#status-check-functions)".
