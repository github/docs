You can use `permissions` to modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. For more information, see "[Authentication in a workflow](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)."

You can use `permissions` either as a top-level key, to apply to all jobs in the workflow, or within specific jobs. When you add the `permissions` key within a specific job, all actions and run commands within that job that use the `GITHUB_TOKEN` gain the access rights you specify.  For more information, see [`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions).

{% data reusables.github-actions.github-token-available-permissions %}
{% data reusables.github-actions.forked-write-permission %}

### Example: Assigning permissions to GITHUB_TOKEN

This example shows permissions being set for the `GITHUB_TOKEN` that will apply to all jobs in the workflow. All permissions are granted read access.

```yaml
name: "My workflow"

on: [ push ]

permissions: read-all

jobs:
  ...
```
