Algunos eventos tienen tipos de actividad que te proporcionan más control sobre cuándo debería ejecutarse tu flujo de trabajo. Utiliza `on.<event_name>.types` para definir el tipo de actividad de evento qeu activará una ejecución de flujo de trabajo.

Por ejemplo, el evento `issue_comment` tiene los tipos de actividad `created`, `edited` y `deleted`. Si tu flujo de trabajo activa el evento `label`, este se ejecutará cada que se cree, edite o borre una etiqueta. Si especificas el tipo de actividad `created` para el evento `label`, tu flujo de trabajo se ejecutará cuando se cree una etiqueta pero no cuando esta se borre o edite.

```yaml
on:
  label:
    types:
      - created
```

Si especificas tipos de actividad múltiples, solo uno de ellos necesitará ocurrir para que se active tu flujo de trabajo. Si ocurren tipos de actividad de eventos activadores múltiples al mismo tiempo para tu flujo de trabajo, se activarán ejecuciones de flujo de trabajo múltiples. Por ejemplo, el siguiente flujo de trabajo se activa cuando se abre o etiqueta una propuesta. Si se abre una propuesta con dos etiquetas, iniciarán tres ejecuciones de flujo de trabajo: una para el evento de la propuesta abierta y dos para los eventos etiquetados de las dos propuestas.

```yaml
on:
  issues:
    types:
      - opened
      - labeled
```

Para obtener más información acerca de cada evento y sus tipos de actividad, consulta "[Eventos que desencadenan flujos de trabajo](/actions/using-workflows/events-that-trigger-workflows)".
