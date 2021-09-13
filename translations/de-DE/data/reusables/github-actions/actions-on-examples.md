##### Example: Using a single event

```yaml
# Triggered when code is pushed to any branch in a repository
on: push
```

##### Example: Using a list of events

```yaml
# Triggers the workflow on push or pull request events
on: [push, pull_request]
```

##### Example: Using multiple events with activity types or configuration

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
