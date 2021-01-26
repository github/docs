The following table shows, for each package manager:
- the YAML value to use in the file,
- the supported versions, 
- whether dependencies in private {% data variables.product.prodname_dotcom %} repositories are supported
- whether vendoring is supported for the dependency

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
NuGet | `nuget` | <= 4.8. See (C) below | **✓** | |
pip | `pip` | v20 | | |
pipenv | `pip` | <= 2018.11.26 | | |
pip-compile | `pip` | TBD | | |
poetry | `pip` | TBD | | |
Terraform | `terraform` | <= 0.11 | **✓** | |
yarn | `nmp` | v1 | | |

For example, if you use `poetry` to manage your Python dependencies and want {% data variables.product.prodname_dependabot %} to monitor your dependency manifest file for new versions, use `package-ecosystem: "pip"` in your *dependabot.yml* file.

(A) {% data variables.product.prodname_dependabot %} doesn't run Gradle (therefore doesn't really support a version of Gradle), but {% data variables.product.prodname_dependabot %} supports updates to the following files: `build.gradle` and `build.gradle.kts` (Kotlin projects).

(B) {% data variables.product.prodname_dependabot %} doesn't run Maven (therefore doesn't really support a version of Maven), but {% data variables.product.prodname_dependabot %} supports updates to `pom.xml` files.

(C) {% data variables.product.prodname_dependabot %} doesn't run the NuGet cli (therefore doesn't really support a version of NuGet) but does support most features up until 4.8, as 4.9 introduces lockfiles which are unsupported.
