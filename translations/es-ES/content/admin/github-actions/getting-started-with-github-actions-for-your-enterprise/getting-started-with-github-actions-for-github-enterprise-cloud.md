---
title: Iniciar con las GitHub Actions para GitHub Enterprise Cloud
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

Las {% data variables.product.prodname_actions %} se habilitan predeterminadamente para tu empresa. Para comenzar a utilizar las {% data variables.product.prodname_actions %} dentro de tu empresa, puedes administrar las políticas que controlan cómo los miembros empresariales utilizan estas {% data variables.product.prodname_actions %} y, opcionalmente, agregar ejecutores auto-hospedados a los flujos de trabajo.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Administrar las políticas para las {% data variables.product.prodname_actions %}

Puedes utilizar políticas para controlar cómo los miembros empresariales utilizan las {% data variables.product.prodname_actions %}. Por ejemplo, puedes restringir qué acciones se permiten y configurar la retención de bitácoras y artefactos. Para obtener más información, consulta la sección "[Requerir las políticas de GitHub Actions para tu empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

## Agregar ejecutores

Para ejecutar flujos de trabajo de {% data variables.product.prodname_actions %}, necesitas utilizar ejecutores. {% data reusables.actions.about-runners %} Si utilizas ejecutores hospedados en {% data variables.product.company_short %}, se te facturará con base en el consumo después de agotar los minutos que se incluyen en {% data variables.product.product_name %}, mientras que los ejecutores auto-hospedados son gratuitos. Para obtener más información, consulta "[Acerca de la facturación para {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions)".

Para obtener más información, consulta "[Acerca de los ejecutores autoalojados](/actions/hosting-your-own-runners/about-self-hosted-runners)."

Si eliges utilizar ejecutores auto-hospedados, puedes agregarlos a nivel de empresa, organización o repositorio. Para obtener más información, consulta "[Agregar ejecutores autoalojados](/actions/hosting-your-own-runners/adding-self-hosted-runners)."

{% data reusables.actions.general-security-hardening %}
