---
title: Editing security advisories in the GitHub Advisory Database
intro: 'You can submit improvements to any advisory published in the {% data variables.product.prodname_advisory_database %}.'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
shortTitle: Edit Advisory Database
---

## About editing advisories in the {% data variables.product.prodname_advisory_database %}
Security advisories in the {% data variables.product.prodname_advisory_database %} at [github.com/advisories](https://github.com/advisories) are considered global advisories. Anyone can suggest improvements on any global security advisory in the {% data variables.product.prodname_advisory_database %}. You can edit or add any detail, including additionally affected ecosystems, severity level or description of who is impacted. The {% data variables.product.prodname_security %} curation team will review the submitted improvements and publish them onto the {% data variables.product.prodname_advisory_database %} if accepted.

Only repository owners and administrators can edit repository-level security advisories. For more information, see "[Editing a repository security advisory](/code-security/security-advisories/editing-a-security-advisory)."
## Editing advisories in the GitHub Advisory Database

1. 导航到 https://github.com/advisories。
2. Select the security advisory you would like to contribute to.
3. On the right-hand side of the page, click the **Suggest improvements for this vulnerability** link. ![Suggest improvements link](/assets/images/help/security/suggest-improvements-to-advisory.png)
4. In the contribution form, make the desired improvements. You can edit or add any detail.
5. When you finish editing the advisory, click **Submit improvements**.
6. Once you submit your improvements, a pull request containing your changes will be created for review in [github/advisory-database](https://github.com/github/advisory-database) by the {% data variables.product.prodname_security %} curation team. If the advisory originated from a {% data variables.product.prodname_dotcom %} repository, we will also tag the original publisher for optional commentary. You can view the pull request and get notifications when it is updated or closed.

You can also open a pull request directly on an advisory file in the [github/advisory-database](https://github.com/github/advisory-database) repository. For more information, see the [contribution guidelines](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md). 
