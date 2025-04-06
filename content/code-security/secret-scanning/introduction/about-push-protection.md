---
title: About push protection
intro: 'Push protection blocks contributors from pushing secrets to a repository and generates an alert whenever a contributor bypasses the block.{% ifversion secret-scanning-push-protection-for-users %} Push protection can be applied at the repository, organization, and user account level{% else %} You can apply push protection at repository or organization level{% endif %}.'
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

## About push protection

Push protection is a {% data variables.product.prodname_secret_scanning %} feature that is designed to prevent sensitive information, such as secrets or tokens, from being pushed to your repository in the first place. Unlike {% data variables.product.prodname_secret_scanning %}, which detects secrets after they have been committed, push protection proactively scans your code for secrets during the push process and blocks the push if any are detected.

Push protection helps you avoid the risks associated with exposed secrets, like unauthorized access to resources or services. With this feature, developers get immediate feedback and can address potential issues before they become a security concern.

{% ifversion secret-scanning-push-protection-for-users %}

You can enable push protection:

* At repository/organization level, if you are a repository administrator or an organization owner. You will see alerts in the **Security** tab of your repository when a contributor to the repository bypasses push protection.
* For your account on {% data variables.product.prodname_dotcom %}, as a user. This type of push protection is referred to as "push protection for users". It protects you from pushing secrets to _any_ public repository on {% data variables.product.prodname_dotcom %}, but no alerts are generated.

{% endif %}

For information about the secrets and service providers supported by push protection, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."

## How push protection works

Once enabled, if push protection detects a potential secret during a push attempt, it will block the push and provide a detailed message explaining the reason for the block. You will need to review the code in question, remove any sensitive information, and reattempt the push.

By default, anyone with write access to the repository can choose to bypass push protection by specifying one of the bypass reasons outlined in the table. {% data reusables.secret-scanning.push-protection-bypass %}

{% data reusables.secret-scanning.bypass-reasons-and-alerts %}

{% ifversion push-protection-delegated-bypass %} If you want greater control over which contributors can bypass push protection and which pushes containing secrets should be allowed, you can enable delegated bypass for push protection. Delegated bypass lets you configure a designated group of reviewers to oversee and manage requests to bypass push protection from contributors pushing to the repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)."{% endif %}

## About the benefits of push protection

* **Preventative security**: Push protection acts as a frontline defense mechanism by scanning code for secrets at the time of the push. This preventative approach helps to catch potential issues before they are merged into your repository.

* **Immediate feedback**: Developers receive instant feedback if a potential secret is detected during a push attempt. This immediate notification allows for quick remediation, reducing the likelihood of sensitive information being exposed.

* **Reduced risk of data leaks**: By blocking commits that contain sensitive information, push protection significantly reduces the risk of accidental data leaks. This helps in safeguarding against unauthorized access to your infrastructure, services, and data.

* **Efficient secret management**: Instead of retrospectively dealing with exposed secrets, developers can address issues at the source. This makes secret management more efficient and less time-consuming.

* **Integration with CI/CD pipelines**: Push Protection can be integrated into your Continuous Integration/Continuous Deployment (CI/CD) pipelines, ensuring that every push is scanned for secrets before it gets deployed. This adds an extra layer of security to your DevOps practices.

{% ifversion secret-scanning-push-protection-custom-patterns %}* **Ability to detect custom patterns**: Organizations can define custom patterns for detecting secrets unique to their environment. This customization ensures that push Protection can effectively identify and block even non-standard secrets.{% endif %}

{% ifversion push-protection-delegated-bypass %}* **Delegated bypass for flexibility**: For cases where false positives occur or when certain patterns are necessary, the delegated bypass feature allows designated users to approve specific pushes. This provides flexibility without compromising overall security.{% endif %}

{% ifversion secret-scanning-push-protection-for-users %}

Every user across {% data variables.product.prodname_dotcom %} can also enable push protection for themselves within their individual settings. Enabling push protection for your user account means that your pushes are protected whenever you push to a public repository on {% data variables.product.prodname_dotcom %}, without relying on that repository to have push protection enabled. For more information, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users)."

{% endif %}

## Customizing push protection

Once push protection is enabled, you can customize it further:

### Integrate with CI/CD pipelines

Integrate push protection with your Continuous Integration/Continuous Deployment (CI/CD) pipelines to ensure that it runs scans during automated processes. This typically involves adding steps in your pipeline configuration file to call GitHub's APIs or using {% data variables.product.prodname_actions %}.

{% ifversion secret-scanning-push-protection-custom-patterns %}

### Define custom patterns

Define custom patterns that push protection can use to identify secrets and block pushes containing these secrets. For more information, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning)."

{% endif %}

{% ifversion push-protection-delegated-bypass %}

### Configure delegated bypass

Define contributors who can bypass push protection and add an approval process for other contributors. For more information, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)."

{% endif %}

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-push-protection-for-your-repository)"
* "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-from-the-command-line)"
* "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/working-with-push-protection-in-the-github-ui)"{% ifversion secret-scanning-push-protection-custom-patterns %}
* "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning)"{% endif %}{% ifversion push-protection-delegated-bypass %}
* "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)"{% endif %}
