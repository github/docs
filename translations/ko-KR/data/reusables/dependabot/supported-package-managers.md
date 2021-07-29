The following table shows, for each package manager:
- The YAML value to use in the *dependabot.yml* file
- The supported versions of the package manager
- Whether dependencies in private {% data variables.product.prodname_dotcom %} repositories or registries are supported
- Whether vendored dependencies are supported

| Package manager | YAML value       | Supported versions             | Private repositories | Private registries | Vendoring |
| --------------- | ---------------- | ------------------------------ |:--------------------:|:------------------:|:---------:|
| 번들러             | `bundler`        | v1, v2                         |                      |       **✓**        |   **✓**   |
| Cargo           | `cargo`          | v1                             |        **✓**         |       **✓**        |           |
| Composer        | `composer`       | v1, v2                         |        **✓**         |       **✓**        |           |
| Docker          | `docker`         | v1                             |        **✓**         |       **✓**        |           |
| Hex             | `mix`            | v1                             |                      |       **✓**        |           |
| elm-package     | `elm`            | v0.19                          |        **✓**         |       **✓**        |           |
| git submodule   | `gitsubmodule`   | N/A (no version)               |        **✓**         |       **✓**        |           |
| GitHub Actions  | `github-actions` | N/A (no version)               |        **✓**         |       **✓**        |           |
| Go modules      | `gomod`          | v1                             |        **✓**         |       **✓**        |   **✓**   |
| Gradle          | `gradle`         | N/A (no version)<sup>[1]</sup> |        **✓**         |       **✓**        |           |
| Maven           | `maven`          | N/A (no version)<sup>[2]</sup> |        **✓**         |       **✓**        |           |
| npm             | `npm`            | v6, v7                         |        **✓**         |       **✓**        |           |
| NuGet           | `nuget`          | <= 4.8<sup>[3]</sup>           |        **✓**         |       **✓**        |           |
| pip             | `pip`            | v20                            |                      |       **✓**        |           |
| pipenv          | `pip`            | <= 2018.11.26                  |                      |       **✓**        |           |
| pip-compile     | `pip`            | 5.5.0                          |                      |       **✓**        |           |
| poetry          | `pip`            | v1                             |                      |       **✓**        |           |
| Terraform       | `terraform`      | <= 0.15                        |        **✓**         |       **✓**        |           |
| yarn            | `npm`            | v1                             |        **✓**         |       **✓**        |           |

[1] {% data variables.product.prodname_dependabot %} doesn't run Gradle but supports updates to the following files: `build.gradle` and `build.gradle.kts` (for Kotlin projects).

[2] {% data variables.product.prodname_dependabot %} doesn't run Maven but supports updates to `pom.xml` files.

[3] {% data variables.product.prodname_dependabot %} doesn't run the NuGet CLI but does support most features up until version 4.8.

For package managers such as `pipenv` and `poetry`, you need to use the `pip` YAML value. For example, if you use `poetry` to manage your Python dependencies and want {% data variables.product.prodname_dependabot %} to monitor your dependency manifest file for new versions, use `package-ecosystem: "pip"` in your *dependabot.yml* file.
