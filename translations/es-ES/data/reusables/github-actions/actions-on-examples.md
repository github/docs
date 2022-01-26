### Utilizar un evento simple

Por ejemplo, un flujo de trabajo con el siguiente valor de `on` se ejecutará cuando se realice una subida a cualquier rama en el repositorio del flujo de trabajo:

```yaml
on: push
```

### Utilizar eventos múltiples

Puedes especificar eventos sencillos o múltiples. Por ejemplo, un flujo de trabajo con el siguiente valor de `on` se ejecutará cuando se haga una subida a cualquier rama del repositorio o cuando alguien lo bifurque:

```yaml
on: [push, fork]
```

Si especificas eventos múltiples, únicamente uno de ellos necesitará ocurrir para que se active tu flujo de trabajo. Si ocurren eventos múltiples de activación para tu flujo de trabajo al mismo tiempo, se activarán las ejecuciones de flujo de trabajo múltiples.

### Utilizar tipos de actividad

Algunos eventos tienen tipos de actividad que te proporcionan más control sobre cuándo debería ejecutarse tu flujo de trabajo.

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
  issue:
    types:
      - opened
      - labeled
```

### Utilizar filtros

Algunos eventos tienen filtros que te dan más control sobre qué flujo de trabajo debería ejecutarse.

Por ejemplo, el evento `push` tiene un filtro `branches` que ocasiona que tu flujo de trabajo se ejecute únicamente cuando ocurra una subida a una rama que empate con el filtro `branches`, en vez de cuando ocurra una subida.

```yaml
on:
  push:
    branches:
      - main
      - 'releases/**'
```

### Utilizar los tipos de actividad y filtros con eventos múltiples

Si especificas los tipos de actividad o filtros para un evento y tu flujo de trabajo activa eventos múltiples, deberás configurar cada uno de ellos por separado. Debes agregar dos puntos (`:`) a todos los eventos, incluyendo aquellos sin configuración.

Por ejemplo, un flujo de trabajo con el siguiente valor `on` se ejecutará cuando:

- Se crea una etiqueta
- Se hace una subida a la rama `main` en el repositorio
- Se hace una subida a la rama habilitada por {% data variables.product.prodname_pages %}

```yaml
on:
  label:
    types:
      - created
  push:
    branches:
      - main
  page_build:
```