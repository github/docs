---
title: Comenzar con las GitHub Actions para GitHub AE
shortTitle: Empezar
intro: 'Learn about configuring {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Enterprise owners can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
  - /admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae
---


## Acerca del {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_managed %}

{% data variables.product.prodname_actions %} is enabled for {% data variables.product.product_name %} by default. To get started using {% data variables.product.prodname_actions %} within your enterprise, you need to manage access permissions for {% data variables.product.prodname_actions %} and add runners to run workflows.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Administrar los permisos de acceso para {% data variables.product.prodname_actions %} en tu empresa

Puedes utilizar políticas para administrar el acceso a las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Requerir las políticas de GitHub Actions para tu empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Agregar ejecutores

You must configure and host your own machines to run jobs for your enterprise on {% data variables.product.product_name %}. {% data reusables.actions.about-self-hosted-runners %} For more information, see "[Getting started with self-hosted runners for your enterprise](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)" and "[Hosting your own runners](/actions/hosting-your-own-runners)."

{% data reusables.actions.general-security-hardening %}
