Alguns eventos têm tipos de atividade que oferecem mais controle sobre quando o fluxo de trabalho deve ser executado. Use `on.<event_name>.types` para definir o tipo de atividade do evento que acionará a execução de um fluxo de trabalho.

Por exemplo, o evento `issue_comment` tem os tipos de atividade `criado`, `editado` e `excluído`. Se o seu fluxo de trabalho for acionado no evento `etiqueta`, ele será executado sempre que uma etiqueta for criada, editada ou excluída. Se você especificar o tipo de atividade `criado` para o evento `etiqueta`, seu fluxo de trabalho será executado quando uma etiqueta for criada, mas não quando uma etiqueta for editada ou excluída.

```yaml
on:
  label:
    types:
      - created
```

Se você especificar vários tipos de atividades, apenas um desses tipos de atividade deverá ocorrer para acionar o fluxo de trabalho. Se vários tipos de atividade do evento de acionamento ocorrer em seu fluxo de trabalho ao mesmo tempo, várias execuções de fluxo de trabalho serão acionadas. Por exemplo, os acionadores de fluxo de trabalho a seguir quando um problema é aberto ou identificado. Se um problema com duas etiquetas for aberta, serão iniciadas três execuções de fluxos de trabalho: uma para o problema aberto e duas para os dois problemas etiquetados.

```yaml
on:
  issues:
    types:
      - opened
      - labeled
```

Para obter mais informações sobre cada evento e seus tipos de atividades, consulte "[Eventos que acionam fluxos de trabalho](/actions/using-workflows/events-that-trigger-workflows)".
