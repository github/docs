---
title: Getting started with GitHub Actions for GitHub Enterprise Cloud
shortTitle: Empezar
intro: 'Aprende cómo configurar las {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Enterprise owners can configure {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---

## Acerca del {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_actions %} is enabled for your enterprise by default. To get started using {% data variables.product.prodname_actions %} within your enterprise, you can manage the policies that control how enterprise members use {% data variables.product.prodname_actions %} and optionally add self-hosted runners to run workflows.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Managing policies for {% data variables.product.prodname_actions %}

You can use policies to control how enterprise members use {% data variables.product.prodname_actions %}. For example, you can restrict which actions are allowed and configure artifact and log retention. Para obtener más información, consulta la sección "[Requerir las políticas de GitHub Actions para tu empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Agregar ejecutores

To run {% data variables.product.prodname_actions %} workflows, you need to use runners. {% data reusables.actions.about-runners %} If you use {% data variables.product.company_short %}-hosted runners, you will be be billed based on consumption after exhausting the minutes included in {% data variables.product.product_name %}, while self-hosted runners are free. Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".

Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

If you choose self-hosted runners, you can add runners at the enterprise, organization, or repository levels. Para obtener más información, consulta "[Agregar ejecutores autoalojados](/actions/hosting-your-own-runners/adding-self-hosted-runners)"

{% data reusables.actions.general-security-hardening %}
