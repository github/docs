---
title: Running CodeQL runner in your CI system
shortTitle: Run CodeQL runner
intro: 'You can use the {% data variables.code-scanning.codeql_runner %} to perform {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} in a third-party continuous integration system.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-code-scanning-in-your-ci-system
  - /github/finding-security-vulnerabilities-and-errors-in-your-code/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-code-scanning-in-your-ci-system
  - /code-security/secure-coding/running-codeql-runner-in-your-ci-system
  - /code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/running-codeql-runner-in-your-ci-system
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
  - Repositories
  - Pull requests
  - Integration
  - CI
  - SARIF
---

## About the {% data variables.code-scanning.codeql_runner %}

The {% data variables.code-scanning.codeql_runner %} has been deprecated. [{% data variables.product.prodname_codeql_cli %}](https://github.com/github/codeql-cli-binaries/releases) version 2.7.6 has complete feature parity.

For information on migrating to {% data variables.product.prodname_codeql_cli %}, see "[Migrating from the CodeQL runner to CodeQL CLI](/code-security/code-scanning/using-codeql-code-scanning-with-your-existing-ci-system/migrating-from-the-codeql-runner-to-codeql-cli)."

## Further reading

- [CodeQL runner deprecation](https://github.blog/changelog/2021-09-21-codeql-runner-deprecation/) in the GitHub Blog
