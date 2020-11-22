##### **Beispiel mit einem einzelnen Ereignis**

```yaml
# Triggered when code is pushed to any branch in a repository
on: push
```

##### **Beispiel mit einer Ereignisliste**

```yaml
# Triggers the workflow on push or pull request events
on: [push, pull_request]
```

##### **Beispiel für die Verwendung mehrerer Ereignisse mit Aktivitätstypen oder Konfigurationen**

Wenn Du Aktivitätstypen oder Konfigurationen für ein Ereignis angeben musst, musst Du jedes Ereignis separat konfigurieren. Du musst einen Doppelpunkt (`:`) an alle Ereignisse anhängen, einschließlich Ereignisse ohne Konfiguration.

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
