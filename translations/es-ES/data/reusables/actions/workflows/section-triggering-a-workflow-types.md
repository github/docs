Utiliza `on.<event_name>.types` para definir el tipo de actividad que activará una ejecución de flujo de trabajo. La mayoría de los eventos GitHub son desencadenados por más de un tipo de actividad.  Por ejemplo, la `label` se activa cuando esta está como `created`, `edited` o `deleted`. La palabra clave `types` (tipos) te permite reducir la actividad que hace que se ejecute el flujo de trabajo. Cuando solo un tipo de actividad activa el evento webhook, la palabra clave `types` (tipos) es innecesaria.

Puedes usar una matriz de `tipos` de eventos. Para obtener más información acerca de cada evento y sus tipos de actividad, consulta "[Eventos que desencadenan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows#available-events)".

```yaml
on:
  label:
    types: [created, edited]
```
