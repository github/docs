---
title: Getting started with GitHub Actions for GitHub Enterprise Cloud
shortTitle: Get started
intro: 'Learn how to configure {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Enterprise owners can configure {% data variables.product.prodname_actions %}.{% ifversion custom-org-roles %}<br><br>Users with the "Manage organization Actions policies" permission manage all settings on the "Actions General" settings page, except for self-hosted runners settings.<br><br>Users with the "Manage organization runners and runner groups" permission can manage GitHub-hosted runners, self-hosted runners, and runner groups, and control where self-hosted runners can be created.{% endif %}'
versions:
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-cloud
---

## About {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_actions %} is enabled for your enterprise by default. To get started using {% data variables.product.prodname_actions %} within your enterprise, you can manage the policies that control how enterprise members use {% data variables.product.prodname_actions %} and optionally add self-hosted runners to run workflows.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Managing policies for {% data variables.product.prodname_actions %}

You can use policies to control how enterprise members use {% data variables.product.prodname_actions %}. For example, you can restrict which actions are allowed and configure artifact and log retention. For more information, see "[AUTOTITLE](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise)."

## Adding runners

To run {% data variables.product.prodname_actions %} workflows, you need to use runners. {% data reusables.actions.about-runners %} If you use {% data variables.product.company_short %}-hosted runners, you will be be billed based on consumption after exhausting the minutes included in {% data variables.product.product_name %}, while self-hosted runners are free. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)."

For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners)."

If you choose self-hosted runners, you can add runners at the enterprise, organization, or repository levels. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners)."

{% ifversion custom-org-roles %}

## Provisioning fine-grained permissions for {% data variables.product.prodname_actions %}

Organization owners and users with the "Manage custom organization roles" permission can provision fine-grained permissions for users and teams in your organization. Provisioning fine-grained permissions for {% data variables.product.prodname_actions %} allows you to practice the principle of least privilege to secure settings in your {% data variables.product.prodname_actions %} CI/CD pipeline.

{% data reusables.actions.org-roles-for-gh-actions %}

For more information, see "[AUTOTITLE](/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-organization-roles)."

{% endif %}

{% data reusables.actions.general-security-hardening %}
