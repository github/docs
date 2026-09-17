---
title: About Actions policies
shortTitle: Policies
intro: Govern how {% data variables.product.prodname_actions %} workflows run within your repository, organization, or enterprise.
versions:
  feature: workflow-execution-protections
contentType: concepts
redirect_from:
  - /repositories/managing-your-repositorys-settings-and-features/actions-policies/about-actions-policies
  - /organizations/managing-organization-settings/actions-policies/about-actions-policies
  - /admin/enforcing-policies/enforcing-policies-for-your-enterprise/actions-policies/about-actions-policies
  - /repositories/managing-your-repositorys-settings-and-features/actions-policies
  - /organizations/managing-organization-settings/actions-policies
  - /admin/enforcing-policies/enforcing-policies-for-your-enterprise/actions-policies
---

## About Actions policies

Actions policies let you govern how {% data variables.product.prodname_actions %} workflows run. You can configure them in the **Policies** section of your {% data variables.product.prodname_actions %} settings (separate from the **General** settings).

Actions policies are available at the enterprise, organization, and repository levels. They currently contain one type of policy: workflow execution protections. {% data variables.product.github %} plans to add more policies over time.

## About workflow execution protections

{% data reusables.actions.actions-policies-about-body %} These protections can disrupt several real-world attack patterns:

* **Poisoned pipeline execution from pull requests.** Restrict or prohibit `pull_request_target`, including in public repositories where it is most often exploited.
* **Manual-trigger abuse.** Limit `workflow_dispatch` so untrusted identities cannot start workflows.
* **Untrusted-actor execution.** Block low-trust identities from triggering workflows entirely.
* **Misconfiguration exploitation.** Apply central policy that overrides any single misconfigured workflow file.

When enforced, disallowed workflow runs will fail with an error. For example:

``` text
Event 'workflow_dispatch' is not allowed to trigger Actions workflows. Workflow file: '.github/workflows/0-welcome.yml'.
```

<!-- expires 2026-11-02 -->

{% ifversion default-pull-req-target-policy %}

> [!NOTE] {% data reusables.actions.workflows.pull-request-target-policy %}

{% endif %}

<!-- end expires 2026-11-02 -->

### Available rules

* **Actor rules** control who can trigger workflows, including individual users, repository roles, {% data variables.product.prodname_github_apps %}, {% data variables.product.prodname_copilot_short %}, and {% data variables.product.prodname_dependabot %}. By default, every user with write access to a repository can trigger workflows. Actor rules let you separate who contributes code from who runs your CI, so you can grant a contributor write access without granting them the ability to execute workflows.
* **Event rules** control which events are permitted, such as `push`, `pull_request`, `pull_request_target`, and `workflow_dispatch`.

{% data variables.product.github %} plans to add more rules over time.

## Next steps

To configure workflow execution protections, see [AUTOTITLE](/actions/how-tos/administer/control-workflow-execution).

To manage policies programmatically, see [AUTOTITLE](/rest/actions/policies).
