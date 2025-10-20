---
title: Prioritizing Dependabot alerts using production context
shortTitle: Dependabot production context
intro: 'You can focus remediation on real risk by prioritizing {% data variables.product.prodname_dependabot_alerts %} for artifacts actually present in production, using metadata from external registries like JFrog Artifactory or your own CI/CD workflows.'
product: '{% data reusables.gated-features.dependabot-alerts %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Code Security
  - Dependabot
  - Organizations
  - Security
---

> [!NOTE] Production context is in {% data variables.release-phases.public_preview %} and subject to change.

## Prioritizing {% data variables.product.prodname_dependabot_alerts %} using production context

Application Security (AppSec) managers are often overwhelmed by a high volume of {% data variables.product.prodname_dependabot_alerts %}, many of which may not represent real risk because the affected code never makes it to production. By associating production context with your alerts, you can filter and prioritize vulnerabilities that impact artifacts actually approved for production environments. This enables your team to focus remediation efforts on the vulnerabilities that matter most, reducing noise and improving your security posture.

## Associating production context with {% data variables.product.prodname_dependabot_alerts %}

{% data variables.product.github %} enables production context for your {% data variables.product.prodname_dependabot_alerts %} by providing a Storage Record API. This API allows package registries or GitOps workflows to send artifact lifecycle data to {% data variables.product.github %}. The API should be called whenever an artifact is promoted to a production-approved package repository.

{% data variables.product.github %} processes this metadata and uses it to power new alert filters, such as `artifact-registry-url` and `artifact-registry`. For more information, see [Create artifact metadata storage record](/rest/orgs/artifact-metadata?apiVersion=2022-11-28#create-artifact-metadata-storage-record) in the REST API documentation.

## Steps to prioritize alerts

Follow these steps to enable and use production context for alert prioritization:

### Step 1: Detect and report production artifact promotions

In your CI/CD or GitOps workflow, whenever an artifact is promoted to a production-approved package repository, call the Storage Record API to to send the artifact's metadata to {% data variables.product.github %}. This includes information such as the artifact's registry, repository, and version. See [AUTOTITLE](/rest/orgs/artifact-metadata?apiVersion=2022-11-28#create-artifact-metadata-storage-record).

If you use JFrog Artifactory, you do not need to perform any custom integration. Artifactory natively integrates with the Storage Record API. You only need to enable the integration in your Artifactory settings, and Artifactory will automatically emit production promotion events to {% data variables.product.github %}.

The `artifact-registry:jfrog-artifactory` filter will work out of the box with no further setup in {% data variables.product.github %}. For setup instructions, see [JFrog and GitHub Integration: JFrog for [{% data variables.product.github %} {% data variables.product.prodname_dependabot %}]](https://jfrog.com/help/r/jfrog-and-github-integration-guide/jfrog-for-github-dependabot) in the JFrog documentation.

### Step 2: Use production context filters

{% data reusables.dependabot.where-to-view-dependabot-alerts %}. For information about accessing this tab, see [Viewing {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts#viewing-dependabot-alerts).

Once the alert list is displayed, use the `artifact-registry-url` or `artifact-registry` filters to focus on vulnerabilities affecting artifacts present in production. For example:

```text
artifact-registry-url:my-registry.example.com
artifact-registry:jfrog-artifactory
```

You can also combine these with other filters, such as EPSS.

```text
epss > 0.5 AND artifact-registry-url:my-registry.example.com
```

## Further reading

* [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-vulnerabilities/prioritizing-dependabot-alerts-using-metrics)
