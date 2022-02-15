Cuando un job o flujo de trabajo concurrente se pone en cola, si otro job o workflow que utilicen el mismo grupo de concurrencia en el repositorio se encuentra en progreso, el job o flujo de trabajo en cola se mostrará como `pending`. Cualquier job o flujo de trabajo pendientes anteriores en el grupo de concurrencia se cancelarán. Para también cancelar cualquier job ejecutándose concurrentemente en el mismo grupo de concurrencia, especifica `cancel-in-progress: true`.

### Ejemplos: Utilizando la concurrencia y el comportamiento predeterminado

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

### Ejemplo: Utilizar la concurrencia para cancelar cualquier job o ejecución en curso

{% raw %}
```yaml
concurrency: 
  group: ${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

### Ejemplo: Utilizar un valor para segunda opción

Si compilas el nombre de grupo con una propiedad que solo se defina para eventos específicos, puedes utilizar un valor de segunda opción. Por ejemplo, `github.head_ref` solo se define en los eventos de `pull_request`. Si tu flujo de trabajo responde a otros eventos adicionalmente a los de `pull_request`, necesitarás proporcionar una segunda opción para evitar un error de sintaxis. El siguiente grupo de concurrencia cancela los jobs o ejecuciones en curso únicamente en los eventos de `pull_request`; si `github.head_ref` no se define, el grupo de concurrencia se revertirá a la ID de ejecución, la cual garantiza ser única y definida para la ejecución.

{% raw %}
```yaml
concurrency: 
  group: ${{ github.head_ref || github.run_id }}
  cancel-in-progress: true
```
{% endraw %}


### Ejemplo: Cancelar únicamente los jobs o ejecuciones en curso para el flujo de trabajo actual

 Si tienes flujos de trabajo múltiples en el mismo repositorio, los nombres del grupo de concurrencia deben ser únicos en todos los flujos de trabajo para evitar que se cancelen jobs o ejecuciones en curso desde otros flujos de trabajo. De otra forma, cualquier job pendiente o previamente en curso se cancelará sin importar el flujo de trabajo.

Para solo cancelar las ejecuciones en curso para el mismo flujo de trabajo, puedes utilizar la propiedad `github.workflow` para crear el grupo de concurrencia:

{% raw %}
```yaml
concurrency: 
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
{% endraw %}

