É possível especificar um único evento ou vários eventos. Por exemplo, um fluxo de trabalho com o valor `on` a seguir será executado quando um push for feito em qualquer branch no repositório ou quando alguém bifurcar o repositório:

```yaml
on: [push, fork]
```

Se você especificar vários eventos, apenas um desses eventos deverá ocorrer para acionar seu fluxo de trabalho. Se vários eventos de acionamento para o seu fluxo de trabalho ocorrerem ao mesmo tempo, várias execuções de fluxo de trabalho serão acionadas.
