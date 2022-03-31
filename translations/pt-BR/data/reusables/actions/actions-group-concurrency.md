Quando um trabalho simultâneo ou fluxo de trabalho é enfileirado, se outro trbalho ou fluxo de trabalho que usa o mesmo grupo de concorrência no repositório estiver em andamento o trabalho na fila ou o fluxo de trabalho ficará `pendente`. Qualquer trabalho ou fluxo de trabalho anterior pendente no grupo de concorrência será cancelado. Para cancelar também qualquer trabalho atualmente em execução ou fluxo de trabalho no mesmo grupo de concorrência, especifique `cancel-in-progress: true`.

### Exemplos: Como usar a concorrência e o comportamento padrão

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

### Exemplo: Usar a concorrência para cancelar qualquer trabalho em andamento ou em execução

{% raw %}
```yaml
concurrency: 
  group: ${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

### Exemplo: Usando um valor para segunda opção

Se você construir o nome do grupo com uma propriedade que só é definida para eventos específicos, você pode usar um valor de segunda opção. Por exemplo, `github.head_ref` está definido apenas em eventos `pull_request`. Se o seu fluxo de trabalho responder a outros eventos além dos eventos `pull_request`, você deverá fornecer uma segunda opção para evitar um erro de sintaxe. O grupo de concorrência a seguir cancela trabalhos em andamento ou executa somente em eventos `pull_request`; se `github.head_ref` não estiver definido, o grupo de concorrência voltará ao ID de execução e será garantido que ambos serão únicos e definidos para a execução.

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}


### Exemplo: Cancele somente trabalhos em andamento ou execuções no fluxo de trabalho atual

 Se você tiver vários fluxos de trabalho no mesmo repositório, os nomes dos grupos de concorrência devem ser únicos em todos os fluxos de trabalho para evitar o cancelamento de trabalhos em andamento ou de executores a partir de outros fluxos de trabalho. Caso contrário, qualquer trabalho em andamento ou pendente será cancelado, independentemente do fluxo de trabalho.

Para cancelar apenas execuções no mesmo fluxo de trabalho, você pode usar a propriedade `github.workflow` para criar o grupo de concorrência:

{% raw %}
```yaml
concurrency: 
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

