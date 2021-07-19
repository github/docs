---
title: Environments
intro: You can configure environments with protection rules and secrets. A workflow job can reference an environment to use the environment's protection rules and secrets.
product: '{% data reusables.gated-features.environments %}'
versions:
  fpt: '*'
  ghes: '>=3.1'
  ghae: '*'
---

{% data reusables.actions.ae-beta %}

## About environments

You can configure environments with protection rules and secrets. When a workflow job references an environment, the job won't start until all of the environment's protection rules pass. A job also cannot access secrets that are defined in an environment until all the environment protection rules pass.

{% ifversion fpt %}
Environment protection rules and environment secrets are only available on public repositories and private repositories on an enterprise plan. If you convert a repository from public to private on a non-enterprise plan, any configured protection rules or environment secrets will be ignored, and you will not be able to configure any environments. If you convert your repository back to public, you will have access to any previously configured protection rules and environment secrets.
{% endif %}

### Environment protection rules

Environment protection rules require specific conditions to pass before a job referencing the environment can proceed. {% ifversion fpt or ghae-next or ghes > 3.1 %}You can use environment protection rules to require a manual approval, delay a job, or restrict the environment to certain branches.{% else %}You can use environment protection rules to require a manual approval or delay a job.{% endif %}

#### Required reviewers

Use required reviewers to require a specific person or team to approve workflow jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

For more information on reviewing jobs that reference an environment with required reviewers, see "[Reviewing deployments](/actions/managing-workflow-runs/reviewing-deployments)."

#### Wait timer

Use a wait timer to delay a job for a specific amount of time after the job is initially triggered. The time (in minutes) must be an integer between 0 and 43,200 (30 days).

{% ifversion fpt or ghae-next or ghes > 3.1 %}
#### Deployment branches

Use deployment branches to restrict which branches can deploy to the environment. Below are the options for deployment branches for an environment:

* **All branches**: All branches in the repository can deploy to the environment.
* **Protected branches**: Only branches with branch protection rules enabled can deploy to the environment. If no branch protection rules are defined for any branch in the repository, then all branches can deploy. For more information about branch protection rules, see "[About protected branches](/github/administering-a-repository/about-protected-branches)."
* **Selected branches**: Only branches that match your specified name patterns can deploy to the environment.

  For example, if you specify `releases/*` as a deployment branch rule, only branches whose name begins with `releases/` can deploy to the environment. (Wildcard characters will not match `/`. To match branches that begin with `release/` and contain an additional single slash, use `release/*/*`.) If you add `main` as a deployment branch rule, a branch named `main` can also deploy to the environment. For more information about syntax options for deployment branches, see the [Ruby File.fnmatch documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).
{% endif %}
### Environment secrets

Secrets stored in an environment are only available to workflow jobs that reference the environment. If the environment requires approval, a job cannot access environment secrets until one of the required reviewers approves it. For more information about secrets, see "[Encrypted secrets](/actions/reference/encrypted-secrets)."

{% note %}

**Note:** Workflows that run on self-hosted runners are not run in an isolated container, even if they use environments. Environment secrets should be treated with the same level as security as repository and organization secrets. For more information, see "[Security hardening for GitHub Actions](/actions/learn-github-actions/security-hardening-for-github-actions#hardening-for-self-hosted-runners)."

{% endnote %}

## Creating an environment

{% data reusables.github-actions.permissions-statement-environment %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. Click **New environment**.
1. Enter a name for the environment, then click **Configure environment**. Environment names are not case sensitive. An environment name may not exceed 255 characters and must be unique within the repository.
1. Configure any environment protection rules or environment secrets.

{% ifversion fpt or ghae-next or ghes > 3.1 %}You can also create and configure environments through the REST API. For more information, see "[Environments](/rest/reference/repos#environments)" and "[Secrets](/rest/reference/actions#secrets)."{% endif %}

Running a workflow that references an environment that does not exist will create an environment with the referenced name. The newly created environment will not have any protection rules or secrets configured. Anyone that can edit workflows in the repository can create environments via a workflow file, but only repository admins can configure the environment.

## Referencing an environment

Each job in a workflow can reference a single environment. Any protection rules configured for the environment must pass before a job referencing the environment is sent to a runner. When the job is sent to the runner, the job can access the environment's secrets.

For more information on syntax to reference environments in workflows, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#jobsjob_idenvironment)." For more information on reviewing jobs that reference an environment with required reviewers, see "[Reviewing deployments](/actions/managing-workflow-runs/reviewing-deployments)."

When a workflow references an environment, the environment will appear in the repository's deployments. For more information about viewing current and previous deployments, see "[Viewing deployment history](/developers/overview/viewing-deployment-history)."

{% ifversion fpt or ghae-next or ghes > 3.1 %}
## Using concurrency to serialize deployments in an environment
You can use concurrency so that an environment has a maximum of one deployment in progress and one deployment pending at a time. For more information, see "[Workflow syntax for GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#concurrency)."{% endif %}

## Deleting an environment

{% data reusables.github-actions.permissions-statement-environment %}

Deleting an environment will delete all secrets and protection rules associated with the environment. Any jobs currently waiting because of protection rules from the deleted environment will automatically fail.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.github-actions.sidebar-environment %}
1. Next to the environment that you want to delete, click {% octicon "trash" aria-label="The trash icon" %}.
2. Click **I understand, delete this environment**.

{% ifversion fpt or ghae-next or ghes > 3.1 %}You can also delete environments through the REST API. For more information, see "[Environments](/rest/reference/repos#environments)."{% endif %}
