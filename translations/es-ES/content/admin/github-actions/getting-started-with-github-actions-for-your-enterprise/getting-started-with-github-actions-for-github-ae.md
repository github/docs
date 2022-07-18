---
title: Comenzar con las GitHub Actions para GitHub AE
shortTitle: Empezar
intro: 'Aprende sobre cómo configurar las {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_managed %}.'
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

Las {% data variables.product.prodname_actions %} se habilitan predeterminadamente para {% data variables.product.product_name %}. Para iniciar utilizando las {% data variables.product.prodname_actions %} dentro de tu empresa, necesitas administrar los permisos de acceso para las {% data variables.product.prodname_actions %} y agregar ejecutores para que ejecuten los flujos de trabajo.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Administrar los permisos de acceso para {% data variables.product.prodname_actions %} en tu empresa

Puedes utilizar políticas para administrar el acceso a las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Requerir las políticas de GitHub Actions para tu empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Agregar ejecutores

Debes configurar y hospedar tus propias máquinas para que ejecuten jobs para tu empresa en {% data variables.product.product_name %}. {% data reusables.actions.about-self-hosted-runners %} Para obtener más información, consulta las secciones "[Iniciar con los ejecutores auto-hospedados para tu empresa](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise)" y "[Hospedar tus propios ejecutores](/actions/hosting-your-own-runners)".

{% data reusables.actions.general-security-hardening %}
