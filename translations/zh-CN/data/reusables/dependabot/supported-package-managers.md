下表对每个包管理器显示：
- 要用于 *dependabot.yml* 文件中的 YAML 值
- 支持的包管理器版本
- 是否支持私有 {% data variables.product.prodname_dotcom %} 仓库或注册表中的依赖项
- 是否支持供应的依赖项

| 包管理器           | YAML 值           | 支持的版本                  | 私有仓库  | 私有注册表 |  供应   |
| -------------- | ---------------- | ---------------------- |:-----:|:-----:|:-----:|
| Bundler        | `bundler`        | v1, v2                 |       | **✓** | **✓** |
| Cargo          | `cargo`          | v1                     | **✓** | **✓** |       |
| Composer       | `composer`       | v1, v2                 | **✓** | **✓** |       |
| Docker         | `docker`         | v1                     | **✓** | **✓** |       |
| Hex            | `混合`             | v1                     |       | **✓** |       |
| elm-package    | `elm`            | v0.19                  | **✓** | **✓** |       |
| git submodule  | `gitsubmodule`   | N/A（无版本）               | **✓** | **✓** |       |
| GitHub Actions | `github-actions` | N/A（无版本）               | **✓** | **✓** |       |
| Go 模块          | `gomod`          | v1                     | **✓** | **✓** | **✓** |
| Gradle         | `gradle`         | N/A（无版本）<sup>[1]</sup> | **✓** | **✓** |       |
| Maven          | `maven`          | N/A（无版本）<sup>[2]</sup> | **✓** | **✓** |       |
| npm            | `npm`            | v6, v7                 | **✓** | **✓** |       |
| NuGet          | `nuget`          | <= 4.8<sup>[3]</sup>   | **✓** | **✓** |       |
| pip            | `pip`            | v20                    |       | **✓** |       |
| pipenv         | `pip`            | <= 2018.11.26          |       | **✓** |       |
| pip-compile    | `pip`            | 5.5.0                  |       | **✓** |       |
| poetry         | `pip`            | v1                     |       | **✓** |       |
| Terraform      | `terraform`      | <= 0.15                | **✓** | **✓** |       |
| yarn           | `npm`            | v1                     | **✓** | **✓** |       |

[1] {% data variables.product.prodname_dependabot %} 不运行 Gradle，但支持更新以下文件：`build.gradle` 和 `build.gradle.kts`（用于 Kotlin 项目）。

[2] {% data variables.product.prodname_dependabot %} 不运行 Maven ，但支持更新 `pom.xml` 文件。

[3] {% data variables.product.prodname_dependabot %} 不运行 NuGet CLI，但支持直到版本 4.8 的大多数功能。

对于包管理器，如 `pipenv` 和 `poetry`，您需要使用 `pip` YAML 值。 例如，如果您使用 `poetry` 来管理 Python 依赖项，并且希望 {% data variables.product.prodname_dependabot %} 监控新版本的依赖项清单文件，请在 *dependabot.yml* 文件中使用 `package-ecosystem: "pip"`。
