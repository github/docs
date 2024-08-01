---
title: Troubleshooting the dependency graph
intro: 'If the dependency information reported by the dependency graph is not what you expected, there are a number of points to consider, and various things you can check.'
shortTitle: Troubleshoot dependency graph
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Troubleshooting
  - Errors
  - Dependencies
  - Vulnerabilities
  - Dependency graph
  - CVEs
  - Repositories
---

{% data reusables.dependabot.result-discrepancy %}

## Does the dependency graph only find dependencies in manifests and lockfiles?

The dependency graph automatically includes information on dependencies that are explicitly declared in your environment. That is, dependencies that are specified in a manifest or a lockfile. The dependency graph generally also includes transitive dependencies, even when they aren't specified in a lockfile, by looking at the dependencies of the dependencies in a manifest file.

The dependency graph doesn't automatically include "loose" dependencies. "Loose" dependencies are individual files that are copied from another source and checked into the repository directly or within an archive (such as a ZIP or JAR file), rather than being referenced by in a package manager’s manifest or lockfile.

However, you can use the {% data variables.dependency-submission-api.name %} to add dependencies to a project's dependency graph, even if the dependencies are not declared in a manifest or lock file, such as dependencies resolved when a project is built. {% data reusables.dependency-graph.dependency-submission-API-short %} For more information on the {% data variables.dependency-submission-api.name %}, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)."

**Check**: Is the missing dependency for a component that's not specified in the repository's manifest or lockfile?

## Does the dependency graph detect dependencies specified using variables?

The dependency graph analyzes manifests as they’re pushed to {% data variables.product.prodname_dotcom %}. The dependency graph doesn't, therefore, have access to the build environment of the project, so it can't resolve variables used within manifests. If you use variables within a manifest to specify the name, or more commonly the version of a dependency, then that dependency will not automatically be included in the dependency graph.

However, you can use the {% data variables.dependency-submission-api.name %} to add dependencies to a project's dependency graph, even if the dependencies are only resolved when a project is built. For more information on the {% data variables.dependency-submission-api.name %}, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)."

**Check**: Is the missing dependency declared in the manifest by using a variable for its name or version?

## Are there limits which affect the dependency graph data?

Yes, the dependency graph has {% ifversion dependency-graph-repository-view-update %}one category{% else %}two categories{% endif %} of limits:

1. **Processing limits**

    These affect the dependency graph displayed within {% data variables.product.prodname_dotcom %} and also prevent {% data variables.product.prodname_dependabot_alerts %} being created.

    Manifests over 0.5 MB in size are only processed for enterprise accounts. For other accounts, manifests over 0.5 MB are ignored and will not create {% data variables.product.prodname_dependabot_alerts %}.

    By default, {% data variables.product.prodname_dotcom %} will not process more than {% ifversion fpt or ghec %}150{% else %}600{% endif %} manifests per repository. {% data variables.product.prodname_dependabot_alerts %} are not created for manifests beyond this limit, and {% data variables.product.prodname_dependabot_alerts %} may behave unpredictably if this limit is exceeded.

    Manifest files stored in directories with names that are typically used for vendored dependencies will not be processed. A directory whose name matches the following regular expressions is considered a vendored dependencies directory:
      <!-- markdownlint-disable MD011 -->
      * <code>(3rd|[Tt]hird)[-_]?[Pp]arty/</code>
      * <code>(^|/)vendors?/</code>
      * <code>(^|/)[Ee]xtern(als?)?/</code>
      * <code>(^|/)[Vv]+endor/</code>
      <!-- markdownlint-enable MD011 -->

      Examples:
      * third-party/dependencies/dependency1
      * vendors/dependency1
      * /externals/vendor1/dependency1

## Further reading

* "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"
* "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)"
* "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"
* "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors)"
