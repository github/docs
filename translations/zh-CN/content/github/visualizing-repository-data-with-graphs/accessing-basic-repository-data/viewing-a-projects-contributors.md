---
title: 查看项目的贡献者
intro: '您可以查看向仓库{% if currentVersion == "free-pro-team@latest" %}及其依赖项{% endif %}贡献提交的人员。'
redirect_from:
  - /articles/i-don-t-see-myself-in-the-contributions-graph/
  - /articles/viewing-contribution-activity-in-a-repository/
  - /articles/viewing-a-projects-contributors
  - /github/visualizing-repository-data-with-graphs/viewing-a-projects-contributors
product: '{% data reusables.gated-features.repository-insights %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---
### 关于贡献者

您可以在贡献者图中查看对仓库贡献最大的 100 个贡献者{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}，包括提交合作作者{% endif %}。 合并提交和空提交不会计为此图的贡献。

{% if currentVersion == "free-pro-team@latest" %}
您还可以看到为项目的 Python 依赖项做出贡献的人员列表。 要访问此社区贡献者列表，请访问 `https://github.com/REPO-OWNER/REPO-NAME/community_contributors`。
{% endif %}

### 访问贡献者图

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
3. 在左侧边栏中，单击 **Contributors（贡献者）**。 ![贡献者选项卡](/assets/images/help/graphs/contributors_tab.png)
4. （可选）要查看特定时间段内的贡献者，单击然后拖动，直到选择时间段。 ![贡献者图中选择的时间范围](/assets/images/help/graphs/repo_contributors_click_drag_graph.png)

### 贡献者疑难解答

如果您没有在仓库的贡献者图中显示，可能是因为：
- 您并非前 100 名贡献者之一。
- 您的提交尚未合并到默认分支。
- 您用于创作提交的电子邮件地址未连接到到您的 {% data variables.product.product_name %} 帐户。

{% tip %}

**提示：**要列出仓库中的所有提交贡献者，请参阅“[仓库](/rest/reference/repos#list-contributors)”。

{% endtip %}

如果仓库中的所有提交均位于非默认分支中，则您不在贡献者图中。 例如，除非 `gh-pages` 是仓库的默认分支，否则 `gh-pages` 分支上的提交不包含在图中。 要将您的提交合并到默认分支，您可以创建拉取请求。 更多信息请参阅“[关于拉取请求](/articles/about-pull-requests)”。

如果您用于创作提交的电子邮件地址未连接到您的 {% data variables.product.product_name %} 帐户，则提交不会链接到您的帐户，并且您不会在贡献者图中显示。 更多信息请参阅“[设置提交电子邮件地址](/articles/setting-your-commit-email-address){% if currentVersion != "github-ae@latest" %}”和“[添加电子邮件地址到 {% data variables.product.product_name %} 帐户](/articles/adding-an-email-address-to-your-github-account){% endif %}”。
