---
title: Adding a collaborator to a repository security advisory
intro: You can add other users or teams to collaborate on a security advisory with you.
redirect_from:
  - /articles/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/adding-a-collaborator-to-a-security-advisory
  - /code-security/security-advisories/adding-a-collaborator-to-a-security-advisory
  - /code-security/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory
  - /code-security/security-advisories/repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - Collaboration
shortTitle: Add collaborators
---

People with admin permissions to a security advisory can add collaborators to the security advisory.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Adding a collaborator to a security advisory

Collaborators have write permissions to the security advisory. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/permission-levels-for-repository-security-advisories)."

{% note %}

{% data reusables.repositories.security-advisory-collaborators-public-repositories %} For more information about removing a collaborator on a security advisory, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)."

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
1. In the "Security Advisories" list, click the security advisory you'd like to add a collaborator to.
1. On the right side of the page, under "Collaborators", type the name of the user or team you'd like to add to the security advisory.
1. Click **{% octicon "plus" aria-label="Add Collaborator" %}** to add the selected user or team as a collaborator.
   ![Screenshot of the "Collaborators" area in the right sidebar of a draft security advisory. The "Add collaborator" button, a plus icon, is outlined in dark orange.](/assets/images/help/security/security-advisory-add-collaborator-button.png)

## Further reading

- "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/permission-levels-for-repository-security-advisories)"
- "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)"
- "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/removing-a-collaborator-from-a-repository-security-advisory)."
