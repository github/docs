##### **Exemplo com um único evento**

```yaml
# Trigger on push
on: push
```

##### **Exemplo com uma lista de eventos**

```yaml
# Trigger the workflow on push or pull request
on: [push, pull_request]
```

##### **Exemplo usando vários eventos com tipos de atividade ou configuração**

Se você precisar especificar tipos de atividade ou configuração para um evento, você deve configurar cada evento separadamente. Você deve anexar dois pontos (`:`) a todos os eventos, incluindo eventos sem configuração.

```yaml
on:
  # Trigger the workflow on push or pull request,
  # but only for the master branch
  push:
    branches:
      - master
  pull_request:
    branches:
      - master
  # Also trigger on page_build, as well as release created events
  page_build:
  release:
    types: # This configuration does not affect the page_build event above
      - created
```
