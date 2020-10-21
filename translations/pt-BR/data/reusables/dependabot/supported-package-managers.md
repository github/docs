| Gerenciador de pacotes           | Suporta vendoring |
| -------------------------------- |:-----------------:|
| Bundler: `bundler`               |       **X**       |
| Cargo: `cargo`                   |                   |
| Composer: `composer`             |                   |
| Docker: `docker`                 |                   |
| Elm: `elm`                       |                   |
| git submodule: `gitsubmodule`    |                   |
| GitHub Actions: `github-actions` |                   |
| Go modules: `gomod`              |                   |
| Gradle: `gradle`                 |                   |
| Maven: `maven`                   |                   |
| Mix: `mix`                       |                   |
| npm: `npm`                       |                   |
| NuGet: `nuget`                   |                   |
| pip: `pip`                       |                   |
| Terraform: `terraform`           |                   |

{% note %}

**Observação**: {% data variables.product.prodname_dependabot_short %} também é compatível os seguintes gerentes de pacote:

-`yarn` (apenas v1) (especifique `npm`)

-`pipenv`, `pip-compile` e `poetry` (especifique `pip`)

Por exemplo, se você usa o `poetry` para gerenciar suas dependências do Python e quer que {% data variables.product.prodname_dependabot_short %} monitore seu arquivo de manifesto de dependência para novas versões, use `pacote-ecosystem: "pip"` no seu arquivo *dependabot.yml*.

{% endnote %}
