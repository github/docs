##### **Example using a single event**

```yaml
# Triggered when code is pushed to any branch in a repository
on: push
```

##### **Example using a list of events**

```yaml
# Triggers the workflow on push or pull request events
on: [push, pull_request]
```

##### **Example using multiple events with activity types or configuration**

If you need to specify activity types or configuration for an event, you must configure each event separately. You must append a colon (`:`) to all events, including events without configuration.

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
