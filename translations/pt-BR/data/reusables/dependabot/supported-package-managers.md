A tabela a seguir mostra, para cada gerenciador de pacotes:
- O valor de YAML a ser usado no arquivo *dependabot.yml*
- As versões compatíveis do gerenciador de pacotes
- Se as dependências em repositórios ou registros de {% data variables.product.prodname_dotcom %} privados são compatíveis
- Se as dependências delegadas são compatíveis

| Gerenciador de pacotes | Valor do YAML    | Versões compatíveis            | Repositórios privados | Registros privados |                 Delegação                  |
| ---------------------- | ---------------- | ------------------------------ |:---------------------:|:------------------:|:------------------------------------------:|
| bundler                | `bundler`        | v1, v2                         |                       |       **✓**        |                   **✓**                    |
| Cargo                  | `cargo`          | v1                             |         **✓**         |       **✓**        |                                            |
| Composer               | `composer`       | v1, v2                         |         **✓**         |       **✓**        |                                            |
| Docker                 | `docker`         | v1                             |         **✓**         |       **✓**        |                                            |
| Hex                    | `mix`            | v1                             |                       |       **✓**        |                                            |
| elm-package            | `elm`            | v0.19                          |         **✓**         |       **✓**        |                                            |
| git submodule          | `gitsubmodule`   | N/A (sem versão)               |         **✓**         |       **✓**        |                                            |
| GitHub Actions         | `github-actions` | N/A (sem versão)               |         **✓**         |       **✓**        |                                            |
| Módulos Go             | `gomod`          | v1                             |         **✓**         |       **✓**        |                   **✓**                    |
| Gradle                 | `gradle`         | N/A (sem versão)<sup>[1]</sup> |         **✓**         |       **✓**        |                                            |
| Maven                  | `maven`          | N/A (sem versão)<sup>[2]</sup> |         **✓**         |       **✓**        |                                            |
| npm                    | `npm`            | v6, v7, v8                     |         **✓**         |       **✓**        |                                            |
| NuGet                  | `nuget`          | <= 4.8<sup>[3]</sup>           |         **✓**         |       **✓**        |                                            |
| pip                    | `pip`            | v21.1.2                        |                       |       **✓**        |                                            |
| pipenv                 | `pip`            | <= 2021-05-29                  |                       |       **✓**        |                                            |
| pip-compile            | `pip`            | 6.1.0                          |                       |       **✓**        |                                            |
| poetry                 | `pip`            | v1                             |                       |       **✓**        | |{% ifversion fpt or ghec or ghes > 3.4 %}
| pub                    | `pub`            | v2 <sup>[4]</sup>              |                       |                    |                
{% endif %}
| Terraform              | `terraform`      | >= 0.13, <= 1.0                |         **✓**         |       **✓**        |                                            |
| yarn                   | `npm`            | v1                             |         **✓**         |       **✓**        |                                            |

{% tip %}

**Tip:** For package managers such as `pipenv` and `poetry`, you need to use the `pip` YAML value. Por exemplo, se você usa o `poetry` para gerenciar suas dependências do Python e quer que {% data variables.product.prodname_dependabot %} monitore seu arquivo de manifesto de dependência para novas versões, use `pacote-ecosystem: "pip"` no seu arquivo *dependabot.yml*.

{% endtip %}

[1] {% data variables.product.prodname_dependabot %} doesn't run Gradle but supports updates to the following files: `build.gradle`, `build.gradle.kts` (for Kotlin projects), and files included via the `apply` declaration that have `dependencies` in the filename. Note that `apply` does not support `apply to`, recursion, or advanced syntaxes (for example, Kotlin's `apply` with `mapOf`, filenames defined by property).

[2] {% data variables.product.prodname_dependabot %} não executa o Maven, mas é compatível com atualizações para arquivos `pom.xml`.

[3] {% data variables.product.prodname_dependabot %} não executa o NuGet CLI, mas é compatível com a maioria dos recursos até a versão 4.8.

{% ifversion fpt or ghec or ghes > 3.4 %}[4] `pub` support is currently in beta. Any known limitations are subject to change. Note that {% data variables.product.prodname_dependabot %}:
   - Doesn't support updating git dependencies for `pub`.
   - Won't perform an update when the version that it tries to update to is ignored, even if an earlier version is available.

   For information about configuring your _dependabot.yml_ file for `pub`, see "[Enabling support for beta-level ecosystems](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)." {% endif %} 
