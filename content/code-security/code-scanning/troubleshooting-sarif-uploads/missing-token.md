---
title: 'GitHub token is required to upload SARIF results'
shortTitle: GitHub token missing
allowTitleToDifferFromFilename: true
intro: 'You need to provide an authentication method for the upload process to use to access the repository.'
type: reference
topics:
  - Code scanning
  - Errors
  - SARIF
  - Troubleshooting
versions:
  feature: code-scanning-tool-status-page
redirect_from:
  - /code-security/code-scanning/troubleshooting-sarif/missing-token
---

## About this error

```text
A GitHub token is required to upload SARIF results but none was specified
```

This error is reported if the upload process does not reference an authentication method, or if that method has the wrong permission. The permissions required to upload SARIF file to a repository are the same no matter what process you use to upload the data.

- Fine-grained {% data variables.product.pat_generic_plural %} require `write` scope for the repository.
- Classic {% data variables.product.pat_generic_plural %} require `security_events` scope for the repository{% ifversion fpt or ghec %} for private or internal repositories. You can use tokens with the `public_repo` scope for public repositories.{% endif %}
- {% data variables.product.prodname_github_apps %} require `security_events` scope for the repository.

You could see this error for SARIF files created using any tool and uploaded using any method.

## Fixing the problem

Create a new {% data variables.product.pat_generic %} or {% data variables.product.prodname_github_app %} with the correct permission. For more information see, "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)", or "[AUTOTITLE](/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app)" and  "[AUTOTITLE](/apps/creating-github-apps/about-creating-github-apps/deciding-when-to-build-a-github-app)."
