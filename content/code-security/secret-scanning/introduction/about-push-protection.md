---
title: About push protection
intro: 'With push protection for repositories and organizations, {% data variables.product.prodname_secret_scanning %} blocks contributors from pushing secrets to a repository and generates an alert whenever a contributor bypasses the block. TODO'
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

Push protection is a {% data variables.product.prodname_secret_scanning %} feature that checks commits for highly identifiable secrets before these commits are pushed to a repository.

{% data reusables.secret-scanning.pre-push-protection %} {% data reusables.secret-scanning.push-protection-overview %}

{% ifversion secret-scanning-push-protection-for-users %}

You can enable push protection:

* At repository/organization level, if you are a repository administrator or an organization owner.
* For your account on {% data variables.product.prodname_dotcom %}, as a user.

## About push protection for repositories and organizations

{% endif %}

If you are a repository administrator or an organization owner, you can enable push protection at repository/organization level.

{% ifversion secret-scanning-push-protection-for-users %}

## About push protection for users

Every user across {% data variables.product.prodname_dotcom %} can enable push protection for themselves within their individual settings.

Enabling push protection for your user account means that your pushes are protected whenever you push to a public repository on {% data variables.product.prodname_dotcom %}, without relying on that repository to have push protection enabled. For more information, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users)."

{% endif %}

## What are the supported secrets

For information about the secrets and service providers supported for push protection, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."

{% ifversion push-protection-delegated-bypass %}

## Delegated bypass

{% data reusables.secret-scanning.push-protection-delegated-bypass-intro %}

When you enable push protection, by default, anyone with write access to the repository can choose to bypass the protection by specifying a reason for allowing the push containing a secret. With delegated bypass, contributors to a repository are instead obligated to request "bypass privileges." The request is sent to a designated group of reviewers, who either approve or deny the request to bypass push protection.

If the request to bypass push protection is approved, the contributor can push the commit containing the secret. If the request is denied, the contributor must remove the secret from the commit (or commits) containing the secret before pushing again.

For information about delegated bypass for push protection, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)."

{% endif %}

{% ifversion secret-scanning-push-protection-custom-patterns %}

## Custom patterns

You can define custom patterns to identify secrets that are not detected by the default patterns supported by push protection. For example, you might have a secret pattern that is internal to your organization.

{% data reusables.secret-scanning.push-protection-custom-pattern %} For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."

{% endif %}

## Further reading

* TODO: add link to enabling push protection
* "[AUTOTITLE](/code-security/secret-scanning/working-with-push-protection)"
