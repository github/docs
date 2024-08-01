---
title: About push protection
intro: 'Push protection helps detect secrets in code as changes are pushed. Push protection blocks contributors from pushing secrets to a repository and generates an alert whenever a contributor bypasses the block.{% ifversion secret-scanning-push-protection-for-users %} Push protection can be applied at the repository, organization, and user account level{% else %} You can apply push protection at repository or organization level{% endif %}.'
product: '{% data reusables.gated-features.push-protection-for-repos %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /early-access/code-security/secret-scanning/protecting-pushes-with-secret-scanning
  - /code-security/secret-scanning/protecting-pushes-with-secret-scanning
  - /code-security/secret-scanning/push-protection-for-repositories-and-organizations
type: overview
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Push protection
---

## What is push protection

Push protection is a {% data variables.product.prodname_secret_scanning %} feature that is designed to prevent sensitive information, such as secrets or tokens, from being pushed to your repository in the first place. Unlike {% data variables.product.prodname_secret_scanning %}, which detects secrets after they have been committed, push protection proactively scans your code for secrets during the push process and blocks the push if any are detected.

Push protection helps you avoid the risks associated with exposed secrets, like unauthorized access to resources or services. With this feature, developers get immediate feedback and can address potential issues before they become a security concern.

Once enabled, if push protection detects a potential secret during a push attempt, it will block the push and provide a detailed message explaining the reason for the block. You will need to review the code in question, remove any sensitive information, and reattempt the push. For some {% data variables.product.prodname_dotcom %} products, more advanced features such as delegated bypass and the use of custom patterns are available:

{% ifversion secret-scanning-push-protection-for-users %}

You can enable push protection:

* At repository/organization level, if you are a repository administrator or an organization owner. You will see alerts in the **Security** tab of your repository when a contributor to the repository bypasses push protection. 
* For your account on {% data variables.product.prodname_dotcom %}, as a user. This type of push protection is referred to as "push protection for users". It protects you from pushing secrets to _any_ public repository on {% data variables.product.prodname_dotcom %}, but it doesn't generate alerts.

{% endif %}

## What are the benefits of push protection

* **Proactive security**—Push protection acts as a frontline defense mechanism by scanning code for secrets at the time of the push. This proactive approach helps to catch potential issues before they are merged into your repository.

* **Immediate feedback**—Developers receive instant feedback if a potential secret is detected during a push attempt. This immediate notification allows for quick remediation, reducing the likelihood of sensitive information being exposed.

* **Reduced risk of data leaks**—By blocking commits that contain sensitive information, push protection significantly reduces the risk of accidental data leaks. This helps in safeguarding against unauthorized access to your infrastructure, services, and data.

* **Efficient secret management**—Instead of retrospectively dealing with exposed secrets, developers can address issues at the source. This makes secret management more efficient and less time-consuming.

* **Integration with CI/CD pipelines**—
Push Protection can be integrated into your Continuous Integration/Continuous Deployment (CI/CD) pipelines, ensuring that every push is scanned for secrets before it gets deployed. This adds an extra layer of security to your DevOps practices.

{% ifversion secret-scanning-push-protection-custom-patterns %}* **Ability to detect custom patterns**—Organizations can define custom patterns for detecting secrets unique to their environment. This customization ensures that push Protection can effectively identify and block even non-standard secrets.{% endif %}

{% ifversion push-protection-delegated-bypass %}* **Delegated bypass for flexibility**—For cases where false positives occur or when certain patterns are necessary, the delegated bypass feature allows designated users to approve specific pushes. This provides flexibility without compromising overall security.{% endif %}

* **Audit and monitoring**—Push protection maintains logs of all blocked attempts and bypass approvals. These logs can be audited to ensure compliance and to review any potential security incidents, thereby providing transparency and accountability.

* **Collaboration and education**—By frequently reminding developers of secure coding practices, push protection helps foster a culture of security within development teams. It serves as a constant reminder that security is everyone's responsibility.

## Configuring push protection

To use push protection, you need to have administrative access to the repository or organization you want to configure. Also, your repository or organization should be hosted on {% data variables.product.prodname_dotcom %}.

Enabling and configuring push protection involves a few steps. For more information, see TODO: - link to enabling article.

{% ifversion secret-scanning-push-protection-for-users %}

Every user across {% data variables.product.prodname_dotcom %} can also enable push protection for themselves within their individual settings. Enabling push protection for your user account means that your pushes are protected whenever you push to a public repository on {% data variables.product.prodname_dotcom %}, without relying on that repository to have push protection enabled. For more information, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users)."

{% endif %}

## What are the supported secrets

For information about the secrets and service providers supported by push protection, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."

## Customizing push protection

Once push protection is enabled, you can customize it further, if needed:

### Integration with CI/CD pipelines

You can integrate push protection with your Continuous Integration/Continuous Deployment (CI/CD) pipelines to ensure that it runs scans during automated processes. This typically involves adding steps in your pipeline configuration file to call GitHub's APIs or using {% data variables.product.prodname_actions %}.

### Handling false positives

If push protection occasionally flags non-sensitive information, you can configure the system to recognize these as false positives. This may also involve adding specific rules or exceptions within your security settings.

{% ifversion secret-scanning-push-protection-custom-patterns %}

### Defining custom patterns

If you have specific patterns or types of secrets that are unique to your environment or organization, you can define custom patterns that push protection will use to identify secrets. These patterns are used to identify sensitive information that might not be covered by the default scanning rules implemented by {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."

{% endif %}

{% ifversion push-protection-delegated-bypass %}

### Using delegated bypass

{% data reusables.secret-scanning.push-protection-delegated-bypass-intro %}

When you enable push protection, by default, anyone with write access to the repository can choose to bypass the protection by specifying a reason for allowing the push containing a secret. With delegated bypass, contributors to a repository are instead obligated to request "bypass privileges." The request is sent to a designated group of reviewers, who either approve or deny the request to bypass push protection.

If the request to bypass push protection is approved, the contributor can push the commit containing the secret. If the request is denied, the contributor must remove the secret from the commit (or commits) containing the secret before pushing again.

For information about delegated bypass for push protection, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)."

{% endif %}

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/working-with-push-protection)"{% ifversion secret-scanning-push-protection-custom-patterns %}
* "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning)"{% endif %}{% ifversion push-protection-delegated-bypass %}
* "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)"{% endif %}
