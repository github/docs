Cuando un job o flujo de trabajo concurrente se pone en cola, si otro job o workflow que utilicen el mismo grupo de concurrencia en el repositorio se encuentra en progreso, el job o flujo de trabajo en cola se mostrará como `pending`. Cualquier job o flujo de trabajo pendientes anteriores en el grupo de concurrencia se cancelarán. Para también cancelar cualquier job ejecutándose concurrentemente en el mismo grupo de concurrencia, especifica `cancel-in-progress: true`.

##### Examples: Using concurrency and the default behavior

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

##### Example: Using concurrency to cancel any in-progress job or run

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref }}
  cancel-in-progress: true
```
{% endraw %}
