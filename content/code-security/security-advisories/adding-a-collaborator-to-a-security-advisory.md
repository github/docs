---
title: Adding a collaborator to a security advisory
intro: You can add other users or teams to collaborate on a security advisory with you.
redirect_from:
  - /articles/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory
versions:
  free-pro-team: '*'
topics:
  - Security
---

People with admin permissions to a security advisory can add collaborators to the security advisory.

### Adding a collaborator to a security advisory

Collaborators have write permissions to the security advisory. For more information, see "[Permission levels for security advisories](/github/managing-security-vulnerabilities/permission-levels-for-security-advisories)."

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} For more information about removing a collaborator on a security advisory, see "[Removing a collaborator from a security advisory](/github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. In the "Security Advisories" list, click the security advisory you'd like to add a collaborator to.
5. On the right side of the page, under "Collaborators", type the name of the user or team you'd like to add to the security advisory.
  ![Field to type user or team name](/assets/images/help/security/add-collaborator-field.png)
6. Click **Add**.
  ![Add button](/assets/images/help/security/security-advisory-add-collaborator-button.png)

### Further reading

- "[Permission levels for security advisories](/github/managing-security-vulnerabilities/permission-levels-for-security-advisories)"
- "[Collaborating in a temporary private fork to resolve a security vulnerability](/github/managing-security-vulnerabilities/collaborating-in-a-temporary-private-fork-to-resolve-a-security-vulnerability)"
- "[Removing a collaborator from a security advisory](/github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory)"
