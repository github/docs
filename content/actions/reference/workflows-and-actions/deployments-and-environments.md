---
title: Deployments and environments
shortTitle: Deployments and environments
intro: 'Find information about deployment protection rules, environment secrets, and environment variables.'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/reference/deployments-and-environments
---

## Deployment protection rules

Deployment protection rules require specific conditions to pass before a job referencing the environment can proceed. You can use deployment protection rules to require a manual approval, delay a job, or restrict the environment to certain branches. You can also create and implement custom protection rules powered by {% data variables.product.prodname_github_apps %} to use third-party systems to control deployments referencing environments configured on {% data variables.product.github %}.

Third-party systems can be observability systems, change management systems, code quality systems, or other manual configurations that you use to assess readiness before deployments are safely rolled out to environments.

{% data reusables.actions.custom-deployment-protection-rules-limits %}

### Required reviewers

Use required reviewers to require a specific person or team to approve workflow jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.

You also have the option to prevent self-reviews for deployments to protected environments. If you enable this setting, users who initiate a deployment cannot approve the deployment job, even if they are a required reviewer. This ensures that deployments to protected environments are always reviewed by more than one person.

For more information on reviewing jobs that reference an environment with required reviewers, see [AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments).

{% ifversion fpt %}

> [!NOTE]
> If you are on a {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, or {% data variables.product.prodname_team %} plan, required reviewers are only available for public repositories.

{% endif %}

### Wait timer

Use a wait timer to delay a job for a specific amount of time after the job is initially triggered. The time (in minutes) must be an integer between 1 and 43,200 (30 days). Wait time will not count towards your billable time.

{% ifversion fpt %}

> [!NOTE]
> If you are on a {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, or {% data variables.product.prodname_team %} plan, wait timers are only available for public repositories.

{% endif %}

### Deployment branches and tags

Use deployment branches and tags to restrict which branches and tags can deploy to the environment. Below are the options for deployment branches and tags for an environment:

* **No restriction:** No restriction on which branch or tag can deploy to the environment.
* **Protected branches only:** Only branches with branch protection rules enabled can deploy to the environment. If no branch protection rules are defined for any branch in the repository, then all branches can deploy. For more information about branch protection rules, see [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches).

  > [!NOTE]
  > Deployment workflow runs triggered by tags with the same name as a protected branch and forks with branches that match the protected branch name cannot deploy to the environment.

* **Selected branches and tags:** Only branches and tags that match your specified name patterns can deploy to the environment.

  If you specify `releases/*` as a deployment branch or tag rule, only a branch or tag whose name begins with `releases/` can deploy to the environment. (Wildcard characters will not match `/`. To match branches or tags that begin with `release/` and contain an additional single slash, use `release/*/*`.) If you add `main` as a branch rule, a branch named `main` can also deploy to the environment. For more information about syntax options for deployment branches, see the [Ruby `File.fnmatch` documentation](https://ruby-doc.org/core-2.5.1/File.html#method-c-fnmatch).

  {% data reusables.actions.branch-and-tag-deployment-rules-configuration %}

{% ifversion fpt %}

> [!NOTE]
> Deployment branches and tags are available for all public repositories. For users on {% data variables.product.prodname_pro %} or {% data variables.product.prodname_team %} plans, deployment branches and tags are also available for private repositories.

{% endif %}

### Allow administrators to bypass configured protection rules

By default, administrators can bypass the protection rules and force deployments to specific environments. For more information, see [AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments#bypassing-environment-protection-rules).

Alternatively, you can configure environments to disallow bypassing the protection rules for all deployments to the environment.

{% ifversion fpt %}

> [!NOTE]
> Allowing administrators to bypass protection rules is only available for public repositories for users on {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, and {% data variables.product.prodname_team %} plans.

{% endif %}

### Custom deployment protection rules

{% data reusables.actions.custom-deployment-protection-rules-beta-note %}

{% data reusables.actions.about-custom-deployment-protection-rules %} For more information, see [AUTOTITLE](/actions/deployment/protecting-deployments/creating-custom-deployment-protection-rules).

Once custom deployment protection rules have been created and installed on a repository, you can enable the custom deployment protection rule for any environment in the repository. For more information about configuring and enabling custom deployment protection rules, see [AUTOTITLE](/actions/deployment/protecting-deployments/configuring-custom-deployment-protection-rules).

{% ifversion fpt %}

> [!NOTE]
> Custom deployment protection rules are only available for public repositories for users on {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, and {% data variables.product.prodname_team %} plans.

{% endif %}

## Environment secrets

Secrets stored in an environment are only available to workflow jobs that reference the environment. If the environment requires approval, a job cannot access environment secrets until one of the required reviewers approves it. For more information about secrets, see [AUTOTITLE](/actions/security-for-github-actions/security-guides/about-secrets).

{% ifversion fpt %}
> [!NOTE]
> * Workflows that run on self-hosted runners are not run in an isolated container, even if they use environments. Environment secrets should be treated with the same level of security as repository and organization secrets. For more information, see [AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners).
> * If you are using {% data variables.product.prodname_free_user %}, environment secrets are only available in public repositories. For access to environment secrets in private or internal repositories, you must use {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, or {% data variables.product.prodname_enterprise %}. For more information on switching your plan, see [AUTOTITLE](/billing/managing-the-plan-for-your-github-account/upgrading-your-accounts-plan).

{% else %}

> [!NOTE]
> Workflows that run on self-hosted runners are not run in an isolated container, even if they use environments. Environment secrets should be treated with the same level of security as repository and organization secrets. For more information, see [AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#hardening-for-self-hosted-runners).

{% endif %}

## Environment variables

Variables stored in an environment are only available to workflow jobs that reference the environment. These variables are only accessible using the [`vars`](/actions/learn-github-actions/contexts#vars-context) context. For more information, see [AUTOTITLE](/actions/learn-github-actions/variables).

{% ifversion fpt %}

> [!NOTE]
> Environment variables are available for all public repositories. For users on {% data variables.product.prodname_pro %} or {% data variables.product.prodname_team %} plans, environment variables are also available for private repositories.

{% endif %}
