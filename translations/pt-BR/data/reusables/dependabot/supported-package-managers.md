A tabela a seguir mostra, para cada gerenciador de pacotes:
- O valor de YAML a ser usado no arquivo *dependabot.yml*
- As versões compatíveis do gerenciador de pacotes
- Se as dependências em repositórios privados de {% data variables.product.prodname_dotcom %} são compatíveis
- Whether vendored dependencies are supported

| Gerenciador de pacotes | Valor do YAML    | Versões compatíveis         | Repositórios privados | Vendoring |
| ---------------------- | ---------------- | --------------------------- |:---------------------:|:---------:|
| bundler                | `bundler`        | v1                          |                       |   **✓**   |
| Cargo                  | `cargo`          | v1                          |         **✓**         |           |
| Composer               | `composer`       | v1, v2                      |         **✓**         |           |
| Docker                 | `docker`         | v1                          |         **✓**         |           |
| Elixir                 | `mix`            | v1                          |         **✓**         |           |
| Elm                    | `elm`            | v0.18, v0.19                |         **✓**         |           |
| git submodule          | `gitsubmodule`   | N/A (sem versão)            |         **✓**         |           |
| GitHub Actions         | `github-actions` | N/A (sem versão)            |         **✓**         |           |
| Módulos Go             | `gomod`          | v1                          |         **✓**         |   **✓**   |
| Gradle                 | `gradle`         | ver (A) abaixo              |         **✓**         |           |
| Maven                  | `maven`          | ver (A) abaixo              |         **✓**         |           |
| npm                    | `npm`            | v6, v7                      |         **✓**         |           |
| NuGet                  | `nuget`          | <= 4.8.</br>veja (C) abaixo |         **✓**         |           |
| pip                    | `pip`            | v20                         |                       |           |
| pipenv                 | `pip`            | <= 2018.11.26               |                       |           |
| pip-compile            | `pip`            | 5.5.0                       |                       |           |
| poetry                 | `pip`            | v1                          |                       |           |
| Terraform              | `terraform`      | <= 0.11                     |         **✓**         |           |
| yarn                   | `npm`            | v1                          |                       |           |

(A) {% data variables.product.prodname_dependabot %} não executa o Gradle, mas é compatível com atualizações dos seguintes arquivos: `build.gradle` e `build.gradle.kts` (para projetos do Kotlin).

(B) {% data variables.product.prodname_dependabot %} não usa o Maven, mas é compatível com atualizações para arquivos `pom.xml`.

(C) {% data variables.product.prodname_dependabot %} não executa o NuGet CLI, mas é compatível com a maioria das funcionalidades até a versão 4.8.

Para gerentes de pacote como `pipenv` e `poetry`, você precisa usar o valor `do pip` do YAML. Por exemplo, se você usa o `poetry` para gerenciar suas dependências do Python e quer que {% data variables.product.prodname_dependabot %} monitore seu arquivo de manifesto de dependência para novas versões, use `pacote-ecosystem: "pip"` no seu arquivo *dependabot.yml*.
