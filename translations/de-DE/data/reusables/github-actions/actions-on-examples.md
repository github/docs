##### **Beispiel mit einem einzelnen Ereignis**

```yaml
# Bei Push auslösen
on: push
```

##### **Beispiel mit einer Ereignisliste**

```yaml
# Workflow bei Push oder bei Pull Request auslösen
on: [push, pull_request]
```

##### **Beispiel für die Verwendung mehrerer Ereignisse mit Aktivitätstypen oder Konfigurationen**

Wenn Du Aktivitätstypen oder Konfigurationen für ein Ereignis angeben musst, musst Du jedes Ereignis separat konfigurieren. Du musst einen Doppelpunkt (`:`) an alle Ereignisse anhängen, einschließlich Ereignisse ohne Konfiguration.

```yaml
on:
  # Workflow bei Push oder Pull Request ausloesen,
  # aber nur für den Master-Branch
  push:
    branches:
      - master
  pull_request:
    branches:
      - master
  # Auch bei page_build ausloesen, wie auch für Release erstellte Ereignisse
  page_build:
  release:
    types: # Diese Konfiguration beeinflusst das obige page_build Ereignis nicht
      - created
```
