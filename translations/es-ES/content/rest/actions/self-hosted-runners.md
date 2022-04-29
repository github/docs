---
title: Ejecutores autoalojados
intro: 'The Self-hosted runners API allows you to register, view, and delete self-hosted runners.'
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
 

## About the Self-hosted runners API

The Self-hosted runners API allows you to register, view, and delete self-hosted runners. {% data reusables.actions.about-self-hosted-runners %} Para obtener más información, consulta "[Alojar tus propios ejecutores](/actions/hosting-your-own-runners)".

La {% data reusables.actions.actions-authentication %} en las {% data variables.product.prodname_github_apps %} debe contar con el permiso de `administration` para los repositorios o aquél de `organization_self_hosted_runners` para las organizaciones. Los usuarios autenticados deben contar con acceso administrativo a los repositorios u organizaciones o con el alcance de `manage_runners:enterprise` para empresas si quieren utilizar esta API.
