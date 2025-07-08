---
title: GITHUB_TOKEN reference
intro: 'Find information about the properties, permissions, and behavior of the `GITHUB_TOKEN` used in {% data variables.product.prodname_actions %} workflows.'
shortTitle: GITHUB_TOKEN reference
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## Permissions for the `GITHUB_TOKEN`

For information about the API endpoints {% data variables.product.prodname_github_apps %} can access with each permission, see [AUTOTITLE](/rest/overview/permissions-required-for-github-apps).

When a workflow is triggered by the [`pull_request_target`](/actions/using-workflows/events-that-trigger-workflows#pull_request_target) event, the `GITHUB_TOKEN` is granted read/write repository permission, even when it is triggered from a public fork. For more information, see [AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows#pull_request_target).

{% data reusables.actions.workflow-runs-dependabot-note %}

The following table shows the permissions granted to the `GITHUB_TOKEN` by default. People with admin permissions to an {% ifversion not ghes %}enterprise, organization, or repository,{% else %}organization or repository{% endif %} can set the default permissions to be either permissive or restricted. For information on how to set the default permissions for the `GITHUB_TOKEN` for your enterprise, organization, or repository, see [AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise), [AUTOTITLE](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization), or [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository).

{% rowheaders %}

| Scope         | Default access<br>(permissive) | Default access<br>(restricted) | Maximum access for<br>pull requests from<br>public forked repositories |
|---------------|-----------------------------|-----------------------------|--------------------------------|
| actions       | read/write  | none | read |
| {% ifversion artifact-attestations %}     |
| attestations  | read/write  | none | read |
| {% endif %}                               |
| checks        | read/write  | none | read |
| contents      | read/write  | read | read |
| deployments   | read/write  | none | read |
| discussions   | read/write  | none | read |
| {% ifversion fpt or ghec %} |
| id-token      | none        | none | none |
| {% endif %} |
| issues        | read/write  | none | read |
| metadata      | read        | read | read |
| models        | read        | none | none |
| packages      | read/write  | read | read |
| pages         | read/write  | none | read |
| pull-requests | read/write  | none | read |
| {% ifversion projects-v1 %} |
| repository-projects | read/write | none | read |
| {% endif %} |
| security-events     | read/write | none | read |
| statuses      | read/write  | none | read |

{% endrowheaders %}

## How permissions are calculated for a workflow job

The permissions for the `GITHUB_TOKEN` are initially set to the default setting for the enterprise, organization, or repository. If the default is set to the restricted permissions at any of these levels then this will apply to the relevant repositories. For example, if you choose the restricted default at the organization level then all repositories in that organization will use the restricted permissions as the default. The permissions are then adjusted based on any configuration within the workflow file, first at the workflow level and then at the job level. Finally, if the workflow was triggered by a pull request from a forked repository, and the **Send write tokens to workflows from pull requests** setting is not selected, the permissions are adjusted to change any write permissions to read only.

## Next steps

* [AUTOTITLE](/actions/concepts/security/github_token)
* [AUTOTITLE](/actions/how-tos/security-for-github-actions/security-guides/use-github_token-in-workflows)
