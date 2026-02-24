---
title: About validity checks
shortTitle: Validity checks
intro: 'Validity checks and extended metadata checks help you prioritize remediation of exposed credentials that pose immediate security risks.'
product: |
  {% data reusables.gated-features.secret-scanning %}{% ifversion secret-risk-assessment %}

  {% data variables.secret-scanning.secret-risk-assessment-cta-product %}{% endif %}
contentType: concepts
topics:
  - Secret scanning
  - Secret Protection
versions:
  fpt: '*'
  ghec: '*'
---

## About validity checks

Validity checks, a feature of {% data variables.product.prodname_secret_scanning %}, verify whether a detected secret is still active and could be exploited. This helps you prioritize remediation by focusing first on secrets that are confirmed to be active.

You can enable automatic validity checks for detected secrets. Once enabled, {% data variables.product.company_short %} will periodically check the validity of a detected credential by sending the secret to the issuer and testing it against APIs provided by that service. Validity checks are available for secrets from many service providers, and support continues to expand as {% data variables.product.company_short %} partners with additional services.

{% data variables.product.company_short %} prioritizes privacy when checking the validity of the credential. We typically make GET requests, pick the least intrusive endpoints, and select endpoints that don't return any personal information.

{% data variables.product.github %} displays the validation status of the secret in the alert view, so you can see if the secret is `active`, `inactive`, or if the validation status is `unknown`. You can optionally perform an "on-demand" validity check for the secret in the alert view.

## About extended metadata checks

{% data reusables.security-configurations.extended-metadata-checks %}

Extended metadata checks provide **additional contextual information** about detected secrets. They are often referred to as **analyzers** in other tools.

You can enable extended metadata checks if validity checks are enabled. Then, you'll get information that helps you:

* **Gain deeper insight into detected secrets**: Know who owns a secret.
* **Prioritize remediation**: Understand the scope and impact of each exposed secret.
* **Improve incident response**: Quickly identify responsible teams or individuals when a secret is leaked.
* **Enhance compliance**: Ensure secrets align with your organization’s governance and security policies.
* **Reduce false positives**: Use additional context to determine if a detection requires action.

The specific metadata available depends on what the service provider shares with {% data variables.product.github %}. Not all secret types support extended metadata checks. For more information, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts#verifying-token-metadata).

## Getting started with validity and extended metadata checks

{% data reusables.secret-scanning.extended-metadata-checks-note %}

You can enable validity and extended metadata checks at the repository, organization, or enterprise level to help prioritize which exposed credentials pose the most immediate security risks.

For large organizations, we recommend using **security configurations** to enable these features at the organization or enterprise level. Security configurations allow you to centrally manage  {% data variables.product.prodname_secret_scanning %} settings and apply them consistently across many repositories.

To get started:

* For repositories, see [AUTOTITLE](/code-security/how-tos/secure-your-secrets/customize-leak-detection/enabling-validity-checks-for-your-repository)
* For an organization, see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/creating-a-custom-security-configuration)
* For an enterprise, see [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/creating-a-custom-security-configuration-for-your-enterprise)
