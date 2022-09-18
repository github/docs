---
ms.openlocfilehash: 073c21c1480e0f9f699687c730aef2bb670654e7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "146689019"
---
下表对每个包管理器显示：
- 要在 dependabot.yml 文件中使用的 YAML 值
- 支持的包管理器版本
- 是否支持私有 {% data variables.product.prodname_dotcom %} 仓库或注册表中的依赖项
- 是否支持供应的依赖项

程序包管理器 | YAML 值      | 支持的版本 | 私有仓库 | 专用注册表 | 供应
---------------|------------------|------------------|:---:|:---:|:---:
Bundler        | `bundler`        | v1, v2           | | **✓** | **✓** |
Cargo          | `cargo`          | v1               | **✓** | **✓** | |
编辑器       | `composer`       | v1, v2           | **✓** | **✓** | |
Docker         | `docker`         | v1               | **✓** | **✓** | |
Hex            | `mix`            | v1               | | **✓** | |
elm-package    | `elm`            | v0.19            | **✓** | **✓** | |
git submodule  | `gitsubmodule`   | N/A（无版本） | **✓** | **✓** | |
GitHub 操作 | `github-actions` | N/A（无版本） | **✓** | **✓** | |
Go 模块     | `gomod`          | v1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | N/A（无版本）<sup>[1]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | N/A（无版本）<sup>[2]</sup>   | **✓** | **✓** | |
npm            | `npm`            | v6、v7、v8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4.8<sup>[3]</sup> | **✓** | **✓** | |
pip            | `pip`            | v21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile    | `pip`            | 6.1.0            | | **✓** | |
poetry         | `pip`            | v1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
酒馆            | `pub`            | v2 <sup>[4]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13、<= 1.2.x  | **✓** | **✓** | |
yarn           | `npm`            | v1               | **✓** | **✓** | |

{% tip %}

提示：对于包管理器（如 `pipenv` 和 `poetry`），需要使用 `pip` YAML 值。 例如，如果使用 `poetry` 来管理 Python 依赖项，并且希望让 {% data variables.product.prodname_dependabot %} 监视新版本的依赖项清单文件，请在 dependabot.yml 文件中使用 `package-ecosystem: "pip"`。

{% endtip %}

[1] {% data variables.product.prodname_dependabot %} 不运行 Gradle，但支持对以下文件的更新：`build.gradle`、`build.gradle.kts`（针对 Kotlin 项目），以及通过 `apply` 声明包含在内且文件名中带有 `dependencies` 的文件。 请注意，`apply` 不支持 `apply to`、递归或高级语法（例如，Kotlin 的 `apply` 和 `mapOf`，由属性定义的文件名）。

[2] {% data variables.product.prodname_dependabot %} 不运行 Maven，但支持对 `pom.xml` 文件的更新。

[3] {% data variables.product.prodname_dependabot %} 不运行 NuGet CLI，但支持直到版本 4.8 的大多数功能。

{% ifversion fpt or ghec or ghes > 3.4 %} [4] {% ifversion ghes = 3.5 %}`pub` 支持目前为 beta 版本。 任何已知限制都可能会发生变化。 请注意 {% data variables.product.prodname_dependabot %}：
   - 不支持更新 `pub` 的 git 依赖项。 
   - 当尝试更新到的版本被忽略时，即使早期版本可用，也不会执行更新。

   有关为 `pub` 配置 dependabot.yml 文件的信息，请参阅“[启用对 beta 级生态系统的支持](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)”。
   {%- else %}{% data variables.product.prodname_dependabot %} 在尝试更新到的版本被忽略时不会为 `pub` 执行更新，即使有可用的早期版本也是如此。{% endif %} {% endif %} 
