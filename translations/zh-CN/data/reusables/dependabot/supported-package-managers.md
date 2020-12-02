| 包管理器                       | 支持供应  |
| -------------------------- |:-----:|
| Bundler: `bundler`         | **X** |
| Cargo: `cargo`             |       |
| Composer: `composer`       |       |
| Docker: `docker`           |       |
| Elm: `elm`                 |       |
| Git 子模块：`gitsubmodule`     |       |
| GitHub 操作：`github-actions` |       |
| Go 模块：`gomod`              | **X** |
| Gradle: `gradle`           |       |
| Maven: `maven`             |       |
| Mix: `mix`                 |       |
| npm: `npm`                 |       |
| NuGet: `nuget`             |       |
| pip: `pip`                 |       |
| Terraform: `terraform`     |       |

{% note %}

**注**：{% data variables.product.prodname_dependabot %} 也支持以下软件包管理器：

-`yarn`（仅限 v1）（指定 `npm`）

-`pipenv`、`pip-compile` 和 `poetry`（指定 `pip`）

例如，如果您使用 `poetry` 来管理 Python 依赖项，并且希望 {% data variables.product.prodname_dependabot %} 监控新版本的依赖项清单文件，请在 *dependabot.yml* 文件中使用 `package-ecosystem: "pip"`。

{% endnote %}
