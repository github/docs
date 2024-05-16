---
title: About Dependabot on GitHub Actions runners
intro: 'Running {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} allows for better performance, and increased visibility and control of {% data variables.product.prodname_dependabot %} jobs.'
shortTitle: About Dependabot on Actions
permissions: 'Organization owners and repository administrators can enable {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %}.'
versions:
  feature: dependabot-on-actions-opt-in
type: how_to
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Actions
  - Dependencies
  - Repositories
---

{% data reusables.dependabot.dependabot-on-actions-opt-in-note %}

## About {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners

{% data reusables.dependabot.dependabot-updates-and-actions %}

Using {% data variables.product.prodname_actions %} runners allows you to more easily identify {% data variables.product.prodname_dependabot %} job errors and manually detect and troubleshoot failed runs. You can also integrate {% data variables.product.prodname_dependabot %} into your CI/CD pipelines by using {% data variables.product.prodname_actions %} APIs and webhooks to detect {% data variables.product.prodname_dependabot %} job status such as failed runs, and perform downstream processing. For more information, see "[AUTOTITLE](/rest/actions)" and "[AUTOTITLE](/webhooks/webhook-events-and-payloads)."

You can run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} on self-hosted and {% data variables.actions.hosted_runners %}. However, using private networking with an Azure Virtual Network (VNET) or Actions Runner Controller (ARC) is not supported.

Running {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_dotcom %}-hosted and self-hosted runners **does not** count towards your included {% data variables.product.prodname_actions %} minutes. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

Enabling {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} may increase the number of concurrent jobs run in your account. If required, customers on enterprise plans can request a higher limit for concurrent jobs. For more information, contact us through the {% data variables.contact.contact_support_portal %}, or contact your sales representative.

If you are transitioning to using {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners and you restrict access to your organization's or repository's private resources, you may need to update your list of allowed IP addresses. For example, if you currently limit access to your private resources to the IP addresses that {% data variables.product.prodname_dependabot %} uses, you should update your allowlist to use the {% data variables.product.prodname_dotcom %}-hosted runners IP addresses sourced from the meta API endpoint. For more information, see "[AUTOTITLE](/rest/meta)."

{% data reusables.dependabot.dependabot-on-actions-enterprise-policy-condition %}

## Enabling or disabling {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners

New repositories that you create in your user account or in your organization will automatically be configured to run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} if any of the following is true:
- {% data variables.product.prodname_dependabot %} is installed and enabled, and {% data variables.product.prodname_actions %} is enabled and in use.
- The "{% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners" setting for your organization is enabled.

For existing repositories, you can opt in to run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} as follows.

Future releases of {% data variables.product.product_name %} will remove the ability to disable running {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %}.

If you restrict access to your organization's or repository's private resources, you may need to update your list of allowed IP addresses prior to enabling {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners. You can update your IP allow list to use the {% data variables.product.prodname_dotcom %}-hosted runners IP addresses (instead of the {% data variables.product.prodname_dependabot %} IP addresses), sourced from the [meta](/rest/meta) REST API endpoint.

>[!WARNING] You should not rely on the {% data variables.product.prodname_actions %} IP addresses for authentication to private registries. These {% data variables.product.prodname_actions %} addresses are not only used by {% data variables.product.prodname_dotcom %}, and should not be trusted for authentication. Instead, use a self-hosted runner to ensure greater control over your network access. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/managing-dependabot-on-self-hosted-runners)."

Note, disabling and re-enabling the "{% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners" settings will not trigger a new {% data variables.product.prodname_dependabot %} run.

### Enabling or disabling for your repository

You can manage {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} for your public{% ifversion ghec %}, private or internal{% else %} or private{% endif %} repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% ifversion security-configurations %}
    {% data reusables.security-configurations.changed-org-settings-security-configurations-callout %} For next steps on enabling {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} and other security features at scale with {% data variables.product.prodname_security_configurations %}, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)."
{% endif %}
1. Under "Code security and analysis", to the right of "{% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners", click **Enable**  to enable the feature or **Disable** to disable it.

### Enabling or disabling for your organization

You can use the organization settings page for "Code security and analysis" to enable {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} for all existing repositories in an organization. Only repositories with the following configuration will be updated to run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} the next time a {% data variables.product.prodname_dependabot %} job is triggered.

  - {% data variables.product.prodname_dependabot %} is enabled in the repository.
  - {% data variables.product.prodname_actions %} is enabled in the repository.

If a repository in your organization has {% data variables.product.prodname_dependabot %} enabled but {% data variables.product.prodname_actions %} disabled, {% data variables.product.prodname_dependabot %} will not run on {% data variables.product.prodname_actions %}, but will continue to run using the built-in {% data variables.product.prodname_dependabot %} application.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security-and-analysis %}
{% ifversion security-configurations %}
    {% data reusables.security-configurations.changed-org-settings-security-configurations-callout %} For next steps on enabling {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} and other security features at scale with {% data variables.product.prodname_security_configurations %}, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)."
{% endif %}
1. Under "Code security and analysis", to the right of "{% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners", click **Enable all**  to enable the feature or **Disable all** to disable it.

## Managing {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners

When a {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} job is run, you can review the workflow run history directly from the Dependabot job logs. For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/viewing-dependabot-job-logs)."

You can also navigate to a {% data variables.product.prodname_dependabot %} workflow run from the **Actions** tab in a repository. For more information, see "[AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."

To re-run a {% data variables.product.prodname_dependabot_version_updates %} or {% data variables.product.prodname_dependabot_security_updates %} job, use the appropriate procedure below. You cannot re-run a {% data variables.product.prodname_dependabot %} job on {% data variables.product.prodname_actions %} as you would for other {% data variables.product.prodname_actions %} workflows and jobs, that is, by using the **Actions** tab in a repository. You cannot view usage data for {% data variables.product.prodname_dependabot_updates %} workflows and jobs in your organization's {% data variables.product.prodname_actions %} usage metrics.

### Re-running a {% data variables.product.prodname_dependabot_version_updates %} job

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.accessing-repository-graphs %}
{% data reusables.repositories.click-dependency-graph %}
{% data reusables.dependabot.click-dependabot-tab %}
1. To the right of the name of manifest file that you're interested in, click **Recent update jobs**.
1. To the right of the affected manifest file, click **Check for updates** to re-run a {% data variables.product.prodname_dependabot_version_updates %} job and check for new updates to dependencies for that ecosystem.

### Re-running a {% data variables.product.prodname_dependabot_security_updates %} job

{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click {% octicon "shield-lock" aria-hidden="true" %} **Security**.
1. In the left sidebar, under "Vulnerability alerts", click **{% data variables.product.prodname_dependabot %}**.
1. Under "{% data variables.product.prodname_dependabot %}", click the alert you want to view.
1. In the section displaying the error details for the alert, click **Try again** to re-run the {% data variables.product.prodname_dependabot_security_updates %} job.

## Troubleshooting failures when {% data variables.product.prodname_dependabot %} triggers existing workflows

{% data reusables.dependabot.dependabot-on-actions-troubleshooting-workflows %} For more information, see "[AUTOTITLE](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions#accessing-secrets)" and "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idpermissions)."
