---
title: Troubleshooting the dependency graph
intro: 'If the dependency information reported by the dependency graph is not what you expected, there are a number of points to consider, and various things you can check.'
shortTitle: Troubleshoot dependency graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
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

The dependency graph includes information on dependencies that are explicitly declared in your environment. That is, dependencies that are specified in a manifest or a lockfile. The dependency graph generally also includes transitive dependencies, even when they aren't specified in a lockfile, by looking at the dependencies of the dependencies in a manifest file.

The dependency graph doesn't include "loose" dependencies. "Loose" dependencies are individual files that are copied from another source and checked into the repository directly or within an archive (such as a ZIP or JAR file), rather than being referenced by in a package manager’s manifest or lockfile. 

**Check**: Is the missing dependency for a component that's not specified in the repository's manifest or lockfile?

## Does the dependency graph detect dependencies specified using variables?

The dependency graph analyzes manifests as they’re pushed to {% data variables.product.prodname_dotcom %}. The dependency graph doesn't, therefore, have access to the build environment of the project, so it can't resolve variables used within manifests. If you use variables within a manifest to specify the name, or more commonly the version of a dependency, then that dependency will not be included in the dependency graph.

**Check**: Is the missing dependency declared in the manifest by using a variable for its name or version?

## Are there limits which affect the dependency graph data?

Yes, the dependency graph has two categories of limits:

1. **Processing limits**

    These affect the dependency graph displayed within {% data variables.product.prodname_dotcom %} and also prevent {% data variables.product.prodname_dependabot_alerts %} being created.

    Manifests over 0.5 MB in size are only processed for enterprise accounts. For other accounts, manifests over 0.5 MB are ignored and will not create {% data variables.product.prodname_dependabot_alerts %}.

    By default, {% data variables.product.prodname_dotcom %} will not process more than 20 manifests per repository. {% data variables.product.prodname_dependabot_alerts %} are not created for manifests beyond this limit. If you need to increase the limit, contact {% data variables.contact.contact_support %}. 

2. **Visualization limits**

    These affect what's displayed in the dependency graph within {% data variables.product.prodname_dotcom %}. However, they don't affect the {% data variables.product.prodname_dependabot_alerts %} that are created.

    The Dependencies view of the dependency graph for a repository only displays 100 manifests. Typically this is adequate as it is significantly higher than the processing limit described above. In situations where the processing limit is over 100, {% data variables.product.prodname_dependabot_alerts %} are still created for any manifests that are not shown within {% data variables.product.prodname_dotcom %}.

**Check**: Is the missing dependency in a manifest file that's over 0.5 MB, or in a repository with a large number of manifests?

## Further reading

- "[About the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Troubleshooting the detection of vulnerable dependencies](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes > 3.2 %}
- "[Troubleshooting {% data variables.product.prodname_dependabot %} errors](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
