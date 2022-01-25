You can use `jobs.<job_id>.outputs` to create a `map` of outputs for a job. Las salidas de un job se encuentran disponibles para todos los jobs descendentes que dependan de este job. Para obtener más información sobre la definición de dependencias, consulta [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds).

Las salidas de un job son secuencias, y las salidas de un job que contienen expresiones se evalúan en el ejecutor al final de cada job. Las salidas que contienen secretos se redactan en el ejecutor y no se envían a {% data variables.product.prodname_actions %}.

Para utilizar salidas de jobs en un job dependiente, puedes utilizar el contexto `needs`. Para obtener más información, consulta "[Contextos](/actions/learn-github-actions/contexts#needs-context)".

### Example: Defining outputs for a job

{% raw %}
```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    # Map a step output to a job output
    outputs:
      output1: ${{ steps.step1.outputs.test }}
      output2: ${{ steps.step2.outputs.test }}
    steps:
      - id: step1
        run: echo "::set-output name=test::hello"
      - id: step2
        run: echo "::set-output name=test::world"
  job2:
    runs-on: ubuntu-latest
    needs: job1
    steps:
      - run: echo ${{needs.job1.outputs.output1}} ${{needs.job1.outputs.output2}}
```
{% endraw %}
