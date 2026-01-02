You can use `permissions` to modify the default permissions granted to the `GITHUB_TOKEN`, adding or removing access as required, so that you only allow the minimum required access. For more information, see [AUTOTITLE](/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token).

You can use `permissions` either as a top-level key, to apply to all jobs in the workflow, or within specific jobs. When you add the `permissions` key within a specific job, all actions and run commands within that job that use the `GITHUB_TOKEN` gain the access rights you specify. For more information, see [`jobs.<job_id>.permissions`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions).

Owners of an organization{% ifversion not fpt %} or enterprise{% endif %} can restrict write access for the `GITHUB_TOKEN` at the repository level. For more information, see [AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization){% ifversion not fpt %} and [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise).{% else %}.{% endif %}

When a workflow is triggered by the [`pull_request_target`](/actions/using-workflows/events-that-trigger-workflows#pull_request_target) event, the `GITHUB_TOKEN` is granted read/write repository permission, even when it is triggered from a public fork. For more information, see [AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#pull_request_target).

{% data reusables.actions.github-token-scope-descriptions %}
