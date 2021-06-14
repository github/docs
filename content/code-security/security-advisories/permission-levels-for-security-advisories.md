---
title: Permission levels for security advisories
intro: The actions you can take in a security advisory depend on whether you have admin or write permissions to the security advisory.
redirect_from:
  - /articles/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-maintainer-security-advisories
  - /github/managing-security-vulnerabilities/permission-levels-for-security-advisories
versions:
  free-pro-team: '*'
type: reference
topics:
  - Security advisories
  - Vulnerabilities
  - Permissions
---

## Permissions overview

{% data reusables.repositories.security-advisory-admin-permissions %} For more information about adding a collaborator to a security advisory, see "[Adding a collaborator to a security advisory](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)."

Action | Write permissions | Admin permissions |
------ | ----------------- | ----------------- |
See a draft security advisory | X | X |
Add collaborators to the security advisory (see "[Adding a collaborator to a security advisory](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)") | | X |
Edit and delete any comments in the security advisory | X | X |
Create a temporary private fork in the security advisory (see "[Collaborating in a temporary private fork to resolve a security vulnerability](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)") | | X |
Add changes to a temporary private fork in the security advisory (see "[Collaborating in a temporary private fork to resolve a security vulnerability](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)") | X | X |
Create pull requests in a temporary private fork (see "[Collaborating in a temporary private fork to resolve a security vulnerability](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)") | X | X |
Merge changes in the security advisory (see "[Collaborating in a temporary private fork to resolve a security vulnerability](/articles/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)") | | X |
Add and edit metadata in the security advisory (see "[Publishing a security advisory](/github/managing-security-vulnerabilities/publishing-a-security-advisory)") | X | X |
Add and remove credits for a security advisory (see "[Editing a security advisory](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)") | X | X |
Close the draft security advisory | | X |
Publish the security advisory (see "[Publishing a security advisory](/github/managing-security-vulnerabilities/publishing-a-security-advisory)") | | X |

## Further reading

- "[Adding a collaborator to a security advisory](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory)"
- "[Collaborating in a temporary private fork to resolve a security vulnerability](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)"
- "[Removing a collaborator from a security advisory](/github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory)"
- "[Withdrawing a security advisory](/github/managing-security-vulnerabilities/withdrawing-a-security-advisory)"
