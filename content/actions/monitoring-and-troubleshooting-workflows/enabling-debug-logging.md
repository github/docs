---
title: Enabling debug logging
shortTitle: Enable debug logging
intro: 'If the workflow logs do not provide enough detail to diagnose why a workflow, job, or step is not working as expected, you can enable additional debug logging.'
redirect_from:
  - /actions/managing-workflow-runs/enabling-debug-logging
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
 
{% data reusables.actions.enterprise-github-hosted-runners %}

These extra logs are enabled by setting secrets{% ifversion actions-configuration-variables %} or variables{% endif %} in the repository containing the workflow, so the same permissions requirements will apply:

- {% data reusables.actions.permissions-statement-secrets-variables-repository %}
- {% data reusables.actions.permissions-statement-secrets-environment %}
- {% data reusables.actions.permissions-statement-secrets-and-variables-organization %}

For more information on setting secrets{% ifversion actions-configuration-variables %} and variables, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)" and "[AUTOTITLE](/actions/learn-github-actions/variables)."{% else %}, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."{% endif %}

{% ifversion debug-reruns %}

Additionally, anyone who has access to run a workflow can enable runner diagnostic logging and step debug logging for a workflow re-run. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/re-running-workflows-and-jobs)."

 {% endif %}

## Enabling runner diagnostic logging

Runner diagnostic logging provides additional log files that contain information about how a runner is executing a job. Two extra log files are added to the log archive:

- The runner process log, which includes information about coordinating and setting up runners to execute jobs.
- The worker process log, which logs the execution of a job.

1. To enable runner diagnostic logging, set the following secret{% ifversion actions-configuration-variables %} or variable{% endif %} in the repository that contains the workflow: `ACTIONS_RUNNER_DEBUG` to `true`.{% ifversion actions-configuration-variables %} If both the secret and variable are set, the value of the secret takes precedence over the variable.{% endif %}
1. To download runner diagnostic logs, download the log archive of the workflow run. The runner diagnostic logs are contained in the `runner-diagnostic-logs` folder. For more information on downloading logs, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#downloading-logs)."

## Enabling step debug logging

Step debug logging increases the verbosity of a job's logs during and after a job's execution.

1. To enable step debug logging, set the following secret{% ifversion actions-configuration-variables %} or variable{% endif %} in the repository that contains the workflow: `ACTIONS_STEP_DEBUG` to `true`.{% ifversion actions-configuration-variables %} If both the secret and variable are set, the value of the secret takes precedence over the variable.{% endif %}
1. After setting the secret{% ifversion actions-configuration-variables %} or variable{% endif %}, more debug events are shown in the step logs. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures)."
