---
title: Enforcing policies for GitHub Actions in your enterprise
intro: 'You can enforce policies for {% data variables.product.prodname_actions %} within your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: 'Enterprise owners can enforce policies for {% data variables.product.prodname_actions %} in an enterprise.'
miniTocMaxHeadingLevel: 3
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
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - Policies
shortTitle: GitHub Actions policies
---

{% data reusables.actions.enterprise-beta %}

## About policies for {% data variables.product.prodname_actions %} in your enterprise

{% data variables.product.prodname_actions %} helps members of your enterprise automate software development workflows on {% data variables.product.product_name %}. For more information, see "[Understanding {% data variables.product.prodname_actions %}](/actions/learn-github-actions/understanding-github-actions)."

{% ifversion ghes %}If you enable {% data variables.product.prodname_actions %}, any{% else %}Any{% endif %} organization on {% data variables.location.product_location %} can use {% data variables.product.prodname_actions %}. You can enforce policies to control how members of your enterprise on {% data variables.product.product_name %} use {% data variables.product.prodname_actions %}. By default, organization owners can manage how members use {% data variables.product.prodname_actions %}. For more information, see "[Disabling or limiting {% data variables.product.prodname_actions %} for your organization](/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization)."

## Enforcing a policy to restrict the use of {% data variables.product.prodname_actions %} in your enterprise

You can choose to disable {% data variables.product.prodname_actions %} for all organizations in your enterprise, or only allow specific organizations. You can also limit the use of public actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %}, so that people can only use local actions {% ifversion actions-workflow-policy %}and reusable workflows{% endif %} that exist in your enterprise.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under "Policies", select your options.

   {% indented_data_reference reusables.actions.actions-use-policy-settings spaces=3 %}

   {%- ifversion ghes or ghae %}
   {% note %}

   **Note:** To enable access to public actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %}, you must first configure {% data variables.location.product_location %} to connect to {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Enabling automatic access to GitHub.com actions using GitHub Connect](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect)."

   {% endnote %}
   {%- endif %}
   {% ifversion actions-workflow-policy %}
   ![Enable, disable, or limits actions for this enterprise account](/assets/images/help/organizations/enterprise-actions-policy-with-workflows.png)
   {%- else %}
   ![Enable, disable, or limits actions for this enterprise account](/assets/images/help/organizations/enterprise-actions-policy.png)
   {%- endif %}
1. Click **Save**.

{% data reusables.actions.allow-specific-actions-intro %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under "Policies", select {% data reusables.actions.policy-label-for-select-actions-workflows %} and add your required actions{% ifversion actions-workflow-policy %} and reusable workflows{% endif %} to the list.
   {% ifversion actions-workflow-policy %}
   ![Add actions and reusable workflows to the allow list](/assets/images/help/organizations/enterprise-actions-policy-allow-list-with-workflows.png)
   {%- elsif ghes or ghae %}
   ![Add actions to the allow list](/assets/images/help/organizations/enterprise-actions-policy-allow-list.png)
   {%- elsif ghae %}
   ![Add actions to the allow list](/assets/images/enterprise/github-ae/enterprise-actions-policy-allow-list.png)
   {%- endif %}

## Enforcing a policy for artifact and log retention in your enterprise

{% data variables.product.prodname_actions %} can store artifact and log files. For more information, see "[Downloading workflow artifacts](/actions/managing-workflow-runs/downloading-workflow-artifacts)."

{% data reusables.actions.about-artifact-log-retention %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.change-retention-period-for-artifacts-logs  %}

## Enforcing a policy for fork pull requests in your enterprise

You can enforce policies to control how {% data variables.product.prodname_actions %} behaves for {% data variables.location.product_location %} when members of your enterprise{% ifversion ghec %} or outside collaborators{% endif %} run workflows from forks.

{% ifversion ghec %}

### Enforcing a policy for approval of pull requests from outside collaborators

{% data reusables.actions.workflow-run-approve-public-fork %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.workflows-from-public-fork-setting %}

{% data reusables.actions.workflow-run-approve-link %}

{% endif %}

### Enforcing a policy for fork pull requests in private repositories

{% data reusables.actions.private-repository-forks-overview %}

If a policy is enabled for an enterprise, the policy can be selectively disabled in individual organizations or repositories. If a policy is disabled for an enterprise, individual organizations or repositories cannot enable it.

{% data reusables.actions.private-repository-forks-options %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.actions.private-repository-forks-configure %}

{% ifversion ghec or ghes or ghae %}

## Enforcing a policy for workflow permissions in your enterprise

{% data reusables.actions.workflow-permissions-intro %}

You can set the default permissions for the `GITHUB_TOKEN` in the settings for your enterprise, organizations, or repositories. If you choose a restricted option as the default in your enterprise settings, this prevents the more permissive setting being chosen in the organization or repository settings.

{% data reusables.actions.workflow-permissions-modifying %}

### Configuring the default `GITHUB_TOKEN` permissions

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
By default, when you create a new enterprise, `GITHUB_TOKEN` only has read access for the `contents` scope.
{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under "Workflow permissions", choose whether you want the `GITHUB_TOKEN` to have read and write access for all scopes, or just read access for the `contents` scope.

   {% ifversion allow-actions-to-approve-pr-with-ent-repo %}
   ![Set GITHUB_TOKEN permissions for this enterprise](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
   {% else %}
   ![Set GITHUB_TOKEN permissions for this enterprise](/assets/images/help/settings/actions-workflow-permissions-enterprise.png)
   {% endif %}
1. Click **Save** to apply the settings.

{% ifversion allow-actions-to-approve-pr-with-ent-repo %}
### Preventing {% data variables.product.prodname_actions %} from creating or approving pull requests

{% data reusables.actions.workflow-pr-approval-permissions-intro %}

By default, when you create a new enterprise, workflows are not allowed to create or approve pull requests.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
1. Under "Workflow permissions", use the **Allow GitHub Actions to create and approve pull requests** setting to configure whether `GITHUB_TOKEN` can create and approve pull requests.

   ![Set GITHUB_TOKEN permissions for this enterprise](/assets/images/help/settings/actions-workflow-permissions-enterprise-with-pr-approval.png)
1. Click **Save** to apply the settings.

{% endif %}
{% endif %}

{% ifversion actions-cache-policy-apis %}

## Enforcing a policy for cache storage in your enterprise

{% data reusables.actions.cache-default-size %} {% data reusables.actions.cache-eviction-process %}

However, you can set an enterprise policy to customize both the default total cache size for each repository, as well as the maximum total cache size allowed for a repository. For example, you might want the default total cache size for each repository to be 5 GB, but also allow repository administrators to configure a total cache size up to 15 GB if necessary.

People with admin access to a repository can set a total cache size for their repository up to the maximum cache size allowed by the enterprise policy setting.

The policy settings for {% data variables.product.prodname_actions %} cache storage can currently only be modified using the REST API:

* To view the current enterprise policy settings, see "[Get GitHub Actions cache usage policy for an enterprise](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)."
* To change the enterprise policy settings, see "[Set GitHub Actions cache usage policy for an enterprise](/rest/actions/cache#get-github-actions-cache-usage-policy-for-an-enterprise)."

{% data reusables.actions.cache-no-org-policy %}

{% endif %}
