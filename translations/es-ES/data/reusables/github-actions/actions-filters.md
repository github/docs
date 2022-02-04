Algunos eventos tienen filtros que te dan más control sobre qué flujo de trabajo debería ejecutarse.

Por ejemplo, el evento `push` tiene un filtro `branches` que ocasiona que tu flujo de trabajo se ejecute únicamente cuando ocurra una subida a una rama que empate con el filtro `branches`, en vez de cuando ocurra una subida.

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```