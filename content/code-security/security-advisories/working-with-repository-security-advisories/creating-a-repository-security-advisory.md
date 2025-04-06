---
title: Creating a repository security advisory
intro: You can create a draft security advisory to privately discuss and fix a security vulnerability in your open source project.
permissions: Anyone with admin permissions to a public repository, or with a security manager role within the repository, can create a security advisory.
redirect_from:
  - /articles/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/creating-a-security-advisory
  - /code-security/security-advisories/creating-a-security-advisory
  - /code-security/repository-security-advisories/creating-a-repository-security-advisory
  - /code-security/security-advisories/repository-security-advisories/creating-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Create repository advisories
---

{% data reusables.security-advisory.security-researcher-cannot-create-advisory %}

## Creating a security advisory

{% ifversion repository-security-advisories-API %}
You can also use the REST API to create repository security advisories. For more information, see "[AUTOTITLE](/rest/security-advisories/repository-advisories)."
{% endif %}

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
1. Optionally, under "Credits", add credits by searching for a {% data variables.product.prodname_dotcom %} username, the email address associated with their {% data variables.product.prodname_dotcom %} account, or their full name.
{% ifversion security-advisories-credit-types %}
   * Use the dropdown menu next to the name of the person you're crediting to assign a credit type. For more information about credit types, see the [About credits for repository security advisories](#about-credits-for-repository-security-advisories) section.

     ![Screenshot of a draft security advisory. A dropdown menu, labeled "Choose a credit type," is highlighted with an orange outline.](/assets/images/help/security/security-advisories-choose-credit-type.png)

   * Optionally, to remove someone, click {% octicon "x" aria-label="The icon to remove someone's credit" %} next to the credit type.{% endif %}
1. Click **Create draft security advisory**.

{% data reusables.repositories.security-advisory-credits-notification %}

### About credits for repository security advisories

You can credit people who helped discover, report, or fix a security vulnerability. If you credit someone, they can choose to accept or decline credit.

{% ifversion security-advisories-credit-types %}

You can assign different types of credit to people.

| Credit type           | Reason                                                                                     |
|-----------------------|--------------------------------------------------------------------------------------------|
| Finder                | Identifies the vulnerability                                                               |
| Reporter              | Notifies the vendor of the vulnerability to a CNA                                          |
| Analyst               | Validates the vulnerability to ensure accuracy or severity                                 |
| Coordinator           | Facilitates the coordinated response process                                               |
| Remediation developer | Prepares a code change or other remediation plans                                          |
| Remediation reviewer  | Reviews vulnerability remediation plans or code changes for effectiveness and completeness |
| Remediation verifier  | Tests and verifies the vulnerability or its remediation                                    |
| Tool                  | Names of tools used in vulnerability discovery or identification                           |
| Sponsor               | Supports the vulnerability identification or remediation activities                        |

{% endif %}

If someone accepts credit, the person's username appears in the "Credits" section of the security advisory. Anyone with read access to the repository can see the advisory and the people who accepted credit for it.

{% note %}

**Note:** If you believe you should be credited for a security advisory, please contact the creator of the advisory and to ask for the advisory to be edited to include your credit. Only the creator of the advisory can credit you, so please don't contact {% data variables.product.company_short %} Support about credits for security advisories.

{% endnote %}

## Next steps

* Comment on the draft security advisory to discuss the vulnerability with your team.
* Add collaborators to the security advisory. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/adding-a-collaborator-to-a-repository-security-advisory)."
* Privately collaborate to fix the vulnerability in a temporary private fork. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)."
* Add individuals who should receive credit for contributing to the security advisory. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/editing-a-repository-security-advisory#about-credits-for-security-advisories)."
* Publish the security advisory to notify your community of the security vulnerability. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/publishing-a-repository-security-advisory)."
