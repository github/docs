---
title: About Dependabot on GitHub Actions runners
intro: '{% data variables.product.prodname_dotcom %} automatically runs the jobs that generate {% data variables.product.prodname_dependabot %} pull requests on {% data variables.product.prodname_actions %} if you have {% data variables.product.prodname_actions %} enabled for the repository. When {% data variables.product.prodname_dependabot %} is enabled, these jobs will run by bypassing Actions policy checks and disablement at the repository or organization level.'
shortTitle: Dependabot on Actions
product: '{% data reusables.gated-features.dependabot-on-actions %}'
versions:
  feature: dependabot-on-actions-opt-in
topics:
  - Dependabot
  - Security updates
  - Version updates
  - Actions
  - Dependencies
  - Repositories
redirect_from:
  - /code-security/dependabot/working-with-dependabot/about-dependabot-on-github-actions-runners
contentType: concepts
---

## About {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners

> [!IMPORTANT]
> If {% data variables.product.prodname_dependabot %} is enabled for a repository, it will always run on {% data variables.product.prodname_actions %}, **bypassing both Actions policy checks and disablement at the repository or organization level**. This ensures that security and version update workflows always run when Dependabot is enabled.

Using {% data variables.product.prodname_actions %} runners allows you to more easily identify {% data variables.product.prodname_dependabot %} job errors and manually detect and troubleshoot failed runs. You can also integrate {% data variables.product.prodname_dependabot %} into your CI/CD pipelines by using {% data variables.product.prodname_actions %} APIs and webhooks to detect {% data variables.product.prodname_dependabot %} job status such as failed runs, and perform downstream processing. For more information, see [AUTOTITLE](/rest/actions) and [AUTOTITLE](/webhooks/webhook-events-and-payloads).

New repositories that you create in your user account or in your organization will automatically be configured to run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} using standard {% data variables.product.github %}-hosted runners if any of the following is true:
* {% data variables.product.prodname_dependabot %} is installed and enabled, and {% data variables.product.prodname_actions %} is enabled and in use.
* The "{% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners" setting for your organization is enabled.

Future releases of {% data variables.product.github %} will remove the ability to disable running {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %}.

> [!NOTE] Enabling {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} may increase the number of concurrent jobs run in your account. If required, customers on enterprise plans can request a higher limit for concurrent jobs. For more information, contact us through the {% data variables.contact.contact_support_portal %}, or contact your sales representative.

## Runner options

You can run {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} using:
* **Standard {% data variables.product.prodname_dotcom %}-hosted runners.** These are the default runners used by {% data variables.product.github %} to execute {% data variables.product.prodname_actions %} jobs.
* **{% data variables.actions.hosted_runners_caps %}.** These are {% data variables.product.prodname_dotcom %}-hosted runners with advanced features like more RAM, CPU, and disk space. For more information, see [AUTOTITLE](/actions/using-github-hosted-runners/about-larger-runners).
* **Self-hosted runners.** These runners grant you greater control over {% data variables.product.prodname_dependabot %} access to your private registries and internal network resources. Be aware that for security reasons, {% data variables.product.prodname_dependabot_updates %} on self-hosted runners will not run on public repositories. For more information on assigning a `dependabot` label on self-hosted runners, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-on-self-hosted-runners).

Running {% data variables.product.prodname_dependabot %} on standard {% data variables.product.prodname_dotcom %}-hosted or self-hosted runners **does not** count towards your included {% data variables.product.prodname_actions %} minutes. For {% data variables.product.prodname_dependabot %} on {% data variables.actions.hosted_runners %}, {% data variables.product.prodname_dotcom %} will bill your organization at the regular rate. See [AUTOTITLE](/billing/reference/actions-minute-multipliers).

{% data reusables.dependabot.vnet-arc-note %}

## Access and permissions

If you are transitioning to using {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners and you restrict access to your organization's or repository's private resources, you may need to update your list of allowed IP addresses. For example, if you currently limit access to your private resources to the IP addresses that {% data variables.product.prodname_dependabot %} uses, you should update your allowlist to use the {% data variables.product.prodname_dotcom %}-hosted runners IP addresses sourced from the meta API endpoint. For more information, see [AUTOTITLE](/rest/meta).

{% data reusables.dependabot.dependabot-on-actions-enterprise-policy-condition %}

## Next steps

To enable {% data variables.product.prodname_dependabot %} on {% data variables.product.prodname_actions %} runners, see [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-on-github-hosted-runners) and [AUTOTITLE](/code-security/how-tos/secure-your-supply-chain/manage-your-dependency-security/configure-on-self-hosted-runners).
