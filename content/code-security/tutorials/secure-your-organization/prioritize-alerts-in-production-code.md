---
title: Prioritizing Dependabot and code scanning alerts using production context
shortTitle: Prioritize alerts in production code
intro: Focus remediation on real risk by targeting {% data variables.product.prodname_dependabot %} and {% data variables.product.prodname_code_scanning %} alerts in artifacts deployed to production, using metadata from external registries like JFrog Artifactory, your own CI/CD workflows, or from {% data variables.product.prodname_microsoft_defender %}.
versions:
  fpt: '*'
  ghec: '*'
contentType: tutorials
topics:
  - Code Security
  - Dependabot
  - Code scanning
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilities/prioritizing-dependabot-alerts-using-production-context
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilities/alerts-in-production-code
  - /code-security/tutorials/secure-your-organization/alerts-in-production-code
---

Application Security (AppSec) managers are often overwhelmed by a high volume of alerts, many of which may not represent real risk because the affected code never makes it to production. By associating production context with your alerts, you can filter and prioritize vulnerabilities that impact artifacts actually approved for production environments. This enables your team to focus remediation efforts on the vulnerabilities that matter most, reducing noise and improving your security posture.

## 1. Associate artifacts with production context

{% data variables.product.github %}'s {% data variables.product.virtual_registry %} allows you to provide production context for your company's builds using the REST API or a partner integration. Teams can then use this context to prioritize {% data variables.product.prodname_dependabot %} and {% data variables.product.prodname_code_scanning %} alerts. For more information, see [AUTOTITLE](/code-security/concepts/supply-chain-security/linked-artifacts).

To provide production context, you should configure your system to:

* Update **storage records** in the {% data variables.product.virtual_registry %} whenever an artifact is promoted to a production-approved package repository.
* Update **deployment records** when an artifact is deployed to a production environment.

{% data variables.product.github %} processes this metadata and uses it to power alert filters, such as `artifact-registry-url` and `artifact-registry` from storage records, and `has:deployment` and `runtime-risk` from deployment records.

For more information on updating records, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/establish-provenance-and-integrity/upload-linked-artifacts).

## 2. Use production context filters

Production context filters are made available in alert views and security campaign views under the **Security** tab.

* **{% data variables.product.prodname_dependabot_alerts %} view**: See [Viewing {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts).
* **{% data variables.product.prodname_code_scanning_caps %} alerts view**: See [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/assessing-code-scanning-alerts-for-your-repository).
* **Security campaign view**: See [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/creating-managing-security-campaigns).

Once the alert list is displayed, use the `artifact-registry-url` or `artifact-registry` filters in organization views to focus on vulnerabilities affecting artifacts present in production.

* For your own artifact repository that is hosted at `my-registry.example.com`, you would use:

    ```text copy
    artifact-registry-url:my-registry.example.com
    ```

* If you use JFrog Artifactory, you can use `artifact-registry` with no further setup in {% data variables.product.github %}:

    ```text copy
    artifact-registry:jfrog-artifactory
    ```

You can also use the `has:deployment` and `runtime-risk` filters to focus on vulnerabilites that deployment metadata shows as in deployment or at risk of runtime vulnerabilities. This data is populated automatically if you have connected {% data variables.product.prodname_mdc %}. For example:

* To focus on alerts in deployed code that is exposed to the internet, you would use:

    ```text copy
    has:deployment AND runtime-risk:internet-exposed
    ```

You can also combine these production context filters with other filters, such as EPSS:

```text copy
epss > 0.5 AND artifact-registry-url:my-registry.example.com
```

## 3. Remediate alerts in production code

Now you have identified the alerts that put your production code at risk of exploitation, you need to remediate them as a matter of urgency. Where possible use automation to lower the barrier to remediation.

* **{% data variables.product.prodname_dependabot_alerts %}:** Use automated pull requests for security fixes. See [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates).
* **{% data variables.product.prodname_code_scanning_caps %} alerts:** Create targeted campaigns with {% data variables.copilot.copilot_autofix_short %}. See [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/creating-managing-security-campaigns).

## Further reading

* [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilities/prioritizing-dependabot-alerts-using-metrics)
