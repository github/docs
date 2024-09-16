---
title: About secret scanning for partners
intro: 'When {% data variables.product.prodname_secret_scanning %} detects authentication details for a service provider in a public repository on {% data variables.product.prodname_dotcom %}, an alert is sent directly to the provider. This allows service providers who are {% data variables.product.prodname_dotcom %} partners to promptly take action to secure their systems.'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
shortTitle: Secret scanning for partners
---

## About {% data variables.secret-scanning.partner_alerts %}

{% data variables.product.product_name %} scans public repositories and public npm packages for secrets issued by specific service providers who joined our partnership program, and alerts the relevant service provider whenever a secret is detected in a commit. The service provider validates the string and then decides whether they should revoke the secret, issue a new secret, or contact you directly. Their action will depend on the associated risks to you or them. {% data reusables.secret-scanning.partner-program-link %}

> [!NOTE]You cannot change the configuration of {% data variables.product.prodname_secret_scanning %} for partner patterns on public repositories.

The reason partner alerts are directly sent to the secret providers whenever a leak is detected for one of their secrets is that this enables the provider to take immediate action to protect you and protect their resources. The notification process for regular alerts is different. Regular alerts are displayed on the repository's **Security** tab on {% data variables.product.prodname_dotcom %} for you to resolve.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

## What are the supported secrets

For information about the secrets and service providers supported by push protection, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)"
* "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns)"
* "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-partnership-program/secret-scanning-partner-program)"
