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
topics:
  - CD
  - Deployment
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---


## About environments

Environments are used to describe a general deployment target like `production`, `staging`, or `development`. When a {% data variables.product.prodname_actions %} workflow deploys to an environment, the environment is displayed on the main page of the repository. For more information about viewing deployments to environments, see "[AUTOTITLE](/actions/deployment/managing-your-deployments/viewing-deployment-history)."

You can configure environments with protection rules and secrets. When a workflow job references an environment, the job won't start until all of the environment's protection rules pass. A job also cannot access secrets that are defined in an environment until all the deployment protection rules pass.

{% ifversion actions-break-glass %}Optionally, you can bypass an environment's protection rules and force all pending jobs referencing the environment to proceed. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments#bypassing-environment-protection-rules)."{% endif %}

{% ifversion fpt %}
{% note %}

**Note:** Users with {% data variables.product.prodname_free_user %} plans can only configure environments for public repositories. If you convert a repository from public to private, any configured protection rules or environment secrets will be ignored, and you will not be able to configure any environments. If you convert your repository back to public, you will have access to any previously configured protection rules and environment secrets.

Organizations with {% data variables.product.prodname_team %} and users with {% data variables.product.prodname_pro %} can configure environments for private repositories. For more information, see "[AUTOTITLE](/get-started/learning-about-github/githubs-plans)."

{% endnote %}
{% endif %}

## Deployment protection rules

Deployment protection rules require specific conditions to pass before a job referencing the environment can proceed. You can use deployment protection rules to require a manual approval, delay a job, or restrict the environment to certain branches.{% ifversion actions-custom-deployment-protection-rules-beta %} You can also create and implement custom protection rules powered by {% data variables.product.prodname_github_apps %} to use third-party systems to control deployments referencing environments configured on {% data variables.location.product_location %}.

Third-party systems can be observability systems, change management systems, code quality systems, or other manual configurations that you use to assess readiness before deployments are safely rolled out to environments.

{% data reusables.actions.custom-deployment-protection-rules-limits %}

{% endif %}

### Required reviewers

Use required reviewers to require a specific person or team to approve workflow jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

{% ifversion deployments-prevent-self-approval %}You also have the option to prevent self-reviews for deployments to protected environments. If you enable this setting, users who initiate a deployment cannot approve the deployment job, even if they are a required reviewer. This ensures that deployments to protected environments are always reviewed by more than one person.{% endif %}

For more information on reviewing jobs that reference an environment with required reviewers, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments)."

{% ifversion fpt %}{% note %}

**Note:** If you are on a {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, or {% data variables.product.prodname_team %} plan, required reviewers are only available for public repositories.

{% endnote %}{% endif %}

### Wait timer

Use a wait timer to delay a job for a specific amount of time after the job is initially triggered. The time (in minutes) must be an integer between 1 and 43,200 (30 days).

{% ifversion fpt %}{% note %}

**Note:** If you are on a {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, or {% data variables.product.prodname_team %} plan, wait timers are only available for public repositories.

{% endnote %}{% endif %}

### Deployment branches{% ifversion deployment-protections-tag-patterns %} and tags{% endif %}

Use deployment branches{% ifversion deployment-protections-tag-patterns %} and tags{% endif %} to restrict which branches{% ifversion deployment-protections-tag-patterns %} and tags{% endif %} can deploy to the environment. Below are the options for deployment branches{% ifversion deployment-protections-tag-patterns %} and tags{% endif %} for an environment:

{% ifversion deployment-protections-tag-patterns %}
* **No restriction**: No restriction on which branch or tag can deploy to the environment.
{%- else %}
* **All branches**: All branches in the repository can deploy to the environment.
{%- endif %}
* **Protected branches{% ifversion deployment-protections-tag-patterns %} only{% endif %}**: Only branches with branch protection rules enabled can deploy to the environment. If no branch protection rules are defined for any branch in the repository, then all branches can deploy. For more information about branch protection rules, see "[AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)."{% ifversion actions-protected-branches-restrictions %}

  {% note %}

  **Note:** Deployment workflow runs triggered by tags with the same name as a protected branch and forks with branches that match the protected branch name cannot deploy to the environment.

  {% endnote %}{% endif %}
* **Selected branches{% ifversion deployment-protections-tag-patterns %} and tags{% endif %}**: Only branches{% ifversion deployment-protections-tag-patterns %} and tags{% endif %} that match your specified name patterns can deploy to the environment.

  If you specify `releases/*` as a deployment branch{% ifversion deployment-protections-tag-patterns %} or tag{% endif %} rule, only a branch{% ifversion deployment-protections-tag-patterns %} or tag{% endif %} whose name begins with `releases/` can deploy to the environment. (Wildcard characters will not match `/`. To match branches{% ifversion deployment-protections-tag-patterns %} or tags{% endif %} that begin with `release/` and contain an additional single slash, use `release/*/*`.) If you add `main` as a branch rule, a branch named `main` can also deploy to the environment. For more information about syntax options for deployment branches, see the [Ruby `File.fnmatch` documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

  {% ifversion deployment-protections-tag-patterns %}

  {% data reusables.actions.branch-and-tag-deployment-rules-configuration %}

  {% endif %}

{% ifversion fpt %}{% note %}

**Note:** Deployment branches{% ifversion deployment-protections-tag-patterns %} and tags{% endif %} are available for all public repositories. For users on {% data variables.product.prodname_pro %} or {% data variables.product.prodname_team %} plans, deployment branches{% ifversion deployment-protections-tag-patterns %} and tags{% endif %} are also available for private repositories.

{% endnote %}{% endif %}

{% ifversion actions-break-glass %}

### Allow administrators to bypass configured protection rules

By default, administrators can bypass the protection rules and force deployments to specific environments. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments#bypassing-environment-protection-rules)."

Alternatively, you can configure environments to disallow bypassing the protection rules for all deployments to the environment.

{% ifversion fpt %}{% note %}

**Note:** Allowing administrators to bypass protection rules is only available for public repositories for users on {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, and {% data variables.product.prodname_team %} plans.

{% endnote %}{% endif %}
{% endif %}

{% ifversion actions-custom-deployment-protection-rules-beta %}

### Custom deployment protection rules

{% data reusables.actions.custom-deployment-protection-rules-beta-note %}

{% data reusables.actions.about-custom-deployment-protection-rules %} For more information, see "[AUTOTITLE](/actions/deployment/protecting-deployments/creating-custom-deployment-protection-rules)".

Once custom deployment protection rules have been created and installed on a repository, you can enable the custom deployment protection rule for any environment in the repository. For more information about configuring and enabling custom deployment protection rules, see "[AUTOTITLE](/actions/deployment/protecting-deployments/configuring-custom-deployment-protection-rules)."

{% ifversion fpt %}{% note %}

**Note:** Custom deployment protection rules are only available for public repositories for users on {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, and {% data variables.product.prodname_team %} plans.

{% endnote %}{% endif %}

{% endif %}

## Environment secrets

Secrets stored in an environment are only available to workflow jobs that reference the environment. If the environment requires approval, a job cannot access environment secrets until one of the required reviewers approves it. For more information about secrets, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

{% ifversion fpt %}
{% note %}

**Notes:**

* Workflows that run on self-hosted runners are not run in an isolated container, even if they use environments. Environment secrets should be treated with the same level of security as repository and organization secrets. For more information, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)."
* Environment secrets are only available in public repositories if you are using {% data variables.product.prodname_free_user %}. For access to environment secrets in private or internal repositories, you must use {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, or {% data variables.product.prodname_enterprise %}. For more information on switching your plan, see "[AUTOTITLE](/billing/managing-the-plan-for-your-github-account/upgrading-your-accounts-plan)."

{% endnote %}
{% else %}
{% note %}

**Note:** Workflows that run on self-hosted runners are not run in an isolated container, even if they use environments. Environment secrets should be treated with the same level of security as repository and organization secrets. For more information, see "[AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners)."

{% endnote %}
{% endif %}

## Environment variables

Variables stored in an environment are only available to workflow jobs that reference the environment. These variables are only accessible using the [`vars`](/actions/learn-github-actions/contexts#vars-context) context. For more information, see "[AUTOTITLE](/actions/learn-github-actions/variables)."

{% ifversion fpt %}{% note %}

**Note:** Environment variables are available for all public repositories. For users on {% data variables.product.prodname_pro %} or {% data variables.product.prodname_team %} plans, environment variables are also available for private repositories.

{% endnote %}{% endif %}

## Creating an environment

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt %}
{% note %}

**Notes:**

* Creation of an environment in a private repository is available to organizations with {% data variables.product.prodname_team %} and users with {% data variables.product.prodname_pro %}.
* Some features for environments have no or limited availability for private repositories. If you are unable to access a feature described in the instructions below, please see the documentation linked in the related step for availability information.

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
{% data reusables.actions.new-environment %}
{% data reusables.actions.name-environment %}
1. Optionally, specify people or teams that must approve workflow jobs that use this environment. For more information, see "[Required reviewers](#required-reviewers)."
   1. Select **Required reviewers**.
   1. Enter up to 6 people or teams. Only one of the required reviewers needs to approve the job for it to proceed.
   {% ifversion deployments-prevent-self-approval %}1. Optionally, to prevent users from approving workflows runs that they triggered, select **Prevent self-review**.{% endif %}
   1. Click **Save protection rules**.
1. Optionally, specify the amount of time to wait before allowing workflow jobs that use this environment to proceed. For more information, see "[Wait timer](#wait-timer)."
   1. Select **Wait timer**.
   1. Enter the number of minutes to wait.
   1. Click **Save protection rules**.
{%- ifversion actions-break-glass %}
1. Optionally, disallow bypassing configured protection rules. For more information, see "[Allow administrators to bypass configured protection rules](#allow-administrators-to-bypass-configured-protection-rules)."
   1. Deselect **Allow administrators to bypass configured protection rules**.
   1. Click **Save protection rules**.
{%- endif %}
{%- ifversion actions-custom-deployment-protection-rules-beta %}
1. Optionally, enable any custom deployment protection rules that have been created with {% data variables.product.prodname_github_apps %}. For more information, see "[Custom deployment protection rules](#custom-deployment-protection-rules)."
   1. Select the custom protection rule you want to enable.
   1. Click **Save protection rules**.
{%- endif %}
1. Optionally, specify what branches{% ifversion deployment-protections-tag-patterns %} and tags{% endif %} can deploy to this environment. For more information, see "[Deployment branches{% ifversion deployment-protections-tag-patterns %} and tags{% endif %}](/actions/deployment/targeting-different-environments/managing-environments-for-deployment#deployment-branches{% ifversion deployment-protections-tag-patterns %}-and-tags{% endif %})."
   1. Select the desired option in the **Deployment branches** dropdown.
   1. If you chose **Selected branches{% ifversion deployment-protections-tag-patterns %} and tags{% endif %}**, to add a new rule, click **Add deployment branch{% ifversion deployment-protections-tag-patterns %} or tag{% endif %} rule**
   {% ifversion deployment-protections-tag-patterns %}1. In the "Ref type" dropdown menu, depending on what rule you want to apply, click **{% octicon "git-branch" aria-label="The branch icon" %} Branch** or **{% octicon "tag" aria-label="The tag icon" %} Tag**.{% endif %}
   1. Enter the name pattern for the branch{% ifversion deployment-protections-tag-patterns %} or tag{% endif %} that you want to allow.
      {% ifversion deployment-protections-tag-patterns %}

      {% data reusables.actions.branch-and-tag-deployment-rules-configuration %}

      {% endif %}
   1. Click **Add rule**.
1. Optionally, add environment secrets. These secrets are only available to workflow jobs that use the environment. Additionally, workflow jobs that use this environment can only access these secrets after any configured rules (for example, required reviewers) pass. For more information, see "[Environment secrets](#environment-secrets)."
   1. Under **Environment secrets**, click **Add Secret**.
   1. Enter the secret name.
   1. Enter the secret value.
   1. Click **Add secret**.
1. Optionally, add environment variables. These variables are only available to workflow jobs that use the environment, and are only accessible using the [`vars`](/actions/learn-github-actions/contexts#vars-context) context. For more information, see "[Environment variables](#environment-variables)."
   1. Under **Environment variables**, click **Add Variable**.
   1. Enter the variable name.
   1. Enter the variable value.
   1. Click **Add variable**.

You can also create and configure environments through the REST API. For more information, see "[AUTOTITLE](/rest/deployments/environments)," "[AUTOTITLE](/rest/actions/secrets)," "[AUTOTITLE](/rest/actions/variables)," and "[AUTOTITLE](/rest/deployments/branch-policies)."

Running a workflow that references an environment that does not exist will create an environment with the referenced name. If the environment is created from running implicit page builds (for example, from a branch or folder source), the source branch will be added as a protection rule to the environment. Otherwise, the newly created environment will not have any protection rules or secrets configured. Anyone that can edit workflows in the repository can create environments via a workflow file, but only repository admins can configure the environment.

## Deleting an environment

{% data reusables.actions.permissions-statement-environment %}

Deleting an environment will delete all secrets and protection rules associated with the environment. Any jobs currently waiting because of protection rules from the deleted environment will automatically fail.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
1. Next to the environment that you want to delete, click {% octicon "trash" aria-label="Delete environment" %}.
1. Click **I understand, delete this environment**.

You can also delete environments through the REST API. For more information, see "[AUTOTITLE](/rest/repos#environments)."

## How environments relate to deployments

{% data reusables.actions.environment-deployment-event %}

You can access these objects through the REST API or GraphQL API. You can also subscribe to these webhook events. For more information, see "[AUTOTITLE](/rest/repos#deployments)," "[AUTOTITLE](/graphql/reference/objects#deployment)" (GraphQL API), or "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)."

## Next steps

{% data variables.product.prodname_actions %} provides several features for managing your deployments. For more information, see "[AUTOTITLE](/actions/deployment/about-deployments/deploying-with-github-actions)."
