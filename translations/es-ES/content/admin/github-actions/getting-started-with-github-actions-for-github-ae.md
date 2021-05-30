---
title: Comenzar con las GitHub Actions para GitHub AE
shortTitle: Comenzar con Acciones de GitHub
intro: 'Aprende a configurar las {% data variables.product.prodname_actions %} en {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Site administrators can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  github-ae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
---

{% data reusables.actions.ae-beta %}

Este artículo explica cómo los administradores de sitio pueden habilitar {% data variables.product.prodname_ghe_managed %} para utilizar {% data variables.product.prodname_actions %}.

### Administrar los permisos de acceso para {% data variables.product.prodname_actions %} en tu empresa

Puedes utilizar políticas para administrar el acceso a las {% data variables.product.prodname_actions %}. Para obtener más información, consulta la sección "[Requerir las políticas de GitHub Actions para tu empresa](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise)".

### Agregar ejecutores

{% note %}

**Nota:** Para agregar {% data variables.actions.hosted_runner %} a {% data variables.product.prodname_ghe_managed %}, tendrás que contactar al soporte de {% data variables.product.prodname_dotcom %}.

{% endnote %}

Para ejecutar los flujos de trabajo de {% data variables.product.prodname_actions %}, necesitas agregar ejecutores auto-hospedados. Puedes agregar ejecutores a nivel de empresa, organización o repositorio. Para obtener más información, consulta la sección "[Acerca de los {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/about-ae-hosted-runners)".


### Fortalecimiento de seguridad general para las {% data variables.product.prodname_actions %}

Si quieres aprender más acerca de las prácticas de seguridad para {% data variables.product.prodname_actions %}, consulta la sección "[Fortalecimiento de seguridad para las {% data variables.product.prodname_actions %}](/actions/learn-github-actions/security-hardening-for-github-actions)".
