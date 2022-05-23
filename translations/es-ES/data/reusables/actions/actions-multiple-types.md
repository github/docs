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
