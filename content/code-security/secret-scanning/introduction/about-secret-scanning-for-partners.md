---
title: About secret scanning for partners
intro: '{% data variables.product.prodname_secret_scanning_caps %} sends directly alerts to partners when any of the partner secrets are found in repositories on {% data variables.product.prodname_dotcom %}. This allows partners to promtply take action to secure their systems.'
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

The reason partner alerts are directly sent to the secret providers whenever a secret leak is reported for one of their secrets is because this helps ensure that secrets are not inadvertently exposed in public or private repositories. The notification for regular alerts is different. Regular alerts are displayed on the repository's **Security** tab on {% data variables.product.prodname_dotcom %}.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

## What are the supported secrets

For information about the secrets and service providers supported by push protection, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)"
* "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns)"
* "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection)"
* TODO: add link to "About alerts" article
