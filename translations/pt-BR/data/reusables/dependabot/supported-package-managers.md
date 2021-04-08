A tabela a seguir mostra, para cada gerenciador de pacotes:
- O valor de YAML a ser usado no arquivo *dependabot.yml*
- As versões compatíveis do gerenciador de pacotes
- Whether dependencies in private {% data variables.product.prodname_dotcom %} repositories or registries are supported
- Se as dependências delegadas são compatíveis

| Gerenciador de pacotes | Valor do YAML    | Versões compatíveis            | Repositórios privados | Private registries | Delegação |
| ---------------------- | ---------------- | ------------------------------ |:---------------------:|:------------------:|:---------:|
| bundler                | `bundler`        | v1                             |                       |       **✓**        |   **✓**   |
| Cargo                  | `cargo`          | v1                             |         **✓**         |       **✓**        |           |
| Composer               | `composer`       | v1, v2                         |         **✓**         |       **✓**        |           |
| Docker                 | `docker`         | v1                             |         **✓**         |       **✓**        |           |
| Hex                    | `mix`            | v1                             |                       |       **✓**        |           |
| elm-package            | `elm`            | v0.18, v0.19                   |         **✓**         |       **✓**        |           |
| git submodule          | `gitsubmodule`   | N/A (sem versão)               |         **✓**         |       **✓**        |           |
| GitHub Actions         | `github-actions` | N/A (sem versão)               |         **✓**         |       **✓**        |           |
| Módulos Go             | `gomod`          | v1                             |         **✓**         |       **✓**        |   **✓**   |
| Gradle                 | `gradle`         | N/A (no version)<sup>[1]</sup> |         **✓**         |       **✓**        |           |
| Maven                  | `maven`          | N/A (no version)<sup>[2]</sup> |         **✓**         |       **✓**        |           |
| npm                    | `npm`            | v6, v7                         |         **✓**         |       **✓**        |           |
| NuGet                  | `nuget`          | <= 4.8<sup>[3]</sup>           |         **✓**         |       **✓**        |           |
| pip                    | `pip`            | v20                            |                       |       **✓**        |           |
| pipenv                 | `pip`            | <= 2018.11.26                  |                       |       **✓**        |           |
| pip-compile            | `pip`            | 5.5.0                          |                       |       **✓**        |           |
| poetry                 | `pip`            | v1                             |                       |       **✓**        |           |
| Terraform              | `terraform`      | <= 0.11                        |         **✓**         |       **✓**        |           |
| yarn                   | `npm`            | v1                             |         **✓**         |       **✓**        |           |

[1] {% data variables.product.prodname_dependabot %} doesn't run Gradle but supports updates to the following files: `build.gradle` and `build.gradle.kts` (for Kotlin projects).

[2] {% data variables.product.prodname_dependabot %} doesn't run Maven but supports updates to `pom.xml` files.

[3] {% data variables.product.prodname_dependabot %} doesn't run the NuGet CLI but does support most features up until version 4.8.

Para gerentes de pacote como `pipenv` e `poetry`, você precisa usar o valor `do pip` do YAML. Por exemplo, se você usa o `poetry` para gerenciar suas dependências do Python e quer que {% data variables.product.prodname_dependabot %} monitore seu arquivo de manifesto de dependência para novas versões, use `pacote-ecosystem: "pip"` no seu arquivo *dependabot.yml*.
