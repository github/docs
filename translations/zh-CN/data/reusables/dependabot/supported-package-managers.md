下表对每个包管理器显示：
- 要用于 *dependabot.yml* 文件中的 YAML 值
- 支持的包管理器版本
- 是否支持私有 {% data variables.product.prodname_dotcom %} 仓库中的依赖项
- 是否支持供应的依赖项

| 包管理器           | YAML 值           | 支持的版本                 | 私有仓库  |  供应   |
| -------------- | ---------------- | --------------------- |:-----:|:-----:|
| Bundler        | `bundler`        | v1                    |       | **✓** |
| Cargo          | `cargo`          | v1                    | **✓** |       |
| Composer       | `composer`       | v1, v2                | **✓** |       |
| Docker         | `docker`         | v1                    | **✓** |       |
| Elixir         | `混合`             | v1                    | **✓** |       |
| Elm            | `elm`            | v0.18, v0.19          | **✓** |       |
| git submodule  | `gitsubmodule`   | N/A（无版本）              | **✓** |       |
| GitHub Actions | `github-actions` | N/A（无版本）              | **✓** |       |
| Go 模块          | `gomod`          | v1                    | **✓** | **✓** |
| Gradle         | `gradle`         | 参阅 (A) 下文             | **✓** |       |
| Maven          | `maven`          | 参阅 (B) 下文             | **✓** |       |
| npm            | `npm`            | v6, v7                | **✓** |       |
| NuGet          | `nuget`          | <= 4.8.</br>参阅 (C) 下文 | **✓** |       |
| pip            | `pip`            | v20                   |       |       |
| pipenv         | `pip`            | <= 2018.11.26         |       |       |
| pip-compile    | `pip`            | 5.5.0                 |       |       |
| poetry         | `pip`            | v1                    |       |       |
| Terraform      | `terraform`      | <= 0.11               | **✓** |       |
| yarn           | `npm`            | v1                    |       |       |

(A) {% data variables.product.prodname_dependabot %} 不运行 Gradle，但支持更新以下文件：`build.gradle` 和 `build.gradle.kts`（用于 Kotlin 项目）。

(B) {% data variables.product.prodname_dependabot %} 不运行 Maven ，但支持更新 `pom.xml` 文件。

(C) {% data variables.product.prodname_dependabot %} 不运行 NuGet CLI，但支持直到版本 4.8 的大多数功能。

对于包管理器，如 `pipenv` 和 `poetry`，您需要使用 `pip` YAML 值。 例如，如果您使用 `poetry` 来管理 Python 依赖项，并且希望 {% data variables.product.prodname_dependabot %} 监控新版本的依赖项清单文件，请在 *dependabot.yml* 文件中使用 `package-ecosystem: "pip"`。
