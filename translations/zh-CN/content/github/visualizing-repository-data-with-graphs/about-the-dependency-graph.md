---
title: 关于依赖项图
intro: 有关依赖关系图、它支持的生态系统及其如何确定仓库所依赖的软件包的详细信息。
versions:
  enterprise-server: <=2.22
topics:
  - Repositories
---

<!--See /content/code-security/supply-chain-security/about-the-dependency-graph for the latest version of this article -->

### 依赖关系图可用性

依赖关系图可用于使用支持的文件格式在支持的包生态系统中定义依赖关系的每个仓库。

{% data reusables.repositories.enable-security-alerts %}

### 关于依赖项图

依赖项图是存储在仓库中的清单和锁定文件的摘要。 对于每个仓库，它会显示依赖项，即它所依赖的生态系统和包。 {% data variables.product.prodname_ghe_server %} 不计算有关依赖项、仓库和依赖于仓库的包的信息。

当您将提交推送到 {% data variables.product.product_name %} 以更改或添加受支持的清单或锁定文件到默认分支时，依赖关系图将自动更新。 有关受支持的生态系统和清单文件的信息，请参阅下面的“["支持的包生态系统](#supported-package-ecosystems)”。

### 包含的依赖项

依赖关系图包括清单和锁定文件中详述的所有依赖项，或支持的生态系统的同等项。 这包括：

- 在清单或锁定文件中明确定义的直接依赖项
- 这些直接依赖项的间接依赖项，也称为过渡依赖项或子依赖项

依赖关系图可识别间接依赖项。

### 使用依赖关系图

您可以使用依赖关系图：

- 浏览代码所依赖的仓库。 更多信息请参阅“[探索仓库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)”。
- 查看和更新仓库中有漏洞的依赖项。 更多信息请参阅“[关于易受攻击的依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。

### 启用依赖关系图

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}如果依赖项图在系统中不可用，则站点管理员可以启用依赖项图和 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[为 {% data variables.product.prodname_ghe_server %} 上的有漏洞依赖项启用安全警报](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)”。{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %} 如果依赖项图在系统中不可用，则站点管理员可以启用依赖项图和安全警报。 更多信息请参阅“[为 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项启用安全警报](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)”。

{% endif %}

首次启用依赖关系图时，将立即剖析受支持的生态系统的任何清单和锁定文件。 依赖关系图通常在几分钟之内填充，但对于依赖项很多的仓库，可能需要更长时间。 启用后，每次推送到仓库时，依赖关系图都会自动更新。

### 支持的包生态系统
<!-- If you make changes to this feature, update /getting-started-with-github/github-language-support to reflect any changes to supported packages. -->

建议的格式明确定义哪些版本用于所有直接和所有间接依赖项。 如果使用这些格式，则依赖关系图更准确。 它还会反映当前的构建设置，使依赖关系图能够报告直接和间接依赖项中的漏洞。

下面列出的生态系统支持依赖关系图和 {% if currentVersion == "enterprise-server@2.22" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}安全警报{% endif %}。

| 包管理器         | 语言                    | 建议的格式                                              | 所有支持的格式                                                              |
| ------------ | --------------------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| Composer     | PHP                   | `composer.lock`                                    | `composer.json`、`composer.lock`                                      |
| `dotnet` CLI | .NET 语言（C#、C++、F#、VB） | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj` | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj`、`packages.config` |
| Maven        | Java、Scala            | `pom.xml`                                          | `pom.xml`                                                            |
| npm          | JavaScript            | `package-lock.json`                                | `package-lock.json`、`package.json`                                   |
| Python PIP   | Python                | `requirements.txt`、`pipfile.lock`                  | `requirements.txt`、`pipfile`、`pipfile.lock`、`setup.py`*              |
| RubyGems     | Ruby                  | `Gemfile.lock`                                     | `Gemfile.lock`、`Gemfile`、`*.gemspec`                                 |
| Yarn         | JavaScript            | `yarn.lock`                                        | `package.json`、`yarn.lock`                                           |

{% note %}

**注：**如果在 `setup.py` 文件中列出 Python 依赖项，我们可能无法剖析和列出项目中的每个依赖项。

{% endnote %}

### 延伸阅读

- 维基百科上的“[依赖关系图](https://en.wikipedia.org/wiki/Dependency_graph)”
- "[探索仓库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)"
