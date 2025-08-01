---
title: Secure coding documentation
shortTitle: Secure coding
intro: 'Build security into your {% data variables.product.github %} workflow to secure your software supply chain, automatically find and fix vulnerabilities in your codebase, and prevent data leaks.'
redirect_from:
  - /code-security/guides
introLinks:
  overview: '{% ifversion ghes %}/code-security/getting-started/github-security-features{% endif %}'
  generate_secret_risk_assessment_report_for_free: '{% ifversion secret-risk-assessment %}/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/viewing-the-secret-risk-assessment-report-for-your-organization#generating-an-initial-secret-risk-assessment{% endif %}'
featuredLinks:
  startHere: # Links aimed at the builder audience
    - '{% ifversion fpt or ghec %}/code-security/getting-started/github-security-features{% endif %}'
    - /code-security/getting-started/quickstart-for-securing-your-repository
    - '{% ifversion ghes %}/code-security/secret-scanning/working-with-secret-scanning-and-push-protection{% endif %}'
    - /code-security/getting-started/dependabot-quickstart-guide
    - /code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
  guideCards:
    - /code-security/trialing-github-advanced-security/planning-a-trial-of-ghas
    - /code-security/secret-scanning/enabling-secret-scanning-features
    - /code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
    - /code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates
    - /code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates
  popular: # Links aimed at the driver audience
    - '{% ifversion secret-risk-assessment %}/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/about-secret-risk-assessment{% endif %}'
    - '{% ifversion ghes %}/admin/release-notes{% endif %}'
    - /code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/about-coordinated-disclosure-of-security-vulnerabilities
    - /code-security/getting-started/best-practices-for-preventing-data-leaks-in-your-organization
    - /code-security/securing-your-organization/fixing-security-alerts-at-scale/best-practice-fix-alerts-at-scale
    - /code-security/dependabot/maintain-dependencies/best-practices-for-maintaining-dependencies
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
  - /trialing-github-advanced-security
  - /adopting-github-advanced-security-at-scale
  - /securing-your-organization
  - /secret-scanning
  - /code-scanning
  - /codeql-cli
  - /codeql-for-vs-code
  - /security-advisories
  - /supply-chain-security
  - /dependabot
  - /security-overview
---
