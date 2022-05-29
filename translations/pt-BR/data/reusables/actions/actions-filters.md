Alguns eventos têm filtros que dão mais controle sobre quando seu fluxo de trabalho deve ser executado.

Por exemplo, o evento `push` tem um filtro de `branches` que faz com que o fluxo de trabalho seja executado apenas quando um push para um branch que corresponde ao filtro de `branches` ocorre, ao invés de quando qualquer push ocorre.

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```
