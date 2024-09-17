---
title: Enforcing policies for GitHub Actions in your enterprise
intro: "You can enforce policies to manage how {% data variables.product.prodname_actions %} can be used within your enterprise."
permissions: "Enterprise owners"
redirect_from:
  - /enterprise/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enforcing-github-actions-policies-for-your-enterprise
  - /admin/github-actions/enabling-github-actions-for-github-enterprise-server/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-github-actions-policies-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-github-actions-policies-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-github-actions-policies-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
---

## What are policies for {% data variables.product.prodname_actions %}?

Enterprise policies control the options that are available to enterprise members when they use {% data variables.product.prodname_actions %}.

If you don't enforce enterprise policies, organization owners{% ifversion custom-org-roles %} and users with the "Manage organization Actions policies" permission{% endif %} have full control over {% data variables.product.prodname_actions %} for their organizations.

## Enforcing policies

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. After you configure each policy, click **Save**.

For more information about each section of the "Policies" page, continue reading.

## Policies

In the "Policies" section, you can control which organizations within your enterprise can use {% data variables.product.prodname_actions %}, with the following options:

* Enable {% data variables.product.prodname_actions %} for all organizations
* Enable {% data variables.product.prodname_actions %} for specific organizations
* Disable {% data variables.product.prodname_actions %} for all organizations

You can also limit the use of public actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %}, with the following options:

* **Allow all actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %}**: Any action {% ifversion actions-workflow-policy %}or reusable workflow{% endif %} can be used, regardless of who authored it or where it is defined.
* **Allow enterprise actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %}**: Only actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %} defined in a repository within the enterprise can be used. {% ifversion ghec or fpt %}Blocks all access to actions authored by {% data variables.product.prodname_dotcom %}, such as the [`actions/checkout`](https://github.com/actions/checkout) action.{% endif %}
* {% data reusables.actions.policy-label-for-select-actions-workflows %}: Any action {% ifversion actions-workflow-policy %}or reusable workflow{% endif %} defined in a repository within the enterprise can be used, plus any action {% ifversion actions-workflow-policy %}or reusable workflow{% endif %} that matches criteria you specify.

<span id="allowing-select-actions-and-reusable-workflows-to-run" ></span>

### {% data reusables.actions.policy-label-for-select-actions-workflows %}

If you choose this option, actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %} within your enterprise are allowed, and you'll have the following options for allowing other actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}:

* **Allow actions created by {% data variables.product.prodname_dotcom %}:** Allows all actions created by {% data variables.product.prodname_dotcom %}, located in the [`actions`](https://github.com/actions) and [`github`](https://github.com/github) organizations.
* **Allow Marketplace actions by verified creators:** Allows all {% data variables.product.prodname_marketplace %} actions created by verified creators, labeled with {% octicon "verified" aria-label="The verified badge" %}.{% ifversion ghes %}

   Only available if you have {% data variables.product.prodname_github_connect %} enabled and configured with {% data variables.product.prodname_actions %}. See "[AUTOTITLE](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)."{% endif %}
* **Allow specified actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}:** Allows actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} that you specify. You can specify individual actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} or entire organizations and repositories.

When specifying actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}, use the following syntax:

* To restrict access to specific tags or commit SHAs of an action{% ifversion actions-workflow-policy %} or reusable workflow{% endif %}, use the same syntax used in the workflow to select the action{% ifversion actions-workflow-policy %} or reusable workflow{% endif %}.
   * For an action, the syntax is `OWNER/REPOSITORY@TAG-OR-SHA`. For example, use `actions/javascript-action@v1.0.1` to select a tag or `actions/javascript-action@a824008085750b8e136effc585c3cd6082bd575f` to select a SHA.
   {%- ifversion actions-workflow-policy %}
   * For a reusable workflow, the syntax is `OWNER/REPOSITORY/PATH/FILENAME@TAG-OR-SHA`. For example, `octo-org/another-repo/.github/workflows/workflow.yml@v1`.
    {%- endif %}
* To specify a pattern, use the wildcard character, `*`.
   * To allow all actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} in organizations that start with `space-org`, use `space-org*/*`.
   * To allow all actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} in repositories that start with octocat, use `*/octocat**@*`.

{% ifversion actions-disable-repo-runners %}

## Runners

By default, anyone with admin access to a repository can add a self-hosted runner for the repository, and self-hosted runners come with risks:

* There is no guarantee that self-hosted runners will be hosted on ephemeral, clean virtual machines. As a result, they may be compromised by untrusted code in a workflow.
* Anyone who can fork the repository and open a pull request can compromise the self-hosted runner environment, potentially gaining access to secrets and the `GITHUB_TOKEN`, which may have write access to the repository.

In the "Runners" section, you can mediate these risks by disabling the use of repository-level self-hosted runners.

{% ifversion ghec %}
* **Disable for all organizations**: Prevents the creation of runners at the repository level.
* **Disable in all Enterprise Managed User (EMU) repositories**: Prevents the creation of runners for repositories owned by {% data variables.enterprise.prodname_managed_users %}.
{% endif %}

{% data reusables.actions.disable-selfhosted-runners-note %}

{% endif %}

## {% ifversion ghes %}Artifact, log, and cache settings{% else %}Artifact and log retention{% endif %}

{% ifversion ghes %}

These policies control storage of artifacts, logs, and caches.

### Artifact and log retention

{% endif %}

By default, artifacts and log files generated by workflows are retained for 90 days. {% ifversion ghes %}You can change this retention period to anywhere between 1 and 400 days.{% else %}You can change the retention period.

* For public repositories, you can configure a period between 1 and 90 days.
* For private and internal repositories, you can configure a period between 1 and 400 days.
{% endif %}

Changes only apply to new artifacts and log files.

{% ifversion actions-cache-policy-apis %}

### Maximum and default cache size limits

By default:

* The total cache storage that {% data variables.product.prodname_actions %} uses on the external storage for {% data variables.location.product_location %} is limited to a maximum of 10 GB per repository.
* The maximum allowed size that can be set for a repository is 25 GB.

{% data reusables.actions.cache-eviction-process %}

You can customize both the default total cache size for each repository and the maximum total cache size allowed for a repository. For example, you might want the default total cache size for each repository to be 5 GB, but also allow administrators to configure a total cache size up to 15 GB for individual repositories.

{% ifversion actions-cache-admin-ui %}Organization owners can set a lower total cache size that applies to each repository in their organization. {% endif %}People with admin access to a repository can set a total cache size for their repository up to the maximum cache size allowed by the enterprise {% ifversion actions-cache-admin-ui %}or organization{% endif %} policy setting.

{% endif %}

{% ifversion ghec %}

## Fork pull request workflows from outside collaborators

Anyone can fork a public repository, then submit a pull request to propose changes to the repository's workflows. To prevent abuse, workflows will not run automatically on pull requests created by some contributors.

You can configure which pull requests require approval before they are run.

* **Require approval for first-time contributors who are new to {% data variables.product.prodname_dotcom %}**. Requires approval for users who have never committed to the repository and have new {% data variables.product.prodname_dotcom %} accounts.
* **Require approval for first-time contributors**. Requires approval for users who have never committed to the repository.
* **Require approval for all outside collaborators**. Requires approval for all users who are not organization members.

> [!NOTE] Workflows on the base branch triggered by `pull_request_target` events will always run, regardless of approval settings.

{% endif %}

## Fork pull request workflows in private repositories

You can control how users can run workflows on `pull_request` events in private and internal repositories.

* **Run workflows from fork pull requests**. Users can run workflows from fork pull requests. By default, workflows will use a `GITHUB_TOKEN` with read-only permission, with no access to secrets.
* **Send write tokens to workflows from pull requests**. Workflows will use a `GITHUB_TOKEN` with write permission.
* **Send secrets to workflows from pull requests**. All secrets are available to the pull request.
{%- ifversion actions-private-fork-workflow-approvals %}
* **Require approval for fork pull request workflows**. Workflows on pull requests from collaborators without write permission will require approval from someone with write permission before they will run.
{%- endif %}

If a policy is enabled for an enterprise, the policy can be selectively disabled in individual organizations or repositories. If a policy is disabled for an enterprise, individual organizations or repositories cannot enable it.

{% ifversion ghec or ghes %}

## Workflow permissions

In the "Workflow permissions" section, you can set the **default** permissions granted to the `GITHUB_TOKEN`.

* **Read and write permissions**: By default, `GITHUB_TOKEN` has read and write access for all scopes.
* **Read repository contents and packages permissions**: By default, `GITHUB_TOKEN` has only read access for the `contents` and `packages` scopes. The more permissive setting cannot be chosen as the default for individual organizations or repositories.

Anyone with write access to a repository can still modify the permissions granted to the `GITHUB_TOKEN` for a specific workflow, by editing the `permissions` key in the workflow file.

**Allow GitHub Actions to create and approve pull requests** is disabled by default. If you enable this setting, `GITHUB_TOKEN` can create and approve pull requests.

{% endif %}
