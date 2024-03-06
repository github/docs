Use `shell` to define the `shell` for a step. {% data reusables.actions.reusable-keyword %}

{% data reusables.actions.supported-shells %}

The `shell` for a step is taken from the first defined in this list:
1. the step `jobs.<job_id>.steps[*].run.shell`. See [`jobs.<job_id>.steps[*].shell`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell).
1. the job `jobs.<job_id>.defaults.run.shell`. See [`jobs.<job_id>.defaults.run.shell`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrunshell).
1. the workflow `defaults.run.shell`. See [`defaults.run.shell`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunshell).

{% data reusables.actions.defaults-override %}
