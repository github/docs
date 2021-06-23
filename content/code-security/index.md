---
title: Code security
shortTitle: Code security
intro: 'Build security into your {% data variables.product.prodname_dotcom %} workflow with features to keep secrets and vulnerabilities out of your codebase{% if currentVersion != "github-ae@latest" %}, and to maintain your software supply chain{% endif %}.'

introLinks:
  overview: /code-security/getting-started/github-security-features

featuredLinks:
  guides:
    - /code-security/getting-started/securing-your-repository
    - /code-security/getting-started/securing-your-organization
    - '{% if currentVersion == "free-pro-team@latest" %}/code-security/security-advisories/creating-a-security-advisory{% endif %}'
    - '{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository{% endif%}'

  guideCards:
    - '{% if currentVersion == "free-pro-team@latest" %}/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates{% endif %}'
    - '{% if currentVersion == "free-pro-team@latest" %}/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/enabling-and-disabling-version-updates{% endif %}'
    - '{% if currentVersion == "free-pro-team@latest" %}/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository{% endif %}'

    - '{% if enterpriseServerVersions contains currentVersion %}/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository{% endif %}'
    - '{% if enterpriseServerVersions contains currentVersion %}/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-notifications-for-vulnerable-dependencies{% endif %}'

    - '{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}/code-security/secret-security/configuring-secret-scanning-for-your-repositories{% endif %}'
    - '{% if currentVersion == "github-ae@latest" %}/code-security/secure-coding/integrating-with-code-scanning/uploading-a-sarif-file-to-github{% endif %}'
    - '{% if currentVersion == "github-ae@latest" %}/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system{% endif %}'

  popular:
    - '{% if enterpriseServerVersions contains currentVersion %}/admin/release-notes{% endif %}'
    - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
    - /code-security/security-advisories/about-coordinated-disclosure-of-security-vulnerabilities
    - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/keeping-your-actions-up-to-date-with-dependabot
    - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates
    - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot
    - '{% if currentVersion == "github-ae@latest" %}/code-security/secret-security/about-secret-scanning{% endif %}'
    - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies
    - '{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-the-codeql-workflow-for-compiled-languages{% endif %}'
    - '{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/troubleshooting-the-codeql-workflow{% endif %}'
    - '{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/running-codeql-code-scanning-in-a-container{% endif %}'

changelog:
  label: 'security-and-compliance'
  versions:
    free-pro-team: '*'

examples_source: data/product-examples/code-security/code-examples.yml

layout: product-landing

versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Repositories
  - Dependencies
  - Vulnerabilities
children:
  - /getting-started
  - /secret-security
  - /secure-coding
  - /security-advisories
  - /supply-chain-security
  - /security-overview
  - /guides

---
