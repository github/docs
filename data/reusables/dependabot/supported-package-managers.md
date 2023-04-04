The following table shows, for each package manager:
- The YAML value to use in the *dependabot.yml* file
- The supported versions of the package manager
- Whether dependencies in private {% data variables.product.prodname_dotcom %} repositories or registries are supported
- Whether vendored dependencies are supported

Package manager | YAML value      | Supported versions | Private repositories | Private registries | Vendoring
---------------|------------------|------------------|:---:|:---:|:---:
Bundler        | `bundler`        | v1, v2           | {% octicon "x" aria-label="Not supported" %}| {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
Cargo          | `cargo`          | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
Composer       | `composer`       | v1, v2           | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
Docker {% ifversion dependabot-version-updates-enhanced-docker-support %}[1]{% endif %}         | `docker`         | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
Hex            | `mix`            | v1               | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
elm-package    | `elm`            | v0.19            | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
git submodule  | `gitsubmodule`   | Not applicable | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
{% data variables.product.prodname_actions %} [2]   | `github-actions` | Not applicable | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
Go modules     | `gomod`          | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
Gradle [3]         | `gradle`         | Not applicable   | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
Maven [4]       | `maven`          | Not applicable   | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
npm            | `npm`            | v6, v7, v8       | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
NuGet          | `nuget`          | <= 4.8 [5] | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
pip{% ifversion dependabot-PEP621-support %} [6]{% endif %}          | `pip`            | v21.1.2          | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
pipenv         | `pip`            | <= 2021-05-29    | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
pip-compile{% ifversion dependabot-PEP621-support %} [6]{% endif %}   | `pip`            | 6.1.0            | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
poetry         | `pip`            | v1               | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |{% ifversion fpt or ghec or ghes > 3.4 %}
pub [7]           | `pub`            | v2  | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "x" aria-label="Not supported" %} |{% endif %}
Terraform      | `terraform`      | >= 0.13, <= 1.3.x  | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
{% ifversion dependabot-yarn-v3-update %}yarn           | `npm`            | v1, v2, v3       | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %}[8] |{% else %}yarn           | `npm`            | v1               | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |  |
{% endif %}

{% tip %}

**Tip:** For package managers such as `pipenv` and `poetry`, you need to use the `pip` YAML value. For example, if you use `poetry` to manage your Python dependencies and want {% data variables.product.prodname_dependabot %} to monitor your dependency manifest file for new versions, use `package-ecosystem: "pip"` in your *dependabot.yml* file.

{% endtip %}

{% ifversion dependabot-version-updates-enhanced-docker-support %}
[1] {% data variables.product.prodname_dependabot %} can update Docker image tags in Kubernetes manifests. Add an entry to the Docker `package-ecosystem` element of your _dependabot.yml_ file for each directory containing a Kubernetes manifest which references Docker image tags. Kubernetes manifests can be Kubernetes Deployment YAML files or Helm charts. For information about configuring your _dependabot.yml_ file for `docker`, see  "`package-ecosystem`" in "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#package-ecosystem)."

   {% data variables.product.prodname_dependabot %} supports both public and private Docker registries. For a list of the supported registries, see "`docker-registry`" in "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#docker-registry)."
{% endif %}

[2] {% data variables.product.prodname_dependabot %} only supports updates to {% data variables.product.prodname_actions %} using the {% data variables.product.prodname_dotcom %} repository syntax, such as {% data reusables.actions.action-checkout %}. Docker Hub and {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %} URLs are currently not supported.

[3] {% data variables.product.prodname_dependabot %} doesn't run Gradle but supports updates to the following files:
   - `build.gradle`, `build.gradle.kts` (for Kotlin projects){% ifversion dependabot-updates-gradle-versions-catalog-support %}
   - `gradle/libs.versions.toml` (for projects using a standard Gradle version catalog){% endif %}
   - Files included via the `apply` declaration that have `dependencies` in the filename. Note that `apply` does not support `apply to`, recursion, or advanced syntaxes (for example, Kotlin's `apply` with `mapOf`, filenames defined by property).

[4] {% data variables.product.prodname_dependabot %} doesn't run Maven but supports updates to `pom.xml` files.

[5] {% data variables.product.prodname_dependabot %} doesn't run the NuGet CLI but does support most features up until version 4.8.

{% ifversion dependabot-PEP621-support %}
[6] In addition to supporting updates to `requirements.txt` files, {% data variables.product.prodname_dependabot %} supports updates to `pyproject.toml` files if they follow the PEP 621 standard. {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 %}
[7] {% ifversion ghes = 3.5 %}`pub` support is currently in beta. Any known limitations are subject to change. Note that {% data variables.product.prodname_dependabot %}:
   - Doesn't support updating git dependencies for `pub`.
   - Won't perform an update when the version that it tries to update to is ignored, even if an earlier version is available.

   For information about configuring your _dependabot.yml_ file for `pub`, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#enable-beta-ecosystems)."
   {%- else %}{% data variables.product.prodname_dependabot %} won't perform an update for `pub` when the version that it tries to update to is ignored, even if an earlier version is available.{% endif %}
{% endif %}

{% ifversion dependabot-yarn-v3-update %}
[8] Dependabot supports vendored dependencies for v2 onwards.{% endif %}
