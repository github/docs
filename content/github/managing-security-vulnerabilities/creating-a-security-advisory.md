---
title: Creating a security advisory
intro: You can create a draft security advisory to privately discuss and fix a security vulnerability in your open source project.
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
versions:
  free-pro-team: '*'
---

Anyone with admin permissions to a repository can create a security advisory.

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

### Creating a security advisory

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. Click **New draft security advisory**.
  ![Open draft advisory button](/assets/images/help/security/security-advisory-new-draft-security-advisory-button.png)
5. Type a title for your security advisory.
  ![Title field](/assets/images/help/security/security-advisory-title.png)
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-description %}
8. Click **Create security advisory**.
  ![Create security advisory button](/assets/images/help/security/security-advisory-create-security-advisory-button.png)

### Next steps

- Comment on the draft security advisory to discuss the vulnerability with your team.
- Add collaborators to the security advisory. For more information, see "[Adding a collaborator to a security advisory](/github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory)."
- Privately collaborate to fix the vulnerability in a temporary private fork. For more information, see "[Collaborating in a temporary private fork to resolve a security vulnerability](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)."
- Add individuals who should receive credit for contributing to the security advisory. For more information, see "[Editing a security advisory](/github/managing-security-vulnerabilities/editing-a-security-advisory#about-credits-for-security-advisories)."
- Publish the security advisory to notify your community of the security vulnerability. For more information, see "[Publishing a security advisory](/github/managing-security-vulnerabilities/publishing-a-security-advisory)."
