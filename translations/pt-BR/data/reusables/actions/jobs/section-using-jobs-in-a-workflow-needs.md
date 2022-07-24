Use as `jobs.<job_id>.needs` para identificar qualquer trabalho que deve ser concluído com sucesso antes deste trabalho ser executado. Esse código pode ser uma string ou array de strings. Se houver falha em um trabalho, todos os trabalhos que dependem dele serão ignorados, a menos que os trabalhos usem uma expressão condicional que faça o trabalho continuar. Se uma execução contém uma série de trabalhos que precisam um do outro, uma falha aplica-se a todos os trabalhos da cadeia de dependência desde o momento da falha.

#### Exemplo: Exigindo trabalhos dependentes com sucesso

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

#### Exemplo: Não exigindo trabalhos dependentes com sucesso

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: {% raw %}${{ always() }}{% endraw %}
    needs: [job1, job2]
```

Neste exemplo, `job3` usa a expressão condicional `always()` para que ela sempre seja executada depois de `job1` e `job2` terem sido concluídos, independentemente de terem sido bem sucedidos. Para obter mais informações, consulte "[Expressões](/actions/learn-github-actions/expressions#status-check-functions)".
