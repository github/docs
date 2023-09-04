---
title: Evaluating the security settings of a repository
intro: Security researchers can assess the security settings of a public repository, suggest a security policy and report a vulnerability.
permissions: Anyone can view a public repository's security settings, and contact the repository maintainers regarding security issues.
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Security advisories
  - Vulnerabilities
shortTitle: Evaluate repository security
redirect_from:
  - /code-security/security-advisories/repository-security-advisories/evaluating-the-security-settings-of-a-repository
---

## About evaluating a repository's security settings

Evaluating a public repository's security settings can help security researchers understand the repository's security posture. This information can help you decide whether to engage with the repository maintainers, for example, by reporting a vulnerability in the repository.

If a repository is public, high level information about the repository's security settings is available to anyone. For example, you can see whether the repository has a security policy, and whether private vulnerability reporting is enabled. You can also view published and closed security advisories for the repository. If no security policy is associated with a repository, you can suggest one. If the repository has private vulnerability reporting enabled, you can privately report security vulnerabilities directly to repository maintainers.

If you have admin permissions to the repository, and the repository is owned by an organization, you can see more detailed information about the repository's security settings through the security overview. For more information on the security overview, see "[AUTOTITLE](/enterprise-cloud@latest/code-security/security-overview/about-security-overview){% ifversion ghec %}."{% else %}" in the {% data variables.product.prodname_ghe_cloud %} documentation.{% endif %}

 If a repository is private, you can only see the security settings if you have admin permissions to the repository or have been granted special security permissions covering the repository, for example, as an organization-wide security manager.

## Suggesting a security policy for a repository

 If you do not have admin or security permissions for a public repository, you can still suggest a security policy to the repository maintainers if one doesn't already exist. The repository maintainers can then choose to accept or reject your suggestion. If the repository maintainers accept your suggestion, the security policy will be associated with the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. If the repository has a security policy, it will be displayed. If no security policy is associated with the repository, click **Suggest a policy**.
1. A SECURITY.md file will be created in the repository's default branch. The file will contain a template for a security policy. You can edit the file to add your suggested security policy.
1. When you are done, click **Commit changes**.
1. Fill out the **Commit changes** dialog.
    - Under "Commit message", enter a commit message.
    - Optionally, under "Extended description", describe the changes being made.
    - Select "Create a new branch for this commit and start a pull request"
    - Click **Commit changes**.
1. Click **Create pull request**.
1. Optionally, leave a comment.
1. Click **Create pull request**.

## Reporting a vulnerability in a repository

If you do not have admin or security permissions for a public repository, you can still privately report a security vulnerability to repository maintainers if private vulnerability reporting is enabled. The repository maintainers can then choose to accept or reject your report. If the repository maintainers accept your report, a security advisory will be created for the repository.

{% data reusables.security-advisory.private-vulnerability-reporting-disabled %}

{% data reusables.security-advisory.reporting-a-vulnerability-non-admin %}
