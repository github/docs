You can use `defaults.run` to provide default `shell` and `working-directory` options for all [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) steps in a workflow. You can also set default settings for `run` that are only available to a job. For more information, see [`jobs.<job_id>.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrun). You cannot use contexts or expressions in this keyword.

{% data reusables.actions.defaults-override %}

### Example: Set the default shell and working directory

```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
