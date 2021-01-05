The following table shows, for each package manager, whether {% data variables.product.prodname_dependabot %} supports: dependencies in private {% data variables.product.prodname_dotcom %} repositories, and vendored dependencies.

| Gerenciador de pacotes           | Private {% data variables.product.prodname_dotcom %} repositories | Vendoring |
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

**Observação**: {% data variables.product.prodname_dependabot %} também é compatível os seguintes gerentes de pacote:

-`yarn` (apenas v1) (especifique `npm`)

-`.gradle.kts` files, for Kotlin projects (specify `gradle`)

-`pipenv`, `pip-compile` e `poetry` (especifique `pip`)

Por exemplo, se você usa o `poetry` para gerenciar suas dependências do Python e quer que {% data variables.product.prodname_dependabot %} monitore seu arquivo de manifesto de dependência para novas versões, use `pacote-ecosystem: "pip"` no seu arquivo *dependabot.yml*.

{% endnote %}
