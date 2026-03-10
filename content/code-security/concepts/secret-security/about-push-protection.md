---
title: About push protection
intro: Secure your secrets by stopping them from ever reaching your repository with push protection.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
  - /code-security/secret-scanning/protecting-pushes-with-secret-scanning
  - /code-security/secret-scanning/push-protection-for-repositories-and-organizations
  - /code-security/secret-scanning/introduction/about-push-protection
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
shortTitle: Push protection
contentType: concepts
---

## What is push protection?

Push protection is a {% data variables.product.prodname_secret_scanning %} feature designed to prevent sensitive information, such as secrets or tokens, from ever being pushed to your repository. Unlike {% data variables.product.prodname_secret_scanning %}, which detects secrets after they have been committed, push protection proactively scans your code for secrets during the push process, then blocks the push if any are detected.

## How push protection works

Push protection blocks secrets detected in:

* Pushes from the command line
* Commits made in the {% data variables.product.prodname_dotcom %} UI{% ifversion push-protection-delegated-bypass-file-upload-support %}
* File uploads to a repository on {% data variables.product.github %}{% endif %}{% ifversion secret-scanning-push-protection-content-endpoints %}
* Requests to the REST API{% endif %}
* Interactions with the {% data variables.product.github %} MCP server (public repositories only)

When push protection detects a potential secret during a push attempt, it will block the push and provide a detailed message explaining the reason for the block. You will need to review the code in question, remove any sensitive information, and reattempt the push.

## Types of push protection

There are two types of push protection:

* [Push protection for repositories](#push-protection-for-repositories)
* [Push protection for users](#push-protection-for-users)

### Push protection for repositories

You can enable push protection for repositories at the repository, organization, or enterprise level. This form of push protection:
* Requires {% data variables.product.prodname_GH_secret_protection_always %} to be enabled
* Is disabled by default, and can be enabled by a repository administrator, organization owner, security manager, or enterprise owner
* Blocks pushes containing secrets from reaching specific protected repositories
* Generates alerts for push protection bypasses in the **Security** tab of the repository, organization, and enterprise

{% ifversion secret-risk-assessment %}

> [!TIP]
> Regardless of the enablement status of push protection, organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} can run a free report to scan their code for leaked secrets. The report also shows how many secret leaks could have been prevented by push protection. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/about-secret-risk-assessment).

{% endif %}

### Push protection for users

Push protection for users is only available on {% data variables.product.prodname_dotcom_the_website %}, and is specific to your {% data variables.product.github %} account. This form of push protection:
* Is enabled by default
* Stops you from pushing secrets to public repositories on {% data variables.product.github %}
* Does not generate alerts when you bypass push protection unless push protection is also enabled at the repository level

## Push protection bypass and alerts

For push protection for repositories, by default, anyone with write access to the repository can bypass push protection by specifying a bypass reason. {% data reusables.secret-scanning.push-protection-bypass %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

 If you want greater control over which contributors can bypass push protection and which pushes containing secrets should be allowed, you can configure a designated group of reviewers to oversee and manage bypass requests.

## Benefits of push protection

* **Preventative security:** Push protection acts as a frontline defense mechanism by scanning code for secrets at the time of the push. This preventative approach helps to catch potential issues before they are merged into a repository.
* **Immediate feedback:** Developers receive instant feedback if a potential secret is detected during a push attempt. This immediate notification allows for quick remediation, reducing the likelihood of sensitive information being exposed.
* **Reduced risk of data leaks:** By blocking commits that contain sensitive information, push protection significantly reduces the risk of accidental data leaks. This helps in safeguarding against unauthorized access to your infrastructure, services, and data.
* **Efficient secret management:** Instead of retrospectively dealing with exposed secrets, developers can address issues at the source. This makes secret management more efficient and less time-consuming.
* **Bypass functionality for flexibility:** For cases where false positives occur or when certain patterns are necessary, you can bypass push protection for users, and designated users can use the delegated bypass feature to bypass push protection for repositories. This provides flexibility without compromising overall security.
* **Ability to detect custom patterns (for repositories in organizations):** Organizations can define custom patterns for detecting secrets unique to their environment. This customization ensures that push protection can effectively identify and block even non-standard secrets.

## Customization

After you enable push protection for repositories, you can customize it by:

* Defining custom patterns to block pushes containing unique secret patterns
* Designating contributors who can bypass push protection and approve bypass requests for other contributors{% ifversion push-protected-pattern-configuration %}
* Configuring which secret patterns are included in push protection at the enterprise or organization level{% endif %}

## Next steps

{% ifversion security-configurations %}
To enable push protection:
* **For a repository**, see [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-push-protection-for-your-repository).
{% ifversion security-configurations-cloud -%}
* **For an organization or enterprise**, you need to apply a {% data variables.product.prodname_security_configuration %}. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/applying-the-github-recommended-security-configuration-in-your-organization) and [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/applying-the-github-recommended-security-configuration-to-your-enterprise).
{% elsif security-configuration-enterprise-level -%}
* **For an organization or enterprise**, you need to apply a {% data variables.product.prodname_security_configuration %}. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/creating-a-custom-security-configuration) and [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/creating-a-custom-security-configuration-for-your-enterprise).
{% else -%}
* **For an organization**, you need to apply a {% data variables.product.prodname_security_configuration %}. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/creating-a-custom-security-configuration).
{% endif %}
{% else %}
To get started with push protection, see [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-push-protection-for-your-repository).
{% endif %}

For a list of secrets and service providers supported by push protection, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets).
