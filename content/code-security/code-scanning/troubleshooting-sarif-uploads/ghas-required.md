---
title: 'Upload fails because GitHub Advanced Security is disabled'
shortTitle: GitHub Advanced Security disabled
allowTitleToDifferFromFilename: true
intro: 'You can only upload SARIF results to {% ifversion fpt or ghec %}private or internal {% endif %}repositories where {% data variables.product.prodname_GH_advanced_security %} is enabled.'
type: reference
topics:
  - Code scanning
  - Errors
  - SARIF
  - Troubleshooting
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /code-security/code-scanning/troubleshooting-sarif/ghas-required
---

## About this error

```text
GitHub Advanced Security not enabled
GitHub Advanced Security blocked by a policy
403: GitHub Advanced Security is not enabled
```

This error is reported if a process attempts to upload a SARIF file to a repository where {% data variables.product.prodname_GH_advanced_security %} is not enabled or where use of this feature is blocked by a policy.

You will only see this error for SARIF files that contain results created using {% data variables.product.prodname_codeql %}{% ifversion fpt or ghec %} and for uploads to repositories with private or internal visibility. {% data variables.product.prodname_GH_advanced_security %} is enabled by default for all public repositories{% endif %}.

For information on how to confirm this error and fix the problem, see "[AUTOTITLE](/code-security/code-scanning/troubleshooting-code-scanning/advanced-security-must-be-enabled)."
