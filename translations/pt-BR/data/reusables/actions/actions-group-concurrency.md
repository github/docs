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
  group: ${{ github.head_ref }}
  cancel-in-progress: true
```
{% endraw %}
