#### Workflows in forked repositories

Workflows don't run in forked repositories by default. You must enable GitHub Actions in the **Actions** tab of the forked repository.

{% data reusables.actions.forked-secrets %} The `GITHUB_TOKEN` has read-only permissions in pull requests from forked repositories. For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)."

#### Pull request events for forked repositories

For pull requests from a forked repository to the base repository, {% data variables.product.product_name %} sends the `pull_request`, `issue_comment`, `pull_request_review_comment`, `pull_request_review`, and `pull_request_target` events to the base repository. No pull request events occur on the forked repository.

{% ifversion fpt or ghec %}
When a first-time contributor submits a pull request to a public repository, a maintainer with write access may need to approve running workflows on the pull request. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)."
{% endif %}

For pull requests from a forked repository to a private repository, workflows only run when they are enabled, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#enabling-workflows-for-forks-of-private-repositories)."

{% note %}

**Note:** Workflows triggered by {% data variables.product.prodname_dependabot %} pull requests are treated as though they are from a forked repository, and are also subject to these restrictions.

{% endnote %}
