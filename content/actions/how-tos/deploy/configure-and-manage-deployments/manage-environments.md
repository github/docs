---
title: Managing environments for deployment
shortTitle: Manage environments
intro: You can create environments and secure those environments with deployment protection rules. A job that references an environment must follow any protection rules for the environment before running or accessing the environment's secrets.
product: '{% data reusables.gated-features.environments %}'
permissions: Repository owners
redirect_from:
  - /actions/reference/environments
  - /actions/deployment/environments
  - /actions/deployment/using-environments-for-deployment
  - /actions/deployment/targeting-different-environments/using-environments-for-deployment
  - /actions/deployment/targeting-different-environments
  - /actions/deployment/targeting-different-environments/managing-environments-for-deployment
  - /actions/administering-github-actions/managing-environments-for-deployment
  - /actions/managing-workflow-runs-and-deployments/managing-workflow-deployments/managing-environments-for-deployment
  - /actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment
  - /actions/how-tos/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment
topics:
  - CD
  - Deployment
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

## Prerequisites

{% ifversion fpt %}

> [!NOTE]
> Users with {% data variables.product.prodname_free_user %} plans can only configure environments for public repositories. If you convert a repository from public to private, any configured protection rules or environment secrets will be ignored, and you will not be able to configure any environments. If you convert your repository back to public, you will have access to any previously configured protection rules and environment secrets.
>
> Organizations with {% data variables.product.prodname_team %} and users with {% data variables.product.prodname_pro %} can configure environments for private repositories. For more information, see [AUTOTITLE](/get-started/learning-about-github/githubs-plans).

{% endif %}

* For general information about environments, see [AUTOTITLE](/actions/concepts/use-cases/deploying-with-github-actions#using-environments).
* For information about available rules, see [AUTOTITLE](/actions/reference/deployments-and-environments).

## Creating an environment

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt %}

> [!NOTE]
> * Creation of an environment in a private repository is available to organizations with {% data variables.product.prodname_team %} and users with {% data variables.product.prodname_pro %}.
> * Some features for environments have no or limited availability for private repositories. If you are unable to access a feature described in the instructions below, please see the documentation linked in the related step for availability information.

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
{% data reusables.actions.new-environment %}
{% data reusables.actions.name-environment %}
1. Optionally, specify people or teams that must approve workflow jobs that use this environment. For more information, see [AUTOTITLE](/actions/reference/deployments-and-environments#required-reviewers).
   1. Select **Required reviewers**.
   1. Enter up to 6 people or teams. Only one of the required reviewers needs to approve the job for it to proceed.
   1. Optionally, to prevent users from approving workflows runs that they triggered, select **Prevent self-review**.
   1. Click **Save protection rules**.
1. Optionally, specify the amount of time to wait before allowing workflow jobs that use this environment to proceed. For more information, see [AUTOTITLE](/actions/reference/deployments-and-environments#wait-timer).
   1. Select **Wait timer**.
   1. Enter the number of minutes to wait.
   1. Click **Save protection rules**.
1. Optionally, disallow bypassing configured protection rules. For more information, see [AUTOTITLE](/actions/reference/deployments-and-environments#allow-administrators-to-bypass-configured-protection-rules).
   1. Deselect **Allow administrators to bypass configured protection rules**.
   1. Click **Save protection rules**.
1. Optionally, enable any custom deployment protection rules that have been created with {% data variables.product.prodname_github_apps %}. For more information, see [AUTOTITLE](/actions/reference/deployments-and-environments#custom-deployment-protection-rules).
   1. Select the custom protection rule you want to enable.
   1. Click **Save protection rules**.
1. Optionally, specify what branches and tags can deploy to this environment. For more information, see [AUTOTITLE](/actions/reference/deployments-and-environments#deployment-branches-and-tags).
   1. Select the desired option in the **Deployment branches** dropdown.
   1. If you chose **Selected branches and tags**, to add a new rule, click **Add deployment branch or tag rule**
   1. In the "Ref type" dropdown menu, depending on what rule you want to apply, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %} Branch** or **{% octicon "tag" aria-hidden="true" aria-label="tag" %} Tag**.
   1. Enter the name pattern for the branch or tag that you want to allow.

      {% data reusables.actions.branch-and-tag-deployment-rules-configuration %}

   1. Click **Add rule**.
1. Optionally, add environment secrets. These secrets are only available to workflow jobs that use the environment. Additionally, workflow jobs that use this environment can only access these secrets after any configured rules (for example, required reviewers) pass. For more information, see [AUTOTITLE](/actions/reference/deployments-and-environments#environment-secrets).
   1. Under **Environment secrets**, click **Add Secret**.
   1. Enter the secret name.
   1. Enter the secret value.
   1. Click **Add secret**.
1. Optionally, add environment variables. These variables are only available to workflow jobs that use the environment, and are only accessible using the [`vars`](/actions/learn-github-actions/contexts#vars-context) context. For more information, see [AUTOTITLE](/actions/reference/deployments-and-environments#environment-variables).
   1. Under **Environment variables**, click **Add Variable**.
   1. Enter the variable name.
   1. Enter the variable value.
   1. Click **Add variable**.

You can also create and configure environments through the REST API. For more information, see [AUTOTITLE](/rest/deployments/environments), [AUTOTITLE](/rest/actions/secrets), [AUTOTITLE](/rest/actions/variables), and [AUTOTITLE](/rest/deployments/branch-policies).

Running a workflow that references an environment that does not exist will create an environment with the referenced name. If the environment is created from running implicit page builds (for example, from a branch or folder source), the source branch will be added as a protection rule to the environment. Otherwise, the newly created environment will not have any protection rules or secrets configured. Anyone that can edit workflows in the repository can create environments via a workflow file, but only repository admins can configure the environment.

## Deleting an environment

{% data reusables.actions.permissions-statement-environment %}

Deleting an environment will delete all secrets and protection rules associated with the environment. Any jobs currently waiting because of protection rules from the deleted environment will automatically fail.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
1. Next to the environment that you want to delete, click {% octicon "trash" aria-label="Delete environment" %}.
1. Click **I understand, delete this environment**.

You can also delete environments through the REST API. For more information, see [AUTOTITLE](/rest/repos#environments).

## How environments relate to deployments

{% data reusables.actions.environment-deployment-event %}

You can access these objects through the REST API or GraphQL API. You can also subscribe to these webhook events. For more information, see [AUTOTITLE](/rest/repos#deployments), [AUTOTITLE](/graphql/reference/objects#deployment) (GraphQL API), or [AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment).

## Next steps

{% data variables.product.prodname_actions %} provides several features for managing your deployments. For more information, see [AUTOTITLE](/actions/deployment/about-deployments/deploying-with-github-actions).
