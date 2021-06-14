---
title: About GitHub Security Advisories
intro: 'You can use {% data variables.product.prodname_security_advisories %} to privately discuss, fix, and publish information about security vulnerabilities in your repository.'
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-github-security-advisories
versions:
  free-pro-team: '*'
type: overview
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### About {% data variables.product.prodname_security_advisories %}

{% data reusables.security-advisory.disclosing-vulnerabilities %} For more information, see "[About coordinated disclosure of security vulnerabilities](/code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities)."

{% data reusables.security-advisory.security-advisory-overview %}

With {% data variables.product.prodname_security_advisories %}, you can:

1. Create a draft security advisory, and use the draft to privately discuss the impact of the vulnerability on your project. For more information, see "[Creating a security advisory](/github/managing-security-vulnerabilities/creating-a-security-advisory)."
2. Privately collaborate to fix the vulnerability in a temporary private fork.
3. Publish the security advisory to alert your community of the vulnerability once a patch is released. For more information, see "[Publishing a security advisory](/github/managing-security-vulnerabilities/publishing-a-security-advisory)."

{% data reusables.repositories.security-advisories-republishing %}

You can give credit to individuals who contributed to a security advisory. For more information, see "[Editing a security advisory](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)."

{% data reusables.repositories.security-guidelines %}

If you created a security advisory in your repository, the security advisory will stay in your repository. We publish security advisories for any of the ecosystems supported by the dependency graph to the {% data variables.product.prodname_advisory_database %} on [github.com/advisories](https://github.com/advisories). If a security advisory is specifically for npm, we also publish the advisory to the npm security advisories. For more information, see [npmjs.com/advisories](https://www.npmjs.com/advisories).

{% data reusables.repositories.github-security-lab %}

### CVE identification numbers

{% data variables.product.prodname_security_advisories %} builds upon the foundation of the Common Vulnerabilities and Exposures (CVE) list. The security advisory form on {% data variables.product.prodname_dotcom %} is a standardized form that matches the CVE description format.

{% data variables.product.prodname_dotcom %} is a CVE Numbering Authority (CNA) and is authorized to assign CVE identification numbers. For more information, see "[About CVE](https://cve.mitre.org/about/index.html)" and "[CVE Numbering Authorities](https://cve.mitre.org/cve/cna.html)" on the CVE website.

When you create a security advisory for a public repository on {% data variables.product.prodname_dotcom %}, you have the option of providing an existing CVE identification number for the security vulnerability. {% data reusables.repositories.request-security-advisory-cve-id %}

Once you've published the security advisory and {% data variables.product.prodname_dotcom %} has assigned a CVE identification number to the vulnerability, {% data variables.product.prodname_dotcom %} publishes the CVE to the MITRE database. For more information, see "[Publishing a security advisory](/github/managing-security-vulnerabilities/publishing-a-security-advisory#requesting-a-cve-identification-number)."

### {% data variables.product.prodname_dependabot_alerts %} for published security advisories

{% data reusables.repositories.github-reviews-security-advisories %}
