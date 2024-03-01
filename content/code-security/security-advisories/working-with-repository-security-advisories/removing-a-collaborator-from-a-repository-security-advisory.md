---
title: Removing a collaborator from a repository security advisory
intro: 'When you remove a collaborator from a repository security advisory, they lose read and write access to the security advisory''s discussion and metadata.'
redirect_from:
  - /github/managing-security-vulnerabilities/removing-a-collaborator-from-a-security-advisory
  - /code-security/security-advisories/removing-a-collaborator-from-a-security-advisory
  - /code-security/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory
  - /code-security/security-advisories/repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory
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
1. In the "Security Advisories" list, click the name of the security advisory you'd like to remove a collaborator from.
1. On the right side of the page, under "Collaborators", find the name of the user or team you'd like to remove from the security advisory.
1. Next to the collaborator you want to remove, click **Remove**.

   ![Screenshot of the "Collaborators" area in the right sidebar of a draft security advisory. The "Remove username" button is outlined in dark orange.](/assets/images/help/security/security-advisory-remove-collaborator.png)

## Further reading

- "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)"
