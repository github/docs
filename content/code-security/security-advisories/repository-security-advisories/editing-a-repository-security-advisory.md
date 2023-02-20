---
title: Editing a repository security advisory
intro: You can edit the metadata and description for a repository security advisory if you need to update details or correct errors.
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
  - /code-security/security-advisories/editing-a-security-advisory
  - /code-security/repository-security-advisories/editing-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Edit repository advisories
---

People with admin permissions to a repository security advisory can edit the security advisory.

{% data reusables.security-advisory.repository-level-advisory-note %}

## About credits for security advisories

You can credit people who helped discover, report, or fix a security vulnerability. If you credit someone, they can choose to accept or decline credit.

If someone accepts credit, the person's username appears in the "Credits" section of the security advisory. Anyone with read access to the repository can see the advisory and the people who accepted credit for it.

If you believe you should be credited for a security advisory, please contact the person who created the advisory and ask them to edit the advisory to include your credit. Only the creator of the advisory can credit you, so please don't contact GitHub Support about credits for security advisories.

## Editing a security advisory

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
4. In the "Security Advisories" list, click the name of the security advisory you'd like to edit.
5. In the upper-right corner of the details for the security advisory, click **Edit advisory**. This will open the security advisory form in edit mode.
{% data reusables.repositories.security-advisory-edit-cve %}
{% data reusables.repositories.security-advisory-edit-description %}
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-severity %}
{% data reusables.repositories.security-advisory-edit-cwe %}
1.  Optionally, under "Credits", remove existing credits, or use the search box to find additional people you want to credit on the security advisory, then click on their username to add them. 
1.  Click **Update security advisory** to save your changes to the security advisory.
{% data reusables.repositories.security-advisory-credits-notification %}

## Further reading

- "[AUTOTITLE](/code-security/security-advisories/repository-security-advisories/withdrawing-a-repository-security-advisory)"
