---
ms.openlocfilehash: f37c93394be7f73c417b5cd040696b453c82e42d
ms.sourcegitcommit: e4069b5613c10d74954185995d0fb73224079463
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/17/2022
ms.locfileid: "148169238"
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
Docker {% ifversion dependabot-version-updates-enhanced-docker-support %}<sup>[1]</sup>{% endif %}         | `docker`         | v1               | **✓** | **✓** | |
Hex            | `mix`            | v1               | | **✓** | |
elm-package    | `elm`            | v0.19            | **✓** | **✓** | |
git submodule  | `gitsubmodule`   | N/A（无版本） | **✓** | **✓** | |
GitHub 操作 | `github-actions` | N/A（无版本） | **✓** | **✓** | |
Go 模块     | `gomod`          | v1               | **✓** | **✓** | **✓** |
Gradle         | `gradle`         | N/A（无版本）<sup>[2]</sup>   | **✓** | **✓** | |
Maven          | `maven`          | N/A（无版本）<sup>[3]</sup>   | **✓** | **✓** | |
npm            | `npm`            | v6、v7、v8       | **✓** | **✓** | |
NuGet          | `nuget`          | <= 4.8<sup>[4]</sup> | **✓** | **✓** | |
pip{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}          | `pip`            | v21.1.2          | | **✓** | |
pipenv         | `pip`            | <= 2021-05-29    | | **✓** | |
pip-compile{% ifversion dependabot-PEP621-support %}<sup>[5]</sup>{% endif %}   | `pip`            | 6.1.0            | | **✓** | |
poetry         | `pip`            | v1               | | **✓** | |{% ifversion fpt or ghec or ghes > 3.4 %}
酒馆            | `pub`            | v2 <sup>[6]</sup> | | | |{% endif %}
Terraform      | `terraform`      | >= 0.13、<= 1.2.x  | **✓** | **✓** | |
{% ifversion dependabot-yarn-v3-update %}yarn           | `npm`            | V1、V2、V3       | **✓** | **✓** | **✓**<sup>[7]</sup> |{% else %}yarn           | `npm`            | v1               | **✓** | **✓** |  |
{% endif %}

{% tip %}

提示：对于包管理器（如 `pipenv` 和 `poetry`），需要使用 `pip` YAML 值。 例如，如果使用 `poetry` 来管理 Python 依赖项，并且希望让 {% data variables.product.prodname_dependabot %} 监视新版本的依赖项清单文件，请在 dependabot.yml 文件中使用 `package-ecosystem: "pip"`。

{% endtip %}

{% ifversion dependabot-version-updates-enhanced-docker-support %} [1] {% data variables.product.prodname_dependabot %} 可更新 Kubernetes 清单中的 Docker 映像标记。 对于包含引用 Docker 映像标记的 Kubernetes 清单的每个目录，请向 dependabot.yml 文件的 Docker `package-ecosystem` 元素添加一个条目。 Kubernetes 清单可以是 Kubernetes 部署 YAML 文件或 Helm 图表。 有关为 `docker` 配置 dependabot.yml 文件的信息，请参阅“[dependabot.yml 文件的配置选项](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)”中的“`package-ecosystem`”。

   {% data variables.product.prodname_dependabot %} 支持公共和专用 Docker 注册表。 有关支持的注册表的列表，请参阅“[dependabot.yml 文件的配置选项](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry)”中的“`docker-registry`”。
{% endif %}

[2] {% data variables.product.prodname_dependabot %} 不运行 Gradle，但支持对以下文件的更新：`build.gradle`、`build.gradle.kts`（针对 Kotlin 项目），以及通过 `apply` 声明包含在内且文件名中带有 `dependencies` 的文件。 请注意，`apply` 不支持 `apply to`、递归或高级语法（例如，Kotlin 的 `apply` 和 `mapOf`，由属性定义的文件名）。

[3] {% data variables.product.prodname_dependabot %} 不运行 Maven，但支持对 `pom.xml` 文件的更新。

[4] {% data variables.product.prodname_dependabot %} 不运行 NuGet CLI，但支持版本 4.8 及更早版本中的大多数功能。

{% ifversion dependabot-PEP621-support %} [5] 除支持更新 `requirements.txt` 文件外，{% data variables.product.prodname_dependabot %} 还支持更新 `pyproject.toml` 文件（如果它们遵循 PEP 621 标准）。 {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %} [6] {% ifversion ghes = 3.5 %}`pub` 支持目前为 beta 版本。 任何已知限制都可能会发生变化。 请注意 {% data variables.product.prodname_dependabot %}：
   - 不支持更新 `pub` 的 git 依赖项。 
   - 当尝试更新到的版本被忽略时，即使早期版本可用，也不会执行更新。

   有关为 `pub` 配置 dependabot.yml 文件的信息，请参阅“[启用对 beta 级生态系统的支持](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)”。
   {%- else %}{% data variables.product.prodname_dependabot %} 在尝试更新到的版本被忽略时不会为 `pub` 执行更新，即使有可用的早期版本也是如此。{% endif %} {% endif %} 

{% ifversion dependabot-yarn-v3-update %} [7] Dependabot 支持 v2 及更高版本的 vendored 依赖项。{% endif %}

