---
title: 探索仓库的依赖项
intro: '使用依赖项图，您可以看到项目所依赖的包{% if currentVersion == "free-pro-team@latest" %}以及依赖它的仓库{% endif %}。 此外，您还可以看到在其依赖项中检测到的任何漏洞。'
versions:
  enterprise-server: <=2.22
topics:
  - Repositories
redirect_from:
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
---

<!--See /content/code-security/supply-chain-security/exploring-the-dependencies-of-a-repository for the latest version of this article -->

### 查看依赖关系图

{% data reusables.repositories.enable-security-alerts %}

依赖关系图显示仓库的依赖项。 有关依赖项检测以及支持哪些生态系统的信息，请参阅“[关于依赖关系图”](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}

#### 依赖项视图

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}
在仓库的清单或锁定文件中指定的任何直接或间接依赖项按生态系统分组列出。 如果在仓库中检测到漏洞，这些漏洞将显示在视图顶部，供有权访问 {% data variables.product.prodname_dependabot_alerts %} 的用户查看。

![依赖关系图](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**注：**{% data variables.product.prodname_ghe_server %} 不会填充 **Dependents（依赖项）**视图。

{% endnote %}

{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
在仓库的清单或锁定文件中指定的任何直接或间接依赖项按生态系统分组列出。 如果在仓库中检测到漏洞，这些漏洞将显示在视图顶部，供有权访问安全警报的用户查看。

![依赖关系图](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**注：**{% data variables.product.prodname_ghe_server %} 不会填充 **Dependents（依赖项）**视图。

{% endnote %}

{% endif %}

### 依赖项图疑难排解

如果依赖关系图为空，则包含依赖项的文件可能有问题。 检查该文件以确保其格式对文件类型是正确的。

如果清单或锁定文件未获处理，其依赖项将从依赖关系图中省略，而不能接受有漏洞依赖项的检查。
