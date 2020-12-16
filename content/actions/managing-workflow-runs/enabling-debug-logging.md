---
title: Enabling debug logging
intro: 'If the workflow logs do not provide enough detail to diagnose why a workflow, job, or step is not working as expected, you can enable additional debug logging.'
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

These extra logs are enabled by setting secrets in the repository containing the workflow, so the same permissions requirements will apply:

- {% data reusables.github-actions.permissions-statement-secrets-repository %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
- {% data reusables.github-actions.permissions-statement-secrets-environment %}
{% endif %}
- {% data reusables.github-actions.permissions-statement-secrets-organization %}
- {% data reusables.github-actions.permissions-statement-secrets-api %}

For more information on setting secrets, see "[Creating and using encrypted secrets](/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets)."

### Enabling runner diagnostic logging

Runner diagnostic logging provides additional log files that contain information about how a runner is executing a job. Two extra log files are added to the log archive:

* The runner process log, which includes information about coordinating and setting up runners to execute jobs.
* The worker process log, which logs the execution of a job.

1. To enable runner diagnostic logging, set the following secret in the repository that contains the workflow: `ACTIONS_RUNNER_DEBUG` to `true`.

1. To download runner diagnostic logs, download the log archive of the workflow run. The runner diagnostic logs are contained in the `runner-diagnostic-logs` folder. For more information on downloading logs, see "[Downloading logs](/actions/managing-workflow-runs/using-workflow-run-logs/#downloading-logs)."

### Enabling step debug logging

Step debug logging increases the verbosity of a job's logs during and after a job's execution.

1. To enable step debug logging, you must set the following secret in the repository that contains the workflow: `ACTIONS_STEP_DEBUG` to `true`.

1. After setting the secret, more debug events are shown in the step logs. For more information, see ["Viewing logs to diagnose failures"](/actions/managing-workflow-runs/using-workflow-run-logs/#viewing-logs-to-diagnose-failures).
