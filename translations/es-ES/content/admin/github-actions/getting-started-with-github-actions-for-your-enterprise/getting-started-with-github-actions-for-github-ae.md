---
title: Comenzar con las GitHub Actions para GitHub AE
shortTitle: Empezar
intro: 'Learn about configuring {% data variables.product.prodname_actions %} on {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
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

Este artículo explica cómo los administradores de sitio pueden habilitar {% data variables.product.prodname_ghe_managed %} para utilizar {% data variables.product.prodname_actions %}.

{% data variables.product.prodname_actions %} is enabled for {% data variables.product.prodname_ghe_managed %} by default. To get started using {% data variables.product.prodname_actions %} within your enterprise, you need to manage access permissions for {% data variables.product.prodname_actions %} and add runners to run workflows.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Administrar los permisos de acceso para {% data variables.product.prodname_actions %} en tu empresa

Puedes utilizar políticas para administrar el acceso a las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Requerir las políticas de GitHub Actions para tu empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Agregar ejecutores

You can configure and host servers to run jobs for your enterprise on {% data variables.product.product_name %}. {% data reusables.actions.about-self-hosted-runners %} Para obtener más información, consulta "[Alojar tus propios ejecutores](/actions/hosting-your-own-runners)".

{% data reusables.actions.general-security-hardening %}
