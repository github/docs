Use `working-directory` to define the working directory for the `shell` for a step. {% data reusables.actions.reusable-keyword %}

{% data reusables.actions.working-directory-must-exist %}

The `working-directory` for a step is taken from the first defined in this list:
1. The step `jobs.<job_id>.steps[*].run.working-directory`. See [`jobs.<job_id>.steps[*].working-directory`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsworking-directory).
1. The job `jobs.<job_id>.defaults.run.working-directory`. See [`jobs.<job_id>.defaults.run.working-directory`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_iddefaultsrunworking-directory).
1. The workflow `defaults.run.working-directory`. See [`defaults.run.working-directory`](/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory).

{% data reusables.actions.defaults-override %}
