---
title: 关于依赖项图
intro: '有关依赖关系图、它支持的生态系统及其如何确定仓库所依赖的软件包的详细信息。'
versions:
  enterprise-server: '<=2.22'
topics:
  - 仓库
---

### 依赖关系图可用性

依赖关系图适用于使用支持的文件格式、以支持的包生态系统定义依赖项的每个{% if currentVersion == "free-pro-team@latest" %} 公共{% endif %} 仓库。{% if currentVersion == "free-pro-team@latest" %} 仓库管理员也可对私有仓库设置依赖关系图。{% endif %}

{% data reusables.repositories.enable-security-alerts %}

### 关于依赖项图

依赖项图是存储在仓库中的清单和锁定文件的摘要。 对于每个仓库，它会显示{% if currentversion == "free proteam@latest" %}：

- 依赖项、它依赖的生态系统和包
- 依赖项、依赖于它的仓库和包{% else %} 依赖项，即它所依赖的生态系统和包。 {% data variables.product.prodname_ghe_server %} 不计算有关依赖项、仓库和依赖于仓库的包的信息。{% endif %}

向 {% data variables.product.product_name %} 推送提交以更改支持的清单或锁定文件或将其添加到默认分支时，依赖项图会自动更新。.{% if currentVersion == "free-pro-team@latest" %}此外，当有人向某个依赖项的仓库推送更改时，该图也会更新。{% endif %}有关支持的生态系统和清单文件的信息，请参阅下面的“[支持的包生态系统](#supported-package-ecosystems)”。

{% if currentVersion == "free-pro-team@latest" %}
当您创建包含针对默认分支的依赖项更改的拉取请求时，
{% data variables.product.prodname_dotcom %} 使用依赖项图向拉取请求添加依赖项审查。 它们指示依赖项是否包含漏洞，如果是，则指示已修复漏洞的依赖项版本。 更多信息请参阅“[审查拉取请求中的依赖项更改](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。
{% endif %}

### 包含的依赖项

依赖关系图包括清单和锁定文件中详述的所有依赖项，或支持的生态系统的同等项。 这包括：

- 在清单或锁定文件中明确定义的直接依赖项
- 这些直接依赖项的间接依赖项，也称为过渡依赖项或子依赖项

依赖项图通过锁定文件明确标识间接依赖项{% if currentVersion == "free-pro-team@latest" %} 或者通过检查直接依赖项的依赖项来标识间接依赖项。 对于最可靠的依赖关系图， 您应该使用锁定文件（或其等效项），因为它们准确地定义了您当前使用的直接和间接依赖项版本。 如果您使用锁定文件，还要确保仓库的所有贡献者都使用相同的版本，这样更便于您{% else %}从锁定文件{% endif %} 测试和调试代码。

{% if currentVersion == "free-pro-team@latest" %}
### 包含的依赖关系

对于公共仓库，仅报告依赖于它或它发布的包的公共仓库。 对于私有仓库，不报告此信息。{% endif %}

### 使用依赖关系图

您可以使用依赖关系图：

- 探索您的代码所依赖的仓库{% if currentVersion == "free-pro-team@latest" %} 以及依赖于它的仓库{% endif %}。 更多信息请参阅“[探索仓库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)”。 {% if currentVersion == "free-pro-team@latest" %}
- 在单个仪表板中查看组织仓库中使用的依赖项摘要。 更多信息请参阅“[查看用于组织的洞见](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)”。{% endif %}
- 查看和更新仓库中有漏洞的依赖项。 更多信息请参阅“[关于有漏洞依赖项的警报](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)”。{% if currentVersion == "free-pro-team@latest" %}
- 查看拉取请求中有漏洞依赖项的相关信息。 更多信息请参阅“[审查拉取请求中的依赖项更改](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。{% endif %}

### 启用依赖关系图

{% if currentVersion == "free-pro-team@latest" %}要生成依赖关系图，{% data variables.product.product_name %} 需要对仓库的依赖项清单和锁定文件的只读访问权限。 依赖关系图自动为所有公共仓库生成，您可以选择为私有仓库启用它。 For information about enabling or disabling it for private repositories, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.21" %}如果依赖项图在系统中不可用，则站点管理员可以启用依赖项图和 {% data variables.product.prodname_dependabot_alerts %}。 更多信息请参阅“[为 {% data variables.product.prodname_ghe_server %} 上的有漏洞依赖项启用安全警报](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)”。{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %} 如果依赖项图在系统中不可用，则站点管理员可以启用依赖项图和安全警报。 更多信息请参阅“[为 {% data variables.product.prodname_ghe_server %} 上易受攻击的依赖项启用安全警报](/enterprise/{{ currentVersion }}/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)”。

{% endif %}

首次启用依赖关系图时，将立即剖析受支持的生态系统的任何清单和锁定文件。 依赖关系图通常在几分钟之内填充，但对于依赖项很多的仓库，可能需要更长时间。 启用后，该图将在每次推送到仓库{% if currentVersion == "free-pro-team@latest" %} 以及每次推送到该图中的其他仓库{% endif %} 时自动更新。

### 支持的包生态系统

建议的格式明确定义哪些版本用于所有直接和所有间接依赖项。 如果使用这些格式，则依赖关系图更准确。 它还反映当前的构建设置，使依赖项图能够报告直接和间接依赖项中的漏洞。{% if currentVersion == "free-pro-team@latest" %} 从清单文件（或等效文件）推断的间接依赖项将不包括在漏洞依赖项检查中。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}下列生态系统支持依赖关系图、{% data variables.product.prodname_dependabot_alerts %} 和 {% data variables.product.prodname_dependabot_security_updates %}。{% endif %}
|
{% if currentVersion ver_gt "enterprise-server@2.21" %}下列生态系统支持依赖关系图和 {% data variables.product.prodname_dependabot_alerts %}。{% endif %}
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
- “[探索仓库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)” {% if currentVersion == "free-pro-team@latest" %}
- "[查看用于组织的洞见](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"
- "[查看和更新仓库中的漏洞依赖项](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[漏洞依赖项检测疑难解答](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"{% endif %}
