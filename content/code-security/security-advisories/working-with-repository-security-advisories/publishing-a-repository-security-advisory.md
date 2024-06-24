---
title: Publishing a repository security advisory
intro: You can publish a security advisory to alert your community about a security vulnerability in your project.
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-security-advisory
  - /code-security/security-advisories/publishing-a-security-advisory
  - /code-security/repository-security-advisories/publishing-a-repository-security-advisory
  - /code-security/security-advisories/repository-security-advisories/publishing-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
  - Repositories
shortTitle: Publish repository advisories
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Publishing a security advisory".-->

Anyone with admin permissions to a security advisory can publish the security advisory.

{% data reusables.security-advisory.repository-level-advisory-note %}

## Prerequisites

Before you can publish a security advisory or request a CVE identification number, you must create a draft security advisory and provide information about the versions of your project affected by the security vulnerability. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory)."

If you've created a security advisory but haven't yet provided details about the versions of your project that the security vulnerability affects, you can edit the security advisory. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/editing-a-repository-security-advisory)."

## About publishing a security advisory

When you publish a security advisory, you notify your community about the security vulnerability that the security advisory addresses. Publishing a security advisory makes it easier for your community to update package dependencies and research the impact of the security vulnerability.

{% data reusables.repositories.security-advisories-republishing %}

Before you publish a security advisory, you can privately collaborate to fix the vulnerability in a temporary private fork. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/collaborating-in-a-temporary-private-fork-to-resolve-a-repository-security-vulnerability)."

{% warning %}

**Warning**: Whenever possible, you should always add a fix version to a security advisory prior to publishing the advisory. If you don't, the advisory will be published without a fixed version, and {% data variables.product.prodname_dependabot %} will alert your users about the issue, without offering any safe version to update to.

We recommend you take the following steps in these different situations:

* If a fix version is imminently available, and you are able to, wait to disclose the issue when the fix is ready.
* If a fix version is in development but not yet available, mention this in the advisory, and edit the advisory later, after publication.
* If you are not planning to fix the issue, be clear about it in the advisory so that your users don't contact you to ask when a fix will be made. In this case, it is helpful to include steps users can take to mitigate the issue.

{% endwarning %}

When you publish a draft advisory from a public repository, everyone is able to see:

* The current version of the advisory data.
* Any advisory credits that the credited users have accepted.

{% note %}

**Note**: The general public will never have access to the edit history of the advisory, and will only see the published version.

{% endnote %}

After you publish a security advisory, the URL for the security advisory will remain the same as before you published the security advisory. Anyone with read access to the repository can see the security advisory. Collaborators on the security advisory can continue to view past conversations, including the full comment stream, in the security advisory unless someone with admin permissions removes the collaborator from the security advisory.

If you need to update or correct information in a security advisory that you've published, you can edit the security advisory. For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/editing-a-repository-security-advisory)."

## Publishing a security advisory

Publishing a security advisory deletes the temporary private fork for the security advisory.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
1. In the "Security Advisories" list, click the name of the security advisory you'd like to publish.
1. Scroll to the bottom of the advisory form and click **Publish advisory**.

   ![Screenshot of the "Required advisory information has been provided" area of a draft security advisory. The "Publish advisory" button is outlined in dark orange.](/assets/images/help/security/publish-advisory-button.png)

  {% note %}

  **Note:** If you selected "Request CVE ID later", you will see a **Request CVE** button in place of the **Publish advisory** button. For more information, see "[Requesting a CVE identification number (Optional)](#requesting-a-cve-identification-number-optional)" below.

  {% endnote %}

## {% data variables.product.prodname_dependabot_alerts %} for published security advisories

{% data reusables.repositories.github-reviews-security-advisories %}

## Requesting a CVE identification number (Optional)

{% data reusables.repositories.request-security-advisory-cve-id %} For more information, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories#cve-identification-numbers)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
1. In the "Security Advisories" list, click the name of the security advisory you'd like to request a CVE identification number for.
1. Scroll to the bottom of the advisory form and click **Request CVE**.

   ![Screenshot of the "Required advisory information has been provided" area of a draft security advisory. The "Request CVE" button is outlined in dark orange.](/assets/images/help/security/security-advisory-request-cve-button.png)

## Further reading

* "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/deleting-a-repository-security-advisory)"
