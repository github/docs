Quando um trabalho simultâneo ou fluxo de trabalho é enfileirado, se outro trbalho ou fluxo de trabalho que usa o mesmo grupo de concorrência no repositório estiver em andamento o trabalho na fila ou o fluxo de trabalho ficará `pendente`. Qualquer trabalho ou fluxo de trabalho anterior pendente no grupo de concorrência será cancelado. Para cancelar também qualquer trabalho atualmente em execução ou fluxo de trabalho no mesmo grupo de concorrência, especifique `cancel-in-progress: true`.

## Exemplos: Como usar a concorrência e o comportamento padrão

{% raw %}
```yaml
concurrency: staging_environment
```
{% endraw %}

{% raw %}
```yaml
concurrency: ci-${{ github.ref }}
```
{% endraw %}

## Exemplo: Usar a concorrência para cancelar qualquer trabalho em andamento ou em execução

{% raw %}
```yaml
concurrency: 
  group: ${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

### Example: Using a fallback value

If you build the group name with a property that is only defined for specific events, you can use a fallback value. For example, `github.head_ref` is only defined on `pull_request` events. If your workflow responds to other events in addition to `pull_request` events, you will need to provide a fallback to avoid a syntax error. The following concurrency group cancels in-progress jobs or runs on `pull_request` events only; if `github.head_ref` is undefined, the concurrency group will fallback to the run ID, which is guaranteed to be both unique and defined for the run.

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}


### Example: Only cancel in-progress jobs or runs for the current workflow

 If you have multiple workflows in the same repository, concurrency group names must be unique across workflows to avoid canceling in-progress jobs or runs from other workflows. Otherwise, any previously in-progress or pending job will be canceled, regardless of the workflow.

To only cancel in-progress runs of the same workflow, you can use the `github.workflow` property to build the concurrency group:

{% raw %}
```yaml
concurrency: 
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

