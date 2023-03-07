---
title: Creating a repository security advisory
intro: You can create a draft security advisory to privately discuss and fix a security vulnerability in your open source project.
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-security-advisory
  - /code-security/security-advisories/creating-a-security-advisory
  - /code-security/repository-security-advisories/creating-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Create repository advisories
---

Anyone with admin permissions to a repository can create a security advisory.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Creating a security advisory

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
1. Click **New draft security advisory** to open the draft advisory form. The fields marked with an asterisk are required.
1. In the **Title** field, type a title for your security advisory.
{% data reusables.repositories.security-advisory-edit-cve %}
{% data reusables.repositories.security-advisory-edit-description %}
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-severity %}
{% data reusables.repositories.security-advisory-edit-cwe %}
1.  Optionally, under "Credits", use the search box to type the username, full name or email of a person you want to credit on the security advisory, then click on their username to add them.
1. Click **Create draft security advisory** to create a draft security advisory.
{% data reusables.repositories.security-advisory-credits-notification %}

## Next steps

- Comment on the draft security advisory to discuss the vulnerability with your team.
- Add collaborators to the security advisory. For more information, see "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)."
- Privately collaborate to fix the vulnerability in a temporary private fork. For more information, see "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)."
- Add individuals who should receive credit for contributing to the security advisory. For more information, see "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)."
- Publish the security advisory to notify your community of the security vulnerability. For more information, see "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/publishing-a-repository-security-advisory)."
