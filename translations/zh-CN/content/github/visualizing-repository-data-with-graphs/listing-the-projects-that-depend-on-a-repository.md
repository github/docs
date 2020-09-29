---
title: 列出依赖仓库的项目
intro: 您可以在依赖项图中查看依赖仓库的包和项目。
redirect_from:
  - /articles/listing-the-projects-that-depend-on-a-repository
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于依赖项图
依赖项图包含包和应用程序的数据。 包是在包管理器中包含存储库的仓库，而应用程序是依赖所选仓库的仓库。 依赖项图中的应用程序列表按依赖仓库的最近项目排序。

依赖项图包含以下语言的数据：

- RubyGems
- NPM
- PyPI
- Maven（仅 pom.xml）
- Nuget

{% data reusables.repositories.enable-security-alerts %}

{% note %}

**注：**依赖项计数是近似值，可能与列出的依赖项不匹配。

{% endnote %}

![从属者图](/assets/images/help/graphs/dependents_graph.png)

### 访问依赖项图

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
4. 在 "Dependency graph"（依赖项图）下，单击 **Dependents（依赖项）**。 ![依赖项图中的依赖项选项卡](/assets/images/help/graphs/dependency-graph-dependents-tab.png)

### 延伸阅读

- "[列出仓库所依赖的包](/articles/listing-the-packages-that-a-repository-depends-on)"{% if currentVersion == "free-pro-team@latest" %}
- "[查看用于组织的洞见](/articles/viewing-insights-for-your-organization)"{% endif %}
