Use `on.<event_name>.types` to define the type of activity that will trigger a workflow run. A maioria dos eventos GitHub são acionados por mais de um tipo de atividade.  For example, the `label` is triggered when a label is `created`, `edited`, or `deleted`. A palavra-chave `types` (tipos) permite que você limite a atividade que faz com que o fluxo de trabalho seja executado. Quando somente um tipo de atividade aciona um evento de webhook, a palavra-chave `types` (tipos) é desnecessária.

É possível usar um array de `types` (tipos) de evento. Para obter mais informações sobre cada evento e seus tipos de atividades, consulte "[Eventos que acionam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows#available-events)".

```yaml
on:
  label:
    types: [created, edited]
```
