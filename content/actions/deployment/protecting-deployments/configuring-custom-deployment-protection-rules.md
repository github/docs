---
title: Configuring custom deployment protection rules
shortTitle: Configure custom protection rules
intro: Use {% data variables.product.prodname_github_apps %} to automate protecting deployments with third-party systems.
product: '{% data reusables.actions.custom-deployment-protection-rules-availability %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>=3.10'
topics:
  - Actions
  - CD
  - Deployment
---

{% data reusables.actions.custom-deployment-protection-rules-beta-note %}

## About custom deployment protection rules

Custom deployment protection rules are powered by {% data variables.product.prodname_github_apps %}. Once a deployment protection rule is configured and installed in a repository, it can be enabled for any environments in the repository.

After you enable a custom deployment protection rule on an environment, every time a workflow step targets that environment, the deployment protection rule will run automatically. For more information about targeting an environment for deployments, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/using-environments-for-deployment)."

For more information about creating your own custom deployment protection rules, see "[AUTOTITLE](/actions/deployment/protecting-deployments/creating-custom-deployment-protection-rules)."

{% data reusables.actions.custom-deployment-protection-rules-limits %}

## Using existing custom deployment protection rules

You can choose to create your own custom deployment protection rules or you may use any existing custom deployment protection rules.

The following is a list of official partner implementations for deployment protection rules.

- Datadog: you can enforce protection rules on your {% data variables.product.prodname_actions %} deployment workflows using Datadog monitors. For more information, see [Gating your {% data variables.product.prodname_actions %} Deployments with Datadog Monitors](https://docs.datadoghq.com/continuous_integration/guides/github_gating/) in the Datadog documentation.
- Honeycomb: you can define thresholds to reject or approve deployments based on data you are sending to Honeycomb. For more information, see [the Honeycomb app](https://github.com/apps/honeycomb-io) in the {% data variables.product.prodname_marketplace %}.
- New Relic: for more information, see [the New Relic app](https://github.com/apps/new-relic-gate) in the {% data variables.product.prodname_marketplace %}.
- NCM NodeSource: for more information, see [the NCM NodeSource app](https://github.com/apps/ncm-nodesource) in the {% data variables.product.prodname_marketplace %}.
- Sentry: for more information, see [the Sentry Deployment Gate app](https://github.com/apps/sentry-deployment-gate) in the {% data variables.product.prodname_marketplace %}.
- ServiceNow: for more information, see [GitHub integration with DevOps Change Velocity](https://docs.servicenow.com/bundle/utah-devops/page/product/enterprise-dev-ops/concept/github-integration-dev-ops.html) in the ServiceNow documentation.

## Prerequisites

In order for a custom deployment protection rule to be available to all environments in a repository, you must first install the custom deployment protection rule on the repository. For more information, see "[AUTOTITLE](/apps/maintaining-github-apps/installing-github-apps)."

After a custom deployment protection rule has been installed in a repository, it must be enabled for each environment where you want the rule to apply.

## Enabling custom deployment protection rules for the environment

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.actions.sidebar-environment %}
1. Select the environment you want to configure.
1. Under "Deployment protection rules," check the box next to each custom deployment protection rule you want to enable for the environment.
1. Click **Save protection rules**.

Once a custom deployment protection rule has been enabled for an environment, it will automatically run whenever a workflow reaches a job that references the environment. You can see the results of an approval or rejection for your deployment by reviewing the details of the deployment. For more information, see "[AUTOTITLE](/actions/managing-workflow-runs/reviewing-deployments)."
