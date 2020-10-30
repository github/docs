---
title: Troubleshooting the detection of vulnerable dependencies
intro: 'If the dependency information reported by {% data variables.product.product_name %} is not what you expected, there are a number of points to consider, and various things you can check.'
versions:
  free-pro-team: '*'
---

The results of dependency detection reported by {% data variables.product.product_name %} may be different from the results returned by other tools. There are good reasons for this and it's helpful to understand how {% data variables.product.prodname_dotcom %} determines dependencies for your project.

### Why do some dependencies seem to be missing?

{% data variables.product.prodname_dotcom %} generates and displays dependency data differently than other tools. Consequently, if you've been using another tool to identify dependencies you will almost certainly see different results. Consider the following:

*   {% data variables.product.prodname_advisory_database %} is one of the data sources that {% data variables.product.prodname_dotcom %} uses to identify vulnerable dependencies. It's a free, curated database of vulnerability information for common package ecosystems on {% data variables.product.prodname_dotcom %}. It includes both data reported directly to {% data variables.product.prodname_dotcom %} from {% data variables.product.prodname_security_advisories %}, as well as official feeds and community sources. This data is reviewed and curated by {% data variables.product.prodname_dotcom %} to ensure that false or unactionable information is not shared with the development community. For more information, see "[Browsing security vulnerabilities in the {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)" and "[About {% data variables.product.prodname_security_advisories %}](/github/managing-security-vulnerabilities/about-github-security-advisories)."
*   The dependency graph parses all known package manifest files in a user’s repository. For example, for npm it will parse the _package-lock.json_ file. It constructs a graph of all of the repository’s dependencies and public dependents. This happens when you enable the dependency graph and when anyone pushes to the default branch, and it includes commits that makes changes to a supported manifest format. For more information, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)."
*   {% data variables.product.prodname_dependabot_short %} scans any push, to the default branch, that contains a manifest file. When a new vulnerability record is added, it scans all existing repositories and generates an alert for each vulnerable repository. {% data variables.product.prodname_dependabot_short %} alerts are aggregated at the repository level, rather than creating one alert per vulnerability. For more information, see "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)."
*   {% data variables.product.prodname_dependabot_security_updates %} are triggered when you receive a security alert about a vulnerable dependency in your repository. {% data variables.product.prodname_dotcom %} automatically creates a pull request in your repository to upgrade the vulnerable dependency to the minimum possible secure version needed to avoid the vulnerability. For more information, see "[Configuring {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/configuring-github-dependabot-security-updates)."

    {% data variables.product.prodname_dependabot_short %} doesn't scan repositories on a schedule, but rather when something changes. For example, a scan is triggered when a new dependency is added ({% data variables.product.prodname_dotcom %} checks for this on every push), or when a new vulnerability is discovered and added to the advisory database.

### Why don't I get vulnerability alerts for some ecosystems?

{% data variables.product.prodname_dotcom %} limits its support for vulnerability alerts to a set of ecosystems where we can provide high-quality, actionable data. Curated vulnerabilities in the {% data variables.product.prodname_advisory_database %}, the dependency graph, {% data variables.product.prodname_dependabot_short %} alerts, and {% data variables.product.prodname_dependabot_short %} security updates are provided for several ecosystems, including Java’s Maven, JavaScript’s npm and Yarn, .NET’s NuGet, Python’s pip, Ruby's RubyGems, and PHP’s Composer. We'll continue to add support for more ecosystems over time. For an overview of the package ecosystems that we support, see "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)."

It's worth noting that [{% data variables.product.prodname_dotcom %} Security Advisories](/github/managing-security-vulnerabilities/about-github-security-advisories) may exist for other ecosystems. The information in a security advisory is provided by the maintainers of a particular repository. This data is not curated in the same way as information for the supported ecosystems.

**Check**: Does the uncaught vulnerability apply to an unsupported ecosystem?

### Does the dependency graph only find dependencies in manifests and lockfiles?

The dependency graph includes information on dependencies that are explicitly declared in your environment. That is, dependencies that are specified in a manifest or a lockfile. The dependency graph generally also includes transitive dependencies, even when they aren't specified in a lockfile, by looking at the dependencies of the dependencies in a manifest file.

{% data variables.product.prodname_dependabot_short %} alerts advise you about dependencies you should update, including transitive dependencies, where the version can be determined from a manifest or a lockfile. {% data variables.product.prodname_dependabot_short %} security updates only suggests a change where it can directly "fix" the dependency, that is, when these are:
* Direct dependencies explicitly declared in a manifest or lockfile
* Transitive dependencies declared in a lockfile

The dependency graph doesn't include “loose” dependencies. “Loose” dependencies are individual files that are copied from another source and checked into the repository directly or within an archive (such as a ZIP or JAR file), rather than being referenced by in a package manager’s manifest or lockfile.

**Check**: Is the uncaught vulnerability for a component that's not specified in the repository's manifest or lockfile?

### Does the dependency graph detect dependencies specified using variables?

The dependency graph analyzes manifests as they’re pushed to {% data variables.product.prodname_dotcom %}. The dependency graph doesn't, therefore, have access to the build environment of the project, so it can't resolve variables used within manifests. If you use variables within a manifest to specify the name, or more commonly the version of a dependency, then that dependency will not be included in the dependency graph.

**Check**: Is the missing dependency declared in the manifest by using a variable for its name or version?

### Are there limits which affect the dependency graph data?

Yes, the dependency graph has two categories of limits:

1. **Processing limits**

    These affect the dependency graph displayed within {% data variables.product.prodname_dotcom %} and also prevent {% data variables.product.prodname_dependabot_short %} alerts being created.

    Manifests over 0.5 MB in size are only processed for enterprise accounts. For other accounts, manifests over 0.5 MB are ignored and will not create {% data variables.product.prodname_dependabot_short %} alerts.

    By default, {% data variables.product.prodname_dotcom %} will not process more than 20 manifests per repository. {% data variables.product.prodname_dependabot_short %} alerts are not be created for manifests beyond this limit. If you need to increase the limit, contact {% data variables.contact.contact_support %}.

2. **Visualization limits**

    These affect what's displayed in the dependency graph within {% data variables.product.prodname_dotcom %}. However, they don't affect the {% data variables.product.prodname_dependabot_short %} alerts that are created.

    The Dependencies view of the dependency graph for a repository only displays 100 manifests. Typically this is adequate as it is significantly higher than the processing limit described above. In situations where the processing limit is over 100, {% data variables.product.prodname_dependabot_short %} alerts are still created for any manifests that are not shown within {% data variables.product.prodname_dotcom %}.

**Check**: Is the missing dependency in a manifest file that's over 0.5 MB, or in a repository with a large number of manifests?

### Does {% data variables.product.prodname_dependabot_short %} generate alerts for vulnerabilities that have been known for many years?

The {% data variables.product.prodname_advisory_database %} was launched in November 2019, and initially back-filled to include vulnerability information for the supported ecosystems, starting from 2017. When adding CVEs to the database, we prioritize curating newer CVEs, and CVEs affecting newer versions of software.

Some information on older vulnerabilities is available, especially where these CVEs are particularly widespread, however some old vulnerabilities are not included in the {% data variables.product.prodname_advisory_database %}. If there's a specific old vulnerability that you need to be included in the database, contact {% data variables.contact.contact_support %}.

**Check**: Does the uncaught vulnerability have a publish date earlier than 2017 in the National Vulnerability Database?

### Why does {% data variables.product.prodname_advisory_database %} use a subset of published vulnerability data?

Some third-party tools use uncurated CVE data that isn't checked or filtered by a human. This means that CVEs with tagging or severity errors, or other quality issues, will cause more frequent, more noisy, and less useful alerts.

Since {% data variables.product.prodname_dependabot_short %} uses curated data in the {% data variables.product.prodname_advisory_database %}, the volume of alerts may be lower, but the alerts you do receive will be accurate and relevant.

### Does each dependency vulnerability generate a separate alert?

When a dependency has multiple vulnerabilities, only one aggregated alert is generated for that dependency, instead of one alert per vulnerability.

The {% data variables.product.prodname_dependabot_short %} alerts count in {% data variables.product.prodname_dotcom %} shows a total for the number of alerts, that is, the number of dependencies with vulnerabilities, not the number of vulnerabilities.

![{% data variables.product.prodname_dependabot_short %} alerts view](/assets/images/help/repository/dependabot-alerts-view.png)

When you click to display the alert details, you can see how many vulnerabilities are included in the alert.

![Multiple vulnerabilities for a {% data variables.product.prodname_dependabot_short %} alert](/assets/images/help/repository/dependabot-vulnerabilities-number.png)

**Check**: If there is a discrepancy in the totals you are seeing, check that you are not comparing alert numbers with vulnerability numbers.

### 더 읽을거리

- "[About alerts for vulnerable dependencies](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"
- "[Viewing and updating vulnerable dependencies in your repository](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
