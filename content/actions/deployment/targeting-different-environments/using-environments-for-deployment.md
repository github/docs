---
title: Using environments for deployment
shortTitle: Use environments for deployment
intro: You can configure environments with protection rules and secrets. A workflow job that references an environment must follow any protection rules for the environment before running or accessing the environment's secrets.
product: '{% data reusables.gated-features.environments %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/reference/environments
  - /actions/deployment/environments
  - /actions/deployment/using-environments-for-deployment
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---


## About environments

Environments are used to describe a general deployment target like `production`, `staging`, or `development`. When a {% data variables.product.prodname_actions %} workflow deploys to an environment, the environment is displayed on the main page of the repository. For more information about viewing deployments to environments, see "[Viewing deployment history](/developers/overview/viewing-deployment-history)."

You can configure environments with protection rules and secrets. When a workflow job references an environment, the job won't start until all of the environment's protection rules pass. A job also cannot access secrets that are defined in an environment until all the environment protection rules pass.

{% ifversion fpt %}
{% note %}

**Note:** You can only configure environments for public repositories. If you convert a repository from public to private, any configured protection rules or environment secrets will be ignored, and you will not be able to configure any environments. If you convert your repository back to public, you will have access to any previously configured protection rules and environment secrets.

Organizations that use {% data variables.product.prodname_ghe_cloud %} can configure environments for private repositories. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/deployment/targeting-different-environments/using-environments-for-deployment). {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

## Environment protection rules

Environment protection rules require specific conditions to pass before a job referencing the environment can proceed. {% ifversion fpt or ghae or ghes > 3.1 or ghec %}You can use environment protection rules to require a manual approval, delay a job, or restrict the environment to certain branches.{% else %}You can use environment protection rules to require a manual approval or delay a job.{% endif %}

### Required reviewers

Use required reviewers to require a specific person or team to approve workflow jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

For more information on reviewing jobs that reference an environment with required reviewers, see "[Reviewing deployments](/actions/managing-workflow-runs/reviewing-deployments)."

### Wait timer

Use a wait timer to delay a job for a specific amount of time after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}
### Deployment branches

Use deployment branches to restrict which branches can deploy to the environment. Below are the options for deployment branches for an environment:

* **All branches**: All branches in the repository can deploy to the environment.
* **Protected branches**: Only branches with branch protection rules enabled can deploy to the environment. If no branch protection rules are defined for any branch in the repository, then all branches can deploy. For more information about branch protection rules, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."
* **Selected branches**: Only branches that match your specified name patterns can deploy to the environment.

  For example, if you specify `releases/*` as a deployment branch rule, only branches whose name begins with `releases/` can deploy to the environment. (Wildcard characters will not match `/`. To match branches that begin with `release/` and contain an additional single slash, use `release/*/*`.) If you add `main` as a deployment branch rule, a branch named `main` can also deploy to the environment. For more information about syntax options for deployment branches, see the [Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).
{% endif %}
## Environment secrets

Secrets stored in an environment are only available to workflow jobs that reference the environment. If the environment requires approval, a job cannot access environment secrets until one of the required reviewers approves it. For more information about secrets, see "[Encrypted secrets](/actions/reference/encrypted-secrets)."

{% note %}

**Note:** Workflows that run on self-hosted runners are not run in an isolated container, even if they use environments. Environment secrets should be treated with the same level of security as repository and organization secrets. For more information, see "[Security hardening for GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners)."

{% endnote %}

## Creating an environment

{% data reusables.actions.permissions-statement-environment %}

{% ifversion fpt or ghec %}
{% note %}

**Note:** To create an environment in a private repository, your organization must use {% data variables.product.prodname_ghe_cloud %}. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
{% data reusables.actions.new-environment %}
{% data reusables.actions.name-environment %}
1. Optionally, specify people or teams that must approve workflow jobs that use this environment.
   1. Select **Required reviewers**.
   1. Enter up to 6 people or teams. Only one of the required reviewers needs to approve the job for it to proceed.
   1. Click **Save protection rules**.
2. Optionally, specify the amount of time to wait before allowing workflow jobs that use this environment to proceed.
   1. Select **Wait timer**.
   1. Enter the number of minutes to wait.
   1. Click **Save protection rules**.
3. Optionally, specify what branches can deploy to this environment. For more information about the possible values, see "[Deployment branches](#deployment-branches)."
   1. Select the desired option in the **Deployment branches** dropdown.
   1. If you chose **Selected branches**, enter the branch name patterns that you want to allow.
4. Optionally, add environment secrets. These secrets are only available to workflow jobs that use the environment. Additionally, workflow jobs that use this environment can only access these secrets after any configured rules (for example, required reviewers) pass. For more information about secrets, see "[Encrypted secrets](/actions/reference/encrypted-secrets)."
   1. Under **Environment secrets**, click **Add Secret**.
   1. Enter the secret name.
   1. Enter the secret value.
   1. Click **Add secret**.

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}You can also create and configure environments through the REST API. For more information, see "[Environments](/rest/reference/repos#environments)" and "[Secrets](/rest/reference/actions#secrets)."{% endif %}

Running a workflow that references an environment that does not exist will create an environment with the referenced name. The newly created environment will not have any protection rules or secrets configured. Anyone that can edit workflows in the repository can create environments via a workflow file, but only repository admins can configure the environment.

## Using an environment

Each job in a workflow can reference a single environment. Any protection rules configured for the environment must pass before a job referencing the environment is sent to a runner. The job can access the environment's secrets only after the job is sent to a runner.

When a workflow references an environment, the environment will appear in the repository's deployments. For more information about viewing current and previous deployments, see "[Viewing deployment history](/developers/overview/viewing-deployment-history)."

{% data reusables.actions.environment-example %}

## Deleting an environment

{% data reusables.actions.permissions-statement-environment %}

Deleting an environment will delete all secrets and protection rules associated with the environment. Any jobs currently waiting because of protection rules from the deleted environment will automatically fail.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
1. Next to the environment that you want to delete, click {% octicon "trash" aria-label="The trash icon" %}.
2. Click **I understand, delete this environment**.

{% ifversion fpt or ghae or ghes > 3.1 or ghec %}You can also delete environments through the REST API. For more information, see "[Environments](/rest/reference/repos#environments)."{% endif %}

## How environments relate to deployments

{% data reusables.actions.environment-deployment-event %}

You can access these objects through the REST API or GraphQL API. You can also subscribe to these webhook events. For more information, see "[Repositories](/rest/reference/repos#deployments)" (REST API), "[Objects]({% ifversion ghec %}/free-pro-team@latest{% endif %}/graphql/reference/objects#deployment)" (GraphQL API), or "[Webhook events and payloads](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment)."

## Next steps

{% data variables.product.prodname_actions %} provides several features for managing your deployments. For more information, see "[Deploying with GitHub Actions](/actions/deployment/deploying-with-github-actions)."
