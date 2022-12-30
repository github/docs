---
title: 关于依赖关系图
intro: 您可以使用依赖关系图来识别项目的所有依赖项。 依赖关系图支持一系列流行的软件包生态系统。
redirect_from:
  - /github/visualizing-repository-data-with-graphs/about-the-dependency-graph
  - /code-security/supply-chain-security/about-the-dependency-graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependency graph
  - Dependencies
  - Repositories
shortTitle: Dependency graph
ms.openlocfilehash: 4a8d58f0844337e7b8f88aabe72690a9a46bfaa0
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106491'
---
<!--For this article in earlier GHES versions, see /content/github/visualizing-repository-data-with-graphs-->
<!--Marketing-LINK: From /features/security and /features/security/software-supply-chain pages "How GitHub's dependency graph is generated".-->

## 关于依赖关系图

{% data reusables.dependabot.about-the-dependency-graph %}

向 {% data variables.product.product_name %} 推送提交以更改支持的清单或锁定文件或将其添加到默认分支时，依赖项关系图会自动更新。{% ifversion fpt or ghec %}此外，当有人向某个依赖项的存储库推送更改时，该关系图也会更新。{% endif %}有关支持的生态系统和清单文件的信息，请参阅下面的“[支持的包生态系统](#supported-package-ecosystems)”。

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

当创建包含针对默认分支的依赖项更改的拉取请求时，{% data variables.product.prodname_dotcom %} 使用依赖关系图向拉取请求添加依赖项审查。 它们指示依赖项是否包含漏洞，如果是，则指示已修复漏洞的依赖项版本。 有关详细信息，请参阅“[关于依赖项审查](/code-security/supply-chain-security/about-dependency-review)”。

## 依赖关系图可用性

{% ifversion fpt or ghec %}依赖关系图可用于使用支持的文件格式在支持的包生态系统中定义依赖关系的每个公共存储库。 存储库管理员还可以为私有存储库设置依赖项关系图。 {% endif %}有关依赖项图配置的详细信息{% ifversion ghes %}{% endif %}，请参阅“[配置依赖项图](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-the-dependency-graph)。“

{% data reusables.code-scanning.enterprise-enable-dependency-graph %}

{% data reusables.dependabot.dependabot-alerts-dependency-graph-enterprise %}

## 包含的依赖项

依赖项关系图包含支持的生态系统中的清单和锁定文件（或等效文件）中详述的存储库的所有依赖项{% ifversion dependency-submission-api %}，以及任何使用依赖项提交 API (beta) 提交的依赖项{% endif %}。 这包括：

- 直接依赖项，这些依赖项是在清单或锁定文件中显式定义的{% ifversion dependency-submission-api %}或是已使用依赖项提交 API (beta) 提交的{% endif %}
- 这些直接依赖项的间接依赖项，也称为过渡依赖项或子依赖项

依赖项关系图通过锁定文件显式标识间接依赖项{% ifversion fpt or ghec %}或者通过检查直接依赖项的依赖项来标识间接依赖项。 对于最可靠的依赖关系图， 您应该使用锁定文件（或其等效项），因为它们准确地定义了您当前使用的直接和间接依赖项版本。 如果您使用锁定文件，还要确保仓库的所有贡献者都使用相同的版本，这样更便于您{% else %}从锁定文件{% endif %} 测试和调试代码。

有关 {% data variables.product.product_name %} 如何帮助你了解环境中的依赖项的详细信息，请参阅“[关于供应链安全性](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)”。

{% ifversion fpt or ghec %}

## 包含的依赖关系

对于公共仓库，仅报告依赖于它或它发布的包的公共仓库。 对于私有仓库，不报告此信息。{% endif %}

## 使用依赖关系图

您可以使用依赖关系图：

- 浏览代码所依赖的存储库{% ifversion fpt or ghec %}，以及依赖于它的存储库{% endif %}。 有关详细信息，请参阅“[探索存储库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)”。 {% ifversion ghec %}
- 在单个仪表板中查看组织仓库中使用的依赖项摘要。 有关详细信息，请参阅“[查看组织的见解](/articles/viewing-insights-for-your-organization#viewing-organization-dependency-insights)”。{% endif %}
- 查看和更新仓库中有漏洞的依赖项。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)。”{% ifversion fpt or ghes or ghec %}
- 查看拉取请求中有漏洞依赖项的相关信息。 有关详细信息，请参阅“[查看拉取请求中的依赖项更改](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request)”。{% endif %}

## 支持的包生态系统

建议的格式明确定义哪些版本用于所有直接和所有间接依赖项。 如果使用这些格式，依赖项关系图会更准确。 它还反映当前的生成设置，并且使依赖项关系图能够报告直接和间接依赖项中的漏洞。{% ifversion fpt or ghec %}从清单文件（或等效文件）推断的间接依赖项将不包括在不安全的依赖项检查中。{% endif %}

| 程序包管理器 | 语言 | 推荐格式 | 所有支持的格式 |
| --- | --- | --- | ---|
{%- ifversion dependency-graph-rust-support %} | Cargo | Rust | `Cargo.lock` | `Cargo.toml`、`Cargo.lock` | {%- endif %} | Composer             | PHP           | `composer.lock` | `composer.json`、`composer.lock` | | NuGet | .NET 语言 (C#, F#, VB), C++  |   `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj` |  `.csproj`、`.vbproj`、`.nuspec`、`.vcxproj`、`.fsproj`、`packages.config` | {%- ifversion github-actions-in-dependency-graph %} | {% data variables.product.prodname_actions %} wirkflows<sup>[†]</sup> | YAML | `.yml`、`.yaml` | `.yml`, `.yaml` | {%- endif %} | Go 模块 | Go | `go.sum` | `go.mod`、`go.sum` | | Maven | Java, Scala |  `pom.xml`  | `pom.xml`  | | npm | JavaScript |            `package-lock.json` | `package-lock.json`、`package.json`| | pip             | Python                    | `requirements.txt`、`pipfile.lock` | `requirements.txt`、`pipfile`、`pipfile.lock`、`setup.py`<sup>[‡]</sup> | {%- ifversion dependency-graph-dart-support %} | pub             | Dart                    | `pubspec.lock` | `pubspec.yaml`、`pubspec.lock` | {%- endif %} {%- ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} | Python Poetry | Python                    | `poetry.lock` | `poetry.lock`、`pyproject.toml` | {%- endif %} | RubyGems             | Ruby           | `Gemfile.lock` | `Gemfile.lock`、`Gemfile`、`*.gemspec` | | Yarn | JavaScript | `yarn.lock` | `package.json`、`yarn.lock` |

{% ifversion github-actions-in-dependency-graph %} [†] {% data reusables.enterprise.3-5-missing-feature %} {% data variables.product.prodname_actions %} 工作流必须位于要识别为清单的存储库的 `.github/workflows/` 目录中。 使用 `jobs[*].steps[*].uses` 或 `jobs.<job_id>.uses` 语法引用的任何操作或工作流都将被分析为依赖项。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的工作流语法](/actions/using-workflows/workflow-syntax-for-github-actions)”。

{% endif %}

[‡] 如果你在 `setup.py` 文件中列出你的 Python 依赖项，我们可能无法分析和列出你项目中的每个依赖项。

{% ifversion github-actions-in-dependency-graph %} {% note %}

注意：{% data variables.product.prodname_actions %} 工作流程依赖项显示在依赖项关系图中，以供参考。 {% data variables.product.prodname_actions %} 工作流程目前不支持 Dependabot 警报。

{% endnote %} {% endif %}

{% ifversion dependency-submission-api %}你可以使用依赖项提交 API (beta) 将所选的包管理器或生态系统中的依赖项添加到依赖项关系图，即使所选的生态系统不在上述受支持的生态系统列表中也可如此。 依赖项关系图将显示按生态系统分组的已提交依赖项，但与从清单或锁定文件解析的依赖项是分开的。 你只会收到来自 {% data variables.product.prodname_advisory_database %} [支持的生态系统](https://github.com/github/advisory-database#supported-ecosystems)之一的依赖项的 {% data variables.product.prodname_dependabot_alerts %}。 有关依赖项提交 API 的详细信息，请参阅“[使用依赖项提交 API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)”。{% endif %}
## 延伸阅读

- Wikipedia 上的“[依赖项关系图](https://en.wikipedia.org/wiki/Dependency_graph)”
- [探索存储库的依赖项](/github/visualizing-repository-data-with-graphs/exploring-the-dependencies-of-a-repository)
- [查看和更新 {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)
- [漏洞依赖项检测疑难解答](/github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies)
