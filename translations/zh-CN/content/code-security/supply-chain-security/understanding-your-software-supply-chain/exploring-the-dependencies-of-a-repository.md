---
title: 探索仓库的依赖项
intro: '您可以使用依赖关系图查看项目所依赖的包{% ifversion fpt or ghec %} 以及依赖它的仓库{% endif %}。 此外，您还可以看到在其依赖项中检测到的任何漏洞。'
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
  - /github/visualizing-repository-data-with-graphs/listing-the-packages-that-a-repository-depends-on
  - /articles/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/listing-the-projects-that-depend-on-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-and-dependents-of-a-repository
  - /github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository
  - /code-security/supply-chain-security/exploring-the-dependencies-of-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: how_to
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: 探索依赖项
---

<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->

## 查看依赖关系图

依赖项图显示仓库的依赖项{% ifversion fpt or ghec %}和依赖关系{% endif %}。 有关依赖项检测以及支持哪些生态系统的信息，请参阅“[关于依赖关系图”](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}{% ifversion fpt or ghec %}
4. （可选）在 "Dependency graph"（依赖关系图）下，单击 **Dependents（依赖项）**。 ![Dependents tab on the dependency graph page](/assets/images/help/graphs/dependency-graph-dependents-tab.png){% endif %}

{% ifversion ghes or ghae-issue-4864 %}
企业所有者可以在企业级别配置依赖关系图。 For more information, see "[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)."
{% endif %}

### 依赖项视图

{% ifversion fpt or ghec %}
依赖项按生态系统分组。 您可以展开依赖项以查看其依赖项。  私有仓库、私有包或无法识别文件上的依赖项以纯文本显示。 If the package manager for the dependency is in a public repository, {% data variables.product.product_name %} will display a link to that repository.

如果在仓库中检测到漏洞，这些漏洞将显示在视图顶部，供有权访问 {% data variables.product.prodname_dependabot_alerts %} 的用户查看。

![依赖关系图](/assets/images/help/graphs/dependencies_graph.png)

{% endif %}

{% ifversion ghes or ghae %}
在仓库的清单或锁定文件中指定的任何直接或间接依赖项按生态系统分组列出。 如果在仓库中检测到漏洞，这些漏洞将显示在视图顶部，供有权访问 {% data variables.product.prodname_dependabot_alerts %} 的用户查看。

![依赖关系图](/assets/images/help/graphs/dependencies_graph_server.png)

{% note %}

**注：**{% data variables.product.product_name %} 不会填充 **Dependents（依赖项）**视图。

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}
### 依赖项视图

对于公共仓库，依赖项视图显示其他仓库如何使用该仓库。 要在包管理器中仅显示包含存储库的仓库，请单击依赖的仓库列表正上方的**编号包**。 依赖项计数是近似值，不一定与列出的依赖项匹配。

![从属者图](/assets/images/help/graphs/dependents_graph.png)

## 为私有仓库启用或禁用依赖关系图

仓库管理员可以启用或禁用私有仓库的依赖关系图。

您也可以为用户帐户或组织拥有的所有仓库启用或禁用依赖项图。 更多信息请参阅“[管理用户帐户的安全和分析设置](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)”或“[管理组织的安全和分析设置](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)”。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. 阅读有关授予 {% data variables.product.product_name %} 只读访问仓库数据的消息，以启用依赖关系图，然后在“Dependency Graph（依赖关系图）”旁边单击 **Enable（启用）**。 ![依赖关系图的"启用"按钮](/assets/images/help/repository/dependency-graph-enable-button.png)

您可以随时单击 Security & analysis（安全性和分析）选项卡上“Dependency Graph（依赖关系图）”旁边的 **Disable（禁用）**来禁用依赖关系图。

## 更改“Used by（使用者）”包

You may notice some repositories have a "Used by" section in the sidebar of the **Code** tab. Your repository will have a "Used by" section if:
  * The dependency graph is enabled for the repository (see the above section for more details).
  * Your repository contains a package that is published on a [supported package ecosystem](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).
  * Within the ecosystem, your package has a link to a _public_ repository where the source is stored.

“Used by（使用者）”部分显示已发现对包的公开引用数量，并显示某些依赖项所有者的头像。

!["使用者"边栏部分](/assets/images/help/repository/used-by-section.png)

单击此部分的任何项都会转到依赖项图的 **Dependents（依赖项）**选项卡。

“Used by（使用者）”部分表示仓库中的单个包。 如果您对包含多个包的仓库拥有管理员权限，您可以选择“Used by（使用者）”部分表示哪个包。

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. 在“Code security and analysis（代码安全和分析）”下，单击“Used by counter（使用者计数）”部分中的下拉菜单并选择一个包。 ![选择"使用者"包](/assets/images/help/repository/choose-used-by-package.png)

{% endif %}

## 依赖项图疑难排解

如果依赖关系图为空，则包含依赖项的文件可能有问题。 检查该文件以确保其格式对文件类型是正确的。

{% ifversion fpt or ghec %}
如果文件格式正确，请检查文件大小。 除非您是 {% data variables.product.prodname_enterprise %} 用户，否则依赖关系图将忽略超过 1.5 Mb 的单个清单和锁定文件。 默认情况下，每个仓库最多处理 20 个清单或锁定文件，因此您可以在仓库子目录中将依赖项拆分为较小的文件。{% endif %}

如果清单或锁定文件未获处理，其依赖项将从依赖关系图中省略，而不能接受有漏洞依赖项的检查。

## 延伸阅读

- “[关于依赖关系图](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)”
- "[Viewing {% data variables.product.prodname_dependabot_alerts %} for vulnerable dependencies](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"{% ifversion fpt or ghec %}
- "[查看用于组织的洞见](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"
- "[了解 {% data variables.product.prodname_dotcom %} 如何使用和保护数据](/get-started/privacy-on-github)"
{% endif %}
