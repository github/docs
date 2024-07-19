---
title: About secret scanning for partners
intro: 'TODO'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
shortTitle: Secret scanning for partners
---

## About {% data variables.secret-scanning.partner_alerts %}

Partner alerts are alerts that are sent to the secret providers whenever a secret leak is reported for one of their secrets. {% data variables.product.product_name %} currently scans public repositories and public npm packages for secrets issued by specific service providers and alerts the relevant service provider whenever a secret is detected in a commit. For more information about {% data variables.secret-scanning.partner_alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-partners)."

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

TODO: Provide high-level overview of partner program

**Partner patterns.** Used to detect potential secrets in all public repositories as well as public npm packages.

You cannot change the configuration of {% data variables.product.prodname_secret_scanning %} for partner patterns on public repositories.

When you make a repository public, or push changes to a public repository, {% data variables.product.product_name %} always scans the code for secrets that match partner patterns. Public packages on the npm registry are also scanned. If {% data variables.product.prodname_secret_scanning %} detects a potential secret, we notify the service provider who issued the secret. The service provider validates the string and then decides whether they should revoke the secret, issue a new secret, or contact you directly. Their action will depend on the associated risks to you or them. For more information, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."

For more information about the partnership program, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-partnership-program/secret-scanning-partner-program)."
