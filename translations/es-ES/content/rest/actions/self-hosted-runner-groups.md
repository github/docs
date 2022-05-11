---
title: Grupos de ejecutores auto-hospedados
intro: La API de Grupos de Ejecutores Auto-Hospedados te permite administrar grupos para los ejecutores auto-hospedados.
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
---
 

## About the Self-hosted runner groups API

The Self-hosted runners groups API allows you manage groups of self-hosted runners. Para obtener más información, consulta la sección "[Administrar el acceso a los ejecutores auto-hospedados](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)".

La {% data reusables.actions.actions-authentication %} en las {% data variables.product.prodname_github_apps %} debe contar con el permiso de `administration` para los repositorios o aquél de `organization_self_hosted_runners` para las organizaciones. Los usuarios autenticados deben contar con acceso administrativo a los repositorios u organizaciones o con el alcance de `manage_runners:enterprise` para empresas si quieren utilizar esta API.
