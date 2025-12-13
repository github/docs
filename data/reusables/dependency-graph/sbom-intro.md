An SBOM is a formal, machine-readable inventory of a project's dependencies and associated information (such as {% ifversion ghes %}versions and package identifiers{% else %}versions, package identifiers, licenses, transitive paths for package ecosystems with support for transitive dependency labeling, and copyright information{% endif %}). SBOMs help reduce supply chain risks by:

* Providing transparency about the dependencies used by your repository
* Allowing vulnerabilities to be identified across your codebase
* Providing insights in the license compliance, security, or quality issues that may exist in your codebase
* Enabling you to better comply with various data protection standards

{% ifversion transitive-dependency-labeling-npm %}For more information about the ecosystems supporting transitive dependency labeling, see [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems).{% endif %}
