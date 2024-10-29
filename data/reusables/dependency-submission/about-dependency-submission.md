You can use the REST API to submit dependencies for a project. This enables you to add dependencies, such as those resolved when software is compiled or built, to {% data variables.product.prodname_dotcom %}'s dependency graph feature, providing a more complete picture of all of your project's dependencies.

The dependency graph shows any dependencies you submit using the API in addition to any dependencies that are identified from manifest or lock files in the repository (for example, a `package-lock.json` file in a JavaScript project). For more information about viewing the dependency graph, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#viewing-the-dependency-graph)."

Submitted dependencies will receive {% data variables.product.prodname_dependabot_alerts %} and {% data variables.product.prodname_dependabot_security_updates %} for any known vulnerabilities. You will only get {% data variables.product.prodname_dependabot_alerts %} for dependencies that are from one of the supported ecosystems for the {% data variables.product.prodname_advisory_database %}. For more information about these ecosystems, see "[AUTOTITLE](/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database#github-reviewed-advisories)." For transitive dependencies submitted via the {% data variables.dependency-submission-api.name %}, {% data variables.product.prodname_dependabot %} will automatically open pull requests to update the parent dependency, if an update is available.

{% ifversion dependency-review-submission-api %}Submitted dependencies will be shown in dependency review, but are _not_ available in your organization's dependency insights.

{% data reusables.dependency-review.works-with-submission-api-beta %}
{% else %}Submitted dependencies will _not_ be surfaced in dependency review or your organization's dependency insights.{% endif %}
