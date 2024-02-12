---
title: Managing privately reported security vulnerabilities
intro: Repository maintainers can manage security vulnerabilities that have been privately reported to them by security reseachers for repositories where private vulnerability reporting is enabled.
permissions: 'Anyone with admin permissions to a repository can see, review, and manage privately-reported vulnerabilities for the repository.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Manage vulnerability reports
redirect_from:
  - /code-security/security-advisories/guidance-on-reporting-and-writing/managing-privately-reported-security-vulnerabilities
---

{% data reusables.security-advisory.private-vulnerability-reporting-enable %}

## About privately reporting a security vulnerability

Private vulnerability reporting makes it easy for security researchers to report vulnerabilities directly to you using a simple form.

When a security researcher reports a vulnerability privately, you are notified and can choose to either accept it, ask more questions, or reject it. If you accept the report, you're ready to collaborate on a fix for the vulnerability in private with the security researcher.

## Managing security vulnerabilities that are privately reported

{% data reusables.security-advisory.private-vulnerability-reporting-configure-notifications %}

For more information about configuring notification preferences, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/configuring-private-vulnerability-reporting-for-a-repository#configuring-notifications-for-private-vulnerability-reporting)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
1. Click the advisory you want to review. An advisory that was reported privately has a status of `Triage`.

   ![Screenshot of a "Security Advisories" list.](/assets/images/help/security/advisory-list.png)

1. Carefully review the report, then choose how to proceed.
   - To collaborate on a patch in private, click **Start a temporary private fork** to create a place for further discussions with the contributor. This does not change the status of the proposed advisory from `Triage`.
   - To accept the reported vulnerability, click **Accept and open as draft** to accept the vulnerability report as a draft advisory on {% data variables.product.prodname_dotcom %}. If you choose this option:
      - This doesn't make the report public.
      - The report becomes a draft repository security advisory and you can work on it in the same way as any draft advisory that you create.
     For more information on security advisories, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/about-repository-security-advisories)."
   - To ask for more information, or to open a discussion with the reporter, you can comment on the advisory. Any comments are visible only to the reporter and to any collaborators on the advisory.
   - If you have enough information to determine that the problem the reporter describes is not a security risk, click **Close security advisory**. Where possible, you should add a comment explaining why you don't consider the report a security risk before you close the advisory.

     ![Screenshot showing the options available to the repository maintainer when reviewing an externally submitted vulnerability report.](/assets/images/help/security/advisory-maintainer-options.png)
