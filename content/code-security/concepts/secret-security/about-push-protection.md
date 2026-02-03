---
title: About push protection
intro: Push protection blocks contributors from pushing secrets to a repository and generates an alert whenever a contributor bypasses the block.{% ifversion secret-scanning-push-protection-for-users %} Push protection can be applied at the repository, organization, and user account level{% else %} You can apply push protection at repository or organization level{% endif %}.
product: '{% data reusables.gated-features.push-protection-for-repos %}'
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

## About push protection

Push protection is a {% data variables.product.prodname_secret_scanning %} feature that is designed to prevent sensitive information, such as secrets or tokens, from being pushed to your repository in the first place. Unlike {% data variables.product.prodname_secret_scanning %}, which detects secrets after they have been committed, push protection proactively scans your code for secrets during the push process and blocks the push if any are detected.

Push protection helps you avoid the risks associated with exposed secrets, like unauthorized access to resources or services. With this feature, developers get immediate feedback and can address potential issues before they become a security concern.

{% ifversion secret-scanning-push-protection-for-users %}

You can enable push protection:

* At repository/organization level, if you are a repository administrator or an organization owner. You will see alerts in the **Security** tab of your repository when a contributor to the repository bypasses push protection.
* For your account on {% data variables.product.prodname_dotcom %}, as a user. This type of push protection is referred to as "push protection for users." It protects you from pushing secrets to _any_ public repository on {% data variables.product.prodname_dotcom %}, but no alerts are generated.

{% endif %}

{% ifversion ghas-products %}{% ifversion secret-risk-assessment %}

> [!TIP]
> Regardless of the enablement status of push protection, organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} can run a free report to scan the code in the organization for leaked secrets. The report also tells you how many secret leaks in your organization could have been prevented by push protection. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/about-secret-risk-assessment).{% endif %}{% else %}

{% endif %}

For information about the secrets and service providers supported by push protection, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets).

Push protection has some limitations. For more information, see [AUTOTITLE](/code-security/secret-scanning/troubleshooting-secret-scanning-and-push-protection/troubleshooting-secret-scanning#push-protection-limitations).

## How push protection works

Push protection blocks secrets detected in:

* Pushes from the command line. See [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-command-line).
* Commits made in the {% data variables.product.prodname_dotcom %} UI. See [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-in-the-github-ui).{% ifversion push-protection-delegated-bypass-file-upload-support %}
* File uploads to a repository on {% data variables.product.prodname_dotcom %}.{% endif %}{% ifversion secret-scanning-push-protection-content-endpoints %}
* Requests to the REST API. See [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-rest-api).{% endif %}
* Interactions with the {% data variables.product.github %} MCP server (public repositories only). See [AUTOTITLE](/enterprise-cloud@latest/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-and-the-github-mcp-server).

Once enabled, if push protection detects a potential secret during a push attempt, it will block the push and provide a detailed message explaining the reason for the block. You will need to review the code in question, remove any sensitive information, and reattempt the push.

By default, anyone with write access to the repository can choose to bypass push protection by specifying one of the bypass reasons outlined in the table. {% data reusables.secret-scanning.push-protection-bypass %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

 If you want greater control over which contributors can bypass push protection and which pushes containing secrets should be allowed, you can enable delegated bypass for push protection. Delegated bypass lets you configure a designated group of reviewers to oversee and manage requests to bypass push protection from contributors pushing to the repository. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection).

{% ifversion secret-scanning-push-protection-content-endpoints %}You can also bypass push protection using the REST API. For more information, see [AUTOTITLE](/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#create-a-push-protection-bypass).{% endif %}

## About the benefits of push protection

* **Preventative security:** Push protection acts as a frontline defense mechanism by scanning code for secrets at the time of the push. This preventative approach helps to catch potential issues before they are merged into your repository.

* **Immediate feedback:** Developers receive instant feedback if a potential secret is detected during a push attempt. This immediate notification allows for quick remediation, reducing the likelihood of sensitive information being exposed.

* **Reduced risk of data leaks:** By blocking commits that contain sensitive information, push protection significantly reduces the risk of accidental data leaks. This helps in safeguarding against unauthorized access to your infrastructure, services, and data.

* **Efficient secret management:** Instead of retrospectively dealing with exposed secrets, developers can address issues at the source. This makes secret management more efficient and less time-consuming.

* **Ability to detect custom patterns:** Organizations can define custom patterns for detecting secrets unique to their environment. This customization ensures that push Protection can effectively identify and block even non-standard secrets.

* **Delegated bypass for flexibility:** For cases where false positives occur or when certain patterns are necessary, the delegated bypass feature allows designated users to approve specific pushes. This provides flexibility without compromising overall security.

{% ifversion secret-scanning-push-protection-for-users %}

Every user across {% data variables.product.prodname_dotcom %} can also enable push protection for themselves within their individual settings. Enabling push protection for your user account means that your pushes are protected whenever you push to a public repository on {% data variables.product.prodname_dotcom %}, without relying on that repository to have push protection enabled. For more information, see [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users).

{% endif %}

## Customizing push protection

Once push protection is enabled, you can customize it further:

{% ifversion push-protected-pattern-configuration %}

### Configure push protected patterns

Customize which secret patterns are included in push protection at the enterprise or organization level. See [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/configuring-additional-secret-scanning-settings-for-your-enterprise#specifying-patterns-to-include-in-push-protection-for-your-enterprise) and [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#specifying-patterns-to-include-in-push-protection).

{% endif %}

### Define custom patterns

Define custom patterns that push protection can use to identify secrets and block pushes containing these secrets. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning).

### Configure delegated bypass

Define contributors who can bypass push protection and add an approval process for other contributors. For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection).

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-push-protection-for-your-repository)
* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-command-line)
* [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-in-the-github-ui)
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning)
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)
