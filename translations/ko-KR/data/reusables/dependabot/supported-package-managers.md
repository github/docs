The following table shows, for each package manager, whether {% data variables.product.prodname_dependabot %} supports: dependencies in private {% data variables.product.prodname_dotcom %} repositories, and vendored dependencies.

| Package manager                  | Private {% data variables.product.prodname_dotcom %} repositories | Vendoring |
| -------------------------------- |:-----------------------------------------------------------------:|:---------:|
| Bundler: `bundler`               |                                                                   |   **✓**   |
| Cargo: `cargo`                   |                               **✓**                               |           |
| Composer: `composer`             |                               **✓**                               |           |
| Docker: `docker`                 |                               **✓**                               |           |
| Elixir: `hex`                    |                                                                   |           |
| Elm: `elm`                       |                               **✓**                               |           |
| git submodule: `gitsubmodule`    |                               **✓**                               |           |
| GitHub Actions: `github-actions` |                               **✓**                               |           |
| Go modules: `gomod`              |                               **✓**                               |   **✓**   |
| Gradle: `gradle`                 |                               **✓**                               |           |
| Maven: `maven`                   |                               **✓**                               |           |
| Mix: `mix`                       |                               **✓**                               |           |
| npm: `npm`                       |                               **✓**                               |           |
| NuGet: `nuget`                   |                               **✓**                               |           |
| pip: `pip`                       |                                                                   |           |
| Terraform: `terraform`           |                               **✓**                               |           |

{% note %}

**Note**: {% data variables.product.prodname_dependabot %} also supports the following package managers:

-`yarn` (v1 only) (specify `npm`)

-`.gradle.kts` files, for Kotlin projects (specify `gradle`)

-`pipenv`, `pip-compile`, and `poetry` (specify `pip`)

For example, if you use `poetry` to manage your Python dependencies and want {% data variables.product.prodname_dependabot %} to monitor your dependency manifest file for new versions, use `package-ecosystem: "pip"` in your *dependabot.yml* file.

{% endnote %}
