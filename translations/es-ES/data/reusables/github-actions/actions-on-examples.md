##### Ejemplo con un solo evento

```yaml
# Triggered when code is pushed to any branch in a repository
on: push
```

##### Ejemplo con una lista de eventos

```yaml
# Triggers the workflow on push or pull request events
on: [push, pull_request]
```

##### Ejemplo utilizando eventos múltiples con tipos de actividad o configuración

Si necesitas especificar tipos de actividad o configuración para un evento, debes configurar cada evento por separado. Debes agregar dos puntos (`:`) a todos los eventos, incluyendo aquellos sin configuración.

```yaml
on:
  # Trigger the workflow on push or pull request,
  # but only for the main branch
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  # Also trigger on page_build, as well as release created events
  page_build:
  release:
    types: # This configuration does not affect the page_build event above
      - created
```
