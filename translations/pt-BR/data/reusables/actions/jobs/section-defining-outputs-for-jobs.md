Você pode usar `jobs.<job_id>.outputs` para criar um `mapa` de saídas para um trabalho. As saídas de trabalho estão disponíveis para todos os trabalhos downstream que dependem deste trabalho. Para obter mais informações sobre a definição de dependências de trabalhos, consulte [`jobs.<job_id>.needs`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds).

{% data reusables.actions.output-limitations %}

As saídas do trabalho que contém expressões são avaliadas no executor no final de cada trabalho. As saídas que contêm segredos são eliminadas no executor e não são enviadas para {% data variables.product.prodname_actions %}.

Para usar as saídas de trabalho em um trabalho dependente, você poderá usar o contexto `needs`. Para obter mais informações, consulte "[Contextos](/actions/learn-github-actions/contexts#needs-context)".

### Exemplo: Definindo saídas para um trabalho

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
