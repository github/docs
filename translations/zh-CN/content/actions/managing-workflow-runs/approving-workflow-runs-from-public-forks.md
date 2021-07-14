---
title: 批准复刻中的工作流程运行
intro: 当贡献者第一次向公共仓库提交拉取请求时，拥有写入权限的维护者必须批准任何工作流程运行。
product: '{% data reusables.gated-features.actions %}'
versions:
  free-pro-team: '*'
---

公共仓库的复刻可以提交拉取请求以提议对仓库的 {% data variables.product.prodname_actions %} 工作流程的更改。 虽然来自复刻的工作流程无法访问敏感数据（如密钥），但如果出于滥用目的进行修改，可能会让维护者感到烦恼。 为了帮助防止这种情况，从首次贡献者收到拉取请求的工作流程不会自动运行，而必须先获得批准。

能够写入仓库的维护者可按照以下步骤来审查和运行来自首次贡献者的拉取请求。 在贡献者将至少一个拉取请求合并到项目仓库后，该贡献者复刻的任何未来拉取请求都将自动运行工作流程。

{% data reusables.repositories.sidebar-pr %}
{% data reusables.repositories.choose-pr-review %}
{% data reusables.repositories.changed-files %}
1. 检查拉取请求中的拟议更改，确保您在拉取请求分支上自由运行您的工作流程。 您应该特别注意 `.github/workflows/` 目录中影响工作流程文件的任何拟议更改。
1. 如果您能自由在拉取请求分支上运行工作流程，请返回 {% octicon "comment-discussion" aria-label="The discussion icon" %} **Conversation（转换）**选项卡，在“Workflow(s) awaiting approval（等待批准的工作流程）”下单击 **Approve and run（批准并运行）**。

   ![批准并运行工作流程](/assets/images/help/pull_requests/actions-approve-and-run-workflows-from-fork.png)
