This example shows permissions being set for the `GITHUB_TOKEN` that will apply to all jobs in the workflow. All permissions are granted read access.

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
