Package manager | YAML value      | Supported versions | Version updates | Security updates | Private repositories | Private registries | Vendoring |
---------------|------------------|------------------|:---:|:---:|:---:|:---:|:---:|
Bundler        | `bundler`        | v1, v2           | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %}| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
[Cargo](#cargo)          | `cargo`          | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %}{% ifversion dependabot-updates-cargo-private-registry-support %}{% else %} (Git only){% endif %} | {% octicon "x" aria-label="Not supported" %} |
Composer       | `composer`       | v1, v2           | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% ifversion dependabot-version-updates-devcontainer-support %} |
[Dev containers](#dev-containers) | `devcontainers`         | Not applicable               | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% endif %} |
| {% ifversion dependabot-version-updates-enhanced-docker-support %} |
[Docker](#docker){% else %}Docker{% endif %}         | `docker`         | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
Hex            | `mix`            | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
elm-package    | `elm`            | v0.19            | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
git submodule  | `gitsubmodule`   | Not applicable | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
[{% data variables.product.prodname_actions %}](#github-actions)   | `github-actions` | Not applicable | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
Go modules     | `gomod`          | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
[Gradle](#gradle)         | `gradle`         | Not applicable   | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
[Maven](#maven)       | `maven`          | Not applicable   | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
npm            | `npm`            | v6, v7, v8, v9   | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
[NuGet](#nuget-cli)          | `nuget`          | {% ifversion dependabot-updates-v680-nuget-support %}<=6.8.0{% elsif ghes = 3.12 %}<= 6.7.0{% else %}<= 4.8{% endif %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% ifversion dependabot-PEP621-support %}[pip](#pip-and-pip-compile){% else %}pip{% endif %} | `pip`            | v21.1.2          | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
pipenv         | `pip`            | <= 2021-05-29    | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
|  {% ifversion dependabot-PEP621-support %}[pip-compile](#pip-and-pip-compile){% else %}pip-compile{% endif %}   | `pip`            | 6.1.0            | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% ifversion dependabot-updates-pnpm-support %} |
[pnpm](#pnpm)   | `npm`            | v7, v8, v9      | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} (v7 and v8 only) | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| {% endif %} |
poetry         | `pip`            | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
[pub](#pub)           | `pub`            | v2  | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% ifversion dependabot-updates-pub-private-registry %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Not supported" %}{% endif %} | {% ifversion dependabot-updates-pub-private-registry %}{% octicon "check" aria-label="Supported" %}{% else %}{% octicon "x" aria-label="Not supported" %}{% endif %} | {% octicon "x" aria-label="Not supported" %} |
| {% ifversion dependabot-updates-swift-support %} |
[Swift](#swift)      | `swift`      | v5  | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} (git only) | {% octicon "x" aria-label="Not supported" %} |
| {% endif %} |
[Terraform](#terraform)      | `terraform`      | >= 0.13, <= 1.8.x  | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | Not applicable |
| {% ifversion dependabot-yarn-v3-update %} |
[yarn](#yarn)           | `npm`            | v1, v2, v3       | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %}|{% else %}yarn           | `npm`            | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |  |
| {% endif %} |

{% tip %}

**Tip:** For package managers such as `pipenv` and `poetry`, you need to use the `pip` YAML value. For example, if you use `poetry` to manage your Python dependencies and want {% data variables.product.prodname_dependabot %} to monitor your dependency manifest file for new versions, use `package-ecosystem: "pip"` in your `dependabot.yml` file.

{% endtip %}

For further information about ecosystem support for {% data variables.product.prodname_dependabot_security_updates %}, see also "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems)."

#### Cargo

{% ifversion dependabot-updates-cargo-private-registry-support %}Private registry support includes cargo registries, so you can use {% data variables.product.prodname_dependabot %} to keep your Rust dependencies up-to-date. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/guidance-for-the-configuration-of-private-registries-for-dependabot#cargo)."{% else %}Private registry support applies to Git registries, and doesn't include cargo registries.{% endif %}

{% ifversion dependabot-version-updates-devcontainer-support %}

#### Dev containers

You can use `devcontainers` as a `package-ecosystem` in your `dependabot.yml` file to update Features in your `devcontainer.json` configuration files. For more information about this support, and for configuration file examples, see [General Availability of {% data variables.product.prodname_dependabot %} Integration](https://containers.dev/guide/dependabot) in the Development Containers documentation.

Dev containers are used in several tools and services, including {% data variables.product.prodname_codespaces %}. For more information about Features and the supported services, see [Features](https://containers.dev/implementors/features/) and [Supporting tools and services](https://containers.dev/supporting) in the Development Containers documentation, respectively.

This updater ensures Features are pinned to the latest `major` version in the associated `devcontainer.json` file.  If a dev container has a lockfile, that file will also be updated. For more information about lockfile specifications, see [Lockfiles](https://github.com/devcontainers/spec/blob/main/docs/specs/devcontainer-lockfile.md) in the `devcontainers/spec` repository.

Features in any valid dev container location will be updated in a single pull request. For more information about the dev container specification, see [Specification](https://containers.dev/implementors/spec/#devcontainerjson) in the Development Containers documentation.

{% endif %}

{% ifversion dependabot-version-updates-enhanced-docker-support %}

#### Docker

{% ifversion dependabot-version-updates-docker-metadata-support %}
{% data variables.product.prodname_dependabot %} can add metadata from Docker images to pull requests for version updates. The metadata includes release notes, changelogs and the commit history. Repository administrators can use the metadata to quickly evaluate the stability risk of the dependency update.

In order for {% data variables.product.prodname_dependabot %} to fetch Docker metadata, maintainers of Docker images must add the `org.opencontainers.image.source` label to their Dockerfile, and include the URL of the source repository. Additionally, maintainers must tag the repository with the same tags as the published Docker images. For an example, see the [`dependabot-fixtures/docker-with-source`](https://github.com/dependabot-fixtures/docker-with-source) repository. For more information on Docker labels, see [Extension image labels](https://docs.docker.com/desktop/extensions-sdk/extensions/labels/) and [BUILDX_GIT_LABELS](https://docs.docker.com/build/building/env-vars/#buildx_git_labels) in the Docker documentation.
{% endif %}

{% data variables.product.prodname_dependabot %} can update Docker image tags in Kubernetes manifests. Add an entry to the Docker `package-ecosystem` element of your `dependabot.yml` file for each directory containing a Kubernetes manifest which references Docker image tags. Kubernetes manifests can be Kubernetes Deployment YAML files or Helm charts. For information about configuring your `dependabot.yml` file for `docker`, see  "`package-ecosystem`" in "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)."

{% data variables.product.prodname_dependabot %} supports both public and private Docker registries. For a list of the supported registries, see "`docker-registry`" in "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry)."
{% endif %}

{% data variables.product.prodname_dependabot %} parses Docker image tags for Semantic Versioning ([SemVer](https://semver.org/)). If {% data variables.product.prodname_dependabot %} detects a tag with a pre-release, then it will only suggest an update to the latest version with a matching pre-release, and it will not suggest a newer version that use a different pre-release label. For more information, see the `dependabot-docker` [README.md](https://github.com/dependabot/dependabot-core/blob/main/docker/README.md) file in the `dependabot/dependabot-core` repository.

#### {% data variables.product.prodname_actions %}

{% data variables.product.prodname_dependabot %} supports version updates for {% data variables.product.prodname_actions %} with the following caveats.

{% data reusables.actions.dependabot-version-updates-actions-caveats %}

For more information about using {% data variables.product.prodname_dependabot_version_updates %} with {% data variables.product.prodname_actions %}, see "[AUTOTITLE](/actions/security-guides/using-githubs-security-features-to-secure-your-use-of-github-actions#keeping-the-actions-in-your-workflows-secure-and-up-to-date)."

#### Gradle

{% ifversion dependabot-security-updates-gradle-support %}{% else %}Gradle is supported for {% data variables.product.prodname_dependabot_version_updates %} only.{% endif %}

{% data variables.product.prodname_dependabot %} doesn't run Gradle but supports updates to the following files:
* `build.gradle`, `build.gradle.kts` (for Kotlin projects){% ifversion dependabot-updates-gradle-versions-catalog-support %}
* `gradle/libs.versions.toml` (for projects using a standard Gradle version catalog){% endif %}
* Files included via the `apply` declaration that have `dependencies` in the filename. Note that `apply` does not support `apply to`, recursion, or advanced syntaxes (for example, Kotlin's `apply` with `mapOf`, filenames defined by property).

{% ifversion dependabot-security-updates-gradle-support %}
For {% data variables.product.prodname_dependabot_security_updates %}, Gradle support is limited to manual uploads of the dependency graph data using the {% data variables.dependency-submission-api.name %}. For more information about the {% data variables.dependency-submission-api.name %}, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)."

{% note %}

**Notes:**

* When you upload Gradle dependencies to the dependency graph using the {% data variables.dependency-submission-api.name %}, all project dependencies are uploaded, even transitive dependencies that aren't explicitly mentioned in any dependency file. When an alert is detected in a transitive dependency, {% data variables.product.prodname_dependabot %} isn't able to find the vulnerable dependency in the repository, and therefore won't create a security update for that alert.
* {% data variables.product.prodname_dependabot_version_updates %} will, however, create pull requests when the parent dependency is explicitly declared as a direct dependency in the project's manifest file.

{% endnote %}
{% endif %}

#### Maven

{% data variables.product.prodname_dependabot %} doesn't run Maven but supports updates to `pom.xml` files.

#### NuGet CLI

{% data variables.product.prodname_dependabot %} doesn't run the NuGet CLI but does support most features up until version {% ifversion dependabot-updates-v680-nuget-support %}6.8.0{% elsif ghes = 3.12 %}6.7.0{% else %}4.8{% endif %}.

{% ifversion dependabot-PEP621-support %}

#### pip and pip-compile

In addition to supporting updates to `requirements.txt` files, {% data variables.product.prodname_dependabot %} supports updates to `pyproject.toml` files if they follow the PEP 621 standard.
{% endif %}

#### pnpm

{% ifversion dependabot-dependency-graph-pnpm %}
pnpm is supported for {% data variables.product.prodname_dependabot_version_updates %} (on v7, v8, and v9) and {% data variables.product.prodname_dependabot_security_updates %} (on v7 and v8 only).

{% else %}
pnpm is supported for {% data variables.product.prodname_dependabot_version_updates %} only. {% data variables.product.prodname_dependabot_security_updates %} are not currently supported.
{% endif %}

#### pub

{% data variables.product.prodname_dependabot %} won't perform an update for `pub` when the version that it tries to update to is ignored, even if an earlier version is available.

{% ifversion dependabot-updates-pub-private-registry %}

You can use {% data variables.product.prodname_dependabot %} to keep Dart dependencies up-to-date if you use private hosted pub repositories. For information about allowing {% data variables.product.prodname_dependabot %} to access private {% data variables.product.prodname_dotcom %} dependencies, see "[Allowing {% data variables.product.prodname_dependabot %} to access private dependencies](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#allowing-dependabot-to-access-private{% ifversion ghec or ghes %}-or-internal{% endif %}-dependencies)."

{% endif %}

{% ifversion dependabot-updates-swift-support %}

#### Swift

Private registry support applies to git registries only. Swift registries are not supported. Non-declarative manifests are not supported. For more information on non-declarative manifests, see [Editing Non-Declarative Manifests](https://github.com/apple/swift-evolution/blob/7003da1439ad60896ec14657dfce829f04b0632c/proposals/0301-package-editing-commands.md#editing-non-declarative-manifests) in the Swift Evolution documentation.
{% endif %}

#### Terraform

Terraform support includes:
* Modules hosted on Terraform Registry or a publicly reachable Git repository.
* Terraform providers.
* Private Terraform Registry. You can configure access for private git repositories by specifying a git registry in your `dependabot.yml` file. For more information, see [`git`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#git).

#### yarn

Dependabot supports vendored dependencies for v2 onwards.
