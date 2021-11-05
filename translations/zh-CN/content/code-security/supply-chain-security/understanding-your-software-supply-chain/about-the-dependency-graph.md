---
title: 关于依赖项图
intro: 您可以使用依赖关系图来识别项目的所有依赖项。 依赖关系图支持一系列流行的软件包生态系统。
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: 依赖关系图
---

<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## 依赖关系图可用性

{% ifversion fpt or ghec %}The dependency graph is available for every public repository that defines dependencies in a supported package ecosystem using a supported file format. Repository administrators can also set up the dependency graph for private repositories.{% endif %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## 关于依赖项图

依赖项图是存储在仓库中的清单和锁定文件的摘要。 对于每个仓库，它显示{% ifversion fpt or ghec %}：

- 依赖项、它依赖的生态系统和包
- 依赖项、依赖于它的仓库和包{% else %} 依赖项，即它所依赖的生态系统和包。 {% data variables.product.product_name %} 不计算有关依赖项、仓库和依赖于仓库的包的信息。{% endif %}

向 {% data variables.product.product_name %} 推送提交以更改支持的清单或锁定文件或将其添加到默认分支时，依赖项图会自动更新。{% ifversion fpt or ghec %}此外，当有人向某个依赖项的仓库推送更改时，该图也会更新。{% endif %}有关支持的生态系统和清单文件的信息，请参阅下面的“[支持的包生态系统](#supported-package-ecosystems)”。

{% ifversion fpt or ghes > 3.1 or ghae or ghec %}
当创建包含针对默认分支的依赖项更改的拉取请求时，{% data variables.product.prodname_dotcom %} 使用依赖关系图向拉取请求添加依赖项审查。 它们指示依赖项是否包含漏洞，如果是，则指示已修复漏洞的依赖项版本。 更多信息请参阅“[关于依赖项审查](/code-security/supply-chain-security/about-dependency-review)”。
{% endif %}

## 包含的依赖项

依赖关系图包括清单和锁定文件中详述的所有依赖项，或支持的生态系统的同等项。 这包括：

- 在清单或锁定文件中明确定义的直接依赖项
- 这些直接依赖项的间接依赖项，也称为过渡依赖项或子依赖项

依赖项图通过锁定文件明确标识间接依赖项{% ifversion fpt or ghec %}或者通过检查直接依赖项的依赖项来标识间接依赖项。 对于最可靠的依赖关系图， 您应该使用锁定文件（或其等效项），因为它们准确地定义了您当前使用的直接和间接依赖项版本。 如果您使用锁定文件，还要确保仓库的所有贡献者都使用相同的版本，这样更便于您{% else %}从锁定文件{% endif %} 测试和调试代码。

{% ifversion fpt or ghec %}
## 包含的依赖关系

对于公共仓库，仅报告依赖于它或它发布的包的公共仓库。 对于私有仓库，不报告此信息。{% endif %}

## 使用依赖关系图

您可以使用依赖关系图：

- 探索您的代码所依赖的仓库{% ifversion fpt or ghec %}以及依赖于它的仓库{% endif %}。 更多信息请参阅“[探索仓库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)”。 {% ifversion fpt or ghec %}
- 在单个仪表板中查看组织仓库中使用的依赖项摘要。 更多信息请参阅“[查看用于组织的洞见](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)”。{% endif %}
- 查看和更新仓库中有漏洞的依赖项。 更多信息请参阅“[关于易受攻击的依赖项的警报](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)”。 {% ifversion fpt or ghes > 3.1 or ghec %}
- 查看拉取请求中有漏洞依赖项的相关信息。 更多信息请参阅“[审查拉取请求中的依赖项更改](/github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。{% endif %}

## 启用依赖关系图

{% ifversion fpt or ghec %}要生成依赖关系图，{% data variables.product.product_name %} 需要对仓库的依赖项清单和锁定文件的只读访问权限。 依赖关系图自动为所有公共仓库生成，您可以选择为私有仓库启用它。 For information about enabling or disabling it for private repositories, see "[Exploring the dependencies of a repository](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)."{% endif %}

{% ifversion ghes or ghae %}If the dependency graph is not available in your system, your enterprise owner can enable the dependency graph and {% data variables.product.prodname_dependabot_alerts %}. For more information, see  "[Enabling the dependency graph and {% data variables.product.prodname_dependabot_alerts %} on your enterprise account](/admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account)."{% endif %}

首次启用依赖关系图时，将立即剖析受支持的生态系统的任何清单和锁定文件。 依赖关系图通常在几分钟之内填充，但对于依赖项很多的仓库，可能需要更长时间。 启用后，该图将在每次推送到仓库{% ifversion fpt or ghec %}以及每次推送到该图中的其他仓库{% endif %}时自动更新。

## 支持的包生态系统

建议的格式明确定义哪些版本用于所有直接和所有间接依赖项。 如果使用这些格式，则依赖关系图更准确。 它还反映当前的构建设置，使依赖项图能够报告直接和间接依赖项中的漏洞。{% ifversion fpt or ghec %}从清单文件（或等效文件）推断的间接依赖项将不包括在漏洞依赖项检查中。{% endif %}

| 包管理器         | 语言                    | 建议的格式                                              | 所有支持的格式                                                              |
| ------------ | --------------------- | -------------------------------------------------- | -------------------------------------------------------------------- |
| Composer     | PHP                   | `composer.lock`                                    | `composer.json`、`composer.lock`                                      |
| `dotnet` CLI | .NET 语言（C#、C++、F#、VB） | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj` | `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj`、`packages.config` |
{%- ifversion fpt or ghes > 3.2 or ghae %}
| Go modules | Go | `go.sum` | `go.mod`, `go.sum` |
{%- elsif ghes = 3.2 %}
| Go modules | Go | `go.mod` | `go.mod` |
{%- endif %}
| Maven | Java, Scala |  `pom.xml`  | `pom.xml`  | | npm | JavaScript |            `package-lock.json` | `package-lock.json`, `package.json`| | Python PIP      | Python                    | `requirements.txt`, `pipfile.lock` | `requirements.txt`, `pipfile`, `pipfile.lock`, `setup.py`* |
{%- ifversion fpt or ghes > 3.3 %}
| Python Poetry | Python                    | `poetry.lock` | `poetry.lock`, `pyproject.toml` |{% endif %} | RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`, `Gemfile`, `*.gemspec` | | Yarn | JavaScript | `yarn.lock` | `package.json`, `yarn.lock` |

{% note %}

**注：**如果在 `setup.py` 文件中列出 Python 依赖项，我们可能无法剖析和列出项目中的每个依赖项。

{% endnote %}

## 延伸阅读

- 维基百科上的“[依赖关系图](https://en.wikipedia.org/wiki/Dependency_graph)”
- “[探索仓库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)”{% ifversion fpt or ghec %}
- "[查看用于组织的洞见](/organizations/collaborating-with-groups-in-organizations/viewing-insights-for-your-organization)"{% endif %}
- "[查看和更新仓库中的漏洞依赖项](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[漏洞依赖项检测疑难解答](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)"
