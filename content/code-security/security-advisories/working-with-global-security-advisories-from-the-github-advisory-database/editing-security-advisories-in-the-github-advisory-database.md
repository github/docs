---
title: Editing security advisories in the GitHub Advisory Database
intro: 'You can submit improvements to any advisory published in the {% data variables.product.prodname_advisory_database %}.'
redirect_from:
  - /code-security/security-advisories/editing-security-advisories-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database
  - /code-security/security-advisories/global-security-advisories/editing-security-advisories-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
shortTitle: Edit Advisory Database
---

## Editing advisories in the {% data variables.product.prodname_advisory_database %}

The advisories in the {% data variables.product.prodname_advisory_database %} are global security advisories. For more information about global security advisories, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-global-security-advisories)."

Anyone can suggest improvements on any global security advisory in the {% data variables.product.prodname_advisory_database %}. You can edit or add any detail, including additionally affected ecosystems, severity level or description of who is impacted. The {% data variables.product.prodname_security %} curation team will review the submitted improvements and publish them onto the {% data variables.product.prodname_advisory_database %} if accepted.

{% ifversion security-advisories-credit-types %}
If we accept and publish the improvement, the person who submitted the improvement will automatically be assigned a credit type of  "Analyst". For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory#about-credits-for-repository-security-advisories)."{% endif %}

{% ifversion fpt or ghec %}
Only repository owners and administrators can edit repository-level security advisories. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/editing-a-repository-security-advisory)."{% endif %}

1. Navigate to https://github.com/advisories.
1. Select the security advisory you would like to contribute to.
1. On the right-hand side of the page, click the **Suggest improvements for this vulnerability** link.
1. In the "Improve security advisory" form, make the desired improvements. You can edit or add any detail.{% ifversion fpt or ghec %} For information about correctly specifying information on the form, including affected versions, see "[AUTOTITLE](/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/best-practices-for-writing-repository-security-advisories)."{% endif %}{% ifversion security-advisories-reason-for-change %}
1. Under **Reason for change**, explain why you want to make this improvement. If you include links to supporting material this will help our reviewers.
{% endif %}
1. When you finish editing the advisory, click **Submit improvements**.
1. Once you submit your improvements, a pull request containing your changes will be created for review in [github/advisory-database](https://github.com/github/advisory-database) by the {% data variables.product.prodname_security %} curation team. If the advisory originated from a {% data variables.product.prodname_dotcom %} repository, we will also tag the original publisher for optional commentary. You can view the pull request and get notifications when it is updated or closed.

You can also open a pull request directly on an advisory file in the [github/advisory-database](https://github.com/github/advisory-database) repository. For more information, see the [contribution guidelines](https://github.com/github/advisory-database/blob/main/CONTRIBUTING.md).

{% ifversion security-advisories-ghes %}

## Editing advisories from {% data variables.product.prodname_ghe_server %}

If you have {% data variables.product.prodname_github_connect %} enabled on your instance, you will be able to see advisories by adding `/advisories` to the instance url.

1. Navigate to `https://HOSTNAME/advisories`.
1. Select the security advisory you would like to contribute to.
1. On the right-hand side of the page, click the **Suggest improvements for this vulnerability on {% data variables.product.prodname_dotcom %}.** link. A new tab opens with the same security advisory on {% data variables.product.prodname_dotcom %}.
1. Edit the advisory, following steps four through six in "[Editing advisories in the GitHub Advisory Database](#editing-advisories-in-the-github-advisory-database)" above.
{% endif %}
