##### 复刻的仓库的拉取请求事件

{% note %}

**注：**如果从复刻仓库打开拉取请求，工作流程不会在私有基础仓库上运行。

{% endnote %}

当创建一个从复刻仓库到基础仓库的拉取请求时，{% data variables.product.prodname_dotcom %} 发送 `pull_request` 事件到基础仓库，而在复刻仓库上不发生拉取请求事件。

默认情况下，工作流程不在复刻仓库上运行。 您必须在复刻仓库的 **Actions（操作）**选项卡中启用 GitHub Actions。

{% if currentVersion == "free-pro-team@latest"%}
当贡献者第一次向公共仓库提交拉取请求时，拥有写入权限的维护者必须批准拉取请求上运行的工作流程。 更多信息请参阅“[批准公共复刻中的工作流程运行](/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)”。
{% endif %}

{% data reusables.actions.forked-secrets %} 对复刻仓库中 `GITHUB_TOKEN` 的权限是只读的。 更多信息请参阅“[使用 GITHUB_TOKEN 验证身份](/actions/configuring-and-managing-workflows/authenticating-with-the-github_token)”。

{% note %}

**注意：**由 {% data variables.product.prodname_dependabot %} 拉取请求触发的工作流程被视为来自复刻的仓库，也受到这些限制。

{% endnote %}
