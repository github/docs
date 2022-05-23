---
title: Executores auto-hospedados
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

The Self-hosted runners API allows you to register, view, and delete self-hosted runners. {% data reusables.actions.about-self-hosted-runners %} Para obter mais informações, consulte "[Hospedando seus próprios executores](/actions/hosting-your-own-runners)".

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %} deve ter a permissão de administração `` para repositórios ou a permissão `organization_self_hosted_runners` para as organizações. Os usuários autenticados devem ter acesso de administrador a repositórios ou organizações ou ao escopo `manage_runners:corporativo` para que as empresas usem esta API.
