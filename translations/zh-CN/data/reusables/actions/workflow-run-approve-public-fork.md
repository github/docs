任何人都可以复刻公共仓库，然后提交建议更改仓库 {% data variables.product.prodname_actions %} 工作流程的拉取请求。 虽然来自复刻的工作流程无法访问敏感数据（如密钥），但如果出于滥用目的进行修改，可能会让维护者感到烦恼。

为了帮助防止这种情况，某些外部贡献者向公共仓库提出的关于拉取请求的工作流程不会自动运行，可能需要先批准。 默认情况下，所有首次贡献者都需要批准才能运行工作流程。

{% note %}

**Note:** Workflows triggered by `pull_request_target` events are run in the context of the base branch. Since the base branch is considered trusted, workflows triggered by these events will always run, regardless of approval settings.

{% endnote %}
