---
title: Environment variables
intro: '{% data variables.product.prodname_dotcom %} sets default environment variables for each {% data variables.product.prodname_actions %} workflow run. You can also set custom environment variables in your workflow file.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/automating-your-workflow-with-github-actions/using-environment-variables
  - /actions/configuring-and-managing-workflows/using-environment-variables
  - /actions/reference/environment-variables
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

## About environment variables

{% data variables.product.prodname_dotcom %} sets default environment variables that are available to every step in a workflow run. Environment variables are case-sensitive. Commands run in actions or steps can create, read, and modify environment variables.

To set custom environment variables, you need to specify the variables in the workflow file. You can define environment variables for a step, job, or entire workflow using the [`jobs.<job_id>.steps[*].env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv), [`jobs.<job_id>.env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idenv), and [`env`](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#env) keywords. For more information, see "[Workflow syntax for {% data variables.product.prodname_dotcom %}](/articles/workflow-syntax-for-github-actions/#jobsjob_idstepsenv)."

{% raw %}
```yaml
jobs:
  weekday_job:
    runs-on: ubuntu-latest
    env:
      DAY_OF_WEEK: Mon
    steps:
      - name: "Hello world when it's Monday"
        if: ${{ env.DAY_OF_WEEK == 'Mon' }}
        run: echo "Hello $FIRST_NAME $middle_name $Last_Name, today is Monday!"
        env:
          FIRST_NAME: Mona
          middle_name: The
          Last_Name: Octocat
```
{% endraw %}

To use the value of an environment variable in a workflow file, you should use the [`env` context](/actions/reference/context-and-expression-syntax-for-github-actions#env-context). If you want to use the value of an environment variable inside a runner, you can use the runner operating system's normal method for reading environment variables.

If you use the workflow file's `run` key to read environment variables from within the runner operating system (as shown in the example above), the variable is substituted in the runner operating system after the job is sent to the runner. For other parts of a workflow file, you must use the `env` context to read environment variables; this is because workflow keys (such as `if`) require the variable to be substituted during workflow processing before it is sent to the runner.

You can also use the `GITHUB_ENV` environment file to set an environment variable that the following steps in a job can use. The environment file can be used directly by an action or as a shell command in a workflow file using the `run` keyword. For more information, see "[Workflow commands for {% data variables.product.prodname_actions %}](/actions/reference/workflow-commands-for-github-actions/#setting-an-environment-variable)."

## Default environment variables

We strongly recommend that actions use environment variables to access the filesystem rather than using hardcoded file paths. {% data variables.product.prodname_dotcom %} sets environment variables for actions to use in all runner environments.

| Environment variable | Description |
| ---------------------|------------ |
| `CI` | Always set to `true`. |
| `GITHUB_WORKFLOW` | The name of the workflow. |
| `GITHUB_RUN_ID` | {% data reusables.github-actions.run_id_description %} |
| `GITHUB_RUN_NUMBER` | {% data reusables.github-actions.run_number_description %} |
| `GITHUB_JOB` | The [job_id](/actions/reference/workflow-syntax-for-github-actions#jobsjob_id) of the current job. |
| `GITHUB_ACTION` | The unique identifier (`id`) of the action. |
| `GITHUB_ACTION_PATH` | The path where your action is located. You can use this path to access files located in the same repository as your action. This variable is only supported in composite actions. |
| `GITHUB_ACTIONS` | Always set to `true` when {% data variables.product.prodname_actions %} is running the workflow. You can use this variable to differentiate when tests are being run locally or by {% data variables.product.prodname_actions %}.
| `GITHUB_ACTOR` | The name of the person or app that initiated the workflow. For example, `octocat`. |
| `GITHUB_REPOSITORY` | The owner and repository name. For example, `octocat/Hello-World`. |
| `GITHUB_EVENT_NAME` | The name of the webhook event that triggered the workflow. |
| `GITHUB_EVENT_PATH` | The path of the file with the complete webhook event payload. For example, `/github/workflow/event.json`. |
| `GITHUB_WORKSPACE` | The {% data variables.product.prodname_dotcom %} workspace directory path, initially empty. For example, `/home/runner/work/my-repo-name/my-repo-name`. The [actions/checkout](https://github.com/actions/checkout) action will check out files, by default a copy of your repository, within this directory. |
| `GITHUB_SHA` | The commit SHA that triggered the workflow. For example, `ffac537e6cbbf934b08745a378932722df287a53`. |
| `GITHUB_REF` | The branch or tag ref that triggered the workflow. For example, `refs/heads/feature-branch-1`. If neither a branch or tag is available for the event type, the variable will not exist. |
{%- ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5338 %}
| `GITHUB_REF_NAME` | {% data reusables.actions.ref_name-description %} |
| `GITHUB_REF_PROTECTED` | {% data reusables.actions.ref_protected-description %} |
| `GITHUB_REF_TYPE` | {% data reusables.actions.ref_type-description %} |
{%- endif %}
| `GITHUB_HEAD_REF` | Only set for pull request events. The name of the head branch.
| `GITHUB_BASE_REF` | Only set for pull request events. The name of the base branch.
| `GITHUB_SERVER_URL`| Returns the URL of the {% data variables.product.product_name %} server. For example: `https://{% data variables.product.product_url %}`.
| `GITHUB_API_URL` | Returns the API URL. For example: `{% data variables.product.api_url_code %}`.
| `GITHUB_GRAPHQL_URL` | Returns the GraphQL API URL. For example: `{% data variables.product.graphql_url_code %}`.
| `RUNNER_NAME` | {% data reusables.actions.runner-name-description %}
| `RUNNER_OS` | {% data reusables.actions.runner-os-description %}{% if actions-runner-arch-envvars %}
| `RUNNER_ARCH` | {% data reusables.actions.runner-arch-description %}{% endif %}
| `RUNNER_TEMP` | {% data reusables.actions.runner-temp-directory-description %}
{% ifversion not ghae %}| `RUNNER_TOOL_CACHE` | {% data reusables.actions.runner-tool-cache-description %}{% endif %}

{% tip %}

**Note:** If you need to use a workflow run's URL from within a job, you can combine these environment variables: `$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID`

{% endtip %}

### Determining when to use default environment variables or contexts

{% data reusables.github-actions.using-context-or-environment-variables %}

## Naming conventions for environment variables

When you set a custom environment variable, you cannot use any of the default environment variable names listed above with the prefix `GITHUB_`. If you attempt to override the value of one of these default environment variables, the assignment is ignored.

Any new environment variables you set that point to a location on the filesystem should have a `_PATH` suffix. The `HOME` and `GITHUB_WORKSPACE` default variables are exceptions to this convention because the words "home" and "workspace" already imply a location.

---
title: About protected branches
intro: 'You can protect important branches by setting branch protection rules, which define whether collaborators can delete or force push to the branch and set requirements for any pushes to the branch, such as passing status checks or a linear commit history.'
product: '{% data reusables.gated-features.protected-branches %}'
redirect_from:
  - /articles/about-protected-branches
  - /enterprise/admin/developer-workflow/about-protected-branches-and-required-status-checks
  - /articles/about-branch-restrictions
  - /github/administering-a-repository/about-branch-restrictions
  - /articles/about-required-status-checks
  - /github/administering-a-repository/about-required-status-checks
  - /articles/types-of-required-status-checks
  - /github/administering-a-repository/types-of-required-status-checks
  - /articles/about-required-commit-signing
  - /github/administering-a-repository/about-required-commit-signing
  - /articles/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-required-reviews-for-pull-requests
  - /github/administering-a-repository/about-protected-branches
  - /github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
---
## About branch protection rules

You can enforce certain workflows or requirements before a collaborator can push changes to a branch in your repository, including merging a pull request into the branch, by creating a branch protection rule.

By default, each branch protection rule disables force pushes to the matching branches and prevents the matching branches from being deleted. You can optionally disable these restrictions and enable additional branch protection settings.

By default, the restrictions of a branch protection rule don't apply to people with admin permissions to the repository. You can optionally choose to include administrators, too.

{% data reusables.repositories.branch-rules-example %} For more information about branch name patterns, see "[Managing a branch protection rule](/github/administering-a-repository/managing-a-branch-protection-rule)."

{% data reusables.pull_requests.you-can-auto-merge %}

## About branch protection settings

For each branch protection rule, you can choose to enable or disable the following settings.
- [Require pull request reviews before merging](#require-pull-request-reviews-before-merging)
- [Require status checks before merging](#require-status-checks-before-merging)
{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
- [Require conversation resolution before merging](#require-conversation-resolution-before-merging){% endif %}
- [Require signed commits](#require-signed-commits)
- [Require linear history](#require-linear-history)
{% ifversion fpt or ghec %}
- [Require merge queue](#require-merge-queue)
{% endif %}
- [Include administrators](#include-administrators)
- [Restrict who can push to matching branches](#restrict-who-can-push-to-matching-branches)
- [Allow force pushes](#allow-force-pushes)
- [Allow deletions](#allow-deletions)

For more information on how to set up branch protection, see "[Managing a branch protection rule](/github/administering-a-repository/managing-a-branch-protection-rule)."

### Require pull request reviews before merging

{% data reusables.pull_requests.required-reviews-for-prs-summary %}

If you enable required reviews, collaborators can only push changes to a protected branch via a pull request that is approved by the required number of reviewers with write permissions.

If a person with admin permissions chooses the **Request changes** option in a review, then that person must approve the pull request before the pull request can be merged. If a reviewer who requests changes on a pull request isn't available, anyone with write permissions for the repository can dismiss the blocking review.

{% data reusables.repositories.review-policy-overlapping-commits %}

If a collaborator attempts to merge a pull request with pending or rejected reviews into the protected branch, the collaborator will receive an error message.

```shell
remote: error: GH006: Protected branch update failed for refs/heads/main.
remote: error: Changes have been requested.
```

Optionally, you can choose to dismiss stale pull request approvals when commits are pushed. If anyone pushes a commit that modifies code to an approved pull request, the approval will be dismissed, and the pull request cannot be merged. This doesn't apply if the collaborator pushes commits that don't modify code, like merging the base branch into the pull request's branch. For information about the base branch, see "[About pull requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."

Optionally, you can restrict the ability to dismiss pull request reviews to specific people or teams. For more information, see "[Dismissing a pull request review](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/dismissing-a-pull-request-review)."

Optionally, you can choose to require reviews from code owners. If you do, any pull request that affects code with a code owner must be approved by that code owner before the pull request can be merged into the protected branch.

### Require status checks before merging

Required status checks ensure that all required CI tests are passing before collaborators can make changes to a protected branch. Required status checks can be checks or statuses. For more information, see "[About status checks](/github/collaborating-with-issues-and-pull-requests/about-status-checks)."

Before you can enable required status checks, you must configure the repository to use the status API. For more information, see "[Repositories](/rest/reference/repos#statuses)" in the REST documentation.

After enabling required status checks, all required status checks must pass before collaborators can merge changes into the protected branch. After all required status checks pass, any commits must either be pushed to another branch and then merged or pushed directly to the protected branch.

Any person or integration with write permissions to a repository can set the state of any status check in the repository{% ifversion fpt or ghes > 3.3 or ghae-issue-5379 or ghec %}, but in some cases you may only want to accept a status check from a specific {% data variables.product.prodname_github_app %}. When you add a required status check, you can select an app that has recently set this check as the expected source of status updates.{% endif %} If the status is set by any other person or integration, merging won't be allowed. If you select "any source", you can still manually verify the author of each status, listed in the merge box.

You can set up required status checks to either be "loose" or "strict." The type of required status check you choose determines whether your branch is required to be up to date with the base branch before merging.

| Type of required status check | Setting | Merge requirements | Considerations |
| --- | --- | --- | --- |
| **Strict** | The **Require branches to be up to date before merging** checkbox is checked. | The branch **must** be up to date with the base branch before merging. | This is the default behavior for required status checks. More builds may be required, as you'll need to bring the head branch up to date after other collaborators merge pull requests to the protected base branch.|
| **Loose** | The **Require branches to be up to date before merging** checkbox is **not** checked. | The branch **does not** have to be up to date with the base branch before merging. | You'll have fewer required builds, as you won't need to bring the head branch up to date after other collaborators merge pull requests. Status checks may fail after you merge your branch if there are incompatible changes with the base branch. |
| **Disabled** | The **Require status checks to pass before merging** checkbox is **not** checked. | The branch has no merge restrictions. | If required status checks aren't enabled, collaborators can merge the branch at any time, regardless of whether it is up to date with the base branch. This increases the possibility of incompatible changes.

For troubleshooting information, see "[Troubleshooting required status checks](/github/administering-a-repository/troubleshooting-required-status-checks)."

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
### Require conversation resolution before merging

Requires all comments on the pull request to be resolved before it can be merged to a protected branch. This ensures that all comments are addressed or acknowledged before merge.
{% endif %}

### Require signed commits

When you enable required commit signing on a branch, contributors {% ifversion fpt or ghec %}and bots{% endif %} can only push commits that have been signed and verified to the branch. For more information, see "[About commit signature verification](/articles/about-commit-signature-verification)."

{% note %}

{% ifversion fpt or ghec %}
**Notes:** 

* If you have enabled vigilant mode, which indicates that your commits will always be signed, any commits that {% data variables.product.prodname_dotcom %} identifies as "Partially verified" are permitted on branches that require signed commits. For more information about vigilant mode, see "[Displaying verification statuses for all of your commits](/github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits)."
* If a collaborator pushes an unsigned commit to a branch that requires commit signatures, the collaborator will need to rebase the commit to include a verified signature, then force push the rewritten commit to the branch.

{% else %}
**Note:** If a collaborator pushes an unsigned commit to a branch that requires commit signatures, the collaborator will need to rebase the commit to include a verified signature, then force push the rewritten commit to the branch.
{% endif %}

{% endnote %}

You can always push local commits to the branch if the commits are signed and verified. {% ifversion fpt or ghec %}You can also merge signed and verified commits into the branch using a pull request on {% data variables.product.product_name %}. However, you cannot squash and merge a pull request into the branch on {% data variables.product.product_name %} unless you are the author of the pull request.{% else %} However, you cannot merge pull requests into the branch on {% data variables.product.product_name %}.{% endif %} You can {% ifversion fpt or ghec %}squash and {% endif %}merge pull requests locally. For more information, see "[Checking out pull requests locally](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/checking-out-pull-requests-locally)."

{% ifversion fpt or ghec %} For more information about merge methods, see "[About merge methods on {% data variables.product.prodname_dotcom %}](/github/administering-a-repository/about-merge-methods-on-github)."{% endif %}

### Require linear history

Enforcing a linear commit history prevents collaborators from pushing merge commits to the branch. This means that any pull requests merged into the protected branch must use a squash merge or a rebase merge. A strictly linear commit history can help teams reverse changes more easily. For more information about merge methods, see "[About pull request merges](/github/collaborating-with-issues-and-pull-requests/about-pull-request-merges)."

Before you can require a linear commit history, your repository must allow squash merging or rebase merging. For more information, see "[Configuring pull request merges](/github/administering-a-repository/configuring-pull-request-merges)."

{% ifversion fpt or ghec %}
### Require merge queue

{% data reusables.pull_requests.merge-queue-beta %}
{% data reusables.pull_requests.merge-queue-overview %}
 
{% data reusables.pull_requests.merge-queue-merging-method %}
{% data reusables.pull_requests.merge-queue-references %}

{% endif %}
### Include administrators

By default, protected branch rules do not apply to people with admin permissions to a repository. You can enable this setting to include administrators in your protected branch rules.

### Restrict who can push to matching branches

{% ifversion fpt or ghec %}
You can enable branch restrictions if your repository is owned by an organization using {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

When you enable branch restrictions, only users, teams, or apps that have been given permission can push to the protected branch. You can view and edit the users, teams, or apps with push access to a protected branch in the protected branch's settings. When status checks are required, the people, teams, and apps that have permission to push to a protected branch will still be prevented from merging if the required checks fail. People, teams, and apps that have permission to push to a protected branch will still need to create a pull request when pull requests are required.

You can only give push access to a protected branch to users, teams, or installed {% data variables.product.prodname_github_apps %} with write access to a repository. People and apps with admin permissions to a repository are always able to push to a protected branch.

### Allow force pushes

{% ifversion fpt or ghec %}
By default, {% data variables.product.product_name %} blocks force pushes on all protected branches. When you enable force pushes to a protected branch, you can choose one of two groups who can force push:

1. Allow everyone with at least write permissions to the repository to force push to the branch, including those with admin permissions.
1. Allow only specific people or teams to force push to the branch.

If someone force pushes to a branch, the force push may overwrite commits that other collaborators based their work on. People may have merge conflicts or corrupted pull requests.

{% else %}
By default, {% data variables.product.product_name %} blocks force pushes on all protected branches. When you enable force pushes to a protected branch, anyone with at least write permissions to the repository can force push to the branch, including those with admin permissions. If someone force pushes to a branch, the force push may overwrite commits that other collaborators based their work on. People may have merge conflicts or corrupted pull requests.
{% endif %}

Enabling force pushes will not override any other branch protection rules. For example, if a branch requires a linear commit history, you cannot force push merge commits to that branch.

{% ifversion ghes or ghae %}You cannot enable force pushes for a protected branch if a site administrator has blocked force pushes to all branches in your repository. For more information, see "[Blocking force pushes to repositories owned by a user account or organization](/enterprise/{{ currentVersion }}/admin/developer-workflow/blocking-force-pushes-to-repositories-owned-by-a-user-account-or-organization)."

If a site administrator has blocked force pushes to the default branch only, you can still enable force pushes for any other protected branch.{% endif %}

### Allow deletions

By default, you cannot delete a protected branch. When you enable deletion of a protected branch, anyone with at least write permissions to the repository can delete the branch.
