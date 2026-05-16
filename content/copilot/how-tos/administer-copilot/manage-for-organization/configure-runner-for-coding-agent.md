---
title: Configuring runners for GitHub Copilot cloud agent in your organization
shortTitle: Configure agent runners
allowTitleToDifferFromFilename: true
intro: 'Configure the {% data variables.product.prodname_actions %} runners used by {% data variables.copilot.copilot_cloud_agent %} and control whether repositories can customize the runner type.'
permissions: Organization owners
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/enterprise/contact?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Contact Sales</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Manage Copilot for a team
---

## About organization-level runner controls

By default, {% data variables.copilot.copilot_cloud_agent %} runs on a standard {% data variables.product.prodname_dotcom %}-hosted {% data variables.product.prodname_actions %} runner (`ubuntu-latest`). As an organization owner, you can change the default runner type for all repositories in your organization, and choose whether individual repositories are allowed to override this default.

This is useful if your organization requires all {% data variables.copilot.copilot_cloud_agent %} sessions to run on specific runners—for example, to use larger runners for better performance, or to use self-hosted runners that have access to internal resources.

You can configure:

* **Runner type**: Choose between a standard {% data variables.product.prodname_dotcom %}-hosted runner or a labeled runner from a specific runner group.
* **Allow repositories to customize the runner type**: Control whether repositories can override the organization default using a {% data variables.product.prodname_copilot_short %} setup steps workflow defined at `.github/workflows/copilot-setup-steps.yml`.

## Configuring the default runner type

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.cloud-agent-settings %}
1. Next to "Runner type," click the pencil icon ({% octicon "pencil" aria-label="Edit" %}).
1. Select the runner type to use by default for {% data variables.copilot.copilot_cloud_agent %} across your organization.
   * **Standard {% data variables.product.prodname_dotcom %} runner**: {% data variables.copilot.copilot_cloud_agent %} will use `ubuntu-latest`.
   * **Labeled runner**: {% data variables.copilot.copilot_cloud_agent %} will use a runner matching the group name and/or label you specify. Enter values in the **Runner group name** and/or **Runner label** fields.
1. Click **Save runner selection**.

## Preventing repositories from customizing the runner type

By default, repositories can override the organization-level runner configuration using a {% data variables.product.prodname_copilot_short %} setup steps workflow located at `.github/workflows/copilot-setup-steps.yml`. If you want to enforce a consistent runner type across all repositories, you can disable this option.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.copilot.cloud-agent-settings %}
1. Under "Allow repositories to customize the runner type," toggle the setting to enable or disable repository-level customization.
   * When enabled, repositories can override the default runner by setting the `runs-on` field in the `copilot-setup-steps` job of `copilot-setup-steps.yml`. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment#configure-the-runner).
   * When disabled, all repositories in your organization will use the organization-level runner type.
1. Click **Save**.

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment)
* [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent)
