---
title: Publishing a repository security advisory
intro: You can publish a security advisory to alert your community about a security vulnerability in your project.
permissions: '{% data reusables.permissions.security-repo-enable %}'
redirect_from:
  - /articles/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-maintainer-security-advisory
  - /github/managing-security-vulnerabilities/publishing-a-security-advisory
  - /code-security/security-advisories/publishing-a-security-advisory
  - /code-security/repository-security-advisories/publishing-a-repository-security-advisory
  - /code-security/security-advisories/repository-security-advisories/publishing-a-repository-security-advisory
  - /code-security/security-advisories/working-with-repository-security-advisories/publishing-a-repository-security-advisory
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
topics:
  - Security advisories
  - Vulnerabilities
  - CVEs
  - Repositories
shortTitle: Publish repository advisory
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Publishing a security advisory".-->

{% data reusables.security-advisory.repository-level-advisory-note %}

## Prerequisites

Before you can publish a security advisory or request a CVE identification number, you must create a draft security advisory and provide information about the versions of your project affected by the security vulnerability. See [AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/creating-a-repository-security-advisory) and [AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/editing-a-repository-security-advisory).

## Publishing a security advisory

> [!WARNING]
> Whenever possible, you should add a fix version to a security advisory prior to publishing the advisory. If you don't, the advisory will be published without a fixed version, and {% data variables.product.prodname_dependabot %} will alert your users about the issue without offering any safe version to update to.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
1. In the "Security Advisories" list, click the name of the security advisory you'd like to publish.
1. Scroll to the bottom of the advisory form and click **Publish advisory**.
    * If you selected "Request CVE ID later", you will see a **Request CVE** button in place of the **Publish advisory** button.

   ![Screenshot of the "Required advisory information has been provided" area of the page. The "Publish advisory" button is outlined in orange.](/assets/images/help/security/publish-advisory-button.png)

  > [!NOTE]
  > Publishing a security advisory deletes the temporary private fork for the security advisory.

## Requesting a CVE identification number (Optional)

If you don't already have a CVE identification number for a security vulnerability in your project, you can request one from {% data variables.product.github %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
1. In the "Security Advisories" list, click the name of the security advisory you'd like to request a CVE identification number for.
1. Scroll to the bottom of the advisory form and click **Request CVE**.

   ![Screenshot of the "Required advisory information has been provided" area of the page. The "Request CVE" button is outlined in dark orange.](/assets/images/help/security/security-advisory-request-cve-button.png)

## Further reading

* [AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/deleting-a-repository-security-advisory)
