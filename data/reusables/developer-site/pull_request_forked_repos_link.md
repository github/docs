#### Pull request events for forked repositories

{% note %}

**Note:** Workflows do not run on private base repositories when you open a pull request from a forked repository.

{% endnote %}

When you create a pull request from a forked repository to the base repository, {% data variables.product.prodname_dotcom %} sends the `pull_request` event to the base repository and no pull request events occur on the forked repository.

Workflows don't run on forked repositories by default. You must enable GitHub Actions in the **Actions** tab of the forked repository.

{% if currentVersion == "free-pro-team@latest"%}
When a first-time contributor submits a pull request to a public repository, a maintainer with write access must approve running workflows on the pull request. For more information, see "[Approving workflow runs from public forks](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)."
{% endif %}

{% data reusables.actions.forked-secrets %} The permissions for the `GITHUB_TOKEN` in forked repositories is read-only. For more information, see "[Authenticating with the GITHUB_TOKEN](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)."

{% note %}

**Note:** Workflows triggered by {% data variables.product.prodname_dependabot %} pull requests are treated as though they are from a forked repository, and are also subject to these restrictions.

{% endnote %}
