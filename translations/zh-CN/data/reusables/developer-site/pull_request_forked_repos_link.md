#### Workflows in forked repositories

Workflows don't run in forked repositories by default. 您必须在复刻仓库的 **Actions（操作）**选项卡中启用 GitHub Actions。

{% data reusables.actions.forked-secrets %} The `GITHUB_TOKEN` has read-only permissions in forked repositories. 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”。

#### 复刻的仓库的拉取请求事件

For pull requests from a forked repository to the base repository, {% data variables.product.product_name %} sends the `pull_request`, `issue_comment`, `pull_request_review_comment`, `pull_request_review`, and `pull_request_target` events to the base repository. No pull request events occur on the forked repository.

{% ifversion fpt or ghec %}
当贡献者第一次向公共仓库提交拉取请求时，拥有写入权限的维护者可能需要批准拉取请求上运行的工作流程。 更多信息请参阅“[批准公共复刻中的工作流程运行](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)”。
{% endif %}

{% note %}

**注：**如果从复刻仓库打开拉取请求，工作流程不会在私有基础仓库上运行。

{% endnote %}

{% note %}

**注意：**由 {% data variables.product.prodname_dependabot %} 拉取请求触发的工作流程被视为来自复刻的仓库，也受到这些限制。

{% endnote %}
