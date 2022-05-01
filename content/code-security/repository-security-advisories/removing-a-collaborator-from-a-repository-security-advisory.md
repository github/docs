---
title: Removing a collaborator from a repository security advisory
intro: 'When you remove a collaborator from a repository security advisory, they lose read and write access to the security advisory''s discussion and metadata.'
redirect_from:
  - /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
  - /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Remove collaborators
---

People with admin permissions to a security advisory can remove collaborators from the security advisory.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Removing a collaborator from a security advisory

{% data reusables.repositories.security-advisory-collaborators-public-repositories %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. In the "Security Advisories" list, click the security advisory you'd like to remove a collaborator from.
  ![Security advisory in list](/assets/images/help/security/security-advisory-in-list.png)
5. On the right side of the page, under "Collaborators", find the name of the user or team you'd like to remove from the security advisory.
  ![Security advisory collaborator](/assets/images/help/security/security-advisory-collaborator.png)
6. Next to the collaborator you want to remove, click the **X** icon.
  ![X icon to remove security advisory collaborator](/assets/images/help/security/security-advisory-remove-collaborator-x.png)

## Further reading

- "[Permission levels for repository security advisories](/code-security/repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[Adding a collaborator to a repository security advisory](/code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
