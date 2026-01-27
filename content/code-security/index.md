---
title: Security and code quality documentation
shortTitle: Security and code quality
intro: Build security and code quality into your {% data variables.product.github %} workflow to secure your software supply chain, prevent data leaks, and automatically find and fix vulnerabilities and code health issues in your codebase.
redirect_from:
  - /code-security/guides
introLinks:
  overview: '{% ifversion ghes %}/code-security/getting-started/github-security-features{% endif %}'
  generate_secret_risk_assessment_report_for_free: '{% ifversion secret-risk-assessment %}/code-security/how-tos/secure-at-scale/configure-organization-security/configure-specific-tools/assess-your-secret-risk{% endif %}'
featuredLinks:
  startHere:
    - '{% ifversion fpt or ghec %}/code-security/getting-started/github-security-features{% endif %}'
    - /code-security/getting-started/quickstart-for-securing-your-repository
    - '{% ifversion ghes %}/code-security/secret-scanning/working-with-secret-scanning-and-push-protection{% endif %}'
    - /code-security/tutorials/secure-your-dependencies/dependabot-quickstart-guide
    - /code-security/how-tos/scan-code-for-vulnerabilities/configure-code-scanning/configuring-default-setup-for-code-scanning
  guideCards:
    - /code-security/trialing-github-advanced-security/planning-a-trial-of-ghas
    - /code-security/secret-scanning/enabling-secret-scanning-features
    - /code-security/how-tos/scan-code-for-vulnerabilities/configure-code-scanning/configuring-default-setup-for-code-scanning
    - /code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configuring-dependabot-security-updates
    - /code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configuring-dependabot-version-updates
  popular:
    - '{% ifversion secret-risk-assessment %}/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/about-secret-risk-assessment{% endif %}'
    - '{% ifversion ghes %}/admin/release-notes{% endif %}'
    - /code-security/concepts/vulnerability-reporting-and-management/about-coordinated-disclosure-of-security-vulnerabilities
    - /code-security/tutorials/secure-your-organization/best-practices-for-preventing-data-leaks-in-your-organization
    - /code-security/tutorials/secure-your-organization/best-practice-fix-alerts-at-scale
    - /code-security/concepts/supply-chain-security/best-practices-for-maintaining-dependencies
changelog:
  label: security-and-compliance
  versions:
    fpt: '*'
    ghec: '*'
layout: product-landing
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
children:
  - /getting-started
  - /concepts
  - /how-tos
  - /reference
  - /tutorials
  - /responsible-use
---
