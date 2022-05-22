Use `jobs.<job_id>.defaults.run` to provide default `shell` and `working-directory` to all `run` steps in the job. Context and expression are not allowed in this section.

You can provide default `shell` and `working-directory` options for all [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) steps in a job. You can also set default settings for `run` for the entire workflow. For more information, see [`jobs.defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun). You cannot use contexts or expressions in this keyword.

{% data reusables.actions.defaults-override %}

#### Example: Setting default `run` step options for a job

```yaml
jobs:
  job1:
    runs-on: ubuntu-latest
    defaults:
      run:
        shell: bash
        working-directory: scripts
```
