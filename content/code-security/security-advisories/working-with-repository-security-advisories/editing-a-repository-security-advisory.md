---
title: Editing a repository security advisory
intro: You can edit the metadata and description for a repository security advisory if you need to update details or correct errors.
permissions: Anyone with admin permissions to a repository security advisory, or with a security manager role within the repository, can edit the security advisory.
redirect_from:
  - /github/managing-security-vulnerabilities/editing-a-security-advisory
  - /code-security/security-advisories/editing-a-security-advisory
  - /code-security/repository-security-advisories/editing-a-repository-security-advisory
  - /code-security/security-advisories/repository-security-advisories/editing-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Edit repository advisories
---

{% data reusables.security-advisory.repository-level-advisory-note %}

## Editing a security advisory

{% ifversion repository-security-advisories-API %}
You can also use the REST API to edit repository security advisories. For more information, see "[AUTOTITLE](/rest/security-advisories/repository-advisories)".
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
1. In the "Security Advisories" list, click the name of the security advisory you'd like to edit.
1. In the upper-right corner of the details for the security advisory, click **Edit advisory**. This will open the security advisory form in edit mode.
{% data reusables.repositories.security-advisory-edit-cve %}
{% data reusables.repositories.security-advisory-edit-description %}
{% data reusables.repositories.security-advisory-edit-details %}
{% data reusables.repositories.security-advisory-edit-severity %}
{% data reusables.repositories.security-advisory-edit-cwe %}
1. Optionally, under "Credits", remove existing credits, or use the search box to find additional people you want to credit on the security advisory, then click their username to add them.
{% ifversion security-advisories-credit-types %}
   * Use the dropdown menu next to the name of the person you're crediting to assign a credit type. For more information about credit types, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory#about-credits-for-repository-security-advisories)."

     ![Screenshot of a draft security advisory. A dropdown menu, labeled "Choose a credit type," is highlighted with an orange outline.](/assets/images/help/security/security-advisories-choose-credit-type.png)

   * Optionally, to remove someone, click the {% octicon "x" aria-label="The icon to remove a credit to someone" %} next to the credit type.{% endif %}
1. Click **Update security advisory**.

{% data reusables.repositories.security-advisory-credits-notification %}

## Further reading

* "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/deleting-a-repository-security-advisory)"
