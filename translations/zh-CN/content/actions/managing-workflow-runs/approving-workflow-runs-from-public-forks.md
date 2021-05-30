---
title: 批准复刻中的工作流程运行
intro: 当贡献者第一次向公共仓库提交拉取请求时，拥有写入权限的维护者必须批准任何工作流程运行。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

公共仓库的复刻可以提交拉取请求以提议对仓库的 {% data variables.product.prodname_actions %} 工作流程的更改。 虽然来自复刻的工作流程无法访问敏感数据（如密钥），但如果出于滥用目的进行修改，可能会让维护者感到烦恼。 为了帮助防止这种情况，从首次贡献者收到拉取请求的工作流程不会自动运行，而必须先获得批准。

Maintainers with write access to the repository can use the following procedure to review and run workflows on pull requests from first-time contributors. After a contributor has at least one pull request merged into a project's repository, any future pull requests from that contributor's fork will automatically run workflows.

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. Inspect the proposed changes in the pull request and ensure that you are comfortable running your workflows on the pull request branch. You should be especially alert to any proposed changes in the `.github/workflows/` directory that affect workflow files.
1. If you are comfortable with running workflows on the pull request branch, return to the {% octicon "comment-discussion" aria-label="The discussion icon" %} **Conversation** tab, and under "Workflow(s) awaiting approval", click **Approve and run**.

   ![Approve and run workflows](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
