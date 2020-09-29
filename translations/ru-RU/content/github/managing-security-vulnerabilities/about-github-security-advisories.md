---
title: About GitHub Security Advisories
intro: 'You can use {% data variables.product.prodname_security_advisories %} to privately discuss, fix, and publish information about security vulnerabilities in your repository.'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
versions:
  free-pro-team: '*'
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### About {% data variables.product.prodname_security_advisories %}

{% data variables.product.prodname_security_advisories %} allows repository maintainers to privately discuss and fix a security vulnerability in a project. After collaborating on a fix, repository maintainers can publish the security advisory to publicly disclose the security vulnerability to the project's community. By publishing security advisories, repository maintainers make it easier for their community to update package dependencies and research the impact of the security vulnerabilities.

With {% data variables.product.prodname_security_advisories %}, you can:

1. Create a draft security advisory, and use the draft to privately discuss the impact of the vulnerability on your project.
2. Privately collaborate to fix the vulnerability in a temporary private fork.
3. Publish the security advisory to alert your community of the vulnerability.

{% data reusables.repositories.security-advisories-republishing %}

To get started, see "[Creating a security advisory](/github/managing-security-vulnerabilities/creating-a-security-advisory)."

You can give credit to individuals who contributed to a security advisory. For more information, see "[Editing a security advisory](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)."

{% data reusables.repositories.security-guidelines %}

{% data reusables.repositories.github-security-lab %}

### CVE identification numbers

{% data variables.product.prodname_security_advisories %} builds upon the foundation of the Common Vulnerabilities and Exposures (CVE) list. {% data variables.product.prodname_dotcom %} is a CVE Numbering Authority (CNA) and is authorized to assign CVE identification numbers. For more information, see "[About CVE](https://cve.mitre.org/about/index.html)" and "[CVE Numbering Authorities](https://cve.mitre.org/cve/cna.html)" on the CVE website.

When you create a security advisory for a public repository on {% data variables.product.prodname_dotcom %}, you have the option of providing an existing CVE identification number for the security vulnerability. {% data reusables.repositories.request-security-advisory-cve-id %}

Once you've published the security advisory and {% data variables.product.prodname_dotcom %} has assigned a CVE identification number to the vulnerability, {% data variables.product.prodname_dotcom %} publishes the CVE to the MITRE database. For more information, see "[Publishing a security advisory](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)."

### {% data variables.product.prodname_dependabot_alerts %} for published security advisories

{% data reusables.repositories.github-reviews-security-advisories %}
