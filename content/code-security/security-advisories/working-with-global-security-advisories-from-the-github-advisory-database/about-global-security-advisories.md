---
title: About global security advisories
intro: 'Global security advisories live in the {% data variables.product.prodname_advisory_database %}, a collection of CVEs and {% data variables.product.company_short %}-originated advisories affecting the open source world. You can contribute to improving global security advisories.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
redirect_from:
  - /code-security/security-advisories/global-security-advisories/about-global-security-advisories
---

## About global security advisories

{% ifversion fpt or ghec %}There are two types of advisories: global security advisories and repository security advisories. For more information about repository security advisories, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)."{% endif %}

Global security advisories are grouped into two categories: {% data variables.product.company_short %}-reviewed advisories and unreviewed advisories.
- {% data variables.product.company_short %}-reviewed advisories are security vulnerabilities{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %} that have been mapped to packages in ecosystems we support.
- Unreviewed advisories are security vulnerabilities that we publish automatically into the {% data variables.product.prodname_advisory_database %}, directly from the National Vulnerability Database feed.

For more information about the {% data variables.product.prodname_advisory_database %}, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/about-the-github-advisory-database)."

{% data reusables.security-advisory.global-advisories %}

Every repository advisory is reviewed by the {% data variables.product.prodname_security %} curation team for consideration as a global advisory. We publish security advisories for any of the ecosystems supported by the dependency graph to the {% data variables.product.prodname_advisory_database %} on [github.com/advisories](https://github.com/advisories).

You can access any advisory in the {% data variables.product.prodname_advisory_database %}. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/browsing-security-advisories-in-the-github-advisory-database)."

You can suggest improvements to any advisory in the {% data variables.product.prodname_advisory_database %}. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/editing-security-advisories-in-the-github-advisory-database)."
