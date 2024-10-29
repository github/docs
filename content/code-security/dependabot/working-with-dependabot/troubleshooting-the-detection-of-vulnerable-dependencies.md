---
title: Troubleshooting the detection of vulnerable dependencies
intro: 'If the dependency information reported by {% data variables.product.product_name %} is not what you expected, there are a number of points to consider, and various things you can check.'
shortTitle: Troubleshoot vulnerability detection
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Troubleshooting
  - Errors
  - Security updates
  - Dependencies
  - Vulnerabilities
  - CVEs
  - Repositories
---

{% data reusables.dependabot.result-discrepancy %}

## Why do some dependencies seem to be missing?

{% data variables.product.prodname_dotcom %} generates and displays dependency data differently than other tools. Consequently, if you've been using another tool to identify dependencies you will almost certainly see different results. Consider the following:

* {% data variables.product.prodname_advisory_database %} is one of the data sources that {% data variables.product.prodname_dotcom %} uses to identify vulnerable dependencies and malware. It's a free, curated database of security advisories for common package ecosystems on {% data variables.product.prodname_dotcom %}. It includes both data reported directly to {% data variables.product.prodname_dotcom %} from {% data variables.product.prodname_security_advisories %}, as well as official feeds and community sources. This data is reviewed and curated by {% data variables.product.prodname_dotcom %} to ensure that false or unactionable information is not shared with the development community. {% data reusables.security-advisory.link-browsing-advisory-db %}
* The dependency graph parses all known package manifest files in a user’s repository. For example, for npm it will parse the _package-lock.json_ file. It constructs a graph of all of the repository’s dependencies and public dependents. This happens when you enable the dependency graph and when anyone pushes to the default branch, and it includes commits that makes changes to a supported manifest format. For more information, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)" and "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)."
* {% data variables.product.prodname_dependabot %} scans any push, to the default branch, that contains a manifest file. When a new advisory is added, it scans all existing repositories and generates an alert for each repository that is affected. {% data variables.product.prodname_dependabot_alerts %} are aggregated at the repository level, rather than creating one alert per advisory. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."
* {% data variables.product.prodname_dependabot_security_updates %} are triggered when you receive an alert about a vulnerable dependency in your repository. Where possible, {% data variables.product.prodname_dependabot %} creates a pull request in your repository to upgrade the vulnerable dependency to the minimum possible secure version needed to avoid the vulnerability. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)" and "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors)."

    {% data variables.product.prodname_dependabot %} doesn't scan repositories on a schedule, but rather when something changes. For example, a scan is triggered when a new dependency is added ({% data variables.product.prodname_dotcom %} checks for this on every push), or when a new advisory is added to the database{% ifversion ghes %} and synchronized to {% data variables.product.prodname_dotcom %}{% endif %}. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts#detection-of-insecure-dependencies)."

## Do {% data variables.product.prodname_dependabot_alerts %} only relate to insecure dependencies in manifests and lockfiles?

{% data variables.product.prodname_dependabot_alerts %} advise you about dependencies you should update, including transitive dependencies, where the version can be determined from a manifest or a lockfile. {% data variables.product.prodname_dependabot_security_updates %} only suggest a change where {% data variables.product.prodname_dependabot %} can directly "fix" the dependency, that is, when these are:
* Direct dependencies explicitly declared in a manifest or lockfile
* Transitive dependencies declared in a lockfile

**Check**: Is the uncaught vulnerability for a component that's not specified in the repository's manifest or lockfile?

## Why don't I get {% data variables.product.prodname_dependabot_alerts %} for some ecosystems?

{% data variables.product.prodname_dependabot_alerts %} are supported for a set of ecosystems where we can provide high-quality, actionable data. Curated advisories in the {% data variables.product.prodname_advisory_database %}, the dependency graph, {% ifversion fpt or ghec %}{% data variables.product.prodname_dependabot %} security updates, {% endif %}and  {% data variables.product.prodname_dependabot_alerts %} are provided for several ecosystems, including Java’s Maven, JavaScript’s npm and Yarn, .NET’s NuGet, Python’s pip, Ruby's RubyGems, and PHP’s Composer. For an overview of the package ecosystems that we support for {% data variables.product.prodname_dependabot_alerts %}, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/dependency-graph-supported-package-ecosystems#supported-package-ecosystems)."

It's worth noting that security advisories may exist for other ecosystems. The information in an unreviewed security advisory is provided by the maintainers of a particular repository. This data is not curated by {% data variables.product.prodname_dotcom %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

**Check**: Does the uncaught vulnerability apply to an unsupported ecosystem?

## Does {% data variables.product.prodname_dependabot %} generate alerts for vulnerabilities that have been known for many years?

The {% data variables.product.prodname_advisory_database %} was launched in November 2019, and initially back-filled to include advisories for security risks in the supported ecosystems, starting from 2017. When adding CVEs to the database, we prioritize curating newer CVEs, and CVEs affecting newer versions of software.

Some information on older vulnerabilities is available, especially where these CVEs are particularly widespread, however some old vulnerabilities are not included in the {% data variables.product.prodname_advisory_database %}. If there's a specific old vulnerability that you need to be included in the database, contact {% data variables.contact.contact_support %}.

**Check**: Does the uncaught vulnerability have a publish date earlier than 2017 in the National Vulnerability Database?

## Why does {% data variables.product.prodname_advisory_database %} use a subset of published vulnerability data?

Some third-party tools use uncurated CVE data that isn't checked or filtered by a human. This means that CVEs with tagging or severity errors, or other quality issues, will cause more frequent, more noisy, and less useful alerts.

Since {% data variables.product.prodname_dependabot %} uses curated data in the {% data variables.product.prodname_advisory_database %}, the volume of alerts may be lower, but the alerts you do receive will be accurate and relevant.

{% ifversion fpt or ghec %}

## Does each insecure dependency generate a separate alert?

When a dependency has multiple vulnerabilities, an alert is generated for each vulnerability at the level of advisory plus manifest.

![Screenshot of the {% data variables.product.prodname_dependabot_alerts %} tab showing two alerts from the same package with different manifests.](/assets/images/help/repository/dependabot-alerts-view.png)

Legacy {% data variables.product.prodname_dependabot_alerts %} were grouped into a single aggregated alert with all the vulnerabilities for the same dependency. If you navigate to a link to a legacy {% data variables.product.prodname_dependabot %} alert, you will be redirected to the {% data variables.product.prodname_dependabot_alerts %} tab filtered to display vulnerabilities for that dependent package and manifest.

![Screenshot of the {% data variables.product.prodname_dependabot_alerts %} tab showing the filtered alerts from navigating to a legacy {% data variables.product.prodname_dependabot %} alert.](/assets/images/help/repository/legacy-dependabot-alerts-view.png)

The {% data variables.product.prodname_dependabot_alerts %} count in {% data variables.product.prodname_dotcom %} shows a total for the number of alerts, which is the number of vulnerabilities, not the number of dependencies.

**Check**: If there is a discrepancy in the totals you are seeing, check that you are not comparing alert numbers with dependency numbers. Also check that you are viewing all alerts and not a subset of filtered alerts.
{% endif %}

## Can Dependabot ignore specific dependencies?

You can configure {% data variables.product.prodname_dependabot %} to ignore specific dependencies in the configuration file, which will prevent security and version updates for those dependencies. If you only wish to use security updates, you will need to override the default behavior with a configuration file. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#overriding-the-default-behavior-with-a-configuration-file)" to prevent version updates from being activated. For information about ignoring dependencies, see "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)."

## Further reading

* "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"
* "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
* "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)"
* "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"
* "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/troubleshooting-dependabot-errors)"{% ifversion dependabot-on-actions-opt-in %}
* "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners)"{% endif %}
