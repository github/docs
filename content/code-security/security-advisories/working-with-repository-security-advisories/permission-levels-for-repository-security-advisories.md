---
title: Permission levels for repository security advisories
intro: The actions you can take in a repository security advisory depend on whether you have admin or write permissions to the security advisory.
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
  - /code-security/security-advisories/permission-levels-for-security-advisories
  - /code-security/repository-security-advisories/permission-levels-for-repository-security-advisories
  - /code-security/security-advisories/repository-security-advisories/permission-levels-for-repository-security-advisories
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
shortTitle: Permission levels
---
This article applies only to repository-level security advisories. Anyone can contribute to global security advisories in the {% data variables.product.prodname_advisory_database %} at [github.com/advisories](https://github.com/advisories). Edits to global advisories will not change or affect how the advisory appears on the repository.  For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-global-security-advisories-from-the-github-advisory-database/editing-security-advisories-in-the-github-advisory-database)."

## Permissions overview

{% data reusables.repositories.security-advisory-admin-permissions %} For more information about adding a collaborator to a security advisory, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)."

Action | Write permissions | Admin permissions |
------ | ----------------- | ----------------- |
See a draft security advisory | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Add collaborators to the security advisory (see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)") | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
Edit and delete any comments in the security advisory | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Create a temporary private fork in the security advisory (see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
Add changes to a temporary private fork in the security advisory (see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Create pull requests in a temporary private fork (see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Merge changes in the security advisory (see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)") | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
Add and edit metadata in the security advisory (see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/publishing-a-repository-security-advisory)") | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Add and remove credits for a security advisory (see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/editing-a-repository-security-advisory)") | {% octicon "check" aria-label="Yes" %}  | {% octicon "check" aria-label="Yes" %}  |
Close the draft security advisory | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |
Publish the security advisory (see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/publishing-a-repository-security-advisory)") | {% octicon "x" aria-label="No" %} | {% octicon "check" aria-label="Yes" %}  |

## Further reading

- "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
- "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)"
- "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/withdrawing-a-repository-security-advisory)"
