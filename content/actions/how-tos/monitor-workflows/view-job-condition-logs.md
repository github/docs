---
title: Viewing job condition expression logs
shortTitle: View job condition logs
intro: 'Learn how to access and interpret expression evaluation logs for job-level `if` conditions in {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
---

When a job's `if` condition is evaluated, {% data variables.product.prodname_actions %} logs the expression evaluation to help you understand the result. This is useful for debugging both why a job was skipped and why a job ran when you expected it to be skipped.

## Accessing expression logs

1. Navigate to the workflow run summary.
1. Click on the job.
1. Click **{% octicon "gear" aria-label="The Gear icon" %}**.
1. Select **Download log archive**.
1. Extract the ZIP file and open the `JOB-NAME/system.txt` file.

## Understanding the log output

The system log shows the expression evaluation:

```text
Evaluating: (success() && ((github.repository == 'octo-org/octo-repo-prod')))
Expanded: (true && (('my-username/octo-repo-prod' == 'octo-org/octo-repo-prod')))
Result: false
```

| Line | Description |
|------|-------------|
| **Evaluating** | The original `if` expression from your workflow file. |
| **Expanded** | The expression with context values substituted. This shows you exactly what values were used at runtime. |
| **Result** | The final evaluation result (`true` or `false`). |

In this example, the expanded line reveals that `github.repository` was `'my-username/octo-repo-prod'` (not `'octo-org/octo-repo-prod'`), which caused the condition to evaluate to `false`.

> [!NOTE]
> Expression logs are only available for job-level `if` conditions. For step-level conditions, you can enable debug logging to see expression evaluation in the job logs. For more information, see [AUTOTITLE](/actions/how-tos/monitor-workflows/enable-debug-logging).
