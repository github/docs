Maintainers with write access to a repository can use the following procedure to review and run workflows on pull requests from contributors that require approval.

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. Inspect the proposed changes in the pull request and ensure that you are comfortable running your workflows on the pull request branch. You should be especially alert to any proposed changes in the `.github/workflows/` directory that affect workflow files.
1. If you are comfortable with running workflows on the pull request branch, return to the {% octicon "comment-discussion" aria-hidden="true" %} **Conversation** tab, and under "Workflow(s) awaiting approval", click **Approve and run**.
