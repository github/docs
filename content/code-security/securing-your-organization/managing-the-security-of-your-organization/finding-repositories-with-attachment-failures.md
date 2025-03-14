---
title: Finding and fixing configuration attachment failures
shortTitle: Find attachment failures
allowTitleToDifferFromFilename: true
intro: 'You can identify any repositories where the security configuration could not be attached, and follow guidance to remediate the problem.'
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
---

## Finding and remediating attachment failures

When you apply a configuration to a group of repositories, you may see a banner reporting that there was an attachment failure for some repositories. This happens when there is a conflict between the existing repository settings and the configuration that you applied.

When an attachment failure happens:
* Only some of the settings in the security configuration are applied to affected repositories.
* Any changes you later make to the security configuration will not be inherited by the affected repositories.

On the security configuration settings page, under "Apply configurations", you will see a banner advising how many repositories in your organization have an attachment failure, and an overview of the reason(s) for the failure.

Click the link in the banner display, or alternatively, filter the list of repositories by `config-status:failed`, to see the list of affected repositories and to source additional guidance on how to remediate the attachment failure for a specific repository.

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. In the "Apply configurations" section, filter by `config-status:failed`.
1. From the results list, for the repository you're interested in, click **{% octicon "alert" aria-hidden="true" %} Failed REASON**.
1. In the dialog box, review the information and follow the remediation guidance.

## Further reading

* [AUTOTITLE](/code-security/securing-your-organization/troubleshooting-security-configurations/a-repository-is-using-advanced-setup-for-code-scanning)
* [AUTOTITLE](/code-security/securing-your-organization/troubleshooting-security-configurations/not-enough-github-advanced-security-licenses)
