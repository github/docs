---
title: Managing privately reported security vulnerabilities
intro: Repository maintainers can manage security vulnerabilities that have been privately reported to them by security reseachers for repositories where private vulnerability reporting is enabled.
permissions: 'Anyone with admin permissions to a repository can see, review, and manage privately-reported vulnerabilities for the repository.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Manage vulnerability reports
---

{% data reusables.security-advisory.private-vulnerability-reporting-beta %}

{% data reusables.security-advisory.private-vulnerability-reporting-enable %}

## About privately reporting a security vulnerability

Private vulnerability reporting makes it easy for security researchers to report vulnerabilities directly to you using a simple form. 

When a security researcher reports a vulnerability privately, you are notified and can choose to either accept it, ask more questions, or reject it. If you accept the report, you're ready to collaborate on a fix for the vulnerability in private with the security researcher.

## Managing security vulnerabilities that are privately reported

{% data variables.product.prodname_dotcom %} notifies repository maintainers when security researchers privately report vulnerabilities in their repository, and sends notifications if maintainers watch the repository or if they have notifications enabled for the repository. For more information, see "[Configuring notifications](/account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications)."

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.sidebar-advisories %}
1. Click the advisory you want to review. An advisory that is privately reported will have a status of `Needs triage`.
  
   ![Screenshot showing an example of advisory list](/assets/images/help/security/advisory-list.png)
   
2. Carefully review the report. You can:
   - Collaborate with the security researcher on a patch in private, by clicking **Start a temporary private fork**. This gives you a place for further discussions with the contributor without changing the status of the proposed advisory from `Needs triage`.
   - Accept the vulnerability report as a draft advisory on {% data variables.product.prodname_dotcom %}, by clicking **Accept and open as draft**. If you choose this option:
      - This doesn't make the report public.
      - The report becomes a draft repository security advisory and you can work on it in the same way as any draft advisory that you create.
     For more information on security advisories, see "[About repository security advisories](/code-security/security-advisories/repository-security-advisories/about-repository-security-advisories)."
   - Reject the report by clicking **Close security advisory**. Where possible, you should add a comment explaining why you don't consider the report a security risk before you close the advisory.

     ![Screenshot showing the options available to the repository maintainer when reviewing an externally submitted vulnerability report](/assets/images/help/security/advisory-maintainer-options.png)