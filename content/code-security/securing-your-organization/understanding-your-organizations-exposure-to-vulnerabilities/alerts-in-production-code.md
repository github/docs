---
title: Prioritizing Dependabot and code scanning alerts using production context
shortTitle: Alerts in production code
intro: 'Focus remediation on real risk by targeting {% data variables.product.prodname_dependabot %} and {% data variables.product.prodname_code_scanning %} alerts in artifacts deployed to production, using metadata from external registries like JFrog Artifactory, your own CI/CD workflows, or from {% data variables.product.prodname_microsoft_defender %}.'
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
---

{% data reusables.security.production-context-mdc-preview %}

## Prioritizing alerts using production context

Application Security (AppSec) managers are often overwhelmed by a high volume of alerts, many of which may not represent real risk because the affected code never makes it to production. By associating production context with your alerts, you can filter and prioritize vulnerabilities that impact artifacts actually approved for production environments. This enables your team to focus remediation efforts on the vulnerabilities that matter most, reducing noise and improving your security posture.

## Associating production context with alerts

{% data variables.product.github %} enables you to provide production context for {% data variables.product.prodname_dependabot %} and {% data variables.product.prodname_code_scanning %} alerts using the REST API:

* [Storage Record](/rest/orgs/artifact-metadata#create-artifact-metadata-storage-record)
* [Deployment Record](/rest/orgs/artifact-metadata#create-an-artifact-deployment-record)

### Storage Record API

This API allows package registries or GitOps workflows to send artifact lifecycle data to {% data variables.product.github %}. You should configure your system to call the endpoint whenever an artifact is promoted to a production-approved package repository.

{% data variables.product.github %} processes this metadata and uses it to power new alert filters, such as `artifact-registry-url` and `artifact-registry`. For more information, see [Create artifact metadata storage record](/rest/orgs/artifact-metadata#create-artifact-metadata-storage-record) in the REST API documentation.

> [!TIP]
> If you use JFrog Artifactory, you do not need to perform any custom integration. Artifactory natively integrates with the Storage Record API. You only need to enable the integration in your Artifactory settings, and Artifactory will automatically emit production promotion events to {% data variables.product.github %}. For setup instructions, see [JFrog and GitHub Integration: JFrog for {% data variables.product.github %} {% data variables.product.prodname_dependabot %}](https://jfrog.com/help/r/jfrog-and-github-integration-guide/jfrog-for-github-dependabot) in the JFrog documentation.

### Deployment Record API

This API allows systems to send deployment data for a specific artifact to {% data variables.product.github %}, such as its name, digest, environments, cluster, and deployment.

{% data variables.product.github %} processes this metadata and uses it to power new alert filters, such as `has:deployment` and `runtime-risk`. For more information, see [Create an artifact deployment record](/rest/orgs/artifact-metadata#create-an-artifact-deployment-record) in the REST API documentation.

> [!TIP]
> If you use {% data variables.product.prodname_mdc_definition %} and connect your instance to a {% data variables.product.github %} organization, {% data variables.product.prodname_mdc %} will automatically send deployment and runtime data to {% data variables.product.github %}. For more information, see [Quick Start: Connect your {% data variables.product.github %} Environment to {% data variables.product.prodname_microsoft_defender %}](https://learn.microsoft.com/en-us/azure/defender-for-cloud/quickstart-onboard-github) in the documentation for {% data variables.product.prodname_mdc %}.

## Enable and use production context for alert prioritization

### 1. Detect and report production artifact promotions and deployments

In your CI/CD or GitOps workflow, whenever an artifact is promoted to a production-approved package repository, call the Storage Record API to send the artifact's metadata to {% data variables.product.github %}. Whenever an artifact is deployed to production, call the Deployment Record API to send additional metadata for the artifact to {% data variables.product.github %}.

### 2. Use production context filters

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

### 3. Remediate alerts in production code

Now you have identified the alerts that put your production code at risk of exploitation, you need to remediate them as a matter of urgency. Where possible use automation to lower the barrier to remediation.

* **{% data variables.product.prodname_dependabot_alerts %}:** Use automated pull requests for security fixes. See [AUTOTITLE](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates).
* **{% data variables.product.prodname_code_scanning_caps %} alerts:** Create targeted campaigns with {% data variables.copilot.copilot_autofix_short %}. See [AUTOTITLE](/code-security/securing-your-organization/fixing-security-alerts-at-scale/creating-managing-security-campaigns).

## Further reading

* [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilities/prioritizing-dependabot-alerts-using-metrics)
