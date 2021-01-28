The following table shows, for each package manager:
- The YAML value to use in the *dependabot.yml* file
- The supported versions 
- Whether dependencies in private {% data variables.product.prodname_dotcom %} repositories are supported
- Whether vendoring is supported for the package

Package manager | YAML value | Supported versions | Private {% data variables.product.prodname_dotcom %} repositories | Vendoring 
--- | :---:| :---:|:---:|:---:
Bundler | `bundler` | v1 | | **✓** |
Cargo | `cargo` | v1 | **✓** | |
Composer | `composer` | v1,v2  | **✓** | |
Docker | `docker` | v1 | **✓** | |
Elixir | `hex` | TBD | | |
Elm | `elm` | v0.18, v0.19 | **✓** | |
git submodule | `gitsubmodule` | N/A (no version) | **✓** | |
GitHub Actions | `github-actions` |  N/A (no version) | **✓** | |
Go modules | `gomod` | v1 | **✓** | **✓** |
Gradle | `gradle` | see (A) below | **✓** | |
Maven | `maven` | see (B) below | **✓** | |
Mix | `mix` | v1 | **✓** | |
npm | `npm` | v6 | **✓** | |
NuGet | `nuget` | <= 4.8.</br>See (C) below | **✓** | |
pip | `pip` | v20 | | |
pipenv | `pip` | <= 2018.11.26 | | |
pip-compile | `pip` | TBD | | |
poetry | `pip` | TBD | | |
Terraform | `terraform` | <= 0.11 | **✓** | |
yarn | `nmp` | v1 | | |

(A) {% data variables.product.prodname_dependabot %} doesn't run Gradle but supports updates to the following files: `build.gradle` and `build.gradle.kts` (for Kotlin projects).

(B) {% data variables.product.prodname_dependabot %} doesn't run Maven but supports updates to `pom.xml` files.

(C) {% data variables.product.prodname_dependabot %} doesn't run the NuGet CLI but does support most features up until version 4.8. Version 4.9 introduces lockfiles, which are unsupported.

For package managers such as `pipenv` and `poetry`, you need to use the `pip` YAML value. For example, if you use `poetry` to manage your Python dependencies and want {% data variables.product.prodname_dependabot %} to monitor your dependency manifest file for new versions, use `package-ecosystem: "pip"` in your *dependabot.yml* file.
