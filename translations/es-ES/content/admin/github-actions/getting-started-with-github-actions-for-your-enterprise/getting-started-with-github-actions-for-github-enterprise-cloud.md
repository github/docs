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

{% data variables.product.prodname_actions %} is enabled for your enterprise by default. Para comenzar a utilizar las {% data variables.product.prodname_actions %} dentro de tu empresa, puedes administrar las políticas que controlan cómo los miembros empresariales utilizan estas {% data variables.product.prodname_actions %} y, opcionalmente, agregar ejecutores auto-hospedados a los flujos de trabajo.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Managing policies for {% data variables.product.prodname_actions %}

You can use policies to control how enterprise members use {% data variables.product.prodname_actions %}. For example, you can restrict which actions are allowed and configure artifact and log retention. Para obtener más información, consulta la sección "[Requerir las políticas de GitHub Actions para tu empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Agregar ejecutores

To run {% data variables.product.prodname_actions %} workflows, you need to use runners. {% data reusables.actions.about-runners %} Si utilizas ejecutores hospedados en {% data variables.product.company_short %}, se te facturará con base en el consumo después de agotar los minutos que se incluyen en {% data variables.product.product_name %}, mientras que los ejecutores auto-hospedados son gratuitos. Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".

Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

If you choose self-hosted runners, you can add runners at the enterprise, organization, or repository levels. Para obtener más información, consulta "[Agregar ejecutores autoalojados](/actions/hosting-your-own-runners/adding-self-hosted-runners)"

{% data reusables.actions.general-security-hardening %}
