Use `on.<event_name>.types` para definir o tipo de atividade que acionará a execução de um fluxo de trabalho. A maioria dos eventos GitHub são acionados por mais de um tipo de atividade.  Por exemplo, a `etiqueta ` é acionada quando uma etiqueta é `criada`, `editada` ou `excluída`. A palavra-chave `types` (tipos) permite que você limite a atividade que faz com que o fluxo de trabalho seja executado. Quando somente um tipo de atividade aciona um evento de webhook, a palavra-chave `types` (tipos) é desnecessária.

É possível usar um array de `types` (tipos) de evento. Para obter mais informações sobre cada evento e seus tipos de atividades, consulte "[Eventos que acionam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows#available-events)".

```yaml
on:
  label:
    types: [created, edited]
```
