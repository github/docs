---
title: About repository security advisories
intro: 'You can use repository security advisories to privately discuss, fix, and publish information about security vulnerabilities in your public repository.'
shortTitle: About repository security advisories
redirect_from:
  - /articles/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/about-github-security-advisories
  - /code-security/security-advisories/about-github-security-advisories
  - /code-security/repository-security-advisories/about-github-security-advisories-for-repositories
  - /code-security/security-advisories/repository-security-advisories/about-repository-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
---

{% data reusables.repositories.security-advisory-admin-permissions %}

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## About repository security advisories

{% data reusables.security-advisory.disclosing-vulnerabilities %} For more information, see "[AUTOTITLE](/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/about-coordinated-disclosure-of-security-vulnerabilities)."

{% data reusables.security-advisory.security-advisory-overview %}

With repository security advisories, you can:

1. Create a draft security advisory, and use the draft to privately discuss the impact of the vulnerability on your project. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory)."
1. Privately collaborate to fix the vulnerability in a temporary private fork.
1. Publish the security advisory to alert your community of the vulnerability once a patch is released. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/publishing-a-repository-security-advisory)."

{% data reusables.repositories.security-advisories-republishing %}

{% ifversion repository-security-advisories-API %}
You can also use the REST API to create, list, and update repository security advisories. For more information, see "[AUTOTITLE](/rest/security-advisories/repository-advisories)."
{% endif %}

You can give credit to individuals who contributed to a security advisory. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)."

{% data reusables.repositories.security-guidelines %}

If you created a security advisory in your repository, the security advisory will stay in your repository. We publish security advisories for any of the ecosystems supported by the dependency graph to the {% data variables.product.prodname_advisory_database %} on [github.com/advisories](https://github.com/advisories). Anyone can submit a change to an advisory published in the {% data variables.product.prodname_advisory_database %}. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/editing-security-advisories-in-the-github-advisory-database)."

If a security advisory is specifically for npm, we also publish the advisory to the npm security advisories. For more information, see [npmjs.com/advisories](https://www.npmjs.com/advisories).

{% data reusables.repositories.github-security-lab %}

## CVE identification numbers

{% data variables.product.prodname_security_advisories %} builds upon the foundation of the Common Vulnerabilities and Exposures (CVE) list. The security advisory form on {% data variables.product.prodname_dotcom %} is a standardized form that matches the CVE description format.

{% data variables.product.prodname_dotcom %} is a CVE Numbering Authority (CNA) and is authorized to assign CVE identification numbers. For more information, see "[About CVE](https://www.cve.org/About/Overview)" and "[CVE Numbering Authorities](https://www.cve.org/ProgramOrganization/CNAs)" on the CVE website.

When you create a security advisory for a public repository on {% data variables.product.prodname_dotcom %}, you have the option of providing an existing CVE identification number for the security vulnerability. {% data reusables.repositories.request-security-advisory-cve-id %}

Once you've published the security advisory and {% data variables.product.prodname_dotcom %} has assigned a CVE identification number to the vulnerability, {% data variables.product.prodname_dotcom %} publishes the CVE to the MITRE database.
For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/publishing-a-repository-security-advisory)."

## {% data variables.product.prodname_dependabot_alerts %} for published security advisories

{% data reusables.repositories.github-reviews-security-advisories %}
