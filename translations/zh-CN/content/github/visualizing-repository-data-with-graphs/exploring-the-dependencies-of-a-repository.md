---
title: Exploring the dependencies of a repository
intro: 'Using the dependency graph, you can see the packages your project depends on{% if currentVersion == "free-pro-team@latest" %} and the repositories that depend on it{% endif %}. 此外，您还可以看到在其依赖项中检测到的任何漏洞。'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 查看依赖关系图

{% data reusables.repositories.enable-security-alerts %}

The dependency graph shows the dependencies{% if currentVersion == "free-pro-team@latest" %} and dependents{% endif %} of your repository. For information about the detection of dependencies and which ecosystems are supported, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}{% if currentVersion == "free-pro-team@latest" %}
4. （可选）在 "Dependency graph"（依赖关系图）下，单击 **Dependents（依赖项）**。 ![Dependents tab on the dependency graph page](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

#### 依赖项视图

{% if currentVersion == "free-pro-team@latest" %}
依赖项按生态系统分组。 您可以展开依赖项以查看其依赖项。 For dependencies on public repositories hosted on {% data variables.product.product_name %}, you can also click a dependency to view the repository. Dependencies on private repositories, private packages, or unrecognized files are shown in plain text.

If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to {% data variables.product.prodname_dependabot_alerts %}.

![依赖关系图](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_gt "enterprise-server@2.21" %}
Any direct and indirect dependencies that are specified in the repository's manifest or lock files are listed, grouped by ecosystem. If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to {% data variables.product.prodname_dependabot_short %} alerts.

{% note %}

**Note:** {% data variables.product.prodname_ghe_server %} does not populate the **Dependents** view.

{% endnote %}

![依赖关系图](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Note:** {% data variables.product.prodname_ghe_server %} does not populate the **Dependents** view.

{% endnote %}

{% endif %}

{% if currentVersion != "free-pro-team@latest" and currentVersion ver_lt "enterprise-server@2.22" %}
Any direct and indirect dependencies that are specified in the repository's manifest or lock files are listed, grouped by ecosystem. If vulnerabilities have been detected in the repository, these are shown at the top of the view for users with access to security alerts.

{% note %}

**Note:** {% data variables.product.prodname_ghe_server %} does not populate the **Dependents** view.

{% endnote %}

![依赖关系图](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**Note:** {% data variables.product.prodname_ghe_server %} does not populate the **Dependents** view.

{% endnote %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
#### 依赖项视图

对于公共仓库，依赖项视图显示其他仓库如何使用该仓库。 要在包管理器中仅显示包含存储库的仓库，请单击依赖的仓库列表正上方的**编号包**。 依赖项计数是近似值，不一定与列出的依赖项匹配。

![从属者图](/assets/images/help/graphs/dependents_graph.png)

### 为私有仓库启用或禁用依赖关系图

仓库管理员可以启用或禁用私有仓库的依赖关系图。

You can also enable or disable the dependency graph for all repositories owned by your user account or organization. For more information, see "[Managing security and analysis settings for your user account](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" or "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. 阅读有关授予 {% data variables.product.product_name %} 只读访问仓库数据的消息，以启用依赖关系图，然后在“Dependency Graph（依赖关系图）”旁边单击 **Enable（启用）**。 ![依赖关系图的"启用"按钮](/assets/images/help/repository/dependency-graph-enable-button.png)

您可以随时单击 Security & analysis（安全性和分析）选项卡上“Dependency Graph（依赖关系图）”旁边的 **Disable（禁用）**来禁用依赖关系图。
{% endif %}

### 依赖关系图疑难排解

如果依赖关系图为空，则包含依赖项的文件可能有问题。 检查该文件以确保其格式对文件类型是正确的。

{% if currentVersion == "free-pro-team@latest" %}
如果文件格式正确，请检查文件大小。 除非您是 {% data variables.product.prodname_enterprise %} 用户，否则依赖关系图将忽略超过 0.5 Mb 的单个清单和锁定文件。 默认情况下，每个仓库最多处理 20 个清单或锁定文件，因此您可以在仓库子目录中将依赖项拆分为较小的文件。{% endif %}

如果清单或锁定文件未获处理，其依赖项将从依赖关系图中省略，而不能接受有漏洞依赖项的检查。

### 延伸阅读

- "[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"{% if currentVersion == "free-pro-team@latest" %}
- "[Viewing insights for your organization](/github/setting-up-and-managing-organizations-and-teams/viewing-insights-for-your-organization)"
- "[查看和更新仓库中的漏洞依赖项](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[了解 {% data variables.product.product_name %} 如何使用和保护数据](/github/understanding-how-github-uses-and-protects-your-data)"
{% endif %}
