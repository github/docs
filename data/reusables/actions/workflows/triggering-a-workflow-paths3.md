When all the path names match patterns in `paths-ignore`, the workflow will not run. If any path names do not match patterns in `paths-ignore`, even if some path names match the patterns, the workflow will run.

A workflow with the following path filter will only run on `push` events that include at least one file outside the `docs` directory at the root of the repository.

```yaml
on:
  push:
    paths-ignore:
      - 'docs/**'
```
