Use `jobs.<job_id>.defaults.run` to provide default `shell` and `working-directory` to all `run` steps in the job.

You can provide default `shell` and `working-directory` options for all [`run`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsrun) steps in a job. You can also set default settings for `run` for the entire workflow. For more information, see [`defaults.run`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrun).

These can be overriden at the `jobs.<job_id>.defaults.run` and `jobs.<job_id>.steps[*].run` levels.

{% data reusables.actions.defaults-override %}
