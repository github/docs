---
title: 列出仓库所依赖的包
intro: 您可以在仓库图中查看项目的依赖项以及检测到的所有漏洞。
redirect_from:
  - /articles/listing-the-packages-that-a-repository-depends-on
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 关于依赖项图

依赖关系图适用于使用支持的文件格式、以支持的包生态系统定义依赖项的每个{% if currentVersion == "free-pro-team@latest" %}公共{% endif %}仓库。{% if currentVersion == "free-pro-team@latest" %} 仓库管理员也可对私有仓库设置依赖项图。{% endif %}

{% data reusables.repositories.enable-security-alerts %}

您可以在仓库的依赖项图中查看和更新有漏洞的依赖项。 依赖项图将有漏洞的依赖项列在其他依赖项前面。 更多信息请参阅“[关于依赖项漏洞的安全警报](/articles/about-security-alerts-for-vulnerable-dependencies)”。

{% if currentVersion == "free-pro-team@latest" %}
您可以在一个仪表板中查看组织仓库中使用的依赖项。 更多信息请参阅“[查看用于组织的洞见](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)”。{% endif %}

### 支持的包生态系统

| 包管理器         | 语言                    | 建议的格式                                              | 支持的格式                                                                |
| ------------ | --------------------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| Maven        | Java、Scala            | `pom.xml`                                          | `pom.xml`                                                            |
| npm          | JavaScript            | `package-lock.json`                                | `package-lock.json`、`package.json`                                   |
| Yarn         | JavaScript            | `yarn.lock`                                        | `package.json`、`yarn.lock`                                           |
| `dotnet` CLI | .NET 语言（C#、C++、F#、VB） | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj` | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj`、`packages.config` |
| Python PIP   | Python                | `requirements.txt`、`pipfile.lock`                  | `requirements.txt`、`pipfile.lock`、`setup.py`*                        |
| RubyGems     | Ruby                  | `Gemfile.lock`                                     | `Gemfile.lock`、`Gemfile`、`*.gemspec`                                 |
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.18" %}| Composer             | PHP           | `composer.lock` | `composer.json`, `composer.lock` |{% endif %}

{% note %}

**注：**如果在 `setup.py` 文件中列出 Python 依赖项，我们可能无法剖析、列出和提醒项目中的每个依赖项。

{% endnote %}

### 为启用了依赖项图的仓库列出依赖项

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}

{% if currentVersion == "free-pro-team@latest" %}
### 为私有仓库启用依赖项图

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
4. 阅读关于授予 {% data variables.product.product_name %} 访问仓库数据的消息，以启用依赖项图，然后单击 **Allow access（允许访问）**。 ![允许访问仓库数据以启用依赖项图的按钮](/assets/images/help/repository/dependency-graph-allow-access-button.png)

更多信息请参阅“[了解 {% data variables.product.product_name %} 如何使用和保护数据](/categories/understanding-how-github-uses-and-protects-your-data)”。

### 为私有仓库禁用依赖项图

{% data reusables.repositories.you-can-enable-or-disable-security-features %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在 "Data services"（数据服务）下，取消选中 **Dependency graph（依赖项图）**。 ![禁用依赖项图的复选框](/assets/images/help/repository/private-repo-data-use-dependency-graph-disabled.png)

To opt out of data use for your repository, see "[Opting into or out of data use for your private repository](/articles/opting-into-or-out-of-data-use-for-your-private-repository)."
{% endif %}

### 依赖项图疑难排解

{% data reusables.repositories.troubleshooting-dependency-graph %}

### 延伸阅读

- "[列出依赖仓库的项目](/articles/listing-the-projects-that-depend-on-a-repository)"{% if currentVersion == "free-pro-team@latest" %}
- "[了解 {% data variables.product.product_name %} 如何使用和保护数据](/categories/understanding-how-github-uses-and-protects-your-data)"
- "[查看和更新仓库中的漏洞依赖项](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"{% endif %}
