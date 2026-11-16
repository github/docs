---
title: Privately reporting a security vulnerability
intro: Some public repositories configure security advisories so that anyone can report security vulnerabilities directly and privately to the maintainers.
versions:
  fpt: '*'
  ghec: '*'
contentType: how-tos
permissions: '**Anyone** can privately report a security vulnerability to repository maintainers.'
shortTitle: Report privately
redirect_from:
  - /code-security/security-advisories/guidance-on-reporting-and-writing/privately-reporting-a-security-vulnerability
  - /code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability
  - /code-security/security-advisories/repository-security-advisories/evaluating-the-security-settings-of-a-repository
  - /code-security/security-advisories/working-with-repository-security-advisories/evaluating-the-security-settings-of-a-repository
  - /code-security/how-tos/report-and-fix-vulnerabilities/report-a-vulnerability/evaluating-the-security-settings-of-a-repository
  - /code-security/how-tos/report-and-fix-vulnerabilities/report-a-vulnerability
  - /code-security/how-tos/report-and-fix-vulnerabilities/report-a-vulnerability/privately-reporting-a-security-vulnerability
  - /code-security/how-tos/report-and-fix-vulnerabilities/privately-reporting-a-security-vulnerability
category:
  - Report and disclose vulnerabilities
---

{% data reusables.security-advisory.private-vulnerability-reporting-enable %}

> [!NOTE]
> * If you have admin or security permissions for a public repository, you don’t need to submit a vulnerability report. Instead, create a draft security advisory directly. See [AUTOTITLE](/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/create-repository-advisory).
> * Private vulnerability reporting is separate from a repository’s `SECURITY.md` file. You can only report vulnerabilities privately for repositories where this feature is enabled. If the repository has a security policy, the policy is displayed above the reporting form so you can review the maintainer's guidance before submitting.

If a public repository has private vulnerability reporting enabled, anyone can submit a private vulnerability report to the repository maintainers.

If the repository doesn't have private vulnerability reporting enabled, you need to initiate the reporting process by following the instructions in the security policy for the repository, or by creating an issue asking the maintainers for a preferred security contact. See [AUTOTITLE](/code-security/concepts/vulnerability-reporting-and-management/coordinated-disclosure#about-reporting-and-disclosing-vulnerabilities-in-projects-on-github).

{% data reusables.security-advisory.reporting-a-vulnerability-non-admin %}

The next steps depend on the action taken by the repository maintainer. See [AUTOTITLE](/code-security/how-tos/report-and-fix-vulnerabilities/fix-reported-vulnerabilities/manage-vulnerability-reports).

## Rate limits for private vulnerability reports

To protect maintainers from spam and abuse, {% data variables.product.github %} limits the number of private vulnerability reports that you can submit:

* You can submit a maximum of 25 reports per 24-hour period across repositories where you are not a trusted reporter.
* You can submit a maximum of 5 reports to a single repository per 24-hour period.
* By default, a repository accepts a maximum of 10 reports per 24-hour period from all reporters combined.

Repository maintainers can set a lower or higher total limit for their repository and exempt trusted reporters. Reports to a repository where you are a trusted reporter are exempt from that repository's limits and do not count toward your global 25-report limit. Reports to other repositories still count toward both the global limit and each repository's limits.

If you reach a rate limit, you will see a message when you try to submit a new report on {% data variables.product.github %}. Each 24-hour period starts with the first report that counts toward that limit, and the limit resets in full when the period ends.
