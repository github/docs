The following table shows, for each package manager:
- The YAML value to use in the *dependabot.yml* file
- The supported versions of the package manager
- Whether dependencies in private {% data variables.product.prodname_dotcom %} repositories are supported
- Whether vendored dependencies are supported

| Administración de paquetes | YAML value       | Supported versions        | Private repositories | Delegamiento a proveedores |
| -------------------------- | ---------------- | ------------------------- |:--------------------:|:--------------------------:|
| Bundler                    | `bundler`        | v1                        |                      |           **✓**            |
| Cargo                      | `cargo`          | v1                        |        **✓**         |                            |
| Composer                   | `composer`       | v1,v2                     |        **✓**         |                            |
| Docker                     | `docker`         | v1                        |        **✓**         |                            |
| Elixir                     | `mix`            | v1                        |        **✓**         |                            |
| Elm                        | `elm`            | v0.18, v0.19              |        **✓**         |                            |
| git submodule              | `gitsubmodule`   | N/A (no version)          |        **✓**         |                            |
| GitHub Actions             | `github-actions` | N/A (no version)          |        **✓**         |                            |
| Go modules                 | `gomod`          | v1                        |        **✓**         |           **✓**            |
| Gradle                     | `gradle`         | see (A) below             |        **✓**         |                            |
| Maven                      | `maven`          | see (B) below             |        **✓**         |                            |
| npm                        | `npm`            | v6                        |        **✓**         |                            |
| NuGet                      | `nuget`          | <= 4.8.</br>see (C) below |        **✓**         |                            |
| pip                        | `pip`            | v20                       |                      |                            |
| pipenv                     | `pip`            | <= 2018.11.26             |                      |                            |
| pip-compile                | `pip`            | 5.5.0                     |                      |                            |
| poetry                     | `pip`            | v1                        |                      |                            |
| Terraform                  | `terraform`      | <= 0.11                   |        **✓**         |                            |
| yarn                       | `npm`            | v1                        |                      |                            |

(A) {% data variables.product.prodname_dependabot %} doesn't run Gradle but supports updates to the following files: `build.gradle` and `build.gradle.kts` (for Kotlin projects).

(B) {% data variables.product.prodname_dependabot %} doesn't run Maven but supports updates to `pom.xml` files.

(C) {% data variables.product.prodname_dependabot %} doesn't run the NuGet CLI but does support most features up until version 4.8.

For package managers such as `pipenv` and `poetry`, you need to use the `pip` YAML value. Por ejemplo, si utilizas `poetry` para administrar tus dependencias de Python y quieres que el {% data variables.product.prodname_dependabot %} monitoree el archivo de manifiesto de tu dependencia para encontrar versiones nuevas, utiliza `package-ecosystem: "pip"` en tu archivo de *dependabot.yml*.
